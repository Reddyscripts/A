(self.webpackChunkapp = self.webpackChunkapp || []).push([
    [9935], {
        7810: function(t, e, n) {
            "use strict";
            n.d(e, {
                A: function() {
                    return u
                }
            });
            var o = n(3320),
                r = n(1956),
                i = n(1971),
                s = n(8073),
                a = n(3608);
            let c = {};
            const l = {
                logLevel: "localhost:3000" === window.location.host ? "debug" : "error",
                protocol: "actioncable-v1-protobuf",
                encoder: new i.a
            };
            class u {#
                t;
                constructor(t, e) {
                    const n = {
                        cable: void 0,
                        channelName: null,
                        debug: !1
                    };
                    void 0 === e && logger.error("ActionCableObserver switcher is not defined: ", this.config.channelId), this.#t = e, this.config = { ...n,
                        ...t
                    }, this.config.websocketUrl = this.config.websocketUrl || (0, s.b8)(this.config);
                    let i = this.config.channelName;
                    if (this.channel = {
                            channel: i,
                            id: this.config.channelId
                        }, this.observers = [], this.#t) {
                        if (this.config.cable) this.cable = this.config.cable;
                        else {
                            if (!c[this.config.websocketUrl]) {
                                this.logger("INIT CABLE: ", this.config.channelName);
                                const t = a.A.get("ta_debug"),
                                    e = t ? r.Be : o.Be,
                                    n = t ? void 0 : l;
                                c[this.config.websocketUrl] = e(this.config.websocketUrl, n)
                            }
                            this.cable = c[this.config.websocketUrl]
                        }
                        this.cable.subscriptions.create(this.channel, {
                            connected: () => {
                                this.logger("CONNECTED: ", this.config.channelName), this.config.onConnect && this.config.onConnect()
                            },
                            disconnected: () => {
                                this.logger("DISCONNECTED: ", this.config.channelName)
                            },
                            received: t => {
                                this.logger(`received ${this.config.channelName}`, t), this.broadcast(t)
                            },
                            rejected: () => {
                                this.logger("REJECTED: ", this.config.channelName)
                            }
                        })
                    } else this.logger(`${this.config.channelName} is disabled`)
                }
                logger(...t) {
                    this.config.debug && logger.log(...t)
                }
                subscribe(t) {
                    this.#t && this.observers.push(t)
                }
                unsubscribe(t) {
                    this.#t && (this.observers = this.observers.filter((e => e !== t)))
                }
                broadcast(t) {
                    this.#t && this.observers.forEach((e => e(t)))
                }
            }
        },
        6145: function(t, e, n) {
            "use strict";
            n.d(e, {
                Dy: function() {
                    return v
                },
                R_: function() {
                    return k
                },
                Xx: function() {
                    return _
                },
                ew: function() {
                    return x
                },
                tf: function() {
                    return $
                }
            });
            var o = n(7810),
                r = n(1580),
                i = n(8073),
                s = n(3435),
                a = n(5479),
                c = n.n(a),
                l = n(37),
                u = n.n(l),
                d = (n(7983), n(707)),
                f = n(4330),
                h = n.n(f);
            let p = {};
            window.finishedTasks = p;
            let m = !1;
            const g = t => {
                if (!t.data) return;
                const e = c()(".js-task-table");
                if (!e.length) return;
                const {
                    purchases: n = []
                } = t.data;
                n.forEach((t => {
                    if (!t.id || "auto" !== t.kind) return;
                    const n = e.find(`.js-task-table__row[data-id="${t.id}"]`),
                        o = c()((({
                            symbol: t,
                            address: e,
                            status: n = "",
                            amount: o,
                            txHash: s,
                            poolId: a,
                            id: c
                        }) => {
                            const l = "executing" === n ? "active" : n;
                            return `\n    <div class="c-task-table__tr js-task-table__row" data-id="${c}">\n      <div class="c-task-table__td u-color-primary-ltr">\n        <a href="${a?(0,r.VV)(null,a):`${(0,i.o1)()}/account/${e}`}" target="_blank">\n          ${t||(0,r.Wr)(e)||""}\n        </a>\n      </div>\n\n      <div class="c-task-table__td u-d-flex u-align-content-center u-color-light-alt">\n        <span class="c-icon c-icon--base c-icon--net-symbol u-mr-xxs"></span>\n        ${o?(0,r.M2)(o,5):0}\n      </div>\n\n      <div class="c-task-table__td u-d-flex u-justify-content-between u-align-content-center" data-status="${l}">\n        ${l}\n        <div class="l-row l-row-gap--s u-align-content-center">\n          <div class="l-col-auto">\n            ${s?`\n                <a href="${(0,i.o1)()}/tx/${s}" target="_blank">\n                  <span class="c-icon c-icon--solscan c-task-table__icon"></span>\n                </a>\n              `:'<span class="c-icon c-icon--solscan is-disabled c-task-table__icon"></span>'}\n          </div>\n\n\n          <div class="l-col-auto">\n            <span class="c-icon c-icon--trash c-task-table__icon js-task-table__remove" data-id="${c}"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  `
                        })(t));
                    n.length && n.replaceWith(o)
                }))
            };
            async function w(t = 3) {
                let e, n;
                const o = c()(".js-generated-balance").text();
                if (t <= 0)[e, n] = await (0, r.MK)();
                else {
                    (0, i.cq)() && ([e, n] = await (0, r.MK)())
                }
                t > 0 && e && o && parseFloat(o) == e ? setTimeout((function() {
                    w(t - 1)
                }), 1500) : `${e}` && ((0, i.CI)({
                    showQuoteBalance: e
                }), c()(".js-generated-balance").html(e))
            }
            window.updateEthBalance = w;
            const b = async t => {
                    const e = await fetch(`/api/lp/refresh_p_l?pool_id=${t}`, {
                        cache: "no-store"
                    }).then((t => t.json()));
                    return e && e.plObj && ((0, r.IZ)(e.plObj, null, !0), c()("#js-token-show-portfolio").removeClass("is-hidden")), !0
                },
                y = async t => {
                    if (!t || !t.id) return;
                    const e = p[t.id];
                    if (!0 === e) return;
                    "number" === typeof e ? (p[t.id] = !0, clearTimeout(e)) : p[t.id] = !0;
                    const n = `${t.pool_id}` == (0, i.Lx)(),
                        {
                            status: o,
                            txHash: a,
                            symbol: l,
                            amount: f,
                            amountIn: h,
                            amountOut: g,
                            dir: b,
                            privateNode: y,
                            errorMsg: _,
                            token_amount: v,
                            token_decimals: $,
                            id: x,
                            generatedWallet: k,
                            address: j
                        } = t,
                        C = document.querySelector(`.iziToast#flash-${x}`);
                    if (C && u().hide({
                            transitionOut: "fadeOutUp"
                        }, C), "success" === o) {
                        let e = function({
                            dir: t,
                            symbol: e,
                            amount: n,
                            amountIn: o,
                            amountOut: i,
                            token_amount: s,
                            generatedWallet: a
                        }) {
                            let c = "";
                            if (["sell", "buy"].includes(t) && a) {
                                c = `${window._genWallets?.find((({generated_wallet:t})=>t===a))?.name||(0,r.Wr)(a)} - `
                            }
                            if ("sell" === t) {
                                let t;
                                return i && (t = (0, r.aI)(parseFloat((i / Math.pow(10, r.Iq)).toFixed(8)).toString())), t ? i18n.t("notification.success_sold_with_val", {
                                    amt: t,
                                    symbol: e,
                                    prefix: c
                                }) : i18n.t("notification.success_sold_without_val", {
                                    symbol: e,
                                    prefix: c
                                })
                            }
                            if ("buy" === t) {
                                let t;
                                return o ? t = (0, r.aI)(parseFloat((o / Math.pow(10, r.Iq)).toFixed(8)).toString()) : n && (t = (0, r.aI)(parseFloat(n.toFixed(8)).toString())), t ? i18n.t("notification.success_bought_with_val", {
                                    amt: t,
                                    symbol: e,
                                    prefix: c
                                }) : i18n.t("notification.success_bought_without_val", {
                                    symbol: e,
                                    prefix: c
                                })
                            }
                            if ("deposit" === t) return i18n.t("notification.success_deposit", {
                                amount: n
                            });
                            if ("withdraw" === t) return i18n.t("notification.success_withdraw", {
                                amount: n
                            });
                            if ("close_accs" === t) {
                                const t = (0, r.aI)(parseFloat((i / Math.pow(10, r.Iq)).toFixed(8)).toString());
                                return i18n.t("notification.success_close_accs", {
                                    amount: t
                                })
                            }
                            return i18n.t("notification.success_transaction")
                        }({
                            dir: b,
                            symbol: l,
                            amount: f,
                            amountIn: h,
                            amountOut: g,
                            token_amount: v,
                            generatedWallet: k
                        });
                        if ((0, s.ag)({
                                id: x,
                                timeout: 3e3,
                                closeOnClick: !1,
                                message: a ? `<a href="${(0,i.o1)()}/tx/${a}" target="_blank">${e}</a>` : e
                            }), ["buy", "sell", "deposit", "withdraw", "close_accs"].indexOf(b) >= 0 && (document.hidden ? m = !0 : setTimeout((() => {
                                try {
                                    w(3)
                                } catch (t) {
                                    logger.log("Balance update failed", t)
                                }
                            }), 2e3)), n && ["buy", "sell"].indexOf(b) >= 0) {
                            let e = parseInt((0, i.Oy)());
                            if (e += 1, (0, i.CI)({
                                    showPurchasesCount: String(e)
                                }), c()(document).trigger("datafeed:confirm", {
                                    type: "confirm",
                                    item: t
                                }), c()(".js-tabs__content .js-sell-first-option").each((function() {
                                    const t = c()(this).closest(".js-tabs__content"),
                                        n = t.find(".js-wdd"),
                                        o = t.find(".js-sell-first-option"),
                                        i = n[0]._walletsDropdown.getSelectedAddresses(),
                                        {
                                            investedEth: s
                                        } = (0, d.pw)(i);
                                    1 === e && s > 0 && i.length <= 1 ? o.attr("data-value", "initial").find(".js-price-form__btn__label").text("initial") : o.each((function() {
                                        const t = c()(this).attr("data-preset");
                                        if ((0, r.gD)(t)) return;
                                        const e = window.gasSettings.buy_sell_amts[`preset${t}`].sell[0];
                                        c()(this).attr("data-value", `${e}`).find(".js-price-form__btn__label").text(`${e}%`)
                                    }))
                                })), (0, i.Lx)()) {
                                const t = (0, d.ZH)();
                                t && await t.fetchPL((0, i.Lx)(), k), await (0, r.m5)({
                                    tokenAddress: j,
                                    tokenDecimals: $,
                                    wallets: k,
                                    is_program_2022: (0, i.OW)()
                                })
                            }
                        }
                    } else if ("failed" === o) {
                        let t = function({
                            dir: t,
                            symbol: e,
                            errorMsg: n,
                            privateNode: o,
                            amount: i,
                            txHash: s,
                            generatedWallet: a
                        }) {
                            let c = "",
                                l = "";
                            if (["sell", "buy"].includes(t) && a) {
                                l = `${window._genWallets?.find((({generated_wallet:t})=>t===a))?.name||(0,r.Wr)(a)} - `
                            }
                            let u = {};
                            if ("deposit" === t) return {
                                msgTxt: i18n.t("notification.deposit_failed", {
                                    amount: i
                                }),
                                data: u
                            };
                            if ("withdraw" === t) return {
                                msgTxt: i18n.t("notification.withdraw_failed", {
                                    amount: i
                                }),
                                data: u
                            };
                            n && (n.indexOf("frozen") >= 0 ? c = " Account frozen by dev" : n.indexOf("insufficient") >= 0 ? c = " Insufficient fund" : (n.indexOf("slippage") >= 0 || n.indexOf("Slippage") >= 0) && (c = " Exceeds desired slippage limit"));
                            if (e) return {
                                msgTxt: i18n.t("notification.tr_fail", {
                                    symbol: e,
                                    reason: c,
                                    prefix: l
                                }),
                                data: u
                            };
                            if (n) return {
                                msgTxt: `${l}${n}`,
                                data: u
                            };
                            return {
                                msgTxt: i18n.t("notification.error"),
                                data: u
                            }
                        }({
                            dir: b,
                            symbol: l,
                            errorMsg: _,
                            privateNode: y,
                            amount: f,
                            txHash: a,
                            generatedWallet: k
                        });
                        console.log(t);
                        let e, {
                            msgTxt: n,
                            data: o
                        } = { ...t
                        };
                        o && o.insufficientGasDetails && o.insufficientGasDetails.tx_cost ? (e = "/en/wallets?tab=1", n = `<div class="u-lh-normal">\n                    <div class="u-mb-xxs" >${n}</div>\n\n                    <table class="u-m-0">\n                      <tr>\n                        <td>${i18n.t("notification.tx_val_with_gas")}</td>\n                        <td class="u-pl-xxs">${o.insufficientGasDetails.tx_cost} SOL</td>\n                      </tr>\n                      <tr>\n                        <td>${i18n.t("notification.wallet_balance")}</td>\n                        <td class="u-pl-xxs">${o.insufficientGasDetails.balance} SOL</td>\n                      </tr>\n                      <tr>\n                        <td>${i18n.t("notification.still_require")}</td>\n                        <td class="u-pl-xxs">${o.insufficientGasDetails.overshot} SOL</td>\n                      </tr>\n                    </table>\n\n                    <div class="u-mt-xxs"><b>${i18n.t("notification.deposit_more_eth")}.</b></div>\n                  </div>\n                  `) : !y && a && (e = `${(0,i.o1)()}/tx/${a}`), (0, s.F8)({
                            id: x,
                            timeout: 3e3,
                            closeOnClick: !0,
                            message: e ? `<a href="${e}" target="_blank">${n}</a>` : n
                        })
                    }
                    c()(document).trigger("purchase:receiveEvent", [{
                        data: t
                    }])
                };
            const _ = async (t, {
                    onFinished: e,
                    onFailed: n,
                    onSuccess: o
                } = {}) => {
                    try {
                        if (!t) return;
                        async function i(t, r) {
                            if (r > 2) return;
                            const s = await fetch(`/api/users/recheck_st?id=${t}`, {
                                method: "GET",
                                cache: "no-store"
                            }).then((t => t.json()));
                            return s && s.task && ["success", "failed"].includes(s.task.status) && !0 !== p[s.task.id] ? (y(s.task), e && e(s.task), "success" === s.task.status && o && o(s.task), "failed" === s.task.status && n && n(s.task)) : p[t] = setTimeout((async function() {
                                await i(t, r + 1)
                            }), 5e3), s
                        }
                        p[t] = setTimeout((async function() {
                            await i(t, 0)
                        }), 5e3)
                    } catch (r) {
                        console.error(r)
                    }
                },
                v = (t, {
                    timeoutMsg: e,
                    disableWatcher: n,
                    disableCountdown: o
                } = {}) => {
                    if (t.ignored) return;
                    let i = t.ids;
                    i || (0, r.gD)(t.id) || (i = [t.id]);
                    let a = t.successWallets || {};
                    i.forEach((t => {
                        let i = a[t],
                            c = "";
                        if (i) {
                            c = `${window._genWallets?.find((({generated_wallet:t})=>t===i))?.name||(0,r.Wr)(i)} - `
                        }
                        o || (0, s.OA)({
                            message: i18n.t("tr_executing", {
                                prefix: c
                            }),
                            id: t,
                            timeout: e || r.hj
                        }), n || _(t)
                    })), t.failedWallets && t.failedWallets.length > 0 && (0, r.Xe)(t.failedWallets)
                },
                $ = t => {
                    try {
                        const e = window._submitMap[t.requestId];
                        if (!e) return;
                        t.failedWallets ? .length && t.failedWallets.forEach((n => {
                            (0, s._b)(e[n.wallet]), delete window._submitMap[t.requestId][n.wallet]
                        })), t.success || (Object.values(e).forEach((t => {
                            (0, s._b)(t)
                        })), delete window._submitMap[t.requestId]), t.successWallets && Object.entries(t.successWallets).forEach((([t, n]) => {
                            const o = e[n];
                            o && (e[n] = t, c()(`.flash-${o}`).attr("id", `flash-${t}`))
                        }))
                    } catch (e) {
                        console.error(e)
                    }
                },
                x = (t, e) => {
                    try {
                        e.forEach((e => {
                            const n = h()();
                            window._submitMap[t][e] = n
                        }));
                        const n = Object.entries(window._submitMap[t]).reduce(((t, [e, n]) => ({ ...t,
                            [n]: e
                        })), {});
                        v({
                            ids: Object.keys(n),
                            successWallets: n
                        }, {
                            disableWatcher: !0
                        })
                    } catch (n) {
                        console.error(n)
                    }
                };
            window.TxSuccessCallback = v, window.watchTxProcess = _;
            const k = t => (window._userChannel || (window._userChannel = window._userChannel || new o.A({
                channelId: t,
                channelName: "UsersChannel"
            }, (0, i.gL)())), window._userChannel);
            e.Ay = ({
                id: t,
                type: e
            }) => {
                if (window._userChannel) return window._userChannel;
                const n = k(t);
                return window._userChannel = n, n.subscribe(((t = {}) => {
                    if ((0, i.Lx)() && t.portfolioNew ? .data ? .poolId === (0, i.Lx)() && c()(document).trigger("portfolio:fetchPL", [{
                            poolId: (0, i.Lx)()
                        }]), "dashboard" === e && g(t), "show" === e && (t => {
                            if (!t.data) return;
                            const {
                                watch: e = []
                            } = t.data, n = new Intl.NumberFormat("en-US", {
                                style: "percent",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }), o = new Intl.NumberFormat("en-US", {
                                style: "percent",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            });
                            e.forEach((async t => {
                                let e = t.poolId,
                                    i = t.fiveMChange,
                                    s = c()(`.js-watch-token[data-pool-id=${e}]`);
                                if (s) {
                                    let e, a;
                                    if (isNaN(parseFloat(i))) e = "", i = "N/A";
                                    else if (0 == parseFloat(i)) e = "";
                                    else {
                                        let t = "";
                                        parseFloat(i) > 0 && (t = "+"), i = i > 1e3 ? o.format(i / 100) : n.format(i / 100), i = `${t}${i}`, e = parseFloat(i) > 0 ? "u-color-green" : "u-color-red"
                                    }
                                    a = isNaN(parseFloat(t.mktCap)) ? "N/A" : (0, r.gp)({
                                        numb: t.mktCap,
                                        fractionLength: 2,
                                        unit: "$"
                                    }), s.find(".js-mktcap-watch").text(a);
                                    let c = s.find("span.js-fivem-watch");
                                    c.removeClass("u-color-green u-color-red").addClass(e), c.text(i)
                                }
                            }))
                        })(t), t && t.refresh_holdings)(async t => {
                        if (!t.data) return;
                        const e = t.data || [],
                            n = (0, i.Lx)();
                        if (n)
                            for (let o = 0; o < e.length; o++) {
                                const t = e[o];
                                if (t && t.id && `${t.pool_id}` == n) {
                                    await b(n);
                                    break
                                }
                            }
                    })(t.refresh_holdings);
                    else if (t && t.portfolio_cleaning && window.location.pathname.indexOf("my_holdings") >= 0) c()(".js-cleaning-progress-warning").addClass("is-hidden");
                    else if ((async t => {
                            if (!t.data) return;
                            const {
                                purchases: e = []
                            } = t.data;
                            for (let n = 0; n < e.length; n++) await y(e[n])
                        })(t), ((t = {}) => {
                            const {
                                genNotification: e
                            } = t;
                            if (!e) return;
                            let {
                                action: n,
                                msg: o,
                                variables: i
                            } = e;
                            const s = c()(".js-top-banner");
                            if ("show" === n) {
                                if (!(0, r.gD)(o)) {
                                    if (i)
                                        for (let [t, e] of Object.entries(i)) {
                                            if ("timestamp" === t) {
                                                let t = new Date(1e3 * e);
                                                e = `${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}`
                                            }
                                            o = o.replaceAll(`{${t}}`, e)
                                        }
                                    s.html(o)
                                }
                                s.removeClass("is-hidden")
                            } else "hide" === n && s.addClass("is-hidden")
                        })(t), ((t = {}) => {
                            const {
                                alertNotif: e
                            } = t;
                            e && e.data && e.data.forEach((t => {
                                let {
                                    content: e,
                                    timeout: n,
                                    url: o,
                                    icon_color: r,
                                    icon: i,
                                    img: a,
                                    id: c,
                                    handle: l
                                } = t;
                                (0, s.Th)({
                                    alertId: c,
                                    iconPosition: "session" === l ? "center" : "",
                                    message: e,
                                    link: o,
                                    icon: i,
                                    iconColor: r,
                                    img: a,
                                    timeout: n
                                })
                            }))
                        })(t), (t => {
                            t.orders && t.orders.data && t.orders.data.forEach((t => {
                                if (t.attributes && "executing" === t.attributes.status) {
                                    let e;
                                    switch (t.attributes.kind) {
                                        case "take_profit":
                                            e = `${i18n.t("take_profit")} `;
                                            break;
                                        case "stop_loss":
                                            e = `${i18n.t("stop_loss")} `;
                                            break;
                                        case "buy_dip":
                                            e = `${i18n.t("buy_dip")} `;
                                            break;
                                        default:
                                            e = ""
                                    }(0, s.ag)({
                                        timeout: 3e3,
                                        closeOnClick: !1,
                                        message: i18n.t("notification.order_triggered", {
                                            kind_name: e,
                                            symbol: t.attributes.symbol
                                        })
                                    })
                                }
                            }))
                        })(t), "pincode" === e && window.location.href.indexOf("/mobile_login") >= 0 && t && t.data && t.data.pincode) {
                        const t = c()("#js-pin-code");
                        let e = t.attr("data-pin");
                        t.text(e)
                    }
                })), window.document.onvisibilitychange = t => {
                    if (!document.hidden && m) {
                        m = !1;
                        try {
                            w(3)
                        } catch (e) {
                            logger.log("Balance update failed", e)
                        }
                    }
                }, n
            }
        },
        1580: function(t, e, n) {
            "use strict";
            n.d(e, {
                AF: function() {
                    return vt
                },
                An: function() {
                    return P
                },
                Az: function() {
                    return h
                },
                D1: function() {
                    return Y
                },
                Dk: function() {
                    return dt
                },
                E1: function() {
                    return St
                },
                EG: function() {
                    return x
                },
                Em: function() {
                    return kt
                },
                Er: function() {
                    return k
                },
                Ex: function() {
                    return $
                },
                HT: function() {
                    return $t
                },
                IZ: function() {
                    return st
                },
                I_: function() {
                    return m
                },
                Im: function() {
                    return ot
                },
                Iq: function() {
                    return _
                },
                Kg: function() {
                    return K
                },
                LG: function() {
                    return Nt
                },
                Le: function() {
                    return Tt
                },
                M2: function() {
                    return X
                },
                MK: function() {
                    return _t
                },
                O0: function() {
                    return jt
                },
                Ok: function() {
                    return Ut
                },
                PE: function() {
                    return A
                },
                Pu: function() {
                    return G
                },
                Q1: function() {
                    return S
                },
                Ro: function() {
                    return J
                },
                SH: function() {
                    return y
                },
                ST: function() {
                    return Pt
                },
                SW: function() {
                    return F
                },
                Sr: function() {
                    return w
                },
                St: function() {
                    return At
                },
                U9: function() {
                    return v
                },
                Uu: function() {
                    return mt
                },
                VV: function() {
                    return et
                },
                Vl: function() {
                    return p
                },
                Wr: function() {
                    return T
                },
                Xe: function() {
                    return wt
                },
                Xm: function() {
                    return it
                },
                Xq: function() {
                    return C
                },
                YQ: function() {
                    return V
                },
                ZH: function() {
                    return Dt
                },
                ZN: function() {
                    return D
                },
                aI: function() {
                    return q
                },
                aj: function() {
                    return Ft
                },
                dm: function() {
                    return W
                },
                fL: function() {
                    return b
                },
                fp: function() {
                    return tt
                },
                gD: function() {
                    return R
                },
                gp: function() {
                    return Q
                },
                hU: function() {
                    return Bt
                },
                hj: function() {
                    return g
                },
                kb: function() {
                    return pt
                },
                lW: function() {
                    return ft
                },
                lb: function() {
                    return E
                },
                m3: function() {
                    return H
                },
                m5: function() {
                    return yt
                },
                mN: function() {
                    return Wt
                },
                nG: function() {
                    return Mt
                },
                px: function() {
                    return bt
                },
                q2: function() {
                    return j
                },
                qE: function() {
                    return I
                },
                qW: function() {
                    return xt
                },
                qr: function() {
                    return B
                },
                rr: function() {
                    return O
                },
                s2: function() {
                    return ct
                },
                sA: function() {
                    return ut
                },
                sJ: function() {
                    return at
                },
                sg: function() {
                    return nt
                },
                sv: function() {
                    return Et
                },
                t2: function() {
                    return Ot
                },
                t_: function() {
                    return L
                },
                v1: function() {
                    return lt
                },
                vC: function() {
                    return Ct
                },
                wk: function() {
                    return U
                },
                xQ: function() {
                    return z
                },
                xq: function() {
                    return It
                },
                z9: function() {
                    return Lt
                }
            });
            var o = n(5479),
                r = n.n(o),
                i = n(8951),
                s = n(3435),
                a = n(8073),
                c = n(3617),
                l = n(5353),
                u = n(6145),
                d = n(6680);
            const {
                PublicKey: f
            } = n(7515), h = 999e15, p = .01, m = 3e4, g = 16e3, w = 1e9, b = 5e-6, y = {
                raydium_amm: 0,
                raydium_clmm: 1,
                orca_whirlpool: 2,
                meteora_amm: 3,
                meteora_dlmm: 4,
                raydium_cpmm: 5,
                pump: 6,
                moonshot: 7,
                makenow: 9,
                memelive: 10
            }, _ = 9, v = t => new c.A(t).dividedBy(new c.A(1e9)).toNumber(), $ = {
                discover: 1,
                trending: 2,
                memescope: 3
            };
            let x = new Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 6,
                    maximumFractionDigits: 6
                }),
                k = new Intl.NumberFormat("en-US", {
                    minimumFractionDigits: 4,
                    maximumFractionDigits: 4
                }),
                j = new Intl.NumberFormat("en-US", {
                    style: "percent",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
            const C = t => {
                    let {
                        prefix: e,
                        url: n
                    } = t;
                    return e && (n = (0, l.A)(e, n)), (0, l.A)("/", (0, a.JK)(), n)
                },
                E = () => window.innerWidth < 920,
                F = (t, e, n = !1) => {
                    const o = n ? "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb" : "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
                    if (!t || !e) return null;
                    try {
                        return `${(0,d.Xt)(new f(e),new f(t),!1,new f(o))}`
                    } catch (r) {
                        return console.error(r), null
                    }
                },
                I = (t, e, n = !1) => {
                    if (!t || !e) return null;
                    try {
                        return t.map((t => F(t, e, n)))
                    } catch (o) {
                        return console.error(o), null
                    }
                },
                O = () => /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                T = (t = "", e = 6, n = 4) => t && t.length > e + n ? `${t.slice(0,e)}...${t.slice(-n)}` : t,
                A = () => document.head.querySelector("meta[name=csrf-token]") ? .content,
                S = async () => {
                    if (window.newAlerts) {
                        let t = await fetch("/api/alerts", {
                            cache: "no-store"
                        }).then((t => t.json()));
                        t && t.data && t.data.forEach((t => {
                            let e = t.attributes || t;
                            (0, s.Th)({
                                alertId: e.id,
                                iconPosition: "session" === e.handle ? "center" : "",
                                message: e.content,
                                link: e.url,
                                icon: e.icon,
                                iconColor: e.iconColor,
                                img: e.img,
                                timeout: e.timeout
                            })
                        }))
                    }
                };
            async function D(t) {
                return await _t()
            }

            function P() {
                r()(".js-timestamp").each(((t, e) => {
                    let n = r()(e),
                        o = parseInt(n.data("timestamp")),
                        i = new Date(1e3 * o),
                        s = String(i.getMinutes()).padStart(2, "0"),
                        a = String(i.getHours()).padStart(2, "0"),
                        c = String(i.getMonth() + 1).padStart(2, "0"),
                        l = String(i.getDate()).padStart(2, "0");
                    n.text(`${i.getFullYear()}-${c}-${l}@${a}:${s}`)
                }))
            }
            const M = (t, e) => {
                    let n;
                    return n = 12 * (e.getFullYear() - t.getFullYear()), n -= t.getMonth(), n += e.getMonth(), e.getDate() < t.getDate() && (n -= 1), n <= 0 ? 0 : n
                },
                N = ({
                    start: t,
                    end: e
                } = {}) => {
                    const n = t instanceof Date ? t : new Date(t),
                        o = e instanceof Date ? e : new Date(e),
                        r = o.getTime() - n.getTime();
                    return {
                        years: o.getFullYear() - n.getFullYear(),
                        months: M(n, o),
                        days: Math.floor(r / 864e5),
                        hours: Math.floor(r / 36e5),
                        minutes: Math.floor(r / 6e4),
                        seconds: Math.floor(r / 1e3)
                    }
                },
                W = t => {
                    let e = N({
                        start: t,
                        end: (new Date).getTime()
                    });
                    0 === Math.floor(e.days / 365) && e.years >= 1 && (e.years -= 1);
                    const n = [
                        ["y", e.years],
                        ["mo", e.months],
                        ["d", e.days],
                        ["h", e.hours],
                        ["m", e.minutes],
                        ["s", e.seconds]
                    ];
                    let o = n.findLastIndex((([t, e]) => 0 === e));
                    if (5 === o) return i18n.t("time.just_now");
                    const r = n.slice(o + 1, 6);
                    let i = [];
                    return r.forEach((t => {
                        if (!(i.length >= 2) && ("h" === t[0] && (t[1] = t[1] % 24), "m" === t[0] && (t[1] = t[1] % 60), "s" === t[0] && (t[1] = t[1] % 60), "d" === t[0] && (t[1] = t[1] - 365 * e.years - Math.floor(30.44 * e.months)), "mo" === t[0] && (t[1] = t[1] % 12), t[1] > 0)) {
                            let e = i18n.t(`time.${t[0]}`);
                            i.push(`${t[1]}${e}`)
                        }
                    })), i.join(" ")
                },
                L = t => {
                    const e = (new Date).getTime() - t;
                    let n = Math.floor(e / 6e4),
                        o = Math.floor(e / 36e5),
                        r = Math.floor(e / 1e3);
                    const i = [
                        ["d", Math.floor(e / 864e5)],
                        ["h", o],
                        ["m", n],
                        ["s", r]
                    ];
                    let s = i.findLastIndex((([t, e]) => 0 === e));
                    if (3 === s) return i18n.t("time.just_now");
                    const a = i[s + 1];
                    n %= 60, o %= 24;
                    const c = i18n.t(`time.${a[0]}`);
                    return "d" === a[0] && o > 0 ? `${a[1]}${c} ${o}${i18n.t("time.h")}` : "h" === a[0] && n > 0 ? `${a[1]}${c} ${n}${i18n.t("time.m")}` : `${a[1]}${c}`
                },
                B = (t, e = (new Date).getTime(), {
                    disablePrefix: n,
                    double: o
                } = {}) => {
                    const r = e > t || n ? "" : i18n.t("time.ago"),
                        i = {
                            seconds: `${i18n.t("time.s")}${r}`,
                            minutes: `${i18n.t("time.m")}${r}`,
                            hours: `${i18n.t("time.h")}${r}`,
                            days: `${i18n.t("time.d")}${r}`,
                            months: `${i18n.t("time.mth")}${r}`,
                            years: `${i18n.t("time.y")}${r}`
                        },
                        s = N({
                            start: t,
                            end: e
                        }),
                        a = Object.entries(s);
                    let c = a.findLastIndex((([t, e]) => 0 === e));
                    if (-1 === c && (c = 0), c === a.length - 1) return i18n.t("time.just_now");
                    const l = a[c + 1];
                    let u = `${l[1]}${i[l[0]]}`;
                    if (a[c + 2] && o) {
                        const t = a[c + 2];
                        u += `${u}${t[1]}${i[t[0]]}`
                    }
                    return u
                },
                U = t => Intl.NumberFormat("en", {
                    notation: "compact"
                }).format(t),
                q = t => {
                    let e = "";
                    "-" == (t += "").charAt(0) && (t = t.substring(1), e = "-");
                    let n = t.split(/[e]/gi);
                    if (n.length < 2) return e + t;
                    let o = ".",
                        r = n[0],
                        i = +n[1],
                        s = (r = r.replace(/^0+/, "")).replace(o, ""),
                        a = r.split(o)[1] ? r.indexOf(o) + i : s.length + i,
                        c = a - s.length,
                        l = "" + BigInt(`${s}`);
                    return s = i >= 0 ? c >= 0 ? l + "0".repeat(c) : u() : a <= 0 ? "0." + "0".repeat(Math.abs(a)) + l : u(), c = s.split(o), (0 == c[0] && 0 == c[1] || 0 == +s && 0 == +l) && (s = 0), e + s;

                    function u() {
                        return s.replace(new RegExp(`^(.{${a}})(.)`), `$1${o}$2`)
                    }
                },
                H = (t, {
                    fractionLength: e = 5
                } = {}) => parseFloat(t) > 1e3 ? (t = parseFloat(t)) > h ? ">999Q" : `${U(t)}` : `${K(t,e)}`,
                G = (t, e) => {
                    (0, a.gL)() && fetch("/api/users/update_show_page_conf", {
                        method: "POST",
                        headers: {
                            "x-csrf-token": A(),
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({
                            key: t,
                            value: e
                        }),
                        credentials: "same-origin"
                    }).then((t => t.json()))
                },
                V = (t, e) => {
                    if (!(0, a.gL)() || !t && "myHoldings" !== e) return;
                    const n = {
                        memescope: "/api/memescope/update_selected_wallets",
                        myHoldings: "/api/my_holdings/update_selected_wallets",
                        default: "/api/users/update_selected_wallets"
                    };
                    fetch(e && n[e] ? n[e] : n.default, {
                        method: "POST",
                        headers: {
                            "x-csrf-token": A(),
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({
                            wallets: Array.isArray(t) ? t.join(",") : t
                        }),
                        credentials: "same-origin"
                    }).then((t => t.json()))
                },
                Q = ({
                    numb: t,
                    defaultVal: e,
                    unit: n,
                    fractionLength: o
                }) => {
                    R(o) && (o = 7), n || = "";
                    let r = "$" == n ? n : "",
                        i = "$" != n ? n : "";
                    return e || = "N/A", R(t) || isNaN(t) ? e : parseFloat(t) > 1e3 ? (t = parseFloat(t)) > h ? ">999Q" : `${r}${U(t)}${i}` : `${r}${K(t,o)}${i}`
                },
                z = ({
                    numb: t,
                    defaultVal: e,
                    unit: n,
                    fractionLength: o
                }) => {
                    R(o) && (o = 2), e || = "N/A", n || = "";
                    let r = "$" == n ? n : "",
                        i = "$" != n ? n : "";
                    if (R(t) || isNaN(t)) return e; {
                        let e;
                        switch (`${q(parseInt(t))}`.length) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                e = Z(t, o);
                                break;
                            case 4:
                            case 5:
                            case 6:
                                e = `${Z(t/1e3,o)}K`;
                                break;
                            case 7:
                            case 8:
                            case 9:
                                e = `${Z(t/1e6,o)}M`;
                                break;
                            case 10:
                            case 11:
                            case 12:
                                e = `${Z(t/1e9,o)}B`;
                                break;
                            case 13:
                            case 14:
                            case 15:
                                e = `${Z(t/1e12,o)}T`;
                                break;
                            case 16:
                            case 17:
                            case 18:
                                e = `${Z(t/1e15,o)}Q`;
                                break;
                            default:
                                e = ">999Q"
                        }
                        return `${r}${e}${i}`
                    }
                },
                J = t => "number" === typeof t && t.toString().length < 13 ? 1e3 * t : t,
                K = (t, e = 7) => {
                    const n = {
                        0: "\u2080",
                        1: "\u2081",
                        2: "\u2082",
                        3: "\u2083",
                        4: "\u2084",
                        5: "\u2085",
                        6: "\u2086",
                        7: "\u2087",
                        8: "\u2088",
                        9: "\u2089",
                        10: "\u2081\u2080",
                        11: "\u2081\u2081",
                        12: "\u2081\u2082",
                        13: "\u2081\u2083",
                        14: "\u2081\u2084",
                        15: "\u2081\u2085",
                        16: "\u2081\u2086",
                        17: "\u2081\u2087",
                        18: "\u2081\u2088",
                        19: "\u2081\u2089"
                    };
                    if (!t) return t;
                    let o, r;
                    if (t = "string" === typeof t ? parseFloat(t) : t, t = q(parseFloat(t.toFixed(18)).toString()), [o, r] = t.split("."), r && r.length > 2) {
                        let t = "";
                        return r.match(/([0-9])\1*/g).forEach((e => {
                            let o = e.length;
                            t = o > 2 ? t.concat(`${e[0]}${n[o]}`) : t.concat(e)
                        })), r = t.slice(0, e), e > 0 ? `${o}.${r}` : `${o}`
                    }
                    return t
                },
                R = t => null == t,
                Y = (t, e, {
                    formatter: n,
                    container: o,
                    triggerUpdate: i = !0
                } = {}) => {
                    if (void 0 !== e) {
                        (o || r()(document)).find(`[data-cable-val="${t}"]`).each((function() {
                            let n = e;
                            const {
                                prefix: o,
                                suffix: i
                            } = r()(this).data();
                            let s;
                            s = ["mktCapVal"].indexOf(t) >= 0 ? z({
                                numb: n,
                                fractionLength: 2,
                                unit: o || i
                            }) : Q({
                                numb: n,
                                fractionLength: 6,
                                unit: o || i
                            }), r()(this).attr("data-value", e), r()(this).html(s)
                        })), i && r()(document).trigger("cableValue:update", [{
                            [t]: e
                        }])
                    }
                },
                X = (t, e = 6) => R(t) ? t : parseFloat(parseFloat(t).toFixed(e)),
                Z = (t, e = 6) => {
                    if (R(t)) return t; {
                        let n = Math.trunc(t * Math.pow(10, e)) / Math.pow(10, e);
                        return parseFloat(n).toFixed(e)
                    }
                },
                tt = (t, e) => {
                    const n = e || (0, a.Dr)();
                    return (0, l.A)(`https://photon${(0,a.YG)()?"-staging":""}${n&&"eth"!==n?`-${n}`:""}.tinyastro.io`, t || "")
                },
                et = (t, e) => e ? `/${(0,a.JK)()}/lp/pool_redirect?id=${e}` : t ? `/${(0,a.JK)()}/lp/${t}?handle=${(0,a.ay)()}` : void 0;

            function nt(t, e = 300) {
                let n;
                return (...o) => {
                    clearTimeout(n), n = setTimeout((() => {
                        t.apply(this, o)
                    }), e)
                }
            }
            const ot = t => 0 === Object.keys(t).length,
                rt = t => null !== t && "object" === typeof t,
                it = (t, {
                    removeFalsy: e,
                    keepZero: n,
                    removeEmptyArray: o
                } = {}) => {
                    try {
                        return Object.entries(t).reduce(((t, [r, i]) => rt(i) && ot(i) || e && !i && (!n || 0 !== i) || void 0 === i || null === i || o && Array.isArray(i) && 0 === i.length ? t : { ...t,
                            [r]: i
                        }), {})
                    } catch (r) {
                        return logger.error(r), t
                    }
                },
                st = (t, e, n = !0) => {
                    let o, i, s, a, c = r()("#js-portfolio-config"),
                        l = r()("#js-token-show-portfolio"),
                        u = !0,
                        d = !1;
                    if (n && t && (parseFloat(t.invested_eth) > 0 || parseFloat(t.remaining) > 0)) {
                        o = t.remaining_eth, i = t.pl, s = t.pl_eth;
                        let e = t.sold_eth;
                        a = t.invested_eth, c.attr("data-portfolio-invested-eth", a), c.attr("data-portfolio-sold-eth", e), c.attr("data-portfolio-remaining", t.remaining), l.find(".js-invested-eth").text(x.format(a)), d = !0, l.find(".js-sold-eth").text(x.format(e))
                    } else {
                        a = parseFloat(c.attr("data-portfolio-invested-eth"));
                        let t = parseFloat(c.attr("data-portfolio-remaining"));
                        if (a > 0 || t > 0)
                            if (t > 0) {
                                o = parseFloat(e * t);
                                let n = parseFloat(c.attr("data-portfolio-sold-eth"));
                                a > 0 && (s = n + o - a, i = s / a * 100)
                            } else u = !1;
                        else u = !1
                    }
                    if (u) {
                        void 0 !== o && (c.attr("data-portfolio-remaining-eth", o), d = !0), void 0 !== i && c.attr("data-portfolio-pl", i), void 0 !== s && c.attr("data-portfolio-pl-eth", s), l.find(".js-remaininig-eth").text(x.format(o));
                        let t = l.find(".js-pl");
                        if (void 0 !== i && (t.text(j.format(i / 100)), i >= 0 ? t.addClass("u-color-green").removeClass("u-color-red") : t.addClass("u-color-red").removeClass("u-color-green")), void 0 !== s) {
                            let t = l.find(".js-pl-eth");
                            parseFloat(s) >= 0 ? t.addClass("u-color-green").removeClass("u-color-red") : t.addClass("u-color-red").removeClass("u-color-green"), t.text(`(${parseFloat(s)>=0?"+":""}${k.format(s)})`)
                        }
                        d && r()(document).trigger("portfolio:update", [{
                            remainingEth: o,
                            investedEth: a,
                            afterPurchase: n
                        }])
                    }
                },
                at = ({
                    invested: t = 0,
                    remaining: e = 0,
                    sold: n = 0
                }) => {
                    const o = t > 0 ? n + e - t : 0,
                        r = t > 0 ? o / t * 100 : null;
                    return {
                        pl: {
                            value: r,
                            label: R(r) ? "N/A" : `${r>=0?"+":""}${j.format(r/100)}`
                        },
                        plEth: {
                            value: o,
                            label: `${parseFloat(o)>=0?"+":""}${k.format(o||0)}`
                        }
                    }
                };
            window.calulatePnL = at;
            const ct = ({
                    selector: t,
                    offset: e = 0
                }) => {
                    const n = "string" === typeof t ? r()(t).first() : t;
                    n[0].getBoundingClientRect().top, window.pageYOffset;
                    r()("html, body").animate({
                        scrollTop: n.offset().top + e
                    }, 700)
                },
                lt = {
                    theme: "astro2",
                    zIndex: 99999999,
                    allowHTML: !0,
                    onMount: t => {
                        r()(t.reference).data("initDisabled") && t.disable()
                    }
                },
                ut = (t, e) => {
                    (t || r()(document)).find("[data-tippy-content]").each((function() {
                        e && this._tippy ? this._tippy.destroy() : this._tippy || (0, i.Ay)(this, lt)
                    }))
                },
                dt = t => {
                    let e = r()(".js-top-banner");
                    if (e.length > 0 && "true" === e.attr("data-ismm")) {
                        var n = document.createElement("input");
                        document.body.appendChild(n), n.setAttribute("id", "copyTxtTmpField"), document.getElementById("copyTxtTmpField").value = t, n.select(), document.execCommand("copy"), document.body.removeChild(n)
                    } else navigator.clipboard && navigator.clipboard.writeText(t).then((function() {
                        (0, s.ag)({
                            message: i18n.t("notification.success_copy"),
                            timeout: 1e3
                        })
                    }), (function(t) {
                        (0, s.F8)({
                            message: i18n.t("notification.error_clipboard"),
                            timeout: 1e3
                        })
                    }))
                },
                ft = (t, e) => {
                    const n = function(t) {
                        let n = r()(this).attr(`data-${e}`),
                            o = r()(".js-top-banner");
                        if (o.length > 0 && "true" === o.attr("data-ismm")) {
                            var i = document.createElement("input");
                            document.body.appendChild(i), i.setAttribute("id", "copyTxtTmpField"), document.getElementById("copyTxtTmpField").value = n, i.select(), document.execCommand("copy"), document.body.removeChild(i)
                        } else navigator.clipboard && navigator.clipboard.writeText(n).then((function() {
                            (0, s.ag)({
                                message: i18n.t("notification.success_copy"),
                                timeout: 1e3
                            })
                        }), (function(t) {
                            var e = document.createElement("input");
                            document.body.appendChild(e), e.setAttribute("id", "copyTxtTmpField"), document.getElementById("copyTxtTmpField").value = n, e.select(), document.execCommand("copy"), document.body.removeChild(e)
                        }))
                    };
                    "string" === typeof t ? r()(document).on("click", t, n) : t.click(n)
                };
            let ht = {};
            const pt = (t, e, n) => {
                    if (t) {
                        let i = e && ht[t] ? (o = ht[t], r = e, rt(o) ? !o || R(r) ? o : Object.entries(o).reduce(((t, [e, n]) => {
                            let i = !1;
                            return i = Array.isArray(r) ? r.includes(e) : "function" === typeof r ? r(e, n, o) : e === r, i ? { ...t,
                                [e]: n
                            } : t
                        }), {}) : (console.error("Incorrect type: ", typeof o), null)) : ht[t];
                        return n && !R(i) ? Object.values(i).reduce(((t, e) => t + e), 0) : i
                    }
                    var o, r;
                    return ht
                },
                mt = async ({
                    tokenAddress: t,
                    tokenDecimals: e,
                    wallets: n,
                    total: o,
                    forceFetch: r,
                    is_program_2022: i
                } = {}) => {
                    try {
                        if (!t) return;
                        let s = n || window._genWallets ? .map((({
                                generated_wallet: t
                            }) => t)) || [],
                            a = pt(t, s, o);
                        return (r || R(a) || s && !((t, e) => {
                            try {
                                if (!t || !e) return;
                                let n = pt(t);
                                return !!n && (n = Object.keys(n), (Array.isArray(e) ? e : [e]).reduce(((t, e) => t && n.includes(e)), !0))
                            } catch (n) {
                                console.error(n)
                            }
                        })(t, s)) && (await yt({
                            tokenAddress: t,
                            tokenDecimals: e,
                            wallets: s,
                            is_program_2022: i
                        }), a = pt(t, s, o)), a
                    } catch (s) {
                        console.error(s)
                    }
                };
            window._getTokenBalance = pt;
            const gt = (t, e) => {
                if (!t) return;
                const n = { ...ht[t] || {},
                    ...e
                };
                ht = Object.freeze({ ...ht,
                    [t]: n
                });
                const o = {
                    type: "token",
                    data: {
                        [t]: e
                    },
                    tokenAddress: t,
                    allBalances: ht
                };
                "string" === typeof t && (o.tokenAddress = t, o.balances = n), r()(document).trigger("wallets:retrieveBalances", [o])
            };

            function wt(t) {
                const e = [];
                t.forEach((t => {
                    const n = t.wallet,
                        o = window._genWallets ? .find((({
                            generated_wallet: t
                        }) => t === n)) ? .name || T(n);
                    e.push(`${o} - ${t.error}`)
                })), (0, s.F8)({
                    message: e.join("</br>"),
                    timeout: 4e3,
                    closeOnClick: !0
                })
            }
            async function bt(t) {
                return (await fetch("/api/wallets/is_program_2022", {
                    method: "POST",
                    headers: {
                        "x-csrf-token": A(),
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        address: t
                    }),
                    credentials: "same-origin"
                }).then((t => t.json()))).success
            }
            async function yt({
                tokenAddress: t,
                tokenDecimals: e,
                wallets: n = "",
                is_program_2022: o = !1
            } = {}) {
                let i = {
                    success: !1,
                    totalBalance: 0,
                    balances: {}
                };
                if (t) {
                    r()(document).trigger("wallets:startRetrieveBalances");
                    const a = {
                        token_address: t,
                        token_decimals: e,
                        wallets: Array.isArray(n) ? n.join(",") : n
                    };
                    if ("" !== n) {
                        let e = I(Array.isArray(n) ? n : [n], t, o);
                        e && (a.associated_accs = e.join(","))
                    }
                    i = await fetch("/api/token_balances", {
                        method: "POST",
                        headers: {
                            "x-csrf-token": A(),
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(a),
                        credentials: "same-origin"
                    }).then((t => t.json())), r()(document).trigger("wallets:endRetrieveBalances"), gt(t, i.balances), i && i.success || (0, s.F8)({
                        message: "Something went wrong, please reload the page and try again.",
                        timeout: 2e3
                    })
                } else(0, s.F8)({
                    message: "Something went wrong, please reload the page and try again.",
                    timeout: 2e3
                });
                return i
            }
            async function _t() {
                let t = await fetch("/sol_balance", {
                    method: "GET",
                    mode: "cors",
                    cache: "no-store"
                }).then((t => t.json()));
                return t && t.success ? (window.walletBalances = t.balances, r()(document).trigger("wallets:retrieveBalances", [{
                    type: "quote",
                    balances: t.balances
                }]), [X(t.solBalance, 7), t.balances]) : [null, {}]
            }
            const vt = ["0x000000000000000000000000000000000000dead", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000002", "0x0000000000000000000000000000000000000003", "0x0000000000000000000000000000000000000004", "0x0000000000000000000000000000000000000005", "0x0000000000000000000000000000000000000006", "0x0000000000000000000000000000000000000007", "0x0000000000000000000000000000000000000008", "0x0000000000000000000000000000000000000009", "0x00000000000000000000045261d4ee77acdb3286", "0x0123456789012345678901234567890123456789", "0x1111111111111111111111111111111111111111", "0x1234567890123456789012345678901234567890", "0x2222222222222222222222222222222222222222", "0x3333333333333333333333333333333333333333", "0x4444444444444444444444444444444444444444", "0x6666666666666666666666666666666666666666", "0x8888888888888888888888888888888888888888", "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", "0xdead000000000000000042069420694206942069", "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "0xffffffffffffffffffffffffffffffffffffffff", "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"],
                $t = (t, e) => {
                    try {
                        const n = ((t, e) => {
                            const n = e - t,
                                o = 6e4,
                                r = 36e5,
                                i = 24 * r;
                            return {
                                days: Math.floor(n / i),
                                hours: Math.floor(n % i / r),
                                minutes: Math.floor(n % r / o),
                                seconds: Math.floor(n % o / 1e3)
                            }
                        })(J(t), J(e));
                        let o = ["seconds"];
                        return n.days ? o = ["days", "hours"] : n.hours ? o = ["hours", "minutes"] : n.minutes && (o = ["minutes", "seconds"]), o.map((t => {
                            let e = n[t];
                            if (R(e)) return null; {
                                let e;
                                return e = ["days", "hours"].indexOf(t) >= 0 ? n[t] : `${n[t]}`.padStart(2, "0"), `${e}${i18n.t(`time.${t[0]}`)}`
                            }
                        })).filter((t => !!t)).join(" ")
                    } catch (n) {
                        return console.error(n), ""
                    }
                },
                xt = (t, {
                    onTick: e,
                    onStart: n,
                    onFinished: o
                }) => {
                    if (!t) return;
                    let r = !1;
                    const i = 6e4,
                        s = 36e5,
                        a = 24 * s,
                        c = new Date(t).getTime(),
                        l = setInterval((() => {
                            const t = (new Date).getTime(),
                                u = c - t,
                                d = {
                                    days: Math.floor(u / a),
                                    hours: Math.floor(u % a / s),
                                    minutes: Math.floor(u % s / i),
                                    seconds: Math.floor(u % i / 1e3)
                                };
                            if (u < 0) return o && o(), void clearInterval(l);
                            e && e(d), n && !r && (n(), r = !0)
                        }), 1e3)
                },
                kt = (t, e) => {
                    if (!e) return;
                    let n = e.split(".");
                    "attributes" !== n[0] || t.attributes || (n = n.slice(1));
                    let o = t;
                    return n.forEach((t => {
                        o = o[t]
                    })), o
                },
                jt = {
                    fn: t => ({
                        onShow() {
                            "function" === typeof t.props.content && t.setContent(t.props.content(t.reference))
                        }
                    })
                },
                Ct = (t, e) => {
                    try {
                        if (!t || "string" !== typeof t && "number" !== typeof t) return t;
                        let n = t.toString().replace(/,/g, ".").replace(/[^0-9.]/g, ""),
                            o = n.split(".");
                        return n = o.shift() + (o.length ? "." : "") + o.join(""), e ? parseFloat(n) : n
                    } catch (n) {
                        return console.error(n), t
                    }
                },
                Et = t => t && "string" === typeof t ? t.replace(/[^0-9]/g, "") : t;

            function Ft(t) {
                return t.replace(/[&<>"'`]/gi, "")
            }
            const It = (t, e, n = !0) => {
                    const o = r()(t);
                    n && (r()(".js-modal").addClass("is-hidden"), r()("html").removeClass("modal-open")), e && o.length ? (o.removeClass("is-hidden"), r()("html").addClass("modal-open")) : (o.addClass("is-hidden"), r()("html").removeClass("modal-open"))
                },
                Ot = () => {
                    const t = r()(".js-modal--signup");
                    t.length && (r()(".js-modal").addClass("is-hidden"), t.removeClass("is-hidden"), r()("html").addClass("modal-open"))
                };

            function Tt(t, e, ...n) {
                return function(t, e) {
                    return (...n) => (0, a.gL)() ? t.apply(this, n) : (Ot(), e ? e.apply(this, n) : void 0)
                }(t, e)(...n)
            }
            const At = () => window.solana || window.solflare,
                St = async ({
                    amount: t,
                    txHash: e,
                    wallets: n,
                    moonpay: o
                }) => {
                    const r = await fetch("/api/transfer_funds/deposit_track", {
                        method: "POST",
                        headers: {
                            "x-csrf-token": A(),
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({
                            amount: t,
                            tx_hash: e,
                            wallets: n,
                            moonpay: o
                        }),
                        credentials: "same-origin"
                    }).then((t => t.json()));
                    o || (r && r.success ? (0, u.Dy)(r, {
                        timeoutMsg: m
                    }) : (0, s.F8)({
                        message: i18n.t("notification.tracking_failed"),
                        timeout: 2e3
                    }))
                },
                Dt = t => {
                    try {
                        return t ? t.toString().split(" ").map((t => t.charAt(0).toUpperCase() + t.slice(1))).join(" ") : t
                    } catch (e) {
                        return console.error(e), t
                    }
                },
                Pt = (t, e) => !R(t) && parseInt(t) === y[e],
                Mt = t => {
                    if (R(t)) return "";
                    return Object.keys(y).find((e => y[e] === parseInt(t))) || ""
                },
                Nt = (t, e) => !R(t) && rt(t) && e ? Object.entries(t).reduce(((t, [n, o]) => ({ ...t,
                    [n]: e(o, n)
                })), {}) : t,
                Wt = (t, e) => !R(t) && rt(t) && e ? Object.entries(t).reduce(((t, [n, o]) => e(o, n) ? { ...t,
                    [n]: o
                } : t), {}) : t,
                Lt = t => "string" === typeof t && t.length >= 32 && t.length <= 44 && t.match(/^[0-9a-zA-Z]*$/),
                Bt = (t, e) => {
                    try {
                        if (R(t) || R(e)) return !1;
                        const n = e.toString().toLowerCase();
                        return !!t ? .toString().toLowerCase() ? .split(" ").find((t => t.startsWith(n)))
                    } catch (n) {
                        return console.error(n), !1
                    }
                };

            function Ut(t, e) {
                return t ? Object.fromEntries(Object.entries(t).map((([t, n]) => {
                    try {
                        if (rt(e[t])) {
                            const {
                                parentKey: o,
                                ...r
                            } = e[t];
                            return [o || t, Ut(n, r)]
                        }
                        return [e[t] || t, n]
                    } catch (o) {
                        return console.error(o), [t, n]
                    }
                }))) : t
            }
        },
        8073: function(t, e, n) {
            "use strict";
            n.d(e, {
                AC: function() {
                    return U
                },
                B2: function() {
                    return C
                },
                CI: function() {
                    return b
                },
                Dr: function() {
                    return St
                },
                EP: function() {
                    return ht
                },
                Ej: function() {
                    return N
                },
                FP: function() {
                    return J
                },
                Fj: function() {
                    return A
                },
                GZ: function() {
                    return ot
                },
                HG: function() {
                    return I
                },
                Hc: function() {
                    return O
                },
                Hm: function() {
                    return S
                },
                Ij: function() {
                    return T
                },
                J2: function() {
                    return z
                },
                JK: function() {
                    return j
                },
                JU: function() {
                    return E
                },
                Jc: function() {
                    return H
                },
                Km: function() {
                    return dt
                },
                LM: function() {
                    return V
                },
                Lq: function() {
                    return B
                },
                Lx: function() {
                    return G
                },
                M8: function() {
                    return u
                },
                OW: function() {
                    return ft
                },
                O_: function() {
                    return c
                },
                Ou: function() {
                    return R
                },
                Oy: function() {
                    return P
                },
                PL: function() {
                    return nt
                },
                QI: function() {
                    return $
                },
                Rw: function() {
                    return $t
                },
                Rx: function() {
                    return gt
                },
                S_: function() {
                    return At
                },
                Tc: function() {
                    return yt
                },
                Vg: function() {
                    return y
                },
                XI: function() {
                    return L
                },
                Xx: function() {
                    return kt
                },
                YG: function() {
                    return l
                },
                Yz: function() {
                    return tt
                },
                ay: function() {
                    return x
                },
                b8: function() {
                    return d
                },
                cG: function() {
                    return vt
                },
                cq: function() {
                    return _
                },
                d8: function() {
                    return it
                },
                dI: function() {
                    return xt
                },
                eU: function() {
                    return mt
                },
                eX: function() {
                    return ut
                },
                fh: function() {
                    return Et
                },
                gL: function() {
                    return Dt
                },
                gY: function() {
                    return Ft
                },
                hF: function() {
                    return pt
                },
                iP: function() {
                    return F
                },
                j8: function() {
                    return W
                },
                jL: function() {
                    return wt
                },
                jx: function() {
                    return et
                },
                l2: function() {
                    return Z
                },
                o1: function() {
                    return v
                },
                o7: function() {
                    return jt
                },
                p1: function() {
                    return rt
                },
                pw: function() {
                    return m
                },
                r2: function() {
                    return K
                },
                rI: function() {
                    return D
                },
                ri: function() {
                    return It
                },
                sE: function() {
                    return bt
                },
                sG: function() {
                    return M
                },
                sq: function() {
                    return k
                },
                t9: function() {
                    return Ot
                },
                tI: function() {
                    return Ct
                },
                tw: function() {
                    return Q
                },
                wu: function() {
                    return q
                },
                xV: function() {
                    return Tt
                },
                xb: function() {
                    return _t
                },
                z9: function() {
                    return Y
                }
            });
            var o = n(5479),
                r = n.n(o),
                i = n(1580),
                s = n(7439),
                a = n.n(s);
            n(844);
            const c = () => "photon-sol.tinyastro.io" === window.location.host,
                l = () => "photon-staging-sol.tinyastro.io" === window.location.host,
                u = () => "localhost:3000" === window.location.host,
                d = ({
                    channelName: t
                } = {}) => "DiscoverLpChannel" === t ? c() ? "wss://ws-sol-disc-lb.tinyastro.io/cable" : l() ? "wss://ws-sol-disc-staging.tinyastro.io/cable" : "ws://localhost:8080/cable" : c() ? "wss://ws-token-sol-lb.tinyastro.io/cable" : l() ? "wss://ws-token-staging-sol.tinyastro.io/cable" : "ws://localhost:8080/cable";
            let f;
            const h = () => {
                    const t = window.taConfig || {};
                    return Object.entries(t).reduce(((t, [e, n]) => {
                        if (null === (o = n) || "object" !== typeof o || Array.isArray(n)) return { ...t,
                            [a()(e)]: n
                        }; {
                            const o = ((t, e) => {
                                if (t) return Object.entries(t).reduce(((t, [n, o]) => ({ ...t,
                                    [a()(e ? `${e}-${n}` : n)]: o
                                })), {})
                            })(n, e);
                            return { ...t,
                                ...o
                            }
                        }
                        var o
                    }), {})
                },
                p = () => {
                    f || (window.taConfig ? ((u() || l()) && console.log("Copy from taConfig"), f = Object.freeze(h())) : (console.log("config callbalck"), (() => {
                        const t = r()("#js-config").data(),
                            e = r()("#js-page-config").data();
                        f = Object.freeze({ ...t,
                            ...e
                        })
                    })()))
                },
                m = () => {
                    f || (window.taConfig ? f = Object.freeze(h()) : window.addEventListener("DOMContentLoaded", (function() {
                        p()
                    })))
                };
            m();
            const g = () => (f || p(), f || {}),
                w = (t, e) => () => {
                    const n = g()[t];
                    return (0, i.gD)(n) ? n : "float" === e ? parseFloat(n) : "int" === e ? parseInt(n) : "bool" === e ? "true" === n || !0 === n : n
                };
            window._getConfig = () => ({ ...g()
            });
            const b = t => {
                    (t => {
                        f = Object.freeze({ ...f,
                            ...t
                        })
                    })(t)
                },
                y = "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1",
                _ = (w("ppk"), w("genWallet")),
                v = w("explorerDomain"),
                $ = w("wallet"),
                x = (w("tradeCtr"), w("uhandle")),
                k = w("activeUser"),
                j = (w("isMobile"), w("locale")),
                C = w("moonkey"),
                E = w("signupstep"),
                F = (w("memeLiveWallets"), w("showAmountIndex")),
                I = (w("showApprovedBalance"), w("showCirculatingSupply"), w("showCreatedAt")),
                O = (w("showFromPump"), w("showPumpPoolId")),
                T = w("showMoonshotPoolId"),
                A = w("showMoonshotPoolId"),
                S = w("showLastEventTimestamp"),
                D = w("showFirstEventTimestamp"),
                P = w("showPurchasesCount"),
                M = w("showDecimals"),
                N = w("showOwnerWallet"),
                W = w("showDeployerWallet"),
                L = w("showCaDeployerWallet"),
                B = w("showLpDeployerWallet"),
                U = w("showDefaultInterval"),
                q = w("showQuoteBalance"),
                H = w("showPoolFactoryName"),
                G = w("showPoolId"),
                V = w("showIsWatching"),
                Q = w("showTokenAddress"),
                z = w("showTokenBalance"),
                J = w("showTokenSymbol"),
                K = w("showTotalSupply"),
                R = w("showHumanTotalSupply"),
                Y = (w("showChartHeight"), w("showTokenApproved"), w("showPriceUsd")),
                X = w("showPriceQuote"),
                Z = (w("showIsInternalWallet"), w("showChartCurrency")),
                tt = w("showPoolAddress"),
                et = w("showMeteoraVaultAddress"),
                nt = w("showTxDateAge"),
                ot = w("showTxSort"),
                rt = w("showDex"),
                it = w("showQuoteToken0", "bool"),
                st = w("showReserve0"),
                at = w("showReserve1"),
                ct = w("showReserve0Tr"),
                lt = w("showReserve1Tr"),
                ut = w("showChartType"),
                dt = w("showMinliq", "float"),
                ft = w("showIs2022", "bool"),
                ht = w("showJitoTips"),
                pt = w("showMigratedAddress"),
                mt = w("showIgnored"),
                gt = w("showOutliers"),
                wt = w("showOldPool"),
                bt = w("showTokenId"),
                yt = (w("showDefaultBribery", "float"), w("showMyTrades")),
                _t = (w("showDevTrades"), w("showOtherTrades")),
                vt = w("showSnipers"),
                $t = w("showInsiders"),
                xt = w("showAvgPriceLine"),
                kt = w("showOrderLines"),
                jt = (w("showPreset"), w("showWallets")),
                Ct = w("showCurveType"),
                Et = w("showMigratingTarget"),
                Ft = w("showTxsCount", "int"),
                It = w("showCommitmentLevel"),
                Ot = () => "processed" === It(),
                Tt = w("dashboardWelcomeTourPassed"),
                At = (w("discoverWelcomeTourPassed"), w("discoverIsInternalWallet"), () => ({
                    poolId: G(),
                    poolFactoryName: rt(),
                    tokenAddress: Q(),
                    tokenDecimals: M(),
                    is_program_2022: ft(),
                    poolData: {
                        decimals: M(),
                        priceQuote: X(),
                        quoteToken0: it(),
                        reserve0: st(),
                        reserve1: at(),
                        reserve0Tr: ct() || st(),
                        reserve1Tr: lt() || at(),
                        is_program_2022: ft()
                    }
                })),
                St = w("blockchain"),
                Dt = (w("blockchainName"), w("blockchainScanUrl"), () => !!k())
        },
        707: function(t, e, n) {
            "use strict";
            n.d(e, {
                K8: function() {
                    return d
                },
                ZH: function() {
                    return h
                },
                pw: function() {
                    return l
                }
            });
            var o = n(2137),
                r = n(1580),
                i = n(4330),
                s = n.n(i),
                a = n(5479),
                c = n.n(a);
            const l = t => {
                    const e = window._portfolioState.calculateAverage(t),
                        {
                            investedEth: n,
                            remainingEth: o
                        } = e;
                    return {
                        investedEth: parseFloat(n) || 0,
                        remainingEth: parseFloat(o) || 0
                    }
                },
                u = t => (0, r.LG)(t, (t => t && !isNaN(Number(t)) ? parseFloat(t) : t));
            class d {
                constructor(t = {}) {
                    const {
                        wallets: e = [],
                        positions: n = [],
                        type: i,
                        poolId: a,
                        onInit: l
                    } = t;
                    this.uid = s()(), this.config = { ...t
                    };
                    const u = {
                        wallets: (0, o.A)(e).reduce(((t, e) => ({ ...t,
                            [e.generatedWallet]: e
                        })), {})
                    };
                    this.state = u, this.setPositionsData(n);
                    const d = this;
                    c()(document).on("config:update", (function(t, {
                        showPriceQuote: e
                    }) {
                        const n = {};
                        "show" === i && e && (n.poolPriceQuote = e), (0, r.Im)(n) || d.updatePositions(n)
                    })), c()(document).on("portfolio:fetchPL", (async function(t, {
                        poolId: e,
                        wallets: n
                    }) {
                        await d.fetchPL(e, n)
                    })), l && l(this)
                }
                async fetchPL(t, e) {
                    const n = this;
                    try {
                        if (t !== n.config.poolId) return;
                        let r = `/api/lp/refresh_p_l?pool_id=${t}`;
                        e && (r += `&wallet=${Array.isArray(e)?e.join(","):e}`);
                        const i = await fetch(r, {
                            cache: "no-store"
                        }).then((t => t.json()));
                        return i && i.plObj && ((0, o.A)(i.plObj).forEach((t => {
                            const e = n.state.wallets[t.generatedWallet];
                            e && (e.pos = u(t), c()(document).trigger(`portfolio:updateWallet.${n.uid}`, [{
                                wallet: e,
                                state: n.state,
                                instance: n,
                                action: "fetch"
                            }]))
                        })), n.state.average = n.calculateAverage(), n.checkVisibility(), n.broadcastUpdate({
                            action: "fetch"
                        })), !0
                    } catch (r) {
                        console.error(r)
                    }
                }
                broadcastUpdate(t = {}) {
                    c()(document).trigger(`portfolio:updateState.${this.uid}`, [{
                        poolId: this.config.poolId,
                        type: this.config.type,
                        state: this.state,
                        instance: this,
                        ...t
                    }]), this.config.onStateUpdate && this.config.onStateUpdate()
                }
                setPoolId(t, e) {
                    return this.config.poolId = t, this.setPositionsData(e || []), this.broadcastUpdate(), this
                }
                setPositionsData(t) {
                    this.state.wallets = (0, r.LG)(this.state.wallets, (t => ({ ...t,
                        pos: null
                    }))), (0, o.A)(t).forEach((t => {
                        const {
                            generatedWallet: e
                        } = t;
                        e && this.state.wallets[e] && (this.state.wallets[e].pos = u(t))
                    })), this.state.average = this.calculateAverage(), this.checkVisibility()
                }
                setDataByWallet(t, e) {
                    try {
                        const n = this.state.wallets[t];
                        if (!n || !e) return;
                        const o = { ...n,
                            ...e
                        };
                        o.pos = this.refreshPosition(o.pos), this.state.wallets[t] = o, this.state.average = this.calculateAverage(), this.checkVisibility(), c()(document).trigger(`portfolio:updateWallet.${this.uid}`, [{
                            poolId: this.config.poolId,
                            type: this.config.type,
                            wallet: newWallet,
                            state: this.state,
                            instance: this
                        }]), instance.broadcastUpdate()
                    } catch (n) {
                        console.error(n)
                    }
                }
                checkVisibility() {
                    return this.state.isVisible = !(0, r.Im)(this.getPositions()), this.state.isVisible
                }
                refreshPosition(t, e = {}) {
                    try {
                        if (!t) return t;
                        const n = { ...t
                            },
                            {
                                poolPriceQuote: o
                            } = e,
                            i = parseFloat(t.remainingTokens || 0);
                        if ((parseFloat(t.investedEth || 0) > 0 || i > 0) && i > 0) {
                            if (!(0, r.gD)(o)) {
                                let t = parseFloat(o * i);
                                n.remainingEth = t
                            }
                            const t = (0, r.sJ)({
                                invested: n.investedEth,
                                remaining: n.remainingEth,
                                sold: n.soldEth
                            });
                            n.pl = t.pl.value, n.plEth = t.plEth.value
                        }
                        return this.checkVisibility(), n
                    } catch (n) {
                        return console.error(n), t
                    }
                }
                updatePositions(t) {
                    try {
                        this.state.wallets = (0, r.LG)(this.state.wallets, (e => ({ ...e,
                            pos: e.pos ? this.refreshPosition(e.pos, t) : null
                        }))), this.state.average = this.calculateAverage(), this.checkVisibility(), this.broadcastUpdate()
                    } catch (e) {
                        console.error(e)
                    }
                }
                getPositions() {
                    return (0, r.mN)(this.state.wallets, (t => !!t.pos))
                }
                getPlViewProps(t) {
                    try {
                        if (!t) return null;
                        const t = "string" === typeof t ? this.state.wallets[t] : t,
                            e = t ? t.pos : null;
                        if (!e) return null;
                        const {
                            pl: n,
                            plEth: o
                        } = e;
                        return ((t = 0, e = 0) => {
                            try {
                                return {
                                    pl: {
                                        value: parseFloat(t) || 0,
                                        label: (0, r.gD)(t) ? "N/A" : `${t>=0?"+":""}${r.q2.format(t/100)}`,
                                        color: parseFloat(t) >= 0 ? "green" : "red"
                                    },
                                    plEth: {
                                        value: parseFloat(e) || 0,
                                        label: `${parseFloat(e)>=0?"+":""}${r.Er.format(e||0)}`,
                                        color: parseFloat(e) >= 0 ? "green" : "red"
                                    }
                                }
                            } catch (n) {
                                return console.error(n), null
                            }
                        })(n, o)
                    } catch (e) {
                        return null
                    }
                }
                calculateAverage(t) {
                    const e = this.getPositions(),
                        n = t ? t.map((t => e[t])).filter((t => t && !!t.pos)) : Object.values(e),
                        o = {
                            investedEth: 0,
                            investedTokens: 0,
                            remainingEth: 0,
                            remainingTokens: 0,
                            soldEth: 0,
                            soldTokens: 0
                        };
                    n.forEach((t => {
                        Object.keys(o).forEach((e => {
                            const n = t.pos && !(0, r.gD)(t.pos[e]) && parseFloat(t.pos[e]) || 0;
                            o[e] = (o[e] || 0) + n
                        }))
                    }));
                    const i = (0, r.sJ)({
                        invested: o.investedEth,
                        remaining: o.remainingEth,
                        sold: o.soldEth
                    });
                    return o.pl = i.pl.value, o.plEth = i.plEth.value, o
                }
                formatData(t) {
                    if (!t) return {};
                    const {
                        generatedWallet: e,
                        investedEth: n,
                        remainingEth: o,
                        soldEth: i,
                        pl: s,
                        plEth: a
                    } = t, c = { ...t,
                        generatedWallet: (0, r.Wr)(e || ""),
                        investedEth: r.EG.format(n),
                        remainingEth: r.EG.format(o),
                        soldEth: r.EG.format(i),
                        pl: (0, r.gD)(s) ? "N/A" : `${s>=0?"+":""}${r.q2.format(s/100)}`,
                        plEth: 0 !== a ? `${parseFloat(a)>=0?"+":""}${r.Er.format(a||0)}` : ""
                    };
                    return c.plHtml = `\n      <span class="${parseFloat(s)>0?"u-color-green":"u-color-red"}">\n        ${c.pl} ${c.plEth?`(${c.plEth})`:""}\n      </span>\n    `, c
                }
            }
            let f;
            const h = () => f;
            e.Ay = t => (f || (f = new d(t)), f)
        },
        7983: function(t, e, n) {
            "use strict";
            n.d(e, {
                sO: function() {
                    return r
                }
            });
            n(3435);
            var o = n(1580);
            const r = async () => {
                let t;
                const e = (0, o.St)();
                if (e) try {
                    t = e
                } catch (n) {
                    logger.error("catch in getProvider"), logger.error(n)
                }
                if (t) {
                    window.provider = t;
                    try {
                        await e.connect({
                            onlyIfTrusted: !0
                        })
                    } catch (n) {}
                    return t
                }
                return window.noProvider = !0, !1
            }
        },
        3435: function(t, e, n) {
            "use strict";
            n.d(e, {
                F8: function() {
                    return p
                },
                OA: function() {
                    return h
                },
                Th: function() {
                    return m
                },
                _b: function() {
                    return d
                },
                ag: function() {
                    return f
                }
            });
            var o = n(37),
                r = n.n(o),
                i = n(1580),
                s = n(4330),
                a = n.n(s),
                c = n(5479),
                l = n.n(c);
            const u = {
                    progressBar: !1,
                    position: "topCenter",
                    icon: null,
                    transitionIn: "fadeInDown",
                    transitionOut: "fadeOutUp",
                    animateInside: !1,
                    drag: !1,
                    timeout: 5e3,
                    closeOnClick: !0
                },
                d = t => {
                    if (!t) return;
                    const e = l()(`.flash-${t}`);
                    e.length && r().hide({
                        transitionOut: "fadeOutUp"
                    }, e[0])
                };

            function f({
                message: t,
                id: e,
                showOnHidden: n,
                ...o
            }) {
                if (e && d(e), n || !document.hidden) return r().success({
                    message: t,
                    ...u,
                    ...o,
                    id: `flash-${e}`
                })
            }

            function h(t) {
                const {
                    message: e,
                    timeout: n,
                    id: o,
                    showOnHidden: r,
                    ...s
                } = t, c = `flash-${o||a()()}`, u = `.${c}`;
                if (!t.timeout || !r && document.hidden) return;
                let d;
                f({
                    message: `${e} <span class="js-izitoast__countdown u-color-green"> (${n/1e3})</span>`,
                    timeout: n,
                    id: o,
                    ...s,
                    class: c
                });
                const h = n === i.hj,
                    p = n / 1e3;
                let m = p;
                const g = h ? 5 : p / 2,
                    w = h ? 10 : p / 6;
                d = setInterval((function() {
                    if (m <= 0 || !l()(u).length) return void clearInterval(d);
                    const t = l()(u).find(".iziToast-message");
                    let e = "green";
                    m < g ? e = "red" : m < w && (e = "yellow"), t.find(".js-izitoast__countdown").remove(), t.append(`<span class="js-izitoast__countdown u-color-${e}"> (${m})</span>`), m--
                }), 1e3)
            }

            function p({
                message: t,
                id: e,
                showOnHidden: n,
                ...o
            }) {
                if (e) {
                    const t = l()(`.flash-${e}, #flash-${e}`);
                    t.length && r().hide({
                        transitionOut: "fadeOutUp"
                    }, t[0])
                }
                if (n || !document.hidden) return r().error({
                    message: t,
                    ...u,
                    ...o
                })
            }

            function m({
                alertId: t,
                iconPosition: e,
                message: n,
                link: o,
                icon: i = "attention",
                iconColor: s,
                img: a,
                ...c
            }) {
                const l = { ...u,
                    timeout: 4e3,
                    position: "topRight",
                    class: "c-alert",
                    progressBar: !0,
                    ...c
                };
                l.timeout || (l.progressBar = !1, l.closeOnClick = !1);
                const d = o ? "a" : "div",
                    f = `\n    <${d} class="c-alert__inner" ${t?`data-alert-id="${t}"`:""} ${o?`href="${o}"`:""}>\n      ${i||a?`\n    <div class="l-row l-row-gap--xxs">\n      <div class="l-col-auto ${"center"===e?"u-d-flex u-align-items-center":""}">\n        ${a?`\n          <img src="${a}" class="c-alert__img" />\n        `:`\n          <span class="c-icon c-icon--${i} c-alert__icon ${s?`u-color-${s}`:""}"></span>\n        `}\n        \n      </div>\n      <div class="l-col">\n        ${n}\n      </div>\n\n      ${l.timeout?"":'\n          <div class="l-col-auto u-d-flex u-align-items-center">\n            <div class="c-icon c-icon--x c-icon--base c-alert__close u-pointer js-flash-alert__close"></div>\n          </div>\n        '}\n    </div>\n  `:n}\n    </${d}>\n  `;
                return l.timeout && g(t), r().success({
                    message: f,
                    ...l
                })
            }

            function g(t, e = !0) {
                const n = Math.floor(2501 * Math.random() + 500),
                    o = () => fetch("/api/alerts/mark_as_viewed", {
                        method: "POST",
                        headers: {
                            "x-csrf-token": (0, i.PE)(),
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({
                            id: t
                        }),
                        credentials: "same-origin"
                    }).then((t => t.json()));
                e ? setTimeout(o, n) : o()
            }
            window.flashAlert = m, l()(document).ready((function() {
                l()(document).on("click", ".js-flash-alert__close", (function() {
                    const t = l()(this).closest("[data-alert-id]").data("alertId");
                    t && g(t, !1), r().hide({
                        transitionOut: "fadeOutUp"
                    }, l()(this).closest(".iziToast")[0])
                }))
            }))
        },
        3283: function() {},
        8338: function() {},
        5899: function() {}
    }
]);
//# sourceMappingURL=9935-4eeed4b5ea90dd406279.js.map