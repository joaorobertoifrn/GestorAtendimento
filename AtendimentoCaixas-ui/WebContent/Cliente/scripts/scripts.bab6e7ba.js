"use strict";
angular.module("nextCliente", ["ngAnimate", "ngAria", "ngCookies", "ngMessages", "ngResource", "ngRoute", "ngSanitize", "ngTouch", "ui.bootstrap", "ui.bootstrap.tabs"]).config(["$routeProvider", function(a) {
    a.when("/", {
        redirectTo: "senha-guiche"
    }).when("/nova-senha", {
        templateUrl: "views/nova-senha.html",
        controller: "NovaSenhaCtrl"
    }).when("/senha-guiche", {
        templateUrl: "views/senha-guiche.html",
        controller: "SenhaGuicheCtrl"
    }).otherwise({
        redirectTo: "SenhaGuicheCtrl"
    })
}]), angular.module("nextCliente").controller("NovaSenhaCtrl", ["$scope", "$http", function(a, b) {
    var c = $('<div class="modal fade" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header">   <h1>Gerando senha . . . </h1></div><div class="modal-body">   <div class="progress progress-striped active">   <div class="bar" style="width: 100%;"></div></div></div></div></div></div>');
    a.senha = {}, a.gerarSenhaComum = function() {
        c.modal();
        var d = b.get("http://atendimento-api.azurewebsites.net/Senha/solicitarSenhaComum");
        d.success(function(b, d, e, f) {
            c.modal("hide"), a.senha.id = b.id, a.senha.senha = b.senha, a.senha.dataEmissao = b.dataEmissao, a.calcularTempoMedio()
        }), d.error(function(a, b, d, e) {
            c.modal("hide"), alert("Não foi possível realizar esta operação. Entre em contato com o responsável.")
        })
    }, a.gerarSenhaPreferencial = function() {
        c.modal();
        var d = b.get("http://atendimento-api.azurewebsites.net/Senha/solicitarSenhaPreferencial");
        d.success(function(b, d, e, f) {
            c.modal("hide"), a.senha.id = b.id, a.senha.senha = b.senha, a.senha.dataEmissao = b.dataEmissao, a.calcularTempoMedio()
        }), d.error(function(a, b, d, e) {
            c.modal("hide"), alert("Não foi possível realizar esta operação. Entre em contato com o responsável.")
        })
    }, a.tempoMedio, a.calcularTempoMedio = function() {
        var c = b.get("http://atendimento-api.azurewebsites.net/Atendimento/calcularTempoMedioEspera");
        c.success(function(b, c, d, e) {
            a.tempoMedio = b
        }), c.error(function(b, c, d, e) {
            428 != c && alert("Não foi possível realizar esta operação. Entre em contato com o responsável."), a.tempoMedio = "10"
        })
    }
}]), angular.module("nextCliente").controller("SenhaGuicheCtrl", ["$scope", "$http", "$timeout", function(a, b, c) {
    a.atendimetno = {}, a.verificaAtendimento = function() {
        var d = b.get("http://atendimento-api.azurewebsites.net/Atendimento/trazerUltimoAtendimento");
        d.success(function(b, d, e, f) {
            console.log("Verificando..."), a.atendimetno.id = b.id, a.atendimetno.senha = b.senha, a.atendimetno.guiche = b.guiche, a.atendimetno.dataAtendido = b.dataAtendido, c(a.verificaAtendimento, 1e3)
        }), d.error(function(b, d, e, f) {
            428 == d && console.log("Não existem atendimentos, aguarde"), c(a.verificaAtendimento, 1e3)
        })
    }, a.trazUltimosTresAtendimentos = function() {
        var d = b.get("http://atendimento-api.azurewebsites.net/Atendimento/trazerUltimosTresAtendimento");
        d.success(function(b, d, e, f) {
            console.log(b), a.ultimosTresAtendimentos = b, c(a.trazUltimosTresAtendimentos, 2e4)
        }), d.error(function(a, b, c, d) {
            428 == b && console.log("Não existem atendimentos, aguarde")
        })
    }, a.verificaAtendimento(), a.trazUltimosTresAtendimentos()
}]);