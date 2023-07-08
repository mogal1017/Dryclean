
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(){return we||"undefined"!=typeof window&&(we=window.gsap)&&we.registerPlugin&&we}function y(e,t){return~Fe.indexOf(e)&&Fe[Fe.indexOf(e)+1][t]}function z(e){return!!~t.indexOf(e)}function A(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function B(e,t,r,n){return e.removeEventListener(t,r,!!n)}function E(){return Be&&Be.isPressed||k.cache++}function F(r,n){function Qc(e){if(e||0===e){o&&(Ae.history.scrollRestoration="manual");var t=Be&&Be.isPressed;e=Qc.v=Math.round(e)||(Be&&Be.iOS?1:0),r(e),Qc.cacheID=k.cache,t&&i("ss",e)}else(n||k.cache!==Qc.cacheID||i("ref"))&&(Qc.cacheID=k.cache,Qc.v=r());return Qc.v+Qc.offset}return Qc.offset=0,r&&Qc}function I(e){return we.utils.toArray(e)[0]||("string"==typeof e&&!1!==we.config().nullTargetWarn?console.warn("Element not found:",e):null)}function J(t,e){var r=e.s,n=e.sc;z(t)&&(t=Ee.scrollingElement||Me);var o=k.indexOf(t),i=n===Je.sc?1:2;~o||(o=k.push(t)-1),k[o+i]||t.addEventListener("scroll",E);var a=k[o+i],s=a||(k[o+i]=F(y(t,r),!0)||(z(t)?n:F(function(e){return arguments.length?t[r]=e:t[r]})));return s.target=t,a||(s.smooth="smooth"===we.getProperty(t,"scrollBehavior")),s}function K(e,t,o){function md(e,t){var r=Ke();t||n<r-s?(a=i,i=e,l=s,s=r):o?i+=e:i=a+(e-a)/(r-l)*(s-l)}var i=e,a=e,s=Ke(),l=s,n=t||50,c=Math.max(500,3*n);return{update:md,reset:function reset(){a=i=o?0:i,l=s=0},getVelocity:function getVelocity(e){var t=l,r=a,n=Ke();return!e&&0!==e||e===i||md(e),s===l||c<n-l?0:(i+(o?r:-r))/((o?n:s)-t)*1e3}}}function L(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e}function M(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r}function N(){(De=we.core.globals().ScrollTrigger)&&De.core&&function _integrate(){var e=De.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,k),n.push.apply(n,Fe),k=t,Fe=n,i=function _bridge(e,t){return r[e](t)}}()}function O(e){return(we=e||q())&&"undefined"!=typeof document&&document.body&&(Ae=window,Me=(Ee=document).documentElement,Ce=Ee.body,t=[Ae,Ee,Me,Ce],we.utils.clamp,Ie="onpointerenter"in Ce?"pointer":"mouse",Pe=C.isTouch=Ae.matchMedia&&Ae.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ae||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?2:0,ze=C.eventTypes=("ontouchstart"in Me?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Me?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return o=0},500),N(),ke=1),ke}var we,ke,Ae,Ee,Me,Ce,Pe,Ie,De,t,Be,ze,o=1,Le=[],k=[],Fe=[],Ke=Date.now,i=function _bridge(e,t){return t},r="scrollLeft",n="scrollTop",He={s:r,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:F(function(e){return arguments.length?Ae.scrollTo(e,Je.sc()):Ae.pageXOffset||Ee[r]||Me[r]||Ce[r]||0})},Je={s:n,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:He,sc:F(function(e){return arguments.length?Ae.scrollTo(He.sc(),e):Ae.pageYOffset||Ee[n]||Me[n]||Ce[n]||0})};He.op=Je,k.cache=0;var C=(Observer.prototype.init=function init(e){ke||O(we)||console.warn("Please gsap.registerPlugin(Observer)"),De||N();var o=e.tolerance,a=e.dragMinimum,t=e.type,n=e.target,r=e.lineHeight,i=e.debounce,s=e.preventDefault,l=e.onStop,c=e.onStopDelay,u=e.ignore,f=e.wheelSpeed,d=e.event,p=e.onDragStart,g=e.onDragEnd,h=e.onDrag,v=e.onPress,b=e.onRelease,m=e.onRight,y=e.onLeft,x=e.onUp,w=e.onDown,_=e.onChangeX,S=e.onChangeY,T=e.onChange,k=e.onToggleX,C=e.onToggleY,P=e.onHover,D=e.onHoverEnd,R=e.onMove,Y=e.ignoreCheck,F=e.isNormalizer,X=e.onGestureStart,H=e.onGestureEnd,V=e.onWheel,W=e.onEnable,q=e.onDisable,j=e.onClick,Q=e.scrollSpeed,G=e.capture,U=e.allowClicks,Z=e.lockAxis,$=e.onLockAxis;function Ne(){return ye=Ke()}function Oe(e,t){return(se.event=e)&&u&&~u.indexOf(e.target)||t&&ge&&"touch"!==e.pointerType||Y&&Y(e,t)}function Qe(){var e=se.deltaX=M(be),t=se.deltaY=M(me),r=Math.abs(e)>=o,n=Math.abs(t)>=o;T&&(r||n)&&T(se,e,t,be,me),r&&(m&&0<se.deltaX&&m(se),y&&se.deltaX<0&&y(se),_&&_(se),k&&se.deltaX<0!=le<0&&k(se),le=se.deltaX,be[0]=be[1]=be[2]=0),n&&(w&&0<se.deltaY&&w(se),x&&se.deltaY<0&&x(se),S&&S(se),C&&se.deltaY<0!=ce<0&&C(se),ce=se.deltaY,me[0]=me[1]=me[2]=0),(ne||re)&&(R&&R(se),re&&(h(se),re=!1),ne=!1),ie&&!(ie=!1)&&$&&$(se),oe&&(V(se),oe=!1),ee=0}function Re(e,t,r){be[r]+=e,me[r]+=t,se._vx.update(e),se._vy.update(t),i?ee=ee||requestAnimationFrame(Qe):Qe()}function Se(e,t){Z&&!ae&&(se.axis=ae=Math.abs(e)>Math.abs(t)?"x":"y",ie=!0),"y"!==ae&&(be[2]+=e,se._vx.update(e,!0)),"x"!==ae&&(me[2]+=t,se._vy.update(t,!0)),i?ee=ee||requestAnimationFrame(Qe):Qe()}function Te(e){if(!Oe(e,1)){var t=(e=L(e,s)).clientX,r=e.clientY,n=t-se.x,o=r-se.y,i=se.isDragging;se.x=t,se.y=r,(i||Math.abs(se.startX-t)>=a||Math.abs(se.startY-r)>=a)&&(h&&(re=!0),i||(se.isDragging=!0),Se(n,o),i||p&&p(se))}}function Ve(t){if(!Oe(t,1)){B(F?n:ve,ze[1],Te,!0);var e=se.isDragging&&(3<Math.abs(se.x-se.startX)||3<Math.abs(se.y-se.startY)),r=L(t);e||(se._vx.reset(),se._vy.reset(),s&&U&&we.delayedCall(.08,function(){if(300<Ke()-ye&&!t.defaultPrevented)if(t.target.click)t.target.click();else if(ve.createEvent){var e=ve.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,Ae,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}})),se.isDragging=se.isGesturing=se.isPressed=!1,l&&!F&&te.restart(!0),g&&e&&g(se),b&&b(se,e)}}function We(e){return e.touches&&1<e.touches.length&&(se.isGesturing=!0)&&X(e,se.isDragging)}function Xe(){return(se.isGesturing=!1)||H(se)}function Ye(e){if(!Oe(e)){var t=ue(),r=fe();Re((t-de)*Q,(r-pe)*Q,1),de=t,pe=r,l&&te.restart(!0)}}function Ze(e){if(!Oe(e)){e=L(e,s),V&&(oe=!0);var t=(1===e.deltaMode?r:2===e.deltaMode?Ae.innerHeight:1)*f;Re(e.deltaX*t,e.deltaY*t,0),l&&!F&&te.restart(!0)}}function $e(e){if(!Oe(e)){var t=e.clientX,r=e.clientY,n=t-se.x,o=r-se.y;se.x=t,se.y=r,ne=!0,(n||o)&&Se(n,o)}}function _e(e){se.event=e,P(se)}function af(e){se.event=e,D(se)}function bf(e){return Oe(e)||L(e,s)&&j(se)}this.target=n=I(n)||Me,this.vars=e,u=u&&we.utils.toArray(u),o=o||1e-9,a=a||0,f=f||1,Q=Q||1,t=t||"wheel,touch,pointer",i=!1!==i,r=r||parseFloat(Ae.getComputedStyle(Ce).lineHeight)||22;var ee,te,re,ne,oe,ie,ae,se=this,le=0,ce=0,ue=J(n,He),fe=J(n,Je),de=ue(),pe=fe(),ge=~t.indexOf("touch")&&!~t.indexOf("pointer")&&"pointerdown"===ze[0],he=z(n),ve=n.ownerDocument||Ee,be=[0,0,0],me=[0,0,0],ye=0,xe=se.onPress=function(e){Oe(e,1)||(se.axis=ae=null,te.pause(),se.isPressed=!0,e=L(e),le=ce=0,se.startX=se.x=e.clientX,se.startY=se.y=e.clientY,se._vx.reset(),se._vy.reset(),A(F?n:ve,ze[1],Te,s,!0),se.deltaX=se.deltaY=0,v&&v(se))};te=se._dc=we.delayedCall(c||.25,function onStopFunc(){se._vx.reset(),se._vy.reset(),te.pause(),l&&l(se)}).pause(),se.deltaX=se.deltaY=0,se._vx=K(0,50,!0),se._vy=K(0,50,!0),se.scrollX=ue,se.scrollY=fe,se.isDragging=se.isGesturing=se.isPressed=!1,se.enable=function(e){return se.isEnabled||(A(he?ve:n,"scroll",E),0<=t.indexOf("scroll")&&A(he?ve:n,"scroll",Ye,s,G),0<=t.indexOf("wheel")&&A(n,"wheel",Ze,s,G),(0<=t.indexOf("touch")&&Pe||0<=t.indexOf("pointer"))&&(A(n,ze[0],xe,s,G),A(ve,ze[2],Ve),A(ve,ze[3],Ve),U&&A(n,"click",Ne,!1,!0),j&&A(n,"click",bf),X&&A(ve,"gesturestart",We),H&&A(ve,"gestureend",Xe),P&&A(n,Ie+"enter",_e),D&&A(n,Ie+"leave",af),R&&A(n,Ie+"move",$e)),se.isEnabled=!0,e&&e.type&&xe(e),W&&W(se)),se},se.disable=function(){se.isEnabled&&(Le.filter(function(e){return e!==se&&z(e.target)}).length||B(he?ve:n,"scroll",E),se.isPressed&&(se._vx.reset(),se._vy.reset(),B(F?n:ve,ze[1],Te,!0)),B(he?ve:n,"scroll",Ye,G),B(n,"wheel",Ze,G),B(n,ze[0],xe,G),B(ve,ze[2],Ve),B(ve,ze[3],Ve),B(n,"click",Ne,!0),B(n,"click",bf),B(ve,"gesturestart",We),B(ve,"gestureend",Xe),B(n,Ie+"enter",_e),B(n,Ie+"leave",af),B(n,Ie+"move",$e),se.isEnabled=se.isPressed=se.isDragging=!1,q&&q(se))},se.kill=function(){se.disable();var e=Le.indexOf(se);0<=e&&Le.splice(e,1),Be===se&&(Be=0)},Le.push(se),F&&z(n)&&(Be=se),se.enable(d)},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Observer,[{key:"velocityX",get:function get(){return this._vx.getVelocity()}},{key:"velocityY",get:function get(){return this._vy.getVelocity()}}]),Observer);function Observer(e){this.init(e)}C.version="3.11.2",C.create=function(e){return new C(e)},C.register=O,C.getAll=function(){return Le.slice()},C.getById=function(t){return Le.filter(function(e){return e.vars.id===t})[0]},q()&&we.registerPlugin(C);function xa(){return it=1}function ya(){return it=0}function za(e){return e}function Aa(e){return Math.round(1e5*e)/1e5||0}function Ba(){return"undefined"!=typeof window}function Ca(){return qe||Ba()&&(qe=window.gsap)&&qe.registerPlugin&&qe}function Da(e){return!!~s.indexOf(e)}function Ea(e){return y(e,"getBoundingClientRect")||(Da(e)?function(){return zt.width=je.innerWidth,zt.height=je.innerHeight,zt}:function(){return Mt(e)})}function Ha(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return(r="scroll"+n)&&(i=y(e,r))?i()-Ea(e)()[o]:Da(e)?(Ue[r]||et[r])-(je["inner"+n]||Ue["client"+n]||et["client"+n]):e[r]-e["offset"+n]}function Ia(e,t){for(var r=0;r<p.length;r+=3)t&&!~t.indexOf(p[r+1])||e(p[r],p[r+1],p[r+2])}function Ja(e){return"string"==typeof e}function Ka(e){return"function"==typeof e}function La(e){return"number"==typeof e}function Ma(e){return"object"==typeof e}function Na(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()}function Oa(e,t){if(e.enabled){var r=t(e);r&&r.totalTime&&(e.callbackAnimation=r)}}function db(e){return je.getComputedStyle(e)}function fb(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function hb(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function ib(e){var t,r=[],n=e.labels,o=e.duration();for(t in n)r.push(n[t]/o);return r}function kb(o){var i=qe.utils.snap(o),a=Array.isArray(o)&&o.slice(0).sort(function(e,t){return e-t});return a?function(e,t,r){var n;if(void 0===r&&(r=.001),!t)return i(e);if(0<t){for(e-=r,n=0;n<a.length;n++)if(a[n]>=e)return a[n];return a[n-1]}for(n=a.length,e+=r;n--;)if(a[n]<=e)return a[n];return a[0]}:function(e,t,r){void 0===r&&(r=.001);var n=i(e);return!t||Math.abs(n-e)<r||n-e<0==t<0?n:i(t<0?e-o:e+o)}}function mb(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function nb(e,t,r,n,o){return e.addEventListener(t,r,{passive:!n,capture:!!o})}function ob(e,t,r,n){return e.removeEventListener(t,r,!!n)}function pb(e,t,r){return r&&r.wheelHandler&&e(t,"wheel",r)}function tb(e,t){if(Ja(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in R?R[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function ub(e,t,r,n,o,i,a,s){var l=o.startColor,c=o.endColor,u=o.fontSize,f=o.indent,d=o.fontWeight,p=Ge.createElement("div"),g=Da(r)||"fixed"===y(r,"pinType"),h=-1!==e.indexOf("scroller"),v=g?et:r,b=-1!==e.indexOf("start"),m=b?l:c,x="border-color:"+m+";font-size:"+u+";color:"+m+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((h||s)&&g?"fixed;":"absolute;"),!h&&!s&&g||(x+=(n===Je?S:T)+":"+(i+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=b,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=x,p.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(p,v.children[0]):v.appendChild(p),p._offset=p["offset"+n.op.d2],Y(p,0,n,b),p}function zb(){return 34<gt()-ht&&U()}function Ab(){h&&h.isPressed&&!(h.startX>et.clientWidth)||(k.cache++,w=w||requestAnimationFrame(U),ht||V("scrollStart"),ht=gt())}function Bb(){m=je.innerWidth,b=je.innerHeight}function Cb(){k.cache++,ot||g||Ge.fullscreenElement||Ge.webkitFullscreenElement||v&&m===je.innerWidth&&!(Math.abs(je.innerHeight-b)>.25*je.innerHeight)||l.restart(!0)}function Fb(){return ob(re,"scrollEnd",Fb)||Q(!0)}function Ib(e){for(var t=0;t<W.length;t+=5)(!e||W[t+4]&&W[t+4].query===e)&&(W[t].style.cssText=W[t+1],W[t].getBBox&&W[t].setAttribute("transform",W[t+2]||""),W[t+3].uncache=1)}function Jb(e,t){var r;for(at=0;at<Pt.length;at++)!(r=Pt[at])||t&&r._ctx!==t||(e?r.kill(1):r.revert(!0,!0));t&&Ib(t),t||V("revert")}function Kb(e,t){k.cache++,!t&&ft||k.forEach(function(e){return Ka(e)&&e.cacheID++&&(e.rec=0)}),Ja(e)&&(je.history.scrollRestoration=x=e)}function Vb(e,t,r,n){if(!e._gsap.swappedIn){for(var o,i=Z.length,a=t.style,s=e.style;i--;)a[o=Z[i]]=r[o];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[T]=s[S]="auto",a.flexBasis=r.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[mt]=hb(e,He)+Et,a[yt]=hb(e,Je)+Et,a[Tt]=s[kt]=s.top=s.left="0",Bt(n),s[mt]=s.maxWidth=r[mt],s[yt]=s.maxHeight=r[yt],s[Tt]=r[Tt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}}function Yb(e){for(var t=$.length,r=e.style,n=[],o=0;o<t;o++)n.push($[o],r[$[o]]);return n.t=e,n}function _b(e,t,r,n,o,i,a,s,l,c,u,f,d){Ka(e)&&(e=e(s)),Ja(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?tb("0"+e.substr(3),r):0));var p,g,h,v=d?d.time():0;if(d&&d.seek(0),La(e))a&&Y(a,r,n,!0);else{Ka(t)&&(t=t(s));var b,m,y,x,w=(e||"0").split(" ");h=I(t)||et,(b=Mt(h)||{})&&(b.left||b.top)||"none"!==db(h).display||(x=h.style.display,h.style.display="block",b=Mt(h),x?h.style.display=x:h.style.removeProperty("display")),m=tb(w[0],b[n.d]),y=tb(w[1]||"0",r),e=b[n.p]-l[n.p]-c+m+o-y,a&&Y(a,y,n,r-y<20||a._isStart&&20<y),r-=r-y}if(i){var _=e+r,S=i._isStart;p="scroll"+n.d2,Y(i,_,n,S&&20<_||!S&&(u?Math.max(et[p],Ue[p]):i.parentNode[p])<=_+1),u&&(l=Mt(a),u&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+Et))}return d&&h&&(p=Mt(h),d.seek(f),g=Mt(h),d._caScrollDist=p[n.p]-g[n.p],e=e/d._caScrollDist*f),d&&d.seek(v),d?e:Math.round(e)}function bc(e,t,r,n){if(e.parentNode!==t){var o,i,a=e.style;if(t===et){for(o in e._stOrig=a.cssText,i=db(e))+o||te.test(o)||!i[o]||"string"!=typeof a[o]||"0"===o||(a[o]=i[o]);a.top=r,a.left=n}else a.cssText=e._stOrig;qe.core.getCache(e).uncache=1,t.appendChild(e)}}function cc(l,e){function Kj(e,t,r,n,o){var i=Kj.tween,a=t.onComplete,s={};return r=r||f(),o=n&&o||0,n=n||e-r,i&&i.kill(),c=Math.round(r),t[d]=e,(t.modifiers=s)[d]=function(e){return(e=Math.round(f()))!==c&&e!==u&&3<Math.abs(e-c)&&3<Math.abs(e-u)?(i.kill(),Kj.tween=0):e=r+n*i.ratio+o*i.ratio*i.ratio,u=c,c=Math.round(e)},t.onComplete=function(){Kj.tween=0,a&&a.call(i)},i=Kj.tween=qe.to(l,t)}var c,u,f=J(l,e),d="_scroll"+e.p2;return(l[d]=f).wheelHandler=function(){return Kj.tween&&Kj.tween.kill()&&(Kj.tween=0)},nb(l,"wheel",f.wheelHandler),Kj}var qe,a,je,Ge,Ue,et,s,l,tt,rt,nt,c,ot,it,u,at,f,d,p,st,lt,g,h,v,b,m,P,ct,x,ut,w,ft,dt,pt=1,gt=Date.now,_=gt(),ht=0,vt=0,bt=Math.abs,S="right",T="bottom",mt="width",yt="height",xt="Right",wt="Left",_t="Top",St="Bottom",Tt="padding",kt="margin",At="Width",D="Height",Et="px",Mt=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==db(e)[u]&&qe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},Ot={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ct={toggleActions:"play",anticipatePin:0},R={top:0,left:0,center:.5,bottom:1,right:1},Y=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?"1px":0,o["border"+i+At]=1,o["border"+a+At]=0,o[r.p]=t+"px",qe.set(e,o)},Pt=[],It={},X={},H=[],V=function _dispatch(e){return X[e]&&X[e].map(function(e){return e()})||H},W=[],j=0,Q=function _refreshAll(e,t){if(!ht||e){ft=re.isRefreshing=!0,k.forEach(function(e){return Ka(e)&&e.cacheID++&&(e.rec=e())});var r=V("refreshInit");st&&re.sort(),t||Jb(),k.forEach(function(e){Ka(e)&&(e.smooth&&(e.target.style.scrollBehavior="auto"),e(0))}),Pt.slice(0).forEach(function(e){return e.refresh()}),Pt.forEach(function(e){return"max"===e.vars.end&&e.setPositions(e.start,Math.max(e.start+1,Ha(e.scroller,e._dir)))}),r.forEach(function(e){return e&&e.render&&e.render(-1)}),k.forEach(function(e){Ka(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior="smooth"}),e.rec&&e(e.rec))}),Kb(x,1),l.pause(),j++,U(2),ft=re.isRefreshing=!1,V("refresh")}else nb(re,"scrollEnd",Fb)},G=0,Dt=1,U=function _updateAll(e){if(!ft||2===e){re.isUpdating=!0,dt&&dt.update(0);var t=Pt.length,r=gt(),n=50<=r-_,o=t&&Pt[0].scroll();if(Dt=o<G?-1:1,G=o,n&&(ht&&!it&&200<r-ht&&(ht=0,V("scrollEnd")),nt=_,_=r),Dt<0){for(at=t;0<at--;)Pt[at]&&Pt[at].update(0,n);Dt=1}else for(at=0;at<t;at++)Pt[at]&&Pt[at].update(0,n);re.isUpdating=!1}w=0},Z=["left","top",T,S,kt+St,kt+xt,kt+_t,kt+wt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$=Z.concat([mt,yt,"boxSizing","max"+At,"max"+D,"position",kt,Tt,Tt+_t,Tt+xt,Tt+St,Tt+wt]),ee=/([A-Z])/g,Bt=function _setState(e){if(e){var t,r,n=e.t.style,o=e.length,i=0;for((e.t._gsap||qe.core.getCache(e.t)).uncache=1;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(ee,"-$1").toLowerCase())}},zt={left:0,top:0},te=/(webkit|moz|length|cssText|inset)/i,re=(ScrollTrigger.prototype.init=function init(S,T){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),vt){var k,n,p,A,E,M,O,C,P,D,B,e,z,R,Y,L,F,t,X,b,K,N,m,H,x,w,r,_,V,W,o,g,q,j,Q,G,U,i,Z=(S=fb(Ja(S)||La(S)||S.nodeType?{trigger:S}:S,Ct)).onUpdate,$=S.toggleClass,a=S.id,ee=S.onToggle,te=S.onRefresh,re=S.scrub,ne=S.trigger,oe=S.pin,ie=S.pinSpacing,ae=S.invalidateOnRefresh,se=S.anticipatePin,s=S.onScrubComplete,h=S.onSnapComplete,le=S.once,ce=S.snap,ue=S.pinReparent,l=S.pinSpacer,fe=S.containerAnimation,de=S.fastScrollEnd,pe=S.preventOverlaps,ge=S.horizontal||S.containerAnimation&&!1!==S.horizontal?He:Je,he=!re&&0!==re,ve=I(S.scroller||je),c=qe.core.getCache(ve),be=Da(ve),me="fixed"===("pinType"in S?S.pinType:y(ve,"pinType")||be&&"fixed"),ye=[S.onEnter,S.onLeave,S.onEnterBack,S.onLeaveBack],xe=he&&S.toggleActions.split(" "),u="markers"in S?S.markers:Ct.markers,we=be?0:parseFloat(db(ve)["border"+ge.p2+At])||0,_e=this,Se=S.onRefreshInit&&function(){return S.onRefreshInit(_e)},Te=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=y(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?je["inner"+o]:e["client"+o])||0}}(ve,be,ge),ke=function _getOffsetsFunc(e,t){return!t||~Fe.indexOf(e)?Ea(e):function(){return zt}}(ve,be),Ae=0,Ee=0,Me=J(ve,ge);if(ct(_e),_e._dir=ge,se*=45,_e.scroller=ve,_e.scroll=fe?fe.time.bind(fe):Me,A=Me(),_e.vars=S,T=T||S.animation,"refreshPriority"in S&&(st=1,-9999===S.refreshPriority&&(dt=_e)),c.tweenScroll=c.tweenScroll||{top:cc(ve,Je),left:cc(ve,He)},_e.tweenTo=k=c.tweenScroll[ge.p],_e.scrubDuration=function(e){(o=La(e)&&e)?W?W.duration(e):W=qe.to(T,{ease:"expo",totalProgress:"+=0.001",duration:o,paused:!0,onComplete:function onComplete(){return s&&s(_e)}}):(W&&W.progress(1).kill(),W=0)},T&&(T.vars.lazy=!1,T._initted||!1!==T.vars.immediateRender&&!1!==S.immediateRender&&T.duration()&&T.render(0,!0,!0),_e.animation=T.pause(),(T.scrollTrigger=_e).scrubDuration(re),_=0,a=a||T.vars.id),Pt.push(_e),ce&&(Ma(ce)&&!ce.push||(ce={snapTo:ce}),"scrollBehavior"in et.style&&qe.set(be?[et,Ue]:ve,{scrollBehavior:"auto"}),p=Ka(ce.snapTo)?ce.snapTo:"labels"===ce.snapTo?function _getClosestLabel(t){return function(e){return qe.utils.snap(ib(t),e)}}(T):"labelsDirectional"===ce.snapTo?function _getLabelAtDirection(r){return function(e,t){return kb(ib(r))(e,t.direction)}}(T):!1!==ce.directional?function(e,t){return kb(ce.snapTo)(e,gt()-Ee<500?0:t.direction)}:qe.utils.snap(ce.snapTo),g=ce.duration||{min:.1,max:2},g=Ma(g)?rt(g.min,g.max):rt(g,g),q=qe.delayedCall(ce.delay||o/2||.1,function(){var e=Me(),t=gt()-Ee<500,r=k.tween;if(!(t||Math.abs(_e.getVelocity())<10)||r||it||Ae===e)_e.isActive&&Ae!==e&&q.restart(!0);else{var n=(e-M)/z,o=T&&!he?T.totalProgress():n,i=t?0:(o-V)/(gt()-nt)*1e3||0,a=qe.utils.clamp(-n,1-n,bt(i/2)*i/.185),s=n+(!1===ce.inertia?0:a),l=rt(0,1,p(s,_e)),c=Math.round(M+l*z),u=ce.onStart,f=ce.onInterrupt,d=ce.onComplete;if(e<=O&&M<=e&&c!==e){if(r&&!r._initted&&r.data<=bt(c-e))return;!1===ce.inertia&&(a=l-n),k(c,{duration:g(bt(.185*Math.max(bt(s-o),bt(l-o))/i/.05||0)),ease:ce.ease||"power3",data:bt(c-e),onInterrupt:function onInterrupt(){return q.restart(!0)&&f&&f(_e)},onComplete:function onComplete(){_e.update(),Ae=Me(),_=V=T&&!he?T.totalProgress():_e.progress,h&&h(_e),d&&d(_e)}},e,a*z,c-e-a*z),u&&u(_e,k.tween)}}}).pause()),a&&(It[a]=_e),i=(i=(ne=_e.trigger=I(ne||oe))&&ne._gsap&&ne._gsap.stRevert)&&i(_e),oe=!0===oe?ne:I(oe),Ja($)&&($={targets:ne,className:$}),oe&&(!1===ie||ie===kt||(ie=!(!ie&&"flex"===db(oe.parentNode).display)&&Tt),_e.pin=oe,(n=qe.core.getCache(oe)).spacer?R=n.pinState:(l&&((l=I(l))&&!l.nodeType&&(l=l.current||l.nativeElement),n.spacerIsNative=!!l,l&&(n.spacerState=Yb(l))),n.spacer=F=l||Ge.createElement("div"),F.classList.add("pin-spacer"),a&&F.classList.add("pin-spacer-"+a),n.pinState=R=Yb(oe)),!1!==S.force3D&&qe.set(oe,{force3D:!0}),_e.spacer=F=n.spacer,r=db(oe),m=r[ie+ge.os2],X=qe.getProperty(oe),b=qe.quickSetter(oe,ge.a,Et),Vb(oe,F,r),L=Yb(oe)),u){e=Ma(u)?fb(u,Ot):Ot,D=ub("scroller-start",a,ve,ge,e,0),B=ub("scroller-end",a,ve,ge,e,0,D),t=D["offset"+ge.op.d2];var f=I(y(ve,"content")||ve);C=this.markerStart=ub("start",a,f,ge,e,t,0,fe),P=this.markerEnd=ub("end",a,f,ge,e,t,0,fe),fe&&(U=qe.quickSetter([C,P],ge.a,Et)),me||Fe.length&&!0===y(ve,"fixedMarkers")||(function _makePositionable(e){var t=db(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(be?et:ve),qe.set([D,B],{force3D:!0}),x=qe.quickSetter(D,ge.a,Et),w=qe.quickSetter(B,ge.a,Et))}if(fe){var d=fe.vars.onUpdate,v=fe.vars.onUpdateParams;fe.eventCallback("onUpdate",function(){_e.update(0,0,1),d&&d.apply(v||[])})}_e.previous=function(){return Pt[Pt.indexOf(_e)-1]},_e.next=function(){return Pt[Pt.indexOf(_e)+1]},_e.revert=function(e,t){if(!t)return _e.kill(!0);var r=!1!==e||!_e.enabled,n=ot;r!==_e.isReverted&&(r&&(Q=Math.max(Me(),_e.scroll.rec||0),j=_e.progress,G=T&&T.progress()),C&&[C,P,D,B].forEach(function(e){return e.style.display=r?"none":"block"}),r&&(ot=1),_e.update(r),ot=n,oe&&(r?function _swapPinOut(e,t,r){Bt(r);var n=e._gsap;if(n.spacerIsNative)Bt(n.spacerState);else if(e._gsap.swappedIn){var o=t.parentNode;o&&(o.insertBefore(e,t),o.removeChild(t))}e._gsap.swappedIn=!1}(oe,F,R):ue&&_e.isActive||Vb(oe,F,db(oe),H)),_e.isReverted=r)},_e.refresh=function(e,t){if(!ot&&_e.enabled||t)if(oe&&e&&ht)nb(ScrollTrigger,"scrollEnd",Fb);else{!ft&&Se&&Se(_e),ot=1,Ee=gt(),k.tween&&(k.tween.kill(),k.tween=0),W&&W.pause(),ae&&T&&T.revert({kill:!1}).invalidate(),_e.isReverted||_e.revert(!0,!0);for(var r,n,o,i,a,s,l,c,u,f,d=Te(),p=ke(),g=fe?fe.duration():Ha(ve,ge),h=0,v=0,b=S.end,m=S.endTrigger||ne,y=S.start||(0!==S.start&&ne?oe?"0 0":"0 100%":0),x=_e.pinnedContainer=S.pinnedContainer&&I(S.pinnedContainer),w=ne&&Math.max(0,Pt.indexOf(_e))||0,_=w;_--;)(s=Pt[_]).end||s.refresh(0,1)||(ot=1),!(l=s.pin)||l!==ne&&l!==oe||s.isReverted||((f=f||[]).unshift(s),s.revert(!0,!0)),s!==Pt[_]&&(w--,_--);for(Ka(y)&&(y=y(_e)),M=_b(y,ne,d,ge,Me(),C,D,_e,p,we,me,g,fe)||(oe?-.001:0),Ka(b)&&(b=b(_e)),Ja(b)&&!b.indexOf("+=")&&(~b.indexOf(" ")?b=(Ja(y)?y.split(" ")[0]:"")+b:(h=tb(b.substr(2),d),b=Ja(y)?y:M+h,m=ne)),O=Math.max(M,_b(b||(m?"100% 0":g),m,d,ge,Me()+h,P,B,_e,p,we,me,g,fe))||-.001,z=O-M||(M-=.01)&&.001,h=0,_=w;_--;)(l=(s=Pt[_]).pin)&&s.start-s._pinPush<M&&!fe&&0<s.end&&(r=s.end-s.start,l!==ne&&l!==x||La(y)||(h+=r*(1-s.progress)),l===oe&&(v+=r));if(M+=h,O+=h,_e._pinPush=v,C&&h&&((r={})[ge.a]="+="+h,x&&(r[ge.p]="-="+Me()),qe.set([C,P],r)),oe)r=db(oe),i=ge===Je,o=Me(),K=parseFloat(X(ge.a))+v,!g&&1<O&&((be?et:ve).style["overflow-"+ge.a]="scroll"),Vb(oe,F,r),L=Yb(oe),n=Mt(oe,!0),c=me&&J(ve,i?He:Je)(),ie&&((H=[ie+ge.os2,z+v+Et]).t=F,(_=ie===Tt?hb(oe,ge)+z+v:0)&&H.push(ge.d,_+Et),Bt(H),me&&Me(Q)),me&&((a={top:n.top+(i?o-M:c)+Et,left:n.left+(i?c:o-M)+Et,boxSizing:"border-box",position:"fixed"})[mt]=a.maxWidth=Math.ceil(n.width)+Et,a[yt]=a.maxHeight=Math.ceil(n.height)+Et,a[kt]=a[kt+_t]=a[kt+xt]=a[kt+St]=a[kt+wt]="0",a[Tt]=r[Tt],a[Tt+_t]=r[Tt+_t],a[Tt+xt]=r[Tt+xt],a[Tt+St]=r[Tt+St],a[Tt+wt]=r[Tt+wt],Y=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(R,a,ue),ft&&Me(0)),T?(u=T._initted,lt(1),T.render(T.duration(),!0,!0),N=X(ge.a)-K+z+v,z!==N&&me&&Y.splice(Y.length-2,2),T.render(0,!0,!0),u||T.invalidate(!0),T.parent||T.totalTime(T.totalTime()),lt(0)):N=z;else if(ne&&Me()&&!fe)for(n=ne.parentNode;n&&n!==et;)n._pinOffset&&(M-=n._pinOffset,O-=n._pinOffset),n=n.parentNode;f&&f.forEach(function(e){return e.revert(!1,!0)}),_e.start=M,_e.end=O,A=E=ft?Q:Me(),fe||ft||(A<Q&&Me(Q),_e.scroll.rec=0),_e.revert(!1,!0),q&&(Ae=-1,_e.isActive&&Me(M+z*j),q.restart(!0)),ot=0,T&&he&&(T._initted||G)&&T.progress()!==G&&T.progress(G,!0).render(T.time(),!0,!0),j===_e.progress&&!fe||(T&&!he&&T.totalProgress(j,!0),_e.progress=(A-M)/z===j?0:j),oe&&ie&&(F._pinOffset=Math.round(_e.progress*N)),te&&te(_e)}},_e.getVelocity=function(){return(Me()-E)/(gt()-nt)*1e3||0},_e.endAnimation=function(){Na(_e.callbackAnimation),T&&(W?W.progress(1):T.paused()?he||Na(T,_e.direction<0,1):Na(T,T.reversed()))},_e.labelToScroll=function(e){return T&&T.labels&&(M||_e.refresh()||M)+T.labels[e]/T.duration()*z||0},_e.getTrailing=function(t){var e=Pt.indexOf(_e),r=0<_e.direction?Pt.slice(0,e).reverse():Pt.slice(e+1);return(Ja(t)?r.filter(function(e){return e.vars.preventOverlaps===t}):r).filter(function(e){return 0<_e.direction?e.end<=M:e.start>=O})},_e.update=function(e,t,r){if(!fe||r||e){var n,o,i,a,s,l,c,u=ft?Q:_e.scroll(),f=e?0:(u-M)/z,d=f<0?0:1<f?1:f||0,p=_e.progress;if(t&&(E=A,A=fe?Me():u,ce&&(V=_,_=T&&!he?T.totalProgress():d)),se&&!d&&oe&&!ot&&!pt&&ht&&M<u+(u-E)/(gt()-nt)*se&&(d=1e-4),d!==p&&_e.enabled){if(a=(s=(n=_e.isActive=!!d&&d<1)!=(!!p&&p<1))||!!d!=!!p,_e.direction=p<d?1:-1,_e.progress=d,a&&!ot&&(o=d&&!p?0:1===d?1:1===p?2:3,he&&(i=!s&&"none"!==xe[o+1]&&xe[o+1]||xe[o],c=T&&("complete"===i||"reset"===i||i in T))),pe&&(s||c)&&(c||re||!T)&&(Ka(pe)?pe(_e):_e.getTrailing(pe).forEach(function(e){return e.endAnimation()})),he||(!W||ot||pt?T&&T.totalProgress(d,!!ot):((fe||dt&&dt!==_e)&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",d,T._tTime/T._tDur):(W.vars.totalProgress=d,W.invalidate().restart()))),oe)if(e&&ie&&(F.style[ie+ge.os2]=m),me){if(a){if(l=!e&&p<d&&u<O+1&&u+1>=Ha(ve,ge),ue)if(e||!n&&!l)bc(oe,F);else{var g=Mt(oe,!0),h=u-M;bc(oe,et,g.top+(ge===Je?h:0)+Et,g.left+(ge===Je?0:h)+Et)}Bt(n||l?Y:L),N!==z&&d<1&&n||b(K+(1!==d||l?0:N))}}else b(Aa(K+N*d));!ce||k.tween||ot||pt||q.restart(!0),$&&(s||le&&d&&(d<1||!ut))&&tt($.targets).forEach(function(e){return e.classList[n||le?"add":"remove"]($.className)}),!Z||he||e||Z(_e),a&&!ot?(he&&(c&&("complete"===i?T.pause().totalProgress(1):"reset"===i?T.restart(!0).pause():"restart"===i?T.restart(!0):T[i]()),Z&&Z(_e)),!s&&ut||(ee&&s&&Oa(_e,ee),ye[o]&&Oa(_e,ye[o]),le&&(1===d?_e.kill(!1,1):ye[o]=0),s||ye[o=1===d?1:3]&&Oa(_e,ye[o])),de&&!n&&Math.abs(_e.getVelocity())>(La(de)?de:2500)&&(Na(_e.callbackAnimation),W?W.progress(1):Na(T,"reverse"===i?1:!d,1))):he&&Z&&!ot&&Z(_e)}if(w){var v=fe?u/fe.duration()*(fe._caScrollDist||0):u;x(v+(D._isFlipped?1:0)),w(v)}U&&U(-u/fe.duration()*(fe._caScrollDist||0))}},_e.enable=function(e,t){_e.enabled||(_e.enabled=!0,nb(ve,"resize",Cb),nb(be?Ge:ve,"scroll",Ab),Se&&nb(ScrollTrigger,"refreshInit",Se),!1!==e&&(_e.progress=j=0,A=E=Ae=Me()),!1!==t&&_e.refresh())},_e.getTween=function(e){return e&&k?k.tween:W},_e.setPositions=function(e,t){oe&&(K+=e-M,N+=t-e-z),_e.start=M=e,_e.end=O=t,z=t-e,_e.update()},_e.disable=function(e,t){if(_e.enabled&&(!1!==e&&_e.revert(!0,!0),_e.enabled=_e.isActive=!1,t||W&&W.pause(),Q=0,n&&(n.uncache=1),Se&&ob(ScrollTrigger,"refreshInit",Se),q&&(q.pause(),k.tween&&k.tween.kill()&&(k.tween=0)),!be)){for(var r=Pt.length;r--;)if(Pt[r].scroller===ve&&Pt[r]!==_e)return;ob(ve,"resize",Cb),ob(ve,"scroll",Ab)}},_e.kill=function(e,t){_e.disable(e,t),W&&!t&&W.kill(),a&&delete It[a];var r=Pt.indexOf(_e);0<=r&&Pt.splice(r,1),r===at&&0<Dt&&at--,r=0,Pt.forEach(function(e){return e.scroller===_e.scroller&&(r=1)}),r||ft||(_e.scroll.rec=0),T&&(T.scrollTrigger=null,e&&T.revert({kill:!1}),t||T.kill()),C&&[C,P,D,B].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),dt===_e&&(dt=0),oe&&(n&&(n.uncache=1),r=0,Pt.forEach(function(e){return e.pin===oe&&r++}),r||(n.spacer=0)),S.onKill&&S.onKill(_e)},_e.enable(!1,!1),i&&i(_e),T&&T.add&&!z?qe.delayedCall(.01,function(){return M||O||_e.refresh()})&&(z=.01)&&(M=O=0):_e.refresh()}else this.update=this.refresh=this.kill=za},ScrollTrigger.register=function register(e){return a||(qe=e||Ca(),Ba()&&window.document&&ScrollTrigger.enable(),a=vt),a},ScrollTrigger.defaults=function defaults(e){if(e)for(var t in e)Ct[t]=e[t];return Ct},ScrollTrigger.disable=function disable(t,r){vt=0,Pt.forEach(function(e){return e[r?"kill":"disable"](t)}),ob(je,"wheel",Ab),ob(Ge,"scroll",Ab),clearInterval(c),ob(Ge,"touchcancel",za),ob(et,"touchstart",za),mb(ob,Ge,"pointerdown,touchstart,mousedown",xa),mb(ob,Ge,"pointerup,touchend,mouseup",ya),l.kill(),Ia(ob);for(var e=0;e<k.length;e+=3)pb(ob,k[e],k[e+1]),pb(ob,k[e],k[e+2])},ScrollTrigger.enable=function enable(){if(je=window,Ge=document,Ue=Ge.documentElement,et=Ge.body,qe&&(tt=qe.utils.toArray,rt=qe.utils.clamp,ct=qe.core.context||za,lt=qe.core.suppressOverwrites||za,x=je.history.scrollRestoration||"auto",qe.core.globals("ScrollTrigger",ScrollTrigger),et)){vt=1,C.register(qe),ScrollTrigger.isTouch=C.isTouch,P=C.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nb(je,"wheel",Ab),s=[je,Ge,Ue,et],qe.matchMedia?(ScrollTrigger.matchMedia=function(e){var t,r=qe.matchMedia();for(t in e)r.add(t,e[t]);return r},qe.addEventListener("matchMediaInit",function(){return Jb()}),qe.addEventListener("matchMediaRevert",function(){return Ib()}),qe.addEventListener("matchMedia",function(){Q(0,1),V("matchMedia")}),qe.matchMedia("(orientation: portrait)",function(){return Bb(),Bb})):console.warn("Requires GSAP 3.11.0 or later"),Bb(),nb(Ge,"scroll",Ab);var e,t,r=et.style,n=r.borderTopStyle,o=qe.core.Animation.prototype;for(o.revert||Object.defineProperty(o,"revert",{value:function value(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",e=Mt(et),Je.m=Math.round(e.top+Je.sc())||0,He.m=Math.round(e.left+He.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),c=setInterval(zb,250),qe.delayedCall(.5,function(){return pt=0}),nb(Ge,"touchcancel",za),nb(et,"touchstart",za),mb(nb,Ge,"pointerdown,touchstart,mousedown",xa),mb(nb,Ge,"pointerup,touchend,mouseup",ya),u=qe.utils.checkPrefix("transform"),$.push(u),a=gt(),l=qe.delayedCall(.2,Q).pause(),p=[Ge,"visibilitychange",function(){var e=je.innerWidth,t=je.innerHeight;Ge.hidden?(f=e,d=t):f===e&&d===t||Cb()},Ge,"DOMContentLoaded",Q,je,"load",Q,je,"resize",Cb],Ia(nb),Pt.forEach(function(e){return e.enable(0,1)}),t=0;t<k.length;t+=3)pb(ob,k[t],k[t+1]),pb(ob,k[t],k[t+2])}},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(ut=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(c)||(c=t)&&setInterval(zb,t),"ignoreMobileResize"in e&&(v=1===ScrollTrigger.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Ia(ob)||Ia(nb,e.autoRefreshEvents||"none"),g=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=I(e),n=k.indexOf(r),o=Da(r);~n&&k.splice(n,o?6:2),t&&(o?Fe.unshift(je,t,et,t,Ue,t):Fe.unshift(r,t))},ScrollTrigger.clearMatchMedia=function clearMatchMedia(t){Pt.forEach(function(e){return e._ctx&&e._ctx.query===t&&e._ctx.kill(!0,!0)})},ScrollTrigger.isInViewport=function isInViewport(e,t,r){var n=(Ja(e)?I(e):e).getBoundingClientRect(),o=n[r?mt:yt]*t||0;return r?0<n.right-o&&n.left+o<je.innerWidth:0<n.bottom-o&&n.top+o<je.innerHeight},ScrollTrigger.positionInViewport=function positionInViewport(e,t,r){Ja(e)&&(e=I(e));var n=e.getBoundingClientRect(),o=n[r?mt:yt],i=null==t?o/2:t in R?R[t]*o:~t.indexOf("%")?parseFloat(t)*o/100:parseFloat(t)||0;return r?(n.left+i)/je.innerWidth:(n.top+i)/je.innerHeight},ScrollTrigger.killAll=function killAll(e){if(Pt.forEach(function(e){return"ScrollSmoother"!==e.vars.id&&e.kill()}),!0!==e){var t=X.killAll||[];X={},t.forEach(function(e){return e()})}},ScrollTrigger);function ScrollTrigger(e,t){a||ScrollTrigger.register(qe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}re.version="3.11.2",re.saveStyles=function(e){return e?tt(e).forEach(function(e){if(e&&e.style){var t=W.indexOf(e);0<=t&&W.splice(t,5),W.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),qe.core.getCache(e),ct())}}):W},re.revert=function(e,t){return Jb(!e,t)},re.create=function(e,t){return new re(e,t)},re.refresh=function(e){return e?Cb():(a||re.register())&&Q(!0)},re.update=U,re.clearScrollMemory=Kb,re.maxScroll=function(e,t){return Ha(e,t?He:Je)},re.getScrollFunc=function(e,t){return J(I(e),t?He:Je)},re.getById=function(e){return It[e]},re.getAll=function(){return Pt.filter(function(e){return"ScrollSmoother"!==e.vars.id})},re.isScrolling=function(){return!!ht},re.snapDirectional=kb,re.addEventListener=function(e,t){var r=X[e]||(X[e]=[]);~r.indexOf(t)||r.push(t)},re.removeEventListener=function(e,t){var r=X[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},re.batch=function(e,t){function ro(e,t){var r=[],n=[],o=qe.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&Ka(t[r])&&"onRefreshInit"!==r?ro(0,t[r]):t[r];return Ka(a)&&(a=a(),nb(re,"refresh",function(){return a=t.batchMax()})),tt(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(re.create(t))}),n};function ec(e,t,r,n){return n<t?e(n):t<0&&e(0),n<r?(n-t)/(r-t):r<0?t/(t-r):1}function fc(e,t){!0===t?e.style.removeProperty("touch-action"):e.style.touchAction=!0===t?"auto":t?"pan-"+t+(C.isTouch?" pinch-zoom":""):"none",e===Ue&&fc(et,t)}function hc(e){var t,r=e.event,n=e.target,o=e.axis,i=(r.changedTouches?r.changedTouches[0]:r).target,a=i._gsap||qe.core.getCache(i),s=gt();if(!a._isScrollT||2e3<s-a._isScrollT){for(;i&&i.scrollHeight<=i.clientHeight;)i=i.parentNode;a._isScroll=i&&!Da(i)&&i!==n&&(oe[(t=db(i)).overflowY]||oe[t.overflowX]),a._isScrollT=s}!a._isScroll&&"x"!==o||(r.stopPropagation(),r._gsapAllow=!0)}function ic(e,t,r,n){return C.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&hc,onPress:n,onDrag:n,onScroll:n,onEnable:function onEnable(){return r&&nb(Ge,C.eventTypes[0],ae,!1,!0)},onDisable:function onDisable(){return ob(Ge,C.eventTypes[0],ae,!0)}})}function mc(e){function np(){return o=!1}function qp(){i=Ha(d,Je),T=rt(P?1:0,i),f&&(S=rt(0,Ha(d,He))),l=j}function rp(){h._gsap.y=Aa(parseFloat(h._gsap.y)+v.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",v.offset=v.cacheID=0}function xp(){qp(),a.isActive()&&a.vars.scrollY>i&&(v()>i?a.progress(1)&&v(i):a.resetTo("scrollY",i))}Ma(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var n,i,l,o,a,c,u,s,f=e.normalizeScrollX,t=e.momentum,r=e.allowNestedScroll,d=I(e.target)||Ue,p=qe.core.globals().ScrollSmoother,g=p&&p.get(),h=P&&(e.content&&I(e.content)||g&&!1!==e.content&&!g.smooth()&&g.content()),v=J(d,Je),b=J(d,He),m=1,y=(C.isTouch&&je.visualViewport?je.visualViewport.scale*je.visualViewport.width:je.outerWidth)/je.innerWidth,x=0,w=Ka(t)?function(){return t(n)}:function(){return t||2.8},_=ic(d,e.type,!0,r),S=za,T=za;return h&&qe.set(h,{y:"+=0"}),e.ignoreCheck=function(e){return P&&"touchmove"===e.type&&function ignoreDrag(){if(o){requestAnimationFrame(np);var e=Aa(n.deltaY/2),t=T(v.v-e);if(h&&t!==v.v+v.offset){v.offset=t-v.v;var r=Aa((parseFloat(h&&h._gsap.y)||0)-v.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+r+", 0, 1)",h._gsap.y=r+"px",v.cacheID=k.cache,U()}return!0}v.offset&&rp(),o=!0}()||1.05<m&&"touchstart"!==e.type||n.isGesturing||e.touches&&1<e.touches.length},e.onPress=function(){var e=m;m=Aa((je.visualViewport&&je.visualViewport.scale||1)/y),a.pause(),e!==m&&fc(d,1.01<m||!f&&"x"),c=b(),u=v(),qp(),l=j},e.onRelease=e.onGestureStart=function(e,t){if(v.offset&&rp(),t){k.cache++;var r,n,o=w();f&&(n=(r=b())+.05*o*-e.velocityX/.227,o*=ec(b,r,n,Ha(d,He)),a.vars.scrollX=S(n)),n=(r=v())+.05*o*-e.velocityY/.227,o*=ec(v,r,n,Ha(d,Je)),a.vars.scrollY=T(n),a.invalidate().duration(o).play(.01),(P&&a.vars.scrollY>=i||i-1<=r)&&qe.to({},{onUpdate:xp,duration:o})}else s.restart(!0)},e.onWheel=function(){a._ts&&a.pause(),1e3<gt()-x&&(l=0,x=gt())},e.onChange=function(e,t,r,n,o){if(j!==l&&qp(),t&&f&&b(S(n[2]===t?c+(e.startX-e.x):b()+t-n[1])),r){v.offset&&rp();var i=o[2]===r,a=i?u+e.startY-e.y:v()+r-o[1],s=T(a);i&&a!==s&&(u+=s-a),v(s)}(r||t)&&U()},e.onEnable=function(){fc(d,!f&&"x"),re.addEventListener("refresh",xp),nb(je,"resize",xp),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=b.smooth=!1),_.enable()},e.onDisable=function(){fc(d,!0),ob(je,"resize",xp),re.removeEventListener("refresh",xp),_.kill()},e.lockAxis=!1!==e.lockAxis,((n=new C(e)).iOS=P)&&!v()&&v(1),P&&qe.ticker.add(za),s=n._dc,a=qe.to(n,{ease:"power4",paused:!0,scrollX:f?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:s.vars.onComplete}),n}var ne,oe={auto:1,scroll:1},ie=/(input|label|select|textarea)/i,ae=function _captureInputs(e){var t=ie.test(e.target.tagName);(t||ne)&&(e._gsapAllow=!0,ne=t)};re.sort=function(e){return Pt.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},re.observe=function(e){return new C(e)},re.normalizeScroll=function(e){if(void 0===e)return h;if(!0===e&&h)return h.enable();if(!1===e)return h&&h.kill();var t=e instanceof C?e:mc(e);return h&&h.target===t.target&&h.kill(),Da(t.target)&&(h=t),t},re.core={_getVelocityProp:K,_inputObserver:ic,_scrollers:k,_proxies:Fe,bridge:{ss:function ss(){ht||V("scrollStart"),ht=gt()},ref:function ref(){return ot}}},Ca()&&qe.registerPlugin(re),e.ScrollTrigger=re,e.default=re;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});