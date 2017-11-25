"use strict";
angular.module("NextAtendimento", ["ngAnimate",
    "ngAria",
    "ngCookies",
    "ngMessages",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch",
    "ui.bootstrap",
    "ui.bootstrap.tabs",
    "smart-table"
]).config(["$routeProvider",
    function(a) {
        a.when("/", {
            redirectTo: "login"
        }).
        when("/login", {
            templateUrl: "views/login.html",
            controller: "LoginCtrl"
        }).
        when("/cad-guiche", {
            templateUrl: "views/cad-guiche.html",
            controller: "CadGuicheCtrl"
        }).
        when("/realizar-atendimento", {
            templateUrl: "views/realizar-atendimento.html",
            controller: "RealizarAtendimentoCtrl"
        }).
        when("/estatisticas", {
            templateUrl: "views/estatisticas.html",
            controller: "EstatisticasCtrl"
        }).
        otherwise({
            redirectTo: "login"
        })
    }
]).
factory("UsuarioFactory",

    function() {
        return {
            id: "",
            login: "",
            senha: ""
        }
    }).
factory("GuicheFactory",
        function() {
            return {
                id: "",
                numero: "",
                usuario: "",
                dataApertura: ""
            }
        }),
    angular.module("NextAtendimento").
controller("LoginCtrl", ["$scope", "$http", "$cookies", "UsuarioFactory",
        function(a, b, c, d) {
            a.pageTitle = "Painel de login", a.UsuarioFactory = d, a.usuario = {}, a.
            logar = function() {
                a.usuario = a.UsuarioFactory;
                var c = b.post("http://atendimento-api.azurewebsites.net/Usuario/validarUsuario", a.usuario);
                c.success(function(a, b, c, e) {
                        d.id = a.id, d.login = a.login, d.senha = a.senha, window.location = "#/cad-guiche"
                    }),
                    c.error(function(a, b, c, d) {
                        401 == b && alert("Usuário / senha incorretos")
                    })
            }
        }
    ]),
    angular.module("NextAtendimento").
controller("CadGuicheCtrl", ["$scope", "$http", "UsuarioFactory", "GuicheFactory",
    function(a, b, c, d) {
        a.GuicheFactory = d, a.guiche = {},
            a.guiche.estado = 0,
            a.guiche.usuario = {},
            a.guiche.usuario.id = c.id,
            a.guiche.usuario.login = c.login,
            a.guiche.usuario.senha = c.senha,
            a.apertura = function() {
                var
                    c = b.post("http://atendimento-api.azurewebsites.net/Guiche/registrarGuiche", a.guiche);
                c.success(function(a, b, c, e) {
                        d.id = a.id,
                            d.numero = a.numero,
                            d.usuario = a.usuario,
                            d.dataApertura = a.dataApertura,
                            window.location = "#/realizar-atendimento"
                    }),
                    c.error(function(a, b, c, d) {
                        401 == b && alert("Usuário / senha incorretos")
                    })
            }
    }
]), angular.module("NextAtendimento").controller("RealizarAtendimentoCtrl", ["$scope", "$http", "GuicheFactory", "$timeout", function(a, b, c, d) {
    a.GuicheFactory = c, a.guiche = {}, a.guiche.id = c.id, a.guiche.numero = c.numero, a.guiche.dataApertura = c.dataApertura, a.guiche.usuario = {}, a.guiche.usuario.id = c.usuario.id, a.guiche.usuario.login = c.usuario.login, a.guiche.usuario.senha = c.usuario.senha, a.proximaSenha = {}, a.chamaProximaSenha = function() {
        var c = b.post("http://atendimento-api.azurewebsites.net/Guiche/chamaProximaSenha", a.guiche);
        c.success(function(b, c, d, e) {
            a.proximaSenha.id = b.id, a.proximaSenha.senha = b.senha, a.proximaSenha.tipo = b.tipo, a.proximaSenha.dataEmissao = b.dataEmissao, a.carregaSenhasAguardando()
        }), c.error(function(a, b, c, d) {
            alert(428 == b ? "Não tem mais senhas aguardando !" : "Bom dia, por gentileza contate com o administrador.")
        })
    }, a.carregaSenhasAguardando = function() {
        var c = b.get("http://atendimento-api.azurewebsites.net/Senha/senhasAguardando");
        c.success(function(b, c, e, f) {
            a.senhas = b, d(a.carregaSenhasAguardando, 5e3)
        }), c.error(function(a, b, c, d) {
            console.log("Erro: " + JSON.stringify({
                data: a
            }))
        })
    }, a.carregaSenhasAguardando()
}]), angular.module("NextAtendimento").controller("EstatisticasCtrl", ["$scope", "$http", function(a, b) {
    a.atendimentos = {}, a.quantidadeAtendimentosPorGuiche = function() {
        var c = b.get("http://atendimento-api.azurewebsites.net/Atendimento/quantidadeAtendimentosPorGuiche");
        c.success(function(b, c, d, e) {
            a.atendimentos = b
        }), c.error(function(a, b, c, d) {
            console.log("Erro: " + JSON.stringify({
                data: a
            }))
        })
    }, a.getTotal = function() {
        for (var b = 0, c = 0; c < a.atendimentos.length; c++) {
            var d = a.atendimentos[c];
            b += d[1]
        }
        return b / a.atendimentos.length
    }, a.quantidadeAtendimentosPorGuiche()
}]);