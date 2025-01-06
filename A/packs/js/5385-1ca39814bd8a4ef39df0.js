"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
    [5385], {
        5385: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return l
                }
            });
            var r = n(1580),
                o = n(7983),
                s = n(5479),
                i = n.n(s),
                c = n(3435),
                a = (n(7143), n(5420), n(7515));
            const l = async e => {
                    const t = (e ? e.closest(".js-login-wrapper") : i()(document)).find("#error, .js-login__error"),
                        n = await (0, o.sO)();
                    if (n && await (0, r.St)().connect(), n && n.isConnected) {
                        let e = await fetch("/api/users/get_verify_number", {
                            method: "GET",
                            cache: "no-store"
                        }).then((e => e.json()));
                        if (e && e.verify_numb) {
                            let r = u(e.verify_numb);
                            try {
                                n.signMessage((new TextEncoder).encode(r), "utf8").then((async ({
                                    signature: e,
                                    publicKey: n
                                }) => {
                                    await f(Object.values(e), n, t)
                                }), (() => {}))
                            } catch (s) {}
                        } else(0, c.F8)({
                            message: i18n.t("notification.aut_verify_numb")
                        })
                    } else if (n && !n.isConnected) try {
                        await n.connect()
                    } catch (s) {} else if ("true" === i()("#js-config").attr("data-is-mobile")) {
                        if ((0, r.lb)() && (i()(".js-bbar__buy.is-opened, .js-bbar__sell.is-opened, .js-bbar.is-opened, .js-bbar__toggle.is-opened").removeClass("is-opened"), !i()(".js-modal--signup").hasClass("is-hidden"))) {
                            i()(".js-modal--signup .js-modal__close").click();
                            let e = await fetch("/api/users/init_phantom_connect", {
                                method: "GET",
                                cache: "no-store"
                            }).then((e => e.json()));
                            if (e && e.success && e.url) window.location = e.url;
                            else {
                                let t = e.error || i18n.t("notification.error");
                                (0, c.F8)({
                                    message: t
                                })
                            }
                        }
                    } else(0, c.F8)({
                        message: i18n.t("notification.no_provider")
                    })
                },
                u = e => i18n.t("verify_msg", {
                    number: e
                }),
                f = async (e, t, n) => {
                    if (t) {
                        const o = new a.PublicKey(t),
                            s = await fetch("/api/users/auth", {
                                method: "POST",
                                headers: {
                                    "x-csrf-token": (0, r.PE)(),
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify({
                                    sig: e,
                                    signed_wallet_arr: Object.values(o.toBytes()),
                                    locale: i18n._locale
                                }),
                                credentials: "same-origin"
                            }).then((e => e.json()));
                        if (s && s.success) s.redirectTo ? window.location = s.redirectTo : window.location = (0, r.Xq)({
                            url: "/signup/welcome"
                        });
                        else {
                            let e = i18n.t("notification.error");
                            s.msg && (e = s.msg), n.html(e), (0, c.F8)({
                                message: e
                            })
                        }
                    } else(0, c.F8)({
                        message: i18n.t("notification.no_signer")
                    }), logger.log("smth wrong with signer ?")
                };
            i()(document).off("change", ".js-connect-terms").on("change", ".js-connect-terms", (function() {
                i()(this).is(":checked") ? i()(".js-connect-terms").prop("checked", !0) : i()(".js-connect-terms").removeAttr("checked")
            })), i()(document).off("click", ".js-login__btn").on("click", ".js-login__btn", (async function(e) {
                const t = i()(".js-connect-terms");
                if (t.length && !t.is(":checked")) return (0, c.F8)({
                    message: i18n.t("notification.accept_terms")
                }), void(void 0 !== i()(this).data("scrollToTop") && (0, r.s2)({
                    selector: "body"
                }));
                l(i()(this))
            })), i()(document).off("click", ".js-login-deeplink").on("click", ".js-login-deeplink", (async function(e) {
                const t = i()(".js-connect-terms");
                if (t.length && !t.is(":checked")) return (0, c.F8)({
                    message: i18n.t("notification.accept_terms")
                }), void(void 0 !== i()(this).data("scrollToTop") && (0, r.s2)({
                    selector: "body"
                }));
                let n = await fetch("/api/users/init_phantom_connect", {
                    method: "GET",
                    cache: "no-store"
                }).then((e => e.json()));
                if (n && n.success && n.url) window.location = n.url;
                else {
                    let e = n.error || i18n.t("notification.error");
                    (0, c.F8)({
                        message: e
                    })
                }
            })), window.solana || window.solflare || (i()(".js-signup__install").removeClass("u-d-none"), i()(".js-login__btn, .js-share__login").remove(), (0, r.lb)() ? i()(".js-login-deeplink").removeClass("u-d-none") : i()(".js-install-phantom").removeClass("u-d-none"))
        },
        3236: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.version = void 0, t.version = "6.6.7"
        },
        7143: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.zeroPadBytes = t.zeroPadValue = t.stripZerosLeft = t.dataSlice = t.dataLength = t.concat = t.hexlify = t.isBytesLike = t.isHexString = t.getBytesCopy = t.getBytes = void 0;
            const r = n(3244);

            function o(e, t, n) {
                if (e instanceof Uint8Array) return n ? new Uint8Array(e) : e;
                if ("string" === typeof e && e.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
                    const t = new Uint8Array((e.length - 2) / 2);
                    let n = 2;
                    for (let r = 0; r < t.length; r++) t[r] = parseInt(e.substring(n, n + 2), 16), n += 2;
                    return t
                }(0, r.assertArgument)(!1, "invalid BytesLike value", t || "value", e)
            }

            function s(e, t) {
                return o(e, t, !1)
            }

            function i(e, t) {
                return !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (("number" !== typeof t || e.length === 2 + 2 * t) && (!0 !== t || e.length % 2 === 0))
            }
            t.getBytes = s, t.getBytesCopy = function(e, t) {
                return o(e, t, !0)
            }, t.isHexString = i, t.isBytesLike = function(e) {
                return i(e, !0) || e instanceof Uint8Array
            };
            const c = "0123456789abcdef";

            function a(e) {
                const t = s(e);
                let n = "0x";
                for (let r = 0; r < t.length; r++) {
                    const e = t[r];
                    n += c[(240 & e) >> 4] + c[15 & e]
                }
                return n
            }

            function l(e, t, n) {
                const o = s(e);
                (0, r.assert)(t >= o.length, "padding exceeds data length", "BUFFER_OVERRUN", {
                    buffer: new Uint8Array(o),
                    length: t,
                    offset: t + 1
                });
                const i = new Uint8Array(t);
                return i.fill(0), n ? i.set(o, t - o.length) : i.set(o, 0), a(i)
            }
            t.hexlify = a, t.concat = function(e) {
                return "0x" + e.map((e => a(e).substring(2))).join("")
            }, t.dataLength = function(e) {
                return i(e, !0) ? (e.length - 2) / 2 : s(e).length
            }, t.dataSlice = function(e, t, n) {
                const o = s(e);
                return null != n && n > o.length && (0, r.assert)(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
                    buffer: o,
                    length: o.length,
                    offset: n
                }), a(o.slice(null == t ? 0 : t, null == n ? o.length : n))
            }, t.stripZerosLeft = function(e) {
                let t = a(e).substring(2);
                for (; t.startsWith("00");) t = t.substring(2);
                return "0x" + t
            }, t.zeroPadValue = function(e, t) {
                return l(e, t, !0)
            }, t.zeroPadBytes = function(e, t) {
                return l(e, t, !1)
            }
        },
        3244: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.assertPrivate = t.assertNormalize = t.assertArgumentCount = t.assertArgument = t.assert = t.makeError = t.isCallException = t.isError = void 0;
            const r = n(3236),
                o = n(3606);

            function s(e) {
                if (null == e) return "null";
                if (Array.isArray(e)) return "[ " + e.map(s).join(", ") + " ]";
                if (e instanceof Uint8Array) {
                    const t = "0123456789abcdef";
                    let n = "0x";
                    for (let r = 0; r < e.length; r++) n += t[e[r] >> 4], n += t[15 & e[r]];
                    return n
                }
                if ("object" === typeof e && "function" === typeof e.toJSON) return s(e.toJSON());
                switch (typeof e) {
                    case "boolean":
                    case "symbol":
                    case "number":
                        return e.toString();
                    case "bigint":
                        return BigInt(e).toString();
                    case "string":
                        return JSON.stringify(e);
                    case "object":
                        {
                            const t = Object.keys(e);
                            return t.sort(),
                            "{ " + t.map((t => `${s(t)}: ${s(e[t])}`)).join(", ") + " }"
                        }
                }
                return "[ COULD NOT SERIALIZE ]"
            }

            function i(e, t) {
                return e && e.code === t
            }

            function c(e, t, n) {
                {
                    const o = [];
                    if (n) {
                        if ("message" in n || "code" in n || "name" in n) throw new Error(`value will overwrite populated values: ${s(n)}`);
                        for (const e in n) {
                            const t = n[e];
                            o.push(e + "=" + s(t))
                        }
                    }
                    o.push(`code=${t}`), o.push(`version=${r.version}`), o.length && (e += " (" + o.join(", ") + ")")
                }
                let i;
                switch (t) {
                    case "INVALID_ARGUMENT":
                        i = new TypeError(e);
                        break;
                    case "NUMERIC_FAULT":
                    case "BUFFER_OVERRUN":
                        i = new RangeError(e);
                        break;
                    default:
                        i = new Error(e)
                }
                return (0, o.defineProperties)(i, {
                    code: t
                }), n && Object.assign(i, n), i
            }

            function a(e, t, n, r) {
                if (!e) throw c(t, n, r)
            }
            t.isError = i, t.isCallException = function(e) {
                return i(e, "CALL_EXCEPTION")
            }, t.makeError = c, t.assert = a, t.assertArgument = function(e, t, n, r) {
                a(e, t, "INVALID_ARGUMENT", {
                    argument: n,
                    value: r
                })
            }, t.assertArgumentCount = function(e, t, n) {
                null == n && (n = ""), n && (n = ": " + n), a(e >= t, "missing arguemnt" + n, "MISSING_ARGUMENT", {
                    count: e,
                    expectedCount: t
                }), a(e <= t, "too many arguemnts" + n, "UNEXPECTED_ARGUMENT", {
                    count: e,
                    expectedCount: t
                })
            };
            const l = ["NFD", "NFC", "NFKD", "NFKC"].reduce(((e, t) => {
                try {
                    if ("test" !== "test".normalize(t)) throw new Error("bad");
                    if ("NFD" === t) {
                        const e = String.fromCharCode(233).normalize("NFD");
                        if (e !== String.fromCharCode(101, 769)) throw new Error("broken")
                    }
                    e.push(t)
                } catch (n) {}
                return e
            }), []);
            t.assertNormalize = function(e) {
                a(l.indexOf(e) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
                    operation: "String.prototype.normalize",
                    info: {
                        form: e
                    }
                })
            }, t.assertPrivate = function(e, t, n) {
                if (null == n && (n = ""), e !== t) {
                    let e = n,
                        t = "new";
                    n && (e += ".", t += " " + n), a(!1, `private constructor; use ${e}from* methods`, "UNSUPPORTED_OPERATION", {
                        operation: t
                    })
                }
            }
        },
        3606: function(e, t) {
            function n(e, t, n) {
                const r = t.split("|").map((e => e.trim()));
                for (let s = 0; s < r.length; s++) switch (t) {
                    case "any":
                        return;
                    case "bigint":
                    case "boolean":
                    case "number":
                    case "string":
                        if (typeof e === t) return
                }
                const o = new Error(`invalid value for type ${t}`);
                throw o.code = "INVALID_ARGUMENT", o.argument = `value.${n}`, o.value = e, o
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineProperties = t.resolveProperties = void 0, t.resolveProperties = async function(e) {
                const t = Object.keys(e);
                return (await Promise.all(t.map((t => Promise.resolve(e[t]))))).reduce(((e, n, r) => (e[t[r]] = n, e)), {})
            }, t.defineProperties = function(e, t, r) {
                for (let o in t) {
                    let s = t[o];
                    const i = r ? r[o] : null;
                    i && n(s, i, o), Object.defineProperty(e, o, {
                        enumerable: !0,
                        value: s,
                        writable: !1
                    })
                }
            }
        },
        5420: function(e, t, n) {
            t.d5 = void 0;
            const r = n(7143),
                o = n(3244);

            function s(e, t, n, r, o) {
                if ("BAD_PREFIX" === e || "UNEXPECTED_CONTINUE" === e) {
                    let e = 0;
                    for (let r = t + 1; r < n.length && n[r] >> 6 === 2; r++) e++;
                    return e
                }
                return "OVERRUN" === e ? n.length - t - 1 : 0
            }

            function i(e, n) {
                null == n && (n = t.d5.error);
                const o = (0, r.getBytes)(e, "bytes"),
                    s = [];
                let i = 0;
                for (; i < o.length;) {
                    const e = o[i++];
                    if (e >> 7 === 0) {
                        s.push(e);
                        continue
                    }
                    let t = null,
                        r = null;
                    if (192 === (224 & e)) t = 1, r = 127;
                    else if (224 === (240 & e)) t = 2, r = 2047;
                    else {
                        if (240 !== (248 & e)) {
                            i += n(128 === (192 & e) ? "UNEXPECTED_CONTINUE" : "BAD_PREFIX", i - 1, o, s);
                            continue
                        }
                        t = 3, r = 65535
                    }
                    if (i - 1 + t >= o.length) {
                        i += n("OVERRUN", i - 1, o, s);
                        continue
                    }
                    let c = e & (1 << 8 - t - 1) - 1;
                    for (let a = 0; a < t; a++) {
                        let e = o[i];
                        if (128 != (192 & e)) {
                            i += n("MISSING_CONTINUE", i, o, s), c = null;
                            break
                        }
                        c = c << 6 | 63 & e, i++
                    }
                    null !== c && (c > 1114111 ? i += n("OUT_OF_RANGE", i - 1 - t, o, s, c) : c >= 55296 && c <= 57343 ? i += n("UTF16_SURROGATE", i - 1 - t, o, s, c) : c <= r ? i += n("OVERLONG", i - 1 - t, o, s, c) : s.push(c))
                }
                return s
            }

            function c(e, t) {
                null != t && ((0, o.assertNormalize)(t), e = e.normalize(t));
                let n = [];
                for (let r = 0; r < e.length; r++) {
                    const t = e.charCodeAt(r);
                    if (t < 128) n.push(t);
                    else if (t < 2048) n.push(t >> 6 | 192), n.push(63 & t | 128);
                    else if (55296 == (64512 & t)) {
                        r++;
                        const s = e.charCodeAt(r);
                        (0, o.assertArgument)(r < e.length && 56320 === (64512 & s), "invalid surrogate pair", "str", e);
                        const i = 65536 + ((1023 & t) << 10) + (1023 & s);
                        n.push(i >> 18 | 240), n.push(i >> 12 & 63 | 128), n.push(i >> 6 & 63 | 128), n.push(63 & i | 128)
                    } else n.push(t >> 12 | 224), n.push(t >> 6 & 63 | 128), n.push(63 & t | 128)
                }
                return new Uint8Array(n)
            }
            t.d5 = Object.freeze({
                error: function(e, t, n, r, s) {
                    (0, o.assertArgument)(!1, `invalid codepoint at offset ${t}; ${e}`, "bytes", n)
                },
                ignore: s,
                replace: function(e, t, n, r, i) {
                    return "OVERLONG" === e ? ((0, o.assertArgument)("number" === typeof i, "invalid bad code point for replacement", "badCodepoint", i), r.push(i), 0) : (r.push(65533), s(e, t, n))
                }
            })
        }
    }
]);
//# sourceMappingURL=5385-1ca39814bd8a4ef39df0.js.map