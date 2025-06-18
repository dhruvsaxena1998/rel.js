// node_modules/.pnpm/antlr4@4.13.2/node_modules/antlr4/dist/antlr4.node.mjs
import { createRequire as t } from "node:module";
var e = { d: (t2, n2) => {
  for (var s2 in n2) e.o(n2, s2) && !e.o(t2, s2) && Object.defineProperty(t2, s2, { enumerable: true, get: n2[s2] });
}, o: (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2) };
var n = {};
e.d(n, { MG: () => j, fr: () => yt, sR: () => Ce, Zo: () => Ne, iH: () => Oe, rt: () => vt, jB: () => Pe, M8: () => ae, $t: () => _e, aq: () => Se, pG: () => Lt, eP: () => xe, tf: () => Le, KU: () => fe, zW: () => ke, IX: () => m, mY: () => E, a7: () => W, JG: () => Mt, ay: () => $t, X2: () => te, WU: () => ue, Uw: () => de, gw: () => ge, iX: () => De, re: () => ne, Pg: () => Ue, tD: () => se, R$: () => Qt, Dj: () => Dt, m7: () => M, NZ: () => v, xo: () => P, ou: () => s, qC: () => Be, mD: () => u, Ay: () => Ke });
var s = class {
  constructor() {
    this.source = null, this.type = null, this.channel = null, this.start = null, this.stop = null, this.tokenIndex = null, this.line = null, this.column = null, this._text = null;
  }
  getTokenSource() {
    return this.source[0];
  }
  getInputStream() {
    return this.source[1];
  }
  get text() {
    return this._text;
  }
  set text(t2) {
    this._text = t2;
  }
};
function i(t2, e2) {
  if (!Array.isArray(t2) || !Array.isArray(e2)) return false;
  if (t2 === e2) return true;
  if (t2.length !== e2.length) return false;
  for (let n2 = 0; n2 < t2.length; n2++) if (!(t2[n2] === e2[n2] || t2[n2].equals && t2[n2].equals(e2[n2]))) return false;
  return true;
}
s.INVALID_TYPE = 0, s.EPSILON = -2, s.MIN_USER_TOKEN_TYPE = 1, s.EOF = -1, s.DEFAULT_CHANNEL = 0, s.HIDDEN_CHANNEL = 1;
var r = Math.round(Math.random() * Math.pow(2, 32));
function o(t2) {
  if (!t2) return 0;
  const e2 = typeof t2, n2 = "string" === e2 ? t2 : !("object" !== e2 || !t2.toString) && t2.toString();
  if (!n2) return 0;
  let s2, i2;
  const o2 = 3 & n2.length, a2 = n2.length - o2;
  let l2 = r;
  const h2 = 3432918353, c2 = 461845907;
  let u2 = 0;
  for (; u2 < a2; ) i2 = 255 & n2.charCodeAt(u2) | (255 & n2.charCodeAt(++u2)) << 8 | (255 & n2.charCodeAt(++u2)) << 16 | (255 & n2.charCodeAt(++u2)) << 24, ++u2, i2 = (65535 & i2) * h2 + (((i2 >>> 16) * h2 & 65535) << 16) & 4294967295, i2 = i2 << 15 | i2 >>> 17, i2 = (65535 & i2) * c2 + (((i2 >>> 16) * c2 & 65535) << 16) & 4294967295, l2 ^= i2, l2 = l2 << 13 | l2 >>> 19, s2 = 5 * (65535 & l2) + ((5 * (l2 >>> 16) & 65535) << 16) & 4294967295, l2 = 27492 + (65535 & s2) + ((58964 + (s2 >>> 16) & 65535) << 16);
  switch (i2 = 0, o2) {
    case 3:
      i2 ^= (255 & n2.charCodeAt(u2 + 2)) << 16;
    case 2:
      i2 ^= (255 & n2.charCodeAt(u2 + 1)) << 8;
    case 1:
      i2 ^= 255 & n2.charCodeAt(u2), i2 = (65535 & i2) * h2 + (((i2 >>> 16) * h2 & 65535) << 16) & 4294967295, i2 = i2 << 15 | i2 >>> 17, i2 = (65535 & i2) * c2 + (((i2 >>> 16) * c2 & 65535) << 16) & 4294967295, l2 ^= i2;
  }
  return l2 ^= n2.length, l2 ^= l2 >>> 16, l2 = 2246822507 * (65535 & l2) + ((2246822507 * (l2 >>> 16) & 65535) << 16) & 4294967295, l2 ^= l2 >>> 13, l2 = 3266489909 * (65535 & l2) + ((3266489909 * (l2 >>> 16) & 65535) << 16) & 4294967295, l2 ^= l2 >>> 16, l2 >>> 0;
}
var a = class _a {
  constructor() {
    this.count = 0, this.hash = 0;
  }
  update() {
    for (let t2 = 0; t2 < arguments.length; t2++) {
      const e2 = arguments[t2];
      if (null != e2) if (Array.isArray(e2)) this.update.apply(this, e2);
      else {
        let t3 = 0;
        switch (typeof e2) {
          case "undefined":
          case "function":
            continue;
          case "number":
          case "boolean":
            t3 = e2;
            break;
          case "string":
            t3 = o(e2);
            break;
          default:
            e2.updateHashCode ? e2.updateHashCode(this) : console.log("No updateHashCode for " + e2.toString());
            continue;
        }
        t3 *= 3432918353, t3 = t3 << 15 | t3 >>> 17, t3 *= 461845907, this.count = this.count + 1;
        let n2 = this.hash ^ t3;
        n2 = n2 << 13 | n2 >>> 19, n2 = 5 * n2 + 3864292196, this.hash = n2;
      }
    }
  }
  finish() {
    let t2 = this.hash ^ 4 * this.count;
    return t2 ^= t2 >>> 16, t2 *= 2246822507, t2 ^= t2 >>> 13, t2 *= 3266489909, t2 ^= t2 >>> 16, t2;
  }
  static hashStuff() {
    const t2 = new _a();
    return t2.update.apply(t2, arguments), t2.finish();
  }
};
function l(t2) {
  return t2 ? "string" == typeof t2 ? o(t2) : t2.hashCode() : -1;
}
function h(t2, e2) {
  return t2 && t2.equals ? t2.equals(e2) : t2 === e2;
}
function c(t2) {
  return null === t2 ? "null" : t2;
}
function u(t2) {
  return Array.isArray(t2) ? "[" + t2.map(c).join(", ") + "]" : "null";
}
var d = class {
  constructor(t2, e2) {
    this.buckets = new Array(16), this.threshold = Math.floor(12), this.itemCount = 0, this.hashFunction = t2 || l, this.equalsFunction = e2 || h;
  }
  get(t2) {
    if (null == t2) return t2;
    const e2 = this._getBucket(t2);
    if (!e2) return null;
    for (const n2 of e2) if (this.equalsFunction(n2, t2)) return n2;
    return null;
  }
  add(t2) {
    return this.getOrAdd(t2) === t2;
  }
  getOrAdd(t2) {
    this._expand();
    const e2 = this._getSlot(t2);
    let n2 = this.buckets[e2];
    if (!n2) return n2 = [t2], this.buckets[e2] = n2, this.itemCount++, t2;
    for (const e3 of n2) if (this.equalsFunction(e3, t2)) return e3;
    return n2.push(t2), this.itemCount++, t2;
  }
  has(t2) {
    return null != this.get(t2);
  }
  values() {
    return this.buckets.filter((t2) => null != t2).flat(1);
  }
  toString() {
    return u(this.values());
  }
  get length() {
    return this.itemCount;
  }
  _getSlot(t2) {
    return this.hashFunction(t2) & this.buckets.length - 1;
  }
  _getBucket(t2) {
    return this.buckets[this._getSlot(t2)];
  }
  _expand() {
    if (this.itemCount <= this.threshold) return;
    const t2 = this.buckets, e2 = 2 * this.buckets.length;
    this.buckets = new Array(e2), this.threshold = Math.floor(0.75 * e2);
    for (const e3 of t2) if (e3) for (const t3 of e3) {
      const e4 = this._getSlot(t3);
      let n2 = this.buckets[e4];
      n2 || (n2 = [], this.buckets[e4] = n2), n2.push(t3);
    }
  }
};
var g = class _g {
  hashCode() {
    const t2 = new a();
    return this.updateHashCode(t2), t2.finish();
  }
  evaluate(t2, e2) {
  }
  evalPrecedence(t2, e2) {
    return this;
  }
  static andContext(t2, e2) {
    if (null === t2 || t2 === _g.NONE) return e2;
    if (null === e2 || e2 === _g.NONE) return t2;
    const n2 = new p(t2, e2);
    return 1 === n2.opnds.length ? n2.opnds[0] : n2;
  }
  static orContext(t2, e2) {
    if (null === t2) return e2;
    if (null === e2) return t2;
    if (t2 === _g.NONE || e2 === _g.NONE) return _g.NONE;
    const n2 = new f(t2, e2);
    return 1 === n2.opnds.length ? n2.opnds[0] : n2;
  }
};
var p = class _p extends g {
  constructor(t2, e2) {
    super();
    const n2 = new d();
    t2 instanceof _p ? t2.opnds.map(function(t3) {
      n2.add(t3);
    }) : n2.add(t2), e2 instanceof _p ? e2.opnds.map(function(t3) {
      n2.add(t3);
    }) : n2.add(e2);
    const s2 = x(n2);
    if (s2.length > 0) {
      let t3 = null;
      s2.map(function(e3) {
        (null === t3 || e3.precedence < t3.precedence) && (t3 = e3);
      }), n2.add(t3);
    }
    this.opnds = Array.from(n2.values());
  }
  equals(t2) {
    return this === t2 || t2 instanceof _p && i(this.opnds, t2.opnds);
  }
  updateHashCode(t2) {
    t2.update(this.opnds, "AND");
  }
  evaluate(t2, e2) {
    for (let n2 = 0; n2 < this.opnds.length; n2++) if (!this.opnds[n2].evaluate(t2, e2)) return false;
    return true;
  }
  evalPrecedence(t2, e2) {
    let n2 = false;
    const s2 = [];
    for (let i3 = 0; i3 < this.opnds.length; i3++) {
      const r2 = this.opnds[i3], o2 = r2.evalPrecedence(t2, e2);
      if (n2 |= o2 !== r2, null === o2) return null;
      o2 !== g.NONE && s2.push(o2);
    }
    if (!n2) return this;
    if (0 === s2.length) return g.NONE;
    let i2 = null;
    return s2.map(function(t3) {
      i2 = null === i2 ? t3 : g.andContext(i2, t3);
    }), i2;
  }
  toString() {
    const t2 = this.opnds.map((t3) => t3.toString());
    return (t2.length > 3 ? t2.slice(3) : t2).join("&&");
  }
};
var f = class _f extends g {
  constructor(t2, e2) {
    super();
    const n2 = new d();
    t2 instanceof _f ? t2.opnds.map(function(t3) {
      n2.add(t3);
    }) : n2.add(t2), e2 instanceof _f ? e2.opnds.map(function(t3) {
      n2.add(t3);
    }) : n2.add(e2);
    const s2 = x(n2);
    if (s2.length > 0) {
      const t3 = s2.sort(function(t4, e4) {
        return t4.compareTo(e4);
      }), e3 = t3[t3.length - 1];
      n2.add(e3);
    }
    this.opnds = Array.from(n2.values());
  }
  equals(t2) {
    return this === t2 || t2 instanceof _f && i(this.opnds, t2.opnds);
  }
  updateHashCode(t2) {
    t2.update(this.opnds, "OR");
  }
  evaluate(t2, e2) {
    for (let n2 = 0; n2 < this.opnds.length; n2++) if (this.opnds[n2].evaluate(t2, e2)) return true;
    return false;
  }
  evalPrecedence(t2, e2) {
    let n2 = false;
    const s2 = [];
    for (let i2 = 0; i2 < this.opnds.length; i2++) {
      const r2 = this.opnds[i2], o2 = r2.evalPrecedence(t2, e2);
      if (n2 |= o2 !== r2, o2 === g.NONE) return g.NONE;
      null !== o2 && s2.push(o2);
    }
    if (!n2) return this;
    if (0 === s2.length) return null;
    return s2.map(function(t3) {
      return t3;
    }), null;
  }
  toString() {
    const t2 = this.opnds.map((t3) => t3.toString());
    return (t2.length > 3 ? t2.slice(3) : t2).join("||");
  }
};
function x(t2) {
  const e2 = [];
  return t2.values().map(function(t3) {
    t3 instanceof g.PrecedencePredicate && e2.push(t3);
  }), e2;
}
function T(t2, e2) {
  if (null === t2) {
    const t3 = { state: null, alt: null, context: null, semanticContext: null };
    return e2 && (t3.reachesIntoOuterContext = 0), t3;
  }
  {
    const n2 = {};
    return n2.state = t2.state || null, n2.alt = void 0 === t2.alt ? null : t2.alt, n2.context = t2.context || null, n2.semanticContext = t2.semanticContext || null, e2 && (n2.reachesIntoOuterContext = t2.reachesIntoOuterContext || 0, n2.precedenceFilterSuppressed = t2.precedenceFilterSuppressed || false), n2;
  }
}
var S = class _S {
  constructor(t2, e2) {
    this.checkContext(t2, e2), t2 = T(t2), e2 = T(e2, true), this.state = null !== t2.state ? t2.state : e2.state, this.alt = null !== t2.alt ? t2.alt : e2.alt, this.context = null !== t2.context ? t2.context : e2.context, this.semanticContext = null !== t2.semanticContext ? t2.semanticContext : null !== e2.semanticContext ? e2.semanticContext : g.NONE, this.reachesIntoOuterContext = e2.reachesIntoOuterContext, this.precedenceFilterSuppressed = e2.precedenceFilterSuppressed;
  }
  checkContext(t2, e2) {
    null !== t2.context && void 0 !== t2.context || null !== e2 && null !== e2.context && void 0 !== e2.context || (this.context = null);
  }
  hashCode() {
    const t2 = new a();
    return this.updateHashCode(t2), t2.finish();
  }
  updateHashCode(t2) {
    t2.update(this.state.stateNumber, this.alt, this.context, this.semanticContext);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _S && this.state.stateNumber === t2.state.stateNumber && this.alt === t2.alt && (null === this.context ? null === t2.context : this.context.equals(t2.context)) && this.semanticContext.equals(t2.semanticContext) && this.precedenceFilterSuppressed === t2.precedenceFilterSuppressed;
  }
  hashCodeForConfigSet() {
    const t2 = new a();
    return t2.update(this.state.stateNumber, this.alt, this.semanticContext), t2.finish();
  }
  equalsForConfigSet(t2) {
    return this === t2 || t2 instanceof _S && this.state.stateNumber === t2.state.stateNumber && this.alt === t2.alt && this.semanticContext.equals(t2.semanticContext);
  }
  toString() {
    return "(" + this.state + "," + this.alt + (null !== this.context ? ",[" + this.context.toString() + "]" : "") + (this.semanticContext !== g.NONE ? "," + this.semanticContext.toString() : "") + (this.reachesIntoOuterContext > 0 ? ",up=" + this.reachesIntoOuterContext : "") + ")";
  }
};
var m = class _m {
  constructor(t2, e2) {
    this.start = t2, this.stop = e2;
  }
  clone() {
    return new _m(this.start, this.stop);
  }
  contains(t2) {
    return t2 >= this.start && t2 < this.stop;
  }
  toString() {
    return this.start === this.stop - 1 ? this.start.toString() : this.start.toString() + ".." + (this.stop - 1).toString();
  }
  get length() {
    return this.stop - this.start;
  }
};
m.INVALID_INTERVAL = new m(-1, -2);
var E = class _E {
  constructor() {
    this.intervals = null, this.readOnly = false;
  }
  first(t2) {
    return null === this.intervals || 0 === this.intervals.length ? s.INVALID_TYPE : this.intervals[0].start;
  }
  addOne(t2) {
    this.addInterval(new m(t2, t2 + 1));
  }
  addRange(t2, e2) {
    this.addInterval(new m(t2, e2 + 1));
  }
  addInterval(t2) {
    if (null === this.intervals) this.intervals = [], this.intervals.push(t2.clone());
    else {
      for (let e2 = 0; e2 < this.intervals.length; e2++) {
        const n2 = this.intervals[e2];
        if (t2.stop < n2.start) return void this.intervals.splice(e2, 0, t2);
        if (t2.stop === n2.start) return void (this.intervals[e2] = new m(t2.start, n2.stop));
        if (t2.start <= n2.stop) return this.intervals[e2] = new m(Math.min(n2.start, t2.start), Math.max(n2.stop, t2.stop)), void this.reduce(e2);
      }
      this.intervals.push(t2.clone());
    }
  }
  addSet(t2) {
    return null !== t2.intervals && t2.intervals.forEach((t3) => this.addInterval(t3), this), this;
  }
  reduce(t2) {
    if (t2 < this.intervals.length - 1) {
      const e2 = this.intervals[t2], n2 = this.intervals[t2 + 1];
      e2.stop >= n2.stop ? (this.intervals.splice(t2 + 1, 1), this.reduce(t2)) : e2.stop >= n2.start && (this.intervals[t2] = new m(e2.start, n2.stop), this.intervals.splice(t2 + 1, 1));
    }
  }
  complement(t2, e2) {
    const n2 = new _E();
    return n2.addInterval(new m(t2, e2 + 1)), null !== this.intervals && this.intervals.forEach((t3) => n2.removeRange(t3)), n2;
  }
  contains(t2) {
    if (null === this.intervals) return false;
    for (let e2 = 0; e2 < this.intervals.length; e2++) if (this.intervals[e2].contains(t2)) return true;
    return false;
  }
  removeRange(t2) {
    if (t2.start === t2.stop - 1) this.removeOne(t2.start);
    else if (null !== this.intervals) {
      let e2 = 0;
      for (let n2 = 0; n2 < this.intervals.length; n2++) {
        const n3 = this.intervals[e2];
        if (t2.stop <= n3.start) return;
        if (t2.start > n3.start && t2.stop < n3.stop) {
          this.intervals[e2] = new m(n3.start, t2.start);
          const s2 = new m(t2.stop, n3.stop);
          return void this.intervals.splice(e2, 0, s2);
        }
        t2.start <= n3.start && t2.stop >= n3.stop ? (this.intervals.splice(e2, 1), e2 -= 1) : t2.start < n3.stop ? this.intervals[e2] = new m(n3.start, t2.start) : t2.stop < n3.stop && (this.intervals[e2] = new m(t2.stop, n3.stop)), e2 += 1;
      }
    }
  }
  removeOne(t2) {
    if (null !== this.intervals) for (let e2 = 0; e2 < this.intervals.length; e2++) {
      const n2 = this.intervals[e2];
      if (t2 < n2.start) return;
      if (t2 === n2.start && t2 === n2.stop - 1) return void this.intervals.splice(e2, 1);
      if (t2 === n2.start) return void (this.intervals[e2] = new m(n2.start + 1, n2.stop));
      if (t2 === n2.stop - 1) return void (this.intervals[e2] = new m(n2.start, n2.stop - 1));
      if (t2 < n2.stop - 1) {
        const s2 = new m(n2.start, t2);
        return n2.start = t2 + 1, void this.intervals.splice(e2, 0, s2);
      }
    }
  }
  toString(t2, e2, n2) {
    return t2 = t2 || null, e2 = e2 || null, n2 = n2 || false, null === this.intervals ? "{}" : null !== t2 || null !== e2 ? this.toTokenString(t2, e2) : n2 ? this.toCharString() : this.toIndexString();
  }
  toCharString() {
    const t2 = [];
    for (let e2 = 0; e2 < this.intervals.length; e2++) {
      const n2 = this.intervals[e2];
      n2.stop === n2.start + 1 ? n2.start === s.EOF ? t2.push("<EOF>") : t2.push("'" + String.fromCharCode(n2.start) + "'") : t2.push("'" + String.fromCharCode(n2.start) + "'..'" + String.fromCharCode(n2.stop - 1) + "'");
    }
    return t2.length > 1 ? "{" + t2.join(", ") + "}" : t2[0];
  }
  toIndexString() {
    const t2 = [];
    for (let e2 = 0; e2 < this.intervals.length; e2++) {
      const n2 = this.intervals[e2];
      n2.stop === n2.start + 1 ? n2.start === s.EOF ? t2.push("<EOF>") : t2.push(n2.start.toString()) : t2.push(n2.start.toString() + ".." + (n2.stop - 1).toString());
    }
    return t2.length > 1 ? "{" + t2.join(", ") + "}" : t2[0];
  }
  toTokenString(t2, e2) {
    const n2 = [];
    for (let s2 = 0; s2 < this.intervals.length; s2++) {
      const i2 = this.intervals[s2];
      for (let s3 = i2.start; s3 < i2.stop; s3++) n2.push(this.elementName(t2, e2, s3));
    }
    return n2.length > 1 ? "{" + n2.join(", ") + "}" : n2[0];
  }
  elementName(t2, e2, n2) {
    return n2 === s.EOF ? "<EOF>" : n2 === s.EPSILON ? "<EPSILON>" : t2[n2] || e2[n2];
  }
  get length() {
    return this.intervals.map((t2) => t2.length).reduce((t2, e2) => t2 + e2);
  }
};
var _ = class __ {
  constructor() {
    this.atn = null, this.stateNumber = __.INVALID_STATE_NUMBER, this.stateType = null, this.ruleIndex = 0, this.epsilonOnlyTransitions = false, this.transitions = [], this.nextTokenWithinRule = null;
  }
  toString() {
    return this.stateNumber;
  }
  equals(t2) {
    return t2 instanceof __ && this.stateNumber === t2.stateNumber;
  }
  isNonGreedyExitState() {
    return false;
  }
  addTransition(t2, e2) {
    void 0 === e2 && (e2 = -1), 0 === this.transitions.length ? this.epsilonOnlyTransitions = t2.isEpsilon : this.epsilonOnlyTransitions !== t2.isEpsilon && (this.epsilonOnlyTransitions = false), -1 === e2 ? this.transitions.push(t2) : this.transitions.splice(e2, 1, t2);
  }
};
_.INVALID_TYPE = 0, _.BASIC = 1, _.RULE_START = 2, _.BLOCK_START = 3, _.PLUS_BLOCK_START = 4, _.STAR_BLOCK_START = 5, _.TOKEN_START = 6, _.RULE_STOP = 7, _.BLOCK_END = 8, _.STAR_LOOP_BACK = 9, _.STAR_LOOP_ENTRY = 10, _.PLUS_LOOP_BACK = 11, _.LOOP_END = 12, _.serializationNames = ["INVALID", "BASIC", "RULE_START", "BLOCK_START", "PLUS_BLOCK_START", "STAR_BLOCK_START", "TOKEN_START", "RULE_STOP", "BLOCK_END", "STAR_LOOP_BACK", "STAR_LOOP_ENTRY", "PLUS_LOOP_BACK", "LOOP_END"], _.INVALID_STATE_NUMBER = -1;
var C = class extends _ {
  constructor() {
    return super(), this.stateType = _.RULE_STOP, this;
  }
};
var A = class {
  constructor(t2) {
    if (null == t2) throw "target cannot be null.";
    this.target = t2, this.isEpsilon = false, this.label = null;
  }
};
A.EPSILON = 1, A.RANGE = 2, A.RULE = 3, A.PREDICATE = 4, A.ATOM = 5, A.ACTION = 6, A.SET = 7, A.NOT_SET = 8, A.WILDCARD = 9, A.PRECEDENCE = 10, A.serializationNames = ["INVALID", "EPSILON", "RANGE", "RULE", "PREDICATE", "ATOM", "ACTION", "SET", "NOT_SET", "WILDCARD", "PRECEDENCE"], A.serializationTypes = { EpsilonTransition: A.EPSILON, RangeTransition: A.RANGE, RuleTransition: A.RULE, PredicateTransition: A.PREDICATE, AtomTransition: A.ATOM, ActionTransition: A.ACTION, SetTransition: A.SET, NotSetTransition: A.NOT_SET, WildcardTransition: A.WILDCARD, PrecedencePredicateTransition: A.PRECEDENCE };
var N = class extends A {
  constructor(t2, e2, n2, s2) {
    super(t2), this.ruleIndex = e2, this.precedence = n2, this.followState = s2, this.serializationType = A.RULE, this.isEpsilon = true;
  }
  matches(t2, e2, n2) {
    return false;
  }
};
var k = class extends A {
  constructor(t2, e2) {
    super(t2), this.serializationType = A.SET, null != e2 ? this.label = e2 : (this.label = new E(), this.label.addOne(s.INVALID_TYPE));
  }
  matches(t2, e2, n2) {
    return this.label.contains(t2);
  }
  toString() {
    return this.label.toString();
  }
};
var I = class extends k {
  constructor(t2, e2) {
    super(t2, e2), this.serializationType = A.NOT_SET;
  }
  matches(t2, e2, n2) {
    return t2 >= e2 && t2 <= n2 && !super.matches(t2, e2, n2);
  }
  toString() {
    return "~" + super.toString();
  }
};
var y = class extends A {
  constructor(t2) {
    super(t2), this.serializationType = A.WILDCARD;
  }
  matches(t2, e2, n2) {
    return t2 >= e2 && t2 <= n2;
  }
  toString() {
    return ".";
  }
};
var L = class extends A {
  constructor(t2) {
    super(t2);
  }
};
var O = class {
};
var R = class extends O {
};
var w = class extends R {
};
var v = class extends w {
  get ruleContext() {
    throw new Error("missing interface implementation");
  }
};
var P = class extends w {
};
var b = class extends P {
};
var D = { toStringTree: function(t2, e2, n2) {
  e2 = e2 || null, null !== (n2 = n2 || null) && (e2 = n2.ruleNames);
  let s2 = D.getNodeText(t2, e2);
  s2 = function(t3) {
    return t3 = t3.replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
  }(s2);
  const i2 = t2.getChildCount();
  if (0 === i2) return s2;
  let r2 = "(" + s2 + " ";
  i2 > 0 && (s2 = D.toStringTree(t2.getChild(0), e2), r2 = r2.concat(s2));
  for (let n3 = 1; n3 < i2; n3++) s2 = D.toStringTree(t2.getChild(n3), e2), r2 = r2.concat(" " + s2);
  return r2 = r2.concat(")"), r2;
}, getNodeText: function(t2, e2, n2) {
  if (e2 = e2 || null, null !== (n2 = n2 || null) && (e2 = n2.ruleNames), null !== e2) {
    if (t2 instanceof v) {
      const n3 = t2.ruleContext.getAltNumber();
      return 0 != n3 ? e2[t2.ruleIndex] + ":" + n3 : e2[t2.ruleIndex];
    }
    if (t2 instanceof b) return t2.toString();
    if (t2 instanceof P && null !== t2.symbol) return t2.symbol.text;
  }
  const i2 = t2.getPayload();
  return i2 instanceof s ? i2.text : t2.getPayload().toString();
}, getChildren: function(t2) {
  const e2 = [];
  for (let n2 = 0; n2 < t2.getChildCount(); n2++) e2.push(t2.getChild(n2));
  return e2;
}, getAncestors: function(t2) {
  let e2 = [];
  for (t2 = t2.getParent(); null !== t2; ) e2 = [t2].concat(e2), t2 = t2.getParent();
  return e2;
}, findAllTokenNodes: function(t2, e2) {
  return D.findAllNodes(t2, e2, true);
}, findAllRuleNodes: function(t2, e2) {
  return D.findAllNodes(t2, e2, false);
}, findAllNodes: function(t2, e2, n2) {
  const s2 = [];
  return D._findAllNodes(t2, e2, n2, s2), s2;
}, _findAllNodes: function(t2, e2, n2, s2) {
  n2 && t2 instanceof P ? t2.symbol.type === e2 && s2.push(t2) : !n2 && t2 instanceof v && t2.ruleIndex === e2 && s2.push(t2);
  for (let i2 = 0; i2 < t2.getChildCount(); i2++) D._findAllNodes(t2.getChild(i2), e2, n2, s2);
}, descendants: function(t2) {
  let e2 = [t2];
  for (let n2 = 0; n2 < t2.getChildCount(); n2++) e2 = e2.concat(D.descendants(t2.getChild(n2)));
  return e2;
} };
var F = D;
var M = class extends v {
  constructor(t2, e2) {
    super(), this.parentCtx = t2 || null, this.invokingState = e2 || -1;
  }
  depth() {
    let t2 = 0, e2 = this;
    for (; null !== e2; ) e2 = e2.parentCtx, t2 += 1;
    return t2;
  }
  isEmpty() {
    return -1 === this.invokingState;
  }
  getSourceInterval() {
    return m.INVALID_INTERVAL;
  }
  get ruleContext() {
    return this;
  }
  getPayload() {
    return this;
  }
  getText() {
    return 0 === this.getChildCount() ? "" : this.children.map(function(t2) {
      return t2.getText();
    }).join("");
  }
  getAltNumber() {
    return 0;
  }
  setAltNumber(t2) {
  }
  getChild(t2) {
    return null;
  }
  getChildCount() {
    return 0;
  }
  accept(t2) {
    return t2.visitChildren(this);
  }
  toStringTree(t2, e2) {
    return F.toStringTree(this, t2, e2);
  }
  toString(t2, e2) {
    t2 = t2 || null, e2 = e2 || null;
    let n2 = this, s2 = "[";
    for (; null !== n2 && n2 !== e2; ) {
      if (null === t2) n2.isEmpty() || (s2 += n2.invokingState);
      else {
        const e3 = n2.ruleIndex;
        s2 += e3 >= 0 && e3 < t2.length ? t2[e3] : "" + e3;
      }
      null === n2.parentCtx || null === t2 && n2.parentCtx.isEmpty() || (s2 += " "), n2 = n2.parentCtx;
    }
    return s2 += "]", s2;
  }
};
var U = class _U {
  constructor(t2) {
    this.cachedHashCode = t2;
  }
  isEmpty() {
    return this === _U.EMPTY;
  }
  hasEmptyPath() {
    return this.getReturnState(this.length - 1) === _U.EMPTY_RETURN_STATE;
  }
  hashCode() {
    return this.cachedHashCode;
  }
  updateHashCode(t2) {
    t2.update(this.cachedHashCode);
  }
};
U.EMPTY = null, U.EMPTY_RETURN_STATE = 2147483647, U.globalNodeCount = 1, U.id = U.globalNodeCount, U.trace_atn_sim = false;
var B = class _B extends U {
  constructor(t2, e2) {
    const n2 = new a();
    return n2.update(t2, e2), super(n2.finish()), this.parents = t2, this.returnStates = e2, this;
  }
  isEmpty() {
    return this.returnStates[0] === U.EMPTY_RETURN_STATE;
  }
  getParent(t2) {
    return this.parents[t2];
  }
  getReturnState(t2) {
    return this.returnStates[t2];
  }
  equals(t2) {
    return this === t2 || t2 instanceof _B && this.hashCode() === t2.hashCode() && i(this.returnStates, t2.returnStates) && i(this.parents, t2.parents);
  }
  toString() {
    if (this.isEmpty()) return "[]";
    {
      let t2 = "[";
      for (let e2 = 0; e2 < this.returnStates.length; e2++) e2 > 0 && (t2 += ", "), this.returnStates[e2] !== U.EMPTY_RETURN_STATE ? (t2 += this.returnStates[e2], null !== this.parents[e2] ? t2 = t2 + " " + this.parents[e2] : t2 += "null") : t2 += "$";
      return t2 + "]";
    }
  }
  get length() {
    return this.returnStates.length;
  }
};
var z = class _z extends U {
  constructor(t2, e2) {
    let n2 = 0;
    const s2 = new a();
    null !== t2 ? s2.update(t2, e2) : s2.update(1), n2 = s2.finish(), super(n2), this.parentCtx = t2, this.returnState = e2;
  }
  getParent(t2) {
    return this.parentCtx;
  }
  getReturnState(t2) {
    return this.returnState;
  }
  equals(t2) {
    return this === t2 || t2 instanceof _z && this.hashCode() === t2.hashCode() && this.returnState === t2.returnState && (null == this.parentCtx ? null == t2.parentCtx : this.parentCtx.equals(t2.parentCtx));
  }
  toString() {
    const t2 = null === this.parentCtx ? "" : this.parentCtx.toString();
    return 0 === t2.length ? this.returnState === U.EMPTY_RETURN_STATE ? "$" : "" + this.returnState : this.returnState + " " + t2;
  }
  get length() {
    return 1;
  }
  static create(t2, e2) {
    return e2 === U.EMPTY_RETURN_STATE && null === t2 ? U.EMPTY : new _z(t2, e2);
  }
};
var V = class extends z {
  constructor() {
    super(null, U.EMPTY_RETURN_STATE);
  }
  isEmpty() {
    return true;
  }
  getParent(t2) {
    return null;
  }
  getReturnState(t2) {
    return this.returnState;
  }
  equals(t2) {
    return this === t2;
  }
  toString() {
    return "$";
  }
};
U.EMPTY = new V();
var q = class {
  constructor(t2, e2) {
    this.buckets = new Array(16), this.threshold = Math.floor(12), this.itemCount = 0, this.hashFunction = t2 || l, this.equalsFunction = e2 || h;
  }
  set(t2, e2) {
    this._expand();
    const n2 = this._getSlot(t2);
    let s2 = this.buckets[n2];
    if (!s2) return s2 = [[t2, e2]], this.buckets[n2] = s2, this.itemCount++, e2;
    const i2 = s2.find((e3) => this.equalsFunction(e3[0], t2), this);
    if (i2) {
      const t3 = i2[1];
      return i2[1] = e2, t3;
    }
    return s2.push([t2, e2]), this.itemCount++, e2;
  }
  containsKey(t2) {
    const e2 = this._getBucket(t2);
    return !!e2 && !!e2.find((e3) => this.equalsFunction(e3[0], t2), this);
  }
  get(t2) {
    const e2 = this._getBucket(t2);
    if (!e2) return null;
    const n2 = e2.find((e3) => this.equalsFunction(e3[0], t2), this);
    return n2 ? n2[1] : null;
  }
  entries() {
    return this.buckets.filter((t2) => null != t2).flat(1);
  }
  getKeys() {
    return this.entries().map((t2) => t2[0]);
  }
  getValues() {
    return this.entries().map((t2) => t2[1]);
  }
  toString() {
    return "[" + this.entries().map((t2) => "{" + t2[0] + ":" + t2[1] + "}").join(", ") + "]";
  }
  get length() {
    return this.itemCount;
  }
  _getSlot(t2) {
    return this.hashFunction(t2) & this.buckets.length - 1;
  }
  _getBucket(t2) {
    return this.buckets[this._getSlot(t2)];
  }
  _expand() {
    if (this.itemCount <= this.threshold) return;
    const t2 = this.buckets, e2 = 2 * this.buckets.length;
    this.buckets = new Array(e2), this.threshold = Math.floor(0.75 * e2);
    for (const e3 of t2) if (e3) for (const t3 of e3) {
      const e4 = this._getSlot(t3[0]);
      let n2 = this.buckets[e4];
      n2 || (n2 = [], this.buckets[e4] = n2), n2.push(t3);
    }
  }
};
function H(t2, e2) {
  if (null == e2 && (e2 = M.EMPTY), null === e2.parentCtx || e2 === M.EMPTY) return U.EMPTY;
  const n2 = H(t2, e2.parentCtx), s2 = t2.states[e2.invokingState].transitions[0];
  return z.create(n2, s2.followState.stateNumber);
}
function K(t2, e2, n2) {
  if (t2.isEmpty()) return t2;
  let s2 = n2.get(t2) || null;
  if (null !== s2) return s2;
  if (s2 = e2.get(t2), null !== s2) return n2.set(t2, s2), s2;
  let i2 = false, r2 = [];
  for (let s3 = 0; s3 < r2.length; s3++) {
    const o3 = K(t2.getParent(s3), e2, n2);
    if (i2 || o3 !== t2.getParent(s3)) {
      if (!i2) {
        r2 = [];
        for (let e3 = 0; e3 < t2.length; e3++) r2[e3] = t2.getParent(e3);
        i2 = true;
      }
      r2[s3] = o3;
    }
  }
  if (!i2) return e2.add(t2), n2.set(t2, t2), t2;
  let o2 = null;
  return o2 = 0 === r2.length ? U.EMPTY : 1 === r2.length ? z.create(r2[0], t2.getReturnState(0)) : new B(r2, t2.returnStates), e2.add(o2), n2.set(o2, o2), n2.set(t2, o2), o2;
}
function Y(t2, e2, n2, s2) {
  if (t2 === e2) return t2;
  if (t2 instanceof z && e2 instanceof z) return function(t3, e3, n3, s3) {
    if (null !== s3) {
      let n4 = s3.get(t3, e3);
      if (null !== n4) return n4;
      if (n4 = s3.get(e3, t3), null !== n4) return n4;
    }
    const i2 = function(t4, e4, n4) {
      if (n4) {
        if (t4 === U.EMPTY) return U.EMPTY;
        if (e4 === U.EMPTY) return U.EMPTY;
      } else {
        if (t4 === U.EMPTY && e4 === U.EMPTY) return U.EMPTY;
        if (t4 === U.EMPTY) {
          const t5 = [e4.returnState, U.EMPTY_RETURN_STATE], n5 = [e4.parentCtx, null];
          return new B(n5, t5);
        }
        if (e4 === U.EMPTY) {
          const e5 = [t4.returnState, U.EMPTY_RETURN_STATE], n5 = [t4.parentCtx, null];
          return new B(n5, e5);
        }
      }
      return null;
    }(t3, e3, n3);
    if (null !== i2) return null !== s3 && s3.set(t3, e3, i2), i2;
    if (t3.returnState === e3.returnState) {
      const i3 = Y(t3.parentCtx, e3.parentCtx, n3, s3);
      if (i3 === t3.parentCtx) return t3;
      if (i3 === e3.parentCtx) return e3;
      const r2 = z.create(i3, t3.returnState);
      return null !== s3 && s3.set(t3, e3, r2), r2;
    }
    {
      let n4 = null;
      if ((t3 === e3 || null !== t3.parentCtx && t3.parentCtx === e3.parentCtx) && (n4 = t3.parentCtx), null !== n4) {
        const i4 = [t3.returnState, e3.returnState];
        t3.returnState > e3.returnState && (i4[0] = e3.returnState, i4[1] = t3.returnState);
        const r3 = new B([n4, n4], i4);
        return null !== s3 && s3.set(t3, e3, r3), r3;
      }
      const i3 = [t3.returnState, e3.returnState];
      let r2 = [t3.parentCtx, e3.parentCtx];
      t3.returnState > e3.returnState && (i3[0] = e3.returnState, i3[1] = t3.returnState, r2 = [e3.parentCtx, t3.parentCtx]);
      const o2 = new B(r2, i3);
      return null !== s3 && s3.set(t3, e3, o2), o2;
    }
  }(t2, e2, n2, s2);
  if (n2) {
    if (t2 instanceof V) return t2;
    if (e2 instanceof V) return e2;
  }
  return t2 instanceof z && (t2 = new B([t2.getParent()], [t2.returnState])), e2 instanceof z && (e2 = new B([e2.getParent()], [e2.returnState])), function(t3, e3, n3, s3) {
    if (null !== s3) {
      let n4 = s3.get(t3, e3);
      if (null !== n4) return U.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> previous"), n4;
      if (n4 = s3.get(e3, t3), null !== n4) return U.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> previous"), n4;
    }
    let i2 = 0, r2 = 0, o2 = 0, a2 = new Array(t3.returnStates.length + e3.returnStates.length).fill(0), l2 = new Array(t3.returnStates.length + e3.returnStates.length).fill(null);
    for (; i2 < t3.returnStates.length && r2 < e3.returnStates.length; ) {
      const h3 = t3.parents[i2], c2 = e3.parents[r2];
      if (t3.returnStates[i2] === e3.returnStates[r2]) {
        const e4 = t3.returnStates[i2];
        e4 === U.EMPTY_RETURN_STATE && null === h3 && null === c2 || null !== h3 && null !== c2 && h3 === c2 ? (l2[o2] = h3, a2[o2] = e4) : (l2[o2] = Y(h3, c2, n3, s3), a2[o2] = e4), i2 += 1, r2 += 1;
      } else t3.returnStates[i2] < e3.returnStates[r2] ? (l2[o2] = h3, a2[o2] = t3.returnStates[i2], i2 += 1) : (l2[o2] = c2, a2[o2] = e3.returnStates[r2], r2 += 1);
      o2 += 1;
    }
    if (i2 < t3.returnStates.length) for (let e4 = i2; e4 < t3.returnStates.length; e4++) l2[o2] = t3.parents[e4], a2[o2] = t3.returnStates[e4], o2 += 1;
    else for (let t4 = r2; t4 < e3.returnStates.length; t4++) l2[o2] = e3.parents[t4], a2[o2] = e3.returnStates[t4], o2 += 1;
    if (o2 < l2.length) {
      if (1 === o2) {
        const n4 = z.create(l2[0], a2[0]);
        return null !== s3 && s3.set(t3, e3, n4), n4;
      }
      l2 = l2.slice(0, o2), a2 = a2.slice(0, o2);
    }
    const h2 = new B(l2, a2);
    return h2.equals(t3) ? (null !== s3 && s3.set(t3, e3, t3), U.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> a"), t3) : h2.equals(e3) ? (null !== s3 && s3.set(t3, e3, e3), U.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> b"), e3) : (function(t4) {
      const e4 = new q();
      for (let n4 = 0; n4 < t4.length; n4++) {
        const s4 = t4[n4];
        e4.containsKey(s4) || e4.set(s4, s4);
      }
      for (let n4 = 0; n4 < t4.length; n4++) t4[n4] = e4.get(t4[n4]);
    }(l2), null !== s3 && s3.set(t3, e3, h2), U.trace_atn_sim && console.log("mergeArrays a=" + t3 + ",b=" + e3 + " -> " + h2), h2);
  }(t2, e2, n2, s2);
}
var G = class _G {
  constructor() {
    this.data = new Uint32Array(1);
  }
  set(t2) {
    _G._checkIndex(t2), this._resize(t2), this.data[t2 >>> 5] |= 1 << t2 % 32;
  }
  get(t2) {
    _G._checkIndex(t2);
    const e2 = t2 >>> 5;
    return !(e2 >= this.data.length || !(this.data[e2] & 1 << t2 % 32));
  }
  clear(t2) {
    _G._checkIndex(t2);
    const e2 = t2 >>> 5;
    e2 < this.data.length && (this.data[e2] &= ~(1 << t2));
  }
  or(t2) {
    const e2 = Math.min(this.data.length, t2.data.length);
    for (let n2 = 0; n2 < e2; ++n2) this.data[n2] |= t2.data[n2];
    if (this.data.length < t2.data.length) {
      this._resize((t2.data.length << 5) - 1);
      const n2 = t2.data.length;
      for (let s2 = e2; s2 < n2; ++s2) this.data[s2] = t2.data[s2];
    }
  }
  values() {
    const t2 = new Array(this.length);
    let e2 = 0;
    const n2 = this.data.length;
    for (let s2 = 0; s2 < n2; ++s2) {
      let n3 = this.data[s2];
      for (; 0 !== n3; ) {
        const i2 = n3 & -n3;
        t2[e2++] = (s2 << 5) + _G._bitCount(i2 - 1), n3 ^= i2;
      }
    }
    return t2;
  }
  minValue() {
    for (let t2 = 0; t2 < this.data.length; ++t2) {
      let e2 = this.data[t2];
      if (0 !== e2) {
        let n2 = 0;
        for (; !(1 & e2); ) n2++, e2 >>= 1;
        return n2 + 32 * t2;
      }
    }
    return 0;
  }
  hashCode() {
    return a.hashStuff(this.values());
  }
  equals(t2) {
    return t2 instanceof _G && i(this.data, t2.data);
  }
  toString() {
    return "{" + this.values().join(", ") + "}";
  }
  get length() {
    return this.data.map((t2) => _G._bitCount(t2)).reduce((t2, e2) => t2 + e2, 0);
  }
  _resize(t2) {
    const e2 = t2 + 32 >>> 5;
    if (e2 <= this.data.length) return;
    const n2 = new Uint32Array(e2);
    n2.set(this.data), n2.fill(0, this.data.length), this.data = n2;
  }
  static _checkIndex(t2) {
    if (t2 < 0) throw new RangeError("index cannot be negative");
  }
  static _bitCount(t2) {
    return t2 = (t2 = (858993459 & (t2 -= t2 >> 1 & 1431655765)) + (t2 >> 2 & 858993459)) + (t2 >> 4) & 252645135, t2 += t2 >> 8, 0 + (t2 += t2 >> 16) & 63;
  }
};
var W = class _W {
  constructor(t2) {
    this.atn = t2;
  }
  getDecisionLookahead(t2) {
    if (null === t2) return null;
    const e2 = t2.transitions.length, n2 = [];
    for (let s2 = 0; s2 < e2; s2++) {
      n2[s2] = new E();
      const e3 = new d(), i2 = false;
      this._LOOK(t2.transition(s2).target, null, U.EMPTY, n2[s2], e3, new G(), i2, false), (0 === n2[s2].length || n2[s2].contains(_W.HIT_PRED)) && (n2[s2] = null);
    }
    return n2;
  }
  LOOK(t2, e2, n2) {
    const s2 = new E(), i2 = null !== (n2 = n2 || null) ? H(t2.atn, n2) : null;
    return this._LOOK(t2, e2, i2, s2, new d(), new G(), true, true), s2;
  }
  _LOOK(t2, e2, n2, i2, r2, o2, a2, l2) {
    const h2 = new S({ state: t2, alt: 0, context: n2 }, null);
    if (!r2.has(h2)) {
      if (r2.add(h2), t2 === e2) {
        if (null === n2) return void i2.addOne(s.EPSILON);
        if (n2.isEmpty() && l2) return void i2.addOne(s.EOF);
      }
      if (t2 instanceof C) {
        if (null === n2) return void i2.addOne(s.EPSILON);
        if (n2.isEmpty() && l2) return void i2.addOne(s.EOF);
        if (n2 !== U.EMPTY) {
          const s2 = o2.get(t2.ruleIndex);
          try {
            o2.clear(t2.ruleIndex);
            for (let t3 = 0; t3 < n2.length; t3++) {
              const s3 = this.atn.states[n2.getReturnState(t3)];
              this._LOOK(s3, e2, n2.getParent(t3), i2, r2, o2, a2, l2);
            }
          } finally {
            s2 && o2.set(t2.ruleIndex);
          }
          return;
        }
      }
      for (let h3 = 0; h3 < t2.transitions.length; h3++) {
        const c2 = t2.transitions[h3];
        if (c2.constructor === N) {
          if (o2.get(c2.target.ruleIndex)) continue;
          const t3 = z.create(n2, c2.followState.stateNumber);
          try {
            o2.set(c2.target.ruleIndex), this._LOOK(c2.target, e2, t3, i2, r2, o2, a2, l2);
          } finally {
            o2.clear(c2.target.ruleIndex);
          }
        } else if (c2 instanceof L) a2 ? this._LOOK(c2.target, e2, n2, i2, r2, o2, a2, l2) : i2.addOne(_W.HIT_PRED);
        else if (c2.isEpsilon) this._LOOK(c2.target, e2, n2, i2, r2, o2, a2, l2);
        else if (c2.constructor === y) i2.addRange(s.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
        else {
          let t3 = c2.label;
          null !== t3 && (c2 instanceof I && (t3 = t3.complement(s.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType)), i2.addSet(t3));
        }
      }
    }
  }
};
W.HIT_PRED = s.INVALID_TYPE;
var j = class {
  constructor(t2, e2) {
    this.grammarType = t2, this.maxTokenType = e2, this.states = [], this.decisionToState = [], this.ruleToStartState = [], this.ruleToStopState = null, this.modeNameToStartState = {}, this.ruleToTokenType = null, this.lexerActions = null, this.modeToStartState = [];
  }
  nextTokensInContext(t2, e2) {
    return new W(this).LOOK(t2, null, e2);
  }
  nextTokensNoContext(t2) {
    return null !== t2.nextTokenWithinRule || (t2.nextTokenWithinRule = this.nextTokensInContext(t2, null), t2.nextTokenWithinRule.readOnly = true), t2.nextTokenWithinRule;
  }
  nextTokens(t2, e2) {
    return void 0 === e2 ? this.nextTokensNoContext(t2) : this.nextTokensInContext(t2, e2);
  }
  addState(t2) {
    null !== t2 && (t2.atn = this, t2.stateNumber = this.states.length), this.states.push(t2);
  }
  removeState(t2) {
    this.states[t2.stateNumber] = null;
  }
  defineDecisionState(t2) {
    return this.decisionToState.push(t2), t2.decision = this.decisionToState.length - 1, t2.decision;
  }
  getDecisionState(t2) {
    return 0 === this.decisionToState.length ? null : this.decisionToState[t2];
  }
  getExpectedTokens(t2, e2) {
    if (t2 < 0 || t2 >= this.states.length) throw "Invalid state number.";
    const n2 = this.states[t2];
    let i2 = this.nextTokens(n2);
    if (!i2.contains(s.EPSILON)) return i2;
    const r2 = new E();
    for (r2.addSet(i2), r2.removeOne(s.EPSILON); null !== e2 && e2.invokingState >= 0 && i2.contains(s.EPSILON); ) {
      const t3 = this.states[e2.invokingState].transitions[0];
      i2 = this.nextTokens(t3.followState), r2.addSet(i2), r2.removeOne(s.EPSILON), e2 = e2.parentCtx;
    }
    return i2.contains(s.EPSILON) && r2.addOne(s.EOF), r2;
  }
};
j.INVALID_ALT_NUMBER = 0;
var $ = class extends _ {
  constructor() {
    super(), this.stateType = _.BASIC;
  }
};
var X = class extends _ {
  constructor() {
    return super(), this.decision = -1, this.nonGreedy = false, this;
  }
};
var J = class extends X {
  constructor() {
    return super(), this.endState = null, this;
  }
};
var Z = class extends _ {
  constructor() {
    return super(), this.stateType = _.BLOCK_END, this.startState = null, this;
  }
};
var Q = class extends _ {
  constructor() {
    return super(), this.stateType = _.LOOP_END, this.loopBackState = null, this;
  }
};
var tt = class extends _ {
  constructor() {
    return super(), this.stateType = _.RULE_START, this.stopState = null, this.isPrecedenceRule = false, this;
  }
};
var et = class extends X {
  constructor() {
    return super(), this.stateType = _.TOKEN_START, this;
  }
};
var nt = class extends X {
  constructor() {
    return super(), this.stateType = _.PLUS_LOOP_BACK, this;
  }
};
var st = class extends _ {
  constructor() {
    return super(), this.stateType = _.STAR_LOOP_BACK, this;
  }
};
var it = class extends X {
  constructor() {
    return super(), this.stateType = _.STAR_LOOP_ENTRY, this.loopBackState = null, this.isPrecedenceDecision = null, this;
  }
};
var rt = class extends J {
  constructor() {
    return super(), this.stateType = _.PLUS_BLOCK_START, this.loopBackState = null, this;
  }
};
var ot = class extends J {
  constructor() {
    return super(), this.stateType = _.STAR_BLOCK_START, this;
  }
};
var at = class extends J {
  constructor() {
    return super(), this.stateType = _.BLOCK_START, this;
  }
};
var lt = class extends A {
  constructor(t2, e2) {
    super(t2), this.label_ = e2, this.label = this.makeLabel(), this.serializationType = A.ATOM;
  }
  makeLabel() {
    const t2 = new E();
    return t2.addOne(this.label_), t2;
  }
  matches(t2, e2, n2) {
    return this.label_ === t2;
  }
  toString() {
    return this.label_;
  }
};
var ht = class extends A {
  constructor(t2, e2, n2) {
    super(t2), this.serializationType = A.RANGE, this.start = e2, this.stop = n2, this.label = this.makeLabel();
  }
  makeLabel() {
    const t2 = new E();
    return t2.addRange(this.start, this.stop), t2;
  }
  matches(t2, e2, n2) {
    return t2 >= this.start && t2 <= this.stop;
  }
  toString() {
    return "'" + String.fromCharCode(this.start) + "'..'" + String.fromCharCode(this.stop) + "'";
  }
};
var ct = class extends A {
  constructor(t2, e2, n2, s2) {
    super(t2), this.serializationType = A.ACTION, this.ruleIndex = e2, this.actionIndex = void 0 === n2 ? -1 : n2, this.isCtxDependent = void 0 !== s2 && s2, this.isEpsilon = true;
  }
  matches(t2, e2, n2) {
    return false;
  }
  toString() {
    return "action_" + this.ruleIndex + ":" + this.actionIndex;
  }
};
var ut = class extends A {
  constructor(t2, e2) {
    super(t2), this.serializationType = A.EPSILON, this.isEpsilon = true, this.outermostPrecedenceReturn = e2;
  }
  matches(t2, e2, n2) {
    return false;
  }
  toString() {
    return "epsilon";
  }
};
var dt = class _dt extends g {
  constructor(t2, e2, n2) {
    super(), this.ruleIndex = void 0 === t2 ? -1 : t2, this.predIndex = void 0 === e2 ? -1 : e2, this.isCtxDependent = void 0 !== n2 && n2;
  }
  evaluate(t2, e2) {
    const n2 = this.isCtxDependent ? e2 : null;
    return t2.sempred(n2, this.ruleIndex, this.predIndex);
  }
  updateHashCode(t2) {
    t2.update(this.ruleIndex, this.predIndex, this.isCtxDependent);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _dt && this.ruleIndex === t2.ruleIndex && this.predIndex === t2.predIndex && this.isCtxDependent === t2.isCtxDependent;
  }
  toString() {
    return "{" + this.ruleIndex + ":" + this.predIndex + "}?";
  }
};
g.NONE = new dt();
var gt = class extends L {
  constructor(t2, e2, n2, s2) {
    super(t2), this.serializationType = A.PREDICATE, this.ruleIndex = e2, this.predIndex = n2, this.isCtxDependent = s2, this.isEpsilon = true;
  }
  matches(t2, e2, n2) {
    return false;
  }
  getPredicate() {
    return new dt(this.ruleIndex, this.predIndex, this.isCtxDependent);
  }
  toString() {
    return "pred_" + this.ruleIndex + ":" + this.predIndex;
  }
};
var pt = class _pt extends g {
  constructor(t2) {
    super(), this.precedence = void 0 === t2 ? 0 : t2;
  }
  evaluate(t2, e2) {
    return t2.precpred(e2, this.precedence);
  }
  evalPrecedence(t2, e2) {
    return t2.precpred(e2, this.precedence) ? g.NONE : null;
  }
  compareTo(t2) {
    return this.precedence - t2.precedence;
  }
  updateHashCode(t2) {
    t2.update(this.precedence);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _pt && this.precedence === t2.precedence;
  }
  toString() {
    return "{" + this.precedence + ">=prec}?";
  }
};
g.PrecedencePredicate = pt;
var ft = class extends L {
  constructor(t2, e2) {
    super(t2), this.serializationType = A.PRECEDENCE, this.precedence = e2, this.isEpsilon = true;
  }
  matches(t2, e2, n2) {
    return false;
  }
  getPredicate() {
    return new pt(this.precedence);
  }
  toString() {
    return this.precedence + " >= _p";
  }
};
var xt = class {
  constructor(t2) {
    void 0 === t2 && (t2 = null), this.readOnly = false, this.verifyATN = null === t2 || t2.verifyATN, this.generateRuleBypassTransitions = null !== t2 && t2.generateRuleBypassTransitions;
  }
};
xt.defaultOptions = new xt(), xt.defaultOptions.readOnly = true;
var Tt = class {
  constructor(t2) {
    this.actionType = t2, this.isPositionDependent = false;
  }
  hashCode() {
    const t2 = new a();
    return this.updateHashCode(t2), t2.finish();
  }
  updateHashCode(t2) {
    t2.update(this.actionType);
  }
  equals(t2) {
    return this === t2;
  }
};
var St = class extends Tt {
  constructor() {
    super(6);
  }
  execute(t2) {
    t2.skip();
  }
  toString() {
    return "skip";
  }
};
St.INSTANCE = new St();
var mt = class _mt extends Tt {
  constructor(t2) {
    super(0), this.channel = t2;
  }
  execute(t2) {
    t2._channel = this.channel;
  }
  updateHashCode(t2) {
    t2.update(this.actionType, this.channel);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _mt && this.channel === t2.channel;
  }
  toString() {
    return "channel(" + this.channel + ")";
  }
};
var Et = class _Et extends Tt {
  constructor(t2, e2) {
    super(1), this.ruleIndex = t2, this.actionIndex = e2, this.isPositionDependent = true;
  }
  execute(t2) {
    t2.action(null, this.ruleIndex, this.actionIndex);
  }
  updateHashCode(t2) {
    t2.update(this.actionType, this.ruleIndex, this.actionIndex);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _Et && this.ruleIndex === t2.ruleIndex && this.actionIndex === t2.actionIndex;
  }
};
var _t = class extends Tt {
  constructor() {
    super(3);
  }
  execute(t2) {
    t2.more();
  }
  toString() {
    return "more";
  }
};
_t.INSTANCE = new _t();
var Ct = class _Ct extends Tt {
  constructor(t2) {
    super(7), this.type = t2;
  }
  execute(t2) {
    t2.type = this.type;
  }
  updateHashCode(t2) {
    t2.update(this.actionType, this.type);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _Ct && this.type === t2.type;
  }
  toString() {
    return "type(" + this.type + ")";
  }
};
var At = class _At extends Tt {
  constructor(t2) {
    super(5), this.mode = t2;
  }
  execute(t2) {
    t2.pushMode(this.mode);
  }
  updateHashCode(t2) {
    t2.update(this.actionType, this.mode);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _At && this.mode === t2.mode;
  }
  toString() {
    return "pushMode(" + this.mode + ")";
  }
};
var Nt = class extends Tt {
  constructor() {
    super(4);
  }
  execute(t2) {
    t2.popMode();
  }
  toString() {
    return "popMode";
  }
};
Nt.INSTANCE = new Nt();
var kt = class _kt extends Tt {
  constructor(t2) {
    super(2), this.mode = t2;
  }
  execute(t2) {
    t2.setMode(this.mode);
  }
  updateHashCode(t2) {
    t2.update(this.actionType, this.mode);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _kt && this.mode === t2.mode;
  }
  toString() {
    return "mode(" + this.mode + ")";
  }
};
function It(t2, e2) {
  const n2 = [];
  return n2[t2 - 1] = e2, n2.map(function(t3) {
    return e2;
  });
}
var yt = class {
  constructor(t2) {
    null == t2 && (t2 = xt.defaultOptions), this.deserializationOptions = t2, this.stateFactories = null, this.actionFactories = null;
  }
  deserialize(t2) {
    const e2 = this.reset(t2);
    this.checkVersion(e2), e2 && this.skipUUID();
    const n2 = this.readATN();
    this.readStates(n2, e2), this.readRules(n2, e2), this.readModes(n2);
    const s2 = [];
    return this.readSets(n2, s2, this.readInt.bind(this)), e2 && this.readSets(n2, s2, this.readInt32.bind(this)), this.readEdges(n2, s2), this.readDecisions(n2), this.readLexerActions(n2, e2), this.markPrecedenceDecisions(n2), this.verifyATN(n2), this.deserializationOptions.generateRuleBypassTransitions && 1 === n2.grammarType && (this.generateRuleBypassTransitions(n2), this.verifyATN(n2)), n2;
  }
  reset(t2) {
    if (3 === (t2.charCodeAt ? t2.charCodeAt(0) : t2[0])) {
      const e2 = function(t3) {
        const e3 = t3.charCodeAt(0);
        return e3 > 1 ? e3 - 2 : e3 + 65534;
      }, n2 = t2.split("").map(e2);
      return n2[0] = t2.charCodeAt(0), this.data = n2, this.pos = 0, true;
    }
    return this.data = t2, this.pos = 0, false;
  }
  skipUUID() {
    let t2 = 0;
    for (; t2++ < 8; ) this.readInt();
  }
  checkVersion(t2) {
    const e2 = this.readInt();
    if (!t2 && 4 !== e2) throw "Could not deserialize ATN with version " + e2 + " (expected 4).";
  }
  readATN() {
    const t2 = this.readInt(), e2 = this.readInt();
    return new j(t2, e2);
  }
  readStates(t2, e2) {
    let n2, s2, i2;
    const r2 = [], o2 = [], a2 = this.readInt();
    for (let n3 = 0; n3 < a2; n3++) {
      const n4 = this.readInt();
      if (n4 === _.INVALID_TYPE) {
        t2.addState(null);
        continue;
      }
      let s3 = this.readInt();
      e2 && 65535 === s3 && (s3 = -1);
      const i3 = this.stateFactory(n4, s3);
      if (n4 === _.LOOP_END) {
        const t3 = this.readInt();
        r2.push([i3, t3]);
      } else if (i3 instanceof J) {
        const t3 = this.readInt();
        o2.push([i3, t3]);
      }
      t2.addState(i3);
    }
    for (n2 = 0; n2 < r2.length; n2++) s2 = r2[n2], s2[0].loopBackState = t2.states[s2[1]];
    for (n2 = 0; n2 < o2.length; n2++) s2 = o2[n2], s2[0].endState = t2.states[s2[1]];
    let l2 = this.readInt();
    for (n2 = 0; n2 < l2; n2++) i2 = this.readInt(), t2.states[i2].nonGreedy = true;
    let h2 = this.readInt();
    for (n2 = 0; n2 < h2; n2++) i2 = this.readInt(), t2.states[i2].isPrecedenceRule = true;
  }
  readRules(t2, e2) {
    let n2;
    const i2 = this.readInt();
    for (0 === t2.grammarType && (t2.ruleToTokenType = It(i2, 0)), t2.ruleToStartState = It(i2, 0), n2 = 0; n2 < i2; n2++) {
      const i3 = this.readInt();
      if (t2.ruleToStartState[n2] = t2.states[i3], 0 === t2.grammarType) {
        let i4 = this.readInt();
        e2 && 65535 === i4 && (i4 = s.EOF), t2.ruleToTokenType[n2] = i4;
      }
    }
    for (t2.ruleToStopState = It(i2, 0), n2 = 0; n2 < t2.states.length; n2++) {
      const e3 = t2.states[n2];
      e3 instanceof C && (t2.ruleToStopState[e3.ruleIndex] = e3, t2.ruleToStartState[e3.ruleIndex].stopState = e3);
    }
  }
  readModes(t2) {
    const e2 = this.readInt();
    for (let n2 = 0; n2 < e2; n2++) {
      let e3 = this.readInt();
      t2.modeToStartState.push(t2.states[e3]);
    }
  }
  readSets(t2, e2, n2) {
    const s2 = this.readInt();
    for (let t3 = 0; t3 < s2; t3++) {
      const t4 = new E();
      e2.push(t4);
      const s3 = this.readInt();
      0 !== this.readInt() && t4.addOne(-1);
      for (let e3 = 0; e3 < s3; e3++) {
        const e4 = n2(), s4 = n2();
        t4.addRange(e4, s4);
      }
    }
  }
  readEdges(t2, e2) {
    let n2, s2, i2, r2, o2;
    const a2 = this.readInt();
    for (n2 = 0; n2 < a2; n2++) {
      const n3 = this.readInt(), s3 = this.readInt(), i3 = this.readInt(), o3 = this.readInt(), a3 = this.readInt(), l2 = this.readInt();
      r2 = this.edgeFactory(t2, i3, n3, s3, o3, a3, l2, e2), t2.states[n3].addTransition(r2);
    }
    for (n2 = 0; n2 < t2.states.length; n2++) for (i2 = t2.states[n2], s2 = 0; s2 < i2.transitions.length; s2++) {
      const e3 = i2.transitions[s2];
      if (!(e3 instanceof N)) continue;
      let n3 = -1;
      t2.ruleToStartState[e3.target.ruleIndex].isPrecedenceRule && 0 === e3.precedence && (n3 = e3.target.ruleIndex), r2 = new ut(e3.followState, n3), t2.ruleToStopState[e3.target.ruleIndex].addTransition(r2);
    }
    for (n2 = 0; n2 < t2.states.length; n2++) {
      if (i2 = t2.states[n2], i2 instanceof J) {
        if (null === i2.endState) throw "IllegalState";
        if (null !== i2.endState.startState) throw "IllegalState";
        i2.endState.startState = i2;
      }
      if (i2 instanceof nt) for (s2 = 0; s2 < i2.transitions.length; s2++) o2 = i2.transitions[s2].target, o2 instanceof rt && (o2.loopBackState = i2);
      else if (i2 instanceof st) for (s2 = 0; s2 < i2.transitions.length; s2++) o2 = i2.transitions[s2].target, o2 instanceof it && (o2.loopBackState = i2);
    }
  }
  readDecisions(t2) {
    const e2 = this.readInt();
    for (let n2 = 0; n2 < e2; n2++) {
      const e3 = this.readInt(), s2 = t2.states[e3];
      t2.decisionToState.push(s2), s2.decision = n2;
    }
  }
  readLexerActions(t2, e2) {
    if (0 === t2.grammarType) {
      const n2 = this.readInt();
      t2.lexerActions = It(n2, null);
      for (let s2 = 0; s2 < n2; s2++) {
        const n3 = this.readInt();
        let i2 = this.readInt();
        e2 && 65535 === i2 && (i2 = -1);
        let r2 = this.readInt();
        e2 && 65535 === r2 && (r2 = -1), t2.lexerActions[s2] = this.lexerActionFactory(n3, i2, r2);
      }
    }
  }
  generateRuleBypassTransitions(t2) {
    let e2;
    const n2 = t2.ruleToStartState.length;
    for (e2 = 0; e2 < n2; e2++) t2.ruleToTokenType[e2] = t2.maxTokenType + e2 + 1;
    for (e2 = 0; e2 < n2; e2++) this.generateRuleBypassTransition(t2, e2);
  }
  generateRuleBypassTransition(t2, e2) {
    let n2, s2;
    const i2 = new at();
    i2.ruleIndex = e2, t2.addState(i2);
    const r2 = new Z();
    r2.ruleIndex = e2, t2.addState(r2), i2.endState = r2, t2.defineDecisionState(i2), r2.startState = i2;
    let o2 = null, a2 = null;
    if (t2.ruleToStartState[e2].isPrecedenceRule) {
      for (a2 = null, n2 = 0; n2 < t2.states.length; n2++) if (s2 = t2.states[n2], this.stateIsEndStateFor(s2, e2)) {
        a2 = s2, o2 = s2.loopBackState.transitions[0];
        break;
      }
      if (null === o2) throw "Couldn't identify final state of the precedence rule prefix section.";
    } else a2 = t2.ruleToStopState[e2];
    for (n2 = 0; n2 < t2.states.length; n2++) {
      s2 = t2.states[n2];
      for (let t3 = 0; t3 < s2.transitions.length; t3++) {
        const e3 = s2.transitions[t3];
        e3 !== o2 && e3.target === a2 && (e3.target = r2);
      }
    }
    const l2 = t2.ruleToStartState[e2], h2 = l2.transitions.length;
    for (; h2 > 0; ) i2.addTransition(l2.transitions[h2 - 1]), l2.transitions = l2.transitions.slice(-1);
    t2.ruleToStartState[e2].addTransition(new ut(i2)), r2.addTransition(new ut(a2));
    const c2 = new $();
    t2.addState(c2), c2.addTransition(new lt(r2, t2.ruleToTokenType[e2])), i2.addTransition(new ut(c2));
  }
  stateIsEndStateFor(t2, e2) {
    if (t2.ruleIndex !== e2) return null;
    if (!(t2 instanceof it)) return null;
    const n2 = t2.transitions[t2.transitions.length - 1].target;
    return n2 instanceof Q && n2.epsilonOnlyTransitions && n2.transitions[0].target instanceof C ? t2 : null;
  }
  markPrecedenceDecisions(t2) {
    for (let e2 = 0; e2 < t2.states.length; e2++) {
      const n2 = t2.states[e2];
      if (n2 instanceof it && t2.ruleToStartState[n2.ruleIndex].isPrecedenceRule) {
        const t3 = n2.transitions[n2.transitions.length - 1].target;
        t3 instanceof Q && t3.epsilonOnlyTransitions && t3.transitions[0].target instanceof C && (n2.isPrecedenceDecision = true);
      }
    }
  }
  verifyATN(t2) {
    if (this.deserializationOptions.verifyATN) for (let e2 = 0; e2 < t2.states.length; e2++) {
      const n2 = t2.states[e2];
      if (null !== n2) if (this.checkCondition(n2.epsilonOnlyTransitions || n2.transitions.length <= 1), n2 instanceof rt) this.checkCondition(null !== n2.loopBackState);
      else if (n2 instanceof it) if (this.checkCondition(null !== n2.loopBackState), this.checkCondition(2 === n2.transitions.length), n2.transitions[0].target instanceof ot) this.checkCondition(n2.transitions[1].target instanceof Q), this.checkCondition(!n2.nonGreedy);
      else {
        if (!(n2.transitions[0].target instanceof Q)) throw "IllegalState";
        this.checkCondition(n2.transitions[1].target instanceof ot), this.checkCondition(n2.nonGreedy);
      }
      else n2 instanceof st ? (this.checkCondition(1 === n2.transitions.length), this.checkCondition(n2.transitions[0].target instanceof it)) : n2 instanceof Q ? this.checkCondition(null !== n2.loopBackState) : n2 instanceof tt ? this.checkCondition(null !== n2.stopState) : n2 instanceof J ? this.checkCondition(null !== n2.endState) : n2 instanceof Z ? this.checkCondition(null !== n2.startState) : n2 instanceof X ? this.checkCondition(n2.transitions.length <= 1 || n2.decision >= 0) : this.checkCondition(n2.transitions.length <= 1 || n2 instanceof C);
    }
  }
  checkCondition(t2, e2) {
    if (!t2) throw null == e2 && (e2 = "IllegalState"), e2;
  }
  readInt() {
    return this.data[this.pos++];
  }
  readInt32() {
    return this.readInt() | this.readInt() << 16;
  }
  edgeFactory(t2, e2, n2, i2, r2, o2, a2, l2) {
    const h2 = t2.states[i2];
    switch (e2) {
      case A.EPSILON:
        return new ut(h2);
      case A.RANGE:
        return new ht(h2, 0 !== a2 ? s.EOF : r2, o2);
      case A.RULE:
        return new N(t2.states[r2], o2, a2, h2);
      case A.PREDICATE:
        return new gt(h2, r2, o2, 0 !== a2);
      case A.PRECEDENCE:
        return new ft(h2, r2);
      case A.ATOM:
        return new lt(h2, 0 !== a2 ? s.EOF : r2);
      case A.ACTION:
        return new ct(h2, r2, o2, 0 !== a2);
      case A.SET:
        return new k(h2, l2[r2]);
      case A.NOT_SET:
        return new I(h2, l2[r2]);
      case A.WILDCARD:
        return new y(h2);
      default:
        throw "The specified transition type: " + e2 + " is not valid.";
    }
  }
  stateFactory(t2, e2) {
    if (null === this.stateFactories) {
      const t3 = [];
      t3[_.INVALID_TYPE] = null, t3[_.BASIC] = () => new $(), t3[_.RULE_START] = () => new tt(), t3[_.BLOCK_START] = () => new at(), t3[_.PLUS_BLOCK_START] = () => new rt(), t3[_.STAR_BLOCK_START] = () => new ot(), t3[_.TOKEN_START] = () => new et(), t3[_.RULE_STOP] = () => new C(), t3[_.BLOCK_END] = () => new Z(), t3[_.STAR_LOOP_BACK] = () => new st(), t3[_.STAR_LOOP_ENTRY] = () => new it(), t3[_.PLUS_LOOP_BACK] = () => new nt(), t3[_.LOOP_END] = () => new Q(), this.stateFactories = t3;
    }
    if (t2 > this.stateFactories.length || null === this.stateFactories[t2]) throw "The specified state type " + t2 + " is not valid.";
    {
      const n2 = this.stateFactories[t2]();
      if (null !== n2) return n2.ruleIndex = e2, n2;
    }
  }
  lexerActionFactory(t2, e2, n2) {
    if (null === this.actionFactories) {
      const t3 = [];
      t3[0] = (t4, e3) => new mt(t4), t3[1] = (t4, e3) => new Et(t4, e3), t3[2] = (t4, e3) => new kt(t4), t3[3] = (t4, e3) => _t.INSTANCE, t3[4] = (t4, e3) => Nt.INSTANCE, t3[5] = (t4, e3) => new At(t4), t3[6] = (t4, e3) => St.INSTANCE, t3[7] = (t4, e3) => new Ct(t4), this.actionFactories = t3;
    }
    if (t2 > this.actionFactories.length || null === this.actionFactories[t2]) throw "The specified lexer action type " + t2 + " is not valid.";
    return this.actionFactories[t2](e2, n2);
  }
};
var Lt = class {
  syntaxError(t2, e2, n2, s2, i2, r2) {
  }
  reportAmbiguity(t2, e2, n2, s2, i2, r2, o2) {
  }
  reportAttemptingFullContext(t2, e2, n2, s2, i2, r2) {
  }
  reportContextSensitivity(t2, e2, n2, s2, i2, r2) {
  }
};
var Ot = class extends Lt {
  constructor() {
    super();
  }
  syntaxError(t2, e2, n2, s2, i2, r2) {
    console.error("line " + n2 + ":" + s2 + " " + i2);
  }
};
Ot.INSTANCE = new Ot();
var Rt = class extends Lt {
  constructor(t2) {
    if (super(), null === t2) throw "delegates";
    return this.delegates = t2, this;
  }
  syntaxError(t2, e2, n2, s2, i2, r2) {
    this.delegates.map((o2) => o2.syntaxError(t2, e2, n2, s2, i2, r2));
  }
  reportAmbiguity(t2, e2, n2, s2, i2, r2, o2) {
    this.delegates.map((a2) => a2.reportAmbiguity(t2, e2, n2, s2, i2, r2, o2));
  }
  reportAttemptingFullContext(t2, e2, n2, s2, i2, r2) {
    this.delegates.map((o2) => o2.reportAttemptingFullContext(t2, e2, n2, s2, i2, r2));
  }
  reportContextSensitivity(t2, e2, n2, s2, i2, r2) {
    this.delegates.map((o2) => o2.reportContextSensitivity(t2, e2, n2, s2, i2, r2));
  }
};
var wt = class {
  constructor() {
    this._listeners = [Ot.INSTANCE], this._interp = null, this._stateNumber = -1;
  }
  checkVersion(t2) {
    const e2 = "4.13.2";
    e2 !== t2 && console.log("ANTLR runtime and generated code versions disagree: " + e2 + "!=" + t2);
  }
  addErrorListener(t2) {
    this._listeners.push(t2);
  }
  removeErrorListeners() {
    this._listeners = [];
  }
  getLiteralNames() {
    return Object.getPrototypeOf(this).constructor.literalNames || [];
  }
  getSymbolicNames() {
    return Object.getPrototypeOf(this).constructor.symbolicNames || [];
  }
  getTokenNames() {
    if (!this.tokenNames) {
      const t2 = this.getLiteralNames(), e2 = this.getSymbolicNames(), n2 = t2.length > e2.length ? t2.length : e2.length;
      this.tokenNames = [];
      for (let s2 = 0; s2 < n2; s2++) this.tokenNames[s2] = t2[s2] || e2[s2] || "<INVALID";
    }
    return this.tokenNames;
  }
  getTokenTypeMap() {
    const t2 = this.getTokenNames();
    if (null === t2) throw "The current recognizer does not provide a list of token names.";
    let e2 = this.tokenTypeMapCache[t2];
    return void 0 === e2 && (e2 = t2.reduce(function(t3, e3, n2) {
      t3[e3] = n2;
    }), e2.EOF = s.EOF, this.tokenTypeMapCache[t2] = e2), e2;
  }
  getRuleIndexMap() {
    const t2 = this.ruleNames;
    if (null === t2) throw "The current recognizer does not provide a list of rule names.";
    let e2 = this.ruleIndexMapCache[t2];
    return void 0 === e2 && (e2 = t2.reduce(function(t3, e3, n2) {
      t3[e3] = n2;
    }), this.ruleIndexMapCache[t2] = e2), e2;
  }
  getTokenType(t2) {
    const e2 = this.getTokenTypeMap()[t2];
    return void 0 !== e2 ? e2 : s.INVALID_TYPE;
  }
  getErrorHeader(t2) {
    return "line " + t2.getOffendingToken().line + ":" + t2.getOffendingToken().column;
  }
  getTokenErrorDisplay(t2) {
    if (null === t2) return "<no token>";
    let e2 = t2.text;
    return null === e2 && (e2 = t2.type === s.EOF ? "<EOF>" : "<" + t2.type + ">"), e2 = e2.replace("\n", "\\n").replace("\r", "\\r").replace("	", "\\t"), "'" + e2 + "'";
  }
  getErrorListenerDispatch() {
    return console.warn("Calling deprecated method in Recognizer class: getErrorListenerDispatch()"), this.getErrorListener();
  }
  getErrorListener() {
    return new Rt(this._listeners);
  }
  sempred(t2, e2, n2) {
    return true;
  }
  precpred(t2, e2) {
    return true;
  }
  get atn() {
    return this._interp.atn;
  }
  get state() {
    return this._stateNumber;
  }
  set state(t2) {
    this._stateNumber = t2;
  }
};
wt.tokenTypeMapCache = {}, wt.ruleIndexMapCache = {};
var vt = class _vt extends s {
  constructor(t2, e2, n2, i2, r2) {
    super(), this.source = void 0 !== t2 ? t2 : _vt.EMPTY_SOURCE, this.type = void 0 !== e2 ? e2 : null, this.channel = void 0 !== n2 ? n2 : s.DEFAULT_CHANNEL, this.start = void 0 !== i2 ? i2 : -1, this.stop = void 0 !== r2 ? r2 : -1, this.tokenIndex = -1, null !== this.source[0] ? (this.line = t2[0].line, this.column = t2[0].column) : this.column = -1;
  }
  clone() {
    const t2 = new _vt(this.source, this.type, this.channel, this.start, this.stop);
    return t2.tokenIndex = this.tokenIndex, t2.line = this.line, t2.column = this.column, t2.text = this.text, t2;
  }
  cloneWithType(t2) {
    const e2 = new _vt(this.source, t2, this.channel, this.start, this.stop);
    return e2.tokenIndex = this.tokenIndex, e2.line = this.line, e2.column = this.column, t2 === s.EOF && (e2.text = ""), e2;
  }
  toString() {
    let t2 = this.text;
    return t2 = null !== t2 ? t2.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") : "<no text>", "[@" + this.tokenIndex + "," + this.start + ":" + this.stop + "='" + t2 + "',<" + this.type + ">" + (this.channel > 0 ? ",channel=" + this.channel : "") + "," + this.line + ":" + this.column + "]";
  }
  get text() {
    if (null !== this._text) return this._text;
    const t2 = this.getInputStream();
    if (null === t2) return null;
    const e2 = t2.size;
    return this.start < e2 && this.stop < e2 ? t2.getText(this.start, this.stop) : "<EOF>";
  }
  set text(t2) {
    this._text = t2;
  }
};
vt.EMPTY_SOURCE = [null, null];
var Pt = class {
};
var bt = class extends Pt {
  constructor(t2) {
    super(), this.copyText = void 0 !== t2 && t2;
  }
  create(t2, e2, n2, s2, i2, r2, o2, a2) {
    const l2 = new vt(t2, e2, s2, i2, r2);
    return l2.line = o2, l2.column = a2, null !== n2 ? l2.text = n2 : this.copyText && null !== t2[1] && (l2.text = t2[1].getText(i2, r2)), l2;
  }
  createThin(t2, e2) {
    const n2 = new vt(null, t2);
    return n2.text = e2, n2;
  }
};
bt.DEFAULT = new bt();
var Dt = class _Dt extends Error {
  constructor(t2) {
    super(t2.message), Error.captureStackTrace && Error.captureStackTrace(this, _Dt), this.message = t2.message, this.recognizer = t2.recognizer, this.input = t2.input, this.ctx = t2.ctx, this.offendingToken = null, this.offendingState = -1, null !== this.recognizer && (this.offendingState = this.recognizer.state);
  }
  getExpectedTokens() {
    return null !== this.recognizer ? this.recognizer.atn.getExpectedTokens(this.offendingState, this.ctx) : null;
  }
  toString() {
    return this.message;
  }
};
var Ft = class extends Dt {
  constructor(t2, e2, n2, s2) {
    super({ message: "", recognizer: t2, input: e2, ctx: null }), this.startIndex = n2, this.deadEndConfigs = s2;
  }
  toString() {
    let t2 = "";
    return this.startIndex >= 0 && this.startIndex < this.input.size && (t2 = this.input.getText(new m(this.startIndex, this.startIndex))), "LexerNoViableAltException" + t2;
  }
};
var Mt = class _Mt extends wt {
  constructor(t2) {
    super(), this._input = t2, this._factory = bt.DEFAULT, this._tokenFactorySourcePair = [this, t2], this._interp = null, this._token = null, this._tokenStartCharIndex = -1, this._tokenStartLine = -1, this._tokenStartColumn = -1, this._hitEOF = false, this._channel = s.DEFAULT_CHANNEL, this._type = s.INVALID_TYPE, this._modeStack = [], this._mode = _Mt.DEFAULT_MODE, this._text = null;
  }
  reset() {
    null !== this._input && this._input.seek(0), this._token = null, this._type = s.INVALID_TYPE, this._channel = s.DEFAULT_CHANNEL, this._tokenStartCharIndex = -1, this._tokenStartColumn = -1, this._tokenStartLine = -1, this._text = null, this._hitEOF = false, this._mode = _Mt.DEFAULT_MODE, this._modeStack = [], this._interp.reset();
  }
  nextToken() {
    if (null === this._input) throw "nextToken requires a non-null input stream.";
    const t2 = this._input.mark();
    try {
      for (; ; ) {
        if (this._hitEOF) return this.emitEOF(), this._token;
        this._token = null, this._channel = s.DEFAULT_CHANNEL, this._tokenStartCharIndex = this._input.index, this._tokenStartColumn = this._interp.column, this._tokenStartLine = this._interp.line, this._text = null;
        let t3 = false;
        for (; ; ) {
          this._type = s.INVALID_TYPE;
          let e2 = _Mt.SKIP;
          try {
            e2 = this._interp.match(this._input, this._mode);
          } catch (t4) {
            if (!(t4 instanceof Dt)) throw console.log(t4.stack), t4;
            this.notifyListeners(t4), this.recover(t4);
          }
          if (this._input.LA(1) === s.EOF && (this._hitEOF = true), this._type === s.INVALID_TYPE && (this._type = e2), this._type === _Mt.SKIP) {
            t3 = true;
            break;
          }
          if (this._type !== _Mt.MORE) break;
        }
        if (!t3) return null === this._token && this.emit(), this._token;
      }
    } finally {
      this._input.release(t2);
    }
  }
  skip() {
    this._type = _Mt.SKIP;
  }
  more() {
    this._type = _Mt.MORE;
  }
  mode(t2) {
    console.warn("Calling deprecated method in Lexer class: mode(...)"), this.setMode(t2);
  }
  setMode(t2) {
    this._mode = t2;
  }
  getMode() {
    return this._mode;
  }
  getModeStack() {
    return this._modeStack;
  }
  pushMode(t2) {
    this._interp.debug && console.log("pushMode " + t2), this._modeStack.push(this._mode), this.setMode(t2);
  }
  popMode() {
    if (0 === this._modeStack.length) throw "Empty Stack";
    return this._interp.debug && console.log("popMode back to " + this._modeStack.slice(0, -1)), this.setMode(this._modeStack.pop()), this._mode;
  }
  emitToken(t2) {
    this._token = t2;
  }
  emit() {
    const t2 = this._factory.create(this._tokenFactorySourcePair, this._type, this._text, this._channel, this._tokenStartCharIndex, this.getCharIndex() - 1, this._tokenStartLine, this._tokenStartColumn);
    return this.emitToken(t2), t2;
  }
  emitEOF() {
    const t2 = this.column, e2 = this.line, n2 = this._factory.create(this._tokenFactorySourcePair, s.EOF, null, s.DEFAULT_CHANNEL, this._input.index, this._input.index - 1, e2, t2);
    return this.emitToken(n2), n2;
  }
  getCharIndex() {
    return this._input.index;
  }
  getAllTokens() {
    const t2 = [];
    let e2 = this.nextToken();
    for (; e2.type !== s.EOF; ) t2.push(e2), e2 = this.nextToken();
    return t2;
  }
  notifyListeners(t2) {
    const e2 = this._tokenStartCharIndex, n2 = this._input.index, s2 = this._input.getText(e2, n2), i2 = "token recognition error at: '" + this.getErrorDisplay(s2) + "'";
    this.getErrorListener().syntaxError(this, null, this._tokenStartLine, this._tokenStartColumn, i2, t2);
  }
  getErrorDisplay(t2) {
    const e2 = [];
    for (let n2 = 0; n2 < t2.length; n2++) e2.push(t2[n2]);
    return e2.join("");
  }
  getErrorDisplayForChar(t2) {
    return t2.charCodeAt(0) === s.EOF ? "<EOF>" : "\n" === t2 ? "\\n" : "	" === t2 ? "\\t" : "\r" === t2 ? "\\r" : t2;
  }
  getCharErrorDisplay(t2) {
    return "'" + this.getErrorDisplayForChar(t2) + "'";
  }
  recover(t2) {
    this._input.LA(1) !== s.EOF && (t2 instanceof Ft ? this._interp.consume(this._input) : this._input.consume());
  }
  get inputStream() {
    return this._input;
  }
  set inputStream(t2) {
    this._input = null, this._tokenFactorySourcePair = [this, this._input], this.reset(), this._input = t2, this._tokenFactorySourcePair = [this, this._input];
  }
  get sourceName() {
    return this._input.sourceName;
  }
  get type() {
    return this._type;
  }
  set type(t2) {
    this._type = t2;
  }
  get line() {
    return this._interp.line;
  }
  set line(t2) {
    this._interp.line = t2;
  }
  get column() {
    return this._interp.column;
  }
  set column(t2) {
    this._interp.column = t2;
  }
  get text() {
    return null !== this._text ? this._text : this._interp.getText(this._input);
  }
  set text(t2) {
    this._text = t2;
  }
};
function Ut(t2) {
  return t2.hashCodeForConfigSet();
}
function Bt(t2, e2) {
  return t2 === e2 || null !== t2 && null !== e2 && t2.equalsForConfigSet(e2);
}
Mt.DEFAULT_MODE = 0, Mt.MORE = -2, Mt.SKIP = -3, Mt.DEFAULT_TOKEN_CHANNEL = s.DEFAULT_CHANNEL, Mt.HIDDEN = s.HIDDEN_CHANNEL, Mt.MIN_CHAR_VALUE = 0, Mt.MAX_CHAR_VALUE = 1114111;
var zt = class _zt {
  constructor(t2) {
    this.configLookup = new d(Ut, Bt), this.fullCtx = void 0 === t2 || t2, this.readOnly = false, this.configs = [], this.uniqueAlt = 0, this.conflictingAlts = null, this.hasSemanticContext = false, this.dipsIntoOuterContext = false, this.cachedHashCode = -1;
  }
  add(t2, e2) {
    if (void 0 === e2 && (e2 = null), this.readOnly) throw "This set is readonly";
    t2.semanticContext !== g.NONE && (this.hasSemanticContext = true), t2.reachesIntoOuterContext > 0 && (this.dipsIntoOuterContext = true);
    const n2 = this.configLookup.getOrAdd(t2);
    if (n2 === t2) return this.cachedHashCode = -1, this.configs.push(t2), true;
    const s2 = !this.fullCtx, i2 = Y(n2.context, t2.context, s2, e2);
    return n2.reachesIntoOuterContext = Math.max(n2.reachesIntoOuterContext, t2.reachesIntoOuterContext), t2.precedenceFilterSuppressed && (n2.precedenceFilterSuppressed = true), n2.context = i2, true;
  }
  getStates() {
    const t2 = new d();
    for (let e2 = 0; e2 < this.configs.length; e2++) t2.add(this.configs[e2].state);
    return t2;
  }
  getPredicates() {
    const t2 = [];
    for (let e2 = 0; e2 < this.configs.length; e2++) {
      const n2 = this.configs[e2].semanticContext;
      n2 !== g.NONE && t2.push(n2.semanticContext);
    }
    return t2;
  }
  optimizeConfigs(t2) {
    if (this.readOnly) throw "This set is readonly";
    if (0 !== this.configLookup.length) for (let e2 = 0; e2 < this.configs.length; e2++) {
      const n2 = this.configs[e2];
      n2.context = t2.getCachedContext(n2.context);
    }
  }
  addAll(t2) {
    for (let e2 = 0; e2 < t2.length; e2++) this.add(t2[e2]);
    return false;
  }
  equals(t2) {
    return this === t2 || t2 instanceof _zt && i(this.configs, t2.configs) && this.fullCtx === t2.fullCtx && this.uniqueAlt === t2.uniqueAlt && this.conflictingAlts === t2.conflictingAlts && this.hasSemanticContext === t2.hasSemanticContext && this.dipsIntoOuterContext === t2.dipsIntoOuterContext;
  }
  hashCode() {
    const t2 = new a();
    return t2.update(this.configs), t2.finish();
  }
  updateHashCode(t2) {
    this.readOnly ? (-1 === this.cachedHashCode && (this.cachedHashCode = this.hashCode()), t2.update(this.cachedHashCode)) : t2.update(this.hashCode());
  }
  isEmpty() {
    return 0 === this.configs.length;
  }
  contains(t2) {
    if (null === this.configLookup) throw "This method is not implemented for readonly sets.";
    return this.configLookup.contains(t2);
  }
  containsFast(t2) {
    if (null === this.configLookup) throw "This method is not implemented for readonly sets.";
    return this.configLookup.containsFast(t2);
  }
  clear() {
    if (this.readOnly) throw "This set is readonly";
    this.configs = [], this.cachedHashCode = -1, this.configLookup = new d();
  }
  setReadonly(t2) {
    this.readOnly = t2, t2 && (this.configLookup = null);
  }
  toString() {
    return u(this.configs) + (this.hasSemanticContext ? ",hasSemanticContext=" + this.hasSemanticContext : "") + (this.uniqueAlt !== j.INVALID_ALT_NUMBER ? ",uniqueAlt=" + this.uniqueAlt : "") + (null !== this.conflictingAlts ? ",conflictingAlts=" + this.conflictingAlts : "") + (this.dipsIntoOuterContext ? ",dipsIntoOuterContext" : "");
  }
  get items() {
    return this.configs;
  }
  get length() {
    return this.configs.length;
  }
};
var Vt = class _Vt {
  constructor(t2, e2) {
    return null === t2 && (t2 = -1), null === e2 && (e2 = new zt()), this.stateNumber = t2, this.configs = e2, this.edges = null, this.isAcceptState = false, this.prediction = 0, this.lexerActionExecutor = null, this.requiresFullContext = false, this.predicates = null, this;
  }
  getAltSet() {
    const t2 = new d();
    if (null !== this.configs) for (let e2 = 0; e2 < this.configs.length; e2++) {
      const n2 = this.configs[e2];
      t2.add(n2.alt);
    }
    return 0 === t2.length ? null : t2;
  }
  equals(t2) {
    return this === t2 || t2 instanceof _Vt && this.configs.equals(t2.configs);
  }
  toString() {
    let t2 = this.stateNumber + ":" + this.configs;
    return this.isAcceptState && (t2 += "=>", null !== this.predicates ? t2 += this.predicates : t2 += this.prediction), t2;
  }
  hashCode() {
    const t2 = new a();
    return t2.update(this.configs), t2.finish();
  }
};
var qt = class {
  constructor(t2, e2) {
    return this.atn = t2, this.sharedContextCache = e2, this;
  }
  getCachedContext(t2) {
    if (null === this.sharedContextCache) return t2;
    const e2 = new q();
    return K(t2, this.sharedContextCache, e2);
  }
};
qt.ERROR = new Vt(2147483647, new zt());
var Ht = class extends zt {
  constructor() {
    super(), this.configLookup = new d();
  }
};
var Kt = class _Kt extends S {
  constructor(t2, e2) {
    super(t2, e2);
    const n2 = t2.lexerActionExecutor || null;
    return this.lexerActionExecutor = n2 || (null !== e2 ? e2.lexerActionExecutor : null), this.passedThroughNonGreedyDecision = null !== e2 && this.checkNonGreedyDecision(e2, this.state), this.hashCodeForConfigSet = _Kt.prototype.hashCode, this.equalsForConfigSet = _Kt.prototype.equals, this;
  }
  updateHashCode(t2) {
    t2.update(this.state.stateNumber, this.alt, this.context, this.semanticContext, this.passedThroughNonGreedyDecision, this.lexerActionExecutor);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _Kt && this.passedThroughNonGreedyDecision === t2.passedThroughNonGreedyDecision && (this.lexerActionExecutor ? this.lexerActionExecutor.equals(t2.lexerActionExecutor) : !t2.lexerActionExecutor) && super.equals(t2);
  }
  checkNonGreedyDecision(t2, e2) {
    return t2.passedThroughNonGreedyDecision || e2 instanceof X && e2.nonGreedy;
  }
};
var Yt = class _Yt extends Tt {
  constructor(t2, e2) {
    super(e2.actionType), this.offset = t2, this.action = e2, this.isPositionDependent = true;
  }
  execute(t2) {
    this.action.execute(t2);
  }
  updateHashCode(t2) {
    t2.update(this.actionType, this.offset, this.action);
  }
  equals(t2) {
    return this === t2 || t2 instanceof _Yt && this.offset === t2.offset && this.action === t2.action;
  }
};
var Gt = class _Gt {
  constructor(t2) {
    return this.lexerActions = null === t2 ? [] : t2, this.cachedHashCode = a.hashStuff(t2), this;
  }
  fixOffsetBeforeMatch(t2) {
    let e2 = null;
    for (let n2 = 0; n2 < this.lexerActions.length; n2++) !this.lexerActions[n2].isPositionDependent || this.lexerActions[n2] instanceof Yt || (null === e2 && (e2 = this.lexerActions.concat([])), e2[n2] = new Yt(t2, this.lexerActions[n2]));
    return null === e2 ? this : new _Gt(e2);
  }
  execute(t2, e2, n2) {
    let s2 = false;
    const i2 = e2.index;
    try {
      for (let r2 = 0; r2 < this.lexerActions.length; r2++) {
        let o2 = this.lexerActions[r2];
        if (o2 instanceof Yt) {
          const t3 = o2.offset;
          e2.seek(n2 + t3), o2 = o2.action, s2 = n2 + t3 !== i2;
        } else o2.isPositionDependent && (e2.seek(i2), s2 = false);
        o2.execute(t2);
      }
    } finally {
      s2 && e2.seek(i2);
    }
  }
  hashCode() {
    return this.cachedHashCode;
  }
  updateHashCode(t2) {
    t2.update(this.cachedHashCode);
  }
  equals(t2) {
    if (this === t2) return true;
    if (t2 instanceof _Gt) {
      if (this.cachedHashCode != t2.cachedHashCode) return false;
      if (this.lexerActions.length != t2.lexerActions.length) return false;
      {
        const e2 = this.lexerActions.length;
        for (let n2 = 0; n2 < e2; ++n2) if (!this.lexerActions[n2].equals(t2.lexerActions[n2])) return false;
        return true;
      }
    }
    return false;
  }
  static append(t2, e2) {
    if (null === t2) return new _Gt([e2]);
    const n2 = t2.lexerActions.concat([e2]);
    return new _Gt(n2);
  }
};
function Wt(t2) {
  t2.index = -1, t2.line = 0, t2.column = -1, t2.dfaState = null;
}
var jt = class {
  constructor() {
    Wt(this);
  }
  reset() {
    Wt(this);
  }
};
var $t = class _$t extends qt {
  constructor(t2, e2, n2, s2) {
    super(e2, s2), this.decisionToDFA = n2, this.recog = t2, this.startIndex = -1, this.line = 1, this.column = 0, this.mode = Mt.DEFAULT_MODE, this.prevAccept = new jt();
  }
  copyState(t2) {
    this.column = t2.column, this.line = t2.line, this.mode = t2.mode, this.startIndex = t2.startIndex;
  }
  match(t2, e2) {
    this.mode = e2;
    const n2 = t2.mark();
    try {
      this.startIndex = t2.index, this.prevAccept.reset();
      const n3 = this.decisionToDFA[e2];
      return null === n3.s0 ? this.matchATN(t2) : this.execATN(t2, n3.s0);
    } finally {
      t2.release(n2);
    }
  }
  reset() {
    this.prevAccept.reset(), this.startIndex = -1, this.line = 1, this.column = 0, this.mode = Mt.DEFAULT_MODE;
  }
  matchATN(t2) {
    const e2 = this.atn.modeToStartState[this.mode];
    _$t.debug && console.log("matchATN mode " + this.mode + " start: " + e2);
    const n2 = this.mode, s2 = this.computeStartState(t2, e2), i2 = s2.hasSemanticContext;
    s2.hasSemanticContext = false;
    const r2 = this.addDFAState(s2);
    i2 || (this.decisionToDFA[this.mode].s0 = r2);
    const o2 = this.execATN(t2, r2);
    return _$t.debug && console.log("DFA after matchATN: " + this.decisionToDFA[n2].toLexerString()), o2;
  }
  execATN(t2, e2) {
    _$t.debug && console.log("start state closure=" + e2.configs), e2.isAcceptState && this.captureSimState(this.prevAccept, t2, e2);
    let n2 = t2.LA(1), i2 = e2;
    for (; ; ) {
      _$t.debug && console.log("execATN loop starting closure: " + i2.configs);
      let e3 = this.getExistingTargetState(i2, n2);
      if (null === e3 && (e3 = this.computeTargetState(t2, i2, n2)), e3 === qt.ERROR) break;
      if (n2 !== s.EOF && this.consume(t2), e3.isAcceptState && (this.captureSimState(this.prevAccept, t2, e3), n2 === s.EOF)) break;
      n2 = t2.LA(1), i2 = e3;
    }
    return this.failOrAccept(this.prevAccept, t2, i2.configs, n2);
  }
  getExistingTargetState(t2, e2) {
    if (null === t2.edges || e2 < _$t.MIN_DFA_EDGE || e2 > _$t.MAX_DFA_EDGE) return null;
    let n2 = t2.edges[e2 - _$t.MIN_DFA_EDGE];
    return void 0 === n2 && (n2 = null), _$t.debug && null !== n2 && console.log("reuse state " + t2.stateNumber + " edge to " + n2.stateNumber), n2;
  }
  computeTargetState(t2, e2, n2) {
    const s2 = new Ht();
    return this.getReachableConfigSet(t2, e2.configs, s2, n2), 0 === s2.items.length ? (s2.hasSemanticContext || this.addDFAEdge(e2, n2, qt.ERROR), qt.ERROR) : this.addDFAEdge(e2, n2, null, s2);
  }
  failOrAccept(t2, e2, n2, i2) {
    if (null !== this.prevAccept.dfaState) {
      const n3 = t2.dfaState.lexerActionExecutor;
      return this.accept(e2, n3, this.startIndex, t2.index, t2.line, t2.column), t2.dfaState.prediction;
    }
    if (i2 === s.EOF && e2.index === this.startIndex) return s.EOF;
    throw new Ft(this.recog, e2, this.startIndex, n2);
  }
  getReachableConfigSet(t2, e2, n2, i2) {
    let r2 = j.INVALID_ALT_NUMBER;
    for (let o2 = 0; o2 < e2.items.length; o2++) {
      const a2 = e2.items[o2], l2 = a2.alt === r2;
      if (!l2 || !a2.passedThroughNonGreedyDecision) {
        _$t.debug && console.log("testing %s at %s\n", this.getTokenName(i2), a2.toString(this.recog, true));
        for (let e3 = 0; e3 < a2.state.transitions.length; e3++) {
          const o3 = a2.state.transitions[e3], h2 = this.getReachableTarget(o3, i2);
          if (null !== h2) {
            let e4 = a2.lexerActionExecutor;
            null !== e4 && (e4 = e4.fixOffsetBeforeMatch(t2.index - this.startIndex));
            const o4 = i2 === s.EOF, c2 = new Kt({ state: h2, lexerActionExecutor: e4 }, a2);
            this.closure(t2, c2, n2, l2, true, o4) && (r2 = a2.alt);
          }
        }
      }
    }
  }
  accept(t2, e2, n2, s2, i2, r2) {
    _$t.debug && console.log("ACTION %s\n", e2), t2.seek(s2), this.line = i2, this.column = r2, null !== e2 && null !== this.recog && e2.execute(this.recog, t2, n2);
  }
  getReachableTarget(t2, e2) {
    return t2.matches(e2, 0, Mt.MAX_CHAR_VALUE) ? t2.target : null;
  }
  computeStartState(t2, e2) {
    const n2 = U.EMPTY, s2 = new Ht();
    for (let i2 = 0; i2 < e2.transitions.length; i2++) {
      const r2 = e2.transitions[i2].target, o2 = new Kt({ state: r2, alt: i2 + 1, context: n2 }, null);
      this.closure(t2, o2, s2, false, false, false);
    }
    return s2;
  }
  closure(t2, e2, n2, s2, i2, r2) {
    let o2 = null;
    if (_$t.debug && console.log("closure(" + e2.toString(this.recog, true) + ")"), e2.state instanceof C) {
      if (_$t.debug && (null !== this.recog ? console.log("closure at %s rule stop %s\n", this.recog.ruleNames[e2.state.ruleIndex], e2) : console.log("closure at rule stop %s\n", e2)), null === e2.context || e2.context.hasEmptyPath()) {
        if (null === e2.context || e2.context.isEmpty()) return n2.add(e2), true;
        n2.add(new Kt({ state: e2.state, context: U.EMPTY }, e2)), s2 = true;
      }
      if (null !== e2.context && !e2.context.isEmpty()) {
        for (let a2 = 0; a2 < e2.context.length; a2++) if (e2.context.getReturnState(a2) !== U.EMPTY_RETURN_STATE) {
          const l2 = e2.context.getParent(a2), h2 = this.atn.states[e2.context.getReturnState(a2)];
          o2 = new Kt({ state: h2, context: l2 }, e2), s2 = this.closure(t2, o2, n2, s2, i2, r2);
        }
      }
      return s2;
    }
    e2.state.epsilonOnlyTransitions || s2 && e2.passedThroughNonGreedyDecision || n2.add(e2);
    for (let a2 = 0; a2 < e2.state.transitions.length; a2++) {
      const l2 = e2.state.transitions[a2];
      o2 = this.getEpsilonTarget(t2, e2, l2, n2, i2, r2), null !== o2 && (s2 = this.closure(t2, o2, n2, s2, i2, r2));
    }
    return s2;
  }
  getEpsilonTarget(t2, e2, n2, i2, r2, o2) {
    let a2 = null;
    if (n2.serializationType === A.RULE) {
      const t3 = z.create(e2.context, n2.followState.stateNumber);
      a2 = new Kt({ state: n2.target, context: t3 }, e2);
    } else {
      if (n2.serializationType === A.PRECEDENCE) throw "Precedence predicates are not supported in lexers.";
      if (n2.serializationType === A.PREDICATE) _$t.debug && console.log("EVAL rule " + n2.ruleIndex + ":" + n2.predIndex), i2.hasSemanticContext = true, this.evaluatePredicate(t2, n2.ruleIndex, n2.predIndex, r2) && (a2 = new Kt({ state: n2.target }, e2));
      else if (n2.serializationType === A.ACTION) if (null === e2.context || e2.context.hasEmptyPath()) {
        const t3 = Gt.append(e2.lexerActionExecutor, this.atn.lexerActions[n2.actionIndex]);
        a2 = new Kt({ state: n2.target, lexerActionExecutor: t3 }, e2);
      } else a2 = new Kt({ state: n2.target }, e2);
      else n2.serializationType === A.EPSILON ? a2 = new Kt({ state: n2.target }, e2) : n2.serializationType !== A.ATOM && n2.serializationType !== A.RANGE && n2.serializationType !== A.SET || o2 && n2.matches(s.EOF, 0, Mt.MAX_CHAR_VALUE) && (a2 = new Kt({ state: n2.target }, e2));
    }
    return a2;
  }
  evaluatePredicate(t2, e2, n2, s2) {
    if (null === this.recog) return true;
    if (!s2) return this.recog.sempred(null, e2, n2);
    const i2 = this.column, r2 = this.line, o2 = t2.index, a2 = t2.mark();
    try {
      return this.consume(t2), this.recog.sempred(null, e2, n2);
    } finally {
      this.column = i2, this.line = r2, t2.seek(o2), t2.release(a2);
    }
  }
  captureSimState(t2, e2, n2) {
    t2.index = e2.index, t2.line = this.line, t2.column = this.column, t2.dfaState = n2;
  }
  addDFAEdge(t2, e2, n2, s2) {
    if (void 0 === n2 && (n2 = null), void 0 === s2 && (s2 = null), null === n2 && null !== s2) {
      const t3 = s2.hasSemanticContext;
      if (s2.hasSemanticContext = false, n2 = this.addDFAState(s2), t3) return n2;
    }
    return e2 < _$t.MIN_DFA_EDGE || e2 > _$t.MAX_DFA_EDGE || (_$t.debug && console.log("EDGE " + t2 + " -> " + n2 + " upon " + e2), null === t2.edges && (t2.edges = []), t2.edges[e2 - _$t.MIN_DFA_EDGE] = n2), n2;
  }
  addDFAState(t2) {
    const e2 = new Vt(null, t2);
    let n2 = null;
    for (let e3 = 0; e3 < t2.items.length; e3++) {
      const s3 = t2.items[e3];
      if (s3.state instanceof C) {
        n2 = s3;
        break;
      }
    }
    null !== n2 && (e2.isAcceptState = true, e2.lexerActionExecutor = n2.lexerActionExecutor, e2.prediction = this.atn.ruleToTokenType[n2.state.ruleIndex]);
    const s2 = this.decisionToDFA[this.mode], i2 = s2.states.get(e2);
    if (null !== i2) return i2;
    const r2 = e2;
    return r2.stateNumber = s2.states.length, t2.setReadonly(true), r2.configs = t2, s2.states.add(r2), r2;
  }
  getDFA(t2) {
    return this.decisionToDFA[t2];
  }
  getText(t2) {
    return t2.getText(this.startIndex, t2.index - 1);
  }
  consume(t2) {
    t2.LA(1) === "\n".charCodeAt(0) ? (this.line += 1, this.column = 0) : this.column += 1, t2.consume();
  }
  getTokenName(t2) {
    return -1 === t2 ? "EOF" : "'" + String.fromCharCode(t2) + "'";
  }
};
$t.debug = false, $t.dfa_debug = false, $t.MIN_DFA_EDGE = 0, $t.MAX_DFA_EDGE = 127;
var Xt = class {
  constructor(t2, e2) {
    this.alt = e2, this.pred = t2;
  }
  toString() {
    return "(" + this.pred + ", " + this.alt + ")";
  }
};
var Jt = class {
  constructor() {
    this.data = {};
  }
  get(t2) {
    return this.data["k-" + t2] || null;
  }
  set(t2, e2) {
    this.data["k-" + t2] = e2;
  }
  values() {
    return Object.keys(this.data).filter((t2) => t2.startsWith("k-")).map((t2) => this.data[t2], this);
  }
};
var Zt = { SLL: 0, LL: 1, LL_EXACT_AMBIG_DETECTION: 2, hasSLLConflictTerminatingPrediction: function(t2, e2) {
  if (Zt.allConfigsInRuleStopStates(e2)) return true;
  if (t2 === Zt.SLL && e2.hasSemanticContext) {
    const t3 = new zt();
    for (let n3 = 0; n3 < e2.items.length; n3++) {
      let s2 = e2.items[n3];
      s2 = new S({ semanticContext: g.NONE }, s2), t3.add(s2);
    }
    e2 = t3;
  }
  const n2 = Zt.getConflictingAltSubsets(e2);
  return Zt.hasConflictingAltSet(n2) && !Zt.hasStateAssociatedWithOneAlt(e2);
}, hasConfigInRuleStopState: function(t2) {
  for (let e2 = 0; e2 < t2.items.length; e2++) if (t2.items[e2].state instanceof C) return true;
  return false;
}, allConfigsInRuleStopStates: function(t2) {
  for (let e2 = 0; e2 < t2.items.length; e2++) if (!(t2.items[e2].state instanceof C)) return false;
  return true;
}, resolvesToJustOneViableAlt: function(t2) {
  return Zt.getSingleViableAlt(t2);
}, allSubsetsConflict: function(t2) {
  return !Zt.hasNonConflictingAltSet(t2);
}, hasNonConflictingAltSet: function(t2) {
  for (let e2 = 0; e2 < t2.length; e2++) if (1 === t2[e2].length) return true;
  return false;
}, hasConflictingAltSet: function(t2) {
  for (let e2 = 0; e2 < t2.length; e2++) if (t2[e2].length > 1) return true;
  return false;
}, allSubsetsEqual: function(t2) {
  let e2 = null;
  for (let n2 = 0; n2 < t2.length; n2++) {
    const s2 = t2[n2];
    if (null === e2) e2 = s2;
    else if (s2 !== e2) return false;
  }
  return true;
}, getUniqueAlt: function(t2) {
  const e2 = Zt.getAlts(t2);
  return 1 === e2.length ? e2.minValue() : j.INVALID_ALT_NUMBER;
}, getAlts: function(t2) {
  const e2 = new G();
  return t2.map(function(t3) {
    e2.or(t3);
  }), e2;
}, getConflictingAltSubsets: function(t2) {
  const e2 = new q();
  return e2.hashFunction = function(t3) {
    a.hashStuff(t3.state.stateNumber, t3.context);
  }, e2.equalsFunction = function(t3, e3) {
    return t3.state.stateNumber === e3.state.stateNumber && t3.context.equals(e3.context);
  }, t2.items.map(function(t3) {
    let n2 = e2.get(t3);
    null === n2 && (n2 = new G(), e2.set(t3, n2)), n2.set(t3.alt);
  }), e2.getValues();
}, getStateToAltMap: function(t2) {
  const e2 = new Jt();
  return t2.items.map(function(t3) {
    let n2 = e2.get(t3.state);
    null === n2 && (n2 = new G(), e2.set(t3.state, n2)), n2.set(t3.alt);
  }), e2;
}, hasStateAssociatedWithOneAlt: function(t2) {
  const e2 = Zt.getStateToAltMap(t2).values();
  for (let t3 = 0; t3 < e2.length; t3++) if (1 === e2[t3].length) return true;
  return false;
}, getSingleViableAlt: function(t2) {
  let e2 = null;
  for (let n2 = 0; n2 < t2.length; n2++) {
    const s2 = t2[n2].minValue();
    if (null === e2) e2 = s2;
    else if (e2 !== s2) return j.INVALID_ALT_NUMBER;
  }
  return e2;
} };
var Qt = Zt;
var te = class extends Dt {
  constructor(t2, e2, n2, s2, i2, r2) {
    r2 = r2 || t2._ctx, s2 = s2 || t2.getCurrentToken(), n2 = n2 || t2.getCurrentToken(), e2 = e2 || t2.getInputStream(), super({ message: "", recognizer: t2, input: e2, ctx: r2 }), this.deadEndConfigs = i2, this.startToken = n2, this.offendingToken = s2;
  }
};
var ee = class {
  constructor(t2) {
    this.defaultMapCtor = t2 || q, this.cacheMap = new this.defaultMapCtor();
  }
  get(t2, e2) {
    const n2 = this.cacheMap.get(t2) || null;
    return null === n2 ? null : n2.get(e2) || null;
  }
  set(t2, e2, n2) {
    let s2 = this.cacheMap.get(t2) || null;
    null === s2 && (s2 = new this.defaultMapCtor(), this.cacheMap.set(t2, s2)), s2.set(e2, n2);
  }
};
var ne = class extends qt {
  constructor(t2, e2, n2, s2) {
    super(e2, s2), this.parser = t2, this.decisionToDFA = n2, this.predictionMode = Qt.LL, this._input = null, this._startIndex = 0, this._outerContext = null, this._dfa = null, this.mergeCache = null, this.debug = false, this.debug_closure = false, this.debug_add = false, this.trace_atn_sim = false, this.dfa_debug = false, this.retry_debug = false;
  }
  reset() {
  }
  adaptivePredict(t2, e2, n2) {
    (this.debug || this.trace_atn_sim) && console.log("adaptivePredict decision " + e2 + " exec LA(1)==" + this.getLookaheadName(t2) + " line " + t2.LT(1).line + ":" + t2.LT(1).column), this._input = t2, this._startIndex = t2.index, this._outerContext = n2;
    const s2 = this.decisionToDFA[e2];
    this._dfa = s2;
    const i2 = t2.mark(), r2 = t2.index;
    try {
      let e3;
      if (e3 = s2.precedenceDfa ? s2.getPrecedenceStartState(this.parser.getPrecedence()) : s2.s0, null === e3) {
        null === n2 && (n2 = M.EMPTY), this.debug && console.log("predictATN decision " + s2.decision + " exec LA(1)==" + this.getLookaheadName(t2) + ", outerContext=" + n2.toString(this.parser.ruleNames));
        const i4 = false;
        let r3 = this.computeStartState(s2.atnStartState, M.EMPTY, i4);
        s2.precedenceDfa ? (s2.s0.configs = r3, r3 = this.applyPrecedenceFilter(r3), e3 = this.addDFAState(s2, new Vt(null, r3)), s2.setPrecedenceStartState(this.parser.getPrecedence(), e3)) : (e3 = this.addDFAState(s2, new Vt(null, r3)), s2.s0 = e3);
      }
      const i3 = this.execATN(s2, e3, t2, r2, n2);
      return this.debug && console.log("DFA after predictATN: " + s2.toString(this.parser.literalNames, this.parser.symbolicNames)), i3;
    } finally {
      this._dfa = null, this.mergeCache = null, t2.seek(r2), t2.release(i2);
    }
  }
  execATN(t2, e2, n2, i2, r2) {
    let o2;
    (this.debug || this.trace_atn_sim) && console.log("execATN decision " + t2.decision + ", DFA state " + e2 + ", LA(1)==" + this.getLookaheadName(n2) + " line " + n2.LT(1).line + ":" + n2.LT(1).column);
    let a2 = e2;
    this.debug && console.log("s0 = " + e2);
    let l2 = n2.LA(1);
    for (; ; ) {
      let e3 = this.getExistingTargetState(a2, l2);
      if (null === e3 && (e3 = this.computeTargetState(t2, a2, l2)), e3 === qt.ERROR) {
        const t3 = this.noViableAlt(n2, r2, a2.configs, i2);
        if (n2.seek(i2), o2 = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(a2.configs, r2), o2 !== j.INVALID_ALT_NUMBER) return o2;
        throw t3;
      }
      if (e3.requiresFullContext && this.predictionMode !== Qt.SLL) {
        let s2 = null;
        if (null !== e3.predicates) {
          this.debug && console.log("DFA state has preds in DFA sim LL failover");
          const t3 = n2.index;
          if (t3 !== i2 && n2.seek(i2), s2 = this.evalSemanticContext(e3.predicates, r2, true), 1 === s2.length) return this.debug && console.log("Full LL avoided"), s2.minValue();
          t3 !== i2 && n2.seek(t3);
        }
        this.dfa_debug && console.log("ctx sensitive state " + r2 + " in " + e3);
        const a3 = true, l3 = this.computeStartState(t2.atnStartState, r2, a3);
        return this.reportAttemptingFullContext(t2, s2, e3.configs, i2, n2.index), o2 = this.execATNWithFullContext(t2, e3, l3, n2, i2, r2), o2;
      }
      if (e3.isAcceptState) {
        if (null === e3.predicates) return e3.prediction;
        const s2 = n2.index;
        n2.seek(i2);
        const o3 = this.evalSemanticContext(e3.predicates, r2, true);
        if (0 === o3.length) throw this.noViableAlt(n2, r2, e3.configs, i2);
        return 1 === o3.length || this.reportAmbiguity(t2, e3, i2, s2, false, o3, e3.configs), o3.minValue();
      }
      a2 = e3, l2 !== s.EOF && (n2.consume(), l2 = n2.LA(1));
    }
  }
  getExistingTargetState(t2, e2) {
    const n2 = t2.edges;
    return null === n2 ? null : n2[e2 + 1] || null;
  }
  computeTargetState(t2, e2, n2) {
    const s2 = this.computeReachSet(e2.configs, n2, false);
    if (null === s2) return this.addDFAEdge(t2, e2, n2, qt.ERROR), qt.ERROR;
    let i2 = new Vt(null, s2);
    const r2 = this.getUniqueAlt(s2);
    if (this.debug) {
      const t3 = Qt.getConflictingAltSubsets(s2);
      console.log("SLL altSubSets=" + u(t3) + ", configs=" + s2 + ", predict=" + r2 + ", allSubsetsConflict=" + Qt.allSubsetsConflict(t3) + ", conflictingAlts=" + this.getConflictingAlts(s2));
    }
    return r2 !== j.INVALID_ALT_NUMBER ? (i2.isAcceptState = true, i2.configs.uniqueAlt = r2, i2.prediction = r2) : Qt.hasSLLConflictTerminatingPrediction(this.predictionMode, s2) && (i2.configs.conflictingAlts = this.getConflictingAlts(s2), i2.requiresFullContext = true, i2.isAcceptState = true, i2.prediction = i2.configs.conflictingAlts.minValue()), i2.isAcceptState && i2.configs.hasSemanticContext && (this.predicateDFAState(i2, this.atn.getDecisionState(t2.decision)), null !== i2.predicates && (i2.prediction = j.INVALID_ALT_NUMBER)), i2 = this.addDFAEdge(t2, e2, n2, i2), i2;
  }
  predicateDFAState(t2, e2) {
    const n2 = e2.transitions.length, s2 = this.getConflictingAltsOrUniqueAlt(t2.configs), i2 = this.getPredsForAmbigAlts(s2, t2.configs, n2);
    null !== i2 ? (t2.predicates = this.getPredicatePredictions(s2, i2), t2.prediction = j.INVALID_ALT_NUMBER) : t2.prediction = s2.minValue();
  }
  execATNWithFullContext(t2, e2, n2, i2, r2, o2) {
    (this.debug || this.trace_atn_sim) && console.log("execATNWithFullContext " + n2);
    let a2, l2 = false, h2 = n2;
    i2.seek(r2);
    let c2 = i2.LA(1), u2 = -1;
    for (; ; ) {
      if (a2 = this.computeReachSet(h2, c2, true), null === a2) {
        const t4 = this.noViableAlt(i2, o2, h2, r2);
        i2.seek(r2);
        const e3 = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(h2, o2);
        if (e3 !== j.INVALID_ALT_NUMBER) return e3;
        throw t4;
      }
      const t3 = Qt.getConflictingAltSubsets(a2);
      if (this.debug && console.log("LL altSubSets=" + t3 + ", predict=" + Qt.getUniqueAlt(t3) + ", resolvesToJustOneViableAlt=" + Qt.resolvesToJustOneViableAlt(t3)), a2.uniqueAlt = this.getUniqueAlt(a2), a2.uniqueAlt !== j.INVALID_ALT_NUMBER) {
        u2 = a2.uniqueAlt;
        break;
      }
      if (this.predictionMode !== Qt.LL_EXACT_AMBIG_DETECTION) {
        if (u2 = Qt.resolvesToJustOneViableAlt(t3), u2 !== j.INVALID_ALT_NUMBER) break;
      } else if (Qt.allSubsetsConflict(t3) && Qt.allSubsetsEqual(t3)) {
        l2 = true, u2 = Qt.getSingleViableAlt(t3);
        break;
      }
      h2 = a2, c2 !== s.EOF && (i2.consume(), c2 = i2.LA(1));
    }
    return a2.uniqueAlt !== j.INVALID_ALT_NUMBER ? (this.reportContextSensitivity(t2, u2, a2, r2, i2.index), u2) : (this.reportAmbiguity(t2, e2, r2, i2.index, l2, null, a2), u2);
  }
  computeReachSet(t2, e2, n2) {
    this.debug && console.log("in computeReachSet, starting closure: " + t2), null === this.mergeCache && (this.mergeCache = new ee());
    const i2 = new zt(n2);
    let r2 = null;
    for (let o3 = 0; o3 < t2.items.length; o3++) {
      const a2 = t2.items[o3];
      if (this.debug && console.log("testing " + this.getTokenName(e2) + " at " + a2), a2.state instanceof C) (n2 || e2 === s.EOF) && (null === r2 && (r2 = []), r2.push(a2), this.debug_add && console.log("added " + a2 + " to skippedStopStates"));
      else for (let t3 = 0; t3 < a2.state.transitions.length; t3++) {
        const n3 = a2.state.transitions[t3], s2 = this.getReachableTarget(n3, e2);
        if (null !== s2) {
          const t4 = new S({ state: s2 }, a2);
          i2.add(t4, this.mergeCache), this.debug_add && console.log("added " + t4 + " to intermediate");
        }
      }
    }
    let o2 = null;
    if (null === r2 && e2 !== s.EOF && (1 === i2.items.length || this.getUniqueAlt(i2) !== j.INVALID_ALT_NUMBER) && (o2 = i2), null === o2) {
      o2 = new zt(n2);
      const t3 = new d(), r3 = e2 === s.EOF;
      for (let e3 = 0; e3 < i2.items.length; e3++) this.closure(i2.items[e3], o2, t3, false, n2, r3);
    }
    if (e2 === s.EOF && (o2 = this.removeAllConfigsNotInRuleStopState(o2, o2 === i2)), !(null === r2 || n2 && Qt.hasConfigInRuleStopState(o2))) for (let t3 = 0; t3 < r2.length; t3++) o2.add(r2[t3], this.mergeCache);
    return this.trace_atn_sim && console.log("computeReachSet " + t2 + " -> " + o2), 0 === o2.items.length ? null : o2;
  }
  removeAllConfigsNotInRuleStopState(t2, e2) {
    if (Qt.allConfigsInRuleStopStates(t2)) return t2;
    const n2 = new zt(t2.fullCtx);
    for (let i2 = 0; i2 < t2.items.length; i2++) {
      const r2 = t2.items[i2];
      if (r2.state instanceof C) n2.add(r2, this.mergeCache);
      else if (e2 && r2.state.epsilonOnlyTransitions && this.atn.nextTokens(r2.state).contains(s.EPSILON)) {
        const t3 = this.atn.ruleToStopState[r2.state.ruleIndex];
        n2.add(new S({ state: t3 }, r2), this.mergeCache);
      }
    }
    return n2;
  }
  computeStartState(t2, e2, n2) {
    const s2 = H(this.atn, e2), i2 = new zt(n2);
    this.trace_atn_sim && console.log("computeStartState from ATN state " + t2 + " initialContext=" + s2.toString(this.parser));
    for (let e3 = 0; e3 < t2.transitions.length; e3++) {
      const r2 = t2.transitions[e3].target, o2 = new S({ state: r2, alt: e3 + 1, context: s2 }, null), a2 = new d();
      this.closure(o2, i2, a2, true, n2, false);
    }
    return i2;
  }
  applyPrecedenceFilter(t2) {
    let e2;
    const n2 = [], s2 = new zt(t2.fullCtx);
    for (let i2 = 0; i2 < t2.items.length; i2++) {
      if (e2 = t2.items[i2], 1 !== e2.alt) continue;
      const r2 = e2.semanticContext.evalPrecedence(this.parser, this._outerContext);
      null !== r2 && (n2[e2.state.stateNumber] = e2.context, r2 !== e2.semanticContext ? s2.add(new S({ semanticContext: r2 }, e2), this.mergeCache) : s2.add(e2, this.mergeCache));
    }
    for (let i2 = 0; i2 < t2.items.length; i2++) if (e2 = t2.items[i2], 1 !== e2.alt) {
      if (!e2.precedenceFilterSuppressed) {
        const t3 = n2[e2.state.stateNumber] || null;
        if (null !== t3 && t3.equals(e2.context)) continue;
      }
      s2.add(e2, this.mergeCache);
    }
    return s2;
  }
  getReachableTarget(t2, e2) {
    return t2.matches(e2, 0, this.atn.maxTokenType) ? t2.target : null;
  }
  getPredsForAmbigAlts(t2, e2, n2) {
    let s2 = [];
    for (let n3 = 0; n3 < e2.items.length; n3++) {
      const i3 = e2.items[n3];
      t2.get(i3.alt) && (s2[i3.alt] = g.orContext(s2[i3.alt] || null, i3.semanticContext));
    }
    let i2 = 0;
    for (let t3 = 1; t3 < n2 + 1; t3++) {
      const e3 = s2[t3] || null;
      null === e3 ? s2[t3] = g.NONE : e3 !== g.NONE && (i2 += 1);
    }
    return 0 === i2 && (s2 = null), this.debug && console.log("getPredsForAmbigAlts result " + u(s2)), s2;
  }
  getPredicatePredictions(t2, e2) {
    const n2 = [];
    let s2 = false;
    for (let i2 = 1; i2 < e2.length; i2++) {
      const r2 = e2[i2];
      null !== t2 && t2.get(i2) && n2.push(new Xt(r2, i2)), r2 !== g.NONE && (s2 = true);
    }
    return s2 ? n2 : null;
  }
  getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(t2, e2) {
    const n2 = this.splitAccordingToSemanticValidity(t2, e2), s2 = n2[0], i2 = n2[1];
    let r2 = this.getAltThatFinishedDecisionEntryRule(s2);
    return r2 !== j.INVALID_ALT_NUMBER || i2.items.length > 0 && (r2 = this.getAltThatFinishedDecisionEntryRule(i2), r2 !== j.INVALID_ALT_NUMBER) ? r2 : j.INVALID_ALT_NUMBER;
  }
  getAltThatFinishedDecisionEntryRule(t2) {
    const e2 = [];
    for (let n2 = 0; n2 < t2.items.length; n2++) {
      const s2 = t2.items[n2];
      (s2.reachesIntoOuterContext > 0 || s2.state instanceof C && s2.context.hasEmptyPath()) && e2.indexOf(s2.alt) < 0 && e2.push(s2.alt);
    }
    return 0 === e2.length ? j.INVALID_ALT_NUMBER : Math.min.apply(null, e2);
  }
  splitAccordingToSemanticValidity(t2, e2) {
    const n2 = new zt(t2.fullCtx), s2 = new zt(t2.fullCtx);
    for (let i2 = 0; i2 < t2.items.length; i2++) {
      const r2 = t2.items[i2];
      r2.semanticContext !== g.NONE ? r2.semanticContext.evaluate(this.parser, e2) ? n2.add(r2) : s2.add(r2) : n2.add(r2);
    }
    return [n2, s2];
  }
  evalSemanticContext(t2, e2, n2) {
    const s2 = new G();
    for (let i2 = 0; i2 < t2.length; i2++) {
      const r2 = t2[i2];
      if (r2.pred === g.NONE) {
        if (s2.set(r2.alt), !n2) break;
        continue;
      }
      const o2 = r2.pred.evaluate(this.parser, e2);
      if ((this.debug || this.dfa_debug) && console.log("eval pred " + r2 + "=" + o2), o2 && ((this.debug || this.dfa_debug) && console.log("PREDICT " + r2.alt), s2.set(r2.alt), !n2)) break;
    }
    return s2;
  }
  closure(t2, e2, n2, s2, i2, r2) {
    this.closureCheckingStopState(t2, e2, n2, s2, i2, 0, r2);
  }
  closureCheckingStopState(t2, e2, n2, s2, i2, r2, o2) {
    if ((this.trace_atn_sim || this.debug_closure) && console.log("closure(" + t2.toString(this.parser, true) + ")"), t2.state instanceof C) {
      if (!t2.context.isEmpty()) {
        for (let a2 = 0; a2 < t2.context.length; a2++) {
          if (t2.context.getReturnState(a2) === U.EMPTY_RETURN_STATE) {
            if (i2) {
              e2.add(new S({ state: t2.state, context: U.EMPTY }, t2), this.mergeCache);
              continue;
            }
            this.debug && console.log("FALLING off rule " + this.getRuleName(t2.state.ruleIndex)), this.closure_(t2, e2, n2, s2, i2, r2, o2);
            continue;
          }
          const l2 = this.atn.states[t2.context.getReturnState(a2)], h2 = t2.context.getParent(a2), c2 = { state: l2, alt: t2.alt, context: h2, semanticContext: t2.semanticContext }, u2 = new S(c2, null);
          u2.reachesIntoOuterContext = t2.reachesIntoOuterContext, this.closureCheckingStopState(u2, e2, n2, s2, i2, r2 - 1, o2);
        }
        return;
      }
      if (i2) return void e2.add(t2, this.mergeCache);
      this.debug && console.log("FALLING off rule " + this.getRuleName(t2.state.ruleIndex));
    }
    this.closure_(t2, e2, n2, s2, i2, r2, o2);
  }
  closure_(t2, e2, n2, s2, i2, r2, o2) {
    const a2 = t2.state;
    a2.epsilonOnlyTransitions || e2.add(t2, this.mergeCache);
    for (let l2 = 0; l2 < a2.transitions.length; l2++) {
      if (0 === l2 && this.canDropLoopEntryEdgeInLeftRecursiveRule(t2)) continue;
      const h2 = a2.transitions[l2], c2 = s2 && !(h2 instanceof ct), u2 = this.getEpsilonTarget(t2, h2, c2, 0 === r2, i2, o2);
      if (null !== u2) {
        let s3 = r2;
        if (t2.state instanceof C) {
          if (null !== this._dfa && this._dfa.precedenceDfa && h2.outermostPrecedenceReturn === this._dfa.atnStartState.ruleIndex && (u2.precedenceFilterSuppressed = true), u2.reachesIntoOuterContext += 1, n2.getOrAdd(u2) !== u2) continue;
          e2.dipsIntoOuterContext = true, s3 -= 1, this.debug && console.log("dips into outer ctx: " + u2);
        } else {
          if (!h2.isEpsilon && n2.getOrAdd(u2) !== u2) continue;
          h2 instanceof N && s3 >= 0 && (s3 += 1);
        }
        this.closureCheckingStopState(u2, e2, n2, c2, i2, s3, o2);
      }
    }
  }
  canDropLoopEntryEdgeInLeftRecursiveRule(t2) {
    const e2 = t2.state;
    if (e2.stateType !== _.STAR_LOOP_ENTRY) return false;
    if (e2.stateType !== _.STAR_LOOP_ENTRY || !e2.isPrecedenceDecision || t2.context.isEmpty() || t2.context.hasEmptyPath()) return false;
    const n2 = t2.context.length;
    for (let s3 = 0; s3 < n2; s3++) if (this.atn.states[t2.context.getReturnState(s3)].ruleIndex !== e2.ruleIndex) return false;
    const s2 = e2.transitions[0].target.endState.stateNumber, i2 = this.atn.states[s2];
    for (let s3 = 0; s3 < n2; s3++) {
      const n3 = t2.context.getReturnState(s3), r2 = this.atn.states[n3];
      if (1 !== r2.transitions.length || !r2.transitions[0].isEpsilon) return false;
      const o2 = r2.transitions[0].target;
      if (!(r2.stateType === _.BLOCK_END && o2 === e2 || r2 === i2 || o2 === i2 || o2.stateType === _.BLOCK_END && 1 === o2.transitions.length && o2.transitions[0].isEpsilon && o2.transitions[0].target === e2)) return false;
    }
    return true;
  }
  getRuleName(t2) {
    return null !== this.parser && t2 >= 0 ? this.parser.ruleNames[t2] : "<rule " + t2 + ">";
  }
  getEpsilonTarget(t2, e2, n2, i2, r2, o2) {
    switch (e2.serializationType) {
      case A.RULE:
        return this.ruleTransition(t2, e2);
      case A.PRECEDENCE:
        return this.precedenceTransition(t2, e2, n2, i2, r2);
      case A.PREDICATE:
        return this.predTransition(t2, e2, n2, i2, r2);
      case A.ACTION:
        return this.actionTransition(t2, e2);
      case A.EPSILON:
        return new S({ state: e2.target }, t2);
      case A.ATOM:
      case A.RANGE:
      case A.SET:
        return o2 && e2.matches(s.EOF, 0, 1) ? new S({ state: e2.target }, t2) : null;
      default:
        return null;
    }
  }
  actionTransition(t2, e2) {
    if (this.debug) {
      const t3 = -1 === e2.actionIndex ? 65535 : e2.actionIndex;
      console.log("ACTION edge " + e2.ruleIndex + ":" + t3);
    }
    return new S({ state: e2.target }, t2);
  }
  precedenceTransition(t2, e2, n2, s2, i2) {
    this.debug && (console.log("PRED (collectPredicates=" + n2 + ") " + e2.precedence + ">=_p, ctx dependent=true"), null !== this.parser && console.log("context surrounding pred is " + u(this.parser.getRuleInvocationStack())));
    let r2 = null;
    if (n2 && s2) if (i2) {
      const n3 = this._input.index;
      this._input.seek(this._startIndex);
      const s3 = e2.getPredicate().evaluate(this.parser, this._outerContext);
      this._input.seek(n3), s3 && (r2 = new S({ state: e2.target }, t2));
    } else {
      const n3 = g.andContext(t2.semanticContext, e2.getPredicate());
      r2 = new S({ state: e2.target, semanticContext: n3 }, t2);
    }
    else r2 = new S({ state: e2.target }, t2);
    return this.debug && console.log("config from pred transition=" + r2), r2;
  }
  predTransition(t2, e2, n2, s2, i2) {
    this.debug && (console.log("PRED (collectPredicates=" + n2 + ") " + e2.ruleIndex + ":" + e2.predIndex + ", ctx dependent=" + e2.isCtxDependent), null !== this.parser && console.log("context surrounding pred is " + u(this.parser.getRuleInvocationStack())));
    let r2 = null;
    if (n2 && (e2.isCtxDependent && s2 || !e2.isCtxDependent)) if (i2) {
      const n3 = this._input.index;
      this._input.seek(this._startIndex);
      const s3 = e2.getPredicate().evaluate(this.parser, this._outerContext);
      this._input.seek(n3), s3 && (r2 = new S({ state: e2.target }, t2));
    } else {
      const n3 = g.andContext(t2.semanticContext, e2.getPredicate());
      r2 = new S({ state: e2.target, semanticContext: n3 }, t2);
    }
    else r2 = new S({ state: e2.target }, t2);
    return this.debug && console.log("config from pred transition=" + r2), r2;
  }
  ruleTransition(t2, e2) {
    this.debug && console.log("CALL rule " + this.getRuleName(e2.target.ruleIndex) + ", ctx=" + t2.context);
    const n2 = e2.followState, s2 = z.create(t2.context, n2.stateNumber);
    return new S({ state: e2.target, context: s2 }, t2);
  }
  getConflictingAlts(t2) {
    const e2 = Qt.getConflictingAltSubsets(t2);
    return Qt.getAlts(e2);
  }
  getConflictingAltsOrUniqueAlt(t2) {
    let e2 = null;
    return t2.uniqueAlt !== j.INVALID_ALT_NUMBER ? (e2 = new G(), e2.set(t2.uniqueAlt)) : e2 = t2.conflictingAlts, e2;
  }
  getTokenName(t2) {
    if (t2 === s.EOF) return "EOF";
    if (null !== this.parser && null !== this.parser.literalNames) {
      if (!(t2 >= this.parser.literalNames.length && t2 >= this.parser.symbolicNames.length)) return (this.parser.literalNames[t2] || this.parser.symbolicNames[t2]) + "<" + t2 + ">";
      console.log(t2 + " ttype out of range: " + this.parser.literalNames), console.log("" + this.parser.getInputStream().getTokens());
    }
    return "" + t2;
  }
  getLookaheadName(t2) {
    return this.getTokenName(t2.LA(1));
  }
  dumpDeadEndConfigs(t2) {
    console.log("dead end configs: ");
    const e2 = t2.getDeadEndConfigs();
    for (let t3 = 0; t3 < e2.length; t3++) {
      const n2 = e2[t3];
      let s2 = "no edges";
      if (n2.state.transitions.length > 0) {
        const t4 = n2.state.transitions[0];
        t4 instanceof lt ? s2 = "Atom " + this.getTokenName(t4.label) : t4 instanceof k && (s2 = (t4 instanceof I ? "~" : "") + "Set " + t4.set);
      }
      console.error(n2.toString(this.parser, true) + ":" + s2);
    }
  }
  noViableAlt(t2, e2, n2, s2) {
    return new te(this.parser, t2, t2.get(s2), t2.LT(1), n2, e2);
  }
  getUniqueAlt(t2) {
    let e2 = j.INVALID_ALT_NUMBER;
    for (let n2 = 0; n2 < t2.items.length; n2++) {
      const s2 = t2.items[n2];
      if (e2 === j.INVALID_ALT_NUMBER) e2 = s2.alt;
      else if (s2.alt !== e2) return j.INVALID_ALT_NUMBER;
    }
    return e2;
  }
  addDFAEdge(t2, e2, n2, s2) {
    if (this.debug && console.log("EDGE " + e2 + " -> " + s2 + " upon " + this.getTokenName(n2)), null === s2) return null;
    if (s2 = this.addDFAState(t2, s2), null === e2 || n2 < -1 || n2 > this.atn.maxTokenType) return s2;
    if (null === e2.edges && (e2.edges = []), e2.edges[n2 + 1] = s2, this.debug) {
      const e3 = null === this.parser ? null : this.parser.literalNames, n3 = null === this.parser ? null : this.parser.symbolicNames;
      console.log("DFA=\n" + t2.toString(e3, n3));
    }
    return s2;
  }
  addDFAState(t2, e2) {
    if (e2 === qt.ERROR) return e2;
    const n2 = t2.states.get(e2);
    return null !== n2 ? (this.trace_atn_sim && console.log("addDFAState " + e2 + " exists"), n2) : (e2.stateNumber = t2.states.length, e2.configs.readOnly || (e2.configs.optimizeConfigs(this), e2.configs.setReadonly(true)), this.trace_atn_sim && console.log("addDFAState new " + e2), t2.states.add(e2), this.debug && console.log("adding new DFA state: " + e2), e2);
  }
  reportAttemptingFullContext(t2, e2, n2, s2, i2) {
    if (this.debug || this.retry_debug) {
      const e3 = new m(s2, i2 + 1);
      console.log("reportAttemptingFullContext decision=" + t2.decision + ":" + n2 + ", input=" + this.parser.getTokenStream().getText(e3));
    }
    null !== this.parser && this.parser.getErrorListener().reportAttemptingFullContext(this.parser, t2, s2, i2, e2, n2);
  }
  reportContextSensitivity(t2, e2, n2, s2, i2) {
    if (this.debug || this.retry_debug) {
      const e3 = new m(s2, i2 + 1);
      console.log("reportContextSensitivity decision=" + t2.decision + ":" + n2 + ", input=" + this.parser.getTokenStream().getText(e3));
    }
    null !== this.parser && this.parser.getErrorListener().reportContextSensitivity(this.parser, t2, s2, i2, e2, n2);
  }
  reportAmbiguity(t2, e2, n2, s2, i2, r2, o2) {
    if (this.debug || this.retry_debug) {
      const t3 = new m(n2, s2 + 1);
      console.log("reportAmbiguity " + r2 + ":" + o2 + ", input=" + this.parser.getTokenStream().getText(t3));
    }
    null !== this.parser && this.parser.getErrorListener().reportAmbiguity(this.parser, t2, n2, s2, i2, r2, o2);
  }
};
var se = class {
  constructor() {
    this.cache = new q();
  }
  add(t2) {
    if (t2 === U.EMPTY) return U.EMPTY;
    const e2 = this.cache.get(t2) || null;
    return null !== e2 ? e2 : (this.cache.set(t2, t2), t2);
  }
  get(t2) {
    return this.cache.get(t2) || null;
  }
  get length() {
    return this.cache.length;
  }
};
var ie = { ATN: j, ATNDeserializer: yt, LexerATNSimulator: $t, ParserATNSimulator: ne, PredictionMode: Qt, PredictionContextCache: se };
var re = class {
  constructor(t2, e2, n2) {
    this.dfa = t2, this.literalNames = e2 || [], this.symbolicNames = n2 || [];
  }
  toString() {
    if (null === this.dfa.s0) return null;
    let t2 = "";
    const e2 = this.dfa.sortedStates();
    for (let n2 = 0; n2 < e2.length; n2++) {
      const s2 = e2[n2];
      if (null !== s2.edges) {
        const e3 = s2.edges.length;
        for (let n3 = 0; n3 < e3; n3++) {
          const e4 = s2.edges[n3] || null;
          null !== e4 && 2147483647 !== e4.stateNumber && (t2 = t2.concat(this.getStateString(s2)), t2 = t2.concat("-"), t2 = t2.concat(this.getEdgeLabel(n3)), t2 = t2.concat("->"), t2 = t2.concat(this.getStateString(e4)), t2 = t2.concat("\n"));
        }
      }
    }
    return 0 === t2.length ? null : t2;
  }
  getEdgeLabel(t2) {
    return 0 === t2 ? "EOF" : null !== this.literalNames || null !== this.symbolicNames ? this.literalNames[t2 - 1] || this.symbolicNames[t2 - 1] : String.fromCharCode(t2 - 1);
  }
  getStateString(t2) {
    const e2 = (t2.isAcceptState ? ":" : "") + "s" + t2.stateNumber + (t2.requiresFullContext ? "^" : "");
    return t2.isAcceptState ? null !== t2.predicates ? e2 + "=>" + u(t2.predicates) : e2 + "=>" + t2.prediction.toString() : e2;
  }
};
var oe = class extends re {
  constructor(t2) {
    super(t2, null);
  }
  getEdgeLabel(t2) {
    return "'" + String.fromCharCode(t2) + "'";
  }
};
var ae = class {
  constructor(t2, e2) {
    if (void 0 === e2 && (e2 = 0), this.atnStartState = t2, this.decision = e2, this._states = new d(), this.s0 = null, this.precedenceDfa = false, t2 instanceof it && t2.isPrecedenceDecision) {
      this.precedenceDfa = true;
      const t3 = new Vt(null, new zt());
      t3.edges = [], t3.isAcceptState = false, t3.requiresFullContext = false, this.s0 = t3;
    }
  }
  getPrecedenceStartState(t2) {
    if (!this.precedenceDfa) throw "Only precedence DFAs may contain a precedence start state.";
    return t2 < 0 || t2 >= this.s0.edges.length ? null : this.s0.edges[t2] || null;
  }
  setPrecedenceStartState(t2, e2) {
    if (!this.precedenceDfa) throw "Only precedence DFAs may contain a precedence start state.";
    t2 < 0 || (this.s0.edges[t2] = e2);
  }
  setPrecedenceDfa(t2) {
    if (this.precedenceDfa !== t2) {
      if (this._states = new d(), t2) {
        const t3 = new Vt(null, new zt());
        t3.edges = [], t3.isAcceptState = false, t3.requiresFullContext = false, this.s0 = t3;
      } else this.s0 = null;
      this.precedenceDfa = t2;
    }
  }
  sortedStates() {
    return this._states.values().sort(function(t2, e2) {
      return t2.stateNumber - e2.stateNumber;
    });
  }
  toString(t2, e2) {
    return t2 = t2 || null, e2 = e2 || null, null === this.s0 ? "" : new re(this, t2, e2).toString();
  }
  toLexerString() {
    return null === this.s0 ? "" : new oe(this).toString();
  }
  get states() {
    return this._states;
  }
};
var le = { DFA: ae, DFASerializer: re, LexerDFASerializer: oe, PredPrediction: Xt };
var he = { PredictionContext: U };
var ce = { Interval: m, IntervalSet: E };
var ue = class {
  visitTerminal(t2) {
  }
  visitErrorNode(t2) {
  }
  enterEveryRule(t2) {
  }
  exitEveryRule(t2) {
  }
};
var de = class {
  visit(t2) {
    return Array.isArray(t2) ? t2.map(function(t3) {
      return t3.accept(this);
    }, this) : t2.accept(this);
  }
  visitChildren(t2) {
    return t2.children ? this.visit(t2.children) : null;
  }
  visitTerminal(t2) {
  }
  visitErrorNode(t2) {
  }
};
var ge = class {
  walk(t2, e2) {
    if (e2 instanceof b || void 0 !== e2.isErrorNode && e2.isErrorNode()) t2.visitErrorNode(e2);
    else if (e2 instanceof P) t2.visitTerminal(e2);
    else {
      this.enterRule(t2, e2);
      for (let n2 = 0; n2 < e2.getChildCount(); n2++) {
        const s2 = e2.getChild(n2);
        this.walk(t2, s2);
      }
      this.exitRule(t2, e2);
    }
  }
  enterRule(t2, e2) {
    const n2 = e2.ruleContext;
    t2.enterEveryRule(n2), n2.enterRule(t2);
  }
  exitRule(t2, e2) {
    const n2 = e2.ruleContext;
    n2.exitRule(t2), t2.exitEveryRule(n2);
  }
};
ge.DEFAULT = new ge();
var pe = { Trees: F, RuleNode: v, ErrorNode: b, TerminalNode: P, ParseTreeListener: ue, ParseTreeVisitor: de, ParseTreeWalker: ge };
var fe = class extends Dt {
  constructor(t2) {
    super({ message: "", recognizer: t2, input: t2.getInputStream(), ctx: t2._ctx }), this.offendingToken = t2.getCurrentToken();
  }
};
var xe = class extends Dt {
  constructor(t2, e2, n2) {
    super({ message: Te(e2, n2 || null), recognizer: t2, input: t2.getInputStream(), ctx: t2._ctx });
    const s2 = t2._interp.atn.states[t2.state].transitions[0];
    s2 instanceof gt ? (this.ruleIndex = s2.ruleIndex, this.predicateIndex = s2.predIndex) : (this.ruleIndex = 0, this.predicateIndex = 0), this.predicate = e2, this.offendingToken = t2.getCurrentToken();
  }
};
function Te(t2, e2) {
  return null !== e2 ? e2 : "failed predicate: {" + t2 + "}?";
}
var Se = class extends Lt {
  constructor(t2) {
    super(), t2 = t2 || true, this.exactOnly = t2;
  }
  reportAmbiguity(t2, e2, n2, s2, i2, r2, o2) {
    if (this.exactOnly && !i2) return;
    const a2 = "reportAmbiguity d=" + this.getDecisionDescription(t2, e2) + ": ambigAlts=" + this.getConflictingAlts(r2, o2) + ", input='" + t2.getTokenStream().getText(new m(n2, s2)) + "'";
    t2.notifyErrorListeners(a2);
  }
  reportAttemptingFullContext(t2, e2, n2, s2, i2, r2) {
    const o2 = "reportAttemptingFullContext d=" + this.getDecisionDescription(t2, e2) + ", input='" + t2.getTokenStream().getText(new m(n2, s2)) + "'";
    t2.notifyErrorListeners(o2);
  }
  reportContextSensitivity(t2, e2, n2, s2, i2, r2) {
    const o2 = "reportContextSensitivity d=" + this.getDecisionDescription(t2, e2) + ", input='" + t2.getTokenStream().getText(new m(n2, s2)) + "'";
    t2.notifyErrorListeners(o2);
  }
  getDecisionDescription(t2, e2) {
    const n2 = e2.decision, s2 = e2.atnStartState.ruleIndex, i2 = t2.ruleNames;
    if (s2 < 0 || s2 >= i2.length) return "" + n2;
    const r2 = i2[s2] || null;
    return null === r2 || 0 === r2.length ? "" + n2 : `${n2} (${r2})`;
  }
  getConflictingAlts(t2, e2) {
    if (null !== t2) return t2;
    const n2 = new G();
    for (let t3 = 0; t3 < e2.items.length; t3++) n2.set(e2.items[t3].alt);
    return `{${n2.values().join(", ")}}`;
  }
};
var me = class _me extends Error {
  constructor() {
    super(), Error.captureStackTrace(this, _me);
  }
};
var Ee = class {
  reset(t2) {
  }
  recoverInline(t2) {
  }
  recover(t2, e2) {
  }
  sync(t2) {
  }
  inErrorRecoveryMode(t2) {
  }
  reportError(t2) {
  }
};
var _e = class extends Ee {
  constructor() {
    super(), this.errorRecoveryMode = false, this.lastErrorIndex = -1, this.lastErrorStates = null, this.nextTokensContext = null, this.nextTokenState = 0;
  }
  reset(t2) {
    this.endErrorCondition(t2);
  }
  beginErrorCondition(t2) {
    this.errorRecoveryMode = true;
  }
  inErrorRecoveryMode(t2) {
    return this.errorRecoveryMode;
  }
  endErrorCondition(t2) {
    this.errorRecoveryMode = false, this.lastErrorStates = null, this.lastErrorIndex = -1;
  }
  reportMatch(t2) {
    this.endErrorCondition(t2);
  }
  reportError(t2, e2) {
    this.inErrorRecoveryMode(t2) || (this.beginErrorCondition(t2), e2 instanceof te ? this.reportNoViableAlternative(t2, e2) : e2 instanceof fe ? this.reportInputMismatch(t2, e2) : e2 instanceof xe ? this.reportFailedPredicate(t2, e2) : (console.log("unknown recognition error type: " + e2.constructor.name), console.log(e2.stack), t2.notifyErrorListeners(e2.getOffendingToken(), e2.getMessage(), e2)));
  }
  recover(t2, e2) {
    this.lastErrorIndex === t2.getInputStream().index && null !== this.lastErrorStates && this.lastErrorStates.indexOf(t2.state) >= 0 && t2.consume(), this.lastErrorIndex = t2._input.index, null === this.lastErrorStates && (this.lastErrorStates = []), this.lastErrorStates.push(t2.state);
    const n2 = this.getErrorRecoverySet(t2);
    this.consumeUntil(t2, n2);
  }
  sync(t2) {
    if (this.inErrorRecoveryMode(t2)) return;
    const e2 = t2._interp.atn.states[t2.state], n2 = t2.getTokenStream().LA(1), i2 = t2.atn.nextTokens(e2);
    if (i2.contains(n2)) return this.nextTokensContext = null, void (this.nextTokenState = _.INVALID_STATE_NUMBER);
    if (i2.contains(s.EPSILON)) null === this.nextTokensContext && (this.nextTokensContext = t2._ctx, this.nextTokensState = t2._stateNumber);
    else switch (e2.stateType) {
      case _.BLOCK_START:
      case _.STAR_BLOCK_START:
      case _.PLUS_BLOCK_START:
      case _.STAR_LOOP_ENTRY:
        if (null !== this.singleTokenDeletion(t2)) return;
        throw new fe(t2);
      case _.PLUS_LOOP_BACK:
      case _.STAR_LOOP_BACK: {
        this.reportUnwantedToken(t2);
        const e3 = new E();
        e3.addSet(t2.getExpectedTokens());
        const n3 = e3.addSet(this.getErrorRecoverySet(t2));
        this.consumeUntil(t2, n3);
      }
    }
  }
  reportNoViableAlternative(t2, e2) {
    const n2 = t2.getTokenStream();
    let i2;
    i2 = null !== n2 ? e2.startToken.type === s.EOF ? "<EOF>" : n2.getText(new m(e2.startToken.tokenIndex, e2.offendingToken.tokenIndex)) : "<unknown input>";
    const r2 = "no viable alternative at input " + this.escapeWSAndQuote(i2);
    t2.notifyErrorListeners(r2, e2.offendingToken, e2);
  }
  reportInputMismatch(t2, e2) {
    const n2 = "mismatched input " + this.getTokenErrorDisplay(e2.offendingToken) + " expecting " + e2.getExpectedTokens().toString(t2.literalNames, t2.symbolicNames);
    t2.notifyErrorListeners(n2, e2.offendingToken, e2);
  }
  reportFailedPredicate(t2, e2) {
    const n2 = "rule " + t2.ruleNames[t2._ctx.ruleIndex] + " " + e2.message;
    t2.notifyErrorListeners(n2, e2.offendingToken, e2);
  }
  reportUnwantedToken(t2) {
    if (this.inErrorRecoveryMode(t2)) return;
    this.beginErrorCondition(t2);
    const e2 = t2.getCurrentToken(), n2 = "extraneous input " + this.getTokenErrorDisplay(e2) + " expecting " + this.getExpectedTokens(t2).toString(t2.literalNames, t2.symbolicNames);
    t2.notifyErrorListeners(n2, e2, null);
  }
  reportMissingToken(t2) {
    if (this.inErrorRecoveryMode(t2)) return;
    this.beginErrorCondition(t2);
    const e2 = t2.getCurrentToken(), n2 = "missing " + this.getExpectedTokens(t2).toString(t2.literalNames, t2.symbolicNames) + " at " + this.getTokenErrorDisplay(e2);
    t2.notifyErrorListeners(n2, e2, null);
  }
  recoverInline(t2) {
    const e2 = this.singleTokenDeletion(t2);
    if (null !== e2) return t2.consume(), e2;
    if (this.singleTokenInsertion(t2)) return this.getMissingSymbol(t2);
    throw new fe(t2);
  }
  singleTokenInsertion(t2) {
    const e2 = t2.getTokenStream().LA(1), n2 = t2._interp.atn, s2 = n2.states[t2.state].transitions[0].target;
    return !!n2.nextTokens(s2, t2._ctx).contains(e2) && (this.reportMissingToken(t2), true);
  }
  singleTokenDeletion(t2) {
    const e2 = t2.getTokenStream().LA(2);
    if (this.getExpectedTokens(t2).contains(e2)) {
      this.reportUnwantedToken(t2), t2.consume();
      const e3 = t2.getCurrentToken();
      return this.reportMatch(t2), e3;
    }
    return null;
  }
  getMissingSymbol(t2) {
    const e2 = t2.getCurrentToken(), n2 = this.getExpectedTokens(t2).first();
    let i2;
    i2 = n2 === s.EOF ? "<missing EOF>" : "<missing " + t2.literalNames[n2] + ">";
    let r2 = e2;
    const o2 = t2.getTokenStream().LT(-1);
    return r2.type === s.EOF && null !== o2 && (r2 = o2), t2.getTokenFactory().create(r2.source, n2, i2, s.DEFAULT_CHANNEL, -1, -1, r2.line, r2.column);
  }
  getExpectedTokens(t2) {
    return t2.getExpectedTokens();
  }
  getTokenErrorDisplay(t2) {
    if (null === t2) return "<no token>";
    let e2 = t2.text;
    return null === e2 && (e2 = t2.type === s.EOF ? "<EOF>" : "<" + t2.type + ">"), this.escapeWSAndQuote(e2);
  }
  escapeWSAndQuote(t2) {
    return "'" + (t2 = (t2 = (t2 = t2.replace(/\n/g, "\\n")).replace(/\r/g, "\\r")).replace(/\t/g, "\\t")) + "'";
  }
  getErrorRecoverySet(t2) {
    const e2 = t2._interp.atn;
    let n2 = t2._ctx;
    const i2 = new E();
    for (; null !== n2 && n2.invokingState >= 0; ) {
      const t3 = e2.states[n2.invokingState].transitions[0], s2 = e2.nextTokens(t3.followState);
      i2.addSet(s2), n2 = n2.parentCtx;
    }
    return i2.removeOne(s.EPSILON), i2;
  }
  consumeUntil(t2, e2) {
    let n2 = t2.getTokenStream().LA(1);
    for (; n2 !== s.EOF && !e2.contains(n2); ) t2.consume(), n2 = t2.getTokenStream().LA(1);
  }
};
var Ce = class extends _e {
  constructor() {
    super();
  }
  recover(t2, e2) {
    let n2 = t2._ctx;
    for (; null !== n2; ) n2.exception = e2, n2 = n2.parentCtx;
    throw new me(e2);
  }
  recoverInline(t2) {
    this.recover(t2, new fe(t2));
  }
  sync(t2) {
  }
};
var Ae = { RecognitionException: Dt, NoViableAltException: te, LexerNoViableAltException: Ft, InputMismatchException: fe, FailedPredicateException: xe, DiagnosticErrorListener: Se, BailErrorStrategy: Ce, DefaultErrorStrategy: _e, ErrorListener: Lt };
var Ne = class {
  constructor(t2, e2) {
    if (this.name = "<empty>", this.strdata = t2, this.decodeToUnicodeCodePoints = e2 || false, this._index = 0, this.data = [], this.decodeToUnicodeCodePoints) for (let t3 = 0; t3 < this.strdata.length; ) {
      const e3 = this.strdata.codePointAt(t3);
      this.data.push(e3), t3 += e3 <= 65535 ? 1 : 2;
    }
    else {
      this.data = new Array(this.strdata.length);
      for (let t3 = 0; t3 < this.strdata.length; t3++) this.data[t3] = this.strdata.charCodeAt(t3);
    }
    this._size = this.data.length;
  }
  reset() {
    this._index = 0;
  }
  consume() {
    if (this._index >= this._size) throw "cannot consume EOF";
    this._index += 1;
  }
  LA(t2) {
    if (0 === t2) return 0;
    t2 < 0 && (t2 += 1);
    const e2 = this._index + t2 - 1;
    return e2 < 0 || e2 >= this._size ? s.EOF : this.data[e2];
  }
  LT(t2) {
    return this.LA(t2);
  }
  mark() {
    return -1;
  }
  release(t2) {
  }
  seek(t2) {
    t2 <= this._index ? this._index = t2 : this._index = Math.min(t2, this._size);
  }
  getText(t2, e2) {
    if (e2 >= this._size && (e2 = this._size - 1), t2 >= this._size) return "";
    if (this.decodeToUnicodeCodePoints) {
      let n2 = "";
      for (let s2 = t2; s2 <= e2; s2++) n2 += String.fromCodePoint(this.data[s2]);
      return n2;
    }
    return this.strdata.slice(t2, e2 + 1);
  }
  toString() {
    return this.strdata;
  }
  get index() {
    return this._index;
  }
  get size() {
    return this._size;
  }
};
var ke = class extends Ne {
  constructor(t2, e2) {
    super(t2, e2);
  }
};
var Ie = t(import.meta.url)("fs");
var ye = "undefined" != typeof process && null != process.versions && null != process.versions.node;
var Le = class extends ke {
  static fromPath(t2, e2, n2) {
    if (!ye) throw new Error("FileStream is only available when running in Node!");
    Ie.readFile(t2, e2, function(t3, e3) {
      let s2 = null;
      null !== e3 && (s2 = new Ne(e3, true)), n2(t3, s2);
    });
  }
  constructor(t2, e2, n2) {
    if (!ye) throw new Error("FileStream is only available when running in Node!");
    super(Ie.readFileSync(t2, e2 || "utf-8"), n2), this.fileName = t2;
  }
};
var Oe = { fromString: function(t2) {
  return new Ne(t2, true);
}, fromBlob: function(t2, e2, n2, s2) {
  const i2 = new window.FileReader();
  i2.onload = function(t3) {
    const e3 = new Ne(t3.target.result, true);
    n2(e3);
  }, i2.onerror = s2, i2.readAsText(t2, e2);
}, fromBuffer: function(t2, e2) {
  return new Ne(t2.toString(e2), true);
}, fromPath: function(t2, e2, n2) {
  Le.fromPath(t2, e2, n2);
}, fromPathSync: function(t2, e2) {
  return new Le(t2, e2);
} };
var Re = { arrayToString: u, stringToCharArray: function(t2) {
  let e2 = new Uint16Array(t2.length);
  for (let n2 = 0; n2 < t2.length; n2++) e2[n2] = t2.charCodeAt(n2);
  return e2;
} };
var we = class {
};
var ve = class extends we {
  constructor(t2) {
    super(), this.tokenSource = t2, this.tokens = [], this.index = -1, this.fetchedEOF = false;
  }
  mark() {
    return 0;
  }
  release(t2) {
  }
  reset() {
    this.seek(0);
  }
  seek(t2) {
    this.lazyInit(), this.index = this.adjustSeekIndex(t2);
  }
  get size() {
    return this.tokens.length;
  }
  get(t2) {
    return this.lazyInit(), this.tokens[t2];
  }
  consume() {
    let t2 = false;
    if (t2 = this.index >= 0 && (this.fetchedEOF ? this.index < this.tokens.length - 1 : this.index < this.tokens.length), !t2 && this.LA(1) === s.EOF) throw "cannot consume EOF";
    this.sync(this.index + 1) && (this.index = this.adjustSeekIndex(this.index + 1));
  }
  sync(t2) {
    const e2 = t2 - this.tokens.length + 1;
    return !(e2 > 0) || this.fetch(e2) >= e2;
  }
  fetch(t2) {
    if (this.fetchedEOF) return 0;
    for (let e2 = 0; e2 < t2; e2++) {
      const t3 = this.tokenSource.nextToken();
      if (t3.tokenIndex = this.tokens.length, this.tokens.push(t3), t3.type === s.EOF) return this.fetchedEOF = true, e2 + 1;
    }
    return t2;
  }
  getTokens(t2, e2, n2) {
    if (void 0 === n2 && (n2 = null), t2 < 0 || e2 < 0) return null;
    this.lazyInit();
    const i2 = [];
    e2 >= this.tokens.length && (e2 = this.tokens.length - 1);
    for (let r2 = t2; r2 < e2; r2++) {
      const t3 = this.tokens[r2];
      if (t3.type === s.EOF) break;
      (null === n2 || n2.contains(t3.type)) && i2.push(t3);
    }
    return i2;
  }
  LA(t2) {
    return this.LT(t2).type;
  }
  LB(t2) {
    return this.index - t2 < 0 ? null : this.tokens[this.index - t2];
  }
  LT(t2) {
    if (this.lazyInit(), 0 === t2) return null;
    if (t2 < 0) return this.LB(-t2);
    const e2 = this.index + t2 - 1;
    return this.sync(e2), e2 >= this.tokens.length ? this.tokens[this.tokens.length - 1] : this.tokens[e2];
  }
  adjustSeekIndex(t2) {
    return t2;
  }
  lazyInit() {
    -1 === this.index && this.setup();
  }
  setup() {
    this.sync(0), this.index = this.adjustSeekIndex(0);
  }
  setTokenSource(t2) {
    this.tokenSource = t2, this.tokens = [], this.index = -1, this.fetchedEOF = false;
  }
  nextTokenOnChannel(t2, e2) {
    if (this.sync(t2), t2 >= this.tokens.length) return -1;
    let n2 = this.tokens[t2];
    for (; n2.channel !== e2; ) {
      if (n2.type === s.EOF) return -1;
      t2 += 1, this.sync(t2), n2 = this.tokens[t2];
    }
    return t2;
  }
  previousTokenOnChannel(t2, e2) {
    for (; t2 >= 0 && this.tokens[t2].channel !== e2; ) t2 -= 1;
    return t2;
  }
  getHiddenTokensToRight(t2, e2) {
    if (void 0 === e2 && (e2 = -1), this.lazyInit(), t2 < 0 || t2 >= this.tokens.length) throw t2 + " not in 0.." + this.tokens.length - 1;
    const n2 = this.nextTokenOnChannel(t2 + 1, Mt.DEFAULT_TOKEN_CHANNEL), s2 = t2 + 1, i2 = -1 === n2 ? this.tokens.length - 1 : n2;
    return this.filterForChannel(s2, i2, e2);
  }
  getHiddenTokensToLeft(t2, e2) {
    if (void 0 === e2 && (e2 = -1), this.lazyInit(), t2 < 0 || t2 >= this.tokens.length) throw t2 + " not in 0.." + this.tokens.length - 1;
    const n2 = this.previousTokenOnChannel(t2 - 1, Mt.DEFAULT_TOKEN_CHANNEL);
    if (n2 === t2 - 1) return null;
    const s2 = n2 + 1, i2 = t2 - 1;
    return this.filterForChannel(s2, i2, e2);
  }
  filterForChannel(t2, e2, n2) {
    const s2 = [];
    for (let i2 = t2; i2 < e2 + 1; i2++) {
      const t3 = this.tokens[i2];
      -1 === n2 ? t3.channel !== Mt.DEFAULT_TOKEN_CHANNEL && s2.push(t3) : t3.channel === n2 && s2.push(t3);
    }
    return 0 === s2.length ? null : s2;
  }
  getSourceName() {
    return this.tokenSource.getSourceName();
  }
  getText(t2) {
    this.lazyInit(), this.fill(), t2 || (t2 = new m(0, this.tokens.length - 1));
    let e2 = t2.start;
    e2 instanceof s && (e2 = e2.tokenIndex);
    let n2 = t2.stop;
    if (n2 instanceof s && (n2 = n2.tokenIndex), null === e2 || null === n2 || e2 < 0 || n2 < 0) return "";
    n2 >= this.tokens.length && (n2 = this.tokens.length - 1);
    let i2 = "";
    for (let t3 = e2; t3 < n2 + 1; t3++) {
      const e3 = this.tokens[t3];
      if (e3.type === s.EOF) break;
      i2 += e3.text;
    }
    return i2;
  }
  fill() {
    for (this.lazyInit(); 1e3 === this.fetch(1e3); ) ;
  }
};
Object.defineProperty(ve, "size", { get: function() {
  return this.tokens.length;
} });
var Pe = class extends ve {
  constructor(t2, e2) {
    super(t2), this.channel = void 0 === e2 ? s.DEFAULT_CHANNEL : e2;
  }
  adjustSeekIndex(t2) {
    return this.nextTokenOnChannel(t2, this.channel);
  }
  LB(t2) {
    if (0 === t2 || this.index - t2 < 0) return null;
    let e2 = this.index, n2 = 1;
    for (; n2 <= t2; ) e2 = this.previousTokenOnChannel(e2 - 1, this.channel), n2 += 1;
    return e2 < 0 ? null : this.tokens[e2];
  }
  LT(t2) {
    if (this.lazyInit(), 0 === t2) return null;
    if (t2 < 0) return this.LB(-t2);
    let e2 = this.index, n2 = 1;
    for (; n2 < t2; ) this.sync(e2 + 1) && (e2 = this.nextTokenOnChannel(e2 + 1, this.channel)), n2 += 1;
    return this.tokens[e2];
  }
  getNumberOfOnChannelTokens() {
    let t2 = 0;
    this.fill();
    for (let e2 = 0; e2 < this.tokens.length; e2++) {
      const n2 = this.tokens[e2];
      if (n2.channel === this.channel && (t2 += 1), n2.type === s.EOF) break;
    }
    return t2;
  }
};
var be = class extends ue {
  constructor(t2) {
    super(), this.parser = t2;
  }
  enterEveryRule(t2) {
    console.log("enter   " + this.parser.ruleNames[t2.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
  }
  visitTerminal(t2) {
    console.log("consume " + t2.symbol + " rule " + this.parser.ruleNames[this.parser._ctx.ruleIndex]);
  }
  exitEveryRule(t2) {
    console.log("exit    " + this.parser.ruleNames[t2.ruleIndex] + ", LT(1)=" + this.parser._input.LT(1).text);
  }
};
var De = class extends wt {
  constructor(t2) {
    super(), this._input = null, this._errHandler = new _e(), this._precedenceStack = [], this._precedenceStack.push(0), this._ctx = null, this.buildParseTrees = true, this._tracer = null, this._parseListeners = null, this._syntaxErrors = 0, this.setInputStream(t2);
  }
  reset() {
    null !== this._input && this._input.seek(0), this._errHandler.reset(this), this._ctx = null, this._syntaxErrors = 0, this.setTrace(false), this._precedenceStack = [], this._precedenceStack.push(0), null !== this._interp && this._interp.reset();
  }
  match(t2) {
    let e2 = this.getCurrentToken();
    return e2.type === t2 ? (this._errHandler.reportMatch(this), this.consume()) : (e2 = this._errHandler.recoverInline(this), this.buildParseTrees && -1 === e2.tokenIndex && this._ctx.addErrorNode(e2)), e2;
  }
  matchWildcard() {
    let t2 = this.getCurrentToken();
    return t2.type > 0 ? (this._errHandler.reportMatch(this), this.consume()) : (t2 = this._errHandler.recoverInline(this), this.buildParseTrees && -1 === t2.tokenIndex && this._ctx.addErrorNode(t2)), t2;
  }
  getParseListeners() {
    return this._parseListeners || [];
  }
  addParseListener(t2) {
    if (null === t2) throw "listener";
    null === this._parseListeners && (this._parseListeners = []), this._parseListeners.push(t2);
  }
  removeParseListener(t2) {
    if (null !== this._parseListeners) {
      const e2 = this._parseListeners.indexOf(t2);
      e2 >= 0 && this._parseListeners.splice(e2, 1), 0 === this._parseListeners.length && (this._parseListeners = null);
    }
  }
  removeParseListeners() {
    this._parseListeners = null;
  }
  triggerEnterRuleEvent() {
    if (null !== this._parseListeners) {
      const t2 = this._ctx;
      this._parseListeners.forEach(function(e2) {
        e2.enterEveryRule(t2), t2.enterRule(e2);
      });
    }
  }
  triggerExitRuleEvent() {
    if (null !== this._parseListeners) {
      const t2 = this._ctx;
      this._parseListeners.slice(0).reverse().forEach(function(e2) {
        t2.exitRule(e2), e2.exitEveryRule(t2);
      });
    }
  }
  getTokenFactory() {
    return this._input.tokenSource._factory;
  }
  setTokenFactory(t2) {
    this._input.tokenSource._factory = t2;
  }
  getATNWithBypassAlts() {
    const t2 = this.getSerializedATN();
    if (null === t2) throw "The current parser does not support an ATN with bypass alternatives.";
    let e2 = this.bypassAltsAtnCache[t2];
    if (null === e2) {
      const n2 = new xt();
      n2.generateRuleBypassTransitions = true, e2 = new yt(n2).deserialize(t2), this.bypassAltsAtnCache[t2] = e2;
    }
    return e2;
  }
  getInputStream() {
    return this.getTokenStream();
  }
  setInputStream(t2) {
    this.setTokenStream(t2);
  }
  getTokenStream() {
    return this._input;
  }
  setTokenStream(t2) {
    this._input = null, this.reset(), this._input = t2;
  }
  get syntaxErrorsCount() {
    return this._syntaxErrors;
  }
  getCurrentToken() {
    return this._input.LT(1);
  }
  notifyErrorListeners(t2, e2, n2) {
    n2 = n2 || null, null === (e2 = e2 || null) && (e2 = this.getCurrentToken()), this._syntaxErrors += 1;
    const s2 = e2.line, i2 = e2.column;
    this.getErrorListener().syntaxError(this, e2, s2, i2, t2, n2);
  }
  consume() {
    const t2 = this.getCurrentToken();
    t2.type !== s.EOF && this.getInputStream().consume();
    const e2 = null !== this._parseListeners && this._parseListeners.length > 0;
    if (this.buildParseTrees || e2) {
      let n2;
      n2 = this._errHandler.inErrorRecoveryMode(this) ? this._ctx.addErrorNode(t2) : this._ctx.addTokenNode(t2), n2.invokingState = this.state, e2 && this._parseListeners.forEach(function(t3) {
        n2 instanceof b || void 0 !== n2.isErrorNode && n2.isErrorNode() ? t3.visitErrorNode(n2) : n2 instanceof P && t3.visitTerminal(n2);
      });
    }
    return t2;
  }
  addContextToParseTree() {
    null !== this._ctx.parentCtx && this._ctx.parentCtx.addChild(this._ctx);
  }
  enterRule(t2, e2, n2) {
    this.state = e2, this._ctx = t2, this._ctx.start = this._input.LT(1), this.buildParseTrees && this.addContextToParseTree(), this.triggerEnterRuleEvent();
  }
  exitRule() {
    this._ctx.stop = this._input.LT(-1), this.triggerExitRuleEvent(), this.state = this._ctx.invokingState, this._ctx = this._ctx.parentCtx;
  }
  enterOuterAlt(t2, e2) {
    t2.setAltNumber(e2), this.buildParseTrees && this._ctx !== t2 && null !== this._ctx.parentCtx && (this._ctx.parentCtx.removeLastChild(), this._ctx.parentCtx.addChild(t2)), this._ctx = t2;
  }
  getPrecedence() {
    return 0 === this._precedenceStack.length ? -1 : this._precedenceStack[this._precedenceStack.length - 1];
  }
  enterRecursionRule(t2, e2, n2, s2) {
    this.state = e2, this._precedenceStack.push(s2), this._ctx = t2, this._ctx.start = this._input.LT(1), this.triggerEnterRuleEvent();
  }
  pushNewRecursionContext(t2, e2, n2) {
    const s2 = this._ctx;
    s2.parentCtx = t2, s2.invokingState = e2, s2.stop = this._input.LT(-1), this._ctx = t2, this._ctx.start = s2.start, this.buildParseTrees && this._ctx.addChild(s2), this.triggerEnterRuleEvent();
  }
  unrollRecursionContexts(t2) {
    this._precedenceStack.pop(), this._ctx.stop = this._input.LT(-1);
    const e2 = this._ctx, n2 = this.getParseListeners();
    if (null !== n2 && n2.length > 0) for (; this._ctx !== t2; ) this.triggerExitRuleEvent(), this._ctx = this._ctx.parentCtx;
    else this._ctx = t2;
    e2.parentCtx = t2, this.buildParseTrees && null !== t2 && t2.addChild(e2);
  }
  getInvokingContext(t2) {
    let e2 = this._ctx;
    for (; null !== e2; ) {
      if (e2.ruleIndex === t2) return e2;
      e2 = e2.parentCtx;
    }
    return null;
  }
  precpred(t2, e2) {
    return e2 >= this._precedenceStack[this._precedenceStack.length - 1];
  }
  inContext(t2) {
    return false;
  }
  isExpectedToken(t2) {
    const e2 = this._interp.atn;
    let n2 = this._ctx;
    const i2 = e2.states[this.state];
    let r2 = e2.nextTokens(i2);
    if (r2.contains(t2)) return true;
    if (!r2.contains(s.EPSILON)) return false;
    for (; null !== n2 && n2.invokingState >= 0 && r2.contains(s.EPSILON); ) {
      const s2 = e2.states[n2.invokingState].transitions[0];
      if (r2 = e2.nextTokens(s2.followState), r2.contains(t2)) return true;
      n2 = n2.parentCtx;
    }
    return !(!r2.contains(s.EPSILON) || t2 !== s.EOF);
  }
  getExpectedTokens() {
    return this._interp.atn.getExpectedTokens(this.state, this._ctx);
  }
  getExpectedTokensWithinCurrentRule() {
    const t2 = this._interp.atn, e2 = t2.states[this.state];
    return t2.nextTokens(e2);
  }
  getRuleIndex(t2) {
    const e2 = this.getRuleIndexMap()[t2];
    return null !== e2 ? e2 : -1;
  }
  getRuleInvocationStack(t2) {
    null === (t2 = t2 || null) && (t2 = this._ctx);
    const e2 = [];
    for (; null !== t2; ) {
      const n2 = t2.ruleIndex;
      n2 < 0 ? e2.push("n/a") : e2.push(this.ruleNames[n2]), t2 = t2.parentCtx;
    }
    return e2;
  }
  getDFAStrings() {
    return this._interp.decisionToDFA.toString();
  }
  dumpDFA() {
    let t2 = false;
    for (let e2 = 0; e2 < this._interp.decisionToDFA.length; e2++) {
      const n2 = this._interp.decisionToDFA[e2];
      n2.states.length > 0 && (t2 && console.log(), this.printer.println("Decision " + n2.decision + ":"), this.printer.print(n2.toString(this.literalNames, this.symbolicNames)), t2 = true);
    }
  }
  getSourceName() {
    return this._input.getSourceName();
  }
  setTrace(t2) {
    t2 ? (null !== this._tracer && this.removeParseListener(this._tracer), this._tracer = new be(this), this.addParseListener(this._tracer)) : (this.removeParseListener(this._tracer), this._tracer = null);
  }
};
De.bypassAltsAtnCache = {};
var Fe = class extends P {
  constructor(t2) {
    super(), this.parentCtx = null, this.symbol = t2;
  }
  getChild(t2) {
    return null;
  }
  getSymbol() {
    return this.symbol;
  }
  getParent() {
    return this.parentCtx;
  }
  getPayload() {
    return this.symbol;
  }
  getSourceInterval() {
    if (null === this.symbol) return m.INVALID_INTERVAL;
    const t2 = this.symbol.tokenIndex;
    return new m(t2, t2);
  }
  getChildCount() {
    return 0;
  }
  accept(t2) {
    return t2.visitTerminal(this);
  }
  getText() {
    return this.symbol.text;
  }
  toString() {
    return this.symbol.type === s.EOF ? "<EOF>" : this.symbol.text;
  }
};
var Me = class extends Fe {
  constructor(t2) {
    super(t2);
  }
  isErrorNode() {
    return true;
  }
  accept(t2) {
    return t2.visitErrorNode(this);
  }
};
var Ue = class extends M {
  constructor(t2, e2) {
    super(t2, e2), this.children = null, this.start = null, this.stop = null, this.exception = null;
  }
  copyFrom(t2) {
    this.parentCtx = t2.parentCtx, this.invokingState = t2.invokingState, this.children = null, this.start = t2.start, this.stop = t2.stop, t2.children && (this.children = [], t2.children.map(function(t3) {
      t3 instanceof Me && (this.children.push(t3), t3.parentCtx = this);
    }, this));
  }
  enterRule(t2) {
  }
  exitRule(t2) {
  }
  addChild(t2) {
    return null === this.children && (this.children = []), this.children.push(t2), t2;
  }
  removeLastChild() {
    null !== this.children && this.children.pop();
  }
  addTokenNode(t2) {
    const e2 = new Fe(t2);
    return this.addChild(e2), e2.parentCtx = this, e2;
  }
  addErrorNode(t2) {
    const e2 = new Me(t2);
    return this.addChild(e2), e2.parentCtx = this, e2;
  }
  getChild(t2, e2) {
    if (e2 = e2 || null, null === this.children || t2 < 0 || t2 >= this.children.length) return null;
    if (null === e2) return this.children[t2];
    for (let n2 = 0; n2 < this.children.length; n2++) {
      const s2 = this.children[n2];
      if (s2 instanceof e2) {
        if (0 === t2) return s2;
        t2 -= 1;
      }
    }
    return null;
  }
  getToken(t2, e2) {
    if (null === this.children || e2 < 0 || e2 >= this.children.length) return null;
    for (let n2 = 0; n2 < this.children.length; n2++) {
      const s2 = this.children[n2];
      if (s2 instanceof P && s2.symbol.type === t2) {
        if (0 === e2) return s2;
        e2 -= 1;
      }
    }
    return null;
  }
  getTokens(t2) {
    if (null === this.children) return [];
    {
      const e2 = [];
      for (let n2 = 0; n2 < this.children.length; n2++) {
        const s2 = this.children[n2];
        s2 instanceof P && s2.symbol.type === t2 && e2.push(s2);
      }
      return e2;
    }
  }
  getTypedRuleContext(t2, e2) {
    return this.getChild(e2, t2);
  }
  getTypedRuleContexts(t2) {
    if (null === this.children) return [];
    {
      const e2 = [];
      for (let n2 = 0; n2 < this.children.length; n2++) {
        const s2 = this.children[n2];
        s2 instanceof t2 && e2.push(s2);
      }
      return e2;
    }
  }
  getChildCount() {
    return null === this.children ? 0 : this.children.length;
  }
  getSourceInterval() {
    return null === this.start || null === this.stop ? m.INVALID_INTERVAL : new m(this.start.tokenIndex, this.stop.tokenIndex);
  }
};
M.EMPTY = new Ue();
var Be = class _Be {
  static DEFAULT_PROGRAM_NAME = "default";
  constructor(t2) {
    this.tokens = t2, this.programs = /* @__PURE__ */ new Map();
  }
  getTokenStream() {
    return this.tokens;
  }
  insertAfter(t2, e2) {
    let n2, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _Be.DEFAULT_PROGRAM_NAME;
    n2 = "number" == typeof t2 ? t2 : t2.tokenIndex;
    let i2 = this.getProgram(s2), r2 = new qe(this.tokens, n2, i2.length, e2);
    i2.push(r2);
  }
  insertBefore(t2, e2) {
    let n2, s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _Be.DEFAULT_PROGRAM_NAME;
    n2 = "number" == typeof t2 ? t2 : t2.tokenIndex;
    const i2 = this.getProgram(s2), r2 = new Ve(this.tokens, n2, i2.length, e2);
    i2.push(r2);
  }
  replaceSingle(t2, e2) {
    let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _Be.DEFAULT_PROGRAM_NAME;
    this.replace(t2, t2, e2, n2);
  }
  replace(t2, e2, n2) {
    let s2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _Be.DEFAULT_PROGRAM_NAME;
    if ("number" != typeof t2 && (t2 = t2.tokenIndex), "number" != typeof e2 && (e2 = e2.tokenIndex), t2 > e2 || t2 < 0 || e2 < 0 || e2 >= this.tokens.size) throw new RangeError(`replace: range invalid: ${t2}..${e2}(size=${this.tokens.size})`);
    let i2 = this.getProgram(s2), r2 = new He(this.tokens, t2, e2, i2.length, n2);
    i2.push(r2);
  }
  delete(t2, e2) {
    let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _Be.DEFAULT_PROGRAM_NAME;
    void 0 === e2 && (e2 = t2), this.replace(t2, e2, null, n2);
  }
  getProgram(t2) {
    let e2 = this.programs.get(t2);
    return null == e2 && (e2 = this.initializeProgram(t2)), e2;
  }
  initializeProgram(t2) {
    const e2 = [];
    return this.programs.set(t2, e2), e2;
  }
  getText(t2) {
    let e2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _Be.DEFAULT_PROGRAM_NAME;
    e2 = t2 instanceof m ? t2 : new m(0, this.tokens.size - 1), "string" == typeof t2 && (n2 = t2);
    const i2 = this.programs.get(n2);
    let r2 = e2.start, o2 = e2.stop;
    if (o2 > this.tokens.size - 1 && (o2 = this.tokens.size - 1), r2 < 0 && (r2 = 0), null == i2 || 0 === i2.length) return this.tokens.getText(new m(r2, o2));
    let a2 = [], l2 = this.reduceToSingleOperationPerIndex(i2), h2 = r2;
    for (; h2 <= o2 && h2 < this.tokens.size; ) {
      let t3 = l2.get(h2);
      l2.delete(h2);
      let e3 = this.tokens.get(h2);
      null == t3 ? (e3.type !== s.EOF && a2.push(String(e3.text)), h2++) : h2 = t3.execute(a2);
    }
    if (o2 === this.tokens.size - 1) for (const t3 of l2.values()) t3.index >= this.tokens.size - 1 && a2.push(t3.text.toString());
    return a2.join("");
  }
  reduceToSingleOperationPerIndex(t2) {
    for (let e3 = 0; e3 < t2.length; e3++) {
      let n2 = t2[e3];
      if (null == n2) continue;
      if (!(n2 instanceof He)) continue;
      let s2 = n2, i2 = this.getKindOfOps(t2, Ve, e3);
      for (let e4 of i2) e4.index === s2.index ? (t2[e4.instructionIndex] = void 0, s2.text = e4.text.toString() + (null != s2.text ? s2.text.toString() : "")) : e4.index > s2.index && e4.index <= s2.lastIndex && (t2[e4.instructionIndex] = void 0);
      let r2 = this.getKindOfOps(t2, He, e3);
      for (let e4 of r2) {
        if (e4.index >= s2.index && e4.lastIndex <= s2.lastIndex) {
          t2[e4.instructionIndex] = void 0;
          continue;
        }
        let n3 = e4.lastIndex < s2.index || e4.index > s2.lastIndex;
        if (null != e4.text || null != s2.text || n3) {
          if (!n3) throw new Error(`replace op boundaries of ${s2} overlap with previous ${e4}`);
        } else t2[e4.instructionIndex] = void 0, s2.index = Math.min(e4.index, s2.index), s2.lastIndex = Math.max(e4.lastIndex, s2.lastIndex);
      }
    }
    for (let e3 = 0; e3 < t2.length; e3++) {
      let n2 = t2[e3];
      if (null == n2) continue;
      if (!(n2 instanceof Ve)) continue;
      let s2 = n2, i2 = this.getKindOfOps(t2, Ve, e3);
      for (let e4 of i2) e4.index === s2.index && (e4 instanceof qe ? (s2.text = this.catOpText(e4.text, s2.text), t2[e4.instructionIndex] = void 0) : e4 instanceof Ve && (s2.text = this.catOpText(s2.text, e4.text), t2[e4.instructionIndex] = void 0));
      let r2 = this.getKindOfOps(t2, He, e3);
      for (let n3 of r2) if (s2.index !== n3.index) {
        if (s2.index >= n3.index && s2.index <= n3.lastIndex) throw new Error(`insert op ${s2} within boundaries of previous ${n3}`);
      } else n3.text = this.catOpText(s2.text, n3.text), t2[e3] = void 0;
    }
    let e2 = /* @__PURE__ */ new Map();
    for (let n2 of t2) if (null != n2) {
      if (null != e2.get(n2.index)) throw new Error("should only be one op per index");
      e2.set(n2.index, n2);
    }
    return e2;
  }
  catOpText(t2, e2) {
    let n2 = "", s2 = "";
    return null != t2 && (n2 = t2.toString()), null != e2 && (s2 = e2.toString()), n2 + s2;
  }
  getKindOfOps(t2, e2, n2) {
    return t2.slice(0, n2).filter((t3) => t3 && t3 instanceof e2);
  }
};
var ze = class {
  constructor(t2, e2, n2, s2) {
    this.tokens = t2, this.instructionIndex = n2, this.index = e2, this.text = void 0 === s2 ? "" : s2;
  }
  toString() {
    let t2 = this.constructor.name;
    const e2 = t2.indexOf("$");
    return t2 = t2.substring(e2 + 1, t2.length), "<" + t2 + "@" + this.tokens.get(this.index) + ':"' + this.text + '">';
  }
};
var Ve = class extends ze {
  constructor(t2, e2, n2, s2) {
    super(t2, e2, n2, s2);
  }
  execute(t2) {
    return this.text && t2.push(this.text.toString()), this.tokens.get(this.index).type !== s.EOF && t2.push(String(this.tokens.get(this.index).text)), this.index + 1;
  }
};
var qe = class extends Ve {
  constructor(t2, e2, n2, s2) {
    super(t2, e2 + 1, n2, s2);
  }
};
var He = class extends ze {
  constructor(t2, e2, n2, s2, i2) {
    super(t2, e2, s2, i2), this.lastIndex = n2;
  }
  execute(t2) {
    return this.text && t2.push(this.text.toString()), this.lastIndex + 1;
  }
  toString() {
    return null == this.text ? "<DeleteOp@" + this.tokens.get(this.index) + ".." + this.tokens.get(this.lastIndex) + ">" : "<ReplaceOp@" + this.tokens.get(this.index) + ".." + this.tokens.get(this.lastIndex) + ':"' + this.text + '">';
  }
};
var Ke = { atn: ie, dfa: le, context: he, misc: ce, tree: pe, error: Ae, Token: s, CommonToken: vt, CharStreams: Oe, CharStream: Ne, InputStream: ke, FileStream: Le, CommonTokenStream: Pe, Lexer: Mt, Parser: De, ParserRuleContext: Ue, Interval: m, IntervalSet: E, LL1Analyzer: W, Utils: Re, TokenStreamRewriter: Be };
var Ye = n.MG;
var Ge = n.fr;
var We = n.sR;
var je = n.Zo;
var $e = n.iH;
var Xe = n.rt;
var Je = n.jB;
var Ze = n.M8;
var Qe = n.$t;
var tn = n.aq;
var en = n.pG;
var nn = n.eP;
var sn = n.tf;
var rn = n.KU;
var on = n.zW;
var an = n.IX;
var ln = n.mY;
var hn = n.a7;
var cn = n.JG;
var un = n.ay;
var dn = n.X2;
var gn = n.WU;
var pn = n.Uw;
var fn = n.gw;
var xn = n.iX;
var Tn = n.re;
var Sn = n.Pg;
var mn = n.tD;
var En = n.R$;
var _n = n.Dj;
var Cn = n.m7;
var An = n.NZ;
var Nn = n.xo;
var kn = n.ou;
var In = n.qC;
var yn = n.mD;
var Ln = n.Ay;

// generated/RELLexer.js
var serializedATN = [
  4,
  0,
  55,
  679,
  6,
  -1,
  2,
  0,
  7,
  0,
  2,
  1,
  7,
  1,
  2,
  2,
  7,
  2,
  2,
  3,
  7,
  3,
  2,
  4,
  7,
  4,
  2,
  5,
  7,
  5,
  2,
  6,
  7,
  6,
  2,
  7,
  7,
  7,
  2,
  8,
  7,
  8,
  2,
  9,
  7,
  9,
  2,
  10,
  7,
  10,
  2,
  11,
  7,
  11,
  2,
  12,
  7,
  12,
  2,
  13,
  7,
  13,
  2,
  14,
  7,
  14,
  2,
  15,
  7,
  15,
  2,
  16,
  7,
  16,
  2,
  17,
  7,
  17,
  2,
  18,
  7,
  18,
  2,
  19,
  7,
  19,
  2,
  20,
  7,
  20,
  2,
  21,
  7,
  21,
  2,
  22,
  7,
  22,
  2,
  23,
  7,
  23,
  2,
  24,
  7,
  24,
  2,
  25,
  7,
  25,
  2,
  26,
  7,
  26,
  2,
  27,
  7,
  27,
  2,
  28,
  7,
  28,
  2,
  29,
  7,
  29,
  2,
  30,
  7,
  30,
  2,
  31,
  7,
  31,
  2,
  32,
  7,
  32,
  2,
  33,
  7,
  33,
  2,
  34,
  7,
  34,
  2,
  35,
  7,
  35,
  2,
  36,
  7,
  36,
  2,
  37,
  7,
  37,
  2,
  38,
  7,
  38,
  2,
  39,
  7,
  39,
  2,
  40,
  7,
  40,
  2,
  41,
  7,
  41,
  2,
  42,
  7,
  42,
  2,
  43,
  7,
  43,
  2,
  44,
  7,
  44,
  2,
  45,
  7,
  45,
  2,
  46,
  7,
  46,
  2,
  47,
  7,
  47,
  2,
  48,
  7,
  48,
  2,
  49,
  7,
  49,
  2,
  50,
  7,
  50,
  2,
  51,
  7,
  51,
  2,
  52,
  7,
  52,
  2,
  53,
  7,
  53,
  2,
  54,
  7,
  54,
  1,
  0,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  8,
  1,
  8,
  1,
  8,
  1,
  8,
  1,
  9,
  1,
  9,
  1,
  9,
  1,
  9,
  1,
  9,
  1,
  9,
  1,
  9,
  1,
  10,
  1,
  10,
  1,
  10,
  1,
  10,
  1,
  11,
  1,
  11,
  1,
  11,
  1,
  11,
  1,
  12,
  1,
  12,
  1,
  12,
  1,
  13,
  1,
  13,
  1,
  13,
  1,
  13,
  1,
  13,
  1,
  14,
  1,
  14,
  1,
  14,
  1,
  14,
  1,
  14,
  1,
  15,
  1,
  15,
  1,
  15,
  1,
  15,
  1,
  15,
  1,
  15,
  1,
  15,
  1,
  16,
  1,
  16,
  1,
  16,
  1,
  17,
  1,
  17,
  1,
  17,
  1,
  17,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  1,
  18,
  3,
  18,
  218,
  8,
  18,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  1,
  19,
  3,
  19,
  247,
  8,
  19,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  3,
  20,
  292,
  8,
  20,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  1,
  21,
  3,
  21,
  347,
  8,
  21,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  1,
  22,
  3,
  22,
  364,
  8,
  22,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  1,
  23,
  3,
  23,
  395,
  8,
  23,
  1,
  24,
  1,
  24,
  1,
  24,
  1,
  24,
  1,
  24,
  1,
  24,
  1,
  24,
  1,
  24,
  1,
  24,
  1,
  24,
  1,
  24,
  1,
  24,
  3,
  24,
  409,
  8,
  24,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  1,
  25,
  3,
  25,
  437,
  8,
  25,
  1,
  26,
  1,
  26,
  1,
  26,
  1,
  26,
  1,
  26,
  1,
  26,
  1,
  26,
  1,
  26,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  1,
  27,
  3,
  27,
  465,
  8,
  27,
  1,
  28,
  1,
  28,
  1,
  28,
  1,
  28,
  1,
  28,
  1,
  28,
  1,
  28,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  29,
  1,
  30,
  1,
  30,
  1,
  30,
  1,
  30,
  1,
  30,
  1,
  30,
  1,
  30,
  1,
  30,
  1,
  30,
  1,
  30,
  1,
  31,
  1,
  31,
  1,
  31,
  1,
  31,
  3,
  31,
  500,
  8,
  31,
  1,
  32,
  1,
  32,
  1,
  32,
  1,
  33,
  1,
  33,
  1,
  33,
  1,
  33,
  1,
  33,
  3,
  33,
  510,
  8,
  33,
  1,
  34,
  1,
  34,
  1,
  34,
  1,
  34,
  1,
  34,
  1,
  34,
  3,
  34,
  518,
  8,
  34,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  1,
  35,
  3,
  35,
  534,
  8,
  35,
  1,
  36,
  1,
  36,
  1,
  36,
  1,
  36,
  1,
  36,
  1,
  36,
  1,
  36,
  1,
  36,
  1,
  36,
  1,
  36,
  1,
  36,
  3,
  36,
  547,
  8,
  36,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  1,
  37,
  3,
  37,
  568,
  8,
  37,
  1,
  38,
  1,
  38,
  1,
  39,
  1,
  39,
  1,
  40,
  1,
  40,
  1,
  41,
  1,
  41,
  1,
  42,
  1,
  42,
  1,
  43,
  1,
  43,
  1,
  44,
  1,
  44,
  1,
  45,
  1,
  45,
  1,
  46,
  1,
  46,
  1,
  47,
  3,
  47,
  589,
  8,
  47,
  1,
  47,
  4,
  47,
  592,
  8,
  47,
  11,
  47,
  12,
  47,
  593,
  1,
  47,
  1,
  47,
  4,
  47,
  598,
  8,
  47,
  11,
  47,
  12,
  47,
  599,
  3,
  47,
  602,
  8,
  47,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  5,
  48,
  608,
  8,
  48,
  10,
  48,
  12,
  48,
  611,
  9,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  1,
  48,
  5,
  48,
  618,
  8,
  48,
  10,
  48,
  12,
  48,
  621,
  9,
  48,
  1,
  48,
  3,
  48,
  624,
  8,
  48,
  1,
  49,
  1,
  49,
  1,
  49,
  1,
  49,
  1,
  49,
  1,
  49,
  1,
  49,
  1,
  49,
  1,
  49,
  3,
  49,
  635,
  8,
  49,
  1,
  50,
  1,
  50,
  5,
  50,
  639,
  8,
  50,
  10,
  50,
  12,
  50,
  642,
  9,
  50,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  51,
  1,
  52,
  4,
  52,
  649,
  8,
  52,
  11,
  52,
  12,
  52,
  650,
  1,
  52,
  1,
  52,
  1,
  53,
  1,
  53,
  1,
  53,
  1,
  53,
  5,
  53,
  659,
  8,
  53,
  10,
  53,
  12,
  53,
  662,
  9,
  53,
  1,
  53,
  1,
  53,
  1,
  54,
  1,
  54,
  1,
  54,
  1,
  54,
  5,
  54,
  670,
  8,
  54,
  10,
  54,
  12,
  54,
  673,
  9,
  54,
  1,
  54,
  1,
  54,
  1,
  54,
  1,
  54,
  1,
  54,
  1,
  671,
  0,
  55,
  1,
  1,
  3,
  2,
  5,
  3,
  7,
  4,
  9,
  5,
  11,
  6,
  13,
  7,
  15,
  8,
  17,
  9,
  19,
  10,
  21,
  11,
  23,
  12,
  25,
  13,
  27,
  14,
  29,
  15,
  31,
  16,
  33,
  17,
  35,
  18,
  37,
  19,
  39,
  20,
  41,
  21,
  43,
  22,
  45,
  23,
  47,
  24,
  49,
  25,
  51,
  26,
  53,
  27,
  55,
  28,
  57,
  29,
  59,
  30,
  61,
  31,
  63,
  32,
  65,
  33,
  67,
  34,
  69,
  35,
  71,
  36,
  73,
  37,
  75,
  38,
  77,
  39,
  79,
  40,
  81,
  41,
  83,
  42,
  85,
  43,
  87,
  44,
  89,
  45,
  91,
  46,
  93,
  47,
  95,
  48,
  97,
  49,
  99,
  50,
  101,
  51,
  103,
  52,
  105,
  53,
  107,
  54,
  109,
  55,
  1,
  0,
  7,
  1,
  0,
  48,
  57,
  2,
  0,
  34,
  34,
  92,
  92,
  2,
  0,
  39,
  39,
  92,
  92,
  3,
  0,
  65,
  90,
  95,
  95,
  97,
  122,
  4,
  0,
  48,
  57,
  65,
  90,
  95,
  95,
  97,
  122,
  3,
  0,
  9,
  10,
  13,
  13,
  32,
  32,
  2,
  0,
  10,
  10,
  13,
  13,
  727,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  3,
  1,
  0,
  0,
  0,
  0,
  5,
  1,
  0,
  0,
  0,
  0,
  7,
  1,
  0,
  0,
  0,
  0,
  9,
  1,
  0,
  0,
  0,
  0,
  11,
  1,
  0,
  0,
  0,
  0,
  13,
  1,
  0,
  0,
  0,
  0,
  15,
  1,
  0,
  0,
  0,
  0,
  17,
  1,
  0,
  0,
  0,
  0,
  19,
  1,
  0,
  0,
  0,
  0,
  21,
  1,
  0,
  0,
  0,
  0,
  23,
  1,
  0,
  0,
  0,
  0,
  25,
  1,
  0,
  0,
  0,
  0,
  27,
  1,
  0,
  0,
  0,
  0,
  29,
  1,
  0,
  0,
  0,
  0,
  31,
  1,
  0,
  0,
  0,
  0,
  33,
  1,
  0,
  0,
  0,
  0,
  35,
  1,
  0,
  0,
  0,
  0,
  37,
  1,
  0,
  0,
  0,
  0,
  39,
  1,
  0,
  0,
  0,
  0,
  41,
  1,
  0,
  0,
  0,
  0,
  43,
  1,
  0,
  0,
  0,
  0,
  45,
  1,
  0,
  0,
  0,
  0,
  47,
  1,
  0,
  0,
  0,
  0,
  49,
  1,
  0,
  0,
  0,
  0,
  51,
  1,
  0,
  0,
  0,
  0,
  53,
  1,
  0,
  0,
  0,
  0,
  55,
  1,
  0,
  0,
  0,
  0,
  57,
  1,
  0,
  0,
  0,
  0,
  59,
  1,
  0,
  0,
  0,
  0,
  61,
  1,
  0,
  0,
  0,
  0,
  63,
  1,
  0,
  0,
  0,
  0,
  65,
  1,
  0,
  0,
  0,
  0,
  67,
  1,
  0,
  0,
  0,
  0,
  69,
  1,
  0,
  0,
  0,
  0,
  71,
  1,
  0,
  0,
  0,
  0,
  73,
  1,
  0,
  0,
  0,
  0,
  75,
  1,
  0,
  0,
  0,
  0,
  77,
  1,
  0,
  0,
  0,
  0,
  79,
  1,
  0,
  0,
  0,
  0,
  81,
  1,
  0,
  0,
  0,
  0,
  83,
  1,
  0,
  0,
  0,
  0,
  85,
  1,
  0,
  0,
  0,
  0,
  87,
  1,
  0,
  0,
  0,
  0,
  89,
  1,
  0,
  0,
  0,
  0,
  91,
  1,
  0,
  0,
  0,
  0,
  93,
  1,
  0,
  0,
  0,
  0,
  95,
  1,
  0,
  0,
  0,
  0,
  97,
  1,
  0,
  0,
  0,
  0,
  99,
  1,
  0,
  0,
  0,
  0,
  101,
  1,
  0,
  0,
  0,
  0,
  103,
  1,
  0,
  0,
  0,
  0,
  105,
  1,
  0,
  0,
  0,
  0,
  107,
  1,
  0,
  0,
  0,
  0,
  109,
  1,
  0,
  0,
  0,
  1,
  111,
  1,
  0,
  0,
  0,
  3,
  113,
  1,
  0,
  0,
  0,
  5,
  119,
  1,
  0,
  0,
  0,
  7,
  124,
  1,
  0,
  0,
  0,
  9,
  128,
  1,
  0,
  0,
  0,
  11,
  133,
  1,
  0,
  0,
  0,
  13,
  137,
  1,
  0,
  0,
  0,
  15,
  144,
  1,
  0,
  0,
  0,
  17,
  151,
  1,
  0,
  0,
  0,
  19,
  155,
  1,
  0,
  0,
  0,
  21,
  162,
  1,
  0,
  0,
  0,
  23,
  166,
  1,
  0,
  0,
  0,
  25,
  170,
  1,
  0,
  0,
  0,
  27,
  173,
  1,
  0,
  0,
  0,
  29,
  178,
  1,
  0,
  0,
  0,
  31,
  183,
  1,
  0,
  0,
  0,
  33,
  190,
  1,
  0,
  0,
  0,
  35,
  193,
  1,
  0,
  0,
  0,
  37,
  217,
  1,
  0,
  0,
  0,
  39,
  246,
  1,
  0,
  0,
  0,
  41,
  291,
  1,
  0,
  0,
  0,
  43,
  346,
  1,
  0,
  0,
  0,
  45,
  363,
  1,
  0,
  0,
  0,
  47,
  394,
  1,
  0,
  0,
  0,
  49,
  408,
  1,
  0,
  0,
  0,
  51,
  436,
  1,
  0,
  0,
  0,
  53,
  438,
  1,
  0,
  0,
  0,
  55,
  464,
  1,
  0,
  0,
  0,
  57,
  466,
  1,
  0,
  0,
  0,
  59,
  473,
  1,
  0,
  0,
  0,
  61,
  485,
  1,
  0,
  0,
  0,
  63,
  499,
  1,
  0,
  0,
  0,
  65,
  501,
  1,
  0,
  0,
  0,
  67,
  509,
  1,
  0,
  0,
  0,
  69,
  517,
  1,
  0,
  0,
  0,
  71,
  533,
  1,
  0,
  0,
  0,
  73,
  546,
  1,
  0,
  0,
  0,
  75,
  567,
  1,
  0,
  0,
  0,
  77,
  569,
  1,
  0,
  0,
  0,
  79,
  571,
  1,
  0,
  0,
  0,
  81,
  573,
  1,
  0,
  0,
  0,
  83,
  575,
  1,
  0,
  0,
  0,
  85,
  577,
  1,
  0,
  0,
  0,
  87,
  579,
  1,
  0,
  0,
  0,
  89,
  581,
  1,
  0,
  0,
  0,
  91,
  583,
  1,
  0,
  0,
  0,
  93,
  585,
  1,
  0,
  0,
  0,
  95,
  588,
  1,
  0,
  0,
  0,
  97,
  623,
  1,
  0,
  0,
  0,
  99,
  634,
  1,
  0,
  0,
  0,
  101,
  636,
  1,
  0,
  0,
  0,
  103,
  643,
  1,
  0,
  0,
  0,
  105,
  648,
  1,
  0,
  0,
  0,
  107,
  654,
  1,
  0,
  0,
  0,
  109,
  665,
  1,
  0,
  0,
  0,
  111,
  112,
  5,
  64,
  0,
  0,
  112,
  2,
  1,
  0,
  0,
  0,
  113,
  114,
  5,
  109,
  0,
  0,
  114,
  115,
  5,
  101,
  0,
  0,
  115,
  116,
  5,
  114,
  0,
  0,
  116,
  117,
  5,
  103,
  0,
  0,
  117,
  118,
  5,
  101,
  0,
  0,
  118,
  4,
  1,
  0,
  0,
  0,
  119,
  120,
  5,
  115,
  0,
  0,
  120,
  121,
  5,
  111,
  0,
  0,
  121,
  122,
  5,
  109,
  0,
  0,
  122,
  123,
  5,
  101,
  0,
  0,
  123,
  6,
  1,
  0,
  0,
  0,
  124,
  125,
  5,
  97,
  0,
  0,
  125,
  126,
  5,
  108,
  0,
  0,
  126,
  127,
  5,
  108,
  0,
  0,
  127,
  8,
  1,
  0,
  0,
  0,
  128,
  129,
  5,
  110,
  0,
  0,
  129,
  130,
  5,
  111,
  0,
  0,
  130,
  131,
  5,
  110,
  0,
  0,
  131,
  132,
  5,
  101,
  0,
  0,
  132,
  10,
  1,
  0,
  0,
  0,
  133,
  134,
  5,
  109,
  0,
  0,
  134,
  135,
  5,
  97,
  0,
  0,
  135,
  136,
  5,
  112,
  0,
  0,
  136,
  12,
  1,
  0,
  0,
  0,
  137,
  138,
  5,
  102,
  0,
  0,
  138,
  139,
  5,
  105,
  0,
  0,
  139,
  140,
  5,
  108,
  0,
  0,
  140,
  141,
  5,
  116,
  0,
  0,
  141,
  142,
  5,
  101,
  0,
  0,
  142,
  143,
  5,
  114,
  0,
  0,
  143,
  14,
  1,
  0,
  0,
  0,
  144,
  145,
  5,
  114,
  0,
  0,
  145,
  146,
  5,
  101,
  0,
  0,
  146,
  147,
  5,
  100,
  0,
  0,
  147,
  148,
  5,
  117,
  0,
  0,
  148,
  149,
  5,
  99,
  0,
  0,
  149,
  150,
  5,
  101,
  0,
  0,
  150,
  16,
  1,
  0,
  0,
  0,
  151,
  152,
  5,
  99,
  0,
  0,
  152,
  153,
  5,
  97,
  0,
  0,
  153,
  154,
  5,
  116,
  0,
  0,
  154,
  18,
  1,
  0,
  0,
  0,
  155,
  156,
  5,
  115,
  0,
  0,
  156,
  157,
  5,
  117,
  0,
  0,
  157,
  158,
  5,
  98,
  0,
  0,
  158,
  159,
  5,
  115,
  0,
  0,
  159,
  160,
  5,
  116,
  0,
  0,
  160,
  161,
  5,
  114,
  0,
  0,
  161,
  20,
  1,
  0,
  0,
  0,
  162,
  163,
  5,
  109,
  0,
  0,
  163,
  164,
  5,
  97,
  0,
  0,
  164,
  165,
  5,
  120,
  0,
  0,
  165,
  22,
  1,
  0,
  0,
  0,
  166,
  167,
  5,
  109,
  0,
  0,
  167,
  168,
  5,
  105,
  0,
  0,
  168,
  169,
  5,
  110,
  0,
  0,
  169,
  24,
  1,
  0,
  0,
  0,
  170,
  171,
  5,
  105,
  0,
  0,
  171,
  172,
  5,
  102,
  0,
  0,
  172,
  26,
  1,
  0,
  0,
  0,
  173,
  174,
  5,
  116,
  0,
  0,
  174,
  175,
  5,
  104,
  0,
  0,
  175,
  176,
  5,
  101,
  0,
  0,
  176,
  177,
  5,
  110,
  0,
  0,
  177,
  28,
  1,
  0,
  0,
  0,
  178,
  179,
  5,
  101,
  0,
  0,
  179,
  180,
  5,
  108,
  0,
  0,
  180,
  181,
  5,
  115,
  0,
  0,
  181,
  182,
  5,
  101,
  0,
  0,
  182,
  30,
  1,
  0,
  0,
  0,
  183,
  184,
  5,
  101,
  0,
  0,
  184,
  185,
  5,
  108,
  0,
  0,
  185,
  186,
  5,
  115,
  0,
  0,
  186,
  187,
  5,
  101,
  0,
  0,
  187,
  188,
  5,
  105,
  0,
  0,
  188,
  189,
  5,
  102,
  0,
  0,
  189,
  32,
  1,
  0,
  0,
  0,
  190,
  191,
  5,
  111,
  0,
  0,
  191,
  192,
  5,
  114,
  0,
  0,
  192,
  34,
  1,
  0,
  0,
  0,
  193,
  194,
  5,
  97,
  0,
  0,
  194,
  195,
  5,
  110,
  0,
  0,
  195,
  196,
  5,
  100,
  0,
  0,
  196,
  36,
  1,
  0,
  0,
  0,
  197,
  218,
  5,
  61,
  0,
  0,
  198,
  199,
  5,
  61,
  0,
  0,
  199,
  218,
  5,
  61,
  0,
  0,
  200,
  201,
  5,
  101,
  0,
  0,
  201,
  218,
  5,
  113,
  0,
  0,
  202,
  203,
  5,
  101,
  0,
  0,
  203,
  204,
  5,
  113,
  0,
  0,
  204,
  205,
  5,
  117,
  0,
  0,
  205,
  206,
  5,
  97,
  0,
  0,
  206,
  207,
  5,
  108,
  0,
  0,
  207,
  218,
  5,
  115,
  0,
  0,
  208,
  209,
  5,
  101,
  0,
  0,
  209,
  210,
  5,
  113,
  0,
  0,
  210,
  211,
  5,
  117,
  0,
  0,
  211,
  212,
  5,
  97,
  0,
  0,
  212,
  213,
  5,
  108,
  0,
  0,
  213,
  214,
  5,
  115,
  0,
  0,
  214,
  215,
  5,
  32,
  0,
  0,
  215,
  216,
  5,
  116,
  0,
  0,
  216,
  218,
  5,
  111,
  0,
  0,
  217,
  197,
  1,
  0,
  0,
  0,
  217,
  198,
  1,
  0,
  0,
  0,
  217,
  200,
  1,
  0,
  0,
  0,
  217,
  202,
  1,
  0,
  0,
  0,
  217,
  208,
  1,
  0,
  0,
  0,
  218,
  38,
  1,
  0,
  0,
  0,
  219,
  220,
  5,
  33,
  0,
  0,
  220,
  247,
  5,
  61,
  0,
  0,
  221,
  222,
  5,
  110,
  0,
  0,
  222,
  223,
  5,
  101,
  0,
  0,
  223,
  247,
  5,
  113,
  0,
  0,
  224,
  225,
  5,
  110,
  0,
  0,
  225,
  226,
  5,
  111,
  0,
  0,
  226,
  227,
  5,
  116,
  0,
  0,
  227,
  228,
  5,
  32,
  0,
  0,
  228,
  229,
  5,
  101,
  0,
  0,
  229,
  230,
  5,
  113,
  0,
  0,
  230,
  231,
  5,
  117,
  0,
  0,
  231,
  232,
  5,
  97,
  0,
  0,
  232,
  247,
  5,
  108,
  0,
  0,
  233,
  234,
  5,
  110,
  0,
  0,
  234,
  235,
  5,
  111,
  0,
  0,
  235,
  236,
  5,
  116,
  0,
  0,
  236,
  237,
  5,
  32,
  0,
  0,
  237,
  238,
  5,
  101,
  0,
  0,
  238,
  239,
  5,
  113,
  0,
  0,
  239,
  240,
  5,
  117,
  0,
  0,
  240,
  241,
  5,
  97,
  0,
  0,
  241,
  242,
  5,
  108,
  0,
  0,
  242,
  243,
  5,
  115,
  0,
  0,
  243,
  244,
  5,
  32,
  0,
  0,
  244,
  245,
  5,
  116,
  0,
  0,
  245,
  247,
  5,
  111,
  0,
  0,
  246,
  219,
  1,
  0,
  0,
  0,
  246,
  221,
  1,
  0,
  0,
  0,
  246,
  224,
  1,
  0,
  0,
  0,
  246,
  233,
  1,
  0,
  0,
  0,
  247,
  40,
  1,
  0,
  0,
  0,
  248,
  249,
  5,
  61,
  0,
  0,
  249,
  250,
  5,
  61,
  0,
  0,
  250,
  292,
  5,
  61,
  0,
  0,
  251,
  252,
  5,
  115,
  0,
  0,
  252,
  253,
  5,
  101,
  0,
  0,
  253,
  292,
  5,
  113,
  0,
  0,
  254,
  255,
  5,
  115,
  0,
  0,
  255,
  256,
  5,
  116,
  0,
  0,
  256,
  257,
  5,
  114,
  0,
  0,
  257,
  258,
  5,
  105,
  0,
  0,
  258,
  259,
  5,
  99,
  0,
  0,
  259,
  260,
  5,
  116,
  0,
  0,
  260,
  261,
  5,
  32,
  0,
  0,
  261,
  262,
  5,
  101,
  0,
  0,
  262,
  263,
  5,
  113,
  0,
  0,
  263,
  264,
  5,
  117,
  0,
  0,
  264,
  265,
  5,
  97,
  0,
  0,
  265,
  266,
  5,
  108,
  0,
  0,
  266,
  292,
  5,
  115,
  0,
  0,
  267,
  268,
  5,
  115,
  0,
  0,
  268,
  269,
  5,
  116,
  0,
  0,
  269,
  270,
  5,
  114,
  0,
  0,
  270,
  271,
  5,
  105,
  0,
  0,
  271,
  272,
  5,
  99,
  0,
  0,
  272,
  273,
  5,
  116,
  0,
  0,
  273,
  274,
  5,
  32,
  0,
  0,
  274,
  275,
  5,
  101,
  0,
  0,
  275,
  292,
  5,
  113,
  0,
  0,
  276,
  277,
  5,
  115,
  0,
  0,
  277,
  278,
  5,
  116,
  0,
  0,
  278,
  279,
  5,
  114,
  0,
  0,
  279,
  280,
  5,
  105,
  0,
  0,
  280,
  281,
  5,
  99,
  0,
  0,
  281,
  282,
  5,
  116,
  0,
  0,
  282,
  283,
  5,
  32,
  0,
  0,
  283,
  284,
  5,
  101,
  0,
  0,
  284,
  285,
  5,
  113,
  0,
  0,
  285,
  286,
  5,
  117,
  0,
  0,
  286,
  287,
  5,
  97,
  0,
  0,
  287,
  288,
  5,
  108,
  0,
  0,
  288,
  289,
  5,
  32,
  0,
  0,
  289,
  290,
  5,
  116,
  0,
  0,
  290,
  292,
  5,
  111,
  0,
  0,
  291,
  248,
  1,
  0,
  0,
  0,
  291,
  251,
  1,
  0,
  0,
  0,
  291,
  254,
  1,
  0,
  0,
  0,
  291,
  267,
  1,
  0,
  0,
  0,
  291,
  276,
  1,
  0,
  0,
  0,
  292,
  42,
  1,
  0,
  0,
  0,
  293,
  294,
  5,
  33,
  0,
  0,
  294,
  295,
  5,
  61,
  0,
  0,
  295,
  347,
  5,
  61,
  0,
  0,
  296,
  297,
  5,
  115,
  0,
  0,
  297,
  298,
  5,
  110,
  0,
  0,
  298,
  299,
  5,
  101,
  0,
  0,
  299,
  347,
  5,
  113,
  0,
  0,
  300,
  301,
  5,
  115,
  0,
  0,
  301,
  302,
  5,
  116,
  0,
  0,
  302,
  303,
  5,
  114,
  0,
  0,
  303,
  304,
  5,
  105,
  0,
  0,
  304,
  305,
  5,
  99,
  0,
  0,
  305,
  306,
  5,
  116,
  0,
  0,
  306,
  307,
  5,
  32,
  0,
  0,
  307,
  308,
  5,
  110,
  0,
  0,
  308,
  309,
  5,
  111,
  0,
  0,
  309,
  310,
  5,
  116,
  0,
  0,
  310,
  311,
  5,
  32,
  0,
  0,
  311,
  312,
  5,
  101,
  0,
  0,
  312,
  313,
  5,
  113,
  0,
  0,
  313,
  314,
  5,
  117,
  0,
  0,
  314,
  315,
  5,
  97,
  0,
  0,
  315,
  347,
  5,
  108,
  0,
  0,
  316,
  317,
  5,
  115,
  0,
  0,
  317,
  318,
  5,
  116,
  0,
  0,
  318,
  319,
  5,
  114,
  0,
  0,
  319,
  320,
  5,
  105,
  0,
  0,
  320,
  321,
  5,
  99,
  0,
  0,
  321,
  322,
  5,
  116,
  0,
  0,
  322,
  323,
  5,
  32,
  0,
  0,
  323,
  324,
  5,
  110,
  0,
  0,
  324,
  325,
  5,
  101,
  0,
  0,
  325,
  347,
  5,
  113,
  0,
  0,
  326,
  327,
  5,
  115,
  0,
  0,
  327,
  328,
  5,
  116,
  0,
  0,
  328,
  329,
  5,
  114,
  0,
  0,
  329,
  330,
  5,
  105,
  0,
  0,
  330,
  331,
  5,
  99,
  0,
  0,
  331,
  332,
  5,
  116,
  0,
  0,
  332,
  333,
  5,
  32,
  0,
  0,
  333,
  334,
  5,
  110,
  0,
  0,
  334,
  335,
  5,
  111,
  0,
  0,
  335,
  336,
  5,
  116,
  0,
  0,
  336,
  337,
  5,
  32,
  0,
  0,
  337,
  338,
  5,
  101,
  0,
  0,
  338,
  339,
  5,
  113,
  0,
  0,
  339,
  340,
  5,
  117,
  0,
  0,
  340,
  341,
  5,
  97,
  0,
  0,
  341,
  342,
  5,
  108,
  0,
  0,
  342,
  343,
  5,
  115,
  0,
  0,
  343,
  344,
  5,
  32,
  0,
  0,
  344,
  345,
  5,
  116,
  0,
  0,
  345,
  347,
  5,
  111,
  0,
  0,
  346,
  293,
  1,
  0,
  0,
  0,
  346,
  296,
  1,
  0,
  0,
  0,
  346,
  300,
  1,
  0,
  0,
  0,
  346,
  316,
  1,
  0,
  0,
  0,
  346,
  326,
  1,
  0,
  0,
  0,
  347,
  44,
  1,
  0,
  0,
  0,
  348,
  364,
  5,
  62,
  0,
  0,
  349,
  350,
  5,
  103,
  0,
  0,
  350,
  364,
  5,
  116,
  0,
  0,
  351,
  352,
  5,
  103,
  0,
  0,
  352,
  353,
  5,
  114,
  0,
  0,
  353,
  354,
  5,
  101,
  0,
  0,
  354,
  355,
  5,
  97,
  0,
  0,
  355,
  356,
  5,
  116,
  0,
  0,
  356,
  357,
  5,
  101,
  0,
  0,
  357,
  358,
  5,
  114,
  0,
  0,
  358,
  359,
  5,
  32,
  0,
  0,
  359,
  360,
  5,
  116,
  0,
  0,
  360,
  361,
  5,
  104,
  0,
  0,
  361,
  362,
  5,
  97,
  0,
  0,
  362,
  364,
  5,
  110,
  0,
  0,
  363,
  348,
  1,
  0,
  0,
  0,
  363,
  349,
  1,
  0,
  0,
  0,
  363,
  351,
  1,
  0,
  0,
  0,
  364,
  46,
  1,
  0,
  0,
  0,
  365,
  366,
  5,
  62,
  0,
  0,
  366,
  395,
  5,
  61,
  0,
  0,
  367,
  368,
  5,
  103,
  0,
  0,
  368,
  369,
  5,
  116,
  0,
  0,
  369,
  395,
  5,
  101,
  0,
  0,
  370,
  371,
  5,
  103,
  0,
  0,
  371,
  372,
  5,
  114,
  0,
  0,
  372,
  373,
  5,
  101,
  0,
  0,
  373,
  374,
  5,
  97,
  0,
  0,
  374,
  375,
  5,
  116,
  0,
  0,
  375,
  376,
  5,
  101,
  0,
  0,
  376,
  377,
  5,
  114,
  0,
  0,
  377,
  378,
  5,
  32,
  0,
  0,
  378,
  379,
  5,
  116,
  0,
  0,
  379,
  380,
  5,
  104,
  0,
  0,
  380,
  381,
  5,
  97,
  0,
  0,
  381,
  382,
  5,
  110,
  0,
  0,
  382,
  383,
  5,
  32,
  0,
  0,
  383,
  384,
  5,
  111,
  0,
  0,
  384,
  385,
  5,
  114,
  0,
  0,
  385,
  386,
  5,
  32,
  0,
  0,
  386,
  387,
  5,
  101,
  0,
  0,
  387,
  388,
  5,
  113,
  0,
  0,
  388,
  389,
  5,
  117,
  0,
  0,
  389,
  390,
  5,
  97,
  0,
  0,
  390,
  391,
  5,
  108,
  0,
  0,
  391,
  392,
  5,
  32,
  0,
  0,
  392,
  393,
  5,
  116,
  0,
  0,
  393,
  395,
  5,
  111,
  0,
  0,
  394,
  365,
  1,
  0,
  0,
  0,
  394,
  367,
  1,
  0,
  0,
  0,
  394,
  370,
  1,
  0,
  0,
  0,
  395,
  48,
  1,
  0,
  0,
  0,
  396,
  409,
  5,
  60,
  0,
  0,
  397,
  398,
  5,
  108,
  0,
  0,
  398,
  409,
  5,
  116,
  0,
  0,
  399,
  400,
  5,
  108,
  0,
  0,
  400,
  401,
  5,
  101,
  0,
  0,
  401,
  402,
  5,
  115,
  0,
  0,
  402,
  403,
  5,
  115,
  0,
  0,
  403,
  404,
  5,
  32,
  0,
  0,
  404,
  405,
  5,
  116,
  0,
  0,
  405,
  406,
  5,
  104,
  0,
  0,
  406,
  407,
  5,
  97,
  0,
  0,
  407,
  409,
  5,
  110,
  0,
  0,
  408,
  396,
  1,
  0,
  0,
  0,
  408,
  397,
  1,
  0,
  0,
  0,
  408,
  399,
  1,
  0,
  0,
  0,
  409,
  50,
  1,
  0,
  0,
  0,
  410,
  411,
  5,
  60,
  0,
  0,
  411,
  437,
  5,
  61,
  0,
  0,
  412,
  413,
  5,
  108,
  0,
  0,
  413,
  414,
  5,
  116,
  0,
  0,
  414,
  437,
  5,
  101,
  0,
  0,
  415,
  416,
  5,
  108,
  0,
  0,
  416,
  417,
  5,
  101,
  0,
  0,
  417,
  418,
  5,
  115,
  0,
  0,
  418,
  419,
  5,
  115,
  0,
  0,
  419,
  420,
  5,
  32,
  0,
  0,
  420,
  421,
  5,
  116,
  0,
  0,
  421,
  422,
  5,
  104,
  0,
  0,
  422,
  423,
  5,
  97,
  0,
  0,
  423,
  424,
  5,
  110,
  0,
  0,
  424,
  425,
  5,
  32,
  0,
  0,
  425,
  426,
  5,
  111,
  0,
  0,
  426,
  427,
  5,
  114,
  0,
  0,
  427,
  428,
  5,
  32,
  0,
  0,
  428,
  429,
  5,
  101,
  0,
  0,
  429,
  430,
  5,
  113,
  0,
  0,
  430,
  431,
  5,
  117,
  0,
  0,
  431,
  432,
  5,
  97,
  0,
  0,
  432,
  433,
  5,
  108,
  0,
  0,
  433,
  434,
  5,
  32,
  0,
  0,
  434,
  435,
  5,
  116,
  0,
  0,
  435,
  437,
  5,
  111,
  0,
  0,
  436,
  410,
  1,
  0,
  0,
  0,
  436,
  412,
  1,
  0,
  0,
  0,
  436,
  415,
  1,
  0,
  0,
  0,
  437,
  52,
  1,
  0,
  0,
  0,
  438,
  439,
  5,
  98,
  0,
  0,
  439,
  440,
  5,
  101,
  0,
  0,
  440,
  441,
  5,
  116,
  0,
  0,
  441,
  442,
  5,
  119,
  0,
  0,
  442,
  443,
  5,
  101,
  0,
  0,
  443,
  444,
  5,
  101,
  0,
  0,
  444,
  445,
  5,
  110,
  0,
  0,
  445,
  54,
  1,
  0,
  0,
  0,
  446,
  447,
  5,
  105,
  0,
  0,
  447,
  465,
  5,
  110,
  0,
  0,
  448,
  449,
  5,
  99,
  0,
  0,
  449,
  450,
  5,
  111,
  0,
  0,
  450,
  451,
  5,
  110,
  0,
  0,
  451,
  452,
  5,
  116,
  0,
  0,
  452,
  453,
  5,
  97,
  0,
  0,
  453,
  454,
  5,
  105,
  0,
  0,
  454,
  455,
  5,
  110,
  0,
  0,
  455,
  465,
  5,
  115,
  0,
  0,
  456,
  457,
  5,
  105,
  0,
  0,
  457,
  458,
  5,
  110,
  0,
  0,
  458,
  459,
  5,
  99,
  0,
  0,
  459,
  460,
  5,
  108,
  0,
  0,
  460,
  461,
  5,
  117,
  0,
  0,
  461,
  462,
  5,
  100,
  0,
  0,
  462,
  463,
  5,
  101,
  0,
  0,
  463,
  465,
  5,
  115,
  0,
  0,
  464,
  446,
  1,
  0,
  0,
  0,
  464,
  448,
  1,
  0,
  0,
  0,
  464,
  456,
  1,
  0,
  0,
  0,
  465,
  56,
  1,
  0,
  0,
  0,
  466,
  467,
  5,
  110,
  0,
  0,
  467,
  468,
  5,
  111,
  0,
  0,
  468,
  469,
  5,
  116,
  0,
  0,
  469,
  470,
  5,
  32,
  0,
  0,
  470,
  471,
  5,
  105,
  0,
  0,
  471,
  472,
  5,
  110,
  0,
  0,
  472,
  58,
  1,
  0,
  0,
  0,
  473,
  474,
  5,
  115,
  0,
  0,
  474,
  475,
  5,
  116,
  0,
  0,
  475,
  476,
  5,
  97,
  0,
  0,
  476,
  477,
  5,
  114,
  0,
  0,
  477,
  478,
  5,
  116,
  0,
  0,
  478,
  479,
  5,
  115,
  0,
  0,
  479,
  480,
  5,
  32,
  0,
  0,
  480,
  481,
  5,
  119,
  0,
  0,
  481,
  482,
  5,
  105,
  0,
  0,
  482,
  483,
  5,
  116,
  0,
  0,
  483,
  484,
  5,
  104,
  0,
  0,
  484,
  60,
  1,
  0,
  0,
  0,
  485,
  486,
  5,
  101,
  0,
  0,
  486,
  487,
  5,
  110,
  0,
  0,
  487,
  488,
  5,
  100,
  0,
  0,
  488,
  489,
  5,
  115,
  0,
  0,
  489,
  490,
  5,
  32,
  0,
  0,
  490,
  491,
  5,
  119,
  0,
  0,
  491,
  492,
  5,
  105,
  0,
  0,
  492,
  493,
  5,
  116,
  0,
  0,
  493,
  494,
  5,
  104,
  0,
  0,
  494,
  62,
  1,
  0,
  0,
  0,
  495,
  500,
  5,
  33,
  0,
  0,
  496,
  497,
  5,
  110,
  0,
  0,
  497,
  498,
  5,
  111,
  0,
  0,
  498,
  500,
  5,
  116,
  0,
  0,
  499,
  495,
  1,
  0,
  0,
  0,
  499,
  496,
  1,
  0,
  0,
  0,
  500,
  64,
  1,
  0,
  0,
  0,
  501,
  502,
  5,
  33,
  0,
  0,
  502,
  503,
  5,
  33,
  0,
  0,
  503,
  66,
  1,
  0,
  0,
  0,
  504,
  510,
  5,
  43,
  0,
  0,
  505,
  506,
  5,
  112,
  0,
  0,
  506,
  507,
  5,
  108,
  0,
  0,
  507,
  508,
  5,
  117,
  0,
  0,
  508,
  510,
  5,
  115,
  0,
  0,
  509,
  504,
  1,
  0,
  0,
  0,
  509,
  505,
  1,
  0,
  0,
  0,
  510,
  68,
  1,
  0,
  0,
  0,
  511,
  518,
  5,
  45,
  0,
  0,
  512,
  513,
  5,
  109,
  0,
  0,
  513,
  514,
  5,
  105,
  0,
  0,
  514,
  515,
  5,
  110,
  0,
  0,
  515,
  516,
  5,
  117,
  0,
  0,
  516,
  518,
  5,
  115,
  0,
  0,
  517,
  511,
  1,
  0,
  0,
  0,
  517,
  512,
  1,
  0,
  0,
  0,
  518,
  70,
  1,
  0,
  0,
  0,
  519,
  534,
  5,
  42,
  0,
  0,
  520,
  521,
  5,
  109,
  0,
  0,
  521,
  522,
  5,
  117,
  0,
  0,
  522,
  523,
  5,
  108,
  0,
  0,
  523,
  524,
  5,
  116,
  0,
  0,
  524,
  525,
  5,
  105,
  0,
  0,
  525,
  526,
  5,
  112,
  0,
  0,
  526,
  527,
  5,
  108,
  0,
  0,
  527,
  534,
  5,
  121,
  0,
  0,
  528,
  529,
  5,
  116,
  0,
  0,
  529,
  530,
  5,
  105,
  0,
  0,
  530,
  531,
  5,
  109,
  0,
  0,
  531,
  532,
  5,
  101,
  0,
  0,
  532,
  534,
  5,
  115,
  0,
  0,
  533,
  519,
  1,
  0,
  0,
  0,
  533,
  520,
  1,
  0,
  0,
  0,
  533,
  528,
  1,
  0,
  0,
  0,
  534,
  72,
  1,
  0,
  0,
  0,
  535,
  547,
  5,
  47,
  0,
  0,
  536,
  537,
  5,
  100,
  0,
  0,
  537,
  538,
  5,
  105,
  0,
  0,
  538,
  539,
  5,
  118,
  0,
  0,
  539,
  540,
  5,
  105,
  0,
  0,
  540,
  541,
  5,
  100,
  0,
  0,
  541,
  547,
  5,
  101,
  0,
  0,
  542,
  543,
  5,
  111,
  0,
  0,
  543,
  544,
  5,
  118,
  0,
  0,
  544,
  545,
  5,
  101,
  0,
  0,
  545,
  547,
  5,
  114,
  0,
  0,
  546,
  535,
  1,
  0,
  0,
  0,
  546,
  536,
  1,
  0,
  0,
  0,
  546,
  542,
  1,
  0,
  0,
  0,
  547,
  74,
  1,
  0,
  0,
  0,
  548,
  568,
  5,
  37,
  0,
  0,
  549,
  550,
  5,
  109,
  0,
  0,
  550,
  551,
  5,
  111,
  0,
  0,
  551,
  552,
  5,
  100,
  0,
  0,
  552,
  553,
  5,
  117,
  0,
  0,
  553,
  554,
  5,
  108,
  0,
  0,
  554,
  568,
  5,
  111,
  0,
  0,
  555,
  556,
  5,
  109,
  0,
  0,
  556,
  557,
  5,
  111,
  0,
  0,
  557,
  568,
  5,
  100,
  0,
  0,
  558,
  559,
  5,
  114,
  0,
  0,
  559,
  560,
  5,
  101,
  0,
  0,
  560,
  561,
  5,
  109,
  0,
  0,
  561,
  562,
  5,
  97,
  0,
  0,
  562,
  563,
  5,
  105,
  0,
  0,
  563,
  564,
  5,
  110,
  0,
  0,
  564,
  565,
  5,
  100,
  0,
  0,
  565,
  566,
  5,
  101,
  0,
  0,
  566,
  568,
  5,
  114,
  0,
  0,
  567,
  548,
  1,
  0,
  0,
  0,
  567,
  549,
  1,
  0,
  0,
  0,
  567,
  555,
  1,
  0,
  0,
  0,
  567,
  558,
  1,
  0,
  0,
  0,
  568,
  76,
  1,
  0,
  0,
  0,
  569,
  570,
  5,
  44,
  0,
  0,
  570,
  78,
  1,
  0,
  0,
  0,
  571,
  572,
  5,
  46,
  0,
  0,
  572,
  80,
  1,
  0,
  0,
  0,
  573,
  574,
  5,
  59,
  0,
  0,
  574,
  82,
  1,
  0,
  0,
  0,
  575,
  576,
  5,
  40,
  0,
  0,
  576,
  84,
  1,
  0,
  0,
  0,
  577,
  578,
  5,
  41,
  0,
  0,
  578,
  86,
  1,
  0,
  0,
  0,
  579,
  580,
  5,
  91,
  0,
  0,
  580,
  88,
  1,
  0,
  0,
  0,
  581,
  582,
  5,
  93,
  0,
  0,
  582,
  90,
  1,
  0,
  0,
  0,
  583,
  584,
  5,
  123,
  0,
  0,
  584,
  92,
  1,
  0,
  0,
  0,
  585,
  586,
  5,
  125,
  0,
  0,
  586,
  94,
  1,
  0,
  0,
  0,
  587,
  589,
  5,
  45,
  0,
  0,
  588,
  587,
  1,
  0,
  0,
  0,
  588,
  589,
  1,
  0,
  0,
  0,
  589,
  591,
  1,
  0,
  0,
  0,
  590,
  592,
  7,
  0,
  0,
  0,
  591,
  590,
  1,
  0,
  0,
  0,
  592,
  593,
  1,
  0,
  0,
  0,
  593,
  591,
  1,
  0,
  0,
  0,
  593,
  594,
  1,
  0,
  0,
  0,
  594,
  601,
  1,
  0,
  0,
  0,
  595,
  597,
  5,
  46,
  0,
  0,
  596,
  598,
  7,
  0,
  0,
  0,
  597,
  596,
  1,
  0,
  0,
  0,
  598,
  599,
  1,
  0,
  0,
  0,
  599,
  597,
  1,
  0,
  0,
  0,
  599,
  600,
  1,
  0,
  0,
  0,
  600,
  602,
  1,
  0,
  0,
  0,
  601,
  595,
  1,
  0,
  0,
  0,
  601,
  602,
  1,
  0,
  0,
  0,
  602,
  96,
  1,
  0,
  0,
  0,
  603,
  609,
  5,
  34,
  0,
  0,
  604,
  608,
  8,
  1,
  0,
  0,
  605,
  606,
  5,
  92,
  0,
  0,
  606,
  608,
  9,
  0,
  0,
  0,
  607,
  604,
  1,
  0,
  0,
  0,
  607,
  605,
  1,
  0,
  0,
  0,
  608,
  611,
  1,
  0,
  0,
  0,
  609,
  607,
  1,
  0,
  0,
  0,
  609,
  610,
  1,
  0,
  0,
  0,
  610,
  612,
  1,
  0,
  0,
  0,
  611,
  609,
  1,
  0,
  0,
  0,
  612,
  624,
  5,
  34,
  0,
  0,
  613,
  619,
  5,
  39,
  0,
  0,
  614,
  618,
  8,
  2,
  0,
  0,
  615,
  616,
  5,
  92,
  0,
  0,
  616,
  618,
  9,
  0,
  0,
  0,
  617,
  614,
  1,
  0,
  0,
  0,
  617,
  615,
  1,
  0,
  0,
  0,
  618,
  621,
  1,
  0,
  0,
  0,
  619,
  617,
  1,
  0,
  0,
  0,
  619,
  620,
  1,
  0,
  0,
  0,
  620,
  622,
  1,
  0,
  0,
  0,
  621,
  619,
  1,
  0,
  0,
  0,
  622,
  624,
  5,
  39,
  0,
  0,
  623,
  603,
  1,
  0,
  0,
  0,
  623,
  613,
  1,
  0,
  0,
  0,
  624,
  98,
  1,
  0,
  0,
  0,
  625,
  626,
  5,
  116,
  0,
  0,
  626,
  627,
  5,
  114,
  0,
  0,
  627,
  628,
  5,
  117,
  0,
  0,
  628,
  635,
  5,
  101,
  0,
  0,
  629,
  630,
  5,
  102,
  0,
  0,
  630,
  631,
  5,
  97,
  0,
  0,
  631,
  632,
  5,
  108,
  0,
  0,
  632,
  633,
  5,
  115,
  0,
  0,
  633,
  635,
  5,
  101,
  0,
  0,
  634,
  625,
  1,
  0,
  0,
  0,
  634,
  629,
  1,
  0,
  0,
  0,
  635,
  100,
  1,
  0,
  0,
  0,
  636,
  640,
  7,
  3,
  0,
  0,
  637,
  639,
  7,
  4,
  0,
  0,
  638,
  637,
  1,
  0,
  0,
  0,
  639,
  642,
  1,
  0,
  0,
  0,
  640,
  638,
  1,
  0,
  0,
  0,
  640,
  641,
  1,
  0,
  0,
  0,
  641,
  102,
  1,
  0,
  0,
  0,
  642,
  640,
  1,
  0,
  0,
  0,
  643,
  644,
  5,
  123,
  0,
  0,
  644,
  645,
  3,
  101,
  50,
  0,
  645,
  646,
  5,
  125,
  0,
  0,
  646,
  104,
  1,
  0,
  0,
  0,
  647,
  649,
  7,
  5,
  0,
  0,
  648,
  647,
  1,
  0,
  0,
  0,
  649,
  650,
  1,
  0,
  0,
  0,
  650,
  648,
  1,
  0,
  0,
  0,
  650,
  651,
  1,
  0,
  0,
  0,
  651,
  652,
  1,
  0,
  0,
  0,
  652,
  653,
  6,
  52,
  0,
  0,
  653,
  106,
  1,
  0,
  0,
  0,
  654,
  655,
  5,
  47,
  0,
  0,
  655,
  656,
  5,
  47,
  0,
  0,
  656,
  660,
  1,
  0,
  0,
  0,
  657,
  659,
  8,
  6,
  0,
  0,
  658,
  657,
  1,
  0,
  0,
  0,
  659,
  662,
  1,
  0,
  0,
  0,
  660,
  658,
  1,
  0,
  0,
  0,
  660,
  661,
  1,
  0,
  0,
  0,
  661,
  663,
  1,
  0,
  0,
  0,
  662,
  660,
  1,
  0,
  0,
  0,
  663,
  664,
  6,
  53,
  0,
  0,
  664,
  108,
  1,
  0,
  0,
  0,
  665,
  666,
  5,
  47,
  0,
  0,
  666,
  667,
  5,
  42,
  0,
  0,
  667,
  671,
  1,
  0,
  0,
  0,
  668,
  670,
  9,
  0,
  0,
  0,
  669,
  668,
  1,
  0,
  0,
  0,
  670,
  673,
  1,
  0,
  0,
  0,
  671,
  672,
  1,
  0,
  0,
  0,
  671,
  669,
  1,
  0,
  0,
  0,
  672,
  674,
  1,
  0,
  0,
  0,
  673,
  671,
  1,
  0,
  0,
  0,
  674,
  675,
  5,
  42,
  0,
  0,
  675,
  676,
  5,
  47,
  0,
  0,
  676,
  677,
  1,
  0,
  0,
  0,
  677,
  678,
  6,
  54,
  0,
  0,
  678,
  110,
  1,
  0,
  0,
  0,
  30,
  0,
  217,
  246,
  291,
  346,
  363,
  394,
  408,
  436,
  464,
  499,
  509,
  517,
  533,
  546,
  567,
  588,
  593,
  599,
  601,
  607,
  609,
  617,
  619,
  623,
  634,
  640,
  650,
  660,
  671,
  1,
  6,
  0,
  0
];
var atn = new Ln.atn.ATNDeserializer().deserialize(serializedATN);
var decisionsToDFA = atn.decisionToState.map((ds, index) => new Ln.dfa.DFA(ds, index));
var RELLexer = class extends Ln.Lexer {
  static grammarFileName = "REL.g4";
  static channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];
  static modeNames = ["DEFAULT_MODE"];
  static literalNames = [
    null,
    "'@'",
    "'merge'",
    "'some'",
    "'all'",
    "'none'",
    "'map'",
    "'filter'",
    "'reduce'",
    "'cat'",
    "'substr'",
    "'max'",
    "'min'",
    "'if'",
    "'then'",
    "'else'",
    "'elseif'",
    "'or'",
    "'and'",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "'between'",
    null,
    "'not in'",
    "'starts with'",
    "'ends with'",
    null,
    "'!!'",
    null,
    null,
    null,
    null,
    null,
    "','",
    "'.'",
    "';'",
    "'('",
    "')'",
    "'['",
    "']'",
    "'{'",
    "'}'"
  ];
  static symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "IF",
    "THEN",
    "ELSE",
    "ELSEIF",
    "OR",
    "AND",
    "EQ",
    "NEQ",
    "SEQ",
    "SNEQ",
    "GT",
    "GTE",
    "LT",
    "LTE",
    "BETWEEN",
    "IN",
    "NOT_IN",
    "STARTS_WITH",
    "ENDS_WITH",
    "NOT",
    "DOUBLE_NOT",
    "PLUS",
    "MINUS",
    "MULTIPLY",
    "DIVIDE",
    "MODULO",
    "COMMA",
    "DOT",
    "SEMICOLON",
    "LPAREN",
    "RPAREN",
    "LBRACKET",
    "RBRACKET",
    "LBRACE",
    "RBRACE",
    "NUMBER",
    "STRING",
    "BOOLEAN",
    "IDENTIFIER",
    "PLACEHOLDER",
    "WS",
    "LINE_COMMENT",
    "BLOCK_COMMENT"
  ];
  static ruleNames = [
    "T__0",
    "T__1",
    "T__2",
    "T__3",
    "T__4",
    "T__5",
    "T__6",
    "T__7",
    "T__8",
    "T__9",
    "T__10",
    "T__11",
    "IF",
    "THEN",
    "ELSE",
    "ELSEIF",
    "OR",
    "AND",
    "EQ",
    "NEQ",
    "SEQ",
    "SNEQ",
    "GT",
    "GTE",
    "LT",
    "LTE",
    "BETWEEN",
    "IN",
    "NOT_IN",
    "STARTS_WITH",
    "ENDS_WITH",
    "NOT",
    "DOUBLE_NOT",
    "PLUS",
    "MINUS",
    "MULTIPLY",
    "DIVIDE",
    "MODULO",
    "COMMA",
    "DOT",
    "SEMICOLON",
    "LPAREN",
    "RPAREN",
    "LBRACKET",
    "RBRACKET",
    "LBRACE",
    "RBRACE",
    "NUMBER",
    "STRING",
    "BOOLEAN",
    "IDENTIFIER",
    "PLACEHOLDER",
    "WS",
    "LINE_COMMENT",
    "BLOCK_COMMENT"
  ];
  constructor(input) {
    super(input);
    this._interp = new Ln.atn.LexerATNSimulator(this, atn, decisionsToDFA, new Ln.atn.PredictionContextCache());
  }
};
RELLexer.EOF = Ln.Token.EOF;
RELLexer.T__0 = 1;
RELLexer.T__1 = 2;
RELLexer.T__2 = 3;
RELLexer.T__3 = 4;
RELLexer.T__4 = 5;
RELLexer.T__5 = 6;
RELLexer.T__6 = 7;
RELLexer.T__7 = 8;
RELLexer.T__8 = 9;
RELLexer.T__9 = 10;
RELLexer.T__10 = 11;
RELLexer.T__11 = 12;
RELLexer.IF = 13;
RELLexer.THEN = 14;
RELLexer.ELSE = 15;
RELLexer.ELSEIF = 16;
RELLexer.OR = 17;
RELLexer.AND = 18;
RELLexer.EQ = 19;
RELLexer.NEQ = 20;
RELLexer.SEQ = 21;
RELLexer.SNEQ = 22;
RELLexer.GT = 23;
RELLexer.GTE = 24;
RELLexer.LT = 25;
RELLexer.LTE = 26;
RELLexer.BETWEEN = 27;
RELLexer.IN = 28;
RELLexer.NOT_IN = 29;
RELLexer.STARTS_WITH = 30;
RELLexer.ENDS_WITH = 31;
RELLexer.NOT = 32;
RELLexer.DOUBLE_NOT = 33;
RELLexer.PLUS = 34;
RELLexer.MINUS = 35;
RELLexer.MULTIPLY = 36;
RELLexer.DIVIDE = 37;
RELLexer.MODULO = 38;
RELLexer.COMMA = 39;
RELLexer.DOT = 40;
RELLexer.SEMICOLON = 41;
RELLexer.LPAREN = 42;
RELLexer.RPAREN = 43;
RELLexer.LBRACKET = 44;
RELLexer.RBRACKET = 45;
RELLexer.LBRACE = 46;
RELLexer.RBRACE = 47;
RELLexer.NUMBER = 48;
RELLexer.STRING = 49;
RELLexer.BOOLEAN = 50;
RELLexer.IDENTIFIER = 51;
RELLexer.PLACEHOLDER = 52;
RELLexer.WS = 53;
RELLexer.LINE_COMMENT = 54;
RELLexer.BLOCK_COMMENT = 55;

// generated/RELListener.js
var RELListener = class extends Ln.tree.ParseTreeListener {
  // Enter a parse tree produced by RELParser#expression.
  enterExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#expression.
  exitExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#IfThenElse.
  enterIfThenElse(ctx) {
  }
  // Exit a parse tree produced by RELParser#IfThenElse.
  exitIfThenElse(ctx) {
  }
  // Enter a parse tree produced by RELParser#LogicalOr.
  enterLogicalOr(ctx) {
  }
  // Exit a parse tree produced by RELParser#LogicalOr.
  exitLogicalOr(ctx) {
  }
  // Enter a parse tree produced by RELParser#LogicalAnd.
  enterLogicalAnd(ctx) {
  }
  // Exit a parse tree produced by RELParser#LogicalAnd.
  exitLogicalAnd(ctx) {
  }
  // Enter a parse tree produced by RELParser#OrExpression.
  enterOrExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#OrExpression.
  exitOrExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#AndExpression.
  enterAndExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#AndExpression.
  exitAndExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#Equality.
  enterEquality(ctx) {
  }
  // Exit a parse tree produced by RELParser#Equality.
  exitEquality(ctx) {
  }
  // Enter a parse tree produced by RELParser#StrictNotEqualExpression.
  enterStrictNotEqualExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#StrictNotEqualExpression.
  exitStrictNotEqualExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#Relational.
  enterRelational(ctx) {
  }
  // Exit a parse tree produced by RELParser#Relational.
  exitRelational(ctx) {
  }
  // Enter a parse tree produced by RELParser#EqualExpression.
  enterEqualExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#EqualExpression.
  exitEqualExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#StrictEqualExpression.
  enterStrictEqualExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#StrictEqualExpression.
  exitStrictEqualExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#NotEqualExpression.
  enterNotEqualExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#NotEqualExpression.
  exitNotEqualExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#Additive.
  enterAdditive(ctx) {
  }
  // Exit a parse tree produced by RELParser#Additive.
  exitAdditive(ctx) {
  }
  // Enter a parse tree produced by RELParser#BetweenExpression.
  enterBetweenExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#BetweenExpression.
  exitBetweenExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#InExpression.
  enterInExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#InExpression.
  exitInExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#GreaterThanExpression.
  enterGreaterThanExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#GreaterThanExpression.
  exitGreaterThanExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#EndsWithExpression.
  enterEndsWithExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#EndsWithExpression.
  exitEndsWithExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#StartsWithExpression.
  enterStartsWithExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#StartsWithExpression.
  exitStartsWithExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#GreaterThanOrEqualExpression.
  enterGreaterThanOrEqualExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#GreaterThanOrEqualExpression.
  exitGreaterThanOrEqualExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#LessThanOrEqualExpression.
  enterLessThanOrEqualExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#LessThanOrEqualExpression.
  exitLessThanOrEqualExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#NotInExpression.
  enterNotInExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#NotInExpression.
  exitNotInExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#LessThanExpression.
  enterLessThanExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#LessThanExpression.
  exitLessThanExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#SubtractExpression.
  enterSubtractExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#SubtractExpression.
  exitSubtractExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#Multiplicative.
  enterMultiplicative(ctx) {
  }
  // Exit a parse tree produced by RELParser#Multiplicative.
  exitMultiplicative(ctx) {
  }
  // Enter a parse tree produced by RELParser#AddExpression.
  enterAddExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#AddExpression.
  exitAddExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#DivideExpression.
  enterDivideExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#DivideExpression.
  exitDivideExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#MultiplyExpression.
  enterMultiplyExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#MultiplyExpression.
  exitMultiplyExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#Unary.
  enterUnary(ctx) {
  }
  // Exit a parse tree produced by RELParser#Unary.
  exitUnary(ctx) {
  }
  // Enter a parse tree produced by RELParser#ModuloExpression.
  enterModuloExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#ModuloExpression.
  exitModuloExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#NotExpression.
  enterNotExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#NotExpression.
  exitNotExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#DoubleNotExpression.
  enterDoubleNotExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#DoubleNotExpression.
  exitDoubleNotExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#Postfix.
  enterPostfix(ctx) {
  }
  // Exit a parse tree produced by RELParser#Postfix.
  exitPostfix(ctx) {
  }
  // Enter a parse tree produced by RELParser#Primary.
  enterPrimary(ctx) {
  }
  // Exit a parse tree produced by RELParser#Primary.
  exitPrimary(ctx) {
  }
  // Enter a parse tree produced by RELParser#PropertyAccess.
  enterPropertyAccess(ctx) {
  }
  // Exit a parse tree produced by RELParser#PropertyAccess.
  exitPropertyAccess(ctx) {
  }
  // Enter a parse tree produced by RELParser#VariableExpression.
  enterVariableExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#VariableExpression.
  exitVariableExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#BareIdentifierExpression.
  enterBareIdentifierExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#BareIdentifierExpression.
  exitBareIdentifierExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#LiteralExpression.
  enterLiteralExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#LiteralExpression.
  exitLiteralExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#FunctionCallExpression.
  enterFunctionCallExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#FunctionCallExpression.
  exitFunctionCallExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#ParenthesizedExpression.
  enterParenthesizedExpression(ctx) {
  }
  // Exit a parse tree produced by RELParser#ParenthesizedExpression.
  exitParenthesizedExpression(ctx) {
  }
  // Enter a parse tree produced by RELParser#bareIdentifier.
  enterBareIdentifier(ctx) {
  }
  // Exit a parse tree produced by RELParser#bareIdentifier.
  exitBareIdentifier(ctx) {
  }
  // Enter a parse tree produced by RELParser#variable.
  enterVariable(ctx) {
  }
  // Exit a parse tree produced by RELParser#variable.
  exitVariable(ctx) {
  }
  // Enter a parse tree produced by RELParser#variableName.
  enterVariableName(ctx) {
  }
  // Exit a parse tree produced by RELParser#variableName.
  exitVariableName(ctx) {
  }
  // Enter a parse tree produced by RELParser#NumberLiteral.
  enterNumberLiteral(ctx) {
  }
  // Exit a parse tree produced by RELParser#NumberLiteral.
  exitNumberLiteral(ctx) {
  }
  // Enter a parse tree produced by RELParser#StringLiteral.
  enterStringLiteral(ctx) {
  }
  // Exit a parse tree produced by RELParser#StringLiteral.
  exitStringLiteral(ctx) {
  }
  // Enter a parse tree produced by RELParser#BooleanLiteral.
  enterBooleanLiteral(ctx) {
  }
  // Exit a parse tree produced by RELParser#BooleanLiteral.
  exitBooleanLiteral(ctx) {
  }
  // Enter a parse tree produced by RELParser#ArrayLiteral.
  enterArrayLiteral(ctx) {
  }
  // Exit a parse tree produced by RELParser#ArrayLiteral.
  exitArrayLiteral(ctx) {
  }
  // Enter a parse tree produced by RELParser#PlaceholderLiteral.
  enterPlaceholderLiteral(ctx) {
  }
  // Exit a parse tree produced by RELParser#PlaceholderLiteral.
  exitPlaceholderLiteral(ctx) {
  }
  // Enter a parse tree produced by RELParser#placeholder.
  enterPlaceholder(ctx) {
  }
  // Exit a parse tree produced by RELParser#placeholder.
  exitPlaceholder(ctx) {
  }
  // Enter a parse tree produced by RELParser#array.
  enterArray(ctx) {
  }
  // Exit a parse tree produced by RELParser#array.
  exitArray(ctx) {
  }
  // Enter a parse tree produced by RELParser#functionCall.
  enterFunctionCall(ctx) {
  }
  // Exit a parse tree produced by RELParser#functionCall.
  exitFunctionCall(ctx) {
  }
  // Enter a parse tree produced by RELParser#arrayMethods.
  enterArrayMethods(ctx) {
  }
  // Exit a parse tree produced by RELParser#arrayMethods.
  exitArrayMethods(ctx) {
  }
  // Enter a parse tree produced by RELParser#stringMethods.
  enterStringMethods(ctx) {
  }
  // Exit a parse tree produced by RELParser#stringMethods.
  exitStringMethods(ctx) {
  }
  // Enter a parse tree produced by RELParser#functionName.
  enterFunctionName(ctx) {
  }
  // Exit a parse tree produced by RELParser#functionName.
  exitFunctionName(ctx) {
  }
};

// generated/RELVisitor.js
var RELVisitor = class extends Ln.tree.ParseTreeVisitor {
  // Visit a parse tree produced by RELParser#expression.
  visitExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#IfThenElse.
  visitIfThenElse(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#LogicalOr.
  visitLogicalOr(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#LogicalAnd.
  visitLogicalAnd(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#OrExpression.
  visitOrExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#AndExpression.
  visitAndExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#Equality.
  visitEquality(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#StrictNotEqualExpression.
  visitStrictNotEqualExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#Relational.
  visitRelational(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#EqualExpression.
  visitEqualExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#StrictEqualExpression.
  visitStrictEqualExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#NotEqualExpression.
  visitNotEqualExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#Additive.
  visitAdditive(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#BetweenExpression.
  visitBetweenExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#InExpression.
  visitInExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#GreaterThanExpression.
  visitGreaterThanExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#EndsWithExpression.
  visitEndsWithExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#StartsWithExpression.
  visitStartsWithExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#GreaterThanOrEqualExpression.
  visitGreaterThanOrEqualExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#LessThanOrEqualExpression.
  visitLessThanOrEqualExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#NotInExpression.
  visitNotInExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#LessThanExpression.
  visitLessThanExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#SubtractExpression.
  visitSubtractExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#Multiplicative.
  visitMultiplicative(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#AddExpression.
  visitAddExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#DivideExpression.
  visitDivideExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#MultiplyExpression.
  visitMultiplyExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#Unary.
  visitUnary(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#ModuloExpression.
  visitModuloExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#NotExpression.
  visitNotExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#DoubleNotExpression.
  visitDoubleNotExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#Postfix.
  visitPostfix(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#Primary.
  visitPrimary(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#PropertyAccess.
  visitPropertyAccess(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#VariableExpression.
  visitVariableExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#BareIdentifierExpression.
  visitBareIdentifierExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#LiteralExpression.
  visitLiteralExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#FunctionCallExpression.
  visitFunctionCallExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#ParenthesizedExpression.
  visitParenthesizedExpression(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#bareIdentifier.
  visitBareIdentifier(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#variable.
  visitVariable(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#variableName.
  visitVariableName(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#NumberLiteral.
  visitNumberLiteral(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#StringLiteral.
  visitStringLiteral(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#BooleanLiteral.
  visitBooleanLiteral(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#ArrayLiteral.
  visitArrayLiteral(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#PlaceholderLiteral.
  visitPlaceholderLiteral(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#placeholder.
  visitPlaceholder(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#array.
  visitArray(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#functionCall.
  visitFunctionCall(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#arrayMethods.
  visitArrayMethods(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#stringMethods.
  visitStringMethods(ctx) {
    return this.visitChildren(ctx);
  }
  // Visit a parse tree produced by RELParser#functionName.
  visitFunctionName(ctx) {
    return this.visitChildren(ctx);
  }
};

// generated/RELParser.js
var serializedATN2 = [
  4,
  1,
  55,
  265,
  2,
  0,
  7,
  0,
  2,
  1,
  7,
  1,
  2,
  2,
  7,
  2,
  2,
  3,
  7,
  3,
  2,
  4,
  7,
  4,
  2,
  5,
  7,
  5,
  2,
  6,
  7,
  6,
  2,
  7,
  7,
  7,
  2,
  8,
  7,
  8,
  2,
  9,
  7,
  9,
  2,
  10,
  7,
  10,
  2,
  11,
  7,
  11,
  2,
  12,
  7,
  12,
  2,
  13,
  7,
  13,
  2,
  14,
  7,
  14,
  2,
  15,
  7,
  15,
  2,
  16,
  7,
  16,
  2,
  17,
  7,
  17,
  2,
  18,
  7,
  18,
  2,
  19,
  7,
  19,
  2,
  20,
  7,
  20,
  1,
  0,
  1,
  0,
  1,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  5,
  1,
  55,
  8,
  1,
  10,
  1,
  12,
  1,
  58,
  9,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  3,
  1,
  64,
  8,
  1,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  1,
  2,
  5,
  2,
  72,
  8,
  2,
  10,
  2,
  12,
  2,
  75,
  9,
  2,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  1,
  3,
  5,
  3,
  83,
  8,
  3,
  10,
  3,
  12,
  3,
  86,
  9,
  3,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  1,
  4,
  5,
  4,
  103,
  8,
  4,
  10,
  4,
  12,
  4,
  106,
  9,
  4,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  1,
  5,
  5,
  5,
  141,
  8,
  5,
  10,
  5,
  12,
  5,
  144,
  9,
  5,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  6,
  1,
  6,
  5,
  6,
  155,
  8,
  6,
  10,
  6,
  12,
  6,
  158,
  9,
  6,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  1,
  7,
  5,
  7,
  172,
  8,
  7,
  10,
  7,
  12,
  7,
  175,
  9,
  7,
  1,
  8,
  1,
  8,
  1,
  8,
  1,
  8,
  1,
  8,
  3,
  8,
  182,
  8,
  8,
  1,
  9,
  1,
  9,
  1,
  9,
  1,
  9,
  1,
  9,
  1,
  9,
  5,
  9,
  190,
  8,
  9,
  10,
  9,
  12,
  9,
  193,
  9,
  9,
  1,
  10,
  1,
  10,
  1,
  10,
  1,
  10,
  1,
  10,
  1,
  10,
  1,
  10,
  1,
  10,
  3,
  10,
  203,
  8,
  10,
  1,
  11,
  1,
  11,
  1,
  12,
  1,
  12,
  1,
  12,
  1,
  13,
  1,
  13,
  1,
  13,
  5,
  13,
  213,
  8,
  13,
  10,
  13,
  12,
  13,
  216,
  9,
  13,
  1,
  14,
  1,
  14,
  1,
  14,
  1,
  14,
  1,
  14,
  3,
  14,
  223,
  8,
  14,
  1,
  15,
  1,
  15,
  1,
  16,
  1,
  16,
  1,
  16,
  1,
  16,
  5,
  16,
  231,
  8,
  16,
  10,
  16,
  12,
  16,
  234,
  9,
  16,
  3,
  16,
  236,
  8,
  16,
  1,
  16,
  1,
  16,
  1,
  17,
  1,
  17,
  1,
  17,
  1,
  17,
  1,
  17,
  5,
  17,
  245,
  8,
  17,
  10,
  17,
  12,
  17,
  248,
  9,
  17,
  3,
  17,
  250,
  8,
  17,
  1,
  17,
  1,
  17,
  1,
  18,
  1,
  18,
  1,
  19,
  1,
  19,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  1,
  20,
  3,
  20,
  263,
  8,
  20,
  1,
  20,
  0,
  7,
  4,
  6,
  8,
  10,
  12,
  14,
  18,
  21,
  0,
  2,
  4,
  6,
  8,
  10,
  12,
  14,
  16,
  18,
  20,
  22,
  24,
  26,
  28,
  30,
  32,
  34,
  36,
  38,
  40,
  0,
  2,
  1,
  0,
  2,
  8,
  1,
  0,
  9,
  10,
  285,
  0,
  42,
  1,
  0,
  0,
  0,
  2,
  63,
  1,
  0,
  0,
  0,
  4,
  65,
  1,
  0,
  0,
  0,
  6,
  76,
  1,
  0,
  0,
  0,
  8,
  87,
  1,
  0,
  0,
  0,
  10,
  107,
  1,
  0,
  0,
  0,
  12,
  145,
  1,
  0,
  0,
  0,
  14,
  159,
  1,
  0,
  0,
  0,
  16,
  181,
  1,
  0,
  0,
  0,
  18,
  183,
  1,
  0,
  0,
  0,
  20,
  202,
  1,
  0,
  0,
  0,
  22,
  204,
  1,
  0,
  0,
  0,
  24,
  206,
  1,
  0,
  0,
  0,
  26,
  209,
  1,
  0,
  0,
  0,
  28,
  222,
  1,
  0,
  0,
  0,
  30,
  224,
  1,
  0,
  0,
  0,
  32,
  226,
  1,
  0,
  0,
  0,
  34,
  239,
  1,
  0,
  0,
  0,
  36,
  253,
  1,
  0,
  0,
  0,
  38,
  255,
  1,
  0,
  0,
  0,
  40,
  262,
  1,
  0,
  0,
  0,
  42,
  43,
  3,
  2,
  1,
  0,
  43,
  44,
  5,
  0,
  0,
  1,
  44,
  1,
  1,
  0,
  0,
  0,
  45,
  46,
  5,
  13,
  0,
  0,
  46,
  47,
  3,
  4,
  2,
  0,
  47,
  48,
  5,
  14,
  0,
  0,
  48,
  56,
  3,
  2,
  1,
  0,
  49,
  50,
  5,
  16,
  0,
  0,
  50,
  51,
  3,
  4,
  2,
  0,
  51,
  52,
  5,
  14,
  0,
  0,
  52,
  53,
  3,
  2,
  1,
  0,
  53,
  55,
  1,
  0,
  0,
  0,
  54,
  49,
  1,
  0,
  0,
  0,
  55,
  58,
  1,
  0,
  0,
  0,
  56,
  54,
  1,
  0,
  0,
  0,
  56,
  57,
  1,
  0,
  0,
  0,
  57,
  59,
  1,
  0,
  0,
  0,
  58,
  56,
  1,
  0,
  0,
  0,
  59,
  60,
  5,
  15,
  0,
  0,
  60,
  61,
  3,
  2,
  1,
  0,
  61,
  64,
  1,
  0,
  0,
  0,
  62,
  64,
  3,
  4,
  2,
  0,
  63,
  45,
  1,
  0,
  0,
  0,
  63,
  62,
  1,
  0,
  0,
  0,
  64,
  3,
  1,
  0,
  0,
  0,
  65,
  66,
  6,
  2,
  -1,
  0,
  66,
  67,
  3,
  6,
  3,
  0,
  67,
  73,
  1,
  0,
  0,
  0,
  68,
  69,
  10,
  2,
  0,
  0,
  69,
  70,
  5,
  17,
  0,
  0,
  70,
  72,
  3,
  6,
  3,
  0,
  71,
  68,
  1,
  0,
  0,
  0,
  72,
  75,
  1,
  0,
  0,
  0,
  73,
  71,
  1,
  0,
  0,
  0,
  73,
  74,
  1,
  0,
  0,
  0,
  74,
  5,
  1,
  0,
  0,
  0,
  75,
  73,
  1,
  0,
  0,
  0,
  76,
  77,
  6,
  3,
  -1,
  0,
  77,
  78,
  3,
  8,
  4,
  0,
  78,
  84,
  1,
  0,
  0,
  0,
  79,
  80,
  10,
  2,
  0,
  0,
  80,
  81,
  5,
  18,
  0,
  0,
  81,
  83,
  3,
  8,
  4,
  0,
  82,
  79,
  1,
  0,
  0,
  0,
  83,
  86,
  1,
  0,
  0,
  0,
  84,
  82,
  1,
  0,
  0,
  0,
  84,
  85,
  1,
  0,
  0,
  0,
  85,
  7,
  1,
  0,
  0,
  0,
  86,
  84,
  1,
  0,
  0,
  0,
  87,
  88,
  6,
  4,
  -1,
  0,
  88,
  89,
  3,
  10,
  5,
  0,
  89,
  104,
  1,
  0,
  0,
  0,
  90,
  91,
  10,
  5,
  0,
  0,
  91,
  92,
  5,
  19,
  0,
  0,
  92,
  103,
  3,
  10,
  5,
  0,
  93,
  94,
  10,
  4,
  0,
  0,
  94,
  95,
  5,
  21,
  0,
  0,
  95,
  103,
  3,
  10,
  5,
  0,
  96,
  97,
  10,
  3,
  0,
  0,
  97,
  98,
  5,
  20,
  0,
  0,
  98,
  103,
  3,
  10,
  5,
  0,
  99,
  100,
  10,
  2,
  0,
  0,
  100,
  101,
  5,
  22,
  0,
  0,
  101,
  103,
  3,
  10,
  5,
  0,
  102,
  90,
  1,
  0,
  0,
  0,
  102,
  93,
  1,
  0,
  0,
  0,
  102,
  96,
  1,
  0,
  0,
  0,
  102,
  99,
  1,
  0,
  0,
  0,
  103,
  106,
  1,
  0,
  0,
  0,
  104,
  102,
  1,
  0,
  0,
  0,
  104,
  105,
  1,
  0,
  0,
  0,
  105,
  9,
  1,
  0,
  0,
  0,
  106,
  104,
  1,
  0,
  0,
  0,
  107,
  108,
  6,
  5,
  -1,
  0,
  108,
  109,
  3,
  12,
  6,
  0,
  109,
  142,
  1,
  0,
  0,
  0,
  110,
  111,
  10,
  10,
  0,
  0,
  111,
  112,
  5,
  23,
  0,
  0,
  112,
  141,
  3,
  12,
  6,
  0,
  113,
  114,
  10,
  9,
  0,
  0,
  114,
  115,
  5,
  24,
  0,
  0,
  115,
  141,
  3,
  12,
  6,
  0,
  116,
  117,
  10,
  8,
  0,
  0,
  117,
  118,
  5,
  25,
  0,
  0,
  118,
  141,
  3,
  12,
  6,
  0,
  119,
  120,
  10,
  7,
  0,
  0,
  120,
  121,
  5,
  26,
  0,
  0,
  121,
  141,
  3,
  12,
  6,
  0,
  122,
  123,
  10,
  6,
  0,
  0,
  123,
  124,
  5,
  27,
  0,
  0,
  124,
  125,
  3,
  12,
  6,
  0,
  125,
  126,
  5,
  18,
  0,
  0,
  126,
  127,
  3,
  12,
  6,
  0,
  127,
  141,
  1,
  0,
  0,
  0,
  128,
  129,
  10,
  5,
  0,
  0,
  129,
  130,
  5,
  28,
  0,
  0,
  130,
  141,
  3,
  12,
  6,
  0,
  131,
  132,
  10,
  4,
  0,
  0,
  132,
  133,
  5,
  29,
  0,
  0,
  133,
  141,
  3,
  12,
  6,
  0,
  134,
  135,
  10,
  3,
  0,
  0,
  135,
  136,
  5,
  30,
  0,
  0,
  136,
  141,
  3,
  12,
  6,
  0,
  137,
  138,
  10,
  2,
  0,
  0,
  138,
  139,
  5,
  31,
  0,
  0,
  139,
  141,
  3,
  12,
  6,
  0,
  140,
  110,
  1,
  0,
  0,
  0,
  140,
  113,
  1,
  0,
  0,
  0,
  140,
  116,
  1,
  0,
  0,
  0,
  140,
  119,
  1,
  0,
  0,
  0,
  140,
  122,
  1,
  0,
  0,
  0,
  140,
  128,
  1,
  0,
  0,
  0,
  140,
  131,
  1,
  0,
  0,
  0,
  140,
  134,
  1,
  0,
  0,
  0,
  140,
  137,
  1,
  0,
  0,
  0,
  141,
  144,
  1,
  0,
  0,
  0,
  142,
  140,
  1,
  0,
  0,
  0,
  142,
  143,
  1,
  0,
  0,
  0,
  143,
  11,
  1,
  0,
  0,
  0,
  144,
  142,
  1,
  0,
  0,
  0,
  145,
  146,
  6,
  6,
  -1,
  0,
  146,
  147,
  3,
  14,
  7,
  0,
  147,
  156,
  1,
  0,
  0,
  0,
  148,
  149,
  10,
  3,
  0,
  0,
  149,
  150,
  5,
  34,
  0,
  0,
  150,
  155,
  3,
  14,
  7,
  0,
  151,
  152,
  10,
  2,
  0,
  0,
  152,
  153,
  5,
  35,
  0,
  0,
  153,
  155,
  3,
  14,
  7,
  0,
  154,
  148,
  1,
  0,
  0,
  0,
  154,
  151,
  1,
  0,
  0,
  0,
  155,
  158,
  1,
  0,
  0,
  0,
  156,
  154,
  1,
  0,
  0,
  0,
  156,
  157,
  1,
  0,
  0,
  0,
  157,
  13,
  1,
  0,
  0,
  0,
  158,
  156,
  1,
  0,
  0,
  0,
  159,
  160,
  6,
  7,
  -1,
  0,
  160,
  161,
  3,
  16,
  8,
  0,
  161,
  173,
  1,
  0,
  0,
  0,
  162,
  163,
  10,
  4,
  0,
  0,
  163,
  164,
  5,
  36,
  0,
  0,
  164,
  172,
  3,
  16,
  8,
  0,
  165,
  166,
  10,
  3,
  0,
  0,
  166,
  167,
  5,
  37,
  0,
  0,
  167,
  172,
  3,
  16,
  8,
  0,
  168,
  169,
  10,
  2,
  0,
  0,
  169,
  170,
  5,
  38,
  0,
  0,
  170,
  172,
  3,
  16,
  8,
  0,
  171,
  162,
  1,
  0,
  0,
  0,
  171,
  165,
  1,
  0,
  0,
  0,
  171,
  168,
  1,
  0,
  0,
  0,
  172,
  175,
  1,
  0,
  0,
  0,
  173,
  171,
  1,
  0,
  0,
  0,
  173,
  174,
  1,
  0,
  0,
  0,
  174,
  15,
  1,
  0,
  0,
  0,
  175,
  173,
  1,
  0,
  0,
  0,
  176,
  177,
  5,
  32,
  0,
  0,
  177,
  182,
  3,
  16,
  8,
  0,
  178,
  179,
  5,
  33,
  0,
  0,
  179,
  182,
  3,
  16,
  8,
  0,
  180,
  182,
  3,
  18,
  9,
  0,
  181,
  176,
  1,
  0,
  0,
  0,
  181,
  178,
  1,
  0,
  0,
  0,
  181,
  180,
  1,
  0,
  0,
  0,
  182,
  17,
  1,
  0,
  0,
  0,
  183,
  184,
  6,
  9,
  -1,
  0,
  184,
  185,
  3,
  20,
  10,
  0,
  185,
  191,
  1,
  0,
  0,
  0,
  186,
  187,
  10,
  2,
  0,
  0,
  187,
  188,
  5,
  40,
  0,
  0,
  188,
  190,
  5,
  51,
  0,
  0,
  189,
  186,
  1,
  0,
  0,
  0,
  190,
  193,
  1,
  0,
  0,
  0,
  191,
  189,
  1,
  0,
  0,
  0,
  191,
  192,
  1,
  0,
  0,
  0,
  192,
  19,
  1,
  0,
  0,
  0,
  193,
  191,
  1,
  0,
  0,
  0,
  194,
  203,
  3,
  24,
  12,
  0,
  195,
  203,
  3,
  22,
  11,
  0,
  196,
  203,
  3,
  28,
  14,
  0,
  197,
  203,
  3,
  34,
  17,
  0,
  198,
  199,
  5,
  42,
  0,
  0,
  199,
  200,
  3,
  2,
  1,
  0,
  200,
  201,
  5,
  43,
  0,
  0,
  201,
  203,
  1,
  0,
  0,
  0,
  202,
  194,
  1,
  0,
  0,
  0,
  202,
  195,
  1,
  0,
  0,
  0,
  202,
  196,
  1,
  0,
  0,
  0,
  202,
  197,
  1,
  0,
  0,
  0,
  202,
  198,
  1,
  0,
  0,
  0,
  203,
  21,
  1,
  0,
  0,
  0,
  204,
  205,
  5,
  51,
  0,
  0,
  205,
  23,
  1,
  0,
  0,
  0,
  206,
  207,
  5,
  1,
  0,
  0,
  207,
  208,
  3,
  26,
  13,
  0,
  208,
  25,
  1,
  0,
  0,
  0,
  209,
  214,
  5,
  51,
  0,
  0,
  210,
  211,
  5,
  40,
  0,
  0,
  211,
  213,
  5,
  51,
  0,
  0,
  212,
  210,
  1,
  0,
  0,
  0,
  213,
  216,
  1,
  0,
  0,
  0,
  214,
  212,
  1,
  0,
  0,
  0,
  214,
  215,
  1,
  0,
  0,
  0,
  215,
  27,
  1,
  0,
  0,
  0,
  216,
  214,
  1,
  0,
  0,
  0,
  217,
  223,
  5,
  48,
  0,
  0,
  218,
  223,
  5,
  49,
  0,
  0,
  219,
  223,
  5,
  50,
  0,
  0,
  220,
  223,
  3,
  32,
  16,
  0,
  221,
  223,
  3,
  30,
  15,
  0,
  222,
  217,
  1,
  0,
  0,
  0,
  222,
  218,
  1,
  0,
  0,
  0,
  222,
  219,
  1,
  0,
  0,
  0,
  222,
  220,
  1,
  0,
  0,
  0,
  222,
  221,
  1,
  0,
  0,
  0,
  223,
  29,
  1,
  0,
  0,
  0,
  224,
  225,
  5,
  52,
  0,
  0,
  225,
  31,
  1,
  0,
  0,
  0,
  226,
  235,
  5,
  44,
  0,
  0,
  227,
  232,
  3,
  2,
  1,
  0,
  228,
  229,
  5,
  39,
  0,
  0,
  229,
  231,
  3,
  2,
  1,
  0,
  230,
  228,
  1,
  0,
  0,
  0,
  231,
  234,
  1,
  0,
  0,
  0,
  232,
  230,
  1,
  0,
  0,
  0,
  232,
  233,
  1,
  0,
  0,
  0,
  233,
  236,
  1,
  0,
  0,
  0,
  234,
  232,
  1,
  0,
  0,
  0,
  235,
  227,
  1,
  0,
  0,
  0,
  235,
  236,
  1,
  0,
  0,
  0,
  236,
  237,
  1,
  0,
  0,
  0,
  237,
  238,
  5,
  45,
  0,
  0,
  238,
  33,
  1,
  0,
  0,
  0,
  239,
  240,
  3,
  40,
  20,
  0,
  240,
  249,
  5,
  42,
  0,
  0,
  241,
  246,
  3,
  2,
  1,
  0,
  242,
  243,
  5,
  39,
  0,
  0,
  243,
  245,
  3,
  2,
  1,
  0,
  244,
  242,
  1,
  0,
  0,
  0,
  245,
  248,
  1,
  0,
  0,
  0,
  246,
  244,
  1,
  0,
  0,
  0,
  246,
  247,
  1,
  0,
  0,
  0,
  247,
  250,
  1,
  0,
  0,
  0,
  248,
  246,
  1,
  0,
  0,
  0,
  249,
  241,
  1,
  0,
  0,
  0,
  249,
  250,
  1,
  0,
  0,
  0,
  250,
  251,
  1,
  0,
  0,
  0,
  251,
  252,
  5,
  43,
  0,
  0,
  252,
  35,
  1,
  0,
  0,
  0,
  253,
  254,
  7,
  0,
  0,
  0,
  254,
  37,
  1,
  0,
  0,
  0,
  255,
  256,
  7,
  1,
  0,
  0,
  256,
  39,
  1,
  0,
  0,
  0,
  257,
  263,
  5,
  11,
  0,
  0,
  258,
  263,
  5,
  12,
  0,
  0,
  259,
  263,
  3,
  38,
  19,
  0,
  260,
  263,
  3,
  36,
  18,
  0,
  261,
  263,
  5,
  51,
  0,
  0,
  262,
  257,
  1,
  0,
  0,
  0,
  262,
  258,
  1,
  0,
  0,
  0,
  262,
  259,
  1,
  0,
  0,
  0,
  262,
  260,
  1,
  0,
  0,
  0,
  262,
  261,
  1,
  0,
  0,
  0,
  263,
  41,
  1,
  0,
  0,
  0,
  22,
  56,
  63,
  73,
  84,
  102,
  104,
  140,
  142,
  154,
  156,
  171,
  173,
  181,
  191,
  202,
  214,
  222,
  232,
  235,
  246,
  249,
  262
];
var atn2 = new Ln.atn.ATNDeserializer().deserialize(serializedATN2);
var decisionsToDFA2 = atn2.decisionToState.map((ds, index) => new Ln.dfa.DFA(ds, index));
var sharedContextCache = new Ln.atn.PredictionContextCache();
var RELParser = class _RELParser extends Ln.Parser {
  static grammarFileName = "REL.g4";
  static literalNames = [
    null,
    "'@'",
    "'merge'",
    "'some'",
    "'all'",
    "'none'",
    "'map'",
    "'filter'",
    "'reduce'",
    "'cat'",
    "'substr'",
    "'max'",
    "'min'",
    "'if'",
    "'then'",
    "'else'",
    "'elseif'",
    "'or'",
    "'and'",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "'between'",
    null,
    "'not in'",
    "'starts with'",
    "'ends with'",
    null,
    "'!!'",
    null,
    null,
    null,
    null,
    null,
    "','",
    "'.'",
    "';'",
    "'('",
    "')'",
    "'['",
    "']'",
    "'{'",
    "'}'"
  ];
  static symbolicNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "IF",
    "THEN",
    "ELSE",
    "ELSEIF",
    "OR",
    "AND",
    "EQ",
    "NEQ",
    "SEQ",
    "SNEQ",
    "GT",
    "GTE",
    "LT",
    "LTE",
    "BETWEEN",
    "IN",
    "NOT_IN",
    "STARTS_WITH",
    "ENDS_WITH",
    "NOT",
    "DOUBLE_NOT",
    "PLUS",
    "MINUS",
    "MULTIPLY",
    "DIVIDE",
    "MODULO",
    "COMMA",
    "DOT",
    "SEMICOLON",
    "LPAREN",
    "RPAREN",
    "LBRACKET",
    "RBRACKET",
    "LBRACE",
    "RBRACE",
    "NUMBER",
    "STRING",
    "BOOLEAN",
    "IDENTIFIER",
    "PLACEHOLDER",
    "WS",
    "LINE_COMMENT",
    "BLOCK_COMMENT"
  ];
  static ruleNames = [
    "expression",
    "conditionalExpression",
    "logicalOrExpression",
    "logicalAndExpression",
    "equalityExpression",
    "relationalExpression",
    "additiveExpression",
    "multiplicativeExpression",
    "unaryExpression",
    "postfixExpression",
    "primaryExpression",
    "bareIdentifier",
    "variable",
    "variableName",
    "literal",
    "placeholder",
    "array",
    "functionCall",
    "arrayMethods",
    "stringMethods",
    "functionName"
  ];
  constructor(input) {
    super(input);
    this._interp = new Ln.atn.ParserATNSimulator(this, atn2, decisionsToDFA2, sharedContextCache);
    this.ruleNames = _RELParser.ruleNames;
    this.literalNames = _RELParser.literalNames;
    this.symbolicNames = _RELParser.symbolicNames;
  }
  sempred(localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
      case 2:
        return this.logicalOrExpression_sempred(localctx, predIndex);
      case 3:
        return this.logicalAndExpression_sempred(localctx, predIndex);
      case 4:
        return this.equalityExpression_sempred(localctx, predIndex);
      case 5:
        return this.relationalExpression_sempred(localctx, predIndex);
      case 6:
        return this.additiveExpression_sempred(localctx, predIndex);
      case 7:
        return this.multiplicativeExpression_sempred(localctx, predIndex);
      case 9:
        return this.postfixExpression_sempred(localctx, predIndex);
      default:
        throw "No predicate with index:" + ruleIndex;
    }
  }
  logicalOrExpression_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 2);
      default:
        throw "No predicate with index:" + predIndex;
    }
  }
  logicalAndExpression_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 1:
        return this.precpred(this._ctx, 2);
      default:
        throw "No predicate with index:" + predIndex;
    }
  }
  equalityExpression_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 2:
        return this.precpred(this._ctx, 5);
      case 3:
        return this.precpred(this._ctx, 4);
      case 4:
        return this.precpred(this._ctx, 3);
      case 5:
        return this.precpred(this._ctx, 2);
      default:
        throw "No predicate with index:" + predIndex;
    }
  }
  relationalExpression_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 6:
        return this.precpred(this._ctx, 10);
      case 7:
        return this.precpred(this._ctx, 9);
      case 8:
        return this.precpred(this._ctx, 8);
      case 9:
        return this.precpred(this._ctx, 7);
      case 10:
        return this.precpred(this._ctx, 6);
      case 11:
        return this.precpred(this._ctx, 5);
      case 12:
        return this.precpred(this._ctx, 4);
      case 13:
        return this.precpred(this._ctx, 3);
      case 14:
        return this.precpred(this._ctx, 2);
      default:
        throw "No predicate with index:" + predIndex;
    }
  }
  additiveExpression_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 15:
        return this.precpred(this._ctx, 3);
      case 16:
        return this.precpred(this._ctx, 2);
      default:
        throw "No predicate with index:" + predIndex;
    }
  }
  multiplicativeExpression_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 17:
        return this.precpred(this._ctx, 4);
      case 18:
        return this.precpred(this._ctx, 3);
      case 19:
        return this.precpred(this._ctx, 2);
      default:
        throw "No predicate with index:" + predIndex;
    }
  }
  postfixExpression_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 20:
        return this.precpred(this._ctx, 2);
      default:
        throw "No predicate with index:" + predIndex;
    }
  }
  expression() {
    let localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, _RELParser.RULE_expression);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 42;
      this.conditionalExpression();
      this.state = 43;
      this.match(_RELParser.EOF);
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  conditionalExpression() {
    let localctx = new ConditionalExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, _RELParser.RULE_conditionalExpression);
    var _la = 0;
    try {
      this.state = 63;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 13:
          localctx = new IfThenElseContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          this.state = 45;
          this.match(_RELParser.IF);
          this.state = 46;
          this.logicalOrExpression(0);
          this.state = 47;
          this.match(_RELParser.THEN);
          this.state = 48;
          this.conditionalExpression();
          this.state = 56;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (_la === 16) {
            this.state = 49;
            this.match(_RELParser.ELSEIF);
            this.state = 50;
            this.logicalOrExpression(0);
            this.state = 51;
            this.match(_RELParser.THEN);
            this.state = 52;
            this.conditionalExpression();
            this.state = 58;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          this.state = 59;
          this.match(_RELParser.ELSE);
          this.state = 60;
          this.conditionalExpression();
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 32:
        case 33:
        case 42:
        case 44:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
          localctx = new LogicalOrContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          this.state = 62;
          this.logicalOrExpression(0);
          break;
        default:
          throw new Ln.error.NoViableAltException(this);
      }
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  logicalOrExpression(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new LogicalOrExpressionContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 4;
    this.enterRecursionRule(localctx, 4, _RELParser.RULE_logicalOrExpression, _p);
    try {
      this.enterOuterAlt(localctx, 1);
      localctx = new LogicalAndContext(this, localctx);
      this._ctx = localctx;
      _prevctx = localctx;
      this.state = 66;
      this.logicalAndExpression(0);
      this._ctx.stop = this._input.LT(-1);
      this.state = 73;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
      while (_alt != 2 && _alt != Ln.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          localctx = new OrExpressionContext(this, new LogicalOrExpressionContext(this, _parentctx, _parentState));
          this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_logicalOrExpression);
          this.state = 68;
          if (!this.precpred(this._ctx, 2)) {
            throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
          }
          this.state = 69;
          this.match(_RELParser.OR);
          this.state = 70;
          this.logicalAndExpression(0);
        }
        this.state = 75;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
      }
    } catch (error) {
      if (error instanceof Ln.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  logicalAndExpression(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new LogicalAndExpressionContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 6;
    this.enterRecursionRule(localctx, 6, _RELParser.RULE_logicalAndExpression, _p);
    try {
      this.enterOuterAlt(localctx, 1);
      localctx = new EqualityContext(this, localctx);
      this._ctx = localctx;
      _prevctx = localctx;
      this.state = 77;
      this.equalityExpression(0);
      this._ctx.stop = this._input.LT(-1);
      this.state = 84;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
      while (_alt != 2 && _alt != Ln.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          localctx = new AndExpressionContext(this, new LogicalAndExpressionContext(this, _parentctx, _parentState));
          this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_logicalAndExpression);
          this.state = 79;
          if (!this.precpred(this._ctx, 2)) {
            throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
          }
          this.state = 80;
          this.match(_RELParser.AND);
          this.state = 81;
          this.equalityExpression(0);
        }
        this.state = 86;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
      }
    } catch (error) {
      if (error instanceof Ln.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  equalityExpression(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new EqualityExpressionContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 8;
    this.enterRecursionRule(localctx, 8, _RELParser.RULE_equalityExpression, _p);
    try {
      this.enterOuterAlt(localctx, 1);
      localctx = new RelationalContext(this, localctx);
      this._ctx = localctx;
      _prevctx = localctx;
      this.state = 88;
      this.relationalExpression(0);
      this._ctx.stop = this._input.LT(-1);
      this.state = 104;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
      while (_alt != 2 && _alt != Ln.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          this.state = 102;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
          switch (la_) {
            case 1:
              localctx = new EqualExpressionContext(this, new EqualityExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_equalityExpression);
              this.state = 90;
              if (!this.precpred(this._ctx, 5)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
              }
              this.state = 91;
              this.match(_RELParser.EQ);
              this.state = 92;
              this.relationalExpression(0);
              break;
            case 2:
              localctx = new StrictEqualExpressionContext(this, new EqualityExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_equalityExpression);
              this.state = 93;
              if (!this.precpred(this._ctx, 4)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
              }
              this.state = 94;
              this.match(_RELParser.SEQ);
              this.state = 95;
              this.relationalExpression(0);
              break;
            case 3:
              localctx = new NotEqualExpressionContext(this, new EqualityExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_equalityExpression);
              this.state = 96;
              if (!this.precpred(this._ctx, 3)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
              }
              this.state = 97;
              this.match(_RELParser.NEQ);
              this.state = 98;
              this.relationalExpression(0);
              break;
            case 4:
              localctx = new StrictNotEqualExpressionContext(this, new EqualityExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_equalityExpression);
              this.state = 99;
              if (!this.precpred(this._ctx, 2)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
              }
              this.state = 100;
              this.match(_RELParser.SNEQ);
              this.state = 101;
              this.relationalExpression(0);
              break;
          }
        }
        this.state = 106;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
      }
    } catch (error) {
      if (error instanceof Ln.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  relationalExpression(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new RelationalExpressionContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 10;
    this.enterRecursionRule(localctx, 10, _RELParser.RULE_relationalExpression, _p);
    try {
      this.enterOuterAlt(localctx, 1);
      localctx = new AdditiveContext(this, localctx);
      this._ctx = localctx;
      _prevctx = localctx;
      this.state = 108;
      this.additiveExpression(0);
      this._ctx.stop = this._input.LT(-1);
      this.state = 142;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
      while (_alt != 2 && _alt != Ln.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          this.state = 140;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 6, this._ctx);
          switch (la_) {
            case 1:
              localctx = new GreaterThanExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_relationalExpression);
              this.state = 110;
              if (!this.precpred(this._ctx, 10)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
              }
              this.state = 111;
              this.match(_RELParser.GT);
              this.state = 112;
              this.additiveExpression(0);
              break;
            case 2:
              localctx = new GreaterThanOrEqualExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_relationalExpression);
              this.state = 113;
              if (!this.precpred(this._ctx, 9)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
              }
              this.state = 114;
              this.match(_RELParser.GTE);
              this.state = 115;
              this.additiveExpression(0);
              break;
            case 3:
              localctx = new LessThanExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_relationalExpression);
              this.state = 116;
              if (!this.precpred(this._ctx, 8)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
              }
              this.state = 117;
              this.match(_RELParser.LT);
              this.state = 118;
              this.additiveExpression(0);
              break;
            case 4:
              localctx = new LessThanOrEqualExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_relationalExpression);
              this.state = 119;
              if (!this.precpred(this._ctx, 7)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
              }
              this.state = 120;
              this.match(_RELParser.LTE);
              this.state = 121;
              this.additiveExpression(0);
              break;
            case 5:
              localctx = new BetweenExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_relationalExpression);
              this.state = 122;
              if (!this.precpred(this._ctx, 6)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
              }
              this.state = 123;
              this.match(_RELParser.BETWEEN);
              this.state = 124;
              this.additiveExpression(0);
              this.state = 125;
              this.match(_RELParser.AND);
              this.state = 126;
              this.additiveExpression(0);
              break;
            case 6:
              localctx = new InExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_relationalExpression);
              this.state = 128;
              if (!this.precpred(this._ctx, 5)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
              }
              this.state = 129;
              this.match(_RELParser.IN);
              this.state = 130;
              this.additiveExpression(0);
              break;
            case 7:
              localctx = new NotInExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_relationalExpression);
              this.state = 131;
              if (!this.precpred(this._ctx, 4)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
              }
              this.state = 132;
              this.match(_RELParser.NOT_IN);
              this.state = 133;
              this.additiveExpression(0);
              break;
            case 8:
              localctx = new StartsWithExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_relationalExpression);
              this.state = 134;
              if (!this.precpred(this._ctx, 3)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
              }
              this.state = 135;
              this.match(_RELParser.STARTS_WITH);
              this.state = 136;
              this.additiveExpression(0);
              break;
            case 9:
              localctx = new EndsWithExpressionContext(this, new RelationalExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_relationalExpression);
              this.state = 137;
              if (!this.precpred(this._ctx, 2)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
              }
              this.state = 138;
              this.match(_RELParser.ENDS_WITH);
              this.state = 139;
              this.additiveExpression(0);
              break;
          }
        }
        this.state = 144;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
      }
    } catch (error) {
      if (error instanceof Ln.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  additiveExpression(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new AdditiveExpressionContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 12;
    this.enterRecursionRule(localctx, 12, _RELParser.RULE_additiveExpression, _p);
    try {
      this.enterOuterAlt(localctx, 1);
      localctx = new MultiplicativeContext(this, localctx);
      this._ctx = localctx;
      _prevctx = localctx;
      this.state = 146;
      this.multiplicativeExpression(0);
      this._ctx.stop = this._input.LT(-1);
      this.state = 156;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
      while (_alt != 2 && _alt != Ln.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          this.state = 154;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 8, this._ctx);
          switch (la_) {
            case 1:
              localctx = new AddExpressionContext(this, new AdditiveExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_additiveExpression);
              this.state = 148;
              if (!this.precpred(this._ctx, 3)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
              }
              this.state = 149;
              this.match(_RELParser.PLUS);
              this.state = 150;
              this.multiplicativeExpression(0);
              break;
            case 2:
              localctx = new SubtractExpressionContext(this, new AdditiveExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_additiveExpression);
              this.state = 151;
              if (!this.precpred(this._ctx, 2)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
              }
              this.state = 152;
              this.match(_RELParser.MINUS);
              this.state = 153;
              this.multiplicativeExpression(0);
              break;
          }
        }
        this.state = 158;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
      }
    } catch (error) {
      if (error instanceof Ln.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  multiplicativeExpression(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new MultiplicativeExpressionContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 14;
    this.enterRecursionRule(localctx, 14, _RELParser.RULE_multiplicativeExpression, _p);
    try {
      this.enterOuterAlt(localctx, 1);
      localctx = new UnaryContext(this, localctx);
      this._ctx = localctx;
      _prevctx = localctx;
      this.state = 160;
      this.unaryExpression();
      this._ctx.stop = this._input.LT(-1);
      this.state = 173;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
      while (_alt != 2 && _alt != Ln.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          this.state = 171;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 10, this._ctx);
          switch (la_) {
            case 1:
              localctx = new MultiplyExpressionContext(this, new MultiplicativeExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_multiplicativeExpression);
              this.state = 162;
              if (!this.precpred(this._ctx, 4)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
              }
              this.state = 163;
              this.match(_RELParser.MULTIPLY);
              this.state = 164;
              this.unaryExpression();
              break;
            case 2:
              localctx = new DivideExpressionContext(this, new MultiplicativeExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_multiplicativeExpression);
              this.state = 165;
              if (!this.precpred(this._ctx, 3)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
              }
              this.state = 166;
              this.match(_RELParser.DIVIDE);
              this.state = 167;
              this.unaryExpression();
              break;
            case 3:
              localctx = new ModuloExpressionContext(this, new MultiplicativeExpressionContext(this, _parentctx, _parentState));
              this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_multiplicativeExpression);
              this.state = 168;
              if (!this.precpred(this._ctx, 2)) {
                throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
              }
              this.state = 169;
              this.match(_RELParser.MODULO);
              this.state = 170;
              this.unaryExpression();
              break;
          }
        }
        this.state = 175;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
      }
    } catch (error) {
      if (error instanceof Ln.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  unaryExpression() {
    let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, _RELParser.RULE_unaryExpression);
    try {
      this.state = 181;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 32:
          localctx = new NotExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          this.state = 176;
          this.match(_RELParser.NOT);
          this.state = 177;
          this.unaryExpression();
          break;
        case 33:
          localctx = new DoubleNotExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          this.state = 178;
          this.match(_RELParser.DOUBLE_NOT);
          this.state = 179;
          this.unaryExpression();
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 42:
        case 44:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
          localctx = new PostfixContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          this.state = 180;
          this.postfixExpression(0);
          break;
        default:
          throw new Ln.error.NoViableAltException(this);
      }
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  postfixExpression(_p) {
    if (_p === void 0) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new PostfixExpressionContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 18;
    this.enterRecursionRule(localctx, 18, _RELParser.RULE_postfixExpression, _p);
    try {
      this.enterOuterAlt(localctx, 1);
      localctx = new PrimaryContext(this, localctx);
      this._ctx = localctx;
      _prevctx = localctx;
      this.state = 184;
      this.primaryExpression();
      this._ctx.stop = this._input.LT(-1);
      this.state = 191;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
      while (_alt != 2 && _alt != Ln.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          localctx = new PropertyAccessContext(this, new PostfixExpressionContext(this, _parentctx, _parentState));
          this.pushNewRecursionContext(localctx, _startState, _RELParser.RULE_postfixExpression);
          this.state = 186;
          if (!this.precpred(this._ctx, 2)) {
            throw new Ln.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
          }
          this.state = 187;
          this.match(_RELParser.DOT);
          this.state = 188;
          this.match(_RELParser.IDENTIFIER);
        }
        this.state = 193;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
      }
    } catch (error) {
      if (error instanceof Ln.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }
  primaryExpression() {
    let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, _RELParser.RULE_primaryExpression);
    try {
      this.state = 202;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 14, this._ctx);
      switch (la_) {
        case 1:
          localctx = new VariableExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          this.state = 194;
          this.variable();
          break;
        case 2:
          localctx = new BareIdentifierExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          this.state = 195;
          this.bareIdentifier();
          break;
        case 3:
          localctx = new LiteralExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          this.state = 196;
          this.literal();
          break;
        case 4:
          localctx = new FunctionCallExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          this.state = 197;
          this.functionCall();
          break;
        case 5:
          localctx = new ParenthesizedExpressionContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          this.state = 198;
          this.match(_RELParser.LPAREN);
          this.state = 199;
          this.conditionalExpression();
          this.state = 200;
          this.match(_RELParser.RPAREN);
          break;
      }
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  bareIdentifier() {
    let localctx = new BareIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, _RELParser.RULE_bareIdentifier);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 204;
      this.match(_RELParser.IDENTIFIER);
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  variable() {
    let localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, _RELParser.RULE_variable);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 206;
      this.match(_RELParser.T__0);
      this.state = 207;
      this.variableName();
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  variableName() {
    let localctx = new VariableNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, _RELParser.RULE_variableName);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 209;
      this.match(_RELParser.IDENTIFIER);
      this.state = 214;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
      while (_alt != 2 && _alt != Ln.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          this.state = 210;
          this.match(_RELParser.DOT);
          this.state = 211;
          this.match(_RELParser.IDENTIFIER);
        }
        this.state = 216;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
      }
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  literal() {
    let localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, _RELParser.RULE_literal);
    try {
      this.state = 222;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 48:
          localctx = new NumberLiteralContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          this.state = 217;
          this.match(_RELParser.NUMBER);
          break;
        case 49:
          localctx = new StringLiteralContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          this.state = 218;
          this.match(_RELParser.STRING);
          break;
        case 50:
          localctx = new BooleanLiteralContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          this.state = 219;
          this.match(_RELParser.BOOLEAN);
          break;
        case 44:
          localctx = new ArrayLiteralContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          this.state = 220;
          this.array();
          break;
        case 52:
          localctx = new PlaceholderLiteralContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          this.state = 221;
          this.placeholder();
          break;
        default:
          throw new Ln.error.NoViableAltException(this);
      }
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  placeholder() {
    let localctx = new PlaceholderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, _RELParser.RULE_placeholder);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 224;
      this.match(_RELParser.PLACEHOLDER);
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  array() {
    let localctx = new ArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, _RELParser.RULE_array);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 226;
      this.match(_RELParser.LBRACKET);
      this.state = 235;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la & ~31) === 0 && (1 << _la & 16382) !== 0 || (_la - 32 & ~31) === 0 && (1 << _la - 32 & 2036739) !== 0) {
        this.state = 227;
        this.conditionalExpression();
        this.state = 232;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 39) {
          this.state = 228;
          this.match(_RELParser.COMMA);
          this.state = 229;
          this.conditionalExpression();
          this.state = 234;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
      this.state = 237;
      this.match(_RELParser.RBRACKET);
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  functionCall() {
    let localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, _RELParser.RULE_functionCall);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 239;
      this.functionName();
      this.state = 240;
      this.match(_RELParser.LPAREN);
      this.state = 249;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la & ~31) === 0 && (1 << _la & 16382) !== 0 || (_la - 32 & ~31) === 0 && (1 << _la - 32 & 2036739) !== 0) {
        this.state = 241;
        this.conditionalExpression();
        this.state = 246;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 39) {
          this.state = 242;
          this.match(_RELParser.COMMA);
          this.state = 243;
          this.conditionalExpression();
          this.state = 248;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
      this.state = 251;
      this.match(_RELParser.RPAREN);
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  arrayMethods() {
    let localctx = new ArrayMethodsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, _RELParser.RULE_arrayMethods);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 253;
      _la = this._input.LA(1);
      if (!((_la & ~31) === 0 && (1 << _la & 508) !== 0)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  stringMethods() {
    let localctx = new StringMethodsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, _RELParser.RULE_stringMethods);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 255;
      _la = this._input.LA(1);
      if (!(_la === 9 || _la === 10)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
  functionName() {
    let localctx = new FunctionNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, _RELParser.RULE_functionName);
    try {
      this.state = 262;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 11:
          this.enterOuterAlt(localctx, 1);
          this.state = 257;
          this.match(_RELParser.T__10);
          break;
        case 12:
          this.enterOuterAlt(localctx, 2);
          this.state = 258;
          this.match(_RELParser.T__11);
          break;
        case 9:
        case 10:
          this.enterOuterAlt(localctx, 3);
          this.state = 259;
          this.stringMethods();
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
          this.enterOuterAlt(localctx, 4);
          this.state = 260;
          this.arrayMethods();
          break;
        case 51:
          this.enterOuterAlt(localctx, 5);
          this.state = 261;
          this.match(_RELParser.IDENTIFIER);
          break;
        default:
          throw new Ln.error.NoViableAltException(this);
      }
    } catch (re2) {
      if (re2 instanceof Ln.error.RecognitionException) {
        localctx.exception = re2;
        this._errHandler.reportError(this, re2);
        this._errHandler.recover(this, re2);
      } else {
        throw re2;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
};
RELParser.EOF = Ln.Token.EOF;
RELParser.T__0 = 1;
RELParser.T__1 = 2;
RELParser.T__2 = 3;
RELParser.T__3 = 4;
RELParser.T__4 = 5;
RELParser.T__5 = 6;
RELParser.T__6 = 7;
RELParser.T__7 = 8;
RELParser.T__8 = 9;
RELParser.T__9 = 10;
RELParser.T__10 = 11;
RELParser.T__11 = 12;
RELParser.IF = 13;
RELParser.THEN = 14;
RELParser.ELSE = 15;
RELParser.ELSEIF = 16;
RELParser.OR = 17;
RELParser.AND = 18;
RELParser.EQ = 19;
RELParser.NEQ = 20;
RELParser.SEQ = 21;
RELParser.SNEQ = 22;
RELParser.GT = 23;
RELParser.GTE = 24;
RELParser.LT = 25;
RELParser.LTE = 26;
RELParser.BETWEEN = 27;
RELParser.IN = 28;
RELParser.NOT_IN = 29;
RELParser.STARTS_WITH = 30;
RELParser.ENDS_WITH = 31;
RELParser.NOT = 32;
RELParser.DOUBLE_NOT = 33;
RELParser.PLUS = 34;
RELParser.MINUS = 35;
RELParser.MULTIPLY = 36;
RELParser.DIVIDE = 37;
RELParser.MODULO = 38;
RELParser.COMMA = 39;
RELParser.DOT = 40;
RELParser.SEMICOLON = 41;
RELParser.LPAREN = 42;
RELParser.RPAREN = 43;
RELParser.LBRACKET = 44;
RELParser.RBRACKET = 45;
RELParser.LBRACE = 46;
RELParser.RBRACE = 47;
RELParser.NUMBER = 48;
RELParser.STRING = 49;
RELParser.BOOLEAN = 50;
RELParser.IDENTIFIER = 51;
RELParser.PLACEHOLDER = 52;
RELParser.WS = 53;
RELParser.LINE_COMMENT = 54;
RELParser.BLOCK_COMMENT = 55;
RELParser.RULE_expression = 0;
RELParser.RULE_conditionalExpression = 1;
RELParser.RULE_logicalOrExpression = 2;
RELParser.RULE_logicalAndExpression = 3;
RELParser.RULE_equalityExpression = 4;
RELParser.RULE_relationalExpression = 5;
RELParser.RULE_additiveExpression = 6;
RELParser.RULE_multiplicativeExpression = 7;
RELParser.RULE_unaryExpression = 8;
RELParser.RULE_postfixExpression = 9;
RELParser.RULE_primaryExpression = 10;
RELParser.RULE_bareIdentifier = 11;
RELParser.RULE_variable = 12;
RELParser.RULE_variableName = 13;
RELParser.RULE_literal = 14;
RELParser.RULE_placeholder = 15;
RELParser.RULE_array = 16;
RELParser.RULE_functionCall = 17;
RELParser.RULE_arrayMethods = 18;
RELParser.RULE_stringMethods = 19;
RELParser.RULE_functionName = 20;
var ExpressionContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_expression;
  }
  conditionalExpression() {
    return this.getTypedRuleContext(ConditionalExpressionContext, 0);
  }
  EOF() {
    return this.getToken(RELParser.EOF, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ConditionalExpressionContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_conditionalExpression;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
};
var IfThenElseContext = class extends ConditionalExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  IF() {
    return this.getToken(RELParser.IF, 0);
  }
  logicalOrExpression = function(i2) {
    if (i2 === void 0) {
      i2 = null;
    }
    if (i2 === null) {
      return this.getTypedRuleContexts(LogicalOrExpressionContext);
    } else {
      return this.getTypedRuleContext(LogicalOrExpressionContext, i2);
    }
  };
  THEN = function(i2) {
    if (i2 === void 0) {
      i2 = null;
    }
    if (i2 === null) {
      return this.getTokens(RELParser.THEN);
    } else {
      return this.getToken(RELParser.THEN, i2);
    }
  };
  conditionalExpression = function(i2) {
    if (i2 === void 0) {
      i2 = null;
    }
    if (i2 === null) {
      return this.getTypedRuleContexts(ConditionalExpressionContext);
    } else {
      return this.getTypedRuleContext(ConditionalExpressionContext, i2);
    }
  };
  ELSE() {
    return this.getToken(RELParser.ELSE, 0);
  }
  ELSEIF = function(i2) {
    if (i2 === void 0) {
      i2 = null;
    }
    if (i2 === null) {
      return this.getTokens(RELParser.ELSEIF);
    } else {
      return this.getToken(RELParser.ELSEIF, i2);
    }
  };
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterIfThenElse(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitIfThenElse(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitIfThenElse(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.IfThenElseContext = IfThenElseContext;
var LogicalOrContext = class extends ConditionalExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  logicalOrExpression() {
    return this.getTypedRuleContext(LogicalOrExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterLogicalOr(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitLogicalOr(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitLogicalOr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.LogicalOrContext = LogicalOrContext;
var LogicalOrExpressionContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_logicalOrExpression;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
};
var LogicalAndContext = class extends LogicalOrExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  logicalAndExpression() {
    return this.getTypedRuleContext(LogicalAndExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterLogicalAnd(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitLogicalAnd(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitLogicalAnd(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.LogicalAndContext = LogicalAndContext;
var OrExpressionContext = class extends LogicalOrExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  logicalOrExpression() {
    return this.getTypedRuleContext(LogicalOrExpressionContext, 0);
  }
  OR() {
    return this.getToken(RELParser.OR, 0);
  }
  logicalAndExpression() {
    return this.getTypedRuleContext(LogicalAndExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterOrExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitOrExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitOrExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.OrExpressionContext = OrExpressionContext;
var LogicalAndExpressionContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_logicalAndExpression;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
};
var AndExpressionContext = class extends LogicalAndExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  logicalAndExpression() {
    return this.getTypedRuleContext(LogicalAndExpressionContext, 0);
  }
  AND() {
    return this.getToken(RELParser.AND, 0);
  }
  equalityExpression() {
    return this.getTypedRuleContext(EqualityExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterAndExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitAndExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitAndExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.AndExpressionContext = AndExpressionContext;
var EqualityContext = class extends LogicalAndExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  equalityExpression() {
    return this.getTypedRuleContext(EqualityExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterEquality(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitEquality(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitEquality(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.EqualityContext = EqualityContext;
var EqualityExpressionContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_equalityExpression;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
};
var StrictNotEqualExpressionContext = class extends EqualityExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  equalityExpression() {
    return this.getTypedRuleContext(EqualityExpressionContext, 0);
  }
  SNEQ() {
    return this.getToken(RELParser.SNEQ, 0);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterStrictNotEqualExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitStrictNotEqualExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitStrictNotEqualExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.StrictNotEqualExpressionContext = StrictNotEqualExpressionContext;
var RelationalContext = class extends EqualityExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterRelational(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitRelational(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitRelational(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.RelationalContext = RelationalContext;
var EqualExpressionContext = class extends EqualityExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  equalityExpression() {
    return this.getTypedRuleContext(EqualityExpressionContext, 0);
  }
  EQ() {
    return this.getToken(RELParser.EQ, 0);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterEqualExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitEqualExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitEqualExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.EqualExpressionContext = EqualExpressionContext;
var StrictEqualExpressionContext = class extends EqualityExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  equalityExpression() {
    return this.getTypedRuleContext(EqualityExpressionContext, 0);
  }
  SEQ() {
    return this.getToken(RELParser.SEQ, 0);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterStrictEqualExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitStrictEqualExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitStrictEqualExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.StrictEqualExpressionContext = StrictEqualExpressionContext;
var NotEqualExpressionContext = class extends EqualityExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  equalityExpression() {
    return this.getTypedRuleContext(EqualityExpressionContext, 0);
  }
  NEQ() {
    return this.getToken(RELParser.NEQ, 0);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterNotEqualExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitNotEqualExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitNotEqualExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.NotEqualExpressionContext = NotEqualExpressionContext;
var RelationalExpressionContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_relationalExpression;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
};
var AdditiveContext = class extends RelationalExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  additiveExpression() {
    return this.getTypedRuleContext(AdditiveExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterAdditive(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitAdditive(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitAdditive(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.AdditiveContext = AdditiveContext;
var BetweenExpressionContext = class extends RelationalExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  BETWEEN() {
    return this.getToken(RELParser.BETWEEN, 0);
  }
  additiveExpression = function(i2) {
    if (i2 === void 0) {
      i2 = null;
    }
    if (i2 === null) {
      return this.getTypedRuleContexts(AdditiveExpressionContext);
    } else {
      return this.getTypedRuleContext(AdditiveExpressionContext, i2);
    }
  };
  AND() {
    return this.getToken(RELParser.AND, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterBetweenExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitBetweenExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitBetweenExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.BetweenExpressionContext = BetweenExpressionContext;
var InExpressionContext = class extends RelationalExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  IN() {
    return this.getToken(RELParser.IN, 0);
  }
  additiveExpression() {
    return this.getTypedRuleContext(AdditiveExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterInExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitInExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitInExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.InExpressionContext = InExpressionContext;
var GreaterThanExpressionContext = class extends RelationalExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  GT() {
    return this.getToken(RELParser.GT, 0);
  }
  additiveExpression() {
    return this.getTypedRuleContext(AdditiveExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterGreaterThanExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitGreaterThanExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitGreaterThanExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.GreaterThanExpressionContext = GreaterThanExpressionContext;
var EndsWithExpressionContext = class extends RelationalExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  ENDS_WITH() {
    return this.getToken(RELParser.ENDS_WITH, 0);
  }
  additiveExpression() {
    return this.getTypedRuleContext(AdditiveExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterEndsWithExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitEndsWithExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitEndsWithExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.EndsWithExpressionContext = EndsWithExpressionContext;
var StartsWithExpressionContext = class extends RelationalExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  STARTS_WITH() {
    return this.getToken(RELParser.STARTS_WITH, 0);
  }
  additiveExpression() {
    return this.getTypedRuleContext(AdditiveExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterStartsWithExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitStartsWithExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitStartsWithExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.StartsWithExpressionContext = StartsWithExpressionContext;
var GreaterThanOrEqualExpressionContext = class extends RelationalExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  GTE() {
    return this.getToken(RELParser.GTE, 0);
  }
  additiveExpression() {
    return this.getTypedRuleContext(AdditiveExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterGreaterThanOrEqualExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitGreaterThanOrEqualExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitGreaterThanOrEqualExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.GreaterThanOrEqualExpressionContext = GreaterThanOrEqualExpressionContext;
var LessThanOrEqualExpressionContext = class extends RelationalExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  LTE() {
    return this.getToken(RELParser.LTE, 0);
  }
  additiveExpression() {
    return this.getTypedRuleContext(AdditiveExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterLessThanOrEqualExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitLessThanOrEqualExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitLessThanOrEqualExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.LessThanOrEqualExpressionContext = LessThanOrEqualExpressionContext;
var NotInExpressionContext = class extends RelationalExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  NOT_IN() {
    return this.getToken(RELParser.NOT_IN, 0);
  }
  additiveExpression() {
    return this.getTypedRuleContext(AdditiveExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterNotInExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitNotInExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitNotInExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.NotInExpressionContext = NotInExpressionContext;
var LessThanExpressionContext = class extends RelationalExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  relationalExpression() {
    return this.getTypedRuleContext(RelationalExpressionContext, 0);
  }
  LT() {
    return this.getToken(RELParser.LT, 0);
  }
  additiveExpression() {
    return this.getTypedRuleContext(AdditiveExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterLessThanExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitLessThanExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitLessThanExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.LessThanExpressionContext = LessThanExpressionContext;
var AdditiveExpressionContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_additiveExpression;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
};
var SubtractExpressionContext = class extends AdditiveExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  additiveExpression() {
    return this.getTypedRuleContext(AdditiveExpressionContext, 0);
  }
  MINUS() {
    return this.getToken(RELParser.MINUS, 0);
  }
  multiplicativeExpression() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterSubtractExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitSubtractExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitSubtractExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.SubtractExpressionContext = SubtractExpressionContext;
var MultiplicativeContext = class extends AdditiveExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  multiplicativeExpression() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterMultiplicative(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitMultiplicative(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitMultiplicative(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.MultiplicativeContext = MultiplicativeContext;
var AddExpressionContext = class extends AdditiveExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  additiveExpression() {
    return this.getTypedRuleContext(AdditiveExpressionContext, 0);
  }
  PLUS() {
    return this.getToken(RELParser.PLUS, 0);
  }
  multiplicativeExpression() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterAddExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitAddExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitAddExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.AddExpressionContext = AddExpressionContext;
var MultiplicativeExpressionContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_multiplicativeExpression;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
};
var DivideExpressionContext = class extends MultiplicativeExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  multiplicativeExpression() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext, 0);
  }
  DIVIDE() {
    return this.getToken(RELParser.DIVIDE, 0);
  }
  unaryExpression() {
    return this.getTypedRuleContext(UnaryExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterDivideExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitDivideExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitDivideExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.DivideExpressionContext = DivideExpressionContext;
var MultiplyExpressionContext = class extends MultiplicativeExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  multiplicativeExpression() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext, 0);
  }
  MULTIPLY() {
    return this.getToken(RELParser.MULTIPLY, 0);
  }
  unaryExpression() {
    return this.getTypedRuleContext(UnaryExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterMultiplyExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitMultiplyExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitMultiplyExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.MultiplyExpressionContext = MultiplyExpressionContext;
var UnaryContext = class extends MultiplicativeExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  unaryExpression() {
    return this.getTypedRuleContext(UnaryExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterUnary(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitUnary(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitUnary(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.UnaryContext = UnaryContext;
var ModuloExpressionContext = class extends MultiplicativeExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  multiplicativeExpression() {
    return this.getTypedRuleContext(MultiplicativeExpressionContext, 0);
  }
  MODULO() {
    return this.getToken(RELParser.MODULO, 0);
  }
  unaryExpression() {
    return this.getTypedRuleContext(UnaryExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterModuloExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitModuloExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitModuloExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.ModuloExpressionContext = ModuloExpressionContext;
var UnaryExpressionContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_unaryExpression;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
};
var PostfixContext = class extends UnaryExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  postfixExpression() {
    return this.getTypedRuleContext(PostfixExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterPostfix(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitPostfix(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitPostfix(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.PostfixContext = PostfixContext;
var DoubleNotExpressionContext = class extends UnaryExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  DOUBLE_NOT() {
    return this.getToken(RELParser.DOUBLE_NOT, 0);
  }
  unaryExpression() {
    return this.getTypedRuleContext(UnaryExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterDoubleNotExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitDoubleNotExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitDoubleNotExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.DoubleNotExpressionContext = DoubleNotExpressionContext;
var NotExpressionContext = class extends UnaryExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  NOT() {
    return this.getToken(RELParser.NOT, 0);
  }
  unaryExpression() {
    return this.getTypedRuleContext(UnaryExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterNotExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitNotExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitNotExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.NotExpressionContext = NotExpressionContext;
var PostfixExpressionContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_postfixExpression;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
};
var PrimaryContext = class extends PostfixExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  primaryExpression() {
    return this.getTypedRuleContext(PrimaryExpressionContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterPrimary(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitPrimary(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitPrimary(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.PrimaryContext = PrimaryContext;
var PropertyAccessContext = class extends PostfixExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  postfixExpression() {
    return this.getTypedRuleContext(PostfixExpressionContext, 0);
  }
  DOT() {
    return this.getToken(RELParser.DOT, 0);
  }
  IDENTIFIER() {
    return this.getToken(RELParser.IDENTIFIER, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterPropertyAccess(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitPropertyAccess(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitPropertyAccess(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.PropertyAccessContext = PropertyAccessContext;
var PrimaryExpressionContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_primaryExpression;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
};
var ParenthesizedExpressionContext = class extends PrimaryExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  LPAREN() {
    return this.getToken(RELParser.LPAREN, 0);
  }
  conditionalExpression() {
    return this.getTypedRuleContext(ConditionalExpressionContext, 0);
  }
  RPAREN() {
    return this.getToken(RELParser.RPAREN, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterParenthesizedExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitParenthesizedExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitParenthesizedExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;
var BareIdentifierExpressionContext = class extends PrimaryExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  bareIdentifier() {
    return this.getTypedRuleContext(BareIdentifierContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterBareIdentifierExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitBareIdentifierExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitBareIdentifierExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.BareIdentifierExpressionContext = BareIdentifierExpressionContext;
var LiteralExpressionContext = class extends PrimaryExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  literal() {
    return this.getTypedRuleContext(LiteralContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterLiteralExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitLiteralExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitLiteralExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.LiteralExpressionContext = LiteralExpressionContext;
var VariableExpressionContext = class extends PrimaryExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  variable() {
    return this.getTypedRuleContext(VariableContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterVariableExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitVariableExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitVariableExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.VariableExpressionContext = VariableExpressionContext;
var FunctionCallExpressionContext = class extends PrimaryExpressionContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  functionCall() {
    return this.getTypedRuleContext(FunctionCallContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterFunctionCallExpression(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitFunctionCallExpression(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitFunctionCallExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.FunctionCallExpressionContext = FunctionCallExpressionContext;
var BareIdentifierContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_bareIdentifier;
  }
  IDENTIFIER() {
    return this.getToken(RELParser.IDENTIFIER, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterBareIdentifier(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitBareIdentifier(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitBareIdentifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var VariableContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_variable;
  }
  variableName() {
    return this.getTypedRuleContext(VariableNameContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterVariable(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitVariable(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitVariable(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var VariableNameContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_variableName;
  }
  IDENTIFIER = function(i2) {
    if (i2 === void 0) {
      i2 = null;
    }
    if (i2 === null) {
      return this.getTokens(RELParser.IDENTIFIER);
    } else {
      return this.getToken(RELParser.IDENTIFIER, i2);
    }
  };
  DOT = function(i2) {
    if (i2 === void 0) {
      i2 = null;
    }
    if (i2 === null) {
      return this.getTokens(RELParser.DOT);
    } else {
      return this.getToken(RELParser.DOT, i2);
    }
  };
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterVariableName(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitVariableName(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitVariableName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var LiteralContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_literal;
  }
  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
};
var StringLiteralContext = class extends LiteralContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  STRING() {
    return this.getToken(RELParser.STRING, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterStringLiteral(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitStringLiteral(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitStringLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.StringLiteralContext = StringLiteralContext;
var BooleanLiteralContext = class extends LiteralContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  BOOLEAN() {
    return this.getToken(RELParser.BOOLEAN, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterBooleanLiteral(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitBooleanLiteral(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitBooleanLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.BooleanLiteralContext = BooleanLiteralContext;
var PlaceholderLiteralContext = class extends LiteralContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  placeholder() {
    return this.getTypedRuleContext(PlaceholderContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterPlaceholderLiteral(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitPlaceholderLiteral(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitPlaceholderLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.PlaceholderLiteralContext = PlaceholderLiteralContext;
var ArrayLiteralContext = class extends LiteralContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  array() {
    return this.getTypedRuleContext(ArrayContext, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterArrayLiteral(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitArrayLiteral(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitArrayLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.ArrayLiteralContext = ArrayLiteralContext;
var NumberLiteralContext = class extends LiteralContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }
  NUMBER() {
    return this.getToken(RELParser.NUMBER, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterNumberLiteral(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitNumberLiteral(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitNumberLiteral(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.NumberLiteralContext = NumberLiteralContext;
var PlaceholderContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_placeholder;
  }
  PLACEHOLDER() {
    return this.getToken(RELParser.PLACEHOLDER, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterPlaceholder(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitPlaceholder(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitPlaceholder(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ArrayContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_array;
  }
  LBRACKET() {
    return this.getToken(RELParser.LBRACKET, 0);
  }
  RBRACKET() {
    return this.getToken(RELParser.RBRACKET, 0);
  }
  conditionalExpression = function(i2) {
    if (i2 === void 0) {
      i2 = null;
    }
    if (i2 === null) {
      return this.getTypedRuleContexts(ConditionalExpressionContext);
    } else {
      return this.getTypedRuleContext(ConditionalExpressionContext, i2);
    }
  };
  COMMA = function(i2) {
    if (i2 === void 0) {
      i2 = null;
    }
    if (i2 === null) {
      return this.getTokens(RELParser.COMMA);
    } else {
      return this.getToken(RELParser.COMMA, i2);
    }
  };
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterArray(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitArray(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitArray(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var FunctionCallContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_functionCall;
  }
  functionName() {
    return this.getTypedRuleContext(FunctionNameContext, 0);
  }
  LPAREN() {
    return this.getToken(RELParser.LPAREN, 0);
  }
  RPAREN() {
    return this.getToken(RELParser.RPAREN, 0);
  }
  conditionalExpression = function(i2) {
    if (i2 === void 0) {
      i2 = null;
    }
    if (i2 === null) {
      return this.getTypedRuleContexts(ConditionalExpressionContext);
    } else {
      return this.getTypedRuleContext(ConditionalExpressionContext, i2);
    }
  };
  COMMA = function(i2) {
    if (i2 === void 0) {
      i2 = null;
    }
    if (i2 === null) {
      return this.getTokens(RELParser.COMMA);
    } else {
      return this.getToken(RELParser.COMMA, i2);
    }
  };
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterFunctionCall(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitFunctionCall(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitFunctionCall(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ArrayMethodsContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_arrayMethods;
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterArrayMethods(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitArrayMethods(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitArrayMethods(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var StringMethodsContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_stringMethods;
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterStringMethods(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitStringMethods(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitStringMethods(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var FunctionNameContext = class extends Ln.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === void 0) {
      parent = null;
    }
    if (invokingState === void 0 || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RELParser.RULE_functionName;
  }
  stringMethods() {
    return this.getTypedRuleContext(StringMethodsContext, 0);
  }
  arrayMethods() {
    return this.getTypedRuleContext(ArrayMethodsContext, 0);
  }
  IDENTIFIER() {
    return this.getToken(RELParser.IDENTIFIER, 0);
  }
  enterRule(listener) {
    if (listener instanceof RELListener) {
      listener.enterFunctionName(this);
    }
  }
  exitRule(listener) {
    if (listener instanceof RELListener) {
      listener.exitFunctionName(this);
    }
  }
  accept(visitor) {
    if (visitor instanceof RELVisitor) {
      return visitor.visitFunctionName(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
RELParser.ExpressionContext = ExpressionContext;
RELParser.ConditionalExpressionContext = ConditionalExpressionContext;
RELParser.LogicalOrExpressionContext = LogicalOrExpressionContext;
RELParser.LogicalAndExpressionContext = LogicalAndExpressionContext;
RELParser.EqualityExpressionContext = EqualityExpressionContext;
RELParser.RelationalExpressionContext = RelationalExpressionContext;
RELParser.AdditiveExpressionContext = AdditiveExpressionContext;
RELParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
RELParser.UnaryExpressionContext = UnaryExpressionContext;
RELParser.PostfixExpressionContext = PostfixExpressionContext;
RELParser.PrimaryExpressionContext = PrimaryExpressionContext;
RELParser.BareIdentifierContext = BareIdentifierContext;
RELParser.VariableContext = VariableContext;
RELParser.VariableNameContext = VariableNameContext;
RELParser.LiteralContext = LiteralContext;
RELParser.PlaceholderContext = PlaceholderContext;
RELParser.ArrayContext = ArrayContext;
RELParser.FunctionCallContext = FunctionCallContext;
RELParser.ArrayMethodsContext = ArrayMethodsContext;
RELParser.StringMethodsContext = StringMethodsContext;
RELParser.FunctionNameContext = FunctionNameContext;

// internal/jsonlogic.visitor.js
var JSONLogicVisitor = class extends RELVisitor {
  constructor() {
    super();
    this.lambdaContext = {
      isInLambda: false,
      externalVariables: /* @__PURE__ */ new Set()
    };
  }
  // ==================== ENTRY POINT ====================
  /**
   * Entry point - visits the root expression
   */
  visitExpression(ctx) {
    return this.visit(ctx.conditionalExpression());
  }
  // ==================== CONDITIONAL EXPRESSIONS ====================
  /**
   * Handles if-then-else expressions with support for elseif chains
   * Produces JSONLogic: {"if": [condition1, then1, condition2, then2, ..., else]}
   */
  visitIfThenElse(ctx) {
    const conditions = ctx.logicalOrExpression();
    const expressions = ctx.conditionalExpression();
    const ifArray = [];
    for (let i2 = 0; i2 < conditions.length; i2++) {
      const condition = this.visit(conditions[i2]);
      const thenExpr = this.visit(expressions[i2]);
      ifArray.push(condition, thenExpr);
    }
    const elseExpr = this.visit(expressions[expressions.length - 1]);
    ifArray.push(elseExpr);
    return { "if": ifArray };
  }
  /**
   * Passes through to logical OR expression
   */
  visitLogicalOr(ctx) {
    return this.visit(ctx.logicalOrExpression());
  }
  // ==================== LOGICAL EXPRESSIONS ====================
  /**
   * Handles logical OR operations
   * Produces JSONLogic: {"or": [left, right]}
   */
  visitOrExpression(ctx) {
    const left = this.visit(ctx.logicalOrExpression());
    const right = this.visit(ctx.logicalAndExpression());
    return { "or": [left, right] };
  }
  /**
   * Passes through to logical AND expression
   */
  visitLogicalAnd(ctx) {
    return this.visit(ctx.logicalAndExpression());
  }
  /**
   * Handles logical AND operations
   * Produces JSONLogic: {"and": [left, right]}
   */
  visitAndExpression(ctx) {
    const left = this.visit(ctx.logicalAndExpression());
    const right = this.visit(ctx.equalityExpression());
    return { "and": [left, right] };
  }
  /**
   * Passes through to equality expression
   */
  visitEquality(ctx) {
    return this.visit(ctx.equalityExpression());
  }
  // ==================== EQUALITY EXPRESSIONS ====================
  /**
   * Handles equality comparison (==, =, eq, equals, equals to)
   * Produces JSONLogic: {"==": [left, right]}
   */
  visitEqualExpression(ctx) {
    const left = this.visit(ctx.equalityExpression());
    const right = this.visit(ctx.relationalExpression());
    return { "==": [left, right] };
  }
  /**
   * Handles strict equality comparison (===, seq, strict equals)
   * Produces JSONLogic: {"===": [left, right]}
   */
  visitStrictEqualExpression(ctx) {
    const left = this.visit(ctx.equalityExpression());
    const right = this.visit(ctx.relationalExpression());
    return { "===": [left, right] };
  }
  /**
   * Handles inequality comparison (!=, neq, not equal)
   * Produces JSONLogic: {"!=": [left, right]}
   */
  visitNotEqualExpression(ctx) {
    const left = this.visit(ctx.equalityExpression());
    const right = this.visit(ctx.relationalExpression());
    return { "!=": [left, right] };
  }
  /**
   * Handles strict inequality comparison (!==, sneq, strict not equal)
   * Produces JSONLogic: {"!==": [left, right]}
   */
  visitStrictNotEqualExpression(ctx) {
    const left = this.visit(ctx.equalityExpression());
    const right = this.visit(ctx.relationalExpression());
    return { "!==": [left, right] };
  }
  /**
   * Passes through to relational expression
   */
  visitRelational(ctx) {
    return this.visit(ctx.relationalExpression());
  }
  // ==================== RELATIONAL EXPRESSIONS ====================
  /**
   * Handles greater than comparison (>, gt, greater than)
   * Produces JSONLogic: {">": [left, right]}
   */
  visitGreaterThanExpression(ctx) {
    const left = this.visit(ctx.relationalExpression());
    const right = this.visit(ctx.additiveExpression());
    return { ">": [left, right] };
  }
  /**
   * Handles greater than or equal comparison (>=, gte, greater than or equal to)
   * Produces JSONLogic: {">=": [left, right]}
   */
  visitGreaterThanOrEqualExpression(ctx) {
    const left = this.visit(ctx.relationalExpression());
    const right = this.visit(ctx.additiveExpression());
    return { ">=": [left, right] };
  }
  /**
   * Handles less than comparison (<, lt, less than)
   * Produces JSONLogic: {"<": [left, right]}
   */
  visitLessThanExpression(ctx) {
    const left = this.visit(ctx.relationalExpression());
    const right = this.visit(ctx.additiveExpression());
    return { "<": [left, right] };
  }
  /**
   * Handles less than or equal comparison (<=, lte, less than or equal to)
   * Produces JSONLogic: {"<=": [left, right]}
   */
  visitLessThanOrEqualExpression(ctx) {
    const left = this.visit(ctx.relationalExpression());
    const right = this.visit(ctx.additiveExpression());
    return { "<=": [left, right] };
  }
  /**
   * Handles between expressions (value between lower and upper)
   * Produces JSONLogic: {"and": [{">=": [expr, lower]}, {"<=": [expr, upper]}]}
   */
  visitBetweenExpression(ctx) {
    const expr = this.visit(ctx.relationalExpression());
    const lower = this.visit(ctx.additiveExpression(0));
    const upper = this.visit(ctx.additiveExpression(1));
    return {
      "and": [
        { ">=": [expr, lower] },
        { "<=": [expr, upper] }
      ]
    };
  }
  /**
   * Handles 'in' expressions (value in collection)
   * Produces JSONLogic: {"in": [value, collection]}
   */
  visitInExpression(ctx) {
    const value = this.visit(ctx.relationalExpression());
    const collection = this.visit(ctx.additiveExpression());
    return { "in": [value, collection] };
  }
  /**
   * Handles 'not in' expressions (value not in collection)
   * Produces JSONLogic: {"!": {"in": [value, collection]}}
   */
  visitNotInExpression(ctx) {
    const value = this.visit(ctx.relationalExpression());
    const collection = this.visit(ctx.additiveExpression());
    return {
      "!": {
        "in": [value, collection]
      }
    };
  }
  /**
   * Handles 'starts with' expressions (string starts with substring)
   * Uses JSONLogic substr to check if beginning of string matches substring
   * Produces JSONLogic: {"==": [{"substr": [string, 0, length]}, substring]}
   */
  visitStartsWithExpression(ctx) {
    const string = this.visit(ctx.relationalExpression());
    const substring = this.visit(ctx.additiveExpression());
    let length;
    if (typeof substring === "string") {
      length = substring.length;
    } else {
      length = { "length": substring };
    }
    return {
      "==": [
        {
          "substr": [string, 0, length]
        },
        substring
      ]
    };
  }
  /**
   * Handles 'ends with' expressions (string ends with substring)
   * Uses JSONLogic substr with negative start position to check end of string
   * Produces JSONLogic: {"==": [{"substr": [string, -length]}, substring]}
   */
  visitEndsWithExpression(ctx) {
    const string = this.visit(ctx.relationalExpression());
    const substring = this.visit(ctx.additiveExpression());
    let length;
    if (typeof substring === "string") {
      length = substring.length;
    } else {
      length = { "length": substring };
    }
    return {
      "==": [
        {
          "substr": [string, -length]
        },
        substring
      ]
    };
  }
  /**
   * Handles 'contains' expressions (string contains substring)
   * Produces JSONLogic: {"in": [substring, string]}
   */
  visitContainsExpression(ctx) {
    const string = this.visit(ctx.relationalExpression());
    const substring = this.visit(ctx.additiveExpression());
    return {
      "in": [substring, string]
    };
  }
  /**
   * Passes through to additive expression
   */
  visitAdditive(ctx) {
    return this.visit(ctx.additiveExpression());
  }
  // ==================== ARITHMETIC EXPRESSIONS ====================
  /**
   * Handles addition (+, plus)
   * Produces JSONLogic: {"+": [left, right]}
   */
  visitAddExpression(ctx) {
    const left = this.visit(ctx.additiveExpression());
    const right = this.visit(ctx.multiplicativeExpression());
    return { "+": [left, right] };
  }
  /**
   * Handles subtraction (-, minus)
   * Produces JSONLogic: {"-": [left, right]}
   */
  visitSubtractExpression(ctx) {
    const left = this.visit(ctx.additiveExpression());
    const right = this.visit(ctx.multiplicativeExpression());
    return { "-": [left, right] };
  }
  /**
   * Passes through to multiplicative expression
   */
  visitMultiplicative(ctx) {
    return this.visit(ctx.multiplicativeExpression());
  }
  /**
   * Handles multiplication (*, multiply, times)
   * Produces JSONLogic: {"*": [left, right]}
   */
  visitMultiplyExpression(ctx) {
    const left = this.visit(ctx.multiplicativeExpression());
    const right = this.visit(ctx.unaryExpression());
    return { "*": [left, right] };
  }
  /**
   * Handles division (/, divide, over)
   * Produces JSONLogic: {"/": [left, right]}
   */
  visitDivideExpression(ctx) {
    const left = this.visit(ctx.multiplicativeExpression());
    const right = this.visit(ctx.unaryExpression());
    return { "/": [left, right] };
  }
  /**
   * Handles modulo (%, modulo, mod, remainder)
   * Produces JSONLogic: {"%": [left, right]}
   */
  visitModuloExpression(ctx) {
    const left = this.visit(ctx.multiplicativeExpression());
    const right = this.visit(ctx.unaryExpression());
    return { "%": [left, right] };
  }
  /**
   * Passes through to unary expression
   */
  visitUnary(ctx) {
    return this.visit(ctx.unaryExpression());
  }
  // ==================== UNARY EXPRESSIONS ====================
  /**
   * Handles logical NOT (!, not)
   * Produces JSONLogic: {"!": expr}
   */
  visitNotExpression(ctx) {
    const expr = this.visit(ctx.unaryExpression());
    return { "!": expr };
  }
  /**
   * Handles double NOT (!!)
   * Produces JSONLogic: {"!!": expr}
   */
  visitDoubleNotExpression(ctx) {
    const expr = this.visit(ctx.unaryExpression());
    return { "!!": expr };
  }
  /**
   * Passes through to postfix expression
   */
  visitPostfix(ctx) {
    return this.visit(ctx.postfixExpression());
  }
  // ==================== POSTFIX EXPRESSIONS ====================
  /**
   * Handles property access with dot notation (obj.property)
   * Produces JSONLogic: {"var": "path.to.property"}
   */
  visitPropertyAccess(ctx) {
    const object = this.visit(ctx.postfixExpression());
    const property = ctx.IDENTIFIER().getText();
    if (object && object.var !== void 0) {
      const basePath = object.var;
      const fullPath = basePath ? `${basePath}.${property}` : property;
      return { var: fullPath };
    }
    return { var: property };
  }
  /**
   * Passes through to primary expression
   */
  visitPrimary(ctx) {
    return this.visit(ctx.primaryExpression());
  }
  // ==================== PRIMARY EXPRESSIONS ====================
  /**
   * Handles variable expressions (@variable)
   */
  visitVariableExpression(ctx) {
    return this.visit(ctx.variable());
  }
  /**
   * Handles bare identifier expressions (used in lambda contexts)
   */
  visitBareIdentifierExpression(ctx) {
    return this.visit(ctx.bareIdentifier());
  }
  /**
   * Handles literal expressions (numbers, strings, booleans, arrays)
   */
  visitLiteralExpression(ctx) {
    return this.visit(ctx.literal());
  }
  /**
   * Handles function call expressions
   */
  visitFunctionCallExpression(ctx) {
    return this.visit(ctx.functionCall());
  }
  /**
   * Handles parenthesized expressions
   */
  visitParenthesizedExpression(ctx) {
    return this.visit(ctx.conditionalExpression());
  }
  // ==================== IDENTIFIERS AND VARIABLES ====================
  /**
   * Handles bare identifiers (typically used in lambda expressions)
   * Produces JSONLogic: {"var": "identifier"}
   * Throws error if used outside lambda context
   */
  visitBareIdentifier(ctx) {
    const identifier = ctx.getText();
    if (!this.lambdaContext.isInLambda) {
      throw new Error(`Invalid bare identifier '${identifier}'. Identifiers must be prefixed with '@' for variables or quoted as strings. Bare identifiers are only allowed in lambda expressions within array methods.`);
    }
    return { var: identifier };
  }
  /**
   * Handles variable references (@variable.path)
   * Produces JSONLogic: {"var": "variable.path"}
   */
  visitVariable(ctx) {
    const varName = this.visit(ctx.variableName());
    if (this.lambdaContext.isInLambda) {
      this.lambdaContext.externalVariables.add(varName);
    }
    return { var: varName };
  }
  /**
   * Handles variable names with dot notation support
   * Returns: "variable.path.to.property"
   */
  visitVariableName(ctx) {
    const identifiers = ctx.IDENTIFIER();
    return identifiers.map((id) => id.getText()).join(".");
  }
  // ==================== LITERALS ====================
  /**
   * Handles number literals
   * Returns: number (integer or float)
   */
  visitNumberLiteral(ctx) {
    const text = ctx.NUMBER().getText();
    return text.includes(".") ? parseFloat(text) : parseInt(text, 10);
  }
  /**
   * Handles string literals
   * Returns: string (with escape sequences processed)
   */
  visitStringLiteral(ctx) {
    const text = ctx.STRING().getText();
    return text.slice(1, -1).replace(/\\(.)/g, "$1");
  }
  /**
   * Handles boolean literals
   * Returns: boolean
   */
  visitBooleanLiteral(ctx) {
    return ctx.BOOLEAN().getText() === "true";
  }
  /**
   * Handles array literals
   */
  visitArrayLiteral(ctx) {
    return this.visit(ctx.array());
  }
  /**
   * Handles placeholder literals
   * Returns: string (the placeholder including braces)
   */
  visitPlaceholderLiteral(ctx) {
    return this.visit(ctx.placeholder());
  }
  /**
   * Handles placeholder tokens
   * Returns: string (the placeholder including braces)
   */
  visitPlaceholder(ctx) {
    return ctx.PLACEHOLDER().getText();
  }
  /**
   * Handles array construction
   * Returns: array of visited expressions
   */
  visitArray(ctx) {
    const expressions = ctx.conditionalExpression();
    if (!expressions || expressions.length === 0) {
      return [];
    }
    return expressions.map((expr) => this.visit(expr));
  }
  // ==================== FUNCTION CALLS ====================
  /**
   * Handles function calls including array methods and built-in functions
   * Produces appropriate JSONLogic based on function type
   */
  visitFunctionCall(ctx) {
    const functionName = ctx.functionName().getText();
    const args = ctx.conditionalExpression();
    const arrayMethods = ["some", "all", "none", "map", "filter", "reduce", "merge"];
    if (arrayMethods.includes(functionName)) {
      return this.handleArrayMethodCall(functionName, args);
    } else {
      return this.handleRegularFunctionCall(functionName, args);
    }
  }
  /**
   * Handles regular function calls (non-array methods)
   * Produces JSONLogic: {functionName: [arg1, arg2, ...]}
   */
  handleRegularFunctionCall(functionName, args) {
    const argValues = args ? args.map((arg) => this.visit(arg)) : [];
    switch (functionName) {
      case "max":
        return { max: argValues };
      case "min":
        return { min: argValues };
      case "cat":
        return { cat: argValues };
      case "substr":
        return { substr: argValues };
      case "log":
        return { log: argValues };
      default:
        return { [functionName]: argValues };
    }
  }
  /**
   * Handles array method calls with lambda expression support
   * Produces JSONLogic: {methodName: [array, lambdaExpression, ...additionalArgs]}
   */
  handleArrayMethodCall(methodName, args) {
    if (!args || args.length === 0) {
      throw new Error(`Array method '${methodName}' requires at least one argument (the array)`);
    }
    const arrayExpr = this.visit(args[0]);
    if (args.length === 1) {
      return { [methodName]: [arrayExpr] };
    }
    this.enterLambdaContext();
    try {
      if (args.length === 2) {
        const lambdaExpr = this.visitLambdaExpression(args[1]);
        return { [methodName]: [arrayExpr, lambdaExpr] };
      } else {
        const lambdaExpr = this.visitLambdaExpression(args[1]);
        const additionalArgs = args.slice(2).map((arg) => this.visit(arg));
        return { [methodName]: [arrayExpr, lambdaExpr, ...additionalArgs] };
      }
    } finally {
      this.exitLambdaContext();
    }
  }
  // ==================== LAMBDA CONTEXT MANAGEMENT ====================
  /**
   * Enters lambda context for array method processing
   */
  enterLambdaContext() {
    this.lambdaContext.isInLambda = true;
    this.lambdaContext.externalVariables = /* @__PURE__ */ new Set();
  }
  /**
   * Exits lambda context
   */
  exitLambdaContext() {
    this.lambdaContext.isInLambda = false;
    this.lambdaContext.externalVariables = null;
  }
  /**
   * Visits lambda expressions with proper variable transformation
   */
  visitLambdaExpression(ctx) {
    const result = this.visit(ctx);
    return this.transformLambdaVariables(result);
  }
  /**
   * Transforms variables in lambda expressions for JSONLogic compatibility
   * - Bare identifiers become current iteration item: {"var": ""}
   * - Property access becomes property path: {"var": "property.path"}
   * - External variables (@var) remain unchanged
   */
  transformLambdaVariables(expr) {
    if (!expr || typeof expr !== "object") {
      return expr;
    }
    if (Array.isArray(expr)) {
      return expr.map((item) => this.transformLambdaVariables(item));
    }
    if (expr.var !== void 0) {
      return this.transformVariableReference(expr);
    }
    const result = {};
    for (const [key, value] of Object.entries(expr)) {
      result[key] = this.transformLambdaVariables(value);
    }
    return result;
  }
  /**
   * Transforms variable references in lambda context
   */
  transformVariableReference(varExpr) {
    const varPath = varExpr.var;
    if (!varPath) {
      return varExpr;
    }
    if (this.lambdaContext.externalVariables && this.lambdaContext.externalVariables.has(varPath)) {
      return varExpr;
    }
    if (varPath.includes(".")) {
      const parts = varPath.split(".");
      const propertyPath = parts.slice(1).join(".");
      return { var: propertyPath };
    }
    return { var: "" };
  }
  // ==================== ERROR HANDLING ====================
  /**
   * Handles unsupported or unrecognized constructs
   */
  visitChildren(ctx) {
    const result = super.visitChildren(ctx);
    if (result === void 0 || result === null) {
      throw new Error(`Unsupported construct: ${ctx.constructor.name}`);
    }
    return result;
  }
};

// internal/translator.js
function translate(expression) {
  try {
    const inputStream = new Ln.InputStream(expression);
    const lexer = new RELLexer(inputStream);
    const tokenStream = new Ln.CommonTokenStream(lexer);
    const parser = new RELParser(tokenStream);
    class RELErrorListener extends Ln.error.ErrorListener {
      syntaxError(recognizer, offendingSymbol, line, column, msg, e2) {
        const error = new Error(`Invalid expression: ${msg}`);
        error.name = "RELError";
        error.location = { line, column };
        error.expression = expression;
        throw error;
      }
    }
    parser.removeErrorListeners();
    lexer.removeErrorListeners();
    parser.addErrorListener(new RELErrorListener());
    lexer.addErrorListener(new RELErrorListener());
    const tree = parser.expression();
    const visitor = new JSONLogicVisitor();
    const jsonLogic = visitor.visit(tree);
    const result = {
      expression,
      jsonLogic
    };
    return result;
  } catch (error) {
    if (error.name === "RELError") {
      throw error;
    }
    const relError = new Error(`Translation failed: ${error.message}`);
    relError.name = "RELError";
    relError.location = { line: 1, column: 0 };
    relError.expression = expression;
    throw relError;
  }
}

// internal/jsonlogic-to-rel.js
function jsonLogicToRel(jsonLogic) {
  if (!jsonLogic || typeof jsonLogic !== "object") {
    return convertLiteral(jsonLogic);
  }
  if (Array.isArray(jsonLogic)) {
    const elements = jsonLogic.map((item) => jsonLogicToRel(item)).join(", ");
    return `[${elements}]`;
  }
  const entries = Object.entries(jsonLogic);
  if (entries.length !== 1) {
    throw new Error("Invalid JSONLogic: object must have exactly one key");
  }
  const [operator, args] = entries[0];
  return convertOperator(operator, args);
}
function convertOperator(operator, args) {
  const argArray = Array.isArray(args) ? args : [args];
  switch (operator) {
    // Variables
    case "var":
      return convertVariable(args);
    // Logical operators
    case "and":
      return convertBinaryOperator(argArray, " and ");
    case "or":
      return convertBinaryOperator(argArray, " or ");
    case "!":
      return `!${jsonLogicToRel(args)}`;
    case "!!":
      return `!!${jsonLogicToRel(args)}`;
    // Comparison operators
    case "==":
      const stringOp = detectStringOperation(argArray);
      if (stringOp) {
        return stringOp;
      }
      return convertBinaryOperator(argArray, " == ");
    case "===":
      return convertBinaryOperator(argArray, " === ");
    case "!=":
      return convertBinaryOperator(argArray, " != ");
    case "!==":
      return convertBinaryOperator(argArray, " !== ");
    case ">":
      return convertBinaryOperator(argArray, " > ");
    case ">=":
      return convertBinaryOperator(argArray, " >= ");
    case "<":
      return convertBinaryOperator(argArray, " < ");
    case "<=":
      return convertBinaryOperator(argArray, " <= ");
    // Arithmetic operators
    case "+":
      return convertBinaryOperator(argArray, " + ");
    case "-":
      return convertBinaryOperator(argArray, " - ");
    case "*":
      return convertBinaryOperator(argArray, " * ");
    case "/":
      return convertBinaryOperator(argArray, " / ");
    case "%":
      return convertBinaryOperator(argArray, " % ");
    // Membership operators
    case "in":
      const containsPattern = detectContainsPattern(argArray);
      if (containsPattern) {
        return containsPattern;
      }
      return `${jsonLogicToRel(argArray[0])} in ${jsonLogicToRel(argArray[1])}`;
    // Conditional expressions
    case "if":
      return convertIfExpression(argArray);
    // Functions
    case "max":
      return `max(${argArray.map((arg) => jsonLogicToRel(arg)).join(", ")})`;
    case "min":
      return `min(${argArray.map((arg) => jsonLogicToRel(arg)).join(", ")})`;
    case "cat":
      return `cat(${argArray.map((arg) => jsonLogicToRel(arg)).join(", ")})`;
    case "substr":
      return `substr(${argArray.map((arg) => jsonLogicToRel(arg)).join(", ")})`;
    case "log":
      return `log(${argArray.map((arg) => jsonLogicToRel(arg)).join(", ")})`;
    // Array methods
    case "some":
      return convertArrayMethod("some", argArray);
    case "all":
      return convertArrayMethod("all", argArray);
    case "none":
      return convertArrayMethod("none", argArray);
    case "map":
      return convertArrayMethod("map", argArray);
    case "filter":
      return convertArrayMethod("filter", argArray);
    case "reduce":
      return convertArrayMethod("reduce", argArray);
    case "merge":
      return convertArrayMethod("merge", argArray);
    default:
      if (argArray.length === 0) {
        return operator;
      }
      return `${operator}(${argArray.map((arg) => jsonLogicToRel(arg)).join(", ")})`;
  }
}
function convertVariable(varPath) {
  if (varPath === "") {
    return "item";
  }
  return `@${varPath}`;
}
function convertBinaryOperator(args, operator) {
  if (args.length < 2) {
    throw new Error(`Binary operator requires at least 2 arguments, got ${args.length}`);
  }
  if (args.length === 2) {
    const left = jsonLogicToRel(args[0]);
    const right = jsonLogicToRel(args[1]);
    const leftNeedsParens = needsParentheses(args[0], operator);
    const rightNeedsParens = needsParentheses(args[1], operator);
    const leftExpr = leftNeedsParens ? `(${left})` : left;
    const rightExpr = rightNeedsParens ? `(${right})` : right;
    return `${leftExpr}${operator}${rightExpr}`;
  }
  let result = jsonLogicToRel(args[0]);
  for (let i2 = 1; i2 < args.length; i2++) {
    result += `${operator}${jsonLogicToRel(args[i2])}`;
  }
  return result;
}
function needsParentheses(expr, parentOperator) {
  if (!expr || typeof expr !== "object" || Array.isArray(expr)) {
    return false;
  }
  const entries = Object.entries(expr);
  if (entries.length !== 1) {
    return false;
  }
  const [childOperator] = entries[0];
  const precedence = {
    "or": 1,
    "and": 2,
    "==": 3,
    "===": 3,
    "!=": 3,
    "!==": 3,
    ">": 4,
    ">=": 4,
    "<": 4,
    "<=": 4,
    "in": 4,
    "+": 5,
    "-": 5,
    "*": 6,
    "/": 6,
    "%": 6,
    "!": 7,
    "!!": 7
  };
  const parentPrec = precedence[parentOperator.trim()] || 0;
  const childPrec = precedence[childOperator] || 0;
  return childPrec > 0 && childPrec < parentPrec;
}
function convertIfExpression(args) {
  if (args.length < 3) {
    throw new Error("If expression requires at least 3 arguments (condition, then, else)");
  }
  let result = "";
  let i2 = 0;
  while (i2 < args.length - 1) {
    const condition = jsonLogicToRel(args[i2]);
    const thenExpr = jsonLogicToRel(args[i2 + 1]);
    if (i2 === 0) {
      result = `if ${condition} then ${thenExpr}`;
    } else {
      result += ` elseif ${condition} then ${thenExpr}`;
    }
    i2 += 2;
  }
  if (i2 < args.length) {
    const elseExpr = jsonLogicToRel(args[i2]);
    result += ` else ${elseExpr}`;
  }
  return result;
}
function convertArrayMethod(method, args) {
  if (args.length === 0) {
    throw new Error(`Array method '${method}' requires at least one argument`);
  }
  const arrayExpr = jsonLogicToRel(args[0]);
  if (args.length === 1) {
    return `${method}(${arrayExpr})`;
  }
  let arrayVarName = "item";
  if (args[0] && args[0].var) {
    const varPath = args[0].var;
    const parts = varPath.split(".");
    const lastPart = parts[parts.length - 1];
    if (lastPart.endsWith("s") && lastPart.length > 1) {
      arrayVarName = lastPart.slice(0, -1);
    } else {
      arrayVarName = lastPart;
    }
  }
  const lambdaExpr = convertLambdaExpression(args[1], arrayVarName);
  if (args.length === 2) {
    return `${method}(${arrayExpr}, ${lambdaExpr})`;
  }
  const additionalArgs = args.slice(2).map((arg) => jsonLogicToRel(arg)).join(", ");
  return `${method}(${arrayExpr}, ${lambdaExpr}, ${additionalArgs})`;
}
function convertLambdaExpression(lambdaExpr, itemName = "item") {
  return convertLambdaExpression_internal(lambdaExpr, itemName);
}
function convertLambdaExpression_internal(expr, itemName) {
  if (!expr || typeof expr !== "object") {
    return convertLiteral(expr);
  }
  if (Array.isArray(expr)) {
    const elements = expr.map((item) => convertLambdaExpression_internal(item, itemName)).join(", ");
    return `[${elements}]`;
  }
  const entries = Object.entries(expr);
  if (entries.length !== 1) {
    throw new Error("Invalid JSONLogic: object must have exactly one key");
  }
  const [operator, args] = entries[0];
  if (operator === "var") {
    if (args === "") {
      return "item";
    }
    return `${itemName}.${args}`;
  }
  const argArray = Array.isArray(args) ? args : [args];
  switch (operator) {
    // Logical operators
    case "and":
      return convertBinaryOperatorLambda(argArray, " and ", itemName);
    case "or":
      return convertBinaryOperatorLambda(argArray, " or ", itemName);
    case "!":
      return `!${convertLambdaExpression_internal(args, itemName)}`;
    case "!!":
      return `!!${convertLambdaExpression_internal(args, itemName)}`;
    // Comparison operators
    case "==":
      return convertBinaryOperatorLambda(argArray, " == ", itemName);
    case "===":
      return convertBinaryOperatorLambda(argArray, " === ", itemName);
    case "!=":
      return convertBinaryOperatorLambda(argArray, " != ", itemName);
    case "!==":
      return convertBinaryOperatorLambda(argArray, " !== ", itemName);
    case ">":
      return convertBinaryOperatorLambda(argArray, " > ", itemName);
    case ">=":
      return convertBinaryOperatorLambda(argArray, " >= ", itemName);
    case "<":
      return convertBinaryOperatorLambda(argArray, " < ", itemName);
    case "<=":
      return convertBinaryOperatorLambda(argArray, " <= ", itemName);
    // Arithmetic operators
    case "+":
      return convertBinaryOperatorLambda(argArray, " + ", itemName);
    case "-":
      return convertBinaryOperatorLambda(argArray, " - ", itemName);
    case "*":
      return convertBinaryOperatorLambda(argArray, " * ", itemName);
    case "/":
      return convertBinaryOperatorLambda(argArray, " / ", itemName);
    case "%":
      return convertBinaryOperatorLambda(argArray, " % ", itemName);
    // Membership operators
    case "in":
      return `${convertLambdaExpression_internal(argArray[0], itemName)} in ${convertLambdaExpression_internal(argArray[1], itemName)}`;
    default:
      if (argArray.length === 0) {
        return operator;
      }
      return `${operator}(${argArray.map((arg) => convertLambdaExpression_internal(arg, itemName)).join(", ")})`;
  }
}
function convertBinaryOperatorLambda(args, operator, itemName) {
  if (args.length < 2) {
    throw new Error(`Binary operator requires at least 2 arguments, got ${args.length}`);
  }
  if (args.length === 2) {
    const left = convertLambdaExpression_internal(args[0], itemName);
    const right = convertLambdaExpression_internal(args[1], itemName);
    return `${left}${operator}${right}`;
  }
  let result = convertLambdaExpression_internal(args[0], itemName);
  for (let i2 = 1; i2 < args.length; i2++) {
    result += `${operator}${convertLambdaExpression_internal(args[i2], itemName)}`;
  }
  return result;
}
function convertLiteral(value) {
  if (value === null) {
    return "null";
  }
  if (value === void 0) {
    return "undefined";
  }
  if (typeof value === "string") {
    return `"${value.replace(/"/g, '\\"')}"`;
  }
  if (typeof value === "boolean") {
    return value.toString();
  }
  if (typeof value === "number") {
    return value.toString();
  }
  if (Array.isArray(value)) {
    const elements = value.map((item) => convertLiteral(item)).join(", ");
    return `[${elements}]`;
  }
  if (typeof value === "object") {
    const pairs = Object.entries(value).map(
      ([key, val]) => `${key}: ${convertLiteral(val)}`
    ).join(", ");
    return `{${pairs}}`;
  }
  return String(value);
}
function handleSpecialCases(jsonLogic) {
  if (jsonLogic.and && Array.isArray(jsonLogic.and) && jsonLogic.and.length === 2) {
    const [first, second] = jsonLogic.and;
    if (first[">="] && second["<="] && Array.isArray(first[">="]) && Array.isArray(second["<="])) {
      const [expr1, lower] = first[">="];
      const [expr2, upper] = second["<="];
      if (JSON.stringify(expr1) === JSON.stringify(expr2)) {
        return `${jsonLogicToRel(expr1)} between ${jsonLogicToRel(lower)} and ${jsonLogicToRel(upper)}`;
      }
    }
  }
  if (jsonLogic["!"] && jsonLogic["!"].in && Array.isArray(jsonLogic["!"].in)) {
    const [value, collection] = jsonLogic["!"].in;
    return `${jsonLogicToRel(value)} not in ${jsonLogicToRel(collection)}`;
  }
  return null;
}
function convertFromJsonLogic(jsonLogic) {
  try {
    const specialCase = handleSpecialCases(jsonLogic);
    if (specialCase) {
      return specialCase;
    }
    return jsonLogicToRel(jsonLogic);
  } catch (error) {
    throw new Error(`Failed to convert JSONLogic to REL: ${error.message}`);
  }
}
function detectStringOperation(args) {
  if (args.length !== 2) return null;
  const [left, right] = args;
  if (left && left.substr && Array.isArray(left.substr)) {
    const [string, start, length] = left.substr;
    if (start === 0 && length !== void 0 && typeof right === "string" && length === right.length) {
      return `${jsonLogicToRel(string)} starts with ${jsonLogicToRel(right)}`;
    }
    if (start === 0 && length && length.length && JSON.stringify(length.length) === JSON.stringify(right)) {
      return `${jsonLogicToRel(string)} starts with ${jsonLogicToRel(right)}`;
    }
    if (typeof start === "number" && start < 0 && typeof right === "string" && Math.abs(start) === right.length) {
      return `${jsonLogicToRel(string)} ends with ${jsonLogicToRel(right)}`;
    }
    if (length === void 0 && start && start["-"] && start["-"].length && JSON.stringify(start["-"].length) === JSON.stringify(right)) {
      return `${jsonLogicToRel(string)} ends with ${jsonLogicToRel(right)}`;
    }
  }
  return null;
}
function detectContainsPattern(args) {
  if (args.length !== 2) return null;
  const [substring, string] = args;
  if (string && string.var && (typeof substring === "string" || substring && substring.var)) {
    return `${jsonLogicToRel(string)} contains ${jsonLogicToRel(substring)}`;
  }
  return null;
}
export {
  convertFromJsonLogic,
  translate
};
