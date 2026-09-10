import {
  r as e,
  t
} from "./vendor-Bfx28lbG.js";
import "./CalmBackdrop-CDqYysf7.js";
var n = e(),
  r = t();

function i() {
  let e = (0, n.useId)().replace(/:/g, ``),
    t = 1090,
    i = (e, n = 175) => [t + n * Math.cos(e * Math.PI / 180), 330 + n * Math.sin(e * Math.PI / 180)],
    a = i(150),
    o = i(270),
    s = i(30);
  return (0, r.jsx)(`div`, {
    className: `absolute inset-0 pointer-events-none overflow-hidden`,
    "aria-hidden": !0,
    children: (0, r.jsxs)(`svg`, {
      viewBox: `0 0 1400 620`,
      preserveAspectRatio: `xMaxYMid slice`,
      className: `absolute inset-0 w-full h-full`,
      children: [(0, r.jsxs)(`defs`, {
        children: [(0, r.jsxs)(`linearGradient`, {
          id: `fade-${e}`,
          x1: `0`,
          y1: `0`,
          x2: `1`,
          y2: `0`,
          children: [(0, r.jsx)(`stop`, {
            offset: `0`,
            stopColor: `#06110B`,
            stopOpacity: `1`
          }), (0, r.jsx)(`stop`, {
            offset: `0.45`,
            stopColor: `#06110B`,
            stopOpacity: `0.85`
          }), (0, r.jsx)(`stop`, {
            offset: `0.75`,
            stopColor: `#06110B`,
            stopOpacity: `0`
          })]
        }), (0, r.jsxs)(`radialGradient`, {
          id: `glow-${e}`,
          children: [(0, r.jsx)(`stop`, {
            offset: `0`,
            stopColor: `#FFB627`,
            stopOpacity: `0.22`
          }), (0, r.jsx)(`stop`, {
            offset: `1`,
            stopColor: `#FFB627`,
            stopOpacity: `0`
          })]
        })]
      }), (0, r.jsx)(`rect`, {
        width: `1400`,
        height: `620`,
        fill: `#06110B`
      }), (0, r.jsx)(`circle`, {
        cx: t,
        cy: 330,
        r: 265,
        fill: `url(#glow-${e})`
      }), (0, r.jsxs)(`g`, {
        className: `spin`,
        style: {
          transformOrigin: `${t}px 330px`
        },
        children: [(0, r.jsx)(`circle`, {
          cx: t,
          cy: 330,
          r: 215,
          fill: `none`,
          stroke: `#7FE3A8`,
          strokeOpacity: `0.18`,
          strokeDasharray: `2 10`
        }), (0, r.jsx)(`circle`, {
          cx: t,
          cy: 330,
          r: 237,
          fill: `none`,
          stroke: `#7FE3A8`,
          strokeOpacity: `0.1`,
          strokeDasharray: `1 14`
        })]
      }), (0, r.jsx)(`circle`, {
        cx: t,
        cy: 330,
        r: 175,
        fill: `none`,
        stroke: `#7FE3A8`,
        strokeOpacity: `0.35`,
        strokeWidth: `1.5`
      }), (0, r.jsx)(`path`, {
        d: `M ${a[0]} ${a[1]} A 175 175 0 0 1 ${o[0]} ${o[1]}`,
        fill: `none`,
        stroke: `#35C776`,
        strokeWidth: `3`,
        strokeLinecap: `round`
      }), (0, r.jsx)(`path`, {
        d: `M ${o[0]} ${o[1]} A 175 175 0 0 1 ${s[0]} ${s[1]}`,
        fill: `none`,
        stroke: `#FFB627`,
        strokeWidth: `3`,
        strokeLinecap: `round`
      }), (0, r.jsx)(`path`, {
        d: `M ${s[0]} ${s[1]} Q ${t} 330 ${a[0]} ${a[1]}`,
        fill: `none`,
        stroke: `#FFD27A`,
        strokeOpacity: `0.7`,
        strokeWidth: `1.5`,
        strokeDasharray: `6 6`,
        className: `dash`
      }), [
        [a, `FARMER`, `#35C776`],
        [o, `HUB`, `#7FE3A8`],
        [s, `BUYER`, `#FFB627`]
      ].map(([e, t, n]) => {
        let [i, a] = e;
        return (0, r.jsxs)(`g`, {
          children: [(0, r.jsx)(`circle`, {
            cx: i,
            cy: a,
            r: `30`,
            fill: `#10231A`,
            stroke: n,
            strokeWidth: `2`
          }), (0, r.jsx)(`text`, {
            x: i,
            y: a + 4,
            textAnchor: `middle`,
            fontSize: `11`,
            fontWeight: `800`,
            fill: `#EEF3EC`,
            fontFamily: `Bricolage Grotesque, system-ui, sans-serif`,
            children: t
          })]
        }, t)
      }), (0, r.jsx)(`text`, {
        x: t,
        y: 334,
        textAnchor: `middle`,
        fontSize: `11`,
        fontWeight: `800`,
        fill: `#7FE3A8`,
        fillOpacity: `0.75`,
        fontFamily: `Bricolage Grotesque, system-ui, sans-serif`,
        letterSpacing: `1`,
        children: `VGREEN`
      }), (0, r.jsx)(`text`, {
        x: 950,
        y: 545,
        textAnchor: `middle`,
        fontSize: `10`,
        fill: `#35C776`,
        fontFamily: `JetBrains Mono, monospace`,
        letterSpacing: `2`,
        children: `CROP & PAYMENT`
      }), (0, r.jsx)(`text`, {
        x: 1230,
        y: 545,
        textAnchor: `middle`,
        fontSize: `10`,
        fill: `#FFB627`,
        fontFamily: `JetBrains Mono, monospace`,
        letterSpacing: `2`,
        children: `OFFTAKE CONTRACT`
      }), (0, r.jsx)(`text`, {
        x: t,
        y: 567,
        textAnchor: `middle`,
        fontSize: `10`,
        fill: `#FFD27A`,
        fontFamily: `JetBrains Mono, monospace`,
        letterSpacing: `2`,
        children: `SETTLED AT SALE · NOTHING HIDDEN`
      }), (0, r.jsx)(`rect`, {
        width: `1400`,
        height: `620`,
        fill: `url(#fade-${e})`
      })]
    })
  })
}
var a = {
  mirror: [`The farmer contract`, `VGreen signs with the farmer pool the same terms it signed with the buyer: price, grades and delivery calendar, fixed at sowing. The farmer sees the buyer's price and the hub's share, disclosed line by line. Nothing between the two documents is withheld.`],
  offtake: [`The offtake contract`, `Before the season starts, the buyer commits: which crop, what specification, how much, on what calendar. That commitment is what the whole season is built around. Demand is established first, and planting follows.`],
  farm: [`The farm`, `Farmer pools inside clusters grow to an agreed plan covering variety, nutrition, protection and harvest window. A processor's contract is larger than any single smallholder can fill; the pool fills it collectively, and governs itself while doing so.`],
  vgreen: [`VGreen`, `The managing counterparty in the middle. VGreen holds both contracts, runs the field teams and CropSight, and settles all parties at sale. VGreen never owns the crop; it manages the season so that both sides receive exactly what they signed for.`],
  hub: [`The hub`, `Grading, drying, sorting and storage minutes from the field, carried out under cover rather than on open ground. Every lot is recorded: farmer, field, grade and remarks. The hub is a shared facility serving both sides of the two contracts above.`],
  market: [`The market: three dimensions`, `One chain serves three kinds of demand: food and agri processors, exporters, and energy and biofuel buyers. Each receives the same discipline: contracted supply, hub grading, testing and traceability.`],
  payment: [`The buyer pays`, `Crop payment plus the per-kg hub fee, which is the price of graded, tested, traceable, on-calendar supply. The fee is charged to the buyer and is collected by whoever holds the offtake: VGreen before a cluster has a hub of its own, and the hub itself once the hub contracts directly. What a farmer pays for inputs and services is a separate matter, and every fee and margin between the buyer’s price and the farmer’s settlement is disclosed.`],
  settle: [`The farmer is paid in full`, `At sale, the farmer receives the full contracted value. Whatever was carried through the season, such as inputs and services, settles inside the contract the farmer holds and is visible line by line. Every deduction is disclosed to the farmer.`],
  support: [`Season support, carried to sale`, `From VGreen to the farm all season long: Embedded Working Capital, inputs in kind, technology, and advisory. The farmer pays nothing from pocket during the season. Costs are carried and then settled at sale inside the contract the farmer holds.`]
};

