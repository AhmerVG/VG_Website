import {
  r as e,
  t
} from "./vendor-Bfx28lbG.js";
import {
  t as n
} from "./CalmBackdrop-CDqYysf7.js";
var r = e(),
  i = t();

function a() {
  let e = (0, r.useId)().replace(/:/g, ``);
  return (0, i.jsxs)(`div`, {
    className: `absolute inset-0 pointer-events-none overflow-hidden`,
    "aria-hidden": !0,
    children: [(0, i.jsx)(`style`, {
      children: `
        @keyframes yardRise { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        @keyframes yardCart { 0% { transform: translateX(-78px) } 60% { transform: translateX(0) } 100% { transform: translateX(0) } }
        @keyframes yardWheel { to { transform: rotate(360deg) } }
        @keyframes yardGrain { 0%,100% { opacity: .55 } 50% { opacity: 1 } }
        @keyframes yardRays { 0%,100% { opacity: .18 } 50% { opacity: .42 } }
        @keyframes yardMote { 0% { transform: translate(0,0); opacity: 0 } 15% { opacity: .7 } 100% { transform: translate(-38px,-120px); opacity: 0 } }
        @keyframes yardNeedle { 0%,100% { transform: rotate(-16deg) } 50% { transform: rotate(24deg) } }
        .yd-in { animation: yardRise 1.1s ease-out both }
        .yd-cart { animation: yardCart 16s cubic-bezier(.22,.7,.3,1) infinite }
        .yd-wheel { animation: yardWheel 3.4s linear infinite; transform-box: fill-box; transform-origin: center }
        .yd-grain { animation: yardGrain 4.2s ease-in-out infinite }
        .yd-rays { animation: yardRays 7s ease-in-out infinite }
        .yd-mote { animation: yardMote 9s linear infinite }
        .yd-needle { animation: yardNeedle 5.5s ease-in-out infinite; transform-box: fill-box; transform-origin: 50% 90% }
        /* index.css clamps animation-duration to 0.01ms under reduced motion, but an infinite
           animation still cycles at that speed and keeps producing movement. Stop them dead. */
        @media (prefers-reduced-motion: reduce) {
          .yd-in, .yd-cart, .yd-wheel, .yd-grain, .yd-rays, .yd-mote, .yd-needle { animation: none !important }
          .yd-mote { opacity: 0 }
        }
      `
    }), (0, i.jsxs)(`svg`, {
      viewBox: `0 0 1400 620`,
      preserveAspectRatio: `xMaxYMax slice`,
      className: `absolute inset-0 w-full h-full`,
      children: [(0, i.jsxs)(`defs`, {
        children: [(0, i.jsxs)(`linearGradient`, {
          id: `sky-${e}`,
          x1: `0`,
          y1: `0`,
          x2: `0`,
          y2: `1`,
          children: [(0, i.jsx)(`stop`, {
            offset: `0`,
            stopColor: `#06110B`
          }), (0, i.jsx)(`stop`, {
            offset: `0.55`,
            stopColor: `#0C2417`
          }), (0, i.jsx)(`stop`, {
            offset: `1`,
            stopColor: `#17422A`
          })]
        }), (0, i.jsxs)(`linearGradient`, {
          id: `fade-${e}`,
          x1: `0`,
          y1: `0`,
          x2: `1`,
          y2: `0`,
          children: [(0, i.jsx)(`stop`, {
            offset: `0`,
            stopColor: `#06110B`,
            stopOpacity: `0.97`
          }), (0, i.jsx)(`stop`, {
            offset: `0.34`,
            stopColor: `#06110B`,
            stopOpacity: `0.86`
          }), (0, i.jsx)(`stop`, {
            offset: `0.58`,
            stopColor: `#06110B`,
            stopOpacity: `0`
          })]
        }), (0, i.jsxs)(`linearGradient`, {
          id: `band-${e}`,
          x1: `0`,
          y1: `0`,
          x2: `1`,
          y2: `0`,
          children: [(0, i.jsx)(`stop`, {
            offset: `0`,
            stopColor: `#FFB627`,
            stopOpacity: `0`
          }), (0, i.jsx)(`stop`, {
            offset: `0.55`,
            stopColor: `#FFD27A`,
            stopOpacity: `0.34`
          }), (0, i.jsx)(`stop`, {
            offset: `1`,
            stopColor: `#FFB627`,
            stopOpacity: `0.05`
          })]
        }), (0, i.jsxs)(`radialGradient`, {
          id: `shadow-${e}`,
          children: [(0, i.jsx)(`stop`, {
            offset: `0`,
            stopColor: `#000`,
            stopOpacity: `0.45`
          }), (0, i.jsx)(`stop`, {
            offset: `1`,
            stopColor: `#000`,
            stopOpacity: `0`
          })]
        }), (0, i.jsxs)(`radialGradient`, {
          id: `halo-${e}`,
          children: [(0, i.jsx)(`stop`, {
            offset: `0`,
            stopColor: `#FFD27A`,
            stopOpacity: `0.55`
          }), (0, i.jsx)(`stop`, {
            offset: `0.45`,
            stopColor: `#FFB627`,
            stopOpacity: `0.18`
          }), (0, i.jsx)(`stop`, {
            offset: `1`,
            stopColor: `#FFB627`,
            stopOpacity: `0`
          })]
        }), (0, i.jsxs)(`linearGradient`, {
          id: `ground-${e}`,
          x1: `0`,
          y1: `0`,
          x2: `0`,
          y2: `1`,
          children: [(0, i.jsx)(`stop`, {
            offset: `0`,
            stopColor: `#0E2618`
          }), (0, i.jsx)(`stop`, {
            offset: `1`,
            stopColor: `#081711`
          })]
        })]
      }), (0, i.jsx)(`rect`, {
        width: `1400`,
        height: `620`,
        fill: `url(#sky-${e})`
      }), (0, i.jsxs)(`g`, {
        className: `yd-in`,
        children: [(0, i.jsx)(`circle`, {
          cx: `1255`,
          cy: `240`,
          r: `200`,
          fill: `url(#halo-${e})`
        }), (0, i.jsx)(`rect`, {
          className: `yd-rays`,
          x: `700`,
          y: `352`,
          width: `700`,
          height: `48`,
          fill: `url(#band-${e})`
        }), (0, i.jsx)(`circle`, {
          cx: `1255`,
          cy: `240`,
          r: `40`,
          fill: `#FFD27A`,
          opacity: `0.95`
        }), (0, i.jsx)(`circle`, {
          cx: `1255`,
          cy: `240`,
          r: `40`,
          fill: `none`,
          stroke: `#FFF2D0`,
          strokeOpacity: `0.55`
        })]
      }), (0, i.jsx)(`path`, {
        d: `M0 400 H1400 V620 H0 Z`,
        fill: `url(#ground-${e})`
      }), (0, i.jsx)(`path`, {
        d: `M0 400 H1400`,
        stroke: `#7FE3A8`,
        strokeOpacity: `0.45`,
        strokeWidth: `1.5`
      }), (0, i.jsxs)(`g`, {
        className: `yd-in`,
        style: {
          animationDelay: `.12s`
        },
        children: [(0, i.jsxs)(`g`, {
          transform: `translate(880 205)`,
          children: [(0, i.jsx)(`path`, {
            d: `M0 190 V70 L120 0 L240 70 V190 Z`,
            fill: `#0D2016`,
            stroke: `#7FE3A8`,
            strokeOpacity: `0.85`,
            strokeWidth: `2`
          }), (0, i.jsx)(`path`, {
            d: `M0 70 H240`,
            stroke: `#7FE3A8`,
            strokeOpacity: `0.55`,
            strokeWidth: `1.5`
          }), (0, i.jsx)(`rect`, {
            x: `90`,
            y: `106`,
            width: `60`,
            height: `84`,
            fill: `#FFD27A`,
            opacity: `0.9`
          }), (0, i.jsx)(`rect`, {
            x: `90`,
            y: `106`,
            width: `60`,
            height: `84`,
            fill: `none`,
            stroke: `#FFF2D0`,
            strokeOpacity: `0.35`
          })]
        }), (0, i.jsx)(`g`, {
          stroke: `#7FE3A8`,
          strokeOpacity: `0.8`,
          strokeWidth: `1.8`,
          fill: `none`,
          children: [1150, 1232, 1314].map((e, t) => (0, i.jsxs)(`g`, {
            children: [(0, i.jsx)(`path`, {
              d: `M${e} 400 V330 M${e+60} 400 V330 M${e-6} 340 H${e+66} M${e-6} 365 H${e+66} M${e-6} 390 H${e+66}`
            }), [340, 365, 390].map((n, r) => (0, i.jsx)(`path`, {
              className: `yd-grain`,
              style: {
                animationDelay: `${(t*.5+r*.35).toFixed(2)}s`
              },
              d: `M${e} ${n} l6 -5 l6 5 l6 -5 l6 5 l6 -5 l6 5 l6 -5 l6 5 l6 -5 l6 5`,
              stroke: `#FFB627`,
              strokeWidth: `2`
            }, n))]
          }, e))
        }), [
          [1175, 336, 0],
          [1258, 330, 2.6],
          [1338, 340, 5.1],
          [1212, 344, 7.4]
        ].map(([e, t, n]) => (0, i.jsx)(`circle`, {
          className: `yd-mote`,
          style: {
            animationDelay: `${n}s`
          },
          cx: e,
          cy: t,
          r: `2.4`,
          fill: `#FFD27A`
        }, `${e}-${n}`)), (0, i.jsx)(`ellipse`, {
          cx: `1080`,
          cy: `474`,
          rx: `72`,
          ry: `10`,
          fill: `url(#shadow-${e})`
        }), (0, i.jsxs)(`g`, {
          transform: `translate(1035 428)`,
          children: [(0, i.jsx)(`rect`, {
            x: `0`,
            y: `30`,
            width: `90`,
            height: `10`,
            fill: `#16301F`,
            stroke: `#7FE3A8`,
            strokeOpacity: `0.8`,
            strokeWidth: `1.5`
          }), (0, i.jsx)(`rect`, {
            x: `30`,
            y: `0`,
            width: `30`,
            height: `30`,
            rx: `2`,
            fill: `#0D2016`,
            stroke: `#7FE3A8`,
            strokeOpacity: `0.8`,
            strokeWidth: `1.5`
          }), (0, i.jsx)(`circle`, {
            cx: `45`,
            cy: `14`,
            r: `9`,
            fill: `#06110B`,
            stroke: `#FFD27A`,
            strokeOpacity: `0.9`
          }), (0, i.jsx)(`path`, {
            className: `yd-needle`,
            d: `M45 14 V6`,
            stroke: `#FFD27A`,
            strokeWidth: `1.6`
          })]
        }), (0, i.jsxs)(`g`, {
          className: `yd-cart`,
          children: [(0, i.jsx)(`ellipse`, {
            cx: `925`,
            cy: `506`,
            rx: `78`,
            ry: `11`,
            fill: `url(#shadow-${e})`
          }), (0, i.jsxs)(`g`, {
            transform: `translate(880 452)`,
            children: [(0, i.jsx)(`rect`, {
              x: `0`,
              y: `10`,
              width: `90`,
              height: `34`,
              rx: `2`,
              fill: `#0D2016`,
              stroke: `#7FE3A8`,
              strokeOpacity: `0.8`,
              strokeWidth: `1.8`
            }), [0, 1, 2].map(e => (0, i.jsx)(`rect`, {
              x: 8 + e * 27,
              y: `-4`,
              width: `22`,
              height: `14`,
              rx: `2`,
              fill: e % 2 ? `#FF6B3D` : `#35C776`,
              opacity: `0.95`
            }, e)), (0, i.jsxs)(`g`, {
              className: `yd-wheel`,
              children: [(0, i.jsx)(`circle`, {
                cx: `22`,
                cy: `50`,
                r: `9`,
                fill: `#06110B`,
                stroke: `#A6BBAD`,
                strokeWidth: `3`
              }), (0, i.jsx)(`path`, {
                d: `M22 41 V59 M13 50 H31`,
                stroke: `#A6BBAD`,
                strokeWidth: `1.4`
              })]
            }), (0, i.jsxs)(`g`, {
              className: `yd-wheel`,
              children: [(0, i.jsx)(`circle`, {
                cx: `68`,
                cy: `50`,
                r: `9`,
                fill: `#06110B`,
                stroke: `#A6BBAD`,
                strokeWidth: `3`
              }), (0, i.jsx)(`path`, {
                d: `M68 41 V59 M59 50 H77`,
                stroke: `#A6BBAD`,
                strokeWidth: `1.4`
              })]
            }), (0, i.jsx)(`path`, {
              d: `M90 30 H120 L134 20`,
              stroke: `#7FE3A8`,
              strokeOpacity: `0.8`,
              strokeWidth: `2`,
              fill: `none`
            })]
          })]
        })]
      }), (0, i.jsx)(`rect`, {
        width: `1400`,
        height: `620`,
        fill: `url(#fade-${e})`
      })]
    })]
  })
}
var o = [{
    id: `tando-allahyar`,
    name: `Tando Allahyar`,
    province: `Sindh`,
    since: 2020,
    incharge: `Muhammad Irfan`,
    email: `irfan@vgreen.com.pk`,
    crops: [`Tomato`, `Chilli`, `Banana`, `Guava`],
    linked: [`Shaikh Bhirkio`, `Matiari`, `Tando Jam`, `Hyderabad`],
    lon: 68.72,
    lat: 25.46
  }, {
    id: `phool-nagar`,
    name: `Phool Nagar`,
    province: `Punjab`,
    since: 2021,
    incharge: `Muhammad Mamoon`,
    email: `M.mamoon@vgreen.com.pk`,
    crops: [`Corn`, `Sesame`, `Chilli`, `Turmeric`, `Tomato`, `Fenugreek`],
    linked: [`Kasur`, `Renala Khurd`, `Kanganpur`],
    lon: 73.94,
    lat: 31.2
  }, {
    id: `skardu`,
    name: `Skardu`,
    province: `Gilgit-Baltistan`,
    since: 2023,
    incharge: `Umer Shehdad`,
    email: `umer.shahzad@vgreen.com.pk`,
    crops: [`Chilli`, `Tomato`, `Corn`],
    linked: [`Surrounding valleys`],
    lon: 75.63,
    lat: 35.29,
    note: `Plum value chain in process`
  }, {
    id: `badin`,
    name: `Badin`,
    province: `Sindh`,
    since: 2024,
    incharge: `Naqi Haider`,
    email: `naqi.haider@vgreen.com.pk`,
    crops: [`Sugarcane`, `Banana`, `Chilli`, `Tomato`],
    linked: [`Badin and surroundings`],
    lon: 68.84,
    lat: 24.66,
    note: `Sugarcane as an alternate stream`
  }],
  s = {
    name: `Fifth hub, oilseed (canola)`,
    status: `in the making`,
    note: `Seed partner, buy contract, village-level oil extraction. Counted when it runs a full cycle.`
  },
  c = [
    [61.7, 25.1],
    [63.5, 25.3],
    [66.5, 25.2],
    [67.3, 24.6],
    [68.2, 23.7],
    [68.9, 24.3],
    [70.1, 24.3],
    [71, 24.4],
    [71.1, 25.5],
    [70.4, 26.5],
    [70, 27.7],
    [70.4, 28],
    [71.9, 28.5],
    [72.9, 29],
    [73.4, 29.9],
    [74.5, 31],
    [74.6, 31.9],
    [75.3, 32.3],
    [74, 33],
    [74, 33.9],
    [73.9, 34.5],
    [74.6, 35],
    [76, 35.2],
    [77, 35.5],
    [77.8, 35.5],
    [76.2, 36.9],
    [75.4, 36.9],
    [74.5, 37.1],
    [73, 36.9],
    [71.6, 36.6],
    [71.2, 36.1],
    [71.6, 35.5],
    [71.4, 34.9],
    [70.9, 34.2],
    [71.1, 33.9],
    [70.3, 33.4],
    [69.9, 32.6],
    [69.3, 31.9],
    [68.6, 31.8],
    [67.7, 31.4],
    [66.4, 30.8],
    [66.3, 29.9],
    [65, 29.5],
    [63.4, 29.4],
    [61.9, 29],
    [61.1, 28.3],
    [61.7, 27.3],
    [62.8, 26.6],
    [63.2, 26.7],
    [61.9, 25.9]
  ];

