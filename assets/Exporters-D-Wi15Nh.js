import {
  r as e,
  t
} from "./vendor-Bfx28lbG.js";
import {
  t as n
} from "./HotspotMap-D8Fic7HN.js";
import {
  t as r
} from "./RequirementModal-1ZeE5WyU.js";
import "./CalmBackdrop-CDqYysf7.js";
var i = e(),
  a = t();

function o() {
  let e = (0, i.useId)().replace(/:/g, ``);
  return (0, a.jsxs)(`div`, {
    className: `absolute inset-0 pointer-events-none overflow-hidden`,
    "aria-hidden": !0,
    children: [(0, a.jsxs)(`svg`, {
      viewBox: `0 0 1200 600`,
      preserveAspectRatio: `xMaxYMax slice`,
      className: `absolute inset-0 w-full h-full`,
      style: {
        opacity: .9
      },
      children: [(0, a.jsxs)(`defs`, {
        children: [(0, a.jsxs)(`linearGradient`, {
          id: `sky-${e}`,
          x1: `0`,
          y1: `0`,
          x2: `0`,
          y2: `1`,
          children: [(0, a.jsx)(`stop`, {
            offset: `0`,
            stopColor: `#06110B`
          }), (0, a.jsx)(`stop`, {
            offset: `1`,
            stopColor: `#0A1E15`
          })]
        }), (0, a.jsxs)(`linearGradient`, {
          id: `sea-${e}`,
          x1: `0`,
          y1: `0`,
          x2: `0`,
          y2: `1`,
          children: [(0, a.jsx)(`stop`, {
            offset: `0`,
            stopColor: `#0F3A2A`
          }), (0, a.jsx)(`stop`, {
            offset: `1`,
            stopColor: `#06110B`
          })]
        }), (0, a.jsxs)(`linearGradient`, {
          id: `fade-${e}`,
          x1: `0`,
          y1: `0`,
          x2: `1`,
          y2: `0`,
          children: [(0, a.jsx)(`stop`, {
            offset: `0`,
            stopColor: `#06110B`,
            stopOpacity: `1`
          }), (0, a.jsx)(`stop`, {
            offset: `0.45`,
            stopColor: `#06110B`,
            stopOpacity: `0.85`
          }), (0, a.jsx)(`stop`, {
            offset: `0.75`,
            stopColor: `#06110B`,
            stopOpacity: `0`
          })]
        }), (0, a.jsxs)(`radialGradient`, {
          id: `moon-${e}`,
          cx: `0.5`,
          cy: `0.5`,
          r: `0.5`,
          children: [(0, a.jsx)(`stop`, {
            offset: `0`,
            stopColor: `#FFD27A`,
            stopOpacity: `0.9`
          }), (0, a.jsx)(`stop`, {
            offset: `0.6`,
            stopColor: `#FFB627`,
            stopOpacity: `0.25`
          }), (0, a.jsx)(`stop`, {
            offset: `1`,
            stopColor: `#FFB627`,
            stopOpacity: `0`
          })]
        })]
      }), (0, a.jsx)(`rect`, {
        width: `1200`,
        height: `600`,
        fill: `url(#sky-${e})`
      }), (0, a.jsx)(`circle`, {
        cx: `980`,
        cy: `230`,
        r: `150`,
        fill: `url(#moon-${e})`
      }), (0, a.jsx)(`circle`, {
        cx: `980`,
        cy: `230`,
        r: `26`,
        fill: `#FFD27A`,
        opacity: `0.85`
      }), (0, a.jsx)(`rect`, {
        x: `0`,
        y: `360`,
        width: `1200`,
        height: `240`,
        fill: `url(#sea-${e})`
      }), (0, a.jsx)(`path`, {
        d: `M0 362 H1200`,
        stroke: `#7FE3A8`,
        strokeOpacity: `0.35`
      }), (0, a.jsxs)(`g`, {
        transform: `translate(730 300) scale(0.82)`,
        children: [(0, a.jsx)(`path`, {
          d: `M0 96 L18 132 H372 L400 96 Z`,
          fill: `#10231A`,
          stroke: `#7FE3A8`,
          strokeOpacity: `0.5`,
          strokeWidth: `1.5`
        }), (0, a.jsx)(`path`, {
          d: `M0 96 H400`,
          stroke: `#7FE3A8`,
          strokeOpacity: `0.5`
        }), (0, a.jsx)(`rect`, {
          x: `20`,
          y: `82`,
          width: `340`,
          height: `14`,
          fill: `#16301F`,
          stroke: `#7FE3A8`,
          strokeOpacity: `0.35`
        }), Array.from({
          length: 11
        }).map((e, t) => (0, a.jsx)(`g`, {
          transform: `translate(${26+t*28} 0)`,
          children: [0, 1, 2, 3].map(e => (0, a.jsx)(`rect`, {
            x: `0`,
            y: 62 - e * 15,
            width: `26`,
            height: `13`,
            rx: `1`,
            fill: (t + e) % 3 == 0 ? `#FFB627` : (t + e) % 3 == 1 ? `#35C776` : `#1C3C2A`,
            opacity: (t + e) % 3 == 2 ? .9 : .75,
            stroke: `#06110B`,
            strokeWidth: `0.8`
          }, e))
        }, t)), (0, a.jsx)(`rect`, {
          x: `338`,
          y: `18`,
          width: `46`,
          height: `64`,
          fill: `#16301F`,
          stroke: `#7FE3A8`,
          strokeOpacity: `0.5`
        }), [0, 1, 2].map(e => (0, a.jsx)(`rect`, {
          x: `344`,
          y: 26 + e * 16,
          width: `34`,
          height: `6`,
          fill: `#FFD27A`,
          opacity: `0.7`
        }, e)), (0, a.jsx)(`rect`, {
          x: `356`,
          y: `0`,
          width: `6`,
          height: `18`,
          fill: `#7FE3A8`,
          opacity: `0.7`
        }), (0, a.jsx)(`circle`, {
          cx: `359`,
          cy: `-2`,
          r: `2.5`,
          fill: `#FF6B3D`,
          className: `pulse`
        })]
      }), (0, a.jsx)(`g`, {
        className: `swell swell-a`,
        children: (0, a.jsx)(`path`, {
          d: `M-200 400 Q-100 386 0 400 T200 400 T400 400 T600 400 T800 400 T1000 400 T1200 400 T1400 400 V600 H-200 Z`,
          fill: `#0C2A1E`,
          opacity: `0.95`
        })
      }), (0, a.jsx)(`g`, {
        className: `swell swell-b`,
        children: (0, a.jsx)(`path`, {
          d: `M-200 440 Q-100 424 0 440 T200 440 T400 440 T600 440 T800 440 T1000 440 T1200 440 T1400 440 V600 H-200 Z`,
          fill: `#0A1F16`,
          opacity: `0.98`
        })
      }), (0, a.jsx)(`g`, {
        className: `swell swell-c`,
        children: (0, a.jsx)(`path`, {
          d: `M-200 490 Q-100 470 0 490 T200 490 T400 490 T600 490 T800 490 T1000 490 T1200 490 T1400 490 V600 H-200 Z`,
          fill: `#06110B`
        })
      }), (0, a.jsx)(`g`, {
        opacity: `0.35`,
        children: [0, 1, 2, 3, 4].map(e => (0, a.jsx)(`rect`, {
          x: 920 + e * 7,
          y: 372 + e * 22,
          width: 120 - e * 14,
          height: `3`,
          rx: `1.5`,
          fill: `#FFD27A`
        }, e))
      }), (0, a.jsx)(`rect`, {
        width: `1200`,
        height: `600`,
        fill: `url(#fade-${e})`
      })]
    }), (0, a.jsx)(`style`, {
      children: `
        .swell { animation: swell 9s ease-in-out infinite; }
        .swell-b { animation-duration: 12s; animation-delay: -3s; }
        .swell-c { animation-duration: 15s; animation-delay: -6s; }
        @keyframes swell { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-60px); } }
      `
    })]
  })
}
var s = [`Sowing`, `Spray regime`, `Harvest`, `Hub testing`, `Dispatch`, `Port`],
  c = [{
    t: `Residue-controlled clusters`,
    d: `Planned spray regimes from sowing.`
  }, {
    t: `MRL to destination limits`,
    d: `Tested against your market's thresholds.`
  }, {
    t: `Aflatoxin control`,
    d: `Through drying, storage, and dispatch.`
  }, {
    t: `Phytosanitary support`,
    d: `Documentation supported end to end.`
  }];

