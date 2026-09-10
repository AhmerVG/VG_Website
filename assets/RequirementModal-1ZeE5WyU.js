import {
  r as e,
  t
} from "./vendor-Bfx28lbG.js";
var n = e(),
  r = t(),
  i = [`Chili`, `Tomato`, `Turmeric`, `Fenugreek`, `Sugarcane`, `Corn`, `Sesame`, `Guava`, `Energy / Napier`, `Plum`, `Oilseeds`];

function a({
  ctaLabel: e = `Share your requirement →`,
  source: t
}) {
  let [a, o] = (0, n.useState)(!1), [s, c] = (0, n.useState)(new Set), [l, u] = (0, n.useState)(``), [d, f] = (0, n.useState)(``), [p, m] = (0, n.useState)(``), [h, g] = (0, n.useState)(``), [_, v] = (0, n.useState)(``), [y, b] = (0, n.useState)(!1), x = (0, n.useId)(), S = (0, n.useRef)(null), C = (0, n.useRef)(null);
  (0, n.useEffect)(() => {
    if (!a) return;
    let e = document.activeElement,
      t = document.body.style.overflow;
    return document.body.style.overflow = `hidden`, (S.current?.querySelector(`button, [href], input, textarea, select`))?.focus(), () => {
      document.body.style.overflow = t, (C.current ?? e)?.focus()
    }
  }, [a]);
  let w = e => {
      if (e.key === `Escape`) {
        e.stopPropagation(), o(!1);
        return
      }
      if (e.key !== `Tab`) return;
      let t = S.current?.querySelectorAll(`button, [href], input, textarea, select`);
      if (!t || t.length === 0) return;
      let n = Array.from(t).filter(e => !e.hasAttribute(`disabled`)),
        r = n[0],
        i = n[n.length - 1];
      e.shiftKey && document.activeElement === r ? (e.preventDefault(), i.focus()) : !e.shiftKey && document.activeElement === i && (e.preventDefault(), r.focus())
    },
    T = e => c(t => {
      let n = new Set(t);
      return n.has(e) ? n.delete(e) : n.add(e), n
    }),
    E = h.trim().length > 2 && p.trim().length > 1;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(`button`, {
      ref: C,
      className: `btn primary`,
      onClick: () => o(!0),
      children: e
    }), a && (0, r.jsx)(`div`, {
      className: `fixed inset-0 z-[100] flex items-center justify-center p-4`,
      style: {
        background: `rgba(6,17,11,0.82)`
      },
      onClick: e => e.target === e.currentTarget && o(!1),
      onKeyDown: w,
      children: (0, r.jsxs)(`div`, {
        ref: S,
        role: `dialog`,
        "aria-modal": `true`,
        "aria-labelledby": x,
        className: `panel p-6 w-full max-w-[560px] max-h-[86vh] overflow-y-auto relative`,
        children: [(0, r.jsx)(`button`, {
          "aria-label": `Close`,
          onClick: () => o(!1),
          className: `absolute top-4 right-4 text-[1.1rem] dim`,
          children: `✕`
        }), (0, r.jsx)(`div`, {
          className: `cap mb-1`,
          children: `Share your requirement`
        }), (0, r.jsx)(`h3`, {
          id: x,
          className: `display text-[1.4rem] font-bold mb-4`,
          children: `Requirement details`
        }), (0, r.jsx)(`div`, {
          className: `cap mb-2`,
          id: x + `-chains`,
          children: `Value chain, one or more`
        }), (0, r.jsx)(`div`, {
          className: `flex flex-wrap gap-1.5 mb-4`,
          role: `group`,
          "aria-labelledby": x + `-chains`,
          children: i.map(e => (0, r.jsx)(`button`, {
            onClick: () => T(e),
            "aria-pressed": s.has(e),
            className: `btn ${s.has(e)?`on`:``}`,
            style: {
              padding: `6px 12px`,
              fontSize: `0.66rem`
            },
            children: e
          }, e))
        }), (0, r.jsxs)(`div`, {
          className: `grid gap-2.5`,
          children: [(0, r.jsx)(`input`, {
            value: l,
            onChange: e => u(e.target.value),
            placeholder: `Indicative volume (t/season)`,
            "aria-label": `Volume`,
            className: `panel px-3 py-2.5 text-[0.9rem]`,
            style: {
              background: `var(--bg-2)`
            }
          }), (0, r.jsx)(`input`, {
            value: d,
            onChange: e => f(e.target.value),
            placeholder: `Destination market (if export)`,
            "aria-label": `Destination`,
            className: `panel px-3 py-2.5 text-[0.9rem]`,
            style: {
              background: `var(--bg-2)`
            }
          }), (0, r.jsx)(`input`, {
            value: p,
            onChange: e => m(e.target.value),
            placeholder: `Company & name *`,
            "aria-label": `Company and name (required)`,
            required: !0,
            "aria-invalid": y && !p.trim() ? !0 : void 0,
            className: `panel px-3 py-2.5 text-[0.9rem]`,
            style: {
              background: `var(--bg-2)`,
              borderColor: y && !p.trim() ? `var(--rust)` : void 0
            }
          }), (0, r.jsx)(`input`, {
            value: h,
            onChange: e => g(e.target.value),
            placeholder: `Email or phone *`,
            "aria-label": `Email or phone (required)`,
            required: !0,
            "aria-invalid": y && h.trim().length <= 2 ? !0 : void 0,
            className: `panel px-3 py-2.5 text-[0.9rem]`,
            style: {
              background: `var(--bg-2)`,
              borderColor: y && h.trim().length <= 2 ? `var(--rust)` : void 0
            }
          }), (0, r.jsx)(`textarea`, {
            value: _,
            onChange: e => v(e.target.value),
            placeholder: `Your specification or requirement outline`,
            "aria-label": `Your specification or requirement outline`,
            rows: 3,
            className: `panel px-3 py-2.5 text-[0.9rem]`,
            style: {
              background: `var(--bg-2)`
            }
          })]
        }), (0, r.jsx)(`button`, {
          className: `btn primary mt-4`,
          onClick: () => {
            if (b(!0), !E) return;
            let e = [
                [`Source`, t],
                [`Value chain(s)`, Array.from(s).join(`, `) || `Not specified`],
                [`Volume (t/season)`, l],
                [`Destination market`, d],
                [`Company & name`, p],
                [`Contact`, h],
                [`Spec / vision`, _]
              ],
              n = encodeURIComponent(e.map(([e, t]) => `${e}: ${t}`).join(`
`));
            window.location.href = `mailto:info@vgreen.com.pk?subject=Requirement via vgreen.com.pk&body=${n}`
          },
          children: `Send requirement →`
        }), (0, r.jsx)(`div`, {
          role: `alert`,
          "aria-live": `assertive`,
          children: y && !E && (0, r.jsx)(`p`, {
            className: `cap mt-2 m-0`,
            style: {
              color: `var(--rust)`
            },
            children: `Please provide a company and contact name, together with an email address or phone number.`
          })
        }), (0, r.jsx)(`p`, {
          className: `cap mt-3`,
          children: `This opens your email client with the details pre-filled. Nothing is stored on this page.`
        })]
      })
    })]
  })
}
export {
  a as t
};