function l({
  sel: e,
  onSel: t
}) {
  let n = e => (e - 60.5) / 18 * 620,
    r = e => 560 - (e - 23.2) / 14.2 * 560,
    a = c.map(([e, t], i) => `${i?`L`:`M`} ${n(e).toFixed(1)} ${r(t).toFixed(1)}`).join(` `) + ` Z`;
  return (0, i.jsxs)(`figure`, {
    className: `fig panel p-3 md:p-4 m-0`,
    children: [(0, i.jsxs)(`svg`, {
      viewBox: `0 0 620 560`,
      role: `img`,
      "aria-label": `Map of Pakistan with four hub locations: Tando Allahyar and Badin in Sindh, Phool Nagar in Punjab, Skardu in Gilgit-Baltistan`,
      children: [(0, i.jsx)(`defs`, {
        children: (0, i.jsx)(`pattern`, {
          id: `mapdots`,
          width: `14`,
          height: `14`,
          patternUnits: `userSpaceOnUse`,
          children: (0, i.jsx)(`circle`, {
            cx: `2`,
            cy: `2`,
            r: `1`,
            fill: `rgba(127,227,168,0.28)`
          })
        })
      }), (0, i.jsx)(`path`, {
        d: a,
        fill: `url(#mapdots)`,
        stroke: `var(--green-2)`,
        strokeOpacity: `0.55`,
        strokeWidth: `1.5`,
        strokeLinejoin: `round`
      }), (0, i.jsx)(`path`, {
        d: a,
        fill: `rgba(53,199,118,0.06)`,
        stroke: `none`
      }), (0, i.jsxs)(`g`, {
        className: `mono`,
        fontSize: `9.5`,
        fill: `var(--dim-2)`,
        letterSpacing: `1.5`,
        children: [(0, i.jsx)(`text`, {
          x: n(70.3),
          y: r(30.4),
          children: `PUNJAB`
        }), (0, i.jsx)(`text`, {
          x: n(67.6),
          y: r(26.6),
          children: `SINDH`
        }), (0, i.jsx)(`text`, {
          x: n(64.6),
          y: r(28.2),
          children: `BALOCHISTAN`
        }), (0, i.jsx)(`text`, {
          x: n(70.6),
          y: r(33.9),
          children: `KP`
        }), (0, i.jsx)(`text`, {
          x: n(74.4),
          y: r(36.6),
          children: `GILGIT-BALTISTAN`
        })]
      }), (0, i.jsxs)(`g`, {
        stroke: `var(--gold)`,
        strokeOpacity: `0.35`,
        strokeDasharray: `4 6`,
        fill: `none`,
        children: [(0, i.jsx)(`path`, {
          d: `M ${n(68.72)} ${r(25.46)} L ${n(73.94)} ${r(31.2)} L ${n(75.63)} ${r(35.29)}`
        }), (0, i.jsx)(`path`, {
          d: `M ${n(68.72)} ${r(25.46)} L ${n(68.84)} ${r(24.66)}`
        })]
      }), o.map(a => {
        let o = a.id === e,
          s = n(a.lon),
          c = r(a.lat),
          l = a.lon < 72;
        return (0, i.jsxs)(`g`, {
          className: `cursor-pointer`,
          role: `button`,
          tabIndex: 0,
          "aria-label": `${a.name}, ${a.province}`,
          onClick: () => t(a.id),
          onKeyDown: e => {
            e.key === `Enter` && t(a.id)
          },
          children: [(0, i.jsx)(`circle`, {
            cx: s,
            cy: c,
            r: o ? 22 : 14,
            fill: o ? `rgba(255,182,39,0.18)` : `rgba(53,199,118,0.12)`,
            className: o ? `pulse` : ``
          }), (0, i.jsx)(`circle`, {
            cx: s,
            cy: c,
            r: `7`,
            fill: o ? `var(--gold)` : `var(--green)`,
            stroke: `#06110B`,
            strokeWidth: `2`,
            style: {
              filter: o ? `drop-shadow(0 0 10px var(--gold))` : `none`
            }
          }), (0, i.jsx)(`text`, {
            x: s + (l ? 14 : -14),
            y: c - 10,
            textAnchor: l ? `start` : `end`,
            fontSize: `12.5`,
            fontWeight: `800`,
            fill: o ? `var(--gold)` : `var(--text)`,
            style: {
              fontFamily: `'Bricolage Grotesque', system-ui, sans-serif`
            },
            children: a.name
          }), (0, i.jsxs)(`text`, {
            x: s + (l ? 14 : -14),
            y: c + 5,
            textAnchor: l ? `start` : `end`,
            className: `mono`,
            fontSize: `9`,
            letterSpacing: `1`,
            fill: `var(--dim)`,
            children: [a.province.toUpperCase(), ` · SINCE `, a.since]
          })]
        }, a.id)
      }), (0, i.jsxs)(`g`, {
        transform: `translate(${n(62.2)} ${r(34.6)})`,
        children: [(0, i.jsx)(`circle`, {
          r: `7`,
          fill: `none`,
          stroke: `var(--gold)`,
          strokeDasharray: `3 3`
        }), (0, i.jsx)(`text`, {
          x: `14`,
          y: `4`,
          className: `mono`,
          fontSize: `9`,
          letterSpacing: `1`,
          fill: `var(--dim)`,
          children: `5TH HUB · OILSEED · IN THE MAKING`
        })]
      })]
    }), (0, i.jsx)(`figcaption`, {
      className: `cap mt-2`,
      children: `Stylised map. Pins mark the hubs; each hub serves several clusters of villages around it.`
    })]
  })
}

