"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[991],{4156:function(e){var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function i(e,t,r){return e.concat(t).map((function(e){return n(e,r)}))}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function o(e,t){try{return t in e}catch(r){return!1}}function s(e,t,r){var i={};return r.isMergeableObject(e)&&a(e).forEach((function(t){i[t]=n(e[t],r)})),a(t).forEach((function(a){(function(e,t){return o(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,a)||(o(e,a)&&r.isMergeableObject(t[a])?i[a]=function(e,t){if(!t.customMerge)return c;var r=t.customMerge(e);return"function"==typeof r?r:c}(a,r)(e[a],t[a],r):i[a]=n(t[a],r))})),i}function c(e,r,a){(a=a||{}).arrayMerge=a.arrayMerge||i,a.isMergeableObject=a.isMergeableObject||t,a.cloneUnlessOtherwiseSpecified=n;var o=Array.isArray(r);return o===Array.isArray(e)?o?a.arrayMerge(e,r,a):s(e,r,a):n(r,a)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return c(e,r,t)}),{})};var l=c;e.exports=l},5349:function(e,t,r){r.r(t),r.d(t,{default:function(){return De}});var n=r(3023),i=r(3696);var a=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype;return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,r=function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this);t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(r,t),this.tags.push(r)}var n=this.tags[this.tags.length-1];if(this.isSpeedy){var i=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(n);try{var a=105===e.charCodeAt(1)&&64===e.charCodeAt(0);i.insertRule(e,a?0:i.cssRules.length)}catch(o){0}}else n.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}();var o=function(e){function t(e,n,c,l,g){for(var p,f,h,m,w,L=0,v=0,A=0,C=0,I=0,D=0,E=h=p=0,P=0,B=0,Y=0,R=0,W=c.length,Z=W-1,U="",Q="",G="",H="";P<W;){if(f=c.charCodeAt(P),P===Z&&0!==v+C+A+L&&(0!==v&&(f=47===v?10:47),C=A=L=0,W++,Z++),0===v+C+A+L){if(P===Z&&(0<B&&(U=U.replace(d,"")),0<U.trim().length)){switch(f){case 32:case 9:case 59:case 13:case 10:break;default:U+=c.charAt(P)}f=59}switch(f){case 123:for(p=(U=U.trim()).charCodeAt(0),h=1,R=++P;P<W;){switch(f=c.charCodeAt(P)){case 123:h++;break;case 125:h--;break;case 47:switch(f=c.charCodeAt(P+1)){case 42:case 47:e:{for(E=P+1;E<Z;++E)switch(c.charCodeAt(E)){case 47:if(42===f&&42===c.charCodeAt(E-1)&&P+2!==E){P=E+1;break e}break;case 10:if(47===f){P=E+1;break e}}P=E}}break;case 91:f++;case 40:f++;case 34:case 39:for(;P++<Z&&c.charCodeAt(P)!==f;);}if(0===h)break;P++}if(h=c.substring(R,P),0===p&&(p=(U=U.replace(u,"").trim()).charCodeAt(0)),64===p){switch(0<B&&(U=U.replace(d,"")),f=U.charCodeAt(1)){case 100:case 109:case 115:case 45:B=n;break;default:B=z}if(R=(h=t(n,B,h,f,g+1)).length,0<T&&(w=s(3,h,B=r(z,U,Y),n,k,S,R,f,g,l),U=B.join(""),void 0!==w&&0===(R=(h=w.trim()).length)&&(f=0,h="")),0<R)switch(f){case 115:U=U.replace(j,o);case 100:case 109:case 45:h=U+"{"+h+"}";break;case 107:h=(U=U.replace(M,"$1 $2"))+"{"+h+"}",h=1===x||2===x&&a("@"+h,3)?"@-webkit-"+h+"@"+h:"@"+h;break;default:h=U+h,112===l&&(Q+=h,h="")}else h=""}else h=t(n,r(n,U,Y),h,l,g+1);G+=h,h=Y=B=E=p=0,U="",f=c.charCodeAt(++P);break;case 125:case 59:if(1<(R=(U=(0<B?U.replace(d,""):U).trim()).length))switch(0===E&&(p=U.charCodeAt(0),45===p||96<p&&123>p)&&(R=(U=U.replace(" ",":")).length),0<T&&void 0!==(w=s(1,U,n,e,k,S,Q.length,l,g,l))&&0===(R=(U=w.trim()).length)&&(U="\0\0"),p=U.charCodeAt(0),f=U.charCodeAt(1),p){case 0:break;case 64:if(105===f||99===f){H+=U+c.charAt(P);break}default:58!==U.charCodeAt(R-1)&&(Q+=i(U,p,f,U.charCodeAt(2)))}Y=B=E=p=0,U="",f=c.charCodeAt(++P)}}switch(f){case 13:case 10:47===v?v=0:0===1+p&&107!==l&&0<U.length&&(B=1,U+="\0"),0<T*O&&s(0,U,n,e,k,S,Q.length,l,g,l),S=1,k++;break;case 59:case 125:if(0===v+C+A+L){S++;break}default:switch(S++,m=c.charAt(P),f){case 9:case 32:if(0===C+L+v)switch(I){case 44:case 58:case 9:case 32:m="";break;default:32!==f&&(m=" ")}break;case 0:m="\\0";break;case 12:m="\\f";break;case 11:m="\\v";break;case 38:0===C+v+L&&(B=Y=1,m="\f"+m);break;case 108:if(0===C+v+L+N&&0<E)switch(P-E){case 2:112===I&&58===c.charCodeAt(P-3)&&(N=I);case 8:111===D&&(N=D)}break;case 58:0===C+v+L&&(E=P);break;case 44:0===v+A+C+L&&(B=1,m+="\r");break;case 34:case 39:0===v&&(C=C===f?0:0===C?f:C);break;case 91:0===C+v+A&&L++;break;case 93:0===C+v+A&&L--;break;case 41:0===C+v+L&&A--;break;case 40:if(0===C+v+L){if(0===p)if(2*I+3*D==533);else p=1;A++}break;case 64:0===v+A+C+L+E+h&&(h=1);break;case 42:case 47:if(!(0<C+L+A))switch(v){case 0:switch(2*f+3*c.charCodeAt(P+1)){case 235:v=47;break;case 220:R=P,v=42}break;case 42:47===f&&42===I&&R+2!==P&&(33===c.charCodeAt(R+2)&&(Q+=c.substring(R,P+1)),m="",v=0)}}0===v&&(U+=m)}D=I,I=f,P++}if(0<(R=Q.length)){if(B=n,0<T&&(void 0!==(w=s(2,Q,B,e,k,S,R,l,g,l))&&0===(Q=w).length))return H+Q+G;if(Q=B.join(",")+"{"+Q+"}",0!=x*N){switch(2!==x||a(Q,2)||(N=0),N){case 111:Q=Q.replace(b,":-moz-$1")+Q;break;case 112:Q=Q.replace(y,"::-webkit-input-$1")+Q.replace(y,"::-moz-$1")+Q.replace(y,":-ms-input-$1")+Q}N=0}}return H+Q+G}function r(e,t,r){var i=t.trim().split(h);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<a;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<a;++s)for(var l=0;l<o;++l)t[c++]=n(e[l]+" ",i[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(m,"$1"+e.trim());case 58:return e.trim()+t.replace(m,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(m,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,r,n){var o=e+";",s=2*t+3*r+4*n;if(944===s){e=o.indexOf(":",9)+1;var c=o.substring(e,o.length-1).trim();return c=o.substring(0,e).trim()+c+";",1===x||2===x&&a(c,1)?"-webkit-"+c+c:c}if(0===x||2===x&&!a(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(I,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(c=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+c+o;case 1005:return p.test(o)?o.replace(g,":-webkit-")+o.replace(g,":-moz-")+o:o;case 1e3:switch(t=(c=o.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=o.replace(w,"tb");break;case 232:c=o.replace(w,"tb-rl");break;case 220:c=o.replace(w,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+c+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(c=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:o=o.replace(c,"-webkit-"+c)+";"+o;break;case 207:case 102:o=o.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(c,"-webkit-"+c)+";"+o.replace(c,"-ms-"+c+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return c=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+c+"-ms-flex-"+c+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(v,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(v,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):o.replace(c,"-webkit-"+c)+o.replace(c,"-moz-"+c.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===r+n&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(f,"$1-webkit-$2")+o}return o}function a(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),E(2!==t?n:n.replace(A,"$1"),r,t)}function o(e,t){var r=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(L," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,i,a,o,s,c,u){for(var d,g=0,p=t;g<T;++g)switch(d=D[g].call(l,e,p,r,n,i,a,o,s,c,u)){case void 0:case!1:case!0:case null:break;default:p=d}if(p!==t)return p}function c(e){return void 0!==(e=e.prefix)&&(E=null,e?"function"!=typeof e?x=1:(x=2,E=e):x=0),c}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<T){var i=s(-1,r,n,n,k,S,0,0,0,0);void 0!==i&&"string"==typeof i&&(r=i)}var a=t(z,n,r,0,0);return 0<T&&(void 0!==(i=s(-2,a,n,n,k,S,a.length,0,0,0))&&(a=i)),"",N=0,S=k=1,a}var u=/^\0+/g,d=/[\0\r\f]/g,g=/: */g,p=/zoo|gra/,f=/([,: ])(transform)/g,h=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,M=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,j=/\(\s*(.*)\s*\)/g,L=/([\s\S]*?);/g,v=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,I=/([^-])(image-set\()/,S=1,k=1,N=0,x=1,z=[],D=[],T=0,E=null,O=0;return l.use=function e(t){switch(t){case void 0:case null:T=D.length=0;break;default:if("function"==typeof t)D[T++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else O=0|!!t}return e},l.set=c,void 0!==e&&c(e),l},s="/*|*/",c=s+"}";function l(e){e&&u.current.insert(e+"}")}var u={current:null},d=function(e,t,r,n,i,a,o,d,g,p){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return u.current.insert(t+";"),"";case 108:if(98===t.charCodeAt(2))return""}break;case 2:if(0===d)return t+s;break;case 3:switch(d){case 102:case 112:return u.current.insert(r[0]+t),"";default:return t+(0===p?s:"")}case-2:t.split(c).forEach(l)}},g=function(e){void 0===e&&(e={});var t,r=e.key||"css";void 0!==e.prefix&&(t={prefix:e.prefix});var n=new o(t);var i,s={};i=e.container||document.head;var c,l=document.querySelectorAll("style[data-emotion-"+r+"]");Array.prototype.forEach.call(l,(function(e){e.getAttribute("data-emotion-"+r).split(" ").forEach((function(e){s[e]=!0})),e.parentNode!==i&&i.appendChild(e)})),n.use(e.stylisPlugins)(d),c=function(e,t,r,i){var a=t.name;u.current=r,n(e,t.styles),i&&(g.inserted[a]=!0)};var g={key:r,sheet:new a({key:r,container:i,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:s,registered:{},insert:c};return g};r(259);function p(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]):n+=r+" "})),n}var f=function(e,t,r){var n=e.key+"-"+t.name;if(!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles),void 0===e.inserted[t.name]){var i=t;do{e.insert("."+n,i,e.sheet,!0);i=i.next}while(void 0!==i)}};var h=function(e){for(var t,r=0,n=0,i=e.length;i>=4;++n,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(i){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},m={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var M=/[A-Z]|^ms/g,y=/_EMO_([^_]+?)_([^]*?)_EMO_/g,b=function(e){return 45===e.charCodeAt(1)},w=function(e){return null!=e&&"boolean"!=typeof e},j=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return b(e)?e:e.replace(M,"-$&").toLowerCase()})),L=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(y,(function(e,t,r){return A={name:t,styles:r,next:A},t}))}return 1===m[e]||b(e)||"number"!=typeof t||0===t?t:t+"px"};function v(e,t,r,n){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return A={name:r.name,styles:r.styles,next:A},r.name;if(void 0!==r.styles){var i=r.next;if(void 0!==i)for(;void 0!==i;)A={name:i.name,styles:i.styles,next:A},i=i.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=v(e,t,r[i],!1);else for(var a in r){var o=r[a];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=a+"{"+t[o]+"}":w(o)&&(n+=j(a)+":"+L(a,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=v(e,t,o,!1);switch(a){case"animation":case"animationName":n+=j(a)+":"+s+";";break;default:n+=a+"{"+s+"}"}}else for(var c=0;c<o.length;c++)w(o[c])&&(n+=j(a)+":"+L(a,o[c])+";")}return n}(e,t,r);case"function":if(void 0!==e){var a=A,o=r(e);return A=a,v(e,t,o,n)}}if(null==t)return r;var s=t[r];return void 0===s||n?r:s}var A,C=/label:\s*([^\s;\n{]+)\s*;/g;var I=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,i="";A=void 0;var a=e[0];null==a||void 0===a.raw?(n=!1,i+=v(r,t,a,!1)):i+=a[0];for(var o=1;o<e.length;o++)i+=v(r,t,e[o],46===i.charCodeAt(i.length-1)),n&&(i+=a[o]);C.lastIndex=0;for(var s,c="";null!==(s=C.exec(i));)c+="-"+s[1];return{name:h(i)+c,styles:i,next:A}},S=Object.prototype.hasOwnProperty,k=(0,i.createContext)("undefined"!=typeof HTMLElement?g():null),N=(0,i.createContext)({}),x=(k.Provider,function(e){var t=function(t,r){return(0,i.createElement)(k.Consumer,null,(function(n){return e(t,n,r)}))};return(0,i.forwardRef)(t)}),z="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",D=function(){return null},T=function(e,t,r,n){var a=null===r?t.css:t.css(r);"string"==typeof a&&void 0!==e.registered[a]&&(a=e.registered[a]);var o=t[z],s=[a],c="";"string"==typeof t.className?c=p(e.registered,s,t.className):null!=t.className&&(c=t.className+" ");var l=I(s);f(e,l,"string"==typeof o);c+=e.key+"-"+l.name;var u={};for(var d in t)S.call(t,d)&&"css"!==d&&d!==z&&(u[d]=t[d]);u.ref=n,u.className=c;var g=(0,i.createElement)(o,u),h=(0,i.createElement)(D,null);return(0,i.createElement)(i.Fragment,null,h,g)},E=x((function(e,t,r){return"function"==typeof e.css?(0,i.createElement)(N.Consumer,null,(function(n){return T(t,e,n,r)})):T(t,e,null,r)}));var O=function(e,t){var r=arguments;if(null==t||!S.call(t,"css"))return i.createElement.apply(void 0,r);var n=r.length,a=new Array(n);a[0]=E,a[1]=function(e,t){var r={};for(var n in t)S.call(t,n)&&(r[n]=t[n]);return r[z]=e,r}(e,t);for(var o=2;o<n;o++)a[o]=r[o];return i.createElement.apply(null,a)},P=function e(t){for(var r=t.length,n=0,i="";n<r;n++){var a=t[n];if(null!=a){var o=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))o=e(a);else for(var s in o="",a)a[s]&&s&&(o&&(o+=" "),o+=s);break;default:o=a}o&&(i&&(i+=" "),i+=o)}}return i};var B=function(){return null};x((function(e,t){return(0,i.createElement)(N.Consumer,null,(function(r){var n=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=I(r,t.registered);return f(t,i,!1),t.key+"-"+i.name},a={css:n,cx:function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return function(e,t,r){var n=[],i=p(e,n,r);return n.length<2?r:i+t(n)}(t.registered,n,P(r))},theme:r},o=e.children(a);var s=(0,i.createElement)(B,null);return(0,i.createElement)(i.Fragment,null,s,o)}))}));function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y.apply(this,arguments)}function R(e,t,r,n,i){var a=t&&"string"==typeof t?t.split("."):[t];for(n=0;n<a.length;n++)e=e?e[a[n]]:i;return e===i?r:e}var W=[40,52,64].map((function(e){return e+"em"})),Z={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},U={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},Q={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],scrollPaddingX:["scrollPaddingLeft","scrollPaddingRight"],scrollPaddingY:["scrollPaddingTop","scrollPaddingBottom"],size:["width","height"]},G={color:"colors",backgroundColor:"colors",borderColor:"colors",caretColor:"colors",columnRuleColor:"colors",opacity:"opacities",transition:"transitions",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",marginBlock:"space",marginBlockEnd:"space",marginBlockStart:"space",marginInline:"space",marginInlineEnd:"space",marginInlineStart:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",paddingBlock:"space",paddingBlockEnd:"space",paddingBlockStart:"space",paddingInline:"space",paddingInlineEnd:"space",paddingInlineStart:"space",scrollPadding:"space",scrollPaddingTop:"space",scrollPaddingRight:"space",scrollPaddingBottom:"space",scrollPaddingLeft:"space",scrollPaddingX:"space",scrollPaddingY:"space",inset:"space",insetBlock:"space",insetBlockEnd:"space",insetBlockStart:"space",insetInline:"space",insetInlineEnd:"space",insetInlineStart:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",borderBlock:"borders",borderBlockEnd:"borders",borderBlockEndStyle:"borderStyles",borderBlockEndWidth:"borderWidths",borderBlockStart:"borders",borderBlockStartStyle:"borderStyles",borderBlockStartWidth:"borderWidths",borderBlockStyle:"borderStyles",borderBlockWidth:"borderWidths",borderEndEndRadius:"radii",borderEndStartRadius:"radii",borderInline:"borders",borderInlineEnd:"borders",borderInlineEndStyle:"borderStyles",borderInlineEndWidth:"borderWidths",borderInlineStart:"borders",borderInlineStartStyle:"borderStyles",borderInlineStartWidth:"borderWidths",borderInlineStyle:"borderStyles",borderInlineWidth:"borderWidths",borderStartEndRadius:"radii",borderStartStartRadius:"radii",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",blockSize:"sizes",inlineSize:"sizes",maxBlockSize:"sizes",maxInlineSize:"sizes",minBlockSize:"sizes",minInlineSize:"sizes",fill:"colors",stroke:"colors"},H=function(e,t){if("number"!=typeof t||t>=0){if("string"==typeof t&&t.startsWith("-")){var r=t.substring(1);return"-"+R(e,r,r)}return R(e,t,t)}var n=Math.abs(t),i=R(e,n,n);return"string"==typeof i?"-"+i:-1*Number(i)},F=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginBlock","marginBlockEnd","marginBlockStart","marginInline","marginInlineEnd","marginInlineStart","top","bottom","left","right"].reduce((function(e,t){var r;return Y({},e,((r={})[t]=H,r))}),{}),J=function e(t){return void 0===t&&(t={}),function(r){void 0===r&&(r={});var n=Y({},Z,"theme"in r?r.theme:r),i={},a=function(e){return function(t){var r={},n=t&&t.breakpoints||W,i=[null].concat(n.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var a in e){var o=a,s=e[o];if("function"==typeof s&&(s=s(t||{})),null!=s)if(Array.isArray(s))for(var c=0;c<s.slice(0,i.length).length;c++){var l=i[c];l?(r[l]=r[l]||{},null!=s[c]&&(r[l][o]=s[c])):r[o]=s[c]}else r[o]=s}return r}}("function"==typeof t?t(n):t)(n);for(var o in a){var s=a[o],c="function"==typeof s?s(n):s;if("variant"!==o)if(c&&"object"==typeof c)i[o]=e(c)(n);else{var l=o in U?U[o]:o,u=R(n,l in G?G[l]:void 0,R(n,l,{})),d=R(F,l,R)(u,c,c);if(l in Q)for(var g=Q[l],p=0;p<g.length;p++)i[g[p]]=d;else i[l]=d}else i=Y({},i,e(R(n,c))(n))}return i}},V=r(4156),_=r.n(V);var K=function(e){if(!e)return null;var t={};for(var r in e)"sx"!==r&&(t[r]=e[r]);var n=function(e){if(e.sx||e.css)return function(t){return[J(e.sx)(t),"function"==typeof e.css?e.css(t):e.css]}}(e);return n&&(t.css=n),t},X=function(e,t){return O.apply(void 0,[e,K(t)].concat([].slice.call(arguments,2)))},$=((0,i.createContext)({__EMOTION_VERSION__:"10.3.1",theme:{}}),"function"==typeof Symbol&&Symbol.for),q=$?Symbol.for("react.element"):60103,ee=$?Symbol.for("react.forward_ref"):60103,te=function(e){return!!e&&"object"==typeof e&&e.$$typeof!==q&&e.$$typeof!==ee},re=function(e,t,r){return t},ne=function(e,t){return _()(e,t,{isMergeableObject:te,arrayMerge:re})};ne.all=function(){return _().all([].slice.call(arguments),{isMergeableObject:te,arrayMerge:re})};var ie=r.p+"static/avatar-7157844ee86239d75f17d0634cab7521.png",ae=r.p+"static/cover-4c585c8a8dc7e899abb87332931f4340.png",oe=r(527),se=r(4807),ce=r(4e3),le=r(7109),ue=r(6162),de=r(8102),ge=r(2120),pe=r(3293),fe=r(2384),he=r(3863),me=r(1785);const Me=i.forwardRef((function(e,t){const{connect:r,connectLogo:n,connectColor:i,className:a,url:o,...s}=e,c=null!=n?n:r;return(0,me.Y)(pe.A,{css:fe.F.wrapper,ref:t,href:null!=o?o:"#",target:o?"_blank":"_self",underline:"none"},(0,me.Y)(he.B,(0,de.A)({},s,{className:(0,ge.cx)("ndt-skill-badge",a),logo:c,logoColor:i,leftBg:"white",rightText:r,shieldStyle:he.G.ForTheBadge,alt:r})))}));var ye="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgNS45YzEuMTYgMCAyLjEuOTQgMi4xIDIuMXMtLjk0IDIuMS0yLjEgMi4xUzkuOSA5LjE2IDkuOSA4cy45NC0yLjEgMi4xLTIuMW0wIDljMi45NyAwIDYuMSAxLjQ2IDYuMSAyLjF2MS4xSDUuOVYxN2MwLS42NCAzLjEzLTIuMSA2LjEtMi4xTTEyIDRDOS43OSA0IDggNS43OSA4IDhzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTAgOWMtMi42NyAwLTggMS4zNC04IDR2M2gxNnYtM2MwLTIuNjYtNS4zMy00LTgtNHoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+",be="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDZjMS4xMSAwIDItLjkgMi0yIDAtLjM4LS4xLS43My0uMjktMS4wM0wxMiAwbC0xLjcxIDIuOTdjLS4xOS4zLS4yOS42NS0uMjkgMS4wMyAwIDEuMS45IDIgMiAyem00LjYgOS45OWwtMS4wNy0xLjA3LTEuMDggMS4wN2MtMS4zIDEuMy0zLjU4IDEuMzEtNC44OSAwbC0xLjA3LTEuMDctMS4wOSAxLjA3QzYuNzUgMTYuNjQgNS44OCAxNyA0Ljk2IDE3Yy0uNzMgMC0xLjQtLjIzLTEuOTYtLjYxVjIxYzAgLjU1LjQ1IDEgMSAxaDE2Yy41NSAwIDEtLjQ1IDEtMXYtNC42MWMtLjU2LjM4LTEuMjMuNjEtMS45Ni42MS0uOTIgMC0xLjc5LS4zNi0yLjQ0LTEuMDF6TTE4IDloLTVWN2gtMnYySDZjLTEuNjYgMC0zIDEuMzQtMyAzdjEuNTRjMCAxLjA4Ljg4IDEuOTYgMS45NiAxLjk2LjUyIDAgMS4wMi0uMiAxLjM4LS41N2wyLjE0LTIuMTMgMi4xMyAyLjEzYy43NC43NCAyLjAzLjc0IDIuNzcgMGwyLjE0LTIuMTMgMi4xMyAyLjEzYy4zNy4zNy44Ni41NyAxLjM4LjU3IDEuMDggMCAxLjk2LS44OCAxLjk2LTEuOTZWMTJDMjEgMTAuMzQgMTkuNjYgOSAxOCA5eiIvPjwvc3ZnPg==",we="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNjcuNzkxIDY3Ljc5MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjcuNzkxIDY3Ljc5MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBkPSJNNjAuMDY5LDBINDIuMDY3Yy0xLjUzLDAtMi43NywxLjI0LTIuNzcsMi43N2MwLDEuNTI5LDEuMjQxLDIuNzcsMi43NjksMi43NjloMTEuMzE2bC05Ljk3OSw5Ljk3OQoJYy0yLjI2OC0xLjMxOC00Ljg5NS0yLjA4Ni03LjcwNy0yLjA4NmMtMi42NTMsMC01LjYwMSwwLjc0Ny03LjYxOCwyLjExNWwwLDBjLTIuMjc4LTEuMzM2LTQuOTIyLTIuMTE1LTcuNzU0LTIuMTE1CgljLTguNDksMC0xNS4zNzIsNi44ODItMTUuMzcyLDE1LjM3MmMwLDcuNTQyLDUuNDM3LDEzLjgwMywxMi42MDIsMTUuMTA5djEwLjYwMmgtNi4yMTNjLTEuNTI5LDAtMi43NywxLjI0LTIuNzcsMi43NwoJYzAsMS41MjksMS4yNCwyLjc3LDIuNzcsMi43N2g2LjIxM3Y0Ljk2N2MwLDEuNTI5LDEuMjQsMi43NywyLjc3LDIuNzdzMi43Ny0xLjI0LDIuNzctMi43N3YtNC45NjdoNi4yMTMKCWMxLjUyOSwwLDIuNzctMS4yNCwyLjc3LTIuNzdjMC0xLjUyOS0xLjI0LTIuNzctMi43Ny0yLjc3aC02LjIxM1Y0My45MjFjMS42Ny0wLjMwNCwzLjI0Ny0wLjg3Myw0LjY4Mi0xLjY3bDAuMTk4LTAuMTcxCgljMi4yNzEsMS4zMjQsNC45MDMsMi4wOTUsNy43MjIsMi4wOTVjOC40OSwwLDE1LjM3Mi02Ljg4MiwxNS4zNzItMTUuMzcyYzAtMy42Ny0xLjI5LTcuMDM3LTMuNDM3LTkuNjhsOS42NjgtOS42Njh2MTEuMzE2CgljMCwwLjc2NCwwLjMxLDEuNDU3LDAuODExLDEuOTU4YzAuNTAxLDAuNTAxLDEuMTk0LDAuODExLDEuOTU4LDAuODExYzEuNTMsMCwyLjc3LTEuMjQsMi43Ny0yLjc3VjIuNzY5CglDNjIuODM5LDEuMjQxLDYxLjU5NywwLDYwLjA2OSwweiBNMjMuNTQ1LDM4LjE5NGwtMC4wMTMsMC4wMDljLTMuMzcxLDEuMDE3LTcuNDY5LDAuNDEzLTEwLjE4NS0yLjQyMwoJYy0zLjc2My0zLjkyOS0zLjg0Ny0xMC4xMDYsMC0xMy45NTNjMi43NzUtMi43NzUsNi44MDMtMy41MzcsMTAuMjc3LTIuMzA4Yy0yLjA5NSwyLjU3Ny0zLjMwMSw2LjAwMi0zLjMwMSw5LjI4NQoJQzIwLjMyNCwzMi4zNDQsMjEuNTM0LDM1LjU5NiwyMy41NDUsMzguMTk0eiBNMjguMDE1LDM0Ljk2OWMtMC4wNjctMC4wODQtMC4xNDktMC4xNi0wLjIxMy0wLjI0NQoJYy0yLjYzMi0zLjUwNi0yLjUxOS04LjY5OCwwLjEzMy0xMi4xOTdDMzAuODQ3LDI2LjA2NywzMC45NjUsMzEuMzIsMjguMDE1LDM0Ljk2OXogTTQyLjY3MywzNS43OAoJYy0yLjY3MywyLjY3My02LjUxMSwzLjQ4OS05Ljg5NCwyLjQ0N2MtMC4wODItMC4wMjUtMC4xNjEtMC4wNjMtMC4yNDMtMC4wOTFjMi4wMzEtMi40NTEsMy4xNjEtNS45NzcsMy4xNjEtOS4zMzMKCWMwLTMuNTI4LTEuMjAxLTYuNzY4LTMuMTk5LTkuMzYyYzMuMzU4LTEuMDczLDcuNTctMC4yMjEsMTAuMTc2LDIuMzg1QzQ2LjUyLDI1LjY3NCw0Ni41MiwzMS45MzQsNDIuNjczLDM1Ljc4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K",je="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJDOC4xMyAyIDUgNS4xMyA1IDljMCA1LjI1IDcgMTMgNyAxM3M3LTcuNzUgNy0xM2MwLTMuODctMy4xMy03LTctN3ptMCA5LjVjLTEuMzggMC0yLjUtMS4xMi0yLjUtMi41czEuMTItMi41IDIuNS0yLjUgMi41IDEuMTIgMi41IDIuNS0xLjEyIDIuNS0yLjUgMi41eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=",Le="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIwIDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCA0bC04IDUtOC01VjZsOCA1IDgtNXYyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=";function ve(e){const t=Object.assign({h4:"h4",p:"p",h5:"h5",strong:"strong",ul:"ul",li:"li",em:"em"},(0,n.R)(),e.components);return X(i.Fragment,null,"\n","\n","\n",X(oe.A,{sx:{zIndex:-1,position:"absolute",top:0,left:0,right:0,height:"200px"}},X("img",{src:ae,css:{objectFit:"cover",width:"100%",height:"100%"}})),"\n",X(se.A,{alignItems:"center",spacing:2,mt:8,sx:{width:"100%"}},X("img",{src:ie,css:{flexShrink:1,width:"200px"}}),X(ce.A,{mt:8,css:{width:"66%"}},X(t.h4,null,"Thanh, Nguyen"))),"\n",X(le.A,{pt:1,variant:"body1",gutterBottom:!0,textAlign:"center"},X(t.p,null,"Open minded developer with 4+ years of comprehensive expertise in Web App\nDevelopment with willingness to learn and master Full-stack Development. I\ntake great care in the code quality, readability, automator, architecture of\nthe things I build. I'm also an open-source enthusiast and love to collaborate\nwith open-source community.")),"\n",X(le.A,{mt:1,variant:"body1",textAlign:"center",gutterBottom:!0},"Experienced with"),"\n",X(se.A,{direction:"row",justifyContent:"center",spacing:1,useFlexGap:!0,flexWrap:"wrap",mb:2},X(ue.j,{skill:"typescript"}),X(ue.j,{skill:"javascript"}),X(ue.j,{skill:"react"}),X(ue.j,{skill:"redux",logoColor:"#764ABC"}),X(ue.j,{skill:"sass"}),X(ue.j,{skill:"css",skillLogo:"css3",logoColor:"#1572B6"}),X(ue.j,{skill:"electron"}),X(ue.j,{skill:"node.js",skillLogo:"nodedotjs"}),X(ue.j,{skill:"go"}),X(ue.j,{skill:"elixir",logoColor:"#4B275F"}),X(ue.j,{skill:"graphql",logoColor:"#E10098"}),X(ue.j,{skill:"mongodb"}),X(ue.j,{skill:"postgres",skillLogo:"postgresql"}),X(ue.j,{skill:"docker"}),X(ue.j,{skill:"kubernetes"})),"\n",X(le.A,{mt:1,variant:"body1",textAlign:"center",gutterBottom:!0},"Connect with me (@ndthanhdev) on"),"\n",X(se.A,{direction:"row",justifyContent:"center",spacing:1,useFlexGap:!0,flexWrap:"wrap"},X(Me,{connect:"github",connectColor:"#000000",url:"https://github.com/ndthanhdev"}),X(Me,{connect:"linkedin",connectColor:"#0A66C2",url:"https://www.linkedin.com/in/ndthanhdev/"})),"\n",X(se.A,{direction:"row",mt:6,mb:2,justifyContent:"center",css:{width:"100%"}},X(ce.A,{textAlign:"center",css:{width:"100%"}},X(t.h5,null,"Work experience"))),"\n",X(t.p,null,X(t.strong,null,"Zalo")),"\n",X(t.ul,null,"\n",X(t.li,null,X(t.strong,null,"Senior Software Engineer"),"\n",X(t.em,null,"2021 Sep - Present")),"\n",X(t.li,null,X(t.strong,null,"Software Engineer"),"\n",X(t.em,null,"2020 Apr - 2021 Sep")),"\n",X(t.li,null,X(t.strong,null,"Accociate Software Engineer"),"\n",X(t.em,null,"2019 Jun - 2020 Apr")),"\n"),"\n",X(t.p,null,X(t.strong,null,"SAP Labs Vietnam")),"\n",X(t.ul,null,"\n",X(t.li,null,X(t.strong,null,"Accociate Software Engineer"),"\n",X(t.em,null,"2019 Jun - 2018 Sep")),"\n",X(t.li,null,X(t.strong,null,"Intern"),"\n",X(t.em,null,"2018 Jan - 2019 Jun")),"\n"),"\n",X(t.h5,null,"Projects"),"\n",X(t.p,null,X(t.strong,null,"Zalo - Web & PC"),"\n",X(t.em,null,"Zalo is a popular cross-platform messaging, video call app and more")),"\n",X(t.ul,null,"\n",X(t.li,null,"Designing and building rich new features for the web and desktop version of Zalo"),"\n",X(t.li,null,"Building reusable ui components, which have been used in multiple modules"),"\n",X(t.li,null,"Continuosly improving the app performance as well as refactoring the codebase"),"\n"),"\n",X(t.p,null,X(t.strong,null,"SAP Analytics Cloud - KPI Plugin"),"\n",X(t.em,null,"Analytics Cloud is a pluggable SaaS BI platform and KPI plugin is builder of KPIs")),"\n",X(t.ul,null,"\n",X(t.li,null,"Designing and configurating bundler to publising the project as a Plugin for SAP Analytics Cloud"),"\n",X(t.li,null,"Developing and writing test for new features as a part of the plugin"),"\n"),"\n",X(t.p,null,X(t.strong,null,"SAP HANA Cockpit - Analytics Builder"),"\n",X(t.em,null,"Analytics Builder is a graphical SQL design studio to enable flexible queries on top of tables")),"\n",X(t.ul,null,"\n",X(t.li,null,"Implementing Grunt task to transpile & minify that helps speed up project development and improve the load time of the web app"),"\n",X(t.li,null,"Developing new and cutomizing existing features using UI5"),"\n"),"\n",X(t.p,null,X(t.strong,null,"Open Bucket"),"\n",X(t.em,null,"Open Bucket is an incognito P2P storage system, users are paid etherum if they share their disk space with others")),"\n",X(t.ul,null,"\n",X(t.li,null,"Developing Desktop app with React, Redux, Electron"),"\n",X(t.li,null,"Developing Daemon, a service on the user's machine that interacts with Tracker and smart contracts, built with NodeJs, web3.js"),"\n",X(t.li,null,"Developing Tracker that mainly connects users together"),"\n"),"\n",X(t.p,null,X(t.strong,null,"SStore"),"\n",X(t.em,null,"A combination of e-commerce website and vending machines, these components communicate via MQTT protocol")),"\n",X(t.ul,null,"\n",X(t.li,null,"Developing admin service with PostgreSQL, ASP.NET"),"\n",X(t.li,null,"Developing a single page web app for admin and customer with Angular 2"),"\n",X(t.li,null,"Developing and build a simple vending machine with Arduino and other hardwares"),"\n"),"\n",X(t.h5,null,"Achievements"),"\n",X(t.p,null,X(t.strong,null,"Certificate Of Agile Software Development With Scrum"),"\n",X(t.em,null,"Axon Active Vietnam - 2016")),"\n",X(t.p,null,X(t.strong,null,"Microsoft Imagine Cup Innovation Competition Certificate"),"\n",X(t.em,null,"Microsoft Vietnam - 2015")),"\n",X(t.p,null,X(t.strong,null,"2ND Prize App Studio"),"\n",X(t.em,null,"Ton Duc Thang University & Microsoft Vietnam - 2014")),"\n",X(t.h5,null,"Education"),"\n",X(t.p,null,X(t.strong,null,"BSc in Computer Science"),"\n",X(t.em,null,"Ton Duc Thang University, Ho Chi Minh - 2018")),"\n",X(t.h5,null,"Contact info"),"\n",X(oe.A,{css:{display:"grid",gridTemplateColumns:"20px 1fr 20px 1fr",gridAutoRows:"auto",gridGap:"8px",alignItems:"center",justifyItems:"start"}},X("img",{src:ye}),X(le.A,null,"Nguyễn Duy Thanh"),X("img",{src:Le}),X(le.A,null,"ndthanhdev@outlook.com"),X("img",{src:we}),X(le.A,null,"Male"),X("img",{src:je,width:"16px"}),X(le.A,null,"District 7, Ho Chi Minh, Vietnam"),X("img",{src:be}),X(le.A,null,"1996")),"\n",X(se.A,{direction:"row",mt:6,mb:2,justifyContent:"center",css:{width:"100%"}},X(ce.A,{css:{width:"100%"}})),"\n",X(se.A,{direction:"row",mt:0,mb:2,justifyContent:"center",css:{width:"100%"}},X(t.p,null,"Latest at"," ","\n",X(pe.A,{href:"https://ndthanhdev.github.io/cv"},"ndthanhdev.github.io/cv"))))}var Ae=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.R)(),e.components);return t?X(t,e,X(ve,e)):ve(e)},Ce=r(3236),Ie=r(284),Se=r(2095),ke=r(7691);const Ne={root:{name:"zl1inp",styles:"display:flex;justify-content:center"},stack:{name:"gi56kn",styles:"max-width:210mm;padding:0 10mm 10mm 10mm;width:100%"}},xe=e=>{let{children:t}=e;return(0,me.Y)("div",{css:Ne.root},(0,me.Y)(se.A,{css:Ne.stack},t))},ze=e=>{var t,r;let{children:n,data:i}=e;return(0,me.Y)(Se.oR,{overrideThemeMode:ke.l.Light},(0,me.Y)(Ce.K,null,(0,me.Y)("title",null,null===(t=i.mdx)||void 0===t||null===(r=t.frontmatter)||void 0===r?void 0:r.title)),(0,me.Y)(Ie.g,null,(0,me.Y)(xe,null,n)))};function De(e){return i.createElement(ze,e,i.createElement(Ae,e))}}}]);
//# sourceMappingURL=component---src-layouts-cv-index-tsx-content-file-path-content-cv-cv-mdx-f72e298988b6247a7f0e.js.map