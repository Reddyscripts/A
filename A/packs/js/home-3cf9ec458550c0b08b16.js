"use strict";
(self.webpackChunkapp = self.webpackChunkapp || []).push([
    [7962], {
        6676: function(e, n, s) {
            var i = s(5479),
                t = s.n(i);
            t()((function() {
                window.$ = t();
                const e = t()(".js-home__screen"),
                    n = t()(".js-home__screen__img"),
                    s = window.innerHeight;
                let i;
                window.addEventListener("scroll", (function(o) {
                    const c = this.oldScroll > this.scrollY ? "up" : "down";
                    this.oldScroll = this.scrollY;
                    const r = e.toArray().find(((e, n) => {
                        const i = e.getBoundingClientRect();
                        return e.viewIndex = n, "up" === c ? i.top > s / 2 - 1.25 * i.height && i.top < s / 2 : i.top > s / 2 && i.top < s / 2 + i.height / 4
                    }));
                    if (r) {
                        const s = e.index(t()(r));
                        void 0 !== i && i === s || (i = s, n.removeClass("is-visible"), e.removeClass("is-visible"), t()(r).addClass("is-visible"), n.eq(s).addClass("is-visible"))
                    }
                })), t()(window).trigger("scroll")
            })), t()(document).ready((() => {
                t()("input.js-connect-terms").change((e => {
                    let n = t()(e.currentTarget);
                    t()("input.js-connect-terms").prop("checked", n.is(":checked"))
                }))
            }))
        }
    },
    function(e) {
        e.O(0, [5479], (function() {
            return n = 6676, e(e.s = n);
            var n
        }));
        e.O()
    }
]);
//# sourceMappingURL=home-3cf9ec458550c0b08b16.js.map