function u({
  sel: e,
  onSel: t
}) {
  return (0, i.jsxs)(`div`, {
    className: `grid gap-3`,
    children: [o.map(n => {
      let r = n.id === e;
      return (0, i.jsxs)(`button`, {
        onClick: () => t(n.id),
        "aria-pressed": r,
        className: `text-left panel p-5 transition-colors`,
        style: {
          borderColor: r ? `var(--gold)` : void 0,
          background: r ? `rgba(255,182,39,0.06)` : void 0,
          cursor: `pointer`
        },
        children: [(0, i.jsxs)(`div`, {
          className: `flex items-baseline justify-between gap-3 flex-wrap`,
          children: [(0, i.jsxs)(`span`, {
            className: `display text-[1.25rem]`,
            children: [n.name, ` `, (0, i.jsxs)(`span`, {
              className: `dim text-[0.9rem] font-normal`,
              children: [`· `, n.province]
            })]
          }), (0, i.jsxs)(`span`, {
            className: `cap`,
            style: {
              color: r ? `var(--gold)` : `var(--green-2)`
            },
            children: [`since `, n.since]
          })]
        }), (0, i.jsxs)(`div`, {
          className: `grid sm:grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 mt-3 text-[0.92rem]`,
          children: [(0, i.jsx)(`span`, {
            className: `cap`,
            children: `Hub in-charge`
          }), (0, i.jsx)(`span`, {
            className: `font-semibold`,
            children: n.incharge
          }), (0, i.jsx)(`span`, {
            className: `cap`,
            children: `Crops`
          }), (0, i.jsx)(`span`, {
            className: `flex flex-wrap gap-1.5`,
            children: n.crops.map(e => (0, i.jsx)(`span`, {
              className: `mono text-[0.66rem] px-2 py-0.5 rounded-full border`,
              style: {
                borderColor: `var(--line-2)`
              },
              children: e
            }, e))
          }), (0, i.jsx)(`span`, {
            className: `cap`,
            children: `Serves`
          }), (0, i.jsx)(`span`, {
            className: `dim`,
            children: n.linked.join(` · `)
          }), n.note && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(`span`, {
              className: `cap`,
              children: `Note`
            }), (0, i.jsx)(`span`, {
              className: `dim`,
              children: n.note
            })]
          }), (0, i.jsx)(`span`, {
            className: `cap`,
            children: `Contact`
          }), (0, i.jsxs)(`span`, {
            className: `dim`,
            children: [(0, i.jsx)(`a`, {
              href: `mailto:${n.email}?subject=${encodeURIComponent(`${n.name} hub enquiry`)}`,
              className: `no-underline`,
              style: {
                color: `var(--green-2)`
              },
              children: n.email
            }), ` · `, (0, i.jsx)(`a`, {
              href: `tel:+923005003041`,
              className: `no-underline`,
              style: {
                color: `var(--green-2)`
              },
              children: `+92 300 5003041`
            })]
          })]
        })]
      }, n.id)
    }), (0, i.jsxs)(`div`, {
      className: `panel p-5`,
      style: {
        borderStyle: `dashed`
      },
      children: [(0, i.jsxs)(`div`, {
        className: `flex items-baseline justify-between gap-3 flex-wrap`,
        children: [(0, i.jsx)(`span`, {
          className: `display text-[1.1rem]`,
          children: s.name
        }), (0, i.jsxs)(`span`, {
          className: `cap`,
          style: {
            color: `var(--gold)`
          },
          children: [`◌ `, s.status]
        })]
      }), (0, i.jsx)(`p`, {
        className: `m-0 dim text-[0.92rem] mt-2`,
        children: s.note
      })]
    })]
  })
}
var d = [{
  k: `intake`,
  t: `Intake`,
  d: `The farmer group delivers to the hub gate. Every lot is recorded against a farmer, a field and a date, which form the first line of its record.`,
  who: `Farmer group · hub clerk`
}, {
  k: `weigh`,
  t: `Weigh & record`,
  d: `Weighed in front of the farmer and entered into the ledger and into CropSight. The recorded weight is visible to the farmer at the moment of weighing.`,
  who: `Hub clerk · farmer`
}, {
  k: `grade`,
  t: `Grade & sort`,
  d: `Sorted to the buyer's spec for size, colour, damage and moisture. The rejected fraction is shown to the farmer at the hub.`,
  who: `Grading team · hub youth, many of them women`
}, {
  k: `process`,
  t: `Dry / process`,
  d: `Dried on clean racks, blanched, cured or extracted, according to the requirements of the crop's chain. Value previously lost at this stage is retained here.`,
  who: `Hub operators`
}, {
  k: `test`,
  t: `Test`,
  d: `Moisture, aflatoxin and residue screens are sampled per lot, with the results attached to the lot. The report accompanies the crop.`,
  who: `Hub QC · partner lab`
}, {
  k: `pack`,
  t: `Pack & trace`,
  d: `Packed to spec and labelled with the lot code that leads back to the field. Any bag can be traced to the farmer who supplied it.`,
  who: `Hub operators`
}, {
  k: `dispatch`,
  t: `Dispatch & settle`,
  d: `Loaded against the contract. At sale, the farmer receives what the hub receives, with input costs settled from the proceeds of the same sale.`,
  who: `Hub in-charge · VGreen contracts`
}];

