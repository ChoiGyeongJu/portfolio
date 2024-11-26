import{d as Yr,j as J,R as lr,r as S}from"./index-CpzoM8wi.js";const _a=({color:e,label:r})=>J.jsx(Ot,{id:r,children:J.jsx(Ct,{color:e,children:r})}),Ot=Yr.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Ct=Yr.h1`
  padding: 12px;
  color: ${e=>e.color&&e.color};
  border-bottom: 4px solid ${e=>e.color?e.color:"black"};
`;var St=!1;function _t(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Et(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var kt=function(){function e(t){var a=this;this._insertTag=function(n){var i;a.tags.length===0?a.insertionPoint?i=a.insertionPoint.nextSibling:a.prepend?i=a.container.firstChild:i=a.before:i=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(n,i),a.tags.push(n)},this.isSpeedy=t.speedy===void 0?!St:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(a){a.forEach(this._insertTag)},r.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Et(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var i=_t(n);try{i.insertRule(a,i.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(a));this.ctr++},r.flush=function(){this.tags.forEach(function(a){var n;return(n=a.parentNode)==null?void 0:n.removeChild(a)}),this.tags=[],this.ctr=0},e}(),R="-ms-",xe="-moz-",d="-webkit-",Zr="comm",rr="rule",tr="decl",jt="@import",Jr="@keyframes",It="@layer",Rt=Math.abs,Oe=String.fromCharCode,At=Object.assign;function Nt(e,r){return k(e,0)^45?(((r<<2^k(e,0))<<2^k(e,1))<<2^k(e,2))<<2^k(e,3):0}function Qr(e){return e.trim()}function Mt(e,r){return(e=r.exec(e))?e[0]:e}function p(e,r,t){return e.replace(r,t)}function He(e,r){return e.indexOf(r)}function k(e,r){return e.charCodeAt(r)|0}function te(e,r,t){return e.slice(r,t)}function W(e){return e.length}function nr(e){return e.length}function ye(e,r){return r.push(e),e}function Pt(e,r){return e.map(r).join("")}var Ce=1,Q=1,Xr=0,V=0,C=0,X="";function Se(e,r,t,a,n,i,o){return{value:e,root:r,parent:t,type:a,props:n,children:i,line:Ce,column:Q,length:o,return:""}}function re(e,r){return At(Se("",null,null,"",null,null,0),e,{length:-e.length},r)}function Tt(){return C}function Vt(){return C=V>0?k(X,--V):0,Q--,C===10&&(Q=1,Ce--),C}function F(){return C=V<Xr?k(X,V++):0,Q++,C===10&&(Q=1,Ce++),C}function U(){return k(X,V)}function be(){return V}function ie(e,r){return te(X,e,r)}function ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function et(e){return Ce=Q=1,Xr=W(X=e),V=0,[]}function rt(e){return X="",e}function $e(e){return Qr(ie(V-1,Ye(e===91?e+2:e===40?e+1:e)))}function Ft(e){for(;(C=U())&&C<33;)F();return ne(e)>2||ne(C)>3?"":" "}function Lt(e,r){for(;--r&&F()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return ie(e,be()+(r<6&&U()==32&&F()==32))}function Ye(e){for(;F();)switch(C){case e:return V;case 34:case 39:e!==34&&e!==39&&Ye(C);break;case 40:e===41&&Ye(e);break;case 92:F();break}return V}function zt(e,r){for(;F()&&e+C!==57;)if(e+C===84&&U()===47)break;return"/*"+ie(r,V-1)+"*"+Oe(e===47?e:F())}function Bt(e){for(;!ne(U());)F();return ie(e,V)}function Wt(e){return rt(we("",null,null,null,[""],e=et(e),0,[0],e))}function we(e,r,t,a,n,i,o,s,f){for(var c=0,u=0,l=o,j=0,P=0,I=0,m=1,x=1,b=1,w=0,A="",G=n,T=i,N=a,v=A;x;)switch(I=w,w=F()){case 40:if(I!=108&&k(v,l-1)==58){He(v+=p($e(w),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:v+=$e(w);break;case 9:case 10:case 13:case 32:v+=Ft(I);break;case 92:v+=Lt(be()-1,7);continue;case 47:switch(U()){case 42:case 47:ye(Dt(zt(F(),be()),r,t),f);break;default:v+="/"}break;case 123*m:s[c++]=W(v)*b;case 125*m:case 59:case 0:switch(w){case 0:case 125:x=0;case 59+u:b==-1&&(v=p(v,/\f/g,"")),P>0&&W(v)-l&&ye(P>32?pr(v+";",a,t,l-1):pr(p(v," ","")+";",a,t,l-2),f);break;case 59:v+=";";default:if(ye(N=dr(v,r,t,c,u,n,s,A,G=[],T=[],l),i),w===123)if(u===0)we(v,r,N,N,G,i,l,s,T);else switch(j===99&&k(v,3)===110?100:j){case 100:case 108:case 109:case 115:we(e,N,N,a&&ye(dr(e,N,N,0,0,n,s,A,n,G=[],l),T),n,T,l,s,a?G:T);break;default:we(v,N,N,N,[""],T,0,s,T)}}c=u=P=0,m=b=1,A=v="",l=o;break;case 58:l=1+W(v),P=I;default:if(m<1){if(w==123)--m;else if(w==125&&m++==0&&Vt()==125)continue}switch(v+=Oe(w),w*m){case 38:b=u>0?1:(v+="\f",-1);break;case 44:s[c++]=(W(v)-1)*b,b=1;break;case 64:U()===45&&(v+=$e(F())),j=U(),u=l=W(A=v+=Bt(be())),w++;break;case 45:I===45&&W(v)==2&&(m=0)}}return i}function dr(e,r,t,a,n,i,o,s,f,c,u){for(var l=n-1,j=n===0?i:[""],P=nr(j),I=0,m=0,x=0;I<a;++I)for(var b=0,w=te(e,l+1,l=Rt(m=o[I])),A=e;b<P;++b)(A=Qr(m>0?j[b]+" "+w:p(w,/&\f/g,j[b])))&&(f[x++]=A);return Se(e,r,t,n===0?rr:s,f,c,u)}function Dt(e,r,t){return Se(e,r,t,Zr,Oe(Tt()),te(e,2,-2),0)}function pr(e,r,t,a){return Se(e,r,t,tr,te(e,0,a),te(e,a+1,-1),a)}function Z(e,r){for(var t="",a=nr(e),n=0;n<a;n++)t+=r(e[n],n,e,r)||"";return t}function Ut(e,r,t,a){switch(e.type){case It:if(e.children.length)break;case jt:case tr:return e.return=e.return||e.value;case Zr:return"";case Jr:return e.return=e.value+"{"+Z(e.children,a)+"}";case rr:e.value=e.props.join(",")}return W(t=Z(e.children,a))?e.return=e.value+"{"+t+"}":""}function Gt(e){var r=nr(e);return function(t,a,n,i){for(var o="",s=0;s<r;s++)o+=e[s](t,a,n,i)||"";return o}}function Kt(e){return function(r){r.root||(r=r.return)&&e(r)}}function qt(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var Ht=function(r,t,a){for(var n=0,i=0;n=i,i=U(),n===38&&i===12&&(t[a]=1),!ne(i);)F();return ie(r,V)},Yt=function(r,t){var a=-1,n=44;do switch(ne(n)){case 0:n===38&&U()===12&&(t[a]=1),r[a]+=Ht(V-1,t,a);break;case 2:r[a]+=$e(n);break;case 4:if(n===44){r[++a]=U()===58?"&\f":"",t[a]=r[a].length;break}default:r[a]+=Oe(n)}while(n=F());return r},Zt=function(r,t){return rt(Yt(et(r),t))},mr=new WeakMap,Jt=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,a=r.parent,n=r.column===a.column&&r.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!mr.get(a))&&!n){mr.set(r,!0);for(var i=[],o=Zt(t,i),s=a.props,f=0,c=0;f<o.length;f++)for(var u=0;u<s.length;u++,c++)r.props[c]=i[f]?o[f].replace(/&\f/g,s[u]):s[u]+" "+o[f]}}},Qt=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function tt(e,r){switch(Nt(e,r)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+xe+e+R+e+e;case 6828:case 4268:return d+e+R+e+e;case 6165:return d+e+R+"flex-"+e+e;case 5187:return d+e+p(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+R+"flex-$1$2")+e;case 5443:return d+e+R+"flex-item-"+p(e,/flex-|-self/,"")+e;case 4675:return d+e+R+"flex-line-pack"+p(e,/align-content|flex-|-self/,"")+e;case 5548:return d+e+R+p(e,"shrink","negative")+e;case 5292:return d+e+R+p(e,"basis","preferred-size")+e;case 6060:return d+"box-"+p(e,"-grow","")+d+e+R+p(e,"grow","positive")+e;case 4554:return d+p(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(W(e)-1-r>6)switch(k(e,r+1)){case 109:if(k(e,r+4)!==45)break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+xe+(k(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~He(e,"stretch")?tt(p(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(k(e,r+1)!==115)break;case 6444:switch(k(e,W(e)-3-(~He(e,"!important")&&10))){case 107:return p(e,":",":"+d)+e;case 101:return p(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+d+(k(e,14)===45?"inline-":"")+"box$3$1"+d+"$2$3$1"+R+"$2box$3")+e}break;case 5936:switch(k(e,r+11)){case 114:return d+e+R+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+R+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+R+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return d+e+R+e+e}return e}var Xt=function(r,t,a,n){if(r.length>-1&&!r.return)switch(r.type){case tr:r.return=tt(r.value,r.length);break;case Jr:return Z([re(r,{value:p(r.value,"@","@"+d)})],n);case rr:if(r.length)return Pt(r.props,function(i){switch(Mt(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Z([re(r,{props:[p(i,/:(read-\w+)/,":"+xe+"$1")]})],n);case"::placeholder":return Z([re(r,{props:[p(i,/:(plac\w+)/,":"+d+"input-$1")]}),re(r,{props:[p(i,/:(plac\w+)/,":"+xe+"$1")]}),re(r,{props:[p(i,/:(plac\w+)/,R+"input-$1")]})],n)}return""})}},en=[Xt],rn=function(r){var t=r.key;if(t==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(m){var x=m.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var n=r.stylisPlugins||en,i={},o,s=[];o=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(m){for(var x=m.getAttribute("data-emotion").split(" "),b=1;b<x.length;b++)i[x[b]]=!0;s.push(m)});var f,c=[Jt,Qt];{var u,l=[Ut,Kt(function(m){u.insert(m)})],j=Gt(c.concat(n,l)),P=function(x){return Z(Wt(x),j)};f=function(x,b,w,A){u=w,P(x?x+"{"+b.styles+"}":b.styles),A&&(I.inserted[b.name]=!0)}}var I={key:t,sheet:new kt({key:t,container:o,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:f};return I.sheet.hydrate(s),I},nt={exports:{}},h={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=typeof Symbol=="function"&&Symbol.for,ar=_?Symbol.for("react.element"):60103,ir=_?Symbol.for("react.portal"):60106,_e=_?Symbol.for("react.fragment"):60107,Ee=_?Symbol.for("react.strict_mode"):60108,ke=_?Symbol.for("react.profiler"):60114,je=_?Symbol.for("react.provider"):60109,Ie=_?Symbol.for("react.context"):60110,or=_?Symbol.for("react.async_mode"):60111,Re=_?Symbol.for("react.concurrent_mode"):60111,Ae=_?Symbol.for("react.forward_ref"):60112,Ne=_?Symbol.for("react.suspense"):60113,tn=_?Symbol.for("react.suspense_list"):60120,Me=_?Symbol.for("react.memo"):60115,Pe=_?Symbol.for("react.lazy"):60116,nn=_?Symbol.for("react.block"):60121,an=_?Symbol.for("react.fundamental"):60117,on=_?Symbol.for("react.responder"):60118,sn=_?Symbol.for("react.scope"):60119;function L(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case ar:switch(e=e.type,e){case or:case Re:case _e:case ke:case Ee:case Ne:return e;default:switch(e=e&&e.$$typeof,e){case Ie:case Ae:case Pe:case Me:case je:return e;default:return r}}case ir:return r}}}function at(e){return L(e)===Re}h.AsyncMode=or;h.ConcurrentMode=Re;h.ContextConsumer=Ie;h.ContextProvider=je;h.Element=ar;h.ForwardRef=Ae;h.Fragment=_e;h.Lazy=Pe;h.Memo=Me;h.Portal=ir;h.Profiler=ke;h.StrictMode=Ee;h.Suspense=Ne;h.isAsyncMode=function(e){return at(e)||L(e)===or};h.isConcurrentMode=at;h.isContextConsumer=function(e){return L(e)===Ie};h.isContextProvider=function(e){return L(e)===je};h.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar};h.isForwardRef=function(e){return L(e)===Ae};h.isFragment=function(e){return L(e)===_e};h.isLazy=function(e){return L(e)===Pe};h.isMemo=function(e){return L(e)===Me};h.isPortal=function(e){return L(e)===ir};h.isProfiler=function(e){return L(e)===ke};h.isStrictMode=function(e){return L(e)===Ee};h.isSuspense=function(e){return L(e)===Ne};h.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===_e||e===Re||e===ke||e===Ee||e===Ne||e===tn||typeof e=="object"&&e!==null&&(e.$$typeof===Pe||e.$$typeof===Me||e.$$typeof===je||e.$$typeof===Ie||e.$$typeof===Ae||e.$$typeof===an||e.$$typeof===on||e.$$typeof===sn||e.$$typeof===nn)};h.typeOf=L;nt.exports=h;var cn=nt.exports,it=cn,fn={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},un={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ot={};ot[it.ForwardRef]=fn;ot[it.Memo]=un;var ln=!0;function st(e,r,t){var a="";return t.split(" ").forEach(function(n){e[n]!==void 0?r.push(e[n]+";"):n&&(a+=n+" ")}),a}var sr=function(r,t,a){var n=r.key+"-"+t.name;(a===!1||ln===!1)&&r.registered[n]===void 0&&(r.registered[n]=t.styles)},ct=function(r,t,a){sr(r,t,a);var n=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var i=t;do r.insert(t===i?"."+n:"",i,r.sheet,!0),i=i.next;while(i!==void 0)}};function dn(e){for(var r=0,t,a=0,n=e.length;n>=4;++a,n-=4)t=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(n){case 3:r^=(e.charCodeAt(a+2)&255)<<16;case 2:r^=(e.charCodeAt(a+1)&255)<<8;case 1:r^=e.charCodeAt(a)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var pn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mn=!1,hn=/[A-Z]|^ms/g,yn=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ft=function(r){return r.charCodeAt(1)===45},hr=function(r){return r!=null&&typeof r!="boolean"},Ue=qt(function(e){return ft(e)?e:e.replace(hn,"-$&").toLowerCase()}),yr=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(yn,function(a,n,i){return D={name:n,styles:i,next:D},n})}return pn[r]!==1&&!ft(r)&&typeof t=="number"&&t!==0?t+"px":t},vn="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function ae(e,r,t){if(t==null)return"";var a=t;if(a.__emotion_styles!==void 0)return a;switch(typeof t){case"boolean":return"";case"object":{var n=t;if(n.anim===1)return D={name:n.name,styles:n.styles,next:D},n.name;var i=t;if(i.styles!==void 0){var o=i.next;if(o!==void 0)for(;o!==void 0;)D={name:o.name,styles:o.styles,next:D},o=o.next;var s=i.styles+";";return s}return gn(e,r,t)}case"function":{if(e!==void 0){var f=D,c=t(e);return D=f,ae(e,r,c)}break}}var u=t;if(r==null)return u;var l=r[u];return l!==void 0?l:u}function gn(e,r,t){var a="";if(Array.isArray(t))for(var n=0;n<t.length;n++)a+=ae(e,r,t[n])+";";else for(var i in t){var o=t[i];if(typeof o!="object"){var s=o;r!=null&&r[s]!==void 0?a+=i+"{"+r[s]+"}":hr(s)&&(a+=Ue(i)+":"+yr(i,s)+";")}else{if(i==="NO_COMPONENT_SELECTOR"&&mn)throw new Error(vn);if(Array.isArray(o)&&typeof o[0]=="string"&&(r==null||r[o[0]]===void 0))for(var f=0;f<o.length;f++)hr(o[f])&&(a+=Ue(i)+":"+yr(i,o[f])+";");else{var c=ae(e,r,o);switch(i){case"animation":case"animationName":{a+=Ue(i)+":"+c+";";break}default:a+=i+"{"+c+"}"}}}}return a}var vr=/label:\s*([^\s;{]+)\s*(;|$)/g,D;function cr(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,n="";D=void 0;var i=e[0];if(i==null||i.raw===void 0)a=!1,n+=ae(t,r,i);else{var o=i;n+=o[0]}for(var s=1;s<e.length;s++)if(n+=ae(t,r,e[s]),a){var f=i;n+=f[s]}vr.lastIndex=0;for(var c="",u;(u=vr.exec(n))!==null;)c+="-"+u[1];var l=dn(n)+c;return{name:l,styles:n,next:D}}var bn=function(r){return r()},$n=lr.useInsertionEffect?lr.useInsertionEffect:!1,ut=$n||bn,Ze=!1,lt=S.createContext(typeof HTMLElement<"u"?rn({key:"css"}):null);lt.Provider;var dt=function(r){return S.forwardRef(function(t,a){var n=S.useContext(lt);return r(t,n,a)})},pt=S.createContext({}),Te={}.hasOwnProperty,Je="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",mt=function(r,t){var a={};for(var n in t)Te.call(t,n)&&(a[n]=t[n]);return a[Je]=r,a},wn=function(r){var t=r.cache,a=r.serialized,n=r.isStringTag;return sr(t,a,n),ut(function(){return ct(t,a,n)}),null},xn=dt(function(e,r,t){var a=e.css;typeof a=="string"&&r.registered[a]!==void 0&&(a=r.registered[a]);var n=e[Je],i=[a],o="";typeof e.className=="string"?o=st(r.registered,i,e.className):e.className!=null&&(o=e.className+" ");var s=cr(i,void 0,S.useContext(pt));o+=r.key+"-"+s.name;var f={};for(var c in e)Te.call(e,c)&&c!=="css"&&c!==Je&&!Ze&&(f[c]=e[c]);return f.className=o,t&&(f.ref=t),S.createElement(S.Fragment,null,S.createElement(wn,{cache:r,serialized:s,isStringTag:typeof n=="string"}),S.createElement(n,f))}),ht=xn,Ge=function(r,t){var a=arguments;if(t==null||!Te.call(t,"css"))return S.createElement.apply(void 0,a);var n=a.length,i=new Array(n);i[0]=ht,i[1]=mt(r,t);for(var o=2;o<n;o++)i[o]=a[o];return S.createElement.apply(null,i)};function Ve(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return cr(r)}var $=function(){var r=Ve.apply(void 0,arguments),t="animation-"+r.name;return{name:t,styles:"@keyframes "+t+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},On=function e(r){for(var t=r.length,a=0,n="";a<t;a++){var i=r[a];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var s in i)i[s]&&s&&(o&&(o+=" "),o+=s)}break}default:o=i}o&&(n&&(n+=" "),n+=o)}}return n};function Cn(e,r,t){var a=[],n=st(e,a,t);return a.length<2?t:n+r(a)}var Sn=function(r){var t=r.cache,a=r.serializedArr;return ut(function(){for(var n=0;n<a.length;n++)ct(t,a[n],!1)}),null},Ke=dt(function(e,r){var t=!1,a=[],n=function(){if(t&&Ze)throw new Error("css can only be used during render");for(var c=arguments.length,u=new Array(c),l=0;l<c;l++)u[l]=arguments[l];var j=cr(u,r.registered);return a.push(j),sr(r,j,!1),r.key+"-"+j.name},i=function(){if(t&&Ze)throw new Error("cx can only be used during render");for(var c=arguments.length,u=new Array(c),l=0;l<c;l++)u[l]=arguments[l];return Cn(r.registered,n,On(u))},o={css:n,cx:i,theme:S.useContext(pt)},s=e.children(o);return t=!0,S.createElement(S.Fragment,null,S.createElement(Sn,{cache:r,serializedArr:a}),s)});function Qe(){return Qe=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Qe.apply(this,arguments)}function _n(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,Xe(e,r)}function Xe(e,r){return Xe=Object.setPrototypeOf||function(a,n){return a.__proto__=n,a},Xe(e,r)}function En(e,r){if(e==null)return{};var t={},a=Object.keys(e),n,i;for(i=0;i<a.length;i++)n=a[i],!(r.indexOf(n)>=0)&&(t[n]=e[n]);return t}var er=new Map,ve=new WeakMap,gr=0,kn=void 0;function jn(e){return e?(ve.has(e)||(gr+=1,ve.set(e,gr.toString())),ve.get(e)):"0"}function In(e){return Object.keys(e).sort().filter(function(r){return e[r]!==void 0}).map(function(r){return r+"_"+(r==="root"?jn(e.root):e[r])}).toString()}function Rn(e){var r=In(e),t=er.get(r);if(!t){var a=new Map,n,i=new IntersectionObserver(function(o){o.forEach(function(s){var f,c=s.isIntersecting&&n.some(function(u){return s.intersectionRatio>=u});e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(f=a.get(s.target))==null||f.forEach(function(u){u(c,s)})})},e);n=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:r,observer:i,elements:a},er.set(r,t)}return t}function An(e,r,t,a){if(t===void 0&&(t={}),a===void 0&&(a=kn),typeof window.IntersectionObserver>"u"&&a!==void 0){var n=e.getBoundingClientRect();return r(a,{isIntersecting:a,target:e,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),function(){}}var i=Rn(t),o=i.id,s=i.observer,f=i.elements,c=f.get(e)||[];return f.has(e)||f.set(e,c),c.push(r),s.observe(e),function(){c.splice(c.indexOf(r),1),c.length===0&&(f.delete(e),s.unobserve(e)),f.size===0&&(s.disconnect(),er.delete(o))}}var Nn=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function br(e){return typeof e.children!="function"}var Y=function(e){_n(r,e);function r(a){var n;return n=e.call(this,a)||this,n.node=null,n._unobserveCb=null,n.handleNode=function(i){n.node&&(n.unobserve(),!i&&!n.props.triggerOnce&&!n.props.skip&&n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=i||null,n.observeNode()},n.handleChange=function(i,o){i&&n.props.triggerOnce&&n.unobserve(),br(n.props)||n.setState({inView:i,entry:o}),n.props.onChange&&n.props.onChange(i,o)},n.state={inView:!!a.initialInView,entry:void 0},n}var t=r.prototype;return t.componentDidUpdate=function(n){(n.rootMargin!==this.props.rootMargin||n.root!==this.props.root||n.threshold!==this.props.threshold||n.skip!==this.props.skip||n.trackVisibility!==this.props.trackVisibility||n.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},t.componentWillUnmount=function(){this.unobserve(),this.node=null},t.observeNode=function(){if(!(!this.node||this.props.skip)){var n=this.props,i=n.threshold,o=n.root,s=n.rootMargin,f=n.trackVisibility,c=n.delay,u=n.fallbackInView;this._unobserveCb=An(this.node,this.handleChange,{threshold:i,root:o,rootMargin:s,trackVisibility:f,delay:c},u)}},t.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},t.render=function(){if(!br(this.props)){var n=this.state,i=n.inView,o=n.entry;return this.props.children({inView:i,entry:o,ref:this.handleNode})}var s=this.props,f=s.children,c=s.as,u=En(s,Nn);return S.createElement(c||"div",Qe({ref:this.handleNode},u),f)},r}(S.Component);Y.displayName="InView";Y.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var yt={exports:{}},g={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe=60103,Le=60106,oe=60107,se=60108,ce=60114,fe=60109,ue=60110,le=60112,de=60113,fr=60120,pe=60115,me=60116,vt=60121,gt=60122,bt=60117,$t=60129,wt=60131;if(typeof Symbol=="function"&&Symbol.for){var E=Symbol.for;Fe=E("react.element"),Le=E("react.portal"),oe=E("react.fragment"),se=E("react.strict_mode"),ce=E("react.profiler"),fe=E("react.provider"),ue=E("react.context"),le=E("react.forward_ref"),de=E("react.suspense"),fr=E("react.suspense_list"),pe=E("react.memo"),me=E("react.lazy"),vt=E("react.block"),gt=E("react.server.block"),bt=E("react.fundamental"),$t=E("react.debug_trace_mode"),wt=E("react.legacy_hidden")}function z(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case Fe:switch(e=e.type,e){case oe:case ce:case se:case de:case fr:return e;default:switch(e=e&&e.$$typeof,e){case ue:case le:case me:case pe:case fe:return e;default:return r}}case Le:return r}}}var Mn=fe,Pn=Fe,Tn=le,Vn=oe,Fn=me,Ln=pe,zn=Le,Bn=ce,Wn=se,Dn=de;g.ContextConsumer=ue;g.ContextProvider=Mn;g.Element=Pn;g.ForwardRef=Tn;g.Fragment=Vn;g.Lazy=Fn;g.Memo=Ln;g.Portal=zn;g.Profiler=Bn;g.StrictMode=Wn;g.Suspense=Dn;g.isAsyncMode=function(){return!1};g.isConcurrentMode=function(){return!1};g.isContextConsumer=function(e){return z(e)===ue};g.isContextProvider=function(e){return z(e)===fe};g.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fe};g.isForwardRef=function(e){return z(e)===le};g.isFragment=function(e){return z(e)===oe};g.isLazy=function(e){return z(e)===me};g.isMemo=function(e){return z(e)===pe};g.isPortal=function(e){return z(e)===Le};g.isProfiler=function(e){return z(e)===ce};g.isStrictMode=function(e){return z(e)===se};g.isSuspense=function(e){return z(e)===de};g.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===oe||e===ce||e===$t||e===se||e===de||e===fr||e===wt||typeof e=="object"&&e!==null&&(e.$$typeof===me||e.$$typeof===pe||e.$$typeof===fe||e.$$typeof===ue||e.$$typeof===le||e.$$typeof===bt||e.$$typeof===vt||e[0]===gt)};g.typeOf=z;yt.exports=g;var Un=yt.exports,Gn=J.Fragment;function M(e,r,t){return Te.call(r,"css")?J.jsx(ht,mt(e,r),t):J.jsx(e,r,t)}function K(){return K=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},K.apply(this,arguments)}function Kn(e,r){if(e==null)return{};var t={},a=Object.keys(e),n,i;for(i=0;i<a.length;i++)n=a[i],!(r.indexOf(n)>=0)&&(t[n]=e[n]);return t}function y(e,r){return r||(r=e.slice(0)),e.raw=r,e}var $r,ur=$($r||($r=y([`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),wr;function qe(e){var r=e.duration,t=r===void 0?1e3:r,a=e.delay,n=a===void 0?0:a,i=e.timingFunction,o=i===void 0?"ease":i,s=e.keyframes,f=s===void 0?ur:s,c=e.iterationCount,u=c===void 0?1:c;return Ve(wr||(wr=y([`
    animation-duration: `,`ms;
    animation-timing-function: `,`;
    animation-delay: `,`ms;
    animation-name: `,`;
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: `,`;
  `])),t,o,n,f,u)}function qn(e){return e==null}function Hn(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}var xr,Or,ge=Ve(xr||(xr=y([`
  opacity: 0;
`]))),Yn=Ve(Or||(Or=y([`
  display: inline-block;
  white-space: pre;
`]))),Zn=function e(r){var t=r.cascade,a=t===void 0?!1:t,n=r.damping,i=n===void 0?.5:n,o=r.delay,s=o===void 0?0:o,f=r.duration,c=f===void 0?1e3:f,u=r.fraction,l=u===void 0?0:u,j=r.keyframes,P=j===void 0?ur:j,I=r.triggerOnce,m=I===void 0?!1:I,x=r.css,b=r.className,w=r.style,A=r.childClassName,G=r.childStyle,T=r.children,N=r.onVisibilityChange;if(qn(T))return null;if(Hn(T)){var v=String(T);return a?M(Y,{threshold:l,triggerOnce:m,onChange:N,children:function(q){var O=q.inView,H=q.ref;return M("div",{ref:H,css:[x,Yn],className:b,style:w,children:v.split("").map(function(he,B){return M("span",{css:O?qe({keyframes:P,delay:s+B*c*i,duration:c}):ge,className:A,style:G,children:he},B)})})}}):M(e,{delay:s,duration:c,fraction:l,keyframes:P,triggerOnce:m,css:x,className:b,style:w,children:v})}return Un.isFragment(T)?M(Y,{threshold:l,triggerOnce:m,onChange:N,children:function(q){var O=q.inView,H=q.ref;return M("div",{ref:H,css:O?[x,qe({keyframes:P,delay:s,duration:c})]:ge,className:b,style:w,children:T})}}):M(Gn,{children:S.Children.map(T,function(ze,q){var O=ze,H=O.props.css?[O.props.css]:[];switch(H.push(qe({keyframes:P,delay:s+(a?q*c*i:0),duration:c})),O.type){case"ol":case"ul":return M(Ke,{children:function(B){var ee=B.cx;return Ge(O.type,K({},O.props,{className:ee(b,O.props.className),style:K({},w,O.props.style)}),M(e,{cascade:a,damping:i,delay:s,duration:c,fraction:l,keyframes:P,triggerOnce:m,css:x,childClassName:A,childStyle:G,children:O.props.children}))}});case"li":return M(Y,{threshold:l,triggerOnce:m,onChange:N,children:function(B){var ee=B.inView,Be=B.ref;return M(Ke,{children:function(We){var De=We.cx;return Ge(O.type,K({},O.props,{ref:Be,css:ee?[x].concat(H):ge,className:De(A,O.props.className),style:K({},G,O.props.style)}))}})}});default:return M(Y,{threshold:l,triggerOnce:m,onChange:N,children:function(B){var ee=B.inView,Be=B.ref;return M("div",{ref:Be,css:ee?[x].concat(H):ge,className:b,style:w,children:M(Ke,{children:function(We){var De=We.cx;return Ge(O.type,K({},O.props,{className:De(A,O.props.className),style:K({},G,O.props.style)}))}})})}})}})})},Cr,Jn=$(Cr||(Cr=y([`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`]))),Sr,Qn=$(Sr||(Sr=y([`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),_r,Xn=$(_r||(_r=y([`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),Er,ea=$(Er||(Er=y([`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),kr,ra=$(kr||(kr=y([`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),jr,ta=$(jr||(jr=y([`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),Ir,na=$(Ir||(Ir=y([`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),Rr,aa=$(Rr||(Rr=y([`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),Ar,ia=$(Ar||(Ar=y([`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),Nr,oa=$(Nr||(Nr=y([`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),Mr,sa=$(Mr||(Mr=y([`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),Pr,ca=$(Pr||(Pr=y([`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`]))),Tr,fa=$(Tr||(Tr=y([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`]))),Vr,ua=$(Vr||(Vr=y([`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`]))),Fr,la=$(Fr||(Fr=y([`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`]))),Lr,da=$(Lr||(Lr=y([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`]))),zr,pa=$(zr||(zr=y([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`]))),Br,ma=$(Br||(Br=y([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`]))),Wr,ha=$(Wr||(Wr=y([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`]))),Dr,ya=$(Dr||(Dr=y([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`]))),Ur,va=$(Ur||(Ur=y([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`]))),Gr,ga=$(Gr||(Gr=y([`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`]))),Kr,ba=$(Kr||(Kr=y([`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`]))),qr,$a=$(qr||(qr=y([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`]))),Hr,wa=$(Hr||(Hr=y([`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`]))),xa=["big","direction","reverse"];function Oa(e,r,t){switch(t){case"bottom-left":return r?ua:Qn;case"bottom-right":return r?la:Xn;case"down":return e?r?pa:ra:r?da:ea;case"left":return e?r?ha:ta:r?ma:ur;case"right":return e?r?va:aa:r?ya:na;case"top-left":return r?ga:ia;case"top-right":return r?ba:oa;case"up":return e?r?wa:ca:r?$a:sa;default:return r?fa:Jn}}var Ca=function(r){var t=r.big,a=t===void 0?!1:t,n=r.direction,i=r.reverse,o=i===void 0?!1:i,s=Kn(r,xa);return M(Zn,K({keyframes:Oa(a,o,n)},s))};const Ea=({children:e})=>{const r=Ca;return J.jsx(r,{triggerOnce:!0,duration:1e3,children:e})};export{Ea as F,_a as T};