function l() {
  return (0, a.jsxs)(`div`, {
    className: `grid gap-6`,
    children: [(0, a.jsxs)(`div`, {
      className: `grid gap-2`,
      children: [(0, a.jsx)(`div`, {
        className: `grid grid-cols-3 gap-x-3 gap-y-1 sm:flex sm:justify-between cap`,
        children: s.map(e => (0, a.jsx)(`span`, {
          children: e
        }, e))
      }), (0, a.jsx)(`div`, {
        className: `relative h-2.5 rounded-full overflow-hidden`,
        style: {
          background: `var(--bg-2)`
        },
        children: (0, a.jsx)(`div`, {
          className: `absolute inset-y-0 left-0 rounded-full`,
          style: {
            width: `100%`,
            background: `linear-gradient(90deg, var(--green) 0%, var(--gold) 100%)`,
            boxShadow: `0 0 14px var(--gold-glow)`
          }
        })
      }), (0, a.jsx)(`p`, {
        className: `dim text-[0.92rem] m-0`,
        children: `Residue control begins at sowing. The record travels with the lot through hub grading and testing, and reaches the port as one chain from the farm gate.`
      })]
    }), (0, a.jsx)(`div`, {
      className: `grid sm:grid-cols-2 lg:grid-cols-4 gap-3`,
      children: c.map(e => (0, a.jsxs)(`div`, {
        className: `panel p-4`,
        children: [(0, a.jsx)(`b`, {
          className: `block text-[0.92rem] leading-snug mb-1`,
          children: e.t
        }), (0, a.jsx)(`p`, {
          className: `dim text-[0.85rem] m-0 leading-snug`,
          children: e.d
        })]
      }, e.t))
    }), (0, a.jsxs)(`div`, {
      className: `panel p-5 md:p-6`,
      children: [(0, a.jsx)(`b`, {
        className: `block text-[1rem] mb-2`,
        style: {
          fontFamily: `'Bricolage Grotesque', system-ui, sans-serif`
        },
        children: `What this looks like as daily work`
      }), (0, a.jsx)(`p`, {
        className: `dim text-[0.95rem] m-0 leading-relaxed max-w-[78ch]`,
        children: `Grading, sorting and packing happen minutes from the field and inside the hub. That is where an export specification stops being a document and becomes the work of a shed: which lot is kept separate from which, what moisture it is dried to, how it is packed, and what is written against it. Growing a crop that can be exported is the result of that daily work.`
      })]
    }), (0, a.jsx)(`p`, {
      className: `cap m-0`,
      children: `Serving exporters to the Middle East & GCC today · Raw graded or semi-processed`
    })]
  })
}
var u = [{
  mkt: `European Union`,
  tag: `strictest requirements`,
  rules: [`Pesticide MRLs (Reg. 396/2005): dried-product dehydration factor applies`, `Aflatoxin: B1 max 5, total 10 µg/kg (Reg. 1881/2006)`, `Heavy metals: lead 0.6–1.5 mg/kg by spice type`, `Salmonella absent: zero tolerance (Reg. 2073/2005)`, `Sudan & Rhodamine dyes banned · ethylene oxide barred`, `Increased border checks (Reg. 2019/1793)`]
}, {
  mkt: `China`,
  tag: `volume market`,
  rules: [`GB 2763 pesticide MRLs: thousands of limits, revised 2026`, `GB 2762 contaminants & heavy metals`, `Moisture, purity and foreign-matter specs by commodity`, `Aflatoxin and microbiological thresholds`]
}, {
  mkt: `Gulf / GCC`,
  tag: `currently served`,
  rules: [`Pesticide residues: GSO 382`, `Contaminants & heavy metals: GSO 193`, `Microbiological criteria: GSO 1016`, `SFDA clearance · Arabic labelling`]
}];