function o({
  id: e,
  label: t,
  sub: n,
  active: i,
  onClick: a,
  tone: o
}) {
  let s = o === `green` ? `var(--green)` : o === `gold` ? `var(--gold)` : `var(--text)`;
  return (0, r.jsxs)(`button`, {
    onClick: a,
    className: `panel p-4 text-left transition-colors`,
    style: {
      borderColor: i ? s : `var(--line)`,
      background: i ? o === `green` ? `var(--green-glow)` : o === `gold` ? `var(--gold-glow)` : `var(--surface-2)` : void 0
    },
    children: [(0, r.jsx)(`b`, {
      className: `block text-[0.95rem] mb-1`,
      style: {
        color: i ? s : `var(--text)`
      },
      children: t
    }), (0, r.jsx)(`span`, {
      className: `dim text-[0.78rem] leading-snug`,
      children: n
    })]
  })
}

function s() {
  let [e, t] = (0, n.useState)(`vgreen`), i = a[e];
  return (0, r.jsxs)(`div`, {
    className: `grid gap-6`,
    children: [(0, r.jsxs)(`div`, {
      children: [(0, r.jsx)(`div`, {
        className: `cap mb-2`,
        children: `1 · The contracts`
      }), (0, r.jsxs)(`div`, {
        className: `grid sm:grid-cols-[1fr_auto_1fr] gap-3 items-center`,
        children: [(0, r.jsx)(o, {
          id: `mirror`,
          label: `THE FARMER CONTRACT`,
          sub: `VGreen ↔ Farmer pool: price, grades, calendar, fixed at sowing`,
          active: e === `mirror`,
          onClick: () => t(`mirror`),
          tone: `green`
        }), (0, r.jsxs)(`span`, {
          className: `cap text-center hidden sm:block`,
          style: {
            color: `var(--dim-2)`
          },
          children: [`the same terms`, (0, r.jsx)(`br`, {}), `in both`]
        }), (0, r.jsx)(o, {
          id: `offtake`,
          label: `OFFTAKE CONTRACT`,
          sub: `Buyer ↔ VGreen: crop, spec, volume, calendar, before the season`,
          active: e === `offtake`,
          onClick: () => t(`offtake`),
          tone: `gold`
        })]
      }), (0, r.jsx)(`p`, {
        className: `cap mt-2`,
        style: {
          color: `var(--green-2)`
        },
        children: `The farmer sees the buyer's price and the hub's share, both disclosed.`
      })]
    }), (0, r.jsxs)(`div`, {
      children: [(0, r.jsx)(`div`, {
        className: `cap mb-2`,
        children: `2 · The crop`
      }), (0, r.jsxs)(`div`, {
        className: `grid grid-cols-2 lg:grid-cols-4 gap-3`,
        children: [(0, r.jsx)(o, {
          id: `farm`,
          label: `FARM`,
          sub: `Farmer pools · clusters, grown to the plan`,
          active: e === `farm`,
          onClick: () => t(`farm`),
          tone: `green`
        }), (0, r.jsx)(o, {
          id: `vgreen`,
          label: `VGREEN`,
          sub: `Manages the season: both contracts, field teams, CropSight, settlement`,
          active: e === `vgreen`,
          onClick: () => t(`vgreen`),
          tone: `text`
        }), (0, r.jsx)(o, {
          id: `hub`,
          label: `THE HUB`,
          sub: `Value added and captured here: grading, sorting, testing`,
          active: e === `hub`,
          onClick: () => t(`hub`),
          tone: `gold`
        }), (0, r.jsx)(o, {
          id: `market`,
          label: `MARKET`,
          sub: `Processors · exporters · energy & biofuel`,
          active: e === `market`,
          onClick: () => t(`market`),
          tone: `gold`
        })]
      })]
    }), (0, r.jsxs)(`div`, {
      children: [(0, r.jsx)(`div`, {
        className: `cap mb-2`,
        children: `3 · The money & the support`
      }), (0, r.jsxs)(`div`, {
        className: `grid sm:grid-cols-3 gap-3`,
        children: [(0, r.jsx)(o, {
          id: `payment`,
          label: `BUYER PAYS`,
          sub: `Crop + per-kg hub fee`,
          active: e === `payment`,
          onClick: () => t(`payment`),
          tone: `gold`
        }), (0, r.jsx)(o, {
          id: `settle`,
          label: `FARMER PAID IN FULL`,
          sub: `At sale, with every deduction on record`,
          active: e === `settle`,
          onClick: () => t(`settle`),
          tone: `gold`
        }), (0, r.jsx)(o, {
          id: `support`,
          label: `SEASON SUPPORT`,
          sub: `Embedded working capital · inputs · technology · advisory`,
          active: e === `support`,
          onClick: () => t(`support`),
          tone: `green`
        })]
      })]
    }), (0, r.jsxs)(`div`, {
      className: `panel p-6 frame-in`,
      children: [(0, r.jsx)(`h3`, {
        className: `display text-[1.25rem] mt-1 mb-0`,
        children: i[0]
      }), (0, r.jsx)(`p`, {
        className: `dim mt-3 m-0 text-[0.98rem] leading-relaxed`,
        children: i[1]
      })]
    }, e)]
  })
}