function f({
  k: e,
  on: t
}) {
  let n = {
    fill: `none`,
    stroke: t ? `var(--gold)` : `var(--green-2)`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
  };
  switch (e) {
    case `intake`:
      return (0, i.jsxs)(`svg`, {
        viewBox: `0 0 48 48`,
        width: `40`,
        height: `40`,
        children: [(0, i.jsx)(`path`, {
          ...n,
          d: `M4 34 H44 M8 34 V22 H26 V34 M12 22 V14 H22 V22`
        }), (0, i.jsx)(`circle`, {
          cx: `36`,
          cy: `28`,
          r: `4`,
          ...n
        }), (0, i.jsx)(`path`, {
          ...n,
          d: `M30 34 v-3 a6 6 0 0 1 12 0 v3`
        })]
      });
    case `weigh`:
      return (0, i.jsx)(`svg`, {
        viewBox: `0 0 48 48`,
        width: `40`,
        height: `40`,
        children: (0, i.jsx)(`path`, {
          ...n,
          d: `M24 8 V40 M8 40 H40 M8 16 H40 M10 16 L4 28 H16 Z M38 16 L32 28 H44 Z`
        })
      });
    case `grade`:
      return (0, i.jsxs)(`svg`, {
        viewBox: `0 0 48 48`,
        width: `40`,
        height: `40`,
        children: [(0, i.jsx)(`circle`, {
          cx: `12`,
          cy: `14`,
          r: `5`,
          ...n
        }), (0, i.jsx)(`circle`, {
          cx: `26`,
          cy: `12`,
          r: `4`,
          ...n
        }), (0, i.jsx)(`circle`, {
          cx: `38`,
          cy: `15`,
          r: `3`,
          ...n
        }), (0, i.jsx)(`path`, {
          ...n,
          d: `M6 30 H42 M6 30 v10 h36 v-10`
        }), (0, i.jsx)(`path`, {
          ...n,
          d: `M16 30 v10 M30 30 v10`
        })]
      });
    case `process`:
      return (0, i.jsxs)(`svg`, {
        viewBox: `0 0 48 48`,
        width: `40`,
        height: `40`,
        children: [(0, i.jsx)(`path`, {
          ...n,
          d: `M6 12 H42 M6 22 H42 M6 32 H42 M10 12 V40 M38 12 V40`
        }), (0, i.jsx)(`path`, {
          ...n,
          d: `M18 6 q2 -3 4 0 q2 3 4 0 M28 6 q2 -3 4 0 q2 3 4 0`
        })]
      });
    case `test`:
      return (0, i.jsxs)(`svg`, {
        viewBox: `0 0 48 48`,
        width: `40`,
        height: `40`,
        children: [(0, i.jsx)(`path`, {
          ...n,
          d: `M18 6 H30 M20 6 V22 L10 40 H38 L28 22 V6`
        }), (0, i.jsx)(`path`, {
          ...n,
          d: `M16 32 H32`
        })]
      });
    case `pack`:
      return (0, i.jsxs)(`svg`, {
        viewBox: `0 0 48 48`,
        width: `40`,
        height: `40`,
        children: [(0, i.jsx)(`path`, {
          ...n,
          d: `M8 18 L24 10 L40 18 V36 L24 44 L8 36 Z M8 18 L24 26 L40 18 M24 26 V44`
        }), (0, i.jsx)(`path`, {
          ...n,
          d: `M30 13 L14 21`
        })]
      });
    default:
      return (0, i.jsxs)(`svg`, {
        viewBox: `0 0 48 48`,
        width: `40`,
        height: `40`,
        children: [(0, i.jsx)(`path`, {
          ...n,
          d: `M4 32 H30 V16 H4 Z M30 22 H38 L44 28 V32 H30`
        }), (0, i.jsx)(`circle`, {
          cx: `12`,
          cy: `36`,
          r: `4`,
          ...n
        }), (0, i.jsx)(`circle`, {
          cx: `36`,
          cy: `36`,
          r: `4`,
          ...n
        })]
      })
  }
}