function d() {
  return (0, a.jsxs)(`div`, {
    className: `grid gap-6`,
    children: [(0, a.jsxs)(`div`, {
      className: `grid gap-3 max-w-[74ch]`,
      children: [(0, a.jsx)(`div`, {
        className: `cap`,
        children: `The standard applied`
      }), (0, a.jsx)(`h3`, {
        className: `display text-[1.6rem] m-0`,
        children: `MRL compliance is a field-level discipline.`
      }), (0, a.jsxs)(`p`, {
        className: `dim text-[0.98rem] m-0 leading-relaxed`,
        children: [`Residues are commonly managed by avoiding a list of banned chemicals, which does not address how residues arise. An approved chemical applied when the crop did not require it, at the wrong dose, or too close to harvest still leaves its trace in the lot. Residue compliance is therefore a field decision taken some twenty times in a season: `, (0, a.jsx)(`b`, {
          style: {
            color: `var(--green-2)`
          },
          children: `the right chemical, only when scouting crosses the threshold, at the right dose, at the right pre-harvest interval.`
        }), ` Compliance is established during the growing season, since inspection at the port can detect a residue but cannot remove it. Residues are also only one part of the requirement, as each export market applies a full rulebook.`]
      })]
    }), (0, a.jsx)(`div`, {
      className: `grid md:grid-cols-3 gap-3`,
      children: u.map(e => (0, a.jsxs)(`div`, {
        className: `panel p-5`,
        children: [(0, a.jsxs)(`div`, {
          className: `flex items-baseline justify-between mb-3`,
          children: [(0, a.jsx)(`b`, {
            className: `text-[1.02rem]`,
            children: e.mkt
          }), (0, a.jsx)(`span`, {
            className: `cap`,
            style: {
              color: `var(--gold-2)`
            },
            children: e.tag
          })]
        }), (0, a.jsx)(`ul`, {
          className: `m-0 pl-0 grid gap-1.5`,
          style: {
            listStyle: `none`
          },
          children: e.rules.map(e => (0, a.jsx)(`li`, {
            className: `dim text-[0.82rem] leading-snug pl-3`,
            style: {
              borderLeft: `2px solid var(--line-2)`
            },
            children: e
          }, e))
        })]
      }, e.mkt))
    }), (0, a.jsx)(`p`, {
      className: `dim text-[0.9rem] m-0 max-w-[70ch]`,
      children: `The crop is grown to the destination requirement. The GCC is the market VGreen serves today; the EU and China rulebooks are applied where a buyer market requires them.`
    })]
  })
}
var f = [{
  dem: `Pesticide residues under limit`,
  ans: (0, a.jsxs)(a.Fragment, {
    children: [`A `, (0, a.jsx)(`b`, {
      children: `recorded spray regime`
    }), ` is maintained for each field, covering chemical selection, application only at scouting threshold, dose and pre-harvest interval, followed by `, (0, a.jsx)(`b`, {
      children: `accredited-lab screening against 600+ compounds`
    }), ` before dispatch.`]
  })
}, {
  dem: `Aflatoxin control`,
  ans: (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(`b`, {
      children: `Controlled hub drying`
    }), ` to moisture specification, with lots `, (0, a.jsx)(`b`, {
      children: `tested before sale`
    }), `.`]
  })
}, {
  dem: `Heavy metals`,
  ans: (0, a.jsxs)(a.Fragment, {
    children: [`Trace testing across a `, (0, a.jsx)(`b`, {
      children: `heavy-metal panel covering lead, cadmium, arsenic and mercury.`
    })]
  })
}, {
  dem: `Microbiological criteria: Salmonella, E. coli, coliform`,
  ans: (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(`b`, {
      children: `Microbial testing`
    }), ` to destination criteria on graded lots.`]
  })
}, {
  dem: `Moisture, colour, purity, foreign matter`,
  ans: (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(`b`, {
      children: `Hub cleaning and grading to specification`
    }), ` covering ASTA colour, moisture and foreign matter, completed before a lot travels.`]
  })
}, {
  dem: `Adulterant dyes (Sudan, Rhodamine)`,
  ans: (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(`b`, {
      children: `Single-origin lots with no added colour.`
    }), ` Adulterant dyes are excluded at source.`]
  })
}, {
  dem: `Ethylene oxide (EU-barred)`,
  ans: (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(`b`, {
      children: `No EtO fumigation`
    }), ` anywhere in the chain.`]
  })
}, {
  dem: `Traceability & documentation`,
  ans: (0, a.jsxs)(a.Fragment, {
    children: [`Lot identity and records are maintained from `, (0, a.jsx)(`b`, {
      children: `field to dispatch`
    }), `, with deliveries traceable to farmer, field and input.`]
  })
}];