function c() {
  return (0, r.jsxs)(`div`, {
    className: `grid gap-4`,
    children: [(0, r.jsx)(`div`, {
      className: `grid sm:grid-cols-2 gap-3`,
      children: [
        [`The hub holds the offtake`, `Once a cluster has become a hub, the hub contracts with the buyer in its own name: crop, specification, volume and calendar, agreed before the season.`],
        [`The middle position falls away`, `That arrangement exists because a party sits in the middle holding both sides of the same terms. With the hub contracting directly, there is nobody in the middle.`],
        [`VGreen works alongside the hub`, `Management, advisory, field teams and CropSight, and the services the hub buys in. VGreen remains in business with the hub and stops being the counterparty in its contracts.`],
        [`The farmer deals with the hub`, `Members deliver to the hub and are settled by it, on terms the hub sets and its own governance holds it to.`]
      ].map(([e, t]) => (0, r.jsxs)(`div`, {
        className: `panel p-5`,
        children: [(0, r.jsx)(`b`, {
          className: `block text-[0.98rem] mb-1.5`,
          style: {
            color: `var(--green-2)`
          },
          children: e
        }), (0, r.jsx)(`p`, {
          className: `dim text-[0.92rem] m-0 leading-snug`,
          children: t
        })]
      }, e))
    }), (0, r.jsx)(`div`, {
      className: `panel p-5`,
      style: {
        borderLeft: `4px solid var(--gold)`
      },
      children: (0, r.jsx)(`p`, {
        className: `dim text-[0.95rem] m-0 leading-relaxed max-w-[82ch]`,
        children: `The legal form that lets a hub hold a contract and a loan in its own name is the piece still being built. Until it is in place, a cluster runs on the arrangement above it, and the hub state is what each cluster is working toward.`
      })
    })]
  })
}
var l = [{
  cap: `ENROLLED FARMER`,
  role: `VGREEN: DIRECTS`,
  title: `One farmer, one contract`,
  points: [`Joins with the buyer already secured`, `Follows the crop & nutrition plan`],
  grad: `a full season on plan, delivered to contract`
}, {
  cap: `FARMER GROUP`,
  role: `VGREEN: DIRECTS + COACHES`,
  title: `Neighbours start pooling`,
  points: [`Shared harvest calendar`, `Group delivery discipline`],
  grad: `two seasons of group delivery, no broken commitments`
}, {
  cap: `CUSTODIAN POOL`,
  role: `VGREEN: CUSTODIAN · RUNS THE POOL`,
  title: `A formal pool, held by VGreen`,
  points: [`Pool meets regularly, records kept`, `Quality norms accepted by members`, `VGreen chairs, settles, decides`],
  grad: `pool enforcing its own quality gate`,
  today: !0
}, {
  cap: `MANAGED POOL`,
  role: `VGREEN: SUPPORTS`,
  title: `The pool runs its days itself`,
  points: [`Elected committee runs operations`, `Routine disputes resolved inside`, `VGreen on call; the committee decides`],
  grad: `discipline holding through a hard season`
}, {
  cap: `SELF-GOVERNING POOL`,
  role: `VGREEN: AUDITS + SUPPORTS`,
  title: `The pool governs its own affairs`,
  points: [`Full committee governance`, `Quality and disputes fully internal`, `The pool holds its own contracts, with VGreen alongside`],
  grad: `demonstrated performance, season after season`
}];

