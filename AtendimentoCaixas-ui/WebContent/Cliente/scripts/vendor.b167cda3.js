if (function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a) {
            var b = "length" in a && a.length,
                c = _.type(a);
            return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function d(a, b, c) {
            if (_.isFunction(b)) return _.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return _.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (ha.test(b)) return _.filter(b, a, c);
                b = _.filter(b, a)
            }
            return _.grep(a, function(a) {
                return U.call(b, a) >= 0 !== c
            })
        }

        function e(a, b) {
            for (;
                (a = a[b]) && 1 !== a.nodeType;);
            return a
        }

        function f(a) {
            var b = oa[a] = {};
            return _.each(a.match(na) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function g() {
            Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
        }

        function h() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = _.expando + h.uid++
        }

        function i(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                    } catch (e) {}
                    sa.set(a, b, c)
                } else c = void 0;
            return c
        }

        function j() {
            return !0
        }

        function k() {
            return !1
        }

        function l() {
            try {
                return Z.activeElement
            } catch (a) {}
        }

        function m(a, b) {
            return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function n(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function o(a) {
            var b = Ka.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function p(a, b) {
            for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
        }

        function q(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
                }
                sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
            }
        }

        function r(a, b) {
            var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
        }

        function s(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }

        function t(b, c) {
            var d, e = _(c.createElement(b)).appendTo(c.body),
                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
            return e.detach(), f
        }

        function u(a) {
            var b = Z,
                c = Oa[a];
            return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
        }

        function v(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
        }

        function w(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function x(a, b) {
            if (b in a) return b;
            for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
                if (b = Xa[e] + c, b in a) return b;
            return d
        }

        function y(a, b, c) {
            var d = Ta.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function z(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
            return g
        }

        function A(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Ra(a),
                g = "border-box" === _.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
                d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function B(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function C(a, b, c, d, e) {
            return new C.prototype.init(a, b, c, d, e)
        }

        function D() {
            return setTimeout(function() {
                Ya = void 0
            }), Ya = _.now()
        }

        function E(a, b) {
            var c, d = 0,
                e = {
                    height: a
                };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e
        }

        function F(a, b, c) {
            for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function G(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = {},
                n = a.style,
                o = a.nodeType && xa(a),
                p = ra.get(a, "fxshow");
            c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, l.always(function() {
                l.always(function() {
                    h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
                n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], $a.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0
                    }
                    m[d] = p && p[d] || _.style(a, d)
                } else j = void 0;
            if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
            else {
                p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                    _(a).hide()
                }), l.done(function() {
                    var b;
                    ra.remove(a, "fxshow");
                    for (b in m) _.style(a, b, m[b])
                });
                for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function H(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function I(a, b, c) {
            var d, e, f = 0,
                g = bb.length,
                h = _.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: _.extend({}, b),
                    opts: _.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: Ya || D(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (H(k, j.opts.specialEasing); g > f; f++)
                if (d = bb[f].call(j, a, k, j.opts)) return d;
            return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function J(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(na) || [];
                if (_.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function K(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, _.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === tb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function L(a, b) {
            var c, d, e = _.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && _.extend(!0, a, d), a
        }

        function M(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function N(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }

        function O(a, b, c, d) {
            var e;
            if (_.isArray(b)) _.each(b, function(b, e) {
                c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== _.type(b)) d(a, b);
            else
                for (e in b) O(a + "[" + e + "]", b[e], c, d)
        }

        function P(a) {
            return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var Q = [],
            R = Q.slice,
            S = Q.concat,
            T = Q.push,
            U = Q.indexOf,
            V = {},
            W = V.toString,
            X = V.hasOwnProperty,
            Y = {},
            Z = a.document,
            $ = "2.1.4",
            _ = function(a, b) {
                return new _.fn.init(a, b)
            },
            aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ba = /^-ms-/,
            ca = /-([\da-z])/gi,
            da = function(a, b) {
                return b.toUpperCase()
            };
        _.fn = _.prototype = {
            jquery: $,
            constructor: _,
            selector: "",
            length: 0,
            toArray: function() {
                return R.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
            },
            pushStack: function(a) {
                var b = _.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return _.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack(_.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(R.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: T,
            sort: Q.sort,
            splice: Q.splice
        }, _.extend = _.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }, _.extend({
            expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === _.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
            },
            isPlainObject: function(a) {
                return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
            },
            globalEval: function(a) {
                var b, c = eval;
                a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
            },
            camelCase: function(a) {
                return a.replace(ba, "ms-").replace(ca, da)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(aa, "")
            },
            makeArray: function(a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : U.call(b, a, c)
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && i.push(e);
                return S.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                    return a.apply(b || this, d.concat(R.call(arguments)))
                }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
            },
            now: Date.now,
            support: Y
        }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            V["[object " + b + "]"] = b.toLowerCase()
        });
        var ea = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
                if (!d && I) {
                    if (11 !== h && (e = sa.exec(a)))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                        }
                    if (v.qsa && (!J || !J.test(a))) {
                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                        }
                        if (p) try {
                            return $.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {} finally {
                            l || b.removeAttribute("id")
                        }
                    }
                }
                return B(a.replace(ia, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];
                return a
            }

            function d(a) {
                return a[N] = !0, a
            }

            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return d(function(b) {
                    return b = +b, d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function k(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function l() {}

            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function n(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g)) return !0
                            }
                }
            }

            function o(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function p(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
                return d
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? r : q(r, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                        return a === b
                    }, g, !0), j = n(function(a) {
                        return aa(b, a) > -1
                    }, g, !0), k = [function(a, c, d) {
                        var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                        return b = null, e
                    }]; e > h; h++)
                    if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                    else {
                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                        }
                        k.push(c)
                    }
                return o(k)
            }

            function t(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            r = [],
                            s = C,
                            t = d || f && w.find.TAG("*", j),
                            u = P += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) {
                                        i.push(k);
                                        break
                                    }
                                j && (P = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, r, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                                r = q(r)
                            }
                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (P = u, C = s), p
                    };
                return e ? d(g) : g
            }
            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = c(),
                S = c(),
                T = c(),
                U = function(a, b) {
                    return a === b && (E = !0), 0
                },
                V = 1 << 31,
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ea = da.replace("w", "w#"),
                fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
                ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                ha = new RegExp(ca + "+", "g"),
                ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ja = new RegExp("^" + ca + "*," + ca + "*"),
                ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                ma = new RegExp(ga),
                na = new RegExp("^" + ea + "$"),
                oa = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + fa),
                    PSEUDO: new RegExp("^" + ga),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                },
                pa = /^(?:input|select|textarea|button)$/i,
                qa = /^h\d$/i,
                ra = /^[^{]+\{\s*\[native \w/,
                sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ta = /[+~]/,
                ua = /'|\\/g,
                va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                wa = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                xa = function() {
                    F()
                };
            try {
                $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
            } catch (ya) {
                $ = {
                    apply: X.length ? function(a, b) {
                        Z.apply(a, _.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            v = b.support = {}, y = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, F = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), v.getElementsByTagName = e(function(a) {
                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
                }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                    return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
                }), v.getById ? (w.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete w.find.ID, w.filter.ID = function(a) {
                    var b = a.replace(va, wa);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                    return I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                }), e(function(a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                    v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, U = b ? function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c, e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                    if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                    if (f === h) return g(a, b);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = b; c = c.parentNode;) j.unshift(c);
                    for (; i[e] === j[e];) e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, d) : G
            }, b.matches = function(a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return b(c, G, null, [a]).length > 0
            }, b.contains = function(a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return D = null, a
            }, x = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d++];) c += x(b);
                return c
            }, w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(va, wa).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [P, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = A(a.replace(ia, "$1"));
                        return e[N] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return a = a.replace(va, wa),
                            function(b) {
                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                            }
                    }),
                    lang: d(function(a) {
                        return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === H
                    },
                    focus: function(a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !w.pseudos.empty(a)
                    },
                    header: function(a) {
                        return qa.test(a.nodeName)
                    },
                    input: function(a) {
                        return pa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: j(function() {
                        return [0]
                    }),
                    last: j(function(a, b) {
                        return [b - 1]
                    }),
                    eq: j(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: j(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: j(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: j(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (u in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[u] = h(u);
            for (u in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h;) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ia, " ")
                    }), h = h.slice(d.length));
                    for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }, A = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)), f.selector = a
                }
                return f
            }, B = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    l = !d && z(a = j.selector || a);
                if (c = c || [], 1 === l.length) {
                    if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                        if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                            break
                        }
                }
                return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
            }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), e(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), v.attributes && e(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), e(function(a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
        var fa = _.expr.match.needsContext,
            ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ha = /^.[^:#\[\.,]*$/;
        _.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, _.fn.extend({
            find: function(a) {
                var b, c = this.length,
                    d = [],
                    e = this;

                if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (_.contains(e[b], this)) return !0
                }));
                for (b = 0; c > b; b++) _.find(a, e[b], d);
                return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
            },
            filter: function(a) {
                return this.pushStack(d(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(d(this, a || [], !0))
            },
            is: function(a) {
                return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
            }
        });
        var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ka = _.fn.init = function(a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                            for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
            };
        ka.prototype = _.fn, ia = _(Z);
        var la = /^(?:parents|prev(?:Until|All))/,
            ma = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        _.extend({
            dir: function(a, b, c) {
                for (var d = [], e = void 0 !== c;
                    (a = a[b]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) {
                        if (e && _(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }), _.fn.extend({
            has: function(a) {
                var b = _(a, this),
                    c = b.length;
                return this.filter(function() {
                    for (var a = 0; c > a; a++)
                        if (_.contains(this, b[a])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? _.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), _.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return _.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return _.dir(a, "parentNode", c)
            },
            next: function(a) {
                return e(a, "nextSibling")
            },
            prev: function(a) {
                return e(a, "previousSibling")
            },
            nextAll: function(a) {
                return _.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return _.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return _.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return _.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return _.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return _.sibling(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || _.merge([], a.childNodes)
            }
        }, function(a, b) {
            _.fn[a] = function(c, d) {
                var e = _.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
            }
        });
        var na = /\S+/g,
            oa = {};
        _.Callbacks = function(a) {
            a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
            var b, c, d, e, g, h, i = [],
                j = !a.once && [],
                k = function(f) {
                    for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                        if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                            b = !1;
                            break
                        }
                    d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
                },
                l = {
                    add: function() {
                        if (i) {
                            var c = i.length;
                            ! function f(b) {
                                _.each(b, function(b, c) {
                                    var d = _.type(c);
                                    "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                                })
                            }(arguments), d ? g = i.length : b && (e = c, k(b))
                        }
                        return this
                    },
                    remove: function() {
                        return i && _.each(arguments, function(a, b) {
                            for (var c;
                                (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                        }), this
                    },
                    has: function(a) {
                        return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                    },
                    empty: function() {
                        return i = [], g = 0, this
                    },
                    disable: function() {
                        return i = j = b = void 0, this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return j = void 0, b || l.disable(), this
                    },
                    locked: function() {
                        return !j
                    },
                    fireWith: function(a, b) {
                        return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!c
                    }
                };
            return l
        }, _.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", _.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return _.Deferred(function(c) {
                                _.each(b, function(b, f) {
                                    var g = _.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? _.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, _.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = R.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : _.Deferred(),
                    j = function(a, c, d) {
                        return function(e) {
                            c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var pa;
        _.fn.ready = function(a) {
            return _.ready.promise().done(a), this
        }, _.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? _.readyWait++ : _.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
            }
        }), _.ready.promise = function(b) {
            return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
        }, _.ready.promise();
        var qa = _.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === _.type(c)) {
                e = !0;
                for (h in c) _.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(_(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        };
        _.acceptData = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
            key: function(a) {
                if (!h.accepts(a)) return 0;
                var b = {},
                    c = a[this.expando];
                if (!c) {
                    c = h.uid++;
                    try {
                        b[this.expando] = {
                            value: c
                        }, Object.defineProperties(a, b)
                    } catch (d) {
                        b[this.expando] = c, _.extend(a, b)
                    }
                }
                return this.cache[c] || (this.cache[c] = {}), c
            },
            set: function(a, b, c) {
                var d, e = this.key(a),
                    f = this.cache[e];
                if ("string" == typeof b) f[b] = c;
                else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
                else
                    for (d in b) f[d] = b[d];
                return f
            },
            get: function(a, b) {
                var c = this.cache[this.key(a)];
                return void 0 === b ? c : c[b]
            },
            access: function(a, b, c) {
                var d;
                return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
            },
            remove: function(a, b) {
                var c, d, e, f = this.key(a),
                    g = this.cache[f];
                if (void 0 === b) this.cache[f] = {};
                else {
                    _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                    for (; c--;) delete g[d[c]]
                }
            },
            hasData: function(a) {
                return !_.isEmptyObject(this.cache[a[this.expando]] || {})
            },
            discard: function(a) {
                a[this.expando] && delete this.cache[a[this.expando]]
            }
        };
        var ra = new h,
            sa = new h,
            ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ua = /([A-Z])/g;
        _.extend({
            hasData: function(a) {
                return sa.hasData(a) || ra.hasData(a)
            },
            data: function(a, b, c) {
                return sa.access(a, b, c)
            },
            removeData: function(a, b) {
                sa.remove(a, b)
            },
            _data: function(a, b, c) {
                return ra.access(a, b, c)
            },
            _removeData: function(a, b) {
                ra.remove(a, b)
            }
        }), _.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                        ra.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    sa.set(this, a)
                }) : qa(this, function(b) {
                    var c, d = _.camelCase(a);
                    if (f && void 0 === b) {
                        if (c = sa.get(f, a), void 0 !== c) return c;
                        if (c = sa.get(f, d), void 0 !== c) return c;
                        if (c = i(f, d, void 0), void 0 !== c) return c
                    } else this.each(function() {
                        var c = sa.get(this, d);
                        sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                    })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    sa.remove(this, a)
                })
            }
        }), _.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = _.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = _._queueHooks(a, b),
                    g = function() {
                        _.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return ra.get(a, c) || ra.access(a, c, {
                    empty: _.Callbacks("once memory").add(function() {
                        ra.remove(a, [b + "queue", c])
                    })
                })
            }
        }), _.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = _.queue(this, a, b);
                    _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    _.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = _.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wa = ["Top", "Right", "Bottom", "Left"],
            xa = function(a, b) {
                return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
            },
            ya = /^(?:checkbox|radio)$/i;
        ! function() {
            var a = Z.createDocumentFragment(),
                b = a.appendChild(Z.createElement("div")),
                c = Z.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var za = "undefined";
        Y.focusinBubbles = "onfocusin" in a;
        var Aa = /^key/,
            Ba = /^(?:mouse|pointer|contextmenu)|click/,
            Ca = /^(?:focusinfocus|focusoutblur)$/,
            Da = /^([^.]*)(?:\.(.+)|)$/;
        _.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
                if (q)
                    for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                            return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                        }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && _.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(na) || [""], j = b.length; j--;)
                        if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                        } else
                            for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                    _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || Z],
                    n = X.call(b, "type") ? b.type : b,
                    o = X.call(b, "namespace") ? b.namespace.split(".") : [];
                if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                    if (!e && !l.noBubble && !_.isWindow(d)) {
                        for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                        h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                    }
                    for (f = 0;
                        (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                    return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
                }
            },
            dispatch: function(a) {
                a = _.event.fix(a);
                var b, c, d, e, f, g = [],
                    h = R.call(arguments),
                    i = (ra.get(this, "events") || {})[a.type] || [],
                    j = _.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = _.event.handlers.call(this, a, i), b = 0;
                        (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem, c = 0;
                            (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i !== this; i = i.parentNode || this)
                        if (i.disabled !== !0 || "click" !== a.type) {
                            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button;
                    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[_.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== l() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === l() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(a) {
                        return _.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = _.extend(new _.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, _.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }, _.Event = function(a, b) {
            return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
        }, _.Event.prototype = {
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, _.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            _.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), Y.focusinBubbles || _.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                _.event.simulate(b, a.target, _.event.fix(a), !0)
            };
            _.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = ra.access(d, b);
                    e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = ra.access(d, b) - 1;
                    e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
                }
            }
        }), _.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b, b = void 0);
                    for (g in a) this.on(g, b, c, a[g], e);
                    return this
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
                else if (!d) return this;
                return 1 === e && (f = d, d = function(a) {
                    return _().off(a), f.apply(this, arguments)
                }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                    _.event.add(this, a, d, c, b)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                    _.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    _.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? _.event.trigger(a, b, c, !0) : void 0
            }
        });
        var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Fa = /<([\w:]+)/,
            Ga = /<|&#?\w+;/,
            Ha = /<(?:script|style|link)/i,
            Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ja = /^$|\/(?:java|ecma)script/i,
            Ka = /^true\/(.*)/,
            La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ma = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = _.contains(a.ownerDocument, a);
                if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                    for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                    else q(a, h);
                return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                    if (e = a[m], e || 0 === e)
                        if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                        else if (Ga.test(e)) {
                    for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                    _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                } else l.push(b.createTextNode(e));
                for (k.textContent = "", m = 0; e = l[m++];)
                    if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                        for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
                return k
            },
            cleanData: function(a) {
                for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                    if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                        if (b.events)
                            for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                        ra.cache[e] && delete ra.cache[e]
                    }
                    delete sa.cache[c[sa.expando]]
                }
            }
        }), _.fn.extend({
            text: function(a) {
                return qa(this, function(a) {
                    return void 0 === a ? _.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = m(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = m(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return _.clone(this, a, b)
                })
            },
            html: function(a) {
                return qa(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Ea, "<$1></$2>");
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
                }), a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = S.apply([], a);
                var c, d, e, f, g, h, i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    p = _.isFunction(m);
                if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                    for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                    if (f)
                        for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
                }
                return this
            }
        }), _.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            _.fn[a] = function(a) {
                for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var Na, Oa = {},
            Pa = /^margin/,
            Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
            Ra = function(b) {
                return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
            };
        ! function() {
            function b() {
                g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
                var b = a.getComputedStyle(g, null);
                c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
            }
            var c, d, e = Z.documentElement,
                f = Z.createElement("div"),
                g = Z.createElement("div");
            g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
                pixelPosition: function() {
                    return b(), c
                },
                boxSizingReliable: function() {
                    return null == d && b(), d
                },
                reliableMarginRight: function() {
                    var b, c = g.appendChild(Z.createElement("div"));
                    return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
                }
            }))
        }(), _.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };
        var Sa = /^(none|table(?!-c[ea]).+)/,
            Ta = new RegExp("^(" + va + ")(.*)$", "i"),
            Ua = new RegExp("^([+-])=(" + va + ")", "i"),
            Va = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Wa = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Xa = ["Webkit", "O", "Moz", "ms"];
        _.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = v(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = _.camelCase(b),
                        i = a.style;
                    return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = _.camelCase(b);
                return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
            }
        }), _.each(["height", "width"], function(a, b) {
            _.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                        return A(a, b, d)
                    }) : A(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && Ra(a);
                    return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
            return b ? _.swap(a, {
                display: "inline-block"
            }, v, [a, "marginRight"]) : void 0
        }), _.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            _.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Pa.test(a) || (_.cssHooks[a + b].set = y)
        }), _.fn.extend({
            css: function(a, b) {
                return qa(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (_.isArray(b)) {
                        for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return B(this, !0)
            },
            hide: function() {
                return B(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    xa(this) ? _(this).show() : _(this).hide()
                })
            }
        }), _.Tween = C, C.prototype = {
            constructor: C,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = C.propHooks[this.prop];
                return a && a.get ? a.get(this) : C.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = C.propHooks[this.prop];
                return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
            }
        }, C.prototype.init.prototype = C.prototype, C.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, _.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, _.fx = C.prototype.init, _.fx.step = {};
        var Ya, Za, $a = /^(?:toggle|show|hide)$/,
            _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
            ab = /queueHooks$/,
            bb = [G],
            cb = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = _a.exec(b),
                        f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                        g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        _.Animation = _.extend(I, {
                tweener: function(a, b) {
                    _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
                },
                prefilter: function(a, b) {
                    b ? bb.unshift(a) : bb.push(a)
                }
            }), _.speed = function(a, b, c) {
                var d = a && "object" == typeof a ? _.extend({}, a) : {
                    complete: c || !c && b || _.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !_.isFunction(b) && b
                };
                return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                    _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
                }, d
            }, _.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(xa).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function(a, b, c, d) {
                    var e = _.isEmptyObject(a),
                        f = _.speed(b, c, d),
                        g = function() {
                            var b = I(this, _.extend({}, a), f);
                            (e || ra.get(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = _.timers,
                            g = ra.get(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        (b || !c) && _.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = ra.get(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = _.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, _.queue(this, a, []),
                            e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), _.each(["toggle", "show", "hide"], function(a, b) {
                var c = _.fn[b];
                _.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
                }
            }), _.each({
                slideDown: E("show"),
                slideUp: E("hide"),
                slideToggle: E("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(a, b) {
                _.fn[a] = function(a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), _.timers = [], _.fx.tick = function() {
                var a, b = 0,
                    c = _.timers;
                for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                c.length || _.fx.stop(), Ya = void 0
            }, _.fx.timer = function(a) {
                _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
            }, _.fx.interval = 13, _.fx.start = function() {
                Za || (Za = setInterval(_.fx.tick, _.fx.interval))
            }, _.fx.stop = function() {
                clearInterval(Za), Za = null
            }, _.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, _.fn.delay = function(a, b) {
                return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() {
                        clearTimeout(d)
                    }
                })
            },
            function() {
                var a = Z.createElement("input"),
                    b = Z.createElement("select"),
                    c = b.appendChild(Z.createElement("option"));
                a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
            }();
        var db, eb, fb = _.expr.attrHandle;
        _.fn.extend({
            attr: function(a, b) {
                return qa(this, _.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    _.removeAttr(this, a)
                })
            }
        }), _.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(na);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), eb = {
            set: function(a, b, c) {
                return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = fb[b] || _.find.attr;
            fb[b] = function(a, b, d) {
                var e, f;
                return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
            }
        });
        var gb = /^(?:input|select|textarea|button)$/i;
        _.fn.extend({
            prop: function(a, b) {
                return qa(this, _.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[_.propFix[a] || a]
                })
            }
        }), _.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                    }
                }
            }
        }), Y.optSelected || (_.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            }
        }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            _.propFix[this.toLowerCase()] = this
        });
        var hb = /[\t\r\n\f]/g;
        _.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if (_.isFunction(a)) return this.each(function(b) {
                    _(this).addClass(a.call(this, b, this.className))
                });
                if (h)
                    for (b = (a || "").match(na) || []; j > i; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = _.trim(d), c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if (_.isFunction(a)) return this.each(function(b) {
                    _(this).removeClass(a.call(this, b, this.className))
                });
                if (h)
                    for (b = (a || "").match(na) || []; j > i; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                    _(this).toggleClass(a.call(this, c, this.className, b), b)
                } : function() {
                    if ("string" === c)
                        for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
                return !1
            }
        });
        var ib = /\r/g;
        _.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0]; {
                    if (arguments.length) return d = _.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e) return b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)
                }
            }
        }), _.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = _.find.attr(a, "value");
                        return null != b ? b : _.trim(_.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                                if (b = _(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), _.each(["radio", "checkbox"], function() {
            _.valHooks[this] = {
                set: function(a, b) {
                    return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
                }
            }, Y.checkOn || (_.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            _.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), _.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var jb = _.now(),
            kb = /\?/;
        _.parseJSON = function(a) {
            return JSON.parse(a + "")
        }, _.parseXML = function(a) {
            var b, c;
            if (!a || "string" != typeof a) return null;
            try {
                c = new DOMParser, b = c.parseFromString(a, "text/xml")
            } catch (d) {
                b = void 0
            }
            return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
        };
        var lb = /#.*$/,
            mb = /([?&])_=[^&]*/,
            nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            pb = /^(?:GET|HEAD)$/,
            qb = /^\/\//,
            rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            sb = {},
            tb = {},
            ub = "*/".concat("*"),
            vb = a.location.href,
            wb = rb.exec(vb.toLowerCase()) || [];
        _.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: vb,
                type: "GET",
                isLocal: ob.test(wb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ub,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": _.parseJSON,
                    "text xml": _.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
            },
            ajaxPrefilter: J(sb),
            ajaxTransport: J(tb),
            ajax: function(a, b) {
                function c(a, b, c, g) {
                    var i, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                    o = _.Deferred(),
                    p = _.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!g)
                                    for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                                b = g[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === t ? f : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return t || (l.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || u;
                            return d && d.abort(b), c(0, b), this
                        }
                    };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
                j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
                for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                u = "abort";
                for (k in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) v[k](l[k]);
                if (d = K(tb, l, b, v)) {
                    v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1, d.send(r, c)
                    } catch (w) {
                        if (!(2 > t)) throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) {
                return _.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return _.get(a, void 0, b, "script")
            }
        }), _.each(["get", "post"], function(a, b) {
            _[b] = function(a, c, d, e) {
                return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), _._evalUrl = function(a) {
            return _.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, _.fn.extend({
            wrapAll: function(a) {
                var b;
                return _.isFunction(a) ? this.each(function(b) {
                    _(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this)
            },
            wrapInner: function(a) {
                return this.each(_.isFunction(a) ? function(b) {
                    _(this).wrapInner(a.call(this, b))
                } : function() {
                    var b = _(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = _.isFunction(a);
                return this.each(function(c) {
                    _(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
                }).end()
            }
        }), _.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0
        }, _.expr.filters.visible = function(a) {
            return !_.expr.filters.hidden(a)
        };
        var xb = /%20/g,
            yb = /\[\]$/,
            zb = /\r?\n/g,
            Ab = /^(?:submit|button|image|reset|file)$/i,
            Bb = /^(?:input|select|textarea|keygen)/i;
        _.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) O(c, a[c], b, e);
            return d.join("&").replace(xb, "+")
        }, _.fn.extend({
            serialize: function() {
                return _.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = _.prop(this, "elements");
                    return a ? _.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
                }).map(function(a, b) {
                    var c = _(this).val();
                    return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(zb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(zb, "\r\n")
                    }
                }).get()
            }
        }), _.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (a) {}
        };
        var Cb = 0,
            Db = {},
            Eb = {
                0: 200,
                1223: 204
            },
            Fb = _.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in Db) Db[a]()
        }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
            var b;
            return Y.cors || Fb && !a.crossDomain ? {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Cb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) f.setRequestHeader(e, c[e]);
                    b = function(a) {
                        return function() {
                            b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                                text: f.responseText
                            } : void 0, f.getAllResponseHeaders()))
                        }
                    }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                    try {
                        f.send(a.hasContent && a.data || null)
                    } catch (h) {
                        if (b) throw h
                    }
                },
                abort: function() {
                    b && b()
                }
            } : void 0
        }), _.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return _.globalEval(a), a
                }
            }
        }), _.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), _.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(d, e) {
                        b = _("<script>").prop({
                            async: !0,
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), Z.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var Gb = [],
            Hb = /(=)\?(?=&|$)|\?\?/;
        _.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Gb.pop() || _.expando + "_" + jb++;
                return this[a] = !0, a
            }
        }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || _.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), _.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || Z;
            var d = ga.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
        };
        var Ib = _.fn.load;
        _.fn.load = function(a, b, c) {
            if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
        }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            _.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), _.expr.filters.animated = function(a) {
            return _.grep(_.timers, function(b) {
                return a === b.elem
            }).length
        };
        var Jb = a.document.documentElement;
        _.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = _.css(a, "position"),
                    l = _(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, _.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    _.offset.setOffset(this, a, b)
                });
                var b, c, d = this[0],
                    e = {
                        top: 0,
                        left: 0
                    },
                    f = d && d.ownerDocument;
                if (f) return b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - _.css(c, "marginTop", !0),
                        left: b.left - d.left - _.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                    return a || Jb
                })
            }
        }), _.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(b, c) {
            var d = "pageYOffset" === c;
            _.fn[b] = function(e) {
                return qa(this, function(b, e, f) {
                    var g = P(b);
                    return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
                }, b, e, arguments.length, null)
            }
        }), _.each(["top", "left"], function(a, b) {
            _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
                return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
            })
        }), _.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            _.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                _.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return qa(this, function(b, c, d) {
                        var e;
                        return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), _.fn.size = function() {
            return this.length
        }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return _
        });
        var Kb = a.jQuery,
            Lb = a.$;
        return _.noConflict = function(b) {
            return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
        }, typeof b === za && (a.jQuery = a.$ = _), _
    }), function(a, b, c) {
        "use strict";

        function d(a, b) {
            return b = b || Error,
                function() {
                    var c, d, e = arguments[0],
                        f = "[" + (a ? a + ":" : "") + e + "] ",
                        g = arguments[1],
                        h = arguments;
                    for (c = f + g.replace(/\{\d+\}/g, function(a) {
                            var b = +a.slice(1, -1);
                            return b + 2 < h.length ? ma(h[b + 2]) : a
                        }), c = c + "\nhttp://errors.angularjs.org/1.3.15/" + (a ? a + "/" : "") + e, d = 2; d < arguments.length; d++) c = c + (2 == d ? "?" : "&") + "p" + (d - 2) + "=" + encodeURIComponent(ma(arguments[d]));
                    return new b(c)
                }
        }

        function e(a) {
            if (null == a || z(a)) return !1;
            var b = a.length;
            return a.nodeType === sd && b ? !0 : u(a) || ld(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function f(a, b, c) {
            var d, g;
            if (a)
                if (x(a))
                    for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a);
                else if (ld(a) || e(a)) {
                var h = "object" != typeof a;
                for (d = 0, g = a.length; g > d; d++)(h || d in a) && b.call(c, a[d], d, a)
            } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a);
            else
                for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
            return a
        }

        function g(a) {
            return Object.keys(a).sort()
        }

        function h(a, b, c) {
            for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
            return d
        }

        function i(a) {
            return function(b, c) {
                a(c, b)
            }
        }

        function j() {
            return ++jd
        }

        function k(a, b) {
            b ? a.$$hashKey = b : delete a.$$hashKey
        }

        function l(a) {
            for (var b = a.$$hashKey, c = 1, d = arguments.length; d > c; c++) {
                var e = arguments[c];
                if (e)
                    for (var f = Object.keys(e), g = 0, h = f.length; h > g; g++) {
                        var i = f[g];
                        a[i] = e[i]
                    }
            }
            return k(a, b), a
        }

        function m(a) {
            return parseInt(a, 10)
        }

        function n(a, b) {
            return l(Object.create(a), b)
        }

        function o() {}

        function p(a) {
            return a
        }

        function q(a) {
            return function() {
                return a
            }
        }

        function r(a) {
            return "undefined" == typeof a
        }

        function s(a) {
            return "undefined" != typeof a
        }

        function t(a) {
            return null !== a && "object" == typeof a
        }

        function u(a) {
            return "string" == typeof a
        }

        function v(a) {
            return "number" == typeof a
        }

        function w(a) {
            return "[object Date]" === gd.call(a)
        }

        function x(a) {
            return "function" == typeof a
        }

        function y(a) {
            return "[object RegExp]" === gd.call(a)
        }

        function z(a) {
            return a && a.window === a
        }

        function A(a) {
            return a && a.$evalAsync && a.$watch
        }

        function B(a) {
            return "[object File]" === gd.call(a)
        }

        function C(a) {
            return "[object FormData]" === gd.call(a)
        }

        function D(a) {
            return "[object Blob]" === gd.call(a)
        }

        function E(a) {
            return "boolean" == typeof a
        }

        function F(a) {
            return a && x(a.then)
        }

        function G(a) {
            return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
        }

        function H(a) {
            var b, c = {},
                d = a.split(",");
            for (b = 0; b < d.length; b++) c[d[b]] = !0;
            return c
        }

        function I(a) {
            return Wc(a.nodeName || a[0] && a[0].nodeName)
        }

        function J(a, b) {
            var c = a.indexOf(b);
            return c >= 0 && a.splice(c, 1), b
        }

        function K(a, b, c, d) {
            if (z(a) || A(a)) throw hd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            if (b) {
                if (a === b) throw hd("cpi", "Can't copy! Source and destination are identical.");
                if (c = c || [], d = d || [], t(a)) {
                    var e = c.indexOf(a);
                    if (-1 !== e) return d[e];
                    c.push(a), d.push(b)
                }
                var g;
                if (ld(a)) {
                    b.length = 0;
                    for (var h = 0; h < a.length; h++) g = K(a[h], null, c, d), t(a[h]) && (c.push(a[h]), d.push(g)), b.push(g)
                } else {
                    var i = b.$$hashKey;
                    ld(b) ? b.length = 0 : f(b, function(a, c) {
                        delete b[c]
                    });
                    for (var j in a) a.hasOwnProperty(j) && (g = K(a[j], null, c, d), t(a[j]) && (c.push(a[j]), d.push(g)), b[j] = g);
                    k(b, i)
                }
            } else if (b = a, a)
                if (ld(a)) b = K(a, [], c, d);
                else if (w(a)) b = new Date(a.getTime());
            else if (y(a)) b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex;
            else if (t(a)) {
                var l = Object.create(Object.getPrototypeOf(a));
                b = K(a, l, c, d)
            }
            return b
        }

        function L(a, b) {
            if (ld(a)) {
                b = b || [];
                for (var c = 0, d = a.length; d > c; c++) b[c] = a[c]
            } else if (t(a)) {
                b = b || {};
                for (var e in a)("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
            }
            return b || a
        }

        function M(a, b) {
            if (a === b) return !0;
            if (null === a || null === b) return !1;
            if (a !== a && b !== b) return !0;
            var d, e, f, g = typeof a,
                h = typeof b;
            if (g == h && "object" == g) {
                if (!ld(a)) {
                    if (w(a)) return w(b) ? M(a.getTime(), b.getTime()) : !1;
                    if (y(a)) return y(b) ? a.toString() == b.toString() : !1;
                    if (A(a) || A(b) || z(a) || z(b) || ld(b) || w(b) || y(b)) return !1;
                    f = {};
                    for (e in a)
                        if ("$" !== e.charAt(0) && !x(a[e])) {
                            if (!M(a[e], b[e])) return !1;
                            f[e] = !0
                        }
                    for (e in b)
                        if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !x(b[e])) return !1;
                    return !0
                }
                if (!ld(b)) return !1;
                if ((d = a.length) == b.length) {
                    for (e = 0; d > e; e++)
                        if (!M(a[e], b[e])) return !1;
                    return !0
                }
            }
            return !1
        }

        function N(a, b, c) {
            return a.concat(dd.call(b, c))
        }

        function O(a, b) {
            return dd.call(a, b || 0)
        }

        function P(a, b) {
            var c = arguments.length > 2 ? O(arguments, 2) : [];
            return !x(b) || b instanceof RegExp ? b : c.length ? function() {
                return arguments.length ? b.apply(a, N(c, arguments, 0)) : b.apply(a, c)
            } : function() {
                return arguments.length ? b.apply(a, arguments) : b.call(a)
            }
        }

        function Q(a, d) {
            var e = d;
            return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : A(d) && (e = "$SCOPE"), e
        }

        function R(a, b) {
            return "undefined" == typeof a ? c : (v(b) || (b = b ? 2 : null), JSON.stringify(a, Q, b))
        }

        function S(a) {
            return u(a) ? JSON.parse(a) : a
        }

        function T(a) {
            a = ad(a).clone();
            try {
                a.empty()
            } catch (b) {}
            var c = ad("<div>").append(a).html();
            try {
                return a[0].nodeType === td ? Wc(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                    return "<" + Wc(b)
                })
            } catch (b) {
                return Wc(c)
            }
        }

        function U(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {}
        }

        function V(a) {
            var b, c, d = {};
            return f((a || "").split("&"), function(a) {
                if (a && (b = a.replace(/\+/g, "%20").split("="), c = U(b[0]), s(c))) {
                    var e = s(b[1]) ? U(b[1]) : !0;
                    Xc.call(d, c) ? ld(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
                }
            }), d
        }

        function W(a) {
            var b = [];
            return f(a, function(a, c) {
                ld(a) ? f(a, function(a) {
                    b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
                }) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
            }), b.length ? b.join("&") : ""
        }

        function X(a) {
            return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function Y(a, b) {
            return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
        }

        function Z(a, b) {
            var c, d, e = pd.length;
            for (a = ad(a), d = 0; e > d; ++d)
                if (c = pd[d] + b, u(c = a.attr(c))) return c;
            return null
        }

        function $(a, b) {
            var c, d, e = {};
            f(pd, function(b) {
                var e = b + "app";
                !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e))
            }), f(pd, function(b) {
                var e, f = b + "app";
                !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f))
            }), c && (e.strictDi = null !== Z(c, "strict-di"), b(c, d ? [d] : [], e))
        }

        function _(c, d, e) {
            t(e) || (e = {});
            var g = {
                strictDi: !1
            };
            e = l(g, e);
            var h = function() {
                    if (c = ad(c), c.injector()) {
                        var a = c[0] === b ? "document" : T(c);
                        throw hd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
                    }
                    d = d || [], d.unshift(["$provide", function(a) {
                        a.value("$rootElement", c)
                    }]), e.debugInfoEnabled && d.push(["$compileProvider", function(a) {
                        a.debugInfoEnabled(!0)
                    }]), d.unshift("ng");
                    var f = Sa(d, e.strictDi);
                    return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                        a.$apply(function() {
                            b.data("$injector", d), c(b)(a)
                        })
                    }]), f
                },
                i = /^NG_ENABLE_DEBUG_INFO!/,
                j = /^NG_DEFER_BOOTSTRAP!/;
            return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), id.resumeBootstrap = function(a) {
                return f(a, function(a) {
                    d.push(a)
                }), h()
            }, void(x(id.resumeDeferredBootstrap) && id.resumeDeferredBootstrap()))
        }

        function aa() {
            a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
        }

        function ba(a) {
            var b = id.element(a).injector();
            if (!b) throw hd("test", "no injector found for element argument to getTestability");
            return b.get("$$testability")
        }

        function ca(a, b) {
            return b = b || "_", a.replace(qd, function(a, c) {
                return (c ? b : "") + a.toLowerCase()
            })
        }

        function da() {
            var b;
            rd || (bd = a.jQuery, bd && bd.fn.on ? (ad = bd, l(bd.fn, {
                scope: Ld.scope,
                isolateScope: Ld.isolateScope,
                controller: Ld.controller,
                injector: Ld.injector,
                inheritedData: Ld.inheritedData
            }), b = bd.cleanData, bd.cleanData = function(a) {
                var c;
                if (kd) kd = !1;
                else
                    for (var d, e = 0; null != (d = a[e]); e++) c = bd._data(d, "events"), c && c.$destroy && bd(d).triggerHandler("$destroy");
                b(a)
            }) : ad = ua, id.element = ad, rd = !0)
        }

        function ea(a, b, c) {
            if (!a) throw hd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
            return a
        }

        function fa(a, b, c) {
            return c && ld(a) && (a = a[a.length - 1]), ea(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
        }

        function ga(a, b) {
            if ("hasOwnProperty" === a) throw hd("badname", "hasOwnProperty is not a valid {0} name", b)
        }

        function ha(a, b, c) {
            if (!b) return a;
            for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
            return !c && x(a) ? P(f, a) : a
        }

        function ia(a) {
            var b = a[0],
                c = a[a.length - 1],
                d = [b];
            do {
                if (b = b.nextSibling, !b) break;
                d.push(b)
            } while (b !== c);
            return ad(d)
        }

        function ja() {
            return Object.create(null)
        }

        function ka(a) {
            function b(a, b, c) {
                return a[b] || (a[b] = c())
            }
            var c = d("$injector"),
                e = d("ng"),
                f = b(a, "angular", Object);
            return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
                var a = {};
                return function(d, f, g) {
                    var h = function(a, b) {
                        if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                    };
                    return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                        function a(a, c, d, e) {
                            return e || (e = b),
                                function() {
                                    return e[d || "push"]([a, c, arguments]), j
                                }
                        }
                        if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                        var b = [],
                            e = [],
                            h = [],
                            i = a("$injector", "invoke", "push", e),
                            j = {
                                _invokeQueue: b,
                                _configBlocks: e,
                                _runBlocks: h,
                                requires: f,
                                name: d,
                                provider: a("$provide", "provider"),
                                factory: a("$provide", "factory"),
                                service: a("$provide", "service"),
                                value: a("$provide", "value"),
                                constant: a("$provide", "constant", "unshift"),
                                animation: a("$animateProvider", "register"),
                                filter: a("$filterProvider", "register"),
                                controller: a("$controllerProvider", "register"),
                                directive: a("$compileProvider", "directive"),
                                config: i,
                                run: function(a) {
                                    return h.push(a), this
                                }
                            };
                        return g && i(g), j
                    })
                }
            })
        }

        function la(a) {
            var b = [];
            return JSON.stringify(a, function(a, c) {
                if (c = Q(a, c), t(c)) {
                    if (b.indexOf(c) >= 0) return "<<already seen>>";
                    b.push(c)
                }
                return c
            })
        }

        function ma(a) {
            return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? la(a) : a
        }

        function na(b) {
            l(b, {
                bootstrap: _,
                copy: K,
                extend: l,
                equals: M,
                element: ad,
                forEach: f,
                injector: Sa,
                noop: o,
                bind: P,
                toJson: R,
                fromJson: S,
                identity: p,
                isUndefined: r,
                isDefined: s,
                isString: u,
                isFunction: x,
                isObject: t,
                isNumber: v,
                isElement: G,
                isArray: ld,
                version: xd,
                isDate: w,
                lowercase: Wc,
                uppercase: Yc,
                callbacks: {
                    counter: 0
                },
                getTestability: ba,
                $$minErr: d,
                $$csp: od,
                reloadWithDebugInfo: aa
            }), cd = ka(a);
            try {
                cd("ngLocale")
            } catch (c) {
                cd("ngLocale", []).provider("$locale", qb)
            }
            cd("ng", ["ngLocale"], ["$provide", function(a) {
                a.provider({
                    $$sanitizeUri: Wb
                }), a.provider("$compile", Za).directive({
                    a: De,
                    input: Ue,
                    textarea: Ue,
                    form: Ie,
                    script: Kf,
                    select: Nf,
                    style: Pf,
                    option: Of,
                    ngBind: Xe,
                    ngBindHtml: Ze,
                    ngBindTemplate: Ye,
                    ngClass: _e,
                    ngClassEven: bf,
                    ngClassOdd: af,
                    ngCloak: cf,
                    ngController: df,
                    ngForm: Je,
                    ngHide: Ef,
                    ngIf: gf,
                    ngInclude: hf,
                    ngInit: kf,
                    ngNonBindable: yf,
                    ngPluralize: zf,
                    ngRepeat: Af,
                    ngShow: Df,
                    ngStyle: Ff,
                    ngSwitch: Gf,
                    ngSwitchWhen: Hf,
                    ngSwitchDefault: If,
                    ngOptions: Mf,
                    ngTransclude: Jf,
                    ngModel: vf,
                    ngList: lf,
                    ngChange: $e,
                    pattern: Rf,
                    ngPattern: Rf,
                    required: Qf,
                    ngRequired: Qf,
                    minlength: Tf,
                    ngMinlength: Tf,
                    maxlength: Sf,
                    ngMaxlength: Sf,
                    ngValue: We,
                    ngModelOptions: xf
                }).directive({
                    ngInclude: jf
                }).directive(Ee).directive(ef), a.provider({
                    $anchorScroll: Ta,
                    $animate: Vd,
                    $browser: Wa,
                    $cacheFactory: Xa,
                    $controller: bb,
                    $document: cb,
                    $exceptionHandler: db,
                    $filter: gc,
                    $interpolate: ob,
                    $interval: pb,
                    $http: kb,
                    $httpBackend: mb,
                    $location: Eb,
                    $log: Fb,
                    $parse: Qb,
                    $rootScope: Vb,
                    $q: Rb,
                    $$q: Sb,
                    $sce: $b,
                    $sceDelegate: Zb,
                    $sniffer: _b,
                    $templateCache: Ya,
                    $templateRequest: ac,
                    $$testability: bc,
                    $timeout: cc,
                    $window: fc,
                    $$rAF: Ub,
                    $$asyncCallback: Ua,
                    $$jqLite: Na
                })
            }])
        }

        function oa() {
            return ++zd
        }

        function pa(a) {
            return a.replace(Cd, function(a, b, c, d) {
                return d ? c.toUpperCase() : c
            }).replace(Dd, "Moz$1")
        }

        function qa(a) {
            return !Hd.test(a)
        }

        function ra(a) {
            var b = a.nodeType;
            return b === sd || !b || b === vd
        }

        function sa(a, b) {
            var c, d, e, g, h = b.createDocumentFragment(),
                i = [];
            if (qa(a)) i.push(b.createTextNode(a));
            else {
                for (c = c || h.appendChild(b.createElement("div")), d = (Id.exec(a) || ["", ""])[1].toLowerCase(), e = Kd[d] || Kd._default, c.innerHTML = e[1] + a.replace(Jd, "<$1></$2>") + e[2],
                    g = e[0]; g--;) c = c.lastChild;
                i = N(i, c.childNodes), c = h.firstChild, c.textContent = ""
            }
            return h.textContent = "", h.innerHTML = "", f(i, function(a) {
                h.appendChild(a)
            }), h
        }

        function ta(a, c) {
            c = c || b;
            var d;
            return (d = Gd.exec(a)) ? [c.createElement(d[1])] : (d = sa(a, c)) ? d.childNodes : []
        }

        function ua(a) {
            if (a instanceof ua) return a;
            var b;
            if (u(a) && (a = md(a), b = !0), !(this instanceof ua)) {
                if (b && "<" != a.charAt(0)) throw Fd("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                return new ua(a)
            }
            b ? Ea(this, ta(a)) : Ea(this, a)
        }

        function va(a) {
            return a.cloneNode(!0)
        }

        function wa(a, b) {
            if (b || ya(a), a.querySelectorAll)
                for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) ya(c[d])
        }

        function xa(a, b, c, d) {
            if (s(d)) throw Fd("offargs", "jqLite#off() does not support the `selector` argument");
            var e = za(a),
                g = e && e.events,
                h = e && e.handle;
            if (h)
                if (b) f(b.split(" "), function(b) {
                    if (s(c)) {
                        var d = g[b];
                        if (J(d || [], c), d && d.length > 0) return
                    }
                    Bd(a, b, h), delete g[b]
                });
                else
                    for (b in g) "$destroy" !== b && Bd(a, b, h), delete g[b]
        }

        function ya(a, b) {
            var d = a.ng339,
                e = d && yd[d];
            if (e) {
                if (b) return void delete e.data[b];
                e.handle && (e.events.$destroy && e.handle({}, "$destroy"), xa(a)), delete yd[d], a.ng339 = c
            }
        }

        function za(a, b) {
            var d = a.ng339,
                e = d && yd[d];
            return b && !e && (a.ng339 = d = oa(), e = yd[d] = {
                events: {},
                data: {},
                handle: c
            }), e
        }

        function Aa(a, b, c) {
            if (ra(a)) {
                var d = s(c),
                    e = !d && b && !t(b),
                    f = !b,
                    g = za(a, !e),
                    h = g && g.data;
                if (d) h[b] = c;
                else {
                    if (f) return h;
                    if (e) return h && h[b];
                    l(h, b)
                }
            }
        }

        function Ba(a, b) {
            return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
        }

        function Ca(a, b) {
            b && a.setAttribute && f(b.split(" "), function(b) {
                a.setAttribute("class", md((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + md(b) + " ", " ")))
            })
        }

        function Da(a, b) {
            if (b && a.setAttribute) {
                var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                f(b.split(" "), function(a) {
                    a = md(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
                }), a.setAttribute("class", md(c))
            }
        }

        function Ea(a, b) {
            if (b)
                if (b.nodeType) a[a.length++] = b;
                else {
                    var c = b.length;
                    if ("number" == typeof c && b.window !== b) {
                        if (c)
                            for (var d = 0; c > d; d++) a[a.length++] = b[d]
                    } else a[a.length++] = b
                }
        }

        function Fa(a, b) {
            return Ga(a, "$" + (b || "ngController") + "Controller")
        }

        function Ga(a, b, d) {
            a.nodeType == vd && (a = a.documentElement);
            for (var e = ld(b) ? b : [b]; a;) {
                for (var f = 0, g = e.length; g > f; f++)
                    if ((d = ad.data(a, e[f])) !== c) return d;
                a = a.parentNode || a.nodeType === wd && a.host
            }
        }

        function Ha(a) {
            for (wa(a, !0); a.firstChild;) a.removeChild(a.firstChild)
        }

        function Ia(a, b) {
            b || wa(a);
            var c = a.parentNode;
            c && c.removeChild(a)
        }

        function Ja(b, c) {
            c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : ad(c).on("load", b)
        }

        function Ka(a, b) {
            var c = Md[b.toLowerCase()];
            return c && Nd[I(a)] && c
        }

        function La(a, b) {
            var c = a.nodeName;
            return ("INPUT" === c || "TEXTAREA" === c) && Od[b]
        }

        function Ma(a, b) {
            var c = function(c, d) {
                c.isDefaultPrevented = function() {
                    return c.defaultPrevented
                };
                var e = b[d || c.type],
                    f = e ? e.length : 0;
                if (f) {
                    if (r(c.immediatePropagationStopped)) {
                        var g = c.stopImmediatePropagation;
                        c.stopImmediatePropagation = function() {
                            c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
                        }
                    }
                    c.isImmediatePropagationStopped = function() {
                        return c.immediatePropagationStopped === !0
                    }, f > 1 && (e = L(e));
                    for (var h = 0; f > h; h++) c.isImmediatePropagationStopped() || e[h].call(a, c)
                }
            };
            return c.elem = a, c
        }

        function Na() {
            this.$get = function() {
                return l(ua, {
                    hasClass: function(a, b) {
                        return a.attr && (a = a[0]), Ba(a, b)
                    },
                    addClass: function(a, b) {
                        return a.attr && (a = a[0]), Da(a, b)
                    },
                    removeClass: function(a, b) {
                        return a.attr && (a = a[0]), Ca(a, b)
                    }
                })
            }
        }

        function Oa(a, b) {
            var c = a && a.$$hashKey;
            if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
            var d = typeof a;
            return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || j)() : d + ":" + a
        }

        function Pa(a, b) {
            if (b) {
                var c = 0;
                this.nextUid = function() {
                    return ++c
                }
            }
            f(a, this.put, this)
        }

        function Qa(a) {
            var b = a.toString().replace(Sd, ""),
                c = b.match(Pd);
            return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
        }

        function Ra(a, b, c) {
            var d, e, g, h;
            if ("function" == typeof a) {
                if (!(d = a.$inject)) {
                    if (d = [], a.length) {
                        if (b) throw u(c) && c || (c = a.name || Qa(a)), Td("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                        e = a.toString().replace(Sd, ""), g = e.match(Pd), f(g[1].split(Qd), function(a) {
                            a.replace(Rd, function(a, b, c) {
                                d.push(c)
                            })
                        })
                    }
                    a.$inject = d
                }
            } else ld(a) ? (h = a.length - 1, fa(a[h], "fn"), d = a.slice(0, h)) : fa(a, "fn", !0);
            return d
        }

        function Sa(a, b) {
            function d(a) {
                return function(b, c) {
                    return t(b) ? void f(b, i(a)) : a(b, c)
                }
            }

            function e(a, b) {
                if (ga(a, "service"), (x(b) || ld(b)) && (b = A.instantiate(b)), !b.$get) throw Td("pget", "Provider '{0}' must define $get factory method.", a);
                return z[a + v] = b
            }

            function g(a, b) {
                return function() {
                    var c = C.invoke(b, this);
                    if (r(c)) throw Td("undef", "Provider '{0}' must return a value from $get factory method.", a);
                    return c
                }
            }

            function h(a, b, c) {
                return e(a, {
                    $get: c !== !1 ? g(a, b) : b
                })
            }

            function j(a, b) {
                return h(a, ["$injector", function(a) {
                    return a.instantiate(b)
                }])
            }

            function k(a, b) {
                return h(a, q(b), !1)
            }

            function l(a, b) {
                ga(a, "constant"), z[a] = b, B[a] = b
            }

            function m(a, b) {
                var c = A.get(a + v),
                    d = c.$get;
                c.$get = function() {
                    var a = C.invoke(d, c);
                    return C.invoke(b, null, {
                        $delegate: a
                    })
                }
            }

            function n(a) {
                var b, c = [];
                return f(a, function(a) {
                    function d(a) {
                        var b, c;
                        for (b = 0, c = a.length; c > b; b++) {
                            var d = a[b],
                                e = A.get(d[0]);
                            e[d[1]].apply(e, d[2])
                        }
                    }
                    if (!y.get(a)) {
                        y.put(a, !0);
                        try {
                            u(a) ? (b = cd(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : x(a) ? c.push(A.invoke(a)) : ld(a) ? c.push(A.invoke(a)) : fa(a, "module")
                        } catch (e) {
                            throw ld(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Td("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e)
                        }
                    }
                }), c
            }

            function p(a, c) {
                function d(b, d) {
                    if (a.hasOwnProperty(b)) {
                        if (a[b] === s) throw Td("cdep", "Circular dependency found: {0}", b + " <- " + w.join(" <- "));
                        return a[b]
                    }
                    try {
                        return w.unshift(b), a[b] = s, a[b] = c(b, d)
                    } catch (e) {
                        throw a[b] === s && delete a[b], e
                    } finally {
                        w.shift()
                    }
                }

                function e(a, c, e, f) {
                    "string" == typeof e && (f = e, e = null);
                    var g, h, i, j = [],
                        k = Sa.$$annotate(a, b, f);
                    for (h = 0, g = k.length; g > h; h++) {
                        if (i = k[h], "string" != typeof i) throw Td("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                        j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
                    }
                    return ld(a) && (a = a[g]), a.apply(c, j)
                }

                function f(a, b, c) {
                    var d = Object.create((ld(a) ? a[a.length - 1] : a).prototype || null),
                        f = e(a, d, b, c);
                    return t(f) || x(f) ? f : d
                }
                return {
                    invoke: e,
                    instantiate: f,
                    get: d,
                    annotate: Sa.$$annotate,
                    has: function(b) {
                        return z.hasOwnProperty(b + v) || a.hasOwnProperty(b)
                    }
                }
            }
            b = b === !0;
            var s = {},
                v = "Provider",
                w = [],
                y = new Pa([], !0),
                z = {
                    $provide: {
                        provider: d(e),
                        factory: d(h),
                        service: d(j),
                        value: d(k),
                        constant: d(l),
                        decorator: m
                    }
                },
                A = z.$injector = p(z, function(a, b) {
                    throw id.isString(b) && w.push(b), Td("unpr", "Unknown provider: {0}", w.join(" <- "))
                }),
                B = {},
                C = B.$injector = p(B, function(a, b) {
                    var d = A.get(a + v, b);
                    return C.invoke(d.$get, d, c, a)
                });
            return f(n(a), function(a) {
                C.invoke(a || o)
            }), C
        }

        function Ta() {
            var a = !0;
            this.disableAutoScrolling = function() {
                a = !1
            }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
                function e(a) {
                    var b = null;
                    return Array.prototype.some.call(a, function(a) {
                        return "a" === I(a) ? (b = a, !0) : void 0
                    }), b
                }

                function f() {
                    var a = h.yOffset;
                    if (x(a)) a = a();
                    else if (G(a)) {
                        var c = a[0],
                            d = b.getComputedStyle(c);
                        a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
                    } else v(a) || (a = 0);
                    return a
                }

                function g(a) {
                    if (a) {
                        a.scrollIntoView();
                        var c = f();
                        if (c) {
                            var d = a.getBoundingClientRect().top;
                            b.scrollBy(0, d - c)
                        }
                    } else b.scrollTo(0, 0)
                }

                function h() {
                    var a, b = c.hash();
                    b ? (a = i.getElementById(b)) ? g(a) : (a = e(i.getElementsByName(b))) ? g(a) : "top" === b && g(null) : g(null)
                }
                var i = b.document;
                return a && d.$watch(function() {
                    return c.hash()
                }, function(a, b) {
                    (a !== b || "" !== a) && Ja(function() {
                        d.$evalAsync(h)
                    })
                }), h
            }]
        }

        function Ua() {
            this.$get = ["$$rAF", "$timeout", function(a, b) {
                return a.supported ? function(b) {
                    return a(b)
                } : function(a) {
                    return b(a, 0, !1)
                }
            }]
        }

        function Va(a, b, d, e) {
            function g(a) {
                try {
                    a.apply(null, O(arguments, 1))
                } finally {
                    if (y--, 0 === y)
                        for (; z.length;) try {
                            z.pop()()
                        } catch (b) {
                            d.error(b)
                        }
                }
            }

            function h(a) {
                var b = a.indexOf("#");
                return -1 === b ? "" : a.substr(b + 1)
            }

            function i(a, b) {
                ! function c() {
                    f(B, function(a) {
                        a()
                    }), A = b(c, a)
                }()
            }

            function j() {
                l(), m()
            }

            function k() {
                try {
                    return t.state
                } catch (a) {}
            }

            function l() {
                C = k(), C = r(C) ? null : C, M(C, J) && (C = J), J = C
            }

            function m() {
                (E !== p.url() || D !== C) && (E = p.url(), D = C, f(H, function(a) {
                    a(p.url(), C)
                }))
            }

            function n(a) {
                try {
                    return decodeURIComponent(a)
                } catch (b) {
                    return a
                }
            }
            var p = this,
                q = b[0],
                s = a.location,
                t = a.history,
                v = a.setTimeout,
                w = a.clearTimeout,
                x = {};
            p.isMock = !1;
            var y = 0,
                z = [];
            p.$$completeOutstandingRequest = g, p.$$incOutstandingRequestCount = function() {
                y++
            }, p.notifyWhenNoOutstandingRequests = function(a) {
                f(B, function(a) {
                    a()
                }), 0 === y ? a() : z.push(a)
            };
            var A, B = [];
            p.addPollFn = function(a) {
                return r(A) && i(100, v), B.push(a), a
            };
            var C, D, E = s.href,
                F = b.find("base"),
                G = null;
            l(), D = C, p.url = function(b, c, d) {
                if (r(d) && (d = null), s !== a.location && (s = a.location), t !== a.history && (t = a.history), b) {
                    var f = D === d;
                    if (E === b && (!e.history || f)) return p;
                    var g = E && vb(E) === vb(b);
                    return E = b, D = d, !e.history || g && f ? (g || (G = b), c ? s.replace(b) : g ? s.hash = h(b) : s.href = b) : (t[c ? "replaceState" : "pushState"](d, "", b), l(), D = C), p
                }
                return G || s.href.replace(/%27/g, "'")
            }, p.state = function() {
                return C
            };
            var H = [],
                I = !1,
                J = null;
            p.onUrlChange = function(b) {
                return I || (e.history && ad(a).on("popstate", j), ad(a).on("hashchange", j), I = !0), H.push(b), b
            }, p.$$checkUrlChange = m, p.baseHref = function() {
                var a = F.attr("href");
                return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
            };
            var K = {},
                L = "",
                N = p.baseHref();
            p.cookies = function(a, b) {
                var e, f, g, h, i;
                if (!a) {
                    if (q.cookie !== L)
                        for (L = q.cookie, f = L.split("; "), K = {}, h = 0; h < f.length; h++) g = f[h], i = g.indexOf("="), i > 0 && (a = n(g.substring(0, i)), K[a] === c && (K[a] = n(g.substring(i + 1))));
                    return K
                }
                b === c ? q.cookie = encodeURIComponent(a) + "=;path=" + N + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (q.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + N).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
            }, p.defer = function(a, b) {
                var c;
                return y++, c = v(function() {
                    delete x[c], g(a)
                }, b || 0), x[c] = !0, c
            }, p.defer.cancel = function(a) {
                return x[a] ? (delete x[a], w(a), g(o), !0) : !1
            }
        }

        function Wa() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
                return new Va(a, d, b, c)
            }]
        }

        function Xa() {
            this.$get = function() {
                function a(a, c) {
                    function e(a) {
                        a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                    }

                    function f(a, b) {
                        a != b && (a && (a.p = b), b && (b.n = a))
                    }
                    if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                    var g = 0,
                        h = l({}, c, {
                            id: a
                        }),
                        i = {},
                        j = c && c.capacity || Number.MAX_VALUE,
                        k = {},
                        m = null,
                        n = null;
                    return b[a] = {
                        put: function(a, b) {
                            if (j < Number.MAX_VALUE) {
                                var c = k[a] || (k[a] = {
                                    key: a
                                });
                                e(c)
                            }
                            if (!r(b)) return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
                        },
                        get: function(a) {
                            if (j < Number.MAX_VALUE) {
                                var b = k[a];
                                if (!b) return;
                                e(b)
                            }
                            return i[a]
                        },
                        remove: function(a) {
                            if (j < Number.MAX_VALUE) {
                                var b = k[a];
                                if (!b) return;
                                b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
                            }
                            delete i[a], g--
                        },
                        removeAll: function() {
                            i = {}, g = 0, k = {}, m = n = null
                        },
                        destroy: function() {
                            i = null, h = null, k = null, delete b[a]
                        },
                        info: function() {
                            return l({}, h, {
                                size: g
                            })
                        }
                    }
                }
                var b = {};
                return a.info = function() {
                    var a = {};
                    return f(b, function(b, c) {
                        a[c] = b.info()
                    }), a
                }, a.get = function(a) {
                    return b[a]
                }, a
            }
        }

        function Ya() {
            this.$get = ["$cacheFactory", function(a) {
                return a("templates")
            }]
        }

        function Za(a, d) {
            function e(a, b) {
                var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                    d = {};
                return f(a, function(a, e) {
                    var f = a.match(c);
                    if (!f) throw Wd("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, e, a);
                    d[e] = {
                        mode: f[1][0],
                        collection: "*" === f[2],
                        optional: "?" === f[3],
                        attrName: f[4] || e
                    }
                }), d
            }
            var g = {},
                h = "Directive",
                j = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
                k = /(([\w\-]+)(?:\:([^;]+))?;?)/,
                m = H("ngSrc,ngSrcset,src,srcset"),
                r = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
                v = /^(on[a-z]+|formaction)$/;
            this.directive = function y(b, c) {
                return ga(b, "directive"), u(b) ? (ea(c, "directiveFactory"), g.hasOwnProperty(b) || (g[b] = [], a.factory(b + h, ["$injector", "$exceptionHandler", function(a, c) {
                    var d = [];
                    return f(g[b], function(f, g) {
                        try {
                            var h = a.invoke(f);
                            x(h) ? h = {
                                compile: q(h)
                            } : !h.compile && h.link && (h.compile = q(h.link)), h.priority = h.priority || 0, h.index = g, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA", t(h.scope) && (h.$$isolateBindings = e(h.scope, h.name)), d.push(h)
                        } catch (i) {
                            c(i)
                        }
                    }), d
                }])), g[b].push(c)) : f(b, i(y)), this
            }, this.aHrefSanitizationWhitelist = function(a) {
                return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
            }, this.imgSrcSanitizationWhitelist = function(a) {
                return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
            };
            var w = !0;
            this.debugInfoEnabled = function(a) {
                return s(a) ? (w = a, this) : w
            }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, e, i, q, s, y, z, B, C, D) {
                function E(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {}
                }

                function F(a, b, c, d, e) {
                    a instanceof ad || (a = ad(a)), f(a, function(b, c) {
                        b.nodeType == td && b.nodeValue.match(/\S+/) && (a[c] = ad(b).wrap("<span></span>").parent()[0])
                    });
                    var g = H(a, b, a, c, d, e);
                    F.$$addScopeClass(a);
                    var h = null;
                    return function(b, c, d) {
                        ea(b, "scope"), d = d || {};
                        var e = d.parentBoundTranscludeFn,
                            f = d.transcludeControllers,
                            i = d.futureParentElement;
                        e && e.$$boundTransclude && (e = e.$$boundTransclude), h || (h = G(i));
                        var j;
                        if (j = "html" !== h ? ad($(h, ad("<div>").append(a).html())) : c ? Ld.clone.call(a) : a, f)
                            for (var k in f) j.data("$" + k + "Controller", f[k].instance);
                        return F.$$addScopeInfo(j, b), c && c(j, b), g && g(b, j, j, e), j
                    }
                }

                function G(a) {
                    var b = a && a[0];
                    return b && "foreignobject" !== I(b) && b.toString().match(/SVG/) ? "svg" : "html"
                }

                function H(a, b, d, e, f, g) {
                    function h(a, d, e, f) {
                        var g, h, i, j, k, l, m, n, q;
                        if (o) {
                            var r = d.length;
                            for (q = new Array(r), k = 0; k < p.length; k += 3) m = p[k], q[m] = d[m]
                        } else q = d;
                        for (k = 0, l = p.length; l > k;) i = q[p[k++]], g = p[k++], h = p[k++], g ? (g.scope ? (j = a.$new(), F.$$addScopeInfo(ad(i), j)) : j = a, n = g.transcludeOnThisElement ? K(a, g.transclude, f, g.elementTranscludeOnThisElement) : !g.templateOnThisElement && f ? f : !f && b ? K(a, b) : null, g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f)
                    }
                    for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++) i = new ga, j = L(a[q], [], i, 0 === q ? e : c, f), k = j.length ? Q(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && F.$$addScopeClass(i.$$element), m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : H(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
                    return n ? h : null
                }

                function K(a, b, c, d) {
                    var e = function(d, e, f, g, h) {
                        return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                            parentBoundTranscludeFn: c,
                            transcludeControllers: f,
                            futureParentElement: g
                        })
                    };
                    return e
                }

                function L(a, b, c, d, e) {
                    var f, g, h = a.nodeType,
                        i = c.$attr;
                    switch (h) {
                        case sd:
                            S(b, $a(I(a)), "E", d, e);
                            for (var l, m, n, o, p, q, r = a.attributes, s = 0, v = r && r.length; v > s; s++) {
                                var w = !1,
                                    x = !1;
                                l = r[s], m = l.name, p = md(l.value), o = $a(m), (q = la.test(o)) && (m = m.replace(Xd, "").substr(8).replace(/_(.)/g, function(a, b) {
                                    return b.toUpperCase()
                                }));
                                var y = o.replace(/(Start|End)$/, "");
                                U(y) && o === y + "Start" && (w = m, x = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), n = $a(m.toLowerCase()), i[n] = m, (q || !c.hasOwnProperty(n)) && (c[n] = p, Ka(a, n) && (c[n] = !0)), aa(a, b, p, n, q), S(b, n, "A", d, e, w, x)
                            }
                            if (g = a.className, t(g) && (g = g.animVal), u(g) && "" !== g)
                                for (; f = k.exec(g);) n = $a(f[2]), S(b, n, "C", d, e) && (c[n] = md(f[3])), g = g.substr(f.index + f[0].length);
                            break;
                        case td:
                            Z(b, a.nodeValue);
                            break;
                        case ud:
                            try {
                                f = j.exec(a.nodeValue), f && (n = $a(f[1]), S(b, n, "M", d, e) && (c[n] = md(f[2])))
                            } catch (z) {}
                    }
                    return b.sort(X), b
                }

                function N(a, b, c) {
                    var d = [],
                        e = 0;
                    if (b && a.hasAttribute && a.hasAttribute(b)) {
                        do {
                            if (!a) throw Wd("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                            a.nodeType == sd && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                        } while (e > 0)
                    } else d.push(a);
                    return ad(d)
                }

                function P(a, b, c) {
                    return function(d, e, f, g, h) {
                        return e = N(e[0], b, c), a(d, e, f, g, h)
                    }
                }

                function Q(a, g, h, i, j, k, l, m, n) {
                    function o(a, b, c, d) {
                        a && (c && (a = P(a, c, d)), a.require = z.require, a.directiveName = B, (I === z || z.$$isolateScope) && (a = da(a, {
                            isolateScope: !0
                        })), l.push(a)), b && (c && (b = P(b, c, d)), b.require = z.require, b.directiveName = B, (I === z || z.$$isolateScope) && (b = da(b, {
                            isolateScope: !0
                        })), m.push(b))
                    }

                    function p(a, b, c, d) {
                        var e, g, h = "data",
                            i = !1,
                            j = c;
                        if (u(b)) {
                            if (g = b.match(r), b = b.substring(g[0].length), g[3] && (g[1] ? g[3] = null : g[1] = g[3]), "^" === g[1] ? h = "inheritedData" : "^^" === g[1] && (h = "inheritedData", j = c.parent()), "?" === g[2] && (i = !0), e = null, d && "data" === h && (e = d[b]) && (e = e.instance), e = e || j[h]("$" + b + "Controller"), !e && !i) throw Wd("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", b, a);
                            return e || null
                        }
                        return ld(b) && (e = [], f(b, function(b) {
                            e.push(p(a, b, c, d))
                        })), e
                    }

                    function v(a, b, e, i, j) {
                        function k(a, b, d) {
                            var e;
                            return A(a) || (d = b, b = a, a = c), U && (e = v), d || (d = U ? x.parent() : x), j(a, b, e, d, D)
                        }
                        var n, o, r, t, u, v, w, x, z;
                        if (g === e ? (z = h, x = h.$$element) : (x = ad(e), z = new ga(x, h)), I && (u = b.$new(!0)), j && (w = k, w.$$boundTransclude = j), H && (y = {}, v = {}, f(H, function(a) {
                                var c, d = {
                                    $scope: a === I || a.$$isolateScope ? u : b,
                                    $element: x,
                                    $attrs: z,
                                    $transclude: w
                                };
                                t = a.controller, "@" == t && (t = z[a.name]), c = s(t, d, !0, a.controllerAs), v[a.name] = c, U || x.data("$" + a.name + "Controller", c.instance), y[a.name] = c
                            })), I) {
                            F.$$addScopeInfo(x, u, !0, !(J && (J === I || J === I.$$originalDirective))), F.$$addScopeClass(x, !0);
                            var B = y && y[I.name],
                                C = u;
                            B && B.identifier && I.bindToController === !0 && (C = B.instance), f(u.$$isolateBindings = I.$$isolateBindings, function(a, c) {
                                var e, f, g, h, i = a.attrName,
                                    j = a.optional,
                                    k = a.mode;
                                switch (k) {
                                    case "@":
                                        z.$observe(i, function(a) {
                                            C[c] = a
                                        }), z.$$observers[i].$$scope = b, z[i] && (C[c] = d(z[i])(b));
                                        break;
                                    case "=":
                                        if (j && !z[i]) return;
                                        f = q(z[i]), h = f.literal ? M : function(a, b) {
                                            return a === b || a !== a && b !== b
                                        }, g = f.assign || function() {
                                            throw e = C[c] = f(b), Wd("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", z[i], I.name)
                                        }, e = C[c] = f(b);
                                        var l = function(a) {
                                            return h(a, C[c]) || (h(a, e) ? g(b, a = C[c]) : C[c] = a), e = a
                                        };
                                        l.$stateful = !0;
                                        var m;
                                        m = a.collection ? b.$watchCollection(z[i], l) : b.$watch(q(z[i], l), null, f.literal), u.$on("$destroy", m);
                                        break;
                                    case "&":
                                        f = q(z[i]), C[c] = function(a) {
                                            return f(b, a)
                                        }
                                }
                            })
                        }
                        for (y && (f(y, function(a) {
                                a()
                            }), y = null), n = 0, o = l.length; o > n; n++) r = l[n], fa(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w);
                        var D = b;
                        for (I && (I.template || null === I.templateUrl) && (D = u), a && a(D, e.childNodes, c, j), n = m.length - 1; n >= 0; n--) r = m[n], fa(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w)
                    }
                    n = n || {};
                    for (var w, y, z, B, C, D, E, G = -Number.MAX_VALUE, H = n.controllerDirectives, I = n.newIsolateScopeDirective, J = n.templateDirective, K = n.nonTlbTranscludeDirective, Q = !1, S = !1, U = n.hasElementTranscludeDirective, X = h.$$element = ad(g), Z = k, _ = i, aa = 0, ca = a.length; ca > aa; aa++) {
                        z = a[aa];
                        var ea = z.$$start,
                            ha = z.$$end;
                        if (ea && (X = N(g, ea, ha)), C = c, G > z.priority) break;
                        if ((E = z.scope) && (z.templateUrl || (t(E) ? (Y("new/isolated scope", I || w, z, X), I = z) : Y("new/isolated scope", I, z, X)), w = w || z), B = z.name, !z.templateUrl && z.controller && (E = z.controller, H = H || {}, Y("'" + B + "' controller", H[B], z, X), H[B] = z), (E = z.transclude) && (Q = !0, z.$$tlb || (Y("transclusion", K, z, X), K = z), "element" == E ? (U = !0, G = z.priority, C = X, X = h.$$element = ad(b.createComment(" " + B + ": " + h[B] + " ")), g = X[0], ba(j, O(C), g), _ = F(C, i, G, Z && Z.name, {
                                nonTlbTranscludeDirective: K
                            })) : (C = ad(va(g)).contents(), X.empty(), _ = F(C, i))), z.template)
                            if (S = !0, Y("template", J, z, X), J = z, E = x(z.template) ? z.template(X, h) : z.template, E = ka(E), z.replace) {
                                if (Z = z, C = qa(E) ? [] : ab($(z.templateNamespace, md(E))), g = C[0], 1 != C.length || g.nodeType !== sd) throw Wd("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", B, "");
                                ba(j, X, g);
                                var ia = {
                                        $attr: {}
                                    },
                                    ja = L(g, [], ia),
                                    la = a.splice(aa + 1, a.length - (aa + 1));
                                I && R(ja), a = a.concat(ja).concat(la), V(h, ia), ca = a.length
                            } else X.html(E);
                        if (z.templateUrl) S = !0, Y("template", J, z, X), J = z, z.replace && (Z = z), v = W(a.splice(aa, a.length - aa), X, h, j, Q && _, l, m, {
                            controllerDirectives: H,
                            newIsolateScopeDirective: I,
                            templateDirective: J,
                            nonTlbTranscludeDirective: K
                        }), ca = a.length;
                        else if (z.compile) try {
                            D = z.compile(X, h, _), x(D) ? o(null, D, ea, ha) : D && o(D.pre, D.post, ea, ha)
                        } catch (ma) {
                            e(ma, T(X))
                        }
                        z.terminal && (v.terminal = !0, G = Math.max(G, z.priority))
                    }
                    return v.scope = w && w.scope === !0, v.transcludeOnThisElement = Q, v.elementTranscludeOnThisElement = U, v.templateOnThisElement = S, v.transclude = _, n.hasElementTranscludeDirective = U, v
                }

                function R(a) {
                    for (var b = 0, c = a.length; c > b; b++) a[b] = n(a[b], {
                        $$isolateScope: !0
                    })
                }

                function S(b, d, f, i, j, k, l) {
                    if (d === j) return null;
                    var m = null;
                    if (g.hasOwnProperty(d))
                        for (var o, p = a.get(d + h), q = 0, r = p.length; r > q; q++) try {
                            o = p[q], (i === c || i > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
                                $$start: k,
                                $$end: l
                            })), b.push(o), m = o)
                        } catch (s) {
                            e(s)
                        }
                    return m
                }

                function U(b) {
                    if (g.hasOwnProperty(b))
                        for (var c, d = a.get(b + h), e = 0, f = d.length; f > e; e++)
                            if (c = d[e], c.multiElement) return !0;
                    return !1
                }

                function V(a, b) {
                    var c = b.$attr,
                        d = a.$attr,
                        e = a.$$element;
                    f(a, function(d, e) {
                        "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    }), f(b, function(b, f) {
                        "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                    })
                }

                function W(a, b, c, d, e, g, h, j) {
                    var k, l, m = [],
                        o = b[0],
                        p = a.shift(),
                        q = n(p, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: p
                        }),
                        r = x(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
                        s = p.templateNamespace;
                    return b.empty(), i(B.getTrustedResourceUrl(r)).then(function(i) {
                            var n, u, v, w;
                            if (i = ka(i), p.replace) {
                                if (v = qa(i) ? [] : ab($(s, md(i))), n = v[0], 1 != v.length || n.nodeType !== sd) throw Wd("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                                u = {
                                    $attr: {}
                                }, ba(d, b, n);
                                var x = L(n, [], u);
                                t(p.scope) && R(x), a = x.concat(a), V(c, u)
                            } else n = o, b.html(i);
                            for (a.unshift(q), k = Q(a, n, c, e, b, p, g, h, j), f(d, function(a, c) {
                                    a == n && (d[c] = b[0])
                                }), l = H(b[0].childNodes, e); m.length;) {
                                var y = m.shift(),
                                    z = m.shift(),
                                    A = m.shift(),
                                    B = m.shift(),
                                    C = b[0];
                                if (!y.$$destroyed) {
                                    if (z !== o) {
                                        var D = z.className;
                                        j.hasElementTranscludeDirective && p.replace || (C = va(n)), ba(A, ad(z), C), E(ad(C), D)
                                    }
                                    w = k.transcludeOnThisElement ? K(y, k.transclude, B) : B, k(l, y, C, d, w)
                                }
                            }
                            m = null
                        }),
                        function(a, b, c, d, e) {
                            var f = e;
                            b.$$destroyed || (m ? m.push(b, c, d, f) : (k.transcludeOnThisElement && (f = K(b, k.transclude, e)), k(l, b, c, d, f)))
                        }
                }

                function X(a, b) {
                    var c = b.priority - a.priority;
                    return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                }

                function Y(a, b, c, d) {
                    if (b) throw Wd("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d))
                }

                function Z(a, b) {
                    var c = d(b, !0);
                    c && a.push({
                        priority: 0,
                        compile: function(a) {
                            var b = a.parent(),
                                d = !!b.length;
                            return d && F.$$addBindingClass(b),
                                function(a, b) {
                                    var e = b.parent();
                                    d || F.$$addBindingClass(e), F.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                                        b[0].nodeValue = a
                                    })
                                }
                        }
                    })
                }

                function $(a, c) {
                    switch (a = Wc(a || "html")) {
                        case "svg":
                        case "math":
                            var d = b.createElement("div");
                            return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
                        default:
                            return c
                    }
                }

                function _(a, b) {
                    if ("srcdoc" == b) return B.HTML;
                    var c = I(a);
                    return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? B.RESOURCE_URL : void 0
                }

                function aa(a, b, c, e, f) {
                    var g = _(a, e);
                    f = m[e] || f;
                    var h = d(c, !0, g, f);
                    if (h) {
                        if ("multiple" === e && "select" === I(a)) throw Wd("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
                        b.push({
                            priority: 100,
                            compile: function() {
                                return {
                                    pre: function(a, b, i) {
                                        var j = i.$$observers || (i.$$observers = {});
                                        if (v.test(e)) throw Wd("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                        var k = i[e];
                                        k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                                            "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function ba(a, c, d) {
                    var e, f, g = c[0],
                        h = c.length,
                        i = g.parentNode;
                    if (a)
                        for (e = 0, f = a.length; f > e; e++)
                            if (a[e] == g) {
                                a[e++] = d;
                                for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                                a.length -= h - 1, a.context === g && (a.context = d);
                                break
                            }
                    i && i.replaceChild(d, g);
                    var m = b.createDocumentFragment();
                    m.appendChild(g), ad(d).data(ad(g).data()), bd ? (kd = !0, bd.cleanData([g])) : delete ad.cache[g[ad.expando]];
                    for (var n = 1, o = c.length; o > n; n++) {
                        var p = c[n];
                        ad(p).remove(), m.appendChild(p), delete c[n]
                    }
                    c[0] = d, c.length = 1
                }

                function da(a, b) {
                    return l(function() {
                        return a.apply(null, arguments)
                    }, a, b)
                }

                function fa(a, b, c, d, f, g) {
                    try {
                        a(b, c, d, f, g)
                    } catch (h) {
                        e(h, T(c))
                    }
                }
                var ga = function(a, b) {
                    if (b) {
                        var c, d, e, f = Object.keys(b);
                        for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e]
                    } else this.$attr = {};
                    this.$$element = a
                };
                ga.prototype = {
                    $normalize: $a,
                    $addClass: function(a) {
                        a && a.length > 0 && C.addClass(this.$$element, a)
                    },
                    $removeClass: function(a) {
                        a && a.length > 0 && C.removeClass(this.$$element, a)
                    },
                    $updateClass: function(a, b) {
                        var c = _a(a, b);
                        c && c.length && C.addClass(this.$$element, c);
                        var d = _a(b, a);
                        d && d.length && C.removeClass(this.$$element, d)
                    },
                    $set: function(a, b, d, g) {
                        var h, i = this.$$element[0],
                            j = Ka(i, a),
                            k = La(i, a),
                            l = a;
                        if (j ? (this.$$element.prop(a, b), g = j) : k && (this[k] = b, l = k), this[a] = b, g ? this.$attr[a] = g : (g = this.$attr[a], g || (this.$attr[a] = g = ca(a, "-"))), h = I(this.$$element), "a" === h && "href" === a || "img" === h && "src" === a) this[a] = b = D(b, "src" === a);
                        else if ("img" === h && "srcset" === a) {
                            for (var m = "", n = md(b), o = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, p = /\s/.test(n) ? o : /(,)/, q = n.split(p), r = Math.floor(q.length / 2), s = 0; r > s; s++) {
                                var t = 2 * s;
                                m += D(md(q[t]), !0), m += " " + md(q[t + 1])
                            }
                            var u = md(q[2 * s]).split(/\s/);
                            m += D(md(u[0]), !0), 2 === u.length && (m += " " + md(u[1])), this[a] = b = m
                        }
                        d !== !1 && (null === b || b === c ? this.$$element.removeAttr(g) : this.$$element.attr(g, b));
                        var v = this.$$observers;
                        v && f(v[l], function(a) {
                            try {
                                a(b)
                            } catch (c) {
                                e(c)
                            }
                        })
                    },
                    $observe: function(a, b) {
                        var c = this,
                            d = c.$$observers || (c.$$observers = ja()),
                            e = d[a] || (d[a] = []);
                        return e.push(b), y.$evalAsync(function() {
                                !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                            }),
                            function() {
                                J(e, b)
                            }
                    }
                };
                var ha = d.startSymbol(),
                    ia = d.endSymbol(),
                    ka = "{{" == ha || "}}" == ia ? p : function(a) {
                        return a.replace(/\{\{/g, ha).replace(/}}/g, ia)
                    },
                    la = /^ngAttr[A-Z]/;
                return F.$$addBindingInfo = w ? function(a, b) {
                    var c = a.data("$binding") || [];
                    ld(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
                } : o, F.$$addBindingClass = w ? function(a) {
                    E(a, "ng-binding")
                } : o, F.$$addScopeInfo = w ? function(a, b, c, d) {
                    var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                    a.data(e, b)
                } : o, F.$$addScopeClass = w ? function(a, b) {
                    E(a, b ? "ng-isolate-scope" : "ng-scope")
                } : o, F
            }]
        }

        function $a(a) {
            return pa(a.replace(Xd, ""))
        }

        function _a(a, b) {
            var c = "",
                d = a.split(/\s+/),
                e = b.split(/\s+/);
            a: for (var f = 0; f < d.length; f++) {
                for (var g = d[f], h = 0; h < e.length; h++)
                    if (g == e[h]) continue a;
                c += (c.length > 0 ? " " : "") + g
            }
            return c
        }

        function ab(a) {
            a = ad(a);
            var b = a.length;
            if (1 >= b) return a;
            for (; b--;) {
                var c = a[b];
                c.nodeType === ud && ed.call(a, b, 1)
            }
            return a
        }

        function bb() {
            var a = {},
                b = !1,
                e = /^(\S+)(\s+as\s+(\w+))?$/;
            this.register = function(b, c) {
                ga(b, "controller"), t(b) ? l(a, b) : a[b] = c
            }, this.allowGlobals = function() {
                b = !0
            }, this.$get = ["$injector", "$window", function(f, g) {
                function h(a, b, c, e) {
                    if (!a || !t(a.$scope)) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
                    a.$scope[b] = c
                }
                return function(d, i, j, k) {
                    var m, n, o, p;
                    if (j = j === !0, k && u(k) && (p = k), u(d)) {
                        if (n = d.match(e), !n) throw Yd("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", d);
                        o = n[1], p = p || n[3], d = a.hasOwnProperty(o) ? a[o] : ha(i.$scope, o, !0) || (b ? ha(g, o, !0) : c), fa(d, o, !0)
                    }
                    if (j) {
                        var q = (ld(d) ? d[d.length - 1] : d).prototype;
                        return m = Object.create(q || null), p && h(i, p, m, o || d.name), l(function() {
                            return f.invoke(d, m, i, o), m
                        }, {
                            instance: m,
                            identifier: p
                        })
                    }
                    return m = f.instantiate(d, i, o), p && h(i, p, m, o || d.name), m
                }
            }]
        }

        function cb() {
            this.$get = ["$window", function(a) {
                return ad(a.document)
            }]
        }

        function db() {
            this.$get = ["$log", function(a) {
                return function(b, c) {
                    a.error.apply(a, arguments)
                }
            }]
        }

        function eb(a, b) {
            if (u(a)) {
                var c = a.replace(be, "").trim();
                if (c) {
                    var d = b("Content-Type");
                    (d && 0 === d.indexOf(Zd) || fb(c)) && (a = S(c))
                }
            }
            return a
        }

        function fb(a) {
            var b = a.match(_d);
            return b && ae[b[0]].test(a)
        }

        function gb(a) {
            var b, c, d, e = ja();
            return a ? (f(a.split("\n"), function(a) {
                d = a.indexOf(":"), b = Wc(md(a.substr(0, d))), c = md(a.substr(d + 1)), b && (e[b] = e[b] ? e[b] + ", " + c : c)
            }), e) : e
        }

        function hb(a) {
            var b = t(a) ? a : c;
            return function(c) {
                if (b || (b = gb(a)), c) {
                    var d = b[Wc(c)];
                    return void 0 === d && (d = null), d
                }
                return b
            }
        }

        function ib(a, b, c, d) {
            return x(d) ? d(a, b, c) : (f(d, function(d) {
                a = d(a, b, c)
            }), a)
        }

        function jb(a) {
            return a >= 200 && 300 > a
        }

        function kb() {
            var a = this.defaults = {
                    transformResponse: [eb],
                    transformRequest: [function(a) {
                        return !t(a) || B(a) || D(a) || C(a) ? a : R(a)
                    }],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        post: L($d),
                        put: L($d),
                        patch: L($d)
                    },
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN"
                },
                b = !1;
            this.useApplyAsync = function(a) {
                return s(a) ? (b = !!a, this) : b
            };
            var e = this.interceptors = [];
            this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(g, i, j, k, m, n) {
                function o(b) {
                    function e(a) {
                        var b = l({}, a);
                        return a.data ? b.data = ib(a.data, a.headers, a.status, i.transformResponse) : b.data = a.data, jb(a.status) ? b : m.reject(b)
                    }

                    function g(a) {
                        var b, c = {};
                        return f(a, function(a, d) {
                            x(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a
                        }), c
                    }

                    function h(b) {
                        var c, d, e, f = a.headers,
                            h = l({}, b.headers);
                        f = l({}, f.common, f[Wc(b.method)]);
                        a: for (c in f) {
                            d = Wc(c);
                            for (e in h)
                                if (Wc(e) === d) continue a;
                            h[c] = f[c]
                        }
                        return g(h)
                    }
                    if (!id.isObject(b)) throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
                    var i = l({
                        method: "get",
                        transformRequest: a.transformRequest,
                        transformResponse: a.transformResponse
                    }, b);
                    i.headers = h(b), i.method = Yc(i.method);
                    var j = function(b) {
                            var d = b.headers,
                                g = ib(b.data, hb(d), c, b.transformRequest);
                            return r(g) && f(d, function(a, b) {
                                "content-type" === Wc(b) && delete d[b]
                            }), r(b.withCredentials) && !r(a.withCredentials) && (b.withCredentials = a.withCredentials), v(b, g).then(e, e)
                        },
                        k = [j, c],
                        n = m.when(i);
                    for (f(A, function(a) {
                            (a.request || a.requestError) && k.unshift(a.request, a.requestError), (a.response || a.responseError) && k.push(a.response, a.responseError)
                        }); k.length;) {
                        var o = k.shift(),
                            p = k.shift();
                        n = n.then(o, p)
                    }
                    return n.success = function(a) {
                        return n.then(function(b) {
                            a(b.data, b.status, b.headers, i)
                        }), n
                    }, n.error = function(a) {
                        return n.then(null, function(b) {
                            a(b.data, b.status, b.headers, i)
                        }), n
                    }, n
                }

                function p(a) {
                    f(arguments, function(a) {
                        o[a] = function(b, c) {
                            return o(l(c || {}, {
                                method: a,
                                url: b
                            }))
                        }
                    })
                }

                function q(a) {
                    f(arguments, function(a) {
                        o[a] = function(b, c, d) {
                            return o(l(d || {}, {
                                method: a,
                                url: b,
                                data: c
                            }))
                        }
                    })
                }

                function v(d, e) {
                    function f(a, c, d, e) {
                        function f() {
                            h(c, a, d, e)
                        }
                        n && (jb(a) ? n.put(w, [a, c, gb(d), e]) : n.remove(w)), b ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply())
                    }

                    function h(a, b, c, e) {
                        b = Math.max(b, 0), (jb(b) ? q.resolve : q.reject)({
                            data: a,
                            status: b,
                            headers: hb(c),
                            config: d,
                            statusText: e
                        })
                    }

                    function j(a) {
                        h(a.data, a.status, L(a.headers()), a.statusText)
                    }

                    function l() {
                        var a = o.pendingRequests.indexOf(d); - 1 !== a && o.pendingRequests.splice(a, 1)
                    }
                    var n, p, q = m.defer(),
                        u = q.promise,
                        v = d.headers,
                        w = y(d.url, d.params);
                    if (o.pendingRequests.push(d), u.then(l, l), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (n = t(d.cache) ? d.cache : t(a.cache) ? a.cache : z), n && (p = n.get(w), s(p) ? F(p) ? p.then(j, j) : ld(p) ? h(p[1], p[0], L(p[2]), p[3]) : h(p, 200, {}, "OK") : n.put(w, u)), r(p)) {
                        var x = ec(d.url) ? i.cookies()[d.xsrfCookieName || a.xsrfCookieName] : c;
                        x && (v[d.xsrfHeaderName || a.xsrfHeaderName] = x), g(d.method, w, e, f, v, d.timeout, d.withCredentials, d.responseType)
                    }
                    return u
                }

                function y(a, b) {
                    if (!b) return a;
                    var c = [];
                    return h(b, function(a, b) {
                        null === a || r(a) || (ld(a) || (a = [a]), f(a, function(a) {
                            t(a) && (a = w(a) ? a.toISOString() : R(a)), c.push(Y(b) + "=" + Y(a))
                        }))
                    }), c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a
                }
                var z = j("$http"),
                    A = [];
                return f(e, function(a) {
                    A.unshift(u(a) ? n.get(a) : n.invoke(a))
                }), o.pendingRequests = [], p("get", "delete", "head", "jsonp"), q("post", "put", "patch"), o.defaults = a, o
            }]
        }

        function lb() {
            return new a.XMLHttpRequest
        }

        function mb() {
            this.$get = ["$browser", "$window", "$document", function(a, b, c) {
                return nb(a, lb, a.defer, b.angular.callbacks, c[0])
            }]
        }

        function nb(a, b, d, e, g) {
            function h(a, b, c) {
                var d = g.createElement("script"),
                    f = null;
                return d.type = "text/javascript", d.src = a, d.async = !0, f = function(a) {
                    Bd(d, "load", f), Bd(d, "error", f), g.body.removeChild(d), d = null;
                    var h = -1,
                        i = "unknown";
                    a && ("load" !== a.type || e[b].called || (a = {
                        type: "error"
                    }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
                }, Ad(d, "load", f), Ad(d, "error", f), g.body.appendChild(d), f
            }
            return function(g, i, j, k, l, m, n, p) {
                function q() {
                    u && u(), v && v.abort()
                }

                function r(b, e, f, g, h) {
                    y !== c && d.cancel(y), u = v = null, b(e, f, g, h), a.$$completeOutstandingRequest(o)
                }
                if (a.$$incOutstandingRequestCount(), i = i || a.url(),
                    "jsonp" == Wc(g)) {
                    var t = "_" + (e.counter++).toString(36);
                    e[t] = function(a) {
                        e[t].data = a, e[t].called = !0
                    };
                    var u = h(i.replace("JSON_CALLBACK", "angular.callbacks." + t), t, function(a, b) {
                        r(k, a, e[t].data, "", b), e[t] = o
                    })
                } else {
                    var v = b();
                    v.open(g, i, !0), f(l, function(a, b) {
                        s(a) && v.setRequestHeader(b, a)
                    }), v.onload = function() {
                        var a = v.statusText || "",
                            b = "response" in v ? v.response : v.responseText,
                            c = 1223 === v.status ? 204 : v.status;
                        0 === c && (c = b ? 200 : "file" == dc(i).protocol ? 404 : 0), r(k, c, b, v.getAllResponseHeaders(), a)
                    };
                    var w = function() {
                        r(k, -1, null, null, "")
                    };
                    if (v.onerror = w, v.onabort = w, n && (v.withCredentials = !0), p) try {
                        v.responseType = p
                    } catch (x) {
                        if ("json" !== p) throw x
                    }
                    v.send(j || null)
                }
                if (m > 0) var y = d(q, m);
                else F(m) && m.then(q)
            }
        }

        function ob() {
            var a = "{{",
                b = "}}";
            this.startSymbol = function(b) {
                return b ? (a = b, this) : a
            }, this.endSymbol = function(a) {
                return a ? (b = a, this) : b
            }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
                function f(a) {
                    return "\\\\\\" + a
                }

                function g(f, g, m, n) {
                    function o(c) {
                        return c.replace(j, a).replace(k, b)
                    }

                    function p(a) {
                        try {
                            return a = D(a), n && !s(a) ? a : E(a)
                        } catch (b) {
                            var c = ce("interr", "Can't interpolate: {0}\n{1}", f, b.toString());
                            d(c)
                        }
                    }
                    n = !!n;
                    for (var q, t, u, v = 0, w = [], y = [], z = f.length, A = [], B = []; z > v;) {
                        if (-1 == (q = f.indexOf(a, v)) || -1 == (t = f.indexOf(b, q + h))) {
                            v !== z && A.push(o(f.substring(v)));
                            break
                        }
                        v !== q && A.push(o(f.substring(v, q))), u = f.substring(q + h, t), w.push(u), y.push(c(u, p)), v = t + i, B.push(A.length), A.push("")
                    }
                    if (m && A.length > 1) throw ce("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
                    if (!g || w.length) {
                        var C = function(a) {
                                for (var b = 0, c = w.length; c > b; b++) {
                                    if (n && r(a[b])) return;
                                    A[B[b]] = a[b]
                                }
                                return A.join("")
                            },
                            D = function(a) {
                                return m ? e.getTrusted(m, a) : e.valueOf(a)
                            },
                            E = function(a) {
                                if (null == a) return "";
                                switch (typeof a) {
                                    case "string":
                                        break;
                                    case "number":
                                        a = "" + a;
                                        break;
                                    default:
                                        a = R(a)
                                }
                                return a
                            };
                        return l(function(a) {
                            var b = 0,
                                c = w.length,
                                e = new Array(c);
                            try {
                                for (; c > b; b++) e[b] = y[b](a);
                                return C(e)
                            } catch (g) {
                                var h = ce("interr", "Can't interpolate: {0}\n{1}", f, g.toString());
                                d(h)
                            }
                        }, {
                            exp: f,
                            expressions: w,
                            $$watchDelegate: function(a, b, c) {
                                var d;
                                return a.$watchGroup(y, function(c, e) {
                                    var f = C(c);
                                    x(b) && b.call(this, f, c !== e ? d : f, a), d = f
                                }, c)
                            }
                        })
                    }
                }
                var h = a.length,
                    i = b.length,
                    j = new RegExp(a.replace(/./g, f), "g"),
                    k = new RegExp(b.replace(/./g, f), "g");
                return g.startSymbol = function() {
                    return a
                }, g.endSymbol = function() {
                    return b
                }, g
            }]
        }

        function pb() {
            this.$get = ["$rootScope", "$window", "$q", "$$q", function(a, b, c, d) {
                function e(e, g, h, i) {
                    var j = b.setInterval,
                        k = b.clearInterval,
                        l = 0,
                        m = s(i) && !i,
                        n = (m ? d : c).defer(),
                        o = n.promise;
                    return h = s(h) ? h : 0, o.then(null, null, e), o.$$intervalId = j(function() {
                        n.notify(l++), h > 0 && l >= h && (n.resolve(l), k(o.$$intervalId), delete f[o.$$intervalId]), m || a.$apply()
                    }, g), f[o.$$intervalId] = n, o
                }
                var f = {};
                return e.cancel = function(a) {
                    return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
                }, e
            }]
        }

        function qb() {
            this.$get = function() {
                return {
                    id: "en-us",
                    NUMBER_FORMATS: {
                        DECIMAL_SEP: ".",
                        GROUP_SEP: ",",
                        PATTERNS: [{
                            minInt: 1,
                            minFrac: 0,
                            maxFrac: 3,
                            posPre: "",
                            posSuf: "",
                            negPre: "-",
                            negSuf: "",
                            gSize: 3,
                            lgSize: 3
                        }, {
                            minInt: 1,
                            minFrac: 2,
                            maxFrac: 2,
                            posPre: "¤",
                            posSuf: "",
                            negPre: "(¤",
                            negSuf: ")",
                            gSize: 3,
                            lgSize: 3
                        }],
                        CURRENCY_SYM: "$"
                    },
                    DATETIME_FORMATS: {
                        MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                        SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                        DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                        SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                        AMPMS: ["AM", "PM"],
                        medium: "MMM d, y h:mm:ss a",
                        "short": "M/d/yy h:mm a",
                        fullDate: "EEEE, MMMM d, y",
                        longDate: "MMMM d, y",
                        mediumDate: "MMM d, y",
                        shortDate: "M/d/yy",
                        mediumTime: "h:mm:ss a",
                        shortTime: "h:mm a",
                        ERANAMES: ["Before Christ", "Anno Domini"],
                        ERAS: ["BC", "AD"]
                    },
                    pluralCat: function(a) {
                        return 1 === a ? "one" : "other"
                    }
                }
            }
        }

        function rb(a) {
            for (var b = a.split("/"), c = b.length; c--;) b[c] = X(b[c]);
            return b.join("/")
        }

        function sb(a, b) {
            var c = dc(a);
            b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = m(c.port) || ee[c.protocol] || null
        }

        function tb(a, b) {
            var c = "/" !== a.charAt(0);
            c && (a = "/" + a);
            var d = dc(a);
            b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = V(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
        }

        function ub(a, b) {
            return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
        }

        function vb(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substr(0, b)
        }

        function wb(a) {
            return a.replace(/(#.+)|#$/, "$1")
        }

        function xb(a) {
            return a.substr(0, vb(a).lastIndexOf("/") + 1)
        }

        function yb(a) {
            return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
        }

        function zb(a, b) {
            this.$$html5 = !0, b = b || "";
            var d = xb(a);
            sb(a, this), this.$$parse = function(a) {
                var b = ub(d, a);
                if (!u(b)) throw fe("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, d);
                tb(b, this), this.$$path || (this.$$path = "/"), this.$$compose()
            }, this.$$compose = function() {
                var a = W(this.$$search),
                    b = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = rb(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
            }, this.$$parseLinkUrl = function(e, f) {
                if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
                var g, h, i;
                return (g = ub(a, e)) !== c ? (h = g, i = (g = ub(b, g)) !== c ? d + (ub("/", g) || g) : a + h) : (g = ub(d, e)) !== c ? i = d + g : d == e + "/" && (i = d), i && this.$$parse(i), !!i
            }
        }

        function Ab(a, b) {
            var c = xb(a);
            sb(a, this), this.$$parse = function(d) {
                function e(a, b, c) {
                    var d, e = /^\/[A-Z]:(\/.*)/;
                    return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
                }
                var f, g = ub(a, d) || ub(c, d);
                "#" === g.charAt(0) ? (f = ub(b, g), r(f) && (f = g)) : f = this.$$html5 ? g : "", tb(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
            }, this.$$compose = function() {
                var c = W(this.$$search),
                    d = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = rb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
            }, this.$$parseLinkUrl = function(b, c) {
                return vb(a) == vb(b) ? (this.$$parse(b), !0) : !1
            }
        }

        function Bb(a, b) {
            this.$$html5 = !0, Ab.apply(this, arguments);
            var c = xb(a);
            this.$$parseLinkUrl = function(d, e) {
                if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
                var f, g;
                return a == vb(d) ? f = d : (g = ub(c, d)) ? f = a + b + g : c === d + "/" && (f = c), f && this.$$parse(f), !!f
            }, this.$$compose = function() {
                var c = W(this.$$search),
                    d = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = rb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url
            }
        }

        function Cb(a) {
            return function() {
                return this[a]
            }
        }

        function Db(a, b) {
            return function(c) {
                return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
            }
        }

        function Eb() {
            var a = "",
                b = {
                    enabled: !1,
                    requireBase: !0,
                    rewriteLinks: !0
                };
            this.hashPrefix = function(b) {
                return s(b) ? (a = b, this) : a
            }, this.html5Mode = function(a) {
                return E(a) ? (b.enabled = a, this) : t(a) ? (E(a.enabled) && (b.enabled = a.enabled), E(a.requireBase) && (b.requireBase = a.requireBase), E(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
            }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
                function h(a, b, c) {
                    var e = j.url(),
                        f = j.$$state;
                    try {
                        d.url(a, b, c), j.$$state = d.state()
                    } catch (g) {
                        throw j.url(e), j.$$state = f, g
                    }
                }

                function i(a, b) {
                    c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
                }
                var j, k, l, m = d.baseHref(),
                    n = d.url();
                if (b.enabled) {
                    if (!m && b.requireBase) throw fe("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                    l = yb(n) + (m || "/"), k = e.history ? zb : Bb
                } else l = vb(n), k = Ab;
                j = new k(l, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
                var o = /^\s*(javascript|mailto):/i;
                f.on("click", function(a) {
                    if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                        for (var e = ad(a.target);
                            "a" !== I(e[0]);)
                            if (e[0] === f[0] || !(e = e.parent())[0]) return;
                        var h = e.prop("href"),
                            i = e.attr("href") || e.attr("xlink:href");
                        t(h) && "[object SVGAnimatedString]" === h.toString() && (h = dc(h.animVal).href), o.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                    }
                }), wb(j.absUrl()) != wb(n) && d.url(j.absUrl(), !0);
                var p = !0;
                return d.onUrlChange(function(a, b) {
                    c.$evalAsync(function() {
                        var d, e = j.absUrl(),
                            f = j.$$state;
                        j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (p = !1, i(e, f)))
                    }), c.$$phase || c.$digest()
                }), c.$watch(function() {
                    var a = wb(d.url()),
                        b = wb(j.absUrl()),
                        f = d.state(),
                        g = j.$$replace,
                        k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                    (p || k) && (p = !1, c.$evalAsync(function() {
                        var b = j.absUrl(),
                            d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                        j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
                    })), j.$$replace = !1
                }), j
            }]
        }

        function Fb() {
            var a = !0,
                b = this;
            this.debugEnabled = function(b) {
                return s(b) ? (a = b, this) : a
            }, this.$get = ["$window", function(c) {
                function d(a) {
                    return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
                }

                function e(a) {
                    var b = c.console || {},
                        e = b[a] || b.log || o,
                        g = !1;
                    try {
                        g = !!e.apply
                    } catch (h) {}
                    return g ? function() {
                        var a = [];
                        return f(arguments, function(b) {
                            a.push(d(b))
                        }), e.apply(b, a)
                    } : function(a, b) {
                        e(a, null == b ? "" : b)
                    }
                }
                return {
                    log: e("log"),
                    info: e("info"),
                    warn: e("warn"),
                    error: e("error"),
                    debug: function() {
                        var c = e("debug");
                        return function() {
                            a && c.apply(b, arguments)
                        }
                    }()
                }
            }]
        }

        function Gb(a, b) {
            if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw he("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
            return a
        }

        function Hb(a, b) {
            if (a) {
                if (a.constructor === a) throw he("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
                if (a.window === a) throw he("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
                if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw he("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
                if (a === Object) throw he("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
            }
            return a
        }

        function Ib(a, b) {
            if (a) {
                if (a.constructor === a) throw he("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
                if (a === ie || a === je || a === ke) throw he("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
            }
        }

        function Jb(a) {
            return a.constant
        }

        function Kb(a, b, c, d, e) {
            Hb(a, e), Hb(b, e);
            for (var f, g = c.split("."), h = 0; g.length > 1; h++) {
                f = Gb(g.shift(), e);
                var i = 0 === h && b && b[f] || a[f];
                i || (i = {}, a[f] = i), a = Hb(i, e)
            }
            return f = Gb(g.shift(), e), Hb(a[f], e), a[f] = d, d
        }

        function Lb(a) {
            return "constructor" == a
        }

        function Mb(a, b, d, e, f, g, h) {
            Gb(a, g), Gb(b, g), Gb(d, g), Gb(e, g), Gb(f, g);
            var i = function(a) {
                    return Hb(a, g)
                },
                j = h || Lb(a) ? i : p,
                k = h || Lb(b) ? i : p,
                l = h || Lb(d) ? i : p,
                m = h || Lb(e) ? i : p,
                n = h || Lb(f) ? i : p;
            return function(g, h) {
                var i = h && h.hasOwnProperty(a) ? h : g;
                return null == i ? i : (i = j(i[a]), b ? null == i ? c : (i = k(i[b]), d ? null == i ? c : (i = l(i[d]), e ? null == i ? c : (i = m(i[e]), f ? null == i ? c : i = n(i[f]) : i) : i) : i) : i)
            }
        }

        function Nb(a, b) {
            return function(c, d) {
                return a(c, d, Hb, b)
            }
        }

        function Ob(a, b, d) {
            var e = b.expensiveChecks,
                g = e ? re : qe,
                h = g[a];
            if (h) return h;
            var i = a.split("."),
                j = i.length;
            if (b.csp) h = 6 > j ? Mb(i[0], i[1], i[2], i[3], i[4], d, e) : function(a, b) {
                var f, g = 0;
                do f = Mb(i[g++], i[g++], i[g++], i[g++], i[g++], d, e)(a, b), b = c, a = f; while (j > g);
                return f
            };
            else {
                var k = "";
                e && (k += "s = eso(s, fe);\nl = eso(l, fe);\n");
                var l = e;
                f(i, function(a, b) {
                    Gb(a, d);
                    var c = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                    (e || Lb(a)) && (c = "eso(" + c + ", fe)", l = !0), k += "if(s == null) return undefined;\ns=" + c + ";\n"
                }), k += "return s;";
                var m = new Function("s", "l", "eso", "fe", k);
                m.toString = q(k), l && (m = Nb(m, d)), h = m
            }
            return h.sharedGetter = !0, h.assign = function(b, c, d) {
                return Kb(b, d, a, c, a)
            }, g[a] = h, h
        }

        function Pb(a) {
            return x(a.valueOf) ? a.valueOf() : se.call(a)
        }

        function Qb() {
            var a = ja(),
                b = ja();
            this.$get = ["$filter", "$sniffer", function(c, d) {
                function e(a) {
                    var b = a;
                    return a.sharedGetter && (b = function(b, c) {
                        return a(b, c)
                    }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign), b
                }

                function g(a, b) {
                    for (var c = 0, d = a.length; d > c; c++) {
                        var e = a[c];
                        e.constant || (e.inputs ? g(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                    }
                    return b
                }

                function h(a, b) {
                    return null == a || null == b ? a === b : "object" == typeof a && (a = Pb(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
                }

                function i(a, b, c, d) {
                    var e, f = d.$$inputs || (d.$$inputs = g(d.inputs, []));
                    if (1 === f.length) {
                        var i = h;
                        return f = f[0], a.$watch(function(a) {
                            var b = f(a);
                            return h(b, i) || (e = d(a), i = b && Pb(b)), e
                        }, b, c)
                    }
                    for (var j = [], k = 0, l = f.length; l > k; k++) j[k] = h;
                    return a.$watch(function(a) {
                        for (var b = !1, c = 0, g = f.length; g > c; c++) {
                            var i = f[c](a);
                            (b || (b = !h(i, j[c]))) && (j[c] = i && Pb(i))
                        }
                        return b && (e = d(a)), e
                    }, b, c)
                }

                function j(a, b, c, d) {
                    var e, f;
                    return e = a.$watch(function(a) {
                        return d(a)
                    }, function(a, c, d) {
                        f = a, x(b) && b.apply(this, arguments), s(a) && d.$$postDigest(function() {
                            s(f) && e()
                        })
                    }, c)
                }

                function k(a, b, c, d) {
                    function e(a) {
                        var b = !0;
                        return f(a, function(a) {
                            s(a) || (b = !1)
                        }), b
                    }
                    var g, h;
                    return g = a.$watch(function(a) {
                        return d(a)
                    }, function(a, c, d) {
                        h = a, x(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
                            e(h) && g()
                        })
                    }, c)
                }

                function l(a, b, c, d) {
                    var e;
                    return e = a.$watch(function(a) {
                        return d(a)
                    }, function(a, c, d) {
                        x(b) && b.apply(this, arguments), e()
                    }, c)
                }

                function m(a, b) {
                    if (!b) return a;
                    var c = a.$$watchDelegate,
                        d = c !== k && c !== j,
                        e = d ? function(c, d) {
                            var e = a(c, d);
                            return b(e, c, d)
                        } : function(c, d) {
                            var e = a(c, d),
                                f = b(e, c, d);
                            return s(e) ? f : e
                        };
                    return a.$$watchDelegate && a.$$watchDelegate !== i ? e.$$watchDelegate = a.$$watchDelegate : b.$stateful || (e.$$watchDelegate = i, e.inputs = [a]), e
                }
                var n = {
                        csp: d.csp,
                        expensiveChecks: !1
                    },
                    p = {
                        csp: d.csp,
                        expensiveChecks: !0
                    };
                return function(d, f, g) {
                    var h, q, r;
                    switch (typeof d) {
                        case "string":
                            r = d = d.trim();
                            var s = g ? b : a;
                            if (h = s[r], !h) {
                                ":" === d.charAt(0) && ":" === d.charAt(1) && (q = !0, d = d.substring(2));
                                var t = g ? p : n,
                                    u = new oe(t),
                                    v = new pe(u, c, t);
                                h = v.parse(d), h.constant ? h.$$watchDelegate = l : q ? (h = e(h), h.$$watchDelegate = h.literal ? k : j) : h.inputs && (h.$$watchDelegate = i), s[r] = h
                            }
                            return m(h, f);
                        case "function":
                            return m(d, f);
                        default:
                            return m(o, f)
                    }
                }
            }]
        }

        function Rb() {
            this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
                return Tb(function(b) {
                    a.$evalAsync(b)
                }, b)
            }]
        }

        function Sb() {
            this.$get = ["$browser", "$exceptionHandler", function(a, b) {
                return Tb(function(b) {
                    a.defer(b)
                }, b)
            }]
        }

        function Tb(a, b) {
            function e(a, b, c) {
                function d(b) {
                    return function(c) {
                        e || (e = !0, b.call(a, c))
                    }
                }
                var e = !1;
                return [d(b), d(c)]
            }

            function g() {
                this.$$state = {
                    status: 0
                }
            }

            function h(a, b) {
                return function(c) {
                    b.call(a, c)
                }
            }

            function i(a) {
                var d, e, f;
                f = a.pending, a.processScheduled = !1, a.pending = c;
                for (var g = 0, h = f.length; h > g; ++g) {
                    e = f[g][0], d = f[g][a.status];
                    try {
                        x(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value)
                    } catch (i) {
                        e.reject(i), b(i)
                    }
                }
            }

            function j(b) {
                !b.processScheduled && b.pending && (b.processScheduled = !0, a(function() {
                    i(b)
                }))
            }

            function k() {
                this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
            }

            function l(a) {
                var b = new k,
                    c = 0,
                    d = ld(a) ? [] : {};
                return f(a, function(a, e) {
                    c++, r(a).then(function(a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                    }, function(a) {
                        d.hasOwnProperty(e) || b.reject(a)
                    })
                }), 0 === c && b.resolve(d), b.promise
            }
            var m = d("$q", TypeError),
                n = function() {
                    return new k
                };
            g.prototype = {
                then: function(a, b, c) {
                    var d = new k;
                    return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && j(this.$$state), d.promise
                },
                "catch": function(a) {
                    return this.then(null, a)
                },
                "finally": function(a, b) {
                    return this.then(function(b) {
                        return q(b, !0, a)
                    }, function(b) {
                        return q(b, !1, a)
                    }, b)
                }
            }, k.prototype = {
                resolve: function(a) {
                    this.promise.$$state.status || (a === this.promise ? this.$$reject(m("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
                },
                $$resolve: function(a) {
                    var c, d;
                    d = e(this, this.$$resolve, this.$$reject);
                    try {
                        (t(a) || x(a)) && (c = a && a.then), x(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, j(this.promise.$$state))
                    } catch (f) {
                        d[1](f), b(f)
                    }
                },
                reject: function(a) {
                    this.promise.$$state.status || this.$$reject(a)
                },
                $$reject: function(a) {
                    this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state)
                },
                notify: function(c) {
                    var d = this.promise.$$state.pending;
                    this.promise.$$state.status <= 0 && d && d.length && a(function() {
                        for (var a, e, f = 0, g = d.length; g > f; f++) {
                            e = d[f][0], a = d[f][3];
                            try {
                                e.notify(x(a) ? a(c) : c)
                            } catch (h) {
                                b(h)
                            }
                        }
                    })
                }
            };
            var o = function(a) {
                    var b = new k;
                    return b.reject(a), b.promise
                },
                p = function(a, b) {
                    var c = new k;
                    return b ? c.resolve(a) : c.reject(a), c.promise
                },
                q = function(a, b, c) {
                    var d = null;
                    try {
                        x(c) && (d = c())
                    } catch (e) {
                        return p(e, !1)
                    }
                    return F(d) ? d.then(function() {
                        return p(a, b)
                    }, function(a) {
                        return p(a, !1)
                    }) : p(a, b)
                },
                r = function(a, b, c, d) {
                    var e = new k;
                    return e.resolve(a), e.promise.then(b, c, d)
                },
                s = function u(a) {
                    function b(a) {
                        d.resolve(a)
                    }

                    function c(a) {
                        d.reject(a)
                    }
                    if (!x(a)) throw m("norslvr", "Expected resolverFn, got '{0}'", a);
                    if (!(this instanceof u)) return new u(a);
                    var d = new k;
                    return a(b, c), d.promise
                };
            return s.defer = n, s.reject = o, s.when = r, s.all = l, s
        }

        function Ub() {
            this.$get = ["$window", "$timeout", function(a, b) {
                var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
                    d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                    e = !!c,
                    f = e ? function(a) {
                        var b = c(a);
                        return function() {
                            d(b)
                        }
                    } : function(a) {
                        var c = b(a, 16.66, !1);
                        return function() {
                            b.cancel(c)
                        }
                    };
                return f.supported = e, f
            }]
        }

        function Vb() {
            function a(a) {
                function b() {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = j(), this.$$ChildScope = null
                }
                return b.prototype = a, b
            }
            var b = 10,
                c = d("$rootScope"),
                g = null,
                h = null;
            this.digestTtl = function(a) {
                return arguments.length && (b = a), b
            }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(d, i, k, l) {
                function m(a) {
                    a.currentScope.$$destroyed = !0
                }

                function n() {
                    this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
                }

                function p(a) {
                    if (y.$$phase) throw c("inprog", "{0} already in progress", y.$$phase);
                    y.$$phase = a
                }

                function q() {
                    y.$$phase = null
                }

                function s(a, b, c) {
                    do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
                }

                function u() {}

                function v() {
                    for (; B.length;) try {
                        B.shift()()
                    } catch (a) {
                        i(a)
                    }
                    h = null
                }

                function w() {
                    null === h && (h = l.defer(function() {
                        y.$apply(v)
                    }))
                }
                n.prototype = {
                    constructor: n,
                    $new: function(b, c) {
                        var d;
                        return c = c || this, b ? (d = new n, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", m), d
                    },
                    $watch: function(a, b, c) {
                        var d = k(a);
                        if (d.$$watchDelegate) return d.$$watchDelegate(this, b, c, d);
                        var e = this,
                            f = e.$$watchers,
                            h = {
                                fn: b,
                                last: u,
                                get: d,
                                exp: a,
                                eq: !!c
                            };
                        return g = null, x(b) || (h.fn = o), f || (f = e.$$watchers = []), f.unshift(h),
                            function() {
                                J(f, h), g = null
                            }
                    },
                    $watchGroup: function(a, b) {
                        function c() {
                            i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
                        }
                        var d = new Array(a.length),
                            e = new Array(a.length),
                            g = [],
                            h = this,
                            i = !1,
                            j = !0;
                        if (!a.length) {
                            var k = !0;
                            return h.$evalAsync(function() {
                                    k && b(e, e, h)
                                }),
                                function() {
                                    k = !1
                                }
                        }
                        return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                            e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
                        }) : (f(a, function(a, b) {
                            var f = h.$watch(a, function(a, f) {
                                e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
                            });
                            g.push(f)
                        }), function() {
                            for (; g.length;) g.shift()()
                        })
                    },
                    $watchCollection: function(a, b) {
                        function c(a) {
                            f = a;
                            var b, c, d, h, i;
                            if (!r(f)) {
                                if (t(f))
                                    if (e(f)) {
                                        g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                                        for (var j = 0; b > j; j++) i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, g[j] = h)
                                    } else {
                                        g !== o && (g = o = {}, q = 0, l++), b = 0;
                                        for (c in f) f.hasOwnProperty(c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                                        if (q > b) {
                                            l++;
                                            for (c in g) f.hasOwnProperty(c) || (q--, delete g[c])
                                        }
                                    }
                                else g !== f && (g = f, l++);
                                return l
                            }
                        }

                        function d() {
                            if (p ? (p = !1, b(f, f, i)) : b(f, h, i), j)
                                if (t(f))
                                    if (e(f)) {
                                        h = new Array(f.length);
                                        for (var a = 0; a < f.length; a++) h[a] = f[a]
                                    } else {
                                        h = {};
                                        for (var c in f) Xc.call(f, c) && (h[c] = f[c])
                                    }
                            else h = f
                        }
                        c.$stateful = !0;
                        var f, g, h, i = this,
                            j = b.length > 1,
                            l = 0,
                            m = k(a, c),
                            n = [],
                            o = {},
                            p = !0,
                            q = 0;
                        return this.$watch(m, d)
                    },
                    $digest: function() {
                        var a, d, e, f, j, k, m, n, o, r, s = b,
                            t = this,
                            w = [];
                        p("$digest"), l.$$checkUrlChange(), this === y && null !== h && (l.defer.cancel(h), v()), g = null;
                        do {
                            for (k = !1, n = t; z.length;) {
                                try {
                                    r = z.shift(), r.scope.$eval(r.expression, r.locals)
                                } catch (B) {
                                    i(B)
                                }
                                g = null
                            }
                            a: do {
                                if (f = n.$$watchers)
                                    for (j = f.length; j--;) try {
                                        if (a = f[j])
                                            if ((d = a.get(n)) === (e = a.last) || (a.eq ? M(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e))) {
                                                if (a === g) {
                                                    k = !1;
                                                    break a
                                                }
                                            } else k = !0, g = a, a.last = a.eq ? K(d, null) : d, a.fn(d, e === u ? d : e, n), 5 > s && (o = 4 - s, w[o] || (w[o] = []), w[o].push({
                                                msg: x(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                                newVal: d,
                                                oldVal: e
                                            }))
                                    } catch (B) {
                                        i(B)
                                    }
                                if (!(m = n.$$childHead || n !== t && n.$$nextSibling))
                                    for (; n !== t && !(m = n.$$nextSibling);) n = n.$parent
                            } while (n = m);
                            if ((k || z.length) && !s--) throw q(), c("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", b, w)
                        } while (k || z.length);
                        for (q(); A.length;) try {
                            A.shift()()
                        } catch (B) {
                            i(B)
                        }
                    },
                    $destroy: function() {
                        if (!this.$$destroyed) {
                            var a = this.$parent;
                            if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== y) {
                                for (var b in this.$$listenerCount) s(this, this.$$listenerCount[b], b);
                                a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = o, this.$on = this.$watch = this.$watchGroup = function() {
                                    return o
                                }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                            }
                        }
                    },
                    $eval: function(a, b) {
                        return k(a)(this, b)
                    },
                    $evalAsync: function(a, b) {
                        y.$$phase || z.length || l.defer(function() {
                            z.length && y.$digest()
                        }), z.push({
                            scope: this,
                            expression: a,
                            locals: b
                        })
                    },
                    $$postDigest: function(a) {
                        A.push(a)
                    },
                    $apply: function(a) {
                        try {
                            return p("$apply"), this.$eval(a)
                        } catch (b) {
                            i(b)
                        } finally {
                            q();
                            try {
                                y.$digest()
                            } catch (b) {
                                throw i(b), b
                            }
                        }
                    },
                    $applyAsync: function(a) {
                        function b() {
                            c.$eval(a)
                        }
                        var c = this;
                        a && B.push(b), w()
                    },
                    $on: function(a, b) {
                        var c = this.$$listeners[a];
                        c || (this.$$listeners[a] = c = []), c.push(b);
                        var d = this;
                        do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                        var e = this;
                        return function() {
                            var d = c.indexOf(b); - 1 !== d && (c[d] = null, s(e, 1, a))
                        }
                    },
                    $emit: function(a, b) {
                        var c, d, e, f = [],
                            g = this,
                            h = !1,
                            j = {
                                name: a,
                                targetScope: g,
                                stopPropagation: function() {
                                    h = !0
                                },
                                preventDefault: function() {
                                    j.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            k = N([j], arguments, 1);
                        do {
                            for (c = g.$$listeners[a] || f, j.currentScope = g, d = 0, e = c.length; e > d; d++)
                                if (c[d]) try {
                                    c[d].apply(null, k)
                                } catch (l) {
                                    i(l)
                                } else c.splice(d, 1), d--, e--;
                            if (h) return j.currentScope = null, j;
                            g = g.$parent
                        } while (g);
                        return j.currentScope = null, j
                    },
                    $broadcast: function(a, b) {
                        var c = this,
                            d = c,
                            e = c,
                            f = {
                                name: a,
                                targetScope: c,
                                preventDefault: function() {
                                    f.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            };
                        if (!c.$$listenerCount[a]) return f;
                        for (var g, h, j, k = N([f], arguments, 1); d = e;) {
                            for (f.currentScope = d, g = d.$$listeners[a] || [], h = 0, j = g.length; j > h; h++)
                                if (g[h]) try {
                                    g[h].apply(null, k)
                                } catch (l) {
                                    i(l)
                                } else g.splice(h, 1), h--, j--;
                            if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== c && d.$$nextSibling))
                                for (; d !== c && !(e = d.$$nextSibling);) d = d.$parent
                        }
                        return f.currentScope = null, f
                    }
                };
                var y = new n,
                    z = y.$$asyncQueue = [],
                    A = y.$$postDigestQueue = [],
                    B = y.$$applyAsyncQueue = [];
                return y
            }]
        }

        function Wb() {
            var a = /^\s*(https?|ftp|mailto|tel|file):/,
                b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function(b) {
                return s(b) ? (a = b, this) : a
            }, this.imgSrcSanitizationWhitelist = function(a) {
                return s(a) ? (b = a, this) : b
            }, this.$get = function() {
                return function(c, d) {
                    var e, f = d ? b : a;
                    return e = dc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
                }
            }
        }

        function Xb(a) {
            if ("self" === a) return a;
            if (u(a)) {
                if (a.indexOf("***") > -1) throw te("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
                return a = nd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
            }
            if (y(a)) return new RegExp("^" + a.source + "$");
            throw te("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
        }

        function Yb(a) {
            var b = [];
            return s(a) && f(a, function(a) {
                b.push(Xb(a))
            }), b
        }

        function Zb() {
            this.SCE_CONTEXTS = ue;
            var a = ["self"],
                b = [];
            this.resourceUrlWhitelist = function(b) {
                return arguments.length && (a = Yb(b)), a
            }, this.resourceUrlBlacklist = function(a) {
                return arguments.length && (b = Yb(a)), b
            }, this.$get = ["$injector", function(d) {
                function e(a, b) {
                    return "self" === a ? ec(b) : !!a.exec(b.href)
                }

                function f(c) {
                    var d, f, g = dc(c.toString()),
                        h = !1;
                    for (d = 0, f = a.length; f > d; d++)
                        if (e(a[d], g)) {
                            h = !0;
                            break
                        }
                    if (h)
                        for (d = 0, f = b.length; f > d; d++)
                            if (e(b[d], g)) {
                                h = !1;
                                break
                            }
                    return h
                }

                function g(a) {
                    var b = function(a) {
                        this.$$unwrapTrustedValue = function() {
                            return a
                        }
                    };
                    return a && (b.prototype = new a), b.prototype.valueOf = function() {
                        return this.$$unwrapTrustedValue()
                    }, b.prototype.toString = function() {
                        return this.$$unwrapTrustedValue().toString()
                    }, b
                }

                function h(a, b) {
                    var d = m.hasOwnProperty(a) ? m[a] : null;
                    if (!d) throw te("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                    if (null === b || b === c || "" === b) return b;
                    if ("string" != typeof b) throw te("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                    return new d(b)
                }

                function i(a) {
                    return a instanceof l ? a.$$unwrapTrustedValue() : a
                }

                function j(a, b) {
                    if (null === b || b === c || "" === b) return b;
                    var d = m.hasOwnProperty(a) ? m[a] : null;
                    if (d && b instanceof d) return b.$$unwrapTrustedValue();
                    if (a === ue.RESOURCE_URL) {
                        if (f(b)) return b;
                        throw te("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                    }
                    if (a === ue.HTML) return k(b);
                    throw te("unsafe", "Attempting to use an unsafe value in a safe context.")
                }
                var k = function(a) {
                    throw te("unsafe", "Attempting to use an unsafe value in a safe context.")
                };
                d.has("$sanitize") && (k = d.get("$sanitize"));
                var l = g(),
                    m = {};
                return m[ue.HTML] = g(l), m[ue.CSS] = g(l), m[ue.URL] = g(l), m[ue.JS] = g(l), m[ue.RESOURCE_URL] = g(m[ue.URL]), {
                    trustAs: h,
                    getTrusted: j,
                    valueOf: i
                }
            }]
        }

        function $b() {
            var a = !0;
            this.enabled = function(b) {
                return arguments.length && (a = !!b), a
            }, this.$get = ["$parse", "$sceDelegate", function(b, c) {
                if (a && 8 > _c) throw te("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var d = L(ue);
                d.isEnabled = function() {
                    return a
                }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function(a, b) {
                    return b
                }, d.valueOf = p), d.parseAs = function(a, c) {
                    var e = b(c);
                    return e.literal && e.constant ? e : b(c, function(b) {
                        return d.getTrusted(a, b)
                    })
                };
                var e = d.parseAs,
                    g = d.getTrusted,
                    h = d.trustAs;
                return f(ue, function(a, b) {
                    var c = Wc(b);
                    d[pa("parse_as_" + c)] = function(b) {
                        return e(a, b)
                    }, d[pa("get_trusted_" + c)] = function(b) {
                        return g(a, b)
                    }, d[pa("trust_as_" + c)] = function(b) {
                        return h(a, b)
                    }
                }), d
            }]
        }

        function _b() {
            this.$get = ["$window", "$document", function(a, b) {
                var c, d, e = {},
                    f = m((/android (\d+)/.exec(Wc((a.navigator || {}).userAgent)) || [])[1]),
                    g = /Boxee/i.test((a.navigator || {}).userAgent),
                    h = b[0] || {},
                    i = /^(Moz|webkit|ms)(?=[A-Z])/,
                    j = h.body && h.body.style,
                    k = !1,
                    l = !1;
                if (j) {
                    for (var n in j)
                        if (d = i.exec(n)) {
                            c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                            break
                        }
                    c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), l = !!("animation" in j || c + "Animation" in j), !f || k && l || (k = u(h.body.style.webkitTransition), l = u(h.body.style.webkitAnimation))
                }
                return {
                    history: !(!a.history || !a.history.pushState || 4 > f || g),
                    hasEvent: function(a) {
                        if ("input" === a && 11 >= _c) return !1;
                        if (r(e[a])) {
                            var b = h.createElement("div");
                            e[a] = "on" + a in b
                        }
                        return e[a]
                    },
                    csp: od(),
                    vendorPrefix: c,
                    transitions: k,
                    animations: l,
                    android: f
                }
            }]
        }

        function ac() {
            this.$get = ["$templateCache", "$http", "$q", function(a, b, c) {
                function d(e, f) {
                    function g(a) {
                        if (!f) throw Wd("tpload", "Failed to load template: {0}", e);
                        return c.reject(a)
                    }
                    d.totalPendingRequests++;
                    var h = b.defaults && b.defaults.transformResponse;
                    ld(h) ? h = h.filter(function(a) {
                        return a !== eb
                    }) : h === eb && (h = null);
                    var i = {
                        cache: a,
                        transformResponse: h
                    };
                    return b.get(e, i)["finally"](function() {
                        d.totalPendingRequests--
                    }).then(function(a) {
                        return a.data
                    }, g)
                }
                return d.totalPendingRequests = 0, d
            }]
        }

        function bc() {
            this.$get = ["$rootScope", "$browser", "$location", function(a, b, c) {
                var d = {};
                return d.findBindings = function(a, b, c) {
                    var d = a.getElementsByClassName("ng-binding"),
                        e = [];
                    return f(d, function(a) {
                        var d = id.element(a).data("$binding");
                        d && f(d, function(d) {
                            if (c) {
                                var f = new RegExp("(^|\\s)" + nd(b) + "(\\s|\\||$)");
                                f.test(d) && e.push(a)
                            } else -1 != d.indexOf(b) && e.push(a)
                        })
                    }), e
                }, d.findModels = function(a, b, c) {
                    for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
                        var f = c ? "=" : "*=",
                            g = "[" + d[e] + "model" + f + '"' + b + '"]',
                            h = a.querySelectorAll(g);
                        if (h.length) return h
                    }
                }, d.getLocation = function() {
                    return c.url()
                }, d.setLocation = function(b) {
                    b !== c.url() && (c.url(b), a.$digest())
                }, d.whenStable = function(a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }, d
            }]
        }

        function cc() {
            this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, c, d, e) {
                function f(f, h, i) {
                    var j, k = s(i) && !i,
                        l = (k ? d : c).defer(),
                        m = l.promise;
                    return j = b.defer(function() {
                        try {
                            l.resolve(f())
                        } catch (b) {
                            l.reject(b), e(b)
                        } finally {
                            delete g[m.$$timeoutId]
                        }
                        k || a.$apply()
                    }, h), m.$$timeoutId = j, g[j] = l, m
                }
                var g = {};
                return f.cancel = function(a) {
                    return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
                }, f
            }]
        }

        function dc(a) {
            var b = a;
            return _c && (ve.setAttribute("href", b), b = ve.href), ve.setAttribute("href", b), {
                href: ve.href,
                protocol: ve.protocol ? ve.protocol.replace(/:$/, "") : "",
                host: ve.host,
                search: ve.search ? ve.search.replace(/^\?/, "") : "",
                hash: ve.hash ? ve.hash.replace(/^#/, "") : "",
                hostname: ve.hostname,
                port: ve.port,
                pathname: "/" === ve.pathname.charAt(0) ? ve.pathname : "/" + ve.pathname
            }
        }

        function ec(a) {
            var b = u(a) ? dc(a) : a;
            return b.protocol === we.protocol && b.host === we.host
        }

        function fc() {
            this.$get = q(a)
        }

        function gc(a) {
            function b(d, e) {
                if (t(d)) {
                    var g = {};
                    return f(d, function(a, c) {
                        g[c] = b(c, a)
                    }), g
                }
                return a.factory(d + c, e)
            }
            var c = "Filter";
            this.register = b, this.$get = ["$injector", function(a) {
                return function(b) {
                    return a.get(b + c)
                }
            }], b("currency", kc), b("date", xc), b("filter", hc), b("json", yc), b("limitTo", zc), b("lowercase", Be), b("number", lc), b("orderBy", Ac), b("uppercase", Ce)
        }

        function hc() {
            return function(a, b, c) {
                if (!ld(a)) return a;
                var d, e;
                switch (typeof b) {
                    case "function":
                        d = b;
                        break;
                    case "boolean":
                    case "number":
                    case "string":
                        e = !0;
                    case "object":
                        d = ic(b, c, e);
                        break;
                    default:
                        return a
                }
                return a.filter(d)
            }
        }

        function ic(a, b, c) {
            var d, e = t(a) && "$" in a;
            return b === !0 ? b = M : x(b) || (b = function(a, b) {
                return t(a) || t(b) ? !1 : (a = Wc("" + a), b = Wc("" + b), -1 !== a.indexOf(b))
            }), d = function(d) {
                return e && !t(d) ? jc(d, a.$, b, !1) : jc(d, a, b, c)
            }
        }

        function jc(a, b, c, d, e) {
            var f = null !== a ? typeof a : "null",
                g = null !== b ? typeof b : "null";
            if ("string" === g && "!" === b.charAt(0)) return !jc(a, b.substring(1), c, d);
            if (ld(a)) return a.some(function(a) {
                return jc(a, b, c, d)
            });
            switch (f) {
                case "object":
                    var h;
                    if (d) {
                        for (h in a)
                            if ("$" !== h.charAt(0) && jc(a[h], b, c, !0)) return !0;
                        return e ? !1 : jc(a, b, c, !1)
                    }
                    if ("object" === g) {
                        for (h in b) {
                            var i = b[h];
                            if (!x(i) && !r(i)) {
                                var j = "$" === h,
                                    k = j ? a : a[h];
                                if (!jc(k, i, c, j, j)) return !1
                            }
                        }
                        return !0
                    }
                    return c(a, b);
                case "function":
                    return !1;
                default:
                    return c(a, b)
            }
        }

        function kc(a) {
            var b = a.NUMBER_FORMATS;
            return function(a, c, d) {
                return r(c) && (c = b.CURRENCY_SYM), r(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : mc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
            }
        }

        function lc(a) {
            var b = a.NUMBER_FORMATS;
            return function(a, c) {
                return null == a ? a : mc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
            }
        }

        function mc(a, b, c, d, e) {
            if (!isFinite(a) || t(a)) return "";
            var f = 0 > a;
            a = Math.abs(a);
            var g = a + "",
                h = "",
                i = [],
                j = !1;
            if (-1 !== g.indexOf("e")) {
                var k = g.match(/([\d\.]+)e(-?)(\d+)/);
                k && "-" == k[2] && k[3] > e + 1 ? a = 0 : (h = g, j = !0)
            }
            if (j) e > 0 && 1 > a && (h = a.toFixed(e), a = parseFloat(h));
            else {
                var l = (g.split(xe)[1] || "").length;
                r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
                var m = ("" + a).split(xe),
                    n = m[0];
                m = m[1] || "";
                var o, p = 0,
                    q = b.lgSize,
                    s = b.gSize;

                if (n.length >= q + s)
                    for (p = n.length - q, o = 0; p > o; o++)(p - o) % s === 0 && 0 !== o && (h += c), h += n.charAt(o);
                for (o = p; o < n.length; o++)(n.length - o) % q === 0 && 0 !== o && (h += c), h += n.charAt(o);
                for (; m.length < e;) m += "0";
                e && "0" !== e && (h += d + m.substr(0, e))
            }
            return 0 === a && (f = !1), i.push(f ? b.negPre : b.posPre, h, f ? b.negSuf : b.posSuf), i.join("")
        }

        function nc(a, b, c) {
            var d = "";
            for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
            return c && (a = a.substr(a.length - b)), d + a
        }

        function oc(a, b, c, d) {
            return c = c || 0,
                function(e) {
                    var f = e["get" + a]();
                    return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), nc(f, b, d)
                }
        }

        function pc(a, b) {
            return function(c, d) {
                var e = c["get" + a](),
                    f = Yc(b ? "SHORT" + a : a);
                return d[f][e]
            }
        }

        function qc(a) {
            var b = -1 * a.getTimezoneOffset(),
                c = b >= 0 ? "+" : "";
            return c += nc(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + nc(Math.abs(b % 60), 2)
        }

        function rc(a) {
            var b = new Date(a, 0, 1).getDay();
            return new Date(a, 0, (4 >= b ? 5 : 12) - b)
        }

        function sc(a) {
            return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
        }

        function tc(a) {
            return function(b) {
                var c = rc(b.getFullYear()),
                    d = sc(b),
                    e = +d - +c,
                    f = 1 + Math.round(e / 6048e5);
                return nc(f, a)
            }
        }

        function uc(a, b) {
            return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
        }

        function vc(a, b) {
            return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1]
        }

        function wc(a, b) {
            return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1]
        }

        function xc(a) {
            function b(a) {
                var b;
                if (b = a.match(c)) {
                    var d = new Date(0),
                        e = 0,
                        f = 0,
                        g = b[8] ? d.setUTCFullYear : d.setFullYear,
                        h = b[8] ? d.setUTCHours : d.setHours;
                    b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
                    var i = m(b[4] || 0) - e,
                        j = m(b[5] || 0) - f,
                        k = m(b[6] || 0),
                        l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                    return h.call(d, i, j, k, l), d
                }
                return a
            }
            var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(c, d, e) {
                var g, h, i = "",
                    j = [];
                if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = Ae.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c)) return c;
                for (; d;) h = ze.exec(d), h ? (j = N(j, h, 1), d = j.pop()) : (j.push(d), d = null);
                return e && "UTC" === e && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset())), f(j, function(b) {
                    g = ye[b], i += g ? g(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), i
            }
        }

        function yc() {
            return function(a, b) {
                return r(b) && (b = 2), R(a, b)
            }
        }

        function zc() {
            return function(a, b) {
                return v(a) && (a = a.toString()), ld(a) || u(a) ? (b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : m(b), b ? b > 0 ? a.slice(0, b) : a.slice(b) : u(a) ? "" : []) : a
            }
        }

        function Ac(a) {
            return function(b, c, d) {
                function f(a, b) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d](a, b);
                        if (0 !== e) return e
                    }
                    return 0
                }

                function g(a, b) {
                    return b ? function(b, c) {
                        return a(c, b)
                    } : a
                }

                function h(a) {
                    switch (typeof a) {
                        case "number":
                        case "boolean":
                        case "string":
                            return !0;
                        default:
                            return !1
                    }
                }

                function i(a) {
                    return null === a ? "null" : "function" == typeof a.valueOf && (a = a.valueOf(), h(a)) ? a : "function" == typeof a.toString && (a = a.toString(), h(a)) ? a : ""
                }

                function j(a, b) {
                    var c = typeof a,
                        d = typeof b;
                    return c === d && "object" === c && (a = i(a), b = i(b)), c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
                }
                return e(b) ? (c = ld(c) ? c : [c], 0 === c.length && (c = ["+"]), c = c.map(function(b) {
                    var c = !1,
                        d = b || p;
                    if (u(b)) {
                        if (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), "" === b) return g(j, c);
                        if (d = a(b), d.constant) {
                            var e = d();
                            return g(function(a, b) {
                                return j(a[e], b[e])
                            }, c)
                        }
                    }
                    return g(function(a, b) {
                        return j(d(a), d(b))
                    }, c)
                }), dd.call(b).sort(g(f, d))) : b
            }
        }

        function Bc(a) {
            return x(a) && (a = {
                link: a
            }), a.restrict = a.restrict || "AC", q(a)
        }

        function Cc(a, b) {
            a.$name = b
        }

        function Dc(a, b, d, e, g) {
            var h = this,
                i = [],
                j = h.$$parentForm = a.parent().controller("form") || Fe;
            h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, j.$addControl(h), h.$rollbackViewValue = function() {
                f(i, function(a) {
                    a.$rollbackViewValue()
                })
            }, h.$commitViewValue = function() {
                f(i, function(a) {
                    a.$commitViewValue()
                })
            }, h.$addControl = function(a) {
                ga(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a)
            }, h.$$renameControl = function(a, b) {
                var c = a.$name;
                h[c] === a && delete h[c], h[b] = a, a.$name = b
            }, h.$removeControl = function(a) {
                a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function(b, c) {
                    h.$setValidity(c, null, a)
                }), f(h.$error, function(b, c) {
                    h.$setValidity(c, null, a)
                }), f(h.$$success, function(b, c) {
                    h.$setValidity(c, null, a)
                }), J(i, a)
            }, Sc({
                ctrl: this,
                $element: a,
                set: function(a, b, c) {
                    var d = a[b];
                    if (d) {
                        var e = d.indexOf(c); - 1 === e && d.push(c)
                    } else a[b] = [c]
                },
                unset: function(a, b, c) {
                    var d = a[b];
                    d && (J(d, c), 0 === d.length && delete a[b])
                },
                parentForm: j,
                $animate: e
            }), h.$setDirty = function() {
                e.removeClass(a, of ), e.addClass(a, pf), h.$dirty = !0, h.$pristine = !1, j.$setDirty()
            }, h.$setPristine = function() {
                e.setClass(a, of , pf + " " + Ge), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function(a) {
                    a.$setPristine()
                })
            }, h.$setUntouched = function() {
                f(i, function(a) {
                    a.$setUntouched()
                })
            }, h.$setSubmitted = function() {
                e.addClass(a, Ge), h.$submitted = !0, j.$setSubmitted()
            }
        }

        function Ec(a) {
            a.$formatters.push(function(b) {
                return a.$isEmpty(b) ? b : b.toString()
            })
        }

        function Fc(a, b, c, d, e, f) {
            Gc(a, b, c, d, e, f), Ec(d)
        }

        function Gc(a, b, c, d, e, f) {
            var g = Wc(b[0].type);
            if (!e.android) {
                var h = !1;
                b.on("compositionstart", function(a) {
                    h = !0
                }), b.on("compositionend", function() {
                    h = !1, i()
                })
            }
            var i = function(a) {
                if (j && (f.defer.cancel(j), j = null), !h) {
                    var e = b.val(),
                        i = a && a.type;
                    "password" === g || c.ngTrim && "false" === c.ngTrim || (e = md(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i)
                }
            };
            if (e.hasEvent("input")) b.on("input", i);
            else {
                var j, k = function(a, b, c) {
                    j || (j = f.defer(function() {
                        j = null, b && b.value === c || i(a)
                    }))
                };
                b.on("keydown", function(a) {
                    var b = a.keyCode;
                    91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
                }), e.hasEvent("paste") && b.on("paste cut", k)
            }
            b.on("change", i), d.$render = function() {
                b.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
            }
        }

        function Hc(a, b) {
            if (w(a)) return a;
            if (u(a)) {
                Qe.lastIndex = 0;
                var c = Qe.exec(a);
                if (c) {
                    var d = +c[1],
                        e = +c[2],
                        f = 0,
                        g = 0,
                        h = 0,
                        i = 0,
                        j = rc(d),
                        k = 7 * (e - 1);
                    return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
                }
            }
            return 0 / 0
        }

        function Ic(a, b) {
            return function(c, d) {
                var e, g;
                if (w(c)) return c;
                if (u(c)) {
                    if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), Ke.test(c)) return new Date(c);
                    if (a.lastIndex = 0, e = a.exec(c)) return e.shift(), g = d ? {
                        yyyy: d.getFullYear(),
                        MM: d.getMonth() + 1,
                        dd: d.getDate(),
                        HH: d.getHours(),
                        mm: d.getMinutes(),
                        ss: d.getSeconds(),
                        sss: d.getMilliseconds() / 1e3
                    } : {
                        yyyy: 1970,
                        MM: 1,
                        dd: 1,
                        HH: 0,
                        mm: 0,
                        ss: 0,
                        sss: 0
                    }, f(e, function(a, c) {
                        c < b.length && (g[b[c]] = +a)
                    }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
                }
                return 0 / 0
            }
        }

        function Jc(a, b, d, e) {
            return function(f, g, h, i, j, k, l) {
                function m(a) {
                    return a && !(a.getTime && a.getTime() !== a.getTime())
                }

                function n(a) {
                    return s(a) ? w(a) ? a : d(a) : c
                }
                Kc(f, g, h, i), Gc(f, g, h, i, j, k);
                var o, p = i && i.$options && i.$options.timezone;
                if (i.$$parserName = a, i.$parsers.push(function(a) {
                        if (i.$isEmpty(a)) return null;
                        if (b.test(a)) {
                            var e = d(a, o);
                            return "UTC" === p && e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e
                        }
                        return c
                    }), i.$formatters.push(function(a) {
                        if (a && !w(a)) throw tf("datefmt", "Expected `{0}` to be a date", a);
                        if (m(a)) {
                            if (o = a, o && "UTC" === p) {
                                var b = 6e4 * o.getTimezoneOffset();
                                o = new Date(o.getTime() + b)
                            }
                            return l("date")(a, e, p)
                        }
                        return o = null, ""
                    }), s(h.min) || h.ngMin) {
                    var q;
                    i.$validators.min = function(a) {
                        return !m(a) || r(q) || d(a) >= q
                    }, h.$observe("min", function(a) {
                        q = n(a), i.$validate()
                    })
                }
                if (s(h.max) || h.ngMax) {
                    var t;
                    i.$validators.max = function(a) {
                        return !m(a) || r(t) || d(a) <= t
                    }, h.$observe("max", function(a) {
                        t = n(a), i.$validate()
                    })
                }
            }
        }

        function Kc(a, b, d, e) {
            var f = b[0],
                g = e.$$hasNativeValidators = t(f.validity);
            g && e.$parsers.push(function(a) {
                var d = b.prop(Vc) || {};
                return d.badInput && !d.typeMismatch ? c : a
            })
        }

        function Lc(a, b, d, e, f, g) {
            if (Kc(a, b, d, e), Gc(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
                    return e.$isEmpty(a) ? null : Ne.test(a) ? parseFloat(a) : c
                }), e.$formatters.push(function(a) {
                    if (!e.$isEmpty(a)) {
                        if (!v(a)) throw tf("numfmt", "Expected `{0}` to be a number", a);
                        a = a.toString()
                    }
                    return a
                }), s(d.min) || d.ngMin) {
                var h;
                e.$validators.min = function(a) {
                    return e.$isEmpty(a) || r(h) || a >= h
                }, d.$observe("min", function(a) {
                    s(a) && !v(a) && (a = parseFloat(a, 10)), h = v(a) && !isNaN(a) ? a : c, e.$validate()
                })
            }
            if (s(d.max) || d.ngMax) {
                var i;
                e.$validators.max = function(a) {
                    return e.$isEmpty(a) || r(i) || i >= a
                }, d.$observe("max", function(a) {
                    s(a) && !v(a) && (a = parseFloat(a, 10)), i = v(a) && !isNaN(a) ? a : c, e.$validate()
                })
            }
        }

        function Mc(a, b, c, d, e, f) {
            Gc(a, b, c, d, e, f), Ec(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
                var c = a || b;
                return d.$isEmpty(c) || Le.test(c)
            }
        }

        function Nc(a, b, c, d, e, f) {
            Gc(a, b, c, d, e, f), Ec(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
                var c = a || b;
                return d.$isEmpty(c) || Me.test(c)
            }
        }

        function Oc(a, b, c, d) {
            r(c.name) && b.attr("name", j());
            var e = function(a) {
                b[0].checked && d.$setViewValue(c.value, a && a.type)
            };
            b.on("click", e), d.$render = function() {
                var a = c.value;
                b[0].checked = a == d.$viewValue
            }, c.$observe("value", d.$render)
        }

        function Pc(a, b, c, e, f) {
            var g;
            if (s(e)) {
                if (g = a(e), !g.constant) throw d("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, e);
                return g(b)
            }
            return f
        }

        function Qc(a, b, c, d, e, f, g, h) {
            var i = Pc(h, a, "ngTrueValue", c.ngTrueValue, !0),
                j = Pc(h, a, "ngFalseValue", c.ngFalseValue, !1),
                k = function(a) {
                    d.$setViewValue(b[0].checked, a && a.type)
                };
            b.on("click", k), d.$render = function() {
                b[0].checked = d.$viewValue
            }, d.$isEmpty = function(a) {
                return a === !1
            }, d.$formatters.push(function(a) {
                return M(a, i)
            }), d.$parsers.push(function(a) {
                return a ? i : j
            })
        }

        function Rc(a, b) {
            return a = "ngClass" + a, ["$animate", function(c) {
                function d(a, b) {
                    var c = [];
                    a: for (var d = 0; d < a.length; d++) {
                        for (var e = a[d], f = 0; f < b.length; f++)
                            if (e == b[f]) continue a;
                        c.push(e)
                    }
                    return c
                }

                function e(a) {
                    if (ld(a)) return a;
                    if (u(a)) return a.split(" ");
                    if (t(a)) {
                        var b = [];
                        return f(a, function(a, c) {
                            a && (b = b.concat(c.split(" ")))
                        }), b
                    }
                    return a
                }
                return {
                    restrict: "AC",
                    link: function(g, h, i) {
                        function j(a) {
                            var b = l(a, 1);
                            i.$addClass(b)
                        }

                        function k(a) {
                            var b = l(a, -1);
                            i.$removeClass(b)
                        }

                        function l(a, b) {
                            var c = h.data("$classCounts") || {},
                                d = [];
                            return f(a, function(a) {
                                (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                            }), h.data("$classCounts", c), d.join(" ")
                        }

                        function m(a, b) {
                            var e = d(b, a),
                                f = d(a, b);
                            e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f)
                        }

                        function n(a) {
                            if (b === !0 || g.$index % 2 === b) {
                                var c = e(a || []);
                                if (o) {
                                    if (!M(a, o)) {
                                        var d = e(o);
                                        m(d, c)
                                    }
                                } else j(c)
                            }
                            o = L(a)
                        }
                        var o;
                        g.$watch(i[a], n, !0), i.$observe("class", function(b) {
                            n(g.$eval(i[a]))
                        }), "ngClass" !== a && g.$watch("$index", function(c, d) {
                            var f = 1 & c;
                            if (f !== (1 & d)) {
                                var h = e(g.$eval(i[a]));
                                f === b ? j(h) : k(h)
                            }
                        })
                    }
                }
            }]
        }

        function Sc(a) {
            function b(a, b, i) {
                b === c ? d("$pending", a, i) : e("$pending", a, i), E(b) ? b ? (l(h.$error, a, i), k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), l(h.$$success, a, i)), h.$pending ? (f(sf, !0), h.$valid = h.$invalid = c, g("", null)) : (f(sf, !1), h.$valid = Tc(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
                var j;
                j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, g(a, j), m.$setValidity(a, j, h)
            }

            function d(a, b, c) {
                h[a] || (h[a] = {}), k(h[a], b, c)
            }

            function e(a, b, d) {
                h[a] && l(h[a], b, d), Tc(h[a]) && (h[a] = c)
            }

            function f(a, b) {
                b && !j[a] ? (n.addClass(i, a), j[a] = !0) : !b && j[a] && (n.removeClass(i, a), j[a] = !1)
            }

            function g(a, b) {
                a = a ? "-" + ca(a, "-") : "", f(mf + a, b === !0), f(nf + a, b === !1)
            }
            var h = a.ctrl,
                i = a.$element,
                j = {},
                k = a.set,
                l = a.unset,
                m = a.parentForm,
                n = a.$animate;
            j[nf] = !(j[mf] = i.hasClass(mf)), h.$setValidity = b
        }

        function Tc(a) {
            if (a)
                for (var b in a) return !1;
            return !0
        }
        var Uc = /^\/(.+)\/([a-z]*)$/,
            Vc = "validity",
            Wc = function(a) {
                return u(a) ? a.toLowerCase() : a
            },
            Xc = Object.prototype.hasOwnProperty,
            Yc = function(a) {
                return u(a) ? a.toUpperCase() : a
            },
            Zc = function(a) {
                return u(a) ? a.replace(/[A-Z]/g, function(a) {
                    return String.fromCharCode(32 | a.charCodeAt(0))
                }) : a
            },
            $c = function(a) {
                return u(a) ? a.replace(/[a-z]/g, function(a) {
                    return String.fromCharCode(-33 & a.charCodeAt(0))
                }) : a
            };
        "i" !== "I".toLowerCase() && (Wc = Zc, Yc = $c);
        var _c, ad, bd, cd, dd = [].slice,
            ed = [].splice,
            fd = [].push,
            gd = Object.prototype.toString,
            hd = d("ng"),
            id = a.angular || (a.angular = {}),
            jd = 0;
        _c = b.documentMode, o.$inject = [], p.$inject = [];
        var kd, ld = Array.isArray,
            md = function(a) {
                return u(a) ? a.trim() : a
            },
            nd = function(a) {
                return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
            },
            od = function() {
                if (s(od.isActive_)) return od.isActive_;
                var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
                if (!a) try {
                    new Function("")
                } catch (c) {
                    a = !0
                }
                return od.isActive_ = a
            },
            pd = ["ng-", "data-ng-", "ng:", "x-ng-"],
            qd = /[A-Z]/g,
            rd = !1,
            sd = 1,
            td = 3,
            ud = 8,
            vd = 9,
            wd = 11,
            xd = {
                full: "1.3.15",
                major: 1,
                minor: 3,
                dot: 15,
                codeName: "locality-filtration"
            };
        ua.expando = "ng339";
        var yd = ua.cache = {},
            zd = 1,
            Ad = function(a, b, c) {
                a.addEventListener(b, c, !1)
            },
            Bd = function(a, b, c) {
                a.removeEventListener(b, c, !1)
            };
        ua._data = function(a) {
            return this.cache[a[this.expando]] || {}
        };
        var Cd = /([\:\-\_]+(.))/g,
            Dd = /^moz([A-Z])/,
            Ed = {
                mouseleave: "mouseout",
                mouseenter: "mouseover"
            },
            Fd = d("jqLite"),
            Gd = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            Hd = /<|&#?\w+;/,
            Id = /<([\w:]+)/,
            Jd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Kd = {
                option: [1, '<select multiple="multiple">', "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Kd.optgroup = Kd.option, Kd.tbody = Kd.tfoot = Kd.colgroup = Kd.caption = Kd.thead, Kd.th = Kd.td;
        var Ld = ua.prototype = {
                ready: function(c) {
                    function d() {
                        e || (e = !0, c())
                    }
                    var e = !1;
                    "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), ua(a).on("load", d))
                },
                toString: function() {
                    var a = [];
                    return f(this, function(b) {
                        a.push("" + b)
                    }), "[" + a.join(", ") + "]"
                },
                eq: function(a) {
                    return ad(a >= 0 ? this[a] : this[this.length + a])
                },
                length: 0,
                push: fd,
                sort: [].sort,
                splice: [].splice
            },
            Md = {};
        f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
            Md[Wc(a)] = a
        });
        var Nd = {};
        f("input,select,option,textarea,button,form,details".split(","), function(a) {
            Nd[a] = !0
        });
        var Od = {
            ngMinlength: "minlength",
            ngMaxlength: "maxlength",
            ngMin: "min",
            ngMax: "max",
            ngPattern: "pattern"
        };
        f({
            data: Aa,
            removeData: ya
        }, function(a, b) {
            ua[b] = a
        }), f({
            data: Aa,
            inheritedData: Ga,
            scope: function(a) {
                return ad.data(a, "$scope") || Ga(a.parentNode || a, ["$isolateScope", "$scope"])
            },
            isolateScope: function(a) {
                return ad.data(a, "$isolateScope") || ad.data(a, "$isolateScopeNoTemplate")
            },
            controller: Fa,
            injector: function(a) {
                return Ga(a, "$injector")
            },
            removeAttr: function(a, b) {
                a.removeAttribute(b)
            },
            hasClass: Ba,
            css: function(a, b, c) {
                return b = pa(b), s(c) ? void(a.style[b] = c) : a.style[b]
            },
            attr: function(a, b, d) {
                var e = Wc(b);
                if (Md[e]) {
                    if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                    d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
                } else if (s(d)) a.setAttribute(b, d);
                else if (a.getAttribute) {
                    var f = a.getAttribute(b, 2);
                    return null === f ? c : f
                }
            },
            prop: function(a, b, c) {
                return s(c) ? void(a[b] = c) : a[b]
            },
            text: function() {
                function a(a, b) {
                    if (r(b)) {
                        var c = a.nodeType;
                        return c === sd || c === td ? a.textContent : ""
                    }
                    a.textContent = b
                }
                return a.$dv = "", a
            }(),
            val: function(a, b) {
                if (r(b)) {
                    if (a.multiple && "select" === I(a)) {
                        var c = [];
                        return f(a.options, function(a) {
                            a.selected && c.push(a.value || a.text)
                        }), 0 === c.length ? null : c
                    }
                    return a.value
                }
                a.value = b
            },
            html: function(a, b) {
                return r(b) ? a.innerHTML : (wa(a, !0), void(a.innerHTML = b))
            },
            empty: Ha
        }, function(a, b) {
            ua.prototype[b] = function(b, d) {
                var e, f, g = this.length;
                if (a !== Ha && (2 == a.length && a !== Ba && a !== Fa ? b : d) === c) {
                    if (t(b)) {
                        for (e = 0; g > e; e++)
                            if (a === Aa) a(this[e], b);
                            else
                                for (f in b) a(this[e], f, b[f]);
                        return this
                    }
                    for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
                        var k = a(this[j], b, d);
                        h = h ? h + k : k
                    }
                    return h
                }
                for (e = 0; g > e; e++) a(this[e], b, d);
                return this
            }
        }), f({
            removeData: ya,
            on: function Uf(a, b, c, d) {
                if (s(d)) throw Fd("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                if (ra(a)) {
                    var e = za(a, !0),
                        f = e.events,
                        g = e.handle;
                    g || (g = e.handle = Ma(a, f));
                    for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [b], i = h.length; i--;) {
                        b = h[i];
                        var j = f[b];
                        j || (f[b] = [], "mouseenter" === b || "mouseleave" === b ? Uf(a, Ed[b], function(a) {
                            var c = this,
                                d = a.relatedTarget;
                            (!d || d !== c && !c.contains(d)) && g(a, b)
                        }) : "$destroy" !== b && Ad(a, b, g), j = f[b]), j.push(c)
                    }
                }
            },
            off: xa,
            one: function(a, b, c) {
                a = ad(a), a.on(b, function d() {
                    a.off(b, c), a.off(b, d)
                }), a.on(b, c)
            },
            replaceWith: function(a, b) {
                var c, d = a.parentNode;
                wa(a), f(new ua(b), function(b) {
                    c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
                })
            },
            children: function(a) {
                var b = [];
                return f(a.childNodes, function(a) {
                    a.nodeType === sd && b.push(a)
                }), b
            },
            contents: function(a) {
                return a.contentDocument || a.childNodes || []
            },
            append: function(a, b) {
                var c = a.nodeType;
                if (c === sd || c === wd) {
                    b = new ua(b);
                    for (var d = 0, e = b.length; e > d; d++) {
                        var f = b[d];
                        a.appendChild(f)
                    }
                }
            },
            prepend: function(a, b) {
                if (a.nodeType === sd) {
                    var c = a.firstChild;
                    f(new ua(b), function(b) {
                        a.insertBefore(b, c)
                    })
                }
            },
            wrap: function(a, b) {
                b = ad(b).eq(0).clone()[0];
                var c = a.parentNode;
                c && c.replaceChild(b, a), b.appendChild(a)
            },
            remove: Ia,
            detach: function(a) {
                Ia(a, !0)
            },
            after: function(a, b) {
                var c = a,
                    d = a.parentNode;
                b = new ua(b);
                for (var e = 0, f = b.length; f > e; e++) {
                    var g = b[e];
                    d.insertBefore(g, c.nextSibling), c = g
                }
            },
            addClass: Da,
            removeClass: Ca,
            toggleClass: function(a, b, c) {
                b && f(b.split(" "), function(b) {
                    var d = c;
                    r(d) && (d = !Ba(a, b)), (d ? Da : Ca)(a, b)
                })
            },
            parent: function(a) {
                var b = a.parentNode;
                return b && b.nodeType !== wd ? b : null
            },
            next: function(a) {
                return a.nextElementSibling
            },
            find: function(a, b) {
                return a.getElementsByTagName ? a.getElementsByTagName(b) : []
            },
            clone: va,
            triggerHandler: function(a, b, c) {
                var d, e, g, h = b.type || b,
                    i = za(a),
                    j = i && i.events,
                    k = j && j[h];
                k && (d = {
                    preventDefault: function() {
                        this.defaultPrevented = !0
                    },
                    isDefaultPrevented: function() {
                        return this.defaultPrevented === !0
                    },
                    stopImmediatePropagation: function() {
                        this.immediatePropagationStopped = !0
                    },
                    isImmediatePropagationStopped: function() {
                        return this.immediatePropagationStopped === !0
                    },
                    stopPropagation: o,
                    type: h,
                    target: a
                }, b.type && (d = l(d, b)), e = L(k), g = c ? [d].concat(c) : [d], f(e, function(b) {
                    d.isImmediatePropagationStopped() || b.apply(a, g)
                }))
            }
        }, function(a, b) {
            ua.prototype[b] = function(b, c, d) {
                for (var e, f = 0, g = this.length; g > f; f++) r(e) ? (e = a(this[f], b, c, d), s(e) && (e = ad(e))) : Ea(e, a(this[f], b, c, d));
                return s(e) ? e : this
            }, ua.prototype.bind = ua.prototype.on, ua.prototype.unbind = ua.prototype.off
        }), Pa.prototype = {
            put: function(a, b) {
                this[Oa(a, this.nextUid)] = b
            },
            get: function(a) {
                return this[Oa(a, this.nextUid)]
            },
            remove: function(a) {
                var b = this[a = Oa(a, this.nextUid)];
                return delete this[a], b
            }
        };
        var Pd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
            Qd = /,/,
            Rd = /^\s*(_?)(\S+?)\1\s*$/,
            Sd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            Td = d("$injector");
        Sa.$$annotate = Ra;
        var Ud = d("$animate"),
            Vd = ["$provide", function(a) {
                this.$$selectors = {}, this.register = function(b, c) {
                    var d = b + "-animation";
                    if (b && "." != b.charAt(0)) throw Ud("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
                    this.$$selectors[b.substr(1)] = d, a.factory(d, c)
                }, this.classNameFilter = function(a) {
                    return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter
                }, this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(a, b, c) {
                    function d(b) {
                        var d, e = a.defer();
                        return e.promise.$$cancelFn = function() {
                            d && d()
                        }, c.$$postDigest(function() {
                            d = b(function() {
                                e.resolve()
                            })
                        }), e.promise
                    }

                    function e(a, b) {
                        var c = [],
                            d = [],
                            e = ja();
                        return f((a.attr("class") || "").split(/\s+/), function(a) {
                            e[a] = !0
                        }), f(b, function(a, b) {
                            var f = e[b];
                            a === !1 && f ? d.push(b) : a !== !0 || f || c.push(b)
                        }), c.length + d.length > 0 && [c.length ? c : null, d.length ? d : null]
                    }

                    function g(a, b, c) {
                        for (var d = 0, e = b.length; e > d; ++d) {
                            var f = b[d];
                            a[f] = c
                        }
                    }

                    function h() {
                        return j || (j = a.defer(), b(function() {
                            j.resolve(), j = null
                        })), j.promise
                    }

                    function i(a, b) {
                        if (id.isObject(b)) {
                            var c = l(b.from || {}, b.to || {});
                            a.css(c)
                        }
                    }
                    var j;
                    return {
                        animate: function(a, b, c) {
                            return i(a, {
                                from: b,
                                to: c
                            }), h()
                        },
                        enter: function(a, b, c, d) {
                            return i(a, d), c ? c.after(a) : b.prepend(a), h()
                        },
                        leave: function(a, b) {
                            return i(a, b), a.remove(), h()
                        },
                        move: function(a, b, c, d) {
                            return this.enter(a, b, c, d)
                        },
                        addClass: function(a, b, c) {
                            return this.setClass(a, b, [], c)
                        },
                        $$addClassImmediately: function(a, b, c) {
                            return a = ad(a), b = u(b) ? b : ld(b) ? b.join(" ") : "", f(a, function(a) {
                                Da(a, b)
                            }), i(a, c), h()
                        },
                        removeClass: function(a, b, c) {
                            return this.setClass(a, [], b, c)
                        },
                        $$removeClassImmediately: function(a, b, c) {
                            return a = ad(a), b = u(b) ? b : ld(b) ? b.join(" ") : "", f(a, function(a) {
                                Ca(a, b)
                            }), i(a, c), h()
                        },
                        setClass: function(a, b, c, f) {
                            var h = this,
                                i = "$$animateClasses",
                                j = !1;
                            a = ad(a);
                            var k = a.data(i);
                            k ? f && k.options && (k.options = id.extend(k.options || {}, f)) : (k = {
                                classes: {},
                                options: f
                            }, j = !0);
                            var l = k.classes;
                            return b = ld(b) ? b : b.split(" "), c = ld(c) ? c : c.split(" "), g(l, b, !0), g(l, c, !1), j && (k.promise = d(function(b) {
                                var c = a.data(i);
                                if (a.removeData(i), c) {
                                    var d = e(a, c.classes);
                                    d && h.$$setClassImmediately(a, d[0], d[1], c.options)
                                }
                                b()
                            }), a.data(i, k)), k.promise
                        },
                        $$setClassImmediately: function(a, b, c, d) {
                            return b && this.$$addClassImmediately(a, b), c && this.$$removeClassImmediately(a, c), i(a, d), h()
                        },
                        enabled: o,
                        cancel: o
                    }
                }]
            }],
            Wd = d("$compile");
        Za.$inject = ["$provide", "$$sanitizeUriProvider"];
        var Xd = /^((?:x|data)[\:\-_])/i,
            Yd = d("$controller"),
            Zd = "application/json",
            $d = {
                "Content-Type": Zd + ";charset=utf-8"
            },
            _d = /^\[|^\{(?!\{)/,
            ae = {
                "[": /]$/,
                "{": /}$/
            },
            be = /^\)\]\}',?\n/,
            ce = d("$interpolate"),
            de = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
            ee = {
                http: 80,
                https: 443,
                ftp: 21
            },
            fe = d("$location"),
            ge = {
                $$html5: !1,
                $$replace: !1,
                absUrl: Cb("$$absUrl"),
                url: function(a) {
                    if (r(a)) return this.$$url;
                    var b = de.exec(a);
                    return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
                },
                protocol: Cb("$$protocol"),
                host: Cb("$$host"),
                port: Cb("$$port"),
                path: Db("$$path", function(a) {
                    return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
                }),
                search: function(a, b) {
                    switch (arguments.length) {
                        case 0:
                            return this.$$search;
                        case 1:
                            if (u(a) || v(a)) a = a.toString(), this.$$search = V(a);
                            else {
                                if (!t(a)) throw fe("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                                a = K(a, {}), f(a, function(b, c) {
                                    null == b && delete a[c]
                                }), this.$$search = a
                            }
                            break;
                        default:
                            r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                    }
                    return this.$$compose(), this
                },
                hash: Db("$$hash", function(a) {
                    return null !== a ? a.toString() : ""
                }),
                replace: function() {
                    return this.$$replace = !0, this
                }
            };
        f([Bb, Ab, zb], function(a) {
            a.prototype = Object.create(ge), a.prototype.state = function(b) {
                if (!arguments.length) return this.$$state;
                if (a !== zb || !this.$$html5) throw fe("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                return this.$$state = r(b) ? null : b, this
            }
        });
        var he = d("$parse"),
            ie = Function.prototype.call,
            je = Function.prototype.apply,
            ke = Function.prototype.bind,
            le = ja();
        f({
            "null": function() {
                return null
            },
            "true": function() {
                return !0
            },
            "false": function() {
                return !1
            },
            undefined: function() {}
        }, function(a, b) {
            a.constant = a.literal = a.sharedGetter = !0, le[b] = a
        }), le["this"] = function(a) {
            return a
        }, le["this"].sharedGetter = !0;
        var me = l(ja(), {
                "+": function(a, b, d, e) {
                    return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c
                },
                "-": function(a, b, c, d) {
                    return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0)
                },
                "*": function(a, b, c, d) {
                    return c(a, b) * d(a, b)
                },
                "/": function(a, b, c, d) {
                    return c(a, b) / d(a, b)
                },
                "%": function(a, b, c, d) {
                    return c(a, b) % d(a, b)
                },
                "===": function(a, b, c, d) {
                    return c(a, b) === d(a, b)
                },
                "!==": function(a, b, c, d) {
                    return c(a, b) !== d(a, b)
                },
                "==": function(a, b, c, d) {
                    return c(a, b) == d(a, b)
                },
                "!=": function(a, b, c, d) {
                    return c(a, b) != d(a, b)
                },
                "<": function(a, b, c, d) {
                    return c(a, b) < d(a, b)
                },
                ">": function(a, b, c, d) {
                    return c(a, b) > d(a, b)
                },
                "<=": function(a, b, c, d) {
                    return c(a, b) <= d(a, b)
                },
                ">=": function(a, b, c, d) {
                    return c(a, b) >= d(a, b)
                },
                "&&": function(a, b, c, d) {
                    return c(a, b) && d(a, b)
                },
                "||": function(a, b, c, d) {
                    return c(a, b) || d(a, b)
                },
                "!": function(a, b, c) {
                    return !c(a, b)
                },
                "=": !0,
                "|": !0
            }),
            ne = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "	",
                v: "",
                "'": "'",
                '"': '"'
            },
            oe = function(a) {
                this.options = a
            };
        oe.prototype = {
            constructor: oe,
            lex: function(a) {
                for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                    var b = this.text.charAt(this.index);
                    if ('"' === b || "'" === b) this.readString(b);
                    else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber();
                    else if (this.isIdent(b)) this.readIdent();
                    else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
                        index: this.index,
                        text: b
                    }), this.index++;
                    else if (this.isWhitespace(b)) this.index++;
                    else {
                        var c = b + this.peek(),
                            d = c + this.peek(2),
                            e = me[b],
                            f = me[c],
                            g = me[d];
                        if (e || f || g) {
                            var h = g ? d : f ? c : b;
                            this.tokens.push({
                                index: this.index,
                                text: h,
                                operator: !0
                            }), this.index += h.length
                        } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                    }
                }
                return this.tokens
            },
            is: function(a, b) {
                return -1 !== b.indexOf(a)
            },
            peek: function(a) {
                var b = a || 1;
                return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
            },
            isNumber: function(a) {
                return a >= "0" && "9" >= a && "string" == typeof a
            },
            isWhitespace: function(a) {
                return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
            },
            isIdent: function(a) {
                return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
            },
            isExpOperator: function(a) {
                return "-" === a || "+" === a || this.isNumber(a)
            },
            throwError: function(a, b, c) {
                c = c || this.index;
                var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
                throw he("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
            },
            readNumber: function() {
                for (var a = "", b = this.index; this.index < this.text.length;) {
                    var c = Wc(this.text.charAt(this.index));
                    if ("." == c || this.isNumber(c)) a += c;
                    else {
                        var d = this.peek();
                        if ("e" == c && this.isExpOperator(d)) a += c;
                        else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
                        else {
                            if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                            this.throwError("Invalid exponent")
                        }
                    }
                    this.index++
                }
                this.tokens.push({
                    index: b,
                    text: a,
                    constant: !0,
                    value: Number(a)
                })
            },
            readIdent: function() {
                for (var a = this.index; this.index < this.text.length;) {
                    var b = this.text.charAt(this.index);
                    if (!this.isIdent(b) && !this.isNumber(b)) break;
                    this.index++
                }
                this.tokens.push({
                    index: a,
                    text: this.text.slice(a, this.index),
                    identifier: !0
                })
            },
            readString: function(a) {
                var b = this.index;
                this.index++;
                for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                    var f = this.text.charAt(this.index);
                    if (d += f, e) {
                        if ("u" === f) {
                            var g = this.text.substring(this.index + 1, this.index + 5);
                            g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                        } else {
                            var h = ne[f];
                            c += h || f
                        }
                        e = !1
                    } else if ("\\" === f) e = !0;
                    else {
                        if (f === a) return this.index++, void this.tokens.push({
                            index: b,
                            text: d,
                            constant: !0,
                            value: c
                        });
                        c += f
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", b)
            }
        };
        var pe = function(a, b, c) {
            this.lexer = a, this.$filter = b, this.options = c
        };
        pe.ZERO = l(function() {
            return 0
        }, {
            sharedGetter: !0,
            constant: !0
        }), pe.prototype = {
            constructor: pe,
            parse: function(a) {
                this.text = a, this.tokens = this.lexer.lex(a);
                var b = this.statements();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b.literal = !!b.literal, b.constant = !!b.constant, b
            },
            primary: function() {
                var a;
                this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in le ? a = le[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
                for (var b, c; b = this.expect("(", "[", ".");) "(" === b.text ? (a = this.functionCall(a, c), c = null) : "[" === b.text ? (c = a, a = this.objectIndex(a)) : "." === b.text ? (c = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
                return a
            },
            throwError: function(a, b) {
                throw he("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
            },
            peekToken: function() {
                if (0 === this.tokens.length) throw he("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0]
            },
            peek: function(a, b, c, d) {
                return this.peekAhead(0, a, b, c, d)
            },
            peekAhead: function(a, b, c, d, e) {
                if (this.tokens.length > a) {
                    var f = this.tokens[a],
                        g = f.text;
                    if (g === b || g === c || g === d || g === e || !b && !c && !d && !e) return f
                }
                return !1
            },
            expect: function(a, b, c, d) {
                var e = this.peek(a, b, c, d);
                return e ? (this.tokens.shift(), e) : !1
            },
            consume: function(a) {
                if (0 === this.tokens.length) throw he("ueoe", "Unexpected end of expression: {0}", this.text);
                var b = this.expect(a);
                return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
            },
            unaryFn: function(a, b) {
                var c = me[a];
                return l(function(a, d) {
                    return c(a, d, b)
                }, {
                    constant: b.constant,
                    inputs: [b]
                })
            },
            binaryFn: function(a, b, c, d) {
                var e = me[b];
                return l(function(b, d) {
                    return e(b, d, a, c)
                }, {
                    constant: a.constant && c.constant,
                    inputs: !d && [a, c]
                })
            },
            identifier: function() {
                for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) a += this.consume().text + this.consume().text;
                return Ob(a, this.options, this.text)
            },
            constant: function() {
                var a = this.consume().value;
                return l(function() {
                    return a
                }, {
                    constant: !0,
                    literal: !0
                })
            },
            statements: function() {
                for (var a = [];;)
                    if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
                        for (var d, e = 0, f = a.length; f > e; e++) d = a[e](b, c);
                        return d
                    }
            },
            filterChain: function() {
                for (var a, b = this.expression(); a = this.expect("|");) b = this.filter(b);
                return b
            },
            filter: function(a) {
                var b, d, e = this.$filter(this.consume().text);
                if (this.peek(":"))
                    for (b = [], d = []; this.expect(":");) b.push(this.expression());
                var f = [a].concat(b || []);
                return l(function(f, g) {
                    var h = a(f, g);
                    if (d) {
                        d[0] = h;
                        for (var i = b.length; i--;) d[i + 1] = b[i](f, g);
                        return e.apply(c, d)
                    }
                    return e(h)
                }, {
                    constant: !e.$stateful && f.every(Jb),
                    inputs: !e.$stateful && f
                })
            },
            expression: function() {
                return this.assignment()
            },
            assignment: function() {
                var a, b, c = this.ternary();
                return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), l(function(b, d) {
                    return c.assign(b, a(b, d), d)
                }, {
                    inputs: [c, a]
                })) : c
            },
            ternary: function() {
                var a, b, c = this.logicalOR();
                if ((b = this.expect("?")) && (a = this.assignment(), this.consume(":"))) {
                    var d = this.assignment();
                    return l(function(b, e) {
                        return c(b, e) ? a(b, e) : d(b, e)
                    }, {
                        constant: c.constant && a.constant && d.constant
                    })
                }
                return c
            },
            logicalOR: function() {
                for (var a, b = this.logicalAND(); a = this.expect("||");) b = this.binaryFn(b, a.text, this.logicalAND(), !0);
                return b
            },
            logicalAND: function() {
                for (var a, b = this.equality(); a = this.expect("&&");) b = this.binaryFn(b, a.text, this.equality(), !0);
                return b
            },
            equality: function() {
                for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");) b = this.binaryFn(b, a.text, this.relational());
                return b
            },
            relational: function() {
                for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");) b = this.binaryFn(b, a.text, this.additive());
                return b
            },
            additive: function() {
                for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = this.binaryFn(b, a.text, this.multiplicative());
                return b
            },
            multiplicative: function() {
                for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = this.binaryFn(b, a.text, this.unary());
                return b
            },
            unary: function() {
                var a;
                return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(pe.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
            },
            fieldAccess: function(a) {
                var b = this.identifier();
                return l(function(d, e, f) {
                    var g = f || a(d, e);
                    return null == g ? c : b(g)
                }, {
                    assign: function(c, d, e) {
                        var f = a(c, e);
                        return f || a.assign(c, f = {}, e), b.assign(f, d)
                    }
                })
            },
            objectIndex: function(a) {
                var b = this.text,
                    d = this.expression();
                return this.consume("]"), l(function(e, f) {
                    var g, h = a(e, f),
                        i = d(e, f);
                    return Gb(i, b), h ? g = Hb(h[i], b) : c
                }, {
                    assign: function(c, e, f) {
                        var g = Gb(d(c, f), b),
                            h = Hb(a(c, f), b);
                        return h || a.assign(c, h = {}, f), h[g] = e
                    }
                })
            },
            functionCall: function(a, b) {
                var d = [];
                if (")" !== this.peekToken().text)
                    do d.push(this.expression()); while (this.expect(","));
                this.consume(")");
                var e = this.text,
                    f = d.length ? [] : null;
                return function(g, h) {
                    var i = b ? b(g, h) : s(b) ? c : g,
                        j = a(g, h, i) || o;
                    if (f)
                        for (var k = d.length; k--;) f[k] = Hb(d[k](g, h), e);
                    Hb(i, e), Ib(j, e);
                    var l = j.apply ? j.apply(i, f) : j(f[0], f[1], f[2], f[3], f[4]);
                    return f && (f.length = 0), Hb(l, e)
                }
            },
            arrayDeclaration: function() {
                var a = [];
                if ("]" !== this.peekToken().text)
                    do {
                        if (this.peek("]")) break;
                        a.push(this.expression())
                    } while (this.expect(","));
                return this.consume("]"), l(function(b, c) {
                    for (var d = [], e = 0, f = a.length; f > e; e++) d.push(a[e](b, c));
                    return d
                }, {
                    literal: !0,
                    constant: a.every(Jb),
                    inputs: a
                })
            },
            object: function() {
                var a = [],
                    b = [];
                if ("}" !== this.peekToken().text)
                    do {
                        if (this.peek("}")) break;
                        var c = this.consume();
                        c.constant ? a.push(c.value) : c.identifier ? a.push(c.text) : this.throwError("invalid key", c), this.consume(":"), b.push(this.expression())
                    } while (this.expect(","));
                return this.consume("}"), l(function(c, d) {
                    for (var e = {}, f = 0, g = b.length; g > f; f++) e[a[f]] = b[f](c, d);
                    return e
                }, {
                    literal: !0,
                    constant: b.every(Jb),
                    inputs: b
                })
            }
        };
        var qe = ja(),
            re = ja(),
            se = Object.prototype.valueOf,
            te = d("$sce"),
            ue = {
                HTML: "html",
                CSS: "css",
                URL: "url",
                RESOURCE_URL: "resourceUrl",
                JS: "js"
            },
            Wd = d("$compile"),
            ve = b.createElement("a"),
            we = dc(a.location.href);
        gc.$inject = ["$provide"], kc.$inject = ["$locale"], lc.$inject = ["$locale"];
        var xe = ".",
            ye = {
                yyyy: oc("FullYear", 4),
                yy: oc("FullYear", 2, 0, !0),
                y: oc("FullYear", 1),
                MMMM: pc("Month"),
                MMM: pc("Month", !0),
                MM: oc("Month", 2, 1),
                M: oc("Month", 1, 1),
                dd: oc("Date", 2),
                d: oc("Date", 1),
                HH: oc("Hours", 2),
                H: oc("Hours", 1),
                hh: oc("Hours", 2, -12),
                h: oc("Hours", 1, -12),
                mm: oc("Minutes", 2),
                m: oc("Minutes", 1),
                ss: oc("Seconds", 2),
                s: oc("Seconds", 1),
                sss: oc("Milliseconds", 3),
                EEEE: pc("Day"),
                EEE: pc("Day", !0),
                a: uc,
                Z: qc,
                ww: tc(2),
                w: tc(1),
                G: vc,
                GG: vc,
                GGG: vc,
                GGGG: wc
            },
            ze = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
            Ae = /^\-?\d+$/;
        xc.$inject = ["$locale"];
        var Be = q(Wc),
            Ce = q(Yc);
        Ac.$inject = ["$parse"];
        var De = q({
                restrict: "E",
                compile: function(a, b) {
                    return b.href || b.xlinkHref || b.name ? void 0 : function(a, b) {
                        if ("a" === b[0].nodeName.toLowerCase()) {
                            var c = "[object SVGAnimatedString]" === gd.call(b.prop("href")) ? "xlink:href" : "href";
                            b.on("click", function(a) {
                                b.attr(c) || a.preventDefault()
                            })
                        }
                    }
                }
            }),
            Ee = {};
        f(Md, function(a, b) {
            if ("multiple" != a) {
                var c = $a("ng-" + b);
                Ee[c] = function() {
                    return {
                        restrict: "A",
                        priority: 100,
                        link: function(a, d, e) {
                            a.$watch(e[c], function(a) {
                                e.$set(b, !!a)
                            })
                        }
                    }
                }
            }
        }), f(Od, function(a, b) {
            Ee[b] = function() {
                return {
                    priority: 100,
                    link: function(a, c, d) {
                        if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                            var e = d.ngPattern.match(Uc);
                            if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]))
                        }
                        a.$watch(d[b], function(a) {
                            d.$set(b, a)
                        })
                    }
                }
            }
        }), f(["src", "srcset", "href"], function(a) {
            var b = $a("ng-" + a);
            Ee[b] = function() {
                return {
                    priority: 99,
                    link: function(c, d, e) {
                        var f = a,
                            g = a;
                        "href" === a && "[object SVGAnimatedString]" === gd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
                            return b ? (e.$set(g, b), void(_c && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
                        })
                    }
                }
            }
        });
        var Fe = {
                $addControl: o,
                $$renameControl: Cc,
                $removeControl: o,
                $setValidity: o,
                $setDirty: o,
                $setPristine: o,
                $setSubmitted: o
            },
            Ge = "ng-submitted";
        Dc.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
        var He = function(a) {
                return ["$timeout", function(b) {
                    var d = {
                        name: "form",
                        restrict: a ? "EAC" : "E",
                        controller: Dc,
                        compile: function(d, e) {
                            d.addClass( of ).addClass(mf);
                            var f = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;
                            return {
                                pre: function(a, d, e, g) {
                                    if (!("action" in e)) {
                                        var h = function(b) {
                                            a.$apply(function() {
                                                g.$commitViewValue(), g.$setSubmitted()
                                            }), b.preventDefault()
                                        };
                                        Ad(d[0], "submit", h), d.on("$destroy", function() {
                                            b(function() {
                                                Bd(d[0], "submit", h)
                                            }, 0, !1)
                                        })
                                    }
                                    var i = g.$$parentForm;
                                    f && (Kb(a, null, g.$name, g, g.$name), e.$observe(f, function(b) {
                                        g.$name !== b && (Kb(a, null, g.$name, c, g.$name), i.$$renameControl(g, b), Kb(a, null, g.$name, g, g.$name))
                                    })), d.on("$destroy", function() {
                                        i.$removeControl(g), f && Kb(a, null, e[f], c, g.$name), l(g, Fe)
                                    })
                                }
                            }
                        }
                    };
                    return d
                }]
            },
            Ie = He(),
            Je = He(!0),
            Ke = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
            Le = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            Me = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
            Ne = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
            Oe = /^(\d{4})-(\d{2})-(\d{2})$/,
            Pe = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            Qe = /^(\d{4})-W(\d\d)$/,
            Re = /^(\d{4})-(\d\d)$/,
            Se = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            Te = {
                text: Fc,
                date: Jc("date", Oe, Ic(Oe, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
                "datetime-local": Jc("datetimelocal", Pe, Ic(Pe, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
                time: Jc("time", Se, Ic(Se, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
                week: Jc("week", Qe, Hc, "yyyy-Www"),
                month: Jc("month", Re, Ic(Re, ["yyyy", "MM"]), "yyyy-MM"),
                number: Lc,
                url: Mc,
                email: Nc,
                radio: Oc,
                checkbox: Qc,
                hidden: o,
                button: o,
                submit: o,
                reset: o,
                file: o
            },
            Ue = ["$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
                return {
                    restrict: "E",
                    require: ["?ngModel"],
                    link: {
                        pre: function(e, f, g, h) {
                            h[0] && (Te[Wc(g.type)] || Te.text)(e, f, g, h[0], b, a, c, d)
                        }
                    }
                }
            }],
            Ve = /^(true|false|\d+)$/,
            We = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    compile: function(a, b) {
                        return Ve.test(b.ngValue) ? function(a, b, c) {
                            c.$set("value", a.$eval(c.ngValue))
                        } : function(a, b, c) {
                            a.$watch(c.ngValue, function(a) {
                                c.$set("value", a)
                            })
                        }
                    }
                }
            },
            Xe = ["$compile", function(a) {
                return {
                    restrict: "AC",
                    compile: function(b) {
                        return a.$$addBindingClass(b),
                            function(b, d, e) {
                                a.$$addBindingInfo(d, e.ngBind), d = d[0], b.$watch(e.ngBind, function(a) {
                                    d.textContent = a === c ? "" : a
                                })
                            }
                    }
                }
            }],
            Ye = ["$interpolate", "$compile", function(a, b) {
                return {
                    compile: function(d) {
                        return b.$$addBindingClass(d),
                            function(d, e, f) {
                                var g = a(e.attr(f.$attr.ngBindTemplate));
                                b.$$addBindingInfo(e, g.expressions), e = e[0], f.$observe("ngBindTemplate", function(a) {
                                    e.textContent = a === c ? "" : a
                                })
                            }
                    }
                }
            }],
            Ze = ["$sce", "$parse", "$compile", function(a, b, c) {
                return {
                    restrict: "A",
                    compile: function(d, e) {
                        var f = b(e.ngBindHtml),
                            g = b(e.ngBindHtml, function(a) {
                                return (a || "").toString()
                            });
                        return c.$$addBindingClass(d),
                            function(b, d, e) {
                                c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                                    d.html(a.getTrustedHtml(f(b)) || "")
                                })
                            }
                    }
                }
            }],
            $e = q({
                restrict: "A",
                require: "ngModel",
                link: function(a, b, c, d) {
                    d.$viewChangeListeners.push(function() {
                        a.$eval(c.ngChange)
                    })
                }
            }),
            _e = Rc("", !0),
            af = Rc("Odd", 0),
            bf = Rc("Even", 1),
            cf = Bc({
                compile: function(a, b) {
                    b.$set("ngCloak", c), a.removeClass("ng-cloak")
                }
            }),
            df = [function() {
                return {
                    restrict: "A",
                    scope: !0,
                    controller: "@",
                    priority: 500
                }
            }],
            ef = {},
            ff = {
                blur: !0,
                focus: !0
            };
        f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
            var b = $a("ng-" + a);
            ef[b] = ["$parse", "$rootScope", function(c, d) {
                return {
                    restrict: "A",
                    compile: function(e, f) {
                        var g = c(f[b], null, !0);
                        return function(b, c) {
                            c.on(a, function(c) {
                                var e = function() {
                                    g(b, {
                                        $event: c
                                    })
                                };
                                ff[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                            })
                        }
                    }
                }
            }]
        });
        var gf = ["$animate", function(a) {
                return {
                    multiElement: !0,
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function(c, d, e, f, g) {
                        var h, i, j;
                        c.$watch(e.ngIf, function(c) {
                            c ? i || g(function(c, f) {
                                i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                                    clone: c
                                }, a.enter(c, d.parent(), d)
                            }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = ia(h.clone), a.leave(j).then(function() {
                                j = null
                            }), h = null))
                        })
                    }
                }
            }],
            hf = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function(a, b, c, d) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: id.noop,
                    compile: function(e, f) {
                        var g = f.ngInclude || f.src,
                            h = f.onload || "",
                            i = f.autoscroll;
                        return function(e, f, j, k, l) {
                            var m, n, o, p = 0,
                                q = function() {
                                    n && (n.remove(), n = null), m && (m.$destroy(), m = null), o && (c.leave(o).then(function() {
                                        n = null
                                    }), n = o, o = null)
                                };
                            e.$watch(d.parseAsResourceUrl(g), function(d) {
                                var g = function() {
                                        !s(i) || i && !e.$eval(i) || b()
                                    },
                                    j = ++p;
                                d ? (a(d, !0).then(function(a) {
                                    if (j === p) {
                                        var b = e.$new();
                                        k.template = a;
                                        var i = l(b, function(a) {
                                            q(), c.enter(a, null, f).then(g)
                                        });
                                        m = b, o = i, m.$emit("$includeContentLoaded", d), e.$eval(h)
                                    }
                                }, function() {
                                    j === p && (q(), e.$emit("$includeContentError", d))
                                }), e.$emit("$includeContentRequested", d)) : (q(), k.template = null)
                            })
                        }
                    }
                }
            }],
            jf = ["$compile", function(a) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function(c, d, e, f) {
                        return /SVG/.test(d[0].toString()) ? (d.empty(), void a(sa(f.template, b).childNodes)(c, function(a) {
                            d.append(a)
                        }, {
                            futureParentElement: d
                        })) : (d.html(f.template), void a(d.contents())(c))
                    }
                }
            }],
            kf = Bc({
                priority: 450,
                compile: function() {
                    return {
                        pre: function(a, b, c) {
                            a.$eval(c.ngInit)
                        }
                    }
                }
            }),
            lf = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    require: "ngModel",
                    link: function(a, b, d, e) {
                        var g = b.attr(d.$attr.ngList) || ", ",
                            h = "false" !== d.ngTrim,
                            i = h ? md(g) : g,
                            j = function(a) {
                                if (!r(a)) {
                                    var b = [];
                                    return a && f(a.split(i), function(a) {
                                        a && b.push(h ? md(a) : a)
                                    }), b
                                }
                            };
                        e.$parsers.push(j), e.$formatters.push(function(a) {
                            return ld(a) ? a.join(g) : c
                        }), e.$isEmpty = function(a) {
                            return !a || !a.length
                        }
                    }
                }
            },
            mf = "ng-valid",
            nf = "ng-invalid",
            of = "ng-pristine",
            pf = "ng-dirty",
            qf = "ng-untouched",
            rf = "ng-touched",
            sf = "ng-pending",
            tf = new d("ngModel"),
            uf = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, d, e, g, h, i, j, k, l) {
                this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a);
                var m, n = g(d.ngModel),
                    p = n.assign,
                    q = n,
                    t = p,
                    u = null,
                    w = this;
                this.$$setOptions = function(a) {
                    if (w.$options = a, a && a.getterSetter) {
                        var b = g(d.ngModel + "()"),
                            c = g(d.ngModel + "($$$p)");
                        q = function(a) {
                            var c = n(a);
                            return x(c) && (c = b(a)), c
                        }, t = function(a, b) {
                            x(n(a)) ? c(a, {
                                $$$p: w.$modelValue
                            }) : p(a, w.$modelValue)
                        }
                    } else if (!n.assign) throw tf("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, T(e))
                }, this.$render = o, this.$isEmpty = function(a) {
                    return r(a) || "" === a || null === a || a !== a
                };
                var y = e.inheritedData("$formController") || Fe,
                    z = 0;
                Sc({
                    ctrl: this,
                    $element: e,
                    set: function(a, b) {
                        a[b] = !0
                    },
                    unset: function(a, b) {
                        delete a[b]
                    },
                    parentForm: y,
                    $animate: h
                }), this.$setPristine = function() {
                    w.$dirty = !1, w.$pristine = !0, h.removeClass(e, pf), h.addClass(e, of )
                }, this.$setDirty = function() {
                    w.$dirty = !0, w.$pristine = !1, h.removeClass(e, of ), h.addClass(e, pf), y.$setDirty()
                }, this.$setUntouched = function() {
                    w.$touched = !1, w.$untouched = !0, h.setClass(e, qf, rf)
                }, this.$setTouched = function() {
                    w.$touched = !0, w.$untouched = !1, h.setClass(e, rf, qf)
                }, this.$rollbackViewValue = function() {
                    i.cancel(u), w.$viewValue = w.$$lastCommittedViewValue, w.$render()
                }, this.$validate = function() {
                    if (!v(w.$modelValue) || !isNaN(w.$modelValue)) {
                        var a = w.$$lastCommittedViewValue,
                            b = w.$$rawModelValue,
                            d = w.$valid,
                            e = w.$modelValue,
                            f = w.$options && w.$options.allowInvalid;
                        w.$$runValidators(b, a, function(a) {
                            f || d === a || (w.$modelValue = a ? b : c, w.$modelValue !== e && w.$$writeModelToScope())
                        })
                    }
                }, this.$$runValidators = function(a, b, d) {
                    function e() {
                        var a = w.$$parserName || "parse";
                        return m !== c ? (m || (f(w.$validators, function(a, b) {
                            i(b, null)
                        }), f(w.$asyncValidators, function(a, b) {
                            i(b, null)
                        })), i(a, m), m) : (i(a, null), !0)
                    }

                    function g() {
                        var c = !0;
                        return f(w.$validators, function(d, e) {
                            var f = d(a, b);
                            c = c && f, i(e, f)
                        }), c ? !0 : (f(w.$asyncValidators, function(a, b) {
                            i(b, null)
                        }), !1)
                    }

                    function h() {
                        var d = [],
                            e = !0;
                        f(w.$asyncValidators, function(f, g) {
                            var h = f(a, b);
                            if (!F(h)) throw tf("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
                            i(g, c), d.push(h.then(function() {
                                i(g, !0)
                            }, function(a) {
                                e = !1, i(g, !1)
                            }))
                        }), d.length ? k.all(d).then(function() {
                            j(e)
                        }, o) : j(!0)
                    }

                    function i(a, b) {
                        l === z && w.$setValidity(a, b)
                    }

                    function j(a) {
                        l === z && d(a)
                    }
                    z++;
                    var l = z;
                    return e() && g() ? void h() : void j(!1)
                }, this.$commitViewValue = function() {
                    var a = w.$viewValue;
                    i.cancel(u), (w.$$lastCommittedViewValue !== a || "" === a && w.$$hasNativeValidators) && (w.$$lastCommittedViewValue = a, w.$pristine && this.$setDirty(), this.$$parseAndValidate())
                }, this.$$parseAndValidate = function() {
                    function b() {
                        w.$modelValue !== g && w.$$writeModelToScope()
                    }
                    var d = w.$$lastCommittedViewValue,
                        e = d;
                    if (m = r(e) ? c : !0)
                        for (var f = 0; f < w.$parsers.length; f++)
                            if (e = w.$parsers[f](e), r(e)) {
                                m = !1;
                                break
                            }
                    v(w.$modelValue) && isNaN(w.$modelValue) && (w.$modelValue = q(a));
                    var g = w.$modelValue,
                        h = w.$options && w.$options.allowInvalid;
                    w.$$rawModelValue = e, h && (w.$modelValue = e, b()), w.$$runValidators(e, w.$$lastCommittedViewValue, function(a) {
                        h || (w.$modelValue = a ? e : c, b())
                    })
                }, this.$$writeModelToScope = function() {
                    t(a, w.$modelValue), f(w.$viewChangeListeners, function(a) {
                        try {
                            a()
                        } catch (c) {
                            b(c)
                        }
                    })
                }, this.$setViewValue = function(a, b) {
                    w.$viewValue = a, (!w.$options || w.$options.updateOnDefault) && w.$$debounceViewValueCommit(b)
                }, this.$$debounceViewValueCommit = function(b) {
                    var c, d = 0,
                        e = w.$options;
                    e && s(e.debounce) && (c = e.debounce, v(c) ? d = c : v(c[b]) ? d = c[b] : v(c["default"]) && (d = c["default"])), i.cancel(u), d ? u = i(function() {
                        w.$commitViewValue()
                    }, d) : j.$$phase ? w.$commitViewValue() : a.$apply(function() {
                        w.$commitViewValue()
                    })
                }, a.$watch(function() {
                    var b = q(a);
                    if (b !== w.$modelValue) {
                        w.$modelValue = w.$$rawModelValue = b, m = c;
                        for (var d = w.$formatters, e = d.length, f = b; e--;) f = d[e](f);
                        w.$viewValue !== f && (w.$viewValue = w.$$lastCommittedViewValue = f, w.$render(), w.$$runValidators(b, f, o))
                    }
                    return b
                })
            }],
            vf = ["$rootScope", function(a) {
                return {
                    restrict: "A",
                    require: ["ngModel", "^?form", "^?ngModelOptions"],
                    controller: uf,
                    priority: 1,
                    compile: function(b) {
                        return b.addClass( of ).addClass(qf).addClass(mf), {
                            pre: function(a, b, c, d) {
                                var e = d[0],
                                    f = d[1] || Fe;
                                e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function(a) {
                                    e.$name !== a && f.$$renameControl(e, a)
                                }), a.$on("$destroy", function() {
                                    f.$removeControl(e)
                                })
                            },
                            post: function(b, c, d, e) {
                                var f = e[0];
                                f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function(a) {
                                    f.$$debounceViewValueCommit(a && a.type)
                                }), c.on("blur", function(c) {
                                    f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                                })
                            }
                        }
                    }
                }
            }],
            wf = /(\s+|^)default(\s+|$)/,
            xf = function() {
                return {
                    restrict: "A",
                    controller: ["$scope", "$attrs", function(a, b) {
                        var d = this;
                        this.$options = a.$eval(b.ngModelOptions), this.$options.updateOn !== c ? (this.$options.updateOnDefault = !1, this.$options.updateOn = md(this.$options.updateOn.replace(wf, function() {
                            return d.$options.updateOnDefault = !0, " "
                        }))) : this.$options.updateOnDefault = !0
                    }]
                }
            },
            yf = Bc({
                terminal: !0,
                priority: 1e3
            }),
            zf = ["$locale", "$interpolate", function(a, b) {
                var c = /{}/g,
                    d = /^when(Minus)?(.+)$/;
                return {
                    restrict: "EA",
                    link: function(e, g, h) {
                        function i(a) {
                            g.text(a || "")
                        }
                        var j, k = h.count,
                            l = h.$attr.when && g.attr(h.$attr.when),
                            m = h.offset || 0,
                            n = e.$eval(l) || {},
                            o = {},
                            p = b.startSymbol(),
                            q = b.endSymbol(),
                            r = p + k + "-" + m + q,
                            s = id.noop;
                        f(h, function(a, b) {
                            var c = d.exec(b);
                            if (c) {
                                var e = (c[1] ? "-" : "") + Wc(c[2]);
                                n[e] = g.attr(h.$attr[b])
                            }
                        }), f(n, function(a, d) {
                            o[d] = b(a.replace(c, r))
                        }), e.$watch(k, function(b) {
                            var c = parseFloat(b),
                                d = isNaN(c);
                            d || c in n || (c = a.pluralCat(c - m)), c === j || d && isNaN(j) || (s(), s = e.$watch(o[c], i), j = c)
                        })
                    }
                }
            }],
            Af = ["$parse", "$animate", function(a, g) {
                var h = "$$NG_REMOVED",
                    i = d("ngRepeat"),
                    j = function(a, b, c, d, e, f, g) {
                        a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
                    },
                    k = function(a) {
                        return a.clone[0]
                    },
                    l = function(a) {
                        return a.clone[a.clone.length - 1]
                    };
                return {
                    restrict: "A",
                    multiElement: !0,
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    compile: function(d, m) {
                        var n = m.ngRepeat,
                            o = b.createComment(" end ngRepeat: " + n + " "),
                            p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                        if (!p) throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                        var q = p[1],
                            r = p[2],
                            s = p[3],
                            t = p[4];
                        if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p) throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
                        var u = p[3] || p[1],
                            v = p[2];
                        if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s))) throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
                        var w, x, y, z, A = {
                            $id: Oa
                        };
                        return t ? w = a(t) : (y = function(a, b) {
                                return Oa(b)
                            }, z = function(a) {
                                return a
                            }),
                            function(a, b, d, m, p) {
                                w && (x = function(b, c, d) {
                                    return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A)
                                });
                                var q = ja();
                                a.$watchCollection(r, function(d) {
                                    var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0],
                                        J = ja();
                                    if (s && (a[s] = d), e(d)) E = d, D = x || y;
                                    else {
                                        D = x || z, E = [];
                                        for (var K in d) d.hasOwnProperty(K) && "$" != K.charAt(0) && E.push(K);
                                        E.sort()
                                    }
                                    for (w = E.length, G = new Array(w), m = 0; w > m; m++)
                                        if (A = d === E ? m : E[m], B = d[A], C = D(A, B, m), q[C]) F = q[C], delete q[C], J[C] = F, G[m] = F;
                                        else {
                                            if (J[C]) throw f(G, function(a) {
                                                a && a.scope && (q[a.id] = a)
                                            }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
                                            G[m] = {
                                                id: C,
                                                scope: c,
                                                clone: c
                                            }, J[C] = !0
                                        }
                                    for (var L in q) {
                                        if (F = q[L], H = ia(F.clone), g.leave(H), H[0].parentNode)
                                            for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                                        F.scope.$destroy()
                                    }
                                    for (m = 0; w > m; m++)
                                        if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                                            t = I;
                                            do t = t.nextSibling; while (t && t[h]);
                                            k(F) != t && g.move(ia(F.clone), null, ad(I)), I = l(F), j(F.scope, m, u, B, v, A, w)
                                        } else p(function(a, b) {
                                            F.scope = b;
                                            var c = o.cloneNode(!1);
                                            a[a.length++] = c, g.enter(a, null, ad(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w)
                                        });
                                    q = J
                                })
                            }
                    }
                }
            }],
            Bf = "ng-hide",
            Cf = "ng-hide-animate",
            Df = ["$animate", function(a) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(b, c, d) {
                        b.$watch(d.ngShow, function(b) {
                            a[b ? "removeClass" : "addClass"](c, Bf, {
                                tempClasses: Cf
                            })
                        })
                    }
                }
            }],
            Ef = ["$animate", function(a) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(b, c, d) {
                        b.$watch(d.ngHide, function(b) {
                            a[b ? "addClass" : "removeClass"](c, Bf, {
                                tempClasses: Cf
                            })
                        })
                    }
                }
            }],
            Ff = Bc(function(a, b, c) {
                a.$watchCollection(c.ngStyle, function(a, c) {
                    c && a !== c && f(c, function(a, c) {
                        b.css(c, "")
                    }), a && b.css(a)
                })
            }),
            Gf = ["$animate", function(a) {
                return {
                    restrict: "EA",
                    require: "ngSwitch",
                    controller: ["$scope", function() {
                        this.cases = {}
                    }],
                    link: function(c, d, e, g) {
                        var h = e.ngSwitch || e.on,
                            i = [],
                            j = [],
                            k = [],
                            l = [],
                            m = function(a, b) {
                                return function() {
                                    a.splice(b, 1)
                                }
                            };
                        c.$watch(h, function(c) {
                            var d, e;
                            for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
                            for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                                var h = ia(j[d].clone);
                                l[d].$destroy();
                                var n = k[d] = a.leave(h);
                                n.then(m(k, d))
                            }
                            j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function(c) {
                                c.transclude(function(d, e) {
                                    l.push(e);
                                    var f = c.element;
                                    d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                                    var g = {
                                        clone: d
                                    };
                                    j.push(g), a.enter(d, f.parent(), f)
                                })
                            })
                        })
                    }
                }
            }],
            Hf = Bc({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(a, b, c, d, e) {
                    d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                        transclude: e,
                        element: b
                    })
                }
            }),
            If = Bc({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(a, b, c, d, e) {
                    d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                        transclude: e,
                        element: b
                    })
                }
            }),
            Jf = Bc({
                restrict: "EAC",
                link: function(a, b, c, e, f) {
                    if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(b));
                    f(function(a) {
                        b.empty(), b.append(a)
                    })
                }
            }),
            Kf = ["$templateCache", function(a) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(b, c) {
                        if ("text/ng-template" == c.type) {
                            var d = c.id,
                                e = b[0].text;
                            a.put(d, e)
                        }
                    }
                }
            }],
            Lf = d("ngOptions"),
            Mf = q({
                restrict: "A",
                terminal: !0
            }),
            Nf = ["$compile", "$parse", function(a, d) {
                var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                    h = {
                        $setViewValue: o
                    };
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: ["$element", "$scope", "$attrs", function(a, b, c) {
                        var d, e, f = this,
                            g = {},
                            i = h;
                        f.databound = c.ngModel, f.init = function(a, b, c) {
                            i = a, d = b, e = c
                        }, f.addOption = function(b, c) {
                            ga(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove()), c && c[0].hasAttribute("selected") && (c[0].selected = !0)
                        }, f.removeOption = function(a) {
                            this.hasOption(a) && (delete g[a], i.$viewValue === a && this.renderUnknownOption(a))
                        }, f.renderUnknownOption = function(b) {
                            var c = "? " + Oa(b) + " ?";
                            e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
                        }, f.hasOption = function(a) {
                            return g.hasOwnProperty(a)
                        }, b.$on("$destroy", function() {
                            f.renderUnknownOption = o
                        })
                    }],
                    link: function(h, i, j, k) {
                        function l(a, b, c, d) {
                            c.$render = function() {
                                var a = c.$viewValue;
                                d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
                            }, b.on("change", function() {
                                a.$apply(function() {
                                    z.parent() && z.remove(), c.$setViewValue(b.val())
                                })
                            })
                        }

                        function m(a, b, c) {
                            var d;
                            c.$render = function() {
                                var a = new Pa(c.$viewValue);
                                f(b.find("option"), function(b) {
                                    b.selected = s(a.get(b.value))
                                })
                            }, a.$watch(function() {
                                M(d, c.$viewValue) || (d = L(c.$viewValue), c.$render())
                            }), b.on("change", function() {
                                a.$apply(function() {
                                    var a = [];
                                    f(b.find("option"), function(b) {
                                        b.selected && a.push(b.value)
                                    }), c.$setViewValue(a)
                                })
                            })
                        }

                        function n(b, h, i) {
                            function j(a, c, d) {
                                return M[B] = d, E && (M[E] = c), a(b, M)
                            }

                            function k() {
                                b.$apply(function() {
                                    var a, c = H(b) || [];
                                    if (t) a = [], f(h.val(), function(b) {
                                        b = J ? K[b] : b, a.push(l(b, c[b]))
                                    });
                                    else {
                                        var d = J ? K[h.val()] : h.val();
                                        a = l(d, c[d])
                                    }
                                    i.$setViewValue(a), r()
                                })
                            }

                            function l(a, b) {
                                if ("?" === a) return c;
                                if ("" === a) return null;
                                var d = D ? D : G;
                                return j(d, a, b)
                            }

                            function m() {
                                var a, c = H(b);
                                if (c && ld(c)) {
                                    a = new Array(c.length);
                                    for (var d = 0, e = c.length; e > d; d++) a[d] = j(A, d, c[d]);
                                    return a
                                }
                                if (c) {
                                    a = {};
                                    for (var f in c) c.hasOwnProperty(f) && (a[f] = j(A, f, c[f]))
                                }
                                return a
                            }

                            function n(a) {
                                var b;
                                if (t)
                                    if (J && ld(a)) {
                                        b = new Pa([]);
                                        for (var c = 0; c < a.length; c++) b.put(j(J, null, a[c]), !0)
                                    } else b = new Pa(a);
                                else J && (a = j(J, null, a));
                                return function(c, d) {
                                    var e;
                                    return e = J ? J : D ? D : G, t ? s(b.remove(j(e, c, d))) : a === j(e, c, d)
                                }
                            }

                            function o() {
                                w || (b.$$postDigest(r), w = !0)
                            }

                            function q(a, b, c) {
                                a[b] = a[b] || 0, a[b] += c ? 1 : -1
                            }

                            function r() {
                                w = !1;
                                var a, c, d, e, k, l, m, o, r, u, z, B, C, D, G, I, N, O = {
                                        "": []
                                    },
                                    P = [""],
                                    Q = i.$viewValue,
                                    R = H(b) || [],
                                    S = E ? g(R) : R,
                                    T = {},
                                    U = n(Q),
                                    V = !1;
                                for (K = {}, B = 0; u = S.length, u > B; B++) m = B, E && (m = S[B], "$" === m.charAt(0)) || (o = R[m], a = j(F, m, o) || "", (c = O[a]) || (c = O[a] = [], P.push(a)), C = U(m, o), V = V || C, I = j(A, m, o), I = s(I) ? I : "", N = J ? J(b, M) : E ? S[B] : B, J && (K[N] = m), c.push({
                                    id: N,
                                    label: I,
                                    selected: C
                                }));
                                for (t || (v || null === Q ? O[""].unshift({
                                        id: "",
                                        label: "",
                                        selected: !V
                                    }) : V || O[""].unshift({
                                        id: "?",
                                        label: "",
                                        selected: !0
                                    })), z = 0, r = P.length; r > z; z++) {
                                    for (a = P[z], c = O[a], L.length <= z ? (e = {
                                            element: y.clone().attr("label", a),
                                            label: c.label
                                        }, k = [e], L.push(k), h.append(e.element)) : (k = L[z], e = k[0], e.label != a && e.element.attr("label", e.label = a)), D = null, B = 0, u = c.length; u > B; B++) d = c[B], (l = k[B + 1]) ? (D = l.element, l.label !== d.label && (q(T, l.label, !1), q(T, d.label, !0), D.text(l.label = d.label), D.prop("label", l.label)), l.id !== d.id && D.val(l.id = d.id), D[0].selected !== d.selected && (D.prop("selected", l.selected = d.selected), _c && D.prop("selected", l.selected))) : ("" === d.id && v ? G = v : (G = x.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), k.push(l = {
                                        element: G,
                                        label: d.label,
                                        id: d.id,
                                        selected: d.selected
                                    }), q(T, d.label, !0), D ? D.after(G) : e.element.append(G), D = G);
                                    for (B++; k.length > B;) d = k.pop(), q(T, d.label, !1), d.element.remove()
                                }
                                for (; L.length > z;) {
                                    for (c = L.pop(), B = 1; B < c.length; ++B) q(T, c[B].label, !1);
                                    c[0].element.remove()
                                }
                                f(T, function(a, b) {
                                    a > 0 ? p.addOption(b) : 0 > a && p.removeOption(b)
                                })
                            }
                            var z;
                            if (!(z = u.match(e))) throw Lf("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(h));
                            var A = d(z[2] || z[1]),
                                B = z[4] || z[6],
                                C = / as /.test(z[0]) && z[1],
                                D = C ? d(C) : null,
                                E = z[5],
                                F = d(z[3] || ""),
                                G = d(z[2] ? z[1] : B),
                                H = d(z[7]),
                                I = z[8],
                                J = I ? d(z[8]) : null,
                                K = {},
                                L = [
                                    [{
                                        element: h,
                                        label: ""
                                    }]
                                ],
                                M = {};
                            v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), h.empty(), h.on("change", k), i.$render = r, b.$watchCollection(H, o), b.$watchCollection(m, o), t && b.$watchCollection(function() {
                                return i.$modelValue
                            }, o)
                        }
                        if (k[1]) {
                            for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = !1, x = ad(b.createElement("option")), y = ad(b.createElement("optgroup")), z = x.clone(), A = 0, B = i.children(), C = B.length; C > A; A++)
                                if ("" === B[A].value) {
                                    o = v = B.eq(A);
                                    break
                                }
                            p.init(q, v, z), t && (q.$isEmpty = function(a) {
                                return !a || 0 === a.length
                            }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
                        }
                    }
                }
            }],
            Of = ["$interpolate", function(a) {
                var b = {
                    addOption: o,
                    removeOption: o
                };
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(c, d) {
                        if (r(d.value)) {
                            var e = a(c.text(), !0);
                            e || d.$set("value", c.text())
                        }
                        return function(a, c, d) {
                            var f = "$selectController",
                                g = c.parent(),
                                h = g.data(f) || g.parent().data(f);
                            h && h.databound || (h = b), e ? a.$watch(e, function(a, b) {
                                d.$set("value", a), b !== a && h.removeOption(b), h.addOption(a, c)
                            }) : h.addOption(d.value, c), c.on("$destroy", function() {
                                h.removeOption(d.value)
                            })
                        }
                    }
                }
            }],
            Pf = q({
                restrict: "E",
                terminal: !1
            }),
            Qf = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(a, b, c, d) {
                        d && (c.required = !0, d.$validators.required = function(a, b) {
                            return !c.required || !d.$isEmpty(b)
                        }, c.$observe("required", function() {
                            d.$validate()
                        }))
                    }
                }
            },
            Rf = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(a, b, e, f) {
                        if (f) {
                            var g, h = e.ngPattern || e.pattern;
                            e.$observe("pattern", function(a) {
                                if (u(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, T(b));
                                g = a || c, f.$validate()
                            }), f.$validators.pattern = function(a) {
                                return f.$isEmpty(a) || r(g) || g.test(a)
                            }
                        }
                    }
                }
            },
            Sf = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(a, b, c, d) {
                        if (d) {
                            var e = -1;
                            c.$observe("maxlength", function(a) {
                                var b = m(a);
                                e = isNaN(b) ? -1 : b, d.$validate()
                            }), d.$validators.maxlength = function(a, b) {
                                return 0 > e || d.$isEmpty(b) || b.length <= e
                            }
                        }
                    }
                }
            },
            Tf = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(a, b, c, d) {
                        if (d) {
                            var e = 0;
                            c.$observe("minlength", function(a) {
                                e = m(a) || 0, d.$validate()
                            }), d.$validators.minlength = function(a, b) {
                                return d.$isEmpty(b) || b.length >= e
                            }
                        }
                    }
                }
            };
        return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (da(), na(id), void ad(b).ready(function() {
            $(b, _)
        }))
    }(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.4", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.4", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c,
        a.fn.carousel.noConflict = function() {
            return a.fn.carousel = d, this
        };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.4", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = c(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.4", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                    g = e.hasClass("open");
                if (!g && 27 != b.which || g && 27 == b.which) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(b.target);
                    38 == b.which && j > 0 && j--, 40 == b.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in").attr("aria-hidden", !1), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible") ? void(c.hoverState = "in") : (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.options.container ? a(this.options.container) : this.$element.parent(),
                    p = this.getPosition(o);
                h = "bottom" == h && k.bottom + m > p.bottom ? "top" : "top" == h && k.top - m < p.top ? "bottom" : "right" == h && k.right + l > p.width ? "left" : "left" == h && k.left - l < p.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var q = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(q, h);
            var r = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION) : r()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type)
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.4", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.4", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.4", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.4", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = a(document.body).height();
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery),
function(a, b, c) {
    "use strict";
    b.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function() {
        var a = "$$ngAnimateChildren";
        return function(c, d, e) {
            var f = e.ngAnimateChildren;
            b.isString(f) && 0 === f.length ? d.data(a, !0) : c.$watch(f, function(b) {
                d.data(a, !!b)
            })
        }
    }).factory("$$animateReflow", ["$$rAF", "$document", function(a, b) {
        var c = b[0].body;
        return function(b) {
            return a(function() {
                c.offsetWidth + 1;
                b()
            })
        }
    }]).config(["$provide", "$animateProvider", function(d, e) {
        function f(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.nodeType == q) return c
            }
        }

        function g(a) {
            return a && b.element(a)
        }

        function h(a) {
            return b.element(f(a))
        }

        function i(a, b) {
            return f(a) == f(b)
        }
        var j, k = b.noop,
            l = b.forEach,
            m = e.$$selectors,
            n = b.isArray,
            o = b.isString,
            p = b.isObject,
            q = 1,
            r = "$$ngAnimateState",
            s = "$$ngAnimateChildren",
            t = "ng-animate",
            u = {
                running: !0
            };
        d.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite", function(a, c, d, q, v, w, x, y, z, A) {
            function B(a, b) {
                var c = a.data(r) || {};
                return b && (c.running = !0, c.structural = !0, a.data(r, c)), c.disabled || c.running && c.structural
            }

            function C(a) {
                var b, d = c.defer();
                return d.promise.$$cancelFn = function() {
                    b && b()
                }, x.$$postDigest(function() {
                    b = a(function() {
                        d.resolve()
                    })
                }), d.promise
            }

            function D(a) {
                return p(a) ? (a.tempClasses && o(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), a) : void 0
            }

            function E(a, b, c) {
                c = c || {};
                var d = {};
                l(c, function(a, b) {
                    l(b.split(" "), function(b) {
                        d[b] = a
                    })
                });
                var e = Object.create(null);
                l((a.attr("class") || "").split(/\s+/), function(a) {
                    e[a] = !0
                });
                var f = [],
                    g = [];
                return l(b && b.classes || [], function(a, b) {
                    var c = e[b],
                        h = d[b] || {};
                    a === !1 ? (c || "addClass" == h.event) && g.push(b) : a === !0 && (c && "removeClass" != h.event || f.push(b))
                }), f.length + g.length > 0 && [f.join(" "), g.join(" ")]
            }

            function F(a) {
                if (a) {
                    var b = [],
                        c = {},
                        e = a.substr(1).split(".");
                    (q.transitions || q.animations) && b.push(d.get(m[""]));
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f],
                            h = m[g];
                        h && !c[g] && (b.push(d.get(h)), c[g] = !0)
                    }
                    return b
                }
            }

            function G(a, c, d, e) {
                function f(a, b) {
                    var c = a[b],
                        d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
                    return c || d ? ("leave" == b && (d = c, c = null), w.push({
                        event: b,
                        fn: c
                    }), t.push({
                        event: b,
                        fn: d
                    }), !0) : void 0
                }

                function g(b, c, f) {
                    function g(a) {
                        if (c) {
                            if ((c[a] || k)(), ++m < h.length) return;
                            c = null
                        }
                        f()
                    }
                    var h = [];
                    l(b, function(a) {
                        a.fn && h.push(a)
                    });
                    var m = 0;
                    l(h, function(b, f) {
                        var h = function() {
                            g(f)
                        };
                        switch (b.event) {
                            case "setClass":
                                c.push(b.fn(a, i, j, h, e));
                                break;
                            case "animate":
                                c.push(b.fn(a, d, e.from, e.to, h));
                                break;
                            case "addClass":
                                c.push(b.fn(a, i || d, h, e));
                                break;
                            case "removeClass":
                                c.push(b.fn(a, j || d, h, e));
                                break;
                            default:
                                c.push(b.fn(a, h, e))
                        }
                    }), c && 0 === c.length && f()
                }
                var h = a[0];
                if (h) {
                    e && (e.to = e.to || {}, e.from = e.from || {});
                    var i, j;
                    n(d) && (i = d[0], j = d[1], i ? j ? d = i + " " + j : (d = i, c = "addClass") : (d = j, c = "removeClass"));
                    var m = "setClass" == c,
                        o = m || "addClass" == c || "removeClass" == c || "animate" == c,
                        p = a.attr("class"),
                        q = p + " " + d;
                    if (O(q)) {
                        var r = k,
                            s = [],
                            t = [],
                            u = k,
                            v = [],
                            w = [],
                            x = (" " + q).replace(/\s+/g, ".");
                        return l(F(x), function(a) {
                            var b = f(a, c);
                            !b && m && (f(a, "addClass"), f(a, "removeClass"))
                        }), {
                            node: h,
                            event: c,
                            className: d,
                            isClassBased: o,
                            isSetClassOperation: m,
                            applyStyles: function() {
                                e && a.css(b.extend(e.from || {}, e.to || {}))
                            },
                            before: function(a) {
                                r = a, g(t, s, function() {
                                    r = k, a()
                                })
                            },
                            after: function(a) {
                                u = a, g(w, v, function() {
                                    u = k, a()
                                })
                            },
                            cancel: function() {
                                s && (l(s, function(a) {
                                    (a || k)(!0)
                                }), r(!0)), v && (l(v, function(a) {
                                    (a || k)(!0)
                                }), u(!0))
                            }
                        }
                    }
                }
            }

            function H(a, c, d, e, f, g, h, i) {
                function m(b) {
                    var e = "$animate:" + b;
                    x && x[e] && x[e].length > 0 && w(function() {
                        d.triggerHandler(e, {
                            event: a,
                            className: c
                        })
                    })
                }

                function n() {
                    m("before")
                }

                function o() {
                    m("after")
                }

                function p() {
                    m("close"), i()
                }

                function q() {
                    q.hasBeenRun || (q.hasBeenRun = !0, g())
                }

                function s() {
                    if (!s.hasBeenRun) {
                        v && v.applyStyles(), s.hasBeenRun = !0, h && h.tempClasses && l(h.tempClasses, function(a) {
                            j.removeClass(d, a)
                        });
                        var b = d.data(r);
                        b && (v && v.isClassBased ? J(d, c) : (w(function() {
                            var b = d.data(r) || {};
                            H == b.index && J(d, c, a)
                        }), d.data(r, b))), p()
                    }
                }
                var u = k,
                    v = G(d, a, c, h);
                if (!v) return q(), n(), o(), s(), u;
                a = v.event, c = v.className;
                var x = b.element._data(v.node);
                if (x = x && x.events, e || (e = f ? f.parent() : d.parent()), K(d, e)) return q(), n(), o(), s(), u;
                var y = d.data(r) || {},
                    z = y.active || {},
                    A = y.totalActive || 0,
                    B = y.last,
                    C = !1;
                if (A > 0) {
                    var D = [];
                    if (v.isClassBased) {
                        if ("setClass" == B.event) D.push(B), J(d, c);
                        else if (z[c]) {
                            var E = z[c];
                            E.event == a ? C = !0 : (D.push(E), J(d, c))
                        }
                    } else if ("leave" == a && z["ng-leave"]) C = !0;
                    else {
                        for (var F in z) D.push(z[F]);
                        y = {}, J(d, !0)
                    }
                    D.length > 0 && l(D, function(a) {
                        a.cancel()
                    })
                }
                if (!v.isClassBased || v.isSetClassOperation || "animate" == a || C || (C = "addClass" == a == d.hasClass(c)), C) return q(), n(), o(), p(), u;
                z = y.active || {}, A = y.totalActive || 0, "leave" == a && d.one("$destroy", function(a) {
                    var c = b.element(this),
                        d = c.data(r);
                    if (d) {
                        var e = d.active["ng-leave"];
                        e && (e.cancel(), J(c, "ng-leave"))
                    }
                }), j.addClass(d, t), h && h.tempClasses && l(h.tempClasses, function(a) {
                    j.addClass(d, a)
                });
                var H = M++;
                return A++, z[c] = v, d.data(r, {
                    last: v,
                    active: z,
                    index: H,
                    totalActive: A
                }), n(), v.before(function(b) {
                    var e = d.data(r);
                    b = b || !e || !e.active[c] || v.isClassBased && e.active[c].event != a, q(), b === !0 ? s() : (o(), v.after(s))
                }), v.cancel
            }

            function I(a) {
                var c = f(a);
                if (c) {
                    var d = b.isFunction(c.getElementsByClassName) ? c.getElementsByClassName(t) : c.querySelectorAll("." + t);
                    l(d, function(a) {
                        a = b.element(a);
                        var c = a.data(r);
                        c && c.active && l(c.active, function(a) {
                            a.cancel()
                        })
                    })
                }
            }

            function J(a, b) {
                if (i(a, v)) u.disabled || (u.running = !1, u.structural = !1);
                else if (b) {
                    var c = a.data(r) || {},
                        d = b === !0;
                    !d && c.active && c.active[b] && (c.totalActive--, delete c.active[b]), (d || !c.totalActive) && (j.removeClass(a, t), a.removeData(r))
                }
            }

            function K(a, c) {
                if (u.disabled) return !0;
                if (i(a, v)) return u.running;
                var d, e, f;
                do {
                    if (0 === c.length) break;
                    var g = i(c, v),
                        h = g ? u : c.data(r) || {};
                    if (h.disabled) return !0;
                    if (g && (f = !0), d !== !1) {
                        var j = c.data(s);
                        b.isDefined(j) && (d = j)
                    }
                    e = e || h.running || h.last && !h.last.isClassBased
                } while (c = c.parent());
                return !f || !d && e
            }
            j = A, v.data(r, u);
            var L = x.$watch(function() {
                    return z.totalPendingRequests
                }, function(a, b) {
                    0 === a && (L(), x.$$postDigest(function() {
                        x.$$postDigest(function() {
                            u.running = !1
                        })
                    }))
                }),
                M = 0,
                N = e.classNameFilter(),
                O = N ? function(a) {
                    return N.test(a)
                } : function() {
                    return !0
                };
            return {
                animate: function(a, b, c, d, e) {
                    return d = d || "ng-inline-animate", e = D(e) || {}, e.from = c ? b : null, e.to = c ? c : b, C(function(b) {
                        return H("animate", d, h(a), null, null, k, e, b)
                    })
                },
                enter: function(c, d, e, f) {
                    return f = D(f), c = b.element(c), d = g(d), e = g(e), B(c, !0), a.enter(c, d, e), C(function(a) {
                        return H("enter", "ng-enter", h(c), d, e, k, f, a)
                    })
                },
                leave: function(c, d) {
                    return d = D(d), c = b.element(c), I(c), B(c, !0), C(function(b) {
                        return H("leave", "ng-leave", h(c), null, null, function() {
                            a.leave(c)
                        }, d, b)
                    })
                },
                move: function(c, d, e, f) {
                    return f = D(f), c = b.element(c), d = g(d), e = g(e), I(c), B(c, !0), a.move(c, d, e), C(function(a) {
                        return H("move", "ng-move", h(c), d, e, k, f, a)
                    })
                },
                addClass: function(a, b, c) {
                    return this.setClass(a, b, [], c)
                },
                removeClass: function(a, b, c) {
                    return this.setClass(a, [], b, c)
                },
                setClass: function(c, d, e, g) {
                    g = D(g);
                    var i = "$$animateClasses";
                    if (c = b.element(c), c = h(c), B(c)) return a.$$setClassImmediately(c, d, e, g);
                    var j, k = c.data(i),
                        m = !!k;
                    return k || (k = {}, k.classes = {}), j = k.classes, d = n(d) ? d : d.split(" "), l(d, function(a) {
                        a && a.length && (j[a] = !0)
                    }), e = n(e) ? e : e.split(" "), l(e, function(a) {
                        a && a.length && (j[a] = !1)
                    }), m ? (g && k.options && (k.options = b.extend(k.options || {}, g)), k.promise) : (c.data(i, k = {
                        classes: j,
                        options: g
                    }), k.promise = C(function(b) {
                        var d = c.parent(),
                            e = f(c),
                            g = e.parentNode;
                        if (!g || g.$$NG_REMOVED || e.$$NG_REMOVED) return void b();
                        var h = c.data(i);
                        c.removeData(i);
                        var j = c.data(r) || {},
                            k = E(c, h, j.active);
                        return k ? H("setClass", k, c, d, null, function() {
                            k[0] && a.$$addClassImmediately(c, k[0]), k[1] && a.$$removeClassImmediately(c, k[1])
                        }, h.options, b) : b()
                    }))
                },
                cancel: function(a) {
                    a.$$cancelFn()
                },
                enabled: function(a, b) {
                    switch (arguments.length) {
                        case 2:
                            if (a) J(b);
                            else {
                                var c = b.data(r) || {};
                                c.disabled = !0, b.data(r, c)
                            }
                            break;
                        case 1:
                            u.disabled = !a;
                            break;
                        default:
                            a = !u.disabled
                    }
                    return !!a
                }
            }
        }]), e.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function(d, e, g, h) {
            function i() {
                J || (J = h(function() {
                    W = [], J = null, U = {}
                }))
            }

            function m(a, b) {
                J && J(), W.push(b), J = h(function() {
                    l(W, function(a) {
                        a()
                    }), W = [], J = null, U = {}
                })
            }

            function p(a, c) {
                var d = f(a);
                a = b.element(d), Z.push(a);
                var e = Date.now() + c;
                Y >= e || (g.cancel(X), Y = e, X = g(function() {
                    r(Z), Z = []
                }, c, !1))
            }

            function r(a) {
                l(a, function(a) {
                    var b = a.data(Q);
                    b && l(b.closeAnimationFns, function(a) {
                        a()
                    })
                })
            }

            function s(a, b) {
                var c = b ? U[b] : null;
                if (!c) {
                    var e = 0,
                        f = 0,
                        g = 0,
                        h = 0;
                    l(a, function(a) {
                        if (a.nodeType == q) {
                            var b = d.getComputedStyle(a) || {},
                                c = b[E + K];
                            e = Math.max(t(c), e);
                            var i = b[E + M];
                            f = Math.max(t(i), f); {
                                b[G + M]
                            }
                            h = Math.max(t(b[G + M]), h);
                            var j = t(b[G + K]);
                            j > 0 && (j *= parseInt(b[G + N], 10) || 1), g = Math.max(j, g)
                        }
                    }), c = {
                        total: 0,
                        transitionDelay: f,
                        transitionDuration: e,
                        animationDelay: h,
                        animationDuration: g
                    }, b && (U[b] = c)
                }
                return c
            }

            function t(a) {
                var b = 0,
                    c = o(a) ? a.split(/\s*,\s*/) : [];
                return l(c, function(a) {
                    b = Math.max(parseFloat(a) || 0, b)
                }), b
            }

            function u(a) {
                var b = a.parent(),
                    c = b.data(P);
                return c || (b.data(P, ++V), c = V), c + "-" + f(a).getAttribute("class")
            }

            function v(a, b, c, d) {
                var e = ["ng-enter", "ng-leave", "ng-move"].indexOf(c) >= 0,
                    g = u(b),
                    h = g + " " + c,
                    i = U[h] ? ++U[h].total : 0,
                    k = {};
                if (i > 0) {
                    var l = c + "-stagger",
                        m = g + " " + l,
                        n = !U[m];
                    n && j.addClass(b, l), k = s(b, m), n && j.removeClass(b, l)
                }
                j.addClass(b, c);
                var o = b.data(Q) || {},
                    p = s(b, h),
                    q = p.transitionDuration,
                    r = p.animationDuration;
                if (e && 0 === q && 0 === r) return j.removeClass(b, c), !1;
                var t = d || e && q > 0,
                    v = r > 0 && k.animationDelay > 0 && 0 === k.animationDuration,
                    w = o.closeAnimationFns || [];
                b.data(Q, {
                    stagger: k,
                    cacheKey: h,
                    running: o.running || 0,
                    itemIndex: i,
                    blockTransition: t,
                    closeAnimationFns: w
                });
                var z = f(b);
                return t && (x(z, !0), d && b.css(d)), v && y(z, !0), !0
            }

            function w(a, b, c, d, e) {
                function h() {
                    b.off(M, i), j.removeClass(b, n), j.removeClass(b, o), K && g.cancel(K), C(b, c);
                    var a = f(b);
                    for (var d in r) a.style.removeProperty(r[d])
                }

                function i(a) {
                    a.stopPropagation();
                    var b = a.originalEvent || a,
                        c = b.$manualTimeStamp || b.timeStamp || Date.now(),
                        e = parseFloat(b.elapsedTime.toFixed(R));
                    Math.max(c - L, 0) >= G && e >= D && d()
                }
                var k = f(b),
                    m = b.data(Q);
                if (-1 == k.getAttribute("class").indexOf(c) || !m) return void d();
                var n = "",
                    o = "";
                l(c.split(" "), function(a, b) {
                    var c = (b > 0 ? " " : "") + a;
                    n += c + "-active", o += c + "-pending"
                });
                var q = "",
                    r = [],
                    t = m.itemIndex,
                    u = m.stagger,
                    v = 0;
                if (t > 0) {
                    var w = 0;
                    u.transitionDelay > 0 && 0 === u.transitionDuration && (w = u.transitionDelay * t);
                    var z = 0;
                    u.animationDelay > 0 && 0 === u.animationDuration && (z = u.animationDelay * t, r.push(I + "animation-play-state")), v = Math.round(100 * Math.max(w, z)) / 100
                }
                v || (j.addClass(b, n), m.blockTransition && x(k, !1));
                var A = m.cacheKey + " " + n,
                    B = s(b, A),
                    D = Math.max(B.transitionDuration, B.animationDuration);
                if (0 === D) return j.removeClass(b, n), C(b, c), void d();
                !v && e && Object.keys(e).length > 0 && (B.transitionDuration || (b.css("transition", B.animationDuration + "s linear all"), r.push("transition")), b.css(e));
                var E = Math.max(B.transitionDelay, B.animationDelay),
                    G = E * T;
                if (r.length > 0) {
                    var J = k.getAttribute("style") || "";
                    ";" !== J.charAt(J.length - 1) && (J += ";"), k.setAttribute("style", J + " " + q)
                }
                var K, L = Date.now(),
                    M = H + " " + F,
                    N = (E + D) * S,
                    O = (v + N) * T;
                return v > 0 && (j.addClass(b, o), K = g(function() {
                    K = null, B.transitionDuration > 0 && x(k, !1), B.animationDuration > 0 && y(k, !1), j.addClass(b, n), j.removeClass(b, o), e && (0 === B.transitionDuration && b.css("transition", B.animationDuration + "s linear all"), b.css(e), r.push("transition"))
                }, v * T, !1)), b.on(M, i), m.closeAnimationFns.push(function() {
                    h(), d()
                }), m.running++, p(b, O), h
            }

            function x(a, b) {
                a.style[E + L] = b ? "none" : ""
            }

            function y(a, b) {
                a.style[G + O] = b ? "paused" : ""
            }

            function z(a, b, c, d) {
                return v(a, b, c, d) ? function(a) {
                    a && C(b, c)
                } : void 0
            }

            function A(a, b, c, d, e) {
                return b.data(Q) ? w(a, b, c, d, e) : (C(b, c), void d())
            }

            function B(a, b, c, d, e) {
                var f = z(a, b, c, e.from);
                if (!f) return i(), void d();
                var g = f;
                return m(b, function() {
                        g = A(a, b, c, d, e.to)
                    }),
                    function(a) {
                        (g || k)(a)
                    }
            }

            function C(a, b) {
                j.removeClass(a, b);
                var c = a.data(Q);
                c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(Q))
            }

            function D(a, b) {
                var c = "";
                return a = n(a) ? a : a.split(/\s+/), l(a, function(a, d) {
                    a && a.length > 0 && (c += (d > 0 ? " " : "") + a + b)
                }), c
            }
            var E, F, G, H, I = "";
            a.ontransitionend === c && a.onwebkittransitionend !== c ? (I = "-webkit-", E = "WebkitTransition", F = "webkitTransitionEnd transitionend") : (E = "transition", F = "transitionend"), a.onanimationend === c && a.onwebkitanimationend !== c ? (I = "-webkit-", G = "WebkitAnimation", H = "webkitAnimationEnd animationend") : (G = "animation", H = "animationend");
            var J, K = "Duration",
                L = "Property",
                M = "Delay",
                N = "IterationCount",
                O = "PlayState",
                P = "$$ngAnimateKey",
                Q = "$$ngAnimateCSS3Data",
                R = 3,
                S = 1.5,
                T = 1e3,
                U = {},
                V = 0,
                W = [],
                X = null,
                Y = 0,
                Z = [];
            return {
                animate: function(a, b, c, d, e, f) {
                    return f = f || {}, f.from = c, f.to = d, B("animate", a, b, e, f)
                },
                enter: function(a, b, c) {
                    return c = c || {}, B("enter", a, "ng-enter", b, c)
                },
                leave: function(a, b, c) {
                    return c = c || {}, B("leave", a, "ng-leave", b, c)
                },
                move: function(a, b, c) {
                    return c = c || {}, B("move", a, "ng-move", b, c)
                },
                beforeSetClass: function(a, b, c, d, e) {
                    e = e || {};
                    var f = D(c, "-remove") + " " + D(b, "-add"),
                        g = z("setClass", a, f, e.from);
                    return g ? (m(a, d), g) : (i(), void d())
                },
                beforeAddClass: function(a, b, c, d) {
                    d = d || {};
                    var e = z("addClass", a, D(b, "-add"), d.from);
                    return e ? (m(a, c), e) : (i(), void c())
                },
                beforeRemoveClass: function(a, b, c, d) {
                    d = d || {};
                    var e = z("removeClass", a, D(b, "-remove"), d.from);
                    return e ? (m(a, c), e) : (i(), void c())
                },
                setClass: function(a, b, c, d, e) {
                    e = e || {}, c = D(c, "-remove"), b = D(b, "-add");
                    var f = c + " " + b;
                    return A("setClass", a, f, d, e.to)
                },
                addClass: function(a, b, c, d) {
                    return d = d || {}, A("addClass", a, D(b, "-add"), c, d.to)
                },
                removeClass: function(a, b, c, d) {
                    return d = d || {}, A("removeClass", a, D(b, "-remove"), c, d.to)
                }
            }
        }])
    }])
}(window, window.angular),
function(a, b, c) {
    "use strict";

    function d() {
        function a(a, b, d) {
            return function(e, f, g) {
                var h = g.$normalize(b);
                c[h] && !g[h] && e.$watch(g[a], function(a) {
                    d && (a = !a), f.attr(b, a)
                })
            }
        }
        var c = {
            ariaHidden: !0,
            ariaChecked: !0,
            ariaDisabled: !0,
            ariaRequired: !0,
            ariaInvalid: !0,
            ariaMultiline: !0,
            ariaValue: !0,
            tabindex: !0,
            bindKeypress: !0
        };
        this.config = function(a) {
            c = b.extend(c, a)
        }, this.$get = function() {
            return {
                config: function(a) {
                    return c[a]
                },
                $$watchExpr: a
            }
        }
    }
    var e = b.module("ngAria", ["ng"]).provider("$aria", d);
    e.directive("ngShow", ["$aria", function(a) {
        return a.$$watchExpr("ngShow", "aria-hidden", !0)
    }]).directive("ngHide", ["$aria", function(a) {
        return a.$$watchExpr("ngHide", "aria-hidden", !1)
    }]).directive("ngModel", ["$aria", function(a) {
        function b(b, c, d) {
            return a.config(c) && !d.attr(b)
        }

        function c(a, b) {
            return !b.attr("role") && b.attr("type") === a && "INPUT" !== b[0].nodeName
        }

        function d(a, b) {
            var c = a.type,
                d = a.role;
            return "checkbox" === (c || d) || "menuitemcheckbox" === d ? "checkbox" : "radio" === (c || d) || "menuitemradio" === d ? "radio" : "range" === c || "progressbar" === d || "slider" === d ? "range" : "textbox" === (c || d) || "TEXTAREA" === b[0].nodeName ? "multiline" : ""
        }
        return {
            restrict: "A",
            require: "?ngModel",
            priority: 200,
            link: function(e, f, g, h) {
                function i() {
                    return h.$modelValue
                }

                function j() {
                    return m ? (m = !1, function(a) {
                        var b = g.value == h.$viewValue;
                        f.attr("aria-checked", b), f.attr("tabindex", 0 - !b)
                    }) : function(a) {
                        f.attr("aria-checked", g.value == h.$viewValue)
                    }
                }

                function k(a) {
                    f.attr("aria-checked", !h.$isEmpty(h.$viewValue))
                }
                var l = d(g, f),
                    m = b("tabindex", "tabindex", f);
                switch (l) {
                    case "radio":
                    case "checkbox":
                        c(l, f) && f.attr("role", l), b("aria-checked", "ariaChecked", f) && e.$watch(i, "radio" === l ? j() : k);
                        break;
                    case "range":
                        c(l, f) && f.attr("role", "slider"), a.config("ariaValue") && (g.min && !f.attr("aria-valuemin") && f.attr("aria-valuemin", g.min), g.max && !f.attr("aria-valuemax") && f.attr("aria-valuemax", g.max), f.attr("aria-valuenow") || e.$watch(i, function(a) {
                            f.attr("aria-valuenow", a)
                        }));
                        break;
                    case "multiline":
                        b("aria-multiline", "ariaMultiline", f) && f.attr("aria-multiline", !0)
                }
                m && f.attr("tabindex", 0), h.$validators.required && b("aria-required", "ariaRequired", f) && e.$watch(function() {
                    return h.$error.required
                }, function(a) {
                    f.attr("aria-required", !!a)
                }), b("aria-invalid", "ariaInvalid", f) && e.$watch(function() {
                    return h.$invalid
                }, function(a) {
                    f.attr("aria-invalid", !!a)
                })
            }
        }
    }]).directive("ngDisabled", ["$aria", function(a) {
        return a.$$watchExpr("ngDisabled", "aria-disabled")
    }]).directive("ngMessages", function() {
        return {
            restrict: "A",
            require: "?ngMessages",
            link: function(a, b, c, d) {
                b.attr("aria-live") || b.attr("aria-live", "assertive")
            }
        }
    }).directive("ngClick", ["$aria", "$parse", function(a, b) {
        return {
            restrict: "A",
            compile: function(c, d) {
                var e = b(d.ngClick, null, !0);
                return function(b, c, d) {
                    function f(a, b) {
                        return -1 !== b.indexOf(a[0].nodeName) ? !0 : void 0
                    }
                    var g = ["BUTTON", "A", "INPUT", "TEXTAREA"];
                    c.attr("role") || f(c, g) || c.attr("role", "button"), a.config("tabindex") && !c.attr("tabindex") && c.attr("tabindex", 0), !a.config("bindKeypress") || d.ngKeypress || f(c, g) || c.on("keypress", function(a) {
                        function c() {
                            e(b, {
                                $event: a
                            })
                        }(32 === a.keyCode || 13 === a.keyCode) && b.$apply(c)
                    })
                }
            }
        }
    }]).directive("ngDblclick", ["$aria", function(a) {
        return function(b, c, d) {
            a.config("tabindex") && !c.attr("tabindex") && c.attr("tabindex", 0)
        }
    }])
}(window, window.angular),
function(a, b, c) {
    "use strict";
    b.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function(a, d) {
        function e() {
            var a, e, f, i;
            for (a in h) k(g[a]) && d.cookies(a, c);
            for (a in g) e = g[a], b.isString(e) || (e = "" + e, g[a] = e), e !== h[a] && (d.cookies(a, e), i = !0);
            if (i) {
                i = !1, f = d.cookies();
                for (a in g) g[a] !== f[a] && (k(f[a]) ? delete g[a] : g[a] = f[a], i = !0)
            }
        }
        var f, g = {},
            h = {},
            i = !1,
            j = b.copy,
            k = b.isUndefined;
        return d.addPollFn(function() {
            var b = d.cookies();
            f != b && (f = b, j(b, h), j(b, g), i && a.$apply())
        })(), i = !0, a.$watch(e), g
    }]).factory("$cookieStore", ["$cookies", function(a) {
        return {
            get: function(c) {
                var d = a[c];
                return d ? b.fromJson(d) : d
            },
            put: function(c, d) {
                a[c] = b.toJson(d)
            },
            remove: function(b) {
                delete a[b]
            }
        }
    }])
}(window, window.angular),
function(a, b, c) {
    "use strict";
    b.module("ngMessages", []).directive("ngMessages", ["$compile", "$animate", "$templateRequest", function(a, c, d) {
        var e = "ng-active",
            f = "ng-inactive";
        return {
            restrict: "AE",
            controller: function() {
                this.$renderNgMessageClasses = b.noop;
                var a = [];
                this.registerMessage = function(b, c) {
                    for (var d = 0; d < a.length; d++)
                        if (a[d].type == c.type) {
                            if (b != d) {
                                var e = a[b];
                                a[b] = a[d], b < a.length ? a[d] = e : a.splice(0, d)
                            }
                            return
                        }
                    a.splice(b, 0, c)
                }, this.renderMessages = function(c, d) {
                    function e(a) {
                        return null !== a && a !== !1 && a
                    }
                    c = c || {};
                    var f;
                    b.forEach(a, function(a) {
                        f && !d || !e(c[a.type]) ? a.detach() : (a.attach(), f = !0)
                    }), this.renderElementClasses(f)
                }
            },
            require: "ngMessages",
            link: function(g, h, i, j) {
                j.renderElementClasses = function(a) {
                    a ? c.setClass(h, e, f) : c.setClass(h, f, e)
                };
                var k, l = b.isString(i.ngMessagesMultiple) || b.isString(i.multiple),
                    m = i.ngMessages || i["for"];
                g.$watchCollection(m, function(a) {
                    k = a, j.renderMessages(a, l)
                });
                var n = i.ngMessagesInclude || i.include;
                n && d(n).then(function(c) {
                    var d, e = b.element("<div/>").html(c);
                    b.forEach(e.children(), function(c) {
                        c = b.element(c), d ? d.after(c) : h.prepend(c), d = c, a(c)(g)
                    }), j.renderMessages(k, l)
                })
            }
        }
    }]).directive("ngMessage", ["$animate", function(a) {
        var b = 8;
        return {
            require: "^ngMessages",
            transclude: "element",
            terminal: !0,
            restrict: "AE",
            link: function(c, d, e, f, g) {
                for (var h, i, j = d[0], k = j.parentNode, l = 0, m = 0; l < k.childNodes.length; l++) {
                    var n = k.childNodes[l];
                    if (n.nodeType == b && n.nodeValue.indexOf("ngMessage") >= 0) {
                        if (n === j) {
                            h = m;
                            break
                        }
                        m++
                    }
                }
                f.registerMessage(h, {
                    type: e.ngMessage || e.when,
                    attach: function() {
                        i || g(c, function(b) {
                            a.enter(b, null, d), i = b
                        })
                    },
                    detach: function(b) {
                        i && (a.leave(i), i = null)
                    }
                })
            }
        }
    }])
}(window, window.angular),
function(a, b, c) {
    "use strict";

    function d(a) {
        return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
    }

    function e(a, b) {
        if (!d(b)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
        for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
            var i = e[f];
            a = null !== a ? a[i] : c
        }
        return a
    }

    function f(a, c) {
        c = c || {}, b.forEach(c, function(a, b) {
            delete c[b]
        });
        for (var d in a) !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
        return c
    }
    var g = b.$$minErr("$resource"),
        h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    b.module("ngResource", ["ng"]).provider("$resource", function() {
        var a = this;
        this.defaults = {
            stripTrailingSlashes: !0,
            actions: {
                get: {
                    method: "GET"
                },
                save: {
                    method: "POST"
                },
                query: {
                    method: "GET",
                    isArray: !0
                },
                remove: {
                    method: "DELETE"
                },
                "delete": {
                    method: "DELETE"
                }
            }
        }, this.$get = ["$http", "$q", function(d, h) {
            function i(a) {
                return j(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
            }

            function j(a, b) {
                return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
            }

            function k(b, c) {
                this.template = b, this.defaults = o({}, a.defaults, c), this.urlParams = {}
            }

            function l(i, j, r, s) {
                function t(a, b) {
                    var c = {};
                    return b = o({}, j, b), n(b, function(b, d) {
                        q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
                    }), c
                }

                function u(a) {
                    return a.resource
                }

                function v(a) {
                    f(a || {}, this)
                }
                var w = new k(i, s);
                return r = o({}, a.defaults.actions, r), v.prototype.toJSON = function() {
                    var a = o({}, this);
                    return delete a.$promise, delete a.$resolved, a
                }, n(r, function(a, e) {
                    var i = /^(POST|PUT|PATCH)$/i.test(a.method);
                    v[e] = function(j, k, l, r) {
                        var s, x, y, z = {};
                        switch (arguments.length) {
                            case 4:
                                y = r, x = l;
                            case 3:
                            case 2:
                                if (!q(k)) {
                                    z = j, s = k, x = l;
                                    break
                                }
                                if (q(j)) {
                                    x = j, y = k;
                                    break
                                }
                                x = k, y = l;
                            case 1:
                                q(j) ? x = j : i ? s = j : z = j;
                                break;
                            case 0:
                                break;
                            default:
                                throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                        }
                        var A = this instanceof v,
                            B = A ? s : a.isArray ? [] : new v(s),
                            C = {},
                            D = a.interceptor && a.interceptor.response || u,
                            E = a.interceptor && a.interceptor.responseError || c;
                        n(a, function(a, b) {
                            "params" != b && "isArray" != b && "interceptor" != b && (C[b] = p(a))
                        }), i && (C.data = s), w.setUrlParams(C, o({}, t(s, a.params || {}), z), a.url);
                        var F = d(C).then(function(c) {
                            var d = c.data,
                                h = B.$promise;
                            if (d) {
                                if (b.isArray(d) !== !!a.isArray) throw g("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2}", e, a.isArray ? "array" : "object", b.isArray(d) ? "array" : "object");
                                a.isArray ? (B.length = 0, n(d, function(a) {
                                    B.push("object" == typeof a ? new v(a) : a)
                                })) : (f(d, B), B.$promise = h)
                            }
                            return B.$resolved = !0, c.resource = B, c
                        }, function(a) {
                            return B.$resolved = !0, (y || m)(a), h.reject(a)
                        });
                        return F = F.then(function(a) {
                            var b = D(a);
                            return (x || m)(b, a.headers), b
                        }, E), A ? F : (B.$promise = F, B.$resolved = !1, B)
                    }, v.prototype["$" + e] = function(a, b, c) {
                        q(a) && (c = b, b = a, a = {});
                        var d = v[e].call(this, a, this, b, c);
                        return d.$promise || d
                    }
                }), v.bind = function(a) {
                    return l(i, o({}, j, a), r)
                }, v
            }
            var m = b.noop,
                n = b.forEach,
                o = b.extend,
                p = b.copy,
                q = b.isFunction;
            return k.prototype = {
                setUrlParams: function(a, c, d) {
                    var e, f, h = this,
                        j = d || h.template,
                        k = h.urlParams = {};
                    n(j.split(/\W/), function(a) {
                        if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
                        !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0)
                    }), j = j.replace(/\\:/g, ":"), c = c || {}, n(h.urlParams, function(a, d) {
                        e = c.hasOwnProperty(d) ? c[d] : h.defaults[d], b.isDefined(e) && null !== e ? (f = i(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), function(a, b) {
                            return f + b
                        })) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) {
                            return "/" == c.charAt(0) ? c : b + c
                        })
                    }), h.defaults.stripTrailingSlashes && (j = j.replace(/\/+$/, "") || "/"), j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), n(c, function(b, c) {
                        h.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
                    })
                }
            }, l
        }]
    })
}(window, window.angular),
function(a, b, c) {
    "use strict";

    function d() {
        function a(a, c) {
            return b.extend(Object.create(a), c)
        }

        function c(a, b) {
            var c = b.caseInsensitiveMatch,
                d = {
                    originalPath: a,
                    regexp: a
                },
                e = d.keys = [];
            return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, b, c, d) {
                var f = "?" === d ? d : null,
                    g = "*" === d ? d : null;
                return e.push({
                    name: c,
                    optional: !!f
                }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
            }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
        }
        var d = {};
        this.when = function(a, e) {
            var f = b.copy(e);
            if (b.isUndefined(f.reloadOnSearch) && (f.reloadOnSearch = !0), b.isUndefined(f.caseInsensitiveMatch) && (f.caseInsensitiveMatch = this.caseInsensitiveMatch), d[a] = b.extend(f, a && c(a, f)), a) {
                var g = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                d[g] = b.extend({
                    redirectTo: a
                }, c(g, f))
            }
            return this
        }, this.caseInsensitiveMatch = !1, this.otherwise = function(a) {
            return "string" == typeof a && (a = {
                redirectTo: a
            }), this.when(null, a), this
        }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(c, e, f, g, h, j, k) {
            function l(a, b) {
                var c = b.keys,
                    d = {};
                if (!b.regexp) return null;
                var e = b.regexp.exec(a);
                if (!e) return null;
                for (var f = 1, g = e.length; g > f; ++f) {
                    var h = c[f - 1],
                        i = e[f];
                    h && i && (d[h.name] = i)
                }
                return d
            }

            function m(a) {
                var d = t.current;
                q = o(), r = q && d && q.$$route === d.$$route && b.equals(q.pathParams, d.pathParams) && !q.reloadOnSearch && !s, r || !d && !q || c.$broadcast("$routeChangeStart", q, d).defaultPrevented && a && a.preventDefault()
            }

            function n() {
                var a = t.current,
                    d = q;
                r ? (a.params = d.params, b.copy(a.params, f), c.$broadcast("$routeUpdate", a)) : (d || a) && (s = !1, t.current = d, d && d.redirectTo && (b.isString(d.redirectTo) ? e.path(p(d.redirectTo, d.params)).search(d.params).replace() : e.url(d.redirectTo(d.pathParams, e.path(), e.search())).replace()), g.when(d).then(function() {
                    if (d) {
                        var a, c, e = b.extend({}, d.resolve);
                        return b.forEach(e, function(a, c) {
                            e[c] = b.isString(a) ? h.get(a) : h.invoke(a, null, null, c)
                        }), b.isDefined(a = d.template) ? b.isFunction(a) && (a = a(d.params)) : b.isDefined(c = d.templateUrl) && (b.isFunction(c) && (c = c(d.params)), c = k.getTrustedResourceUrl(c), b.isDefined(c) && (d.loadedTemplateUrl = c, a = j(c))), b.isDefined(a) && (e.$template = a), g.all(e)
                    }
                }).then(function(e) {
                    d == t.current && (d && (d.locals = e, b.copy(d.params, f)), c.$broadcast("$routeChangeSuccess", d, a))
                }, function(b) {
                    d == t.current && c.$broadcast("$routeChangeError", d, a, b)
                }))
            }

            function o() {
                var c, f;
                return b.forEach(d, function(d, g) {
                    !f && (c = l(e.path(), d)) && (f = a(d, {
                        params: b.extend({}, e.search(), c),
                        pathParams: c
                    }), f.$$route = d)
                }), f || d[null] && a(d[null], {
                    params: {},
                    pathParams: {}
                })
            }

            function p(a, c) {
                var d = [];
                return b.forEach((a || "").split(":"), function(a, b) {
                    if (0 === b) d.push(a);
                    else {
                        var e = a.match(/(\w+)(?:[?*])?(.*)/),
                            f = e[1];
                        d.push(c[f]), d.push(e[2] || ""), delete c[f]
                    }
                }), d.join("")
            }
            var q, r, s = !1,
                t = {
                    routes: d,
                    reload: function() {
                        s = !0, c.$evalAsync(function() {
                            m(), n()
                        })
                    },
                    updateParams: function(a) {
                        if (!this.current || !this.current.$$route) throw i("norout", "Tried updating route when with no current route");
                        a = b.extend({}, this.current.params, a), e.path(p(this.current.$$route.originalPath, a)), e.search(a)
                    }
                };
            return c.$on("$locationChangeStart", m), c.$on("$locationChangeSuccess", n), t
        }]
    }

    function e() {
        this.$get = function() {
            return {}
        }
    }

    function f(a, c, d) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function(e, f, g, h, i) {
                function j() {
                    n && (d.cancel(n), n = null), l && (l.$destroy(), l = null), m && (n = d.leave(m), n.then(function() {
                        n = null
                    }), m = null)
                }

                function k() {
                    var g = a.current && a.current.locals,
                        h = g && g.$template;
                    if (b.isDefined(h)) {
                        var k = e.$new(),
                            n = a.current,
                            q = i(k, function(a) {
                                d.enter(a, null, m || f).then(function() {
                                    !b.isDefined(o) || o && !e.$eval(o) || c()
                                }), j()
                            });
                        m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p)
                    } else j()
                }
                var l, m, n, o = g.autoscroll,
                    p = g.onload || "";
                e.$on("$routeChangeSuccess", k), k()
            }
        }
    }

    function g(a, b, c) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(d, e) {
                var f = c.current,
                    g = f.locals;
                e.html(g.$template);
                var h = a(e.contents());
                if (f.controller) {
                    g.$scope = d;
                    var i = b(f.controller, g);
                    f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i)
                }
                h(d)
            }
        }
    }
    var h = b.module("ngRoute", ["ng"]).provider("$route", d),
        i = b.$$minErr("ngRoute");
    h.provider("$routeParams", e), h.directive("ngView", f), h.directive("ngView", g), f.$inject = ["$route", "$anchorScroll", "$animate"], g.$inject = ["$compile", "$controller", "$route"]
}(window, window.angular),
function(a, b, c) {
    "use strict";

    function d() {
        this.$get = ["$$sanitizeUri", function(a) {
            return function(b) {
                var c = [];
                return g(b, j(c, function(b, c) {
                    return !/^unsafe/.test(a(b, c))
                })), c.join("")
            }
        }]
    }

    function e(a) {
        var c = [],
            d = j(c, b.noop);
        return d.chars(a), c.join("")
    }

    function f(a) {
        var b, c = {},
            d = a.split(",");
        for (b = 0; b < d.length; b++) c[d[b]] = !0;
        return c
    }

    function g(a, c) {
        function d(a, d, f, g) {
            if (d = b.lowercase(d), z[d])
                for (; t.last() && A[t.last()];) e("", t.last());
            y[d] && t.last() == d && e("", d), g = v[d] || !!g, g || t.push(d);
            var i = {};
            f.replace(n, function(a, b, c, d, e) {
                var f = c || d || e || "";
                i[b] = h(f)
            }), c.start && c.start(d, i, g)
        }

        function e(a, d) {
            var e, f = 0;
            if (d = b.lowercase(d))
                for (f = t.length - 1; f >= 0 && t[f] != d; f--);
            if (f >= 0) {
                for (e = t.length - 1; e >= f; e--) c.end && c.end(t[e]);
                t.length = f
            }
        }
        "string" != typeof a && (a = null === a || "undefined" == typeof a ? "" : "" + a);
        var f, g, i, j, t = [],
            u = a;
        for (t.last = function() {
                return t[t.length - 1]
            }; a;) {
            if (j = "", g = !0, t.last() && C[t.last()] ? (a = a.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + t.last() + "[^>]*>", "i"), function(a, b) {
                    return b = b.replace(q, "$1").replace(s, "$1"), c.chars && c.chars(h(b)), ""
                }), e("", t.last())) : (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), g = !1)) : r.test(a) ? (i = a.match(r), i && (a = a.replace(i[0], ""), g = !1)) : p.test(a) ? (i = a.match(m), i && (a = a.substring(i[0].length), i[0].replace(m, e), g = !1)) : o.test(a) && (i = a.match(l), i ? (i[4] && (a = a.substring(i[0].length), i[0].replace(l, d)), g = !1) : (j += "<", a = a.substring(1))), g && (f = a.indexOf("<"), j += 0 > f ? a : a.substring(0, f), a = 0 > f ? "" : a.substring(f), c.chars && c.chars(h(j)))), a == u) throw k("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
            u = a
        }
        e()
    }

    function h(a) {
        return a ? (I.innerHTML = a.replace(/</g, "&lt;"), I.textContent) : ""
    }

    function i(a) {
        return a.replace(/&/g, "&amp;").replace(t, function(a) {
            var b = a.charCodeAt(0),
                c = a.charCodeAt(1);
            return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";"
        }).replace(u, function(a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function j(a, c) {
        var d = !1,
            e = b.bind(a, a.push);
        return {
            start: function(a, f, g) {
                a = b.lowercase(a), !d && C[a] && (d = a), d || D[a] !== !0 || (e("<"), e(a), b.forEach(f, function(d, f) {
                    var g = b.lowercase(f),
                        h = "img" === a && "src" === g || "background" === g;
                    H[g] !== !0 || E[g] === !0 && !c(d, h) || (e(" "), e(f), e('="'), e(i(d)), e('"'))
                }), e(g ? "/>" : ">"))
            },
            end: function(a) {
                a = b.lowercase(a), d || D[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
            },
            chars: function(a) {
                d || e(i(a))
            }
        }
    }
    var k = b.$$minErr("$sanitize"),
        l = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
        m = /^<\/\s*([\w:-]+)[^>]*>/,
        n = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
        o = /^</,
        p = /^<\//,
        q = /<!--(.*?)-->/g,
        r = /<!DOCTYPE([^>]*?)>/i,
        s = /<!\[CDATA\[(.*?)]]>/g,
        t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        u = /([^\#-~| |!])/g,
        v = f("area,br,col,hr,img,wbr"),
        w = f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        x = f("rp,rt"),
        y = b.extend({}, x, w),
        z = b.extend({}, w, f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
        A = b.extend({}, x, f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
        B = f("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),
        C = f("script,style"),
        D = b.extend({}, v, z, A, y, B),
        E = f("background,cite,href,longdesc,src,usemap,xlink:href"),
        F = f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),
        G = f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),
        H = b.extend({}, E, G, F),
        I = document.createElement("pre");
    b.module("ngSanitize", []).provider("$sanitize", d), b.module("ngSanitize").filter("linky", ["$sanitize", function(a) {
        var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,
            d = /^mailto:/;
        return function(f, g) {
            function h(a) {
                a && n.push(e(a))
            }

            function i(a, c) {
                n.push("<a "), b.isDefined(g) && n.push('target="', g, '" '), n.push('href="', a.replace(/"/g, "&quot;"), '">'), h(c), n.push("</a>")
            }
            if (!f) return f;
            for (var j, k, l, m = f, n = []; j = m.match(c);) k = j[0], j[2] || j[4] || (k = (j[3] ? "http://" : "mailto:") + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(d, "")), m = m.substring(l + j[0].length);
            return h(m), a(n.join(""))
        }
    }])
}(window, window.angular),
function(a, b, c) {
    "use strict";

    function d(a, c, d) {
        e.directive(a, ["$parse", "$swipe", function(e, f) {
            var g = 75,
                h = .3,
                i = 30;
            return function(j, k, l) {
                function m(a) {
                    if (!n) return !1;
                    var b = Math.abs(a.y - n.y),
                        d = (a.x - n.x) * c;
                    return o && g > b && d > 0 && d > i && h > b / d
                }
                var n, o, p = e(l[a]),
                    q = ["touch"];
                b.isDefined(l.ngSwipeDisableMouse) || q.push("mouse"), f.bind(k, {
                    start: function(a, b) {
                        n = a, o = !0
                    },
                    cancel: function(a) {
                        o = !1
                    },
                    end: function(a, b) {
                        m(a) && j.$apply(function() {
                            k.triggerHandler(d), p(j, {
                                $event: b
                            })
                        })
                    }
                }, q)
            }
        }])
    }
    var e = b.module("ngTouch", []);
    e.factory("$swipe", [function() {
        function a(a) {
            var b = a.touches && a.touches.length ? a.touches : [a],
                c = a.changedTouches && a.changedTouches[0] || a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches[0] || b[0].originalEvent || b[0];
            return {
                x: c.clientX,
                y: c.clientY
            }
        }

        function c(a, c) {
            var d = [];
            return b.forEach(a, function(a) {
                var b = e[a][c];
                b && d.push(b)
            }), d.join(" ")
        }
        var d = 10,
            e = {
                mouse: {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                },
                touch: {
                    start: "touchstart",
                    move: "touchmove",
                    end: "touchend",
                    cancel: "touchcancel"
                }
            };
        return {
            bind: function(b, e, f) {
                var g, h, i, j, k = !1;
                f = f || ["mouse", "touch"], b.on(c(f, "start"), function(b) {
                    i = a(b), k = !0, g = 0, h = 0, j = i, e.start && e.start(i, b)
                });
                var l = c(f, "cancel");
                l && b.on(l, function(a) {
                    k = !1, e.cancel && e.cancel(a)
                }), b.on(c(f, "move"), function(b) {
                    if (k && i) {
                        var c = a(b);
                        if (g += Math.abs(c.x - j.x), h += Math.abs(c.y - j.y), j = c, !(d > g && d > h)) return h > g ? (k = !1, void(e.cancel && e.cancel(b))) : (b.preventDefault(), void(e.move && e.move(c, b)))
                    }
                }), b.on(c(f, "end"), function(b) {
                    k && (k = !1, e.end && e.end(a(b), b))
                })
            }
        }
    }]), e.config(["$provide", function(a) {
        a.decorator("ngClickDirective", ["$delegate", function(a) {
            return a.shift(), a
        }])
    }]), e.directive("ngClick", ["$parse", "$timeout", "$rootElement", function(a, c, d) {
        function e(a, b, c, d) {
            return Math.abs(a - c) < p && Math.abs(b - d) < p
        }

        function f(a, b, c) {
            for (var d = 0; d < a.length; d += 2)
                if (e(a[d], a[d + 1], b, c)) return a.splice(d, d + 2), !0;
            return !1
        }

        function g(a) {
            if (!(Date.now() - j > o)) {
                var b = a.touches && a.touches.length ? a.touches : [a],
                    c = b[0].clientX,
                    d = b[0].clientY;
                1 > c && 1 > d || l && l[0] === c && l[1] === d || (l && (l = null), "label" === a.target.tagName.toLowerCase() && (l = [c, d]), f(k, c, d) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur()))
            }
        }

        function h(a) {
            var b = a.touches && a.touches.length ? a.touches : [a],
                d = b[0].clientX,
                e = b[0].clientY;
            k.push(d, e), c(function() {
                for (var a = 0; a < k.length; a += 2)
                    if (k[a] == d && k[a + 1] == e) return void k.splice(a, a + 2)
            }, o, !1)
        }

        function i(a, b) {
            k || (d[0].addEventListener("click", g, !0), d[0].addEventListener("touchstart", h, !0), k = []), j = Date.now(), f(k, a, b)
        }
        var j, k, l, m = 750,
            n = 12,
            o = 2500,
            p = 25,
            q = "ng-click-active";
        return function(c, d, e) {
            function f() {
                o = !1, d.removeClass(q);

            }
            var g, h, j, k, l = a(e.ngClick),
                o = !1;
            d.on("touchstart", function(a) {
                o = !0, g = a.target ? a.target : a.srcElement, 3 == g.nodeType && (g = g.parentNode), d.addClass(q), h = Date.now();
                var b = a.touches && a.touches.length ? a.touches : [a],
                    c = b[0].originalEvent || b[0];
                j = c.clientX, k = c.clientY
            }), d.on("touchmove", function(a) {
                f()
            }), d.on("touchcancel", function(a) {
                f()
            }), d.on("touchend", function(a) {
                var c = Date.now() - h,
                    l = a.changedTouches && a.changedTouches.length ? a.changedTouches : a.touches && a.touches.length ? a.touches : [a],
                    p = l[0].originalEvent || l[0],
                    q = p.clientX,
                    r = p.clientY,
                    s = Math.sqrt(Math.pow(q - j, 2) + Math.pow(r - k, 2));
                o && m > c && n > s && (i(q, r), g && g.blur(), b.isDefined(e.disabled) && e.disabled !== !1 || d.triggerHandler("click", [a])), f()
            }), d.onclick = function(a) {}, d.on("click", function(a, b) {
                c.$apply(function() {
                    l(c, {
                        $event: b || a
                    })
                })
            }), d.on("mousedown", function(a) {
                d.addClass(q)
            }), d.on("mousemove mouseup", function(a) {
                d.removeClass(q)
            })
        }
    }]), d("ngSwipeLeft", -1, "swipeleft"), d("ngSwipeRight", 1, "swiperight")
}(window, window.angular), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.transition", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-popup.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/tooltip/tooltip-template-popup.html", "template/popover/popover-template.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.collapse", []).directive("collapse", ["$animate", function(a) {
    return {
        link: function(b, c, d) {
            function e() {
                c.removeClass("collapse").addClass("collapsing"), a.addClass(c, "in", {
                    to: {
                        height: c[0].scrollHeight + "px"
                    }
                }).then(f)
            }

            function f() {
                c.removeClass("collapsing"), c.css({
                    height: "auto"
                })
            }

            function g() {
                c.css({
                    height: c[0].scrollHeight + "px"
                }).removeClass("collapse").addClass("collapsing"), a.removeClass(c, "in", {
                    to: {
                        height: "0"
                    }
                }).then(h)
            }

            function h() {
                c.css({
                    height: "0"
                }), c.removeClass("collapsing"), c.addClass("collapse")
            }
            b.$watch(d.collapse, function(a) {
                a ? g() : e()
            })
        }
    }
}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
    closeOthers: !0
}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(a, b, c) {
    this.groups = [], this.closeOthers = function(d) {
        var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
        e && angular.forEach(this.groups, function(a) {
            a !== d && (a.isOpen = !1)
        })
    }, this.addGroup = function(a) {
        var b = this;
        this.groups.push(a), a.$on("$destroy", function(c) {
            b.removeGroup(a)
        })
    }, this.removeGroup = function(a) {
        var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(b, 1)
    }
}]).directive("accordion", function() {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    }
}).directive("accordionGroup", function() {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/accordion/accordion-group.html",
        scope: {
            heading: "@",
            isOpen: "=?",
            isDisabled: "=?"
        },
        controller: function() {
            this.setHeading = function(a) {
                this.heading = a
            }
        },
        link: function(a, b, c, d) {
            d.addGroup(a), a.$watch("isOpen", function(b) {
                b && d.closeOthers(a)
            }), a.toggleOpen = function() {
                a.isDisabled || (a.isOpen = !a.isOpen)
            }
        }
    }
}).directive("accordionHeading", function() {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        link: function(a, b, c, d, e) {
            d.setHeading(e(a, angular.noop))
        }
    }
}).directive("accordionTransclude", function() {
    return {
        require: "^accordionGroup",
        link: function(a, b, c, d) {
            a.$watch(function() {
                return d[c.accordionTransclude]
            }, function(a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function(a, b) {
    a.closeable = "close" in b, this.close = a.close
}]).directive("alert", function() {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@",
            close: "&"
        }
    }
}).directive("dismissOnTimeout", ["$timeout", function(a) {
    return {
        require: "alert",
        link: function(b, c, d, e) {
            a(function() {
                e.close()
            }, parseInt(d.dismissOnTimeout, 10))
        }
    }
}]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
    return function(a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
            b.html(a || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", ["buttonConfig", function(a) {
    this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
}]).directive("btnRadio", function() {
    return {
        require: ["btnRadio", "ngModel"],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f.$render = function() {
                b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
            }, b.bind(e.toggleEvent, function() {
                var d = b.hasClass(e.activeClass);
                (!d || angular.isDefined(c.uncheckable)) && a.$apply(function() {
                    f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
                })
            })
        }
    }
}).directive("btnCheckbox", function() {
    return {
        require: ["btnCheckbox", "ngModel"],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0)
            }

            function f() {
                return g(c.btnCheckboxFalse, !1)
            }

            function g(b, c) {
                var d = a.$eval(b);
                return angular.isDefined(d) ? d : c
            }
            var h = d[0],
                i = d[1];
            i.$render = function() {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
            }, b.bind(h.toggleEvent, function() {
                a.$apply(function() {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", []).controller("CarouselController", ["$scope", "$interval", "$animate", function(a, b, c) {
    function d(a) {
        if (angular.isUndefined(k[a].index)) return k[a]; {
            var b;
            k.length
        }
        for (b = 0; b < k.length; ++b)
            if (k[b].index == a) return k[b]
    }

    function e() {
        f();
        var c = +a.interval;
        !isNaN(c) && c > 0 && (h = b(g, c))
    }

    function f() {
        h && (b.cancel(h), h = null)
    }

    function g() {
        var b = +a.interval;
        i && !isNaN(b) && b > 0 ? a.next() : a.pause()
    }
    var h, i, j = this,
        k = j.slides = a.slides = [],
        l = -1;
    j.currentSlide = null;
    var m = !1;
    j.select = a.select = function(b, d) {
        function f() {
            m || (angular.extend(b, {
                direction: d,
                active: !0
            }), angular.extend(j.currentSlide || {}, {
                direction: d,
                active: !1
            }), c.enabled() && !a.noTransition && b.$element && (a.$currentTransition = !0, b.$element.one("$animate:close", function() {
                a.$currentTransition = null
            })), j.currentSlide = b, l = g, e())
        }
        var g = j.indexOfSlide(b);
        void 0 === d && (d = g > j.getCurrentIndex() ? "next" : "prev"), b && b !== j.currentSlide && f()
    }, a.$on("$destroy", function() {
        m = !0
    }), j.getCurrentIndex = function() {
        return j.currentSlide && angular.isDefined(j.currentSlide.index) ? +j.currentSlide.index : l
    }, j.indexOfSlide = function(a) {
        return angular.isDefined(a.index) ? +a.index : k.indexOf(a)
    }, a.next = function() {
        var b = (j.getCurrentIndex() + 1) % k.length;
        return a.$currentTransition ? void 0 : j.select(d(b), "next")
    }, a.prev = function() {
        var b = j.getCurrentIndex() - 1 < 0 ? k.length - 1 : j.getCurrentIndex() - 1;
        return a.$currentTransition ? void 0 : j.select(d(b), "prev")
    }, a.isActive = function(a) {
        return j.currentSlide === a
    }, a.$watch("interval", e), a.$on("$destroy", f), a.play = function() {
        i || (i = !0, e())
    }, a.pause = function() {
        a.noPause || (i = !1, f())
    }, j.addSlide = function(b, c) {
        b.$element = c, k.push(b), 1 === k.length || b.active ? (j.select(k[k.length - 1]), 1 == k.length && a.play()) : b.active = !1
    }, j.removeSlide = function(a) {
        angular.isDefined(a.index) && k.sort(function(a, b) {
            return +a.index > +b.index
        });
        var b = k.indexOf(a);
        k.splice(b, 1), k.length > 0 && a.active ? j.select(b >= k.length ? k[b - 1] : k[b]) : l > b && l--
    }
}]).directive("carousel", [function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        controller: "CarouselController",
        require: "carousel",
        templateUrl: "template/carousel/carousel.html",
        scope: {
            interval: "=",
            noTransition: "=",
            noPause: "="
        }
    }
}]).directive("slide", function() {
    return {
        require: "^carousel",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/carousel/slide.html",
        scope: {
            active: "=?",
            index: "=?"
        },
        link: function(a, b, c, d) {
            d.addSlide(a, b), a.$on("$destroy", function() {
                d.removeSlide(a)
            }), a.$watch("active", function(b) {
                b && d.select(a)
            })
        }
    }
}).animation(".item", ["$animate", function(a) {
    return {
        beforeAddClass: function(b, c, d) {
            if ("active" == c && b.parent() && !b.parent().scope().noTransition) {
                var e = !1,
                    f = b.isolateScope().direction,
                    g = "next" == f ? "left" : "right";
                return b.addClass(f), a.addClass(b, g).then(function() {
                        e || b.removeClass(g + " " + f), d()
                    }),
                    function() {
                        e = !0
                    }
            }
            d()
        },
        beforeRemoveClass: function(b, c, d) {
            if ("active" == c && b.parent() && !b.parent().scope().noTransition) {
                var e = !1,
                    f = b.isolateScope().direction,
                    g = "next" == f ? "left" : "right";
                return a.addClass(b, g).then(function() {
                        e || b.removeClass(g), d()
                    }),
                    function() {
                        e = !0
                    }
            }
            d()
        }
    }
}]), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function(a, b) {
    function c(a) {
        var c = [],
            d = a.split("");
        return angular.forEach(f, function(b, e) {
            var f = a.indexOf(e);
            if (f > -1) {
                a = a.split(""), d[f] = "(" + b.regex + ")", a[f] = "$";
                for (var g = f + 1, h = f + e.length; h > g; g++) d[g] = "", a[g] = "$";
                a = a.join(""), c.push({
                    index: f,
                    apply: b.apply
                })
            }
        }), {
            regex: new RegExp("^" + d.join("") + "$"),
            map: b(c, "index")
        }
    }

    function d(a, b, c) {
        return 1 > c ? !1 : 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
    }
    var e = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    this.parsers = {};
    var f = {
        yyyy: {
            regex: "\\d{4}",
            apply: function(a) {
                this.year = +a
            }
        },
        yy: {
            regex: "\\d{2}",
            apply: function(a) {
                this.year = +a + 2e3
            }
        },
        y: {
            regex: "\\d{1,4}",
            apply: function(a) {
                this.year = +a
            }
        },
        MMMM: {
            regex: a.DATETIME_FORMATS.MONTH.join("|"),
            apply: function(b) {
                this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
            }
        },
        MMM: {
            regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
            apply: function(b) {
                this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
            }
        },
        MM: {
            regex: "0[1-9]|1[0-2]",
            apply: function(a) {
                this.month = a - 1
            }
        },
        M: {
            regex: "[1-9]|1[0-2]",
            apply: function(a) {
                this.month = a - 1
            }
        },
        dd: {
            regex: "[0-2][0-9]{1}|3[0-1]{1}",
            apply: function(a) {
                this.date = +a
            }
        },
        d: {
            regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
            apply: function(a) {
                this.date = +a
            }
        },
        EEEE: {
            regex: a.DATETIME_FORMATS.DAY.join("|")
        },
        EEE: {
            regex: a.DATETIME_FORMATS.SHORTDAY.join("|")
        },
        HH: {
            regex: "(?:0|1)[0-9]|2[0-3]",
            apply: function(a) {
                this.hours = +a
            }
        },
        H: {
            regex: "1?[0-9]|2[0-3]",
            apply: function(a) {
                this.hours = +a
            }
        },
        mm: {
            regex: "[0-5][0-9]",
            apply: function(a) {
                this.minutes = +a
            }
        },
        m: {
            regex: "[0-9]|[1-5][0-9]",
            apply: function(a) {
                this.minutes = +a
            }
        },
        sss: {
            regex: "[0-9][0-9][0-9]",
            apply: function(a) {
                this.milliseconds = +a
            }
        },
        ss: {
            regex: "[0-5][0-9]",
            apply: function(a) {
                this.seconds = +a
            }
        },
        s: {
            regex: "[0-9]|[1-5][0-9]",
            apply: function(a) {
                this.seconds = +a
            }
        }
    };
    this.parse = function(b, f, g) {
        if (!angular.isString(b) || !f) return b;
        f = a.DATETIME_FORMATS[f] || f, f = f.replace(e, "\\$&"), this.parsers[f] || (this.parsers[f] = c(f));
        var h = this.parsers[f],
            i = h.regex,
            j = h.map,
            k = b.match(i);
        if (k && k.length) {
            var l, m;
            l = g ? {
                year: g.getFullYear(),
                month: g.getMonth(),
                date: g.getDate(),
                hours: g.getHours(),
                minutes: g.getMinutes(),
                seconds: g.getSeconds(),
                milliseconds: g.getMilliseconds()
            } : {
                year: 1900,
                month: 0,
                date: 1,
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds: 0
            };
            for (var n = 1, o = k.length; o > n; n++) {
                var p = j[n - 1];
                p.apply && p.apply.call(l, k[n])
            }
            return d(l.year, l.month, l.date) && (m = new Date(l.year, l.month, l.date, l.hours, l.minutes, l.seconds, l.milliseconds || 0)), m
        }
    }
}]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(a, b) {
    function c(a, c) {
        return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
    }

    function d(a) {
        return "static" === (c(a, "position") || "static")
    }
    var e = function(b) {
        for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
        return e || c
    };
    return {
        position: function(b) {
            var c = this.offset(b),
                d = {
                    top: 0,
                    left: 0
                },
                f = e(b[0]);
            f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
            var g = b[0].getBoundingClientRect();
            return {
                width: g.width || b.prop("offsetWidth"),
                height: g.height || b.prop("offsetHeight"),
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offset: function(c) {
            var d = c[0].getBoundingClientRect();
            return {
                width: d.width || c.prop("offsetWidth"),
                height: d.height || c.prop("offsetHeight"),
                top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
                left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
            }
        },
        positionElements: function(a, b, c, d) {
            var e, f, g, h, i = c.split("-"),
                j = i[0],
                k = i[1] || "center";
            e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
            var l = {
                    center: function() {
                        return e.left + e.width / 2 - f / 2
                    },
                    left: function() {
                        return e.left
                    },
                    right: function() {
                        return e.left + e.width
                    }
                },
                m = {
                    center: function() {
                        return e.top + e.height / 2 - g / 2
                    },
                    top: function() {
                        return e.top
                    },
                    bottom: function() {
                        return e.top + e.height
                    }
                };
            switch (j) {
                case "right":
                    h = {
                        top: m[k](),
                        left: l[j]()
                    };
                    break;
                case "left":
                    h = {
                        top: m[k](),
                        left: e.left - f
                    };
                    break;
                case "bottom":
                    h = {
                        top: m[j](),
                        left: l[k]()
                    };
                    break;
                default:
                    h = {
                        top: e.top - g,
                        left: l[k]()
                    }
            }
            return h
        }
    }
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null,
    shortcutPropagation: !1
}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function(a, b, c, d, e, f, g, h) {
    var i = this,
        j = {
            $setViewValue: angular.noop
        };
    this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange", "shortcutPropagation"], function(c, e) {
        i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
    }), angular.forEach(["minDate", "maxDate"], function(d) {
        b[d] ? a.$parent.$watch(c(b[d]), function(a) {
            i[d] = a ? new Date(a) : null, i.refreshView()
        }) : i[d] = h[d] ? new Date(h[d]) : null
    }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.maxMode = i.maxMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), angular.isDefined(b.initDate) ? (this.activeDate = a.$parent.$eval(b.initDate) || new Date, a.$parent.$watch(b.initDate, function(a) {
        a && (j.$isEmpty(j.$modelValue) || j.$invalid) && (i.activeDate = a, i.refreshView())
    })) : this.activeDate = new Date, a.isActive = function(b) {
        return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
    }, this.init = function(a) {
        j = a, j.$render = function() {
            i.render()
        }
    }, this.render = function() {
        if (j.$viewValue) {
            var a = new Date(j.$viewValue),
                b = !isNaN(a);
            b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
        }
        this.refreshView()
    }, this.refreshView = function() {
        if (this.element) {
            this._refreshView();
            var a = j.$viewValue ? new Date(j.$viewValue) : null;
            j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
        }
    }, this.createDateObject = function(a, b) {
        var c = j.$viewValue ? new Date(j.$viewValue) : null;
        return {
            date: a,
            label: g(a, b),
            selected: c && 0 === this.compare(a, c),
            disabled: this.isDisabled(a),
            current: 0 === this.compare(a, new Date),
            customClass: this.customClass(a)
        }
    }, this.isDisabled = function(c) {
        return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
            date: c,
            mode: a.datepickerMode
        })
    }, this.customClass = function(b) {
        return a.customClass({
            date: b,
            mode: a.datepickerMode
        })
    }, this.split = function(a, b) {
        for (var c = []; a.length > 0;) c.push(a.splice(0, b));
        return c
    }, a.select = function(b) {
        if (a.datepickerMode === i.minMode) {
            var c = j.$viewValue ? new Date(j.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
        } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
    }, a.move = function(a) {
        var b = i.activeDate.getFullYear() + a * (i.step.years || 0),
            c = i.activeDate.getMonth() + a * (i.step.months || 0);
        i.activeDate.setFullYear(b, c, 1), i.refreshView()
    }, a.toggleMode = function(b) {
        b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
    }, a.keys = {
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    var k = function() {
        e(function() {
            i.element[0].focus()
        }, 0, !1)
    };
    a.$on("datepicker.focus", k), a.keydown = function(b) {
        var c = a.keys[b.which];
        if (c && !b.shiftKey && !b.altKey)
            if (b.preventDefault(), i.shortcutPropagation || b.stopPropagation(), "enter" === c || "space" === c) {
                if (i.isDisabled(i.activeDate)) return;
                a.select(i.activeDate), k()
            } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
    }
}]).directive("datepicker", function() {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/datepicker.html",
        scope: {
            datepickerMode: "=?",
            dateDisabled: "&",
            customClass: "&",
            shortcutPropagation: "&?"
        },
        require: ["datepicker", "?^ngModel"],
        controller: "DatepickerController",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f)
        }
    }
}).directive("daypicker", ["dateFilter", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/day.html",
        require: "^datepicker",
        link: function(b, c, d, e) {
            function f(a, b) {
                return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
            }

            function g(a, b) {
                var c = new Array(b),
                    d = new Date(a),
                    e = 0;
                for (d.setHours(12); b > e;) c[e++] = new Date(d), d.setDate(d.getDate() + 1);
                return c
            }

            function h(a) {
                var b = new Date(a);
                b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                var c = b.getTime();
                return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
            }
            b.showWeeks = e.showWeeks, e.step = {
                months: 1
            }, e.element = c;
            var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            e._refreshView = function() {
                var c = e.activeDate.getFullYear(),
                    d = e.activeDate.getMonth(),
                    f = new Date(c, d, 1),
                    i = e.startingDay - f.getDay(),
                    j = i > 0 ? 7 - i : -i,
                    k = new Date(f);
                j > 0 && k.setDate(-j + 1);
                for (var l = g(k, 42), m = 0; 42 > m; m++) l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
                    secondary: l[m].getMonth() !== d,
                    uid: b.uniqueId + "-" + m
                });
                b.labels = new Array(7);
                for (var n = 0; 7 > n; n++) b.labels[n] = {
                    abbr: a(l[n].date, e.formatDayHeader),
                    full: a(l[n].date, "EEEE")
                };
                if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
                    b.weekNumbers = [];
                    for (var o = (11 - e.startingDay) % 7, p = b.rows.length, q = 0; p > q; q++) b.weekNumbers.push(h(b.rows[q][o].date))
                }
            }, e.compare = function(a, b) {
                return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
            }, e.handleKeyDown = function(a, b) {
                var c = e.activeDate.getDate();
                if ("left" === a) c -= 1;
                else if ("up" === a) c -= 7;
                else if ("right" === a) c += 1;
                else if ("down" === a) c += 7;
                else if ("pageup" === a || "pagedown" === a) {
                    var d = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
                    e.activeDate.setMonth(d, 1), c = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), c)
                } else "home" === a ? c = 1 : "end" === a && (c = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
                e.activeDate.setDate(c)
            }, e.refreshView()
        }
    }
}]).directive("monthpicker", ["dateFilter", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/month.html",
        require: "^datepicker",
        link: function(b, c, d, e) {
            e.step = {
                years: 1
            }, e.element = c, e._refreshView = function() {
                for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++) c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {
                    uid: b.uniqueId + "-" + f
                });
                b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
            }, e.compare = function(a, b) {
                return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
            }, e.handleKeyDown = function(a, b) {
                var c = e.activeDate.getMonth();
                if ("left" === a) c -= 1;
                else if ("up" === a) c -= 3;
                else if ("right" === a) c += 1;
                else if ("down" === a) c += 3;
                else if ("pageup" === a || "pagedown" === a) {
                    var d = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
                    e.activeDate.setFullYear(d)
                } else "home" === a ? c = 0 : "end" === a && (c = 11);
                e.activeDate.setMonth(c)
            }, e.refreshView()
        }
    }
}]).directive("yearpicker", ["dateFilter", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/year.html",
        require: "^datepicker",
        link: function(a, b, c, d) {
            function e(a) {
                return parseInt((a - 1) / f, 10) * f + 1
            }
            var f = d.yearRange;
            d.step = {
                years: f
            }, d.element = b, d._refreshView = function() {
                for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++) b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {
                    uid: a.uniqueId + "-" + c
                });
                a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
            }, d.compare = function(a, b) {
                return a.getFullYear() - b.getFullYear()
            }, d.handleKeyDown = function(a, b) {
                var c = d.activeDate.getFullYear();
                "left" === a ? c -= 1 : "up" === a ? c -= 5 : "right" === a ? c += 1 : "down" === a ? c += 5 : "pageup" === a || "pagedown" === a ? c += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? c = e(d.activeDate.getFullYear()) : "end" === a && (c = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(c)
            }, d.refreshView()
        }
    }
}]).constant("datepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    html5Types: {
        date: "yyyy-MM-dd",
        "datetime-local": "yyyy-MM-ddTHH:mm:ss.sss",
        month: "yyyy-MM"
    },
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0
}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function(a, b, c, d, e, f, g) {
    return {
        restrict: "EA",
        require: "ngModel",
        scope: {
            isOpen: "=?",
            currentText: "@",
            clearText: "@",
            closeText: "@",
            dateDisabled: "&",
            customClass: "&"
        },
        link: function(h, i, j, k) {
            function l(a) {
                return a.replace(/([A-Z])/g, function(a) {
                    return "-" + a.toLowerCase()
                })
            }

            function m(a) {
                if (angular.isNumber(a) && (a = new Date(a)), a) {
                    if (angular.isDate(a) && !isNaN(a)) return a;
                    if (angular.isString(a)) {
                        var b = f.parse(a, o, h.date) || new Date(a);
                        return isNaN(b) ? void 0 : b
                    }
                    return void 0
                }
                return null
            }

            function n(a, b) {
                var c = a || b;
                if (angular.isNumber(c) && (c = new Date(c)), c) {
                    if (angular.isDate(c) && !isNaN(c)) return !0;
                    if (angular.isString(c)) {
                        var d = f.parse(c, o) || new Date(c);
                        return !isNaN(d)
                    }
                    return !1
                }
                return !0
            }
            var o, p = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection,
                q = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
            h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function(a) {
                return h[a + "Text"] || g[a + "Text"]
            };
            var r = !1;
            if (g.html5Types[j.type] ? (o = g.html5Types[j.type], r = !0) : (o = j.datepickerPopup || g.datepickerPopup, j.$observe("datepickerPopup", function(a, b) {
                    var c = a || g.datepickerPopup;
                    if (c !== o && (o = c, k.$modelValue = null, !o)) throw new Error("datepickerPopup must have a date format specified.")
                })), !o) throw new Error("datepickerPopup must have a date format specified.");
            if (r && j.datepickerPopup) throw new Error("HTML5 date input types do not support custom formats.");
            var s = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
            s.attr({
                "ng-model": "date",
                "ng-change": "dateSelection()"
            });
            var t = angular.element(s.children()[0]);
            if (r && "month" == j.type && (t.attr("datepicker-mode", '"month"'), t.attr("min-mode", "month")), j.datepickerOptions) {
                var u = h.$parent.$eval(j.datepickerOptions);
                u.initDate && (h.initDate = u.initDate, t.attr("init-date", "initDate"), delete u.initDate), angular.forEach(u, function(a, b) {
                    t.attr(l(b), a)
                })
            }
            h.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode", "initDate", "shortcutPropagation"], function(a) {
                if (j[a]) {
                    var c = b(j[a]);
                    if (h.$parent.$watch(c, function(b) {
                            h.watchData[a] = b
                        }), t.attr(l(a), "watchData." + a), "datepickerMode" === a) {
                        var d = c.assign;
                        h.$watch("watchData." + a, function(a, b) {
                            a !== b && d(h.$parent, a)
                        })
                    }
                }
            }), j.dateDisabled && t.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), j.showWeeks && t.attr("show-weeks", j.showWeeks), j.customClass && t.attr("custom-class", "customClass({ date: date, mode: mode })"), r ? k.$formatters.push(function(a) {
                return h.date = a, a
            }) : (k.$$parserName = "date", k.$validators.date = n, k.$parsers.unshift(m), k.$formatters.push(function(a) {
                return h.date = a, k.$isEmpty(a) ? a : e(a, o)
            })), h.dateSelection = function(a) {
                angular.isDefined(a) && (h.date = a);
                var b = h.date ? e(h.date, o) : "";
                i.val(b), k.$setViewValue(b), p && (h.isOpen = !1, i[0].focus())
            }, k.$viewChangeListeners.push(function() {
                h.date = f.parse(k.$viewValue, o, h.date) || new Date(k.$viewValue)
            });
            var v = function(a) {
                    h.isOpen && a.target !== i[0] && h.$apply(function() {
                        h.isOpen = !1
                    })
                },
                w = function(a, b) {
                    h.keydown(a)
                };
            i.bind("keydown", w), h.keydown = function(a) {
                27 === a.which ? (a.preventDefault(), h.isOpen && a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
            }, h.$watch("isOpen", function(a) {
                a ? (h.$broadcast("datepicker.focus"), h.position = q ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", v)) : c.unbind("click", v)
            }), h.select = function(a) {
                if ("today" === a) {
                    var b = new Date;
                    angular.isDate(h.date) ? (a = new Date(h.date), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
                }
                h.dateSelection(a)
            }, h.close = function() {
                h.isOpen = !1, i[0].focus()
            };
            var x = a(s)(h);
            s.remove(), q ? c.find("body").append(x) : i.after(x), h.$on("$destroy", function() {
                x.remove(), i.unbind("keydown", w), c.unbind("click", v)
            })
        }
    }
}]).directive("datepickerPopupWrap", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        templateUrl: "template/datepicker/popup.html",
        link: function(a, b, c) {
            b.bind("click", function(a) {
                a.preventDefault(), a.stopPropagation()
            })
        }
    }
}), angular.module("ui.bootstrap.dropdown", ["ui.bootstrap.position"]).constant("dropdownConfig", {
    openClass: "open"
}).service("dropdownService", ["$document", "$rootScope", function(a, b) {
    var c = null;
    this.open = function(b) {
        c || (a.bind("click", d), a.bind("keydown", e)), c && c !== b && (c.isOpen = !1), c = b
    }, this.close = function(b) {
        c === b && (c = null, a.unbind("click", d), a.unbind("keydown", e))
    };
    var d = function(a) {
            if (c && (!a || "disabled" !== c.getAutoClose())) {
                var d = c.getToggleElement();
                if (!(a && d && d[0].contains(a.target))) {
                    var e = c.getElement();
                    a && "outsideClick" === c.getAutoClose() && e && e[0].contains(a.target) || (c.isOpen = !1, b.$$phase || c.$apply())
                }
            }
        },
        e = function(a) {
            27 === a.which && (c.focusToggleElement(), d())
        }
}]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", "$position", "$document", function(a, b, c, d, e, f, g, h) {
    var i, j = this,
        k = a.$new(),
        l = d.openClass,
        m = angular.noop,
        n = b.onToggle ? c(b.onToggle) : angular.noop,
        o = !1;
    this.init = function(d) {
        j.$element = d, b.isOpen && (i = c(b.isOpen), m = i.assign, a.$watch(i, function(a) {
            k.isOpen = !!a
        })), o = angular.isDefined(b.dropdownAppendToBody), o && j.dropdownMenu && (h.find("body").append(j.dropdownMenu), d.on("$destroy", function() {
            j.dropdownMenu.remove()
        }))
    }, this.toggle = function(a) {
        return k.isOpen = arguments.length ? !!a : !k.isOpen
    }, this.isOpen = function() {
        return k.isOpen
    }, k.getToggleElement = function() {
        return j.toggleElement
    }, k.getAutoClose = function() {
        return b.autoClose || "always"
    }, k.getElement = function() {
        return j.$element
    }, k.focusToggleElement = function() {
        j.toggleElement && j.toggleElement[0].focus()
    }, k.$watch("isOpen", function(b, c) {
        if (o && j.dropdownMenu) {
            var d = g.positionElements(j.$element, j.dropdownMenu, "bottom-left", !0);
            j.dropdownMenu.css({
                top: d.top + "px",
                left: d.left + "px",
                display: b ? "block" : "none"
            })
        }
        f[b ? "addClass" : "removeClass"](j.$element, l), b ? (k.focusToggleElement(), e.open(k)) : e.close(k), m(a, b), angular.isDefined(b) && b !== c && n(a, {
            open: !!b
        })
    }), a.$on("$locationChangeSuccess", function() {
        k.isOpen = !1
    }), a.$on("$destroy", function() {
        k.$destroy()
    })
}]).directive("dropdown", function() {
    return {
        controller: "DropdownController",
        link: function(a, b, c, d) {
            d.init(b)
        }
    }
}).directive("dropdownMenu", function() {
    return {
        restrict: "AC",
        require: "?^dropdown",
        link: function(a, b, c, d) {
            d && (d.dropdownMenu = b)
        }
    }
}).directive("dropdownToggle", function() {
    return {
        require: "?^dropdown",
        link: function(a, b, c, d) {
            if (d) {
                d.toggleElement = b;
                var e = function(e) {
                    e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function() {
                        d.toggle()
                    })
                };
                b.bind("click", e), b.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), a.$watch(d.isOpen, function(a) {
                    b.attr("aria-expanded", !!a)
                }), a.$on("$destroy", function() {
                    b.unbind("click", e)
                })
            }
        }
    }
}), angular.module("ui.bootstrap.modal", []).factory("$$stackedMap", function() {
    return {
        createNew: function() {
            var a = [];
            return {
                add: function(b, c) {
                    a.push({
                        key: b,
                        value: c
                    })
                },
                get: function(b) {
                    for (var c = 0; c < a.length; c++)
                        if (b == a[c].key) return a[c]
                },
                keys: function() {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                    return b
                },
                top: function() {
                    return a[a.length - 1]
                },
                remove: function(b) {
                    for (var c = -1, d = 0; d < a.length; d++)
                        if (b == a[d].key) {
                            c = d;
                            break
                        }
                    return a.splice(c, 1)[0]
                },
                removeTop: function() {
                    return a.splice(a.length - 1, 1)[0]
                },
                length: function() {
                    return a.length
                }
            }
        }
    }
}).directive("modalBackdrop", ["$timeout", function(a) {
    function b(b, c, d) {
        b.animate = !1, a(function() {
            b.animate = !0
        })
    }
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/modal/backdrop.html",
        compile: function(a, c) {
            return a.addClass(c.backdropClass), b
        }
    }
}]).directive("modalWindow", ["$modalStack", "$q", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            index: "@",
            animate: "="
        },
        replace: !0,
        transclude: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/modal/window.html"
        },
        link: function(c, d, e) {
            d.addClass(e.windowClass || ""), c.size = e.size, c.close = function(b) {
                var c = a.getTop();
                c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
            }, c.$isRendered = !0;
            var f = b.defer();
            e.$observe("modalRender", function(a) {
                "true" == a && f.resolve()
            }), f.promise.then(function() {
                c.animate = !0;
                var b = d[0].querySelectorAll("[autofocus]");
                b.length ? b[0].focus() : d[0].focus();
                var e = a.getTop();
                e && a.modalRendered(e.key)
            })
        }
    }
}]).directive("modalAnimationClass", [function() {
    return {
        compile: function(a, b) {
            b.modalAnimation && a.addClass(b.modalAnimationClass)
        }
    }
}]).directive("modalTransclude", function() {
    return {
        link: function(a, b, c, d, e) {
            e(a.$parent, function(a) {
                b.empty(), b.append(a)
            })
        }
    }
}).factory("$modalStack", ["$animate", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(a, b, c, d, e, f) {
    function g() {
        for (var a = -1, b = o.keys(), c = 0; c < b.length; c++) o.get(b[c]).value.backdrop && (a = c);
        return a
    }

    function h(a) {
        var b = c.find("body").eq(0),
            d = o.get(a).value;
        o.remove(a), j(d.modalDomEl, d.modalScope, function() {
            b.toggleClass(n, o.length() > 0), i()
        })
    }

    function i() {
        if (l && -1 == g()) {
            var a = m;
            j(l, m, function() {
                a = null
            }), l = void 0, m = void 0
        }
    }

    function j(c, d, f) {
        function g() {
            g.done || (g.done = !0, c.remove(), d.$destroy(), f && f())
        }
        d.animate = !1, c.attr("modal-animation") && a.enabled() ? c.one("$animate:close", function() {
            e.$evalAsync(g)
        }) : b(g)
    }

    function k(a, b, c) {
        return !a.value.modalScope.$broadcast("modal.closing", b, c).defaultPrevented
    }
    var l, m, n = "modal-open",
        o = f.createNew(),
        p = {};
    return e.$watch(g, function(a) {
        m && (m.index = a)
    }), c.bind("keydown", function(a) {
        var b;
        27 === a.which && (b = o.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function() {
            p.dismiss(b.key, "escape key press")
        })))
    }), p.open = function(a, b) {
        var f = c[0].activeElement;
        o.add(a, {
            deferred: b.deferred,
            renderDeferred: b.renderDeferred,
            modalScope: b.scope,
            backdrop: b.backdrop,
            keyboard: b.keyboard
        });
        var h = c.find("body").eq(0),
            i = g();
        if (i >= 0 && !l) {
            m = e.$new(!0), m.index = i;
            var j = angular.element('<div modal-backdrop="modal-backdrop"></div>');
            j.attr("backdrop-class", b.backdropClass), b.animation && j.attr("modal-animation", "true"), l = d(j)(m), h.append(l)
        }
        var k = angular.element('<div modal-window="modal-window"></div>');
        k.attr({
            "template-url": b.windowTemplateUrl,
            "window-class": b.windowClass,
            size: b.size,
            index: o.length() - 1,
            animate: "animate"
        }).html(b.content), b.animation && k.attr("modal-animation", "true");

        var p = d(k)(b.scope);
        o.top().value.modalDomEl = p, o.top().value.modalOpener = f, h.append(p), h.addClass(n)
    }, p.close = function(a, b) {
        var c = o.get(a);
        return c && k(c, b, !0) ? (c.value.deferred.resolve(b), h(a), c.value.modalOpener.focus(), !0) : !c
    }, p.dismiss = function(a, b) {
        var c = o.get(a);
        return c && k(c, b, !1) ? (c.value.deferred.reject(b), h(a), c.value.modalOpener.focus(), !0) : !c
    }, p.dismissAll = function(a) {
        for (var b = this.getTop(); b && this.dismiss(b.key, a);) b = this.getTop()
    }, p.getTop = function() {
        return o.top()
    }, p.modalRendered = function(a) {
        var b = o.get(a);
        b && b.value.renderDeferred.resolve()
    }, p
}]).provider("$modal", function() {
    var a = {
        options: {
            animation: !0,
            backdrop: !0,
            keyboard: !0
        },
        $get: ["$injector", "$rootScope", "$q", "$templateRequest", "$controller", "$modalStack", function(b, c, d, e, f, g) {
            function h(a) {
                return a.template ? d.when(a.template) : e(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl)
            }

            function i(a) {
                var c = [];
                return angular.forEach(a, function(a) {
                    (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
                }), c
            }
            var j = {};
            return j.open = function(b) {
                var e = d.defer(),
                    j = d.defer(),
                    k = d.defer(),
                    l = {
                        result: e.promise,
                        opened: j.promise,
                        rendered: k.promise,
                        close: function(a) {
                            return g.close(l, a)
                        },
                        dismiss: function(a) {
                            return g.dismiss(l, a)
                        }
                    };
                if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                var m = d.all([h(b)].concat(i(b.resolve)));
                return m.then(function(a) {
                    var d = (b.scope || c).$new();
                    d.$close = l.close, d.$dismiss = l.dismiss;
                    var h, i = {},
                        j = 1;
                    b.controller && (i.$scope = d, i.$modalInstance = l, angular.forEach(b.resolve, function(b, c) {
                        i[c] = a[j++]
                    }), h = f(b.controller, i), b.controllerAs && (d[b.controllerAs] = h)), g.open(l, {
                        scope: d,
                        deferred: e,
                        renderDeferred: k,
                        content: a[0],
                        animation: b.animation,
                        backdrop: b.backdrop,
                        keyboard: b.keyboard,
                        backdropClass: b.backdropClass,
                        windowClass: b.windowClass,
                        windowTemplateUrl: b.windowTemplateUrl,
                        size: b.size
                    })
                }, function(a) {
                    e.reject(a)
                }), m.then(function() {
                    j.resolve(!0)
                }, function(a) {
                    j.reject(a)
                }), l
            }, j
        }]
    };
    return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function(a, b, c) {
    var d = this,
        e = {
            $setViewValue: angular.noop
        },
        f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function(g, h) {
        e = g, this.config = h, e.$render = function() {
            d.render()
        }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
            d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
        }) : this.itemsPerPage = h.itemsPerPage, a.$watch("totalItems", function() {
            a.totalPages = d.calculateTotalPages()
        }), a.$watch("totalPages", function(b) {
            f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
        })
    }, this.calculateTotalPages = function() {
        var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
        return Math.max(b || 0, 1)
    }, this.render = function() {
        a.page = parseInt(e.$viewValue, 10) || 1
    }, a.selectPage = function(b, c) {
        a.page !== b && b > 0 && b <= a.totalPages && (c && c.target && c.target.blur(), e.$setViewValue(b), e.$render())
    }, a.getText = function(b) {
        return a[b + "Text"] || d.config[b + "Text"]
    }, a.noPrevious = function() {
        return 1 === a.page
    }, a.noNext = function() {
        return a.page === a.totalPages
    }
}]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", ["$parse", "paginationConfig", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            firstText: "@",
            previousText: "@",
            nextText: "@",
            lastText: "@"
        },
        require: ["pagination", "?ngModel"],
        controller: "PaginationController",
        templateUrl: "template/pagination/pagination.html",
        replace: !0,
        link: function(c, d, e, f) {
            function g(a, b, c) {
                return {
                    number: a,
                    text: b,
                    active: c
                }
            }

            function h(a, b) {
                var c = [],
                    d = 1,
                    e = b,
                    f = angular.isDefined(k) && b > k;
                f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
                for (var h = d; e >= h; h++) {
                    var i = g(h, h, h === a);
                    c.push(i)
                }
                if (f && !l) {
                    if (d > 1) {
                        var j = g(d - 1, "...", !1);
                        c.unshift(j)
                    }
                    if (b > e) {
                        var m = g(e + 1, "...", !1);
                        c.push(m)
                    }
                }
                return c
            }
            var i = f[0],
                j = f[1];
            if (j) {
                var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize,
                    l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
                c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                    k = parseInt(a, 10), i.render()
                });
                var m = i.render;
                i.render = function() {
                    m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
                }
            }
        }
    }
}]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("pager", ["pagerConfig", function(a) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            previousText: "@",
            nextText: "@"
        },
        require: ["pager", "?ngModel"],
        controller: "PaginationController",
        templateUrl: "template/pagination/pager.html",
        replace: !0,
        link: function(b, c, d, e) {
            var f = e[0],
                g = e[1];
            g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
        }
    }
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
    function a(a) {
        var b = /[A-Z]/g,
            c = "-";
        return a.replace(b, function(a, b) {
            return (b ? c : "") + a.toLowerCase()
        })
    }
    var b = {
            placement: "top",
            animation: !0,
            popupDelay: 0,
            useContentExp: !1
        },
        c = {
            mouseenter: "mouseleave",
            click: "click",
            focus: "blur"
        },
        d = {};
    this.options = function(a) {
        angular.extend(d, a)
    }, this.setTriggers = function(a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", function(e, f, g, h, i, j) {
        return function(e, k, l, m) {
            function n(a) {
                var b = a || m.trigger || l,
                    d = c[b] || b;
                return {
                    show: b,
                    hide: d
                }
            }
            m = angular.extend({}, b, d, m);
            var o = a(e),
                p = j.startSymbol(),
                q = j.endSymbol(),
                r = "<div " + o + '-popup title="' + p + "title" + q + '" ' + (m.useContentExp ? 'content-exp="contentExp()" ' : 'content="' + p + "content" + q + '" ') + 'placement="' + p + "placement" + q + '" popup-class="' + p + "popupClass" + q + '" animation="animation" is-open="isOpen"origin-scope="origScope" ></div>';
            return {
                restrict: "EA",
                compile: function(a, b) {
                    var c = f(r);
                    return function(a, b, d, f) {
                        function j() {
                            F.isOpen ? o() : l()
                        }

                        function l() {
                            (!E || a.$eval(d[k + "Enable"])) && (t(), F.popupDelay ? B || (B = g(p, F.popupDelay, !1), B.then(function(a) {
                                a()
                            })) : p()())
                        }

                        function o() {
                            a.$apply(function() {
                                q()
                            })
                        }

                        function p() {
                            return B = null, A && (g.cancel(A), A = null), (m.useContentExp ? F.contentExp() : F.content) ? (r(), y.css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }), F.$digest(), G(), F.isOpen = !0, F.$apply(), G) : angular.noop
                        }

                        function q() {
                            F.isOpen = !1, g.cancel(B), B = null, F.animation ? A || (A = g(s, 500)) : s()
                        }

                        function r() {
                            y && s(), z = F.$new(), y = c(z, function(a) {
                                C ? h.find("body").append(a) : b.after(a)
                            }), z.$watch(function() {
                                g(G, 0, !1)
                            }), m.useContentExp && z.$watch("contentExp()", function(a) {
                                !a && F.isOpen && q()
                            })
                        }

                        function s() {
                            A = null, y && (y.remove(), y = null), z && (z.$destroy(), z = null)
                        }

                        function t() {
                            u(), v(), w()
                        }

                        function u() {
                            F.popupClass = d[k + "Class"]
                        }

                        function v() {
                            var a = d[k + "Placement"];
                            F.placement = angular.isDefined(a) ? a : m.placement
                        }

                        function w() {
                            var a = d[k + "PopupDelay"],
                                b = parseInt(a, 10);
                            F.popupDelay = isNaN(b) ? m.popupDelay : b
                        }

                        function x() {
                            var a = d[k + "Trigger"];
                            H(), D = n(a), D.show === D.hide ? b.bind(D.show, j) : (b.bind(D.show, l), b.bind(D.hide, o))
                        }
                        var y, z, A, B, C = angular.isDefined(m.appendToBody) ? m.appendToBody : !1,
                            D = n(void 0),
                            E = angular.isDefined(d[k + "Enable"]),
                            F = a.$new(!0),
                            G = function() {
                                if (y) {
                                    var a = i.positionElements(b, y, F.placement, C);
                                    a.top += "px", a.left += "px", y.css(a)
                                }
                            };
                        F.origScope = a, F.isOpen = !1, F.contentExp = function() {
                            return a.$eval(d[e])
                        }, m.useContentExp || d.$observe(e, function(a) {
                            F.content = a, !a && F.isOpen && q()
                        }), d.$observe("disabled", function(a) {
                            a && F.isOpen && q()
                        }), d.$observe(k + "Title", function(a) {
                            F.title = a
                        });
                        var H = function() {
                            b.unbind(D.show, l), b.unbind(D.hide, o)
                        };
                        x();
                        var I = a.$eval(d[k + "Animation"]);
                        F.animation = angular.isDefined(I) ? !!I : m.animation;
                        var J = a.$eval(d[k + "AppendToBody"]);
                        C = angular.isDefined(J) ? J : C, C && a.$on("$locationChangeSuccess", function() {
                            F.isOpen && q()
                        }), a.$on("$destroy", function() {
                            g.cancel(A), g.cancel(B), H(), s(), F = null
                        })
                    }
                }
            }
        }
    }]
}).directive("tooltipTemplateTransclude", ["$animate", "$sce", "$compile", "$templateRequest", function(a, b, c, d) {
    return {
        link: function(e, f, g) {
            var h, i, j, k = e.$eval(g.tooltipTemplateTranscludeScope),
                l = 0,
                m = function() {
                    i && (i.remove(), i = null), h && (h.$destroy(), h = null), j && (a.leave(j).then(function() {
                        i = null
                    }), i = j, j = null)
                };
            e.$watch(b.parseAsResourceUrl(g.tooltipTemplateTransclude), function(b) {
                var g = ++l;
                b ? (d(b, !0).then(function(d) {
                    if (g === l) {
                        var e = k.$new(),
                            i = d,
                            n = c(i)(e, function(b) {
                                m(), a.enter(b, f)
                            });
                        h = e, j = n, h.$emit("$includeContentLoaded", b)
                    }
                }, function() {
                    g === l && (m(), e.$emit("$includeContentError", b))
                }), e.$emit("$includeContentRequested", b)) : m()
            }), e.$on("$destroy", m)
        }
    }
}]).directive("tooltipClasses", function() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            a.placement && b.addClass(a.placement), a.popupClass && b.addClass(a.popupClass), a.animation() && b.addClass(c.tooltipAnimationClass)
        }
    }
}).directive("tooltipPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    }
}).directive("tooltip", ["$tooltip", function(a) {
    return a("tooltip", "tooltip", "mouseenter")
}]).directive("tooltipTemplatePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&",
            originScope: "&"
        },
        templateUrl: "template/tooltip/tooltip-template-popup.html"
    }
}).directive("tooltipTemplate", ["$tooltip", function(a) {
    return a("tooltipTemplate", "tooltip", "mouseenter", {
        useContentExp: !0
    })
}]).directive("tooltipHtmlPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-popup.html"
    }
}).directive("tooltipHtml", ["$tooltip", function(a) {
    return a("tooltipHtml", "tooltip", "mouseenter", {
        useContentExp: !0
    })
}]).directive("tooltipHtmlUnsafePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
}).value("tooltipHtmlUnsafeSuppressDeprecated", !1).directive("tooltipHtmlUnsafe", ["$tooltip", "tooltipHtmlUnsafeSuppressDeprecated", "$log", function(a, b, c) {
    return b || c.warn("tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead."), a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverTemplatePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            contentExp: "&",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&",
            originScope: "&"
        },
        templateUrl: "template/popover/popover-template.html"
    }
}).directive("popoverTemplate", ["$tooltip", function(a) {
    return a("popoverTemplate", "popover", "click", {
        useContentExp: !0
    })
}]).directive("popoverPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            popupClass: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    }
}).directive("popover", ["$tooltip", function(a) {
    return a("popover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function(a, b, c) {
    var d = this,
        e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = angular.isDefined(a.max) ? a.max : c.max, this.addBar = function(b, c) {
        e || c.css({
            transition: "none"
        }), this.bars.push(b), b.$watch("value", function(c) {
            b.percent = +(100 * c / a.max).toFixed(2)
        }), b.$on("$destroy", function() {
            c = null, d.removeBar(b)
        })
    }, this.removeBar = function(a) {
        this.bars.splice(this.bars.indexOf(a), 1)
    }
}]).directive("progress", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        templateUrl: "template/progressbar/progress.html"
    }
}).directive("bar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {
            value: "=",
            max: "=?",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function(a, b, c, d) {
            d.addBar(a, b)
        }
    }
}).directive("progressbar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {
            value: "=",
            max: "=?",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function(a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]))
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function(a, b, c) {
    var d = {
        $setViewValue: angular.noop
    };
    this.init = function(e) {
        d = e, d.$render = this.render, d.$formatters.push(function(a) {
            return angular.isNumber(a) && a << 0 !== a && (a = Math.round(a)), a
        }), this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
        var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
        a.range = this.buildTemplateObjects(f)
    }, this.buildTemplateObjects = function(a) {
        for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
            index: b
        }, {
            stateOn: this.stateOn,
            stateOff: this.stateOff
        }, a[b]);
        return a
    }, a.rate = function(b) {
        !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
    }, a.enter = function(b) {
        a.readonly || (a.value = b), a.onHover({
            value: b
        })
    }, a.reset = function() {
        a.value = d.$viewValue, a.onLeave()
    }, a.onKeydown = function(b) {
        /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
    }, this.render = function() {
        a.value = d.$viewValue
    }
}]).directive("rating", function() {
    return {
        restrict: "EA",
        require: ["rating", "ngModel"],
        scope: {
            readonly: "=?",
            onHover: "&",
            onLeave: "&"
        },
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            e.init(f)
        }
    }
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function(a) {
    var b = this,
        c = b.tabs = a.tabs = [];
    b.select = function(a) {
        angular.forEach(c, function(b) {
            b.active && b !== a && (b.active = !1, b.onDeselect())
        }), a.active = !0, a.onSelect()
    }, b.addTab = function(a) {
        c.push(a), 1 === c.length && a.active !== !1 ? a.active = !0 : a.active ? b.select(a) : a.active = !1
    }, b.removeTab = function(a) {
        var e = c.indexOf(a);
        if (a.active && c.length > 1 && !d) {
            var f = e == c.length - 1 ? e - 1 : e + 1;
            b.select(c[f])
        }
        c.splice(e, 1)
    };
    var d;
    a.$on("$destroy", function() {
        d = !0
    })
}]).directive("tabset", function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@"
        },
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function(a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
        }
    }
}).directive("tab", ["$parse", "$log", function(a, b) {
    return {
        require: "^tabset",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/tabs/tab.html",
        transclude: !0,
        scope: {
            active: "=?",
            heading: "@",
            onSelect: "&select",
            onDeselect: "&deselect"
        },
        controller: function() {},
        compile: function(c, d, e) {
            return function(c, d, f, g) {
                c.$watch("active", function(a) {
                    a && g.select(c)
                }), c.disabled = !1, f.disable && c.$parent.$watch(a(f.disable), function(a) {
                    c.disabled = !!a
                }), f.disabled && (b.warn('Use of "disabled" attribute has been deprecated, please use "disable"'), c.$parent.$watch(a(f.disabled), function(a) {
                    c.disabled = !!a
                })), c.select = function() {
                    c.disabled || (c.active = !0)
                }, g.addTab(c), c.$on("$destroy", function() {
                    g.removeTab(c)
                }), c.$transcludeFn = e
            }
        }
    }
}]).directive("tabHeadingTransclude", [function() {
    return {
        restrict: "A",
        require: "^tab",
        link: function(a, b, c, d) {
            a.$watch("headingElement", function(a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}]).directive("tabContentTransclude", function() {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
    }
    return {
        restrict: "A",
        require: "^tabset",
        link: function(b, c, d) {
            var e = b.$eval(d.tabContentTransclude);
            e.$transcludeFn(e.$parent, function(b) {
                angular.forEach(b, function(b) {
                    a(b) ? e.headingElement = b : c.append(b)
                })
            })
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0,
    arrowkeys: !0
}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function(a, b, c, d, e, f) {
    function g() {
        var b = parseInt(a.hours, 10),
            c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
        return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
    }

    function h() {
        var b = parseInt(a.minutes, 10);
        return b >= 0 && 60 > b ? b : void 0
    }

    function i(a) {
        return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a.toString()
    }

    function j(a) {
        k(), o.$setViewValue(new Date(n)), l(a)
    }

    function k() {
        o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
    }

    function l(b) {
        var c = n.getHours(),
            d = n.getMinutes();
        a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), "m" !== b && (a.minutes = i(d)), a.meridian = n.getHours() < 12 ? p[0] : p[1]
    }

    function m(a) {
        var b = new Date(n.getTime() + 6e4 * a);
        n.setHours(b.getHours(), b.getMinutes()), j()
    }
    var n = new Date,
        o = {
            $setViewValue: angular.noop
        },
        p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
    this.init = function(c, d) {
        o = c, o.$render = this.render, o.$formatters.unshift(function(a) {
            return a ? new Date(a) : null
        });
        var e = d.eq(0),
            g = d.eq(1),
            h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
        h && this.setupMousewheelEvents(e, g);
        var i = angular.isDefined(b.arrowkeys) ? a.$parent.$eval(b.arrowkeys) : f.arrowkeys;
        i && this.setupArrowkeyEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
    };
    var q = f.hourStep;
    b.hourStep && a.$parent.$watch(c(b.hourStep), function(a) {
        q = parseInt(a, 10)
    });
    var r = f.minuteStep;
    b.minuteStep && a.$parent.$watch(c(b.minuteStep), function(a) {
        r = parseInt(a, 10)
    }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function(b) {
        if (a.showMeridian = !!b, o.$error.time) {
            var c = g(),
                d = h();
            angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
        } else l()
    }), this.setupMousewheelEvents = function(b, c) {
        var d = function(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
            return a.detail || b > 0
        };
        b.bind("mousewheel wheel", function(b) {
            a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
        }), c.bind("mousewheel wheel", function(b) {
            a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
        })
    }, this.setupArrowkeyEvents = function(b, c) {
        b.bind("keydown", function(b) {
            38 === b.which ? (b.preventDefault(), a.incrementHours(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementHours(), a.$apply())
        }), c.bind("keydown", function(b) {
            38 === b.which ? (b.preventDefault(), a.incrementMinutes(), a.$apply()) : 40 === b.which && (b.preventDefault(), a.decrementMinutes(), a.$apply())
        })
    }, this.setupInputEvents = function(b, c) {
        if (a.readonlyInput) return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
        var d = function(b, c) {
            o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
        };
        a.updateHours = function() {
            var a = g();
            angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
        }, b.bind("blur", function(b) {
            !a.invalidHours && a.hours < 10 && a.$apply(function() {
                a.hours = i(a.hours)
            })
        }), a.updateMinutes = function() {
            var a = h();
            angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
        }, c.bind("blur", function(b) {
            !a.invalidMinutes && a.minutes < 10 && a.$apply(function() {
                a.minutes = i(a.minutes)
            })
        })
    }, this.render = function() {
        var a = o.$viewValue;
        isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
    }, a.incrementHours = function() {
        m(60 * q)
    }, a.decrementHours = function() {
        m(60 * -q)
    }, a.incrementMinutes = function() {
        m(r)
    }, a.decrementMinutes = function() {
        m(-r)
    }, a.toggleMeridian = function() {
        m(720 * (n.getHours() < 12 ? 1 : -1))
    }
}]).directive("timepicker", function() {
    return {
        restrict: "EA",
        require: ["timepicker", "?^ngModel"],
        controller: "TimepickerController",
        replace: !0,
        scope: {},
        templateUrl: "template/timepicker/timepicker.html",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f, b.find("input"))
        }
    }
}), angular.module("ui.bootstrap.transition", []).value("$transitionSuppressDeprecated", !1).factory("$transition", ["$q", "$timeout", "$rootScope", "$log", "$transitionSuppressDeprecated", function(a, b, c, d, e) {
    function f(a) {
        for (var b in a)
            if (void 0 !== h.style[b]) return a[b]
    }
    e || d.warn("$transition is now deprecated. Use $animate from ngAnimate instead.");
    var g = function(d, e, f) {
            f = f || {};
            var h = a.defer(),
                i = g[f.animation ? "animationEndEventName" : "transitionEndEventName"],
                j = function(a) {
                    c.$apply(function() {
                        d.unbind(i, j), h.resolve(d)
                    })
                };
            return i && d.bind(i, j), b(function() {
                angular.isString(e) ? d.addClass(e) : angular.isFunction(e) ? e(d) : angular.isObject(e) && d.css(e), i || h.resolve(d)
            }), h.promise.cancel = function() {
                i && d.unbind(i, j), h.reject("Transition cancelled")
            }, h.promise
        },
        h = document.createElement("trans"),
        i = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend"
        },
        j = {
            WebkitTransition: "webkitAnimationEnd",
            MozTransition: "animationend",
            OTransition: "oAnimationEnd",
            transition: "animationend"
        };
    return g.transitionEndEventName = f(i), g.animationEndEventName = f(j), g
}]), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function(a) {
    var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
        parse: function(c) {
            var d = c.match(b);
            if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
            return {
                itemName: d[3],
                source: a(d[4]),
                viewMapper: a(d[2] || d[1]),
                modelMapper: a(d[1])
            }
        }
    }
}]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(a, b, c, d, e, f, g) {
    var h = [9, 13, 27, 38, 40];
    return {
        require: "ngModel",
        link: function(i, j, k, l) {
            var m, n = i.$eval(k.typeaheadMinLength) || 1,
                o = i.$eval(k.typeaheadWaitMs) || 0,
                p = i.$eval(k.typeaheadEditable) !== !1,
                q = b(k.typeaheadLoading).assign || angular.noop,
                r = b(k.typeaheadOnSelect),
                s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0,
                t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1,
                u = i.$eval(k.typeaheadFocusFirst) !== !1,
                v = b(k.ngModel).assign,
                w = g.parse(k.typeahead),
                x = i.$new();
            i.$on("$destroy", function() {
                x.$destroy()
            });
            var y = "typeahead-" + x.$id + "-" + Math.floor(1e4 * Math.random());
            j.attr({
                "aria-autocomplete": "list",
                "aria-expanded": !1,
                "aria-owns": y
            });
            var z = angular.element("<div typeahead-popup></div>");
            z.attr({
                id: y,
                matches: "matches",
                active: "activeIdx",
                select: "select(activeIdx)",
                query: "query",
                position: "position"
            }), angular.isDefined(k.typeaheadTemplateUrl) && z.attr("template-url", k.typeaheadTemplateUrl);
            var A = function() {
                    x.matches = [], x.activeIdx = -1, j.attr("aria-expanded", !1)
                },
                B = function(a) {
                    return y + "-option-" + a
                };
            x.$watch("activeIdx", function(a) {
                0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", B(a))
            });
            var C = function(a) {
                var b = {
                    $viewValue: a
                };
                q(i, !0), c.when(w.source(i, b)).then(function(c) {
                    var d = a === l.$viewValue;
                    if (d && m)
                        if (c && c.length > 0) {
                            x.activeIdx = u ? 0 : -1, x.matches.length = 0;
                            for (var e = 0; e < c.length; e++) b[w.itemName] = c[e], x.matches.push({
                                id: B(e),
                                label: w.viewMapper(x, b),
                                model: c[e]
                            });
                            x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
                        } else A();
                    d && q(i, !1)
                }, function() {
                    A(), q(i, !1)
                })
            };
            A(), x.query = void 0;
            var D, E = function(a) {
                    D = d(function() {
                        C(a)
                    }, o)
                },
                F = function() {
                    D && d.cancel(D)
                };
            l.$parsers.unshift(function(a) {
                return m = !0, a && a.length >= n ? o > 0 ? (F(), E(a)) : C(a) : (q(i, !1), F(), A()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
            }), l.$formatters.push(function(a) {
                var b, c, d = {};
                return p || l.$setValidity("editable", !0), s ? (d.$model = a, s(i, d)) : (d[w.itemName] = a, b = w.viewMapper(i, d), d[w.itemName] = void 0, c = w.viewMapper(i, d), b !== c ? b : a)
            }), x.select = function(a) {
                var b, c, e = {};
                e[w.itemName] = c = x.matches[a].model, b = w.modelMapper(i, e), v(i, b), l.$setValidity("editable", !0), l.$setValidity("parse", !0), r(i, {
                    $item: c,
                    $model: b,
                    $label: w.viewMapper(i, e)
                }), A(), d(function() {
                    j[0].focus()
                }, 0, !1)
            }, j.bind("keydown", function(a) {
                0 !== x.matches.length && -1 !== h.indexOf(a.which) && (-1 != x.activeIdx || 13 !== a.which && 9 !== a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function() {
                    x.select(x.activeIdx)
                }) : 27 === a.which && (a.stopPropagation(), A(), x.$digest()))
            }), j.bind("blur", function(a) {
                m = !1
            });
            var G = function(a) {
                j[0] !== a.target && (A(), x.$digest())
            };
            e.bind("click", G), i.$on("$destroy", function() {
                e.unbind("click", G), t && H.remove(), z.remove()
            });
            var H = a(z)(x);
            t ? e.find("body").append(H) : j.after(H)
        }
    }
}]).directive("typeaheadPopup", function() {
    return {
        restrict: "EA",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function(a, b, c) {
            a.templateUrl = c.templateUrl, a.isOpen = function() {
                return a.matches.length > 0
            }, a.isActive = function(b) {
                return a.active == b
            }, a.selectActive = function(b) {
                a.active = b
            }, a.selectMatch = function(b) {
                a.select({
                    activeIdx: b
                })
            }
        }
    }
}).directive("typeaheadMatch", ["$templateRequest", "$compile", "$parse", function(a, b, c) {
    return {
        restrict: "EA",
        scope: {
            index: "=",
            match: "=",
            query: "="
        },
        link: function(d, e, f) {
            var g = c(f.templateUrl)(d.$parent) || "template/typeahead/typeahead-match.html";
            a(g).then(function(a) {
                b(a.trim())(d, function(a) {
                    e.replaceWith(a)
                })
            })
        }
    }
}]).filter("typeaheadHighlight", function() {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    return function(b, c) {
        return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href="javascript:void(0)" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
}]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
}]), angular.module("template/alert/alert.html", []).run(["$templateCache", function(a) {
    a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
}]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides | orderBy:\'index\' track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
}]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/slide.html", '<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')
}]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
}]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}" ng-class="dt.customClass">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n');

}]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/backdrop.html", '<div class="modal-backdrop"\n     modal-animation-class="fade"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
}]), angular.module("template/modal/window.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/window.html", '<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    modal-animation-class="fade"\n	ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="size ? \'modal-\' + size : \'\'"><div class="modal-content" modal-transclude></div></div>\n</div>\n')
}]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1, $event)">{{getText(\'next\')}}</a></li>\n</ul>')
}]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1, $event)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1, $event)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1, $event)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages, $event)">{{getText(\'last\')}}</a></li>\n</ul>')
}]), angular.module("template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-html-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-template-popup.html", '<div class="tooltip"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')
}]), angular.module("template/popover/popover-template.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover-template.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content"\n        tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')
}]), angular.module("template/popover/popover-window.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover-window.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen, fade: animation }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" tooltip-template-transclude></div>\n  </div>\n</div>\n')
}]), angular.module("template/popover/popover.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover.html", '<div class="popover"\n  tooltip-animation-class="fade"\n  tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-if="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n')
}]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
}]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>\n')
}]), angular.module("template/rating/rating.html", []).run(["$templateCache", function(a) {
    a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
}]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input style="width:50px;" type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input style="width:50px;" type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
}]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
}]), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');