function p() {
  let [e, t] = (0, r.useState)(0), [n, a] = (0, r.useState)(!1), [o, s] = (0, r.useState)(!1), c = (0, r.useRef)(null);
  (0, r.useEffect)(() => {
    let e = c.current;
    if (!e || o) return;
    let n = new IntersectionObserver(e => {
      e.some(e => e.isIntersecting) && (s(!0), t(0), a(!0), n.disconnect())
    }, {
      threshold: .4
    });
    return n.observe(e), () => n.disconnect()
  }, [o]), (0, r.useEffect)(() => {
    if (!n) return;
    let e = setInterval(() => t(e => e + 1 >= d.length ? (a(!1), e) : e + 1), 3200);
    return () => clearInterval(e)
  }, [n]);
  let l = d[e];
  return (0, i.jsxs)(`div`, {
    ref: c,
    className: `grid gap-5`,
    children: [(0, i.jsx)(`div`, {
      className: `grid grid-cols-7 gap-2`,
      children: d.map((n, r) => (0, i.jsxs)(`button`, {
        onClick: () => {
          t(r), a(!1)
        },
        "aria-pressed": r === e,
        className: `panel p-3 text-center transition-colors grid gap-1 justify-items-center min-w-0`,
        style: {
          borderColor: r === e ? `var(--gold)` : r < e ? `var(--green)` : void 0,
          background: r === e ? `rgba(255,182,39,0.07)` : void 0,
          cursor: `pointer`
        },
        children: [(0, i.jsx)(f, {
          k: n.k,
          on: r === e
        }), (0, i.jsxs)(`span`, {
          className: `mono text-[0.56rem] sm:text-[0.62rem] tracking-[0.04em] sm:tracking-[0.08em] uppercase break-words`,
          style: {
            color: r === e ? `var(--gold)` : `var(--dim)`
          },
          children: [r + 1, ` · `, n.t]
        })]
      }, n.k))
    }), (0, i.jsxs)(`div`, {
      className: `grid lg:grid-cols-[1fr_auto] gap-5 items-start`,
      children: [(0, i.jsxs)(`div`, {
        className: `frame-in`,
        children: [(0, i.jsxs)(`div`, {
          className: `cap`,
          children: [`Step `, e + 1, ` of `, d.length, ` · `, l.who]
        }), (0, i.jsx)(`h3`, {
          className: `display text-[1.6rem] mt-1`,
          children: l.t
        }), (0, i.jsx)(`p`, {
          className: `dim mt-3 m-0 text-[1rem] leading-relaxed max-w-[62ch]`,
          children: l.d
        })]
      }, l.k), (0, i.jsxs)(`div`, {
        className: `flex gap-2`,
        children: [(0, i.jsx)(`button`, {
          className: `btn`,
          onClick: () => {
            t((e + d.length - 1) % d.length), a(!1)
          },
          children: `← Back`
        }), (0, i.jsx)(`button`, {
          className: `btn on`,
          onClick: () => {
            t((e + 1) % d.length), a(!1)
          },
          children: `Next →`
        }), (0, i.jsx)(`button`, {
          className: `btn ${n?`green on`:`green`}`,
          onClick: () => {
            n ? a(!1) : (e === d.length - 1 && t(0), a(!0))
          },
          children: n ? `Pause` : `Play`
        })]
      })]
    })]
  })
}
var m = `/img/training-room.jpg`,
  h = `/img/drone-survey.jpg`,
  g = `/img/group-vehicles.jpg`,
  _ = `/img/tahir-canal.jpg`,
  v = `/img/training-group-field.jpg`,
  y = `/img/phool-nagar-shed.jpg`,
  b = `/img/phool-nagar-warehouse.jpg`,
  x = `/img/phool-nagar-residence.jpg`,
  S = `/img/hub-farmer-portrait.jpg`,
  C = `/img/phool-nagar-lab.jpg`,
  w = [{
    k: `field`,
    t: `Farmer's field`,
    d: `Sown against a contract, on the farmer's own land.`
  }, {
    k: `growth`,
    t: `Growth`,
    d: `Nutrition and agronomy support through the season.`
  }, {
    k: `harvest`,
    t: `Harvest`,
    d: `Picked, cut or pulled at the hub's call, timed to the buyer's spec.`
  }, {
    k: `accumulate`,
    t: `Accumulation`,
    d: `Small lots from many farmers gather into one, at the hub gate.`
  }, {
    k: `hub`,
    t: `The hub`,
    d: `Weighed, graded, dried, tested, packed and traced across the next seven steps.`
  }];