function u() {
  let [e, t] = (0, n.useState)(0), i = l[e];
  return (0, r.jsxs)(`div`, {
    className: `grid gap-6`,
    children: [(0, r.jsx)(`div`, {
      className: `flex flex-wrap gap-2`,
      children: l.map((n, i) => (0, r.jsxs)(`button`, {
        onClick: () => t(i),
        className: `btn ${i===e?`on`:``}`,
        style: n.today && i !== e ? {
          borderColor: `var(--gold)`
        } : void 0,
        children: [i + 1, `. `, n.cap, n.today ? ` ★` : ``]
      }, n.cap))
    }), (0, r.jsxs)(`div`, {
      className: `panel p-6 md:p-8 grid gap-4 frame-in`,
      children: [(0, r.jsxs)(`div`, {
        className: `flex items-center justify-between flex-wrap gap-2`,
        children: [(0, r.jsx)(`span`, {
          className: `num text-[2rem] font-bold`,
          style: {
            color: `var(--gold)`
          },
          children: e + 1
        }), (0, r.jsx)(`span`, {
          className: `cap px-2.5 py-1 rounded-full`,
          style: {
            border: `1px solid var(--line-2)`,
            color: `var(--green-2)`
          },
          children: i.role
        })]
      }), (0, r.jsx)(`h3`, {
        className: `display text-[1.5rem] m-0`,
        children: i.title
      }), (0, r.jsx)(`ul`, {
        className: `m-0 pl-5 grid gap-1.5 text-[0.95rem]`,
        children: i.points.map(e => (0, r.jsx)(`li`, {
          children: e
        }, e))
      }), (0, r.jsxs)(`p`, {
        className: `cap m-0 pt-3`,
        style: {
          borderTop: `1px solid var(--line)`,
          color: i.today ? `var(--gold-2)` : `var(--dim)`
        },
        children: [i.today ? `Where VGreen is today, at its most mature hubs: ` : `Graduates by: `, i.grad]
      })]
    }, e), (0, r.jsxs)(`div`, {
      className: `flex flex-wrap items-center gap-2 cap`,
      children: [(0, r.jsx)(`span`, {
        style: {
          color: `var(--dim-2)`
        },
        children: `VGreen's role is built to recede:`
      }), l.map((t, n) => (0, r.jsx)(`span`, {
        className: `px-2 py-1 rounded`,
        style: {
          background: n === e ? `var(--surface-2)` : `transparent`,
          color: n === e ? `var(--gold-2)` : `var(--dim-2)`
        },
        children: t.role.replace(`VGREEN: `, ``)
      }, t.role))]
    })]
  })
}