function p() {
  let [e, t] = (0, i.useState)(0);
  return (0, a.jsxs)(`div`, {
    className: `grid lg:grid-cols-[1fr_1fr] gap-6 items-start`,
    children: [(0, a.jsx)(`div`, {
      className: `panel p-2 grid gap-1`,
      children: f.map((n, r) => (0, a.jsx)(`button`, {
        onClick: () => t(r),
        "aria-pressed": r === e,
        className: `text-left px-4 py-3 rounded-lg border transition-colors ${r===e?`border-[var(--gold)] bg-[var(--surface-2)]`:`border-transparent hover:bg-[var(--surface-2)]`}`,
        children: (0, a.jsx)(`span`, {
          className: `font-semibold text-[0.9rem]`,
          children: n.dem
        })
      }, n.dem))
    }), (0, a.jsxs)(`div`, {
      className: `panel p-6 frame-in`,
      children: [(0, a.jsx)(`div`, {
        className: `cap`,
        children: `VGreen practice in Pakistan`
      }), (0, a.jsx)(`h3`, {
        className: `display text-[1.25rem] mt-1 mb-0`,
        children: f[e].dem
      }), (0, a.jsx)(`p`, {
        className: `dim mt-3 m-0 text-[0.98rem] leading-relaxed`,
        children: f[e].ans
      })]
    }, e)]
  })
}
var m = [
    [`Crop / Origin`, `Fenugreek leaves · Pakistan`],
    [`Standard`, `EU Regulation MRL`],
    [`Sampled`, `April 2026`],
    [`Laboratory`, `ISO 17025-accredited, international`]
  ],
  h = [{
    c: `Chlorpyrifos`,
    v: `0.058`,
    l: `0.01 max`,
    over: !0
  }, {
    c: `Pendimethalin`,
    v: `0.057`,
    l: `0.6 max`,
    over: !1
  }, {
    c: `Bifenthrin`,
    v: `0.015`,
    l: `0.02 max`,
    over: !1
  }];