function T({
  k: e
}) {
  let t = {
    fill: `none`,
    stroke: `var(--green-2)`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`
  };
  switch (e) {
    case `field`:
      return (0, i.jsxs)(`svg`, {
        viewBox: `0 0 48 48`,
        width: `34`,
        height: `34`,
        children: [(0, i.jsx)(`path`, {
          ...t,
          d: `M4 14 H44 M4 24 H44 M4 34 H44`
        }), (0, i.jsx)(`path`, {
          ...t,
          d: `M10 34 V10 M22 34 V10 M34 34 V10`,
          strokeDasharray: `1 6`
        })]
      });
    case `growth`:
      return (0, i.jsxs)(`svg`, {
        viewBox: `0 0 48 48`,
        width: `34`,
        height: `34`,
        children: [(0, i.jsx)(`path`, {
          ...t,
          d: `M24 40 V18`
        }), (0, i.jsx)(`path`, {
          ...t,
          d: `M24 22 C 14 22 12 12 12 8 C 20 8 24 14 24 22 Z`
        }), (0, i.jsx)(`path`, {
          ...t,
          d: `M24 28 C 34 28 36 18 36 14 C 28 14 24 20 24 28 Z`
        }), (0, i.jsx)(`path`, {
          ...t,
          d: `M8 40 H40`
        })]
      });
    case `harvest`:
      return (0, i.jsxs)(`svg`, {
        viewBox: `0 0 48 48`,
        width: `34`,
        height: `34`,
        children: [(0, i.jsx)(`path`, {
          ...t,
          d: `M14 40 C 8 30 10 18 20 10 C 24 18 22 30 14 40 Z`
        }), (0, i.jsx)(`path`, {
          ...t,
          d: `M14 40 C 20 30 18 18 24 10`
        }), (0, i.jsx)(`path`, {
          ...t,
          d: `M30 40 C 26 32 27 22 34 16 C 38 22 37 32 30 40 Z`
        }), (0, i.jsx)(`path`, {
          ...t,
          d: `M6 40 H42`
        })]
      });
    case `accumulate`:
      return (0, i.jsxs)(`svg`, {
        viewBox: `0 0 48 48`,
        width: `34`,
        height: `34`,
        children: [(0, i.jsx)(`path`, {
          ...t,
          d: `M6 20 L16 14 L26 20 V32 L16 38 L6 32 Z M6 20 L16 26 L26 20 M16 26 V38`
        }), (0, i.jsx)(`path`, {
          ...t,
          d: `M26 24 L34 20 L42 24 V34 L34 38 L26 34 Z M26 24 L34 28 L42 24 M34 28 V38`
        })]
      });
    default:
      return (0, i.jsxs)(`svg`, {
        viewBox: `0 0 48 48`,
        width: `34`,
        height: `34`,
        children: [(0, i.jsx)(`path`, {
          ...t,
          d: `M4 34 L24 22 L44 34 M8 30 V42 H40 V30`
        }), (0, i.jsx)(`path`, {
          ...t,
          d: `M20 42 V32 H28 V42`
        })]
      })
  }
}

function E() {
  return (0, i.jsxs)(`div`, {
    className: `grid gap-6`,
    children: [(0, i.jsx)(`div`, {
      className: `grid grid-cols-3 sm:grid-cols-5 gap-3`,
      children: w.map((e, t) => (0, i.jsxs)(`div`, {
        className: `grid gap-2 justify-items-start`,
        children: [(0, i.jsx)(`div`, {
          className: `flex items-center gap-2`,
          children: (0, i.jsx)(`span`, {
            className: `panel flex items-center justify-center`,
            style: {
              width: 52,
              height: 52,
              borderColor: t === w.length - 1 ? `var(--gold)` : `var(--line)`
            },
            children: (0, i.jsx)(T, {
              k: e.k
            })
          })
        }), (0, i.jsxs)(`span`, {
          className: `mono text-[0.62rem] tracking-[0.08em] uppercase`,
          style: {
            color: t === w.length - 1 ? `var(--gold)` : `var(--dim)`
          },
          children: [t + 1, ` · `, e.t]
        }), (0, i.jsx)(`p`, {
          className: `cap m-0 leading-snug`,
          children: e.d
        })]
      }, e.k))
    }), (0, i.jsxs)(`div`, {
      className: `relative overflow-hidden rounded-[10px]`,
      style: {
        minHeight: 200
      },
      children: [(0, i.jsxs)(`div`, {
        className: `absolute inset-0 grid grid-cols-2`,
        children: [(0, i.jsx)(`div`, {
          style: {
            backgroundImage: `url(${y})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            filter: `saturate(0.55) brightness(0.6) blur(1.5px)`
          }
        }), (0, i.jsx)(`div`, {
          style: {
            backgroundImage: `url(${b})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            filter: `saturate(0.55) brightness(0.6) blur(1.5px)`
          }
        })]
      }), (0, i.jsx)(`div`, {
        className: `absolute inset-0`,
        style: {
          background: `linear-gradient(180deg, rgba(6,17,11,0.55) 0%, rgba(6,17,11,0.82) 100%)`
        }
      }), (0, i.jsxs)(`div`, {
        className: `relative p-6 grid gap-2 justify-items-start`,
        style: {
          minHeight: 200,
          alignContent: `center`
        },
        children: [(0, i.jsx)(`span`, {
          className: `eyebrow`,
          children: `What it becomes`
        }), (0, i.jsx)(`p`, {
          className: `m-0 text-[1.05rem] max-w-[56ch]`,
          style: {
            color: `var(--text)`
          },
          children: `A covered yard: the standard the whole network is being built out to.`
        })]
      })]
    })]
  })
}
var D = [{
  src: b,
  alt: `Phool Nagar hub storage warehouse`,
  cap: `The storage warehouse`
}, {
  src: x,
  alt: `Covered walkway at the Phool Nagar hub staff residence`,
  cap: `Staff residence`
}, {
  src: C,
  alt: `Testing room at the Phool Nagar hub`,
  cap: `The testing room`
}];

function O() {
  return (0, i.jsxs)(`div`, {
    className: `grid gap-3`,
    children: [(0, i.jsx)(`div`, {
      className: `grid sm:grid-cols-3 gap-3`,
      children: D.map(e => (0, i.jsxs)(`figure`, {
        className: `panel overflow-hidden m-0`,
        children: [(0, i.jsx)(`img`, {
          src: e.src,
          alt: e.alt,
          className: `w-full h-[200px] object-cover object-center block no-save`,
          loading: `lazy`,
          draggable: !1,
          onContextMenu: e => e.preventDefault()
        }), (0, i.jsx)(`figcaption`, {
          className: `cap p-2`,
          children: e.cap
        })]
      }, e.cap))
    }), (0, i.jsx)(`p`, {
      className: `cap m-0`,
      children: `Phool Nagar hub, today. The build-out at the other hubs is ongoing.`
    })]
  })
}
var k = [{
    t: `Field training school`,
    k: `school`,
    d: `Classroom sessions at the hub cover stage-wise nutrition, scouting thresholds, the correct chemical at the correct time, harvest and handling. Each session is followed by practical work with the group on the standing crop.`,
    cap: `Run by VGreen agronomists with the hub team`,
    photo: m,
    pos: `object-[center_35%]`
  }, {
    t: `Baithak: the cluster meeting`,
    k: `baithak`,
    d: `Elders, group leads and the hub in-charge in one circle: the season's crop, the buyer's spec, the price mechanism, the rules of the pool. Decisions are made as one unit, disputes settled in the open.`,
    cap: `Before sowing and before harvest, every season`,
    photo: g,
    pos: `object-[center_38%]`
  }, {
    t: `Harvest-day briefing`,
    k: `harvest`,
    d: `The hub in-charge sits with the farmer groups the evening before picking to agree grades, moisture limits, containers, timing and the order of delivery. Quality terms are settled at this meeting, before any lot reaches the gate.`,
    cap: `Hub in-charge with the farmer groups`,
    photo: v,
    pos: `object-[center_45%]`
  }],
  A = [{
    src: _,
    cap: `At the watercourse with a hub farmer`,
    pos: `object-[center_55%]`
  }, {
    src: h,
    cap: `A cluster visit`,
    pos: `object-[center_45%]`
  }, {
    src: S,
    cap: `A hub farmer, Phool Nagar`,
    pos: `object-[center_40%]`
  }];

function j() {
  return (0, i.jsxs)(`div`, {
    className: `grid gap-4`,
    children: [(0, i.jsx)(`div`, {
      className: `grid md:grid-cols-3 gap-4`,
      children: k.map(e => (0, i.jsxs)(`div`, {
        className: `panel overflow-hidden grid gap-3 content-start`,
        style: {
          borderTop: `3px solid var(--green)`
        },
        children: [(0, i.jsx)(`img`, {
          src: e.photo,
          alt: e.t,
          className: `w-full h-[210px] object-cover ${e.pos} block no-save`,
          loading: `lazy`,
          draggable: !1,
          onContextMenu: e => e.preventDefault()
        }), (0, i.jsxs)(`div`, {
          className: `px-5 pb-5 grid gap-3`,
          children: [(0, i.jsx)(`h3`, {
            className: `display text-[1.2rem] leading-tight`,
            children: e.t
          }), (0, i.jsx)(`p`, {
            className: `m-0 dim text-[0.94rem] leading-relaxed`,
            children: e.d
          }), (0, i.jsx)(`span`, {
            className: `cap`,
            children: e.cap
          })]
        })]
      }, e.k))
    }), (0, i.jsx)(`div`, {
      className: `grid grid-cols-1 sm:grid-cols-3 gap-3`,
      children: A.map(e => (0, i.jsxs)(`figure`, {
        className: `panel overflow-hidden m-0`,
        children: [(0, i.jsx)(`img`, {
          src: e.src,
          alt: e.cap,
          className: `w-full h-[170px] object-cover ${e.pos} block no-save`,
          loading: `lazy`,
          draggable: !1,
          onContextMenu: e => e.preventDefault()
        }), (0, i.jsx)(`figcaption`, {
          className: `cap p-2`,
          children: e.cap
        })]
      }, e.cap))
    })]
  })
}

function M({
  onModel: e
}) {
  let [t, s] = (0, r.useState)(o[0].id);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(`section`, {
      className: `hero relative overflow-hidden snap flex flex-col`,
      style: {
        padding: `20px 0 20px`,
        height: `auto`,
        minHeight: `calc(100vh - 64px)`
      },
      children: [(0, i.jsx)(a, {}), (0, i.jsxs)(`div`, {
        className: `wrap relative flex-1 flex flex-col justify-center gap-5 frame-in`,
        children: [(0, i.jsx)(`span`, {
          className: `eyebrow`,
          children: `The hubs`
        }), (0, i.jsxs)(`h1`, {
          className: `display text-[clamp(2rem,3.6vw,3.4rem)] m-0 max-w-[17ch]`,
          children: [`The `, (0, i.jsx)(`span`, {
            style: {
              color: `var(--gold)`
            },
            children: `hub network`
          }), `: four hubs, eighteen clusters.`]
        }), (0, i.jsx)(`p`, {
          className: `dim text-[1.05rem] max-w-[50ch] m-0`,
          children: `A hub is a working yard near the farm where a crop is weighed, graded, dried, tested, packed and traced, and where the contract that sold it before sowing is honoured. The sections below set out the locations of the hubs, the people who run them, and the sequence of work inside one.`
        })]
      })]
    }), (0, i.jsx)(`section`, {
      id: `where`,
      className: `sec`,
      children: (0, i.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, i.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, i.jsx)(`span`, {
            className: `eyebrow`,
            children: `Where they are`
          }), (0, i.jsxs)(`h2`, {
            children: [`Hub locations in `, (0, i.jsx)(`span`, {
              style: {
                color: `var(--gold)`
              },
              children: `Sindh, Punjab and Gilgit-Baltistan.`
            })]
          }), (0, i.jsx)(`p`, {
            children: `Each hub anchors several clusters of villages around it, 18 clusters across the four hubs at present. A fifth hub is in preparation. Each hub has a named person in charge, with direct contact details.`
          })]
        }), (0, i.jsxs)(`div`, {
          className: `grid lg:grid-cols-[1fr_1fr] gap-6 items-start`,
          children: [(0, i.jsx)(l, {
            sel: t,
            onSel: s
          }), (0, i.jsx)(u, {
            sel: t,
            onSel: s
          })]
        })]
      })
    }), (0, i.jsx)(`section`, {
      id: `walk`,
      className: `sec`,
      children: (0, i.jsxs)(`div`, {
        className: `wrap grid gap-10`,
        children: [(0, i.jsxs)(`div`, {
          className: `grid gap-4`,
          children: [(0, i.jsxs)(`div`, {
            className: `sec-head`,
            children: [(0, i.jsx)(`span`, {
              className: `eyebrow`,
              children: `How a crop gets here`
            }), (0, i.jsxs)(`h2`, {
              children: [`From the field to the `, (0, i.jsx)(`span`, {
                style: {
                  color: `var(--gold)`
                },
                children: `hub gate.`
              })]
            }), (0, i.jsx)(`p`, {
              children: `Before any of the seven steps below, the crop is sown, grown and harvested on the farmer's own land, then gathered from many small farmers into a single lot at the gate.`
            })]
          }), (0, i.jsx)(E, {}), (0, i.jsx)(O, {})]
        }), (0, i.jsxs)(`div`, {
          className: `grid gap-4`,
          children: [(0, i.jsxs)(`div`, {
            className: `sec-head`,
            children: [(0, i.jsx)(`span`, {
              className: `eyebrow`,
              children: `A day inside a hub`
            }), (0, i.jsxs)(`h2`, {
              children: [`The seven steps inside `, (0, i.jsx)(`span`, {
                style: {
                  color: `var(--gold)`
                },
                children: `a hub.`
              })]
            }), (0, i.jsx)(`p`, {
              children: `The same seven steps apply in every hub, for every crop.`
            })]
          }), (0, i.jsx)(p, {})]
        })]
      })
    }), (0, i.jsx)(`section`, {
      id: `school`,
      className: `sec`,
      children: (0, i.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, i.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, i.jsx)(`span`, {
            className: `eyebrow`,
            children: `Training and meetings`
          }), (0, i.jsxs)(`h2`, {
            children: [`Every hub also serves as a training and `, (0, i.jsx)(`span`, {
              style: {
                color: `var(--gold)`
              },
              children: `meeting place.`
            })]
          }), (0, i.jsx)(`p`, {
            children: `The cluster trains, takes decisions and settles accounts at the hub, through the field training school, the baithak and the harvest-day briefing. The founders attended the first of each.`
          })]
        }), (0, i.jsx)(j, {})]
      })
    }), (0, i.jsx)(`section`, {
      id: `journey`,
      className: `sec`,
      children: (0, i.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, i.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, i.jsx)(`span`, {
            className: `eyebrow`,
            children: `The hub journey`
          }), (0, i.jsx)(`h2`, {
            children: `The hub network, 2020 to today`
          })]
        }), (0, i.jsx)(`ol`, {
          className: `list-none p-0 m-0 grid md:grid-cols-5 gap-3`,
          children: [...o.map(e => ({
            y: String(e.since),
            t: e.name,
            d: `${e.province} · ${e.incharge}`,
            live: !0
          })), {
            y: `Next`,
            t: `Oilseed hub`,
            d: `In the making · counted after a full cycle`,
            live: !1
          }].map(e => (0, i.jsxs)(`li`, {
            className: `panel p-5 grid gap-1`,
            style: {
              borderStyle: e.live ? `solid` : `dashed`
            },
            children: [(0, i.jsx)(`span`, {
              className: `num text-[1.5rem] font-semibold`,
              style: {
                color: e.live ? `var(--green-2)` : `var(--gold)`
              },
              children: e.y
            }), (0, i.jsx)(`span`, {
              className: `display text-[1.15rem]`,
              children: e.t
            }), (0, i.jsx)(`span`, {
              className: `cap`,
              children: e.d
            })]
          }, e.t))
        })]
      })
    }), (0, i.jsxs)(`section`, {
      className: `sec relative overflow-hidden`,
      style: {
        minHeight: 0,
        padding: `56px 0`
      },
      children: [(0, i.jsx)(n, {
        tone: `green`,
        side: `bottom`
      }), (0, i.jsxs)(`div`, {
        className: `wrap relative text-center grid gap-3 justify-items-center`,
        children: [(0, i.jsx)(`span`, {
          className: `eyebrow`,
          children: `Visit a hub`
        }), (0, i.jsxs)(`h2`, {
          className: `text-[clamp(1.3rem,2.2vw,1.8rem)] m-0 max-w-[46ch]`,
          children: [`Hub visits are open to farmers, buyers `, (0, i.jsx)(`span`, {
            style: {
              color: `var(--gold)`
            },
            children: `and lenders.`
          })]
        }), (0, i.jsxs)(`div`, {
          className: `flex flex-wrap gap-3 justify-center`,
          children: [(0, i.jsx)(`a`, {
            className: `btn primary`,
            href: `mailto:kisan@vgreen.com.pk?subject=Visiting a hub`,
            children: `Arrange a visit →`
          }), (0, i.jsx)(`a`, {
            className: `btn`,
            href: `tel:+923005003041`,
            children: `+92 300 5003041`
          }), (0, i.jsx)(`button`, {
            className: `btn`,
            onClick: e,
            children: `How the model works →`
          })]
        })]
      })]
    })]
  })
}
export {
  M as
  default
};