function d() {
  return (0, r.jsxs)(`div`, {
    className: `grid lg:grid-cols-[380px_1fr] gap-8 items-center`,
    children: [(0, r.jsx)(`div`, {
      className: `justify-self-center`,
      children: (0, r.jsxs)(`svg`, {
        viewBox: `0 0 380 380`,
        width: `100%`,
        style: {
          maxWidth: 360
        },
        "aria-label": `Depth before geography rings`,
        children: [(0, r.jsx)(`circle`, {
          cx: `190`,
          cy: `190`,
          r: `52`,
          fill: `var(--green)`
        }), (0, r.jsx)(`text`, {
          x: `190`,
          y: `186`,
          textAnchor: `middle`,
          fontFamily: `'Bricolage Grotesque', system-ui, sans-serif`,
          fontWeight: 800,
          fontSize: 13,
          fill: `#06110B`,
          children: `ONE`
        }), (0, r.jsx)(`text`, {
          x: `190`,
          y: `203`,
          textAnchor: `middle`,
          fontFamily: `'Bricolage Grotesque', system-ui, sans-serif`,
          fontWeight: 800,
          fontSize: 13,
          fill: `#06110B`,
          children: `CLUSTER`
        }), (0, r.jsx)(`circle`, {
          cx: `190`,
          cy: `190`,
          r: `96`,
          fill: `none`,
          stroke: `var(--green-2)`,
          strokeWidth: 2.5,
          strokeDasharray: `6 6`
        }), (0, r.jsx)(`text`, {
          x: `190`,
          y: `80`,
          textAnchor: `middle`,
          fontFamily: `ui-monospace, monospace`,
          fontSize: 10.5,
          letterSpacing: 1,
          fill: `var(--green-2)`,
          children: `+ MORE CROPS`
        }), (0, r.jsx)(`circle`, {
          cx: `190`,
          cy: `190`,
          r: `140`,
          fill: `none`,
          stroke: `var(--gold)`,
          strokeWidth: 2.5,
          strokeDasharray: `6 6`
        }), (0, r.jsx)(`text`, {
          x: `190`,
          y: `38`,
          textAnchor: `middle`,
          fontFamily: `ui-monospace, monospace`,
          fontSize: 10.5,
          letterSpacing: 1,
          fill: `var(--gold)`,
          children: `+ MORE VALUE CHAINS`
        }), (0, r.jsx)(`circle`, {
          cx: `190`,
          cy: `190`,
          r: `178`,
          fill: `none`,
          stroke: `var(--line-2)`,
          strokeWidth: 2,
          strokeDasharray: `3 7`
        }), (0, r.jsx)(`text`, {
          x: `190`,
          y: `374`,
          textAnchor: `middle`,
          fontFamily: `ui-monospace, monospace`,
          fontSize: 10.5,
          fill: `var(--dim-2)`,
          children: `ONLY THEN: NEW GEOGRAPHY`
        }), (0, r.jsx)(`path`, {
          d: `M330 60 C300 96 280 120 258 142`,
          stroke: `var(--rust)`,
          strokeWidth: 3,
          fill: `none`,
          strokeLinecap: `round`,
          strokeDasharray: `5 6`
        }), (0, r.jsx)(`text`, {
          x: `330`,
          y: `44`,
          textAnchor: `middle`,
          fontFamily: `ui-monospace, monospace`,
          fontSize: 9.5,
          fill: `var(--rust)`,
          children: `A CLIENT'S NEED`
        })]
      })
    }), (0, r.jsxs)(`div`, {
      className: `grid gap-4`,
      children: [(0, r.jsxs)(`p`, {
        className: `m-0 text-[1.02rem] leading-relaxed`,
        children: [`VGreen expands `, (0, r.jsx)(`b`, {
          children: `deeper into a cluster`
        }), `, adding crops, value chains and value added within the same footprint, before opening new ground.`]
      }), (0, r.jsxs)(`p`, {
        className: `m-0 text-[1.02rem] leading-relaxed`,
        children: [`When new geography does open, it is `, (0, r.jsx)(`b`, {
          children: `pulled by a crop and a client`
        }), `. Gilgit-Baltistan is opening now because a client holds a long-term vision for a plum value chain.`]
      }), (0, r.jsx)(`p`, {
        className: `display m-0 text-[1.3rem]`,
        style: {
          color: `var(--gold)`
        },
        children: `VGreen builds the cluster around a client's value chain.`
      }), (0, r.jsx)(`div`, {
        className: `flex flex-wrap gap-2 mt-1`,
        children: [`No cash lending`, `No land leasing`, `No mandi trading`].map(e => (0, r.jsx)(`span`, {
          className: `cap px-3 py-1.5 rounded-full`,
          style: {
            border: `1px solid var(--line-2)`,
            color: `var(--dim)`
          },
          children: e
        }, e))
      })]
    })]
  })
}
var f = [{
  k: `farmers`,
  v: `10,200`,
  l: `farmers under contract`
}, {
  k: `hubs`,
  v: `4`,
  l: `hubs running`
}, {
  k: `clusters`,
  v: `18`,
  l: `clusters`
}, {
  k: `districts`,
  v: `15`,
  l: `districts`
}, {
  k: `chains`,
  v: `11`,
  l: `value chains (9 active, 2 developing)`
}, {
  k: `team`,
  v: `100+`,
  l: `social builders on the team`
}, {
  k: `acres`,
  v: `85,000+`,
  l: `cumulative acres served`
}, {
  k: `since`,
  v: `2018`,
  l: `on the ground since`
}];