function g() {
  return (0, a.jsxs)(`div`, {
    className: `grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start`,
    children: [(0, a.jsxs)(`div`, {
      className: `panel p-6 grid gap-5`,
      children: [(0, a.jsxs)(`div`, {
        children: [(0, a.jsx)(`div`, {
          className: `cap`,
          style: {
            color: `var(--gold-2)`
          },
          children: `Independent Lab · Multi-Residue Analysis`
        }), (0, a.jsx)(`b`, {
          className: `block text-[1.1rem] mt-1`,
          children: `Pesticide Residue Screen: Fenugreek Leaves`
        })]
      }), (0, a.jsx)(`div`, {
        className: `grid grid-cols-2 sm:grid-cols-4 gap-3`,
        children: m.map(([e, t]) => (0, a.jsxs)(`div`, {
          children: [(0, a.jsx)(`div`, {
            className: `cap`,
            children: e
          }), (0, a.jsx)(`div`, {
            className: `text-[0.88rem] mt-0.5`,
            children: t
          })]
        }, e))
      }), (0, a.jsxs)(`div`, {
        className: `flex items-baseline gap-3 py-3`,
        style: {
          borderTop: `1px solid var(--line)`,
          borderBottom: `1px solid var(--line)`
        },
        children: [(0, a.jsx)(`span`, {
          className: `num text-[2rem] font-bold leading-none`,
          style: {
            color: `var(--gold)`
          },
          children: `600+`
        }), (0, a.jsxs)(`span`, {
          className: `dim text-[0.9rem]`,
          children: [`compounds screened.`, (0, a.jsx)(`br`, {}), (0, a.jsx)(`b`, {
            style: {
              color: `var(--text)`
            },
            children: `3 detected.`
          }), ` Everything else: below the limit of reporting.`]
        })]
      }), (0, a.jsxs)(`div`, {
        className: `grid gap-1.5`,
        children: [(0, a.jsxs)(`div`, {
          className: `grid grid-cols-[1.4fr_0.8fr_0.8fr_0.9fr] cap px-1`,
          children: [(0, a.jsx)(`span`, {
            children: `Compound`
          }), (0, a.jsx)(`span`, {
            children: `Result mg/kg`
          }), (0, a.jsx)(`span`, {
            children: `EU limit`
          }), (0, a.jsx)(`span`, {})]
        }), h.map(e => (0, a.jsxs)(`div`, {
          className: `grid grid-cols-[1.4fr_0.8fr_0.8fr_0.9fr] items-center px-3 py-2 rounded-lg text-[0.9rem]`,
          style: {
            background: `var(--bg-2)`
          },
          children: [(0, a.jsx)(`span`, {
            className: `font-semibold`,
            children: e.c
          }), (0, a.jsx)(`span`, {
            className: `mono`,
            children: e.v
          }), (0, a.jsx)(`span`, {
            className: `dim mono`,
            children: e.l
          }), (0, a.jsx)(`span`, {
            className: `mono text-[0.68rem] px-2 py-1 rounded-full justify-self-start`,
            style: {
              color: e.over ? `var(--rust)` : `var(--green-2)`,
              border: `1px solid ${e.over?`var(--rust-glow)`:`var(--green-glow)`}`
            },
            children: e.over ? `over limit` : `within`
          })]
        }, e.c))]
      }), (0, a.jsxs)(`div`, {
        children: [(0, a.jsx)(`b`, {
          style: {
            color: `var(--rust)`
          },
          children: `Non-conforming.`
        }), ` `, (0, a.jsx)(`span`, {
          className: `dim text-[0.92rem]`,
          children: `One compound over the destination limit: found in the report, not at the port.`
        })]
      }), (0, a.jsx)(`p`, {
        className: `cap m-0`,
        children: `Rebuilt from an actual laboratory report. Client and report identifiers removed. Results relate to the sampled lot only.`
      })]
    }), (0, a.jsxs)(`div`, {
      className: `grid gap-3`,
      children: [(0, a.jsx)(`span`, {
        className: `cap px-3 py-1.5 rounded-full self-start`,
        style: {
          border: `1px solid var(--line-2)`,
          color: `var(--gold-2)`
        },
        children: `Report available for review`
      }), (0, a.jsx)(`p`, {
        className: `text-[1.05rem] m-0`,
        children: `A lot can fail the screen.`
      }), (0, a.jsx)(`p`, {
        className: `dim text-[0.92rem] m-0 leading-relaxed`,
        children: `Testing before dispatch identifies a non-conforming result before the lot travels, rather than after arrival. Screening reports of this kind are run crop by crop and are shared with the buyer.`
      })]
    })]
  })
}
var _ = [{
  crop: `Turmeric · dried`,
  spec: `5.5% curcumin`,
  note: `(achieved and maintained, 2024–2025)`,
  desc: `Boiled, blanched and polished, then MRL-screened against 600+ compounds before dispatch`,
  region: `KASUR CLUSTER`
}, {
  crop: `Fenugreek · dried leaves`,
  spec: `Cured & graded`,
  note: ``,
  desc: `Residue regime run from sowing, with the lab report supplied alongside the lot`,
  region: `KASUR CLUSTER`
}, {
  crop: `Chilli · dried`,
  spec: `Aflatoxin-controlled`,
  note: ``,
  desc: `Controlled hub drying to destination specification for moisture, colour and purity`,
  region: `PUNJAB + SINDH`
}, {
  crop: `Your crop · your specification`,
  spec: `Sesame, guava, corn & more`,
  note: ``,
  desc: `Graded to the destination specification. The current sheet is available on request.`,
  region: `ACROSS THE CLUSTERS`
}];

