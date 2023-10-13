import {
  defineStore,
  storeToRefs
} from "./chunk-DYG2F5ZL.js";
import "./chunk-J4VLYDXT.js";
import {
  Fragment,
  Teleport,
  Text,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineAsyncComponent,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  h,
  inject,
  isRef,
  isVNode,
  markRaw,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUnmounted,
  onUpdated,
  openBlock,
  popScopeId,
  provide,
  pushScopeId,
  reactive,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveDynamicComponent,
  shallowRef,
  toDisplayString,
  toRef,
  unref,
  useSlots,
  vShow,
  warn,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-X4XR7NQZ.js";

// node_modules/vite-code/dist/vite-code.js
var Sd = Object.defineProperty;
var Cd = (o, a, s) => a in o ? Sd(o, a, { enumerable: true, configurable: true, writable: true, value: s }) : o[a] = s;
var Pu = (o, a, s) => (Cd(o, typeof a != "symbol" ? a + "" : a, s), s);
function Fd() {
  const o = Date.now().toString(36), a = Math.random().toString(36).slice(2);
  return o + a;
}
function Zn(o, a = "") {
  const s = [];
  return o.forEach((h2) => {
    if (!h2.onlyId) {
      const g = Fd();
      h2.onlyId = g, h2.pathId = a ? `${a}-${h2.onlyId}` : h2.onlyId;
    }
    a && (h2.pathId = a ? `${a}-${h2.onlyId}` : h2.onlyId), h2.children && h2.children.length && (h2.children = Zn(h2.children, h2.pathId)), s.push(h2);
  }), s;
}
function Pd(o) {
  const a = {
    "[object String]": "string",
    "[object Number]": "number",
    "[object Boolean]": "boolean",
    "[object Date]": "date",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Null]": "null",
    "[object Undefined]": "undefined"
  }, s = Object.prototype.toString.call(o);
  return a[s];
}
function Bd(o, a, s) {
  let h2 = {
    string: (g) => `"${g}"`,
    null: (g) => `${g}`,
    undefined: (g) => `${g}`,
    number: (g) => `${g}`,
    boolean: (g) => `${g}`,
    date: (g) => `"${g}"`,
    function: (g) => `${g}`,
    object: (g) => {
      let f = `{ 
`;
      return s += "	", Object.entries(g).forEach(([p, m]) => {
        f += s + p + ":" + al(m, s) + `,
`;
      }), s = s.replace(/\t/, ""), f += s + "}";
    },
    array: (g) => {
      let f = `[ 
`;
      return s += "	", g.forEach((p) => {
        f += s + al(p, s) + `,
`;
      }), s = s.replace(/\t/, ""), f += s + "]";
    }
  };
  return h2[o] ? h2[o](a) : `"${a}"`;
}
function al(o, a = "") {
  const s = Pd(o);
  return Bd(s, o, a);
}
function Ru(o, a = "object") {
  return a === "json" ? JSON.stringify(o, null, 4) : al(o);
}
var Rd = (o) => {
  try {
    return { code: 1, data: new Function(`return ${o}`)(), message: "解析成功" };
  } catch (a) {
    return console.log(a + "; 请检查【】内的内容是否正确：【" + o + "】"), { code: 100, data: null, message: a + "; 请检查【】内的内容是否正确：【" + o + "】" };
  }
};
function Hd(o, a = "file", s = "js") {
  const h2 = `${o}`, g = document.createElement("a");
  g.style.display = "none";
  const f = new Blob([h2], { type: "application/javascript" }), p = URL.createObjectURL(f);
  g.href = p, g.download = `${a}.${s}`, document.body.appendChild(g), g.click(), URL.revokeObjectURL(p), document.body.removeChild(g);
}
var Wd = class {
  constructor(a = "model_all", s) {
    Pu(this, "store", {});
    const g = defineStore(a, {
      state: () => ({
        ...s,
        data: {},
        config: [],
        attributeFn: {},
        actionsFn: {},
        currentView: {},
        pageName: ""
      }),
      actions: {
        get(f) {
          return zd(this.$state, f);
        },
        set(f, p) {
          return jd(this.$state, f, p);
        }
      }
    });
    this.store = g();
  }
};
function zd(o, a) {
  if (typeof a == "string") {
    if (a.length === 0)
      return o;
    let s = o;
    if (a.indexOf(".") > -1) {
      const h2 = a.split(".");
      s = o[h2[0]];
      for (let g = 1; g < h2.length; g++)
        if (s[h2[g]] !== void 0)
          s = s[h2[g]];
        else
          return;
      return s;
    }
    return o[a];
  }
}
function jd(o, a, s) {
  if (typeof a == "string") {
    if (a.length === 0)
      return false;
    let h2 = o;
    if (a.indexOf(".") > -1) {
      const g = a.split(".");
      h2 = o[g[0]];
      const f = g.length - 1;
      for (let p = 1; p < f; p++) {
        const m = g[p];
        h2[m] === void 0 && (h2[m] = {}), h2 = h2[m];
      }
      h2[g[f]] = s;
    } else
      o[a] = s;
    return true;
  }
  return false;
}
var $d = class extends Wd {
  constructor(a, s) {
    super(a, {
      ...s,
      visible: false,
      activeName: "data",
      preView: false
    });
  }
};
var xo = null;
var Ud = () => xo || (xo = new $d("configStore").store, xo);
var Sl = Ud;
function Of(o, a = {}, s = {}) {
  if (Object.prototype.toString.call(o) !== "[object Object]")
    return o;
  let h2 = kl(Cl(o));
  for (let g of Object.entries(h2)) {
    const f = g[0], p = g[1];
    if (!["description", "desc"].includes(f)) {
      if (f === "isIf" && !p)
        return null;
      if (typeof p == "string" && p.indexOf("function:") > -1) {
        let m = p.replace(/\s/g, "").split(":")[1].replace(/!/g, "");
        try {
          p.indexOf("!") > -1 ? a[m] && (h2[f] = !a[m](s)) : a[m] && (h2[f] = a[m](s));
        } catch {
          alert("函数解析失败, 请检查函数格式是否正确！");
        }
        if (f === "isIf" && !h2[f])
          return null;
        continue;
      }
      if (typeof p == "string" && p.indexOf("getValue:") > -1) {
        let m = p.replace(/\s/g, "").split(":")[1], C = m.split(".")[0].replace(/!/g, "");
        if (p.indexOf("!") > -1 ? h2[f] = !ll(s[C], m) : h2[f] = ll(s[C], m), f === "isIf" && !h2[f])
          return null;
        continue;
      }
      if (Object.prototype.toString.call(p) === "[object Object]") {
        h2[f] = Of(p, a, s);
        continue;
      }
      if (Object.prototype.toString.call(p) === "[object Array]" && !["slot", "children"].includes(f)) {
        h2[f] = Nf(p, a, s);
        continue;
      }
    }
  }
  return h2;
}
function ll(o, a) {
  if (Object.prototype.toString.call(o) !== "[object Object]" || !o)
    return o;
  if (typeof a == "string") {
    if (a.length === 0)
      return o;
    let s = o;
    if (a.indexOf(".") > -1) {
      const h2 = a.split(".");
      for (let g = 1; g < h2.length; g++)
        if (s[h2[g]] !== void 0)
          s = s[h2[g]];
        else
          return;
      return s;
    }
    return o;
  }
}
function Gd(o, a, s) {
  if (Object.prototype.toString.call(o) !== "[object Object]" || !o)
    return o;
  if (typeof a == "string") {
    if (a.length === 0)
      return false;
    let h2 = o;
    if (a.indexOf(".") > -1) {
      const g = a.split("."), f = g.length - 1;
      for (let p = 1; p < f; p++) {
        const m = g[p];
        h2[m] === void 0 && (h2[m] = {}), h2 = h2[m];
      }
      h2[g[f]] = s;
    } else
      o[a] = s;
    return true;
  }
  return false;
}
function Nf(o, a, s) {
  const h2 = [];
  return o.forEach((g) => {
    let f = Of(g, a, s);
    f && h2.push(f);
  }), h2;
}
function Af(o, a, s = true) {
  if (Object.prototype.toString.call(o) !== "[object Object]" || Object.prototype.toString.call(a) !== "[object Object]")
    return o;
  let h2 = s ? kl(Cl(o)) : o;
  for (let g of Object.entries(a)) {
    const f = g[0], p = g[1];
    if (Object.prototype.toString.call(p) === "[object Object]" && h2[f]) {
      h2[f] = Af(h2[f], p, s);
      continue;
    }
    h2[f] = p;
  }
  return h2;
}
var Cl = (o) => JSON.stringify(o, function(a, s) {
  return s === null ? "null" : s === void 0 ? "undefined" : s;
});
var kl = (o) => JSON.parse(o, function(a, s) {
  if (s === "null")
    return null;
  if (s !== "undefined")
    return s;
});
var Vd = (o) => o.replace(/\-(\w)/g, function(a, s) {
  return s.toUpperCase();
});
function Kd(o) {
  const a = {
    "[object String]": "string",
    "[object Number]": "number",
    "[object Boolean]": "boolean",
    "[object Date]": "date",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Object]": "object",
    "[object Null]": "null",
    "[object Undefined]": "undefined"
  }, s = Object.prototype.toString.call(o);
  return a[s];
}
function Yd(o, a) {
  let s = {
    string: (h2) => h2,
    null: (h2) => h2,
    undefined: (h2) => h2,
    number: (h2) => h2,
    boolean: (h2) => h2,
    date: (h2) => h2,
    function: (h2) => h2.toString(),
    object: (h2) => Object.entries(h2).map(([f, p]) => {
      const m = {};
      return m.key = f, m.isOpen = false, m.value = Xn(p), m;
    }),
    array: (h2) => Object.entries(h2).map(([f, p]) => {
      const m = {};
      return m.key = Number(f), m.isOpen = false, m.value = Xn(p), m;
    })
  };
  return s[o] ? s[o](a) : a;
}
function Xn(o) {
  const a = {}, s = Kd(o);
  return a.type = s, a.isAdd = false, a.onlyId = o == null ? void 0 : o.onlyId, a.pathId = o == null ? void 0 : o.pathId, a.value = Yd(s, o), reactive(a);
}
function sl(o) {
  const a = o.type, s = o.value;
  let h2 = {
    string: (g) => g,
    null: (g) => g,
    undefined: (g) => g,
    number: (g) => g,
    boolean: (g) => g,
    date: (g) => g,
    function: (g) => {
      try {
        return new Function(`return ${g}`)();
      } catch (f) {
        throw alert("函数解析失败, 请检查函数格式是否正确！"), new Error(f + "; 请检查【】内的内容是否正确：【" + g + "】");
      }
    },
    object: (g) => {
      const f = {};
      return g.forEach((p) => {
        f[p.key] = sl(p.value);
      }), f;
    },
    array: (g) => {
      const f = [];
      return g.forEach((p) => {
        f[p.key] = sl(p.value);
      }), f;
    }
  };
  return h2[a] ? h2[a](s) : s;
}
function Fi(o) {
  const a = {};
  return o.forEach((s) => {
    a[s.onlyId] = { ...s }, s != null && s.children && (a[s.onlyId].children = Fi(s.children));
  }), a;
}
function Go(o) {
  const a = [];
  return Object.values(o).forEach((s) => {
    const h2 = { ...s };
    s.children && (h2.children = Go(s.children)), a.push(h2);
  }), a;
}
var xl = (o, a) => {
  const s = o.__vccOpts || o;
  for (const [h2, g] of a)
    s[h2] = g;
  return s;
};
var Xd = ["onDrop", "onDragstart"];
var qd = ["onClick"];
var Jd = defineComponent({
  name: "vBaseIndex"
});
var Zd = Object.assign(Jd, {
  props: {
    isTemplate: {
      type: Boolean,
      default: false
    },
    config: {
      type: Array,
      default: () => []
    },
    itemView: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      default: () => ({})
    },
    itemConfig: {
      type: Object,
      default: () => ({})
    },
    itemScope: {
      type: Object,
      default: () => ({})
    },
    attributeFn: {
      type: Object,
      default: () => ({})
    },
    actionsFn: {
      type: Object,
      default: () => ({})
    }
  },
  setup(o) {
    const a = o, s = ref({ ...a.itemView }), h2 = computed(() => typeof s.value.isShow > "u" ? true : s.value.isShow), g = (A, B, W) => {
      s.value = Nf(A, B, W)[0];
    };
    watchEffect(() => {
      g([a.itemView], a.attributeFn, { data: a.data, itemConfig: a.itemConfig, scope: a.itemScope });
    });
    const f = Ly(a.itemView), p = ref({ mapKey: "modelValue", key: "value" }), m = computed({
      get() {
        const { key: A, mapKey: B } = p.value;
        return s.value[B] ? ll(a.data, s.value[B]) : s.value[A];
      },
      set(A) {
        p.value = A;
        const { key: B, mapKey: W, value: $ } = A;
        s.value[W] && Gd(a.data, s.value[W], $), s.value[B] = $;
      }
    });
    function C(A, B) {
      const { initView: W } = A;
      ["methods", "communication"].forEach((X) => {
        if (W[X]) {
          const K = W[X][B], Z = a.actionsFn[K];
          Z && typeof Z == "function" && Z({ options: A, data: a.data, scope: a.itemScope, value: m.value });
        }
      });
    }
    const w = Sl(), b = computed(() => w.visible && !w.preView && a.isTemplate), x = () => {
      console.log("onCurrentView", a.itemView), w.set("currentView", a.itemView);
    }, T = (A) => {
      const B = JSON.parse(A.dataTransfer.getData("config")).itemConfig;
      B != null && B.onlyId && _(B, true), _(Zn([B], a.itemView.pathId)[0]);
    }, _ = (A, B = false) => {
      A.updateId = A.updateId + "1";
      let W = A.pathId.split("-");
      const $ = (Z, le) => (Z[le].children || (Z[le].children = []), Z[le].children);
      let X = Fi(a.config), K = X;
      for (let Z = 0; Z < W.length - 1; ++Z)
        K = $(K, W[Z]);
      B ? delete K[W[W.length - 1]] : K[W[W.length - 1]] = Zn([A])[0], a.config.length = 0, a.config.push(...Go(X));
    }, E = (A) => {
      A.dataTransfer.setData("config", JSON.stringify({ itemConfig: a.itemView }));
    };
    return (A, B) => {
      var W, $;
      return openBlock(), createElementBlock(Fragment, null, [
        unref(b) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass({ "v-component-box": unref(b) }),
          onDragover: B[1] || (B[1] = withModifiers(() => {
          }, ["stop", "prevent"])),
          onDrop: withModifiers(T, ["stop", "prevent"]),
          onDragstart: withModifiers(E, ["stop"]),
          draggable: "true"
        }, [
          unref(b) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "v-current-view-btn",
            onClick: withModifiers(x, ["self"])
          }, "编辑", 8, qd)) : createCommentVNode("", true),
          unref(s) && unref(f) ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(f)), {
            key: 1,
            modelValue: unref(m),
            "onUpdate:modelValue": B[0] || (B[0] = (X) => isRef(m) ? m.value = X : null),
            id: unref(s).id,
            itemView: unref(s),
            onOnActivate: C
          }, createSlots({
            default: withCtx(() => {
              var X;
              return [
                (openBlock(true), createElementBlock(Fragment, null, renderList((X = unref(s).children) == null ? void 0 : X.filter((K) => !K.slotName), (K) => (openBlock(), createBlock(Ir, {
                  key: K.onlyId + K.updateId,
                  itemView: K,
                  data: o.data,
                  itemConfig: o.itemConfig,
                  config: o.config,
                  itemScope: o.itemScope,
                  attributeFn: o.attributeFn,
                  actionsFn: o.actionsFn,
                  isTemplate: o.isTemplate
                }, null, 8, ["itemView", "data", "itemConfig", "config", "itemScope", "attributeFn", "actionsFn", "isTemplate"]))), 128))
              ];
            }),
            _: 2
          }, [
            renderList((W = unref(s).children) == null ? void 0 : W.filter((X) => X.slotName), (X) => ({
              name: X.slotName,
              fn: withCtx((K) => [
                X.slotName ? (openBlock(), createBlock(Ir, {
                  key: 0,
                  itemView: X,
                  data: o.data,
                  itemConfig: o.itemConfig,
                  config: o.config,
                  itemScope: K,
                  attributeFn: o.attributeFn,
                  actionsFn: o.actionsFn,
                  isTemplate: o.isTemplate
                }, null, 8, ["itemView", "data", "itemConfig", "config", "itemScope", "attributeFn", "actionsFn", "isTemplate"])) : createCommentVNode("", true)
              ])
            }))
          ]), 1064, ["modelValue", "id", "itemView"])), [
            [vShow, unref(h2)]
          ]) : createCommentVNode("", true)
        ], 42, Xd)) : createCommentVNode("", true),
        unref(s) && unref(f) && !unref(b) ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(unref(f)), {
          key: 1,
          modelValue: unref(m),
          "onUpdate:modelValue": B[2] || (B[2] = (X) => isRef(m) ? m.value = X : null),
          id: unref(s).id,
          itemView: unref(s),
          onOnActivate: C
        }, createSlots({
          default: withCtx(() => {
            var X;
            return [
              (openBlock(true), createElementBlock(Fragment, null, renderList((X = unref(s).children) == null ? void 0 : X.filter((K) => !K.slotName), (K) => (openBlock(), createBlock(Ir, {
                key: K.onlyId + K.updateId,
                itemView: K,
                data: o.data,
                itemConfig: o.itemConfig,
                itemScope: o.itemScope,
                attributeFn: o.attributeFn,
                actionsFn: o.actionsFn,
                isTemplate: o.isTemplate
              }, null, 8, ["itemView", "data", "itemConfig", "itemScope", "attributeFn", "actionsFn", "isTemplate"]))), 128))
            ];
          }),
          _: 2
        }, [
          renderList(($ = unref(s).children) == null ? void 0 : $.filter((X) => X.slotName), (X) => ({
            name: X.slotName,
            fn: withCtx((K) => [
              X.slotName ? (openBlock(), createBlock(Ir, {
                key: 0,
                itemView: X,
                data: o.data,
                itemConfig: o.itemConfig,
                itemScope: K,
                attributeFn: o.attributeFn,
                actionsFn: o.actionsFn,
                isTemplate: o.isTemplate
              }, null, 8, ["itemView", "data", "itemConfig", "itemScope", "attributeFn", "actionsFn", "isTemplate"])) : createCommentVNode("", true)
            ])
          }))
        ]), 1064, ["modelValue", "id", "itemView"])), [
          [vShow, unref(h2)]
        ]) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var Ir = xl(Zd, [["__scopeId", "data-v-48c45109"]]);
Ir.install = (o) => {
  o.component(Ir.name, Ir);
};
var Qd = Object.defineProperty;
var ep = Object.defineProperties;
var tp = Object.getOwnPropertyDescriptors;
var Hu = Object.getOwnPropertySymbols;
var rp = Object.prototype.hasOwnProperty;
var np = Object.prototype.propertyIsEnumerable;
var Wu = (o, a, s) => a in o ? Qd(o, a, { enumerable: true, configurable: true, writable: true, value: s }) : o[a] = s;
var ip = (o, a) => {
  for (var s in a || (a = {}))
    rp.call(a, s) && Wu(o, s, a[s]);
  if (Hu)
    for (var s of Hu(a))
      np.call(a, s) && Wu(o, s, a[s]);
  return o;
};
var op = (o, a) => ep(o, tp(a));
function zu(o, a) {
  var s;
  const h2 = shallowRef();
  return watchEffect(() => {
    h2.value = o();
  }, op(ip({}, a), {
    flush: (s = a == null ? void 0 : a.flush) != null ? s : "sync"
  })), readonly(h2);
}
var ju;
var fr = typeof window < "u";
var ap = (o) => typeof o == "string";
var lp = () => {
};
fr && ((ju = window == null ? void 0 : window.navigator) != null && ju.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Tl(o) {
  return typeof o == "function" ? o() : unref(o);
}
function sp(o) {
  return o;
}
function _l(o) {
  return getCurrentScope() ? (onScopeDispose(o), true) : false;
}
function up(o, a = true) {
  getCurrentInstance() ? onMounted(o) : a ? o() : nextTick(o);
}
function $u(o, a, s = {}) {
  const {
    immediate: h2 = true
  } = s, g = ref(false);
  let f = null;
  function p() {
    f && (clearTimeout(f), f = null);
  }
  function m() {
    g.value = false, p();
  }
  function C(...w) {
    p(), g.value = true, f = setTimeout(() => {
      g.value = false, f = null, o(...w);
    }, Tl(a));
  }
  return h2 && (g.value = true, fr && C()), _l(m), {
    isPending: readonly(g),
    start: C,
    stop: m
  };
}
function Df(o) {
  var a;
  const s = Tl(o);
  return (a = s == null ? void 0 : s.$el) != null ? a : s;
}
var Ll = fr ? window : void 0;
var fp = fr ? window.document : void 0;
function ul(...o) {
  let a, s, h2, g;
  if (ap(o[0]) || Array.isArray(o[0]) ? ([s, h2, g] = o, a = Ll) : [a, s, h2, g] = o, !a)
    return lp;
  Array.isArray(s) || (s = [s]), Array.isArray(h2) || (h2 = [h2]);
  const f = [], p = () => {
    f.forEach((b) => b()), f.length = 0;
  }, m = (b, x, T, _) => (b.addEventListener(x, T, _), () => b.removeEventListener(x, T, _)), C = watch(() => [Df(a), Tl(g)], ([b, x]) => {
    p(), b && f.push(...s.flatMap((T) => h2.map((_) => m(b, T, _, x))));
  }, { immediate: true, flush: "post" }), w = () => {
    C(), p();
  };
  return _l(w), w;
}
function cp(o, a = false) {
  const s = ref(), h2 = () => s.value = !!o();
  return h2(), up(h2, a), s;
}
var Uu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var Gu = "__vueuse_ssr_handlers__";
Uu[Gu] = Uu[Gu] || {};
function hp({ document: o = fp } = {}) {
  if (!o)
    return ref("visible");
  const a = ref(o.visibilityState);
  return ul(o, "visibilitychange", () => {
    a.value = o.visibilityState;
  }), a;
}
var Vu = Object.getOwnPropertySymbols;
var dp = Object.prototype.hasOwnProperty;
var pp = Object.prototype.propertyIsEnumerable;
var vp = (o, a) => {
  var s = {};
  for (var h2 in o)
    dp.call(o, h2) && a.indexOf(h2) < 0 && (s[h2] = o[h2]);
  if (o != null && Vu)
    for (var h2 of Vu(o))
      a.indexOf(h2) < 0 && pp.call(o, h2) && (s[h2] = o[h2]);
  return s;
};
function If(o, a, s = {}) {
  const h2 = s, { window: g = Ll } = h2, f = vp(h2, ["window"]);
  let p;
  const m = cp(() => g && "ResizeObserver" in g), C = () => {
    p && (p.disconnect(), p = void 0);
  }, w = watch(() => Df(o), (x) => {
    C(), m.value && g && x && (p = new ResizeObserver(a), p.observe(x, f));
  }, { immediate: true, flush: "post" }), b = () => {
    C(), w();
  };
  return _l(b), {
    isSupported: m,
    stop: b
  };
}
var Ku;
(function(o) {
  o.UP = "UP", o.RIGHT = "RIGHT", o.DOWN = "DOWN", o.LEFT = "LEFT", o.NONE = "NONE";
})(Ku || (Ku = {}));
var gp = Object.defineProperty;
var Yu = Object.getOwnPropertySymbols;
var mp = Object.prototype.hasOwnProperty;
var yp = Object.prototype.propertyIsEnumerable;
var Xu = (o, a, s) => a in o ? gp(o, a, { enumerable: true, configurable: true, writable: true, value: s }) : o[a] = s;
var bp = (o, a) => {
  for (var s in a || (a = {}))
    mp.call(a, s) && Xu(o, s, a[s]);
  if (Yu)
    for (var s of Yu(a))
      yp.call(a, s) && Xu(o, s, a[s]);
  return o;
};
var wp = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
bp({
  linear: sp
}, wp);
function Sp({ window: o = Ll } = {}) {
  if (!o)
    return ref(false);
  const a = ref(o.document.hasFocus());
  return ul(o, "blur", () => {
    a.value = false;
  }), ul(o, "focus", () => {
    a.value = true;
  }), a;
}
Object.freeze({});
Object.freeze([]);
var Ii = () => {
};
var Ff = Object.assign;
var Cp = Object.prototype.hasOwnProperty;
var qu = (o, a) => Cp.call(o, a);
var Ao = Array.isArray;
var Pf = (o) => typeof o == "function";
var Ri = (o) => typeof o == "string";
var kp = (o) => typeof o == "symbol";
var Bf = (o) => o !== null && typeof o == "object";
var Rf = (o) => {
  const a = /* @__PURE__ */ Object.create(null);
  return (s) => a[s] || (a[s] = o(s));
};
var xp = /-(\w)/g;
var Tp = Rf((o) => o.replace(xp, (a, s) => s ? s.toUpperCase() : ""));
var _p = Rf(
  (o) => o.charAt(0).toUpperCase() + o.slice(1)
);
var Lp = typeof global == "object" && global && global.Object === Object && global;
var Mp = Lp;
var Ep = typeof self == "object" && self && self.Object === Object && self;
var Op = Mp || Ep || Function("return this")();
var Ml = Op;
var Np = Ml.Symbol;
var Qn = Np;
var Hf = Object.prototype;
var Ap = Hf.hasOwnProperty;
var Dp = Hf.toString;
var Ni = Qn ? Qn.toStringTag : void 0;
function Ip(o) {
  var a = Ap.call(o, Ni), s = o[Ni];
  try {
    o[Ni] = void 0;
    var h2 = true;
  } catch {
  }
  var g = Dp.call(o);
  return h2 && (a ? o[Ni] = s : delete o[Ni]), g;
}
var Fp = Object.prototype;
var Pp = Fp.toString;
function Bp(o) {
  return Pp.call(o);
}
var Rp = "[object Null]";
var Hp = "[object Undefined]";
var Ju = Qn ? Qn.toStringTag : void 0;
function Wf(o) {
  return o == null ? o === void 0 ? Hp : Rp : Ju && Ju in Object(o) ? Ip(o) : Bp(o);
}
function Wp(o) {
  return o != null && typeof o == "object";
}
var zp = "[object Symbol]";
function El(o) {
  return typeof o == "symbol" || Wp(o) && Wf(o) == zp;
}
function jp(o, a) {
  for (var s = -1, h2 = o == null ? 0 : o.length, g = Array(h2); ++s < h2; )
    g[s] = a(o[s], s, o);
  return g;
}
var $p = Array.isArray;
var Ol = $p;
var Up = 1 / 0;
var Zu = Qn ? Qn.prototype : void 0;
var Qu = Zu ? Zu.toString : void 0;
function zf(o) {
  if (typeof o == "string")
    return o;
  if (Ol(o))
    return jp(o, zf) + "";
  if (El(o))
    return Qu ? Qu.call(o) : "";
  var a = o + "";
  return a == "0" && 1 / o == -Up ? "-0" : a;
}
function jf(o) {
  var a = typeof o;
  return o != null && (a == "object" || a == "function");
}
var Gp = "[object AsyncFunction]";
var Vp = "[object Function]";
var Kp = "[object GeneratorFunction]";
var Yp = "[object Proxy]";
function Xp(o) {
  if (!jf(o))
    return false;
  var a = Wf(o);
  return a == Vp || a == Kp || a == Gp || a == Yp;
}
var qp = Ml["__core-js_shared__"];
var Xa = qp;
var ef = function() {
  var o = /[^.]+$/.exec(Xa && Xa.keys && Xa.keys.IE_PROTO || "");
  return o ? "Symbol(src)_1." + o : "";
}();
function Jp(o) {
  return !!ef && ef in o;
}
var Zp = Function.prototype;
var Qp = Zp.toString;
function ev(o) {
  if (o != null) {
    try {
      return Qp.call(o);
    } catch {
    }
    try {
      return o + "";
    } catch {
    }
  }
  return "";
}
var tv = /[\\^$.*+?()[\]{}|]/g;
var rv = /^\[object .+?Constructor\]$/;
var nv = Function.prototype;
var iv = Object.prototype;
var ov = nv.toString;
var av = iv.hasOwnProperty;
var lv = RegExp(
  "^" + ov.call(av).replace(tv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function sv(o) {
  if (!jf(o) || Jp(o))
    return false;
  var a = Xp(o) ? lv : rv;
  return a.test(ev(o));
}
function uv(o, a) {
  return o == null ? void 0 : o[a];
}
function $f(o, a) {
  var s = uv(o, a);
  return sv(s) ? s : void 0;
}
function fv(o, a) {
  return o === a || o !== o && a !== a;
}
var cv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var hv = /^\w*$/;
function dv(o, a) {
  if (Ol(o))
    return false;
  var s = typeof o;
  return s == "number" || s == "symbol" || s == "boolean" || o == null || El(o) ? true : hv.test(o) || !cv.test(o) || a != null && o in Object(a);
}
var pv = $f(Object, "create");
var Pi = pv;
function vv() {
  this.__data__ = Pi ? Pi(null) : {}, this.size = 0;
}
function gv(o) {
  var a = this.has(o) && delete this.__data__[o];
  return this.size -= a ? 1 : 0, a;
}
var mv = "__lodash_hash_undefined__";
var yv = Object.prototype;
var bv = yv.hasOwnProperty;
function wv(o) {
  var a = this.__data__;
  if (Pi) {
    var s = a[o];
    return s === mv ? void 0 : s;
  }
  return bv.call(a, o) ? a[o] : void 0;
}
var Sv = Object.prototype;
var Cv = Sv.hasOwnProperty;
function kv(o) {
  var a = this.__data__;
  return Pi ? a[o] !== void 0 : Cv.call(a, o);
}
var xv = "__lodash_hash_undefined__";
function Tv(o, a) {
  var s = this.__data__;
  return this.size += this.has(o) ? 0 : 1, s[o] = Pi && a === void 0 ? xv : a, this;
}
function Cn(o) {
  var a = -1, s = o == null ? 0 : o.length;
  for (this.clear(); ++a < s; ) {
    var h2 = o[a];
    this.set(h2[0], h2[1]);
  }
}
Cn.prototype.clear = vv;
Cn.prototype.delete = gv;
Cn.prototype.get = wv;
Cn.prototype.has = kv;
Cn.prototype.set = Tv;
function _v() {
  this.__data__ = [], this.size = 0;
}
function Vo(o, a) {
  for (var s = o.length; s--; )
    if (fv(o[s][0], a))
      return s;
  return -1;
}
var Lv = Array.prototype;
var Mv = Lv.splice;
function Ev(o) {
  var a = this.__data__, s = Vo(a, o);
  if (s < 0)
    return false;
  var h2 = a.length - 1;
  return s == h2 ? a.pop() : Mv.call(a, s, 1), --this.size, true;
}
function Ov(o) {
  var a = this.__data__, s = Vo(a, o);
  return s < 0 ? void 0 : a[s][1];
}
function Nv(o) {
  return Vo(this.__data__, o) > -1;
}
function Av(o, a) {
  var s = this.__data__, h2 = Vo(s, o);
  return h2 < 0 ? (++this.size, s.push([o, a])) : s[h2][1] = a, this;
}
function ei(o) {
  var a = -1, s = o == null ? 0 : o.length;
  for (this.clear(); ++a < s; ) {
    var h2 = o[a];
    this.set(h2[0], h2[1]);
  }
}
ei.prototype.clear = _v;
ei.prototype.delete = Ev;
ei.prototype.get = Ov;
ei.prototype.has = Nv;
ei.prototype.set = Av;
var Dv = $f(Ml, "Map");
var Iv = Dv;
function Fv() {
  this.size = 0, this.__data__ = {
    hash: new Cn(),
    map: new (Iv || ei)(),
    string: new Cn()
  };
}
function Pv(o) {
  var a = typeof o;
  return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? o !== "__proto__" : o === null;
}
function Ko(o, a) {
  var s = o.__data__;
  return Pv(a) ? s[typeof a == "string" ? "string" : "hash"] : s.map;
}
function Bv(o) {
  var a = Ko(this, o).delete(o);
  return this.size -= a ? 1 : 0, a;
}
function Rv(o) {
  return Ko(this, o).get(o);
}
function Hv(o) {
  return Ko(this, o).has(o);
}
function Wv(o, a) {
  var s = Ko(this, o), h2 = s.size;
  return s.set(o, a), this.size += s.size == h2 ? 0 : 1, this;
}
function kn(o) {
  var a = -1, s = o == null ? 0 : o.length;
  for (this.clear(); ++a < s; ) {
    var h2 = o[a];
    this.set(h2[0], h2[1]);
  }
}
kn.prototype.clear = Fv;
kn.prototype.delete = Bv;
kn.prototype.get = Rv;
kn.prototype.has = Hv;
kn.prototype.set = Wv;
var zv = "Expected a function";
function Nl(o, a) {
  if (typeof o != "function" || a != null && typeof a != "function")
    throw new TypeError(zv);
  var s = function() {
    var h2 = arguments, g = a ? a.apply(this, h2) : h2[0], f = s.cache;
    if (f.has(g))
      return f.get(g);
    var p = o.apply(this, h2);
    return s.cache = f.set(g, p) || f, p;
  };
  return s.cache = new (Nl.Cache || kn)(), s;
}
Nl.Cache = kn;
var jv = 500;
function $v(o) {
  var a = Nl(o, function(h2) {
    return s.size === jv && s.clear(), h2;
  }), s = a.cache;
  return a;
}
var Uv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var Gv = /\\(\\)?/g;
var Vv = $v(function(o) {
  var a = [];
  return o.charCodeAt(0) === 46 && a.push(""), o.replace(Uv, function(s, h2, g, f) {
    a.push(g ? f.replace(Gv, "$1") : h2 || s);
  }), a;
});
var Kv = Vv;
function Yv(o) {
  return o == null ? "" : zf(o);
}
function Xv(o, a) {
  return Ol(o) ? o : dv(o, a) ? [o] : Kv(Yv(o));
}
var qv = 1 / 0;
function Jv(o) {
  if (typeof o == "string" || El(o))
    return o;
  var a = o + "";
  return a == "0" && 1 / o == -qv ? "-0" : a;
}
function Zv(o, a) {
  a = Xv(a, o);
  for (var s = 0, h2 = a.length; o != null && s < h2; )
    o = o[Jv(a[s++])];
  return s && s == h2 ? o : void 0;
}
function Qv(o, a, s) {
  var h2 = o == null ? void 0 : Zv(o, a);
  return h2 === void 0 ? s : h2;
}
function eg(o) {
  for (var a = -1, s = o == null ? 0 : o.length, h2 = {}; ++a < s; ) {
    var g = o[a];
    h2[g[0]] = g[1];
  }
  return h2;
}
function tg(o) {
  return o == null;
}
var fl = (o) => o === void 0;
var rg = (o) => typeof o == "boolean";
var Al = (o) => typeof o == "number";
var ng = (o) => Ri(o) ? !Number.isNaN(Number(o)) : false;
var Qr = (o) => _p(o);
var Uf = class extends Error {
  constructor(a) {
    super(a), this.name = "ElementPlusError";
  }
};
function Yo(o, a) {
  throw new Uf(`[${o}] ${a}`);
}
function Dl(o, a) {
  if (true) {
    const s = Ri(o) ? new Uf(`[${o}] ${a}`) : o;
    console.warn(s);
  }
}
var ig = "utils/dom/style";
var Gf = (o = "") => o.split(" ").filter((a) => !!a.trim());
var tf = (o, a) => {
  if (!o || !a)
    return false;
  if (a.includes(" "))
    throw new Error("className should not contain space.");
  return o.classList.contains(a);
};
var og = (o, a) => {
  !o || !a.trim() || o.classList.add(...Gf(a));
};
var ag = (o, a) => {
  !o || !a.trim() || o.classList.remove(...Gf(a));
};
var lg = (o, a) => {
  var s;
  if (!fr || !o || !a)
    return "";
  let h2 = Tp(a);
  h2 === "float" && (h2 = "cssFloat");
  try {
    const g = o.style[h2];
    if (g)
      return g;
    const f = (s = document.defaultView) == null ? void 0 : s.getComputedStyle(o, "");
    return f ? f[h2] : "";
  } catch {
    return o.style[h2];
  }
};
function Wo(o, a = "px") {
  if (!o)
    return "";
  if (Al(o) || ng(o))
    return `${o}${a}`;
  if (Ri(o))
    return o;
  Dl(ig, "binding value must be a string or number");
}
var To;
var sg = (o) => {
  var a;
  if (!fr)
    return 0;
  if (To !== void 0)
    return To;
  const s = document.createElement("div");
  s.className = `${o}-scrollbar__wrap`, s.style.visibility = "hidden", s.style.width = "100px", s.style.position = "absolute", s.style.top = "-9999px", document.body.appendChild(s);
  const h2 = s.offsetWidth;
  s.style.overflow = "scroll";
  const g = document.createElement("div");
  g.style.width = "100%", s.appendChild(g);
  const f = g.offsetWidth;
  return (a = s.parentNode) == null || a.removeChild(s), To = h2 - f, To;
};
var Hi = (o, a) => {
  let s = o.__vccOpts || o;
  for (let [h2, g] of a)
    s[h2] = g;
  return s;
};
var ug = {
  name: "ArrowLeft"
};
var fg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var cg = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
);
var hg = [
  cg
];
function dg(o, a, s, h2, g, f) {
  return openBlock(), createElementBlock("svg", fg, hg);
}
var pg = Hi(ug, [["render", dg], ["__file", "arrow-left.vue"]]);
var vg = {
  name: "ArrowRight"
};
var gg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var mg = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
);
var yg = [
  mg
];
function bg(o, a, s, h2, g, f) {
  return openBlock(), createElementBlock("svg", gg, yg);
}
var wg = Hi(vg, [["render", bg], ["__file", "arrow-right.vue"]]);
var Sg = {
  name: "Close"
};
var Cg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var kg = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
);
var xg = [
  kg
];
function Tg(o, a, s, h2, g, f) {
  return openBlock(), createElementBlock("svg", Cg, xg);
}
var Vf = Hi(Sg, [["render", Tg], ["__file", "close.vue"]]);
var _g = {
  name: "Loading"
};
var Lg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Mg = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
);
var Eg = [
  Mg
];
function Og(o, a, s, h2, g, f) {
  return openBlock(), createElementBlock("svg", Lg, Eg);
}
var Ng = Hi(_g, [["render", Og], ["__file", "loading.vue"]]);
var Ag = {
  name: "Plus"
};
var Dg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Ig = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
);
var Fg = [
  Ig
];
function Pg(o, a, s, h2, g, f) {
  return openBlock(), createElementBlock("svg", Dg, Fg);
}
var Bg = Hi(Ag, [["render", Pg], ["__file", "plus.vue"]]);
var Kf = "__epPropKey";
var Fr = (o) => o;
var Rg = (o) => Bf(o) && !!o[Kf];
var Yf = (o, a) => {
  if (!Bf(o) || Rg(o))
    return o;
  const { values: s, required: h2, default: g, type: f, validator: p } = o, C = {
    type: f,
    required: !!h2,
    validator: s || p ? (w) => {
      let b = false, x = [];
      if (s && (x = Array.from(s), qu(o, "default") && x.push(g), b || (b = x.includes(w))), p && (b || (b = p(w))), !b && x.length > 0) {
        const T = [...new Set(x)].map((_) => JSON.stringify(_)).join(", ");
        warn(`Invalid prop: validation failed${a ? ` for prop "${a}"` : ""}. Expected one of [${T}], got value ${JSON.stringify(w)}.`);
      }
      return b;
    } : void 0,
    [Kf]: true
  };
  return qu(o, "default") && (C.default = g), C;
};
var Pr = (o) => eg(Object.entries(o).map(([a, s]) => [
  a,
  Yf(s, a)
]));
var cl = Fr([
  String,
  Object,
  Function
]);
var Hg = {
  Close: Vf
};
var Xo = (o, a) => {
  if (o.install = (s) => {
    for (const h2 of [o, ...Object.values(a ?? {})])
      s.component(h2.name, h2);
  }, a)
    for (const [s, h2] of Object.entries(a))
      o[s] = h2;
  return o;
};
var Xf = (o) => (o.install = Ii, o);
var Wg = (...o) => (a) => {
  o.forEach((s) => {
    Pf(s) ? s(a) : s.value = a;
  });
};
var qn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
var qo = "update:modelValue";
var zg = ["", "default", "small", "large"];
var Do = ((o) => (o[o.TEXT = 1] = "TEXT", o[o.CLASS = 2] = "CLASS", o[o.STYLE = 4] = "STYLE", o[o.PROPS = 8] = "PROPS", o[o.FULL_PROPS = 16] = "FULL_PROPS", o[o.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", o[o.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", o[o.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", o[o.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", o[o.NEED_PATCH = 512] = "NEED_PATCH", o[o.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", o[o.HOISTED = -1] = "HOISTED", o[o.BAIL = -2] = "BAIL", o))(Do || {});
var Io = (o) => {
  const a = Ao(o) ? o : [o], s = [];
  return a.forEach((h2) => {
    var g;
    Ao(h2) ? s.push(...Io(h2)) : isVNode(h2) && Ao(h2.children) ? s.push(...Io(h2.children)) : (s.push(h2), isVNode(h2) && ((g = h2.component) != null && g.subTree) && s.push(...Io(h2.component.subTree)));
  }), s;
};
var qf = (o) => o;
var zo = ({ from: o, replacement: a, scope: s, version: h2, ref: g, type: f = "API" }, p) => {
  watch(() => unref(p), (m) => {
    m && Dl(s, `[${f}] ${o} is about to be deprecated in version ${h2}, please use ${a} instead.
For more detail, please visit: ${g}
`);
  }, {
    immediate: true
  });
};
var jg = (o, a, s) => {
  let h2 = {
    offsetX: 0,
    offsetY: 0
  };
  const g = (m) => {
    const C = m.clientX, w = m.clientY, { offsetX: b, offsetY: x } = h2, T = o.value.getBoundingClientRect(), _ = T.left, E = T.top, A = T.width, B = T.height, W = document.documentElement.clientWidth, $ = document.documentElement.clientHeight, X = -_ + b, K = -E + x, Z = W - _ - A + b, le = $ - E - B + x, fe = (Q) => {
      const ee = Math.min(Math.max(b + Q.clientX - C, X), Z), ae = Math.min(Math.max(x + Q.clientY - w, K), le);
      h2 = {
        offsetX: ee,
        offsetY: ae
      }, o.value.style.transform = `translate(${Wo(ee)}, ${Wo(ae)})`;
    }, Y = () => {
      document.removeEventListener("mousemove", fe), document.removeEventListener("mouseup", Y);
    };
    document.addEventListener("mousemove", fe), document.addEventListener("mouseup", Y);
  }, f = () => {
    a.value && o.value && a.value.addEventListener("mousedown", g);
  }, p = () => {
    a.value && o.value && a.value.removeEventListener("mousedown", g);
  };
  onMounted(() => {
    watchEffect(() => {
      s.value ? f() : p();
    });
  }), onBeforeUnmount(() => {
    p();
  });
};
var $g = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
var Ug = (o) => (a, s) => Gg(a, s, unref(o));
var Gg = (o, a, s) => Qv(s, o, o).replace(/\{(\w+)\}/g, (h2, g) => {
  var f;
  return `${(f = a == null ? void 0 : a[g]) != null ? f : `{${g}}`}`;
});
var Vg = (o) => {
  const a = computed(() => unref(o).name), s = isRef(o) ? o : ref(o);
  return {
    lang: a,
    locale: s,
    t: Ug(o)
  };
};
var Kg = Symbol("localeContextKey");
var Yg = (o) => {
  const a = o || inject(Kg, ref());
  return Vg(computed(() => a.value || $g));
};
var Xg;
function qg(o, a = Xg) {
  a && a.active && a.effects.push(o);
}
var rf = (o) => {
  const a = new Set(o);
  return a.w = 0, a.n = 0, a;
};
var Jf = (o) => (o.w & nn) > 0;
var Zf = (o) => (o.n & nn) > 0;
var Jg = ({ deps: o }) => {
  if (o.length)
    for (let a = 0; a < o.length; a++)
      o[a].w |= nn;
};
var Zg = (o) => {
  const { deps: a } = o;
  if (a.length) {
    let s = 0;
    for (let h2 = 0; h2 < a.length; h2++) {
      const g = a[h2];
      Jf(g) && !Zf(g) ? g.delete(o) : a[s++] = g, g.w &= ~nn, g.n &= ~nn;
    }
    a.length = s;
  }
};
var Ai = 0;
var nn = 1;
var hl = 30;
var Xt;
Symbol(true ? "iterate" : "");
Symbol(true ? "Map key iterate" : "");
var Qg = class {
  constructor(a, s = null, h2) {
    this.fn = a, this.scheduler = s, this.active = true, this.deps = [], this.parent = void 0, qg(this, h2);
  }
  run() {
    if (!this.active)
      return this.fn();
    let a = Xt, s = Fo;
    for (; a; ) {
      if (a === this)
        return;
      a = a.parent;
    }
    try {
      return this.parent = Xt, Xt = this, Fo = true, nn = 1 << ++Ai, Ai <= hl ? Jg(this) : nf(this), this.fn();
    } finally {
      Ai <= hl && Zg(this), nn = 1 << --Ai, Xt = this.parent, Fo = s, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Xt === this ? this.deferStop = true : this.active && (nf(this), this.onStop && this.onStop(), this.active = false);
  }
};
function nf(o) {
  const { deps: a } = o;
  if (a.length) {
    for (let s = 0; s < a.length; s++)
      a[s].delete(o);
    a.length = 0;
  }
}
var Fo = true;
function of(o, a) {
  let s = false;
  Ai <= hl ? Zf(o) || (o.n |= nn, s = !Jf(o)) : s = !o.has(Xt), s && (o.add(Xt), Xt.deps.push(o), Xt.onTrack && Xt.onTrack(
    Ff(
      {
        effect: Xt
      },
      a
    )
  ));
}
function af(o, a) {
  const s = Ao(o) ? o : [...o];
  for (const h2 of s)
    h2.computed && lf(h2, a);
  for (const h2 of s)
    h2.computed || lf(h2, a);
}
function lf(o, a) {
  (o !== Xt || o.allowRecurse) && (o.onTrigger && o.onTrigger(Ff({ effect: o }, a)), o.scheduler ? o.scheduler() : o.run());
}
new Set(
  Object.getOwnPropertyNames(Symbol).filter((o) => o !== "arguments" && o !== "caller").map((o) => Symbol[o]).filter(kp)
);
function Jo(o) {
  const a = o && o.__v_raw;
  return a ? Jo(a) : o;
}
function e0(o) {
  Fo && Xt && (o = Jo(o), true ? of(o.dep || (o.dep = rf()), {
    target: o,
    type: "get",
    key: "value"
  }) : of(o.dep || (o.dep = rf())));
}
function t0(o, a) {
  o = Jo(o);
  const s = o.dep;
  s && (true ? af(s, {
    target: o,
    type: "set",
    key: "value",
    newValue: a
  }) : af(s));
}
var r0 = class {
  constructor(a, s, h2, g) {
    this._setter = s, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this._dirty = true, this.effect = new Qg(a, () => {
      this._dirty || (this._dirty = true, t0(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !g, this.__v_isReadonly = h2;
  }
  get value() {
    const a = Jo(this);
    return e0(a), (a._dirty || !a._cacheable) && (a._dirty = false, a._value = a.effect.run()), a._value;
  }
  set value(a) {
    this._setter(a);
  }
};
function n0(o, a, s = false) {
  let h2, g;
  const f = Pf(o);
  f ? (h2 = o, g = true ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : Ii) : (h2 = o.get, g = o.set);
  const p = new r0(h2, g, f || !g, s);
  return a && !s && (p.effect.onTrack = a.onTrack, p.effect.onTrigger = a.onTrigger), p;
}
var Po = "el";
var i0 = "is-";
var yn = (o, a, s, h2, g) => {
  let f = `${o}-${a}`;
  return s && (f += `-${s}`), h2 && (f += `__${h2}`), g && (f += `--${g}`), f;
};
var o0 = Symbol("namespaceContextKey");
var Qf = (o) => {
  const a = o || (getCurrentInstance() ? inject(o0, ref(Po)) : ref(Po));
  return computed(() => unref(a) || Po);
};
var hr = (o, a) => {
  const s = Qf(a);
  return {
    namespace: s,
    b: (A = "") => yn(s.value, o, A, "", ""),
    e: (A) => A ? yn(s.value, o, "", A, "") : "",
    m: (A) => A ? yn(s.value, o, "", "", A) : "",
    be: (A, B) => A && B ? yn(s.value, o, A, B, "") : "",
    em: (A, B) => A && B ? yn(s.value, o, "", A, B) : "",
    bm: (A, B) => A && B ? yn(s.value, o, A, "", B) : "",
    bem: (A, B, W) => A && B && W ? yn(s.value, o, A, B, W) : "",
    is: (A, ...B) => {
      const W = B.length >= 1 ? B[0] : true;
      return A && W ? `${i0}${A}` : "";
    },
    cssVar: (A) => {
      const B = {};
      for (const W in A)
        A[W] && (B[`--${s.value}-${W}`] = A[W]);
      return B;
    },
    cssVarName: (A) => `--${s.value}-${A}`,
    cssVarBlock: (A) => {
      const B = {};
      for (const W in A)
        A[W] && (B[`--${s.value}-${o}-${W}`] = A[W]);
      return B;
    },
    cssVarBlockName: (A) => `--${s.value}-${o}-${A}`
  };
};
var a0 = (o, a = {}) => {
  isRef(o) || Yo("[useLockscreen]", "You need to pass a ref param to this function");
  const s = a.ns || hr("popup"), h2 = n0(() => s.bm("parent", "hidden"));
  if (!fr || tf(document.body, h2.value))
    return;
  let g = 0, f = false, p = "0";
  const m = () => {
    setTimeout(() => {
      ag(document == null ? void 0 : document.body, h2.value), f && document && (document.body.style.width = p);
    }, 200);
  };
  watch(o, (C) => {
    if (!C) {
      m();
      return;
    }
    f = !tf(document.body, h2.value), f && (p = document.body.style.width), g = sg(s.namespace.value);
    const w = document.documentElement.clientHeight < document.body.scrollHeight, b = lg(document.body, "overflowY");
    g > 0 && (w || b === "scroll") && f && (document.body.style.width = `calc(100% - ${g}px)`), og(document.body, h2.value);
  }), onScopeDispose(() => m());
};
var ec = (o) => {
  const a = getCurrentInstance();
  return computed(() => {
    var s, h2;
    return (h2 = (s = a == null ? void 0 : a.proxy) == null ? void 0 : s.$props) == null ? void 0 : h2[o];
  });
};
var tc = (o) => {
  if (!o)
    return { onClick: Ii, onMousedown: Ii, onMouseup: Ii };
  let a = false, s = false;
  return { onClick: (p) => {
    a && s && o(p), a = s = false;
  }, onMousedown: (p) => {
    a = p.target === p.currentTarget;
  }, onMouseup: (p) => {
    s = p.target === p.currentTarget;
  } };
};
var dl = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
var l0 = Symbol("elIdInjection");
var s0 = () => getCurrentInstance() ? inject(l0, dl) : dl;
var sf = (o) => {
  const a = s0();
  !fr && a === dl && Dl("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const s = Qf();
  return computed(() => unref(o) || `${s.value}-id-${a.prefix}-${a.current++}`);
};
var Vn = [];
var uf = (o) => {
  const a = o;
  a.key === qn.esc && Vn.forEach((s) => s(a));
};
var u0 = (o) => {
  onMounted(() => {
    Vn.length === 0 && document.addEventListener("keydown", uf), fr && Vn.push(o);
  }), onBeforeUnmount(() => {
    Vn = Vn.filter((a) => a !== o), Vn.length === 0 && fr && document.removeEventListener("keydown", uf);
  });
};
var ff = ref(0);
var f0 = 2e3;
var c0 = Symbol("zIndexContextKey");
var h0 = (o) => {
  const a = o || (getCurrentInstance() ? inject(c0, void 0) : void 0), s = computed(() => {
    const f = unref(a);
    return Al(f) ? f : f0;
  }), h2 = computed(() => s.value + ff.value);
  return {
    initialZIndex: s,
    currentZIndex: h2,
    nextZIndex: () => (ff.value++, h2.value)
  };
};
var d0 = (o, a, s) => Io(o.subTree).filter((f) => {
  var p;
  return isVNode(f) && ((p = f.type) == null ? void 0 : p.name) === a && !!f.component;
}).map((f) => f.component.uid).map((f) => s[f]).filter((f) => !!f);
var p0 = (o, a) => {
  const s = {}, h2 = shallowRef([]);
  return {
    children: h2,
    addChild: (p) => {
      s[p.uid] = p, h2.value = d0(o, a, s);
    },
    removeChild: (p) => {
      delete s[p], h2.value = h2.value.filter((m) => m.uid !== p);
    }
  };
};
var v0 = Yf({
  type: String,
  values: zg,
  required: false
});
var g0 = Symbol("size");
var m0 = () => {
  const o = inject(g0, {});
  return computed(() => unref(o.size) || "");
};
var y0 = Symbol();
var cf = ref();
function rc(o, a = void 0) {
  const s = getCurrentInstance() ? inject(y0, cf) : cf;
  return o ? computed(() => {
    var h2, g;
    return (g = (h2 = s.value) == null ? void 0 : h2[o]) != null ? g : a;
  }) : s;
}
var on = (o, a) => {
  const s = o.__vccOpts || o;
  for (const [h2, g] of a)
    s[h2] = g;
  return s;
};
var b0 = Pr({
  size: {
    type: Fr([Number, String])
  },
  color: {
    type: String
  }
});
var w0 = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
var S0 = defineComponent({
  ...w0,
  props: b0,
  setup(o) {
    const a = o, s = hr("icon"), h2 = computed(() => {
      const { size: g, color: f } = a;
      return !g && !f ? {} : {
        fontSize: fl(g) ? void 0 : Wo(g),
        "--color": f
      };
    });
    return (g, f) => (openBlock(), createElementBlock("i", mergeProps({
      class: unref(s).b(),
      style: unref(h2)
    }, g.$attrs), [
      renderSlot(g.$slots, "default")
    ], 16));
  }
});
var C0 = on(S0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
var Sn = Xo(C0);
var Il = Symbol("formContextKey");
var nc = Symbol("formItemContextKey");
var k0 = (o, a = {}) => {
  const s = ref(void 0), h2 = a.prop ? s : ec("size"), g = a.global ? s : m0(), f = a.form ? { size: void 0 } : inject(Il, void 0), p = a.formItem ? { size: void 0 } : inject(nc, void 0);
  return computed(() => h2.value || unref(o) || (p == null ? void 0 : p.size) || (f == null ? void 0 : f.size) || g.value || "");
};
var ic = (o) => {
  const a = ec("disabled"), s = inject(Il, void 0);
  return computed(() => a.value || unref(o) || (s == null ? void 0 : s.disabled) || false);
};
var x0 = () => {
  const o = inject(Il, void 0), a = inject(nc, void 0);
  return {
    form: o,
    formItem: a
  };
};
var qa = "focus-trap.focus-after-trapped";
var Ja = "focus-trap.focus-after-released";
var T0 = "focus-trap.focusout-prevented";
var hf = {
  cancelable: true,
  bubbles: false
};
var _0 = {
  cancelable: true,
  bubbles: false
};
var df = "focusAfterTrapped";
var pf = "focusAfterReleased";
var oc = Symbol("elFocusTrap");
var Fl = ref();
var Zo = ref(0);
var Pl = ref(0);
var _o = 0;
var ac = (o) => {
  const a = [], s = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (h2) => {
      const g = h2.tagName === "INPUT" && h2.type === "hidden";
      return h2.disabled || h2.hidden || g ? NodeFilter.FILTER_SKIP : h2.tabIndex >= 0 || h2 === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; s.nextNode(); )
    a.push(s.currentNode);
  return a;
};
var vf = (o, a) => {
  for (const s of o)
    if (!L0(s, a))
      return s;
};
var L0 = (o, a) => {
  if (false)
    return false;
  if (getComputedStyle(o).visibility === "hidden")
    return true;
  for (; o; ) {
    if (a && o === a)
      return false;
    if (getComputedStyle(o).display === "none")
      return true;
    o = o.parentElement;
  }
  return false;
};
var M0 = (o) => {
  const a = ac(o), s = vf(a, o), h2 = vf(a.reverse(), o);
  return [s, h2];
};
var E0 = (o) => o instanceof HTMLInputElement && "select" in o;
var Zr = (o, a) => {
  if (o && o.focus) {
    const s = document.activeElement;
    o.focus({ preventScroll: true }), Pl.value = window.performance.now(), o !== s && E0(o) && a && o.select();
  }
};
function gf(o, a) {
  const s = [...o], h2 = o.indexOf(a);
  return h2 !== -1 && s.splice(h2, 1), s;
}
var O0 = () => {
  let o = [];
  return {
    push: (h2) => {
      const g = o[0];
      g && h2 !== g && g.pause(), o = gf(o, h2), o.unshift(h2);
    },
    remove: (h2) => {
      var g, f;
      o = gf(o, h2), (f = (g = o[0]) == null ? void 0 : g.resume) == null || f.call(g);
    }
  };
};
var N0 = (o, a = false) => {
  const s = document.activeElement;
  for (const h2 of o)
    if (Zr(h2, a), document.activeElement !== s)
      return;
};
var mf = O0();
var A0 = () => Zo.value > Pl.value;
var Lo = () => {
  Fl.value = "pointer", Zo.value = window.performance.now();
};
var yf = () => {
  Fl.value = "keyboard", Zo.value = window.performance.now();
};
var D0 = () => (onMounted(() => {
  _o === 0 && (document.addEventListener("mousedown", Lo), document.addEventListener("touchstart", Lo), document.addEventListener("keydown", yf)), _o++;
}), onBeforeUnmount(() => {
  _o--, _o <= 0 && (document.removeEventListener("mousedown", Lo), document.removeEventListener("touchstart", Lo), document.removeEventListener("keydown", yf));
}), {
  focusReason: Fl,
  lastUserFocusTimestamp: Zo,
  lastAutomatedFocusTimestamp: Pl
});
var Mo = (o) => new CustomEvent(T0, {
  ..._0,
  detail: o
});
var I0 = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    df,
    pf,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(o, { emit: a }) {
    const s = ref();
    let h2, g;
    const { focusReason: f } = D0();
    u0((E) => {
      o.trapped && !p.paused && a("release-requested", E);
    });
    const p = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }, m = (E) => {
      if (!o.loop && !o.trapped || p.paused)
        return;
      const { key: A, altKey: B, ctrlKey: W, metaKey: $, currentTarget: X, shiftKey: K } = E, { loop: Z } = o, le = A === qn.tab && !B && !W && !$, fe = document.activeElement;
      if (le && fe) {
        const Y = X, [Q, ee] = M0(Y);
        if (Q && ee) {
          if (!K && fe === ee) {
            const ce = Mo({
              focusReason: f.value
            });
            a("focusout-prevented", ce), ce.defaultPrevented || (E.preventDefault(), Z && Zr(Q, true));
          } else if (K && [Q, Y].includes(fe)) {
            const ce = Mo({
              focusReason: f.value
            });
            a("focusout-prevented", ce), ce.defaultPrevented || (E.preventDefault(), Z && Zr(ee, true));
          }
        } else if (fe === Y) {
          const ce = Mo({
            focusReason: f.value
          });
          a("focusout-prevented", ce), ce.defaultPrevented || E.preventDefault();
        }
      }
    };
    provide(oc, {
      focusTrapRef: s,
      onKeydown: m
    }), watch(() => o.focusTrapEl, (E) => {
      E && (s.value = E);
    }, { immediate: true }), watch([s], ([E], [A]) => {
      E && (E.addEventListener("keydown", m), E.addEventListener("focusin", b), E.addEventListener("focusout", x)), A && (A.removeEventListener("keydown", m), A.removeEventListener("focusin", b), A.removeEventListener("focusout", x));
    });
    const C = (E) => {
      a(df, E);
    }, w = (E) => a(pf, E), b = (E) => {
      const A = unref(s);
      if (!A)
        return;
      const B = E.target, W = E.relatedTarget, $ = B && A.contains(B);
      o.trapped || W && A.contains(W) || (h2 = W), $ && a("focusin", E), !p.paused && o.trapped && ($ ? g = B : Zr(g, true));
    }, x = (E) => {
      const A = unref(s);
      if (!(p.paused || !A))
        if (o.trapped) {
          const B = E.relatedTarget;
          !tg(B) && !A.contains(B) && setTimeout(() => {
            if (!p.paused && o.trapped) {
              const W = Mo({
                focusReason: f.value
              });
              a("focusout-prevented", W), W.defaultPrevented || Zr(g, true);
            }
          }, 0);
        } else {
          const B = E.target;
          B && A.contains(B) || a("focusout", E);
        }
    };
    async function T() {
      await nextTick();
      const E = unref(s);
      if (E) {
        mf.push(p);
        const A = E.contains(document.activeElement) ? h2 : document.activeElement;
        if (h2 = A, !E.contains(A)) {
          const W = new Event(qa, hf);
          E.addEventListener(qa, C), E.dispatchEvent(W), W.defaultPrevented || nextTick(() => {
            let $ = o.focusStartEl;
            Ri($) || (Zr($), document.activeElement !== $ && ($ = "first")), $ === "first" && N0(ac(E), true), (document.activeElement === A || $ === "container") && Zr(E);
          });
        }
      }
    }
    function _() {
      const E = unref(s);
      if (E) {
        E.removeEventListener(qa, C);
        const A = new CustomEvent(Ja, {
          ...hf,
          detail: {
            focusReason: f.value
          }
        });
        E.addEventListener(Ja, w), E.dispatchEvent(A), !A.defaultPrevented && (f.value == "keyboard" || !A0() || E.contains(document.activeElement)) && Zr(h2 ?? document.body), E.removeEventListener(Ja, w), mf.remove(p);
      }
    }
    return onMounted(() => {
      o.trapped && T(), watch(() => o.trapped, (E) => {
        E ? T() : _();
      });
    }), onBeforeUnmount(() => {
      o.trapped && _();
    }), {
      onKeydown: m
    };
  }
});
function F0(o, a, s, h2, g, f) {
  return renderSlot(o.$slots, "default", { handleKeydown: o.onKeydown });
}
var P0 = on(I0, [["render", F0], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
var lc = Symbol("buttonGroupContextKey");
var B0 = (o, a) => {
  zo({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, computed(() => o.type === "text"));
  const s = inject(lc, void 0), h2 = rc("button"), { form: g } = x0(), f = k0(computed(() => s == null ? void 0 : s.size)), p = ic(), m = ref(), C = useSlots(), w = computed(() => o.type || (s == null ? void 0 : s.type) || ""), b = computed(() => {
    var E, A, B;
    return (B = (A = o.autoInsertSpace) != null ? A : (E = h2.value) == null ? void 0 : E.autoInsertSpace) != null ? B : false;
  }), x = computed(() => o.tag === "button" ? {
    ariaDisabled: p.value || o.loading,
    disabled: p.value || o.loading,
    autofocus: o.autofocus,
    type: o.nativeType
  } : {}), T = computed(() => {
    var E;
    const A = (E = C.default) == null ? void 0 : E.call(C);
    if (b.value && (A == null ? void 0 : A.length) === 1) {
      const B = A[0];
      if ((B == null ? void 0 : B.type) === Text) {
        const W = B.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(W.trim());
      }
    }
    return false;
  });
  return {
    _disabled: p,
    _size: f,
    _type: w,
    _ref: m,
    _props: x,
    shouldAddSpace: T,
    handleClick: (E) => {
      o.nativeType === "reset" && (g == null || g.resetFields()), a("click", E);
    }
  };
};
var R0 = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
var H0 = ["button", "submit", "reset"];
var pl = Pr({
  size: v0,
  disabled: Boolean,
  type: {
    type: String,
    values: R0,
    default: ""
  },
  icon: {
    type: cl
  },
  nativeType: {
    type: String,
    values: H0,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: cl,
    default: () => Ng
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: Fr([String, Object]),
    default: "button"
  }
});
var W0 = {
  click: (o) => o instanceof MouseEvent
};
function _t(o, a) {
  z0(o) && (o = "100%");
  var s = j0(o);
  return o = a === 360 ? o : Math.min(a, Math.max(0, parseFloat(o))), s && (o = parseInt(String(o * a), 10) / 100), Math.abs(o - a) < 1e-6 ? 1 : (a === 360 ? o = (o < 0 ? o % a + a : o % a) / parseFloat(String(a)) : o = o % a / parseFloat(String(a)), o);
}
function Eo(o) {
  return Math.min(1, Math.max(0, o));
}
function z0(o) {
  return typeof o == "string" && o.indexOf(".") !== -1 && parseFloat(o) === 1;
}
function j0(o) {
  return typeof o == "string" && o.indexOf("%") !== -1;
}
function sc(o) {
  return o = parseFloat(o), (isNaN(o) || o < 0 || o > 1) && (o = 1), o;
}
function Oo(o) {
  return o <= 1 ? "".concat(Number(o) * 100, "%") : o;
}
function bn(o) {
  return o.length === 1 ? "0" + o : String(o);
}
function $0(o, a, s) {
  return {
    r: _t(o, 255) * 255,
    g: _t(a, 255) * 255,
    b: _t(s, 255) * 255
  };
}
function bf(o, a, s) {
  o = _t(o, 255), a = _t(a, 255), s = _t(s, 255);
  var h2 = Math.max(o, a, s), g = Math.min(o, a, s), f = 0, p = 0, m = (h2 + g) / 2;
  if (h2 === g)
    p = 0, f = 0;
  else {
    var C = h2 - g;
    switch (p = m > 0.5 ? C / (2 - h2 - g) : C / (h2 + g), h2) {
      case o:
        f = (a - s) / C + (a < s ? 6 : 0);
        break;
      case a:
        f = (s - o) / C + 2;
        break;
      case s:
        f = (o - a) / C + 4;
        break;
    }
    f /= 6;
  }
  return { h: f, s: p, l: m };
}
function Za(o, a, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? o + (a - o) * (6 * s) : s < 1 / 2 ? a : s < 2 / 3 ? o + (a - o) * (2 / 3 - s) * 6 : o;
}
function U0(o, a, s) {
  var h2, g, f;
  if (o = _t(o, 360), a = _t(a, 100), s = _t(s, 100), a === 0)
    g = s, f = s, h2 = s;
  else {
    var p = s < 0.5 ? s * (1 + a) : s + a - s * a, m = 2 * s - p;
    h2 = Za(m, p, o + 1 / 3), g = Za(m, p, o), f = Za(m, p, o - 1 / 3);
  }
  return { r: h2 * 255, g: g * 255, b: f * 255 };
}
function wf(o, a, s) {
  o = _t(o, 255), a = _t(a, 255), s = _t(s, 255);
  var h2 = Math.max(o, a, s), g = Math.min(o, a, s), f = 0, p = h2, m = h2 - g, C = h2 === 0 ? 0 : m / h2;
  if (h2 === g)
    f = 0;
  else {
    switch (h2) {
      case o:
        f = (a - s) / m + (a < s ? 6 : 0);
        break;
      case a:
        f = (s - o) / m + 2;
        break;
      case s:
        f = (o - a) / m + 4;
        break;
    }
    f /= 6;
  }
  return { h: f, s: C, v: p };
}
function G0(o, a, s) {
  o = _t(o, 360) * 6, a = _t(a, 100), s = _t(s, 100);
  var h2 = Math.floor(o), g = o - h2, f = s * (1 - a), p = s * (1 - g * a), m = s * (1 - (1 - g) * a), C = h2 % 6, w = [s, p, f, f, m, s][C], b = [m, s, s, p, f, f][C], x = [f, f, m, s, s, p][C];
  return { r: w * 255, g: b * 255, b: x * 255 };
}
function Sf(o, a, s, h2) {
  var g = [
    bn(Math.round(o).toString(16)),
    bn(Math.round(a).toString(16)),
    bn(Math.round(s).toString(16))
  ];
  return h2 && g[0].startsWith(g[0].charAt(1)) && g[1].startsWith(g[1].charAt(1)) && g[2].startsWith(g[2].charAt(1)) ? g[0].charAt(0) + g[1].charAt(0) + g[2].charAt(0) : g.join("");
}
function V0(o, a, s, h2, g) {
  var f = [
    bn(Math.round(o).toString(16)),
    bn(Math.round(a).toString(16)),
    bn(Math.round(s).toString(16)),
    bn(K0(h2))
  ];
  return g && f[0].startsWith(f[0].charAt(1)) && f[1].startsWith(f[1].charAt(1)) && f[2].startsWith(f[2].charAt(1)) && f[3].startsWith(f[3].charAt(1)) ? f[0].charAt(0) + f[1].charAt(0) + f[2].charAt(0) + f[3].charAt(0) : f.join("");
}
function K0(o) {
  return Math.round(parseFloat(o) * 255).toString(16);
}
function Cf(o) {
  return Yt(o) / 255;
}
function Yt(o) {
  return parseInt(o, 16);
}
function Y0(o) {
  return {
    r: o >> 16,
    g: (o & 65280) >> 8,
    b: o & 255
  };
}
var vl = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function X0(o) {
  var a = { r: 0, g: 0, b: 0 }, s = 1, h2 = null, g = null, f = null, p = false, m = false;
  return typeof o == "string" && (o = Z0(o)), typeof o == "object" && (Dr(o.r) && Dr(o.g) && Dr(o.b) ? (a = $0(o.r, o.g, o.b), p = true, m = String(o.r).substr(-1) === "%" ? "prgb" : "rgb") : Dr(o.h) && Dr(o.s) && Dr(o.v) ? (h2 = Oo(o.s), g = Oo(o.v), a = G0(o.h, h2, g), p = true, m = "hsv") : Dr(o.h) && Dr(o.s) && Dr(o.l) && (h2 = Oo(o.s), f = Oo(o.l), a = U0(o.h, h2, f), p = true, m = "hsl"), Object.prototype.hasOwnProperty.call(o, "a") && (s = o.a)), s = sc(s), {
    ok: p,
    format: o.format || m,
    r: Math.min(255, Math.max(a.r, 0)),
    g: Math.min(255, Math.max(a.g, 0)),
    b: Math.min(255, Math.max(a.b, 0)),
    a: s
  };
}
var q0 = "[-\\+]?\\d+%?";
var J0 = "[-\\+]?\\d*\\.\\d+%?";
var en = "(?:".concat(J0, ")|(?:").concat(q0, ")");
var Qa = "[\\s|\\(]+(".concat(en, ")[,|\\s]+(").concat(en, ")[,|\\s]+(").concat(en, ")\\s*\\)?");
var el = "[\\s|\\(]+(".concat(en, ")[,|\\s]+(").concat(en, ")[,|\\s]+(").concat(en, ")[,|\\s]+(").concat(en, ")\\s*\\)?");
var ur = {
  CSS_UNIT: new RegExp(en),
  rgb: new RegExp("rgb" + Qa),
  rgba: new RegExp("rgba" + el),
  hsl: new RegExp("hsl" + Qa),
  hsla: new RegExp("hsla" + el),
  hsv: new RegExp("hsv" + Qa),
  hsva: new RegExp("hsva" + el),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Z0(o) {
  if (o = o.trim().toLowerCase(), o.length === 0)
    return false;
  var a = false;
  if (vl[o])
    o = vl[o], a = true;
  else if (o === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var s = ur.rgb.exec(o);
  return s ? { r: s[1], g: s[2], b: s[3] } : (s = ur.rgba.exec(o), s ? { r: s[1], g: s[2], b: s[3], a: s[4] } : (s = ur.hsl.exec(o), s ? { h: s[1], s: s[2], l: s[3] } : (s = ur.hsla.exec(o), s ? { h: s[1], s: s[2], l: s[3], a: s[4] } : (s = ur.hsv.exec(o), s ? { h: s[1], s: s[2], v: s[3] } : (s = ur.hsva.exec(o), s ? { h: s[1], s: s[2], v: s[3], a: s[4] } : (s = ur.hex8.exec(o), s ? {
    r: Yt(s[1]),
    g: Yt(s[2]),
    b: Yt(s[3]),
    a: Cf(s[4]),
    format: a ? "name" : "hex8"
  } : (s = ur.hex6.exec(o), s ? {
    r: Yt(s[1]),
    g: Yt(s[2]),
    b: Yt(s[3]),
    format: a ? "name" : "hex"
  } : (s = ur.hex4.exec(o), s ? {
    r: Yt(s[1] + s[1]),
    g: Yt(s[2] + s[2]),
    b: Yt(s[3] + s[3]),
    a: Cf(s[4] + s[4]),
    format: a ? "name" : "hex8"
  } : (s = ur.hex3.exec(o), s ? {
    r: Yt(s[1] + s[1]),
    g: Yt(s[2] + s[2]),
    b: Yt(s[3] + s[3]),
    format: a ? "name" : "hex"
  } : false)))))))));
}
function Dr(o) {
  return !!ur.CSS_UNIT.exec(String(o));
}
var Q0 = (
  /** @class */
  function() {
    function o(a, s) {
      a === void 0 && (a = ""), s === void 0 && (s = {});
      var h2;
      if (a instanceof o)
        return a;
      typeof a == "number" && (a = Y0(a)), this.originalInput = a;
      var g = X0(a);
      this.originalInput = a, this.r = g.r, this.g = g.g, this.b = g.b, this.a = g.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (h2 = s.format) !== null && h2 !== void 0 ? h2 : g.format, this.gradientType = s.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = g.ok;
    }
    return o.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, o.prototype.isLight = function() {
      return !this.isDark();
    }, o.prototype.getBrightness = function() {
      var a = this.toRgb();
      return (a.r * 299 + a.g * 587 + a.b * 114) / 1e3;
    }, o.prototype.getLuminance = function() {
      var a = this.toRgb(), s, h2, g, f = a.r / 255, p = a.g / 255, m = a.b / 255;
      return f <= 0.03928 ? s = f / 12.92 : s = Math.pow((f + 0.055) / 1.055, 2.4), p <= 0.03928 ? h2 = p / 12.92 : h2 = Math.pow((p + 0.055) / 1.055, 2.4), m <= 0.03928 ? g = m / 12.92 : g = Math.pow((m + 0.055) / 1.055, 2.4), 0.2126 * s + 0.7152 * h2 + 0.0722 * g;
    }, o.prototype.getAlpha = function() {
      return this.a;
    }, o.prototype.setAlpha = function(a) {
      return this.a = sc(a), this.roundA = Math.round(100 * this.a) / 100, this;
    }, o.prototype.isMonochrome = function() {
      var a = this.toHsl().s;
      return a === 0;
    }, o.prototype.toHsv = function() {
      var a = wf(this.r, this.g, this.b);
      return { h: a.h * 360, s: a.s, v: a.v, a: this.a };
    }, o.prototype.toHsvString = function() {
      var a = wf(this.r, this.g, this.b), s = Math.round(a.h * 360), h2 = Math.round(a.s * 100), g = Math.round(a.v * 100);
      return this.a === 1 ? "hsv(".concat(s, ", ").concat(h2, "%, ").concat(g, "%)") : "hsva(".concat(s, ", ").concat(h2, "%, ").concat(g, "%, ").concat(this.roundA, ")");
    }, o.prototype.toHsl = function() {
      var a = bf(this.r, this.g, this.b);
      return { h: a.h * 360, s: a.s, l: a.l, a: this.a };
    }, o.prototype.toHslString = function() {
      var a = bf(this.r, this.g, this.b), s = Math.round(a.h * 360), h2 = Math.round(a.s * 100), g = Math.round(a.l * 100);
      return this.a === 1 ? "hsl(".concat(s, ", ").concat(h2, "%, ").concat(g, "%)") : "hsla(".concat(s, ", ").concat(h2, "%, ").concat(g, "%, ").concat(this.roundA, ")");
    }, o.prototype.toHex = function(a) {
      return a === void 0 && (a = false), Sf(this.r, this.g, this.b, a);
    }, o.prototype.toHexString = function(a) {
      return a === void 0 && (a = false), "#" + this.toHex(a);
    }, o.prototype.toHex8 = function(a) {
      return a === void 0 && (a = false), V0(this.r, this.g, this.b, this.a, a);
    }, o.prototype.toHex8String = function(a) {
      return a === void 0 && (a = false), "#" + this.toHex8(a);
    }, o.prototype.toHexShortString = function(a) {
      return a === void 0 && (a = false), this.a === 1 ? this.toHexString(a) : this.toHex8String(a);
    }, o.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, o.prototype.toRgbString = function() {
      var a = Math.round(this.r), s = Math.round(this.g), h2 = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(a, ", ").concat(s, ", ").concat(h2, ")") : "rgba(".concat(a, ", ").concat(s, ", ").concat(h2, ", ").concat(this.roundA, ")");
    }, o.prototype.toPercentageRgb = function() {
      var a = function(s) {
        return "".concat(Math.round(_t(s, 255) * 100), "%");
      };
      return {
        r: a(this.r),
        g: a(this.g),
        b: a(this.b),
        a: this.a
      };
    }, o.prototype.toPercentageRgbString = function() {
      var a = function(s) {
        return Math.round(_t(s, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(a(this.r), "%, ").concat(a(this.g), "%, ").concat(a(this.b), "%)") : "rgba(".concat(a(this.r), "%, ").concat(a(this.g), "%, ").concat(a(this.b), "%, ").concat(this.roundA, ")");
    }, o.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return false;
      for (var a = "#" + Sf(this.r, this.g, this.b, false), s = 0, h2 = Object.entries(vl); s < h2.length; s++) {
        var g = h2[s], f = g[0], p = g[1];
        if (a === p)
          return f;
      }
      return false;
    }, o.prototype.toString = function(a) {
      var s = !!a;
      a = a ?? this.format;
      var h2 = false, g = this.a < 1 && this.a >= 0, f = !s && g && (a.startsWith("hex") || a === "name");
      return f ? a === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (a === "rgb" && (h2 = this.toRgbString()), a === "prgb" && (h2 = this.toPercentageRgbString()), (a === "hex" || a === "hex6") && (h2 = this.toHexString()), a === "hex3" && (h2 = this.toHexString(true)), a === "hex4" && (h2 = this.toHex8String(true)), a === "hex8" && (h2 = this.toHex8String()), a === "name" && (h2 = this.toName()), a === "hsl" && (h2 = this.toHslString()), a === "hsv" && (h2 = this.toHsvString()), h2 || this.toHexString());
    }, o.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, o.prototype.clone = function() {
      return new o(this.toString());
    }, o.prototype.lighten = function(a) {
      a === void 0 && (a = 10);
      var s = this.toHsl();
      return s.l += a / 100, s.l = Eo(s.l), new o(s);
    }, o.prototype.brighten = function(a) {
      a === void 0 && (a = 10);
      var s = this.toRgb();
      return s.r = Math.max(0, Math.min(255, s.r - Math.round(255 * -(a / 100)))), s.g = Math.max(0, Math.min(255, s.g - Math.round(255 * -(a / 100)))), s.b = Math.max(0, Math.min(255, s.b - Math.round(255 * -(a / 100)))), new o(s);
    }, o.prototype.darken = function(a) {
      a === void 0 && (a = 10);
      var s = this.toHsl();
      return s.l -= a / 100, s.l = Eo(s.l), new o(s);
    }, o.prototype.tint = function(a) {
      return a === void 0 && (a = 10), this.mix("white", a);
    }, o.prototype.shade = function(a) {
      return a === void 0 && (a = 10), this.mix("black", a);
    }, o.prototype.desaturate = function(a) {
      a === void 0 && (a = 10);
      var s = this.toHsl();
      return s.s -= a / 100, s.s = Eo(s.s), new o(s);
    }, o.prototype.saturate = function(a) {
      a === void 0 && (a = 10);
      var s = this.toHsl();
      return s.s += a / 100, s.s = Eo(s.s), new o(s);
    }, o.prototype.greyscale = function() {
      return this.desaturate(100);
    }, o.prototype.spin = function(a) {
      var s = this.toHsl(), h2 = (s.h + a) % 360;
      return s.h = h2 < 0 ? 360 + h2 : h2, new o(s);
    }, o.prototype.mix = function(a, s) {
      s === void 0 && (s = 50);
      var h2 = this.toRgb(), g = new o(a).toRgb(), f = s / 100, p = {
        r: (g.r - h2.r) * f + h2.r,
        g: (g.g - h2.g) * f + h2.g,
        b: (g.b - h2.b) * f + h2.b,
        a: (g.a - h2.a) * f + h2.a
      };
      return new o(p);
    }, o.prototype.analogous = function(a, s) {
      a === void 0 && (a = 6), s === void 0 && (s = 30);
      var h2 = this.toHsl(), g = 360 / s, f = [this];
      for (h2.h = (h2.h - (g * a >> 1) + 720) % 360; --a; )
        h2.h = (h2.h + g) % 360, f.push(new o(h2));
      return f;
    }, o.prototype.complement = function() {
      var a = this.toHsl();
      return a.h = (a.h + 180) % 360, new o(a);
    }, o.prototype.monochromatic = function(a) {
      a === void 0 && (a = 6);
      for (var s = this.toHsv(), h2 = s.h, g = s.s, f = s.v, p = [], m = 1 / a; a--; )
        p.push(new o({ h: h2, s: g, v: f })), f = (f + m) % 1;
      return p;
    }, o.prototype.splitcomplement = function() {
      var a = this.toHsl(), s = a.h;
      return [
        this,
        new o({ h: (s + 72) % 360, s: a.s, l: a.l }),
        new o({ h: (s + 216) % 360, s: a.s, l: a.l })
      ];
    }, o.prototype.onBackground = function(a) {
      var s = this.toRgb(), h2 = new o(a).toRgb(), g = s.a + h2.a * (1 - s.a);
      return new o({
        r: (s.r * s.a + h2.r * h2.a * (1 - s.a)) / g,
        g: (s.g * s.a + h2.g * h2.a * (1 - s.a)) / g,
        b: (s.b * s.a + h2.b * h2.a * (1 - s.a)) / g,
        a: g
      });
    }, o.prototype.triad = function() {
      return this.polyad(3);
    }, o.prototype.tetrad = function() {
      return this.polyad(4);
    }, o.prototype.polyad = function(a) {
      for (var s = this.toHsl(), h2 = s.h, g = [this], f = 360 / a, p = 1; p < a; p++)
        g.push(new o({ h: (h2 + p * f) % 360, s: s.s, l: s.l }));
      return g;
    }, o.prototype.equals = function(a) {
      return this.toRgbString() === new o(a).toRgbString();
    }, o;
  }()
);
function Jr(o, a = 20) {
  return o.mix("#141414", a).toString();
}
function em(o) {
  const a = ic(), s = hr("button");
  return computed(() => {
    let h2 = {};
    const g = o.color;
    if (g) {
      const f = new Q0(g), p = o.dark ? f.tint(20).toString() : Jr(f, 20);
      if (o.plain)
        h2 = s.cssVarBlock({
          "bg-color": o.dark ? Jr(f, 90) : f.tint(90).toString(),
          "text-color": g,
          "border-color": o.dark ? Jr(f, 50) : f.tint(50).toString(),
          "hover-text-color": `var(${s.cssVarName("color-white")})`,
          "hover-bg-color": g,
          "hover-border-color": g,
          "active-bg-color": p,
          "active-text-color": `var(${s.cssVarName("color-white")})`,
          "active-border-color": p
        }), a.value && (h2[s.cssVarBlockName("disabled-bg-color")] = o.dark ? Jr(f, 90) : f.tint(90).toString(), h2[s.cssVarBlockName("disabled-text-color")] = o.dark ? Jr(f, 50) : f.tint(50).toString(), h2[s.cssVarBlockName("disabled-border-color")] = o.dark ? Jr(f, 80) : f.tint(80).toString());
      else {
        const m = o.dark ? Jr(f, 30) : f.tint(30).toString(), C = f.isDark() ? `var(${s.cssVarName("color-white")})` : `var(${s.cssVarName("color-black")})`;
        if (h2 = s.cssVarBlock({
          "bg-color": g,
          "text-color": C,
          "border-color": g,
          "hover-bg-color": m,
          "hover-text-color": C,
          "hover-border-color": m,
          "active-bg-color": p,
          "active-border-color": p
        }), a.value) {
          const w = o.dark ? Jr(f, 50) : f.tint(50).toString();
          h2[s.cssVarBlockName("disabled-bg-color")] = w, h2[s.cssVarBlockName("disabled-text-color")] = o.dark ? "rgba(255, 255, 255, 0.5)" : `var(${s.cssVarName("color-white")})`, h2[s.cssVarBlockName("disabled-border-color")] = w;
        }
      }
    }
    return h2;
  });
}
var tm = defineComponent({
  name: "ElButton"
});
var rm = defineComponent({
  ...tm,
  props: pl,
  emits: W0,
  setup(o, { expose: a, emit: s }) {
    const h2 = o, g = em(h2), f = hr("button"), { _ref: p, _size: m, _type: C, _disabled: w, _props: b, shouldAddSpace: x, handleClick: T } = B0(h2, s);
    return a({
      ref: p,
      size: m,
      type: C,
      disabled: w,
      shouldAddSpace: x
    }), (_, E) => (openBlock(), createBlock(resolveDynamicComponent(_.tag), mergeProps({
      ref_key: "_ref",
      ref: p
    }, unref(b), {
      class: [
        unref(f).b(),
        unref(f).m(unref(C)),
        unref(f).m(unref(m)),
        unref(f).is("disabled", unref(w)),
        unref(f).is("loading", _.loading),
        unref(f).is("plain", _.plain),
        unref(f).is("round", _.round),
        unref(f).is("circle", _.circle),
        unref(f).is("text", _.text),
        unref(f).is("link", _.link),
        unref(f).is("has-bg", _.bg)
      ],
      style: unref(g),
      onClick: unref(T)
    }), {
      default: withCtx(() => [
        _.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _.$slots.loading ? renderSlot(_.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(Sn), {
            key: 1,
            class: normalizeClass(unref(f).is("loading"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : _.icon || _.$slots.icon ? (openBlock(), createBlock(unref(Sn), { key: 1 }, {
          default: withCtx(() => [
            _.icon ? (openBlock(), createBlock(resolveDynamicComponent(_.icon), { key: 0 })) : renderSlot(_.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : createCommentVNode("v-if", true),
        _.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass({ [unref(f).em("text", "expand")]: unref(x) })
        }, [
          renderSlot(_.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var nm = on(rm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
var im = {
  size: pl.size,
  type: pl.type
};
var om = defineComponent({
  name: "ElButtonGroup"
});
var am = defineComponent({
  ...om,
  props: im,
  setup(o) {
    const a = o;
    provide(lc, reactive({
      size: toRef(a, "size"),
      type: toRef(a, "type")
    }));
    const s = hr("button");
    return (h2, g) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`${unref(s).b("group")}`)
    }, [
      renderSlot(h2.$slots, "default")
    ], 2));
  }
});
var uc = on(am, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
var fc = Xo(nm, {
  ButtonGroup: uc
});
Xf(uc);
var lm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cc(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var sm = Pr({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: {
    type: Boolean,
    default: false
  },
  overlayClass: {
    type: Fr([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: Fr([String, Number])
  }
});
var um = {
  click: (o) => o instanceof MouseEvent
};
var fm = "overlay";
var cm = defineComponent({
  name: "ElOverlay",
  props: sm,
  emits: um,
  setup(o, { slots: a, emit: s }) {
    const h2 = hr(fm), g = (C) => {
      s("click", C);
    }, { onClick: f, onMousedown: p, onMouseup: m } = tc(o.customMaskEvent ? void 0 : g);
    return () => o.mask ? createVNode("div", {
      class: [h2.b(), o.overlayClass],
      style: {
        zIndex: o.zIndex
      },
      onClick: f,
      onMousedown: p,
      onMouseup: m
    }, [renderSlot(a, "default")], Do.STYLE | Do.CLASS | Do.PROPS, ["onClick", "onMouseup", "onMousedown"]) : h("div", {
      class: o.overlayClass,
      style: {
        zIndex: o.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [renderSlot(a, "default")]);
  }
});
var hm = cm;
var hc = Symbol("dialogInjectionKey");
var dc = Pr({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: cl
  },
  customClass: {
    type: String,
    default: ""
  },
  draggable: Boolean,
  fullscreen: Boolean,
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
});
var dm = {
  close: () => true
};
var pm = ["aria-level"];
var vm = ["aria-label"];
var gm = ["id"];
var mm = defineComponent({ name: "ElDialogContent" });
var ym = defineComponent({
  ...mm,
  props: dc,
  emits: dm,
  setup(o) {
    const a = o, { t: s } = Yg(), { Close: h2 } = Hg, { dialogRef: g, headerRef: f, bodyId: p, ns: m, style: C } = inject(hc), { focusTrapRef: w } = inject(oc), b = computed(() => [
      m.b(),
      m.is("fullscreen", a.fullscreen),
      m.is("draggable", a.draggable),
      m.is("align-center", a.alignCenter),
      { [m.m("center")]: a.center },
      a.customClass
    ]), x = Wg(w, g), T = computed(() => a.draggable);
    return jg(g, f, T), (_, E) => (openBlock(), createElementBlock("div", {
      ref: unref(x),
      class: normalizeClass(unref(b)),
      style: normalizeStyle(unref(C)),
      tabindex: "-1"
    }, [
      createBaseVNode("header", {
        ref_key: "headerRef",
        ref: f,
        class: normalizeClass(unref(m).e("header"))
      }, [
        renderSlot(_.$slots, "header", {}, () => [
          createBaseVNode("span", {
            role: "heading",
            "aria-level": _.ariaLevel,
            class: normalizeClass(unref(m).e("title"))
          }, toDisplayString(_.title), 11, pm)
        ]),
        _.showClose ? (openBlock(), createElementBlock("button", {
          key: 0,
          "aria-label": unref(s)("el.dialog.close"),
          class: normalizeClass(unref(m).e("headerbtn")),
          type: "button",
          onClick: E[0] || (E[0] = (A) => _.$emit("close"))
        }, [
          createVNode(unref(Sn), {
            class: normalizeClass(unref(m).e("close"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_.closeIcon || unref(h2))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, vm)) : createCommentVNode("v-if", true)
      ], 2),
      createBaseVNode("div", {
        id: unref(p),
        class: normalizeClass(unref(m).e("body"))
      }, [
        renderSlot(_.$slots, "default")
      ], 10, gm),
      _.$slots.footer ? (openBlock(), createElementBlock("footer", {
        key: 0,
        class: normalizeClass(unref(m).e("footer"))
      }, [
        renderSlot(_.$slots, "footer")
      ], 2)) : createCommentVNode("v-if", true)
    ], 6));
  }
});
var bm = on(ym, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);
var wm = Pr({
  ...dc,
  appendToBody: Boolean,
  beforeClose: {
    type: Fr(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: false
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
});
var Sm = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [qo]: (o) => rg(o),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
var Cm = (o, a) => {
  const h2 = getCurrentInstance().emit, { nextZIndex: g } = h0();
  let f = "";
  const p = sf(), m = sf(), C = ref(false), w = ref(false), b = ref(false), x = ref(o.zIndex || g());
  let T, _;
  const E = rc("namespace", Po), A = computed(() => {
    const ne = {}, O = `--${E.value}-dialog`;
    return o.fullscreen || (o.top && (ne[`${O}-margin-top`] = o.top), o.width && (ne[`${O}-width`] = Wo(o.width))), ne;
  }), B = computed(() => o.alignCenter ? { display: "flex" } : {});
  function W() {
    h2("opened");
  }
  function $() {
    h2("closed"), h2(qo, false), o.destroyOnClose && (b.value = false);
  }
  function X() {
    h2("close");
  }
  function K() {
    _ == null || _(), T == null || T(), o.openDelay && o.openDelay > 0 ? { stop: T } = $u(() => Y(), o.openDelay) : Y();
  }
  function Z() {
    T == null || T(), _ == null || _(), o.closeDelay && o.closeDelay > 0 ? { stop: _ } = $u(() => Q(), o.closeDelay) : Q();
  }
  function le() {
    function ne(O) {
      O || (w.value = true, C.value = false);
    }
    o.beforeClose ? o.beforeClose(ne) : Z();
  }
  function fe() {
    o.closeOnClickModal && le();
  }
  function Y() {
    fr && (C.value = true);
  }
  function Q() {
    C.value = false;
  }
  function ee() {
    h2("openAutoFocus");
  }
  function ae() {
    h2("closeAutoFocus");
  }
  function ce(ne) {
    var O;
    ((O = ne.detail) == null ? void 0 : O.focusReason) === "pointer" && ne.preventDefault();
  }
  o.lockScroll && a0(C);
  function j() {
    o.closeOnPressEscape && le();
  }
  return watch(() => o.modelValue, (ne) => {
    ne ? (w.value = false, K(), b.value = true, x.value = o.zIndex ? x.value++ : g(), nextTick(() => {
      h2("open"), a.value && (a.value.scrollTop = 0);
    })) : C.value && Z();
  }), watch(() => o.fullscreen, (ne) => {
    a.value && (ne ? (f = a.value.style.transform, a.value.style.transform = "") : a.value.style.transform = f);
  }), onMounted(() => {
    o.modelValue && (C.value = true, b.value = true, K());
  }), {
    afterEnter: W,
    afterLeave: $,
    beforeLeave: X,
    handleClose: le,
    onModalClick: fe,
    close: Z,
    doClose: Q,
    onOpenAutoFocus: ee,
    onCloseAutoFocus: ae,
    onCloseRequested: j,
    onFocusoutPrevented: ce,
    titleId: p,
    bodyId: m,
    closed: w,
    style: A,
    overlayDialogStyle: B,
    rendered: b,
    visible: C,
    zIndex: x
  };
};
var km = ["aria-label", "aria-labelledby", "aria-describedby"];
var xm = defineComponent({
  name: "ElDialog",
  inheritAttrs: false
});
var Tm = defineComponent({
  ...xm,
  props: wm,
  emits: Sm,
  setup(o, { expose: a }) {
    const s = o, h2 = useSlots();
    zo({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, computed(() => !!h2.title)), zo({
      scope: "el-dialog",
      from: "custom-class",
      replacement: "class",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#attributes",
      type: "Attribute"
    }, computed(() => !!s.customClass));
    const g = hr("dialog"), f = ref(), p = ref(), m = ref(), {
      visible: C,
      titleId: w,
      bodyId: b,
      style: x,
      overlayDialogStyle: T,
      rendered: _,
      zIndex: E,
      afterEnter: A,
      afterLeave: B,
      beforeLeave: W,
      handleClose: $,
      onModalClick: X,
      onOpenAutoFocus: K,
      onCloseAutoFocus: Z,
      onCloseRequested: le,
      onFocusoutPrevented: fe
    } = Cm(s, f);
    provide(hc, {
      dialogRef: f,
      headerRef: p,
      bodyId: b,
      ns: g,
      rendered: _,
      style: x
    });
    const Y = tc(X), Q = computed(() => s.draggable && !s.fullscreen);
    return a({
      visible: C,
      dialogContentRef: m
    }), (ee, ae) => (openBlock(), createBlock(Teleport, {
      to: "body",
      disabled: !ee.appendToBody
    }, [
      createVNode(Transition, {
        name: "dialog-fade",
        onAfterEnter: unref(A),
        onAfterLeave: unref(B),
        onBeforeLeave: unref(W),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createVNode(unref(hm), {
            "custom-mask-event": "",
            mask: ee.modal,
            "overlay-class": ee.modalClass,
            "z-index": unref(E)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": ee.title || void 0,
                "aria-labelledby": ee.title ? void 0 : unref(w),
                "aria-describedby": unref(b),
                class: normalizeClass(`${unref(g).namespace.value}-overlay-dialog`),
                style: normalizeStyle(unref(T)),
                onClick: ae[0] || (ae[0] = (...ce) => unref(Y).onClick && unref(Y).onClick(...ce)),
                onMousedown: ae[1] || (ae[1] = (...ce) => unref(Y).onMousedown && unref(Y).onMousedown(...ce)),
                onMouseup: ae[2] || (ae[2] = (...ce) => unref(Y).onMouseup && unref(Y).onMouseup(...ce))
              }, [
                createVNode(unref(P0), {
                  loop: "",
                  trapped: unref(C),
                  "focus-start-el": "container",
                  onFocusAfterTrapped: unref(K),
                  onFocusAfterReleased: unref(Z),
                  onFocusoutPrevented: unref(fe),
                  onReleaseRequested: unref(le)
                }, {
                  default: withCtx(() => [
                    unref(_) ? (openBlock(), createBlock(bm, mergeProps({
                      key: 0,
                      ref_key: "dialogContentRef",
                      ref: m
                    }, ee.$attrs, {
                      "custom-class": ee.customClass,
                      center: ee.center,
                      "align-center": ee.alignCenter,
                      "close-icon": ee.closeIcon,
                      draggable: unref(Q),
                      fullscreen: ee.fullscreen,
                      "show-close": ee.showClose,
                      title: ee.title,
                      "aria-level": ee.headerAriaLevel,
                      onClose: unref($)
                    }), createSlots({
                      header: withCtx(() => [
                        ee.$slots.title ? renderSlot(ee.$slots, "title", { key: 1 }) : renderSlot(ee.$slots, "header", {
                          key: 0,
                          close: unref($),
                          titleId: unref(w),
                          titleClass: unref(g).e("title")
                        })
                      ]),
                      default: withCtx(() => [
                        renderSlot(ee.$slots, "default")
                      ]),
                      _: 2
                    }, [
                      ee.$slots.footer ? {
                        name: "footer",
                        fn: withCtx(() => [
                          renderSlot(ee.$slots, "footer")
                        ])
                      } : void 0
                    ]), 1040, ["custom-class", "center", "align-center", "close-icon", "draggable", "fullscreen", "show-close", "title", "aria-level", "onClose"])) : createCommentVNode("v-if", true)
                  ]),
                  _: 3
                }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
              ], 46, km)
            ]),
            _: 3
          }, 8, ["mask", "overlay-class", "z-index"]), [
            [vShow, unref(C)]
          ])
        ]),
        _: 3
      }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
    ], 8, ["disabled"]));
  }
});
var _m = on(Tm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);
var Lm = Xo(_m);
var Qo = Symbol("tabsRootContextKey");
var Mm = Pr({
  tabs: {
    type: Fr(Array),
    default: () => qf([])
  }
});
var pc = "ElTabBar";
var Em = defineComponent({
  name: pc
});
var Om = defineComponent({
  ...Em,
  props: Mm,
  setup(o, { expose: a }) {
    const s = o, h2 = getCurrentInstance(), g = inject(Qo);
    g || Yo(pc, "<el-tabs><el-tab-bar /></el-tabs>");
    const f = hr("tabs"), p = ref(), m = ref(), C = () => {
      let b = 0, x = 0;
      const T = ["top", "bottom"].includes(g.props.tabPosition) ? "width" : "height", _ = T === "width" ? "x" : "y", E = _ === "x" ? "left" : "top";
      return s.tabs.every((A) => {
        var B, W;
        const $ = (W = (B = h2.parent) == null ? void 0 : B.refs) == null ? void 0 : W[`tab-${A.uid}`];
        if (!$)
          return false;
        if (!A.active)
          return true;
        b = $[`offset${Qr(E)}`], x = $[`client${Qr(T)}`];
        const X = window.getComputedStyle($);
        return T === "width" && (s.tabs.length > 1 && (x -= Number.parseFloat(X.paddingLeft) + Number.parseFloat(X.paddingRight)), b += Number.parseFloat(X.paddingLeft)), false;
      }), {
        [T]: `${x}px`,
        transform: `translate${Qr(_)}(${b}px)`
      };
    }, w = () => m.value = C();
    return watch(() => s.tabs, async () => {
      await nextTick(), w();
    }, { immediate: true }), If(p, () => w()), a({
      ref: p,
      update: w
    }), (b, x) => (openBlock(), createElementBlock("div", {
      ref_key: "barRef",
      ref: p,
      class: normalizeClass([unref(f).e("active-bar"), unref(f).is(unref(g).props.tabPosition)]),
      style: normalizeStyle(m.value)
    }, null, 6));
  }
});
var Nm = on(Om, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);
var Am = Pr({
  panes: {
    type: Fr(Array),
    default: () => qf([])
  },
  currentName: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  stretch: Boolean
});
var Dm = {
  tabClick: (o, a, s) => s instanceof Event,
  tabRemove: (o, a) => a instanceof Event
};
var kf = "ElTabNav";
var Im = defineComponent({
  name: kf,
  props: Am,
  emits: Dm,
  setup(o, {
    expose: a,
    emit: s
  }) {
    const h2 = getCurrentInstance(), g = inject(Qo);
    g || Yo(kf, "<el-tabs><tab-nav /></el-tabs>");
    const f = hr("tabs"), p = hp(), m = Sp(), C = ref(), w = ref(), b = ref(), x = ref(), T = ref(false), _ = ref(0), E = ref(false), A = ref(true), B = computed(() => ["top", "bottom"].includes(g.props.tabPosition) ? "width" : "height"), W = computed(() => ({
      transform: `translate${B.value === "width" ? "X" : "Y"}(-${_.value}px)`
    })), $ = () => {
      if (!C.value)
        return;
      const Q = C.value[`offset${Qr(B.value)}`], ee = _.value;
      if (!ee)
        return;
      const ae = ee > Q ? ee - Q : 0;
      _.value = ae;
    }, X = () => {
      if (!C.value || !w.value)
        return;
      const Q = w.value[`offset${Qr(B.value)}`], ee = C.value[`offset${Qr(B.value)}`], ae = _.value;
      if (Q - ae <= ee)
        return;
      const ce = Q - ae > ee * 2 ? ae + ee : Q - ee;
      _.value = ce;
    }, K = async () => {
      const Q = w.value;
      if (!T.value || !b.value || !C.value || !Q)
        return;
      await nextTick();
      const ee = b.value.querySelector(".is-active");
      if (!ee)
        return;
      const ae = C.value, ce = ["top", "bottom"].includes(g.props.tabPosition), j = ee.getBoundingClientRect(), ne = ae.getBoundingClientRect(), O = ce ? Q.offsetWidth - ne.width : Q.offsetHeight - ne.height, Ve = _.value;
      let Fe = Ve;
      ce ? (j.left < ne.left && (Fe = Ve - (ne.left - j.left)), j.right > ne.right && (Fe = Ve + j.right - ne.right)) : (j.top < ne.top && (Fe = Ve - (ne.top - j.top)), j.bottom > ne.bottom && (Fe = Ve + (j.bottom - ne.bottom))), Fe = Math.max(Fe, 0), _.value = Math.min(Fe, O);
    }, Z = () => {
      var Q;
      if (!w.value || !C.value)
        return;
      o.stretch && ((Q = x.value) == null || Q.update());
      const ee = w.value[`offset${Qr(B.value)}`], ae = C.value[`offset${Qr(B.value)}`], ce = _.value;
      ae < ee ? (T.value = T.value || {}, T.value.prev = ce, T.value.next = ce + ae < ee, ee - ce < ae && (_.value = ee - ae)) : (T.value = false, ce > 0 && (_.value = 0));
    }, le = (Q) => {
      const ee = Q.code, {
        up: ae,
        down: ce,
        left: j,
        right: ne
      } = qn;
      if (![ae, ce, j, ne].includes(ee))
        return;
      const O = Array.from(Q.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")), Ve = O.indexOf(Q.target);
      let Fe;
      ee === j || ee === ae ? Ve === 0 ? Fe = O.length - 1 : Fe = Ve - 1 : Ve < O.length - 1 ? Fe = Ve + 1 : Fe = 0, O[Fe].focus({
        preventScroll: true
      }), O[Fe].click(), fe();
    }, fe = () => {
      A.value && (E.value = true);
    }, Y = () => E.value = false;
    return watch(p, (Q) => {
      Q === "hidden" ? A.value = false : Q === "visible" && setTimeout(() => A.value = true, 50);
    }), watch(m, (Q) => {
      Q ? setTimeout(() => A.value = true, 50) : A.value = false;
    }), If(b, Z), onMounted(() => setTimeout(() => K(), 0)), onUpdated(() => Z()), a({
      scrollToActiveTab: K,
      removeFocus: Y
    }), watch(() => o.panes, () => h2.update(), {
      flush: "post",
      deep: true
    }), () => {
      const Q = T.value ? [createVNode("span", {
        class: [f.e("nav-prev"), f.is("disabled", !T.value.prev)],
        onClick: $
      }, [createVNode(Sn, null, {
        default: () => [createVNode(pg, null, null)]
      })]), createVNode("span", {
        class: [f.e("nav-next"), f.is("disabled", !T.value.next)],
        onClick: X
      }, [createVNode(Sn, null, {
        default: () => [createVNode(wg, null, null)]
      })])] : null, ee = o.panes.map((ae, ce) => {
        var j, ne, O, Ve;
        const Fe = ae.uid, St = ae.props.disabled, Ze = (ne = (j = ae.props.name) != null ? j : ae.index) != null ? ne : `${ce}`, pt = !St && (ae.isClosable || o.editable);
        ae.index = `${ce}`;
        const Gt = pt ? createVNode(Sn, {
          class: "is-icon-close",
          onClick: (vt) => s("tabRemove", ae, vt)
        }, {
          default: () => [createVNode(Vf, null, null)]
        }) : null, tr = ((Ve = (O = ae.slots).label) == null ? void 0 : Ve.call(O)) || ae.props.label, Qe = !St && ae.active ? 0 : -1;
        return createVNode("div", {
          ref: `tab-${Fe}`,
          class: [f.e("item"), f.is(g.props.tabPosition), f.is("active", ae.active), f.is("disabled", St), f.is("closable", pt), f.is("focus", E.value)],
          id: `tab-${Ze}`,
          key: `tab-${Fe}`,
          "aria-controls": `pane-${Ze}`,
          role: "tab",
          "aria-selected": ae.active,
          tabindex: Qe,
          onFocus: () => fe(),
          onBlur: () => Y(),
          onClick: (vt) => {
            Y(), s("tabClick", ae, Ze, vt);
          },
          onKeydown: (vt) => {
            pt && (vt.code === qn.delete || vt.code === qn.backspace) && s("tabRemove", ae, vt);
          }
        }, [tr, Gt]);
      });
      return createVNode("div", {
        ref: b,
        class: [f.e("nav-wrap"), f.is("scrollable", !!T.value), f.is(g.props.tabPosition)]
      }, [Q, createVNode("div", {
        class: f.e("nav-scroll"),
        ref: C
      }, [createVNode("div", {
        class: [f.e("nav"), f.is(g.props.tabPosition), f.is("stretch", o.stretch && ["top", "bottom"].includes(g.props.tabPosition))],
        ref: w,
        style: W.value,
        role: "tablist",
        onKeydown: le
      }, [o.type ? null : createVNode(Nm, {
        ref: x,
        tabs: [...o.panes]
      }, null), ee])])]);
    };
  }
});
var Fm = Pr({
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  activeName: {
    type: [String, Number]
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number]
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: ["top", "right", "bottom", "left"],
    default: "top"
  },
  beforeLeave: {
    type: Fr(Function),
    default: () => true
  },
  stretch: Boolean
});
var tl = (o) => Ri(o) || Al(o);
var Pm = {
  [qo]: (o) => tl(o),
  tabClick: (o, a) => a instanceof Event,
  tabChange: (o) => tl(o),
  edit: (o, a) => ["remove", "add"].includes(a),
  tabRemove: (o) => tl(o),
  tabAdd: () => true
};
var Bm = defineComponent({
  name: "ElTabs",
  props: Fm,
  emits: Pm,
  setup(o, {
    emit: a,
    slots: s,
    expose: h2
  }) {
    var g, f;
    const p = hr("tabs"), {
      children: m,
      addChild: C,
      removeChild: w
    } = p0(getCurrentInstance(), "ElTabPane"), b = ref(), x = ref((f = (g = o.modelValue) != null ? g : o.activeName) != null ? f : "0"), T = (W) => {
      x.value = W, a(qo, W), a("tabChange", W);
    }, _ = async (W) => {
      var $, X, K;
      if (!(x.value === W || fl(W)))
        try {
          await (($ = o.beforeLeave) == null ? void 0 : $.call(o, W, x.value)) !== false && (T(W), (K = (X = b.value) == null ? void 0 : X.removeFocus) == null || K.call(X));
        } catch {
        }
    }, E = (W, $, X) => {
      W.props.disabled || (_($), a("tabClick", W, X));
    }, A = (W, $) => {
      W.props.disabled || fl(W.props.name) || ($.stopPropagation(), a("edit", W.props.name, "remove"), a("tabRemove", W.props.name));
    }, B = () => {
      a("edit", void 0, "add"), a("tabAdd");
    };
    return zo({
      from: '"activeName"',
      replacement: '"model-value" or "v-model"',
      scope: "ElTabs",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/tabs.html#attributes",
      type: "Attribute"
    }, computed(() => !!o.activeName)), watch(() => o.activeName, (W) => _(W)), watch(() => o.modelValue, (W) => _(W)), watch(x, async () => {
      var W;
      await nextTick(), (W = b.value) == null || W.scrollToActiveTab();
    }), provide(Qo, {
      props: o,
      currentName: x,
      registerPane: C,
      unregisterPane: w
    }), h2({
      currentName: x
    }), () => {
      const W = o.editable || o.addable ? createVNode("span", {
        class: p.e("new-tab"),
        tabindex: "0",
        onClick: B,
        onKeydown: (K) => {
          K.code === qn.enter && B();
        }
      }, [createVNode(Sn, {
        class: p.is("icon-plus")
      }, {
        default: () => [createVNode(Bg, null, null)]
      })]) : null, $ = createVNode("div", {
        class: [p.e("header"), p.is(o.tabPosition)]
      }, [W, createVNode(Im, {
        ref: b,
        currentName: x.value,
        editable: o.editable,
        type: o.type,
        panes: m.value,
        stretch: o.stretch,
        onTabClick: E,
        onTabRemove: A
      }, null)]), X = createVNode("div", {
        class: p.e("content")
      }, [renderSlot(s, "default")]);
      return createVNode("div", {
        class: [p.b(), p.m(o.tabPosition), {
          [p.m("card")]: o.type === "card",
          [p.m("border-card")]: o.type === "border-card"
        }]
      }, [...o.tabPosition !== "bottom" ? [$, X] : [X, $]]);
    };
  }
});
var Rm = Pr({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: [String, Number]
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
});
var Hm = ["id", "aria-hidden", "aria-labelledby"];
var vc = "ElTabPane";
var Wm = defineComponent({
  name: vc
});
var zm = defineComponent({
  ...Wm,
  props: Rm,
  setup(o) {
    const a = o, s = getCurrentInstance(), h2 = useSlots(), g = inject(Qo);
    g || Yo(vc, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const f = hr("tab-pane"), p = ref(), m = computed(() => a.closable || g.props.closable), C = zu(() => {
      var _;
      return g.currentName.value === ((_ = a.name) != null ? _ : p.value);
    }), w = ref(C.value), b = computed(() => {
      var _;
      return (_ = a.name) != null ? _ : p.value;
    }), x = zu(() => !a.lazy || w.value || C.value);
    watch(C, (_) => {
      _ && (w.value = true);
    });
    const T = reactive({
      uid: s.uid,
      slots: h2,
      props: a,
      paneName: b,
      active: C,
      index: p,
      isClosable: m
    });
    return onMounted(() => {
      g.registerPane(T);
    }), onUnmounted(() => {
      g.unregisterPane(T.uid);
    }), (_, E) => unref(x) ? withDirectives((openBlock(), createElementBlock("div", {
      key: 0,
      id: `pane-${unref(b)}`,
      class: normalizeClass(unref(f).b()),
      role: "tabpanel",
      "aria-hidden": !unref(C),
      "aria-labelledby": `tab-${unref(b)}`
    }, [
      renderSlot(_.$slots, "default")
    ], 10, Hm)), [
      [vShow, unref(C)]
    ]) : createCommentVNode("v-if", true);
  }
});
var gc = on(zm, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);
var jm = Xo(Bm, {
  TabPane: gc
});
var $m = Xf(gc);
var rl = { exports: {} };
var xf;
function Wi() {
  return xf || (xf = 1, function(o, a) {
    (function(s, h2) {
      o.exports = h2();
    })(lm, function() {
      var s = navigator.userAgent, h2 = navigator.platform, g = /gecko\/\d/i.test(s), f = /MSIE \d/.test(s), p = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(s), m = /Edge\/(\d+)/.exec(s), C = f || p || m, w = C && (f ? document.documentMode || 6 : +(m || p)[1]), b = !m && /WebKit\//.test(s), x = b && /Qt\/\d+\.\d+/.test(s), T = !m && /Chrome\/(\d+)/.exec(s), _ = T && +T[1], E = /Opera\//.test(s), A = /Apple Computer/.test(navigator.vendor), B = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(s), W = /PhantomJS/.test(s), $ = A && (/Mobile\/\w+/.test(s) || navigator.maxTouchPoints > 2), X = /Android/.test(s), K = $ || X || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(s), Z = $ || /Mac/.test(h2), le = /\bCrOS\b/.test(s), fe = /win/i.test(h2), Y = E && s.match(/Version\/(\d*\.\d*)/);
      Y && (Y = Number(Y[1])), Y && Y >= 15 && (E = false, b = true);
      var Q = Z && (x || E && (Y == null || Y < 12.11)), ee = g || C && w >= 9;
      function ae(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
      }
      var ce = function(e, t) {
        var n = e.className, r = ae(t).exec(n);
        if (r) {
          var i = n.slice(r.index + r[0].length);
          e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
        }
      };
      function j(e) {
        for (var t = e.childNodes.length; t > 0; --t)
          e.removeChild(e.firstChild);
        return e;
      }
      function ne(e, t) {
        return j(e).appendChild(t);
      }
      function O(e, t, n, r) {
        var i = document.createElement(e);
        if (n && (i.className = n), r && (i.style.cssText = r), typeof t == "string")
          i.appendChild(document.createTextNode(t));
        else if (t)
          for (var l = 0; l < t.length; ++l)
            i.appendChild(t[l]);
        return i;
      }
      function Ve(e, t, n, r) {
        var i = O(e, t, n, r);
        return i.setAttribute("role", "presentation"), i;
      }
      var Fe;
      document.createRange ? Fe = function(e, t, n, r) {
        var i = document.createRange();
        return i.setEnd(r || e, n), i.setStart(e, t), i;
      } : Fe = function(e, t, n) {
        var r = document.body.createTextRange();
        try {
          r.moveToElementText(e.parentNode);
        } catch {
          return r;
        }
        return r.collapse(true), r.moveEnd("character", n), r.moveStart("character", t), r;
      };
      function St(e, t) {
        if (t.nodeType == 3 && (t = t.parentNode), e.contains)
          return e.contains(t);
        do
          if (t.nodeType == 11 && (t = t.host), t == e)
            return true;
        while (t = t.parentNode);
      }
      function Ze(e) {
        var t;
        try {
          t = e.activeElement;
        } catch {
          t = e.body || null;
        }
        for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
          t = t.shadowRoot.activeElement;
        return t;
      }
      function pt(e, t) {
        var n = e.className;
        ae(t).test(n) || (e.className += (n ? " " : "") + t);
      }
      function Gt(e, t) {
        for (var n = e.split(" "), r = 0; r < n.length; r++)
          n[r] && !ae(n[r]).test(t) && (t += " " + n[r]);
        return t;
      }
      var tr = function(e) {
        e.select();
      };
      $ ? tr = function(e) {
        e.selectionStart = 0, e.selectionEnd = e.value.length;
      } : C && (tr = function(e) {
        try {
          e.select();
        } catch {
        }
      });
      function Qe(e) {
        return e.display.wrapper.ownerDocument;
      }
      function vt(e) {
        return Qe(e).defaultView;
      }
      function Ke(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function() {
          return e.apply(null, t);
        };
      }
      function Se(e, t, n) {
        t || (t = {});
        for (var r in e)
          e.hasOwnProperty(r) && (n !== false || !t.hasOwnProperty(r)) && (t[r] = e[r]);
        return t;
      }
      function ge(e, t, n, r, i) {
        t == null && (t = e.search(/[^\s\u00a0]/), t == -1 && (t = e.length));
        for (var l = r || 0, u = i || 0; ; ) {
          var c = e.indexOf("	", l);
          if (c < 0 || c >= t)
            return u + (t - l);
          u += c - l, u += n - u % n, l = c + 1;
        }
      }
      var Te = function() {
        this.id = null, this.f = null, this.time = 0, this.handler = Ke(this.onTimeout, this);
      };
      Te.prototype.onTimeout = function(e) {
        e.id = 0, e.time <= +/* @__PURE__ */ new Date() ? e.f() : setTimeout(e.handler, e.time - +/* @__PURE__ */ new Date());
      }, Te.prototype.set = function(e, t) {
        this.f = t;
        var n = +/* @__PURE__ */ new Date() + e;
        (!this.id || n < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = n);
      };
      function Me(e, t) {
        for (var n = 0; n < e.length; ++n)
          if (e[n] == t)
            return n;
        return -1;
      }
      var an = 50, De = { toString: function() {
        return "CodeMirror.Pass";
      } }, $e = { scroll: false }, rr = { origin: "*mouse" }, dr = { origin: "+move" };
      function qt(e, t, n) {
        for (var r = 0, i = 0; ; ) {
          var l = e.indexOf("	", r);
          l == -1 && (l = e.length);
          var u = l - r;
          if (l == e.length || i + u >= t)
            return r + Math.min(u, t - i);
          if (i += l - r, i += n - i % n, r = l + 1, i >= t)
            return r;
        }
      }
      var Wt = [""];
      function Jt(e) {
        for (; Wt.length <= e; )
          Wt.push(Ee(Wt) + " ");
        return Wt[e];
      }
      function Ee(e) {
        return e[e.length - 1];
      }
      function Cr(e, t) {
        for (var n = [], r = 0; r < e.length; r++)
          n[r] = t(e[r], r);
        return n;
      }
      function S(e, t, n) {
        for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; )
          r++;
        e.splice(r, 0, t);
      }
      function N() {
      }
      function I(e, t) {
        var n;
        return Object.create ? n = Object.create(e) : (N.prototype = e, n = new N()), t && Se(t, n), n;
      }
      var R = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function H(e) {
        return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || R.test(e));
      }
      function z(e, t) {
        return t ? t.source.indexOf("\\w") > -1 && H(e) ? true : t.test(e) : H(e);
      }
      function J(e) {
        for (var t in e)
          if (e.hasOwnProperty(t) && e[t])
            return false;
        return true;
      }
      var te = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function oe(e) {
        return e.charCodeAt(0) >= 768 && te.test(e);
      }
      function ye(e, t, n) {
        for (; (n < 0 ? t > 0 : t < e.length) && oe(e.charAt(t)); )
          t += n;
        return t;
      }
      function ve(e, t, n) {
        for (var r = t > n ? -1 : 1; ; ) {
          if (t == n)
            return t;
          var i = (t + n) / 2, l = r < 0 ? Math.ceil(i) : Math.floor(i);
          if (l == t)
            return e(l) ? t : n;
          e(l) ? n = l : t = l + r;
        }
      }
      function Oe(e, t, n, r) {
        if (!e)
          return r(t, n, "ltr", 0);
        for (var i = false, l = 0; l < e.length; ++l) {
          var u = e[l];
          (u.from < n && u.to > t || t == n && u.to == t) && (r(Math.max(u.from, t), Math.min(u.to, n), u.level == 1 ? "rtl" : "ltr", l), i = true);
        }
        i || r(t, n, "ltr");
      }
      var Pe = null;
      function Ne(e, t, n) {
        var r;
        Pe = null;
        for (var i = 0; i < e.length; ++i) {
          var l = e[i];
          if (l.from < t && l.to > t)
            return i;
          l.to == t && (l.from != l.to && n == "before" ? r = i : Pe = i), l.from == t && (l.from != l.to && n != "before" ? r = i : Pe = i);
        }
        return r ?? Pe;
      }
      var Ye = function() {
        var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
        function n(v) {
          return v <= 247 ? e.charAt(v) : 1424 <= v && v <= 1524 ? "R" : 1536 <= v && v <= 1785 ? t.charAt(v - 1536) : 1774 <= v && v <= 2220 ? "r" : 8192 <= v && v <= 8203 ? "w" : v == 8204 ? "b" : "L";
        }
        var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, i = /[stwN]/, l = /[LRr]/, u = /[Lb1n]/, c = /[1n]/;
        function d(v, k, L) {
          this.level = v, this.from = k, this.to = L;
        }
        return function(v, k) {
          var L = k == "ltr" ? "L" : "R";
          if (v.length == 0 || k == "ltr" && !r.test(v))
            return false;
          for (var P = v.length, F = [], G = 0; G < P; ++G)
            F.push(n(v.charCodeAt(G)));
          for (var q = 0, ie = L; q < P; ++q) {
            var se = F[q];
            se == "m" ? F[q] = ie : ie = se;
          }
          for (var he = 0, ue = L; he < P; ++he) {
            var de = F[he];
            de == "1" && ue == "r" ? F[he] = "n" : l.test(de) && (ue = de, de == "r" && (F[he] = "R"));
          }
          for (var be = 1, me = F[0]; be < P - 1; ++be) {
            var Le = F[be];
            Le == "+" && me == "1" && F[be + 1] == "1" ? F[be] = "1" : Le == "," && me == F[be + 1] && (me == "1" || me == "n") && (F[be] = me), me = Le;
          }
          for (var Ge = 0; Ge < P; ++Ge) {
            var bt = F[Ge];
            if (bt == ",")
              F[Ge] = "N";
            else if (bt == "%") {
              var et = void 0;
              for (et = Ge + 1; et < P && F[et] == "%"; ++et)
                ;
              for (var $t = Ge && F[Ge - 1] == "!" || et < P && F[et] == "1" ? "1" : "N", Ft = Ge; Ft < et; ++Ft)
                F[Ft] = $t;
              Ge = et - 1;
            }
          }
          for (var st = 0, Pt = L; st < P; ++st) {
            var Ct = F[st];
            Pt == "L" && Ct == "1" ? F[st] = "L" : l.test(Ct) && (Pt = Ct);
          }
          for (var dt = 0; dt < P; ++dt)
            if (i.test(F[dt])) {
              var ut = void 0;
              for (ut = dt + 1; ut < P && i.test(F[ut]); ++ut)
                ;
              for (var it = (dt ? F[dt - 1] : L) == "L", Bt = (ut < P ? F[ut] : L) == "L", Un = it == Bt ? it ? "L" : "R" : L, qr = dt; qr < ut; ++qr)
                F[qr] = Un;
              dt = ut - 1;
            }
          for (var xt = [], Sr, wt = 0; wt < P; )
            if (u.test(F[wt])) {
              var Ka = wt;
              for (++wt; wt < P && u.test(F[wt]); ++wt)
                ;
              xt.push(new d(0, Ka, wt));
            } else {
              var Ar = wt, gn = xt.length, mn = k == "rtl" ? 1 : 0;
              for (++wt; wt < P && F[wt] != "L"; ++wt)
                ;
              for (var Ot = Ar; Ot < wt; )
                if (c.test(F[Ot])) {
                  Ar < Ot && (xt.splice(gn, 0, new d(1, Ar, Ot)), gn += mn);
                  var Gn = Ot;
                  for (++Ot; Ot < wt && c.test(F[Ot]); ++Ot)
                    ;
                  xt.splice(gn, 0, new d(2, Gn, Ot)), gn += mn, Ar = Ot;
                } else
                  ++Ot;
              Ar < wt && xt.splice(gn, 0, new d(1, Ar, wt));
            }
          return k == "ltr" && (xt[0].level == 1 && (Sr = v.match(/^\s+/)) && (xt[0].from = Sr[0].length, xt.unshift(new d(0, 0, Sr[0].length))), Ee(xt).level == 1 && (Sr = v.match(/\s+$/)) && (Ee(xt).to -= Sr[0].length, xt.push(new d(0, P - Sr[0].length, P)))), k == "rtl" ? xt.reverse() : xt;
        };
      }();
      function Ue(e, t) {
        var n = e.order;
        return n == null && (n = e.order = Ye(e.text, t)), n;
      }
      var Mt = [], re = function(e, t, n) {
        if (e.addEventListener)
          e.addEventListener(t, n, false);
        else if (e.attachEvent)
          e.attachEvent("on" + t, n);
        else {
          var r = e._handlers || (e._handlers = {});
          r[t] = (r[t] || Mt).concat(n);
        }
      };
      function Br(e, t) {
        return e._handlers && e._handlers[t] || Mt;
      }
      function ft(e, t, n) {
        if (e.removeEventListener)
          e.removeEventListener(t, n, false);
        else if (e.detachEvent)
          e.detachEvent("on" + t, n);
        else {
          var r = e._handlers, i = r && r[t];
          if (i) {
            var l = Me(i, n);
            l > -1 && (r[t] = i.slice(0, l).concat(i.slice(l + 1)));
          }
        }
      }
      function We(e, t) {
        var n = Br(e, t);
        if (n.length)
          for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i)
            n[i].apply(null, r);
      }
      function Xe(e, t, n) {
        return typeof t == "string" && (t = { type: t, preventDefault: function() {
          this.defaultPrevented = true;
        } }), We(e, n || t.type, e, t), nr(t) || t.codemirrorIgnore;
      }
      function ln(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
          for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r)
            Me(n, t[r]) == -1 && n.push(t[r]);
      }
      function ct(e, t) {
        return Br(e, t).length > 0;
      }
      function ot(e) {
        e.prototype.on = function(t, n) {
          re(this, t, n);
        }, e.prototype.off = function(t, n) {
          ft(this, t, n);
        };
      }
      function rt(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
      }
      function pr(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
      }
      function nr(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
      }
      function kr(e) {
        rt(e), pr(e);
      }
      function At(e) {
        return e.target || e.srcElement;
      }
      function ti(e) {
        var t = e.which;
        return t == null && (e.button & 1 ? t = 1 : e.button & 2 ? t = 3 : e.button & 4 && (t = 2)), Z && e.ctrlKey && t == 1 && (t = 3), t;
      }
      var ea = function() {
        if (C && w < 9)
          return false;
        var e = O("div");
        return "draggable" in e || "dragDrop" in e;
      }(), Zt;
      function ta(e) {
        if (Zt == null) {
          var t = O("span", "​");
          ne(e, O("span", [t, document.createTextNode("x")])), e.firstChild.offsetHeight != 0 && (Zt = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(C && w < 8));
        }
        var n = Zt ? O("span", "​") : O("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
        return n.setAttribute("cm-text", ""), n;
      }
      var xn;
      function ji(e) {
        if (xn != null)
          return xn;
        var t = ne(e, document.createTextNode("AخA")), n = Fe(t, 0, 1).getBoundingClientRect(), r = Fe(t, 1, 2).getBoundingClientRect();
        return j(e), !n || n.left == n.right ? false : xn = r.right - n.right < 3;
      }
      var ri = `

b`.split(/\n/).length != 3 ? function(e) {
        for (var t = 0, n = [], r = e.length; t <= r; ) {
          var i = e.indexOf(`
`, t);
          i == -1 && (i = e.length);
          var l = e.slice(t, e.charAt(i - 1) == "\r" ? i - 1 : i), u = l.indexOf("\r");
          u != -1 ? (n.push(l.slice(0, u)), t += u + 1) : (n.push(l), t = i + 1);
        }
        return n;
      } : function(e) {
        return e.split(/\r\n?|\n/);
      }, Rr = window.getSelection ? function(e) {
        try {
          return e.selectionStart != e.selectionEnd;
        } catch {
          return false;
        }
      } : function(e) {
        var t;
        try {
          t = e.ownerDocument.selection.createRange();
        } catch {
        }
        return !t || t.parentElement() != e ? false : t.compareEndPoints("StartToEnd", t) != 0;
      }, vr = function() {
        var e = O("div");
        return "oncopy" in e ? true : (e.setAttribute("oncopy", "return;"), typeof e.oncopy == "function");
      }(), gr = null;
      function $i(e) {
        if (gr != null)
          return gr;
        var t = ne(e, O("span", "x")), n = t.getBoundingClientRect(), r = Fe(t, 0, 1).getBoundingClientRect();
        return gr = Math.abs(n.left - r.left) > 1;
      }
      var ir = {}, Hr = {};
      function Ui(e, t) {
        arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), ir[e] = t;
      }
      function Tn(e, t) {
        Hr[e] = t;
      }
      function zt(e) {
        if (typeof e == "string" && Hr.hasOwnProperty(e))
          e = Hr[e];
        else if (e && typeof e.name == "string" && Hr.hasOwnProperty(e.name)) {
          var t = Hr[e.name];
          typeof t == "string" && (t = { name: t }), e = I(t, e), e.name = t.name;
        } else {
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return zt("application/xml");
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return zt("application/json");
        }
        return typeof e == "string" ? { name: e } : e || { name: "null" };
      }
      function xr(e, t) {
        t = zt(t);
        var n = ir[t.name];
        if (!n)
          return xr(e, "text/plain");
        var r = n(e, t);
        if (Wr.hasOwnProperty(t.name)) {
          var i = Wr[t.name];
          for (var l in i)
            i.hasOwnProperty(l) && (r.hasOwnProperty(l) && (r["_" + l] = r[l]), r[l] = i[l]);
        }
        if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps)
          for (var u in t.modeProps)
            r[u] = t.modeProps[u];
        return r;
      }
      var Wr = {};
      function Gi(e, t) {
        var n = Wr.hasOwnProperty(e) ? Wr[e] : Wr[e] = {};
        Se(t, n);
      }
      function Tr(e, t) {
        if (t === true)
          return t;
        if (e.copyState)
          return e.copyState(t);
        var n = {};
        for (var r in t) {
          var i = t[r];
          i instanceof Array && (i = i.concat([])), n[r] = i;
        }
        return n;
      }
      function zr(e, t) {
        for (var n; e.innerMode && (n = e.innerMode(t), !(!n || n.mode == e)); )
          t = n.state, e = n.mode;
        return n || { mode: e, state: t };
      }
      function ni(e, t, n) {
        return e.startState ? e.startState(t, n) : true;
      }
      var nt = function(e, t, n) {
        this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n;
      };
      nt.prototype.eol = function() {
        return this.pos >= this.string.length;
      }, nt.prototype.sol = function() {
        return this.pos == this.lineStart;
      }, nt.prototype.peek = function() {
        return this.string.charAt(this.pos) || void 0;
      }, nt.prototype.next = function() {
        if (this.pos < this.string.length)
          return this.string.charAt(this.pos++);
      }, nt.prototype.eat = function(e) {
        var t = this.string.charAt(this.pos), n;
        if (typeof e == "string" ? n = t == e : n = t && (e.test ? e.test(t) : e(t)), n)
          return ++this.pos, t;
      }, nt.prototype.eatWhile = function(e) {
        for (var t = this.pos; this.eat(e); )
          ;
        return this.pos > t;
      }, nt.prototype.eatSpace = function() {
        for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
          ++this.pos;
        return this.pos > e;
      }, nt.prototype.skipToEnd = function() {
        this.pos = this.string.length;
      }, nt.prototype.skipTo = function(e) {
        var t = this.string.indexOf(e, this.pos);
        if (t > -1)
          return this.pos = t, true;
      }, nt.prototype.backUp = function(e) {
        this.pos -= e;
      }, nt.prototype.column = function() {
        return this.lastColumnPos < this.start && (this.lastColumnValue = ge(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? ge(this.string, this.lineStart, this.tabSize) : 0);
      }, nt.prototype.indentation = function() {
        return ge(this.string, null, this.tabSize) - (this.lineStart ? ge(this.string, this.lineStart, this.tabSize) : 0);
      }, nt.prototype.match = function(e, t, n) {
        if (typeof e == "string") {
          var r = function(u) {
            return n ? u.toLowerCase() : u;
          }, i = this.string.substr(this.pos, e.length);
          if (r(i) == r(e))
            return t !== false && (this.pos += e.length), true;
        } else {
          var l = this.string.slice(this.pos).match(e);
          return l && l.index > 0 ? null : (l && t !== false && (this.pos += l[0].length), l);
        }
      }, nt.prototype.current = function() {
        return this.string.slice(this.start, this.pos);
      }, nt.prototype.hideFirstChars = function(e, t) {
        this.lineStart += e;
        try {
          return t();
        } finally {
          this.lineStart -= e;
        }
      }, nt.prototype.lookAhead = function(e) {
        var t = this.lineOracle;
        return t && t.lookAhead(e);
      }, nt.prototype.baseToken = function() {
        var e = this.lineOracle;
        return e && e.baseToken(this.pos);
      };
      function pe(e, t) {
        if (t -= e.first, t < 0 || t >= e.size)
          throw new Error("There is no line " + (t + e.first) + " in the document.");
        for (var n = e; !n.lines; )
          for (var r = 0; ; ++r) {
            var i = n.children[r], l = i.chunkSize();
            if (t < l) {
              n = i;
              break;
            }
            t -= l;
          }
        return n.lines[t];
      }
      function _r(e, t, n) {
        var r = [], i = t.line;
        return e.iter(t.line, n.line + 1, function(l) {
          var u = l.text;
          i == n.line && (u = u.slice(0, n.ch)), i == t.line && (u = u.slice(t.ch)), r.push(u), ++i;
        }), r;
      }
      function _n(e, t, n) {
        var r = [];
        return e.iter(t, n, function(i) {
          r.push(i.text);
        }), r;
      }
      function Qt(e, t) {
        var n = t - e.height;
        if (n)
          for (var r = e; r; r = r.parent)
            r.height += n;
      }
      function Re(e) {
        if (e.parent == null)
          return null;
        for (var t = e.parent, n = Me(t.lines, e), r = t.parent; r; t = r, r = r.parent)
          for (var i = 0; r.children[i] != t; ++i)
            n += r.children[i].chunkSize();
        return n + t.first;
      }
      function mr(e, t) {
        var n = e.first;
        e:
          do {
            for (var r = 0; r < e.children.length; ++r) {
              var i = e.children[r], l = i.height;
              if (t < l) {
                e = i;
                continue e;
              }
              t -= l, n += i.chunkSize();
            }
            return n;
          } while (!e.lines);
        for (var u = 0; u < e.lines.length; ++u) {
          var c = e.lines[u], d = c.height;
          if (t < d)
            break;
          t -= d;
        }
        return n + u;
      }
      function y(e, t) {
        return t >= e.first && t < e.first + e.size;
      }
      function M(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber));
      }
      function D(e, t, n) {
        if (n === void 0 && (n = null), !(this instanceof D))
          return new D(e, t, n);
        this.line = e, this.ch = t, this.sticky = n;
      }
      function U(e, t) {
        return e.line - t.line || e.ch - t.ch;
      }
      function ke(e, t) {
        return e.sticky == t.sticky && U(e, t) == 0;
      }
      function Ie(e) {
        return D(e.line, e.ch);
      }
      function Be(e, t) {
        return U(e, t) < 0 ? t : e;
      }
      function ht(e, t) {
        return U(e, t) < 0 ? e : t;
      }
      function Vt(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1));
      }
      function xe(e, t) {
        if (t.line < e.first)
          return D(e.first, 0);
        var n = e.first + e.size - 1;
        return t.line > n ? D(n, pe(e, n).text.length) : Cc(t, pe(e, t.line).text.length);
      }
      function Cc(e, t) {
        var n = e.ch;
        return n == null || n > t ? D(e.line, t) : n < 0 ? D(e.line, 0) : e;
      }
      function Rl(e, t) {
        for (var n = [], r = 0; r < t.length; r++)
          n[r] = xe(e, t[r]);
        return n;
      }
      var Vi = function(e, t) {
        this.state = e, this.lookAhead = t;
      }, yr = function(e, t, n, r) {
        this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
      };
      yr.prototype.lookAhead = function(e) {
        var t = this.doc.getLine(this.line + e);
        return t != null && e > this.maxLookAhead && (this.maxLookAhead = e), t;
      }, yr.prototype.baseToken = function(e) {
        if (!this.baseTokens)
          return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
        var t = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: t && t.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - e
        };
      }, yr.prototype.nextLine = function() {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }, yr.fromSaved = function(e, t, n) {
        return t instanceof Vi ? new yr(e, Tr(e.mode, t.state), n, t.lookAhead) : new yr(e, Tr(e.mode, t), n);
      }, yr.prototype.save = function(e) {
        var t = e !== false ? Tr(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new Vi(t, this.maxLookAhead) : t;
      };
      function Hl(e, t, n, r) {
        var i = [e.state.modeGen], l = {};
        Gl(
          e,
          t.text,
          e.doc.mode,
          n,
          function(v, k) {
            return i.push(v, k);
          },
          l,
          r
        );
        for (var u = n.state, c = function(v) {
          n.baseTokens = i;
          var k = e.state.overlays[v], L = 1, P = 0;
          n.state = true, Gl(e, t.text, k.mode, n, function(F, G) {
            for (var q = L; P < F; ) {
              var ie = i[L];
              ie > F && i.splice(L, 1, F, i[L + 1], ie), L += 2, P = Math.min(F, ie);
            }
            if (G)
              if (k.opaque)
                i.splice(q, L - q, F, "overlay " + G), L = q + 2;
              else
                for (; q < L; q += 2) {
                  var se = i[q + 1];
                  i[q + 1] = (se ? se + " " : "") + "overlay " + G;
                }
          }, l), n.state = u, n.baseTokens = null, n.baseTokenPos = 1;
        }, d = 0; d < e.state.overlays.length; ++d)
          c(d);
        return { styles: i, classes: l.bgClass || l.textClass ? l : null };
      }
      function Wl(e, t, n) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
          var r = ii(e, Re(t)), i = t.text.length > e.options.maxHighlightLength && Tr(e.doc.mode, r.state), l = Hl(e, t, r);
          i && (r.state = i), t.stateAfter = r.save(!i), t.styles = l.styles, l.classes ? t.styleClasses = l.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
        }
        return t.styles;
      }
      function ii(e, t, n) {
        var r = e.doc, i = e.display;
        if (!r.mode.startState)
          return new yr(r, true, t);
        var l = kc(e, t, n), u = l > r.first && pe(r, l - 1).stateAfter, c = u ? yr.fromSaved(r, u, l) : new yr(r, ni(r.mode), l);
        return r.iter(l, t, function(d) {
          ra(e, d.text, c);
          var v = c.line;
          d.stateAfter = v == t - 1 || v % 5 == 0 || v >= i.viewFrom && v < i.viewTo ? c.save() : null, c.nextLine();
        }), n && (r.modeFrontier = c.line), c;
      }
      function ra(e, t, n, r) {
        var i = e.doc.mode, l = new nt(t, e.options.tabSize, n);
        for (l.start = l.pos = r || 0, t == "" && zl(i, n.state); !l.eol(); )
          na(i, l, n.state), l.start = l.pos;
      }
      function zl(e, t) {
        if (e.blankLine)
          return e.blankLine(t);
        if (e.innerMode) {
          var n = zr(e, t);
          if (n.mode.blankLine)
            return n.mode.blankLine(n.state);
        }
      }
      function na(e, t, n, r) {
        for (var i = 0; i < 10; i++) {
          r && (r[0] = zr(e, n).mode);
          var l = e.token(t, n);
          if (t.pos > t.start)
            return l;
        }
        throw new Error("Mode " + e.name + " failed to advance stream.");
      }
      var jl = function(e, t, n) {
        this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n;
      };
      function $l(e, t, n, r) {
        var i = e.doc, l = i.mode, u;
        t = xe(i, t);
        var c = pe(i, t.line), d = ii(e, t.line, n), v = new nt(c.text, e.options.tabSize, d), k;
        for (r && (k = []); (r || v.pos < t.ch) && !v.eol(); )
          v.start = v.pos, u = na(l, v, d.state), r && k.push(new jl(v, u, Tr(i.mode, d.state)));
        return r ? k : new jl(v, u, d.state);
      }
      function Ul(e, t) {
        if (e)
          for (; ; ) {
            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!n)
              break;
            e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
            var r = n[1] ? "bgClass" : "textClass";
            t[r] == null ? t[r] = n[2] : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) || (t[r] += " " + n[2]);
          }
        return e;
      }
      function Gl(e, t, n, r, i, l, u) {
        var c = n.flattenSpans;
        c == null && (c = e.options.flattenSpans);
        var d = 0, v = null, k = new nt(t, e.options.tabSize, r), L, P = e.options.addModeClass && [null];
        for (t == "" && Ul(zl(n, r.state), l); !k.eol(); ) {
          if (k.pos > e.options.maxHighlightLength ? (c = false, u && ra(e, t, r, k.pos), k.pos = t.length, L = null) : L = Ul(na(n, k, r.state, P), l), P) {
            var F = P[0].name;
            F && (L = "m-" + (L ? F + " " + L : F));
          }
          if (!c || v != L) {
            for (; d < k.start; )
              d = Math.min(k.start, d + 5e3), i(d, v);
            v = L;
          }
          k.start = k.pos;
        }
        for (; d < k.pos; ) {
          var G = Math.min(k.pos, d + 5e3);
          i(G, v), d = G;
        }
      }
      function kc(e, t, n) {
        for (var r, i, l = e.doc, u = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), c = t; c > u; --c) {
          if (c <= l.first)
            return l.first;
          var d = pe(l, c - 1), v = d.stateAfter;
          if (v && (!n || c + (v instanceof Vi ? v.lookAhead : 0) <= l.modeFrontier))
            return c;
          var k = ge(d.text, null, e.options.tabSize);
          (i == null || r > k) && (i = c - 1, r = k);
        }
        return i;
      }
      function xc(e, t) {
        if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
          for (var n = e.first, r = t - 1; r > n; r--) {
            var i = pe(e, r).stateAfter;
            if (i && (!(i instanceof Vi) || r + i.lookAhead < t)) {
              n = r + 1;
              break;
            }
          }
          e.highlightFrontier = Math.min(e.highlightFrontier, n);
        }
      }
      var Vl = false, Lr = false;
      function Tc() {
        Vl = true;
      }
      function _c() {
        Lr = true;
      }
      function Ki(e, t, n) {
        this.marker = e, this.from = t, this.to = n;
      }
      function oi(e, t) {
        if (e)
          for (var n = 0; n < e.length; ++n) {
            var r = e[n];
            if (r.marker == t)
              return r;
          }
      }
      function Lc(e, t) {
        for (var n, r = 0; r < e.length; ++r)
          e[r] != t && (n || (n = [])).push(e[r]);
        return n;
      }
      function Mc(e, t, n) {
        var r = n && window.WeakSet && (n.markedSpans || (n.markedSpans = /* @__PURE__ */ new WeakSet()));
        r && e.markedSpans && r.has(e.markedSpans) ? e.markedSpans.push(t) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], r && r.add(e.markedSpans)), t.marker.attachLine(e);
      }
      function Ec(e, t, n) {
        var r;
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var l = e[i], u = l.marker, c = l.from == null || (u.inclusiveLeft ? l.from <= t : l.from < t);
            if (c || l.from == t && u.type == "bookmark" && (!n || !l.marker.insertLeft)) {
              var d = l.to == null || (u.inclusiveRight ? l.to >= t : l.to > t);
              (r || (r = [])).push(new Ki(u, l.from, d ? null : l.to));
            }
          }
        return r;
      }
      function Oc(e, t, n) {
        var r;
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var l = e[i], u = l.marker, c = l.to == null || (u.inclusiveRight ? l.to >= t : l.to > t);
            if (c || l.from == t && u.type == "bookmark" && (!n || l.marker.insertLeft)) {
              var d = l.from == null || (u.inclusiveLeft ? l.from <= t : l.from < t);
              (r || (r = [])).push(new Ki(
                u,
                d ? null : l.from - t,
                l.to == null ? null : l.to - t
              ));
            }
          }
        return r;
      }
      function ia(e, t) {
        if (t.full)
          return null;
        var n = y(e, t.from.line) && pe(e, t.from.line).markedSpans, r = y(e, t.to.line) && pe(e, t.to.line).markedSpans;
        if (!n && !r)
          return null;
        var i = t.from.ch, l = t.to.ch, u = U(t.from, t.to) == 0, c = Ec(n, i, u), d = Oc(r, l, u), v = t.text.length == 1, k = Ee(t.text).length + (v ? i : 0);
        if (c)
          for (var L = 0; L < c.length; ++L) {
            var P = c[L];
            if (P.to == null) {
              var F = oi(d, P.marker);
              F ? v && (P.to = F.to == null ? null : F.to + k) : P.to = i;
            }
          }
        if (d)
          for (var G = 0; G < d.length; ++G) {
            var q = d[G];
            if (q.to != null && (q.to += k), q.from == null) {
              var ie = oi(c, q.marker);
              ie || (q.from = k, v && (c || (c = [])).push(q));
            } else
              q.from += k, v && (c || (c = [])).push(q);
          }
        c && (c = Kl(c)), d && d != c && (d = Kl(d));
        var se = [c];
        if (!v) {
          var he = t.text.length - 2, ue;
          if (he > 0 && c)
            for (var de = 0; de < c.length; ++de)
              c[de].to == null && (ue || (ue = [])).push(new Ki(c[de].marker, null, null));
          for (var be = 0; be < he; ++be)
            se.push(ue);
          se.push(d);
        }
        return se;
      }
      function Kl(e) {
        for (var t = 0; t < e.length; ++t) {
          var n = e[t];
          n.from != null && n.from == n.to && n.marker.clearWhenEmpty !== false && e.splice(t--, 1);
        }
        return e.length ? e : null;
      }
      function Nc(e, t, n) {
        var r = null;
        if (e.iter(t.line, n.line + 1, function(F) {
          if (F.markedSpans)
            for (var G = 0; G < F.markedSpans.length; ++G) {
              var q = F.markedSpans[G].marker;
              q.readOnly && (!r || Me(r, q) == -1) && (r || (r = [])).push(q);
            }
        }), !r)
          return null;
        for (var i = [{ from: t, to: n }], l = 0; l < r.length; ++l)
          for (var u = r[l], c = u.find(0), d = 0; d < i.length; ++d) {
            var v = i[d];
            if (!(U(v.to, c.from) < 0 || U(v.from, c.to) > 0)) {
              var k = [d, 1], L = U(v.from, c.from), P = U(v.to, c.to);
              (L < 0 || !u.inclusiveLeft && !L) && k.push({ from: v.from, to: c.from }), (P > 0 || !u.inclusiveRight && !P) && k.push({ from: c.to, to: v.to }), i.splice.apply(i, k), d += k.length - 3;
            }
          }
        return i;
      }
      function Yl(e) {
        var t = e.markedSpans;
        if (t) {
          for (var n = 0; n < t.length; ++n)
            t[n].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function Xl(e, t) {
        if (t) {
          for (var n = 0; n < t.length; ++n)
            t[n].marker.attachLine(e);
          e.markedSpans = t;
        }
      }
      function Yi(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function Xi(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function oa(e, t) {
        var n = e.lines.length - t.lines.length;
        if (n != 0)
          return n;
        var r = e.find(), i = t.find(), l = U(r.from, i.from) || Yi(e) - Yi(t);
        if (l)
          return -l;
        var u = U(r.to, i.to) || Xi(e) - Xi(t);
        return u || t.id - e.id;
      }
      function ql(e, t) {
        var n = Lr && e.markedSpans, r;
        if (n)
          for (var i = void 0, l = 0; l < n.length; ++l)
            i = n[l], i.marker.collapsed && (t ? i.from : i.to) == null && (!r || oa(r, i.marker) < 0) && (r = i.marker);
        return r;
      }
      function Jl(e) {
        return ql(e, true);
      }
      function qi(e) {
        return ql(e, false);
      }
      function Ac(e, t) {
        var n = Lr && e.markedSpans, r;
        if (n)
          for (var i = 0; i < n.length; ++i) {
            var l = n[i];
            l.marker.collapsed && (l.from == null || l.from < t) && (l.to == null || l.to > t) && (!r || oa(r, l.marker) < 0) && (r = l.marker);
          }
        return r;
      }
      function Zl(e, t, n, r, i) {
        var l = pe(e, t), u = Lr && l.markedSpans;
        if (u)
          for (var c = 0; c < u.length; ++c) {
            var d = u[c];
            if (d.marker.collapsed) {
              var v = d.marker.find(0), k = U(v.from, n) || Yi(d.marker) - Yi(i), L = U(v.to, r) || Xi(d.marker) - Xi(i);
              if (!(k >= 0 && L <= 0 || k <= 0 && L >= 0) && (k <= 0 && (d.marker.inclusiveRight && i.inclusiveLeft ? U(v.to, n) >= 0 : U(v.to, n) > 0) || k >= 0 && (d.marker.inclusiveRight && i.inclusiveLeft ? U(v.from, r) <= 0 : U(v.from, r) < 0)))
                return true;
            }
          }
      }
      function or(e) {
        for (var t; t = Jl(e); )
          e = t.find(-1, true).line;
        return e;
      }
      function Dc(e) {
        for (var t; t = qi(e); )
          e = t.find(1, true).line;
        return e;
      }
      function Ic(e) {
        for (var t, n; t = qi(e); )
          e = t.find(1, true).line, (n || (n = [])).push(e);
        return n;
      }
      function aa(e, t) {
        var n = pe(e, t), r = or(n);
        return n == r ? t : Re(r);
      }
      function Ql(e, t) {
        if (t > e.lastLine())
          return t;
        var n = pe(e, t), r;
        if (!jr(e, n))
          return t;
        for (; r = qi(n); )
          n = r.find(1, true).line;
        return Re(n) + 1;
      }
      function jr(e, t) {
        var n = Lr && t.markedSpans;
        if (n) {
          for (var r = void 0, i = 0; i < n.length; ++i)
            if (r = n[i], !!r.marker.collapsed) {
              if (r.from == null)
                return true;
              if (!r.marker.widgetNode && r.from == 0 && r.marker.inclusiveLeft && la(e, t, r))
                return true;
            }
        }
      }
      function la(e, t, n) {
        if (n.to == null) {
          var r = n.marker.find(1, true);
          return la(e, r.line, oi(r.line.markedSpans, n.marker));
        }
        if (n.marker.inclusiveRight && n.to == t.text.length)
          return true;
        for (var i = void 0, l = 0; l < t.markedSpans.length; ++l)
          if (i = t.markedSpans[l], i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (i.to == null || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && la(e, t, i))
            return true;
      }
      function Mr(e) {
        e = or(e);
        for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
          var i = n.lines[r];
          if (i == e)
            break;
          t += i.height;
        }
        for (var l = n.parent; l; n = l, l = n.parent)
          for (var u = 0; u < l.children.length; ++u) {
            var c = l.children[u];
            if (c == n)
              break;
            t += c.height;
          }
        return t;
      }
      function Ji(e) {
        if (e.height == 0)
          return 0;
        for (var t = e.text.length, n, r = e; n = Jl(r); ) {
          var i = n.find(0, true);
          r = i.from.line, t += i.from.ch - i.to.ch;
        }
        for (r = e; n = qi(r); ) {
          var l = n.find(0, true);
          t -= r.text.length - l.from.ch, r = l.to.line, t += r.text.length - l.to.ch;
        }
        return t;
      }
      function sa(e) {
        var t = e.display, n = e.doc;
        t.maxLine = pe(n, n.first), t.maxLineLength = Ji(t.maxLine), t.maxLineChanged = true, n.iter(function(r) {
          var i = Ji(r);
          i > t.maxLineLength && (t.maxLineLength = i, t.maxLine = r);
        });
      }
      var Ln = function(e, t, n) {
        this.text = e, Xl(this, t), this.height = n ? n(this) : 1;
      };
      Ln.prototype.lineNo = function() {
        return Re(this);
      }, ot(Ln);
      function Fc(e, t, n, r) {
        e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), e.order != null && (e.order = null), Yl(e), Xl(e, n);
        var i = r ? r(e) : 1;
        i != e.height && Qt(e, i);
      }
      function Pc(e) {
        e.parent = null, Yl(e);
      }
      var Bc = {}, Rc = {};
      function es(e, t) {
        if (!e || /^\s*$/.test(e))
          return null;
        var n = t.addModeClass ? Rc : Bc;
        return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
      }
      function ts(e, t) {
        var n = Ve("span", null, null, b ? "padding-right: .1px" : null), r = {
          pre: Ve("pre", [n], "CodeMirror-line"),
          content: n,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: false,
          splitSpaces: e.getOption("lineWrapping")
        };
        t.measure = {};
        for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
          var l = i ? t.rest[i - 1] : t.line, u = void 0;
          r.pos = 0, r.addToken = Wc, ji(e.display.measure) && (u = Ue(l, e.doc.direction)) && (r.addToken = jc(r.addToken, u)), r.map = [];
          var c = t != e.display.externalMeasured && Re(l);
          $c(l, r, Wl(e, l, c)), l.styleClasses && (l.styleClasses.bgClass && (r.bgClass = Gt(l.styleClasses.bgClass, r.bgClass || "")), l.styleClasses.textClass && (r.textClass = Gt(l.styleClasses.textClass, r.textClass || ""))), r.map.length == 0 && r.map.push(0, 0, r.content.appendChild(ta(e.display.measure))), i == 0 ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
        }
        if (b) {
          var d = r.content.lastChild;
          (/\bcm-tab\b/.test(d.className) || d.querySelector && d.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
        }
        return We(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = Gt(r.pre.className, r.textClass || "")), r;
      }
      function Hc(e) {
        var t = O("span", "•", "cm-invalidchar");
        return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t;
      }
      function Wc(e, t, n, r, i, l, u) {
        if (t) {
          var c = e.splitSpaces ? zc(t, e.trailingSpace) : t, d = e.cm.state.specialChars, v = false, k;
          if (!d.test(t))
            e.col += t.length, k = document.createTextNode(c), e.map.push(e.pos, e.pos + t.length, k), C && w < 9 && (v = true), e.pos += t.length;
          else {
            k = document.createDocumentFragment();
            for (var L = 0; ; ) {
              d.lastIndex = L;
              var P = d.exec(t), F = P ? P.index - L : t.length - L;
              if (F) {
                var G = document.createTextNode(c.slice(L, L + F));
                C && w < 9 ? k.appendChild(O("span", [G])) : k.appendChild(G), e.map.push(e.pos, e.pos + F, G), e.col += F, e.pos += F;
              }
              if (!P)
                break;
              L += F + 1;
              var q = void 0;
              if (P[0] == "	") {
                var ie = e.cm.options.tabSize, se = ie - e.col % ie;
                q = k.appendChild(O("span", Jt(se), "cm-tab")), q.setAttribute("role", "presentation"), q.setAttribute("cm-text", "	"), e.col += se;
              } else
                P[0] == "\r" || P[0] == `
` ? (q = k.appendChild(O("span", P[0] == "\r" ? "␍" : "␤", "cm-invalidchar")), q.setAttribute("cm-text", P[0]), e.col += 1) : (q = e.cm.options.specialCharPlaceholder(P[0]), q.setAttribute("cm-text", P[0]), C && w < 9 ? k.appendChild(O("span", [q])) : k.appendChild(q), e.col += 1);
              e.map.push(e.pos, e.pos + 1, q), e.pos++;
            }
          }
          if (e.trailingSpace = c.charCodeAt(t.length - 1) == 32, n || r || i || v || l || u) {
            var he = n || "";
            r && (he += r), i && (he += i);
            var ue = O("span", [k], he, l);
            if (u)
              for (var de in u)
                u.hasOwnProperty(de) && de != "style" && de != "class" && ue.setAttribute(de, u[de]);
            return e.content.appendChild(ue);
          }
          e.content.appendChild(k);
        }
      }
      function zc(e, t) {
        if (e.length > 1 && !/  /.test(e))
          return e;
        for (var n = t, r = "", i = 0; i < e.length; i++) {
          var l = e.charAt(i);
          l == " " && n && (i == e.length - 1 || e.charCodeAt(i + 1) == 32) && (l = " "), r += l, n = l == " ";
        }
        return r;
      }
      function jc(e, t) {
        return function(n, r, i, l, u, c, d) {
          i = i ? i + " cm-force-border" : "cm-force-border";
          for (var v = n.pos, k = v + r.length; ; ) {
            for (var L = void 0, P = 0; P < t.length && (L = t[P], !(L.to > v && L.from <= v)); P++)
              ;
            if (L.to >= k)
              return e(n, r, i, l, u, c, d);
            e(n, r.slice(0, L.to - v), i, l, null, c, d), l = null, r = r.slice(L.to - v), v = L.to;
          }
        };
      }
      function rs(e, t, n, r) {
        var i = !r && n.widgetNode;
        i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = false;
      }
      function $c(e, t, n) {
        var r = e.markedSpans, i = e.text, l = 0;
        if (!r) {
          for (var u = 1; u < n.length; u += 2)
            t.addToken(t, i.slice(l, l = n[u]), es(n[u + 1], t.cm.options));
          return;
        }
        for (var c = i.length, d = 0, v = 1, k = "", L, P, F = 0, G, q, ie, se, he; ; ) {
          if (F == d) {
            G = q = ie = P = "", he = null, se = null, F = 1 / 0;
            for (var ue = [], de = void 0, be = 0; be < r.length; ++be) {
              var me = r[be], Le = me.marker;
              if (Le.type == "bookmark" && me.from == d && Le.widgetNode)
                ue.push(Le);
              else if (me.from <= d && (me.to == null || me.to > d || Le.collapsed && me.to == d && me.from == d)) {
                if (me.to != null && me.to != d && F > me.to && (F = me.to, q = ""), Le.className && (G += " " + Le.className), Le.css && (P = (P ? P + ";" : "") + Le.css), Le.startStyle && me.from == d && (ie += " " + Le.startStyle), Le.endStyle && me.to == F && (de || (de = [])).push(Le.endStyle, me.to), Le.title && ((he || (he = {})).title = Le.title), Le.attributes)
                  for (var Ge in Le.attributes)
                    (he || (he = {}))[Ge] = Le.attributes[Ge];
                Le.collapsed && (!se || oa(se.marker, Le) < 0) && (se = me);
              } else
                me.from > d && F > me.from && (F = me.from);
            }
            if (de)
              for (var bt = 0; bt < de.length; bt += 2)
                de[bt + 1] == F && (q += " " + de[bt]);
            if (!se || se.from == d)
              for (var et = 0; et < ue.length; ++et)
                rs(t, 0, ue[et]);
            if (se && (se.from || 0) == d) {
              if (rs(
                t,
                (se.to == null ? c + 1 : se.to) - d,
                se.marker,
                se.from == null
              ), se.to == null)
                return;
              se.to == d && (se = false);
            }
          }
          if (d >= c)
            break;
          for (var $t = Math.min(c, F); ; ) {
            if (k) {
              var Ft = d + k.length;
              if (!se) {
                var st = Ft > $t ? k.slice(0, $t - d) : k;
                t.addToken(
                  t,
                  st,
                  L ? L + G : G,
                  ie,
                  d + st.length == F ? q : "",
                  P,
                  he
                );
              }
              if (Ft >= $t) {
                k = k.slice($t - d), d = $t;
                break;
              }
              d = Ft, ie = "";
            }
            k = i.slice(l, l = n[v++]), L = es(n[v++], t.cm.options);
          }
        }
      }
      function ns(e, t, n) {
        this.line = t, this.rest = Ic(t), this.size = this.rest ? Re(Ee(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = jr(e, t);
      }
      function Zi(e, t, n) {
        for (var r = [], i, l = t; l < n; l = i) {
          var u = new ns(e.doc, pe(e.doc, l), l);
          i = l + u.size, r.push(u);
        }
        return r;
      }
      var Mn = null;
      function Uc(e) {
        Mn ? Mn.ops.push(e) : e.ownsGroup = Mn = {
          ops: [e],
          delayedCallbacks: []
        };
      }
      function Gc(e) {
        var t = e.delayedCallbacks, n = 0;
        do {
          for (; n < t.length; n++)
            t[n].call(null);
          for (var r = 0; r < e.ops.length; r++) {
            var i = e.ops[r];
            if (i.cursorActivityHandlers)
              for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
          }
        } while (n < t.length);
      }
      function Vc(e, t) {
        var n = e.ownsGroup;
        if (n)
          try {
            Gc(n);
          } finally {
            Mn = null, t(n);
          }
      }
      var ai = null;
      function gt(e, t) {
        var n = Br(e, t);
        if (n.length) {
          var r = Array.prototype.slice.call(arguments, 2), i;
          Mn ? i = Mn.delayedCallbacks : ai ? i = ai : (i = ai = [], setTimeout(Kc, 0));
          for (var l = function(c) {
            i.push(function() {
              return n[c].apply(null, r);
            });
          }, u = 0; u < n.length; ++u)
            l(u);
        }
      }
      function Kc() {
        var e = ai;
        ai = null;
        for (var t = 0; t < e.length; ++t)
          e[t]();
      }
      function is(e, t, n, r) {
        for (var i = 0; i < t.changes.length; i++) {
          var l = t.changes[i];
          l == "text" ? Xc(e, t) : l == "gutter" ? as(e, t, n, r) : l == "class" ? ua(e, t) : l == "widget" && qc(e, t, r);
        }
        t.changes = null;
      }
      function li(e) {
        return e.node == e.text && (e.node = O("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), C && w < 8 && (e.node.style.zIndex = 2)), e.node;
      }
      function Yc(e, t) {
        var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
        if (n && (n += " CodeMirror-linebackground"), t.background)
          n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);
        else if (n) {
          var r = li(t);
          t.background = r.insertBefore(O("div", null, n), r.firstChild), e.display.input.setUneditable(t.background);
        }
      }
      function os(e, t) {
        var n = e.display.externalMeasured;
        return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : ts(e, t);
      }
      function Xc(e, t) {
        var n = t.text.className, r = os(e, t);
        t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, ua(e, t)) : n && (t.text.className = n);
      }
      function ua(e, t) {
        Yc(e, t), t.line.wrapClass ? li(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
        var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
        t.text.className = n || "";
      }
      function as(e, t, n, r) {
        if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
          var i = li(t);
          t.gutterBackground = O(
            "div",
            null,
            "CodeMirror-gutter-background " + t.line.gutterClass,
            "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"
          ), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text);
        }
        var l = t.line.gutterMarkers;
        if (e.options.lineNumbers || l) {
          var u = li(t), c = t.gutter = O("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
          if (c.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(c), u.insertBefore(c, t.text), t.line.gutterClass && (c.className += " " + t.line.gutterClass), e.options.lineNumbers && (!l || !l["CodeMirror-linenumbers"]) && (t.lineNumber = c.appendChild(
            O(
              "div",
              M(e.options, n),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"
            )
          )), l)
            for (var d = 0; d < e.display.gutterSpecs.length; ++d) {
              var v = e.display.gutterSpecs[d].className, k = l.hasOwnProperty(v) && l[v];
              k && c.appendChild(O(
                "div",
                [k],
                "CodeMirror-gutter-elt",
                "left: " + r.gutterLeft[v] + "px; width: " + r.gutterWidth[v] + "px"
              ));
            }
        }
      }
      function qc(e, t, n) {
        t.alignable && (t.alignable = null);
        for (var r = ae("CodeMirror-linewidget"), i = t.node.firstChild, l = void 0; i; i = l)
          l = i.nextSibling, r.test(i.className) && t.node.removeChild(i);
        ls(e, t, n);
      }
      function Jc(e, t, n, r) {
        var i = os(e, t);
        return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), ua(e, t), as(e, t, n, r), ls(e, t, r), t.node;
      }
      function ls(e, t, n) {
        if (ss(e, t.line, t, n, true), t.rest)
          for (var r = 0; r < t.rest.length; r++)
            ss(e, t.rest[r], t, n, false);
      }
      function ss(e, t, n, r, i) {
        if (t.widgets)
          for (var l = li(n), u = 0, c = t.widgets; u < c.length; ++u) {
            var d = c[u], v = O("div", [d.node], "CodeMirror-linewidget" + (d.className ? " " + d.className : ""));
            d.handleMouseEvents || v.setAttribute("cm-ignore-events", "true"), Zc(d, v, n, r), e.display.input.setUneditable(v), i && d.above ? l.insertBefore(v, n.gutter || n.text) : l.appendChild(v), gt(d, "redraw");
          }
      }
      function Zc(e, t, n, r) {
        if (e.noHScroll) {
          (n.alignable || (n.alignable = [])).push(t);
          var i = r.wrapperWidth;
          t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px";
        }
        e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
      }
      function si(e) {
        if (e.height != null)
          return e.height;
        var t = e.doc.cm;
        if (!t)
          return 0;
        if (!St(document.body, e.node)) {
          var n = "position: relative;";
          e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), ne(t.display.measure, O("div", [e.node], null, n));
        }
        return e.height = e.node.parentNode.offsetHeight;
      }
      function Er(e, t) {
        for (var n = At(t); n != e.wrapper; n = n.parentNode)
          if (!n || n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true" || n.parentNode == e.sizer && n != e.mover)
            return true;
      }
      function Qi(e) {
        return e.lineSpace.offsetTop;
      }
      function fa(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function us(e) {
        if (e.cachedPaddingH)
          return e.cachedPaddingH;
        var t = ne(e.measure, O("pre", "x", "CodeMirror-line-like")), n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle, r = { left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight) };
        return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r;
      }
      function br(e) {
        return an - e.display.nativeBarWidth;
      }
      function sn(e) {
        return e.display.scroller.clientWidth - br(e) - e.display.barWidth;
      }
      function ca(e) {
        return e.display.scroller.clientHeight - br(e) - e.display.barHeight;
      }
      function Qc(e, t, n) {
        var r = e.options.lineWrapping, i = r && sn(e);
        if (!t.measure.heights || r && t.measure.width != i) {
          var l = t.measure.heights = [];
          if (r) {
            t.measure.width = i;
            for (var u = t.text.firstChild.getClientRects(), c = 0; c < u.length - 1; c++) {
              var d = u[c], v = u[c + 1];
              Math.abs(d.bottom - v.bottom) > 2 && l.push((d.bottom + v.top) / 2 - n.top);
            }
          }
          l.push(n.bottom - n.top);
        }
      }
      function fs(e, t, n) {
        if (e.line == t)
          return { map: e.measure.map, cache: e.measure.cache };
        if (e.rest) {
          for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == t)
              return { map: e.measure.maps[r], cache: e.measure.caches[r] };
          for (var i = 0; i < e.rest.length; i++)
            if (Re(e.rest[i]) > n)
              return { map: e.measure.maps[i], cache: e.measure.caches[i], before: true };
        }
      }
      function eh(e, t) {
        t = or(t);
        var n = Re(t), r = e.display.externalMeasured = new ns(e.doc, t, n);
        r.lineN = n;
        var i = r.built = ts(e, r);
        return r.text = i.pre, ne(e.display.lineMeasure, i.pre), r;
      }
      function cs(e, t, n, r) {
        return wr(e, En(e, t), n, r);
      }
      function ha(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
          return e.display.view[cn(e, t)];
        var n = e.display.externalMeasured;
        if (n && t >= n.lineN && t < n.lineN + n.size)
          return n;
      }
      function En(e, t) {
        var n = Re(t), r = ha(e, n);
        r && !r.text ? r = null : r && r.changes && (is(e, r, n, ma(e)), e.curOp.forceUpdate = true), r || (r = eh(e, t));
        var i = fs(r, t, n);
        return {
          line: t,
          view: r,
          rect: null,
          map: i.map,
          cache: i.cache,
          before: i.before,
          hasHeights: false
        };
      }
      function wr(e, t, n, r, i) {
        t.before && (n = -1);
        var l = n + (r || ""), u;
        return t.cache.hasOwnProperty(l) ? u = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (Qc(e, t.view, t.rect), t.hasHeights = true), u = rh(e, t, n, r), u.bogus || (t.cache[l] = u)), {
          left: u.left,
          right: u.right,
          top: i ? u.rtop : u.top,
          bottom: i ? u.rbottom : u.bottom
        };
      }
      var hs = { left: 0, right: 0, top: 0, bottom: 0 };
      function ds(e, t, n) {
        for (var r, i, l, u, c, d, v = 0; v < e.length; v += 3)
          if (c = e[v], d = e[v + 1], t < c ? (i = 0, l = 1, u = "left") : t < d ? (i = t - c, l = i + 1) : (v == e.length - 3 || t == d && e[v + 3] > t) && (l = d - c, i = l - 1, t >= d && (u = "right")), i != null) {
            if (r = e[v + 2], c == d && n == (r.insertLeft ? "left" : "right") && (u = n), n == "left" && i == 0)
              for (; v && e[v - 2] == e[v - 3] && e[v - 1].insertLeft; )
                r = e[(v -= 3) + 2], u = "left";
            if (n == "right" && i == d - c)
              for (; v < e.length - 3 && e[v + 3] == e[v + 4] && !e[v + 5].insertLeft; )
                r = e[(v += 3) + 2], u = "right";
            break;
          }
        return { node: r, start: i, end: l, collapse: u, coverStart: c, coverEnd: d };
      }
      function th(e, t) {
        var n = hs;
        if (t == "left")
          for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++)
            ;
        else
          for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--)
            ;
        return n;
      }
      function rh(e, t, n, r) {
        var i = ds(t.map, n, r), l = i.node, u = i.start, c = i.end, d = i.collapse, v;
        if (l.nodeType == 3) {
          for (var k = 0; k < 4; k++) {
            for (; u && oe(t.line.text.charAt(i.coverStart + u)); )
              --u;
            for (; i.coverStart + c < i.coverEnd && oe(t.line.text.charAt(i.coverStart + c)); )
              ++c;
            if (C && w < 9 && u == 0 && c == i.coverEnd - i.coverStart ? v = l.parentNode.getBoundingClientRect() : v = th(Fe(l, u, c).getClientRects(), r), v.left || v.right || u == 0)
              break;
            c = u, u = u - 1, d = "right";
          }
          C && w < 11 && (v = nh(e.display.measure, v));
        } else {
          u > 0 && (d = r = "right");
          var L;
          e.options.lineWrapping && (L = l.getClientRects()).length > 1 ? v = L[r == "right" ? L.length - 1 : 0] : v = l.getBoundingClientRect();
        }
        if (C && w < 9 && !u && (!v || !v.left && !v.right)) {
          var P = l.parentNode.getClientRects()[0];
          P ? v = { left: P.left, right: P.left + Nn(e.display), top: P.top, bottom: P.bottom } : v = hs;
        }
        for (var F = v.top - t.rect.top, G = v.bottom - t.rect.top, q = (F + G) / 2, ie = t.view.measure.heights, se = 0; se < ie.length - 1 && !(q < ie[se]); se++)
          ;
        var he = se ? ie[se - 1] : 0, ue = ie[se], de = {
          left: (d == "right" ? v.right : v.left) - t.rect.left,
          right: (d == "left" ? v.left : v.right) - t.rect.left,
          top: he,
          bottom: ue
        };
        return !v.left && !v.right && (de.bogus = true), e.options.singleCursorHeightPerLine || (de.rtop = F, de.rbottom = G), de;
      }
      function nh(e, t) {
        if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !$i(e))
          return t;
        var n = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
        return {
          left: t.left * n,
          right: t.right * n,
          top: t.top * r,
          bottom: t.bottom * r
        };
      }
      function ps(e) {
        if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
          for (var t = 0; t < e.rest.length; t++)
            e.measure.caches[t] = {};
      }
      function vs(e) {
        e.display.externalMeasure = null, j(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++)
          ps(e.display.view[t]);
      }
      function ui(e) {
        vs(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = true), e.display.lineNumChars = null;
      }
      function gs(e) {
        return T && X ? -(e.body.getBoundingClientRect().left - parseInt(getComputedStyle(e.body).marginLeft)) : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft;
      }
      function ms(e) {
        return T && X ? -(e.body.getBoundingClientRect().top - parseInt(getComputedStyle(e.body).marginTop)) : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop;
      }
      function da(e) {
        var t = or(e), n = t.widgets, r = 0;
        if (n)
          for (var i = 0; i < n.length; ++i)
            n[i].above && (r += si(n[i]));
        return r;
      }
      function eo(e, t, n, r, i) {
        if (!i) {
          var l = da(t);
          n.top += l, n.bottom += l;
        }
        if (r == "line")
          return n;
        r || (r = "local");
        var u = Mr(t);
        if (r == "local" ? u += Qi(e.display) : u -= e.display.viewOffset, r == "page" || r == "window") {
          var c = e.display.lineSpace.getBoundingClientRect();
          u += c.top + (r == "window" ? 0 : ms(Qe(e)));
          var d = c.left + (r == "window" ? 0 : gs(Qe(e)));
          n.left += d, n.right += d;
        }
        return n.top += u, n.bottom += u, n;
      }
      function ys(e, t, n) {
        if (n == "div")
          return t;
        var r = t.left, i = t.top;
        if (n == "page")
          r -= gs(Qe(e)), i -= ms(Qe(e));
        else if (n == "local" || !n) {
          var l = e.display.sizer.getBoundingClientRect();
          r += l.left, i += l.top;
        }
        var u = e.display.lineSpace.getBoundingClientRect();
        return { left: r - u.left, top: i - u.top };
      }
      function to(e, t, n, r, i) {
        return r || (r = pe(e.doc, t.line)), eo(e, r, cs(e, r, t.ch, i), n);
      }
      function ar(e, t, n, r, i, l) {
        r = r || pe(e.doc, t.line), i || (i = En(e, r));
        function u(G, q) {
          var ie = wr(e, i, G, q ? "right" : "left", l);
          return q ? ie.left = ie.right : ie.right = ie.left, eo(e, r, ie, n);
        }
        var c = Ue(r, e.doc.direction), d = t.ch, v = t.sticky;
        if (d >= r.text.length ? (d = r.text.length, v = "before") : d <= 0 && (d = 0, v = "after"), !c)
          return u(v == "before" ? d - 1 : d, v == "before");
        function k(G, q, ie) {
          var se = c[q], he = se.level == 1;
          return u(ie ? G - 1 : G, he != ie);
        }
        var L = Ne(c, d, v), P = Pe, F = k(d, L, v == "before");
        return P != null && (F.other = k(d, P, v != "before")), F;
      }
      function bs(e, t) {
        var n = 0;
        t = xe(e.doc, t), e.options.lineWrapping || (n = Nn(e.display) * t.ch);
        var r = pe(e.doc, t.line), i = Mr(r) + Qi(e.display);
        return { left: n, right: n, top: i, bottom: i + r.height };
      }
      function pa(e, t, n, r, i) {
        var l = D(e, t, n);
        return l.xRel = i, r && (l.outside = r), l;
      }
      function va(e, t, n) {
        var r = e.doc;
        if (n += e.display.viewOffset, n < 0)
          return pa(r.first, 0, null, -1, -1);
        var i = mr(r, n), l = r.first + r.size - 1;
        if (i > l)
          return pa(r.first + r.size - 1, pe(r, l).text.length, null, 1, 1);
        t < 0 && (t = 0);
        for (var u = pe(r, i); ; ) {
          var c = ih(e, u, i, t, n), d = Ac(u, c.ch + (c.xRel > 0 || c.outside > 0 ? 1 : 0));
          if (!d)
            return c;
          var v = d.find(1);
          if (v.line == i)
            return v;
          u = pe(r, i = v.line);
        }
      }
      function ws(e, t, n, r) {
        r -= da(t);
        var i = t.text.length, l = ve(function(u) {
          return wr(e, n, u - 1).bottom <= r;
        }, i, 0);
        return i = ve(function(u) {
          return wr(e, n, u).top > r;
        }, l, i), { begin: l, end: i };
      }
      function Ss(e, t, n, r) {
        n || (n = En(e, t));
        var i = eo(e, t, wr(e, n, r), "line").top;
        return ws(e, t, n, i);
      }
      function ga(e, t, n, r) {
        return e.bottom <= n ? false : e.top > n ? true : (r ? e.left : e.right) > t;
      }
      function ih(e, t, n, r, i) {
        i -= Mr(t);
        var l = En(e, t), u = da(t), c = 0, d = t.text.length, v = true, k = Ue(t, e.doc.direction);
        if (k) {
          var L = (e.options.lineWrapping ? ah : oh)(e, t, n, l, k, r, i);
          v = L.level != 1, c = v ? L.from : L.to - 1, d = v ? L.to : L.from - 1;
        }
        var P = null, F = null, G = ve(function(be) {
          var me = wr(e, l, be);
          return me.top += u, me.bottom += u, ga(me, r, i, false) ? (me.top <= i && me.left <= r && (P = be, F = me), true) : false;
        }, c, d), q, ie, se = false;
        if (F) {
          var he = r - F.left < F.right - r, ue = he == v;
          G = P + (ue ? 0 : 1), ie = ue ? "after" : "before", q = he ? F.left : F.right;
        } else {
          !v && (G == d || G == c) && G++, ie = G == 0 ? "after" : G == t.text.length ? "before" : wr(e, l, G - (v ? 1 : 0)).bottom + u <= i == v ? "after" : "before";
          var de = ar(e, D(n, G, ie), "line", t, l);
          q = de.left, se = i < de.top ? -1 : i >= de.bottom ? 1 : 0;
        }
        return G = ye(t.text, G, 1), pa(n, G, ie, se, r - q);
      }
      function oh(e, t, n, r, i, l, u) {
        var c = ve(function(L) {
          var P = i[L], F = P.level != 1;
          return ga(ar(
            e,
            D(n, F ? P.to : P.from, F ? "before" : "after"),
            "line",
            t,
            r
          ), l, u, true);
        }, 0, i.length - 1), d = i[c];
        if (c > 0) {
          var v = d.level != 1, k = ar(
            e,
            D(n, v ? d.from : d.to, v ? "after" : "before"),
            "line",
            t,
            r
          );
          ga(k, l, u, true) && k.top > u && (d = i[c - 1]);
        }
        return d;
      }
      function ah(e, t, n, r, i, l, u) {
        var c = ws(e, t, r, u), d = c.begin, v = c.end;
        /\s/.test(t.text.charAt(v - 1)) && v--;
        for (var k = null, L = null, P = 0; P < i.length; P++) {
          var F = i[P];
          if (!(F.from >= v || F.to <= d)) {
            var G = F.level != 1, q = wr(e, r, G ? Math.min(v, F.to) - 1 : Math.max(d, F.from)).right, ie = q < l ? l - q + 1e9 : q - l;
            (!k || L > ie) && (k = F, L = ie);
          }
        }
        return k || (k = i[i.length - 1]), k.from < d && (k = { from: d, to: k.to, level: k.level }), k.to > v && (k = { from: k.from, to: v, level: k.level }), k;
      }
      var un;
      function On(e) {
        if (e.cachedTextHeight != null)
          return e.cachedTextHeight;
        if (un == null) {
          un = O("pre", null, "CodeMirror-line-like");
          for (var t = 0; t < 49; ++t)
            un.appendChild(document.createTextNode("x")), un.appendChild(O("br"));
          un.appendChild(document.createTextNode("x"));
        }
        ne(e.measure, un);
        var n = un.offsetHeight / 50;
        return n > 3 && (e.cachedTextHeight = n), j(e.measure), n || 1;
      }
      function Nn(e) {
        if (e.cachedCharWidth != null)
          return e.cachedCharWidth;
        var t = O("span", "xxxxxxxxxx"), n = O("pre", [t], "CodeMirror-line-like");
        ne(e.measure, n);
        var r = t.getBoundingClientRect(), i = (r.right - r.left) / 10;
        return i > 2 && (e.cachedCharWidth = i), i || 10;
      }
      function ma(e) {
        for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, l = t.gutters.firstChild, u = 0; l; l = l.nextSibling, ++u) {
          var c = e.display.gutterSpecs[u].className;
          n[c] = l.offsetLeft + l.clientLeft + i, r[c] = l.clientWidth;
        }
        return {
          fixedPos: ya(t),
          gutterTotalWidth: t.gutters.offsetWidth,
          gutterLeft: n,
          gutterWidth: r,
          wrapperWidth: t.wrapper.clientWidth
        };
      }
      function ya(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
      }
      function Cs(e) {
        var t = On(e.display), n = e.options.lineWrapping, r = n && Math.max(5, e.display.scroller.clientWidth / Nn(e.display) - 3);
        return function(i) {
          if (jr(e.doc, i))
            return 0;
          var l = 0;
          if (i.widgets)
            for (var u = 0; u < i.widgets.length; u++)
              i.widgets[u].height && (l += i.widgets[u].height);
          return n ? l + (Math.ceil(i.text.length / r) || 1) * t : l + t;
        };
      }
      function ba(e) {
        var t = e.doc, n = Cs(e);
        t.iter(function(r) {
          var i = n(r);
          i != r.height && Qt(r, i);
        });
      }
      function fn(e, t, n, r) {
        var i = e.display;
        if (!n && At(t).getAttribute("cm-not-content") == "true")
          return null;
        var l, u, c = i.lineSpace.getBoundingClientRect();
        try {
          l = t.clientX - c.left, u = t.clientY - c.top;
        } catch {
          return null;
        }
        var d = va(e, l, u), v;
        if (r && d.xRel > 0 && (v = pe(e.doc, d.line).text).length == d.ch) {
          var k = ge(v, v.length, e.options.tabSize) - v.length;
          d = D(d.line, Math.max(0, Math.round((l - us(e.display).left) / Nn(e.display)) - k));
        }
        return d;
      }
      function cn(e, t) {
        if (t >= e.display.viewTo || (t -= e.display.viewFrom, t < 0))
          return null;
        for (var n = e.display.view, r = 0; r < n.length; r++)
          if (t -= n[r].size, t < 0)
            return r;
      }
      function Dt(e, t, n, r) {
        t == null && (t = e.doc.first), n == null && (n = e.doc.first + e.doc.size), r || (r = 0);
        var i = e.display;
        if (r && n < i.viewTo && (i.updateLineNumbers == null || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = true, t >= i.viewTo)
          Lr && aa(e.doc, t) < i.viewTo && Ur(e);
        else if (n <= i.viewFrom)
          Lr && Ql(e.doc, n + r) > i.viewFrom ? Ur(e) : (i.viewFrom += r, i.viewTo += r);
        else if (t <= i.viewFrom && n >= i.viewTo)
          Ur(e);
        else if (t <= i.viewFrom) {
          var l = ro(e, n, n + r, 1);
          l ? (i.view = i.view.slice(l.index), i.viewFrom = l.lineN, i.viewTo += r) : Ur(e);
        } else if (n >= i.viewTo) {
          var u = ro(e, t, t, -1);
          u ? (i.view = i.view.slice(0, u.index), i.viewTo = u.lineN) : Ur(e);
        } else {
          var c = ro(e, t, t, -1), d = ro(e, n, n + r, 1);
          c && d ? (i.view = i.view.slice(0, c.index).concat(Zi(e, c.lineN, d.lineN)).concat(i.view.slice(d.index)), i.viewTo += r) : Ur(e);
        }
        var v = i.externalMeasured;
        v && (n < v.lineN ? v.lineN += r : t < v.lineN + v.size && (i.externalMeasured = null));
      }
      function $r(e, t, n) {
        e.curOp.viewChanged = true;
        var r = e.display, i = e.display.externalMeasured;
        if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
          var l = r.view[cn(e, t)];
          if (l.node != null) {
            var u = l.changes || (l.changes = []);
            Me(u, n) == -1 && u.push(n);
          }
        }
      }
      function Ur(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
      }
      function ro(e, t, n, r) {
        var i = cn(e, t), l, u = e.display.view;
        if (!Lr || n == e.doc.first + e.doc.size)
          return { index: i, lineN: n };
        for (var c = e.display.viewFrom, d = 0; d < i; d++)
          c += u[d].size;
        if (c != t) {
          if (r > 0) {
            if (i == u.length - 1)
              return null;
            l = c + u[i].size - t, i++;
          } else
            l = c - t;
          t += l, n += l;
        }
        for (; aa(e.doc, n) != n; ) {
          if (i == (r < 0 ? 0 : u.length - 1))
            return null;
          n += r * u[i - (r < 0 ? 1 : 0)].size, i += r;
        }
        return { index: i, lineN: n };
      }
      function lh(e, t, n) {
        var r = e.display, i = r.view;
        i.length == 0 || t >= r.viewTo || n <= r.viewFrom ? (r.view = Zi(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = Zi(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(cn(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(Zi(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, cn(e, n)))), r.viewTo = n;
      }
      function ks(e) {
        for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
          var i = t[r];
          !i.hidden && (!i.node || i.changes) && ++n;
        }
        return n;
      }
      function fi(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function xs(e, t) {
        t === void 0 && (t = true);
        var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), l = r.selection = document.createDocumentFragment(), u = e.options.$customCursor;
        u && (t = true);
        for (var c = 0; c < n.sel.ranges.length; c++)
          if (!(!t && c == n.sel.primIndex)) {
            var d = n.sel.ranges[c];
            if (!(d.from().line >= e.display.viewTo || d.to().line < e.display.viewFrom)) {
              var v = d.empty();
              if (u) {
                var k = u(e, d);
                k && wa(e, k, i);
              } else
                (v || e.options.showCursorWhenSelecting) && wa(e, d.head, i);
              v || sh(e, d, l);
            }
          }
        return r;
      }
      function wa(e, t, n) {
        var r = ar(e, t, "div", null, null, !e.options.singleCursorHeightPerLine), i = n.appendChild(O("div", " ", "CodeMirror-cursor"));
        if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) {
          var l = to(e, t, "div", null, null), u = l.right - l.left;
          i.style.width = (u > 0 ? u : e.defaultCharWidth()) + "px";
        }
        if (r.other) {
          var c = n.appendChild(O("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
          c.style.display = "", c.style.left = r.other.left + "px", c.style.top = r.other.top + "px", c.style.height = (r.other.bottom - r.other.top) * 0.85 + "px";
        }
      }
      function no(e, t) {
        return e.top - t.top || e.left - t.left;
      }
      function sh(e, t, n) {
        var r = e.display, i = e.doc, l = document.createDocumentFragment(), u = us(e.display), c = u.left, d = Math.max(r.sizerWidth, sn(e) - r.sizer.offsetLeft) - u.right, v = i.direction == "ltr";
        function k(ue, de, be, me) {
          de < 0 && (de = 0), de = Math.round(de), me = Math.round(me), l.appendChild(O("div", null, "CodeMirror-selected", "position: absolute; left: " + ue + `px;
                             top: ` + de + "px; width: " + (be ?? d - ue) + `px;
                             height: ` + (me - de) + "px"));
        }
        function L(ue, de, be) {
          var me = pe(i, ue), Le = me.text.length, Ge, bt;
          function et(st, Pt) {
            return to(e, D(ue, st), "div", me, Pt);
          }
          function $t(st, Pt, Ct) {
            var dt = Ss(e, me, null, st), ut = Pt == "ltr" == (Ct == "after") ? "left" : "right", it = Ct == "after" ? dt.begin : dt.end - (/\s/.test(me.text.charAt(dt.end - 1)) ? 2 : 1);
            return et(it, ut)[ut];
          }
          var Ft = Ue(me, i.direction);
          return Oe(Ft, de || 0, be ?? Le, function(st, Pt, Ct, dt) {
            var ut = Ct == "ltr", it = et(st, ut ? "left" : "right"), Bt = et(Pt - 1, ut ? "right" : "left"), Un = de == null && st == 0, qr = be == null && Pt == Le, xt = dt == 0, Sr = !Ft || dt == Ft.length - 1;
            if (Bt.top - it.top <= 3) {
              var wt = (v ? Un : qr) && xt, Ka = (v ? qr : Un) && Sr, Ar = wt ? c : (ut ? it : Bt).left, gn = Ka ? d : (ut ? Bt : it).right;
              k(Ar, it.top, gn - Ar, it.bottom);
            } else {
              var mn, Ot, Gn, Ya;
              ut ? (mn = v && Un && xt ? c : it.left, Ot = v ? d : $t(st, Ct, "before"), Gn = v ? c : $t(Pt, Ct, "after"), Ya = v && qr && Sr ? d : Bt.right) : (mn = v ? $t(st, Ct, "before") : c, Ot = !v && Un && xt ? d : it.right, Gn = !v && qr && Sr ? c : Bt.left, Ya = v ? $t(Pt, Ct, "after") : d), k(mn, it.top, Ot - mn, it.bottom), it.bottom < Bt.top && k(c, it.bottom, null, Bt.top), k(Gn, Bt.top, Ya - Gn, Bt.bottom);
            }
            (!Ge || no(it, Ge) < 0) && (Ge = it), no(Bt, Ge) < 0 && (Ge = Bt), (!bt || no(it, bt) < 0) && (bt = it), no(Bt, bt) < 0 && (bt = Bt);
          }), { start: Ge, end: bt };
        }
        var P = t.from(), F = t.to();
        if (P.line == F.line)
          L(P.line, P.ch, F.ch);
        else {
          var G = pe(i, P.line), q = pe(i, F.line), ie = or(G) == or(q), se = L(P.line, P.ch, ie ? G.text.length + 1 : null).end, he = L(F.line, ie ? 0 : null, F.ch).start;
          ie && (se.top < he.top - 2 ? (k(se.right, se.top, null, se.bottom), k(c, he.top, he.left, he.bottom)) : k(se.right, se.top, he.left - se.right, se.bottom)), se.bottom < he.top && k(c, se.bottom, null, he.top);
        }
        n.appendChild(l);
      }
      function Sa(e) {
        if (e.state.focused) {
          var t = e.display;
          clearInterval(t.blinker);
          var n = true;
          t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
            e.hasFocus() || An(e), t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden";
          }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
        }
      }
      function Ts(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || ka(e));
      }
      function Ca(e) {
        e.state.delayingBlurEvent = true, setTimeout(function() {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = false, e.state.focused && An(e));
        }, 100);
      }
      function ka(e, t) {
        e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = false), e.options.readOnly != "nocursor" && (e.state.focused || (We(e, "focus", e, t), e.state.focused = true, pt(e.display.wrapper, "CodeMirror-focused"), !e.curOp && e.display.selForContextMenu != e.doc.sel && (e.display.input.reset(), b && setTimeout(function() {
          return e.display.input.reset(true);
        }, 20)), e.display.input.receivedFocus()), Sa(e));
      }
      function An(e, t) {
        e.state.delayingBlurEvent || (e.state.focused && (We(e, "blur", e, t), e.state.focused = false, ce(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
          e.state.focused || (e.display.shift = false);
        }, 150));
      }
      function io(e) {
        for (var t = e.display, n = t.lineDiv.offsetTop, r = Math.max(0, t.scroller.getBoundingClientRect().top), i = t.lineDiv.getBoundingClientRect().top, l = 0, u = 0; u < t.view.length; u++) {
          var c = t.view[u], d = e.options.lineWrapping, v = void 0, k = 0;
          if (!c.hidden) {
            if (i += c.line.height, C && w < 8) {
              var L = c.node.offsetTop + c.node.offsetHeight;
              v = L - n, n = L;
            } else {
              var P = c.node.getBoundingClientRect();
              v = P.bottom - P.top, !d && c.text.firstChild && (k = c.text.firstChild.getBoundingClientRect().right - P.left - 1);
            }
            var F = c.line.height - v;
            if ((F > 5e-3 || F < -5e-3) && (i < r && (l -= F), Qt(c.line, v), _s(c.line), c.rest))
              for (var G = 0; G < c.rest.length; G++)
                _s(c.rest[G]);
            if (k > e.display.sizerWidth) {
              var q = Math.ceil(k / Nn(e.display));
              q > e.display.maxLineLength && (e.display.maxLineLength = q, e.display.maxLine = c.line, e.display.maxLineChanged = true);
            }
          }
        }
        Math.abs(l) > 2 && (t.scroller.scrollTop += l);
      }
      function _s(e) {
        if (e.widgets)
          for (var t = 0; t < e.widgets.length; ++t) {
            var n = e.widgets[t], r = n.node.parentNode;
            r && (n.height = r.offsetHeight);
          }
      }
      function oo(e, t, n) {
        var r = n && n.top != null ? Math.max(0, n.top) : e.scroller.scrollTop;
        r = Math.floor(r - Qi(e));
        var i = n && n.bottom != null ? n.bottom : r + e.wrapper.clientHeight, l = mr(t, r), u = mr(t, i);
        if (n && n.ensure) {
          var c = n.ensure.from.line, d = n.ensure.to.line;
          c < l ? (l = c, u = mr(t, Mr(pe(t, c)) + e.wrapper.clientHeight)) : Math.min(d, t.lastLine()) >= u && (l = mr(t, Mr(pe(t, d)) - e.wrapper.clientHeight), u = d);
        }
        return { from: l, to: Math.max(u, l + 1) };
      }
      function uh(e, t) {
        if (!Xe(e, "scrollCursorIntoView")) {
          var n = e.display, r = n.sizer.getBoundingClientRect(), i = null, l = n.wrapper.ownerDocument;
          if (t.top + r.top < 0 ? i = true : t.bottom + r.top > (l.defaultView.innerHeight || l.documentElement.clientHeight) && (i = false), i != null && !W) {
            var u = O("div", "​", null, `position: absolute;
                         top: ` + (t.top - n.viewOffset - Qi(e.display)) + `px;
                         height: ` + (t.bottom - t.top + br(e) + n.barHeight) + `px;
                         left: ` + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
            e.display.lineSpace.appendChild(u), u.scrollIntoView(i), e.display.lineSpace.removeChild(u);
          }
        }
      }
      function fh(e, t, n, r) {
        r == null && (r = 0);
        var i;
        !e.options.lineWrapping && t == n && (n = t.sticky == "before" ? D(t.line, t.ch + 1, "before") : t, t = t.ch ? D(t.line, t.sticky == "before" ? t.ch - 1 : t.ch, "after") : t);
        for (var l = 0; l < 5; l++) {
          var u = false, c = ar(e, t), d = !n || n == t ? c : ar(e, n);
          i = {
            left: Math.min(c.left, d.left),
            top: Math.min(c.top, d.top) - r,
            right: Math.max(c.left, d.left),
            bottom: Math.max(c.bottom, d.bottom) + r
          };
          var v = xa(e, i), k = e.doc.scrollTop, L = e.doc.scrollLeft;
          if (v.scrollTop != null && (hi(e, v.scrollTop), Math.abs(e.doc.scrollTop - k) > 1 && (u = true)), v.scrollLeft != null && (hn(e, v.scrollLeft), Math.abs(e.doc.scrollLeft - L) > 1 && (u = true)), !u)
            break;
        }
        return i;
      }
      function ch(e, t) {
        var n = xa(e, t);
        n.scrollTop != null && hi(e, n.scrollTop), n.scrollLeft != null && hn(e, n.scrollLeft);
      }
      function xa(e, t) {
        var n = e.display, r = On(e.display);
        t.top < 0 && (t.top = 0);
        var i = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : n.scroller.scrollTop, l = ca(e), u = {};
        t.bottom - t.top > l && (t.bottom = t.top + l);
        var c = e.doc.height + fa(n), d = t.top < r, v = t.bottom > c - r;
        if (t.top < i)
          u.scrollTop = d ? 0 : t.top;
        else if (t.bottom > i + l) {
          var k = Math.min(t.top, (v ? c : t.bottom) - l);
          k != i && (u.scrollTop = k);
        }
        var L = e.options.fixedGutter ? 0 : n.gutters.offsetWidth, P = e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : n.scroller.scrollLeft - L, F = sn(e) - n.gutters.offsetWidth, G = t.right - t.left > F;
        return G && (t.right = t.left + F), t.left < 10 ? u.scrollLeft = 0 : t.left < P ? u.scrollLeft = Math.max(0, t.left + L - (G ? 0 : 10)) : t.right > F + P - 3 && (u.scrollLeft = t.right + (G ? 0 : 10) - F), u;
      }
      function Ta(e, t) {
        t != null && (ao(e), e.curOp.scrollTop = (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + t);
      }
      function Dn(e) {
        ao(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
      }
      function ci(e, t, n) {
        (t != null || n != null) && ao(e), t != null && (e.curOp.scrollLeft = t), n != null && (e.curOp.scrollTop = n);
      }
      function hh(e, t) {
        ao(e), e.curOp.scrollToPos = t;
      }
      function ao(e) {
        var t = e.curOp.scrollToPos;
        if (t) {
          e.curOp.scrollToPos = null;
          var n = bs(e, t.from), r = bs(e, t.to);
          Ls(e, n, r, t.margin);
        }
      }
      function Ls(e, t, n, r) {
        var i = xa(e, {
          left: Math.min(t.left, n.left),
          top: Math.min(t.top, n.top) - r,
          right: Math.max(t.right, n.right),
          bottom: Math.max(t.bottom, n.bottom) + r
        });
        ci(e, i.scrollLeft, i.scrollTop);
      }
      function hi(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 || (g || La(e, { top: t }), Ms(e, t, true), g && La(e), vi(e, 100));
      }
      function Ms(e, t, n) {
        t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)), !(e.display.scroller.scrollTop == t && !n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
      }
      function hn(e, t, n, r) {
        t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), !((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r) && (e.doc.scrollLeft = t, Ds(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
      }
      function di(e) {
        var t = e.display, n = t.gutters.offsetWidth, r = Math.round(e.doc.height + fa(e.display));
        return {
          clientHeight: t.scroller.clientHeight,
          viewHeight: t.wrapper.clientHeight,
          scrollWidth: t.scroller.scrollWidth,
          clientWidth: t.scroller.clientWidth,
          viewWidth: t.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? n : 0,
          docHeight: r,
          scrollHeight: r + br(e) + t.barHeight,
          nativeBarWidth: t.nativeBarWidth,
          gutterWidth: n
        };
      }
      var dn = function(e, t, n) {
        this.cm = n;
        var r = this.vert = O("div", [O("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), i = this.horiz = O("div", [O("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        r.tabIndex = i.tabIndex = -1, e(r), e(i), re(r, "scroll", function() {
          r.clientHeight && t(r.scrollTop, "vertical");
        }), re(i, "scroll", function() {
          i.clientWidth && t(i.scrollLeft, "horizontal");
        }), this.checkedZeroWidth = false, C && w < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
      };
      dn.prototype.update = function(e) {
        var t = e.scrollWidth > e.clientWidth + 1, n = e.scrollHeight > e.clientHeight + 1, r = e.nativeBarWidth;
        if (n) {
          this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
          var i = e.viewHeight - (t ? r : 0);
          this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
        } else
          this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
        if (t) {
          this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
          var l = e.viewWidth - e.barLeft - (n ? r : 0);
          this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + l) + "px";
        } else
          this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
        return !this.checkedZeroWidth && e.clientHeight > 0 && (r == 0 && this.zeroWidthHack(), this.checkedZeroWidth = true), { right: n ? r : 0, bottom: t ? r : 0 };
      }, dn.prototype.setScrollLeft = function(e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
      }, dn.prototype.setScrollTop = function(e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
      }, dn.prototype.zeroWidthHack = function() {
        var e = Z && !B ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = e, this.horiz.style.visibility = this.vert.style.visibility = "hidden", this.disableHoriz = new Te(), this.disableVert = new Te();
      }, dn.prototype.enableZeroWidthBar = function(e, t, n) {
        e.style.visibility = "";
        function r() {
          var i = e.getBoundingClientRect(), l = n == "vert" ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
          l != e ? e.style.visibility = "hidden" : t.set(1e3, r);
        }
        t.set(1e3, r);
      }, dn.prototype.clear = function() {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz), e.removeChild(this.vert);
      };
      var pi = function() {
      };
      pi.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }, pi.prototype.setScrollLeft = function() {
      }, pi.prototype.setScrollTop = function() {
      }, pi.prototype.clear = function() {
      };
      function In(e, t) {
        t || (t = di(e));
        var n = e.display.barWidth, r = e.display.barHeight;
        Es(e, t);
        for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++)
          n != e.display.barWidth && e.options.lineWrapping && io(e), Es(e, di(e)), n = e.display.barWidth, r = e.display.barHeight;
      }
      function Es(e, t) {
        var n = e.display, r = n.scrollbars.update(t);
        n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = "";
      }
      var Os = { native: dn, null: pi };
      function Ns(e) {
        e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && ce(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new Os[e.options.scrollbarStyle](function(t) {
          e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), re(t, "mousedown", function() {
            e.state.focused && setTimeout(function() {
              return e.display.input.focus();
            }, 0);
          }), t.setAttribute("cm-not-content", "true");
        }, function(t, n) {
          n == "horizontal" ? hn(e, t) : hi(e, t);
        }, e), e.display.scrollbars.addClass && pt(e.display.wrapper, e.display.scrollbars.addClass);
      }
      var dh = 0;
      function pn(e) {
        e.curOp = {
          cm: e,
          viewChanged: false,
          // Flag that indicates that lines might need to be redrawn
          startHeight: e.doc.height,
          // Used to detect need to update scrollbar
          forceUpdate: false,
          // Used to force a redraw
          updateInput: 0,
          // Whether to reset the input textarea
          typing: false,
          // Whether this reset should be careful to leave existing text (for compositing)
          changeObjs: null,
          // Accumulated changes, for firing change events
          cursorActivityHandlers: null,
          // Set of handlers to fire cursorActivity on
          cursorActivityCalled: 0,
          // Tracks which cursorActivity handlers have been called already
          selectionChanged: false,
          // Whether the selection needs to be redrawn
          updateMaxLine: false,
          // Set when the widest line needs to be determined anew
          scrollLeft: null,
          scrollTop: null,
          // Intermediate scroll position, not pushed to DOM yet
          scrollToPos: null,
          // Used to scroll to a specific position
          focus: false,
          id: ++dh,
          // Unique ID
          markArrays: null
          // Used by addMarkedSpan
        }, Uc(e.curOp);
      }
      function vn(e) {
        var t = e.curOp;
        t && Vc(t, function(n) {
          for (var r = 0; r < n.ops.length; r++)
            n.ops[r].cm.curOp = null;
          ph(n);
        });
      }
      function ph(e) {
        for (var t = e.ops, n = 0; n < t.length; n++)
          vh(t[n]);
        for (var r = 0; r < t.length; r++)
          gh(t[r]);
        for (var i = 0; i < t.length; i++)
          mh(t[i]);
        for (var l = 0; l < t.length; l++)
          yh(t[l]);
        for (var u = 0; u < t.length; u++)
          bh(t[u]);
      }
      function vh(e) {
        var t = e.cm, n = t.display;
        Sh(t), e.updateMaxLine && sa(t), e.mustUpdate = e.viewChanged || e.forceUpdate || e.scrollTop != null || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new lo(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate);
      }
      function gh(e) {
        e.updatedDisplay = e.mustUpdate && _a(e.cm, e.update);
      }
      function mh(e) {
        var t = e.cm, n = t.display;
        e.updatedDisplay && io(t), e.barMeasure = di(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = cs(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + br(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - sn(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
      }
      function yh(e) {
        var t = e.cm;
        e.adjustWidthTo != null && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && hn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), true), t.display.maxLineChanged = false);
        var n = e.focus && e.focus == Ze(Qe(t));
        e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && In(t, e.barMeasure), e.updatedDisplay && Ea(t, e.barMeasure), e.selectionChanged && Sa(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && Ts(e.cm);
      }
      function bh(e) {
        var t = e.cm, n = t.display, r = t.doc;
        if (e.updatedDisplay && As(t, e.update), n.wheelStartX != null && (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) && (n.wheelStartX = n.wheelStartY = null), e.scrollTop != null && Ms(t, e.scrollTop, e.forceScroll), e.scrollLeft != null && hn(t, e.scrollLeft, true, true), e.scrollToPos) {
          var i = fh(
            t,
            xe(r, e.scrollToPos.from),
            xe(r, e.scrollToPos.to),
            e.scrollToPos.margin
          );
          uh(t, i);
        }
        var l = e.maybeHiddenMarkers, u = e.maybeUnhiddenMarkers;
        if (l)
          for (var c = 0; c < l.length; ++c)
            l[c].lines.length || We(l[c], "hide");
        if (u)
          for (var d = 0; d < u.length; ++d)
            u[d].lines.length && We(u[d], "unhide");
        n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && We(t, "changes", t, e.changeObjs), e.update && e.update.finish();
      }
      function jt(e, t) {
        if (e.curOp)
          return t();
        pn(e);
        try {
          return t();
        } finally {
          vn(e);
        }
      }
      function mt(e, t) {
        return function() {
          if (e.curOp)
            return t.apply(e, arguments);
          pn(e);
          try {
            return t.apply(e, arguments);
          } finally {
            vn(e);
          }
        };
      }
      function Et(e) {
        return function() {
          if (this.curOp)
            return e.apply(this, arguments);
          pn(this);
          try {
            return e.apply(this, arguments);
          } finally {
            vn(this);
          }
        };
      }
      function yt(e) {
        return function() {
          var t = this.cm;
          if (!t || t.curOp)
            return e.apply(this, arguments);
          pn(t);
          try {
            return e.apply(this, arguments);
          } finally {
            vn(t);
          }
        };
      }
      function vi(e, t) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, Ke(wh, e));
      }
      function wh(e) {
        var t = e.doc;
        if (!(t.highlightFrontier >= e.display.viewTo)) {
          var n = +/* @__PURE__ */ new Date() + e.options.workTime, r = ii(e, t.highlightFrontier), i = [];
          t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(l) {
            if (r.line >= e.display.viewFrom) {
              var u = l.styles, c = l.text.length > e.options.maxHighlightLength ? Tr(t.mode, r.state) : null, d = Hl(e, l, r, true);
              c && (r.state = c), l.styles = d.styles;
              var v = l.styleClasses, k = d.classes;
              k ? l.styleClasses = k : v && (l.styleClasses = null);
              for (var L = !u || u.length != l.styles.length || v != k && (!v || !k || v.bgClass != k.bgClass || v.textClass != k.textClass), P = 0; !L && P < u.length; ++P)
                L = u[P] != l.styles[P];
              L && i.push(r.line), l.stateAfter = r.save(), r.nextLine();
            } else
              l.text.length <= e.options.maxHighlightLength && ra(e, l.text, r), l.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
            if (+/* @__PURE__ */ new Date() > n)
              return vi(e, e.options.workDelay), true;
          }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && jt(e, function() {
            for (var l = 0; l < i.length; l++)
              $r(e, i[l], "text");
          });
        }
      }
      var lo = function(e, t, n) {
        var r = e.display;
        this.viewport = t, this.visible = oo(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = sn(e), this.force = n, this.dims = ma(e), this.events = [];
      };
      lo.prototype.signal = function(e, t) {
        ct(e, t) && this.events.push(arguments);
      }, lo.prototype.finish = function() {
        for (var e = 0; e < this.events.length; e++)
          We.apply(null, this.events[e]);
      };
      function Sh(e) {
        var t = e.display;
        !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = br(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = br(e) + "px", t.scrollbarsClipped = true);
      }
      function Ch(e) {
        if (e.hasFocus())
          return null;
        var t = Ze(Qe(e));
        if (!t || !St(e.display.lineDiv, t))
          return null;
        var n = { activeElt: t };
        if (window.getSelection) {
          var r = vt(e).getSelection();
          r.anchorNode && r.extend && St(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset);
        }
        return n;
      }
      function kh(e) {
        if (!(!e || !e.activeElt || e.activeElt == Ze(e.activeElt.ownerDocument)) && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && St(document.body, e.anchorNode) && St(document.body, e.focusNode))) {
          var t = e.activeElt.ownerDocument, n = t.defaultView.getSelection(), r = t.createRange();
          r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(false), n.removeAllRanges(), n.addRange(r), n.extend(e.focusNode, e.focusOffset);
        }
      }
      function _a(e, t) {
        var n = e.display, r = e.doc;
        if (t.editorIsHidden)
          return Ur(e), false;
        if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && ks(e) == 0)
          return false;
        Is(e) && (Ur(e), t.dims = ma(e));
        var i = r.first + r.size, l = Math.max(t.visible.from - e.options.viewportMargin, r.first), u = Math.min(i, t.visible.to + e.options.viewportMargin);
        n.viewFrom < l && l - n.viewFrom < 20 && (l = Math.max(r.first, n.viewFrom)), n.viewTo > u && n.viewTo - u < 20 && (u = Math.min(i, n.viewTo)), Lr && (l = aa(e.doc, l), u = Ql(e.doc, u));
        var c = l != n.viewFrom || u != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
        lh(e, l, u), n.viewOffset = Mr(pe(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
        var d = ks(e);
        if (!c && d == 0 && !t.force && n.renderedView == n.view && (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo))
          return false;
        var v = Ch(e);
        return d > 4 && (n.lineDiv.style.display = "none"), xh(e, n.updateLineNumbers, t.dims), d > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, kh(v), j(n.cursorDiv), j(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, c && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, vi(e, 400)), n.updateLineNumbers = null, true;
      }
      function As(e, t) {
        for (var n = t.viewport, r = true; ; r = false) {
          if (!r || !e.options.lineWrapping || t.oldDisplayWidth == sn(e)) {
            if (n && n.top != null && (n = { top: Math.min(e.doc.height + fa(e.display) - ca(e), n.top) }), t.visible = oo(e.display, e.doc, n), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
              break;
          } else
            r && (t.visible = oo(e.display, e.doc, n));
          if (!_a(e, t))
            break;
          io(e);
          var i = di(e);
          fi(e), In(e, i), Ea(e, i), t.force = false;
        }
        t.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
      }
      function La(e, t) {
        var n = new lo(e, t);
        if (_a(e, n)) {
          io(e), As(e, n);
          var r = di(e);
          fi(e), In(e, r), Ea(e, r), n.finish();
        }
      }
      function xh(e, t, n) {
        var r = e.display, i = e.options.lineNumbers, l = r.lineDiv, u = l.firstChild;
        function c(G) {
          var q = G.nextSibling;
          return b && Z && e.display.currentWheelTarget == G ? G.style.display = "none" : G.parentNode.removeChild(G), q;
        }
        for (var d = r.view, v = r.viewFrom, k = 0; k < d.length; k++) {
          var L = d[k];
          if (!L.hidden)
            if (!L.node || L.node.parentNode != l) {
              var P = Jc(e, L, v, n);
              l.insertBefore(P, u);
            } else {
              for (; u != L.node; )
                u = c(u);
              var F = i && t != null && t <= v && L.lineNumber;
              L.changes && (Me(L.changes, "gutter") > -1 && (F = false), is(e, L, v, n)), F && (j(L.lineNumber), L.lineNumber.appendChild(document.createTextNode(M(e.options, v)))), u = L.node.nextSibling;
            }
          v += L.size;
        }
        for (; u; )
          u = c(u);
      }
      function Ma(e) {
        var t = e.gutters.offsetWidth;
        e.sizer.style.marginLeft = t + "px", gt(e, "gutterChanged", e);
      }
      function Ea(e, t) {
        e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + br(e) + "px";
      }
      function Ds(e) {
        var t = e.display, n = t.view;
        if (!(!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter))) {
          for (var r = ya(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, l = r + "px", u = 0; u < n.length; u++)
            if (!n[u].hidden) {
              e.options.fixedGutter && (n[u].gutter && (n[u].gutter.style.left = l), n[u].gutterBackground && (n[u].gutterBackground.style.left = l));
              var c = n[u].alignable;
              if (c)
                for (var d = 0; d < c.length; d++)
                  c[d].style.left = l;
            }
          e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
        }
      }
      function Is(e) {
        if (!e.options.lineNumbers)
          return false;
        var t = e.doc, n = M(e.options, t.first + t.size - 1), r = e.display;
        if (n.length != r.lineNumChars) {
          var i = r.measure.appendChild(O(
            "div",
            [O("div", n)],
            "CodeMirror-linenumber CodeMirror-gutter-elt"
          )), l = i.firstChild.offsetWidth, u = i.offsetWidth - l;
          return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(l, r.lineGutter.offsetWidth - u) + 1, r.lineNumWidth = r.lineNumInnerWidth + u, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", Ma(e.display), true;
        }
        return false;
      }
      function Oa(e, t) {
        for (var n = [], r = false, i = 0; i < e.length; i++) {
          var l = e[i], u = null;
          if (typeof l != "string" && (u = l.style, l = l.className), l == "CodeMirror-linenumbers")
            if (t)
              r = true;
            else
              continue;
          n.push({ className: l, style: u });
        }
        return t && !r && n.push({ className: "CodeMirror-linenumbers", style: null }), n;
      }
      function Fs(e) {
        var t = e.gutters, n = e.gutterSpecs;
        j(t), e.lineGutter = null;
        for (var r = 0; r < n.length; ++r) {
          var i = n[r], l = i.className, u = i.style, c = t.appendChild(O("div", null, "CodeMirror-gutter " + l));
          u && (c.style.cssText = u), l == "CodeMirror-linenumbers" && (e.lineGutter = c, c.style.width = (e.lineNumWidth || 1) + "px");
        }
        t.style.display = n.length ? "" : "none", Ma(e);
      }
      function gi(e) {
        Fs(e.display), Dt(e), Ds(e);
      }
      function Th(e, t, n, r) {
        var i = this;
        this.input = n, i.scrollbarFiller = O("div", null, "CodeMirror-scrollbar-filler"), i.scrollbarFiller.setAttribute("cm-not-content", "true"), i.gutterFiller = O("div", null, "CodeMirror-gutter-filler"), i.gutterFiller.setAttribute("cm-not-content", "true"), i.lineDiv = Ve("div", null, "CodeMirror-code"), i.selectionDiv = O("div", null, null, "position: relative; z-index: 1"), i.cursorDiv = O("div", null, "CodeMirror-cursors"), i.measure = O("div", null, "CodeMirror-measure"), i.lineMeasure = O("div", null, "CodeMirror-measure"), i.lineSpace = Ve(
          "div",
          [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv],
          null,
          "position: relative; outline: none"
        );
        var l = Ve("div", [i.lineSpace], "CodeMirror-lines");
        i.mover = O("div", [l], null, "position: relative"), i.sizer = O("div", [i.mover], "CodeMirror-sizer"), i.sizerWidth = null, i.heightForcer = O("div", null, null, "position: absolute; height: " + an + "px; width: 1px;"), i.gutters = O("div", null, "CodeMirror-gutters"), i.lineGutter = null, i.scroller = O("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"), i.scroller.setAttribute("tabIndex", "-1"), i.wrapper = O("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"), T && _ >= 105 && (i.wrapper.style.clipPath = "inset(0px)"), i.wrapper.setAttribute("translate", "no"), C && w < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0), !b && !(g && K) && (i.scroller.draggable = true), e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)), i.viewFrom = i.viewTo = t.first, i.reportedViewFrom = i.reportedViewTo = t.first, i.view = [], i.renderedView = null, i.externalMeasured = null, i.viewOffset = 0, i.lastWrapHeight = i.lastWrapWidth = 0, i.updateLineNumbers = null, i.nativeBarWidth = i.barHeight = i.barWidth = 0, i.scrollbarsClipped = false, i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null, i.alignWidgets = false, i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, i.maxLine = null, i.maxLineLength = 0, i.maxLineChanged = false, i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null, i.shift = false, i.selForContextMenu = null, i.activeTouch = null, i.gutterSpecs = Oa(r.gutters, r.lineNumbers), Fs(i), n.init(i);
      }
      var so = 0, Or = null;
      C ? Or = -0.53 : g ? Or = 15 : T ? Or = -0.7 : A && (Or = -1 / 3);
      function Ps(e) {
        var t = e.wheelDeltaX, n = e.wheelDeltaY;
        return t == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), n == null && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : n == null && (n = e.wheelDelta), { x: t, y: n };
      }
      function _h(e) {
        var t = Ps(e);
        return t.x *= Or, t.y *= Or, t;
      }
      function Bs(e, t) {
        T && _ == 102 && (e.display.chromeScrollHack == null ? e.display.sizer.style.pointerEvents = "none" : clearTimeout(e.display.chromeScrollHack), e.display.chromeScrollHack = setTimeout(function() {
          e.display.chromeScrollHack = null, e.display.sizer.style.pointerEvents = "";
        }, 100));
        var n = Ps(t), r = n.x, i = n.y, l = Or;
        t.deltaMode === 0 && (r = t.deltaX, i = t.deltaY, l = 1);
        var u = e.display, c = u.scroller, d = c.scrollWidth > c.clientWidth, v = c.scrollHeight > c.clientHeight;
        if (r && d || i && v) {
          if (i && Z && b) {
            e:
              for (var k = t.target, L = u.view; k != c; k = k.parentNode)
                for (var P = 0; P < L.length; P++)
                  if (L[P].node == k) {
                    e.display.currentWheelTarget = k;
                    break e;
                  }
          }
          if (r && !g && !E && l != null) {
            i && v && hi(e, Math.max(0, c.scrollTop + i * l)), hn(e, Math.max(0, c.scrollLeft + r * l)), (!i || i && v) && rt(t), u.wheelStartX = null;
            return;
          }
          if (i && l != null) {
            var F = i * l, G = e.doc.scrollTop, q = G + u.wrapper.clientHeight;
            F < 0 ? G = Math.max(0, G + F - 50) : q = Math.min(e.doc.height, q + F + 50), La(e, { top: G, bottom: q });
          }
          so < 20 && t.deltaMode !== 0 && (u.wheelStartX == null ? (u.wheelStartX = c.scrollLeft, u.wheelStartY = c.scrollTop, u.wheelDX = r, u.wheelDY = i, setTimeout(function() {
            if (u.wheelStartX != null) {
              var ie = c.scrollLeft - u.wheelStartX, se = c.scrollTop - u.wheelStartY, he = se && u.wheelDY && se / u.wheelDY || ie && u.wheelDX && ie / u.wheelDX;
              u.wheelStartX = u.wheelStartY = null, he && (Or = (Or * so + he) / (so + 1), ++so);
            }
          }, 200)) : (u.wheelDX += r, u.wheelDY += i));
        }
      }
      var Kt = function(e, t) {
        this.ranges = e, this.primIndex = t;
      };
      Kt.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }, Kt.prototype.equals = function(e) {
        if (e == this)
          return true;
        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
          return false;
        for (var t = 0; t < this.ranges.length; t++) {
          var n = this.ranges[t], r = e.ranges[t];
          if (!ke(n.anchor, r.anchor) || !ke(n.head, r.head))
            return false;
        }
        return true;
      }, Kt.prototype.deepCopy = function() {
        for (var e = [], t = 0; t < this.ranges.length; t++)
          e[t] = new He(Ie(this.ranges[t].anchor), Ie(this.ranges[t].head));
        return new Kt(e, this.primIndex);
      }, Kt.prototype.somethingSelected = function() {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty())
            return true;
        return false;
      }, Kt.prototype.contains = function(e, t) {
        t || (t = e);
        for (var n = 0; n < this.ranges.length; n++) {
          var r = this.ranges[n];
          if (U(t, r.from()) >= 0 && U(e, r.to()) <= 0)
            return n;
        }
        return -1;
      };
      var He = function(e, t) {
        this.anchor = e, this.head = t;
      };
      He.prototype.from = function() {
        return ht(this.anchor, this.head);
      }, He.prototype.to = function() {
        return Be(this.anchor, this.head);
      }, He.prototype.empty = function() {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
      };
      function lr(e, t, n) {
        var r = e && e.options.selectionsMayTouch, i = t[n];
        t.sort(function(P, F) {
          return U(P.from(), F.from());
        }), n = Me(t, i);
        for (var l = 1; l < t.length; l++) {
          var u = t[l], c = t[l - 1], d = U(c.to(), u.from());
          if (r && !u.empty() ? d > 0 : d >= 0) {
            var v = ht(c.from(), u.from()), k = Be(c.to(), u.to()), L = c.empty() ? u.from() == u.head : c.from() == c.head;
            l <= n && --n, t.splice(--l, 2, new He(L ? k : v, L ? v : k));
          }
        }
        return new Kt(t, n);
      }
      function Gr(e, t) {
        return new Kt([new He(e, t || e)], 0);
      }
      function Vr(e) {
        return e.text ? D(
          e.from.line + e.text.length - 1,
          Ee(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
        ) : e.to;
      }
      function Rs(e, t) {
        if (U(e, t.from) < 0)
          return e;
        if (U(e, t.to) <= 0)
          return Vr(t);
        var n = e.line + t.text.length - (t.to.line - t.from.line) - 1, r = e.ch;
        return e.line == t.to.line && (r += Vr(t).ch - t.to.ch), D(n, r);
      }
      function Na(e, t) {
        for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
          var i = e.sel.ranges[r];
          n.push(new He(
            Rs(i.anchor, t),
            Rs(i.head, t)
          ));
        }
        return lr(e.cm, n, e.sel.primIndex);
      }
      function Hs(e, t, n) {
        return e.line == t.line ? D(n.line, e.ch - t.ch + n.ch) : D(n.line + (e.line - t.line), e.ch);
      }
      function Lh(e, t, n) {
        for (var r = [], i = D(e.first, 0), l = i, u = 0; u < t.length; u++) {
          var c = t[u], d = Hs(c.from, i, l), v = Hs(Vr(c), i, l);
          if (i = c.to, l = v, n == "around") {
            var k = e.sel.ranges[u], L = U(k.head, k.anchor) < 0;
            r[u] = new He(L ? v : d, L ? d : v);
          } else
            r[u] = new He(d, d);
        }
        return new Kt(r, e.sel.primIndex);
      }
      function Aa(e) {
        e.doc.mode = xr(e.options, e.doc.modeOption), mi(e);
      }
      function mi(e) {
        e.doc.iter(function(t) {
          t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null);
        }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, vi(e, 100), e.state.modeGen++, e.curOp && Dt(e);
      }
      function Ws(e, t) {
        return t.from.ch == 0 && t.to.ch == 0 && Ee(t.text) == "" && (!e.cm || e.cm.options.wholeLineUpdateBefore);
      }
      function Da(e, t, n, r) {
        function i(he) {
          return n ? n[he] : null;
        }
        function l(he, ue, de) {
          Fc(he, ue, de, r), gt(he, "change", he, t);
        }
        function u(he, ue) {
          for (var de = [], be = he; be < ue; ++be)
            de.push(new Ln(v[be], i(be), r));
          return de;
        }
        var c = t.from, d = t.to, v = t.text, k = pe(e, c.line), L = pe(e, d.line), P = Ee(v), F = i(v.length - 1), G = d.line - c.line;
        if (t.full)
          e.insert(0, u(0, v.length)), e.remove(v.length, e.size - v.length);
        else if (Ws(e, t)) {
          var q = u(0, v.length - 1);
          l(L, L.text, F), G && e.remove(c.line, G), q.length && e.insert(c.line, q);
        } else if (k == L)
          if (v.length == 1)
            l(k, k.text.slice(0, c.ch) + P + k.text.slice(d.ch), F);
          else {
            var ie = u(1, v.length - 1);
            ie.push(new Ln(P + k.text.slice(d.ch), F, r)), l(k, k.text.slice(0, c.ch) + v[0], i(0)), e.insert(c.line + 1, ie);
          }
        else if (v.length == 1)
          l(k, k.text.slice(0, c.ch) + v[0] + L.text.slice(d.ch), i(0)), e.remove(c.line + 1, G);
        else {
          l(k, k.text.slice(0, c.ch) + v[0], i(0)), l(L, P + L.text.slice(d.ch), F);
          var se = u(1, v.length - 1);
          G > 1 && e.remove(c.line + 1, G - 1), e.insert(c.line + 1, se);
        }
        gt(e, "change", e, t);
      }
      function Kr(e, t, n) {
        function r(i, l, u) {
          if (i.linked)
            for (var c = 0; c < i.linked.length; ++c) {
              var d = i.linked[c];
              if (d.doc != l) {
                var v = u && d.sharedHist;
                n && !v || (t(d.doc, v), r(d.doc, i, v));
              }
            }
        }
        r(e, null, true);
      }
      function zs(e, t) {
        if (t.cm)
          throw new Error("This document is already in use.");
        e.doc = t, t.cm = e, ba(e), Aa(e), js(e), e.options.direction = t.direction, e.options.lineWrapping || sa(e), e.options.mode = t.modeOption, Dt(e);
      }
      function js(e) {
        (e.doc.direction == "rtl" ? pt : ce)(e.display.lineDiv, "CodeMirror-rtl");
      }
      function Mh(e) {
        jt(e, function() {
          js(e), Dt(e);
        });
      }
      function uo(e) {
        this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
      }
      function Ia(e, t) {
        var n = { from: Ie(t.from), to: Vr(t), text: _r(e, t.from, t.to) };
        return Gs(e, n, t.from.line, t.to.line + 1), Kr(e, function(r) {
          return Gs(r, n, t.from.line, t.to.line + 1);
        }, true), n;
      }
      function $s(e) {
        for (; e.length; ) {
          var t = Ee(e);
          if (t.ranges)
            e.pop();
          else
            break;
        }
      }
      function Eh(e, t) {
        if (t)
          return $s(e.done), Ee(e.done);
        if (e.done.length && !Ee(e.done).ranges)
          return Ee(e.done);
        if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
          return e.done.pop(), Ee(e.done);
      }
      function Us(e, t, n, r) {
        var i = e.history;
        i.undone.length = 0;
        var l = +/* @__PURE__ */ new Date(), u, c;
        if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && (t.origin.charAt(0) == "+" && i.lastModTime > l - (e.cm ? e.cm.options.historyEventDelay : 500) || t.origin.charAt(0) == "*")) && (u = Eh(i, i.lastOp == r)))
          c = Ee(u.changes), U(t.from, t.to) == 0 && U(t.from, c.to) == 0 ? c.to = Vr(t) : u.changes.push(Ia(e, t));
        else {
          var d = Ee(i.done);
          for ((!d || !d.ranges) && fo(e.sel, i.done), u = {
            changes: [Ia(e, t)],
            generation: i.generation
          }, i.done.push(u); i.done.length > i.undoDepth; )
            i.done.shift(), i.done[0].ranges || i.done.shift();
        }
        i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = l, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, c || We(e, "historyAdded");
      }
      function Oh(e, t, n, r) {
        var i = t.charAt(0);
        return i == "*" || i == "+" && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && /* @__PURE__ */ new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
      }
      function Nh(e, t, n, r) {
        var i = e.history, l = r && r.origin;
        n == i.lastSelOp || l && i.lastSelOrigin == l && (i.lastModTime == i.lastSelTime && i.lastOrigin == l || Oh(e, l, Ee(i.done), t)) ? i.done[i.done.length - 1] = t : fo(t, i.done), i.lastSelTime = +/* @__PURE__ */ new Date(), i.lastSelOrigin = l, i.lastSelOp = n, r && r.clearRedo !== false && $s(i.undone);
      }
      function fo(e, t) {
        var n = Ee(t);
        n && n.ranges && n.equals(e) || t.push(e);
      }
      function Gs(e, t, n, r) {
        var i = t["spans_" + e.id], l = 0;
        e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(u) {
          u.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[l] = u.markedSpans), ++l;
        });
      }
      function Ah(e) {
        if (!e)
          return null;
        for (var t, n = 0; n < e.length; ++n)
          e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
        return t ? t.length ? t : null : e;
      }
      function Dh(e, t) {
        var n = t["spans_" + e.id];
        if (!n)
          return null;
        for (var r = [], i = 0; i < t.text.length; ++i)
          r.push(Ah(n[i]));
        return r;
      }
      function Vs(e, t) {
        var n = Dh(e, t), r = ia(e, t);
        if (!n)
          return r;
        if (!r)
          return n;
        for (var i = 0; i < n.length; ++i) {
          var l = n[i], u = r[i];
          if (l && u)
            e:
              for (var c = 0; c < u.length; ++c) {
                for (var d = u[c], v = 0; v < l.length; ++v)
                  if (l[v].marker == d.marker)
                    continue e;
                l.push(d);
              }
          else
            u && (n[i] = u);
        }
        return n;
      }
      function Fn(e, t, n) {
        for (var r = [], i = 0; i < e.length; ++i) {
          var l = e[i];
          if (l.ranges) {
            r.push(n ? Kt.prototype.deepCopy.call(l) : l);
            continue;
          }
          var u = l.changes, c = [];
          r.push({ changes: c });
          for (var d = 0; d < u.length; ++d) {
            var v = u[d], k = void 0;
            if (c.push({ from: v.from, to: v.to, text: v.text }), t)
              for (var L in v)
                (k = L.match(/^spans_(\d+)$/)) && Me(t, Number(k[1])) > -1 && (Ee(c)[L] = v[L], delete v[L]);
          }
        }
        return r;
      }
      function Fa(e, t, n, r) {
        if (r) {
          var i = e.anchor;
          if (n) {
            var l = U(t, i) < 0;
            l != U(n, i) < 0 ? (i = t, t = n) : l != U(t, n) < 0 && (t = n);
          }
          return new He(i, t);
        } else
          return new He(n || t, t);
      }
      function co(e, t, n, r, i) {
        i == null && (i = e.cm && (e.cm.display.shift || e.extend)), kt(e, new Kt([Fa(e.sel.primary(), t, n, i)], 0), r);
      }
      function Ks(e, t, n) {
        for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), l = 0; l < e.sel.ranges.length; l++)
          r[l] = Fa(e.sel.ranges[l], t[l], null, i);
        var u = lr(e.cm, r, e.sel.primIndex);
        kt(e, u, n);
      }
      function Pa(e, t, n, r) {
        var i = e.sel.ranges.slice(0);
        i[t] = n, kt(e, lr(e.cm, i, e.sel.primIndex), r);
      }
      function Ys(e, t, n, r) {
        kt(e, Gr(t, n), r);
      }
      function Ih(e, t, n) {
        var r = {
          ranges: t.ranges,
          update: function(i) {
            this.ranges = [];
            for (var l = 0; l < i.length; l++)
              this.ranges[l] = new He(
                xe(e, i[l].anchor),
                xe(e, i[l].head)
              );
          },
          origin: n && n.origin
        };
        return We(e, "beforeSelectionChange", e, r), e.cm && We(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? lr(e.cm, r.ranges, r.ranges.length - 1) : t;
      }
      function Xs(e, t, n) {
        var r = e.history.done, i = Ee(r);
        i && i.ranges ? (r[r.length - 1] = t, ho(e, t, n)) : kt(e, t, n);
      }
      function kt(e, t, n) {
        ho(e, t, n), Nh(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
      }
      function ho(e, t, n) {
        (ct(e, "beforeSelectionChange") || e.cm && ct(e.cm, "beforeSelectionChange")) && (t = Ih(e, t, n));
        var r = n && n.bias || (U(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        qs(e, Zs(e, t, r, true)), !(n && n.scroll === false) && e.cm && e.cm.getOption("readOnly") != "nocursor" && Dn(e.cm);
      }
      function qs(e, t) {
        t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = true, ln(e.cm)), gt(e, "cursorActivity", e));
      }
      function Js(e) {
        qs(e, Zs(e, e.sel, null, false));
      }
      function Zs(e, t, n, r) {
        for (var i, l = 0; l < t.ranges.length; l++) {
          var u = t.ranges[l], c = t.ranges.length == e.sel.ranges.length && e.sel.ranges[l], d = po(e, u.anchor, c && c.anchor, n, r), v = u.head == u.anchor ? d : po(e, u.head, c && c.head, n, r);
          (i || d != u.anchor || v != u.head) && (i || (i = t.ranges.slice(0, l)), i[l] = new He(d, v));
        }
        return i ? lr(e.cm, i, t.primIndex) : t;
      }
      function Pn(e, t, n, r, i) {
        var l = pe(e, t.line);
        if (l.markedSpans)
          for (var u = 0; u < l.markedSpans.length; ++u) {
            var c = l.markedSpans[u], d = c.marker, v = "selectLeft" in d ? !d.selectLeft : d.inclusiveLeft, k = "selectRight" in d ? !d.selectRight : d.inclusiveRight;
            if ((c.from == null || (v ? c.from <= t.ch : c.from < t.ch)) && (c.to == null || (k ? c.to >= t.ch : c.to > t.ch))) {
              if (i && (We(d, "beforeCursorEnter"), d.explicitlyCleared))
                if (l.markedSpans) {
                  --u;
                  continue;
                } else
                  break;
              if (!d.atomic)
                continue;
              if (n) {
                var L = d.find(r < 0 ? 1 : -1), P = void 0;
                if ((r < 0 ? k : v) && (L = Qs(e, L, -r, L && L.line == t.line ? l : null)), L && L.line == t.line && (P = U(L, n)) && (r < 0 ? P < 0 : P > 0))
                  return Pn(e, L, t, r, i);
              }
              var F = d.find(r < 0 ? -1 : 1);
              return (r < 0 ? v : k) && (F = Qs(e, F, r, F.line == t.line ? l : null)), F ? Pn(e, F, t, r, i) : null;
            }
          }
        return t;
      }
      function po(e, t, n, r, i) {
        var l = r || 1, u = Pn(e, t, n, l, i) || !i && Pn(e, t, n, l, true) || Pn(e, t, n, -l, i) || !i && Pn(e, t, n, -l, true);
        return u || (e.cantEdit = true, D(e.first, 0));
      }
      function Qs(e, t, n, r) {
        return n < 0 && t.ch == 0 ? t.line > e.first ? xe(e, D(t.line - 1)) : null : n > 0 && t.ch == (r || pe(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? D(t.line + 1, 0) : null : new D(t.line, t.ch + n);
      }
      function eu(e) {
        e.setSelection(D(e.firstLine(), 0), D(e.lastLine()), $e);
      }
      function tu(e, t, n) {
        var r = {
          canceled: false,
          from: t.from,
          to: t.to,
          text: t.text,
          origin: t.origin,
          cancel: function() {
            return r.canceled = true;
          }
        };
        return n && (r.update = function(i, l, u, c) {
          i && (r.from = xe(e, i)), l && (r.to = xe(e, l)), u && (r.text = u), c !== void 0 && (r.origin = c);
        }), We(e, "beforeChange", e, r), e.cm && We(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: r.from, to: r.to, text: r.text, origin: r.origin };
      }
      function Bn(e, t, n) {
        if (e.cm) {
          if (!e.cm.curOp)
            return mt(e.cm, Bn)(e, t, n);
          if (e.cm.state.suppressEdits)
            return;
        }
        if (!((ct(e, "beforeChange") || e.cm && ct(e.cm, "beforeChange")) && (t = tu(e, t, true), !t))) {
          var r = Vl && !n && Nc(e, t.from, t.to);
          if (r)
            for (var i = r.length - 1; i >= 0; --i)
              ru(e, { from: r[i].from, to: r[i].to, text: i ? [""] : t.text, origin: t.origin });
          else
            ru(e, t);
        }
      }
      function ru(e, t) {
        if (!(t.text.length == 1 && t.text[0] == "" && U(t.from, t.to) == 0)) {
          var n = Na(e, t);
          Us(e, t, n, e.cm ? e.cm.curOp.id : NaN), yi(e, t, n, ia(e, t));
          var r = [];
          Kr(e, function(i, l) {
            !l && Me(r, i.history) == -1 && (au(i.history, t), r.push(i.history)), yi(i, t, null, ia(i, t));
          });
        }
      }
      function vo(e, t, n) {
        var r = e.cm && e.cm.state.suppressEdits;
        if (!(r && !n)) {
          for (var i = e.history, l, u = e.sel, c = t == "undo" ? i.done : i.undone, d = t == "undo" ? i.undone : i.done, v = 0; v < c.length && (l = c[v], !(n ? l.ranges && !l.equals(e.sel) : !l.ranges)); v++)
            ;
          if (v != c.length) {
            for (i.lastOrigin = i.lastSelOrigin = null; ; )
              if (l = c.pop(), l.ranges) {
                if (fo(l, d), n && !l.equals(e.sel)) {
                  kt(e, l, { clearRedo: false });
                  return;
                }
                u = l;
              } else if (r) {
                c.push(l);
                return;
              } else
                break;
            var k = [];
            fo(u, d), d.push({ changes: k, generation: i.generation }), i.generation = l.generation || ++i.maxGeneration;
            for (var L = ct(e, "beforeChange") || e.cm && ct(e.cm, "beforeChange"), P = function(q) {
              var ie = l.changes[q];
              if (ie.origin = t, L && !tu(e, ie, false))
                return c.length = 0, {};
              k.push(Ia(e, ie));
              var se = q ? Na(e, ie) : Ee(c);
              yi(e, ie, se, Vs(e, ie)), !q && e.cm && e.cm.scrollIntoView({ from: ie.from, to: Vr(ie) });
              var he = [];
              Kr(e, function(ue, de) {
                !de && Me(he, ue.history) == -1 && (au(ue.history, ie), he.push(ue.history)), yi(ue, ie, null, Vs(ue, ie));
              });
            }, F = l.changes.length - 1; F >= 0; --F) {
              var G = P(F);
              if (G)
                return G.v;
            }
          }
        }
      }
      function nu(e, t) {
        if (t != 0 && (e.first += t, e.sel = new Kt(Cr(e.sel.ranges, function(i) {
          return new He(
            D(i.anchor.line + t, i.anchor.ch),
            D(i.head.line + t, i.head.ch)
          );
        }), e.sel.primIndex), e.cm)) {
          Dt(e.cm, e.first, e.first - t, t);
          for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
            $r(e.cm, r, "gutter");
        }
      }
      function yi(e, t, n, r) {
        if (e.cm && !e.cm.curOp)
          return mt(e.cm, yi)(e, t, n, r);
        if (t.to.line < e.first) {
          nu(e, t.text.length - 1 - (t.to.line - t.from.line));
          return;
        }
        if (!(t.from.line > e.lastLine())) {
          if (t.from.line < e.first) {
            var i = t.text.length - 1 - (e.first - t.from.line);
            nu(e, i), t = {
              from: D(e.first, 0),
              to: D(t.to.line + i, t.to.ch),
              text: [Ee(t.text)],
              origin: t.origin
            };
          }
          var l = e.lastLine();
          t.to.line > l && (t = {
            from: t.from,
            to: D(l, pe(e, l).text.length),
            text: [t.text[0]],
            origin: t.origin
          }), t.removed = _r(e, t.from, t.to), n || (n = Na(e, t)), e.cm ? Fh(e.cm, t, r) : Da(e, t, r), ho(e, n, $e), e.cantEdit && po(e, D(e.firstLine(), 0)) && (e.cantEdit = false);
        }
      }
      function Fh(e, t, n) {
        var r = e.doc, i = e.display, l = t.from, u = t.to, c = false, d = l.line;
        e.options.lineWrapping || (d = Re(or(pe(r, l.line))), r.iter(d, u.line + 1, function(F) {
          if (F == i.maxLine)
            return c = true, true;
        })), r.sel.contains(t.from, t.to) > -1 && ln(e), Da(r, t, n, Cs(e)), e.options.lineWrapping || (r.iter(d, l.line + t.text.length, function(F) {
          var G = Ji(F);
          G > i.maxLineLength && (i.maxLine = F, i.maxLineLength = G, i.maxLineChanged = true, c = false);
        }), c && (e.curOp.updateMaxLine = true)), xc(r, l.line), vi(e, 400);
        var v = t.text.length - (u.line - l.line) - 1;
        t.full ? Dt(e) : l.line == u.line && t.text.length == 1 && !Ws(e.doc, t) ? $r(e, l.line, "text") : Dt(e, l.line, u.line + 1, v);
        var k = ct(e, "changes"), L = ct(e, "change");
        if (L || k) {
          var P = {
            from: l,
            to: u,
            text: t.text,
            removed: t.removed,
            origin: t.origin
          };
          L && gt(e, "change", e, P), k && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(P);
        }
        e.display.selForContextMenu = null;
      }
      function Rn(e, t, n, r, i) {
        var l;
        r || (r = n), U(r, n) < 0 && (l = [r, n], n = l[0], r = l[1]), typeof t == "string" && (t = e.splitLines(t)), Bn(e, { from: n, to: r, text: t, origin: i });
      }
      function iu(e, t, n, r) {
        n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0);
      }
      function ou(e, t, n, r) {
        for (var i = 0; i < e.length; ++i) {
          var l = e[i], u = true;
          if (l.ranges) {
            l.copied || (l = e[i] = l.deepCopy(), l.copied = true);
            for (var c = 0; c < l.ranges.length; c++)
              iu(l.ranges[c].anchor, t, n, r), iu(l.ranges[c].head, t, n, r);
            continue;
          }
          for (var d = 0; d < l.changes.length; ++d) {
            var v = l.changes[d];
            if (n < v.from.line)
              v.from = D(v.from.line + r, v.from.ch), v.to = D(v.to.line + r, v.to.ch);
            else if (t <= v.to.line) {
              u = false;
              break;
            }
          }
          u || (e.splice(0, i + 1), i = 0);
        }
      }
      function au(e, t) {
        var n = t.from.line, r = t.to.line, i = t.text.length - (r - n) - 1;
        ou(e.done, n, r, i), ou(e.undone, n, r, i);
      }
      function bi(e, t, n, r) {
        var i = t, l = t;
        return typeof t == "number" ? l = pe(e, Vt(e, t)) : i = Re(t), i == null ? null : (r(l, i) && e.cm && $r(e.cm, i, n), l);
      }
      function wi(e) {
        this.lines = e, this.parent = null;
        for (var t = 0, n = 0; n < e.length; ++n)
          e[n].parent = this, t += e[n].height;
        this.height = t;
      }
      wi.prototype = {
        chunkSize: function() {
          return this.lines.length;
        },
        // Remove the n lines at offset 'at'.
        removeInner: function(e, t) {
          for (var n = e, r = e + t; n < r; ++n) {
            var i = this.lines[n];
            this.height -= i.height, Pc(i), gt(i, "delete");
          }
          this.lines.splice(e, t);
        },
        // Helper used to collapse a small branch into a single leaf.
        collapse: function(e) {
          e.push.apply(e, this.lines);
        },
        // Insert the given array of lines at offset 'at', count them as
        // having the given height.
        insertInner: function(e, t, n) {
          this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
          for (var r = 0; r < t.length; ++r)
            t[r].parent = this;
        },
        // Used to iterate over a part of the tree.
        iterN: function(e, t, n) {
          for (var r = e + t; e < r; ++e)
            if (n(this.lines[e]))
              return true;
        }
      };
      function Si(e) {
        this.children = e;
        for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
          var i = e[r];
          t += i.chunkSize(), n += i.height, i.parent = this;
        }
        this.size = t, this.height = n, this.parent = null;
      }
      Si.prototype = {
        chunkSize: function() {
          return this.size;
        },
        removeInner: function(e, t) {
          this.size -= t;
          for (var n = 0; n < this.children.length; ++n) {
            var r = this.children[n], i = r.chunkSize();
            if (e < i) {
              var l = Math.min(t, i - e), u = r.height;
              if (r.removeInner(e, l), this.height -= u - r.height, i == l && (this.children.splice(n--, 1), r.parent = null), (t -= l) == 0)
                break;
              e = 0;
            } else
              e -= i;
          }
          if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof wi))) {
            var c = [];
            this.collapse(c), this.children = [new wi(c)], this.children[0].parent = this;
          }
        },
        collapse: function(e) {
          for (var t = 0; t < this.children.length; ++t)
            this.children[t].collapse(e);
        },
        insertInner: function(e, t, n) {
          this.size += t.length, this.height += n;
          for (var r = 0; r < this.children.length; ++r) {
            var i = this.children[r], l = i.chunkSize();
            if (e <= l) {
              if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
                for (var u = i.lines.length % 25 + 25, c = u; c < i.lines.length; ) {
                  var d = new wi(i.lines.slice(c, c += 25));
                  i.height -= d.height, this.children.splice(++r, 0, d), d.parent = this;
                }
                i.lines = i.lines.slice(0, u), this.maybeSpill();
              }
              break;
            }
            e -= l;
          }
        },
        // When a node has grown, check whether it should be split.
        maybeSpill: function() {
          if (!(this.children.length <= 10)) {
            var e = this;
            do {
              var t = e.children.splice(e.children.length - 5, 5), n = new Si(t);
              if (e.parent) {
                e.size -= n.size, e.height -= n.height;
                var i = Me(e.parent.children, e);
                e.parent.children.splice(i + 1, 0, n);
              } else {
                var r = new Si(e.children);
                r.parent = e, e.children = [r, n], e = r;
              }
              n.parent = e.parent;
            } while (e.children.length > 10);
            e.parent.maybeSpill();
          }
        },
        iterN: function(e, t, n) {
          for (var r = 0; r < this.children.length; ++r) {
            var i = this.children[r], l = i.chunkSize();
            if (e < l) {
              var u = Math.min(t, l - e);
              if (i.iterN(e, u, n))
                return true;
              if ((t -= u) == 0)
                break;
              e = 0;
            } else
              e -= l;
          }
        }
      };
      var Ci = function(e, t, n) {
        if (n)
          for (var r in n)
            n.hasOwnProperty(r) && (this[r] = n[r]);
        this.doc = e, this.node = t;
      };
      Ci.prototype.clear = function() {
        var e = this.doc.cm, t = this.line.widgets, n = this.line, r = Re(n);
        if (!(r == null || !t)) {
          for (var i = 0; i < t.length; ++i)
            t[i] == this && t.splice(i--, 1);
          t.length || (n.widgets = null);
          var l = si(this);
          Qt(n, Math.max(0, n.height - l)), e && (jt(e, function() {
            lu(e, n, -l), $r(e, r, "widget");
          }), gt(e, "lineWidgetCleared", e, this, r));
        }
      }, Ci.prototype.changed = function() {
        var e = this, t = this.height, n = this.doc.cm, r = this.line;
        this.height = null;
        var i = si(this) - t;
        i && (jr(this.doc, r) || Qt(r, r.height + i), n && jt(n, function() {
          n.curOp.forceUpdate = true, lu(n, r, i), gt(n, "lineWidgetChanged", n, e, Re(r));
        }));
      }, ot(Ci);
      function lu(e, t, n) {
        Mr(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Ta(e, n);
      }
      function Ph(e, t, n, r) {
        var i = new Ci(e, n, r), l = e.cm;
        return l && i.noHScroll && (l.display.alignWidgets = true), bi(e, t, "widget", function(u) {
          var c = u.widgets || (u.widgets = []);
          if (i.insertAt == null ? c.push(i) : c.splice(Math.min(c.length, Math.max(0, i.insertAt)), 0, i), i.line = u, l && !jr(e, u)) {
            var d = Mr(u) < e.scrollTop;
            Qt(u, u.height + si(i)), d && Ta(l, i.height), l.curOp.forceUpdate = true;
          }
          return true;
        }), l && gt(l, "lineWidgetAdded", l, i, typeof t == "number" ? t : Re(t)), i;
      }
      var su = 0, Yr = function(e, t) {
        this.lines = [], this.type = t, this.doc = e, this.id = ++su;
      };
      Yr.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm, t = e && !e.curOp;
          if (t && pn(e), ct(this, "clear")) {
            var n = this.find();
            n && gt(this, "clear", n.from, n.to);
          }
          for (var r = null, i = null, l = 0; l < this.lines.length; ++l) {
            var u = this.lines[l], c = oi(u.markedSpans, this);
            e && !this.collapsed ? $r(e, Re(u), "text") : e && (c.to != null && (i = Re(u)), c.from != null && (r = Re(u))), u.markedSpans = Lc(u.markedSpans, c), c.from == null && this.collapsed && !jr(this.doc, u) && e && Qt(u, On(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var d = 0; d < this.lines.length; ++d) {
              var v = or(this.lines[d]), k = Ji(v);
              k > e.display.maxLineLength && (e.display.maxLine = v, e.display.maxLineLength = k, e.display.maxLineChanged = true);
            }
          r != null && e && this.collapsed && Dt(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = true, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = false, e && Js(e.doc)), e && gt(e, "markerCleared", e, this, r, i), t && vn(e), this.parent && this.parent.clear();
        }
      }, Yr.prototype.find = function(e, t) {
        e == null && this.type == "bookmark" && (e = 1);
        for (var n, r, i = 0; i < this.lines.length; ++i) {
          var l = this.lines[i], u = oi(l.markedSpans, this);
          if (u.from != null && (n = D(t ? l : Re(l), u.from), e == -1))
            return n;
          if (u.to != null && (r = D(t ? l : Re(l), u.to), e == 1))
            return r;
        }
        return n && { from: n, to: r };
      }, Yr.prototype.changed = function() {
        var e = this, t = this.find(-1, true), n = this, r = this.doc.cm;
        !t || !r || jt(r, function() {
          var i = t.line, l = Re(t.line), u = ha(r, l);
          if (u && (ps(u), r.curOp.selectionChanged = r.curOp.forceUpdate = true), r.curOp.updateMaxLine = true, !jr(n.doc, i) && n.height != null) {
            var c = n.height;
            n.height = null;
            var d = si(n) - c;
            d && Qt(i, i.height + d);
          }
          gt(r, "markerChanged", r, e);
        });
      }, Yr.prototype.attachLine = function(e) {
        if (!this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          (!t.maybeHiddenMarkers || Me(t.maybeHiddenMarkers, this) == -1) && (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(e);
      }, Yr.prototype.detachLine = function(e) {
        if (this.lines.splice(Me(this.lines, e), 1), !this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
        }
      }, ot(Yr);
      function Hn(e, t, n, r, i) {
        if (r && r.shared)
          return Bh(e, t, n, r, i);
        if (e.cm && !e.cm.curOp)
          return mt(e.cm, Hn)(e, t, n, r, i);
        var l = new Yr(e, i), u = U(t, n);
        if (r && Se(r, l, false), u > 0 || u == 0 && l.clearWhenEmpty !== false)
          return l;
        if (l.replacedWith && (l.collapsed = true, l.widgetNode = Ve("span", [l.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || l.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (l.widgetNode.insertLeft = true)), l.collapsed) {
          if (Zl(e, t.line, t, n, l) || t.line != n.line && Zl(e, n.line, t, n, l))
            throw new Error("Inserting collapsed marker partially overlapping an existing one");
          _c();
        }
        l.addToHistory && Us(e, { from: t, to: n, origin: "markText" }, e.sel, NaN);
        var c = t.line, d = e.cm, v;
        if (e.iter(c, n.line + 1, function(L) {
          d && l.collapsed && !d.options.lineWrapping && or(L) == d.display.maxLine && (v = true), l.collapsed && c != t.line && Qt(L, 0), Mc(L, new Ki(
            l,
            c == t.line ? t.ch : null,
            c == n.line ? n.ch : null
          ), e.cm && e.cm.curOp), ++c;
        }), l.collapsed && e.iter(t.line, n.line + 1, function(L) {
          jr(e, L) && Qt(L, 0);
        }), l.clearOnEnter && re(l, "beforeCursorEnter", function() {
          return l.clear();
        }), l.readOnly && (Tc(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), l.collapsed && (l.id = ++su, l.atomic = true), d) {
          if (v && (d.curOp.updateMaxLine = true), l.collapsed)
            Dt(d, t.line, n.line + 1);
          else if (l.className || l.startStyle || l.endStyle || l.css || l.attributes || l.title)
            for (var k = t.line; k <= n.line; k++)
              $r(d, k, "text");
          l.atomic && Js(d.doc), gt(d, "markerAdded", d, l);
        }
        return l;
      }
      var ki = function(e, t) {
        this.markers = e, this.primary = t;
        for (var n = 0; n < e.length; ++n)
          e[n].parent = this;
      };
      ki.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = true;
          for (var e = 0; e < this.markers.length; ++e)
            this.markers[e].clear();
          gt(this, "clear");
        }
      }, ki.prototype.find = function(e, t) {
        return this.primary.find(e, t);
      }, ot(ki);
      function Bh(e, t, n, r, i) {
        r = Se(r), r.shared = false;
        var l = [Hn(e, t, n, r, i)], u = l[0], c = r.widgetNode;
        return Kr(e, function(d) {
          c && (r.widgetNode = c.cloneNode(true)), l.push(Hn(d, xe(d, t), xe(d, n), r, i));
          for (var v = 0; v < d.linked.length; ++v)
            if (d.linked[v].isParent)
              return;
          u = Ee(l);
        }), new ki(l, u);
      }
      function uu(e) {
        return e.findMarks(D(e.first, 0), e.clipPos(D(e.lastLine())), function(t) {
          return t.parent;
        });
      }
      function Rh(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n], i = r.find(), l = e.clipPos(i.from), u = e.clipPos(i.to);
          if (U(l, u)) {
            var c = Hn(e, l, u, r.primary, r.primary.type);
            r.markers.push(c), c.parent = r;
          }
        }
      }
      function Hh(e) {
        for (var t = function(r) {
          var i = e[r], l = [i.primary.doc];
          Kr(i.primary.doc, function(d) {
            return l.push(d);
          });
          for (var u = 0; u < i.markers.length; u++) {
            var c = i.markers[u];
            Me(l, c.doc) == -1 && (c.parent = null, i.markers.splice(u--, 1));
          }
        }, n = 0; n < e.length; n++)
          t(n);
      }
      var Wh = 0, It = function(e, t, n, r, i) {
        if (!(this instanceof It))
          return new It(e, t, n, r, i);
        n == null && (n = 0), Si.call(this, [new wi([new Ln("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = false, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
        var l = D(n, 0);
        this.sel = Gr(l), this.history = new uo(null), this.id = ++Wh, this.modeOption = t, this.lineSep = r, this.direction = i == "rtl" ? "rtl" : "ltr", this.extend = false, typeof e == "string" && (e = this.splitLines(e)), Da(this, { from: l, to: l, text: e }), kt(this, Gr(l), $e);
      };
      It.prototype = I(Si.prototype, {
        constructor: It,
        // Iterate over the document. Supports two forms -- with only one
        // argument, it calls that for each line in the document. With
        // three, it iterates over the range given by the first two (with
        // the second being non-inclusive).
        iter: function(e, t, n) {
          n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
        },
        // Non-public interface for adding and removing lines.
        insert: function(e, t) {
          for (var n = 0, r = 0; r < t.length; ++r)
            n += t[r].height;
          this.insertInner(e - this.first, t, n);
        },
        remove: function(e, t) {
          this.removeInner(e - this.first, t);
        },
        // From here, the methods are part of the public interface. Most
        // are also available from CodeMirror (editor) instances.
        getValue: function(e) {
          var t = _n(this, this.first, this.first + this.size);
          return e === false ? t : t.join(e || this.lineSeparator());
        },
        setValue: yt(function(e) {
          var t = D(this.first, 0), n = this.first + this.size - 1;
          Bn(this, {
            from: t,
            to: D(n, pe(this, n).text.length),
            text: this.splitLines(e),
            origin: "setValue",
            full: true
          }, true), this.cm && ci(this.cm, 0, 0), kt(this, Gr(t), $e);
        }),
        replaceRange: function(e, t, n, r) {
          t = xe(this, t), n = n ? xe(this, n) : t, Rn(this, e, t, n, r);
        },
        getRange: function(e, t, n) {
          var r = _r(this, xe(this, e), xe(this, t));
          return n === false ? r : n === "" ? r.join("") : r.join(n || this.lineSeparator());
        },
        getLine: function(e) {
          var t = this.getLineHandle(e);
          return t && t.text;
        },
        getLineHandle: function(e) {
          if (y(this, e))
            return pe(this, e);
        },
        getLineNumber: function(e) {
          return Re(e);
        },
        getLineHandleVisualStart: function(e) {
          return typeof e == "number" && (e = pe(this, e)), or(e);
        },
        lineCount: function() {
          return this.size;
        },
        firstLine: function() {
          return this.first;
        },
        lastLine: function() {
          return this.first + this.size - 1;
        },
        clipPos: function(e) {
          return xe(this, e);
        },
        getCursor: function(e) {
          var t = this.sel.primary(), n;
          return e == null || e == "head" ? n = t.head : e == "anchor" ? n = t.anchor : e == "end" || e == "to" || e === false ? n = t.to() : n = t.from(), n;
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: yt(function(e, t, n) {
          Ys(this, xe(this, typeof e == "number" ? D(e, t || 0) : e), null, n);
        }),
        setSelection: yt(function(e, t, n) {
          Ys(this, xe(this, e), xe(this, t || e), n);
        }),
        extendSelection: yt(function(e, t, n) {
          co(this, xe(this, e), t && xe(this, t), n);
        }),
        extendSelections: yt(function(e, t) {
          Ks(this, Rl(this, e), t);
        }),
        extendSelectionsBy: yt(function(e, t) {
          var n = Cr(this.sel.ranges, e);
          Ks(this, Rl(this, n), t);
        }),
        setSelections: yt(function(e, t, n) {
          if (e.length) {
            for (var r = [], i = 0; i < e.length; i++)
              r[i] = new He(
                xe(this, e[i].anchor),
                xe(this, e[i].head || e[i].anchor)
              );
            t == null && (t = Math.min(e.length - 1, this.sel.primIndex)), kt(this, lr(this.cm, r, t), n);
          }
        }),
        addSelection: yt(function(e, t, n) {
          var r = this.sel.ranges.slice(0);
          r.push(new He(xe(this, e), xe(this, t || e))), kt(this, lr(this.cm, r, r.length - 1), n);
        }),
        getSelection: function(e) {
          for (var t = this.sel.ranges, n, r = 0; r < t.length; r++) {
            var i = _r(this, t[r].from(), t[r].to());
            n = n ? n.concat(i) : i;
          }
          return e === false ? n : n.join(e || this.lineSeparator());
        },
        getSelections: function(e) {
          for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
            var i = _r(this, n[r].from(), n[r].to());
            e !== false && (i = i.join(e || this.lineSeparator())), t[r] = i;
          }
          return t;
        },
        replaceSelection: function(e, t, n) {
          for (var r = [], i = 0; i < this.sel.ranges.length; i++)
            r[i] = e;
          this.replaceSelections(r, t, n || "+input");
        },
        replaceSelections: yt(function(e, t, n) {
          for (var r = [], i = this.sel, l = 0; l < i.ranges.length; l++) {
            var u = i.ranges[l];
            r[l] = { from: u.from(), to: u.to(), text: this.splitLines(e[l]), origin: n };
          }
          for (var c = t && t != "end" && Lh(this, r, t), d = r.length - 1; d >= 0; d--)
            Bn(this, r[d]);
          c ? Xs(this, c) : this.cm && Dn(this.cm);
        }),
        undo: yt(function() {
          vo(this, "undo");
        }),
        redo: yt(function() {
          vo(this, "redo");
        }),
        undoSelection: yt(function() {
          vo(this, "undo", true);
        }),
        redoSelection: yt(function() {
          vo(this, "redo", true);
        }),
        setExtending: function(e) {
          this.extend = e;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++)
            e.done[r].ranges || ++t;
          for (var i = 0; i < e.undone.length; i++)
            e.undone[i].ranges || ++n;
          return { undo: t, redo: n };
        },
        clearHistory: function() {
          var e = this;
          this.history = new uo(this.history), Kr(this, function(t) {
            return t.history = e.history;
          }, true);
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(true);
        },
        changeGeneration: function(e) {
          return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
        },
        isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function() {
          return {
            done: Fn(this.history.done),
            undone: Fn(this.history.undone)
          };
        },
        setHistory: function(e) {
          var t = this.history = new uo(this.history);
          t.done = Fn(e.done.slice(0), null, true), t.undone = Fn(e.undone.slice(0), null, true);
        },
        setGutterMarker: yt(function(e, t, n) {
          return bi(this, e, "gutter", function(r) {
            var i = r.gutterMarkers || (r.gutterMarkers = {});
            return i[t] = n, !n && J(i) && (r.gutterMarkers = null), true;
          });
        }),
        clearGutter: yt(function(e) {
          var t = this;
          this.iter(function(n) {
            n.gutterMarkers && n.gutterMarkers[e] && bi(t, n, "gutter", function() {
              return n.gutterMarkers[e] = null, J(n.gutterMarkers) && (n.gutterMarkers = null), true;
            });
          });
        }),
        lineInfo: function(e) {
          var t;
          if (typeof e == "number") {
            if (!y(this, e) || (t = e, e = pe(this, e), !e))
              return null;
          } else if (t = Re(e), t == null)
            return null;
          return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets
          };
        },
        addLineClass: yt(function(e, t, n) {
          return bi(this, e, t == "gutter" ? "gutter" : "class", function(r) {
            var i = t == "text" ? "textClass" : t == "background" ? "bgClass" : t == "gutter" ? "gutterClass" : "wrapClass";
            if (!r[i])
              r[i] = n;
            else {
              if (ae(n).test(r[i]))
                return false;
              r[i] += " " + n;
            }
            return true;
          });
        }),
        removeLineClass: yt(function(e, t, n) {
          return bi(this, e, t == "gutter" ? "gutter" : "class", function(r) {
            var i = t == "text" ? "textClass" : t == "background" ? "bgClass" : t == "gutter" ? "gutterClass" : "wrapClass", l = r[i];
            if (l)
              if (n == null)
                r[i] = null;
              else {
                var u = l.match(ae(n));
                if (!u)
                  return false;
                var c = u.index + u[0].length;
                r[i] = l.slice(0, u.index) + (!u.index || c == l.length ? "" : " ") + l.slice(c) || null;
              }
            else
              return false;
            return true;
          });
        }),
        addLineWidget: yt(function(e, t, n) {
          return Ph(this, e, t, n);
        }),
        removeLineWidget: function(e) {
          e.clear();
        },
        markText: function(e, t, n) {
          return Hn(this, xe(this, e), xe(this, t), n, n && n.type || "range");
        },
        setBookmark: function(e, t) {
          var n = {
            replacedWith: t && (t.nodeType == null ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: false,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents
          };
          return e = xe(this, e), Hn(this, e, e, n, "bookmark");
        },
        findMarksAt: function(e) {
          e = xe(this, e);
          var t = [], n = pe(this, e.line).markedSpans;
          if (n)
            for (var r = 0; r < n.length; ++r) {
              var i = n[r];
              (i.from == null || i.from <= e.ch) && (i.to == null || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
            }
          return t;
        },
        findMarks: function(e, t, n) {
          e = xe(this, e), t = xe(this, t);
          var r = [], i = e.line;
          return this.iter(e.line, t.line + 1, function(l) {
            var u = l.markedSpans;
            if (u)
              for (var c = 0; c < u.length; c++) {
                var d = u[c];
                !(d.to != null && i == e.line && e.ch >= d.to || d.from == null && i != e.line || d.from != null && i == t.line && d.from >= t.ch) && (!n || n(d.marker)) && r.push(d.marker.parent || d.marker);
              }
            ++i;
          }), r;
        },
        getAllMarks: function() {
          var e = [];
          return this.iter(function(t) {
            var n = t.markedSpans;
            if (n)
              for (var r = 0; r < n.length; ++r)
                n[r].from != null && e.push(n[r].marker);
          }), e;
        },
        posFromIndex: function(e) {
          var t, n = this.first, r = this.lineSeparator().length;
          return this.iter(function(i) {
            var l = i.text.length + r;
            if (l > e)
              return t = e, true;
            e -= l, ++n;
          }), xe(this, D(n, t));
        },
        indexFromPos: function(e) {
          e = xe(this, e);
          var t = e.ch;
          if (e.line < this.first || e.ch < 0)
            return 0;
          var n = this.lineSeparator().length;
          return this.iter(this.first, e.line, function(r) {
            t += r.text.length + n;
          }), t;
        },
        copy: function(e) {
          var t = new It(
            _n(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = false, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t;
        },
        linkedDoc: function(e) {
          e || (e = {});
          var t = this.first, n = this.first + this.size;
          e.from != null && e.from > t && (t = e.from), e.to != null && e.to < n && (n = e.to);
          var r = new It(_n(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
          return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }), r.linked = [{ doc: this, isParent: true, sharedHist: e.sharedHist }], Rh(r, uu(this)), r;
        },
        unlinkDoc: function(e) {
          if (e instanceof qe && (e = e.doc), this.linked)
            for (var t = 0; t < this.linked.length; ++t) {
              var n = this.linked[t];
              if (n.doc == e) {
                this.linked.splice(t, 1), e.unlinkDoc(this), Hh(uu(this));
                break;
              }
            }
          if (e.history == this.history) {
            var r = [e.id];
            Kr(e, function(i) {
              return r.push(i.id);
            }, true), e.history = new uo(null), e.history.done = Fn(this.history.done, r), e.history.undone = Fn(this.history.undone, r);
          }
        },
        iterLinkedDocs: function(e) {
          Kr(this, e);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : ri(e);
        },
        lineSeparator: function() {
          return this.lineSep || `
`;
        },
        setDirection: yt(function(e) {
          e != "rtl" && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(t) {
            return t.order = null;
          }), this.cm && Mh(this.cm));
        })
      }), It.prototype.eachLine = It.prototype.iter;
      var fu = 0;
      function zh(e) {
        var t = this;
        if (cu(t), !(Xe(t, e) || Er(t.display, e))) {
          rt(e), C && (fu = +/* @__PURE__ */ new Date());
          var n = fn(t, e, true), r = e.dataTransfer.files;
          if (!(!n || t.isReadOnly()))
            if (r && r.length && window.FileReader && window.File)
              for (var i = r.length, l = Array(i), u = 0, c = function() {
                ++u == i && mt(t, function() {
                  n = xe(t.doc, n);
                  var F = {
                    from: n,
                    to: n,
                    text: t.doc.splitLines(
                      l.filter(function(G) {
                        return G != null;
                      }).join(t.doc.lineSeparator())
                    ),
                    origin: "paste"
                  };
                  Bn(t.doc, F), Xs(t.doc, Gr(xe(t.doc, n), xe(t.doc, Vr(F))));
                })();
              }, d = function(F, G) {
                if (t.options.allowDropFileTypes && Me(t.options.allowDropFileTypes, F.type) == -1) {
                  c();
                  return;
                }
                var q = new FileReader();
                q.onerror = function() {
                  return c();
                }, q.onload = function() {
                  var ie = q.result;
                  if (/[\x00-\x08\x0e-\x1f]{2}/.test(ie)) {
                    c();
                    return;
                  }
                  l[G] = ie, c();
                }, q.readAsText(F);
              }, v = 0; v < r.length; v++)
                d(r[v], v);
            else {
              if (t.state.draggingText && t.doc.sel.contains(n) > -1) {
                t.state.draggingText(e), setTimeout(function() {
                  return t.display.input.focus();
                }, 20);
                return;
              }
              try {
                var k = e.dataTransfer.getData("Text");
                if (k) {
                  var L;
                  if (t.state.draggingText && !t.state.draggingText.copy && (L = t.listSelections()), ho(t.doc, Gr(n, n)), L)
                    for (var P = 0; P < L.length; ++P)
                      Rn(t.doc, "", L[P].anchor, L[P].head, "drag");
                  t.replaceSelection(k, "around", "paste"), t.display.input.focus();
                }
              } catch {
              }
            }
        }
      }
      function jh(e, t) {
        if (C && (!e.state.draggingText || +/* @__PURE__ */ new Date() - fu < 100)) {
          kr(t);
          return;
        }
        if (!(Xe(e, t) || Er(e.display, t)) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !A)) {
          var n = O("img", null, null, "position: fixed; left: 0; top: 0;");
          n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", E && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), E && n.parentNode.removeChild(n);
        }
      }
      function $h(e, t) {
        var n = fn(e, t);
        if (n) {
          var r = document.createDocumentFragment();
          wa(e, n, r), e.display.dragCursor || (e.display.dragCursor = O("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), ne(e.display.dragCursor, r);
        }
      }
      function cu(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
      }
      function hu(e) {
        if (document.getElementsByClassName) {
          for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
            var i = t[r].CodeMirror;
            i && n.push(i);
          }
          n.length && n[0].operation(function() {
            for (var l = 0; l < n.length; l++)
              e(n[l]);
          });
        }
      }
      var du = false;
      function Uh() {
        du || (Gh(), du = true);
      }
      function Gh() {
        var e;
        re(window, "resize", function() {
          e == null && (e = setTimeout(function() {
            e = null, hu(Vh);
          }, 100));
        }), re(window, "blur", function() {
          return hu(An);
        });
      }
      function Vh(e) {
        var t = e.display;
        t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = false, e.setSize();
      }
      for (var Xr = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Mod",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
      }, xi = 0; xi < 10; xi++)
        Xr[xi + 48] = Xr[xi + 96] = String(xi);
      for (var go = 65; go <= 90; go++)
        Xr[go] = String.fromCharCode(go);
      for (var Ti = 1; Ti <= 12; Ti++)
        Xr[Ti + 111] = Xr[Ti + 63235] = "F" + Ti;
      var Nr = {};
      Nr.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
      }, Nr.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
      }, Nr.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
      }, Nr.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
      }, Nr.default = Z ? Nr.macDefault : Nr.pcDefault;
      function Kh(e) {
        var t = e.split(/-(?!$)/);
        e = t[t.length - 1];
        for (var n, r, i, l, u = 0; u < t.length - 1; u++) {
          var c = t[u];
          if (/^(cmd|meta|m)$/i.test(c))
            l = true;
          else if (/^a(lt)?$/i.test(c))
            n = true;
          else if (/^(c|ctrl|control)$/i.test(c))
            r = true;
          else if (/^s(hift)?$/i.test(c))
            i = true;
          else
            throw new Error("Unrecognized modifier name: " + c);
        }
        return n && (e = "Alt-" + e), r && (e = "Ctrl-" + e), l && (e = "Cmd-" + e), i && (e = "Shift-" + e), e;
      }
      function Yh(e) {
        var t = {};
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            var r = e[n];
            if (/^(name|fallthrough|(de|at)tach)$/.test(n))
              continue;
            if (r == "...") {
              delete e[n];
              continue;
            }
            for (var i = Cr(n.split(" "), Kh), l = 0; l < i.length; l++) {
              var u = void 0, c = void 0;
              l == i.length - 1 ? (c = i.join(" "), u = r) : (c = i.slice(0, l + 1).join(" "), u = "...");
              var d = t[c];
              if (!d)
                t[c] = u;
              else if (d != u)
                throw new Error("Inconsistent bindings for " + c);
            }
            delete e[n];
          }
        for (var v in t)
          e[v] = t[v];
        return e;
      }
      function Wn(e, t, n, r) {
        t = mo(t);
        var i = t.call ? t.call(e, r) : t[e];
        if (i === false)
          return "nothing";
        if (i === "...")
          return "multi";
        if (i != null && n(i))
          return "handled";
        if (t.fallthrough) {
          if (Object.prototype.toString.call(t.fallthrough) != "[object Array]")
            return Wn(e, t.fallthrough, n, r);
          for (var l = 0; l < t.fallthrough.length; l++) {
            var u = Wn(e, t.fallthrough[l], n, r);
            if (u)
              return u;
          }
        }
      }
      function pu(e) {
        var t = typeof e == "string" ? e : Xr[e.keyCode];
        return t == "Ctrl" || t == "Alt" || t == "Shift" || t == "Mod";
      }
      function vu(e, t, n) {
        var r = e;
        return t.altKey && r != "Alt" && (e = "Alt-" + e), (Q ? t.metaKey : t.ctrlKey) && r != "Ctrl" && (e = "Ctrl-" + e), (Q ? t.ctrlKey : t.metaKey) && r != "Mod" && (e = "Cmd-" + e), !n && t.shiftKey && r != "Shift" && (e = "Shift-" + e), e;
      }
      function gu(e, t) {
        if (E && e.keyCode == 34 && e.char)
          return false;
        var n = Xr[e.keyCode];
        return n == null || e.altGraphKey ? false : (e.keyCode == 3 && e.code && (n = e.code), vu(n, e, t));
      }
      function mo(e) {
        return typeof e == "string" ? Nr[e] : e;
      }
      function zn(e, t) {
        for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
          for (var l = t(n[i]); r.length && U(l.from, Ee(r).to) <= 0; ) {
            var u = r.pop();
            if (U(u.from, l.from) < 0) {
              l.from = u.from;
              break;
            }
          }
          r.push(l);
        }
        jt(e, function() {
          for (var c = r.length - 1; c >= 0; c--)
            Rn(e.doc, "", r[c].from, r[c].to, "+delete");
          Dn(e);
        });
      }
      function Ba(e, t, n) {
        var r = ye(e.text, t + n, n);
        return r < 0 || r > e.text.length ? null : r;
      }
      function Ra(e, t, n) {
        var r = Ba(e, t.ch, n);
        return r == null ? null : new D(t.line, r, n < 0 ? "after" : "before");
      }
      function Ha(e, t, n, r, i) {
        if (e) {
          t.doc.direction == "rtl" && (i = -i);
          var l = Ue(n, t.doc.direction);
          if (l) {
            var u = i < 0 ? Ee(l) : l[0], c = i < 0 == (u.level == 1), d = c ? "after" : "before", v;
            if (u.level > 0 || t.doc.direction == "rtl") {
              var k = En(t, n);
              v = i < 0 ? n.text.length - 1 : 0;
              var L = wr(t, k, v).top;
              v = ve(function(P) {
                return wr(t, k, P).top == L;
              }, i < 0 == (u.level == 1) ? u.from : u.to - 1, v), d == "before" && (v = Ba(n, v, 1));
            } else
              v = i < 0 ? u.to : u.from;
            return new D(r, v, d);
          }
        }
        return new D(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
      }
      function Xh(e, t, n, r) {
        var i = Ue(t, e.doc.direction);
        if (!i)
          return Ra(t, n, r);
        n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
        var l = Ne(i, n.ch, n.sticky), u = i[l];
        if (e.doc.direction == "ltr" && u.level % 2 == 0 && (r > 0 ? u.to > n.ch : u.from < n.ch))
          return Ra(t, n, r);
        var c = function(se, he) {
          return Ba(t, se instanceof D ? se.ch : se, he);
        }, d, v = function(se) {
          return e.options.lineWrapping ? (d = d || En(e, t), Ss(e, t, d, se)) : { begin: 0, end: t.text.length };
        }, k = v(n.sticky == "before" ? c(n, -1) : n.ch);
        if (e.doc.direction == "rtl" || u.level == 1) {
          var L = u.level == 1 == r < 0, P = c(n, L ? 1 : -1);
          if (P != null && (L ? P <= u.to && P <= k.end : P >= u.from && P >= k.begin)) {
            var F = L ? "before" : "after";
            return new D(n.line, P, F);
          }
        }
        var G = function(se, he, ue) {
          for (var de = function(Ge, bt) {
            return bt ? new D(n.line, c(Ge, 1), "before") : new D(n.line, Ge, "after");
          }; se >= 0 && se < i.length; se += he) {
            var be = i[se], me = he > 0 == (be.level != 1), Le = me ? ue.begin : c(ue.end, -1);
            if (be.from <= Le && Le < be.to || (Le = me ? be.from : c(be.to, -1), ue.begin <= Le && Le < ue.end))
              return de(Le, me);
          }
        }, q = G(l + r, r, k);
        if (q)
          return q;
        var ie = r > 0 ? k.end : c(k.begin, -1);
        return ie != null && !(r > 0 && ie == t.text.length) && (q = G(r > 0 ? 0 : i.length - 1, r, v(ie)), q) ? q : null;
      }
      var _i = {
        selectAll: eu,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), $e);
        },
        killLine: function(e) {
          return zn(e, function(t) {
            if (t.empty()) {
              var n = pe(e.doc, t.head.line).text.length;
              return t.head.ch == n && t.head.line < e.lastLine() ? { from: t.head, to: D(t.head.line + 1, 0) } : { from: t.head, to: D(t.head.line, n) };
            } else
              return { from: t.from(), to: t.to() };
          });
        },
        deleteLine: function(e) {
          return zn(e, function(t) {
            return {
              from: D(t.from().line, 0),
              to: xe(e.doc, D(t.to().line + 1, 0))
            };
          });
        },
        delLineLeft: function(e) {
          return zn(e, function(t) {
            return {
              from: D(t.from().line, 0),
              to: t.from()
            };
          });
        },
        delWrappedLineLeft: function(e) {
          return zn(e, function(t) {
            var n = e.charCoords(t.head, "div").top + 5, r = e.coordsChar({ left: 0, top: n }, "div");
            return { from: r, to: t.from() };
          });
        },
        delWrappedLineRight: function(e) {
          return zn(e, function(t) {
            var n = e.charCoords(t.head, "div").top + 5, r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");
            return { from: t.from(), to: r };
          });
        },
        undo: function(e) {
          return e.undo();
        },
        redo: function(e) {
          return e.redo();
        },
        undoSelection: function(e) {
          return e.undoSelection();
        },
        redoSelection: function(e) {
          return e.redoSelection();
        },
        goDocStart: function(e) {
          return e.extendSelection(D(e.firstLine(), 0));
        },
        goDocEnd: function(e) {
          return e.extendSelection(D(e.lastLine()));
        },
        goLineStart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return mu(e, t.head.line);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineStartSmart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return yu(e, t.head);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineEnd: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return qh(e, t.head.line);
            },
            { origin: "+move", bias: -1 }
          );
        },
        goLineRight: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");
          }, dr);
        },
        goLineLeft: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar({ left: 0, top: n }, "div");
          }, dr);
        },
        goLineLeftSmart: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, "div").top + 5, r = e.coordsChar({ left: 0, top: n }, "div");
            return r.ch < e.getLine(r.line).search(/\S/) ? yu(e, t.head) : r;
          }, dr);
        },
        goLineUp: function(e) {
          return e.moveV(-1, "line");
        },
        goLineDown: function(e) {
          return e.moveV(1, "line");
        },
        goPageUp: function(e) {
          return e.moveV(-1, "page");
        },
        goPageDown: function(e) {
          return e.moveV(1, "page");
        },
        goCharLeft: function(e) {
          return e.moveH(-1, "char");
        },
        goCharRight: function(e) {
          return e.moveH(1, "char");
        },
        goColumnLeft: function(e) {
          return e.moveH(-1, "column");
        },
        goColumnRight: function(e) {
          return e.moveH(1, "column");
        },
        goWordLeft: function(e) {
          return e.moveH(-1, "word");
        },
        goGroupRight: function(e) {
          return e.moveH(1, "group");
        },
        goGroupLeft: function(e) {
          return e.moveH(-1, "group");
        },
        goWordRight: function(e) {
          return e.moveH(1, "word");
        },
        delCharBefore: function(e) {
          return e.deleteH(-1, "codepoint");
        },
        delCharAfter: function(e) {
          return e.deleteH(1, "char");
        },
        delWordBefore: function(e) {
          return e.deleteH(-1, "word");
        },
        delWordAfter: function(e) {
          return e.deleteH(1, "word");
        },
        delGroupBefore: function(e) {
          return e.deleteH(-1, "group");
        },
        delGroupAfter: function(e) {
          return e.deleteH(1, "group");
        },
        indentAuto: function(e) {
          return e.indentSelection("smart");
        },
        indentMore: function(e) {
          return e.indentSelection("add");
        },
        indentLess: function(e) {
          return e.indentSelection("subtract");
        },
        insertTab: function(e) {
          return e.replaceSelection("	");
        },
        insertSoftTab: function(e) {
          for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
            var l = n[i].from(), u = ge(e.getLine(l.line), l.ch, r);
            t.push(Jt(r - u % r));
          }
          e.replaceSelections(t);
        },
        defaultTab: function(e) {
          e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
        },
        // Swap the two chars left and right of each selection's head.
        // Move cursor behind the two swapped characters afterwards.
        //
        // Doesn't consider line feeds a character.
        // Doesn't scan more than one line above to find a character.
        // Doesn't do anything on an empty line.
        // Doesn't do anything with non-empty selections.
        transposeChars: function(e) {
          return jt(e, function() {
            for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
              if (t[r].empty()) {
                var i = t[r].head, l = pe(e.doc, i.line).text;
                if (l) {
                  if (i.ch == l.length && (i = new D(i.line, i.ch - 1)), i.ch > 0)
                    i = new D(i.line, i.ch + 1), e.replaceRange(
                      l.charAt(i.ch - 1) + l.charAt(i.ch - 2),
                      D(i.line, i.ch - 2),
                      i,
                      "+transpose"
                    );
                  else if (i.line > e.doc.first) {
                    var u = pe(e.doc, i.line - 1).text;
                    u && (i = new D(i.line, 1), e.replaceRange(
                      l.charAt(0) + e.doc.lineSeparator() + u.charAt(u.length - 1),
                      D(i.line - 1, u.length - 1),
                      i,
                      "+transpose"
                    ));
                  }
                }
                n.push(new He(i, i));
              }
            e.setSelections(n);
          });
        },
        newlineAndIndent: function(e) {
          return jt(e, function() {
            for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
              e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
            t = e.listSelections();
            for (var r = 0; r < t.length; r++)
              e.indentLine(t[r].from().line, null, true);
            Dn(e);
          });
        },
        openLine: function(e) {
          return e.replaceSelection(`
`, "start");
        },
        toggleOverwrite: function(e) {
          return e.toggleOverwrite();
        }
      };
      function mu(e, t) {
        var n = pe(e.doc, t), r = or(n);
        return r != n && (t = Re(r)), Ha(true, e, r, t, 1);
      }
      function qh(e, t) {
        var n = pe(e.doc, t), r = Dc(n);
        return r != n && (t = Re(r)), Ha(true, e, n, t, -1);
      }
      function yu(e, t) {
        var n = mu(e, t.line), r = pe(e.doc, n.line), i = Ue(r, e.doc.direction);
        if (!i || i[0].level == 0) {
          var l = Math.max(n.ch, r.text.search(/\S/)), u = t.line == n.line && t.ch <= l && t.ch;
          return D(n.line, u ? 0 : l, n.sticky);
        }
        return n;
      }
      function yo(e, t, n) {
        if (typeof t == "string" && (t = _i[t], !t))
          return false;
        e.display.input.ensurePolled();
        var r = e.display.shift, i = false;
        try {
          e.isReadOnly() && (e.state.suppressEdits = true), n && (e.display.shift = false), i = t(e) != De;
        } finally {
          e.display.shift = r, e.state.suppressEdits = false;
        }
        return i;
      }
      function Jh(e, t, n) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
          var i = Wn(t, e.state.keyMaps[r], n, e);
          if (i)
            return i;
        }
        return e.options.extraKeys && Wn(t, e.options.extraKeys, n, e) || Wn(t, e.options.keyMap, n, e);
      }
      var Zh = new Te();
      function Li(e, t, n, r) {
        var i = e.state.keySeq;
        if (i) {
          if (pu(t))
            return "handled";
          if (/\'$/.test(t) ? e.state.keySeq = null : Zh.set(50, function() {
            e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset());
          }), bu(e, i + " " + t, n, r))
            return true;
        }
        return bu(e, t, n, r);
      }
      function bu(e, t, n, r) {
        var i = Jh(e, t, r);
        return i == "multi" && (e.state.keySeq = t), i == "handled" && gt(e, "keyHandled", e, t, n), (i == "handled" || i == "multi") && (rt(n), Sa(e)), !!i;
      }
      function wu(e, t) {
        var n = gu(t, true);
        return n ? t.shiftKey && !e.state.keySeq ? Li(e, "Shift-" + n, t, function(r) {
          return yo(e, r, true);
        }) || Li(e, n, t, function(r) {
          if (typeof r == "string" ? /^go[A-Z]/.test(r) : r.motion)
            return yo(e, r);
        }) : Li(e, n, t, function(r) {
          return yo(e, r);
        }) : false;
      }
      function Qh(e, t, n) {
        return Li(e, "'" + n + "'", t, function(r) {
          return yo(e, r, true);
        });
      }
      var Wa = null;
      function Su(e) {
        var t = this;
        if (!(e.target && e.target != t.display.input.getField()) && (t.curOp.focus = Ze(Qe(t)), !Xe(t, e))) {
          C && w < 11 && e.keyCode == 27 && (e.returnValue = false);
          var n = e.keyCode;
          t.display.shift = n == 16 || e.shiftKey;
          var r = wu(t, e);
          E && (Wa = r ? n : null, !r && n == 88 && !vr && (Z ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), g && !Z && !r && n == 46 && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), n == 18 && !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) && ed(t);
        }
      }
      function ed(e) {
        var t = e.display.lineDiv;
        pt(t, "CodeMirror-crosshair");
        function n(r) {
          (r.keyCode == 18 || !r.altKey) && (ce(t, "CodeMirror-crosshair"), ft(document, "keyup", n), ft(document, "mouseover", n));
        }
        re(document, "keyup", n), re(document, "mouseover", n);
      }
      function Cu(e) {
        e.keyCode == 16 && (this.doc.sel.shift = false), Xe(this, e);
      }
      function ku(e) {
        var t = this;
        if (!(e.target && e.target != t.display.input.getField()) && !(Er(t.display, e) || Xe(t, e) || e.ctrlKey && !e.altKey || Z && e.metaKey)) {
          var n = e.keyCode, r = e.charCode;
          if (E && n == Wa) {
            Wa = null, rt(e);
            return;
          }
          if (!(E && (!e.which || e.which < 10) && wu(t, e))) {
            var i = String.fromCharCode(r ?? n);
            i != "\b" && (Qh(t, e, i) || t.display.input.onKeyPress(e));
          }
        }
      }
      var td = 400, za = function(e, t, n) {
        this.time = e, this.pos = t, this.button = n;
      };
      za.prototype.compare = function(e, t, n) {
        return this.time + td > e && U(t, this.pos) == 0 && n == this.button;
      };
      var Mi, Ei;
      function rd(e, t) {
        var n = +/* @__PURE__ */ new Date();
        return Ei && Ei.compare(n, e, t) ? (Mi = Ei = null, "triple") : Mi && Mi.compare(n, e, t) ? (Ei = new za(n, e, t), Mi = null, "double") : (Mi = new za(n, e, t), Ei = null, "single");
      }
      function xu(e) {
        var t = this, n = t.display;
        if (!(Xe(t, e) || n.activeTouch && n.input.supportsTouch())) {
          if (n.input.ensurePolled(), n.shift = e.shiftKey, Er(n, e)) {
            b || (n.scroller.draggable = false, setTimeout(function() {
              return n.scroller.draggable = true;
            }, 100));
            return;
          }
          if (!ja(t, e)) {
            var r = fn(t, e), i = ti(e), l = r ? rd(r, i) : "single";
            vt(t).focus(), i == 1 && t.state.selectingText && t.state.selectingText(e), !(r && nd(t, i, r, l, e)) && (i == 1 ? r ? od(t, r, l, e) : At(e) == n.scroller && rt(e) : i == 2 ? (r && co(t.doc, r), setTimeout(function() {
              return n.input.focus();
            }, 20)) : i == 3 && (ee ? t.display.input.onContextMenu(e) : Ca(t)));
          }
        }
      }
      function nd(e, t, n, r, i) {
        var l = "Click";
        return r == "double" ? l = "Double" + l : r == "triple" && (l = "Triple" + l), l = (t == 1 ? "Left" : t == 2 ? "Middle" : "Right") + l, Li(e, vu(l, i), i, function(u) {
          if (typeof u == "string" && (u = _i[u]), !u)
            return false;
          var c = false;
          try {
            e.isReadOnly() && (e.state.suppressEdits = true), c = u(e, n) != De;
          } finally {
            e.state.suppressEdits = false;
          }
          return c;
        });
      }
      function id(e, t, n) {
        var r = e.getOption("configureMouse"), i = r ? r(e, t, n) : {};
        if (i.unit == null) {
          var l = le ? n.shiftKey && n.metaKey : n.altKey;
          i.unit = l ? "rectangle" : t == "single" ? "char" : t == "double" ? "word" : "line";
        }
        return (i.extend == null || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey), i.addNew == null && (i.addNew = Z ? n.metaKey : n.ctrlKey), i.moveOnDrag == null && (i.moveOnDrag = !(Z ? n.altKey : n.ctrlKey)), i;
      }
      function od(e, t, n, r) {
        C ? setTimeout(Ke(Ts, e), 0) : e.curOp.focus = Ze(Qe(e));
        var i = id(e, n, r), l = e.doc.sel, u;
        e.options.dragDrop && ea && !e.isReadOnly() && n == "single" && (u = l.contains(t)) > -1 && (U((u = l.ranges[u]).from(), t) < 0 || t.xRel > 0) && (U(u.to(), t) > 0 || t.xRel < 0) ? ad(e, r, t, i) : ld(e, r, t, i);
      }
      function ad(e, t, n, r) {
        var i = e.display, l = false, u = mt(e, function(v) {
          b && (i.scroller.draggable = false), e.state.draggingText = false, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = false : Ca(e)), ft(i.wrapper.ownerDocument, "mouseup", u), ft(i.wrapper.ownerDocument, "mousemove", c), ft(i.scroller, "dragstart", d), ft(i.scroller, "drop", u), l || (rt(v), r.addNew || co(e.doc, n, null, null, r.extend), b && !A || C && w == 9 ? setTimeout(function() {
            i.wrapper.ownerDocument.body.focus({ preventScroll: true }), i.input.focus();
          }, 20) : i.input.focus());
        }), c = function(v) {
          l = l || Math.abs(t.clientX - v.clientX) + Math.abs(t.clientY - v.clientY) >= 10;
        }, d = function() {
          return l = true;
        };
        b && (i.scroller.draggable = true), e.state.draggingText = u, u.copy = !r.moveOnDrag, re(i.wrapper.ownerDocument, "mouseup", u), re(i.wrapper.ownerDocument, "mousemove", c), re(i.scroller, "dragstart", d), re(i.scroller, "drop", u), e.state.delayingBlurEvent = true, setTimeout(function() {
          return i.input.focus();
        }, 20), i.scroller.dragDrop && i.scroller.dragDrop();
      }
      function Tu(e, t, n) {
        if (n == "char")
          return new He(t, t);
        if (n == "word")
          return e.findWordAt(t);
        if (n == "line")
          return new He(D(t.line, 0), xe(e.doc, D(t.line + 1, 0)));
        var r = n(e, t);
        return new He(r.from, r.to);
      }
      function ld(e, t, n, r) {
        C && Ca(e);
        var i = e.display, l = e.doc;
        rt(t);
        var u, c, d = l.sel, v = d.ranges;
        if (r.addNew && !r.extend ? (c = l.sel.contains(n), c > -1 ? u = v[c] : u = new He(n, n)) : (u = l.sel.primary(), c = l.sel.primIndex), r.unit == "rectangle")
          r.addNew || (u = new He(n, n)), n = fn(e, t, true, true), c = -1;
        else {
          var k = Tu(e, n, r.unit);
          r.extend ? u = Fa(u, k.anchor, k.head, r.extend) : u = k;
        }
        r.addNew ? c == -1 ? (c = v.length, kt(
          l,
          lr(e, v.concat([u]), c),
          { scroll: false, origin: "*mouse" }
        )) : v.length > 1 && v[c].empty() && r.unit == "char" && !r.extend ? (kt(
          l,
          lr(e, v.slice(0, c).concat(v.slice(c + 1)), 0),
          { scroll: false, origin: "*mouse" }
        ), d = l.sel) : Pa(l, c, u, rr) : (c = 0, kt(l, new Kt([u], 0), rr), d = l.sel);
        var L = n;
        function P(ue) {
          if (U(L, ue) != 0)
            if (L = ue, r.unit == "rectangle") {
              for (var de = [], be = e.options.tabSize, me = ge(pe(l, n.line).text, n.ch, be), Le = ge(pe(l, ue.line).text, ue.ch, be), Ge = Math.min(me, Le), bt = Math.max(me, Le), et = Math.min(n.line, ue.line), $t = Math.min(e.lastLine(), Math.max(n.line, ue.line)); et <= $t; et++) {
                var Ft = pe(l, et).text, st = qt(Ft, Ge, be);
                Ge == bt ? de.push(new He(D(et, st), D(et, st))) : Ft.length > st && de.push(new He(D(et, st), D(et, qt(Ft, bt, be))));
              }
              de.length || de.push(new He(n, n)), kt(
                l,
                lr(e, d.ranges.slice(0, c).concat(de), c),
                { origin: "*mouse", scroll: false }
              ), e.scrollIntoView(ue);
            } else {
              var Pt = u, Ct = Tu(e, ue, r.unit), dt = Pt.anchor, ut;
              U(Ct.anchor, dt) > 0 ? (ut = Ct.head, dt = ht(Pt.from(), Ct.anchor)) : (ut = Ct.anchor, dt = Be(Pt.to(), Ct.head));
              var it = d.ranges.slice(0);
              it[c] = sd(e, new He(xe(l, dt), ut)), kt(l, lr(e, it, c), rr);
            }
        }
        var F = i.wrapper.getBoundingClientRect(), G = 0;
        function q(ue) {
          var de = ++G, be = fn(e, ue, true, r.unit == "rectangle");
          if (be)
            if (U(be, L) != 0) {
              e.curOp.focus = Ze(Qe(e)), P(be);
              var me = oo(i, l);
              (be.line >= me.to || be.line < me.from) && setTimeout(mt(e, function() {
                G == de && q(ue);
              }), 150);
            } else {
              var Le = ue.clientY < F.top ? -20 : ue.clientY > F.bottom ? 20 : 0;
              Le && setTimeout(mt(e, function() {
                G == de && (i.scroller.scrollTop += Le, q(ue));
              }), 50);
            }
        }
        function ie(ue) {
          e.state.selectingText = false, G = 1 / 0, ue && (rt(ue), i.input.focus()), ft(i.wrapper.ownerDocument, "mousemove", se), ft(i.wrapper.ownerDocument, "mouseup", he), l.history.lastSelOrigin = null;
        }
        var se = mt(e, function(ue) {
          ue.buttons === 0 || !ti(ue) ? ie(ue) : q(ue);
        }), he = mt(e, ie);
        e.state.selectingText = he, re(i.wrapper.ownerDocument, "mousemove", se), re(i.wrapper.ownerDocument, "mouseup", he);
      }
      function sd(e, t) {
        var n = t.anchor, r = t.head, i = pe(e.doc, n.line);
        if (U(n, r) == 0 && n.sticky == r.sticky)
          return t;
        var l = Ue(i);
        if (!l)
          return t;
        var u = Ne(l, n.ch, n.sticky), c = l[u];
        if (c.from != n.ch && c.to != n.ch)
          return t;
        var d = u + (c.from == n.ch == (c.level != 1) ? 0 : 1);
        if (d == 0 || d == l.length)
          return t;
        var v;
        if (r.line != n.line)
          v = (r.line - n.line) * (e.doc.direction == "ltr" ? 1 : -1) > 0;
        else {
          var k = Ne(l, r.ch, r.sticky), L = k - u || (r.ch - n.ch) * (c.level == 1 ? -1 : 1);
          k == d - 1 || k == d ? v = L < 0 : v = L > 0;
        }
        var P = l[d + (v ? -1 : 0)], F = v == (P.level == 1), G = F ? P.from : P.to, q = F ? "after" : "before";
        return n.ch == G && n.sticky == q ? t : new He(new D(n.line, G, q), r);
      }
      function _u(e, t, n, r) {
        var i, l;
        if (t.touches)
          i = t.touches[0].clientX, l = t.touches[0].clientY;
        else
          try {
            i = t.clientX, l = t.clientY;
          } catch {
            return false;
          }
        if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return false;
        r && rt(t);
        var u = e.display, c = u.lineDiv.getBoundingClientRect();
        if (l > c.bottom || !ct(e, n))
          return nr(t);
        l -= c.top - u.viewOffset;
        for (var d = 0; d < e.display.gutterSpecs.length; ++d) {
          var v = u.gutters.childNodes[d];
          if (v && v.getBoundingClientRect().right >= i) {
            var k = mr(e.doc, l), L = e.display.gutterSpecs[d];
            return We(e, n, e, k, L.className, t), nr(t);
          }
        }
      }
      function ja(e, t) {
        return _u(e, t, "gutterClick", true);
      }
      function Lu(e, t) {
        Er(e.display, t) || ud(e, t) || Xe(e, t, "contextmenu") || ee || e.display.input.onContextMenu(t);
      }
      function ud(e, t) {
        return ct(e, "gutterContextMenu") ? _u(e, t, "gutterContextMenu", false) : false;
      }
      function Mu(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), ui(e);
      }
      var jn = { toString: function() {
        return "CodeMirror.Init";
      } }, Eu = {}, bo = {};
      function fd(e) {
        var t = e.optionHandlers;
        function n(r, i, l, u) {
          e.defaults[r] = i, l && (t[r] = u ? function(c, d, v) {
            v != jn && l(c, d, v);
          } : l);
        }
        e.defineOption = n, e.Init = jn, n("value", "", function(r, i) {
          return r.setValue(i);
        }, true), n("mode", null, function(r, i) {
          r.doc.modeOption = i, Aa(r);
        }, true), n("indentUnit", 2, Aa, true), n("indentWithTabs", false), n("smartIndent", true), n("tabSize", 4, function(r) {
          mi(r), ui(r), Dt(r);
        }, true), n("lineSeparator", null, function(r, i) {
          if (r.doc.lineSep = i, !!i) {
            var l = [], u = r.doc.first;
            r.doc.iter(function(d) {
              for (var v = 0; ; ) {
                var k = d.text.indexOf(i, v);
                if (k == -1)
                  break;
                v = k + i.length, l.push(D(u, k));
              }
              u++;
            });
            for (var c = l.length - 1; c >= 0; c--)
              Rn(r.doc, i, l[c], D(l[c].line, l[c].ch + i.length));
          }
        }), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(r, i, l) {
          r.state.specialChars = new RegExp(i.source + (i.test("	") ? "" : "|	"), "g"), l != jn && r.refresh();
        }), n("specialCharPlaceholder", Hc, function(r) {
          return r.refresh();
        }, true), n("electricChars", true), n("inputStyle", K ? "contenteditable" : "textarea", function() {
          throw new Error("inputStyle can not (yet) be changed in a running editor");
        }, true), n("spellcheck", false, function(r, i) {
          return r.getInputField().spellcheck = i;
        }, true), n("autocorrect", false, function(r, i) {
          return r.getInputField().autocorrect = i;
        }, true), n("autocapitalize", false, function(r, i) {
          return r.getInputField().autocapitalize = i;
        }, true), n("rtlMoveVisually", !fe), n("wholeLineUpdateBefore", true), n("theme", "default", function(r) {
          Mu(r), gi(r);
        }, true), n("keyMap", "default", function(r, i, l) {
          var u = mo(i), c = l != jn && mo(l);
          c && c.detach && c.detach(r, u), u.attach && u.attach(r, c || null);
        }), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", false, hd, true), n("gutters", [], function(r, i) {
          r.display.gutterSpecs = Oa(i, r.options.lineNumbers), gi(r);
        }, true), n("fixedGutter", true, function(r, i) {
          r.display.gutters.style.left = i ? ya(r.display) + "px" : "0", r.refresh();
        }, true), n("coverGutterNextToScrollbar", false, function(r) {
          return In(r);
        }, true), n("scrollbarStyle", "native", function(r) {
          Ns(r), In(r), r.display.scrollbars.setScrollTop(r.doc.scrollTop), r.display.scrollbars.setScrollLeft(r.doc.scrollLeft);
        }, true), n("lineNumbers", false, function(r, i) {
          r.display.gutterSpecs = Oa(r.options.gutters, i), gi(r);
        }, true), n("firstLineNumber", 1, gi, true), n("lineNumberFormatter", function(r) {
          return r;
        }, gi, true), n("showCursorWhenSelecting", false, fi, true), n("resetSelectionOnContextMenu", true), n("lineWiseCopyCut", true), n("pasteLinesPerSelection", true), n("selectionsMayTouch", false), n("readOnly", false, function(r, i) {
          i == "nocursor" && (An(r), r.display.input.blur()), r.display.input.readOnlyChanged(i);
        }), n("screenReaderLabel", null, function(r, i) {
          i = i === "" ? null : i, r.display.input.screenReaderLabelChanged(i);
        }), n("disableInput", false, function(r, i) {
          i || r.display.input.reset();
        }, true), n("dragDrop", true, cd), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, fi, true), n("singleCursorHeightPerLine", true, fi, true), n("workTime", 100), n("workDelay", 100), n("flattenSpans", true, mi, true), n("addModeClass", false, mi, true), n("pollInterval", 100), n("undoDepth", 200, function(r, i) {
          return r.doc.history.undoDepth = i;
        }), n("historyEventDelay", 1250), n("viewportMargin", 10, function(r) {
          return r.refresh();
        }, true), n("maxHighlightLength", 1e4, mi, true), n("moveInputWithCursor", true, function(r, i) {
          i || r.display.input.resetPosition();
        }), n("tabindex", null, function(r, i) {
          return r.display.input.getField().tabIndex = i || "";
        }), n("autofocus", null), n("direction", "ltr", function(r, i) {
          return r.doc.setDirection(i);
        }, true), n("phrases", null);
      }
      function cd(e, t, n) {
        var r = n && n != jn;
        if (!t != !r) {
          var i = e.display.dragFunctions, l = t ? re : ft;
          l(e.display.scroller, "dragstart", i.start), l(e.display.scroller, "dragenter", i.enter), l(e.display.scroller, "dragover", i.over), l(e.display.scroller, "dragleave", i.leave), l(e.display.scroller, "drop", i.drop);
        }
      }
      function hd(e) {
        e.options.lineWrapping ? (pt(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (ce(e.display.wrapper, "CodeMirror-wrap"), sa(e)), ba(e), Dt(e), ui(e), setTimeout(function() {
          return In(e);
        }, 100);
      }
      function qe(e, t) {
        var n = this;
        if (!(this instanceof qe))
          return new qe(e, t);
        this.options = t = t ? Se(t) : {}, Se(Eu, t, false);
        var r = t.value;
        typeof r == "string" ? r = new It(r, t.mode, null, t.lineSeparator, t.direction) : t.mode && (r.modeOption = t.mode), this.doc = r;
        var i = new qe.inputStyles[t.inputStyle](this), l = this.display = new Th(e, r, i, t);
        l.wrapper.CodeMirror = this, Mu(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Ns(this), this.state = {
          keyMaps: [],
          // stores maps added by addKeyMap
          overlays: [],
          // highlighting overlays, as added by addOverlay
          modeGen: 0,
          // bumped when mode/overlay changes, used to invalidate highlighting info
          overwrite: false,
          delayingBlurEvent: false,
          focused: false,
          suppressEdits: false,
          // used to disable editing during key handlers when in readOnly mode
          pasteIncoming: -1,
          cutIncoming: -1,
          // help recognize paste/cut edits in input.poll
          selectingText: false,
          draggingText: false,
          highlight: new Te(),
          // stores highlight worker timeout
          keySeq: null,
          // Unfinished key sequence
          specialChars: null
        }, t.autofocus && !K && l.input.focus(), C && w < 11 && setTimeout(function() {
          return n.display.input.reset(true);
        }, 20), dd(this), Uh(), pn(this), this.curOp.forceUpdate = true, zs(this, r), t.autofocus && !K || this.hasFocus() ? setTimeout(function() {
          n.hasFocus() && !n.state.focused && ka(n);
        }, 20) : An(this);
        for (var u in bo)
          bo.hasOwnProperty(u) && bo[u](this, t[u], jn);
        Is(this), t.finishInit && t.finishInit(this);
        for (var c = 0; c < $a.length; ++c)
          $a[c](this);
        vn(this), b && t.lineWrapping && getComputedStyle(l.lineDiv).textRendering == "optimizelegibility" && (l.lineDiv.style.textRendering = "auto");
      }
      qe.defaults = Eu, qe.optionHandlers = bo;
      function dd(e) {
        var t = e.display;
        re(t.scroller, "mousedown", mt(e, xu)), C && w < 11 ? re(t.scroller, "dblclick", mt(e, function(d) {
          if (!Xe(e, d)) {
            var v = fn(e, d);
            if (!(!v || ja(e, d) || Er(e.display, d))) {
              rt(d);
              var k = e.findWordAt(v);
              co(e.doc, k.anchor, k.head);
            }
          }
        })) : re(t.scroller, "dblclick", function(d) {
          return Xe(e, d) || rt(d);
        }), re(t.scroller, "contextmenu", function(d) {
          return Lu(e, d);
        }), re(t.input.getField(), "contextmenu", function(d) {
          t.scroller.contains(d.target) || Lu(e, d);
        });
        var n, r = { end: 0 };
        function i() {
          t.activeTouch && (n = setTimeout(function() {
            return t.activeTouch = null;
          }, 1e3), r = t.activeTouch, r.end = +/* @__PURE__ */ new Date());
        }
        function l(d) {
          if (d.touches.length != 1)
            return false;
          var v = d.touches[0];
          return v.radiusX <= 1 && v.radiusY <= 1;
        }
        function u(d, v) {
          if (v.left == null)
            return true;
          var k = v.left - d.left, L = v.top - d.top;
          return k * k + L * L > 20 * 20;
        }
        re(t.scroller, "touchstart", function(d) {
          if (!Xe(e, d) && !l(d) && !ja(e, d)) {
            t.input.ensurePolled(), clearTimeout(n);
            var v = +/* @__PURE__ */ new Date();
            t.activeTouch = {
              start: v,
              moved: false,
              prev: v - r.end <= 300 ? r : null
            }, d.touches.length == 1 && (t.activeTouch.left = d.touches[0].pageX, t.activeTouch.top = d.touches[0].pageY);
          }
        }), re(t.scroller, "touchmove", function() {
          t.activeTouch && (t.activeTouch.moved = true);
        }), re(t.scroller, "touchend", function(d) {
          var v = t.activeTouch;
          if (v && !Er(t, d) && v.left != null && !v.moved && /* @__PURE__ */ new Date() - v.start < 300) {
            var k = e.coordsChar(t.activeTouch, "page"), L;
            !v.prev || u(v, v.prev) ? L = new He(k, k) : !v.prev.prev || u(v, v.prev.prev) ? L = e.findWordAt(k) : L = new He(D(k.line, 0), xe(e.doc, D(k.line + 1, 0))), e.setSelection(L.anchor, L.head), e.focus(), rt(d);
          }
          i();
        }), re(t.scroller, "touchcancel", i), re(t.scroller, "scroll", function() {
          t.scroller.clientHeight && (hi(e, t.scroller.scrollTop), hn(e, t.scroller.scrollLeft, true), We(e, "scroll", e));
        }), re(t.scroller, "mousewheel", function(d) {
          return Bs(e, d);
        }), re(t.scroller, "DOMMouseScroll", function(d) {
          return Bs(e, d);
        }), re(t.wrapper, "scroll", function() {
          return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0;
        }), t.dragFunctions = {
          enter: function(d) {
            Xe(e, d) || kr(d);
          },
          over: function(d) {
            Xe(e, d) || ($h(e, d), kr(d));
          },
          start: function(d) {
            return jh(e, d);
          },
          drop: mt(e, zh),
          leave: function(d) {
            Xe(e, d) || cu(e);
          }
        };
        var c = t.input.getField();
        re(c, "keyup", function(d) {
          return Cu.call(e, d);
        }), re(c, "keydown", mt(e, Su)), re(c, "keypress", mt(e, ku)), re(c, "focus", function(d) {
          return ka(e, d);
        }), re(c, "blur", function(d) {
          return An(e, d);
        });
      }
      var $a = [];
      qe.defineInitHook = function(e) {
        return $a.push(e);
      };
      function Oi(e, t, n, r) {
        var i = e.doc, l;
        n == null && (n = "add"), n == "smart" && (i.mode.indent ? l = ii(e, t).state : n = "prev");
        var u = e.options.tabSize, c = pe(i, t), d = ge(c.text, null, u);
        c.stateAfter && (c.stateAfter = null);
        var v = c.text.match(/^\s*/)[0], k;
        if (!r && !/\S/.test(c.text))
          k = 0, n = "not";
        else if (n == "smart" && (k = i.mode.indent(l, c.text.slice(v.length), c.text), k == De || k > 150)) {
          if (!r)
            return;
          n = "prev";
        }
        n == "prev" ? t > i.first ? k = ge(pe(i, t - 1).text, null, u) : k = 0 : n == "add" ? k = d + e.options.indentUnit : n == "subtract" ? k = d - e.options.indentUnit : typeof n == "number" && (k = d + n), k = Math.max(0, k);
        var L = "", P = 0;
        if (e.options.indentWithTabs)
          for (var F = Math.floor(k / u); F; --F)
            P += u, L += "	";
        if (P < k && (L += Jt(k - P)), L != v)
          return Rn(i, L, D(t, 0), D(t, v.length), "+input"), c.stateAfter = null, true;
        for (var G = 0; G < i.sel.ranges.length; G++) {
          var q = i.sel.ranges[G];
          if (q.head.line == t && q.head.ch < v.length) {
            var ie = D(t, v.length);
            Pa(i, G, new He(ie, ie));
            break;
          }
        }
      }
      var sr = null;
      function wo(e) {
        sr = e;
      }
      function Ua(e, t, n, r, i) {
        var l = e.doc;
        e.display.shift = false, r || (r = l.sel);
        var u = +/* @__PURE__ */ new Date() - 200, c = i == "paste" || e.state.pasteIncoming > u, d = ri(t), v = null;
        if (c && r.ranges.length > 1)
          if (sr && sr.text.join(`
`) == t) {
            if (r.ranges.length % sr.text.length == 0) {
              v = [];
              for (var k = 0; k < sr.text.length; k++)
                v.push(l.splitLines(sr.text[k]));
            }
          } else
            d.length == r.ranges.length && e.options.pasteLinesPerSelection && (v = Cr(d, function(se) {
              return [se];
            }));
        for (var L = e.curOp.updateInput, P = r.ranges.length - 1; P >= 0; P--) {
          var F = r.ranges[P], G = F.from(), q = F.to();
          F.empty() && (n && n > 0 ? G = D(G.line, G.ch - n) : e.state.overwrite && !c ? q = D(q.line, Math.min(pe(l, q.line).text.length, q.ch + Ee(d).length)) : c && sr && sr.lineWise && sr.text.join(`
`) == d.join(`
`) && (G = q = D(G.line, 0)));
          var ie = {
            from: G,
            to: q,
            text: v ? v[P % v.length] : d,
            origin: i || (c ? "paste" : e.state.cutIncoming > u ? "cut" : "+input")
          };
          Bn(e.doc, ie), gt(e, "inputRead", e, ie);
        }
        t && !c && Nu(e, t), Dn(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = L), e.curOp.typing = true, e.state.pasteIncoming = e.state.cutIncoming = -1;
      }
      function Ou(e, t) {
        var n = e.clipboardData && e.clipboardData.getData("Text");
        if (n)
          return e.preventDefault(), !t.isReadOnly() && !t.options.disableInput && t.hasFocus() && jt(t, function() {
            return Ua(t, n, 0, null, "paste");
          }), true;
      }
      function Nu(e, t) {
        if (!(!e.options.electricChars || !e.options.smartIndent))
          for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
            var i = n.ranges[r];
            if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
              var l = e.getModeAt(i.head), u = false;
              if (l.electricChars) {
                for (var c = 0; c < l.electricChars.length; c++)
                  if (t.indexOf(l.electricChars.charAt(c)) > -1) {
                    u = Oi(e, i.head.line, "smart");
                    break;
                  }
              } else
                l.electricInput && l.electricInput.test(pe(e.doc, i.head.line).text.slice(0, i.head.ch)) && (u = Oi(e, i.head.line, "smart"));
              u && gt(e, "electricInput", e, i.head.line);
            }
          }
      }
      function Au(e) {
        for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var i = e.doc.sel.ranges[r].head.line, l = { anchor: D(i, 0), head: D(i + 1, 0) };
          n.push(l), t.push(e.getRange(l.anchor, l.head));
        }
        return { text: t, ranges: n };
      }
      function Ga(e, t, n, r) {
        e.setAttribute("autocorrect", n ? "on" : "off"), e.setAttribute("autocapitalize", r ? "on" : "off"), e.setAttribute("spellcheck", !!t);
      }
      function Du() {
        var e = O("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"), t = O("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return b ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), $ && (e.style.border = "1px solid black"), t;
      }
      function pd(e) {
        var t = e.optionHandlers, n = e.helpers = {};
        e.prototype = {
          constructor: e,
          focus: function() {
            vt(this).focus(), this.display.input.focus();
          },
          setOption: function(r, i) {
            var l = this.options, u = l[r];
            l[r] == i && r != "mode" || (l[r] = i, t.hasOwnProperty(r) && mt(this, t[r])(this, i, u), We(this, "optionChange", this, r));
          },
          getOption: function(r) {
            return this.options[r];
          },
          getDoc: function() {
            return this.doc;
          },
          addKeyMap: function(r, i) {
            this.state.keyMaps[i ? "push" : "unshift"](mo(r));
          },
          removeKeyMap: function(r) {
            for (var i = this.state.keyMaps, l = 0; l < i.length; ++l)
              if (i[l] == r || i[l].name == r)
                return i.splice(l, 1), true;
          },
          addOverlay: Et(function(r, i) {
            var l = r.token ? r : e.getMode(this.options, r);
            if (l.startState)
              throw new Error("Overlays may not be stateful.");
            S(
              this.state.overlays,
              {
                mode: l,
                modeSpec: r,
                opaque: i && i.opaque,
                priority: i && i.priority || 0
              },
              function(u) {
                return u.priority;
              }
            ), this.state.modeGen++, Dt(this);
          }),
          removeOverlay: Et(function(r) {
            for (var i = this.state.overlays, l = 0; l < i.length; ++l) {
              var u = i[l].modeSpec;
              if (u == r || typeof r == "string" && u.name == r) {
                i.splice(l, 1), this.state.modeGen++, Dt(this);
                return;
              }
            }
          }),
          indentLine: Et(function(r, i, l) {
            typeof i != "string" && typeof i != "number" && (i == null ? i = this.options.smartIndent ? "smart" : "prev" : i = i ? "add" : "subtract"), y(this.doc, r) && Oi(this, r, i, l);
          }),
          indentSelection: Et(function(r) {
            for (var i = this.doc.sel.ranges, l = -1, u = 0; u < i.length; u++) {
              var c = i[u];
              if (c.empty())
                c.head.line > l && (Oi(this, c.head.line, r, true), l = c.head.line, u == this.doc.sel.primIndex && Dn(this));
              else {
                var d = c.from(), v = c.to(), k = Math.max(l, d.line);
                l = Math.min(this.lastLine(), v.line - (v.ch ? 0 : 1)) + 1;
                for (var L = k; L < l; ++L)
                  Oi(this, L, r);
                var P = this.doc.sel.ranges;
                d.ch == 0 && i.length == P.length && P[u].from().ch > 0 && Pa(this.doc, u, new He(d, P[u].to()), $e);
              }
            }
          }),
          // Fetch the parser token for a given character. Useful for hacks
          // that want to inspect the mode state (say, for completion).
          getTokenAt: function(r, i) {
            return $l(this, r, i);
          },
          getLineTokens: function(r, i) {
            return $l(this, D(r), i, true);
          },
          getTokenTypeAt: function(r) {
            r = xe(this.doc, r);
            var i = Wl(this, pe(this.doc, r.line)), l = 0, u = (i.length - 1) / 2, c = r.ch, d;
            if (c == 0)
              d = i[2];
            else
              for (; ; ) {
                var v = l + u >> 1;
                if ((v ? i[v * 2 - 1] : 0) >= c)
                  u = v;
                else if (i[v * 2 + 1] < c)
                  l = v + 1;
                else {
                  d = i[v * 2 + 2];
                  break;
                }
              }
            var k = d ? d.indexOf("overlay ") : -1;
            return k < 0 ? d : k == 0 ? null : d.slice(0, k - 1);
          },
          getModeAt: function(r) {
            var i = this.doc.mode;
            return i.innerMode ? e.innerMode(i, this.getTokenAt(r).state).mode : i;
          },
          getHelper: function(r, i) {
            return this.getHelpers(r, i)[0];
          },
          getHelpers: function(r, i) {
            var l = [];
            if (!n.hasOwnProperty(i))
              return l;
            var u = n[i], c = this.getModeAt(r);
            if (typeof c[i] == "string")
              u[c[i]] && l.push(u[c[i]]);
            else if (c[i])
              for (var d = 0; d < c[i].length; d++) {
                var v = u[c[i][d]];
                v && l.push(v);
              }
            else
              c.helperType && u[c.helperType] ? l.push(u[c.helperType]) : u[c.name] && l.push(u[c.name]);
            for (var k = 0; k < u._global.length; k++) {
              var L = u._global[k];
              L.pred(c, this) && Me(l, L.val) == -1 && l.push(L.val);
            }
            return l;
          },
          getStateAfter: function(r, i) {
            var l = this.doc;
            return r = Vt(l, r ?? l.first + l.size - 1), ii(this, r + 1, i).state;
          },
          cursorCoords: function(r, i) {
            var l, u = this.doc.sel.primary();
            return r == null ? l = u.head : typeof r == "object" ? l = xe(this.doc, r) : l = r ? u.from() : u.to(), ar(this, l, i || "page");
          },
          charCoords: function(r, i) {
            return to(this, xe(this.doc, r), i || "page");
          },
          coordsChar: function(r, i) {
            return r = ys(this, r, i || "page"), va(this, r.left, r.top);
          },
          lineAtHeight: function(r, i) {
            return r = ys(this, { top: r, left: 0 }, i || "page").top, mr(this.doc, r + this.display.viewOffset);
          },
          heightAtLine: function(r, i, l) {
            var u = false, c;
            if (typeof r == "number") {
              var d = this.doc.first + this.doc.size - 1;
              r < this.doc.first ? r = this.doc.first : r > d && (r = d, u = true), c = pe(this.doc, r);
            } else
              c = r;
            return eo(this, c, { top: 0, left: 0 }, i || "page", l || u).top + (u ? this.doc.height - Mr(c) : 0);
          },
          defaultTextHeight: function() {
            return On(this.display);
          },
          defaultCharWidth: function() {
            return Nn(this.display);
          },
          getViewport: function() {
            return { from: this.display.viewFrom, to: this.display.viewTo };
          },
          addWidget: function(r, i, l, u, c) {
            var d = this.display;
            r = ar(this, xe(this.doc, r));
            var v = r.bottom, k = r.left;
            if (i.style.position = "absolute", i.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(i), d.sizer.appendChild(i), u == "over")
              v = r.top;
            else if (u == "above" || u == "near") {
              var L = Math.max(d.wrapper.clientHeight, this.doc.height), P = Math.max(d.sizer.clientWidth, d.lineSpace.clientWidth);
              (u == "above" || r.bottom + i.offsetHeight > L) && r.top > i.offsetHeight ? v = r.top - i.offsetHeight : r.bottom + i.offsetHeight <= L && (v = r.bottom), k + i.offsetWidth > P && (k = P - i.offsetWidth);
            }
            i.style.top = v + "px", i.style.left = i.style.right = "", c == "right" ? (k = d.sizer.clientWidth - i.offsetWidth, i.style.right = "0px") : (c == "left" ? k = 0 : c == "middle" && (k = (d.sizer.clientWidth - i.offsetWidth) / 2), i.style.left = k + "px"), l && ch(this, { left: k, top: v, right: k + i.offsetWidth, bottom: v + i.offsetHeight });
          },
          triggerOnKeyDown: Et(Su),
          triggerOnKeyPress: Et(ku),
          triggerOnKeyUp: Cu,
          triggerOnMouseDown: Et(xu),
          execCommand: function(r) {
            if (_i.hasOwnProperty(r))
              return _i[r].call(null, this);
          },
          triggerElectric: Et(function(r) {
            Nu(this, r);
          }),
          findPosH: function(r, i, l, u) {
            var c = 1;
            i < 0 && (c = -1, i = -i);
            for (var d = xe(this.doc, r), v = 0; v < i && (d = Va(this.doc, d, c, l, u), !d.hitSide); ++v)
              ;
            return d;
          },
          moveH: Et(function(r, i) {
            var l = this;
            this.extendSelectionsBy(function(u) {
              return l.display.shift || l.doc.extend || u.empty() ? Va(l.doc, u.head, r, i, l.options.rtlMoveVisually) : r < 0 ? u.from() : u.to();
            }, dr);
          }),
          deleteH: Et(function(r, i) {
            var l = this.doc.sel, u = this.doc;
            l.somethingSelected() ? u.replaceSelection("", null, "+delete") : zn(this, function(c) {
              var d = Va(u, c.head, r, i, false);
              return r < 0 ? { from: d, to: c.head } : { from: c.head, to: d };
            });
          }),
          findPosV: function(r, i, l, u) {
            var c = 1, d = u;
            i < 0 && (c = -1, i = -i);
            for (var v = xe(this.doc, r), k = 0; k < i; ++k) {
              var L = ar(this, v, "div");
              if (d == null ? d = L.left : L.left = d, v = Iu(this, L, c, l), v.hitSide)
                break;
            }
            return v;
          },
          moveV: Et(function(r, i) {
            var l = this, u = this.doc, c = [], d = !this.display.shift && !u.extend && u.sel.somethingSelected();
            if (u.extendSelectionsBy(function(k) {
              if (d)
                return r < 0 ? k.from() : k.to();
              var L = ar(l, k.head, "div");
              k.goalColumn != null && (L.left = k.goalColumn), c.push(L.left);
              var P = Iu(l, L, r, i);
              return i == "page" && k == u.sel.primary() && Ta(l, to(l, P, "div").top - L.top), P;
            }, dr), c.length)
              for (var v = 0; v < u.sel.ranges.length; v++)
                u.sel.ranges[v].goalColumn = c[v];
          }),
          // Find the word at the given position (as returned by coordsChar).
          findWordAt: function(r) {
            var i = this.doc, l = pe(i, r.line).text, u = r.ch, c = r.ch;
            if (l) {
              var d = this.getHelper(r, "wordChars");
              (r.sticky == "before" || c == l.length) && u ? --u : ++c;
              for (var v = l.charAt(u), k = z(v, d) ? function(L) {
                return z(L, d);
              } : /\s/.test(v) ? function(L) {
                return /\s/.test(L);
              } : function(L) {
                return !/\s/.test(L) && !z(L);
              }; u > 0 && k(l.charAt(u - 1)); )
                --u;
              for (; c < l.length && k(l.charAt(c)); )
                ++c;
            }
            return new He(D(r.line, u), D(r.line, c));
          },
          toggleOverwrite: function(r) {
            r != null && r == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? pt(this.display.cursorDiv, "CodeMirror-overwrite") : ce(this.display.cursorDiv, "CodeMirror-overwrite"), We(this, "overwriteToggle", this, this.state.overwrite));
          },
          hasFocus: function() {
            return this.display.input.getField() == Ze(Qe(this));
          },
          isReadOnly: function() {
            return !!(this.options.readOnly || this.doc.cantEdit);
          },
          scrollTo: Et(function(r, i) {
            ci(this, r, i);
          }),
          getScrollInfo: function() {
            var r = this.display.scroller;
            return {
              left: r.scrollLeft,
              top: r.scrollTop,
              height: r.scrollHeight - br(this) - this.display.barHeight,
              width: r.scrollWidth - br(this) - this.display.barWidth,
              clientHeight: ca(this),
              clientWidth: sn(this)
            };
          },
          scrollIntoView: Et(function(r, i) {
            r == null ? (r = { from: this.doc.sel.primary().head, to: null }, i == null && (i = this.options.cursorScrollMargin)) : typeof r == "number" ? r = { from: D(r, 0), to: null } : r.from == null && (r = { from: r, to: null }), r.to || (r.to = r.from), r.margin = i || 0, r.from.line != null ? hh(this, r) : Ls(this, r.from, r.to, r.margin);
          }),
          setSize: Et(function(r, i) {
            var l = this, u = function(d) {
              return typeof d == "number" || /^\d+$/.test(String(d)) ? d + "px" : d;
            };
            r != null && (this.display.wrapper.style.width = u(r)), i != null && (this.display.wrapper.style.height = u(i)), this.options.lineWrapping && vs(this);
            var c = this.display.viewFrom;
            this.doc.iter(c, this.display.viewTo, function(d) {
              if (d.widgets) {
                for (var v = 0; v < d.widgets.length; v++)
                  if (d.widgets[v].noHScroll) {
                    $r(l, c, "widget");
                    break;
                  }
              }
              ++c;
            }), this.curOp.forceUpdate = true, We(this, "refresh", this);
          }),
          operation: function(r) {
            return jt(this, r);
          },
          startOperation: function() {
            return pn(this);
          },
          endOperation: function() {
            return vn(this);
          },
          refresh: Et(function() {
            var r = this.display.cachedTextHeight;
            Dt(this), this.curOp.forceUpdate = true, ui(this), ci(this, this.doc.scrollLeft, this.doc.scrollTop), Ma(this.display), (r == null || Math.abs(r - On(this.display)) > 0.5 || this.options.lineWrapping) && ba(this), We(this, "refresh", this);
          }),
          swapDoc: Et(function(r) {
            var i = this.doc;
            return i.cm = null, this.state.selectingText && this.state.selectingText(), zs(this, r), ui(this), this.display.input.reset(), ci(this, r.scrollLeft, r.scrollTop), this.curOp.forceScroll = true, gt(this, "swapDoc", this, i), i;
          }),
          phrase: function(r) {
            var i = this.options.phrases;
            return i && Object.prototype.hasOwnProperty.call(i, r) ? i[r] : r;
          },
          getInputField: function() {
            return this.display.input.getField();
          },
          getWrapperElement: function() {
            return this.display.wrapper;
          },
          getScrollerElement: function() {
            return this.display.scroller;
          },
          getGutterElement: function() {
            return this.display.gutters;
          }
        }, ot(e), e.registerHelper = function(r, i, l) {
          n.hasOwnProperty(r) || (n[r] = e[r] = { _global: [] }), n[r][i] = l;
        }, e.registerGlobalHelper = function(r, i, l, u) {
          e.registerHelper(r, i, u), n[r]._global.push({ pred: l, val: u });
        };
      }
      function Va(e, t, n, r, i) {
        var l = t, u = n, c = pe(e, t.line), d = i && e.direction == "rtl" ? -n : n;
        function v() {
          var he = t.line + d;
          return he < e.first || he >= e.first + e.size ? false : (t = new D(he, t.ch, t.sticky), c = pe(e, he));
        }
        function k(he) {
          var ue;
          if (r == "codepoint") {
            var de = c.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
            if (isNaN(de))
              ue = null;
            else {
              var be = n > 0 ? de >= 55296 && de < 56320 : de >= 56320 && de < 57343;
              ue = new D(t.line, Math.max(0, Math.min(c.text.length, t.ch + n * (be ? 2 : 1))), -n);
            }
          } else
            i ? ue = Xh(e.cm, c, t, n) : ue = Ra(c, t, n);
          if (ue == null)
            if (!he && v())
              t = Ha(i, e.cm, c, t.line, d);
            else
              return false;
          else
            t = ue;
          return true;
        }
        if (r == "char" || r == "codepoint")
          k();
        else if (r == "column")
          k(true);
        else if (r == "word" || r == "group")
          for (var L = null, P = r == "group", F = e.cm && e.cm.getHelper(t, "wordChars"), G = true; !(n < 0 && !k(!G)); G = false) {
            var q = c.text.charAt(t.ch) || `
`, ie = z(q, F) ? "w" : P && q == `
` ? "n" : !P || /\s/.test(q) ? null : "p";
            if (P && !G && !ie && (ie = "s"), L && L != ie) {
              n < 0 && (n = 1, k(), t.sticky = "after");
              break;
            }
            if (ie && (L = ie), n > 0 && !k(!G))
              break;
          }
        var se = po(e, t, l, u, true);
        return ke(l, se) && (se.hitSide = true), se;
      }
      function Iu(e, t, n, r) {
        var i = e.doc, l = t.left, u;
        if (r == "page") {
          var c = Math.min(e.display.wrapper.clientHeight, vt(e).innerHeight || i(e).documentElement.clientHeight), d = Math.max(c - 0.5 * On(e.display), 3);
          u = (n > 0 ? t.bottom : t.top) + n * d;
        } else
          r == "line" && (u = n > 0 ? t.bottom + 3 : t.top - 3);
        for (var v; v = va(e, l, u), !!v.outside; ) {
          if (n < 0 ? u <= 0 : u >= i.height) {
            v.hitSide = true;
            break;
          }
          u += n * 5;
        }
        return v;
      }
      var ze = function(e) {
        this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Te(), this.composing = null, this.gracePeriod = false, this.readDOMTimeout = null;
      };
      ze.prototype.init = function(e) {
        var t = this, n = this, r = n.cm, i = n.div = e.lineDiv;
        i.contentEditable = true, Ga(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize);
        function l(c) {
          for (var d = c.target; d; d = d.parentNode) {
            if (d == i)
              return true;
            if (/\bCodeMirror-(?:line)?widget\b/.test(d.className))
              break;
          }
          return false;
        }
        re(i, "paste", function(c) {
          !l(c) || Xe(r, c) || Ou(c, r) || w <= 11 && setTimeout(mt(r, function() {
            return t.updateFromDOM();
          }), 20);
        }), re(i, "compositionstart", function(c) {
          t.composing = { data: c.data, done: false };
        }), re(i, "compositionupdate", function(c) {
          t.composing || (t.composing = { data: c.data, done: false });
        }), re(i, "compositionend", function(c) {
          t.composing && (c.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = true);
        }), re(i, "touchstart", function() {
          return n.forceCompositionEnd();
        }), re(i, "input", function() {
          t.composing || t.readFromDOMSoon();
        });
        function u(c) {
          if (!(!l(c) || Xe(r, c))) {
            if (r.somethingSelected())
              wo({ lineWise: false, text: r.getSelections() }), c.type == "cut" && r.replaceSelection("", null, "cut");
            else if (r.options.lineWiseCopyCut) {
              var d = Au(r);
              wo({ lineWise: true, text: d.text }), c.type == "cut" && r.operation(function() {
                r.setSelections(d.ranges, 0, $e), r.replaceSelection("", null, "cut");
              });
            } else
              return;
            if (c.clipboardData) {
              c.clipboardData.clearData();
              var v = sr.text.join(`
`);
              if (c.clipboardData.setData("Text", v), c.clipboardData.getData("Text") == v) {
                c.preventDefault();
                return;
              }
            }
            var k = Du(), L = k.firstChild;
            Ga(L), r.display.lineSpace.insertBefore(k, r.display.lineSpace.firstChild), L.value = sr.text.join(`
`);
            var P = Ze(i.ownerDocument);
            tr(L), setTimeout(function() {
              r.display.lineSpace.removeChild(k), P.focus(), P == i && n.showPrimarySelection();
            }, 50);
          }
        }
        re(i, "copy", u), re(i, "cut", u);
      }, ze.prototype.screenReaderLabelChanged = function(e) {
        e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
      }, ze.prototype.prepareSelection = function() {
        var e = xs(this.cm, false);
        return e.focus = Ze(this.div.ownerDocument) == this.div, e;
      }, ze.prototype.showSelection = function(e, t) {
        !e || !this.cm.display.view.length || ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
      }, ze.prototype.getSelection = function() {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }, ze.prototype.showPrimarySelection = function() {
        var e = this.getSelection(), t = this.cm, n = t.doc.sel.primary(), r = n.from(), i = n.to();
        if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || i.line < t.display.viewFrom) {
          e.removeAllRanges();
          return;
        }
        var l = So(t, e.anchorNode, e.anchorOffset), u = So(t, e.focusNode, e.focusOffset);
        if (!(l && !l.bad && u && !u.bad && U(ht(l, u), r) == 0 && U(Be(l, u), i) == 0)) {
          var c = t.display.view, d = r.line >= t.display.viewFrom && Fu(t, r) || { node: c[0].measure.map[2], offset: 0 }, v = i.line < t.display.viewTo && Fu(t, i);
          if (!v) {
            var k = c[c.length - 1].measure, L = k.maps ? k.maps[k.maps.length - 1] : k.map;
            v = { node: L[L.length - 1], offset: L[L.length - 2] - L[L.length - 3] };
          }
          if (!d || !v) {
            e.removeAllRanges();
            return;
          }
          var P = e.rangeCount && e.getRangeAt(0), F;
          try {
            F = Fe(d.node, d.offset, v.offset, v.node);
          } catch {
          }
          F && (!g && t.state.focused ? (e.collapse(d.node, d.offset), F.collapsed || (e.removeAllRanges(), e.addRange(F))) : (e.removeAllRanges(), e.addRange(F)), P && e.anchorNode == null ? e.addRange(P) : g && this.startGracePeriod()), this.rememberSelection();
        }
      }, ze.prototype.startGracePeriod = function() {
        var e = this;
        clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
          e.gracePeriod = false, e.selectionChanged() && e.cm.operation(function() {
            return e.cm.curOp.selectionChanged = true;
          });
        }, 20);
      }, ze.prototype.showMultipleSelections = function(e) {
        ne(this.cm.display.cursorDiv, e.cursors), ne(this.cm.display.selectionDiv, e.selection);
      }, ze.prototype.rememberSelection = function() {
        var e = this.getSelection();
        this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
      }, ze.prototype.selectionInEditor = function() {
        var e = this.getSelection();
        if (!e.rangeCount)
          return false;
        var t = e.getRangeAt(0).commonAncestorContainer;
        return St(this.div, t);
      }, ze.prototype.focus = function() {
        this.cm.options.readOnly != "nocursor" && ((!this.selectionInEditor() || Ze(this.div.ownerDocument) != this.div) && this.showSelection(this.prepareSelection(), true), this.div.focus());
      }, ze.prototype.blur = function() {
        this.div.blur();
      }, ze.prototype.getField = function() {
        return this.div;
      }, ze.prototype.supportsTouch = function() {
        return true;
      }, ze.prototype.receivedFocus = function() {
        var e = this, t = this;
        this.selectionInEditor() ? setTimeout(function() {
          return e.pollSelection();
        }, 20) : jt(this.cm, function() {
          return t.cm.curOp.selectionChanged = true;
        });
        function n() {
          t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, n));
        }
        this.polling.set(this.cm.options.pollInterval, n);
      }, ze.prototype.selectionChanged = function() {
        var e = this.getSelection();
        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
      }, ze.prototype.pollSelection = function() {
        if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
          var e = this.getSelection(), t = this.cm;
          if (X && T && this.cm.display.gutterSpecs.length && vd(e.anchorNode)) {
            this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var n = So(t, e.anchorNode, e.anchorOffset), r = So(t, e.focusNode, e.focusOffset);
            n && r && jt(t, function() {
              kt(t.doc, Gr(n, r), $e), (n.bad || r.bad) && (t.curOp.selectionChanged = true);
            });
          }
        }
      }, ze.prototype.pollContent = function() {
        this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
        var e = this.cm, t = e.display, n = e.doc.sel.primary(), r = n.from(), i = n.to();
        if (r.ch == 0 && r.line > e.firstLine() && (r = D(r.line - 1, pe(e.doc, r.line - 1).length)), i.ch == pe(e.doc, i.line).text.length && i.line < e.lastLine() && (i = D(i.line + 1, 0)), r.line < t.viewFrom || i.line > t.viewTo - 1)
          return false;
        var l, u, c;
        r.line == t.viewFrom || (l = cn(e, r.line)) == 0 ? (u = Re(t.view[0].line), c = t.view[0].node) : (u = Re(t.view[l].line), c = t.view[l - 1].node.nextSibling);
        var d = cn(e, i.line), v, k;
        if (d == t.view.length - 1 ? (v = t.viewTo - 1, k = t.lineDiv.lastChild) : (v = Re(t.view[d + 1].line) - 1, k = t.view[d + 1].node.previousSibling), !c)
          return false;
        for (var L = e.doc.splitLines(gd(e, c, k, u, v)), P = _r(e.doc, D(u, 0), D(v, pe(e.doc, v).text.length)); L.length > 1 && P.length > 1; )
          if (Ee(L) == Ee(P))
            L.pop(), P.pop(), v--;
          else if (L[0] == P[0])
            L.shift(), P.shift(), u++;
          else
            break;
        for (var F = 0, G = 0, q = L[0], ie = P[0], se = Math.min(q.length, ie.length); F < se && q.charCodeAt(F) == ie.charCodeAt(F); )
          ++F;
        for (var he = Ee(L), ue = Ee(P), de = Math.min(
          he.length - (L.length == 1 ? F : 0),
          ue.length - (P.length == 1 ? F : 0)
        ); G < de && he.charCodeAt(he.length - G - 1) == ue.charCodeAt(ue.length - G - 1); )
          ++G;
        if (L.length == 1 && P.length == 1 && u == r.line)
          for (; F && F > r.ch && he.charCodeAt(he.length - G - 1) == ue.charCodeAt(ue.length - G - 1); )
            F--, G++;
        L[L.length - 1] = he.slice(0, he.length - G).replace(/^\u200b+/, ""), L[0] = L[0].slice(F).replace(/\u200b+$/, "");
        var be = D(u, F), me = D(v, P.length ? Ee(P).length - G : 0);
        if (L.length > 1 || L[0] || U(be, me))
          return Rn(e.doc, L, be, me, "+input"), true;
      }, ze.prototype.ensurePolled = function() {
        this.forceCompositionEnd();
      }, ze.prototype.reset = function() {
        this.forceCompositionEnd();
      }, ze.prototype.forceCompositionEnd = function() {
        this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
      }, ze.prototype.readFromDOMSoon = function() {
        var e = this;
        this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function() {
          if (e.readDOMTimeout = null, e.composing)
            if (e.composing.done)
              e.composing = null;
            else
              return;
          e.updateFromDOM();
        }, 80));
      }, ze.prototype.updateFromDOM = function() {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) && jt(this.cm, function() {
          return Dt(e.cm);
        });
      }, ze.prototype.setUneditable = function(e) {
        e.contentEditable = "false";
      }, ze.prototype.onKeyPress = function(e) {
        e.charCode == 0 || this.composing || (e.preventDefault(), this.cm.isReadOnly() || mt(this.cm, Ua)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0));
      }, ze.prototype.readOnlyChanged = function(e) {
        this.div.contentEditable = String(e != "nocursor");
      }, ze.prototype.onContextMenu = function() {
      }, ze.prototype.resetPosition = function() {
      }, ze.prototype.needsContentAttribute = true;
      function Fu(e, t) {
        var n = ha(e, t.line);
        if (!n || n.hidden)
          return null;
        var r = pe(e.doc, t.line), i = fs(n, r, t.line), l = Ue(r, e.doc.direction), u = "left";
        if (l) {
          var c = Ne(l, t.ch);
          u = c % 2 ? "right" : "left";
        }
        var d = ds(i.map, t.ch, u);
        return d.offset = d.collapse == "right" ? d.end : d.start, d;
      }
      function vd(e) {
        for (var t = e; t; t = t.parentNode)
          if (/CodeMirror-gutter-wrapper/.test(t.className))
            return true;
        return false;
      }
      function $n(e, t) {
        return t && (e.bad = true), e;
      }
      function gd(e, t, n, r, i) {
        var l = "", u = false, c = e.doc.lineSeparator(), d = false;
        function v(F) {
          return function(G) {
            return G.id == F;
          };
        }
        function k() {
          u && (l += c, d && (l += c), u = d = false);
        }
        function L(F) {
          F && (k(), l += F);
        }
        function P(F) {
          if (F.nodeType == 1) {
            var G = F.getAttribute("cm-text");
            if (G) {
              L(G);
              return;
            }
            var q = F.getAttribute("cm-marker"), ie;
            if (q) {
              var se = e.findMarks(D(r, 0), D(i + 1, 0), v(+q));
              se.length && (ie = se[0].find(0)) && L(_r(e.doc, ie.from, ie.to).join(c));
              return;
            }
            if (F.getAttribute("contenteditable") == "false")
              return;
            var he = /^(pre|div|p|li|table|br)$/i.test(F.nodeName);
            if (!/^br$/i.test(F.nodeName) && F.textContent.length == 0)
              return;
            he && k();
            for (var ue = 0; ue < F.childNodes.length; ue++)
              P(F.childNodes[ue]);
            /^(pre|p)$/i.test(F.nodeName) && (d = true), he && (u = true);
          } else
            F.nodeType == 3 && L(F.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        }
        for (; P(t), t != n; )
          t = t.nextSibling, d = false;
        return l;
      }
      function So(e, t, n) {
        var r;
        if (t == e.display.lineDiv) {
          if (r = e.display.lineDiv.childNodes[n], !r)
            return $n(e.clipPos(D(e.display.viewTo - 1)), true);
          t = null, n = 0;
        } else
          for (r = t; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv)
              return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv)
              break;
          }
        for (var i = 0; i < e.display.view.length; i++) {
          var l = e.display.view[i];
          if (l.node == r)
            return md(l, t, n);
        }
      }
      function md(e, t, n) {
        var r = e.text.firstChild, i = false;
        if (!t || !St(r, t))
          return $n(D(Re(e.line), 0), true);
        if (t == r && (i = true, t = r.childNodes[n], n = 0, !t)) {
          var l = e.rest ? Ee(e.rest) : e.line;
          return $n(D(Re(l), l.text.length), i);
        }
        var u = t.nodeType == 3 ? t : null, c = t;
        for (!u && t.childNodes.length == 1 && t.firstChild.nodeType == 3 && (u = t.firstChild, n && (n = u.nodeValue.length)); c.parentNode != r; )
          c = c.parentNode;
        var d = e.measure, v = d.maps;
        function k(ie, se, he) {
          for (var ue = -1; ue < (v ? v.length : 0); ue++)
            for (var de = ue < 0 ? d.map : v[ue], be = 0; be < de.length; be += 3) {
              var me = de[be + 2];
              if (me == ie || me == se) {
                var Le = Re(ue < 0 ? e.line : e.rest[ue]), Ge = de[be] + he;
                return (he < 0 || me != ie) && (Ge = de[be + (he ? 1 : 0)]), D(Le, Ge);
              }
            }
        }
        var L = k(u, c, n);
        if (L)
          return $n(L, i);
        for (var P = c.nextSibling, F = u ? u.nodeValue.length - n : 0; P; P = P.nextSibling) {
          if (L = k(P, P.firstChild, 0), L)
            return $n(D(L.line, L.ch - F), i);
          F += P.textContent.length;
        }
        for (var G = c.previousSibling, q = n; G; G = G.previousSibling) {
          if (L = k(G, G.firstChild, -1), L)
            return $n(D(L.line, L.ch + q), i);
          q += G.textContent.length;
        }
      }
      var at = function(e) {
        this.cm = e, this.prevInput = "", this.pollingFast = false, this.polling = new Te(), this.hasSelection = false, this.composing = null, this.resetting = false;
      };
      at.prototype.init = function(e) {
        var t = this, n = this, r = this.cm;
        this.createField(e);
        var i = this.textarea;
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), $ && (i.style.width = "0px"), re(i, "input", function() {
          C && w >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
        }), re(i, "paste", function(u) {
          Xe(r, u) || Ou(u, r) || (r.state.pasteIncoming = +/* @__PURE__ */ new Date(), n.fastPoll());
        });
        function l(u) {
          if (!Xe(r, u)) {
            if (r.somethingSelected())
              wo({ lineWise: false, text: r.getSelections() });
            else if (r.options.lineWiseCopyCut) {
              var c = Au(r);
              wo({ lineWise: true, text: c.text }), u.type == "cut" ? r.setSelections(c.ranges, null, $e) : (n.prevInput = "", i.value = c.text.join(`
`), tr(i));
            } else
              return;
            u.type == "cut" && (r.state.cutIncoming = +/* @__PURE__ */ new Date());
          }
        }
        re(i, "cut", l), re(i, "copy", l), re(e.scroller, "paste", function(u) {
          if (!(Er(e, u) || Xe(r, u))) {
            if (!i.dispatchEvent) {
              r.state.pasteIncoming = +/* @__PURE__ */ new Date(), n.focus();
              return;
            }
            var c = new Event("paste");
            c.clipboardData = u.clipboardData, i.dispatchEvent(c);
          }
        }), re(e.lineSpace, "selectstart", function(u) {
          Er(e, u) || rt(u);
        }), re(i, "compositionstart", function() {
          var u = r.getCursor("from");
          n.composing && n.composing.range.clear(), n.composing = {
            start: u,
            range: r.markText(u, r.getCursor("to"), { className: "CodeMirror-composing" })
          };
        }), re(i, "compositionend", function() {
          n.composing && (n.poll(), n.composing.range.clear(), n.composing = null);
        });
      }, at.prototype.createField = function(e) {
        this.wrapper = Du(), this.textarea = this.wrapper.firstChild;
        var t = this.cm.options;
        Ga(this.textarea, t.spellcheck, t.autocorrect, t.autocapitalize);
      }, at.prototype.screenReaderLabelChanged = function(e) {
        e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
      }, at.prototype.prepareSelection = function() {
        var e = this.cm, t = e.display, n = e.doc, r = xs(e);
        if (e.options.moveInputWithCursor) {
          var i = ar(e, n.sel.primary().head, "div"), l = t.wrapper.getBoundingClientRect(), u = t.lineDiv.getBoundingClientRect();
          r.teTop = Math.max(0, Math.min(
            t.wrapper.clientHeight - 10,
            i.top + u.top - l.top
          )), r.teLeft = Math.max(0, Math.min(
            t.wrapper.clientWidth - 10,
            i.left + u.left - l.left
          ));
        }
        return r;
      }, at.prototype.showSelection = function(e) {
        var t = this.cm, n = t.display;
        ne(n.cursorDiv, e.cursors), ne(n.selectionDiv, e.selection), e.teTop != null && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
      }, at.prototype.reset = function(e) {
        if (!(this.contextMenuPending || this.composing && e)) {
          var t = this.cm;
          if (this.resetting = true, t.somethingSelected()) {
            this.prevInput = "";
            var n = t.getSelection();
            this.textarea.value = n, t.state.focused && tr(this.textarea), C && w >= 9 && (this.hasSelection = n);
          } else
            e || (this.prevInput = this.textarea.value = "", C && w >= 9 && (this.hasSelection = null));
          this.resetting = false;
        }
      }, at.prototype.getField = function() {
        return this.textarea;
      }, at.prototype.supportsTouch = function() {
        return false;
      }, at.prototype.focus = function() {
        if (this.cm.options.readOnly != "nocursor" && (!K || Ze(this.textarea.ownerDocument) != this.textarea))
          try {
            this.textarea.focus();
          } catch {
          }
      }, at.prototype.blur = function() {
        this.textarea.blur();
      }, at.prototype.resetPosition = function() {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }, at.prototype.receivedFocus = function() {
        this.slowPoll();
      }, at.prototype.slowPoll = function() {
        var e = this;
        this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
          e.poll(), e.cm.state.focused && e.slowPoll();
        });
      }, at.prototype.fastPoll = function() {
        var e = false, t = this;
        t.pollingFast = true;
        function n() {
          var r = t.poll();
          !r && !e ? (e = true, t.polling.set(60, n)) : (t.pollingFast = false, t.slowPoll());
        }
        t.polling.set(20, n);
      }, at.prototype.poll = function() {
        var e = this, t = this.cm, n = this.textarea, r = this.prevInput;
        if (this.contextMenuPending || this.resetting || !t.state.focused || Rr(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq)
          return false;
        var i = n.value;
        if (i == r && !t.somethingSelected())
          return false;
        if (C && w >= 9 && this.hasSelection === i || Z && /[\uf700-\uf7ff]/.test(i))
          return t.display.input.reset(), false;
        if (t.doc.sel == t.display.selForContextMenu) {
          var l = i.charCodeAt(0);
          if (l == 8203 && !r && (r = "​"), l == 8666)
            return this.reset(), this.cm.execCommand("undo");
        }
        for (var u = 0, c = Math.min(r.length, i.length); u < c && r.charCodeAt(u) == i.charCodeAt(u); )
          ++u;
        return jt(t, function() {
          Ua(
            t,
            i.slice(u),
            r.length - u,
            null,
            e.composing ? "*compose" : null
          ), i.length > 1e3 || i.indexOf(`
`) > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(
            e.composing.start,
            t.getCursor("to"),
            { className: "CodeMirror-composing" }
          ));
        }), true;
      }, at.prototype.ensurePolled = function() {
        this.pollingFast && this.poll() && (this.pollingFast = false);
      }, at.prototype.onKeyPress = function() {
        C && w >= 9 && (this.hasSelection = null), this.fastPoll();
      }, at.prototype.onContextMenu = function(e) {
        var t = this, n = t.cm, r = n.display, i = t.textarea;
        t.contextMenuPending && t.contextMenuPending();
        var l = fn(n, e), u = r.scroller.scrollTop;
        if (!l || E)
          return;
        var c = n.options.resetSelectionOnContextMenu;
        c && n.doc.sel.contains(l) == -1 && mt(n, kt)(n.doc, Gr(l), $e);
        var d = i.style.cssText, v = t.wrapper.style.cssText, k = t.wrapper.offsetParent.getBoundingClientRect();
        t.wrapper.style.cssText = "position: static", i.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ` + (e.clientY - k.top - 5) + "px; left: " + (e.clientX - k.left - 5) + `px;
      z-index: 1000; background: ` + (C ? "rgba(255, 255, 255, .05)" : "transparent") + `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;
        var L;
        b && (L = i.ownerDocument.defaultView.scrollY), r.input.focus(), b && i.ownerDocument.defaultView.scrollTo(null, L), r.input.reset(), n.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = F, r.selForContextMenu = n.doc.sel, clearTimeout(r.detectingSelectAll);
        function P() {
          if (i.selectionStart != null) {
            var q = n.somethingSelected(), ie = "​" + (q ? i.value : "");
            i.value = "⇚", i.value = ie, t.prevInput = q ? "" : "​", i.selectionStart = 1, i.selectionEnd = ie.length, r.selForContextMenu = n.doc.sel;
          }
        }
        function F() {
          if (t.contextMenuPending == F && (t.contextMenuPending = false, t.wrapper.style.cssText = v, i.style.cssText = d, C && w < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = u), i.selectionStart != null)) {
            (!C || C && w < 9) && P();
            var q = 0, ie = function() {
              r.selForContextMenu == n.doc.sel && i.selectionStart == 0 && i.selectionEnd > 0 && t.prevInput == "​" ? mt(n, eu)(n) : q++ < 10 ? r.detectingSelectAll = setTimeout(ie, 500) : (r.selForContextMenu = null, r.input.reset());
            };
            r.detectingSelectAll = setTimeout(ie, 200);
          }
        }
        if (C && w >= 9 && P(), ee) {
          kr(e);
          var G = function() {
            ft(window, "mouseup", G), setTimeout(F, 20);
          };
          re(window, "mouseup", G);
        } else
          setTimeout(F, 50);
      }, at.prototype.readOnlyChanged = function(e) {
        e || this.reset(), this.textarea.disabled = e == "nocursor", this.textarea.readOnly = !!e;
      }, at.prototype.setUneditable = function() {
      }, at.prototype.needsContentAttribute = false;
      function yd(e, t) {
        if (t = t ? Se(t) : {}, t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), t.autofocus == null) {
          var n = Ze(e.ownerDocument);
          t.autofocus = n == e || e.getAttribute("autofocus") != null && n == document.body;
        }
        function r() {
          e.value = c.getValue();
        }
        var i;
        if (e.form && (re(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
          var l = e.form;
          i = l.submit;
          try {
            var u = l.submit = function() {
              r(), l.submit = i, l.submit(), l.submit = u;
            };
          } catch {
          }
        }
        t.finishInit = function(d) {
          d.save = r, d.getTextArea = function() {
            return e;
          }, d.toTextArea = function() {
            d.toTextArea = isNaN, r(), e.parentNode.removeChild(d.getWrapperElement()), e.style.display = "", e.form && (ft(e.form, "submit", r), !t.leaveSubmitMethodAlone && typeof e.form.submit == "function" && (e.form.submit = i));
          };
        }, e.style.display = "none";
        var c = qe(
          function(d) {
            return e.parentNode.insertBefore(d, e.nextSibling);
          },
          t
        );
        return c;
      }
      function bd(e) {
        e.off = ft, e.on = re, e.wheelEventPixels = _h, e.Doc = It, e.splitLines = ri, e.countColumn = ge, e.findColumn = qt, e.isWordChar = H, e.Pass = De, e.signal = We, e.Line = Ln, e.changeEnd = Vr, e.scrollbarModel = Os, e.Pos = D, e.cmpPos = U, e.modes = ir, e.mimeModes = Hr, e.resolveMode = zt, e.getMode = xr, e.modeExtensions = Wr, e.extendMode = Gi, e.copyState = Tr, e.startState = ni, e.innerMode = zr, e.commands = _i, e.keyMap = Nr, e.keyName = gu, e.isModifierKey = pu, e.lookupKey = Wn, e.normalizeKeyMap = Yh, e.StringStream = nt, e.SharedTextMarker = ki, e.TextMarker = Yr, e.LineWidget = Ci, e.e_preventDefault = rt, e.e_stopPropagation = pr, e.e_stop = kr, e.addClass = pt, e.contains = St, e.rmClass = ce, e.keyNames = Xr;
      }
      fd(qe), pd(qe);
      var wd = "iter insert remove copy getEditor constructor".split(" ");
      for (var Co in It.prototype)
        It.prototype.hasOwnProperty(Co) && Me(wd, Co) < 0 && (qe.prototype[Co] = function(e) {
          return function() {
            return e.apply(this.doc, arguments);
          };
        }(It.prototype[Co]));
      return ot(It), qe.inputStyles = { textarea: at, contenteditable: ze }, qe.defineMode = function(e) {
        !qe.defaults.mode && e != "null" && (qe.defaults.mode = e), Ui.apply(this, arguments);
      }, qe.defineMIME = Tn, qe.defineMode("null", function() {
        return { token: function(e) {
          return e.skipToEnd();
        } };
      }), qe.defineMIME("text/plain", "null"), qe.defineExtension = function(e, t) {
        qe.prototype[e] = t;
      }, qe.defineDocExtension = function(e, t) {
        It.prototype[e] = t;
      }, qe.fromTextArea = yd, bd(qe), qe.version = "5.65.15", qe;
    });
  }(rl)), rl.exports;
}
var Um = Wi();
var mc = cc(Um);
(function(o, a) {
  (function(s) {
    s(Wi());
  })(function(s) {
    var h2 = s.Pos, g = "http://www.w3.org/2000/svg";
    function f(S, N) {
      this.mv = S, this.type = N, this.classes = N == "left" ? {
        chunk: "CodeMirror-merge-l-chunk",
        start: "CodeMirror-merge-l-chunk-start",
        end: "CodeMirror-merge-l-chunk-end",
        insert: "CodeMirror-merge-l-inserted",
        del: "CodeMirror-merge-l-deleted",
        connect: "CodeMirror-merge-l-connect"
      } : {
        chunk: "CodeMirror-merge-r-chunk",
        start: "CodeMirror-merge-r-chunk-start",
        end: "CodeMirror-merge-r-chunk-end",
        insert: "CodeMirror-merge-r-inserted",
        del: "CodeMirror-merge-r-deleted",
        connect: "CodeMirror-merge-r-connect"
      };
    }
    f.prototype = {
      constructor: f,
      init: function(S, N, I) {
        this.edit = this.mv.edit, (this.edit.state.diffViews || (this.edit.state.diffViews = [])).push(this), this.orig = s(S, Te({ value: N, readOnly: !this.mv.options.allowEditingOriginals }, Te(I))), this.mv.options.connect == "align" && (this.edit.state.trackAlignable || (this.edit.state.trackAlignable = new rr(this.edit)), this.orig.state.trackAlignable = new rr(this.orig)), this.lockButton.title = this.edit.phrase("Toggle locked scrolling"), this.lockButton.setAttribute("aria-label", this.lockButton.title), this.orig.state.diffViews = [this];
        var R = I.chunkClassLocation || "background";
        Object.prototype.toString.call(R) != "[object Array]" && (R = [R]), this.classes.classLocation = R, this.diff = Ve(ne(N), ne(I.value), this.mv.options.ignoreWhitespace), this.chunks = Fe(this.diff), this.diffOutOfDate = this.dealigned = false, this.needsScrollSync = null, this.showDifferences = I.showDifferences !== false;
      },
      registerEvents: function(S) {
        this.forceUpdate = C(this), T(this, true, false), w(this, S);
      },
      setShowDifferences: function(S) {
        S = S !== false, S != this.showDifferences && (this.showDifferences = S, this.forceUpdate("full"));
      }
    };
    function p(S) {
      S.diffOutOfDate && (S.diff = Ve(S.orig.getValue(), S.edit.getValue(), S.mv.options.ignoreWhitespace), S.chunks = Fe(S.diff), S.diffOutOfDate = false, s.signal(S.edit, "updateDiff", S.diff));
    }
    var m = false;
    function C(S) {
      var N = { from: 0, to: 0, marked: [] }, I = { from: 0, to: 0, marked: [] }, R, H = false;
      function z(ve) {
        m = true, H = false, ve == "full" && (S.svg && Se(S.svg), S.copyButtons && Se(S.copyButtons), E(S.edit, N.marked, S.classes), E(S.orig, I.marked, S.classes), N.from = N.to = I.from = I.to = 0), p(S), S.showDifferences && (A(S.edit, S.diff, N, DIFF_INSERT, S.classes), A(S.orig, S.diff, I, DIFF_DELETE, S.classes)), S.mv.options.connect == "align" && fe(S), $(S), S.needsScrollSync != null && b(S, S.needsScrollSync), m = false;
      }
      function J(ve) {
        m || (S.dealigned = true, te(ve));
      }
      function te(ve) {
        m || H || (clearTimeout(R), ve === true && (H = true), R = setTimeout(z, ve === true ? 20 : 250));
      }
      function oe(ve, Oe) {
        S.diffOutOfDate || (S.diffOutOfDate = true, N.from = N.to = I.from = I.to = 0), J(Oe.text.length - 1 != Oe.to.line - Oe.from.line);
      }
      function ye() {
        S.diffOutOfDate = true, S.dealigned = true, z("full");
      }
      return S.edit.on("change", oe), S.orig.on("change", oe), S.edit.on("swapDoc", ye), S.orig.on("swapDoc", ye), S.mv.options.connect == "align" && (s.on(S.edit.state.trackAlignable, "realign", J), s.on(S.orig.state.trackAlignable, "realign", J)), S.edit.on("viewportChange", function() {
        te(false);
      }), S.orig.on("viewportChange", function() {
        te(false);
      }), z(), z;
    }
    function w(S, N) {
      S.edit.on("scroll", function() {
        b(S, true) && $(S);
      }), S.orig.on("scroll", function() {
        b(S, false) && $(S), N && b(N, true) && $(N);
      });
    }
    function b(S, N) {
      if (S.diffOutOfDate)
        return S.lockScroll && S.needsScrollSync == null && (S.needsScrollSync = N), false;
      if (S.needsScrollSync = null, !S.lockScroll)
        return true;
      var I, R, H = +/* @__PURE__ */ new Date();
      if (N ? (I = S.edit, R = S.orig) : (I = S.orig, R = S.edit), I.state.scrollSetBy == S && (I.state.scrollSetAt || 0) + 250 > H)
        return false;
      var z = I.getScrollInfo();
      if (S.mv.options.connect == "align")
        Ne = z.top;
      else {
        var J = 0.5 * z.clientHeight, te = z.top + J, oe = I.lineAtHeight(te, "local"), ye = pt(S.chunks, oe, N), ve = x(I, N ? ye.edit : ye.orig), Oe = x(R, N ? ye.orig : ye.edit), Pe = (te - ve.top) / (ve.bot - ve.top), Ne = Oe.top - J + Pe * (Oe.bot - Oe.top), Ye, Ue;
        if (Ne > z.top && (Ue = z.top / J) < 1)
          Ne = Ne * Ue + z.top * (1 - Ue);
        else if ((Ye = z.height - z.clientHeight - z.top) < J) {
          var Mt = R.getScrollInfo(), re = Mt.height - Mt.clientHeight - Ne;
          re > Ye && (Ue = Ye / J) < 1 && (Ne = Ne * Ue + (Mt.height - Mt.clientHeight - Ye) * (1 - Ue));
        }
      }
      return R.scrollTo(z.left, Ne), R.state.scrollSetAt = H, R.state.scrollSetBy = S, true;
    }
    function x(S, N) {
      var I = N.after;
      return I == null && (I = S.lastLine() + 1), {
        top: S.heightAtLine(N.before || 0, "local"),
        bot: S.heightAtLine(I, "local")
      };
    }
    function T(S, N, I) {
      S.lockScroll = N, N && I != false && b(S, DIFF_INSERT) && $(S), (N ? s.addClass : s.rmClass)(S.lockButton, "CodeMirror-merge-scrolllock-enabled");
    }
    function _(S, N, I) {
      for (var R = I.classLocation, H = 0; H < R.length; H++)
        S.removeLineClass(N, R[H], I.chunk), S.removeLineClass(N, R[H], I.start), S.removeLineClass(N, R[H], I.end);
    }
    function E(S, N, I) {
      for (var R = 0; R < N.length; ++R) {
        var H = N[R];
        H instanceof s.TextMarker ? H.clear() : H.parent && _(S, H, I);
      }
      N.length = 0;
    }
    function A(S, N, I, R, H) {
      var z = S.getViewport();
      S.operation(function() {
        I.from == I.to || z.from - I.to > 20 || I.from - z.to > 20 ? (E(S, I.marked, H), W(S, N, R, I.marked, z.from, z.to, H), I.from = z.from, I.to = z.to) : (z.from < I.from && (W(S, N, R, I.marked, z.from, I.from, H), I.from = z.from), z.to > I.to && (W(S, N, R, I.marked, I.to, z.to, H), I.to = z.to));
      });
    }
    function B(S, N, I, R, H, z) {
      for (var J = I.classLocation, te = S.getLineHandle(N), oe = 0; oe < J.length; oe++)
        R && S.addLineClass(te, J[oe], I.chunk), H && S.addLineClass(te, J[oe], I.start), z && S.addLineClass(te, J[oe], I.end);
      return te;
    }
    function W(S, N, I, R, H, z, J) {
      var te = h2(0, 0), oe = h2(H, 0), ye = S.clipPos(h2(z - 1)), ve = I == DIFF_DELETE ? J.del : J.insert;
      function Oe(ct, ot) {
        for (var rt = Math.max(H, ct), pr = Math.min(z, ot), nr = rt; nr < pr; ++nr)
          R.push(B(S, nr, J, true, nr == ct, nr == ot - 1));
        ct == ot && rt == ot && pr == ot && (rt ? R.push(B(S, rt - 1, J, false, false, true)) : R.push(B(S, rt, J, false, true, false)));
      }
      for (var Pe = 0, Ne = false, Ye = 0; Ye < N.length; ++Ye) {
        var Ue = N[Ye], Mt = Ue[0], re = Ue[1];
        if (Mt == DIFF_EQUAL) {
          var Br = te.line + (Ze(N, Ye) ? 0 : 1);
          Me(te, re);
          var ft = te.line + (St(N, Ye) ? 1 : 0);
          ft > Br && (Ne && (Oe(Pe, Br), Ne = false), Pe = ft);
        } else if (Ne = true, Mt == I) {
          var We = Me(te, re, true), Xe = qt(oe, te), ln = dr(ye, We);
          Wt(Xe, ln) || R.push(S.markText(Xe, ln, { className: ve })), te = We;
        }
      }
      Ne && Oe(Pe, te.line + 1);
    }
    function $(S) {
      if (S.showDifferences) {
        if (S.svg) {
          Se(S.svg);
          var N = S.gap.offsetWidth;
          ge(S.svg, "width", N, "height", S.gap.offsetHeight);
        }
        S.copyButtons && Se(S.copyButtons);
        for (var I = S.edit.getViewport(), R = S.orig.getViewport(), H = S.mv.wrap.getBoundingClientRect().top, z = H - S.edit.getScrollerElement().getBoundingClientRect().top + S.edit.getScrollInfo().top, J = H - S.orig.getScrollerElement().getBoundingClientRect().top + S.orig.getScrollInfo().top, te = 0; te < S.chunks.length; te++) {
          var oe = S.chunks[te];
          oe.editFrom <= I.to && oe.editTo >= I.from && oe.origFrom <= R.to && oe.origTo >= R.from && ee(S, oe, J, z, N);
        }
      }
    }
    function X(S, N) {
      for (var I = 0, R = 0, H = 0; H < N.length; H++) {
        var z = N[H];
        if (z.editTo > S && z.editFrom <= S)
          return null;
        if (z.editFrom > S)
          break;
        I = z.editTo, R = z.origTo;
      }
      return R + (S - I);
    }
    function K(S, N, I) {
      for (var R = S.state.trackAlignable, H = S.firstLine(), z = 0, J = [], te = 0; ; te++) {
        for (var oe = N[te], ye = oe ? I ? oe.origFrom : oe.editFrom : 1e9; z < R.alignable.length; z += 2) {
          var ve = R.alignable[z] + 1;
          if (!(ve <= H))
            if (ve <= ye)
              J.push(ve);
            else
              break;
        }
        if (!oe)
          break;
        J.push(H = I ? oe.origTo : oe.editTo);
      }
      return J;
    }
    function Z(S, N, I, R) {
      var H = 0, z = 0, J = 0, te = 0;
      e:
        for (; ; H++) {
          var oe = S[H], ye = N[z];
          if (!oe && ye == null)
            break;
          for (var ve = oe ? oe[0] : 1e9, Oe = ye ?? 1e9; J < I.length; ) {
            var Pe = I[J];
            if (Pe.origFrom <= Oe && Pe.origTo > Oe) {
              z++, H--;
              continue e;
            }
            if (Pe.editTo > ve) {
              if (Pe.editFrom <= ve)
                continue e;
              break;
            }
            te += Pe.origTo - Pe.origFrom - (Pe.editTo - Pe.editFrom), J++;
          }
          if (ve == Oe - te)
            oe[R] = Oe, z++;
          else if (ve < Oe - te)
            oe[R] = ve + te;
          else {
            var Ne = [Oe - te, null, null];
            Ne[R] = Oe, S.splice(H, 0, Ne), z++;
          }
        }
    }
    function le(S, N) {
      var I = K(S.edit, S.chunks, false), R = [];
      if (N)
        for (var H = 0, z = 0; H < N.chunks.length; H++) {
          for (var J = N.chunks[H].editTo; z < I.length && I[z] < J; )
            z++;
          (z == I.length || I[z] != J) && I.splice(z++, 0, J);
        }
      for (var H = 0; H < I.length; H++)
        R.push([I[H], null, null]);
      return Z(R, K(S.orig, S.chunks, true), S.chunks, 1), N && Z(R, K(N.orig, N.chunks, true), N.chunks, 2), R;
    }
    function fe(S, N) {
      if (!(!S.dealigned && !N)) {
        if (!S.orig.curOp)
          return S.orig.operation(function() {
            fe(S, N);
          });
        S.dealigned = false;
        var I = S.mv.left == S ? S.mv.right : S.mv.left;
        I && (p(I), I.dealigned = false);
        for (var R = le(S, I), H = S.mv.aligners, z = 0; z < H.length; z++)
          H[z].clear();
        H.length = 0;
        var J = [S.edit, S.orig], te = [], oe = [];
        I && J.push(I.orig);
        for (var z = 0; z < J.length; z++)
          te.push(J[z].getScrollInfo().top), oe.push(-J[z].getScrollerElement().getBoundingClientRect().top);
        (oe[0] != oe[1] || J.length == 3 && oe[1] != oe[2]) && Y(J, oe, [0, 0, 0], H);
        for (var ye = 0; ye < R.length; ye++)
          Y(J, oe, R[ye], H);
        for (var z = 0; z < J.length; z++)
          J[z].scrollTo(null, te[z]);
      }
    }
    function Y(S, N, I, R) {
      for (var H = -1e8, z = [], J = 0; J < S.length; J++)
        if (I[J] != null) {
          var te = S[J].heightAtLine(I[J], "local") - N[J];
          z[J] = te, H = Math.max(H, te);
        }
      for (var J = 0; J < S.length; J++)
        if (I[J] != null) {
          var oe = H - z[J];
          oe > 1 && R.push(Q(S[J], I[J], oe));
        }
    }
    function Q(S, N, I) {
      var R = true;
      N > S.lastLine() && (N--, R = false);
      var H = document.createElement("div");
      return H.className = "CodeMirror-merge-spacer", H.style.height = I + "px", H.style.minWidth = "1px", S.addLineWidget(N, H, { height: I, above: R, mergeSpacer: true, handleMouseEvents: true });
    }
    function ee(S, N, I, R, H) {
      var z = S.type == "left", J = S.orig.heightAtLine(N.origFrom, "local", true) - I;
      if (S.svg) {
        var te = J, oe = S.edit.heightAtLine(N.editFrom, "local", true) - R;
        if (z) {
          var ye = te;
          te = oe, oe = ye;
        }
        var ve = S.orig.heightAtLine(N.origTo, "local", true) - I, Oe = S.edit.heightAtLine(N.editTo, "local", true) - R;
        if (z) {
          var ye = ve;
          ve = Oe, Oe = ye;
        }
        var Pe = " C " + H / 2 + " " + oe + " " + H / 2 + " " + te + " " + (H + 2) + " " + te, Ne = " C " + H / 2 + " " + ve + " " + H / 2 + " " + Oe + " -1 " + Oe;
        ge(
          S.svg.appendChild(document.createElementNS(g, "path")),
          "d",
          "M -1 " + oe + Pe + " L " + (H + 2) + " " + ve + Ne + " z",
          "class",
          S.classes.connect
        );
      }
      if (S.copyButtons) {
        var Ye = S.copyButtons.appendChild(Ke(
          "div",
          S.type == "left" ? "⇝" : "⇜",
          "CodeMirror-merge-copy"
        )), Ue = S.mv.options.allowEditingOriginals;
        if (Ye.title = S.edit.phrase(Ue ? "Push to left" : "Revert chunk"), Ye.chunk = N, Ye.style.top = (N.origTo > N.origFrom ? J : S.edit.heightAtLine(N.editFrom, "local") - R) + "px", Ye.setAttribute("role", "button"), Ye.setAttribute("tabindex", "0"), Ye.setAttribute("aria-label", Ye.title), Ue) {
          var Mt = S.edit.heightAtLine(N.editFrom, "local") - R, re = S.copyButtons.appendChild(Ke(
            "div",
            S.type == "right" ? "⇝" : "⇜",
            "CodeMirror-merge-copy-reverse"
          ));
          re.title = "Push to right", re.chunk = {
            editFrom: N.origFrom,
            editTo: N.origTo,
            origFrom: N.editFrom,
            origTo: N.editTo
          }, re.style.top = Mt + "px", S.type == "right" ? re.style.left = "2px" : re.style.right = "2px", re.setAttribute("role", "button"), re.setAttribute("tabindex", "0"), re.setAttribute("aria-label", re.title);
        }
      }
    }
    function ae(S, N, I, R) {
      if (!S.diffOutOfDate) {
        var H = R.origTo > I.lastLine() ? h2(R.origFrom - 1) : h2(R.origFrom, 0), z = h2(R.origTo, 0), J = R.editTo > N.lastLine() ? h2(R.editFrom - 1) : h2(R.editFrom, 0), te = h2(R.editTo, 0), oe = S.mv.options.revertChunk;
        oe ? oe(S.mv, I, H, z, N, J, te) : N.replaceRange(I.getRange(H, z), J, te);
      }
    }
    var ce = s.MergeView = function(S, N) {
      if (!(this instanceof ce))
        return new ce(S, N);
      this.options = N;
      var I = N.origLeft, R = N.origRight == null ? N.orig : N.origRight, H = I != null, z = R != null, J = 1 + (H ? 1 : 0) + (z ? 1 : 0), te = [], oe = this.left = null, ye = this.right = null, ve = this;
      if (H) {
        oe = this.left = new f(this, "left");
        var Oe = Ke("div", null, "CodeMirror-merge-pane CodeMirror-merge-left");
        te.push(Oe), te.push(j(oe));
      }
      var Pe = Ke("div", null, "CodeMirror-merge-pane CodeMirror-merge-editor");
      if (te.push(Pe), z) {
        ye = this.right = new f(this, "right"), te.push(j(ye));
        var Ne = Ke("div", null, "CodeMirror-merge-pane CodeMirror-merge-right");
        te.push(Ne);
      }
      (z ? Ne : Pe).className += " CodeMirror-merge-pane-rightmost", te.push(Ke("div", null, null, "height: 0; clear: both;"));
      var Ye = this.wrap = S.appendChild(Ke("div", te, "CodeMirror-merge CodeMirror-merge-" + J + "pane"));
      this.edit = s(Pe, Te(N)), oe && oe.init(Oe, I, N), ye && ye.init(Ne, R, N), N.collapseIdentical && this.editor().operation(function() {
        vt(ve, N.collapseIdentical);
      }), N.connect == "align" && (this.aligners = [], fe(this.left || this.right, true)), oe && oe.registerEvents(ye), ye && ye.registerEvents(oe);
      var Ue = function() {
        oe && $(oe), ye && $(ye);
      };
      s.on(window, "resize", Ue);
      var Mt = setInterval(function() {
        for (var re = Ye.parentNode; re && re != document.body; re = re.parentNode)
          ;
        re || (clearInterval(Mt), s.off(window, "resize", Ue));
      }, 5e3);
    };
    function j(S) {
      var N = S.lockButton = Ke("div", null, "CodeMirror-merge-scrolllock");
      N.setAttribute("role", "button"), N.setAttribute("tabindex", "0");
      var I = Ke("div", [N], "CodeMirror-merge-scrolllock-wrap");
      s.on(N, "click", function() {
        T(S, !S.lockScroll);
      }), s.on(N, "keyup", function(J) {
        (J.key === "Enter" || J.code === "Space") && T(S, !S.lockScroll);
      });
      var R = [I];
      if (S.mv.options.revertButtons !== false) {
        S.copyButtons = Ke("div", null, "CodeMirror-merge-copybuttons-" + S.type);
        var H = function(J) {
          var te = J.target || J.srcElement;
          if (te.chunk) {
            if (te.className == "CodeMirror-merge-copy-reverse") {
              ae(S, S.orig, S.edit, te.chunk);
              return;
            }
            ae(S, S.edit, S.orig, te.chunk);
          }
        };
        s.on(S.copyButtons, "click", H), s.on(S.copyButtons, "keyup", function(J) {
          (J.key === "Enter" || J.code === "Space") && H(J);
        }), R.unshift(S.copyButtons);
      }
      if (S.mv.options.connect != "align") {
        var z = document.createElementNS && document.createElementNS(g, "svg");
        z && !z.createSVGRect && (z = null), S.svg = z, z && R.push(z);
      }
      return S.gap = Ke("div", R, "CodeMirror-merge-gap");
    }
    ce.prototype = {
      constructor: ce,
      editor: function() {
        return this.edit;
      },
      rightOriginal: function() {
        return this.right && this.right.orig;
      },
      leftOriginal: function() {
        return this.left && this.left.orig;
      },
      setShowDifferences: function(S) {
        this.right && this.right.setShowDifferences(S), this.left && this.left.setShowDifferences(S);
      },
      rightChunks: function() {
        if (this.right)
          return p(this.right), this.right.chunks;
      },
      leftChunks: function() {
        if (this.left)
          return p(this.left), this.left.chunks;
      }
    };
    function ne(S) {
      return typeof S == "string" ? S : S.getValue();
    }
    var O;
    function Ve(S, N, I) {
      O || (O = new diff_match_patch());
      for (var R = O.diff_main(S, N), H = 0; H < R.length; ++H) {
        var z = R[H];
        (I ? !/[^ \t]/.test(z[1]) : !z[1]) ? R.splice(H--, 1) : H && R[H - 1][0] == z[0] && (R.splice(H--, 1), R[H][1] += z[1]);
      }
      return R;
    }
    function Fe(S) {
      var N = [];
      if (!S.length)
        return N;
      for (var I = 0, R = 0, H = h2(0, 0), z = h2(0, 0), J = 0; J < S.length; ++J) {
        var te = S[J], oe = te[0];
        if (oe == DIFF_EQUAL) {
          var ye = !Ze(S, J) || H.line < I || z.line < R ? 1 : 0, ve = H.line + ye, Oe = z.line + ye;
          Me(H, te[1], null, z);
          var Pe = St(S, J) ? 1 : 0, Ne = H.line + Pe, Ye = z.line + Pe;
          Ne > ve && (J && N.push({
            origFrom: R,
            origTo: Oe,
            editFrom: I,
            editTo: ve
          }), I = Ne, R = Ye);
        } else
          Me(oe == DIFF_INSERT ? H : z, te[1]);
      }
      return (I <= H.line || R <= z.line) && N.push({
        origFrom: R,
        origTo: z.line + 1,
        editFrom: I,
        editTo: H.line + 1
      }), N;
    }
    function St(S, N) {
      if (N == S.length - 1)
        return true;
      var I = S[N + 1][1];
      return I.length == 1 && N < S.length - 2 || I.charCodeAt(0) != 10 ? false : N == S.length - 2 ? true : (I = S[N + 2][1], (I.length > 1 || N == S.length - 3) && I.charCodeAt(0) == 10);
    }
    function Ze(S, N) {
      if (N == 0)
        return true;
      var I = S[N - 1][1];
      return I.charCodeAt(I.length - 1) != 10 ? false : N == 1 ? true : (I = S[N - 2][1], I.charCodeAt(I.length - 1) == 10);
    }
    function pt(S, N, I) {
      for (var R, H, z, J, te = 0; te < S.length; te++) {
        var oe = S[te], ye = I ? oe.editFrom : oe.origFrom, ve = I ? oe.editTo : oe.origTo;
        H == null && (ye > N ? (H = oe.editFrom, J = oe.origFrom) : ve > N && (H = oe.editTo, J = oe.origTo)), ve <= N ? (R = oe.editTo, z = oe.origTo) : ye <= N && (R = oe.editFrom, z = oe.origFrom);
      }
      return { edit: { before: R, after: H }, orig: { before: z, after: J } };
    }
    function Gt(S, N, I) {
      S.addLineClass(N, "wrap", "CodeMirror-merge-collapsed-line");
      var R = document.createElement("span");
      R.className = "CodeMirror-merge-collapsed-widget", R.title = S.phrase("Identical text collapsed. Click to expand.");
      var H = S.markText(h2(N, 0), h2(I - 1), {
        inclusiveLeft: true,
        inclusiveRight: true,
        replacedWith: R,
        clearOnEnter: true
      });
      function z() {
        H.clear(), S.removeLineClass(N, "wrap", "CodeMirror-merge-collapsed-line");
      }
      return H.explicitlyCleared && z(), s.on(R, "click", z), H.on("clear", z), s.on(R, "click", z), { mark: H, clear: z };
    }
    function tr(S, N) {
      var I = [];
      function R() {
        for (var te = 0; te < I.length; te++)
          I[te].clear();
      }
      for (var H = 0; H < N.length; H++) {
        var z = N[H], J = Gt(z.cm, z.line, z.line + S);
        I.push(J), J.mark.on("clear", R);
      }
      return I[0].mark;
    }
    function Qe(S, N, I, R) {
      for (var H = 0; H < S.chunks.length; H++)
        for (var z = S.chunks[H], J = z.editFrom - N; J < z.editTo + N; J++) {
          var te = J + I;
          te >= 0 && te < R.length && (R[te] = false);
        }
    }
    function vt(S, N) {
      typeof N != "number" && (N = 2);
      for (var I = [], R = S.editor(), H = R.firstLine(), z = H, J = R.lastLine(); z <= J; z++)
        I.push(true);
      S.left && Qe(S.left, N, H, I), S.right && Qe(S.right, N, H, I);
      for (var te = 0; te < I.length; te++)
        if (I[te]) {
          for (var oe = te + H, ye = 1; te < I.length - 1 && I[te + 1]; te++, ye++)
            ;
          if (ye > N) {
            var ve = [{ line: oe, cm: R }];
            S.left && ve.push({ line: X(oe, S.left.chunks), cm: S.left.orig }), S.right && ve.push({ line: X(oe, S.right.chunks), cm: S.right.orig });
            var Oe = tr(ye, ve);
            S.options.onCollapse && S.options.onCollapse(S, oe, ye, Oe);
          }
        }
    }
    function Ke(S, N, I, R) {
      var H = document.createElement(S);
      if (I && (H.className = I), R && (H.style.cssText = R), typeof N == "string")
        H.appendChild(document.createTextNode(N));
      else if (N)
        for (var z = 0; z < N.length; ++z)
          H.appendChild(N[z]);
      return H;
    }
    function Se(S) {
      for (var N = S.childNodes.length; N > 0; --N)
        S.removeChild(S.firstChild);
    }
    function ge(S) {
      for (var N = 1; N < arguments.length; N += 2)
        S.setAttribute(arguments[N], arguments[N + 1]);
    }
    function Te(S, N) {
      N || (N = {});
      for (var I in S)
        S.hasOwnProperty(I) && (N[I] = S[I]);
      return N;
    }
    function Me(S, N, I, R) {
      for (var H = I ? h2(S.line, S.ch) : S, z = 0; ; ) {
        var J = N.indexOf(`
`, z);
        if (J == -1)
          break;
        ++H.line, R && ++R.line, z = J + 1;
      }
      return H.ch = (z ? 0 : H.ch) + (N.length - z), R && (R.ch = (z ? 0 : R.ch) + (N.length - z)), H;
    }
    var an = 1, De = 2, $e = 4;
    function rr(S) {
      this.cm = S, this.alignable = [], this.height = S.doc.height;
      var N = this;
      S.on("markerAdded", function(I, R) {
        if (R.collapsed) {
          var H = R.find(1);
          H != null && N.set(H.line, $e);
        }
      }), S.on("markerCleared", function(I, R, H, z) {
        z != null && R.collapsed && N.check(z, $e, N.hasMarker);
      }), S.on("markerChanged", this.signal.bind(this)), S.on("lineWidgetAdded", function(I, R, H) {
        R.mergeSpacer || (R.above ? N.set(H - 1, De) : N.set(H, an));
      }), S.on("lineWidgetCleared", function(I, R, H) {
        R.mergeSpacer || (R.above ? N.check(H - 1, De, N.hasWidgetBelow) : N.check(H, an, N.hasWidget));
      }), S.on("lineWidgetChanged", this.signal.bind(this)), S.on("change", function(I, R) {
        var H = R.from.line, z = R.to.line - R.from.line, J = R.text.length - 1, te = H + J;
        (z || J) && N.map(H, z, J), N.check(te, $e, N.hasMarker), (z || J) && N.check(R.from.line, $e, N.hasMarker);
      }), S.on("viewportChange", function() {
        N.cm.doc.height != N.height && N.signal();
      });
    }
    rr.prototype = {
      signal: function() {
        s.signal(this, "realign"), this.height = this.cm.doc.height;
      },
      set: function(S, N) {
        for (var I = -1; I < this.alignable.length; I += 2) {
          var R = this.alignable[I] - S;
          if (R == 0) {
            if ((this.alignable[I + 1] & N) == N)
              return;
            this.alignable[I + 1] |= N, this.signal();
            return;
          }
          if (R > 0)
            break;
        }
        this.signal(), this.alignable.splice(I, 0, S, N);
      },
      find: function(S) {
        for (var N = 0; N < this.alignable.length; N += 2)
          if (this.alignable[N] == S)
            return N;
        return -1;
      },
      check: function(S, N, I) {
        var R = this.find(S);
        if (!(R == -1 || !(this.alignable[R + 1] & N)) && !I.call(this, S)) {
          this.signal();
          var H = this.alignable[R + 1] & ~N;
          H ? this.alignable[R + 1] = H : this.alignable.splice(R, 2);
        }
      },
      hasMarker: function(S) {
        var N = this.cm.getLineHandle(S);
        if (N.markedSpans) {
          for (var I = 0; I < N.markedSpans.length; I++)
            if (N.markedSpans[I].marker.collapsed && N.markedSpans[I].to != null)
              return true;
        }
        return false;
      },
      hasWidget: function(S) {
        var N = this.cm.getLineHandle(S);
        if (N.widgets) {
          for (var I = 0; I < N.widgets.length; I++)
            if (!N.widgets[I].above && !N.widgets[I].mergeSpacer)
              return true;
        }
        return false;
      },
      hasWidgetBelow: function(S) {
        if (S == this.cm.lastLine())
          return false;
        var N = this.cm.getLineHandle(S + 1);
        if (N.widgets) {
          for (var I = 0; I < N.widgets.length; I++)
            if (N.widgets[I].above && !N.widgets[I].mergeSpacer)
              return true;
        }
        return false;
      },
      map: function(S, N, I) {
        for (var R = I - N, H = S + N, z = -1, J = -1, te = 0; te < this.alignable.length; te += 2) {
          var oe = this.alignable[te];
          oe == S && this.alignable[te + 1] & De && (z = te), oe == H && this.alignable[te + 1] & De && (J = te), !(oe <= S) && (oe < H ? this.alignable.splice(te--, 2) : this.alignable[te] += R);
        }
        if (z > -1) {
          var ye = this.alignable[z + 1];
          ye == De ? this.alignable.splice(z, 2) : this.alignable[z + 1] = ye & ~De;
        }
        J > -1 && I && this.set(S + I, De);
      }
    };
    function dr(S, N) {
      return (S.line - N.line || S.ch - N.ch) < 0 ? S : N;
    }
    function qt(S, N) {
      return (S.line - N.line || S.ch - N.ch) > 0 ? S : N;
    }
    function Wt(S, N) {
      return S.line == N.line && S.ch == N.ch;
    }
    function Jt(S, N, I) {
      for (var R = S.length - 1; R >= 0; R--) {
        var H = S[R], z = (I ? H.origTo : H.editTo) - 1;
        if (z < N)
          return z;
      }
    }
    function Ee(S, N, I) {
      for (var R = 0; R < S.length; R++) {
        var H = S[R], z = I ? H.origFrom : H.editFrom;
        if (z > N)
          return z;
      }
    }
    function Cr(S, N) {
      var I = null, R = S.state.diffViews, H = S.getCursor().line;
      if (R)
        for (var z = 0; z < R.length; z++) {
          var J = R[z], te = S == J.orig;
          p(J);
          var oe = N < 0 ? Jt(J.chunks, H, te) : Ee(J.chunks, H, te);
          oe != null && (I == null || (N < 0 ? oe > I : oe < I)) && (I = oe);
        }
      if (I != null)
        S.setCursor(I, 0);
      else
        return s.Pass;
    }
    s.commands.goNextDiff = function(S) {
      return Cr(S, 1);
    }, s.commands.goPrevDiff = function(S) {
      return Cr(S, -1);
    };
  });
})();
var yc = { exports: {} };
(function(o) {
  var a = function() {
    this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = 0.5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = 0.5, this.Patch_Margin = 4, this.Match_MaxBits = 32;
  }, s = -1, h2 = 1, g = 0;
  a.Diff = function(f, p) {
    return [f, p];
  }, a.prototype.diff_main = function(f, p, m, C) {
    typeof C > "u" && (this.Diff_Timeout <= 0 ? C = Number.MAX_VALUE : C = (/* @__PURE__ */ new Date()).getTime() + this.Diff_Timeout * 1e3);
    var w = C;
    if (f == null || p == null)
      throw new Error("Null input. (diff_main)");
    if (f == p)
      return f ? [new a.Diff(g, f)] : [];
    typeof m > "u" && (m = true);
    var b = m, x = this.diff_commonPrefix(f, p), T = f.substring(0, x);
    f = f.substring(x), p = p.substring(x), x = this.diff_commonSuffix(f, p);
    var _ = f.substring(f.length - x);
    f = f.substring(0, f.length - x), p = p.substring(0, p.length - x);
    var E = this.diff_compute_(f, p, b, w);
    return T && E.unshift(new a.Diff(g, T)), _ && E.push(new a.Diff(g, _)), this.diff_cleanupMerge(E), E;
  }, a.prototype.diff_compute_ = function(f, p, m, C) {
    var w;
    if (!f)
      return [new a.Diff(h2, p)];
    if (!p)
      return [new a.Diff(s, f)];
    var b = f.length > p.length ? f : p, x = f.length > p.length ? p : f, T = b.indexOf(x);
    if (T != -1)
      return w = [
        new a.Diff(h2, b.substring(0, T)),
        new a.Diff(g, x),
        new a.Diff(
          h2,
          b.substring(T + x.length)
        )
      ], f.length > p.length && (w[0][0] = w[2][0] = s), w;
    if (x.length == 1)
      return [
        new a.Diff(s, f),
        new a.Diff(h2, p)
      ];
    var _ = this.diff_halfMatch_(f, p);
    if (_) {
      var E = _[0], A = _[1], B = _[2], W = _[3], $ = _[4], X = this.diff_main(E, B, m, C), K = this.diff_main(A, W, m, C);
      return X.concat(
        [new a.Diff(g, $)],
        K
      );
    }
    return m && f.length > 100 && p.length > 100 ? this.diff_lineMode_(f, p, C) : this.diff_bisect_(f, p, C);
  }, a.prototype.diff_lineMode_ = function(f, p, m) {
    var C = this.diff_linesToChars_(f, p);
    f = C.chars1, p = C.chars2;
    var w = C.lineArray, b = this.diff_main(f, p, false, m);
    this.diff_charsToLines_(b, w), this.diff_cleanupSemantic(b), b.push(new a.Diff(g, ""));
    for (var x = 0, T = 0, _ = 0, E = "", A = ""; x < b.length; ) {
      switch (b[x][0]) {
        case h2:
          _++, A += b[x][1];
          break;
        case s:
          T++, E += b[x][1];
          break;
        case g:
          if (T >= 1 && _ >= 1) {
            b.splice(
              x - T - _,
              T + _
            ), x = x - T - _;
            for (var B = this.diff_main(E, A, false, m), W = B.length - 1; W >= 0; W--)
              b.splice(x, 0, B[W]);
            x = x + B.length;
          }
          _ = 0, T = 0, E = "", A = "";
          break;
      }
      x++;
    }
    return b.pop(), b;
  }, a.prototype.diff_bisect_ = function(f, p, m) {
    for (var C = f.length, w = p.length, b = Math.ceil((C + w) / 2), x = b, T = 2 * b, _ = new Array(T), E = new Array(T), A = 0; A < T; A++)
      _[A] = -1, E[A] = -1;
    _[x + 1] = 0, E[x + 1] = 0;
    for (var B = C - w, W = B % 2 != 0, $ = 0, X = 0, K = 0, Z = 0, le = 0; le < b && !((/* @__PURE__ */ new Date()).getTime() > m); le++) {
      for (var fe = -le + $; fe <= le - X; fe += 2) {
        var Y = x + fe, Q;
        fe == -le || fe != le && _[Y - 1] < _[Y + 1] ? Q = _[Y + 1] : Q = _[Y - 1] + 1;
        for (var ee = Q - fe; Q < C && ee < w && f.charAt(Q) == p.charAt(ee); )
          Q++, ee++;
        if (_[Y] = Q, Q > C)
          X += 2;
        else if (ee > w)
          $ += 2;
        else if (W) {
          var ae = x + B - fe;
          if (ae >= 0 && ae < T && E[ae] != -1) {
            var ce = C - E[ae];
            if (Q >= ce)
              return this.diff_bisectSplit_(f, p, Q, ee, m);
          }
        }
      }
      for (var j = -le + K; j <= le - Z; j += 2) {
        var ae = x + j, ce;
        j == -le || j != le && E[ae - 1] < E[ae + 1] ? ce = E[ae + 1] : ce = E[ae - 1] + 1;
        for (var ne = ce - j; ce < C && ne < w && f.charAt(C - ce - 1) == p.charAt(w - ne - 1); )
          ce++, ne++;
        if (E[ae] = ce, ce > C)
          Z += 2;
        else if (ne > w)
          K += 2;
        else if (!W) {
          var Y = x + B - j;
          if (Y >= 0 && Y < T && _[Y] != -1) {
            var Q = _[Y], ee = x + Q - Y;
            if (ce = C - ce, Q >= ce)
              return this.diff_bisectSplit_(f, p, Q, ee, m);
          }
        }
      }
    }
    return [
      new a.Diff(s, f),
      new a.Diff(h2, p)
    ];
  }, a.prototype.diff_bisectSplit_ = function(f, p, m, C, w) {
    var b = f.substring(0, m), x = p.substring(0, C), T = f.substring(m), _ = p.substring(C), E = this.diff_main(b, x, false, w), A = this.diff_main(T, _, false, w);
    return E.concat(A);
  }, a.prototype.diff_linesToChars_ = function(f, p) {
    var m = [], C = {};
    m[0] = "";
    function w(_) {
      for (var E = "", A = 0, B = -1, W = m.length; B < _.length - 1; ) {
        B = _.indexOf(`
`, A), B == -1 && (B = _.length - 1);
        var $ = _.substring(A, B + 1);
        (C.hasOwnProperty ? C.hasOwnProperty($) : C[$] !== void 0) ? E += String.fromCharCode(C[$]) : (W == b && ($ = _.substring(A), B = _.length), E += String.fromCharCode(W), C[$] = W, m[W++] = $), A = B + 1;
      }
      return E;
    }
    var b = 4e4, x = w(f);
    b = 65535;
    var T = w(p);
    return { chars1: x, chars2: T, lineArray: m };
  }, a.prototype.diff_charsToLines_ = function(f, p) {
    for (var m = 0; m < f.length; m++) {
      for (var C = f[m][1], w = [], b = 0; b < C.length; b++)
        w[b] = p[C.charCodeAt(b)];
      f[m][1] = w.join("");
    }
  }, a.prototype.diff_commonPrefix = function(f, p) {
    if (!f || !p || f.charAt(0) != p.charAt(0))
      return 0;
    for (var m = 0, C = Math.min(f.length, p.length), w = C, b = 0; m < w; )
      f.substring(b, w) == p.substring(b, w) ? (m = w, b = m) : C = w, w = Math.floor((C - m) / 2 + m);
    return w;
  }, a.prototype.diff_commonSuffix = function(f, p) {
    if (!f || !p || f.charAt(f.length - 1) != p.charAt(p.length - 1))
      return 0;
    for (var m = 0, C = Math.min(f.length, p.length), w = C, b = 0; m < w; )
      f.substring(f.length - w, f.length - b) == p.substring(p.length - w, p.length - b) ? (m = w, b = m) : C = w, w = Math.floor((C - m) / 2 + m);
    return w;
  }, a.prototype.diff_commonOverlap_ = function(f, p) {
    var m = f.length, C = p.length;
    if (m == 0 || C == 0)
      return 0;
    m > C ? f = f.substring(m - C) : m < C && (p = p.substring(0, m));
    var w = Math.min(m, C);
    if (f == p)
      return w;
    for (var b = 0, x = 1; ; ) {
      var T = f.substring(w - x), _ = p.indexOf(T);
      if (_ == -1)
        return b;
      x += _, (_ == 0 || f.substring(w - x) == p.substring(0, x)) && (b = x, x++);
    }
  }, a.prototype.diff_halfMatch_ = function(f, p) {
    if (this.Diff_Timeout <= 0)
      return null;
    var m = f.length > p.length ? f : p, C = f.length > p.length ? p : f;
    if (m.length < 4 || C.length * 2 < m.length)
      return null;
    var w = this;
    function b(X, K, Z) {
      for (var le = X.substring(Z, Z + Math.floor(X.length / 4)), fe = -1, Y = "", Q, ee, ae, ce; (fe = K.indexOf(le, fe + 1)) != -1; ) {
        var j = w.diff_commonPrefix(
          X.substring(Z),
          K.substring(fe)
        ), ne = w.diff_commonSuffix(
          X.substring(0, Z),
          K.substring(0, fe)
        );
        Y.length < ne + j && (Y = K.substring(fe - ne, fe) + K.substring(fe, fe + j), Q = X.substring(0, Z - ne), ee = X.substring(Z + j), ae = K.substring(0, fe - ne), ce = K.substring(fe + j));
      }
      return Y.length * 2 >= X.length ? [
        Q,
        ee,
        ae,
        ce,
        Y
      ] : null;
    }
    var x = b(
      m,
      C,
      Math.ceil(m.length / 4)
    ), T = b(
      m,
      C,
      Math.ceil(m.length / 2)
    ), _;
    if (!x && !T)
      return null;
    T ? x ? _ = x[4].length > T[4].length ? x : T : _ = T : _ = x;
    var E, A, B, W;
    f.length > p.length ? (E = _[0], A = _[1], B = _[2], W = _[3]) : (B = _[0], W = _[1], E = _[2], A = _[3]);
    var $ = _[4];
    return [E, A, B, W, $];
  }, a.prototype.diff_cleanupSemantic = function(f) {
    for (var p = false, m = [], C = 0, w = null, b = 0, x = 0, T = 0, _ = 0, E = 0; b < f.length; )
      f[b][0] == g ? (m[C++] = b, x = _, T = E, _ = 0, E = 0, w = f[b][1]) : (f[b][0] == h2 ? _ += f[b][1].length : E += f[b][1].length, w && w.length <= Math.max(x, T) && w.length <= Math.max(
        _,
        E
      ) && (f.splice(
        m[C - 1],
        0,
        new a.Diff(s, w)
      ), f[m[C - 1] + 1][0] = h2, C--, C--, b = C > 0 ? m[C - 1] : -1, x = 0, T = 0, _ = 0, E = 0, w = null, p = true)), b++;
    for (p && this.diff_cleanupMerge(f), this.diff_cleanupSemanticLossless(f), b = 1; b < f.length; ) {
      if (f[b - 1][0] == s && f[b][0] == h2) {
        var A = f[b - 1][1], B = f[b][1], W = this.diff_commonOverlap_(A, B), $ = this.diff_commonOverlap_(B, A);
        W >= $ ? (W >= A.length / 2 || W >= B.length / 2) && (f.splice(b, 0, new a.Diff(
          g,
          B.substring(0, W)
        )), f[b - 1][1] = A.substring(0, A.length - W), f[b + 1][1] = B.substring(W), b++) : ($ >= A.length / 2 || $ >= B.length / 2) && (f.splice(b, 0, new a.Diff(
          g,
          A.substring(0, $)
        )), f[b - 1][0] = h2, f[b - 1][1] = B.substring(0, B.length - $), f[b + 1][0] = s, f[b + 1][1] = A.substring($), b++), b++;
      }
      b++;
    }
  }, a.prototype.diff_cleanupSemanticLossless = function(f) {
    function p($, X) {
      if (!$ || !X)
        return 6;
      var K = $.charAt($.length - 1), Z = X.charAt(0), le = K.match(a.nonAlphaNumericRegex_), fe = Z.match(a.nonAlphaNumericRegex_), Y = le && K.match(a.whitespaceRegex_), Q = fe && Z.match(a.whitespaceRegex_), ee = Y && K.match(a.linebreakRegex_), ae = Q && Z.match(a.linebreakRegex_), ce = ee && $.match(a.blanklineEndRegex_), j = ae && X.match(a.blanklineStartRegex_);
      return ce || j ? 5 : ee || ae ? 4 : le && !Y && Q ? 3 : Y || Q ? 2 : le || fe ? 1 : 0;
    }
    for (var m = 1; m < f.length - 1; ) {
      if (f[m - 1][0] == g && f[m + 1][0] == g) {
        var C = f[m - 1][1], w = f[m][1], b = f[m + 1][1], x = this.diff_commonSuffix(C, w);
        if (x) {
          var T = w.substring(w.length - x);
          C = C.substring(0, C.length - x), w = T + w.substring(0, w.length - x), b = T + b;
        }
        for (var _ = C, E = w, A = b, B = p(C, w) + p(w, b); w.charAt(0) === b.charAt(0); ) {
          C += w.charAt(0), w = w.substring(1) + b.charAt(0), b = b.substring(1);
          var W = p(C, w) + p(w, b);
          W >= B && (B = W, _ = C, E = w, A = b);
        }
        f[m - 1][1] != _ && (_ ? f[m - 1][1] = _ : (f.splice(m - 1, 1), m--), f[m][1] = E, A ? f[m + 1][1] = A : (f.splice(m + 1, 1), m--));
      }
      m++;
    }
  }, a.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, a.whitespaceRegex_ = /\s/, a.linebreakRegex_ = /[\r\n]/, a.blanklineEndRegex_ = /\n\r?\n$/, a.blanklineStartRegex_ = /^\r?\n\r?\n/, a.prototype.diff_cleanupEfficiency = function(f) {
    for (var p = false, m = [], C = 0, w = null, b = 0, x = false, T = false, _ = false, E = false; b < f.length; )
      f[b][0] == g ? (f[b][1].length < this.Diff_EditCost && (_ || E) ? (m[C++] = b, x = _, T = E, w = f[b][1]) : (C = 0, w = null), _ = E = false) : (f[b][0] == s ? E = true : _ = true, w && (x && T && _ && E || w.length < this.Diff_EditCost / 2 && x + T + _ + E == 3) && (f.splice(
        m[C - 1],
        0,
        new a.Diff(s, w)
      ), f[m[C - 1] + 1][0] = h2, C--, w = null, x && T ? (_ = E = true, C = 0) : (C--, b = C > 0 ? m[C - 1] : -1, _ = E = false), p = true)), b++;
    p && this.diff_cleanupMerge(f);
  }, a.prototype.diff_cleanupMerge = function(f) {
    f.push(new a.Diff(g, ""));
    for (var p = 0, m = 0, C = 0, w = "", b = "", x; p < f.length; )
      switch (f[p][0]) {
        case h2:
          C++, b += f[p][1], p++;
          break;
        case s:
          m++, w += f[p][1], p++;
          break;
        case g:
          m + C > 1 ? (m !== 0 && C !== 0 && (x = this.diff_commonPrefix(b, w), x !== 0 && (p - m - C > 0 && f[p - m - C - 1][0] == g ? f[p - m - C - 1][1] += b.substring(0, x) : (f.splice(0, 0, new a.Diff(
            g,
            b.substring(0, x)
          )), p++), b = b.substring(x), w = w.substring(x)), x = this.diff_commonSuffix(b, w), x !== 0 && (f[p][1] = b.substring(b.length - x) + f[p][1], b = b.substring(0, b.length - x), w = w.substring(0, w.length - x))), p -= m + C, f.splice(p, m + C), w.length && (f.splice(
            p,
            0,
            new a.Diff(s, w)
          ), p++), b.length && (f.splice(
            p,
            0,
            new a.Diff(h2, b)
          ), p++), p++) : p !== 0 && f[p - 1][0] == g ? (f[p - 1][1] += f[p][1], f.splice(p, 1)) : p++, C = 0, m = 0, w = "", b = "";
          break;
      }
    f[f.length - 1][1] === "" && f.pop();
    var T = false;
    for (p = 1; p < f.length - 1; )
      f[p - 1][0] == g && f[p + 1][0] == g && (f[p][1].substring(f[p][1].length - f[p - 1][1].length) == f[p - 1][1] ? (f[p][1] = f[p - 1][1] + f[p][1].substring(0, f[p][1].length - f[p - 1][1].length), f[p + 1][1] = f[p - 1][1] + f[p + 1][1], f.splice(p - 1, 1), T = true) : f[p][1].substring(0, f[p + 1][1].length) == f[p + 1][1] && (f[p - 1][1] += f[p + 1][1], f[p][1] = f[p][1].substring(f[p + 1][1].length) + f[p + 1][1], f.splice(p + 1, 1), T = true)), p++;
    T && this.diff_cleanupMerge(f);
  }, a.prototype.diff_xIndex = function(f, p) {
    var m = 0, C = 0, w = 0, b = 0, x;
    for (x = 0; x < f.length && (f[x][0] !== h2 && (m += f[x][1].length), f[x][0] !== s && (C += f[x][1].length), !(m > p)); x++)
      w = m, b = C;
    return f.length != x && f[x][0] === s ? b : b + (p - w);
  }, a.prototype.diff_prettyHtml = function(f) {
    for (var p = [], m = /&/g, C = /</g, w = />/g, b = /\n/g, x = 0; x < f.length; x++) {
      var T = f[x][0], _ = f[x][1], E = _.replace(m, "&amp;").replace(C, "&lt;").replace(w, "&gt;").replace(b, "&para;<br>");
      switch (T) {
        case h2:
          p[x] = '<ins style="background:#e6ffe6;">' + E + "</ins>";
          break;
        case s:
          p[x] = '<del style="background:#ffe6e6;">' + E + "</del>";
          break;
        case g:
          p[x] = "<span>" + E + "</span>";
          break;
      }
    }
    return p.join("");
  }, a.prototype.diff_text1 = function(f) {
    for (var p = [], m = 0; m < f.length; m++)
      f[m][0] !== h2 && (p[m] = f[m][1]);
    return p.join("");
  }, a.prototype.diff_text2 = function(f) {
    for (var p = [], m = 0; m < f.length; m++)
      f[m][0] !== s && (p[m] = f[m][1]);
    return p.join("");
  }, a.prototype.diff_levenshtein = function(f) {
    for (var p = 0, m = 0, C = 0, w = 0; w < f.length; w++) {
      var b = f[w][0], x = f[w][1];
      switch (b) {
        case h2:
          m += x.length;
          break;
        case s:
          C += x.length;
          break;
        case g:
          p += Math.max(m, C), m = 0, C = 0;
          break;
      }
    }
    return p += Math.max(m, C), p;
  }, a.prototype.diff_toDelta = function(f) {
    for (var p = [], m = 0; m < f.length; m++)
      switch (f[m][0]) {
        case h2:
          p[m] = "+" + encodeURI(f[m][1]);
          break;
        case s:
          p[m] = "-" + f[m][1].length;
          break;
        case g:
          p[m] = "=" + f[m][1].length;
          break;
      }
    return p.join("	").replace(/%20/g, " ");
  }, a.prototype.diff_fromDelta = function(f, p) {
    for (var m = [], C = 0, w = 0, b = p.split(/\t/g), x = 0; x < b.length; x++) {
      var T = b[x].substring(1);
      switch (b[x].charAt(0)) {
        case "+":
          try {
            m[C++] = new a.Diff(h2, decodeURI(T));
          } catch {
            throw new Error("Illegal escape in diff_fromDelta: " + T);
          }
          break;
        case "-":
        case "=":
          var _ = parseInt(T, 10);
          if (isNaN(_) || _ < 0)
            throw new Error("Invalid number in diff_fromDelta: " + T);
          var E = f.substring(w, w += _);
          b[x].charAt(0) == "=" ? m[C++] = new a.Diff(g, E) : m[C++] = new a.Diff(s, E);
          break;
        default:
          if (b[x])
            throw new Error("Invalid diff operation in diff_fromDelta: " + b[x]);
      }
    }
    if (w != f.length)
      throw new Error("Delta length (" + w + ") does not equal source text length (" + f.length + ").");
    return m;
  }, a.prototype.match_main = function(f, p, m) {
    if (f == null || p == null || m == null)
      throw new Error("Null input. (match_main)");
    return m = Math.max(0, Math.min(m, f.length)), f == p ? 0 : f.length ? f.substring(m, m + p.length) == p ? m : this.match_bitap_(f, p, m) : -1;
  }, a.prototype.match_bitap_ = function(f, p, m) {
    if (p.length > this.Match_MaxBits)
      throw new Error("Pattern too long for this browser.");
    var C = this.match_alphabet_(p), w = this;
    function b(Q, ee) {
      var ae = Q / p.length, ce = Math.abs(m - ee);
      return w.Match_Distance ? ae + ce / w.Match_Distance : ce ? 1 : ae;
    }
    var x = this.Match_Threshold, T = f.indexOf(p, m);
    T != -1 && (x = Math.min(b(0, T), x), T = f.lastIndexOf(p, m + p.length), T != -1 && (x = Math.min(b(0, T), x)));
    var _ = 1 << p.length - 1;
    T = -1;
    for (var E, A, B = p.length + f.length, W, $ = 0; $ < p.length; $++) {
      for (E = 0, A = B; E < A; )
        b($, m + A) <= x ? E = A : B = A, A = Math.floor((B - E) / 2 + E);
      B = A;
      var X = Math.max(1, m - A + 1), K = Math.min(m + A, f.length) + p.length, Z = Array(K + 2);
      Z[K + 1] = (1 << $) - 1;
      for (var le = K; le >= X; le--) {
        var fe = C[f.charAt(le - 1)];
        if ($ === 0 ? Z[le] = (Z[le + 1] << 1 | 1) & fe : Z[le] = (Z[le + 1] << 1 | 1) & fe | ((W[le + 1] | W[le]) << 1 | 1) | W[le + 1], Z[le] & _) {
          var Y = b($, le - 1);
          if (Y <= x)
            if (x = Y, T = le - 1, T > m)
              X = Math.max(1, 2 * m - T);
            else
              break;
        }
      }
      if (b($ + 1, m) > x)
        break;
      W = Z;
    }
    return T;
  }, a.prototype.match_alphabet_ = function(f) {
    for (var p = {}, m = 0; m < f.length; m++)
      p[f.charAt(m)] = 0;
    for (var m = 0; m < f.length; m++)
      p[f.charAt(m)] |= 1 << f.length - m - 1;
    return p;
  }, a.prototype.patch_addContext_ = function(f, p) {
    if (p.length != 0) {
      if (f.start2 === null)
        throw Error("patch not initialized");
      for (var m = p.substring(f.start2, f.start2 + f.length1), C = 0; p.indexOf(m) != p.lastIndexOf(m) && m.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin; )
        C += this.Patch_Margin, m = p.substring(
          f.start2 - C,
          f.start2 + f.length1 + C
        );
      C += this.Patch_Margin;
      var w = p.substring(f.start2 - C, f.start2);
      w && f.diffs.unshift(new a.Diff(g, w));
      var b = p.substring(
        f.start2 + f.length1,
        f.start2 + f.length1 + C
      );
      b && f.diffs.push(new a.Diff(g, b)), f.start1 -= w.length, f.start2 -= w.length, f.length1 += w.length + b.length, f.length2 += w.length + b.length;
    }
  }, a.prototype.patch_make = function(f, p, m) {
    var C, w;
    if (typeof f == "string" && typeof p == "string" && typeof m > "u")
      C = /** @type {string} */
      f, w = this.diff_main(
        C,
        /** @type {string} */
        p,
        true
      ), w.length > 2 && (this.diff_cleanupSemantic(w), this.diff_cleanupEfficiency(w));
    else if (f && typeof f == "object" && typeof p > "u" && typeof m > "u")
      w = /** @type {!Array.<!diff_match_patch.Diff>} */
      f, C = this.diff_text1(w);
    else if (typeof f == "string" && p && typeof p == "object" && typeof m > "u")
      C = /** @type {string} */
      f, w = /** @type {!Array.<!diff_match_patch.Diff>} */
      p;
    else if (typeof f == "string" && typeof p == "string" && m && typeof m == "object")
      C = /** @type {string} */
      f, w = /** @type {!Array.<!diff_match_patch.Diff>} */
      m;
    else
      throw new Error("Unknown call format to patch_make.");
    if (w.length === 0)
      return [];
    for (var b = [], x = new a.patch_obj(), T = 0, _ = 0, E = 0, A = C, B = C, W = 0; W < w.length; W++) {
      var $ = w[W][0], X = w[W][1];
      switch (!T && $ !== g && (x.start1 = _, x.start2 = E), $) {
        case h2:
          x.diffs[T++] = w[W], x.length2 += X.length, B = B.substring(0, E) + X + B.substring(E);
          break;
        case s:
          x.length1 += X.length, x.diffs[T++] = w[W], B = B.substring(0, E) + B.substring(E + X.length);
          break;
        case g:
          X.length <= 2 * this.Patch_Margin && T && w.length != W + 1 ? (x.diffs[T++] = w[W], x.length1 += X.length, x.length2 += X.length) : X.length >= 2 * this.Patch_Margin && T && (this.patch_addContext_(x, A), b.push(x), x = new a.patch_obj(), T = 0, A = B, _ = E);
          break;
      }
      $ !== h2 && (_ += X.length), $ !== s && (E += X.length);
    }
    return T && (this.patch_addContext_(x, A), b.push(x)), b;
  }, a.prototype.patch_deepCopy = function(f) {
    for (var p = [], m = 0; m < f.length; m++) {
      var C = f[m], w = new a.patch_obj();
      w.diffs = [];
      for (var b = 0; b < C.diffs.length; b++)
        w.diffs[b] = new a.Diff(C.diffs[b][0], C.diffs[b][1]);
      w.start1 = C.start1, w.start2 = C.start2, w.length1 = C.length1, w.length2 = C.length2, p[m] = w;
    }
    return p;
  }, a.prototype.patch_apply = function(f, p) {
    if (f.length == 0)
      return [p, []];
    f = this.patch_deepCopy(f);
    var m = this.patch_addPadding(f);
    p = m + p + m, this.patch_splitMax(f);
    for (var C = 0, w = [], b = 0; b < f.length; b++) {
      var x = f[b].start2 + C, T = this.diff_text1(f[b].diffs), _, E = -1;
      if (T.length > this.Match_MaxBits ? (_ = this.match_main(
        p,
        T.substring(0, this.Match_MaxBits),
        x
      ), _ != -1 && (E = this.match_main(
        p,
        T.substring(T.length - this.Match_MaxBits),
        x + T.length - this.Match_MaxBits
      ), (E == -1 || _ >= E) && (_ = -1))) : _ = this.match_main(p, T, x), _ == -1)
        w[b] = false, C -= f[b].length2 - f[b].length1;
      else {
        w[b] = true, C = _ - x;
        var A;
        if (E == -1 ? A = p.substring(_, _ + T.length) : A = p.substring(_, E + this.Match_MaxBits), T == A)
          p = p.substring(0, _) + this.diff_text2(f[b].diffs) + p.substring(_ + T.length);
        else {
          var B = this.diff_main(T, A, false);
          if (T.length > this.Match_MaxBits && this.diff_levenshtein(B) / T.length > this.Patch_DeleteThreshold)
            w[b] = false;
          else {
            this.diff_cleanupSemanticLossless(B);
            for (var W = 0, $, X = 0; X < f[b].diffs.length; X++) {
              var K = f[b].diffs[X];
              K[0] !== g && ($ = this.diff_xIndex(B, W)), K[0] === h2 ? p = p.substring(0, _ + $) + K[1] + p.substring(_ + $) : K[0] === s && (p = p.substring(0, _ + $) + p.substring(_ + this.diff_xIndex(
                B,
                W + K[1].length
              ))), K[0] !== s && (W += K[1].length);
            }
          }
        }
      }
    }
    return p = p.substring(m.length, p.length - m.length), [p, w];
  }, a.prototype.patch_addPadding = function(f) {
    for (var p = this.Patch_Margin, m = "", C = 1; C <= p; C++)
      m += String.fromCharCode(C);
    for (var C = 0; C < f.length; C++)
      f[C].start1 += p, f[C].start2 += p;
    var w = f[0], b = w.diffs;
    if (b.length == 0 || b[0][0] != g)
      b.unshift(new a.Diff(g, m)), w.start1 -= p, w.start2 -= p, w.length1 += p, w.length2 += p;
    else if (p > b[0][1].length) {
      var x = p - b[0][1].length;
      b[0][1] = m.substring(b[0][1].length) + b[0][1], w.start1 -= x, w.start2 -= x, w.length1 += x, w.length2 += x;
    }
    if (w = f[f.length - 1], b = w.diffs, b.length == 0 || b[b.length - 1][0] != g)
      b.push(new a.Diff(g, m)), w.length1 += p, w.length2 += p;
    else if (p > b[b.length - 1][1].length) {
      var x = p - b[b.length - 1][1].length;
      b[b.length - 1][1] += m.substring(0, x), w.length1 += x, w.length2 += x;
    }
    return m;
  }, a.prototype.patch_splitMax = function(f) {
    for (var p = this.Match_MaxBits, m = 0; m < f.length; m++)
      if (!(f[m].length1 <= p)) {
        var C = f[m];
        f.splice(m--, 1);
        for (var w = C.start1, b = C.start2, x = ""; C.diffs.length !== 0; ) {
          var T = new a.patch_obj(), _ = true;
          for (T.start1 = w - x.length, T.start2 = b - x.length, x !== "" && (T.length1 = T.length2 = x.length, T.diffs.push(new a.Diff(g, x))); C.diffs.length !== 0 && T.length1 < p - this.Patch_Margin; ) {
            var E = C.diffs[0][0], A = C.diffs[0][1];
            E === h2 ? (T.length2 += A.length, b += A.length, T.diffs.push(C.diffs.shift()), _ = false) : E === s && T.diffs.length == 1 && T.diffs[0][0] == g && A.length > 2 * p ? (T.length1 += A.length, w += A.length, _ = false, T.diffs.push(new a.Diff(E, A)), C.diffs.shift()) : (A = A.substring(
              0,
              p - T.length1 - this.Patch_Margin
            ), T.length1 += A.length, w += A.length, E === g ? (T.length2 += A.length, b += A.length) : _ = false, T.diffs.push(new a.Diff(E, A)), A == C.diffs[0][1] ? C.diffs.shift() : C.diffs[0][1] = C.diffs[0][1].substring(A.length));
          }
          x = this.diff_text2(T.diffs), x = x.substring(x.length - this.Patch_Margin);
          var B = this.diff_text1(C.diffs).substring(0, this.Patch_Margin);
          B !== "" && (T.length1 += B.length, T.length2 += B.length, T.diffs.length !== 0 && T.diffs[T.diffs.length - 1][0] === g ? T.diffs[T.diffs.length - 1][1] += B : T.diffs.push(new a.Diff(g, B))), _ || f.splice(++m, 0, T);
        }
      }
  }, a.prototype.patch_toText = function(f) {
    for (var p = [], m = 0; m < f.length; m++)
      p[m] = f[m];
    return p.join("");
  }, a.prototype.patch_fromText = function(f) {
    var p = [];
    if (!f)
      return p;
    for (var m = f.split(`
`), C = 0, w = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; C < m.length; ) {
      var b = m[C].match(w);
      if (!b)
        throw new Error("Invalid patch string: " + m[C]);
      var x = new a.patch_obj();
      for (p.push(x), x.start1 = parseInt(b[1], 10), b[2] === "" ? (x.start1--, x.length1 = 1) : b[2] == "0" ? x.length1 = 0 : (x.start1--, x.length1 = parseInt(b[2], 10)), x.start2 = parseInt(b[3], 10), b[4] === "" ? (x.start2--, x.length2 = 1) : b[4] == "0" ? x.length2 = 0 : (x.start2--, x.length2 = parseInt(b[4], 10)), C++; C < m.length; ) {
        var T = m[C].charAt(0);
        try {
          var _ = decodeURI(m[C].substring(1));
        } catch {
          throw new Error("Illegal escape in patch_fromText: " + _);
        }
        if (T == "-")
          x.diffs.push(new a.Diff(s, _));
        else if (T == "+")
          x.diffs.push(new a.Diff(h2, _));
        else if (T == " ")
          x.diffs.push(new a.Diff(g, _));
        else {
          if (T == "@")
            break;
          if (T !== "")
            throw new Error('Invalid patch mode "' + T + '" in: ' + _);
        }
        C++;
      }
    }
    return p;
  }, a.patch_obj = function() {
    this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0;
  }, a.patch_obj.prototype.toString = function() {
    var f, p;
    this.length1 === 0 ? f = this.start1 + ",0" : this.length1 == 1 ? f = this.start1 + 1 : f = this.start1 + 1 + "," + this.length1, this.length2 === 0 ? p = this.start2 + ",0" : this.length2 == 1 ? p = this.start2 + 1 : p = this.start2 + 1 + "," + this.length2;
    for (var m = ["@@ -" + f + " +" + p + ` @@
`], C, w = 0; w < this.diffs.length; w++) {
      switch (this.diffs[w][0]) {
        case h2:
          C = "+";
          break;
        case s:
          C = "-";
          break;
        case g:
          C = " ";
          break;
      }
      m[w + 1] = C + encodeURI(this.diffs[w][1]) + `
`;
    }
    return m.join("").replace(/%20/g, " ");
  }, o.exports = a, o.exports.diff_match_patch = a, o.exports.DIFF_DELETE = s, o.exports.DIFF_INSERT = h2, o.exports.DIFF_EQUAL = g;
})(yc);
var Gm = yc.exports;
var Vm = cc(Gm);
(function(o, a) {
  (function(s) {
    s(Wi());
  })(function(s) {
    s.defineSimpleMode = function(T, _) {
      s.defineMode(T, function(E) {
        return s.simpleMode(E, _);
      });
    }, s.simpleMode = function(T, _) {
      h2(_, "start");
      var E = {}, A = _.meta || {}, B = false;
      for (var W in _)
        if (W != A && _.hasOwnProperty(W))
          for (var $ = E[W] = [], X = _[W], K = 0; K < X.length; K++) {
            var Z = X[K];
            $.push(new p(Z, _)), (Z.indent || Z.dedent) && (B = true);
          }
      var le = {
        startState: function() {
          return {
            state: "start",
            pending: null,
            local: null,
            localState: null,
            indent: B ? [] : null
          };
        },
        copyState: function(Y) {
          var Q = {
            state: Y.state,
            pending: Y.pending,
            local: Y.local,
            localState: null,
            indent: Y.indent && Y.indent.slice(0)
          };
          Y.localState && (Q.localState = s.copyState(Y.local.mode, Y.localState)), Y.stack && (Q.stack = Y.stack.slice(0));
          for (var ee = Y.persistentStates; ee; ee = ee.next)
            Q.persistentStates = {
              mode: ee.mode,
              spec: ee.spec,
              state: ee.state == Y.localState ? Q.localState : s.copyState(ee.mode, ee.state),
              next: Q.persistentStates
            };
          return Q;
        },
        token: m(E, T),
        innerMode: function(Y) {
          return Y.local && { mode: Y.local.mode, state: Y.localState };
        },
        indent: x(E, A)
      };
      if (A)
        for (var fe in A)
          A.hasOwnProperty(fe) && (le[fe] = A[fe]);
      return le;
    };
    function h2(T, _) {
      if (!T.hasOwnProperty(_))
        throw new Error("Undefined state " + _ + " in simple mode");
    }
    function g(T, _) {
      if (!T)
        return /(?:)/;
      var E = "";
      return T instanceof RegExp ? (T.ignoreCase && (E = "i"), T.unicode && (E += "u"), T = T.source) : T = String(T), new RegExp((_ === false ? "" : "^") + "(?:" + T + ")", E);
    }
    function f(T) {
      if (!T)
        return null;
      if (T.apply)
        return T;
      if (typeof T == "string")
        return T.replace(/\./g, " ");
      for (var _ = [], E = 0; E < T.length; E++)
        _.push(T[E] && T[E].replace(/\./g, " "));
      return _;
    }
    function p(T, _) {
      (T.next || T.push) && h2(_, T.next || T.push), this.regex = g(T.regex), this.token = f(T.token), this.data = T;
    }
    function m(T, _) {
      return function(E, A) {
        if (A.pending) {
          var B = A.pending.shift();
          return A.pending.length == 0 && (A.pending = null), E.pos += B.text.length, B.token;
        }
        if (A.local)
          if (A.local.end && E.match(A.local.end)) {
            var W = A.local.endToken || null;
            return A.local = A.localState = null, W;
          } else {
            var W = A.local.mode.token(E, A.localState), $;
            return A.local.endScan && ($ = A.local.endScan.exec(E.current())) && (E.pos = E.start + $.index), W;
          }
        for (var X = T[A.state], K = 0; K < X.length; K++) {
          var Z = X[K], le = (!Z.data.sol || E.sol()) && E.match(Z.regex);
          if (le) {
            Z.data.next ? A.state = Z.data.next : Z.data.push ? ((A.stack || (A.stack = [])).push(A.state), A.state = Z.data.push) : Z.data.pop && A.stack && A.stack.length && (A.state = A.stack.pop()), Z.data.mode && w(_, A, Z.data.mode, Z.token), Z.data.indent && A.indent.push(E.indentation() + _.indentUnit), Z.data.dedent && A.indent.pop();
            var fe = Z.token;
            if (fe && fe.apply && (fe = fe(le)), le.length > 2 && Z.token && typeof Z.token != "string") {
              for (var Y = 2; Y < le.length; Y++)
                le[Y] && (A.pending || (A.pending = [])).push({ text: le[Y], token: Z.token[Y - 1] });
              return E.backUp(le[0].length - (le[1] ? le[1].length : 0)), fe[0];
            } else
              return fe && fe.join ? fe[0] : fe;
          }
        }
        return E.next(), null;
      };
    }
    function C(T, _) {
      if (T === _)
        return true;
      if (!T || typeof T != "object" || !_ || typeof _ != "object")
        return false;
      var E = 0;
      for (var A in T)
        if (T.hasOwnProperty(A)) {
          if (!_.hasOwnProperty(A) || !C(T[A], _[A]))
            return false;
          E++;
        }
      for (var A in _)
        _.hasOwnProperty(A) && E--;
      return E == 0;
    }
    function w(T, _, E, A) {
      var B;
      if (E.persistent)
        for (var W = _.persistentStates; W && !B; W = W.next)
          (E.spec ? C(E.spec, W.spec) : E.mode == W.mode) && (B = W);
      var $ = B ? B.mode : E.mode || s.getMode(T, E.spec), X = B ? B.state : s.startState($);
      E.persistent && !B && (_.persistentStates = { mode: $, spec: E.spec, state: X, next: _.persistentStates }), _.localState = X, _.local = {
        mode: $,
        end: E.end && g(E.end),
        endScan: E.end && E.forceEnd !== false && g(E.end, false),
        endToken: A && A.join ? A[A.length - 1] : A
      };
    }
    function b(T, _) {
      for (var E = 0; E < _.length; E++)
        if (_[E] === T)
          return true;
    }
    function x(T, _) {
      return function(E, A, B) {
        if (E.local && E.local.mode.indent)
          return E.local.mode.indent(E.localState, A, B);
        if (E.indent == null || E.local || _.dontIndentStates && b(E.state, _.dontIndentStates) > -1)
          return s.Pass;
        var W = E.indent.length - 1, $ = T[E.state];
        e:
          for (; ; ) {
            for (var X = 0; X < $.length; X++) {
              var K = $[X];
              if (K.data.dedent && K.data.dedentIfLineStart !== false) {
                var Z = K.regex.exec(A);
                if (Z && Z[0]) {
                  W--, (K.next || K.push) && ($ = T[K.next || K.push]), A = A.slice(Z[0].length);
                  continue e;
                }
              }
            }
            break;
          }
        return W < 0 ? 0 : E.indent[W];
      };
    }
  });
})();
!window.CodeMirror && (window.CodeMirror = mc);
var zi = window.CodeMirror || mc;
var Km = defineComponent({
  name: "DefaultMode",
  props: {
    name: {
      type: String,
      default: `cm-textarea-${+/* @__PURE__ */ new Date()}`
    },
    value: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: () => ({})
    },
    cminstance: {
      type: Object,
      default: () => null
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  emits: {
    ready: (o) => o,
    "update:cminstance": (o) => o
  },
  setup(o, { emit: a }) {
    const s = ref(), h2 = ref(null), g = () => {
      h2.value = markRaw(
        zi.fromTextArea(s.value, o.options)
      ), a("update:cminstance", h2.value);
      const f = watch(
        () => o.cminstance,
        (p) => {
          var m;
          p && ((m = o.cminstance) == null || m.setValue(o.value || o.content)), a("ready", unref(h2)), f == null || f();
        },
        { deep: true }
      );
    };
    return onMounted(() => {
      g();
    }), {
      textarea: s,
      initialize: g
    };
  }
});
var Bl = (o, a) => {
  const s = o.__vccOpts || o;
  for (const [h2, g] of a)
    s[h2] = g;
  return s;
};
var Ym = ["name", "placeholder"];
function Xm(o, a, s, h2, g, f) {
  return openBlock(), createElementBlock("textarea", {
    ref: "textarea",
    name: o.$props.name,
    placeholder: o.$props.placeholder
  }, null, 8, Ym);
}
var Tf = Bl(Km, [["render", Xm]]);
window.diff_match_patch = Vm;
window.DIFF_DELETE = -1;
window.DIFF_INSERT = 1;
window.DIFF_EQUAL = 0;
var qm = defineComponent({
  name: "MergeMode",
  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    cminstance: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:cminstance", "ready"],
  setup(o, { emit: a }) {
    const s = ref(), h2 = ref(), g = () => {
      s.value = markRaw(
        zi.MergeView(h2.value, o.options)
      ), a("update:cminstance", s.value), a("ready", s);
    };
    return onMounted(() => {
      g();
    }), {
      mergeView: h2,
      initialize: g
    };
  }
});
var Jm = { ref: "mergeView" };
function Zm(o, a, s, h2, g, f) {
  return openBlock(), createElementBlock("div", Jm, null, 512);
}
var Qm = Bl(qm, [["render", Zm]]);
function ey(o) {
  const a = /#link#(.+)#link#/g, s = [];
  let h2;
  for (h2 = a.exec(o); h2; ) {
    const g = document.createElement("a"), f = JSON.parse(h2[1]), p = Object.entries(f);
    for (const [m, C] of p)
      g.setAttribute(m, C);
    g.className = "editor_custom_link", g.innerHTML = "logDownload", s.push({
      start: h2.index,
      end: h2.index + h2[0].length,
      node: g
    }), h2 = a.exec(o);
  }
  return s;
}
function ty(o) {
  const a = [];
  function s() {
    const h2 = /#log<(\w*)>log#((.|\r\n|\n)*?)#log<(\w*)>log#/g;
    let g;
    for (g = h2.exec(o); g; ) {
      const f = g[0].replace(/\r\n/g, `
`).split(`
`), p = g[2].replace(/\r\n/g, `
`).split(`
`), m = document.createElement("span"), C = g[1];
      m.className = `c-editor--log__${C}`;
      let w = 0;
      for (let b = 0; b < f.length; b++) {
        const x = f[b], T = p[b], _ = m.cloneNode(false);
        _.innerText = T, a.push({
          start: g.index + w,
          end: g.index + w + x.length,
          node: _
        }), w = w + x.length + 1;
      }
      g = h2.exec(o);
    }
  }
  return s(), a;
}
var No = [
  {
    regex: /(\[.*?\])([ \t]*)(<error>[ \t])(.+)/,
    token: ["tag", "", "error.strong", "error.strong"],
    sol: true
    // next: "error",
  },
  {
    regex: /(\[.*?\])([ \t]*)(<info>)(.+)(.?)/,
    token: ["tag", "", "bracket", "bracket", "hr"],
    sol: true
    // next: "info",
  },
  {
    regex: /(\[.*?\])([ \t]*)(<warning>)(.+)(.?)/,
    token: ["tag", "", "comment", "comment", "hr"],
    sol: true
    // next: "warning",
  }
];
zi.defineSimpleMode("fclog", {
  start: [
    ...No,
    {
      regex: /.*/,
      token: "hr"
    }
  ],
  error: [
    ...No,
    {
      regex: /.*/,
      token: "error.strong"
    }
  ],
  info: [
    ...No,
    {
      regex: /.*/,
      token: "bracket"
    }
  ],
  warning: [
    ...No,
    {
      regex: /.*\[/,
      token: "comment"
    }
  ]
});
zi.defineSimpleMode("log", {
  start: [
    {
      regex: /^[=]+[^=]*[=]+/,
      token: "strong"
    },
    {
      regex: /([^\w])([A-Z][\w]*)/,
      token: ["", "string"]
    },
    {
      regex: /(^[A-Z][\w]*)/,
      token: "string"
    }
    // {
    //     regex: /([^\d])([0-9]+)/,
    //     token: [null, 'comment']
    // },
    // {
    //     regex: /(^[0-9]+)/,
    //     token: 'comment'
    // }
  ]
});
var ry = defineComponent({
  name: "CodemirrorFclog",
  props: {
    value: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: `cm-textarea-${+/* @__PURE__ */ new Date()}`
    },
    options: {
      type: Object,
      default: () => ({})
    },
    cminstance: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  emits: ["update:cminstance", "ready"],
  setup(o, { emit: a }) {
    const s = ref(), h2 = ref(null), g = (p = o.cminstance) => {
      p.getAllMarks().forEach((w) => w.clear());
      const m = p.getValue(), C = [].concat(ey(m)).concat(ty(m));
      for (let w = 0; w < C.length; w++) {
        const b = C[w];
        p.markText(
          p.posFromIndex(b.start),
          p.posFromIndex(b.end),
          { replacedWith: b.node }
        );
      }
    }, f = () => {
      var p;
      h2.value = markRaw(
        zi.fromTextArea(s.value, o.options)
      ), a("update:cminstance", unref(h2)), (p = h2.value) == null || p.on("change", g);
    };
    return watch(
      () => o.cminstance,
      (p) => {
        var m;
        p && (g(o.cminstance), (m = o.cminstance) == null || m.setValue(o.value), a("ready", h2));
      },
      { deep: true, immediate: true }
    ), onMounted(() => {
      f();
    }), {
      initialize: f,
      textarea: s
    };
  }
});
var ny = ["name", "placeholder"];
function iy(o, a, s, h2, g, f) {
  return openBlock(), createElementBlock("textarea", {
    ref: "textarea",
    name: o.$props.name,
    placeholder: o.$props.placeholder
  }, null, 8, ny);
}
var oy = Bl(ry, [["render", iy]]);
var bc = {
  "update:value": () => true,
  change: (o, a) => ({ value: o, cm: a }),
  input: () => true,
  ready: (o) => o
};
var ay = [
  "changes",
  "scroll",
  "beforeChange",
  "cursorActivity",
  "keyHandled",
  "inputRead",
  "electricInput",
  "beforeSelectionChange",
  "viewportChange",
  "swapDoc",
  "gutterClick",
  "gutterContextMenu",
  "focus",
  "blur",
  "refresh",
  "optionChange",
  "scrollCursorIntoView",
  "update"
];
var ly = () => {
  const o = {};
  return ay.forEach((a) => {
    o[a] = (...s) => s;
  }), o;
};
var sy = { ...bc, ...ly() };
var nl = {
  mode: "text",
  // Language mode
  theme: "default",
  // Theme
  lineNumbers: true,
  // Display line number
  smartIndent: true,
  // Intelligent indentation
  indentUnit: 2
};
function uy(o) {
  Promise.resolve().then(() => {
    const a = o.getScrollInfo();
    o.scrollTo(a.left, a.height);
  });
}
var fy = ({
  props: o,
  cminstance: a,
  emit: s,
  internalInstance: h2,
  content: g
}) => {
  const f = computed(
    () => {
      var m;
      return o.merge ? (m = unref(a)) == null ? void 0 : m.editor() : unref(a);
    }
  ), p = () => {
    const m = [];
    return Object.keys(h2 == null ? void 0 : h2.vnode.props).forEach((C) => {
      if (C.startsWith("on")) {
        const w = C.replace(C[2], C[2].toLowerCase()).slice(2);
        !bc[w] && m.push(w);
      }
    }), m;
  };
  return {
    listenerEvents: () => {
      f.value.on("change", (C) => {
        const w = C.getValue();
        w === g.value && w !== "" || (g.value = w, s("update:value", g.value || ""), s("input", g.value || " "), Promise.resolve().then(() => {
          s("change", g.value, C);
        }), o.keepCursorInEnd && uy(C));
      });
      const m = {};
      p().filter((C) => !m[C] && (m[C] = true)).forEach((C) => {
        f.value.on(C, (...w) => {
          s(C, ...w);
        });
      });
    }
  };
};
function cy({
  props: o,
  cminstance: a,
  presetRef: s
}) {
  const h2 = ref(null), g = ref(null), f = computed(
    () => {
      var x;
      return o.merge ? (x = unref(a)) == null ? void 0 : x.editor() : unref(a);
    }
  ), p = () => {
    nextTick(() => {
      var x;
      (x = f.value) == null || x.refresh();
    });
  }, m = (x = o.width, T = o.height) => {
    var _;
    h2.value = String(x).replace("px", ""), g.value = String(T).replace("px", "");
    const E = g.value;
    (_ = f.value) == null || _.setSize(h2.value, E);
  }, C = () => {
    var x;
    const T = (x = f.value) == null ? void 0 : x.getWrapperElement();
    T == null || T.remove();
  }, w = () => {
    var x, T, _;
    const E = (x = f.value) == null ? void 0 : x.getDoc().getHistory();
    (T = s.value) == null || T.initialize(), C(), (_ = f.value) == null || _.getDoc().setHistory(E);
  }, b = () => {
    const x = document.querySelector(
      ".CodeMirror-gutters"
    );
    return (x == null ? void 0 : x.style.left.replace("px", "")) !== "0";
  };
  return {
    reload: w,
    refresh: p,
    resize: m,
    destroy: C,
    containerHeight: g,
    reviseStyle: () => {
      if (p(), !b())
        return;
      const x = setInterval(() => {
        b() ? p() : clearInterval(x);
      }, 60), T = setTimeout(() => {
        clearInterval(x), clearTimeout(T);
      }, 400);
    }
  };
}
var hy = defineComponent({
  __name: "index",
  props: {
    value: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: () => nl
    },
    globalOptions: {
      type: Object,
      default: () => nl
    },
    placeholder: {
      type: String,
      default: ""
    },
    border: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: null
    },
    height: {
      type: [String, Number],
      default: null
    },
    originalStyle: {
      type: Boolean,
      default: false
    },
    keepCursorInEnd: {
      type: Boolean,
      default: false
    },
    merge: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    marker: {
      type: Function,
      default: () => null
    },
    unseenLines: {
      type: Array,
      default: () => []
    }
  },
  emits: sy,
  setup(o, { expose: a, emit: s }) {
    var h2, g;
    const f = o;
    typeof Object.assign != "function" && Object.defineProperty(Object, "assign", {
      value(Y) {
        if (Y == null)
          throw new TypeError("Cannot convert undefined or null to object");
        const Q = Object(Y);
        for (let ee = 1; ee < arguments.length; ee++) {
          const ae = arguments[ee];
          if (ae != null)
            for (const ce in ae)
              Object.prototype.hasOwnProperty.call(ae, ce) && (Q[ce] = ae[ce]);
        }
        return Q;
      },
      writable: true,
      configurable: true
    });
    const p = ref(null), m = ref(""), C = shallowRef(Tf), w = ref({
      ...nl,
      ...f.globalOptions,
      ...f.options
    }), b = getCurrentInstance(), x = f.name || ((g = (h2 = b == null ? void 0 : b.parent) == null ? void 0 : h2.type) == null ? void 0 : g.name) || void 0, T = ref(null), _ = computed(
      () => {
        var Y;
        return f.merge ? (Y = unref(p)) == null ? void 0 : Y.editor() : unref(p);
      }
    ), { refresh: E, resize: A, destroy: B, containerHeight: W, reviseStyle: $ } = cy({
      props: f,
      cminstance: p,
      presetRef: T
    }), { listenerEvents: X } = fy({
      props: f,
      cminstance: p,
      emit: s,
      internalInstance: b,
      content: m
    }), K = () => {
      f.unseenLines !== void 0 && f.marker !== void 0 && f.unseenLines.forEach((Y) => {
        var Q, ee;
        const ae = (Q = p.value) == null ? void 0 : Q.lineInfo(Y);
        (ee = p.value) == null || ee.setGutterMarker(
          Y,
          "breakpoints",
          ae != null && ae.gutterMarkers ? null : f.marker()
        );
      });
    }, Z = (Y) => {
      var Q, ee;
      const ae = (Q = p.value) == null ? void 0 : Q.getValue();
      Y !== ae && ((ee = p.value) == null || ee.setValue(Y), m.value = Y, $()), K();
    }, le = () => {
      X(), K(), A(f.width, f.height), s("ready", p.value), watch(
        [() => f.width, () => f.height],
        ([Y, Q]) => {
          A(Y, Q);
        },
        { deep: true }
      );
    }, fe = () => {
      if (f.options.mode === "fclog" || f.options.mode === "log") {
        C.value = oy;
        return;
      }
      if (f.merge) {
        C.value = Qm;
        return;
      }
      C.value = Tf;
    };
    return watch(
      () => f.options,
      (Y) => {
        var Q;
        for (const ee in f.options)
          (Q = _.value) == null || Q.setOption(
            ee,
            unref(Y[ee])
          );
      },
      { deep: true }
    ), watch(
      () => f.value,
      (Y) => {
        Z(Y);
      }
    ), watch(() => f.merge, fe, { immediate: true }), onBeforeUnmount(() => {
      B();
    }), a({
      cminstance: p,
      resize: A,
      refresh: E,
      destroy: B
    }), (Y, Q) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["codemirror-container", {
        merge: Y.$props.merge,
        bordered: Y.$props.border || Y.$props.merge && !f.originalStyle,
        "width-auto": !Y.$props.width || Y.$props.width == "100%",
        "height-auto": !Y.$props.height || Y.$props.height == "100%",
        "original-style": f.originalStyle
      }]),
      style: normalizeStyle({
        height: unref(W) + "px"
      })
    }, [
      (openBlock(), createBlock(resolveDynamicComponent(unref(C)), mergeProps({
        ref_key: "presetRef",
        ref: T,
        cminstance: p.value,
        "onUpdate:cminstance": Q[0] || (Q[0] = (ee) => p.value = ee),
        style: { height: "100%" }
      }, {
        ...Y.$props,
        ...Y.$attrs,
        options: w.value,
        name: unref(x),
        content: m.value
      }, { onReady: le }), null, 16, ["cminstance"]))
    ], 6));
  }
});
function dy(o, a) {
  a === void 0 && (a = {});
  var s = a.insertAt;
  if (!(!o || typeof document > "u")) {
    var h2 = document.head || document.getElementsByTagName("head")[0], g = document.createElement("style");
    g.type = "text/css", s === "top" && h2.firstChild ? h2.insertBefore(g, h2.firstChild) : h2.appendChild(g), g.styleSheet ? g.styleSheet.cssText = o : g.appendChild(document.createTextNode(o));
  }
}
dy(`.codemirror-container {
  position: relative;
  display: inline-block;
  height: 100%;
  width: fit-content;
  font-size: 12px;
  overflow: hidden;
}
.codemirror-container.bordered {
  border-radius: 4px;
  border: 1px solid #dddddd;
}
.codemirror-container.width-auto {
  width: 100%;
}
.codemirror-container.height-auto {
  height: 100%;
}
.codemirror-container.height-auto .CodeMirror,
.codemirror-container.height-auto .cm-s-default {
  height: 100% !important;
}
.codemirror-container .editor_custom_link {
  cursor: pointer;
  color: #1474f1;
  text-decoration: underline;
}
.codemirror-container .editor_custom_link:hover {
  color: #04b4fa;
}
.codemirror-container:not(.original-style) .CodeMirror-lines .CodeMirror-placeholder.CodeMirror-line-like {
  color: #666;
}
.codemirror-container:not(.original-style) .CodeMirror,
.codemirror-container:not(.original-style) .CodeMirror-merge-pane {
  height: 100%;
  font-family: consolas !important;
}
.codemirror-container:not(.original-style) .CodeMirror-merge,
.codemirror-container:not(.original-style) .CodeMirror-merge-right .CodeMirror {
  height: 100%;
  border: none !important;
}
.codemirror-container:not(.original-style) .c-editor--log__error {
  color: #bb0606;
  font-weight: bold;
}
.codemirror-container:not(.original-style) .c-editor--log__info {
  color: #333333;
  font-weight: bold;
}
.codemirror-container:not(.original-style) .c-editor--log__warning {
  color: #ee9900;
}
.codemirror-container:not(.original-style) .c-editor--log__success {
  color: #669600;
}
.codemirror-container:not(.original-style) .cm-header,
.codemirror-container:not(.original-style) .cm-strong {
  font-weight: bold;
}
`);
(function(o, a) {
  (function(s) {
    s(Wi());
  })(function(s) {
    s.defineOption("placeholder", "", function(w, b, x) {
      var T = x && x != s.Init;
      if (b && !T)
        w.on("blur", p), w.on("change", m), w.on("swapDoc", m), s.on(w.getInputField(), "compositionupdate", w.state.placeholderCompose = function() {
          f(w);
        }), m(w);
      else if (!b && T) {
        w.off("blur", p), w.off("change", m), w.off("swapDoc", m), s.off(w.getInputField(), "compositionupdate", w.state.placeholderCompose), h2(w);
        var _ = w.getWrapperElement();
        _.className = _.className.replace(" CodeMirror-empty", "");
      }
      b && !w.hasFocus() && p(w);
    });
    function h2(w) {
      w.state.placeholder && (w.state.placeholder.parentNode.removeChild(w.state.placeholder), w.state.placeholder = null);
    }
    function g(w) {
      h2(w);
      var b = w.state.placeholder = document.createElement("pre");
      b.style.cssText = "height: 0; overflow: visible", b.style.direction = w.getOption("direction"), b.className = "CodeMirror-placeholder CodeMirror-line-like";
      var x = w.getOption("placeholder");
      typeof x == "string" && (x = document.createTextNode(x)), b.appendChild(x), w.display.lineSpace.insertBefore(b, w.display.lineSpace.firstChild);
    }
    function f(w) {
      setTimeout(function() {
        var b = false;
        if (w.lineCount() == 1) {
          var x = w.getInputField();
          b = x.nodeName == "TEXTAREA" ? !w.getLine(0).length : !/[^\u200b]/.test(x.querySelector(".CodeMirror-line").textContent);
        }
        b ? g(w) : h2(w);
      }, 20);
    }
    function p(w) {
      C(w) && g(w);
    }
    function m(w) {
      var b = w.getWrapperElement(), x = C(w);
      b.className = b.className.replace(" CodeMirror-empty", "") + (x ? " CodeMirror-empty" : ""), x ? g(w) : h2(w);
    }
    function C(w) {
      return w.lineCount() === 1 && w.getLine(0) === "";
    }
  });
})();
(function(o, a) {
  (function(s) {
    s(Wi());
  })(function(s) {
    s.defineMode("javascript", function(h2, g) {
      var f = h2.indentUnit, p = g.statementIndent, m = g.jsonld, C = g.json || m, w = g.trackScope !== false, b = g.typescript, x = g.wordCharacters || /[\w$\xa1-\uffff]/, T = function() {
        function y(ht) {
          return { type: ht, style: "keyword" };
        }
        var M = y("keyword a"), D = y("keyword b"), U = y("keyword c"), ke = y("keyword d"), Ie = y("operator"), Be = { type: "atom", style: "atom" };
        return {
          if: y("if"),
          while: M,
          with: M,
          else: D,
          do: D,
          try: D,
          finally: D,
          return: ke,
          break: ke,
          continue: ke,
          new: y("new"),
          delete: U,
          void: U,
          throw: U,
          debugger: y("debugger"),
          var: y("var"),
          const: y("var"),
          let: y("var"),
          function: y("function"),
          catch: y("catch"),
          for: y("for"),
          switch: y("switch"),
          case: y("case"),
          default: y("default"),
          in: Ie,
          typeof: Ie,
          instanceof: Ie,
          true: Be,
          false: Be,
          null: Be,
          undefined: Be,
          NaN: Be,
          Infinity: Be,
          this: y("this"),
          class: y("class"),
          super: y("atom"),
          yield: U,
          export: y("export"),
          import: y("import"),
          extends: U,
          await: U
        };
      }(), _ = /[+\-*&%=<>!?|~^@]/, E = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function A(y) {
        for (var M = false, D, U = false; (D = y.next()) != null; ) {
          if (!M) {
            if (D == "/" && !U)
              return;
            D == "[" ? U = true : U && D == "]" && (U = false);
          }
          M = !M && D == "\\";
        }
      }
      var B, W;
      function $(y, M, D) {
        return B = y, W = D, M;
      }
      function X(y, M) {
        var D = y.next();
        if (D == '"' || D == "'")
          return M.tokenize = K(D), M.tokenize(y, M);
        if (D == "." && y.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
          return $("number", "number");
        if (D == "." && y.match(".."))
          return $("spread", "meta");
        if (/[\[\]{}\(\),;\:\.]/.test(D))
          return $(D);
        if (D == "=" && y.eat(">"))
          return $("=>", "operator");
        if (D == "0" && y.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
          return $("number", "number");
        if (/\d/.test(D))
          return y.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), $("number", "number");
        if (D == "/")
          return y.eat("*") ? (M.tokenize = Z, Z(y, M)) : y.eat("/") ? (y.skipToEnd(), $("comment", "comment")) : mr(y, M, 1) ? (A(y), y.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), $("regexp", "string-2")) : (y.eat("="), $("operator", "operator", y.current()));
        if (D == "`")
          return M.tokenize = le, le(y, M);
        if (D == "#" && y.peek() == "!")
          return y.skipToEnd(), $("meta", "meta");
        if (D == "#" && y.eatWhile(x))
          return $("variable", "property");
        if (D == "<" && y.match("!--") || D == "-" && y.match("->") && !/\S/.test(y.string.slice(0, y.start)))
          return y.skipToEnd(), $("comment", "comment");
        if (_.test(D))
          return (D != ">" || !M.lexical || M.lexical.type != ">") && (y.eat("=") ? (D == "!" || D == "=") && y.eat("=") : /[<>*+\-|&?]/.test(D) && (y.eat(D), D == ">" && y.eat(D))), D == "?" && y.eat(".") ? $(".") : $("operator", "operator", y.current());
        if (x.test(D)) {
          y.eatWhile(x);
          var U = y.current();
          if (M.lastType != ".") {
            if (T.propertyIsEnumerable(U)) {
              var ke = T[U];
              return $(ke.type, ke.style, U);
            }
            if (U == "async" && y.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false))
              return $("async", "keyword", U);
          }
          return $("variable", "variable", U);
        }
      }
      function K(y) {
        return function(M, D) {
          var U = false, ke;
          if (m && M.peek() == "@" && M.match(E))
            return D.tokenize = X, $("jsonld-keyword", "meta");
          for (; (ke = M.next()) != null && !(ke == y && !U); )
            U = !U && ke == "\\";
          return U || (D.tokenize = X), $("string", "string");
        };
      }
      function Z(y, M) {
        for (var D = false, U; U = y.next(); ) {
          if (U == "/" && D) {
            M.tokenize = X;
            break;
          }
          D = U == "*";
        }
        return $("comment", "comment");
      }
      function le(y, M) {
        for (var D = false, U; (U = y.next()) != null; ) {
          if (!D && (U == "`" || U == "$" && y.eat("{"))) {
            M.tokenize = X;
            break;
          }
          D = !D && U == "\\";
        }
        return $("quasi", "string-2", y.current());
      }
      var fe = "([{}])";
      function Y(y, M) {
        M.fatArrowAt && (M.fatArrowAt = null);
        var D = y.string.indexOf("=>", y.start);
        if (!(D < 0)) {
          if (b) {
            var U = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(y.string.slice(y.start, D));
            U && (D = U.index);
          }
          for (var ke = 0, Ie = false, Be = D - 1; Be >= 0; --Be) {
            var ht = y.string.charAt(Be), Vt = fe.indexOf(ht);
            if (Vt >= 0 && Vt < 3) {
              if (!ke) {
                ++Be;
                break;
              }
              if (--ke == 0) {
                ht == "(" && (Ie = true);
                break;
              }
            } else if (Vt >= 3 && Vt < 6)
              ++ke;
            else if (x.test(ht))
              Ie = true;
            else if (/["'\/`]/.test(ht))
              for (; ; --Be) {
                if (Be == 0)
                  return;
                var xe = y.string.charAt(Be - 1);
                if (xe == ht && y.string.charAt(Be - 2) != "\\") {
                  Be--;
                  break;
                }
              }
            else if (Ie && !ke) {
              ++Be;
              break;
            }
          }
          Ie && !ke && (M.fatArrowAt = Be);
        }
      }
      var Q = {
        atom: true,
        number: true,
        variable: true,
        string: true,
        regexp: true,
        this: true,
        import: true,
        "jsonld-keyword": true
      };
      function ee(y, M, D, U, ke, Ie) {
        this.indented = y, this.column = M, this.type = D, this.prev = ke, this.info = Ie, U != null && (this.align = U);
      }
      function ae(y, M) {
        if (!w)
          return false;
        for (var D = y.localVars; D; D = D.next)
          if (D.name == M)
            return true;
        for (var U = y.context; U; U = U.prev)
          for (var D = U.vars; D; D = D.next)
            if (D.name == M)
              return true;
      }
      function ce(y, M, D, U, ke) {
        var Ie = y.cc;
        for (j.state = y, j.stream = ke, j.marked = null, j.cc = Ie, j.style = M, y.lexical.hasOwnProperty("align") || (y.lexical.align = true); ; ) {
          var Be = Ie.length ? Ie.pop() : C ? De : Me;
          if (Be(D, U)) {
            for (; Ie.length && Ie[Ie.length - 1].lex; )
              Ie.pop()();
            return j.marked ? j.marked : D == "variable" && ae(y, U) ? "variable-2" : M;
          }
        }
      }
      var j = { state: null, column: null, marked: null, cc: null };
      function ne() {
        for (var y = arguments.length - 1; y >= 0; y--)
          j.cc.push(arguments[y]);
      }
      function O() {
        return ne.apply(null, arguments), true;
      }
      function Ve(y, M) {
        for (var D = M; D; D = D.next)
          if (D.name == y)
            return true;
        return false;
      }
      function Fe(y) {
        var M = j.state;
        if (j.marked = "def", !!w) {
          if (M.context) {
            if (M.lexical.info == "var" && M.context && M.context.block) {
              var D = St(y, M.context);
              if (D != null) {
                M.context = D;
                return;
              }
            } else if (!Ve(y, M.localVars)) {
              M.localVars = new Gt(y, M.localVars);
              return;
            }
          }
          g.globalVars && !Ve(y, M.globalVars) && (M.globalVars = new Gt(y, M.globalVars));
        }
      }
      function St(y, M) {
        if (M)
          if (M.block) {
            var D = St(y, M.prev);
            return D ? D == M.prev ? M : new pt(D, M.vars, true) : null;
          } else
            return Ve(y, M.vars) ? M : new pt(M.prev, new Gt(y, M.vars), false);
        else
          return null;
      }
      function Ze(y) {
        return y == "public" || y == "private" || y == "protected" || y == "abstract" || y == "readonly";
      }
      function pt(y, M, D) {
        this.prev = y, this.vars = M, this.block = D;
      }
      function Gt(y, M) {
        this.name = y, this.next = M;
      }
      var tr = new Gt("this", new Gt("arguments", null));
      function Qe() {
        j.state.context = new pt(j.state.context, j.state.localVars, false), j.state.localVars = tr;
      }
      function vt() {
        j.state.context = new pt(j.state.context, j.state.localVars, true), j.state.localVars = null;
      }
      Qe.lex = vt.lex = true;
      function Ke() {
        j.state.localVars = j.state.context.vars, j.state.context = j.state.context.prev;
      }
      Ke.lex = true;
      function Se(y, M) {
        var D = function() {
          var U = j.state, ke = U.indented;
          if (U.lexical.type == "stat")
            ke = U.lexical.indented;
          else
            for (var Ie = U.lexical; Ie && Ie.type == ")" && Ie.align; Ie = Ie.prev)
              ke = Ie.indented;
          U.lexical = new ee(ke, j.stream.column(), y, null, U.lexical, M);
        };
        return D.lex = true, D;
      }
      function ge() {
        var y = j.state;
        y.lexical.prev && (y.lexical.type == ")" && (y.indented = y.lexical.indented), y.lexical = y.lexical.prev);
      }
      ge.lex = true;
      function Te(y) {
        function M(D) {
          return D == y ? O() : y == ";" || D == "}" || D == ")" || D == "]" ? ne() : O(M);
        }
        return M;
      }
      function Me(y, M) {
        return y == "var" ? O(Se("vardef", M), kr, Te(";"), ge) : y == "keyword a" ? O(Se("form"), rr, Me, ge) : y == "keyword b" ? O(Se("form"), Me, ge) : y == "keyword d" ? j.stream.match(/^\s*$/, false) ? O() : O(Se("stat"), qt, Te(";"), ge) : y == "debugger" ? O(Te(";")) : y == "{" ? O(Se("}"), vt, Pe, ge, Ke) : y == ";" ? O() : y == "if" ? (j.state.lexical.info == "else" && j.state.cc[j.state.cc.length - 1] == ge && j.state.cc.pop()(), O(Se("form"), rr, Me, ge, xn)) : y == "function" ? O(vr) : y == "for" ? O(Se("form"), vt, ji, Me, Ke, ge) : y == "class" || b && M == "interface" ? (j.marked = "keyword", O(Se("form", y == "class" ? y : M), Ui, ge)) : y == "variable" ? b && M == "declare" ? (j.marked = "keyword", O(Me)) : b && (M == "module" || M == "enum" || M == "type") && j.stream.match(/^\s*\w/, false) ? (j.marked = "keyword", M == "enum" ? O(_n) : M == "type" ? O($i, Te("operator"), re, Te(";")) : O(Se("form"), At, Te("{"), Se("}"), Pe, ge, ge)) : b && M == "namespace" ? (j.marked = "keyword", O(Se("form"), De, Me, ge)) : b && M == "abstract" ? (j.marked = "keyword", O(Me)) : O(Se("stat"), z) : y == "switch" ? O(
          Se("form"),
          rr,
          Te("{"),
          Se("}", "switch"),
          vt,
          Pe,
          ge,
          ge,
          Ke
        ) : y == "case" ? O(De, Te(":")) : y == "default" ? O(Te(":")) : y == "catch" ? O(Se("form"), Qe, an, Me, ge, Ke) : y == "export" ? O(Se("stat"), Wr, ge) : y == "import" ? O(Se("stat"), Tr, ge) : y == "async" ? O(Me) : M == "@" ? O(De, Me) : ne(Se("stat"), De, Te(";"), ge);
      }
      function an(y) {
        if (y == "(")
          return O(ir, Te(")"));
      }
      function De(y, M) {
        return dr(y, M, false);
      }
      function $e(y, M) {
        return dr(y, M, true);
      }
      function rr(y) {
        return y != "(" ? ne() : O(Se(")"), qt, Te(")"), ge);
      }
      function dr(y, M, D) {
        if (j.state.fatArrowAt == j.stream.start) {
          var U = D ? N : S;
          if (y == "(")
            return O(Qe, Se(")"), ve(ir, ")"), ge, Te("=>"), U, Ke);
          if (y == "variable")
            return ne(Qe, At, Te("=>"), U, Ke);
        }
        var ke = D ? Jt : Wt;
        return Q.hasOwnProperty(y) ? O(ke) : y == "function" ? O(vr, ke) : y == "class" || b && M == "interface" ? (j.marked = "keyword", O(Se("form"), Hr, ge)) : y == "keyword c" || y == "async" ? O(D ? $e : De) : y == "(" ? O(Se(")"), qt, Te(")"), ge, ke) : y == "operator" || y == "spread" ? O(D ? $e : De) : y == "[" ? O(Se("]"), _r, ge, ke) : y == "{" ? Oe(te, "}", null, ke) : y == "quasi" ? ne(Ee, ke) : y == "new" ? O(I(D)) : O();
      }
      function qt(y) {
        return y.match(/[;\}\)\],]/) ? ne() : ne(De);
      }
      function Wt(y, M) {
        return y == "," ? O(qt) : Jt(y, M, false);
      }
      function Jt(y, M, D) {
        var U = D == false ? Wt : Jt, ke = D == false ? De : $e;
        if (y == "=>")
          return O(Qe, D ? N : S, Ke);
        if (y == "operator")
          return /\+\+|--/.test(M) || b && M == "!" ? O(U) : b && M == "<" && j.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false) ? O(Se(">"), ve(re, ">"), ge, U) : M == "?" ? O(De, Te(":"), ke) : O(ke);
        if (y == "quasi")
          return ne(Ee, U);
        if (y != ";") {
          if (y == "(")
            return Oe($e, ")", "call", U);
          if (y == ".")
            return O(J, U);
          if (y == "[")
            return O(Se("]"), qt, Te("]"), ge, U);
          if (b && M == "as")
            return j.marked = "keyword", O(re, U);
          if (y == "regexp")
            return j.state.lastType = j.marked = "operator", j.stream.backUp(j.stream.pos - j.stream.start - 1), O(ke);
        }
      }
      function Ee(y, M) {
        return y != "quasi" ? ne() : M.slice(M.length - 2) != "${" ? O(Ee) : O(qt, Cr);
      }
      function Cr(y) {
        if (y == "}")
          return j.marked = "string-2", j.state.tokenize = le, O(Ee);
      }
      function S(y) {
        return Y(j.stream, j.state), ne(y == "{" ? Me : De);
      }
      function N(y) {
        return Y(j.stream, j.state), ne(y == "{" ? Me : $e);
      }
      function I(y) {
        return function(M) {
          return M == "." ? O(y ? H : R) : M == "variable" && b ? O(rt, y ? Jt : Wt) : ne(y ? $e : De);
        };
      }
      function R(y, M) {
        if (M == "target")
          return j.marked = "keyword", O(Wt);
      }
      function H(y, M) {
        if (M == "target")
          return j.marked = "keyword", O(Jt);
      }
      function z(y) {
        return y == ":" ? O(ge, Me) : ne(Wt, Te(";"), ge);
      }
      function J(y) {
        if (y == "variable")
          return j.marked = "property", O();
      }
      function te(y, M) {
        if (y == "async")
          return j.marked = "property", O(te);
        if (y == "variable" || j.style == "keyword") {
          if (j.marked = "property", M == "get" || M == "set")
            return O(oe);
          var D;
          return b && j.state.fatArrowAt == j.stream.start && (D = j.stream.match(/^\s*:\s*/, false)) && (j.state.fatArrowAt = j.stream.pos + D[0].length), O(ye);
        } else {
          if (y == "number" || y == "string")
            return j.marked = m ? "property" : j.style + " property", O(ye);
          if (y == "jsonld-keyword")
            return O(ye);
          if (b && Ze(M))
            return j.marked = "keyword", O(te);
          if (y == "[")
            return O(De, Ne, Te("]"), ye);
          if (y == "spread")
            return O($e, ye);
          if (M == "*")
            return j.marked = "keyword", O(te);
          if (y == ":")
            return ne(ye);
        }
      }
      function oe(y) {
        return y != "variable" ? ne(ye) : (j.marked = "property", O(vr));
      }
      function ye(y) {
        if (y == ":")
          return O($e);
        if (y == "(")
          return ne(vr);
      }
      function ve(y, M, D) {
        function U(ke, Ie) {
          if (D ? D.indexOf(ke) > -1 : ke == ",") {
            var Be = j.state.lexical;
            return Be.info == "call" && (Be.pos = (Be.pos || 0) + 1), O(function(ht, Vt) {
              return ht == M || Vt == M ? ne() : ne(y);
            }, U);
          }
          return ke == M || Ie == M ? O() : D && D.indexOf(";") > -1 ? ne(y) : O(Te(M));
        }
        return function(ke, Ie) {
          return ke == M || Ie == M ? O() : ne(y, U);
        };
      }
      function Oe(y, M, D) {
        for (var U = 3; U < arguments.length; U++)
          j.cc.push(arguments[U]);
        return O(Se(M, D), ve(y, M), ge);
      }
      function Pe(y) {
        return y == "}" ? O() : ne(Me, Pe);
      }
      function Ne(y, M) {
        if (b) {
          if (y == ":")
            return O(re);
          if (M == "?")
            return O(Ne);
        }
      }
      function Ye(y, M) {
        if (b && (y == ":" || M == "in"))
          return O(re);
      }
      function Ue(y) {
        if (b && y == ":")
          return j.stream.match(/^\s*\w+\s+is\b/, false) ? O(De, Mt, re) : O(re);
      }
      function Mt(y, M) {
        if (M == "is")
          return j.marked = "keyword", O();
      }
      function re(y, M) {
        if (M == "keyof" || M == "typeof" || M == "infer" || M == "readonly")
          return j.marked = "keyword", O(M == "typeof" ? $e : re);
        if (y == "variable" || M == "void")
          return j.marked = "type", O(ot);
        if (M == "|" || M == "&")
          return O(re);
        if (y == "string" || y == "number" || y == "atom")
          return O(ot);
        if (y == "[")
          return O(Se("]"), ve(re, "]", ","), ge, ot);
        if (y == "{")
          return O(Se("}"), ft, ge, ot);
        if (y == "(")
          return O(ve(ct, ")"), Br, ot);
        if (y == "<")
          return O(ve(re, ">"), re);
        if (y == "quasi")
          return ne(Xe, ot);
      }
      function Br(y) {
        if (y == "=>")
          return O(re);
      }
      function ft(y) {
        return y.match(/[\}\)\]]/) ? O() : y == "," || y == ";" ? O(ft) : ne(We, ft);
      }
      function We(y, M) {
        if (y == "variable" || j.style == "keyword")
          return j.marked = "property", O(We);
        if (M == "?" || y == "number" || y == "string")
          return O(We);
        if (y == ":")
          return O(re);
        if (y == "[")
          return O(Te("variable"), Ye, Te("]"), We);
        if (y == "(")
          return ne(gr, We);
        if (!y.match(/[;\}\)\],]/))
          return O();
      }
      function Xe(y, M) {
        return y != "quasi" ? ne() : M.slice(M.length - 2) != "${" ? O(Xe) : O(re, ln);
      }
      function ln(y) {
        if (y == "}")
          return j.marked = "string-2", j.state.tokenize = le, O(Xe);
      }
      function ct(y, M) {
        return y == "variable" && j.stream.match(/^\s*[?:]/, false) || M == "?" ? O(ct) : y == ":" ? O(re) : y == "spread" ? O(ct) : ne(re);
      }
      function ot(y, M) {
        if (M == "<")
          return O(Se(">"), ve(re, ">"), ge, ot);
        if (M == "|" || y == "." || M == "&")
          return O(re);
        if (y == "[")
          return O(re, Te("]"), ot);
        if (M == "extends" || M == "implements")
          return j.marked = "keyword", O(re);
        if (M == "?")
          return O(re, Te(":"), re);
      }
      function rt(y, M) {
        if (M == "<")
          return O(Se(">"), ve(re, ">"), ge, ot);
      }
      function pr() {
        return ne(re, nr);
      }
      function nr(y, M) {
        if (M == "=")
          return O(re);
      }
      function kr(y, M) {
        return M == "enum" ? (j.marked = "keyword", O(_n)) : ne(At, Ne, Zt, ta);
      }
      function At(y, M) {
        if (b && Ze(M))
          return j.marked = "keyword", O(At);
        if (y == "variable")
          return Fe(M), O();
        if (y == "spread")
          return O(At);
        if (y == "[")
          return Oe(ea, "]");
        if (y == "{")
          return Oe(ti, "}");
      }
      function ti(y, M) {
        return y == "variable" && !j.stream.match(/^\s*:/, false) ? (Fe(M), O(Zt)) : (y == "variable" && (j.marked = "property"), y == "spread" ? O(At) : y == "}" ? ne() : y == "[" ? O(De, Te("]"), Te(":"), ti) : O(Te(":"), At, Zt));
      }
      function ea() {
        return ne(At, Zt);
      }
      function Zt(y, M) {
        if (M == "=")
          return O($e);
      }
      function ta(y) {
        if (y == ",")
          return O(kr);
      }
      function xn(y, M) {
        if (y == "keyword b" && M == "else")
          return O(Se("form", "else"), Me, ge);
      }
      function ji(y, M) {
        if (M == "await")
          return O(ji);
        if (y == "(")
          return O(Se(")"), ri, ge);
      }
      function ri(y) {
        return y == "var" ? O(kr, Rr) : y == "variable" ? O(Rr) : ne(Rr);
      }
      function Rr(y, M) {
        return y == ")" ? O() : y == ";" ? O(Rr) : M == "in" || M == "of" ? (j.marked = "keyword", O(De, Rr)) : ne(De, Rr);
      }
      function vr(y, M) {
        if (M == "*")
          return j.marked = "keyword", O(vr);
        if (y == "variable")
          return Fe(M), O(vr);
        if (y == "(")
          return O(Qe, Se(")"), ve(ir, ")"), ge, Ue, Me, Ke);
        if (b && M == "<")
          return O(Se(">"), ve(pr, ">"), ge, vr);
      }
      function gr(y, M) {
        if (M == "*")
          return j.marked = "keyword", O(gr);
        if (y == "variable")
          return Fe(M), O(gr);
        if (y == "(")
          return O(Qe, Se(")"), ve(ir, ")"), ge, Ue, Ke);
        if (b && M == "<")
          return O(Se(">"), ve(pr, ">"), ge, gr);
      }
      function $i(y, M) {
        if (y == "keyword" || y == "variable")
          return j.marked = "type", O($i);
        if (M == "<")
          return O(Se(">"), ve(pr, ">"), ge);
      }
      function ir(y, M) {
        return M == "@" && O(De, ir), y == "spread" ? O(ir) : b && Ze(M) ? (j.marked = "keyword", O(ir)) : b && y == "this" ? O(Ne, Zt) : ne(At, Ne, Zt);
      }
      function Hr(y, M) {
        return y == "variable" ? Ui(y, M) : Tn(y, M);
      }
      function Ui(y, M) {
        if (y == "variable")
          return Fe(M), O(Tn);
      }
      function Tn(y, M) {
        if (M == "<")
          return O(Se(">"), ve(pr, ">"), ge, Tn);
        if (M == "extends" || M == "implements" || b && y == ",")
          return M == "implements" && (j.marked = "keyword"), O(b ? re : De, Tn);
        if (y == "{")
          return O(Se("}"), zt, ge);
      }
      function zt(y, M) {
        if (y == "async" || y == "variable" && (M == "static" || M == "get" || M == "set" || b && Ze(M)) && j.stream.match(/^\s+#?[\w$\xa1-\uffff]/, false))
          return j.marked = "keyword", O(zt);
        if (y == "variable" || j.style == "keyword")
          return j.marked = "property", O(xr, zt);
        if (y == "number" || y == "string")
          return O(xr, zt);
        if (y == "[")
          return O(De, Ne, Te("]"), xr, zt);
        if (M == "*")
          return j.marked = "keyword", O(zt);
        if (b && y == "(")
          return ne(gr, zt);
        if (y == ";" || y == ",")
          return O(zt);
        if (y == "}")
          return O();
        if (M == "@")
          return O(De, zt);
      }
      function xr(y, M) {
        if (M == "!" || M == "?")
          return O(xr);
        if (y == ":")
          return O(re, Zt);
        if (M == "=")
          return O($e);
        var D = j.state.lexical.prev, U = D && D.info == "interface";
        return ne(U ? gr : vr);
      }
      function Wr(y, M) {
        return M == "*" ? (j.marked = "keyword", O(pe, Te(";"))) : M == "default" ? (j.marked = "keyword", O(De, Te(";"))) : y == "{" ? O(ve(Gi, "}"), pe, Te(";")) : ne(Me);
      }
      function Gi(y, M) {
        if (M == "as")
          return j.marked = "keyword", O(Te("variable"));
        if (y == "variable")
          return ne($e, Gi);
      }
      function Tr(y) {
        return y == "string" ? O() : y == "(" ? ne(De) : y == "." ? ne(Wt) : ne(zr, ni, pe);
      }
      function zr(y, M) {
        return y == "{" ? Oe(zr, "}") : (y == "variable" && Fe(M), M == "*" && (j.marked = "keyword"), O(nt));
      }
      function ni(y) {
        if (y == ",")
          return O(zr, ni);
      }
      function nt(y, M) {
        if (M == "as")
          return j.marked = "keyword", O(zr);
      }
      function pe(y, M) {
        if (M == "from")
          return j.marked = "keyword", O(De);
      }
      function _r(y) {
        return y == "]" ? O() : ne(ve($e, "]"));
      }
      function _n() {
        return ne(Se("form"), At, Te("{"), Se("}"), ve(Qt, "}"), ge, ge);
      }
      function Qt() {
        return ne(At, Zt);
      }
      function Re(y, M) {
        return y.lastType == "operator" || y.lastType == "," || _.test(M.charAt(0)) || /[,.]/.test(M.charAt(0));
      }
      function mr(y, M, D) {
        return M.tokenize == X && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(M.lastType) || M.lastType == "quasi" && /\{\s*$/.test(y.string.slice(0, y.pos - (D || 0)));
      }
      return {
        startState: function(y) {
          var M = {
            tokenize: X,
            lastType: "sof",
            cc: [],
            lexical: new ee((y || 0) - f, 0, "block", false),
            localVars: g.localVars,
            context: g.localVars && new pt(null, null, false),
            indented: y || 0
          };
          return g.globalVars && typeof g.globalVars == "object" && (M.globalVars = g.globalVars), M;
        },
        token: function(y, M) {
          if (y.sol() && (M.lexical.hasOwnProperty("align") || (M.lexical.align = false), M.indented = y.indentation(), Y(y, M)), M.tokenize != Z && y.eatSpace())
            return null;
          var D = M.tokenize(y, M);
          return B == "comment" ? D : (M.lastType = B == "operator" && (W == "++" || W == "--") ? "incdec" : B, ce(M, D, B, W, y));
        },
        indent: function(y, M) {
          if (y.tokenize == Z || y.tokenize == le)
            return s.Pass;
          if (y.tokenize != X)
            return 0;
          var D = M && M.charAt(0), U = y.lexical, ke;
          if (!/^\s*else\b/.test(M))
            for (var Ie = y.cc.length - 1; Ie >= 0; --Ie) {
              var Be = y.cc[Ie];
              if (Be == ge)
                U = U.prev;
              else if (Be != xn && Be != Ke)
                break;
            }
          for (; (U.type == "stat" || U.type == "form") && (D == "}" || (ke = y.cc[y.cc.length - 1]) && (ke == Wt || ke == Jt) && !/^[,\.=+\-*:?[\(]/.test(M)); )
            U = U.prev;
          p && U.type == ")" && U.prev.type == "stat" && (U = U.prev);
          var ht = U.type, Vt = D == ht;
          return ht == "vardef" ? U.indented + (y.lastType == "operator" || y.lastType == "," ? U.info.length + 1 : 0) : ht == "form" && D == "{" ? U.indented : ht == "form" ? U.indented + f : ht == "stat" ? U.indented + (Re(y, M) ? p || f : 0) : U.info == "switch" && !Vt && g.doubleIndentSwitch != false ? U.indented + (/^(?:case|default)\b/.test(M) ? f : 2 * f) : U.align ? U.column + (Vt ? 0 : 1) : U.indented + (Vt ? 0 : f);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: C ? null : "/*",
        blockCommentEnd: C ? null : "*/",
        blockCommentContinue: C ? null : " * ",
        lineComment: C ? null : "//",
        fold: "brace",
        closeBrackets: "()[]{}''\"\"``",
        helperType: C ? "json" : "javascript",
        jsonldMode: m,
        jsonMode: C,
        expressionAllowed: mr,
        skipExpression: function(y) {
          ce(y, "atom", "atom", "true", new s.StringStream("", 2, null));
        }
      };
    }), s.registerHelper("wordChars", "javascript", /[\w$]/), s.defineMIME("text/javascript", "javascript"), s.defineMIME("text/ecmascript", "javascript"), s.defineMIME("application/javascript", "javascript"), s.defineMIME("application/x-javascript", "javascript"), s.defineMIME("application/ecmascript", "javascript"), s.defineMIME("application/json", { name: "javascript", json: true }), s.defineMIME("application/x-json", { name: "javascript", json: true }), s.defineMIME("application/manifest+json", { name: "javascript", json: true }), s.defineMIME("application/ld+json", { name: "javascript", jsonld: true }), s.defineMIME("text/typescript", { name: "javascript", typescript: true }), s.defineMIME("application/typescript", { name: "javascript", typescript: true });
  });
})();
var py = defineComponent({
  name: "vCodeMirror"
});
var vy = Object.assign(py, {
  setup(o) {
    const a = Sl(), { visible: s, activeName: h2, data: g, config: f, attributeFn: p, actionsFn: m, currentView: C, pageName: w } = storeToRefs(a);
    function b() {
      T.value = true;
    }
    const x = ref(false), T = computed({
      get() {
        return s.value || x.value;
      },
      set(K) {
        x.value = K;
      }
    });
    watch(s, (K) => {
      K && (T.value = K);
    });
    const _ = {
      mode: "text/javascript",
      // Language mode
      theme: "dracula",
      // Theme
      lineNumbers: true,
      // Show line number
      smartIndent: true,
      // Smart indent
      indentUnit: 4,
      // The smart indent unit is 2 spaces in length
      foldGutter: true,
      // Code folding
      matchBrackets: true,
      autoCloseBrackets: true,
      styleActiveLine: true,
      // Display the style of the selected row
      readOnly: false
    }, E = computed(() => ({
      currentView: C.value,
      data: g.value,
      attributeFn: p.value,
      actionsFn: m.value
    })[h2.value]), A = computed(() => ({
      currentView: "json",
      data: "js",
      attributeFn: "js",
      actionsFn: "js"
    })[h2.value]), B = ref(""), W = (K) => {
      B.value = K;
    }, $ = () => {
      Hd(B.value, w.value + "_" + h2.value, A.value);
    }, X = () => {
      const K = Rd(B.value || Ru(E.value));
      if (K.code === 1) {
        const Z = K.data;
        if (h2.value === "currentView" && Object.keys(Z).length) {
          Z.updateId = Z.updateId + "1";
          let le = Z.pathId.split("-");
          const fe = (ee, ae) => ee[ae].children;
          let Y = Fi(f.value), Q = Y;
          for (let ee = 0; ee < le.length - 1; ++ee)
            Q = fe(Q, le[ee]);
          Q[le[le.length - 1]] = Zn([Z])[0], f.value.length = 0, f.value.push(...Go(Y));
        }
        Object.getOwnPropertyNames(E.value).forEach(function(le) {
          delete E.value[le];
        }), Object.assign(E.value, Z);
      } else
        throw new Error(K.message);
    };
    return (K, Z) => {
      const le = fc, fe = $m, Y = jm;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(le, {
          class: "v-code-config-btn",
          onClick: b
        }, {
          default: withCtx(() => [
            createTextVNode("代码配置")
          ]),
          _: 1
        }),
        unref(T) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(le, {
            type: "primary",
            onClick: X
          }, {
            default: withCtx(() => [
              createTextVNode("预览")
            ]),
            _: 1
          }),
          createVNode(le, {
            type: "primary",
            onClick: $
          }, {
            default: withCtx(() => [
              createTextVNode("下载")
            ]),
            _: 1
          }),
          createVNode(le, {
            type: "primary",
            onClick: Z[0] || (Z[0] = (Q) => T.value = false)
          }, {
            default: withCtx(() => [
              createTextVNode("关闭")
            ]),
            _: 1
          }),
          createVNode(Y, {
            modelValue: unref(h2),
            "onUpdate:modelValue": Z[1] || (Z[1] = (Q) => isRef(h2) ? h2.value = Q : null),
            class: "demo-tabs"
          }, {
            default: withCtx(() => [
              createVNode(fe, {
                label: "当前组件",
                name: "currentView"
              }),
              createVNode(fe, {
                label: "数据配置",
                name: "data"
              }),
              createVNode(fe, {
                label: "属性配置",
                name: "attributeFn"
              }),
              createVNode(fe, {
                label: "事件配置",
                name: "actionsFn"
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 64)) : createCommentVNode("", true),
        unref(T) ? (openBlock(), createBlock(unref(hy), {
          key: 1,
          value: unref(Ru)(unref(E), unref(A)),
          options: _,
          border: "",
          placeholder: "代码编辑器",
          height: 400,
          width: "100%",
          onChange: W
        }, null, 8, ["value"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var Bo = xl(vy, [["__scopeId", "data-v-5fb9e9c0"]]);
Bo.install = (o) => {
  o.component(Bo.name, Bo);
};
var gy = (o) => (pushScopeId("data-v-3c599636"), o = o(), popScopeId(), o);
var my = { style: { height: "800px" } };
var yy = {
  ref: "contentRef",
  class: "v-content-box"
};
var by = { class: "v-content-left-box" };
var wy = gy(() => createBaseVNode("div", null, "组件", -1));
var Sy = ["id"];
var Cy = { class: "v-content-center-box" };
var ky = defineComponent({
  name: "vPreview"
});
var xy = Object.assign(ky, {
  props: {
    componentsList: {
      type: Array,
      default: () => []
    }
  },
  setup(o) {
    const a = Sl(), { visible: s, activeName: h2, data: g, config: f, attributeFn: p, actionsFn: m, currentView: C } = storeToRefs(a);
    function w() {
      a.visible = true;
    }
    const b = ref([]);
    try {
      b.value = My();
    } catch {
    }
    const x = computed(() => Zn(b.value)), T = computed(() => Fi(x.value)), _ = (K) => {
      K.dataTransfer.setData("config", JSON.stringify(T.value[K.target.id]));
    }, E = (K, Z, le) => {
      if (!(K != null && K.value)) {
        a.preView = !a.preView;
        return;
      }
      const fe = sl(K);
      if (le === "config" && Object.keys(fe).length) {
        fe.updateId = fe.updateId + "1";
        let Y = fe.pathId.split("-");
        const Q = (ce, j) => ce[j].children;
        let ee = Fi(f.value), ae = ee;
        for (let ce = 0; ce < Y.length - 1; ++ce)
          ae = Q(ae, Y[ce]);
        ae[Y[Y.length - 1]] = Zn([fe])[0], f.value.length = 0, f.value.push(...Go(ee));
      }
      Object.getOwnPropertyNames(Z).forEach(function(Y) {
        delete Z[Y];
      }), Object.assign(Z, fe), a.preView = true;
    };
    function A() {
      h2.value = "currentView", a.preView = false;
    }
    const B = computed(() => Xn(C.value)), W = computed(() => Xn(g.value)), $ = computed(() => Xn(p.value)), X = computed(() => Xn(m.value));
    return computed(() => ({
      currentView: B.value,
      data: W.value,
      attributeFn: $.value,
      actionsFn: X.value
    })[h2.value]), (K, Z) => {
      const le = fc, fe = Ir, Y = Lm;
      return openBlock(), createElementBlock("div", null, [
        createVNode(le, {
          class: "v-config-btn",
          onClick: w
        }, {
          default: withCtx(() => [
            createTextVNode("视图配置")
          ]),
          _: 1
        }),
        createVNode(Y, {
          class: "v-config-dialog-box",
          modelValue: unref(s),
          "onUpdate:modelValue": Z[0] || (Z[0] = (Q) => isRef(s) ? s.value = Q : null),
          width: "90%"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", my, [
              createBaseVNode("div", yy, [
                createBaseVNode("div", by, [
                  wy,
                  createBaseVNode("div", {
                    onDragstart: _,
                    class: "v-drag-cursor"
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(x), (Q) => (openBlock(), createElementBlock("div", {
                      key: Q.id,
                      class: "v-view-component",
                      draggable: "true",
                      id: Q.onlyId
                    }, toDisplayString(Q.name), 9, Sy))), 128))
                  ], 32)
                ]),
                createBaseVNode("div", Cy, [
                  createVNode(le, { onClick: E }, {
                    default: withCtx(() => [
                      createTextVNode("预览/编辑")
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(f), (Q, ee) => (openBlock(), createElementBlock("div", {
                    key: Q.onlyId + Q.updateId,
                    onClick: A
                  }, [
                    createVNode(fe, {
                      itemView: Q,
                      config: unref(f),
                      data: unref(g),
                      attributeFn: unref(p),
                      actionsFn: unref(m),
                      isTemplate: true
                    }, null, 8, ["itemView", "config", "data", "attributeFn", "actionsFn"])
                  ]))), 128))
                ])
              ], 512)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
var Di = xl(xy, [["__scopeId", "data-v-3c599636"]]);
Di.install = (o) => {
  console.log(Di.name, "vPreview.name"), o.component(Di.name, Di);
};
var Ty = (o) => {
  o.use(Ir), o.use(Bo), o.use(Di);
};
var _y = {
  install: Ty
};
var wc = {};
var Sc = [];
function Ly(o) {
  const a = o == null ? void 0 : o.baseView;
  if (!a)
    throw new Error(`组件名称不能为空，请查看${o}`);
  return defineAsyncComponent(wc[a]);
}
function My() {
  const o = [];
  return Sc.forEach(async (a) => {
    try {
      const s = await a();
      o.push(s.default);
    } catch {
    }
  }), o;
}
function Ay(o) {
  return o.components.forEach((a) => {
    wc[a.name] = a.component, Sc.push(a.jsonDate || null);
  }), _y;
}
function Dy(o, a, s) {
  function h2(w = "click", b) {
    a("onActivate", { initView: f.value, e: b }, w);
  }
  const g = kl(Cl(s.itemConfig)), f = computed(() => Af(g, o.itemView)), p = (w) => {
    h2("getRef", w);
  }, m = computed(() => {
    var b;
    const w = {};
    return (b = Object.keys(f.value.methods || {})) == null || b.forEach((x) => {
      if (x !== "getRef") {
        let T = Vd(x);
        w[T] = (_) => h2(x, _);
      }
    }), w;
  });
  return {
    value: computed({
      get() {
        return f.value.value;
      },
      set(w) {
        f.value.value = w, a("update:modelValue", { key: "value", value: w, mapKey: "modelValue" });
      }
    }),
    initView: f,
    getRef: p,
    getMethods: m,
    onActivate: h2
  };
}
export {
  Ay as createComponent,
  Zn as setConfigId,
  Dy as useBaseHook,
  Sl as useConfigStore
};
/*! Bundled license information:

vite-code/dist/vite-code.js:
  (*! Element Plus Icons Vue v2.1.0 *)
*/
//# sourceMappingURL=vite-code.js.map