function p({
  rows: e
}) {
  return (0, r.jsx)(`div`, {
    className: `grid sm:grid-cols-3 gap-3 mt-3`,
    children: e.map(([e, t]) => (0, r.jsxs)(`div`, {
      className: `panel p-3.5`,
      children: [(0, r.jsx)(`div`, {
        className: `cap mb-1`,
        style: {
          color: `var(--green-2)`
        },
        children: e
      }), (0, r.jsx)(`p`, {
        className: `m-0 text-[0.85rem] dim leading-snug`,
        children: t
      })]
    }, e))
  })
}
var m = [
  [`Chili`, `Kunri · Skardu · Badin · Mailsi · Vehari · Kasur`],
  [`Tomato`, `Vehari · Badin · Thatta · Tando Allahyar`],
  [`Turmeric`, `Kasur · Renala`],
  [`Fenugreek`, `Kasur`],
  [`Sugarcane`, `Badin · Shorkot · Thatta · Chiniot · Tando Allahyar · Hyderabad · Matiari · Sargodha`],
  [`Corn`, `Chiniot · Shorkot · Vehari · Kasur`],
  [`Sesame`, `Mailsi · Vehari · Chiniot · Jhang`],
  [`Guava`, `Tando Allahyar · Matiari · Hyderabad`],
  [`Energy / Napier`, `Kasur · Vehari · Chiniot · Kanganpur · Hyderabad`],
  [`Plum`, `Gilgit · Skardu`, !0],
  [`Oilseeds`, `Thatta · groundwork underway`, !0]
];