function v() {
  return (0, a.jsxs)(`div`, {
    className: `grid gap-5`,
    children: [(0, a.jsx)(`div`, {
      className: `cap`,
      children: `Representative specifications. Current sheet available on request.`
    }), (0, a.jsx)(`div`, {
      className: `grid sm:grid-cols-2 lg:grid-cols-4 gap-3`,
      children: _.map(e => (0, a.jsxs)(`div`, {
        className: `panel p-4 grid gap-1.5`,
        children: [(0, a.jsx)(`div`, {
          className: `cap`,
          style: {
            color: `var(--gold-2)`
          },
          children: e.crop
        }), (0, a.jsx)(`b`, {
          className: `text-[0.98rem]`,
          children: e.spec
        }), e.note && (0, a.jsx)(`span`, {
          className: `cap`,
          style: {
            color: `var(--green-2)`
          },
          children: e.note
        }), (0, a.jsx)(`p`, {
          className: `dim text-[0.85rem] m-0 leading-relaxed`,
          children: e.desc
        }), (0, a.jsx)(`div`, {
          className: `cap mt-1`,
          children: e.region
        })]
      }, e.crop))
    }), (0, a.jsx)(`p`, {
      className: `m-0 italic dim text-[0.98rem] max-w-[66ch]`,
      style: {
        fontFamily: `'Bricolage Grotesque', system-ui, sans-serif`
      },
      children: `Graded, screened and documented to the destination requirement. Terms are structured per crop, per market and per partnership.`
    })]
  })
}

