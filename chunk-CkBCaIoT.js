import{C as wl,S as te,T as za$1,a as Dn,b as ri,d as Kr,f as La$1,g as Vo,h as Ta,i as Bn,l as J,m as Nn,n as $o$1,o as Fn,p as Me,r as Ba$1,s as I,t as $n,u as Jr,v as ja,w as z,x as sl,y as kl}from"./chunk-D1gAkhoi.js";import{$ as Qt,$t as gn$1,A as In,An as tT,Bt as by,C as GB,Cn as qb,En as re,Et as ZU,Fn as wE,Ft as ay,Gn as zB,Gt as ea$1,H as N0,Hn as xu,Ht as da$1,In as wT,Jn as zs,Kn as zb,Kt as eh,Lt as ba$1,M as Jp,Mt as _a$1,N as KB,Nt as _d,O as IU,On as sT,Ot as _,P as KU,Pn as vy,Q as QB,Qt as ge$1,Rn as x,Rt as bb,S as Fv,St as YU,T as GU,Tn as rT,U as ND,V as Ma$1,Wn as yy,Wt as dr,Xn as k,Xt as fy,Yt as fn$1,Zn as l,Zt as gU,_n as pe,a as B$,an as jt,at as TU,bn as qB,c as Bp,cn as ke,ct as Te,d as D,dn as ly,dt as Ty,ft as UT,gn as pa$1,gt as Ws,h as ET,hn as p0,ht as Vp,it as Sa$1,jn as ur,jt as __,k as Id,kt as _3,l as CU,ln as ky,mt as VT,nn as hy,nt as S,o as BT,on as kD,ot as Ta$1,p as Dy,pt as V,q as OU,qn as zo,r as AS,rn as jT,rt as SU,st as Tb,t as $e$1,tn as hs,tt as Re,u as C_,v as Ey,vn as pt,vt as XB,wn as qv,xn as qU,xt as YB,y as FC,yn as py,yt as Xr,z as MS,zn as xT}from"./main-QGOA43VA.js";var _i=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(i){return new(i||n)(ur(ea$1),ur(Xr))};static ɵdir=Ta$1({type:n})}return n})();var jo=(()=>{class n extends _i{static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(n)))(o||n)}})();static ɵdir=Ta$1({type:n,features:[ay]})}return n})();var kt=new _(``);var qo={provide:kt,useExisting:hs(()=>Ot),multi:!0};function Ho(){let n=Qt()?Qt().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var Go=new _(``);var Ot=(()=>{class n extends _i{_compositionMode;_composing=!1;constructor(e,i,o){super(e,i),this._compositionMode=o,this._compositionMode??=!Ho()}writeValue(e){let i=e??``;this.setProperty(`value`,i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(i){return new(i||n)(ur(ea$1),ur(Xr),ur(Go,8))};static ɵdir=Ta$1({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,o){i&1&&vy(`input`,function(x){return o._handleInput(x.target.value)})(`blur`,function(){return o.onTouched()})(`compositionstart`,function(){return o._compositionStart()})(`compositionend`,function(x){return o._compositionEnd(x.target.value)})},standalone:!1,features:[jT([qo]),ay]})}return n})();function rn(n){return n==null||sn(n)===0}function sn(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var ln=new _(``);var Ci=new _(``);var $o=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var ge=class{static min(t){return Uo(t)}static max(t){return Wo(t)}static required(t){return xi(t)}static requiredTrue(t){return Xo(t)}static email(t){return Yo(t)}static minLength(t){return Zo(t)}static maxLength(t){return Qo(t)}static pattern(t){return Ko(t)}static nullValidator(t){return St()}static compose(t){return Vi(t)}static composeAsync(t){return Ni(t)}};function Uo(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}function Wo(n){return t=>{if(t.value==null||n==null)return null;let e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}function xi(n){return rn(n.value)?{required:!0}:null}function Xo(n){return n.value===!0?null:{required:!0}}function Yo(n){return rn(n.value)||$o.test(n.value)?null:{email:!0}}function Zo(n){return t=>{let e=t.value?.length??sn(t.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Qo(n){return t=>{let e=t.value?.length??sn(t.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function Ko(n){if(!n)return St;let t,e;return typeof n==`string`?(e=``,n.charAt(0)!==`^`&&(e+=`^`),e+=n,n.charAt(n.length-1)!==`$`&&(e+=`$`),t=new RegExp(e)):(e=n.toString(),t=n),i=>{if(rn(i.value))return null;let o=i.value;return t.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}}}}function St(n){return null}function Mi(n){return n!=null}function Di(n){return Sa$1(n)?fn$1(n):n}function Si(n){let t={};return n.forEach(e=>{t=e!=null?k(k({},t),e):t}),Object.keys(t).length===0?null:t}function Ii(n,t){return t.map(e=>e(n))}function Jo(n){return!n.validate}function Ti(n){return n.map(t=>Jo(t)?t:e=>t.validate(e))}function Vi(n){if(!n)return null;let t=n.filter(Mi);return t.length==0?null:function(e){return Si(Ii(e,t))}}function Ei(n){return n!=null?Vi(Ti(n)):null}function Ni(n){if(!n)return null;let t=n.filter(Mi);return t.length==0?null:function(e){let i=Ii(e,t).map(Di);return ND(i).pipe($e$1(Si))}}function wi(n){return n!=null?Ni(Ti(n)):null}function gi(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Ai(n){return n._rawValidators}function ki(n){return n._rawAsyncValidators}function en(n){return n?Array.isArray(n)?n:[n]:[]}function It(n,t){return Array.isArray(n)?n.includes(t):n===t}function mi(n,t){let e=en(t);return en(n).forEach(o=>{It(e,o)||e.push(o)}),e}function hi(n,t){return en(t).filter(e=>!It(n,e))}var Tt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Ei(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=wi(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}};var Ge=class extends Tt{name;get formDirective(){return null}get path(){return null}};var et=`VALID`;var Mt=`INVALID`;var qe=`PENDING`;var tt=`DISABLED`;var Ae=class{};var Vt=class extends Ae{value;source;constructor(t,e){super(),this.value=t,this.source=e}};var nt=class extends Ae{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}};var it=class extends Ae{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}};var He=class extends Ae{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var tn=class extends Ae{source;constructor(t){super(),this.source=t}};var Pe=class extends Ae{source;constructor(t){super(),this.source=t}};function dn(n){return(Ft(n)?n.validators:n)||null}function ea(n){return Array.isArray(n)?Ei(n):n||null}function cn(n,t){return(Ft(t)?t.asyncValidators:n)||null}function ta(n){return Array.isArray(n)?wi(n):n||null}function Ft(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function Oi(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new S(1e3,``);if(!Pi(i,e))throw new S(1001,``)}function Fi(n,t,e){n._forEachChild((i,o)=>{if(e[o]===void 0)throw new S(-1002,``)})}var na=Symbol();var $e=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=ge$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this[na]=!0,this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return In(this.statusReactive)}set status(t){In(()=>this.statusReactive.set(t))}_status=UT(()=>this.statusReactive());statusReactive=ge$1(void 0);get valid(){return this.status===et}get invalid(){return this.status===Mt}get pending(){return this.status===qe}get disabled(){return this.status===tt}get enabled(){return this.status!==tt}get errors(){return In(this.errorsReactive)}set errors(t){In(()=>this.errorsReactive.set(t))}_errors=UT(()=>this.errorsReactive());errorsReactive=ge$1(null);get pristine(){return In(this.pristineReactive)}set pristine(t){In(()=>this.pristineReactive.set(t))}_pristine=UT(()=>this.pristineReactive());pristineReactive=ge$1(!0);get dirty(){return!this.pristine}get touched(){return In(this.touchedReactive)}set touched(t){In(()=>this.touchedReactive.set(t))}_touched=UT(()=>this.touchedReactive());touchedReactive=ge$1(!1);get untouched(){return!this.touched}_events=new re;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(mi(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(mi(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(hi(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(hi(t,this._rawAsyncValidators))}hasValidator(t){return It(this._rawValidators,t)}hasAsyncValidator(t){return It(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(l(k({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new it(!0,i))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=t.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:i})}),t.onlySelf||this._parent?._updateTouched(t,i),e&&t.emitEvent!==!1&&this._events.next(new it(!1,i))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let i=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(l(k({},t),{sourceControl:i})),e&&t.emitEvent!==!1&&this._events.next(new nt(!1,i))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=t.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,i),e&&t.emitEvent!==!1&&this._events.next(new nt(!0,i))}markAsPending(t={}){this.status=qe;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new He(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(l(k({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=tt,this.errors=null,this._forEachChild(o=>{o.disable(l(k({},t),{onlySelf:!0}))}),this._updateValue();let i=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Vt(this.value,i)),this._events.next(new He(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(k({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=et,this._forEachChild(i=>{i.enable(l(k({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(l(k({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===et||this.status===qe)&&this._runAsyncValidator(i,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Vt(this.value,e)),this._events.next(new He(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(l(k({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?tt:et}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=qe,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let i=Di(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((i,o)=>i&&i._find(o),this)}getError(t,e){let i=e?this.get(e):this;return i?.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,i){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||i)&&this._events.next(new He(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,i)}_initObservables(){this.valueChanges=new jt,this.statusChanges=new jt}_calculateStatus(){return this._allControlsDisabled()?tt:this.errors?Mt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(qe)?qe:this._anyControlsHaveStatus(Mt)?Mt:et}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,t.onlySelf||this._parent?._updatePristine(t,e),o&&this._events.next(new nt(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new it(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Ft(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=ea(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=ta(this._rawAsyncValidators)}_updateHasRequiredValidator(){In(()=>this._hasRequired.set(this.hasValidator(ge.required)))}};function Pi(n,t){return Object.hasOwn(n,t)}function ia(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function oa(n,t,e,i){switch(e){case`name`:n.setAttribute(t,e,i);break;case`disabled`:case`readonly`:case`required`:i?n.setAttribute(t,e,``):n.removeAttribute(t,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?n.setAttribute(t,e,i.toString()):n.removeAttribute(t,e)}}var nn=class{kind;context;control;message;constructor({kind:t,context:e,control:i}){this.kind=t,this.context=e,this.control=i}};var aa=new _(``);var Bi=new _(``,{factory:()=>un});var un=`always`;function ra(n,t){return[...t.path,n]}function sa(n,t,e=un){Pt(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e===`always`)&&t.valueAccessor.setDisabledState?.(n.disabled),da(n,t),ua(n,t),ca(n,t),la(n,t)}function fi(n,t,e=!0){let i=()=>{};t?.valueAccessor?.registerOnChange(i),t?.valueAccessor?.registerOnTouched(i),Nt(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Et(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function la(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Pt(n,t){let e=Ai(n);t.validator!==null?n.setValidators(gi(e,t.validator)):typeof e==`function`&&n.setValidators([e]);let i=ki(n);t.asyncValidator!==null?n.setAsyncValidators(gi(i,t.asyncValidator)):typeof i==`function`&&n.setAsyncValidators([i]);let o=()=>n.updateValueAndValidity();Et(t._rawValidators,o),Et(t._rawAsyncValidators,o)}function Nt(n,t){let e=!1;if(n!==null){if(t.validator!==null){let o=Ai(n);if(Array.isArray(o)&&o.length>0){let d=o.filter(x=>x!==t.validator);d.length!==o.length&&(e=!0,n.setValidators(d))}}if(t.asyncValidator!==null){let o=ki(n);if(Array.isArray(o)&&o.length>0){let d=o.filter(x=>x!==t.asyncValidator);d.length!==o.length&&(e=!0,n.setAsyncValidators(d))}}}let i=()=>{};return Et(t._rawValidators,i),Et(t._rawAsyncValidators,i),e}function da(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn===`change`&&zi(n,t)})}function ca(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn===`blur`&&n._pendingChange&&zi(n,t),n.updateOn!==`submit`&&n.markAsTouched()})}function zi(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ua(n,t){let e=(i,o)=>{t.valueAccessor.writeValue(i),o&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function pa(n,t){Pt(n,t)}function ga(n,t){return Nt(n,t)}function ma(n,t){if(!Object.hasOwn(n,`model`))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function ha(n){return Object.getPrototypeOf(n.constructor)===jo}function fa(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn===`submit`&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function va(n,t){if(!t)return null;let e,i,o;return t.forEach(d=>{d.constructor===Ot?e=d:ha(d)?i=d:o=d}),o||i||e||null}function ya(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}var ba=(()=>{class n{_validator=St;_onChange;get _enabled(){return this.enabledReactive()}enabledReactive=ge$1(void 0);ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue),o=this.enabled(i);this.enabledReactive.set(o),this._validator=o?this.createValidator(i):St,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(i){return new(i||n)};static ɵdir=Ta$1({type:n,features:[xu]})}return n})();var _a={provide:ln,useExisting:hs(()=>Bt),multi:!0};var Bt=(()=>{class n extends ba{required;inputName=`required`;normalizeInput=QB;createValidator=e=>xi;enabled(e){return e}static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(n)))(o||n)}})();static ɵdir=Ta$1({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,o){i&2&&fy(`required`,o._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[jT([_a]),ay]})}return n})();var Ca={provide:aa,useFactory:()=>{let n=D(fe,{self:!0});return{setParseErrors:t=>{n.setParseErrorSource(t)},set onReset(t){n.onReset=t}}}};var fe=class extends Tt{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(t){this.userOnReset=t,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof Pe&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=va(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;pendingCustomValue=void 0;hasPendingCustomValue=!1;constructor(t,e,i){super(),this.injector=t,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(Te)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let t=this.control,e=this.injector?.get(p0);if(!t||!e)return;Pt(t,this);let i=e.markForCheck.bind(e);if(this.subscription=new Re,this.subscription.add(()=>this.discardPendingCustomValue(t)),typeof t.registerOnChange==`function`){let o=(d,x)=>{this.discardPendingCustomValue(t),x&&this.viewToModelUpdate(d),i()};t.registerOnChange(o),this.subscription.add(()=>t._unregisterOnChange(o))}this.subscription.add(t.valueChanges.subscribe(i)),this.subscription.add(t.statusChanges.subscribe(i)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=t.events.subscribe(o=>{o instanceof Pe&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&t.addValidators(this.parseErrorsValidator)}ngControlCreate(t){!t.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!t.customControl||(this.isCustomControlBased=!0,t.listenToCustomControlModel(o=>{let d=this.control;d&&(d._pendingValue=o,d._pendingChange=!0,d._pendingDirty=!0,this.pendingCustomValue=o,this.hasPendingCustomValue=!0,d.updateOn===`change`&&this.updateControlFromCustom(d))}),t.listenToCustomControlOutput(`touch`,()=>{let o=this.control;o&&(o._pendingTouched=!0,o.updateOn===`blur`&&o._pendingChange&&this.updateControlFromCustom(o),o.updateOn!==`submit`&&o.markAsTouched())}),this.customControlBindings={},this.isNativeFormElement=ia(t.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(o=>o instanceof Bt))}updateControlFromCustom(t){let e=t._pendingValue;t._pendingChange=!1,this.clearPendingCustomValue(),this.customControlBindings&&(this.customControlBindings.value=e),t._pendingDirty&&t.markAsDirty(),t.setValue(e,{emitModelToViewChange:!1}),this.viewToModelUpdate(t.value)}discardPendingCustomValue(t){this.hasPendingCustomValue&&(this.customControlBindings&&(this.customControlBindings.value=this.pendingCustomValue),this.clearPendingCustomValue(),t._pendingValue=t.value,t._pendingChange=!1,t._pendingDirty=!1)}clearPendingCustomValue(){this.pendingCustomValue=void 0,this.hasPendingCustomValue=!1}ngControlUpdate(t){if(!this.isCustomControlBased)return;let e=this.control,i=this.customControlBindings;if(!e||!i)return;this.hasPendingCustomValue&&!e._pendingChange&&(i.value=this.pendingCustomValue,this.clearPendingCustomValue()),e._status(),e._errors(),Object.is(i.value,e.value)||(this.discardPendingCustomValue(e),i.value=e.value,t.setCustomControlModelInput(e.value)),this.bindControlProperty(t,i,`touched`,e.touched),this.bindControlProperty(t,i,`dirty`,e.dirty),this.bindControlProperty(t,i,`valid`,e.valid),this.bindControlProperty(t,i,`invalid`,e.invalid),this.bindControlProperty(t,i,`pending`,e.pending),this.bindControlProperty(t,i,`disabled`,e.disabled);let o=this.requiredValidatorViaDi;if(o){let x=this.isRequired;t.setInputOnDirectives(`required`,x,(X,U)=>U!==o&&X!==x)}else this.bindControlProperty(t,i,`required`,this.isRequired);let d=e.errors;if(i.errors!==d){i.errors=d;let x=this._convertErrors(d);t.setInputOnDirectives(`errors`,x)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}bindControlProperty(t,e,i,o){if(e[i]===o)return;e[i]=o;let d=t.setInputOnDirectives(i,o);this.isNativeFormElement&&!d&&(i===`disabled`||i===`required`)&&this.renderer&&oa(this.renderer,t.nativeElement,i,o)}_convertErrors(t){if(t===null)return[];let e=this.control;return Object.entries(t).map(([i,o])=>new nn({context:o,kind:i,control:e}))}setParseErrorSource(t){if(t===void 0)return;let e=null,i=UT(()=>{let o=t();return o.length===0?null:o.reduce((d,x)=>(d[x.kind]=x,d),{})});this.parseErrorsValidator=()=>(e=In(i),e),zo(()=>{let o=i();o!==e&&(e=o,this.control?.updateValueAndValidity({emitEvent:!1}),this.injector?.get(p0)?.markForCheck())},{injector:this.injector})}removeParseErrorsValidator(t){this.parseErrorsValidator&&(t?.removeValidators(this.parseErrorsValidator),t?.updateValueAndValidity({emitEvent:!1}))}};var wt=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Ri=(()=>{class n extends wt{constructor(e){super(e)}static ɵfac=function(i){return new(i||n)(ur(fe,2))};static ɵdir=Ta$1({type:n,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(i,o){i&2&&Ty(`ng-untouched`,o.isUntouched)(`ng-touched`,o.isTouched)(`ng-pristine`,o.isPristine)(`ng-dirty`,o.isDirty)(`ng-valid`,o.isValid)(`ng-invalid`,o.isInvalid)(`ng-pending`,o.isPending)},standalone:!1,features:[ay]})}return n})();var Li=(()=>{class n extends wt{constructor(e){super(e)}static ɵfac=function(i){return new(i||n)(ur(Ge,10))};static ɵdir=Ta$1({type:n,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(i,o){i&2&&Ty(`ng-untouched`,o.isUntouched)(`ng-touched`,o.isTouched)(`ng-pristine`,o.isPristine)(`ng-dirty`,o.isDirty)(`ng-valid`,o.isValid)(`ng-invalid`,o.isInvalid)(`ng-pending`,o.isPending)(`ng-submitted`,o.isSubmitted)},standalone:!1,features:[ay]})}return n})();var At=class extends $e{constructor(t,e,i){super(dn(e),cn(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(t,e){return this._find(t)||(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){let i=this._find(t);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){let o=this._find(t);o&&o._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this._find(t)?.enabled===!0}setValue(t,e={}){In(()=>{Fi(this,!0,t),Object.keys(t).forEach(i=>{Oi(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let o=this._find(i);o&&o.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,o)=>{i.reset(t?t[o]:null,l(k({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Pe(this))}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,i,o)=>((i.enabled||this.disabled)&&(e[o]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((o,d)=>{i=e(i,o,d)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return Pi(this.controls,t)?this.controls[t]:null}};var on=class extends At{};function vi(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function yi(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var Dt=class extends $e{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,i){super(dn(e),cn(i,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ft(e)&&(e.nonNullable||e.initialValueIsDefault)&&(yi(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){In(()=>{this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Pe(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){vi(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){vi(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){yi(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var xa=n=>n instanceof Dt;var Ma=(()=>{class n extends Ge{callSetDisabledState;get submitted(){return In(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=UT(()=>this._submittedReactive());_submittedReactive=ge$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new S(1052,!1);Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Nt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);if(!i)throw new S(-1055,!1);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){fi(e.control||null,e,!1),ya(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,fa(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new tn(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,o=this.form.get(e.path);i!==o&&(fi(i||null,e),xa(o)&&e._setupWithForm(o,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);pa(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&ga(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Pt(this.form,this),this._oldForm&&Nt(this._oldForm,this)}static ɵfac=function(i){return new(i||n)(ur(ln,10),ur(Ci,10),ur(Bi,8))};static ɵdir=Ta$1({type:n,features:[ay,xu]})}return n})();var Da={provide:Ge,useExisting:hs(()=>pn)};var pn=(()=>{class n extends Ma{form=null;ngSubmit=new jt;get control(){return this.form}static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(n)))(o||n)}})();static ɵdir=Ta$1({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(i,o){i&1&&vy(`submit`,function(x){return o.onSubmit(x)})(`reset`,function(){return o.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[jT([Da]),ay]})}return n})();var ji=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=Ta$1({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return n})();var an=class extends $e{constructor(t,e,i){super(dn(e),cn(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){Array.isArray(t)?t.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,i={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(t,e={}){let i=this._adjustIndex(t);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,i={}){let o=this._adjustIndex(t);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),e&&(this.controls.splice(o,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){In(()=>{Fi(this,!1,t),t.forEach((i,o)=>{Oi(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(t,e={}){t!=null&&(t.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((i,o)=>{i.reset(t[o],l(k({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Pe(this))}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,i)=>{t(e,i)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(let t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}};var qi=new _(``);var Sa={provide:fe,useExisting:hs(()=>gn)};var gn=(()=>{class n extends fe{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new jt;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,o,d,x,X,U){super(U,X,d),this._ngModelWarningConfig=x,this._parent=e,this._setValidators(i),this._setAsyncValidators(o)}_setupWithForm(e,i){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,sa(e,this,i))}ngOnChanges(e){this._added||this._setUpControl(),ma(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return ra(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){if(this.isCustomControlBased){if(!this.control){let i=this.formDirective?.getControl(this);if(!i)return;this.control=i}super.ngControlUpdate(e)}}static ɵfac=function(i){return new(i||n)(ur(Ge,13),ur(ln,10),ur(Ci,10),ur(kt,10),ur(qi,8),ur(ea$1,8),ur(ke,8))};static ɵdir=Ta$1({type:n,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[jT([Sa,Ca]),ay,xu,bb(null)]})}return n})();var Ia=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=dr({type:n});static ɵinj=gn$1({})}return n})();function bi(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Hi=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,i=null){let o=this._reduceControls(e),d={};return bi(i)?d=i:i!==null&&(d.validators=i.validator,d.asyncValidators=i.asyncValidator),new At(o,d)}record(e,i=null){return new on(this._reduceControls(e),i)}control(e,i,o){let d={};return this.useNonNullable?(bi(i)?d=i:(d.validators=i,d.asyncValidators=o),new Dt(e,l(k({},d),{nonNullable:!0}))):new Dt(e,i,o)}array(e,i,o){return new an(e.map(x=>this._createControl(x)),i,o)}_reduceControls(e){let i={};return Object.keys(e).forEach(o=>{i[o]=this._createControl(e[o])}),i}_createControl(e){if(e instanceof Dt)return e;if(e instanceof $e)return e;if(Array.isArray(e)){let i=e[0],o=e.length>1?e[1]:null,d=e.length>2?e[2]:null;return this.control(i,o,d)}else return this.control(e)}static ɵfac=function(i){return new(i||n)};static ɵprov=pt({token:n,factory:n.ɵfac})}return n})();var Gi=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:qi,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:Bi,useValue:e.callSetDisabledState??un}]}}static ɵfac=function(i){return new(i||n)};static ɵmod=dr({type:n});static ɵinj=gn$1({imports:[Ia]})}return n})();var $i=`
    .p-card {
        display: block;
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
        font-size: dt('card.subtitle.font.size');
        font-weight: dt('card.subtitle.font.weight');
    }
`;var Va={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var Ui=class ot extends wE{name=`card`;style=$i;classes=Va;static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(ot)))(o||ot)}})();static ɵprov=x({token:ot,factory:ot.ɵfac})};var Wi=new _(`CARD_INSTANCE`);var fn=class Ue extends z{componentName=`Card`;$pcCard=D(Wi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(I,{self:!0});_componentStyle=D(Ui);header=GB();subheader=GB();headerFacet=KB(qU,{descendants:!1});footerFacet=KB(YU,{descendants:!1});headerTemplate=KB(`header`,{descendants:!1});titleTemplate=KB(`title`,{descendants:!1});subtitleTemplate=KB(`subtitle`,{descendants:!1});contentTemplate=KB(`content`,{descendants:!1});footerTemplate=KB(`footer`,{descendants:!1});hasHeader=UT(()=>!!(this.headerFacet()||this.headerTemplate()));hasTitle=UT(()=>!!(this.header()||this.titleTemplate()));hasSubtitle=UT(()=>!!(this.subheader()||this.subtitleTemplate()));hasFooter=UT(()=>!!(this.footerFacet()||this.footerTemplate()));showHeaderText=UT(()=>this.header()&&!this.titleTemplate());showSubheaderText=UT(()=>this.subheader()&&!this.subtitleTemplate());onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getBlockableElement(){return this.el.nativeElement}static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(Ue)))(o||Ue)}})();static ɵcmp=(function(){let e=[`header`],i=[`title`],o=[`subtitle`],d=[`content`],x=[`footer`],X=[`*`,[[`p-header`]],[[`p-footer`]]],U=[`*`,`p-header`,`p-footer`];function oe(D,R){D&1&&yy(0)}function me(D,R){if(D&1&&(da$1(0,`div`,1),Ma$1(1,1),ly(2,oe,1,0,`ng-container`,2),Id()),D&2){let C=rT();wT(C.cx(`header`)),py(`pBind`,C.ptm(`header`)),FC(2),py(`ngTemplateOutlet`,C.headerTemplate())}}function S(D,R){if(D&1&&xT(0),D&2){let C=rT(2);_d(` `,C.header(),` `)}}function N(D,R){D&1&&yy(0)}function u(D,R){if(D&1&&(da$1(0,`div`,1),zb(1,S,1,1),ly(2,N,1,0,`ng-container`,2),Id()),D&2){let C=rT();wT(C.cx(`title`)),py(`pBind`,C.ptm(`title`)),FC(),qb(C.showHeaderText()?1:-1),FC(),py(`ngTemplateOutlet`,C.titleTemplate())}}function be(D,R){if(D&1&&xT(0),D&2){let C=rT(2);_d(` `,C.subheader(),` `)}}function ve(D,R){D&1&&yy(0)}function Qe(D,R){if(D&1&&(da$1(0,`div`,1),zb(1,be,1,1),ly(2,ve,1,0,`ng-container`,2),Id()),D&2){let C=rT();wT(C.cx(`subtitle`)),py(`pBind`,C.ptm(`subtitle`)),FC(),qb(C.showSubheaderText()?1:-1),FC(),py(`ngTemplateOutlet`,C.subtitleTemplate())}}function I$1(D,R){D&1&&yy(0)}function P(D,R){D&1&&yy(0)}function g(D,R){if(D&1&&(da$1(0,`div`,1),Ma$1(1,2),ly(2,P,1,0,`ng-container`,2),Id()),D&2){let C=rT();wT(C.cx(`footer`)),py(`pBind`,C.ptm(`footer`)),FC(2),py(`ngTemplateOutlet`,C.footerTemplate())}}return ba$1({type:Ue,selectors:[[`p-card`]],contentQueries:function(R,C,Se){R&1&&Ey(Se,C.headerFacet,qU,4)(Se,C.footerFacet,YU,4)(Se,C.headerTemplate,e,4)(Se,C.titleTemplate,i,4)(Se,C.subtitleTemplate,o,4)(Se,C.contentTemplate,d,4)(Se,C.footerTemplate,x,4),R&2&&sT(7)},hostVars:2,hostBindings:function(R,C){R&2&&wT(C.cx(`root`))},inputs:{header:[1,`header`],subheader:[1,`subheader`]},features:[jT([Ui,{provide:Wi,useExisting:Ue},{provide:J,useExisting:Ue}]),Tb([I]),ay],ngContentSelectors:U,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(R,C){R&1&&(_a$1(X),zb(0,me,3,4,`div`,0),da$1(1,`div`,1),zb(2,u,3,5,`div`,0),zb(3,Qe,3,5,`div`,0),da$1(4,`div`,1),Ma$1(5),ly(6,I$1,1,0,`ng-container`,2),Id(),zb(7,g,3,4,`div`,0),Id()),R&2&&(qb(C.hasHeader()?0:-1),FC(),wT(C.cx(`body`)),py(`pBind`,C.ptm(`body`)),FC(),qb(C.hasTitle()?2:-1),FC(),qb(C.hasSubtitle()?3:-1),FC(),wT(C.cx(`content`)),py(`pBind`,C.ptm(`content`)),FC(2),py(`ngTemplateOutlet`,C.contentTemplate()),FC(),qb(C.hasFooter()?7:-1))},dependencies:[N0,KU,Vo,I],encapsulation:2})})()};var Xi=class mn{static ɵfac=function(i){return new(i||mn)};static ɵmod=dr({type:mn});static ɵinj=gn$1({imports:[fn,KU,Vo,KU,Vo]})};var Xe=class zt extends z{modelValue=ge$1(void 0);$filled=UT(()=>pe(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(zt)))(o||zt)}})();static ɵdir=Ta$1({type:zt,features:[ay]})};var Yi=class Rt extends Xe{required=GB(void 0,{transform:QB});invalid=GB(void 0,{transform:QB});disabled=GB(void 0,{transform:QB});name=GB();_disabled=ge$1(!1);$disabled=UT(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,i){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(Rt)))(o||Rt)}})();static ɵdir=Ta$1({type:Rt,inputs:{required:[1,`required`],invalid:[1,`invalid`],disabled:[1,`disabled`],name:[1,`name`]},features:[ay]})};var Zi=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        color: dt('checkbox.icon.color');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-indicator {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-checkbox-icon,
    .p-checkbox-indicator svg,
    .p-checkbox-indicator i {
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
        font-size: dt('checkbox.icon.size');
        transition-duration: dt('checkbox.transition.duration');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon,
    .p-checkbox-sm .p-checkbox-indicator svg,
    .p-checkbox-sm .p-checkbox-indicator i {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon,
    .p-checkbox-lg .p-checkbox-indicator svg,
    .p-checkbox-lg .p-checkbox-indicator i {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var wa={root:({instance:n})=>[`p-checkbox p-component`,{"p-checkbox-checked":n.checked(),"p-disabled":n.$disabled(),"p-invalid":n.invalid(),"p-variant-filled":n.$variant()===`filled`,"p-checkbox-sm p-inputfield-sm":n.size()===`small`,"p-checkbox-lg p-inputfield-lg":n.size()===`large`}],box:`p-checkbox-box`,input:`p-checkbox-input`,indicator:`p-checkbox-indicator`,icon:`p-checkbox-icon`};var Qi=class at extends wE{name=`checkbox`;style=Zi;classes=wa;static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(at)))(o||at)}})();static ɵprov=x({token:at,factory:at.ɵfac})};var Ki=new _(`CHECKBOX_INSTANCE`);var Aa={provide:kt,useExisting:hs(()=>Lt),multi:!0};var Lt=class rt extends Yi{componentName=`Checkbox`;value=GB();binary=GB(!1,{transform:QB});ariaLabelledBy=GB();ariaLabel=GB();tabindex=GB();inputId=GB();inputStyle=GB();inputClass=GB();indeterminate=GB(!1,{transform:QB});formControl=GB();checkboxIcon=GB();readonly=GB(!1,{transform:QB});autofocus=GB(!1,{transform:QB});trueValue=GB(!0);falseValue=GB(!1);variant=GB();size=GB();onChange=zB();onFocus=zB();onBlur=zB();inputViewChild=YB(`input`);iconTemplate=KB(`icon`,{descendants:!1});_indeterminate=ge$1(!1);focused=ge$1(!1);_componentStyle=D(Qi);bindDirectiveInstance=D(I,{self:!0});$pcCheckbox=D(Ki,{optional:!0,skipSelf:!0})??void 0;$variant=UT(()=>this.variant()||this.config.inputVariant()||void 0);requiredAttr=UT(()=>this.required()?``:void 0);readonlyAttr=UT(()=>this.readonly()?``:void 0);disabledAttr=UT(()=>this.$disabled()?``:void 0);checked=UT(()=>this._indeterminate()?!1:this.binary()?this.modelValue()===this.trueValue():gU(this.value(),this.modelValue()));iconTemplateContext=UT(()=>({checked:this.checked(),class:this.cx(`icon`),dataP:this.dataP()}));dataP=UT(()=>this.cn({invalid:this.invalid(),checked:this.checked(),disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()}));constructor(){super(),zo(()=>{let e=this.indeterminate();this._indeterminate.set(e)})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}updateModel(e){let i,o=this.injector.get(fe,null,{optional:!0,self:!0}),d=o&&!this.formControl()?o.value:this.modelValue();if(this.binary())i=this._indeterminate()?this.trueValue():this.checked()?this.falseValue():this.trueValue(),this.writeModelValue(i),this.onModelChange(i);else{this.checked()||this._indeterminate()?i=d.filter(X=>!C_(X,this.value())):i=d?[...d,this.value()]:[this.value()],this.onModelChange(i),this.writeModelValue(i);let x=this.formControl();x&&x.setValue(i)}this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:i,originalEvent:e})}handleChange(e){this.readonly()||this.updateModel(e)}onInputFocus(e){this.focused.set(!0),this.onFocus.emit(e)}onInputBlur(e){this.focused.set(!1),this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild()?.nativeElement.focus()}writeControlValue(e,i){i(e)}static ɵfac=function(i){return new(i||rt)};static ɵcmp=(function(){let e=[`icon`],i=[`input`];function o(S,N){if(S&1&&hy(0,`span`,2),S&2){let u=rT(3);wT(u.cn(u.cx(`icon`),u.checkboxIcon())),py(`pBind`,u.ptm(`icon`)),fy(`data-p`,u.dataP())}}function d(S,N){if(S&1&&(Jp(),hy(0,`svg`,5)),S&2){let u=rT(3);wT(u.cx(`icon`)),py(`pBind`,u.ptm(`icon`)),fy(`data-p`,u.dataP())}}function x(S,N){if(S&1&&(da$1(0,`span`,2),zb(1,o,1,4,`span`,3)(2,d,1,4,`svg`,4),Id()),S&2){let u=rT(2);wT(u.cx(`indicator`)),py(`pBind`,u.ptm(`indicator`)),FC(),qb(u.checkboxIcon()?1:2)}}function X(S,N){if(S&1&&(da$1(0,`span`,2),Jp(),hy(1,`svg`,6),Id()),S&2){let u=rT(2);wT(u.cx(`indicator`)),py(`pBind`,u.ptm(`indicator`)),FC(),wT(u.cx(`icon`)),py(`pBind`,u.ptm(`icon`)),fy(`data-p`,u.dataP())}}function U(S,N){if(S&1&&(zb(0,x,3,4,`span`,3),zb(1,X,2,7,`span`,3)),S&2){let u=rT();qb(u.checked()?0:-1),FC(),qb(u._indeterminate()?1:-1)}}function oe(S,N){S&1&&yy(0)}function me(S,N){if(S&1&&ly(0,oe,1,0,`ng-container`,7),S&2){let u=rT();py(`ngTemplateOutlet`,u.iconTemplate())(`ngTemplateOutletContext`,u.iconTemplateContext())}}return ba$1({type:rt,selectors:[[`p-checkbox`],[`p-check-box`]],contentQueries:function(N,u,be){N&1&&Ey(be,u.iconTemplate,e,4),N&2&&sT()},viewQuery:function(N,u){N&1&&Dy(u.inputViewChild,i,5),N&2&&sT()},hostVars:6,hostBindings:function(N,u){N&2&&(fy(`data-p-highlight`,u.checked())(`data-p-checked`,u.checked())(`data-p-disabled`,u.$disabled())(`data-p`,u.dataP()),wT(u.cx(`root`)))},inputs:{value:[1,`value`],binary:[1,`binary`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],inputStyle:[1,`inputStyle`],inputClass:[1,`inputClass`],indeterminate:[1,`indeterminate`],formControl:[1,`formControl`],checkboxIcon:[1,`checkboxIcon`],readonly:[1,`readonly`],autofocus:[1,`autofocus`],trueValue:[1,`trueValue`],falseValue:[1,`falseValue`],variant:[1,`variant`],size:[1,`size`]},outputs:{onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`},features:[jT([Aa,Qi,{provide:Ki,useExisting:rt},{provide:J,useExisting:rt}]),Tb([I]),ay],decls:5,vars:20,consts:[[`input`,``],[`type`,`checkbox`,3,`focus`,`blur`,`change`,`checked`,`pBind`],[3,`pBind`],[3,`class`,`pBind`],[`data-p-icon`,`check`,3,`class`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[`data-p-icon`,`minus`,3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(N,u){N&1&&(da$1(0,`input`,1,0),vy(`focus`,function(ve){return u.onInputFocus(ve)})(`blur`,function(ve){return u.onInputBlur(ve)})(`change`,function(ve){return u.handleChange(ve)}),Id(),da$1(2,`div`,2),zb(3,U,2,2)(4,me,1,2,`ng-container`),Id()),N&2&&(ET(u.inputStyle()),wT(u.cn(u.cx(`input`),u.inputClass())),py(`checked`,u.checked())(`pBind`,u.ptm(`input`)),fy(`id`,u.inputId())(`value`,u.value())(`name`,u.name())(`tabindex`,u.tabindex())(`required`,u.requiredAttr())(`readonly`,u.readonlyAttr())(`disabled`,u.disabledAttr())(`aria-labelledby`,u.ariaLabelledBy())(`aria-label`,u.ariaLabel()),FC(2),wT(u.cx(`box`)),py(`pBind`,u.ptm(`box`)),fy(`data-p`,u.dataP()),FC(),qb(u.iconTemplate()?4:3))},dependencies:[N0,KU,Ta,Ba$1,Vo,I],encapsulation:2})})()};var Ji=class vn{static ɵfac=function(i){return new(i||vn)};static ɵmod=dr({type:vn});static ɵinj=gn$1({imports:[Lt,KU,KU]})};var eo=`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
        will-change: transform;
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
        flex-grow: 1;
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 1rem;
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }

    .p-dialog-enter-active {
        animation: p-animate-dialog-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-dialog-leave-active {
        animation: p-animate-dialog-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-dialog-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-dialog-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var Oa={mask:({instance:n})=>{let t=n.position(),e=n.modal(),i=n.maskStyle();return k({position:`fixed`,height:`100%`,width:`100%`,left:0,top:0,display:`flex`,justifyContent:t===`left`||t===`topleft`||t===`bottomleft`?`flex-start`:t===`right`||t===`topright`||t===`bottomright`?`flex-end`:`center`,alignItems:t===`top`||t===`topleft`||t===`topright`?`flex-start`:t===`bottom`||t===`bottomleft`||t===`bottomright`?`flex-end`:`center`,pointerEvents:e?`auto`:`none`},i)},root:({instance:n})=>k({display:`flex`,flexDirection:`column`,pointerEvents:`auto`},n.style())};var Fa={mask:({instance:n})=>{let t=[`left`,`right`,`top`,`topleft`,`topright`,`bottom`,`bottomleft`,`bottomright`],e=n.position(),i=t.find(o=>o===e);return[`p-dialog-mask`,{"p-overlay-mask":n.modal()},i?`p-dialog-${i}`:``]},root:({instance:n})=>[`p-dialog p-component`,{"p-dialog-maximized":n.maximizable()&&n.maximized()}],header:`p-dialog-header`,title:`p-dialog-title`,resizeHandle:`p-resizable-handle`,headerActions:`p-dialog-header-actions`,pcMaximizeButton:`p-dialog-maximize-button`,pcCloseButton:`p-dialog-close-button`,content:()=>[`p-dialog-content`],footer:`p-dialog-footer`};var to=class st extends wE{name=`dialog`;style=eo;classes=Fa;inlineStyles=Oa;static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(st)))(o||st)}})();static ɵprov=x({token:st,factory:st.ɵfac})};var no=new _(`DIALOG_INSTANCE`);var _n=class lt extends z{componentName=`Dialog`;hostName=GB(``);$pcDialog=D(no,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(I,{self:!0});header=GB();draggable=GB(!0,{transform:QB});resizable=GB(!0,{transform:QB});contentStyle=GB();contentStyleClass=GB();modal=GB(!1,{transform:QB});closeOnEscape=GB(!0,{transform:QB});dismissableMask=GB(!1,{transform:QB});rtl=GB(!1,{transform:QB});closable=GB(!0,{transform:QB});breakpoints=GB();styleClass=GB();maskStyleClass=GB();maskStyle=GB();showHeader=GB(!0,{transform:QB});blockScroll=GB(!1,{transform:QB});autoZIndex=GB(!0,{transform:QB});baseZIndex=GB(0,{transform:XB});minX=GB(0,{transform:XB});minY=GB(0,{transform:XB});focusOnShow=GB(!0,{transform:QB});maximizable=GB(!1,{transform:QB});keepInViewport=GB(!0,{transform:QB});focusTrap=GB(!0,{transform:QB});maskMotionOptions=GB(void 0);computedMaskMotionOptions=UT(()=>k(k({},this.ptm(`maskMotion`)),this.maskMotionOptions()));maskEnterActiveClass=UT(()=>this.modal()?`p-overlay-mask-enter-active`:``);maskLeaveActiveClass=UT(()=>this.modal()?`p-overlay-mask-leave-active`:``);motionOptions=GB(void 0);computedMotionOptions=UT(()=>k(k({},this.ptm(`motion`)),this.motionOptions()));closeIcon=GB();closeAriaLabel=GB();closeTabindex=GB(`0`);minimizeIcon=GB();maximizeIcon=GB();closeButtonProps=GB({severity:`secondary`,variant:`text`,rounded:!0});maximizeButtonProps=GB({severity:`secondary`,variant:`text`,rounded:!0});visible=qB(!1);style=GB();position=GB();role=GB(`dialog`);appendTo=GB(void 0);onShow=zB();onHide=zB();onResizeInit=zB();onResizeEnd=zB();onDragStart=zB();onDragEnd=zB();onMaximize=zB();headerViewChild=YB(`titlebar`);contentViewChild=YB(`content`);footerViewChild=YB(`footer`);headerTemplate=KB(`header`,{descendants:!1});contentTemplate=KB(`content`,{descendants:!1});footerTemplate=KB(`footer`,{descendants:!1});closeIconTemplate=KB(`closeicon`,{descendants:!1});maximizeIconTemplate=KB(`maximizeicon`,{descendants:!1});minimizeIconTemplate=KB(`minimizeicon`,{descendants:!1});headlessTemplate=KB(`headless`,{descendants:!1});$appendTo=UT(()=>this.appendTo()||this.config.overlayAppendTo());renderMask=ge$1(!1);renderDialog=ge$1(!1);maskVisible;container=ge$1(null);wrapper;dragging;ariaId=this.$useId.next(`pn_id_`)+`_header`;ariaLabelledBy=UT(()=>this.header()!==null?this.ariaId:null);headerTemplateContext=UT(()=>({ariaLabelledBy:this.ariaLabelledBy()}));documentDragListener;documentDragEndListener;resizing;documentResizeListener;documentResizeEndListener;documentEscapeListener;maskClickListener;lastPageX;lastPageY;preventVisibleChangePropagation;maximized=ge$1(!1);preMaximizeContentHeight;preMaximizeContainerWidth;preMaximizeContainerHeight;preMaximizePageX;preMaximizePageY;id=this.$useId.next(`pn_id_`);_style={};originalStyle;styleElement=null;_componentStyle=D(to);overlayService=D(GU);zIndexForLayering;get maximizeLabel(){return this.translate(ZU.ARIA,`maximizeLabel`)}get minimizeLabel(){return this.translate(ZU.ARIA,`minimizeLabel`)}maximizeButtonAriaLabel=UT(()=>this.maximized()?this.minimizeLabel:this.maximizeLabel);maximizeButtonTabindex=UT(()=>this.maximizable()?`0`:`-1`);toggleIcon=UT(()=>this.maximized()?this.minimizeIcon():this.maximizeIcon());showToggleIcon=UT(()=>!!this.maximizeIcon()&&!this.maximizeIconTemplate()&&!this.minimizeIconTemplate());showDefaultMaximizeIcon=UT(()=>!this.maximizeIcon());showMaximizeSvg=UT(()=>!this.maximized()&&!this.maximizeIconTemplate());showMinimizeSvg=UT(()=>this.maximized()&&!this.minimizeIconTemplate());showMaximizeIconTemplate=UT(()=>!this.maximized()&&!!this.maximizeIconTemplate());showMinimizeIconTemplate=UT(()=>this.maximized()&&!!this.minimizeIconTemplate());showDefaultCloseIcon=UT(()=>!this.closeIconTemplate());scrollBlockerActive=UT(()=>this.modal()||this.blockScroll());focusTrapDisabled=UT(()=>this.focusTrap()===!1);constructor(){super(),zo(()=>{let e=this.visible();In(()=>{e&&!this.maskVisible&&(this.maskVisible=!0,this.renderMask.set(!0),this.renderDialog.set(!0))})})}dataP=UT(()=>this.cn({maximized:this.maximized(),modal:this.modal()}));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`host`))}onInit(){this.breakpoints()&&this.createStyle()}_focus(e){if(e){let i=$o$1.getFocusableElements(e);if(i&&i.length>0)return i[0].focus(),!0}return!1}focus(e){let i=e??this.contentViewChild()?.nativeElement,o=this._focus(i);o||(o=this._focus(this.footerViewChild()?.nativeElement),o||(o=this._focus(this.headerViewChild()?.nativeElement),o||this._focus(this.contentViewChild()?.nativeElement)))}close(e){this.visible.set(!1),e.preventDefault()}enableModality(){this.maskClickListener=this.renderer.listen(this.wrapper,`mousedown`,e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&(this.closable()&&this.dismissableMask()?this.close(e):this.focusTrap()&&e.preventDefault())}),this.modal()&&this.$blockBodyScroll()}disableModality(){if(this.wrapper){this.unbindMaskClickListener();let e=this.wrapper.getRootNode().querySelectorAll(`[data-p-scrollblocker-active="true"]`);this.modal()&&e&&e.length==1&&this.$unblockBodyScroll(),this.cd.destroyed||this.cd.detectChanges()}}maximize(){this.maximized.update(e=>!e),!this.modal()&&!this.blockScroll()&&(this.maximized()?this.$blockBodyScroll():this.$unblockBodyScroll()),this.onMaximize.emit({maximized:this.maximized()})}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}moveOnTop(){this.autoZIndex()?(_3.set(`modal`,this.container(),this.baseZIndex()+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container().style.zIndex,10)-1)):this.zIndexForLayering=_3.generateZIndex(`modal`,(this.baseZIndex()??0)+this.config.zIndex.modal)}createStyle(){if(B$(this.platformId)){if(this.$styleScope.isolated){this.$unstyled()||this.$isolatedStyle(`breakpoints`,this.psel(this.breakpointsCSS()));return}if(!this.styleElement&&!this.$unstyled()){let e=this.renderer.createElement(`style`);qv(e,`nonce`,this.config?.csp()?.nonce),this.renderer.appendChild(ri(this.$appendTo()===`self`?this.el.nativeElement:this.$appendTo())??this.document.head,e);let i=this.breakpointsCSS();this.renderer.setProperty(e,`innerHTML`,this.psel(i)),qv(e,`nonce`,this.config?.csp()?.nonce),this.styleElement=e}}}breakpointsCSS(){let e=``;for(let i in this.breakpoints())e+=`
                        @media screen and (max-width: ${i}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints()[i]} !important;
                            }
                        }
                    `;return e}initDrag(e){e.target.closest(`div`)?.getAttribute(`data-pc-section`)!==`headeractions`&&this.draggable()&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container().style.margin=`0`,this.document.body.setAttribute(`data-p-unselectable-text`,`true`),this.$unstyled()||CU(this.document.body,{"user-select":`none`}),this.onDragStart.emit(e))}onDrag(e){if(this.dragging&&this.container()){let i=SU(this.container()),o=OU(this.container()),d=e.pageX-this.lastPageX,x=e.pageY-this.lastPageY,X=this.container().getBoundingClientRect(),U=getComputedStyle(this.container()),oe=parseFloat(U.marginLeft),me=parseFloat(U.marginTop),S=X.left+d-oe,N=X.top+x-me,u=IU();this.container().style.position=`fixed`,this.keepInViewport()?(S>=this.minX()&&S+i<u.width&&(this._style.left=`${S}px`,this.lastPageX=e.pageX,this.container().style.left=`${S}px`),N>=this.minY()&&N+o<u.height&&(this._style.top=`${N}px`,this.lastPageY=e.pageY,this.container().style.top=`${N}px`)):(this.lastPageX=e.pageX,this.container().style.left=`${S}px`,this.lastPageY=e.pageY,this.container().style.top=`${N}px`),this.overlayService.emitParentDrag(this.container())}}endDrag(e){this.dragging&&(this.dragging=!1,this.document.body.removeAttribute(`data-p-unselectable-text`),this.$unstyled()||(this.document.body.style[`user-select`]=``),this.cd.detectChanges(),this.onDragEnd.emit(e))}resetPosition(){this.container().style.position=``,this.container().style.left=``,this.container().style.top=``,this.container().style.margin=``}center(){this.resetPosition()}initResize(e){this.resizable()&&(this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.document.body.setAttribute(`data-p-unselectable-text`,`true`),this.$unstyled()||CU(this.document.body,{"user-select":`none`}),this.onResizeInit.emit(e))}onResize(e){if(this.resizing){let i=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,d=SU(this.container()),x=OU(this.container()),X=OU(this.contentViewChild()?.nativeElement),U=d+i,oe=x+o,me=this.container().style.minWidth,S=this.container().style.minHeight,N=this.container().getBoundingClientRect(),u=IU();(!parseInt(this.container().style.top)||!parseInt(this.container().style.left))&&(U+=i,oe+=o),(!me||U>parseInt(me))&&N.left+U<u.width&&(this._style.width=U+`px`,this.container().style.width=this._style.width),(!S||oe>parseInt(S))&&N.top+oe<u.height&&(this.contentViewChild().nativeElement.style.height=X+oe-x+`px`,this._style.height&&(this._style.height=oe+`px`,this.container().style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,this.document.body.removeAttribute(`data-p-unselectable-text`),this.$unstyled()||(this.document.body.style[`user-select`]=``),this.onResizeEnd.emit(e))}bindGlobalListeners(){this.draggable()&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable()&&this.bindDocumentResizeListeners(),this.closeOnEscape()&&this.closable()&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentEscapeListener()}bindDocumentDragListener(){this.documentDragListener||(this.documentDragListener=this.renderer.listen(this.document.defaultView,`mousemove`,this.onDrag.bind(this)))}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentDragEndListener(){this.documentDragEndListener||(this.documentDragEndListener=this.renderer.listen(this.document.defaultView,`mouseup`,this.endDrag.bind(this)))}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragEndListener=null)}bindDocumentResizeListeners(){!this.documentResizeListener&&!this.documentResizeEndListener&&(this.documentResizeListener=this.renderer.listen(this.document.defaultView,`mousemove`,this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document.defaultView,`mouseup`,this.resizeEnd.bind(this)))}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,`keydown`,i=>{if(i.key==`Escape`){let o=this.container();if(!o)return;let d=_3.getCurrent();(parseInt(o.style.zIndex)==d||this.zIndexForLayering==d)&&this.close(i)}})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}appendContainer(){let e=this.$appendTo();e!==`self`&&TU(this.$overlayParent(!e||e===`body`?this.document.body:e,this.wrapper),this.wrapper)}restoreAppend(){this.container()&&this.$appendTo()!==`self`&&this.renderer.appendChild(this.el.nativeElement,this.wrapper)}onBeforeEnter(e){this.container.set(e.element),this.wrapper=this.container()?.parentElement,this.$attrSelector&&this.$markInstance(this.container()),this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.container()?.setAttribute(this.id,``),this.modal()&&this.enableModality()}onAfterEnter(){this.focusOnShow()&&this.focus(),this.onShow.emit({})}onBeforeLeave(){this.modal()&&(this.maskVisible=!1)}onAfterLeave(){this.onContainerDestroy(),this.renderDialog.set(!1),this.modal()?this.renderMask.set(!1):this.maskVisible=!1,this.onHide.emit({})}onMaskAfterLeave(){this.renderDialog()||this.renderMask.set(!1)}onContainerDestroy(){this.unbindGlobalListeners(),this.dragging=!1,this.maximized()&&(Fv(this.document.body,this.pcn(`p-overflow-hidden`)),this.document.body.style.removeProperty(`--px-scrollbar-width`),this.maximized.set(!1)),this.modal()&&this.disableModality(),this.document.querySelectorAll(`[data-p-scrollblocker-active="true"]`).length<=1&&__(this.document.body,this.pcn(`p-overflow-hidden`))&&(Fv(this.document.body,this.pcn(`p-overflow-hidden`)),this.$styleScope.unlockBodyScroll()),this.container()&&this.autoZIndex()&&_3.clear(this.container()),this.zIndexForLayering&&_3.revertZIndex(this.zIndexForLayering),this.container.set(null),this.wrapper=null,this._style=this.originalStyle?k({},this.originalStyle):{}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.container()&&(this.restoreAppend(),this.onContainerDestroy()),this.destroyStyle()}static ɵfac=function(i){return new(i||lt)};static ɵcmp=(function(){let e=[`header`],i=[`content`],o=[`footer`],d=[`closeicon`],x=[`maximizeicon`],X=[`minimizeicon`],U=[`headless`],oe=[`titlebar`],me=[`*`,[[`p-footer`]]],S=[`*`,`p-footer`];function N(c,T){c&1&&yy(0)}function u(c,T){if(c&1&&ly(0,N,1,0,`ng-container`,8),c&2){let a=rT(3);py(`ngTemplateOutlet`,a.headlessTemplate())}}function be(c,T){if(c&1){let a=tT();da$1(0,`div`,12),vy(`mousedown`,function(H){Bp(a);let Ie=rT(4);return Vp(Ie.initResize(H))}),Id()}if(c&2){let a=rT(4);wT(a.cx(`resizeHandle`)),by(`z-index`,90),py(`pBind`,a.ptm(`resizeHandle`))}}function ve(c,T){if(c&1&&(da$1(0,`span`,16),xT(1),Id()),c&2){let a=rT(5);wT(a.cx(`title`)),py(`id`,a.ariaLabelledBy())(`pBind`,a.ptm(`title`)),FC(),ky(a.header())}}function Qe(c,T){c&1&&yy(0)}function I$2(c,T){if(c&1&&hy(0,`span`),c&2){let a=rT(6);wT(a.toggleIcon())}}function P(c,T){c&1&&(Jp(),hy(0,`svg`,19))}function g(c,T){c&1&&(Jp(),hy(0,`svg`,20))}function D(c,T){if(c&1&&(zb(0,P,1,0,`svg`,19),zb(1,g,1,0,`svg`,20)),c&2){let a=rT(6);qb(a.showMaximizeSvg()?0:-1),FC(),qb(a.showMinimizeSvg()?1:-1)}}function R(c,T){c&1&&yy(0)}function C(c,T){if(c&1&&ly(0,R,1,0,`ng-container`,8),c&2){let a=rT(6);py(`ngTemplateOutlet`,a.maximizeIconTemplate())}}function Se(c,T){c&1&&yy(0)}function So(c,T){if(c&1&&ly(0,Se,1,0,`ng-container`,8),c&2){let a=rT(6);py(`ngTemplateOutlet`,a.minimizeIconTemplate())}}function Io(c,T){if(c&1){let a=tT();da$1(0,`button`,17),vy(`click`,function(){Bp(a);let H=rT(5);return Vp(H.maximize())})(`keydown.enter`,function(){Bp(a);let H=rT(5);return Vp(H.maximize())}),zb(1,I$2,1,2,`span`,18),zb(2,D,2,2),zb(3,C,1,1,`ng-container`),zb(4,So,1,1,`ng-container`),Id()}if(c&2){let a=rT(5);wT(a.cx(`pcMaximizeButton`)),py(`pButton`,a.maximizeButtonProps())(`tabindex`,a.maximizeButtonTabindex())(`pButtonPT`,a.ptm(`pcMaximizeButton`))(`pButtonUnstyled`,a.unstyled()),fy(`aria-label`,a.maximizeButtonAriaLabel())(`data-pc-group-section`,`headericon`),FC(),qb(a.showToggleIcon()?1:-1),FC(),qb(a.showDefaultMaximizeIcon()?2:-1),FC(),qb(a.showMaximizeIconTemplate()?3:-1),FC(),qb(a.showMinimizeIconTemplate()?4:-1)}}function To(c,T){if(c&1&&hy(0,`span`),c&2){let a=rT(7);wT(a.closeIcon())}}function Vo(c,T){c&1&&(Jp(),hy(0,`svg`,21))}function Eo(c,T){if(c&1&&zb(0,To,1,2,`span`,18)(1,Vo,1,0,`svg`,21),c&2){let a=rT(6);qb(a.closeIcon()?0:1)}}function No(c,T){c&1&&yy(0)}function wo(c,T){if(c&1&&ly(0,No,1,0,`ng-container`,8),c&2){let a=rT(6);py(`ngTemplateOutlet`,a.closeIconTemplate())}}function Ao(c,T){if(c&1){let a=tT();da$1(0,`button`,17),vy(`click`,function(H){Bp(a);let Ie=rT(5);return Vp(Ie.close(H))})(`keydown.enter`,function(H){Bp(a);let Ie=rT(5);return Vp(Ie.close(H))}),zb(1,Eo,2,1),zb(2,wo,1,1,`ng-container`),Id()}if(c&2){let a=rT(5);wT(a.cx(`pcCloseButton`)),py(`pButton`,a.closeButtonProps())(`tabindex`,a.closeTabindex())(`pButtonPT`,a.ptm(`pcCloseButton`))(`pButtonUnstyled`,a.unstyled()),fy(`aria-label`,a.closeAriaLabel())(`data-pc-group-section`,`headericon`),FC(),qb(a.showDefaultCloseIcon()?1:-1),FC(),qb(a.closeIconTemplate()?2:-1)}}function ko(c,T){if(c&1){let a=tT();da$1(0,`div`,12,2),vy(`mousedown`,function(H){Bp(a);let Ie=rT(4);return Vp(Ie.initDrag(H))}),zb(2,ve,2,5,`span`,13),ly(3,Qe,1,0,`ng-container`,14),da$1(4,`div`,11),zb(5,Io,5,12,`button`,15),zb(6,Ao,3,10,`button`,15),Id()()}if(c&2){let a=rT(4);wT(a.cx(`header`)),py(`pBind`,a.ptm(`header`)),FC(2),qb(a.headerTemplate()?-1:2),FC(),py(`ngTemplateOutlet`,a.headerTemplate())(`ngTemplateOutletContext`,a.headerTemplateContext()),FC(),wT(a.cx(`headerActions`)),py(`pBind`,a.ptm(`headerActions`)),FC(),qb(a.maximizable()?5:-1),FC(),qb(a.closable()?6:-1)}}function Oo(c,T){c&1&&yy(0)}function Fo(c,T){if(c&1&&ly(0,Oo,1,0,`ng-container`,8),c&2){let a=rT(4);py(`ngTemplateOutlet`,a.contentTemplate())}}function Po(c,T){c&1&&yy(0)}function Bo(c,T){if(c&1&&(da$1(0,`div`,11,3),Ma$1(2,1),ly(3,Po,1,0,`ng-container`,8),Id()),c&2){let a=rT(4);wT(a.cx(`footer`)),py(`pBind`,a.ptm(`footer`)),FC(3),py(`ngTemplateOutlet`,a.footerTemplate())}}function zo(c,T){if(c&1&&(zb(0,be,1,5,`div`,9),zb(1,ko,7,11,`div`,10),da$1(2,`div`,11,1),Ma$1(4),zb(5,Fo,1,1,`ng-container`),Id(),zb(6,Bo,4,4,`div`,10)),c&2){let a=rT(3);qb(a.resizable()?0:-1),FC(),qb(a.showHeader()?1:-1),FC(),ET(a.contentStyle()),wT(a.cn(a.cx(`content`),a.contentStyleClass())),py(`pBind`,a.ptm(`content`)),FC(3),qb(a.contentTemplate()?5:-1),FC(),qb(a.footerTemplate()?6:-1)}}function Ro(c,T){if(c&1){let a=tT();da$1(0,`div`,7,0),vy(`pMotionOnBeforeEnter`,function(H){Bp(a);let Ie=rT(2);return Vp(Ie.onBeforeEnter(H))})(`pMotionOnAfterEnter`,function(){Bp(a);let H=rT(2);return Vp(H.onAfterEnter())})(`pMotionOnBeforeLeave`,function(){Bp(a);let H=rT(2);return Vp(H.onBeforeLeave())})(`pMotionOnAfterLeave`,function(){Bp(a);let H=rT(2);return Vp(H.onAfterLeave())}),zb(2,u,1,1,`ng-container`)(3,zo,7,9),Id()}if(c&2){let a=rT(2);ET(a.sx(`root`)),wT(a.cn(a.cx(`root`),a.styleClass())),py(`pBind`,a.ptm(`root`))(`pFocusTrapDisabled`,a.focusTrapDisabled())(`pMotion`,a.visible())(`pMotionAppear`,!0)(`pMotionName`,a.pcn(`p-dialog`))(`pMotionOptions`,a.computedMotionOptions()),fy(`role`,a.role())(`aria-labelledby`,a.ariaLabelledBy())(`aria-modal`,!0)(`data-p`,a.dataP()),FC(2),qb(a.headlessTemplate()?2:3)}}function Lo(c,T){if(c&1){let a=tT();da$1(0,`div`,5),vy(`pMotionOnAfterLeave`,function(){Bp(a);let H=rT();return Vp(H.onMaskAfterLeave())}),zb(1,Ro,4,15,`div`,6),Id()}if(c&2){let a=rT();ET(a.sx(`mask`)),wT(a.cn(a.cx(`mask`),a.maskStyleClass())),py(`pBind`,a.ptm(`mask`))(`pMotion`,a.maskVisible)(`pMotionAppear`,!0)(`pMotionEnterActiveClass`,a.maskEnterActiveClass())(`pMotionLeaveActiveClass`,a.maskLeaveActiveClass())(`pMotionOptions`,a.computedMaskMotionOptions()),fy(`data-p-scrollblocker-active`,a.scrollBlockerActive())(`data-p`,a.dataP()),FC(),qb(a.renderDialog()?1:-1)}}return ba$1({type:lt,selectors:[[`p-dialog`]],contentQueries:function(T,a,Y){T&1&&Ey(Y,a.headerTemplate,e,4)(Y,a.contentTemplate,i,4)(Y,a.footerTemplate,o,4)(Y,a.closeIconTemplate,d,4)(Y,a.maximizeIconTemplate,x,4)(Y,a.minimizeIconTemplate,X,4)(Y,a.headlessTemplate,U,4),T&2&&sT(7)},viewQuery:function(T,a){T&1&&Dy(a.headerViewChild,oe,5)(a.contentViewChild,i,5)(a.footerViewChild,o,5),T&2&&sT(3)},inputs:{hostName:[1,`hostName`],header:[1,`header`],draggable:[1,`draggable`],resizable:[1,`resizable`],contentStyle:[1,`contentStyle`],contentStyleClass:[1,`contentStyleClass`],modal:[1,`modal`],closeOnEscape:[1,`closeOnEscape`],dismissableMask:[1,`dismissableMask`],rtl:[1,`rtl`],closable:[1,`closable`],breakpoints:[1,`breakpoints`],styleClass:[1,`styleClass`],maskStyleClass:[1,`maskStyleClass`],maskStyle:[1,`maskStyle`],showHeader:[1,`showHeader`],blockScroll:[1,`blockScroll`],autoZIndex:[1,`autoZIndex`],baseZIndex:[1,`baseZIndex`],minX:[1,`minX`],minY:[1,`minY`],focusOnShow:[1,`focusOnShow`],maximizable:[1,`maximizable`],keepInViewport:[1,`keepInViewport`],focusTrap:[1,`focusTrap`],maskMotionOptions:[1,`maskMotionOptions`],motionOptions:[1,`motionOptions`],closeIcon:[1,`closeIcon`],closeAriaLabel:[1,`closeAriaLabel`],closeTabindex:[1,`closeTabindex`],minimizeIcon:[1,`minimizeIcon`],maximizeIcon:[1,`maximizeIcon`],closeButtonProps:[1,`closeButtonProps`],maximizeButtonProps:[1,`maximizeButtonProps`],visible:[1,`visible`],style:[1,`style`],position:[1,`position`],role:[1,`role`],appendTo:[1,`appendTo`]},outputs:{visible:`visibleChange`,onShow:`onShow`,onHide:`onHide`,onResizeInit:`onResizeInit`,onResizeEnd:`onResizeEnd`,onDragStart:`onDragStart`,onDragEnd:`onDragEnd`,onMaximize:`onMaximize`},features:[jT([to,{provide:no,useExisting:lt},{provide:J,useExisting:lt}]),Tb([I]),ay],ngContentSelectors:S,decls:1,vars:1,consts:[[`container`,``],[`content`,``],[`titlebar`,``],[`footer`,``],[3,`class`,`style`,`pBind`,`pMotion`,`pMotionAppear`,`pMotionEnterActiveClass`,`pMotionLeaveActiveClass`,`pMotionOptions`],[3,`pMotionOnAfterLeave`,`pBind`,`pMotion`,`pMotionAppear`,`pMotionEnterActiveClass`,`pMotionLeaveActiveClass`,`pMotionOptions`],[`pFocusTrap`,``,3,`class`,`style`,`pBind`,`pFocusTrapDisabled`,`pMotion`,`pMotionAppear`,`pMotionName`,`pMotionOptions`],[`pFocusTrap`,``,3,`pMotionOnBeforeEnter`,`pMotionOnAfterEnter`,`pMotionOnBeforeLeave`,`pMotionOnAfterLeave`,`pBind`,`pFocusTrapDisabled`,`pMotion`,`pMotionAppear`,`pMotionName`,`pMotionOptions`],[4,`ngTemplateOutlet`],[3,`class`,`pBind`,`z-index`],[3,`class`,`pBind`],[3,`pBind`],[3,`mousedown`,`pBind`],[3,`id`,`class`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`type`,`button`,`iconOnly`,``,3,`pButton`,`class`,`tabindex`,`pButtonPT`,`pButtonUnstyled`],[3,`id`,`pBind`],[`type`,`button`,`iconOnly`,``,3,`click`,`keydown.enter`,`pButton`,`tabindex`,`pButtonPT`,`pButtonUnstyled`],[3,`class`],[`data-p-icon`,`window-maximize`],[`data-p-icon`,`window-minimize`],[`data-p-icon`,`times`]],template:function(T,a){T&1&&(_a$1(me),zb(0,Lo,2,13,`div`,4)),T&2&&qb(a.renderMask()?0:-1)},dependencies:[N0,Kr,sl,La$1,za$1,ja,KU,I,kl,wl],encapsulation:2})})()};var io=class bn{static ɵfac=function(i){return new(i||bn)};static ɵmod=dr({type:bn});static ɵinj=gn$1({imports:[_n,KU,KU]})};var oo=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var Ba={root:({instance:n})=>{let t=n.layout(),e=n.align();return{justifyContent:t===`horizontal`?e===`center`||e==null?`center`:e===`left`?`flex-start`:e===`right`?`flex-end`:null:null,alignItems:t===`vertical`?e===`center`||e==null?`center`:e===`top`?`flex-start`:e===`bottom`?`flex-end`:null:null}}};var za={root:({instance:n})=>{let t=n.layout(),e=n.type(),i=n.align();return[`p-divider p-component`,`p-divider-`+t,`p-divider-`+e,{"p-divider-left":t===`horizontal`&&(!i||i===`left`)},{"p-divider-center":t===`horizontal`&&i===`center`},{"p-divider-right":t===`horizontal`&&i===`right`},{"p-divider-top":t===`vertical`&&i===`top`},{"p-divider-center":t===`vertical`&&(!i||i===`center`)},{"p-divider-bottom":t===`vertical`&&i===`bottom`}]},content:`p-divider-content`};var ao=class dt extends wE{name=`divider`;style=oo;classes=za;inlineStyles=Ba;static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(dt)))(o||dt)}})();static ɵprov=x({token:dt,factory:dt.ɵfac})};var ro=new _(`DIVIDER_INSTANCE`);var xn=class Ye extends z{componentName=`Divider`;$pcDivider=D(ro,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=D(I,{self:!0});layout=GB(`horizontal`);type=GB(`solid`);align=GB();_componentStyle=D(ao);dataP=UT(()=>this.cn({[this.align()]:this.align(),[this.layout()]:this.layout(),[this.type()]:this.type()}));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(Ye)))(o||Ye)}})();static ɵcmp=(function(){return ba$1({type:Ye,selectors:[[`p-divider`]],hostAttrs:[`role`,`separator`],hostVars:6,hostBindings:function(o,d){o&2&&(fy(`aria-orientation`,d.layout())(`data-p`,d.dataP()),ET(d.sx(`root`)),wT(d.cx(`root`)))},inputs:{layout:[1,`layout`],type:[1,`type`],align:[1,`align`]},features:[jT([ao,{provide:ro,useExisting:Ye},{provide:J,useExisting:Ye}]),Tb([I]),ay],ngContentSelectors:[`*`],decls:2,vars:3,consts:[[3,`pBind`]],template:function(o,d){o&1&&(_a$1(),da$1(0,`div`,0),Ma$1(1),Id()),o&2&&(wT(d.cx(`content`)),py(`pBind`,d.ptm(`content`)))},dependencies:[KU,Vo,I],encapsulation:2})})()};var so=class Cn{static ɵfac=function(i){return new(i||Cn)};static ɵmod=dr({type:Cn});static ɵinj=gn$1({imports:[xn,Vo,Vo]})};var lo=`
    .p-inputtext {
        font-weight: dt('inputtext.font.weight');
        font-size: dt('inputtext.font.size');
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var La={root:({instance:n})=>[`p-inputtext p-component`,{"p-filled":n.$filled(),"p-inputtext-sm":n.pSize()===`small`,"p-inputtext-lg":n.pSize()===`large`,"p-invalid":n.invalid(),"p-variant-filled":n.$variant()===`filled`,"p-inputtext-fluid":n.hasFluid}]};var co=class ct extends wE{name=`inputtext`;style=lo;classes=La;static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(ct)))(o||ct)}})();static ɵprov=x({token:ct,factory:ct.ɵfac})};var uo=new _(`INPUTTEXT_INSTANCE`);var po=class ut extends Xe{componentName=`InputText`;hostName=GB(``);pInputTextPT=GB();pInputTextUnstyled=GB();bindDirectiveInstance=D(I,{self:!0});$pcInputText=D(uo,{optional:!0,skipSelf:!0})??void 0;ngControl=D(fe,{optional:!0,self:!0});pcFluid=D(Me,{optional:!0,host:!0,skipSelf:!0});pSize=GB();variant=GB();fluid=GB(void 0,{transform:QB});invalid=GB(void 0,{transform:QB});$variant=UT(()=>this.variant()||this.config.inputVariant()||void 0);_componentStyle=D(co);get hasFluid(){return this.fluid()??!!this.pcFluid}dataP=UT(()=>this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.pSize()]:this.pSize()}));constructor(){super(),zo(()=>{let e=this.pInputTextPT();e&&this.directivePT.set(e)}),zo(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm(`root`))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}static ɵfac=function(i){return new(i||ut)};static ɵdir=Ta$1({type:ut,selectors:[[``,`pInputText`,``]],hostVars:3,hostBindings:function(i,o){i&1&&vy(`input`,function(){return o.onInput()}),i&2&&(fy(`data-p`,o.dataP()),wT(o.cx(`root`)))},inputs:{hostName:[1,`hostName`],pInputTextPT:[1,`pInputTextPT`],pInputTextUnstyled:[1,`pInputTextUnstyled`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},features:[jT([co,{provide:uo,useExisting:ut},{provide:J,useExisting:ut}]),Tb([I]),ay]})};var go=class Mn{static ɵfac=function(i){return new(i||Mn)};static ɵmod=dr({type:Mn});static ɵinj=gn$1({})};var mo=`
    .p-message {
        display: grid;
        grid-template-rows: 1fr;
        border-radius: dt('message.border.radius');
        outline-width: dt('message.border.width');
        outline-style: solid;
    }

    .p-message-content-wrapper {
        min-height: 0;
    }

    .p-message-content {
        display: flex;
        align-items: center;
        padding: dt('message.content.padding');
        gap: dt('message.content.gap');
    }

    .p-message-close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-inline-start: auto;
        overflow: hidden;
        position: relative;
        width: dt('message.close.button.width');
        height: dt('message.close.button.height');
        border-radius: dt('message.close.button.border.radius');
        background: transparent;
        transition:
            background dt('message.transition.duration'),
            color dt('message.transition.duration'),
            outline-color dt('message.transition.duration'),
            box-shadow dt('message.transition.duration'),
            opacity 0.3s;
        outline-color: transparent;
        color: inherit;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-message-close-button svg,
    .p-message-close-button i {
        font-size: dt('message.close.icon.size');
        width: dt('message.close.icon.size');
        height: dt('message.close.icon.size');
    }

    .p-message-close-button:focus-visible {
        outline-width: dt('message.close.button.focus.ring.width');
        outline-style: dt('message.close.button.focus.ring.style');
        outline-offset: dt('message.close.button.focus.ring.offset');
    }

    .p-message-info {
        background: dt('message.info.background');
        outline-color: dt('message.info.border.color');
        color: dt('message.info.color');
        box-shadow: dt('message.info.shadow');
    }

    .p-message-info .p-message-close-button:focus-visible {
        outline-color: dt('message.info.close.button.focus.ring.color');
        box-shadow: dt('message.info.close.button.focus.ring.shadow');
    }

    .p-message-info .p-message-close-button:hover {
        background: dt('message.info.close.button.hover.background');
    }

    .p-message-info.p-message-outlined {
        color: dt('message.info.outlined.color');
        outline-color: dt('message.info.outlined.border.color');
    }

    .p-message-info.p-message-simple {
        color: dt('message.info.simple.color');
    }

    .p-message-success {
        background: dt('message.success.background');
        outline-color: dt('message.success.border.color');
        color: dt('message.success.color');
        box-shadow: dt('message.success.shadow');
    }

    .p-message-success .p-message-close-button:focus-visible {
        outline-color: dt('message.success.close.button.focus.ring.color');
        box-shadow: dt('message.success.close.button.focus.ring.shadow');
    }

    .p-message-success .p-message-close-button:hover {
        background: dt('message.success.close.button.hover.background');
    }

    .p-message-success.p-message-outlined {
        color: dt('message.success.outlined.color');
        outline-color: dt('message.success.outlined.border.color');
    }

    .p-message-success.p-message-simple {
        color: dt('message.success.simple.color');
    }

    .p-message-warn {
        background: dt('message.warn.background');
        outline-color: dt('message.warn.border.color');
        color: dt('message.warn.color');
        box-shadow: dt('message.warn.shadow');
    }

    .p-message-warn .p-message-close-button:focus-visible {
        outline-color: dt('message.warn.close.button.focus.ring.color');
        box-shadow: dt('message.warn.close.button.focus.ring.shadow');
    }

    .p-message-warn .p-message-close-button:hover {
        background: dt('message.warn.close.button.hover.background');
    }

    .p-message-warn.p-message-outlined {
        color: dt('message.warn.outlined.color');
        outline-color: dt('message.warn.outlined.border.color');
    }

    .p-message-warn.p-message-simple {
        color: dt('message.warn.simple.color');
    }

    .p-message-error {
        background: dt('message.error.background');
        outline-color: dt('message.error.border.color');
        color: dt('message.error.color');
        box-shadow: dt('message.error.shadow');
    }

    .p-message-error .p-message-close-button:focus-visible {
        outline-color: dt('message.error.close.button.focus.ring.color');
        box-shadow: dt('message.error.close.button.focus.ring.shadow');
    }

    .p-message-error .p-message-close-button:hover {
        background: dt('message.error.close.button.hover.background');
    }

    .p-message-error.p-message-outlined {
        color: dt('message.error.outlined.color');
        outline-color: dt('message.error.outlined.border.color');
    }

    .p-message-error.p-message-simple {
        color: dt('message.error.simple.color');
    }

    .p-message-secondary {
        background: dt('message.secondary.background');
        outline-color: dt('message.secondary.border.color');
        color: dt('message.secondary.color');
        box-shadow: dt('message.secondary.shadow');
    }

    .p-message-secondary .p-message-close-button:focus-visible {
        outline-color: dt('message.secondary.close.button.focus.ring.color');
        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');
    }

    .p-message-secondary .p-message-close-button:hover {
        background: dt('message.secondary.close.button.hover.background');
    }

    .p-message-secondary.p-message-outlined {
        color: dt('message.secondary.outlined.color');
        outline-color: dt('message.secondary.outlined.border.color');
    }

    .p-message-secondary.p-message-simple {
        color: dt('message.secondary.simple.color');
    }

    .p-message-contrast {
        background: dt('message.contrast.background');
        outline-color: dt('message.contrast.border.color');
        color: dt('message.contrast.color');
        box-shadow: dt('message.contrast.shadow');
    }

    .p-message-contrast .p-message-close-button:focus-visible {
        outline-color: dt('message.contrast.close.button.focus.ring.color');
        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');
    }

    .p-message-contrast .p-message-close-button:hover {
        background: dt('message.contrast.close.button.hover.background');
    }

    .p-message-contrast.p-message-outlined {
        color: dt('message.contrast.outlined.color');
        outline-color: dt('message.contrast.outlined.border.color');
    }

    .p-message-contrast.p-message-simple {
        color: dt('message.contrast.simple.color');
    }

    .p-message-text {
        font-size: dt('message.text.font.size');
        font-weight: dt('message.text.font.weight');
    }

    .p-message-icon {
        display: inline-flex;
    }

    .p-message-icon,
    .p-message-icon svg,
    .p-message-icon i {
        flex-shrink: 0;
        font-size: dt('message.icon.size');
        width: dt('message.icon.size');
        height: dt('message.icon.size');
    }

    .p-message-sm .p-message-content {
        padding: dt('message.content.sm.padding');
    }

    .p-message-sm .p-message-text {
        font-size: dt('message.text.sm.font.size');
    }

    .p-message-sm .p-message-icon,
    .p-message-sm .p-message-icon svg,
    .p-message-sm .p-message-icon i {
        font-size: dt('message.icon.sm.size');
        width: dt('message.icon.sm.size');
        height: dt('message.icon.sm.size');
    }

    .p-message-sm .p-message-close-button svg,
    .p-message-sm .p-message-close-button i {
        width: dt('message.close.icon.sm.size');
        height: dt('message.close.icon.sm.size');
    }

    .p-message-lg .p-message-content {
        padding: dt('message.content.lg.padding');
    }

    .p-message-lg .p-message-text {
        font-size: dt('message.text.lg.font.size');
    }

    .p-message-lg .p-message-icon,
    .p-message-lg .p-message-icon svg,
    .p-message-lg .p-message-icon i {
        font-size: dt('message.icon.lg.size');
        width: dt('message.icon.lg.size');
        height: dt('message.icon.lg.size');
    }

    .p-message-lg .p-message-close-button svg,
    .p-message-lg .p-message-close-button i {
        font-size: dt('message.close.icon.lg.size');
        width: dt('message.close.icon.lg.size');
        height: dt('message.close.icon.lg.size');
    }

    .p-message-outlined {
        background: transparent;
        outline-width: dt('message.outlined.border.width');
    }

    .p-message-simple {
        background: transparent;
        outline-color: transparent;
        box-shadow: none;
    }

    .p-message-simple .p-message-content {
        padding: dt('message.simple.content.padding');
    }

    .p-message-outlined .p-message-close-button:hover,
    .p-message-simple .p-message-close-button:hover {
        background: transparent;
    }

    .p-message-enter-active {
        animation: p-animate-message-enter 0.3s ease-out forwards;
        overflow: hidden;
    }

    .p-message-leave-active {
        animation: p-animate-message-leave 0.15s ease-in forwards;
        overflow: hidden;
    }

    @keyframes p-animate-message-enter {
        from {
            opacity: 0;
            grid-template-rows: 0fr;
        }
        to {
            opacity: 1;
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-message-leave {
        from {
            opacity: 1;
            grid-template-rows: 1fr;
        }
        to {
            opacity: 0;
            margin: 0;
            grid-template-rows: 0fr;
        }
    }
`;var qa={root:({instance:n})=>{let t=n.severity(),e=n.variant(),i=n.size();return[`p-message p-component p-message-`+t,e&&`p-message-`+e,{"p-message-sm":i===`small`,"p-message-lg":i===`large`}]},contentWrapper:`p-message-content-wrapper`,content:`p-message-content`,icon:`p-message-icon`,text:`p-message-text`,closeButton:`p-message-close-button`,closeIcon:`p-message-close-icon`};var ho=class pt extends wE{name=`message`;style=mo;classes=qa;static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(pt)))(o||pt)}})();static ɵprov=x({token:pt,factory:pt.ɵfac})};var fo=new _(`MESSAGE_INSTANCE`);var Sn=class Ze extends z{componentName=`Message`;_componentStyle=D(ho);bindDirectiveInstance=D(I,{self:!0});$pcMessage=D(fo,{optional:!0,skipSelf:!0})??void 0;severity=GB(`info`);closable=GB(!1,{transform:QB});icon=GB();closeIcon=GB();life=GB(void 0,{transform:XB});size=GB();variant=GB();motionOptions=GB();computedMotionOptions=UT(()=>k(k({},this.ptm(`motion`)),this.motionOptions()));onClose=zB();get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}visible=ge$1(!0);containerTemplate=KB(`container`,{descendants:!1});iconTemplate=KB(`icon`,{descendants:!1});closeIconTemplate=KB(`closeicon`,{descendants:!1});containerContext={closeCallback:e=>this.closeCallback(e)};dataP=UT(()=>this.cn({outlined:this.variant()===`outlined`,simple:this.variant()===`simple`,[this.severity()]:this.severity(),[this.size()]:this.size()}));closeCallback=e=>{this.close(e)};onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}onInit(){let e=this.life();e&&setTimeout(()=>{this.close(new Event(`close`))},e)}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(Ze)))(o||Ze)}})();static ɵcmp=(function(){let e=[`container`],i=[`icon`],o=[`closeicon`],d=[`*`];function x(I,P){I&1&&yy(0)}function X(I,P){if(I&1&&ly(0,x,1,0,`ng-container`,3),I&2){let g=rT();py(`ngTemplateOutlet`,g.iconTemplate())}}function U(I,P){if(I&1&&hy(0,`i`,0),I&2){let g=rT();wT(g.cn(g.cx(`icon`),g.icon())),py(`pBind`,g.ptm(`icon`)),fy(`data-p`,g.dataP())}}function oe(I,P){I&1&&yy(0)}function me(I,P){if(I&1&&ly(0,oe,1,0,`ng-container`,4),I&2){let g=rT();py(`ngTemplateOutlet`,g.containerTemplate())(`ngTemplateOutletContext`,g.containerContext)}}function S(I,P){if(I&1&&(da$1(0,`span`,0),Ma$1(1),Id()),I&2){let g=rT();wT(g.cx(`text`)),py(`pBind`,g.ptm(`text`)),fy(`data-p`,g.dataP())}}function N(I,P){if(I&1&&hy(0,`i`,0),I&2){let g=rT(2);wT(g.cn(g.cx(`closeIcon`),g.closeIcon())),py(`pBind`,g.ptm(`closeIcon`)),fy(`data-p`,g.dataP())}}function u(I,P){I&1&&yy(0)}function be(I,P){if(I&1&&ly(0,u,1,0,`ng-container`,3),I&2){let g=rT(2);py(`ngTemplateOutlet`,g.closeIconTemplate())}}function ve(I,P){if(I&1&&(Jp(),hy(0,`svg`,7)),I&2){let g=rT(2);wT(g.cx(`closeIcon`)),py(`pBind`,g.ptm(`closeIcon`)),fy(`data-p`,g.dataP())}}function Qe(I,P){if(I&1){let g=tT();da$1(0,`button`,5),vy(`click`,function(R){Bp(g);let C=rT();return Vp(C.close(R))}),zb(1,N,1,4,`i`,1)(2,be,1,1,`ng-container`)(3,ve,1,4,`svg`,6),Id()}if(I&2){let g=rT();wT(g.cx(`closeButton`)),py(`pBind`,g.ptm(`closeButton`)),fy(`aria-label`,g.closeAriaLabel)(`data-p`,g.dataP()),FC(),qb(g.closeIcon()?1:g.closeIconTemplate()?2:3)}}return ba$1({type:Ze,selectors:[[`p-message`]],contentQueries:function(P,g,D){P&1&&Ey(D,g.containerTemplate,e,4)(D,g.iconTemplate,i,4)(D,g.closeIconTemplate,o,4),P&2&&sT(3)},hostAttrs:[`role`,`alert`,`aria-live`,`polite`],hostVars:4,hostBindings:function(P,g){P&1&&(Ws(function(){return g.pcn(`p-message-enter-active`)}),zs(function(){return g.pcn(`p-message-leave-active`)})),P&2&&(fy(`data-p`,g.dataP())(`inert`,g.visible()?null:``),wT(g.cn(g.cx(`root`),g.visible()?void 0:g.pcn(`p-message-leave-active`))))},inputs:{severity:[1,`severity`],closable:[1,`closable`],icon:[1,`icon`],closeIcon:[1,`closeIcon`],life:[1,`life`],size:[1,`size`],variant:[1,`variant`],motionOptions:[1,`motionOptions`]},outputs:{onClose:`onClose`},features:[jT([ho,{provide:fo,useExisting:Ze},{provide:J,useExisting:Ze}]),Tb([I]),ay],ngContentSelectors:d,decls:7,vars:12,consts:[[3,`pBind`],[3,`pBind`,`class`],[`pRipple`,``,`type`,`button`,3,`pBind`,`class`],[4,`ngTemplateOutlet`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`pRipple`,``,`type`,`button`,3,`click`,`pBind`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`pBind`]],template:function(P,g){P&1&&(_a$1(),da$1(0,`div`,0)(1,`div`,0),zb(2,X,1,1,`ng-container`),zb(3,U,1,4,`i`,1),zb(4,me,1,2,`ng-container`)(5,S,2,4,`span`,1),zb(6,Qe,4,6,`button`,2),Id()()),P&2&&(wT(g.cx(`contentWrapper`)),py(`pBind`,g.ptm(`contentWrapper`)),fy(`data-p`,g.dataP()),FC(),wT(g.cx(`content`)),py(`pBind`,g.ptm(`content`)),fy(`data-p`,g.dataP()),FC(),qb(g.iconTemplate()?2:-1),FC(),qb(g.icon()?3:-1),FC(),qb(g.containerTemplate()?4:5),FC(2),qb(g.closable()?6:-1))},dependencies:[N0,La$1,te,KU,I,kl],encapsulation:2})})()};var vo=class Dn{static ɵfac=function(i){return new(i||Dn)};static ɵmod=dr({type:Dn});static ɵinj=gn$1({imports:[Sn,KU,KU]})};function yo(n){n||(n=D(Te));let t=new V(e=>{if(n.destroyed){e.next();return}return n.onDestroy(e.next.bind(e))});return e=>e.pipe(kD(t))}var bo=`
    .p-textarea {
        font-weight: dt('textarea.font.weight');
        font-size: dt('textarea.font.size');
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var Ga={root:({instance:n})=>[`p-textarea p-component`,{"p-filled":n.$filled(),"p-textarea-resizable ":n.autoResize(),"p-variant-filled":n.$variant()===`filled`,"p-textarea-fluid":n.hasFluid,"p-inputfield-sm p-textarea-sm":n.pSize()===`small`,"p-textarea-lg p-inputfield-lg":n.pSize()===`large`,"p-invalid":n.invalid()}]};var _o=class gt extends wE{name=`textarea`;style=bo;classes=Ga;static ɵfac=(()=>{let e;return function(o){return(e||(e=pa$1(gt)))(o||gt)}})();static ɵprov=x({token:gt,factory:gt.ɵfac})};var Co=new _(`TEXTAREA_INSTANCE`);var xo=class mt extends Xe{componentName=`Textarea`;bindDirectiveInstance=D(I,{self:!0});$pcTextarea=D(Co,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=GB();pTextareaUnstyled=GB();autoResize=GB(!1,{transform:QB});pSize=GB();variant=GB();fluid=GB(void 0,{transform:QB});invalid=GB(!1,{transform:QB});$variant=UT(()=>this.variant()||this.config.inputVariant()||void 0);onResize=zB();get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=D(_o);ngControl=D(fe,{optional:!0,self:!0});pcFluid=D(Me,{optional:!0,host:!0,skipSelf:!0});destroyRef=D(Te);constructor(){super(),zo(()=>{let e=this.pTextareaPT();e&&this.directivePT.set(e)}),zo(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl&&this.ngControl.valueChanges&&this.ngControl.valueChanges.pipe(yo(this.destroyRef)).subscribe(()=>{this.updateState()})}onAfterViewInit(){this.autoResize()&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.autoResize()&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(e){this.writeModelValue(e.target?.value),this.updateState()}resize(e){this.el.nativeElement.style.height=`auto`,this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+`px`,parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY=`scroll`,this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow=`hidden`,this.onResize.emit(e||{})}updateState(){this.autoResize()&&this.resize()}static ɵfac=function(i){return new(i||mt)};static ɵdir=Ta$1({type:mt,selectors:[[``,`pTextarea`,``],[``,`pInputTextarea`,``]],hostVars:2,hostBindings:function(i,o){i&1&&vy(`input`,function(x){return o.onInput(x)}),i&2&&wT(o.cx(`root`))},inputs:{pTextareaPT:[1,`pTextareaPT`],pTextareaUnstyled:[1,`pTextareaUnstyled`],autoResize:[1,`autoResize`],pSize:[1,`pSize`],variant:[1,`variant`],fluid:[1,`fluid`],invalid:[1,`invalid`]},outputs:{onResize:`onResize`},features:[jT([_o,{provide:Co,useExisting:mt},{provide:J,useExisting:mt}]),Tb([I]),ay]})};var Mo=class In{static ɵfac=function(i){return new(i||In)};static ɵmod=dr({type:In});static ɵinj=gn$1({})};var Ua=()=>({width:`420px`,maxWidth:`calc(100vw - 40px)`});function Wa(n,t){if(n&1){let e=tT();da$1(0,`div`,22)(1,`span`,30),hy(2,`i`,31),Id(),da$1(3,`h3`),xT(4,`Thanks for reaching out!`),Id(),da$1(5,`p-message`,32),xT(6,`This is a design preview. Your message has not been sent.`),Id(),da$1(7,`p-button`,33),vy(`onClick`,function(){Bp(e);let o=rT();return Vp(o.reset())}),Id()()}}function Xa(n,t){n&1&&(da$1(0,`p-message`,40),xT(1,`Enter your first name.`),Id())}function Ya(n,t){n&1&&(da$1(0,`p-message`,43),xT(1,`Enter your last name.`),Id())}function Za(n,t){n&1&&(da$1(0,`p-message`,46),xT(1,`Enter a valid email address.`),Id())}function Qa(n,t){n&1&&(da$1(0,`p-message`,51),xT(1,`Tell us how we can help.`),Id())}function Ka(n,t){n&1&&(da$1(0,`p-message`,56),xT(1,`Please agree to the terms and privacy policy.`),Id())}function Ja(n,t){if(n&1){let e=tT();da$1(0,`form`,34),vy(`ngSubmit`,function(){Bp(e);let o=rT();return Vp(o.submit())}),da$1(1,`div`,35)(2,`div`,36)(3,`label`,37),xT(4,`First Name `),da$1(5,`span`,38),xT(6,`*`),Id()(),da$1(7,`input`,39),MS(),Id(),zb(8,Xa,2,0,`p-message`,40),Id(),da$1(9,`div`,36)(10,`label`,41),xT(11,`Last Name `),da$1(12,`span`,38),xT(13,`*`),Id()(),da$1(14,`input`,42),MS(),Id(),zb(15,Ya,2,0,`p-message`,43),Id()(),da$1(16,`div`,36)(17,`label`,44),xT(18,`Email Address `),da$1(19,`span`,38),xT(20,`*`),Id()(),da$1(21,`input`,45),MS(),Id(),zb(22,Za,2,0,`p-message`,46),Id(),da$1(23,`div`,36)(24,`label`,47),xT(25,`Company`),Id(),da$1(26,`input`,48),MS(),Id()(),da$1(27,`div`,36)(28,`label`,49),xT(29,`Message `),da$1(30,`span`,38),xT(31,`*`),Id()(),da$1(32,`textarea`,50),MS(),Id(),zb(33,Qa,2,0,`p-message`,51),Id(),da$1(34,`div`,36)(35,`div`,52)(36,`p-checkbox`,53),MS(),Id(),da$1(37,`label`,54),xT(38,` I agree to the `),da$1(39,`a`,55),xT(40,`Terms of Service`),Id(),xT(41,` and `),da$1(42,`a`,55),xT(43,` Privacy Policy `),Id()()(),zb(44,Ka,2,0,`p-message`,56),Id(),hy(45,`p-button`,57),Id()}if(n&2){let e=rT();py(`formGroup`,e.form),FC(7),fy(`aria-invalid`,e.invalid(`firstName`))(`aria-describedby`,e.invalid(`firstName`)?`firstName-error`:null),AS(),FC(),qb(e.invalid(`firstName`)?8:-1),FC(6),fy(`aria-invalid`,e.invalid(`lastName`))(`aria-describedby`,e.invalid(`lastName`)?`lastName-error`:null),AS(),FC(),qb(e.invalid(`lastName`)?15:-1),FC(6),fy(`aria-invalid`,e.invalid(`email`))(`aria-describedby`,e.invalid(`email`)?`email-error`:null),AS(),FC(),qb(e.invalid(`email`)?22:-1),FC(4),AS(),FC(6),fy(`aria-invalid`,e.invalid(`message`))(`aria-describedby`,e.invalid(`message`)?`message-error`:null),AS(),FC(),qb(e.invalid(`message`)?33:-1),FC(3),py(`binary`,!0),AS(),FC(8),qb(e.invalid(`consent`)?44:-1)}}function er(n,t){n&1&&(da$1(0,`p`),xT(1,`Live chat isn’t connected in this preview. You can reach our team by email instead.`),Id(),da$1(2,`a`,58),xT(3,`hello@company.com`),Id())}function tr(n,t){n&1&&(da$1(0,`p`),xT(1,`This is a design preview. No information is sent or stored. Replace this notice with your company’s policy before publishing.`),Id())}function nr(n,t){if(n&1){let e=tT();da$1(0,`p-button`,59),vy(`onClick`,function(){Bp(e);let o=rT();return Vp(o.dialogVisible.set(!1))}),Id()}}var Do=class n{fb=D(Hi);submitted=ge$1(!1);dialogVisible=ge$1(!1);dialogKind=ge$1(`chat`);form=this.fb.nonNullable.group({firstName:[``,[ge.required,ge.pattern(/\S/)]],lastName:[``,[ge.required,ge.pattern(/\S/)]],email:[``,[ge.required,ge.email]],company:[``],message:[``,[ge.required,ge.pattern(/\S/)]],consent:[!1,ge.requiredTrue]});invalid(t){let e=this.form.controls[t];return e.invalid&&e.touched}submit(){this.form.markAllAsTouched(),this.form.valid&&this.submitted.set(!0)}reset(){this.form.reset(),this.submitted.set(!1)}openDialog(t){this.dialogKind.set(t),this.dialogVisible.set(!0)}get dialogTitle(){return{chat:`Let’s talk`,terms:`Terms of Service`,privacy:`Privacy Policy`}[this.dialogKind()]}static ɵfac=function(e){return new(e||n)};static ɵcmp=ba$1({type:n,selectors:[[`app-contact`]],decls:107,vars:15,consts:[[`footer`,``],[1,`contact-page`],[1,`page-heading`],[1,`desktop-break`],[1,`contact-grid`],[`aria-label`,`Ways to get in touch`,1,`contact-channels`],[`styleClass`,`channel-card`],[1,`channel-content`],[`data-p-icon`,`envelope`,3,`size`],[1,`channel-content-body`],[1,`sub-muted-text`],[`href`,`mailto:hello@company.com`],[`data-p-icon`,`comments`,3,`size`],[`href`,` `],[`data-p-icon`,`phone`,3,`size`],[`href`,`tel:+15551234567`],[`data-p-icon`,`map-marker`,3,`size`],[`href`,``,`target`,`_blank`,`rel`,`noreferrer`],[`aria-labelledby`,`form-title`],[`styleClass`,`form-card`],[`id`,`form-title`],[1,`form-description`],[1,`success-message`],[`novalidate`,``,3,`formGroup`],[`styleClass`,`section-divider`],[`aria-label`,`Office hours and contact information`],[`styleClass`,`details-panel`],[1,`details-grid`],[1,`details-list`],[`styleClass`,`contact-dialog`,3,`visibleChange`,`header`,`visible`,`modal`,`dismissableMask`,`draggable`,`resizable`],[1,`success-icon`],[`aria-hidden`,`true`,1,`pi`,`pi-check`],[`severity`,`success`,`variant`,`simple`],[`label`,`Back to the form`,`styleClass`,`submit-button`,3,`onClick`],[`novalidate`,``,3,`ngSubmit`,`formGroup`],[1,`name-fields`],[1,`field`],[`for`,`firstName`],[1,`required`],[`pInputText`,``,`id`,`firstName`,`formControlName`,`firstName`,`placeholder`,`John`,`autocomplete`,`given-name`,`required`,``],[`id`,`firstName-error`,`severity`,`error`,`variant`,`simple`,`size`,`small`],[`for`,`lastName`],[`pInputText`,``,`id`,`lastName`,`formControlName`,`lastName`,`placeholder`,`Doe`,`autocomplete`,`family-name`,`required`,``],[`id`,`lastName-error`,`severity`,`error`,`variant`,`simple`,`size`,`small`],[`for`,`email`],[`pInputText`,``,`id`,`email`,`type`,`email`,`formControlName`,`email`,`placeholder`,`john@company.com`,`autocomplete`,`email`,`required`,``,1,`full-width`],[`id`,`email-error`,`severity`,`error`,`variant`,`simple`,`size`,`small`],[`for`,`company`],[`pInputText`,``,`id`,`company`,`formControlName`,`company`,`placeholder`,`Your Company`,`autocomplete`,`organization`,1,`full-width`],[`for`,`message`],[`pTextarea`,``,`id`,`message`,`formControlName`,`message`,`placeholder`,`Tell us about your project, goals, or how we can help...`,`rows`,`2`,`required`,``,1,`full-width`],[`id`,`message-error`,`severity`,`error`,`variant`,`simple`,`size`,`small`],[1,`consent`],[`inputId`,`consent`,`formControlName`,`consent`,`inputId`,`preview-checkbox`,3,`binary`],[`pLabel`,``,`for`,`preview-checkbox`],[1,`font-semibold`,`text-underline`],[`id`,`consent-error`,`severity`,`error`,`variant`,`simple`,`size`,`small`],[`type`,`submit`,`label`,`Submit`,`styleClass`,`submit-button`],[`href`,`mailto:hello@company.com`,1,`email-link`],[`label`,`Close`,`styleClass`,`submit-button`,3,`onClick`]],template:function(e,i){e&1&&(da$1(0,`main`,1)(1,`header`,2)(2,`h1`),xT(3,`Contact Us`),Id(),da$1(4,`p`),xT(5,`Ready to start your next project? Our team is here to help you succeed. Reach`),hy(6,`br`,3),xT(7,` out and let's discuss how we can bring your ideas to life.`),Id()(),da$1(8,`div`,4)(9,`section`,5)(10,`p-card`,6)(11,`div`,7),Jp(),hy(12,`svg`,8),eh(),da$1(13,`div`,9)(14,`h3`),xT(15,`Email`),Id(),da$1(16,`p`,10),xT(17,`Get a response within 24 hours`),Id(),da$1(18,`a`,11),xT(19,`hello@company.com`),Id()()()(),da$1(20,`p-card`,6)(21,`div`,7),Jp(),hy(22,`svg`,12),eh(),da$1(23,`div`,9)(24,`h3`),xT(25,`Live Chat`),Id(),da$1(26,`p`,10),xT(27,`Instant support available now`),Id(),da$1(28,`a`,13),xT(29,`Start Chatting`),Id()()()(),da$1(30,`p-card`,6)(31,`div`,7),Jp(),hy(32,`svg`,14),eh(),da$1(33,`div`,9)(34,`h3`),xT(35,`Phone`),Id(),da$1(36,`p`,10),xT(37,`Mon-Fri, 9AM-6PM EST`),Id(),da$1(38,`a`,15),xT(39,`+1 (555) 123-4567`),Id()()()(),da$1(40,`p-card`,6)(41,`div`,7),Jp(),hy(42,`svg`,16),eh(),da$1(43,`div`,9)(44,`h3`),xT(45,`Office`),Id(),da$1(46,`p`,10),xT(47,`Schedule an in-person meeting`),Id(),da$1(48,`a`,17),xT(49,`123 Innovation St, Tech City`),Id()()()()(),da$1(50,`section`,18)(51,`p-card`,19)(52,`h2`,20),xT(53,`Send us a message`),Id(),da$1(54,`p`,21),xT(55,`Fill out the form below and we'll get back to you within 24 hours.`),Id(),zb(56,Wa,8,0,`div`,22)(57,Ja,46,15,`form`,23),Id()()(),hy(58,`p-divider`,24),da$1(59,`section`,25)(60,`p-card`,26)(61,`div`,27)(62,`div`)(63,`h2`),xT(64,`Office Hours`),Id(),da$1(65,`ul`,28)(66,`li`)(67,`span`),xT(68,`Monday - Friday`),Id(),da$1(69,`span`),xT(70,`9:00 AM - 6:00 PM EST`),Id()(),da$1(71,`li`)(72,`span`),xT(73,`Saturday`),Id(),da$1(74,`span`),xT(75,`10:00 AM - 4:00 PM EST`),Id()(),da$1(76,`li`)(77,`span`),xT(78,`Sunday`),Id(),da$1(79,`span`),xT(80,`Closed`),Id()()()(),da$1(81,`div`)(82,`h2`),xT(83,`Contact Information`),Id(),da$1(84,`ul`,28)(85,`li`)(86,`span`),xT(87,`Email`),Id(),da$1(88,`span`)(89,`a`,11),xT(90,`hello@company.com`),Id()()(),da$1(91,`li`)(92,`span`),xT(93,`Phone`),Id(),da$1(94,`span`)(95,`a`,15),xT(96,`+1 (555) 123-4567`),Id()()(),da$1(97,`li`)(98,`span`),xT(99,`Address`),Id(),da$1(100,`span`),xT(101,`123 Innovation St, Tech City`),Id()()()()()()()(),da$1(102,`p-dialog`,29),vy(`visibleChange`,function(d){return i.dialogVisible.set(d)}),zb(103,er,4,0)(104,tr,2,0,`p`),ly(105,nr,1,0,`ng-template`,null,0,VT),Id()),e&2&&(FC(12),py(`size`,26),FC(10),py(`size`,26),FC(10),py(`size`,26),FC(10),py(`size`,26),FC(14),qb(i.submitted()?56:57),FC(46),ET(BT(14,Ua)),py(`header`,i.dialogTitle)(`visible`,i.dialogVisible())(`modal`,!0)(`dismissableMask`,!0)(`draggable`,!1)(`resizable`,!1),FC(),qb(i.dialogKind()===`chat`?103:104))},dependencies:[Gi,ji,Ot,Ri,Li,Bt,pn,gn,Jr,Dn,Xi,fn,Ji,Lt,io,_n,so,xn,go,po,vo,Sn,Mo,xo,Bn,Nn,$n,Fn],styles:[`.contact-page[_ngcontent-%COMP%]{max-width:944px;padding:92px 24px 72px;margin:0 auto}.channel-content-body[_ngcontent-%COMP%]{gap:.25rem;display:flex;flex-direction:column}.contact-page[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%]{text-align:center;margin:0 -12px 64px}.contact-page[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:48px;line-height:1.2;letter-spacing:-2px;font-weight:700}.contact-page[_ngcontent-%COMP%]   .page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:16px;color:#666;font-size:18px;line-height:28px;letter-spacing:-.2px}.contact-page[_ngcontent-%COMP%]   .contact-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,2fr);gap:38px;align-items:start}.contact-page[_ngcontent-%COMP%]   .contact-channels[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:14px}.contact-page[_ngcontent-%COMP%]   .p-card[_ngcontent-%COMP%]{color:#0a0a0a;box-shadow:none;border:1px solid #e5e5e5;border-radius:14px;background-color:#f5f5f5}.contact-page[_ngcontent-%COMP%]   .p-card-body[_ngcontent-%COMP%]{padding:0;gap:0}.contact-page[_ngcontent-%COMP%]   .channel-card[_ngcontent-%COMP%]{min-height:122px;padding:26px 32px;background:#f6f6f6}.contact-page[_ngcontent-%COMP%]   .channel-content[_ngcontent-%COMP%]{display:flex;gap:24px}.contact-page[_ngcontent-%COMP%]   .channel-card[_ngcontent-%COMP%], .contact-page[_ngcontent-%COMP%]   .text-link[_ngcontent-%COMP%]{font-size:14px;line-height:20px;font-weight:500}.contact-page[_ngcontent-%COMP%]   .channel-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666;font-size:14px;line-height:20px;margin:4px 0 7px}.contact-page[_ngcontent-%COMP%]   .text-link[_ngcontent-%COMP%]{display:inline;padding:0;border:none;border-radius:0;background:transparent;color:#0a0a0a;vertical-align:baseline;box-shadow:none}.contact-page[_ngcontent-%COMP%]   .channel-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .contact-page[_ngcontent-%COMP%]   .text-link[_ngcontent-%COMP%]:hover, .contact-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline;text-underline-offset:3px;color:#525252;background:transparent}.contact-page[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]{padding:24px;background:#fff}.contact-page[_ngcontent-%COMP%]   #form-title[_ngcontent-%COMP%]{font-size:16px;font-weight:600;line-height:24px;letter-spacing:-.3px}.contact-page[_ngcontent-%COMP%]   .form-description[_ngcontent-%COMP%]{font-size:14px;line-height:20px;color:#666;margin-top:4px}.contact-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:28px;margin-top:26px}.contact-page[_ngcontent-%COMP%]   .name-fields[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px}.contact-page[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{min-width:0}.contact-page[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:block;font-size:14px;line-height:20px;font-weight:500}.contact-page[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%]{color:#c00000;margin-left:4px}.contact-page[_ngcontent-%COMP%]   .consent[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:flex-start;color:#666;font-size:14px;line-height:20px}.contact-page[_ngcontent-%COMP%]   .consent[_ngcontent-%COMP%]   p-checkbox[_ngcontent-%COMP%]{flex-shrink:0;margin-top:2px;--%NS%p-checkbox-width: 16px;--%NS%p-checkbox-height: 16px;--%NS%p-checkbox-border-radius: 4px;--%NS%p-checkbox-checked-background: #171717;--%NS%p-checkbox-checked-border-color: #171717;--%NS%p-checkbox-checked-hover-background: #333;--%NS%p-checkbox-checked-hover-border-color: #333}.contact-page[_ngcontent-%COMP%]   .consent[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}.contact-page[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%], .contact-dialog[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:center;padding:8px 16px;min-height:36px;background:#171717;border:1px solid #171717;color:#fff;font-size:14px;font-weight:500;line-height:20px;border-radius:5px;transition:background .15s;box-shadow:none}.contact-page[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]:hover, .contact-dialog[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]:hover{background:#333;border-color:#333;color:#fff}.contact-page[_ngcontent-%COMP%]   .section-divider[_ngcontent-%COMP%]{margin:46px 0 30px}.contact-page[_ngcontent-%COMP%]   .section-divider[_ngcontent-%COMP%]:before{border-top-color:#e5e5e5}.contact-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%]{background:#f6f6f6;padding:48px 24px 32px}.contact-page[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]{display:flex;gap:32px}.contact-page[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1;min-width:0}.contact-page[_ngcontent-%COMP%]   .details-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-size:18px;line-height:24px;margin-bottom:18px;letter-spacing:-.4px}.contact-page[_ngcontent-%COMP%]   .details-list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;font-size:14px;line-height:20px;color:#666}.contact-page[_ngcontent-%COMP%]   .details-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:12px;margin-top:8px}.contact-page[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%]{padding:44px 0 12px;text-align:center}.contact-page[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%]{display:inline-flex;padding:12px;border-radius:50%;color:#15803d;background:#f0fdf4}.contact-page[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:600;margin-top:18px}.contact-page[_ngcontent-%COMP%]   .success-message[_ngcontent-%COMP%]   p-message[_ngcontent-%COMP%]{display:block;margin:10px 0 28px}.contact-dialog[_ngcontent-%COMP%]   .p-dialog-title[_ngcontent-%COMP%]{font-size:22px;font-weight:600;letter-spacing:-.5px}.contact-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666;font-size:14px;line-height:23px;margin-bottom:24px}.contact-dialog[_ngcontent-%COMP%]   .email-link[_ngcontent-%COMP%]{display:block;font-size:14px;text-decoration:underline;margin-bottom:8px}.contact-dialog[_ngcontent-%COMP%]   .p-dialog-footer[_ngcontent-%COMP%] > p-button[_ngcontent-%COMP%]{width:100%}.sub-muted-text[_ngcontent-%COMP%]{color:var(--%NS%app-color-text-muted);font-size:14px}.full-width[_ngcontent-%COMP%]{width:100%}`]})};export{Do as Contact};