function h({
  k: e
}) {
  return e === `farmers` ? (0, r.jsxs)(`div`, {
    children: [(0, r.jsx)(`h4`, {
      className: `display text-[1.05rem] m-0`,
      children: `Where they farm`
    }), (0, r.jsx)(p, {
      rows: [
        [`Sindh`, `5,240 farmers`],
        [`Punjab`, `4,600 farmers`],
        [`Gilgit-Baltistan`, `360 farmers`]
      ]
    })]
  }) : e === `hubs` ? (0, r.jsxs)(`div`, {
    children: [(0, r.jsx)(`h4`, {
      className: `display text-[1.05rem] m-0`,
      children: `Tando Allahyar · Phool Nagar · Skardu · Badin`
    }), (0, r.jsx)(p, {
      rows: [
        [`Punjab`, `Phool Nagar`],
        [`Sindh`, `Tando Allahyar · Badin`],
        [`Gilgit-Baltistan`, `Skardu`]
      ]
    })]
  }) : e === `clusters` ? (0, r.jsxs)(`div`, {
    children: [(0, r.jsx)(`h4`, {
      className: `display text-[1.05rem] m-0`,
      children: `Where the crops are organized`
    }), (0, r.jsx)(p, {
      rows: [
        [`Punjab · 10`, `Kasur · Kanganpur · Renala · Vehari · Mailsi · Chiniot · Shorkot · Jhang · Sargodha · Rahim Yar Khan`],
        [`Sindh · 6`, `Tando Allahyar · Hyderabad · Matiari · Kunri · Badin · Thatta`],
        [`Gilgit-Baltistan · 2`, `Gilgit · Skardu`]
      ]
    })]
  }) : e === `districts` ? (0, r.jsxs)(`div`, {
    children: [(0, r.jsx)(`h4`, {
      className: `display text-[1.05rem] m-0`,
      children: `Official operating footprint`
    }), (0, r.jsx)(p, {
      rows: [
        [`Punjab · 7`, `Kasur · Vehari · Chiniot · Jhang · Sargodha · Okara · Rahim Yar Khan`],
        [`Sindh · 6`, `Tando Allahyar · Hyderabad · Matiari · Umerkot · Badin · Thatta`],
        [`Gilgit-Baltistan · 2`, `Gilgit · Skardu`]
      ]
    })]
  }) : e === `chains` ? (0, r.jsxs)(`div`, {
    children: [(0, r.jsx)(`h4`, {
      className: `display text-[1.05rem] m-0`,
      children: `Each chain, and where it runs`
    }), (0, r.jsx)(`div`, {
      className: `grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3`,
      children: m.map(([e, t, n]) => (0, r.jsxs)(`div`, {
        className: `panel p-3.5`,
        style: n ? {
          borderStyle: `dashed`
        } : void 0,
        children: [(0, r.jsxs)(`div`, {
          className: `cap mb-1`,
          style: {
            color: n ? `var(--gold)` : `var(--green-2)`
          },
          children: [e, n ? ` (developing)` : ``]
        }), (0, r.jsx)(`p`, {
          className: `m-0 text-[0.85rem] dim leading-snug`,
          children: t
        })]
      }, e))
    })]
  }) : e === `team` ? (0, r.jsxs)(`div`, {
    children: [(0, r.jsx)(`h4`, {
      className: `display text-[1.05rem] m-0`,
      children: `The people who build it`
    }), (0, r.jsx)(p, {
      rows: [
        [`The team`, `Over one hundred people building and running the hubs and the clusters around them.`],
        [`Where they come from`, `80% of the workforce is rural, or has moved from a rural background.`],
        [`How they came in`, `30% were trained inside VGreen's own academy, which is the route in for people who arrive without formal qualifications.`]
      ]
    })]
  }) : e === `acres` ? (0, r.jsxs)(`div`, {
    children: [(0, r.jsx)(`h4`, {
      className: `display text-[1.05rem] m-0`,
      children: `Acres served under contract, through the hub, or both`
    }), (0, r.jsx)(`p`, {
      className: `dim text-[0.9rem] max-w-[60ch] mt-2 m-0`,
      children: `Across all crops and seasons since 2018, as of 30 June 2026: land planned, grown and settled under contract with VGreen, through a hub, or through both together.`
    })]
  }) : (0, r.jsxs)(`div`, {
    children: [(0, r.jsx)(`h4`, {
      className: `display text-[1.05rem] m-0`,
      children: `On the ground since 2018`
    }), (0, r.jsx)(p, {
      rows: [
        [`2018`, `Soft pilot. Four farmers in the first cycle and twenty-four by the next, in a single cluster, with the founders in the field alongside them.`],
        [`2019`, `Vital Green Pvt Ltd incorporated, with the hub defined as a set of functions: quality, traceability and contract management.`],
        [`2020`, `The first hub built and staffed, taking its first order in its own name.`]
      ]
    })]
  })
}

function g() {
  let [e, t] = (0, n.useState)(null);
  return (0, r.jsxs)(`div`, {
    className: `grid gap-5`,
    children: [(0, r.jsx)(`p`, {
      className: `cap m-0`,
      children: `Every figure below is current.`
    }), (0, r.jsx)(`div`, {
      className: `grid grid-cols-2 md:grid-cols-4 gap-3`,
      children: f.map(n => (0, r.jsxs)(`button`, {
        onClick: () => t(e === n.k ? null : n.k),
        className: `panel p-4 text-left transition-colors`,
        style: {
          borderColor: e === n.k ? `var(--gold)` : `var(--line)`,
          background: e === n.k ? `var(--gold-glow)` : void 0
        },
        children: [(0, r.jsx)(`span`, {
          className: `num block text-[1.6rem] font-bold leading-none`,
          style: {
            color: `var(--green-2)`
          },
          children: n.v
        }), (0, r.jsx)(`span`, {
          className: `dim text-[0.8rem] block mt-1.5 leading-snug`,
          children: n.l
        })]
      }, n.k))
    }), e && (0, r.jsx)(`div`, {
      className: `panel p-6 frame-in`,
      style: {
        borderLeft: `4px solid var(--gold)`
      },
      children: (0, r.jsx)(h, {
        k: e
      })
    }, e), (0, r.jsx)(`p`, {
      className: `mono dim text-[0.8rem] m-0`,
      children: `4 hubs · 10,200 farmers · 18 clusters · 15 districts · 11 value chains (9 active, 2 in development). A Pakistan company, field to factory to the world.`
    })]
  })
}