function y() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(`section`, {
      className: `hero relative overflow-hidden snap flex flex-col`,
      style: {
        padding: `20px 0 20px`,
        height: `auto`,
        minHeight: `calc(100vh - 64px)`
      },
      children: [(0, a.jsx)(o, {}), (0, a.jsxs)(`div`, {
        className: `wrap relative flex-1 flex flex-col justify-center gap-5`,
        children: [(0, a.jsx)(`span`, {
          className: `eyebrow`,
          children: `Exporters`
        }), (0, a.jsxs)(`h1`, {
          className: `display text-[clamp(2rem,3.6vw,3.4rem)] m-0`,
          children: [`Contracted volumes for `, (0, a.jsx)(`span`, {
            style: {
              color: `var(--gold)`
            },
            children: `export programmes.`
          })]
        }), (0, a.jsx)(`p`, {
          className: `dim text-[1.05rem] max-w-[58ch] m-0`,
          children: `Export programmes depend on volume arriving within the contracted window. VGreen clusters are contracted, monitored and committed against agreed seasonal volumes, so supply is planned against a defined commitment.`
        })]
      })]
    }), (0, a.jsx)(`section`, {
      className: `sec`,
      children: (0, a.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, a.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, a.jsx)(`span`, {
            className: `eyebrow`,
            children: `Compliance`
          }), (0, a.jsxs)(`h2`, {
            children: [`Destination compliance begins at the `, (0, a.jsx)(`span`, {
              style: {
                color: `var(--gold)`
              },
              children: `spray schedule.`
            })]
          }), (0, a.jsx)(`p`, {
            children: `Export compliance is built into the crop during the growing season, and it ends as one documented chain running from the farm gate to the port.`
          })]
        }), (0, a.jsx)(l, {})]
      })
    }), (0, a.jsx)(`section`, {
      className: `sec`,
      children: (0, a.jsx)(`div`, {
        className: `wrap`,
        children: (0, a.jsx)(d, {})
      })
    }), (0, a.jsx)(`section`, {
      className: `sec`,
      children: (0, a.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, a.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, a.jsx)(`span`, {
            className: `eyebrow`,
            children: `Requirements and practice`
          }), (0, a.jsxs)(`h2`, {
            children: [`Destination requirements and the `, (0, a.jsx)(`span`, {
              style: {
                color: `var(--gold)`
              },
              children: `VGreen response.`
            })]
          })]
        }), (0, a.jsx)(p, {})]
      })
    }), (0, a.jsx)(`section`, {
      className: `sec`,
      children: (0, a.jsx)(`div`, {
        className: `wrap`,
        children: (0, a.jsx)(g, {})
      })
    }), (0, a.jsx)(`section`, {
      className: `sec`,
      children: (0, a.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, a.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, a.jsx)(`span`, {
            className: `eyebrow`,
            children: `Where this stands today`
          }), (0, a.jsxs)(`h2`, {
            children: [`What is in place, and what is `, (0, a.jsx)(`span`, {
              style: {
                color: `var(--gold)`
              },
              children: `not yet.`
            })]
          }), (0, a.jsx)(`p`, {
            children: `An export programme is planned against what a supplier can evidence, so both halves are set out here.`
          })]
        }), (0, a.jsxs)(`div`, {
          className: `grid md:grid-cols-2 gap-4`,
          children: [(0, a.jsxs)(`div`, {
            className: `panel p-6 md:p-7`,
            style: {
              borderTopWidth: 4,
              borderTopColor: `var(--green)`
            },
            children: [(0, a.jsx)(`div`, {
              className: `cap mb-3`,
              style: {
                color: `var(--green-2)`
              },
              children: `IN PLACE`
            }), (0, a.jsxs)(`ul`, {
              className: `m-0 pl-5 grid gap-2 text-[0.95rem]`,
              children: [(0, a.jsx)(`li`, {
                children: `Residue-controlled clusters, with a recorded spray regime held for each field from sowing.`
              }), (0, a.jsx)(`li`, {
                children: `Lots screened against destination limits before sale, across more than six hundred compounds.`
              }), (0, a.jsx)(`li`, {
                children: `Grading, drying, sorting and packing at the hub, minutes from the field.`
              }), (0, a.jsx)(`li`, {
                children: `Traceability from the farmer and the field through to the dispatched lot.`
              }), (0, a.jsx)(`li`, {
                children: `Phytosanitary documentation supported through to the port.`
              }), (0, a.jsx)(`li`, {
                children: `Supply running to exporters in the Middle East and the GCC.`
              })]
            })]
          }), (0, a.jsxs)(`div`, {
            className: `panel p-6 md:p-7`,
            style: {
              borderTopWidth: 4,
              borderTopColor: `var(--gold)`
            },
            children: [(0, a.jsx)(`div`, {
              className: `cap mb-3`,
              style: {
                color: `var(--gold-2)`
              },
              children: `NOT YET`
            }), (0, a.jsxs)(`ul`, {
              className: `m-0 pl-5 grid gap-2 text-[0.95rem]`,
              children: [(0, a.jsx)(`li`, {
                children: `No hub holds a certification of its own. Quality is evidenced lot by lot, and nothing on this page should be read as a certified claim.`
              }), (0, a.jsx)(`li`, {
                children: `Certification, and the quality testing capacity that has to sit behind it, is the next stage of capacity building at the hubs.`
              }), (0, a.jsx)(`li`, {
                children: `This is where VGreen and the hubs are directing investment, and it is an open place for a partner to work with them.`
              })]
            })]
          })]
        })]
      })
    }), (0, a.jsx)(`section`, {
      className: `sec`,
      children: (0, a.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, a.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, a.jsx)(`span`, {
            className: `eyebrow`,
            children: `Already export-ready`
          }), (0, a.jsxs)(`h2`, {
            children: [`Graded, screened and documented lots `, (0, a.jsx)(`span`, {
              style: {
                color: `var(--gold)`
              },
              children: `available for quotation.`
            })]
          })]
        }), (0, a.jsx)(v, {})]
      })
    }), (0, a.jsx)(`section`, {
      className: `sec`,
      children: (0, a.jsxs)(`div`, {
        className: `wrap`,
        children: [(0, a.jsxs)(`div`, {
          className: `sec-head`,
          children: [(0, a.jsx)(`span`, {
            className: `eyebrow`,
            children: `Export lens`
          }), (0, a.jsxs)(`h2`, {
            children: [`The processor chain with an added `, (0, a.jsx)(`span`, {
              style: {
                color: `var(--gold)`
              },
              children: `compliance layer.`
            })]
          }), (0, a.jsx)(`p`, {
            children: `Dedicated clusters, committed volumes, hub grading, lot traceability and farmer settlement all apply, with the compliance layer running through Grow, Process and Sell.`
          })]
        }), (0, a.jsx)(n, {
          role: `buyer`
        })]
      })
    }), (0, a.jsxs)(`section`, {
      className: `sec relative overflow-hidden`,
      style: {
        minHeight: 0,
        padding: `56px 0`
      },
      children: [(0, a.jsx)(`div`, {
        className: `absolute inset-0 glow-gold pointer-events-none`,
        style: {
          "--gx": `50%`,
          "--gy": `100%`
        }
      }), (0, a.jsxs)(`div`, {
        className: `wrap relative text-center grid gap-3 justify-items-center`,
        children: [(0, a.jsx)(`span`, {
          className: `eyebrow`,
          children: `Share your requirement`
        }), (0, a.jsxs)(`h2`, {
          className: `text-[clamp(1.3rem,2.2vw,1.8rem)] m-0 max-w-[46ch]`,
          children: [`Crop, destination and volume are enough to `, (0, a.jsx)(`span`, {
            style: {
              color: `var(--gold)`
            },
            children: `identify the cluster.`
          })]
        }), (0, a.jsx)(r, {
          source: `Exporters page`
        }), (0, a.jsxs)(`div`, {
          className: `flex flex-wrap gap-3 justify-center mt-1 cap`,
          children: [(0, a.jsx)(`span`, {
            children: `Or directly:`
          }), (0, a.jsx)(`a`, {
            className: `no-underline`,
            style: {
              color: `var(--green-2)`
            },
            href: `mailto:info@vgreen.com.pk`,
            children: `info@vgreen.com.pk`
          }), (0, a.jsx)(`a`, {
            className: `no-underline`,
            style: {
              color: `var(--green-2)`
            },
            href: `tel:+923005003041`,
            children: `+92 300 5003041`
          })]
        })]
      })]
    })]
  })
}
export {
  y as
  default
};