function _({
  onInstitutions: e
}) {
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(`section`, {
      className: `hero relative overflow-hidden snap flex flex-col`,
      style: {
        padding: `20px 0 20px`,
        height: `auto`,
        minHeight: `calc(100vh - 64px)`
      },
      children: [(0, r.jsx)(i, {}), (0, r.jsxs)(`div`, {
        className: `wrap relative flex-1 flex flex-col justify-center gap-5`,
        children: [(0, r.jsx)(`span`, {
          className: `eyebrow`,
          children: `The Model`
        }), (0, r.jsxs)(`h1`, {
          className: `display text-[clamp(2rem,3.6vw,3.4rem)] m-0 max-w-[14ch]`,
          children: [`One chain, `, (0, r.jsx)(`span`, {
            style: {
              color: `var(--gold)`
            },
            children: `two stages.`
          })]
        }), (0, r.jsx)(`p`, {
          className: `dim text-[1.05rem] max-w-[58ch] m-0`,
          children: `How VGreen operates: which party performs which function, who pays whom, and what is disclosed to both sides. A cluster starts with VGreen holding both contracts on the same terms, one with the buyer and one with the farmer. As it becomes a hub, the hub contracts with the market in its own name and VGreen moves alongside it. The ring above is the second stage.`
        })]
      })]
    }), (0, r.jsx)(`section`, {
      className: `sec tall`,
      children: (0, r.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, r.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, r.jsx)(`span`, {
            className: `eyebrow`,
            children: `Stage one · before the hub`
          }), (0, r.jsxs)(`h2`, {
            children: [`The `, (0, r.jsx)(`span`, {
              style: {
                color: `var(--gold)`
              },
              children: `two contracts`
            }), `, disclosed in full`]
          }), (0, r.jsx)(`p`, {
            children: `The buyer's demand becomes the farmer's plan. VGreen holds the offtake with the buyer and signs those same terms with the farmer pool, so both parties sign terms that both parties can see.`
          })]
        }), (0, r.jsx)(s, {})]
      })
    }), (0, r.jsx)(`section`, {
      className: `sec`,
      children: (0, r.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, r.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, r.jsx)(`span`, {
            className: `eyebrow`,
            children: `Stage two · with the hub`
          }), (0, r.jsxs)(`h2`, {
            children: [`The hub becomes the `, (0, r.jsx)(`span`, {
              style: {
                color: `var(--gold)`
              },
              children: `counterparty`
            })]
          }), (0, r.jsx)(`p`, {
            children: `A hub is an entity in its own right. When a cluster reaches that point, the contracting changes shape and VGreen's position in it changes with it.`
          })]
        }), (0, r.jsx)(c, {})]
      })
    }), (0, r.jsx)(`section`, {
      className: `sec`,
      children: (0, r.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, r.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, r.jsx)(`span`, {
            className: `eyebrow`,
            children: `The pool journey`
          }), (0, r.jsxs)(`h2`, {
            children: [`From one farmer to a `, (0, r.jsx)(`span`, {
              style: {
                color: `var(--gold)`
              },
              children: `self-governing pool`
            })]
          }), (0, r.jsx)(`p`, {
            children: `Pools do not begin self-governing. VGreen starts as the pool's custodian and withdraws from that role stage by stage. No stage is granted; each one is earned.`
          })]
        }), (0, r.jsx)(u, {})]
      })
    }), (0, r.jsx)(`section`, {
      className: `sec`,
      children: (0, r.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, r.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, r.jsx)(`span`, {
            className: `eyebrow`,
            children: `Doctrine`
          }), (0, r.jsxs)(`h2`, {
            children: [(0, r.jsx)(`span`, {
              style: {
                color: `var(--gold)`
              },
              children: `Depth`
            }), ` before geography`]
          })]
        }), (0, r.jsx)(d, {})]
      })
    }), (0, r.jsx)(`section`, {
      className: `sec`,
      children: (0, r.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, r.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, r.jsx)(`span`, {
            className: `eyebrow`,
            children: `On the ground`
          }), (0, r.jsxs)(`h2`, {
            children: [`The model in operation `, (0, r.jsx)(`span`, {
              style: {
                color: `var(--gold)`
              },
              children: `today`
            })]
          })]
        }), (0, r.jsx)(g, {})]
      })
    }), (0, r.jsxs)(`section`, {
      className: `sec relative overflow-hidden`,
      style: {
        minHeight: 0,
        padding: `56px 0`
      },
      children: [(0, r.jsx)(`div`, {
        className: `absolute inset-0 glow-green pointer-events-none`,
        style: {
          "--gx": `50%`,
          "--gy": `100%`
        }
      }), (0, r.jsxs)(`div`, {
        className: `wrap relative text-center grid gap-3 justify-items-center`,
        children: [(0, r.jsx)(`span`, {
          className: `eyebrow`,
          children: `Next`
        }), (0, r.jsxs)(`h2`, {
          className: `text-[clamp(1.3rem,2.2vw,1.8rem)] m-0 max-w-[46ch]`,
          children: [`The institutional case for `, (0, r.jsx)(`span`, {
            style: {
              color: `var(--gold)`
            },
            children: `building on this model`
          })]
        }), (0, r.jsx)(`button`, {
          className: `btn on`,
          onClick: e,
          children: `For institutions →`
        })]
      })]
    })]
  })
}
export {
  _ as
  default
};