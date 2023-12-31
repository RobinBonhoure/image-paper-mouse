(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ga="148",vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Eu=0,ho=1,Au=2,Yl=1,Cu=2,ur=3,ui=0,Kt=1,ps=2,Ir=3,On=0,Bi=1,fo=2,po=3,mo=4,Lu=5,Ni=100,Pu=101,Du=102,go=103,_o=104,Ru=200,Iu=201,Ou=202,Fu=203,jl=204,Zl=205,Nu=206,zu=207,Uu=208,ku=209,Bu=210,Gu=0,Vu=1,Wu=2,ma=3,Hu=4,qu=5,Xu=6,Yu=7,$l=0,ju=1,Zu=2,wn=0,$u=1,Ku=2,Ju=3,Qu=4,eh=5,Kl=300,qi=301,Xi=302,ga=303,_a=304,ms=306,xa=1e3,nn=1001,va=1002,Mt=1003,xo=1004,Es=1005,Xt=1006,th=1007,_r=1008,hi=1009,nh=1010,ih=1011,Jl=1012,rh=1013,ei=1014,ti=1015,xr=1016,sh=1017,ah=1018,Gi=1020,oh=1021,lh=1022,rn=1023,ch=1024,uh=1025,ii=1026,Yi=1027,hh=1028,fh=1029,dh=1030,ph=1031,mh=1033,As=33776,Cs=33777,Ls=33778,Ps=33779,vo=35840,yo=35841,Mo=35842,bo=35843,gh=36196,So=37492,wo=37496,To=37808,Eo=37809,Ao=37810,Co=37811,Lo=37812,Po=37813,Do=37814,Ro=37815,Io=37816,Oo=37817,Fo=37818,No=37819,zo=37820,Uo=37821,ko=36492,fi=3e3,Be=3001,_h=3200,xh=3201,vh=0,yh=1,an="srgb",vr="srgb-linear",Ds=7680,Mh=519,Bo=35044,Go="300 es",ya=1035;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rs=Math.PI/180,Vo=180/Math.PI;function Cr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[o&255]+dt[o>>8&255]+dt[o>>16&255]+dt[o>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function wt(o,e,t){return Math.max(e,Math.min(t,o))}function bh(o,e){return(o%e+e)%e}function Is(o,e,t){return(1-t)*o+t*e}function Wo(o){return(o&o-1)===0&&o!==0}function Ma(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Or(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Rt(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],g=n[8],h=i[0],p=i[3],_=i[6],b=i[1],v=i[4],y=i[7],M=i[2],A=i[5],L=i[8];return r[0]=a*h+s*b+l*M,r[3]=a*p+s*v+l*A,r[6]=a*_+s*y+l*L,r[1]=c*h+u*b+f*M,r[4]=c*p+u*v+f*A,r[7]=c*_+u*y+f*L,r[2]=d*h+m*b+g*M,r[5]=d*p+m*v+g*A,r[8]=d*_+m*y+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*a-s*c,d=s*l-u*r,m=c*r-a*l,g=t*f+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/g;return e[0]=f*h,e[1]=(i*c-u*n)*h,e[2]=(s*n-i*a)*h,e[3]=d*h,e[4]=(u*t-i*l)*h,e[5]=(i*r-s*t)*h,e[6]=m*h,e[7]=(n*l-c*t)*h,e[8]=(a*t-n*r)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Os.makeScale(e,t)),this}rotate(e){return this.premultiply(Os.makeRotation(-e)),this}translate(e,t){return this.premultiply(Os.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new zt;function Ql(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function yr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ri(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ts(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Fs={[an]:{[vr]:ri},[vr]:{[an]:ts}},vt={legacyMode:!0,get workingColorSpace(){return vr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Fs[e]&&Fs[e][t]!==void 0){const n=Fs[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},Qt={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Ns(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Nr(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=bh(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ns(a,r,e+1/3),this.g=Ns(a,r,e),this.b=Ns(a,r,e-1/3)}return vt.toWorkingColorSpace(this,i),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,vt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,vt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,vt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,vt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=an){const n=ec[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return vt.fromWorkingColorSpace(Nr(this,tt),e),wt(tt.r*255,0,255)<<16^wt(tt.g*255,0,255)<<8^wt(tt.b*255,0,255)<<0}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Nr(this,tt),t);const n=tt.r,i=tt.g,r=tt.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const f=a-s;switch(c=u<=.5?f/(a+s):f/(2-a-s),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Nr(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=an){return vt.fromWorkingColorSpace(Nr(this,tt),e),e!==an?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=n,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qt),e.getHSL(Fr);const n=Is(Qt.h,Fr.h,t),i=Is(Qt.s,Fr.s,t),r=Is(Qt.l,Fr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}We.NAMES=ec;let Mi;class tc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=yr("canvas")),Mi.width=e.width,Mi.height=e.height;const n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class nc{constructor(e=null){this.isSource=!0,this.uuid=Cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(zs(i[a].image)):r.push(zs(i[a]))}else r=zs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function zs(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?tc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sh=0;class bt extends gi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=nn,i=nn,r=Xt,a=_r,s=rn,l=hi,c=bt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Cr(),this.name="",this.source=new nc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Kl;bt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],h=l[2],p=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-h)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+h)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(m+1)/2,M=(_+1)/2,A=(u+d)/4,L=(f+h)/4,x=(g+p)/4;return v>y&&v>M?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=L/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=L/r,i=x/r),this.set(n,i,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(f-h)*(f-h)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-h)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class di extends gi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ic extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wh extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=r[a+0],m=r[a+1],g=r[a+2],h=r[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=h;return}if(f!==h||l!==d||c!==m||u!==g){let p=1-s;const _=l*d+c*m+u*g+f*h,b=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const M=Math.sqrt(v),A=Math.atan2(M,_*b);p=Math.sin(p*A)/M,s=Math.sin(s*A)/M}const y=s*b;if(l=l*p+d*y,c=c*p+m*y,u=u*p+g*y,f=f*p+h*y,p===1-s){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=s*g+u*f+l*m-c*d,e[t+1]=l*g+u*d+c*f-s*m,e[t+2]=c*g+u*m+s*d-l*f,e[t+3]=u*g-s*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),f=s(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+s+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>f){const m=2*Math.sqrt(1+n-s-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-n-f);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ho.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*i-s*n,u=l*n+s*t-r*i,f=l*i+r*n-a*t,d=-r*t-a*n-s*i;return this.x=c*l+d*-r+u*-s-f*-a,this.y=u*l+d*-a+f*-r-c*-s,this.z=f*l+d*-s+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Us.copy(this).projectOnVector(e),this.sub(Us)}reflect(e){return this.sub(Us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new B,Ho=new pi;class Lr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>r&&(r=u),f>a&&(a=f),d>s&&(s=d)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>r&&(r=u),f>a&&(a=f),d>s&&(s=d)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)qn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(qn)}else n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox),ks.applyMatrix4(e.matrixWorld),this.union(ks);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),zr.subVectors(this.max,nr),bi.subVectors(e.a,nr),Si.subVectors(e.b,nr),wi.subVectors(e.c,nr),An.subVectors(Si,bi),Cn.subVectors(wi,Si),Xn.subVectors(bi,wi);let t=[0,-An.z,An.y,0,-Cn.z,Cn.y,0,-Xn.z,Xn.y,An.z,0,-An.x,Cn.z,0,-Cn.x,Xn.z,0,-Xn.x,-An.y,An.x,0,-Cn.y,Cn.x,0,-Xn.y,Xn.x,0];return!Bs(t,bi,Si,wi,zr)||(t=[1,0,0,0,1,0,0,0,1],!Bs(t,bi,Si,wi,zr))?!1:(Ur.crossVectors(An,Cn),t=[Ur.x,Ur.y,Ur.z],Bs(t,bi,Si,wi,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return qn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new B,new B,new B,new B,new B,new B,new B,new B],qn=new B,ks=new Lr,bi=new B,Si=new B,wi=new B,An=new B,Cn=new B,Xn=new B,nr=new B,zr=new B,Ur=new B,Yn=new B;function Bs(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){Yn.fromArray(o,r);const s=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Th=new Lr,ir=new B,Gs=new B;class Va{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Th.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ir,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Gs)),this.expandByPoint(ir.copy(e.center).sub(Gs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new B,Vs=new B,kr=new B,Ln=new B,Ws=new B,Br=new B,Hs=new B;class rc{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.direction).multiplyScalar(t).add(this.origin),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Vs.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),Ln.copy(this.origin).sub(Vs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(kr),s=Ln.dot(this.direction),l=-Ln.dot(kr),c=Ln.lengthSq(),u=Math.abs(1-a*a);let f,d,m,g;if(u>0)if(f=a*l-s,d=a*s-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const h=1/u;f*=h,d*=h,m=f*(f+a*d+2*s)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+s)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+s)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+s)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+s)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+s)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(kr).multiplyScalar(d).add(Vs),m}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),i=gn.dot(gn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(s=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,i,r){Ws.subVectors(t,e),Br.subVectors(n,e),Hs.crossVectors(Ws,Br);let a=this.direction.dot(Hs),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Ln.subVectors(this.origin,e);const l=s*this.direction.dot(Br.crossVectors(Ln,Br));if(l<0)return null;const c=s*this.direction.dot(Ws.cross(Ln));if(c<0||l+c>a)return null;const u=-s*Ln.dot(Hs);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,l,c,u,f,d,m,g,h,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=d,_[3]=m,_[7]=g,_[11]=h,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*f,g=s*u,h=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-h*c,t[9]=-s*l,t[2]=h-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,h=c*f;t[0]=d+h*s,t[4]=g*s-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-s,t[2]=m*s-g,t[6]=h+d*s,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,h=c*f;t[0]=d-h*s,t[4]=-a*f,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*u,t[9]=h-d*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,g=s*u,h=s*f;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+h,t[1]=l*f,t[5]=h*c+d,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=s*l,h=s*c;t[0]=l*u,t[4]=h-d*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*f+g,t[10]=d-h*f}else if(e.order==="XZY"){const d=a*l,m=a*c,g=s*l,h=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+h,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=s*u,t[10]=h*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eh,e,Ah)}lookAt(e,t,n){const i=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Pn.crossVectors(n,It),Pn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Pn.crossVectors(n,It)),Pn.normalize(),Gr.crossVectors(It,Pn),i[0]=Pn.x,i[4]=Gr.x,i[8]=It.x,i[1]=Pn.y,i[5]=Gr.y,i[9]=It.y,i[2]=Pn.z,i[6]=Gr.z,i[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],g=n[2],h=n[6],p=n[10],_=n[14],b=n[3],v=n[7],y=n[11],M=n[15],A=i[0],L=i[4],x=i[8],w=i[12],P=i[1],k=i[5],Y=i[9],I=i[13],R=i[2],U=i[6],W=i[10],j=i[14],V=i[3],J=i[7],K=i[11],G=i[15];return r[0]=a*A+s*P+l*R+c*V,r[4]=a*L+s*k+l*U+c*J,r[8]=a*x+s*Y+l*W+c*K,r[12]=a*w+s*I+l*j+c*G,r[1]=u*A+f*P+d*R+m*V,r[5]=u*L+f*k+d*U+m*J,r[9]=u*x+f*Y+d*W+m*K,r[13]=u*w+f*I+d*j+m*G,r[2]=g*A+h*P+p*R+_*V,r[6]=g*L+h*k+p*U+_*J,r[10]=g*x+h*Y+p*W+_*K,r[14]=g*w+h*I+p*j+_*G,r[3]=b*A+v*P+y*R+M*V,r[7]=b*L+v*k+y*U+M*J,r[11]=b*x+v*Y+y*W+M*K,r[15]=b*w+v*I+y*j+M*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],h=e[7],p=e[11],_=e[15];return g*(+r*l*f-i*c*f-r*s*d+n*c*d+i*s*m-n*l*m)+h*(+t*l*m-t*c*d+r*a*d-i*a*m+i*c*u-r*l*u)+p*(+t*c*f-t*s*m-r*a*f+n*a*m+r*s*u-n*c*u)+_*(-i*s*u-t*l*f+t*s*d+i*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],h=e[13],p=e[14],_=e[15],b=f*p*c-h*d*c+h*l*m-s*p*m-f*l*_+s*d*_,v=g*d*c-u*p*c-g*l*m+a*p*m+u*l*_-a*d*_,y=u*h*c-g*f*c+g*s*m-a*h*m-u*s*_+a*f*_,M=g*f*l-u*h*l-g*s*d+a*h*d+u*s*p-a*f*p,A=t*b+n*v+i*y+r*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=b*L,e[1]=(h*d*r-f*p*r-h*i*m+n*p*m+f*i*_-n*d*_)*L,e[2]=(s*p*r-h*l*r+h*i*c-n*p*c-s*i*_+n*l*_)*L,e[3]=(f*l*r-s*d*r-f*i*c+n*d*c+s*i*m-n*l*m)*L,e[4]=v*L,e[5]=(u*p*r-g*d*r+g*i*m-t*p*m-u*i*_+t*d*_)*L,e[6]=(g*l*r-a*p*r-g*i*c+t*p*c+a*i*_-t*l*_)*L,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*m+t*l*m)*L,e[8]=y*L,e[9]=(g*f*r-u*h*r-g*n*m+t*h*m+u*n*_-t*f*_)*L,e[10]=(a*h*r-g*s*r+g*n*c-t*h*c-a*n*_+t*s*_)*L,e[11]=(u*s*r-a*f*r-u*n*c+t*f*c+a*n*m-t*s*m)*L,e[12]=M*L,e[13]=(u*h*i-g*f*i+g*n*d-t*h*d-u*n*p+t*f*p)*L,e[14]=(g*s*i-a*h*i-g*n*l+t*h*l+a*n*p-t*s*p)*L,e[15]=(a*f*i-u*s*i+u*n*l-t*f*l-a*n*d+t*s*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,l=e.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,c=r+r,u=a+a,f=s+s,d=r*c,m=r*u,g=r*f,h=a*u,p=a*f,_=s*f,b=l*c,v=l*u,y=l*f,M=n.x,A=n.y,L=n.z;return i[0]=(1-(h+_))*M,i[1]=(m+y)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(d+_))*A,i[6]=(p+b)*A,i[7]=0,i[8]=(g+v)*L,i[9]=(p-b)*L,i[10]=(1-(d+h))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ti.set(i[0],i[1],i[2]).length();const a=Ti.set(i[4],i[5],i[6]).length(),s=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const c=1/r,u=1/a,f=1/s;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=f,s[13]=0,s[2]=0,s[6]=0,s[10]=d,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),f=(t+e)*l,d=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-f,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-d,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new B,en=new ht,Eh=new B(0,0,0),Ah=new B(1,1,1),Pn=new B,Gr=new B,It=new B,qo=new ht,Xo=new pi;class Pr{constructor(e=0,t=0,n=0,i=Pr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(wt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Pr.DefaultOrder="XYZ";Pr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Wa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ch=0;const Yo=new B,Ei=new pi,_n=new ht,Vr=new B,rr=new B,Lh=new B,Ph=new pi,jo=new B(1,0,0),Zo=new B(0,1,0),$o=new B(0,0,1),Dh={type:"added"},Ko={type:"removed"};class Ut extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DefaultUp.clone();const e=new B,t=new Pr,n=new pi,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new zt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ut.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ut.DefaultMatrixWorldAutoUpdate,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(jo,e)}rotateY(e){return this.rotateOnAxis(Zo,e)}rotateZ(e){return this.rotateOnAxis($o,e)}translateOnAxis(e,t){return Yo.copy(e).applyQuaternion(this.quaternion),this.position.add(Yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jo,e)}translateY(e){return this.translateOnAxis(Zo,e)}translateZ(e){return this.translateOnAxis($o,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vr.copy(e):Vr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(rr,Vr,this.up):_n.lookAt(Vr,rr,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(_n),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ko)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ko)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Lh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Ph,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ut.DefaultUp=new B(0,1,0);Ut.DefaultMatrixAutoUpdate=!0;Ut.DefaultMatrixWorldAutoUpdate=!0;const tn=new B,xn=new B,qs=new B,vn=new B,Ai=new B,Ci=new B,Jo=new B,Xs=new B,Ys=new B,js=new B;class bn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){tn.subVectors(i,t),xn.subVectors(n,t),qs.subVectors(e,t);const a=tn.dot(tn),s=tn.dot(xn),l=tn.dot(qs),c=xn.dot(xn),u=xn.dot(qs),f=a*c-s*s;if(f===0)return r.set(-2,-1,-1);const d=1/f,m=(c*l-s*u)*d,g=(a*u-s*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn),vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,n,i,r,a,s,l){return this.getBarycoord(e,t,n,i,vn),l.set(0,0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(s,vn.z),l}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),xn.subVectors(e,t),tn.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),tn.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return bn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Ai.subVectors(i,n),Ci.subVectors(r,n),Xs.subVectors(e,n);const l=Ai.dot(Xs),c=Ci.dot(Xs);if(l<=0&&c<=0)return t.copy(n);Ys.subVectors(e,i);const u=Ai.dot(Ys),f=Ci.dot(Ys);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ai,a);js.subVectors(e,r);const m=Ai.dot(js),g=Ci.dot(js);if(g>=0&&m<=g)return t.copy(r);const h=m*c-l*g;if(h<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Ci,s);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Jo.subVectors(r,i),s=(f-u)/(f-u+(m-g)),t.copy(i).addScaledVector(Jo,s);const _=1/(p+h+d);return a=h*_,s=d*_,t.copy(n).addScaledVector(Ai,a).addScaledVector(Ci,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rh=0;class gs extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=Bi,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=jl,this.blendDst=Zl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sc extends gs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new B,Wr=new we;class un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Or(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Or(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Or(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ac extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class oc extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class si extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ih=0;const Wt=new ht,Zs=new Ut,Li=new B,Ot=new Lr,sr=new Lr,ot=new B;class _i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ql(e)?oc:ac)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Zs.lookAt(e),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ot.setFromBufferAttribute(r),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];sr.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(Ot.min,sr.min),Ot.expandByPoint(ot),ot.addVectors(Ot.max,sr.max),Ot.expandByPoint(ot)):(Ot.expandByPoint(sr.min),Ot.expandByPoint(sr.max))}Ot.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)ot.fromBufferAttribute(s,c),l&&(Li.fromBufferAttribute(e,c),ot.add(Li)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<s;P++)c[P]=new B,u[P]=new B;const f=new B,d=new B,m=new B,g=new we,h=new we,p=new we,_=new B,b=new B;function v(P,k,Y){f.fromArray(i,P*3),d.fromArray(i,k*3),m.fromArray(i,Y*3),g.fromArray(a,P*2),h.fromArray(a,k*2),p.fromArray(a,Y*2),d.sub(f),m.sub(f),h.sub(g),p.sub(g);const I=1/(h.x*p.y-p.x*h.y);isFinite(I)&&(_.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(I),b.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(I),c[P].add(_),c[k].add(_),c[Y].add(_),u[P].add(b),u[k].add(b),u[Y].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,k=y.length;P<k;++P){const Y=y[P],I=Y.start,R=Y.count;for(let U=I,W=I+R;U<W;U+=3)v(n[U+0],n[U+1],n[U+2])}const M=new B,A=new B,L=new B,x=new B;function w(P){L.fromArray(r,P*3),x.copy(L);const k=c[P];M.copy(k),M.sub(L.multiplyScalar(L.dot(k))).normalize(),A.crossVectors(x,k);const I=A.dot(u[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=I}for(let P=0,k=y.length;P<k;++P){const Y=y[P],I=Y.start,R=Y.count;for(let U=I,W=I+R;U<W;U+=3)w(n[U+0]),w(n[U+1]),w(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new B,r=new B,a=new B,s=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,h),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,h),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(h,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let h=0,p=l.length;h<p;h++){s.isInterleavedBufferAttribute?m=l[h]*s.data.stride+s.offset:m=l[h]*u;for(let _=0;_<u;_++)d[g++]=c[m++]}return new un(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qo=new ht,Pi=new rc,$s=new Va,ar=new B,or=new B,lr=new B,Ks=new B,Hr=new B,qr=new we,Xr=new we,Yr=new we,Js=new B,jr=new B;class Sn extends Ut{constructor(e=new _i,t=new sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],f=r[l];u!==0&&(Ks.fromBufferAttribute(f,e),a?Hr.addScaledVector(Ks,u):Hr.addScaledVector(Ks.sub(t),u))}t.add(Hr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),e.ray.intersectsSphere($s)===!1)||(Qo.copy(r).invert(),Pi.copy(e.ray).applyMatrix4(Qo),n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,d=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const h=f[m],p=i[h.materialIndex],_=Math.max(h.start,d.start),b=Math.min(s.count,Math.min(h.start+h.count,d.start+d.count));for(let v=_,y=b;v<y;v+=3){const M=s.getX(v),A=s.getX(v+1),L=s.getX(v+2);a=Zr(this,p,e,Pi,c,u,M,A,L),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const m=Math.max(0,d.start),g=Math.min(s.count,d.start+d.count);for(let h=m,p=g;h<p;h+=3){const _=s.getX(h),b=s.getX(h+1),v=s.getX(h+2);a=Zr(this,i,e,Pi,c,u,_,b,v),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=f.length;m<g;m++){const h=f[m],p=i[h.materialIndex],_=Math.max(h.start,d.start),b=Math.min(l.count,Math.min(h.start+h.count,d.start+d.count));for(let v=_,y=b;v<y;v+=3){const M=v,A=v+1,L=v+2;a=Zr(this,p,e,Pi,c,u,M,A,L),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=h.materialIndex,t.push(a))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let h=m,p=g;h<p;h+=3){const _=h,b=h+1,v=h+2;a=Zr(this,i,e,Pi,c,u,_,b,v),a&&(a.faceIndex=Math.floor(h/3),t.push(a))}}}}function Oh(o,e,t,n,i,r,a,s){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,e.side===ui,s),l===null)return null;jr.copy(s),jr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(jr);return c<t.near||c>t.far?null:{distance:c,point:jr.clone(),object:o}}function Zr(o,e,t,n,i,r,a,s,l){o.getVertexPosition(a,ar),o.getVertexPosition(s,or),o.getVertexPosition(l,lr);const c=Oh(o,e,t,n,ar,or,lr,Js);if(c){i&&(qr.fromBufferAttribute(i,a),Xr.fromBufferAttribute(i,s),Yr.fromBufferAttribute(i,l),c.uv=bn.getUV(Js,ar,or,lr,qr,Xr,Yr,new we)),r&&(qr.fromBufferAttribute(r,a),Xr.fromBufferAttribute(r,s),Yr.fromBufferAttribute(r,l),c.uv2=bn.getUV(Js,ar,or,lr,qr,Xr,Yr,new we));const u={a,b:s,c:l,normal:new B,materialIndex:0};bn.getNormal(ar,or,lr,u.normal),c.face=u}return c}class Dr extends _i{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new si(c,3)),this.setAttribute("normal",new si(u,3)),this.setAttribute("uv",new si(f,2));function g(h,p,_,b,v,y,M,A,L,x,w){const P=y/L,k=M/x,Y=y/2,I=M/2,R=A/2,U=L+1,W=x+1;let j=0,V=0;const J=new B;for(let K=0;K<W;K++){const G=K*k-I;for(let N=0;N<U;N++){const re=N*P-Y;J[h]=re*b,J[p]=G*v,J[_]=R,c.push(J.x,J.y,J.z),J[h]=0,J[p]=0,J[_]=A>0?1:-1,u.push(J.x,J.y,J.z),f.push(N/L),f.push(1-K/x),j+=1}}for(let K=0;K<x;K++)for(let G=0;G<L;G++){const N=d+G+U*K,re=d+G+U*(K+1),Q=d+(G+1)+U*(K+1),ie=d+(G+1)+U*K;l.push(N,re,ie),l.push(re,Q,ie),V+=6}s.addGroup(m,V,w),m+=V,d+=j}}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yt(o){const e={};for(let t=0;t<o.length;t++){const n=ji(o[t]);for(const i in n)e[i]=n[i]}return e}function Fh(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function lc(o){return o.getRenderTarget()===null&&o.outputEncoding===Be?an:vr}const Nh={clone:ji,merge:yt};var zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends gs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zh,this.fragmentShader=Uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Fh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cc extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Yt extends cc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Ri=1;class kh extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Yt(Di,Ri,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Yt(Di,Ri,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Yt(Di,Ri,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new Yt(Di,Ri,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new Yt(Di,Ri,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Yt(Di,Ri,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=wn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class uc extends bt{constructor(e,t,n,i,r,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:qi,super(e,t,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bh extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new uc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Dr(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:On});r.uniforms.tEquirect.value=t;const a=new Sn(i,r),s=t.minFilter;return t.minFilter===_r&&(t.minFilter=Xt),new kh(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Qs=new B,Gh=new B,Vh=new zt;class $n{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qs.subVectors(n,t).cross(Gh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Qs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vh.getNormalMatrix(e),i=this.coplanarPoint(Qs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Va,$r=new B;class hc{constructor(e=new $n,t=new $n,n=new $n,i=new $n,r=new $n,a=new $n){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],m=n[9],g=n[10],h=n[11],p=n[12],_=n[13],b=n[14],v=n[15];return t[0].setComponents(s-i,f-l,h-d,v-p).normalize(),t[1].setComponents(s+i,f+l,h+d,v+p).normalize(),t[2].setComponents(s+r,f+c,h+m,v+_).normalize(),t[3].setComponents(s-r,f-c,h-m,v-_).normalize(),t[4].setComponents(s-a,f-u,h-g,v-b).normalize(),t[5].setComponents(s+a,f+u,h+g,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($r.x=i.normal.x>0?e.max.x:e.min.x,$r.y=i.normal.y>0?e.max.y:e.min.y,$r.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fc(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function Wh(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,d=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const d=u.array,m=u.updateRange;o.bindBuffer(f,c),m.count===-1?o.bufferSubData(f,0,d):(t?o.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):o.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:s,update:l}}class _s extends _i{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,f=e/s,d=t/l,m=[],g=[],h=[],p=[];for(let _=0;_<u;_++){const b=_*d-a;for(let v=0;v<c;v++){const y=v*f-r;g.push(y,-b,0),h.push(0,0,1),p.push(v/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<s;b++){const v=b+c*_,y=b+c*(_+1),M=b+1+c*(_+1),A=b+1+c*_;m.push(v,y,A),m.push(y,M,A)}this.setIndex(m),this.setAttribute("position",new si(g,3)),this.setAttribute("normal",new si(h,3)),this.setAttribute("uv",new si(p,2))}static fromJSON(e){return new _s(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$h="vec3 transformed = vec3( position );",Kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Qh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ef=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ff=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Df=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Of=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Bf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ed=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,sd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,md=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,gd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Md=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Td=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ad=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ld=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Id=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Od=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Fd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Nd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,zd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ud=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,kd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Bd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Gd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Vd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$d=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,be={alphamap_fragment:Hh,alphamap_pars_fragment:qh,alphatest_fragment:Xh,alphatest_pars_fragment:Yh,aomap_fragment:jh,aomap_pars_fragment:Zh,begin_vertex:$h,beginnormal_vertex:Kh,bsdfs:Jh,iridescence_fragment:Qh,bumpmap_pars_fragment:ef,clipping_planes_fragment:tf,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:rf,clipping_planes_vertex:sf,color_fragment:af,color_pars_fragment:of,color_pars_vertex:lf,color_vertex:cf,common:uf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:ff,displacementmap_pars_vertex:df,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,encodings_fragment:_f,encodings_pars_fragment:xf,envmap_fragment:vf,envmap_common_pars_fragment:yf,envmap_pars_fragment:Mf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Of,envmap_vertex:Sf,fog_vertex:wf,fog_pars_vertex:Tf,fog_fragment:Ef,fog_pars_fragment:Af,gradientmap_pars_fragment:Cf,lightmap_fragment:Lf,lightmap_pars_fragment:Pf,lights_lambert_fragment:Df,lights_lambert_pars_fragment:Rf,lights_pars_begin:If,lights_toon_fragment:Ff,lights_toon_pars_fragment:Nf,lights_phong_fragment:zf,lights_phong_pars_fragment:Uf,lights_physical_fragment:kf,lights_physical_pars_fragment:Bf,lights_fragment_begin:Gf,lights_fragment_maps:Vf,lights_fragment_end:Wf,logdepthbuf_fragment:Hf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:Xf,logdepthbuf_vertex:Yf,map_fragment:jf,map_pars_fragment:Zf,map_particle_fragment:$f,map_particle_pars_fragment:Kf,metalnessmap_fragment:Jf,metalnessmap_pars_fragment:Qf,morphcolor_vertex:ed,morphnormal_vertex:td,morphtarget_pars_vertex:nd,morphtarget_vertex:id,normal_fragment_begin:rd,normal_fragment_maps:sd,normal_pars_fragment:ad,normal_pars_vertex:od,normal_vertex:ld,normalmap_pars_fragment:cd,clearcoat_normal_fragment_begin:ud,clearcoat_normal_fragment_maps:hd,clearcoat_pars_fragment:fd,iridescence_pars_fragment:dd,output_fragment:pd,packing:md,premultiplied_alpha_fragment:gd,project_vertex:_d,dithering_fragment:xd,dithering_pars_fragment:vd,roughnessmap_fragment:yd,roughnessmap_pars_fragment:Md,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:Sd,shadowmap_vertex:wd,shadowmask_pars_fragment:Td,skinbase_vertex:Ed,skinning_pars_vertex:Ad,skinning_vertex:Cd,skinnormal_vertex:Ld,specularmap_fragment:Pd,specularmap_pars_fragment:Dd,tonemapping_fragment:Rd,tonemapping_pars_fragment:Id,transmission_fragment:Od,transmission_pars_fragment:Fd,uv_pars_fragment:Nd,uv_pars_vertex:zd,uv_vertex:Ud,uv2_pars_fragment:kd,uv2_pars_vertex:Bd,uv2_vertex:Gd,worldpos_vertex:Vd,background_vert:Wd,background_frag:Hd,backgroundCube_vert:qd,backgroundCube_frag:Xd,cube_vert:Yd,cube_frag:jd,depth_vert:Zd,depth_frag:$d,distanceRGBA_vert:Kd,distanceRGBA_frag:Jd,equirect_vert:Qd,equirect_frag:ep,linedashed_vert:tp,linedashed_frag:np,meshbasic_vert:ip,meshbasic_frag:rp,meshlambert_vert:sp,meshlambert_frag:ap,meshmatcap_vert:op,meshmatcap_frag:lp,meshnormal_vert:cp,meshnormal_frag:up,meshphong_vert:hp,meshphong_frag:fp,meshphysical_vert:dp,meshphysical_frag:pp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:_p,points_frag:xp,shadow_vert:vp,shadow_frag:yp,sprite_vert:Mp,sprite_frag:bp},se={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zt},uv2Transform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}}},on={basic:{uniforms:yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new We(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:yt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:yt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:yt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new We(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:yt([se.points,se.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:yt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:yt([se.common,se.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:yt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:yt([se.sprite,se.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:yt([se.common,se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:yt([se.lights,se.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};on.physical={uniforms:yt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Kr={r:0,b:0,g:0};function Sp(o,e,t,n,i,r,a){const s=new We(0);let l=r===!0?0:1,c,u,f=null,d=0,m=null;function g(p,_){let b=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const y=o.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?h(s,l):v&&v.isColor&&(h(v,1),b=!0),(o.autoClear||b)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ms)?(u===void 0&&(u=new Sn(new Dr(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:ji(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==Be,(f!==v||d!==v.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Sn(new _s(2,2),new zn({name:"BackgroundMaterial",uniforms:ji(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==Be,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function h(p,_){p.getRGB(Kr,lc(o)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,_,a)}return{getClearColor:function(){return s},setClearColor:function(p,_=1){s.set(p),l=_,h(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(s,l)},render:g}}function wp(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function f(R,U,W,j,V){let J=!1;if(a){const K=h(j,W,U);c!==K&&(c=K,m(c.object)),J=_(R,j,W,V),J&&b(R,j,W,V)}else{const K=U.wireframe===!0;(c.geometry!==j.id||c.program!==W.id||c.wireframe!==K)&&(c.geometry=j.id,c.program=W.id,c.wireframe=K,J=!0)}V!==null&&t.update(V,34963),(J||u)&&(u=!1,x(R,U,W,j),V!==null&&o.bindBuffer(34963,t.get(V).buffer))}function d(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?o.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function h(R,U,W){const j=W.wireframe===!0;let V=s[R.id];V===void 0&&(V={},s[R.id]=V);let J=V[U.id];J===void 0&&(J={},V[U.id]=J);let K=J[j];return K===void 0&&(K=p(d()),J[j]=K),K}function p(R){const U=[],W=[],j=[];for(let V=0;V<i;V++)U[V]=0,W[V]=0,j[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:j,object:R,attributes:{},index:null}}function _(R,U,W,j){const V=c.attributes,J=U.attributes;let K=0;const G=W.getAttributes();for(const N in G)if(G[N].location>=0){const Q=V[N];let ie=J[N];if(ie===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),Q===void 0||Q.attribute!==ie||ie&&Q.data!==ie.data)return!0;K++}return c.attributesNum!==K||c.index!==j}function b(R,U,W,j){const V={},J=U.attributes;let K=0;const G=W.getAttributes();for(const N in G)if(G[N].location>=0){let Q=J[N];Q===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor));const ie={};ie.attribute=Q,Q&&Q.data&&(ie.data=Q.data),V[N]=ie,K++}c.attributes=V,c.attributesNum=K,c.index=j}function v(){const R=c.newAttributes;for(let U=0,W=R.length;U<W;U++)R[U]=0}function y(R){M(R,0)}function M(R,U){const W=c.newAttributes,j=c.enabledAttributes,V=c.attributeDivisors;W[R]=1,j[R]===0&&(o.enableVertexAttribArray(R),j[R]=1),V[R]!==U&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),V[R]=U)}function A(){const R=c.newAttributes,U=c.enabledAttributes;for(let W=0,j=U.length;W<j;W++)U[W]!==R[W]&&(o.disableVertexAttribArray(W),U[W]=0)}function L(R,U,W,j,V,J){n.isWebGL2===!0&&(W===5124||W===5125)?o.vertexAttribIPointer(R,U,W,V,J):o.vertexAttribPointer(R,U,W,j,V,J)}function x(R,U,W,j){if(n.isWebGL2===!1&&(R.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=j.attributes,J=W.getAttributes(),K=U.defaultAttributeValues;for(const G in J){const N=J[G];if(N.location>=0){let re=V[G];if(re===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),re!==void 0){const Q=re.normalized,ie=re.itemSize,Z=t.get(re);if(Z===void 0)continue;const Ee=Z.buffer,fe=Z.type,_e=Z.bytesPerElement;if(re.isInterleavedBufferAttribute){const he=re.data,Oe=he.stride,Me=re.offset;if(he.isInstancedInterleavedBuffer){for(let xe=0;xe<N.locationSize;xe++)M(N.location+xe,he.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let xe=0;xe<N.locationSize;xe++)y(N.location+xe);o.bindBuffer(34962,Ee);for(let xe=0;xe<N.locationSize;xe++)L(N.location+xe,ie/N.locationSize,fe,Q,Oe*_e,(Me+ie/N.locationSize*xe)*_e)}else{if(re.isInstancedBufferAttribute){for(let he=0;he<N.locationSize;he++)M(N.location+he,re.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let he=0;he<N.locationSize;he++)y(N.location+he);o.bindBuffer(34962,Ee);for(let he=0;he<N.locationSize;he++)L(N.location+he,ie/N.locationSize,fe,Q,ie*_e,ie/N.locationSize*he*_e)}}else if(K!==void 0){const Q=K[G];if(Q!==void 0)switch(Q.length){case 2:o.vertexAttrib2fv(N.location,Q);break;case 3:o.vertexAttrib3fv(N.location,Q);break;case 4:o.vertexAttrib4fv(N.location,Q);break;default:o.vertexAttrib1fv(N.location,Q)}}}}A()}function w(){Y();for(const R in s){const U=s[R];for(const W in U){const j=U[W];for(const V in j)g(j[V].object),delete j[V];delete U[W]}delete s[R]}}function P(R){if(s[R.id]===void 0)return;const U=s[R.id];for(const W in U){const j=U[W];for(const V in j)g(j[V].object),delete j[V];delete U[W]}delete s[R.id]}function k(R){for(const U in s){const W=s[U];if(W[R.id]===void 0)continue;const j=W[R.id];for(const V in j)g(j[V].object),delete j[V];delete W[R.id]}}function Y(){I(),u=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function Tp(o,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let d,m;if(i)d=o,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=s,this.renderInstances=l}function Ep(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=o.getParameter(34930),d=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),h=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),b=o.getParameter(36349),v=d>0,y=a||e.has("OES_texture_float"),M=v&&y,A=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:A}}function Ap(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new $n,s=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const g=f.length!==0||d||n!==0||i;return i=d,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,d,m){const g=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,_=o.get(f);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const b=r?0:n,v=b*4;let y=_.clippingState||null;l.value=y,y=u(g,d,v,m);for(let M=0;M!==v;++M)y[M]=t[M];_.clippingState=y,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,g){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,g!==!0||p===null){const _=m+h*4,b=d.matrixWorldInverse;s.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let v=0,y=m;v!==h;++v,y+=4)a.copy(f[v]).applyMatrix4(b,s),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function Cp(o){let e=new WeakMap;function t(a,s){return s===ga?a.mapping=qi:s===_a&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===ga||s===_a)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Bh(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Lp extends cc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=4,el=[.125,.215,.35,.446,.526,.582],Qn=20,ea=new Lp,tl=new We;let ta=null;const Kn=(1+Math.sqrt(5))/2,Oi=1/Kn,nl=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Kn,Oi),new B(0,Kn,-Oi),new B(Oi,0,Kn),new B(-Oi,0,Kn),new B(Kn,Oi,0),new B(-Kn,Oi,0)];class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ta=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ta),e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ta=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:xr,format:rn,encoding:fi,depthBuffer:!1},i=rl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pp(r)),this._blurMaterial=Dp(r,e,t)}return i}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,n,i){const s=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(tl),u.toneMapping=wn,u.autoClear=!1;const m=new sc({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new Sn(new Dr,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(tl),h=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):b===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const v=this._cubeSize;Jr(i,b*v,_>2?v:0,v,v),u.setRenderTarget(i),h&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===qi||e.mapping===Xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Sn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;Jr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=nl[(i-1)%nl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Sn(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Qn-1),h=r/g,p=isFinite(r)?1+Math.floor(u*h):Qn;p>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qn}`);const _=[];let b=0;for(let L=0;L<Qn;++L){const x=L/h,w=Math.exp(-x*x/2);_.push(w),L===0?b+=w:L<p&&(b+=2*w)}for(let L=0;L<_.length;L++)_[L]=_[L]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=a==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[i],M=3*y*(i>v-zi?i-v+zi:0),A=4*(this._cubeSize-y);Jr(t,M,A,3*y,2*y),l.setRenderTarget(t),l.render(f,ea)}}function Pp(o){const e=[],t=[],n=[];let i=o;const r=o-zi+1+el.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let l=1/s;a>o-zi?l=el[a-o+zi-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,h=3,p=2,_=1,b=new Float32Array(h*g*m),v=new Float32Array(p*g*m),y=new Float32Array(_*g*m);for(let A=0;A<m;A++){const L=A%3*2/3-1,x=A>2?0:-1,w=[L,x,0,L+2/3,x,0,L+2/3,x+1,0,L,x,0,L+2/3,x+1,0,L,x+1,0];b.set(w,h*g*A),v.set(d,p*g*A);const P=[A,A,A,A,A,A];y.set(P,_*g*A)}const M=new _i;M.setAttribute("position",new un(b,h)),M.setAttribute("uv",new un(v,p)),M.setAttribute("faceIndex",new un(y,_)),e.push(M),i>zi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rl(o,e,t){const n=new di(o,e,t);return n.texture.mapping=ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jr(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Dp(o,e,t){const n=new Float32Array(Qn),i=new B(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function sl(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function al(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rp(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===ga||l===_a,u=l===qi||l===Xi;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new il(o)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new il(o));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",r),d.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ip(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Op(o,e,t,n){const i={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],34962);const m=f.morphAttributes;for(const g in m){const h=m[g];for(let p=0,_=h.length;p<_;p++)e.update(h[p],34962)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let h=0;if(m!==null){const b=m.array;h=m.version;for(let v=0,y=b.length;v<y;v+=3){const M=b[v+0],A=b[v+1],L=b[v+2];d.push(M,A,A,L,L,M)}}else{const b=g.array;h=g.version;for(let v=0,y=b.length/3-1;v<y;v+=3){const M=v+0,A=v+1,L=v+2;d.push(M,A,A,L,L,M)}}const p=new(Ql(d)?oc:ac)(d,1);p.version=h;const _=r.get(f);_&&e.remove(_),r.set(f,p)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function Fp(o,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let s,l;function c(d){s=d.type,l=d.bytesPerElement}function u(d,m){o.drawElements(r,m,s,d*l),t.update(m,r,1)}function f(d,m,g){if(g===0)return;let h,p;if(i)h=o,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,m,s,d*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Np(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zp(o,e){return o[0]-e[0]}function Up(o,e){return Math.abs(e[1])-Math.abs(o[1])}function kp(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new ut,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==h){let U=function(){I.dispose(),r.delete(u),u.removeEventListener("dispose",U)};p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let w=0;v===!0&&(w=1),y===!0&&(w=2),M===!0&&(w=3);let P=u.attributes.position.count*w,k=1;P>e.maxTextureSize&&(k=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const Y=new Float32Array(P*k*4*h),I=new ic(Y,P,k,h);I.type=ti,I.needsUpdate=!0;const R=w*4;for(let W=0;W<h;W++){const j=A[W],V=L[W],J=x[W],K=P*k*4*W;for(let G=0;G<j.count;G++){const N=G*R;v===!0&&(a.fromBufferAttribute(j,G),Y[K+N+0]=a.x,Y[K+N+1]=a.y,Y[K+N+2]=a.z,Y[K+N+3]=0),y===!0&&(a.fromBufferAttribute(V,G),Y[K+N+4]=a.x,Y[K+N+5]=a.y,Y[K+N+6]=a.z,Y[K+N+7]=0),M===!0&&(a.fromBufferAttribute(J,G),Y[K+N+8]=a.x,Y[K+N+9]=a.y,Y[K+N+10]=a.z,Y[K+N+11]=J.itemSize===4?a.w:1)}}p={count:h,texture:I,size:new we(P,k)},r.set(u,p),u.addEventListener("dispose",U)}let _=0;for(let v=0;v<m.length;v++)_+=m[v];const b=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(o,"morphTargetBaseInfluence",b),d.getUniforms().setValue(o,"morphTargetInfluences",m),d.getUniforms().setValue(o,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}else{const g=m===void 0?0:m.length;let h=n[u.id];if(h===void 0||h.length!==g){h=[];for(let y=0;y<g;y++)h[y]=[y,0];n[u.id]=h}for(let y=0;y<g;y++){const M=h[y];M[0]=y,M[1]=m[y]}h.sort(Up);for(let y=0;y<8;y++)y<g&&h[y][1]?(s[y][0]=h[y][0],s[y][1]=h[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(zp);const p=u.morphAttributes.position,_=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const M=s[y],A=M[0],L=M[1];A!==Number.MAX_SAFE_INTEGER&&L?(p&&u.getAttribute("morphTarget"+y)!==p[A]&&u.setAttribute("morphTarget"+y,p[A]),_&&u.getAttribute("morphNormal"+y)!==_[A]&&u.setAttribute("morphNormal"+y,_[A]),i[y]=L,b+=L):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const v=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function Bp(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const dc=new bt,pc=new ic,mc=new wh,gc=new uc,ol=[],ll=[],cl=new Float32Array(16),ul=new Float32Array(9),hl=new Float32Array(4);function er(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=ol[i];if(r===void 0&&(r=new Float32Array(i),ol[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function nt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function it(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function xs(o,e){let t=ll[e];t===void 0&&(t=new Int32Array(e),ll[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Gp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Vp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;o.uniform2fv(this.addr,e),it(t,e)}}function Wp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;o.uniform3fv(this.addr,e),it(t,e)}}function Hp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;o.uniform4fv(this.addr,e),it(t,e)}}function qp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;hl.set(n),o.uniformMatrix2fv(this.addr,!1,hl),it(t,n)}}function Xp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;ul.set(n),o.uniformMatrix3fv(this.addr,!1,ul),it(t,n)}}function Yp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;cl.set(n),o.uniformMatrix4fv(this.addr,!1,cl),it(t,n)}}function jp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Zp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;o.uniform2iv(this.addr,e),it(t,e)}}function $p(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;o.uniform3iv(this.addr,e),it(t,e)}}function Kp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;o.uniform4iv(this.addr,e),it(t,e)}}function Jp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Qp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;o.uniform2uiv(this.addr,e),it(t,e)}}function em(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;o.uniform3uiv(this.addr,e),it(t,e)}}function tm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;o.uniform4uiv(this.addr,e),it(t,e)}}function nm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||dc,i)}function im(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mc,i)}function rm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gc,i)}function sm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pc,i)}function am(o){switch(o){case 5126:return Gp;case 35664:return Vp;case 35665:return Wp;case 35666:return Hp;case 35674:return qp;case 35675:return Xp;case 35676:return Yp;case 5124:case 35670:return jp;case 35667:case 35671:return Zp;case 35668:case 35672:return $p;case 35669:case 35673:return Kp;case 5125:return Jp;case 36294:return Qp;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return sm}}function om(o,e){o.uniform1fv(this.addr,e)}function lm(o,e){const t=er(e,this.size,2);o.uniform2fv(this.addr,t)}function cm(o,e){const t=er(e,this.size,3);o.uniform3fv(this.addr,t)}function um(o,e){const t=er(e,this.size,4);o.uniform4fv(this.addr,t)}function hm(o,e){const t=er(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function fm(o,e){const t=er(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function dm(o,e){const t=er(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function pm(o,e){o.uniform1iv(this.addr,e)}function mm(o,e){o.uniform2iv(this.addr,e)}function gm(o,e){o.uniform3iv(this.addr,e)}function _m(o,e){o.uniform4iv(this.addr,e)}function xm(o,e){o.uniform1uiv(this.addr,e)}function vm(o,e){o.uniform2uiv(this.addr,e)}function ym(o,e){o.uniform3uiv(this.addr,e)}function Mm(o,e){o.uniform4uiv(this.addr,e)}function bm(o,e,t){const n=this.cache,i=e.length,r=xs(t,i);nt(n,r)||(o.uniform1iv(this.addr,r),it(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||dc,r[a])}function Sm(o,e,t){const n=this.cache,i=e.length,r=xs(t,i);nt(n,r)||(o.uniform1iv(this.addr,r),it(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||mc,r[a])}function wm(o,e,t){const n=this.cache,i=e.length,r=xs(t,i);nt(n,r)||(o.uniform1iv(this.addr,r),it(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||gc,r[a])}function Tm(o,e,t){const n=this.cache,i=e.length,r=xs(t,i);nt(n,r)||(o.uniform1iv(this.addr,r),it(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||pc,r[a])}function Em(o){switch(o){case 5126:return om;case 35664:return lm;case 35665:return cm;case 35666:return um;case 35674:return hm;case 35675:return fm;case 35676:return dm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return xm;case 36294:return vm;case 36295:return ym;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Tm}}class Am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=am(t.type)}}class Cm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Em(t.type)}}class Lm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function fl(o,e){o.seq.push(e),o.map[e.id]=e}function Pm(o,e,t){const n=o.name,i=n.length;for(na.lastIndex=0;;){const r=na.exec(n),a=na.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){fl(t,c===void 0?new Am(s,o,e):new Cm(s,o,e));break}else{let f=t.map[s];f===void 0&&(f=new Lm(s),fl(t,f)),t=f}}}class ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Pm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function dl(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Dm=0;function Rm(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function Im(o){switch(o){case fi:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function pl(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Rm(o.getShaderSource(e),a)}else return i}function Om(o,e){const t=Im(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Fm(o,e){let t;switch(e){case $u:t="Linear";break;case Ku:t="Reinhard";break;case Ju:t="OptimizedCineon";break;case Qu:t="ACESFilmic";break;case eh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nm(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hr).join(`
`)}function zm(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Um(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function hr(o){return o!==""}function ml(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const km=/^[ \t]*#include +<([\w\d./]+)>/gm;function ba(o){return o.replace(km,Bm)}function Bm(o,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ba(t)}const Gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(o){return o.replace(Gm,Vm)}function Vm(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Wm(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Yl?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Cu?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ur&&(e="SHADOWMAP_TYPE_VSM"),e}function Hm(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case qi:case Xi:e="ENVMAP_TYPE_CUBE";break;case ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qm(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Xi:e="ENVMAP_MODE_REFRACTION";break}return e}function Xm(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $l:e="ENVMAP_BLENDING_MULTIPLY";break;case ju:e="ENVMAP_BLENDING_MIX";break;case Zu:e="ENVMAP_BLENDING_ADD";break}return e}function Ym(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jm(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=Wm(t),c=Hm(t),u=qm(t),f=Xm(t),d=Ym(t),m=t.isWebGL2?"":Nm(t),g=zm(r),h=i.createProgram();let p,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(hr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(hr).join(`
`),_.length>0&&(_+=`
`)):(p=[xl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),_=[m,xl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?be.tonemapping_pars_fragment:"",t.toneMapping!==wn?Fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,Om("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=ba(a),a=ml(a,t),a=gl(a,t),s=ba(s),s=ml(s,t),s=gl(s,t),a=_l(a),s=_l(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=b+p+a,y=b+_+s,M=dl(i,35633,v),A=dl(i,35632,y);if(i.attachShader(h,M),i.attachShader(h,A),t.index0AttributeName!==void 0?i.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(h,0,"position"),i.linkProgram(h),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(h).trim(),P=i.getShaderInfoLog(M).trim(),k=i.getShaderInfoLog(A).trim();let Y=!0,I=!0;if(i.getProgramParameter(h,35714)===!1){Y=!1;const R=pl(i,M,"vertex"),U=pl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(h,35715)+`

Program Info Log: `+w+`
`+R+`
`+U)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(P===""||k==="")&&(I=!1);I&&(this.diagnostics={runnable:Y,programLog:w,vertexShader:{log:P,prefix:p},fragmentShader:{log:k,prefix:_}})}i.deleteShader(M),i.deleteShader(A);let L;this.getUniforms=function(){return L===void 0&&(L=new ns(i,h)),L};let x;return this.getAttributes=function(){return x===void 0&&(x=Um(i,h)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=Dm++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=A,this}let Zm=0;class $m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Km(e),t.set(e,n)),n}}class Km{constructor(e){this.id=Zm++,this.code=e,this.usedTimes=0}}function Jm(o,e,t,n,i,r,a){const s=new Wa,l=new $m,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x,w,P,k,Y){const I=k.fog,R=Y.geometry,U=x.isMeshStandardMaterial?k.environment:null,W=(x.isMeshStandardMaterial?t:e).get(x.envMap||U),j=W&&W.mapping===ms?W.image.height:null,V=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,K=J!==void 0?J.length:0;let G=0;R.morphAttributes.position!==void 0&&(G=1),R.morphAttributes.normal!==void 0&&(G=2),R.morphAttributes.color!==void 0&&(G=3);let N,re,Q,ie;if(V){const Oe=on[V];N=Oe.vertexShader,re=Oe.fragmentShader}else N=x.vertexShader,re=x.fragmentShader,l.update(x),Q=l.getVertexShaderID(x),ie=l.getFragmentShaderID(x);const Z=o.getRenderTarget(),Ee=x.alphaTest>0,fe=x.clearcoat>0,_e=x.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:x.type,vertexShader:N,fragmentShader:re,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:d,outputEncoding:Z===null?o.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:fi,map:!!x.map,matcap:!!x.matcap,envMap:!!W,envMapMode:W&&W.mapping,envMapCubeUVHeight:j,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===yh,tangentSpaceNormalMap:x.normalMapType===vh,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Be,clearcoat:fe,clearcoatMap:fe&&!!x.clearcoatMap,clearcoatRoughnessMap:fe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!x.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!x.iridescenceMap,iridescenceThicknessMap:_e&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Bi,alphaMap:!!x.alphaMap,alphaTest:Ee,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!R.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:G,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:wn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ps,flipSided:x.side===Kt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)w.push(P),w.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(_(w,x),b(w,x),w.push(o.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function b(x,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),x.push(s.mask)}function v(x){const w=g[x.type];let P;if(w){const k=on[w];P=Nh.clone(k.uniforms)}else P=x.uniforms;return P}function y(x,w){let P;for(let k=0,Y=c.length;k<Y;k++){const I=c[k];if(I.cacheKey===w){P=I,++P.usedTimes;break}}return P===void 0&&(P=new jm(o,w,x,r),c.push(P)),P}function M(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function L(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:L}}function Qm(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function eg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function vl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function yl(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,m,g,h,p){let _=o[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:h,group:p},o[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=h,_.group=p),e++,_}function s(f,d,m,g,h,p){const _=a(f,d,m,g,h,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(f,d,m,g,h,p){const _=a(f,d,m,g,h,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,d){t.length>1&&t.sort(f||eg),n.length>1&&n.sort(d||vl),i.length>1&&i.sort(d||vl)}function u(){for(let f=e,d=o.length;f<d;f++){const m=o[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function tg(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new yl,o.set(n,[a])):i>=r.length?(a=new yl,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function ng(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new We};break;case"SpotLight":t={position:new B,direction:new B,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new B,halfWidth:new B,halfHeight:new B};break}return o[e.id]=t,t}}}function ig(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let rg=0;function sg(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function ag(o,e){const t=new ng,n=ig(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,a=new ht,s=new ht;function l(u,f){let d=0,m=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let h=0,p=0,_=0,b=0,v=0,y=0,M=0,A=0,L=0,x=0;u.sort(sg);const w=f!==!0?Math.PI:1;for(let k=0,Y=u.length;k<Y;k++){const I=u[k],R=I.color,U=I.intensity,W=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=R.r*U*w,m+=R.g*U*w,g+=R.b*U*w;else if(I.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],U);else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const J=I.shadow,K=n.get(I);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.directionalShadow[h]=K,i.directionalShadowMap[h]=j,i.directionalShadowMatrix[h]=I.shadow.matrix,y++}i.directional[h]=V,h++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(R).multiplyScalar(U*w),V.distance=W,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[_]=V;const J=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,J.updateMatrices(I),I.castShadow&&x++),i.spotLightMatrix[_]=J.matrix,I.castShadow){const K=n.get(I);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=j,A++}_++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(R).multiplyScalar(U),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=V,b++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity*w),V.distance=I.distance,V.decay=I.decay,I.castShadow){const J=I.shadow,K=n.get(I);K.shadowBias=J.bias,K.shadowNormalBias=J.normalBias,K.shadowRadius=J.radius,K.shadowMapSize=J.mapSize,K.shadowCameraNear=J.camera.near,K.shadowCameraFar=J.camera.far,i.pointShadow[p]=K,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=I.shadow.matrix,M++}i.point[p]=V,p++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(U*w),V.groundColor.copy(I.groundColor).multiplyScalar(U*w),i.hemi[v]=V,v++}}b>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==h||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==b||P.hemiLength!==v||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==A||P.numSpotMaps!==L)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=b,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+L-x,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=x,P.directionalLength=h,P.pointLength=p,P.spotLength=_,P.rectAreaLength=b,P.hemiLength=v,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=A,P.numSpotMaps=L,i.version=rg++)}function c(u,f){let d=0,m=0,g=0,h=0,p=0;const _=f.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const y=u[b];if(y.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),d++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=i.rectArea[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),s.identity(),a.copy(y.matrixWorld),a.premultiply(_),s.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),h++}else if(y.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Ml(o,e){const t=new ag(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function s(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function og(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let l;return s===void 0?(l=new Ml(o,e),t.set(r,[l])):a>=s.length?(l=new Ml(o,e),s.push(l)):l=s[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class lg extends gs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cg extends gs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new B,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fg(o,e,t){let n=new hc;const i=new we,r=new we,a=new ut,s=new lg({depthPacking:xh}),l=new cg,c={},u=t.maxTextureSize,f={0:Kt,1:ui,2:ps},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:ug,fragmentShader:hg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new _i;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Sn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl,this.render=function(y,M,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const L=o.getRenderTarget(),x=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),P=o.state;P.setBlending(On),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let k=0,Y=y.length;k<Y;k++){const I=y[k],R=I.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const U=R.getFrameExtents();if(i.multiply(U),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,R.mapSize.y=r.y)),R.map===null){const j=this.type!==ur?{minFilter:Mt,magFilter:Mt}:{};R.map=new di(i.x,i.y,j),R.map.texture.name=I.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const W=R.getViewportCount();for(let j=0;j<W;j++){const V=R.getViewport(j);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),P.viewport(a),R.updateMatrices(I,j),n=R.getFrustum(),v(M,A,R.camera,I,this.type)}R.isPointLightShadow!==!0&&this.type===ur&&_(R,A),R.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(L,x,w)};function _(y,M){const A=e.update(h);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new di(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,o.setRenderTarget(y.mapPass),o.clear(),o.renderBufferDirect(M,null,A,d,h,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,o.setRenderTarget(y.map),o.clear(),o.renderBufferDirect(M,null,A,m,h,null)}function b(y,M,A,L,x,w){let P=null;const k=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(k!==void 0)P=k;else if(P=A.isPointLight===!0?l:s,o.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const Y=P.uuid,I=M.uuid;let R=c[Y];R===void 0&&(R={},c[Y]=R);let U=R[I];U===void 0&&(U=P.clone(),R[I]=U),P=U}return P.visible=M.visible,P.wireframe=M.wireframe,w===ur?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:f[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=L,P.farDistance=x),P}function v(y,M,A,L,x){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===ur)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const k=e.update(y),Y=y.material;if(Array.isArray(Y)){const I=k.groups;for(let R=0,U=I.length;R<U;R++){const W=I[R],j=Y[W.materialIndex];if(j&&j.visible){const V=b(y,j,L,A.near,A.far,x);o.renderBufferDirect(A,null,k,V,y,W)}}}else if(Y.visible){const I=b(y,Y,L,A.near,A.far,x);o.renderBufferDirect(A,null,k,I,y,null)}}const P=y.children;for(let k=0,Y=P.length;k<Y;k++)v(P[k],M,A,L,x)}}function dg(o,e,t){const n=t.isWebGL2;function i(){let D=!1;const q=new ut;let ee=null;const ce=new ut(0,0,0,0);return{setMask:function(me){ee!==me&&!D&&(o.colorMask(me,me,me,me),ee=me)},setLocked:function(me){D=me},setClear:function(me,Fe,st,ft,Gn){Gn===!0&&(me*=ft,Fe*=ft,st*=ft),q.set(me,Fe,st,ft),ce.equals(q)===!1&&(o.clearColor(me,Fe,st,ft),ce.copy(q))},reset:function(){D=!1,ee=null,ce.set(-1,0,0,0)}}}function r(){let D=!1,q=null,ee=null,ce=null;return{setTest:function(me){me?Ee(2929):fe(2929)},setMask:function(me){q!==me&&!D&&(o.depthMask(me),q=me)},setFunc:function(me){if(ee!==me){switch(me){case Gu:o.depthFunc(512);break;case Vu:o.depthFunc(519);break;case Wu:o.depthFunc(513);break;case ma:o.depthFunc(515);break;case Hu:o.depthFunc(514);break;case qu:o.depthFunc(518);break;case Xu:o.depthFunc(516);break;case Yu:o.depthFunc(517);break;default:o.depthFunc(515)}ee=me}},setLocked:function(me){D=me},setClear:function(me){ce!==me&&(o.clearDepth(me),ce=me)},reset:function(){D=!1,q=null,ee=null,ce=null}}}function a(){let D=!1,q=null,ee=null,ce=null,me=null,Fe=null,st=null,ft=null,Gn=null;return{setTest:function(Ge){D||(Ge?Ee(2960):fe(2960))},setMask:function(Ge){q!==Ge&&!D&&(o.stencilMask(Ge),q=Ge)},setFunc:function(Ge,dn,Vt){(ee!==Ge||ce!==dn||me!==Vt)&&(o.stencilFunc(Ge,dn,Vt),ee=Ge,ce=dn,me=Vt)},setOp:function(Ge,dn,Vt){(Fe!==Ge||st!==dn||ft!==Vt)&&(o.stencilOp(Ge,dn,Vt),Fe=Ge,st=dn,ft=Vt)},setLocked:function(Ge){D=Ge},setClear:function(Ge){Gn!==Ge&&(o.clearStencil(Ge),Gn=Ge)},reset:function(){D=!1,q=null,ee=null,ce=null,me=null,Fe=null,st=null,ft=null,Gn=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},g=new WeakMap,h=[],p=null,_=!1,b=null,v=null,y=null,M=null,A=null,L=null,x=null,w=!1,P=null,k=null,Y=null,I=null,R=null;const U=o.getParameter(35661);let W=!1,j=0;const V=o.getParameter(7938);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=j>=2);let J=null,K={};const G=o.getParameter(3088),N=o.getParameter(2978),re=new ut().fromArray(G),Q=new ut().fromArray(N);function ie(D,q,ee){const ce=new Uint8Array(4),me=o.createTexture();o.bindTexture(D,me),o.texParameteri(D,10241,9728),o.texParameteri(D,10240,9728);for(let Fe=0;Fe<ee;Fe++)o.texImage2D(q+Fe,0,6408,1,1,0,6408,5121,ce);return me}const Z={};Z[3553]=ie(3553,3553,1),Z[34067]=ie(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(2929),l.setFunc(ma),et(!1),_t(ho),Ee(2884),rt(On);function Ee(D){d[D]!==!0&&(o.enable(D),d[D]=!0)}function fe(D){d[D]!==!1&&(o.disable(D),d[D]=!1)}function _e(D,q){return m[D]!==q?(o.bindFramebuffer(D,q),m[D]=q,n&&(D===36009&&(m[36160]=q),D===36160&&(m[36009]=q)),!0):!1}function he(D,q){let ee=h,ce=!1;if(D)if(ee=g.get(q),ee===void 0&&(ee=[],g.set(q,ee)),D.isWebGLMultipleRenderTargets){const me=D.texture;if(ee.length!==me.length||ee[0]!==36064){for(let Fe=0,st=me.length;Fe<st;Fe++)ee[Fe]=36064+Fe;ee.length=me.length,ce=!0}}else ee[0]!==36064&&(ee[0]=36064,ce=!0);else ee[0]!==1029&&(ee[0]=1029,ce=!0);ce&&(t.isWebGL2?o.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Oe(D){return p!==D?(o.useProgram(D),p=D,!0):!1}const Me={[Ni]:32774,[Pu]:32778,[Du]:32779};if(n)Me[go]=32775,Me[_o]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Me[go]=D.MIN_EXT,Me[_o]=D.MAX_EXT)}const xe={[Ru]:0,[Iu]:1,[Ou]:768,[jl]:770,[Bu]:776,[Uu]:774,[Nu]:772,[Fu]:769,[Zl]:771,[ku]:775,[zu]:773};function rt(D,q,ee,ce,me,Fe,st,ft){if(D===On){_===!0&&(fe(3042),_=!1);return}if(_===!1&&(Ee(3042),_=!0),D!==Lu){if(D!==b||ft!==w){if((v!==Ni||A!==Ni)&&(o.blendEquation(32774),v=Ni,A=Ni),ft)switch(D){case Bi:o.blendFuncSeparate(1,771,1,771);break;case fo:o.blendFunc(1,1);break;case po:o.blendFuncSeparate(0,769,0,1);break;case mo:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Bi:o.blendFuncSeparate(770,771,1,771);break;case fo:o.blendFunc(770,1);break;case po:o.blendFuncSeparate(0,769,0,1);break;case mo:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,M=null,L=null,x=null,b=D,w=ft}return}me=me||q,Fe=Fe||ee,st=st||ce,(q!==v||me!==A)&&(o.blendEquationSeparate(Me[q],Me[me]),v=q,A=me),(ee!==y||ce!==M||Fe!==L||st!==x)&&(o.blendFuncSeparate(xe[ee],xe[ce],xe[Fe],xe[st]),y=ee,M=ce,L=Fe,x=st),b=D,w=!1}function Qe(D,q){D.side===ps?fe(2884):Ee(2884);let ee=D.side===Kt;q&&(ee=!ee),et(ee),D.blending===Bi&&D.transparent===!1?rt(On):rt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const ce=D.stencilWrite;c.setTest(ce),ce&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ee(32926):fe(32926)}function et(D){P!==D&&(D?o.frontFace(2304):o.frontFace(2305),P=D)}function _t(D){D!==Eu?(Ee(2884),D!==k&&(D===ho?o.cullFace(1029):D===Au?o.cullFace(1028):o.cullFace(1032))):fe(2884),k=D}function Ye(D){D!==Y&&(W&&o.lineWidth(D),Y=D)}function Ne(D,q,ee){D?(Ee(32823),(I!==q||R!==ee)&&(o.polygonOffset(q,ee),I=q,R=ee)):fe(32823)}function Gt(D){D?Ee(3089):fe(3089)}function St(D){D===void 0&&(D=33984+U-1),J!==D&&(o.activeTexture(D),J=D)}function E(D,q,ee){ee===void 0&&(J===null?ee=33984+U-1:ee=J);let ce=K[ee];ce===void 0&&(ce={type:void 0,texture:void 0},K[ee]=ce),(ce.type!==D||ce.texture!==q)&&(J!==ee&&(o.activeTexture(ee),J=ee),o.bindTexture(D,q||Z[D]),ce.type=D,ce.texture=q)}function S(){const D=K[J];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(D){re.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function de(D){Q.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function Ae(D,q){let ee=f.get(q);ee===void 0&&(ee=new WeakMap,f.set(q,ee));let ce=ee.get(D);ce===void 0&&(ce=o.getUniformBlockIndex(q,D.name),ee.set(D,ce))}function Le(D,q){const ce=f.get(q).get(D);u.get(q)!==ce&&(o.uniformBlockBinding(q,ce,D.__bindingPointIndex),u.set(q,ce))}function ze(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},J=null,K={},m={},g=new WeakMap,h=[],p=null,_=!1,b=null,v=null,y=null,M=null,A=null,L=null,x=null,w=!1,P=null,k=null,Y=null,I=null,R=null,re.set(0,0,o.canvas.width,o.canvas.height),Q.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ee,disable:fe,bindFramebuffer:_e,drawBuffers:he,useProgram:Oe,setBlending:rt,setMaterial:Qe,setFlipSided:et,setCullFace:_t,setLineWidth:Ye,setPolygonOffset:Ne,setScissorTest:Gt,activeTexture:St,bindTexture:E,unbindTexture:S,compressedTexImage2D:H,compressedTexImage3D:te,texImage2D:ue,texImage3D:oe,updateUBOMapping:Ae,uniformBlockBinding:Le,texStorage2D:O,texStorage3D:le,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:ve,compressedTexSubImage3D:C,scissor:pe,viewport:de,reset:ze}}function pg(o,e,t,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,S){return _?new OffscreenCanvas(E,S):yr("canvas")}function v(E,S,H,te){let ne=1;if((E.width>te||E.height>te)&&(ne=te/Math.max(E.width,E.height)),ne<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ae=S?Ma:Math.floor,ve=ae(ne*E.width),C=ae(ne*E.height);h===void 0&&(h=b(ve,C));const O=H?b(ve,C):h;return O.width=ve,O.height=C,O.getContext("2d").drawImage(E,0,0,ve,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ve+"x"+C+")."),O}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return Wo(E.width)&&Wo(E.height)}function M(E){return s?!1:E.wrapS!==nn||E.wrapT!==nn||E.minFilter!==Mt&&E.minFilter!==Xt}function A(E,S){return E.generateMipmaps&&S&&E.minFilter!==Mt&&E.minFilter!==Xt}function L(E){o.generateMipmap(E)}function x(E,S,H,te,ne=!1){if(s===!1)return S;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae=S;return S===6403&&(H===5126&&(ae=33326),H===5131&&(ae=33325),H===5121&&(ae=33321)),S===33319&&(H===5126&&(ae=33328),H===5131&&(ae=33327),H===5121&&(ae=33323)),S===6408&&(H===5126&&(ae=34836),H===5131&&(ae=34842),H===5121&&(ae=te===Be&&ne===!1?35907:32856),H===32819&&(ae=32854),H===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function w(E,S,H){return A(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==Mt&&E.minFilter!==Xt?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function P(E){return E===Mt||E===xo||E===Es?9728:9729}function k(E){const S=E.target;S.removeEventListener("dispose",k),I(S),S.isVideoTexture&&g.delete(S)}function Y(E){const S=E.target;S.removeEventListener("dispose",Y),U(S)}function I(E){const S=n.get(E);if(S.__webglInit===void 0)return;const H=E.source,te=p.get(H);if(te){const ne=te[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(E),Object.keys(te).length===0&&p.delete(H)}n.remove(E)}function R(E){const S=n.get(E);o.deleteTexture(S.__webglTexture);const H=E.source,te=p.get(H);delete te[S.__cacheKey],a.memory.textures--}function U(E){const S=E.texture,H=n.get(E),te=n.get(S);if(te.__webglTexture!==void 0&&(o.deleteTexture(te.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)o.deleteFramebuffer(H.__webglFramebuffer[ne]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[ne]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,ae=S.length;ne<ae;ne++){const ve=n.get(S[ne]);ve.__webglTexture&&(o.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(S[ne])}n.remove(S),n.remove(E)}let W=0;function j(){W=0}function V(){const E=W;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),W+=1,E}function J(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function K(E,S){const H=n.get(E);if(E.isVideoTexture&&Gt(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(H,E,S);return}}t.bindTexture(3553,H.__webglTexture,33984+S)}function G(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){fe(H,E,S);return}t.bindTexture(35866,H.__webglTexture,33984+S)}function N(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){fe(H,E,S);return}t.bindTexture(32879,H.__webglTexture,33984+S)}function re(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){_e(H,E,S);return}t.bindTexture(34067,H.__webglTexture,33984+S)}const Q={[xa]:10497,[nn]:33071,[va]:33648},ie={[Mt]:9728,[xo]:9984,[Es]:9986,[Xt]:9729,[th]:9985,[_r]:9987};function Z(E,S,H){if(H?(o.texParameteri(E,10242,Q[S.wrapS]),o.texParameteri(E,10243,Q[S.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,Q[S.wrapR]),o.texParameteri(E,10240,ie[S.magFilter]),o.texParameteri(E,10241,ie[S.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(S.wrapS!==nn||S.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,P(S.magFilter)),o.texParameteri(E,10241,P(S.minFilter)),S.minFilter!==Mt&&S.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Mt||S.minFilter!==Es&&S.minFilter!==_r||S.type===ti&&e.has("OES_texture_float_linear")===!1||s===!1&&S.type===xr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Ee(E,S){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",k));const te=S.source;let ne=p.get(te);ne===void 0&&(ne={},p.set(te,ne));const ae=J(S);if(ae!==E.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ne[ae].usedTimes++;const ve=ne[E.__cacheKey];ve!==void 0&&(ne[E.__cacheKey].usedTimes--,ve.usedTimes===0&&R(S)),E.__cacheKey=ae,E.__webglTexture=ne[ae].texture}return H}function fe(E,S,H){let te=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=35866),S.isData3DTexture&&(te=32879);const ne=Ee(E,S),ae=S.source;t.bindTexture(te,E.__webglTexture,33984+H);const ve=n.get(ae);if(ae.version!==ve.__version||ne===!0){t.activeTexture(33984+H),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const C=M(S)&&y(S.image)===!1;let O=v(S.image,C,!1,u);O=St(S,O);const le=y(O)||s,ue=r.convert(S.format,S.encoding);let oe=r.convert(S.type),pe=x(S.internalFormat,ue,oe,S.encoding,S.isVideoTexture);Z(te,S,le);let de;const Ae=S.mipmaps,Le=s&&S.isVideoTexture!==!0,ze=ve.__version===void 0||ne===!0,D=w(S,O,le);if(S.isDepthTexture)pe=6402,s?S.type===ti?pe=36012:S.type===ei?pe=33190:S.type===Gi?pe=35056:pe=33189:S.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ii&&pe===6402&&S.type!==Jl&&S.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ei,oe=r.convert(S.type)),S.format===Yi&&pe===6402&&(pe=34041,S.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Gi,oe=r.convert(S.type))),ze&&(Le?t.texStorage2D(3553,1,pe,O.width,O.height):t.texImage2D(3553,0,pe,O.width,O.height,0,ue,oe,null));else if(S.isDataTexture)if(Ae.length>0&&le){Le&&ze&&t.texStorage2D(3553,D,pe,Ae[0].width,Ae[0].height);for(let q=0,ee=Ae.length;q<ee;q++)de=Ae[q],Le?t.texSubImage2D(3553,q,0,0,de.width,de.height,ue,oe,de.data):t.texImage2D(3553,q,pe,de.width,de.height,0,ue,oe,de.data);S.generateMipmaps=!1}else Le?(ze&&t.texStorage2D(3553,D,pe,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,ue,oe,O.data)):t.texImage2D(3553,0,pe,O.width,O.height,0,ue,oe,O.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Le&&ze&&t.texStorage3D(35866,D,pe,Ae[0].width,Ae[0].height,O.depth);for(let q=0,ee=Ae.length;q<ee;q++)de=Ae[q],S.format!==rn?ue!==null?Le?t.compressedTexSubImage3D(35866,q,0,0,0,de.width,de.height,O.depth,ue,de.data,0,0):t.compressedTexImage3D(35866,q,pe,de.width,de.height,O.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(35866,q,0,0,0,de.width,de.height,O.depth,ue,oe,de.data):t.texImage3D(35866,q,pe,de.width,de.height,O.depth,0,ue,oe,de.data)}else{Le&&ze&&t.texStorage2D(3553,D,pe,Ae[0].width,Ae[0].height);for(let q=0,ee=Ae.length;q<ee;q++)de=Ae[q],S.format!==rn?ue!==null?Le?t.compressedTexSubImage2D(3553,q,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(3553,q,pe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,q,0,0,de.width,de.height,ue,oe,de.data):t.texImage2D(3553,q,pe,de.width,de.height,0,ue,oe,de.data)}else if(S.isDataArrayTexture)Le?(ze&&t.texStorage3D(35866,D,pe,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,ue,oe,O.data)):t.texImage3D(35866,0,pe,O.width,O.height,O.depth,0,ue,oe,O.data);else if(S.isData3DTexture)Le?(ze&&t.texStorage3D(32879,D,pe,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,ue,oe,O.data)):t.texImage3D(32879,0,pe,O.width,O.height,O.depth,0,ue,oe,O.data);else if(S.isFramebufferTexture){if(ze)if(Le)t.texStorage2D(3553,D,pe,O.width,O.height);else{let q=O.width,ee=O.height;for(let ce=0;ce<D;ce++)t.texImage2D(3553,ce,pe,q,ee,0,ue,oe,null),q>>=1,ee>>=1}}else if(Ae.length>0&&le){Le&&ze&&t.texStorage2D(3553,D,pe,Ae[0].width,Ae[0].height);for(let q=0,ee=Ae.length;q<ee;q++)de=Ae[q],Le?t.texSubImage2D(3553,q,0,0,ue,oe,de):t.texImage2D(3553,q,pe,ue,oe,de);S.generateMipmaps=!1}else Le?(ze&&t.texStorage2D(3553,D,pe,O.width,O.height),t.texSubImage2D(3553,0,0,0,ue,oe,O)):t.texImage2D(3553,0,pe,ue,oe,O);A(S,le)&&L(te),ve.__version=ae.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function _e(E,S,H){if(S.image.length!==6)return;const te=Ee(E,S),ne=S.source;t.bindTexture(34067,E.__webglTexture,33984+H);const ae=n.get(ne);if(ne.version!==ae.__version||te===!0){t.activeTexture(33984+H),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,O=[];for(let q=0;q<6;q++)!ve&&!C?O[q]=v(S.image[q],!1,!0,c):O[q]=C?S.image[q].image:S.image[q],O[q]=St(S,O[q]);const le=O[0],ue=y(le)||s,oe=r.convert(S.format,S.encoding),pe=r.convert(S.type),de=x(S.internalFormat,oe,pe,S.encoding),Ae=s&&S.isVideoTexture!==!0,Le=ae.__version===void 0||te===!0;let ze=w(S,le,ue);Z(34067,S,ue);let D;if(ve){Ae&&Le&&t.texStorage2D(34067,ze,de,le.width,le.height);for(let q=0;q<6;q++){D=O[q].mipmaps;for(let ee=0;ee<D.length;ee++){const ce=D[ee];S.format!==rn?oe!==null?Ae?t.compressedTexSubImage2D(34069+q,ee,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(34069+q,ee,de,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+q,ee,0,0,ce.width,ce.height,oe,pe,ce.data):t.texImage2D(34069+q,ee,de,ce.width,ce.height,0,oe,pe,ce.data)}}}else{D=S.mipmaps,Ae&&Le&&(D.length>0&&ze++,t.texStorage2D(34067,ze,de,O[0].width,O[0].height));for(let q=0;q<6;q++)if(C){Ae?t.texSubImage2D(34069+q,0,0,0,O[q].width,O[q].height,oe,pe,O[q].data):t.texImage2D(34069+q,0,de,O[q].width,O[q].height,0,oe,pe,O[q].data);for(let ee=0;ee<D.length;ee++){const me=D[ee].image[q].image;Ae?t.texSubImage2D(34069+q,ee+1,0,0,me.width,me.height,oe,pe,me.data):t.texImage2D(34069+q,ee+1,de,me.width,me.height,0,oe,pe,me.data)}}else{Ae?t.texSubImage2D(34069+q,0,0,0,oe,pe,O[q]):t.texImage2D(34069+q,0,de,oe,pe,O[q]);for(let ee=0;ee<D.length;ee++){const ce=D[ee];Ae?t.texSubImage2D(34069+q,ee+1,0,0,oe,pe,ce.image[q]):t.texImage2D(34069+q,ee+1,de,oe,pe,ce.image[q])}}}A(S,ue)&&L(34067),ae.__version=ne.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function he(E,S,H,te,ne){const ae=r.convert(H.format,H.encoding),ve=r.convert(H.type),C=x(H.internalFormat,ae,ve,H.encoding);n.get(S).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,C,S.width,S.height,S.depth,0,ae,ve,null):t.texImage2D(ne,0,C,S.width,S.height,0,ae,ve,null)),t.bindFramebuffer(36160,E),Ne(S)?d.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(H).__webglTexture,0,Ye(S)):(ne===3553||ne>=34069&&ne<=34074)&&o.framebufferTexture2D(36160,te,ne,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Oe(E,S,H){if(o.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let te=33189;if(H||Ne(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ti?te=36012:ne.type===ei&&(te=33190));const ae=Ye(S);Ne(S)?d.renderbufferStorageMultisampleEXT(36161,ae,te,S.width,S.height):o.renderbufferStorageMultisample(36161,ae,te,S.width,S.height)}else o.renderbufferStorage(36161,te,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){const te=Ye(S);H&&Ne(S)===!1?o.renderbufferStorageMultisample(36161,te,35056,S.width,S.height):Ne(S)?d.renderbufferStorageMultisampleEXT(36161,te,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ne=0;ne<te.length;ne++){const ae=te[ne],ve=r.convert(ae.format,ae.encoding),C=r.convert(ae.type),O=x(ae.internalFormat,ve,C,ae.encoding),le=Ye(S);H&&Ne(S)===!1?o.renderbufferStorageMultisample(36161,le,O,S.width,S.height):Ne(S)?d.renderbufferStorageMultisampleEXT(36161,le,O,S.width,S.height):o.renderbufferStorage(36161,O,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function Me(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ne=Ye(S);if(S.depthTexture.format===ii)Ne(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):o.framebufferTexture2D(36160,36096,3553,te,0);else if(S.depthTexture.format===Yi)Ne(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):o.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function xe(E){const S=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Me(S.__webglFramebuffer,E)}else if(H){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=o.createRenderbuffer(),Oe(S.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Oe(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function rt(E,S,H){const te=n.get(E);S!==void 0&&he(te.__webglFramebuffer,E,E.texture,36064,3553),H!==void 0&&xe(E)}function Qe(E){const S=E.texture,H=n.get(E),te=n.get(S);E.addEventListener("dispose",Y),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture()),te.__version=S.version,a.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,ae=E.isWebGLMultipleRenderTargets===!0,ve=y(E)||s;if(ne){H.__webglFramebuffer=[];for(let C=0;C<6;C++)H.__webglFramebuffer[C]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),ae)if(i.drawBuffers){const C=E.texture;for(let O=0,le=C.length;O<le;O++){const ue=n.get(C[O]);ue.__webglTexture===void 0&&(ue.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&E.samples>0&&Ne(E)===!1){const C=ae?S:[S];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let O=0;O<C.length;O++){const le=C[O];H.__webglColorRenderbuffer[O]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[O]);const ue=r.convert(le.format,le.encoding),oe=r.convert(le.type),pe=x(le.internalFormat,ue,oe,le.encoding,E.isXRRenderTarget===!0),de=Ye(E);o.renderbufferStorageMultisample(36161,de,pe,E.width,E.height),o.framebufferRenderbuffer(36160,36064+O,36161,H.__webglColorRenderbuffer[O])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),Oe(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),Z(34067,S,ve);for(let C=0;C<6;C++)he(H.__webglFramebuffer[C],E,S,36064,34069+C);A(S,ve)&&L(34067),t.unbindTexture()}else if(ae){const C=E.texture;for(let O=0,le=C.length;O<le;O++){const ue=C[O],oe=n.get(ue);t.bindTexture(3553,oe.__webglTexture),Z(3553,ue,ve),he(H.__webglFramebuffer,E,ue,36064+O,3553),A(ue,ve)&&L(3553)}t.unbindTexture()}else{let C=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(s?C=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,te.__webglTexture),Z(C,S,ve),he(H.__webglFramebuffer,E,S,36064,C),A(S,ve)&&L(C),t.unbindTexture()}E.depthBuffer&&xe(E)}function et(E){const S=y(E)||s,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,ne=H.length;te<ne;te++){const ae=H[te];if(A(ae,S)){const ve=E.isWebGLCubeRenderTarget?34067:3553,C=n.get(ae).__webglTexture;t.bindTexture(ve,C),L(ve),t.unbindTexture()}}}function _t(E){if(s&&E.samples>0&&Ne(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,te=E.height;let ne=16384;const ae=[],ve=E.stencilBuffer?33306:36096,C=n.get(E),O=E.isWebGLMultipleRenderTargets===!0;if(O)for(let le=0;le<S.length;le++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let le=0;le<S.length;le++){ae.push(36064+le),E.depthBuffer&&ae.push(ve);const ue=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(ue===!1&&(E.depthBuffer&&(ne|=256),E.stencilBuffer&&(ne|=1024)),O&&o.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[le]),ue===!0&&(o.invalidateFramebuffer(36008,[ve]),o.invalidateFramebuffer(36009,[ve])),O){const oe=n.get(S[le]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,oe,0)}o.blitFramebuffer(0,0,H,te,0,0,H,te,ne,9728),m&&o.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let le=0;le<S.length;le++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,C.__webglColorRenderbuffer[le]);const ue=n.get(S[le]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,ue,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function Ye(E){return Math.min(f,E.samples)}function Ne(E){const S=n.get(E);return s&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Gt(E){const S=a.render.frame;g.get(E)!==S&&(g.set(E,S),E.update())}function St(E,S){const H=E.encoding,te=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ya||H!==fi&&(H===Be?s===!1?e.has("EXT_sRGB")===!0&&te===rn?(E.format=ya,E.minFilter=Xt,E.generateMipmaps=!1):S=tc.sRGBToLinear(S):(te!==rn||ne!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),S}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=N,this.setTextureCube=re,this.rebindTextures=rt,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ne}function mg(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===hi)return 5121;if(r===sh)return 32819;if(r===ah)return 32820;if(r===nh)return 5120;if(r===ih)return 5122;if(r===Jl)return 5123;if(r===rh)return 5124;if(r===ei)return 5125;if(r===ti)return 5126;if(r===xr)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===oh)return 6406;if(r===rn)return 6408;if(r===ch)return 6409;if(r===uh)return 6410;if(r===ii)return 6402;if(r===Yi)return 34041;if(r===lh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===ya)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===hh)return 6403;if(r===fh)return 36244;if(r===dh)return 33319;if(r===ph)return 33320;if(r===mh)return 36249;if(r===As||r===Cs||r===Ls||r===Ps)if(a===Be)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===As)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===As)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vo||r===yo||r===Mo||r===bo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===vo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===So||r===wo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===So)return a===Be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===wo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===To||r===Eo||r===Ao||r===Co||r===Lo||r===Po||r===Do||r===Ro||r===Io||r===Oo||r===Fo||r===No||r===zo||r===Uo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===To)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Eo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ao)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Co)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Po)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Do)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ro)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Io)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Oo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===No)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===zo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Uo)return a===Be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ko)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===ko)return a===Be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Gi?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class gg extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qr extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _g={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,n),_=this._getHandJoint(c,h);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xg extends bt{constructor(e,t,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:ii,u!==ii&&u!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ii&&(n=ei),n===void 0&&u===Yi&&(n=Gi),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Mt,this.minFilter=l!==void 0?l:Mt,this.flipY=!1,this.generateMipmaps=!1}}class vg extends gi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=null,c=null,u=null,f=null,d=null,m=null;const g=t.getContextAttributes();let h=null,p=null;const _=[],b=[],v=new Set,y=new Map,M=new Yt;M.layers.enable(1),M.viewport=new ut;const A=new Yt;A.layers.enable(2),A.viewport=new ut;const L=[M,A],x=new gg;x.layers.enable(1),x.layers.enable(2);let w=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let N=_[G];return N===void 0&&(N=new ia,_[G]=N),N.getTargetRaySpace()},this.getControllerGrip=function(G){let N=_[G];return N===void 0&&(N=new ia,_[G]=N),N.getGripSpace()},this.getHand=function(G){let N=_[G];return N===void 0&&(N=new ia,_[G]=N),N.getHandSpace()};function k(G){const N=b.indexOf(G.inputSource);if(N===-1)return;const re=_[N];re!==void 0&&re.dispatchEvent({type:G.type,data:G.inputSource})}function Y(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",I);for(let G=0;G<_.length;G++){const N=b[G];N!==null&&(b[G]=null,_[G].disconnect(N))}w=null,P=null,e.setRenderTarget(h),d=null,f=null,u=null,i=null,p=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(h=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,N),i.updateRenderState({baseLayer:d}),p=new di(d.framebufferWidth,d.framebufferHeight,{format:rn,type:hi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let N=null,re=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,N=g.stencil?Yi:ii,re=g.stencil?Gi:ei);const ie={colorFormat:32856,depthFormat:Q,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ie),i.updateRenderState({layers:[f]}),p=new di(f.textureWidth,f.textureHeight,{format:rn,type:hi,depthTexture:new xg(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Z=e.properties.get(p);Z.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(s),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(G){for(let N=0;N<G.removed.length;N++){const re=G.removed[N],Q=b.indexOf(re);Q>=0&&(b[Q]=null,_[Q].disconnect(re))}for(let N=0;N<G.added.length;N++){const re=G.added[N];let Q=b.indexOf(re);if(Q===-1){for(let Z=0;Z<_.length;Z++)if(Z>=b.length){b.push(re),Q=Z;break}else if(b[Z]===null){b[Z]=re,Q=Z;break}if(Q===-1)break}const ie=_[Q];ie&&ie.connect(re)}}const R=new B,U=new B;function W(G,N,re){R.setFromMatrixPosition(N.matrixWorld),U.setFromMatrixPosition(re.matrixWorld);const Q=R.distanceTo(U),ie=N.projectionMatrix.elements,Z=re.projectionMatrix.elements,Ee=ie[14]/(ie[10]-1),fe=ie[14]/(ie[10]+1),_e=(ie[9]+1)/ie[5],he=(ie[9]-1)/ie[5],Oe=(ie[8]-1)/ie[0],Me=(Z[8]+1)/Z[0],xe=Ee*Oe,rt=Ee*Me,Qe=Q/(-Oe+Me),et=Qe*-Oe;N.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(et),G.translateZ(Qe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const _t=Ee+Qe,Ye=fe+Qe,Ne=xe-et,Gt=rt+(Q-et),St=_e*fe/Ye*_t,E=he*fe/Ye*_t;G.projectionMatrix.makePerspective(Ne,Gt,St,E,_t,Ye)}function j(G,N){N===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(N.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;x.near=A.near=M.near=G.near,x.far=A.far=M.far=G.far,(w!==x.near||P!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,P=x.far);const N=G.parent,re=x.cameras;j(x,N);for(let ie=0;ie<re.length;ie++)j(re[ie],N);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),G.matrix.copy(x.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const Q=G.children;for(let ie=0,Z=Q.length;ie<Z;ie++)Q[ie].updateMatrixWorld(!0);re.length===2?W(x,M,A):x.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(G){f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.getPlanes=function(){return v};let V=null;function J(G,N){if(c=N.getViewerPose(l||a),m=N,c!==null){const re=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Q=!1;re.length!==x.cameras.length&&(x.cameras.length=0,Q=!0);for(let ie=0;ie<re.length;ie++){const Z=re[ie];let Ee=null;if(d!==null)Ee=d.getViewport(Z);else{const _e=u.getViewSubImage(f,Z);Ee=_e.viewport,ie===0&&(e.setRenderTargetTextures(p,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(p))}let fe=L[ie];fe===void 0&&(fe=new Yt,fe.layers.enable(ie),fe.viewport=new ut,L[ie]=fe),fe.matrix.fromArray(Z.transform.matrix),fe.projectionMatrix.fromArray(Z.projectionMatrix),fe.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ie===0&&x.matrix.copy(fe.matrix),Q===!0&&x.cameras.push(fe)}}for(let re=0;re<_.length;re++){const Q=b[re],ie=_[re];Q!==null&&ie!==void 0&&ie.update(Q,N,l||a)}if(V&&V(G,N),N.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:N.detectedPlanes});let re=null;for(const Q of v)N.detectedPlanes.has(Q)||(re===null&&(re=[]),re.push(Q));if(re!==null)for(const Q of re)v.delete(Q),y.delete(Q),n.dispatchEvent({type:"planeremoved",data:Q});for(const Q of N.detectedPlanes)if(!v.has(Q))v.add(Q),y.set(Q,N.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Q});else{const ie=y.get(Q);Q.lastChangedTime>ie&&(y.set(Q,Q.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Q}))}}m=null}const K=new fc;K.setAnimationLoop(J),this.setAnimationLoop=function(G){V=G},this.dispose=function(){}}}function yg(o,e){function t(h,p){p.color.getRGB(h.fogColor.value,lc(o)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function n(h,p,_,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(h,p):p.isMeshToonMaterial?(i(h,p),u(h,p)):p.isMeshPhongMaterial?(i(h,p),c(h,p)):p.isMeshStandardMaterial?(i(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,v)):p.isMeshMatcapMaterial?(i(h,p),m(h,p)):p.isMeshDepthMaterial?i(h,p):p.isMeshDistanceMaterial?(i(h,p),g(h,p)):p.isMeshNormalMaterial?i(h,p):p.isLineBasicMaterial?(r(h,p),p.isLineDashedMaterial&&a(h,p)):p.isPointsMaterial?s(h,p,_,b):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===Kt&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===Kt&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(h.envMap.value=_,h.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const y=o.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),h.uvTransform.value.copy(b.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uv2Transform.value.copy(v.matrix))}function r(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function a(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function s(h,p,_,b){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*_,h.scale.value=b*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,_){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Kt&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=_.texture,h.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function g(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Mg(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function l(b,v){const y=v.program;n.uniformBlockBinding(b,y)}function c(b,v){let y=i[b.id];y===void 0&&(g(b),y=u(b),i[b.id]=y,b.addEventListener("dispose",p));const M=v.program;n.updateUBOMapping(b,M);const A=e.render.frame;r[b.id]!==A&&(d(b),r[b.id]=A)}function u(b){const v=f();b.__bindingPointIndex=v;const y=o.createBuffer(),M=b.__size,A=b.usage;return o.bindBuffer(35345,y),o.bufferData(35345,M,A),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,y),y}function f(){for(let b=0;b<s;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const v=i[b.id],y=b.uniforms,M=b.__cache;o.bindBuffer(35345,v);for(let A=0,L=y.length;A<L;A++){const x=y[A];if(m(x,A,M)===!0){const w=x.__offset,P=Array.isArray(x.value)?x.value:[x.value];let k=0;for(let Y=0;Y<P.length;Y++){const I=P[Y],R=h(I);typeof I=="number"?(x.__data[0]=I,o.bufferSubData(35345,w+k,x.__data)):I.isMatrix3?(x.__data[0]=I.elements[0],x.__data[1]=I.elements[1],x.__data[2]=I.elements[2],x.__data[3]=I.elements[0],x.__data[4]=I.elements[3],x.__data[5]=I.elements[4],x.__data[6]=I.elements[5],x.__data[7]=I.elements[0],x.__data[8]=I.elements[6],x.__data[9]=I.elements[7],x.__data[10]=I.elements[8],x.__data[11]=I.elements[0]):(I.toArray(x.__data,k),k+=R.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,w,x.__data)}}o.bindBuffer(35345,null)}function m(b,v,y){const M=b.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const A=Array.isArray(M)?M:[M],L=[];for(let x=0;x<A.length;x++)L.push(A[x].clone());y[v]=L}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const A=Array.isArray(y[v])?y[v]:[y[v]],L=Array.isArray(M)?M:[M];for(let x=0;x<A.length;x++){const w=A[x];if(w.equals(L[x])===!1)return w.copy(L[x]),!0}}return!1}function g(b){const v=b.uniforms;let y=0;const M=16;let A=0;for(let L=0,x=v.length;L<x;L++){const w=v[L],P={boundary:0,storage:0},k=Array.isArray(w.value)?w.value:[w.value];for(let Y=0,I=k.length;Y<I;Y++){const R=k[Y],U=h(R);P.boundary+=U.boundary,P.storage+=U.storage}if(w.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,L>0){A=y%M;const Y=M-A;A!==0&&Y-P.boundary<0&&(y+=M-A,w.__offset=y)}y+=P.storage}return A=y%M,A>0&&(y+=M-A),b.__size=y,b.__cache={},this}function h(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){const v=b.target;v.removeEventListener("dispose",p);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function _(){for(const b in i)o.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:_}}function bg(){const o=yr("canvas");return o.style.display="block",o}function _c(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:bg(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let f=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fi,this.physicallyCorrectLights=!1,this.toneMapping=wn,this.toneMappingExposure=1;const h=this;let p=!1,_=0,b=0,v=null,y=-1,M=null;const A=new ut,L=new ut;let x=null,w=e.width,P=e.height,k=1,Y=null,I=null;const R=new ut(0,0,w,P),U=new ut(0,0,w,P);let W=!1;const j=new hc;let V=!1,J=!1,K=null;const G=new ht,N=new we,re=new B,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return v===null?k:1}let Z=t;function Ee(T,z){for(let X=0;X<T.length;X++){const F=T[X],$=e.getContext(F,z);if($!==null)return $}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ga}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),Z===null){const z=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&z.shift(),Z=Ee(z,T),Z===null)throw Ee(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let fe,_e,he,Oe,Me,xe,rt,Qe,et,_t,Ye,Ne,Gt,St,E,S,H,te,ne,ae,ve,C,O,le;function ue(){fe=new Ip(Z),_e=new Ep(Z,fe,o),fe.init(_e),C=new mg(Z,fe,_e),he=new dg(Z,fe,_e),Oe=new Np,Me=new Qm,xe=new pg(Z,fe,he,Me,_e,C,Oe),rt=new Cp(h),Qe=new Rp(h),et=new Wh(Z,_e),O=new wp(Z,fe,et,_e),_t=new Op(Z,et,Oe,O),Ye=new Bp(Z,_t,et,Oe),ne=new kp(Z,_e,xe),S=new Ap(Me),Ne=new Jm(h,rt,Qe,fe,_e,O,S),Gt=new yg(h,Me),St=new tg,E=new og(fe,_e),te=new Sp(h,rt,Qe,he,Ye,u,a),H=new fg(h,Ye,_e),le=new Mg(Z,Oe,_e,he),ae=new Tp(Z,fe,Oe,_e),ve=new Fp(Z,fe,Oe,_e),Oe.programs=Ne.programs,h.capabilities=_e,h.extensions=fe,h.properties=Me,h.renderLists=St,h.shadowMap=H,h.state=he,h.info=Oe}ue();const oe=new vg(h,Z);this.xr=oe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const T=fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(w,P,!1))},this.getSize=function(T){return T.set(w,P)},this.setSize=function(T,z,X){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,P=z,e.width=Math.floor(T*k),e.height=Math.floor(z*k),X!==!1&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(w*k,P*k).floor()},this.setDrawingBufferSize=function(T,z,X){w=T,P=z,k=X,e.width=Math.floor(T*X),e.height=Math.floor(z*X),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,z,X,F){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,z,X,F),he.viewport(A.copy(R).multiplyScalar(k).floor())},this.getScissor=function(T){return T.copy(U)},this.setScissor=function(T,z,X,F){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,z,X,F),he.scissor(L.copy(U).multiplyScalar(k).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(T){he.setScissorTest(W=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(T=!0,z=!0,X=!0){let F=0;T&&(F|=16384),z&&(F|=256),X&&(F|=1024),Z.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),St.dispose(),E.dispose(),Me.dispose(),rt.dispose(),Qe.dispose(),Ye.dispose(),O.dispose(),le.dispose(),Ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ce),oe.removeEventListener("sessionend",me),K&&(K.dispose(),K=null),Fe.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Oe.autoReset,z=H.enabled,X=H.autoUpdate,F=H.needsUpdate,$=H.type;ue(),Oe.autoReset=T,H.enabled=z,H.autoUpdate=X,H.needsUpdate=F,H.type=$}function Ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Le(T){const z=T.target;z.removeEventListener("dispose",Le),ze(z)}function ze(T){D(T),Me.remove(T)}function D(T){const z=Me.get(T).programs;z!==void 0&&(z.forEach(function(X){Ne.releaseProgram(X)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,X,F,$,ge){z===null&&(z=Q);const ye=$.isMesh&&$.matrixWorld.determinant()<0,Se=bu(T,z,X,F,$);he.setMaterial(F,ye);let Te=X.index,Ie=1;F.wireframe===!0&&(Te=_t.getWireframeAttribute(X),Ie=2);const Pe=X.drawRange,De=X.attributes.position;let Ze=Pe.start*Ie,Pt=(Pe.start+Pe.count)*Ie;ge!==null&&(Ze=Math.max(Ze,ge.start*Ie),Pt=Math.min(Pt,(ge.start+ge.count)*Ie)),Te!==null?(Ze=Math.max(Ze,0),Pt=Math.min(Pt,Te.count)):De!=null&&(Ze=Math.max(Ze,0),Pt=Math.min(Pt,De.count));const pn=Pt-Ze;if(pn<0||pn===1/0)return;O.setup($,F,Se,X,Te);let Vn,$e=ae;if(Te!==null&&(Vn=et.get(Te),$e=ve,$e.setIndex(Vn)),$.isMesh)F.wireframe===!0?(he.setLineWidth(F.wireframeLinewidth*ie()),$e.setMode(1)):$e.setMode(4);else if($.isLine){let Re=F.linewidth;Re===void 0&&(Re=1),he.setLineWidth(Re*ie()),$.isLineSegments?$e.setMode(1):$.isLineLoop?$e.setMode(2):$e.setMode(3)}else $.isPoints?$e.setMode(0):$.isSprite&&$e.setMode(4);if($.isInstancedMesh)$e.renderInstances(Ze,pn,$.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,bs=Math.min(X.instanceCount,Re);$e.renderInstances(Ze,pn,bs)}else $e.render(Ze,pn)},this.compile=function(T,z){function X(F,$,ge){F.transparent===!0&&F.side===Ir?(F.side=Kt,F.needsUpdate=!0,Vt(F,$,ge),F.side=ui,F.needsUpdate=!0,Vt(F,$,ge),F.side=Ir):Vt(F,$,ge)}d=E.get(T),d.init(),g.push(d),T.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights(h.physicallyCorrectLights),T.traverse(function(F){const $=F.material;if($)if(Array.isArray($))for(let ge=0;ge<$.length;ge++){const ye=$[ge];X(ye,T,F)}else X($,T,F)}),g.pop(),d=null};let q=null;function ee(T){q&&q(T)}function ce(){Fe.stop()}function me(){Fe.start()}const Fe=new fc;Fe.setAnimationLoop(ee),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(T){q=T,oe.setAnimationLoop(T),T===null?Fe.stop():Fe.start()},oe.addEventListener("sessionstart",ce),oe.addEventListener("sessionend",me),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(z),z=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(h,T,z,v),d=E.get(T,g.length),d.init(),g.push(d),G.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),j.setFromProjectionMatrix(G),J=this.localClippingEnabled,V=S.init(this.clippingPlanes,J,z),f=St.get(T,m.length),f.init(),m.push(f),st(T,z,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(Y,I),V===!0&&S.beginShadows();const X=d.state.shadowsArray;if(H.render(X,T,z),V===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(f,T),d.setupLights(h.physicallyCorrectLights),z.isArrayCamera){const F=z.cameras;for(let $=0,ge=F.length;$<ge;$++){const ye=F[$];ft(f,T,ye,ye.viewport)}}else ft(f,T,z);v!==null&&(xe.updateMultisampleRenderTarget(v),xe.updateRenderTargetMipmap(v)),T.isScene===!0&&T.onAfterRender(h,T,z),O.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function st(T,z,X,F){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){F&&re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);const ye=Ye.update(T),Se=T.material;Se.visible&&f.push(T,ye,Se,X,re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Oe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Oe.render.frame),!T.frustumCulled||j.intersectsObject(T))){F&&re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(G);const ye=Ye.update(T),Se=T.material;if(Array.isArray(Se)){const Te=ye.groups;for(let Ie=0,Pe=Te.length;Ie<Pe;Ie++){const De=Te[Ie],Ze=Se[De.materialIndex];Ze&&Ze.visible&&f.push(T,ye,Ze,X,re.z,De)}}else Se.visible&&f.push(T,ye,Se,X,re.z,null)}}const ge=T.children;for(let ye=0,Se=ge.length;ye<Se;ye++)st(ge[ye],z,X,F)}function ft(T,z,X,F){const $=T.opaque,ge=T.transmissive,ye=T.transparent;d.setupLightsView(X),ge.length>0&&Gn($,z,X),F&&he.viewport(A.copy(F)),$.length>0&&Ge($,z,X),ge.length>0&&Ge(ge,z,X),ye.length>0&&Ge(ye,z,X),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Gn(T,z,X){const F=_e.isWebGL2;K===null&&(K=new di(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?xr:hi,minFilter:_r,samples:F&&r===!0?4:0})),h.getDrawingBufferSize(N),F?K.setSize(N.x,N.y):K.setSize(Ma(N.x),Ma(N.y));const $=h.getRenderTarget();h.setRenderTarget(K),h.clear();const ge=h.toneMapping;h.toneMapping=wn,Ge(T,z,X),h.toneMapping=ge,xe.updateMultisampleRenderTarget(K),xe.updateRenderTargetMipmap(K),h.setRenderTarget($)}function Ge(T,z,X){const F=z.isScene===!0?z.overrideMaterial:null;for(let $=0,ge=T.length;$<ge;$++){const ye=T[$],Se=ye.object,Te=ye.geometry,Ie=F===null?ye.material:F,Pe=ye.group;Se.layers.test(X.layers)&&dn(Se,z,X,Te,Ie,Pe)}}function dn(T,z,X,F,$,ge){T.onBeforeRender(h,z,X,F,$,ge),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(h,z,X,F,T,ge),$.transparent===!0&&$.side===Ir?($.side=Kt,$.needsUpdate=!0,h.renderBufferDirect(X,z,F,$,T,ge),$.side=ui,$.needsUpdate=!0,h.renderBufferDirect(X,z,F,$,T,ge),$.side=Ir):h.renderBufferDirect(X,z,F,$,T,ge),T.onAfterRender(h,z,X,F,$,ge)}function Vt(T,z,X){z.isScene!==!0&&(z=Q);const F=Me.get(T),$=d.state.lights,ge=d.state.shadowsArray,ye=$.state.version,Se=Ne.getParameters(T,$.state,ge,z,X),Te=Ne.getProgramCacheKey(Se);let Ie=F.programs;F.environment=T.isMeshStandardMaterial?z.environment:null,F.fog=z.fog,F.envMap=(T.isMeshStandardMaterial?Qe:rt).get(T.envMap||F.environment),Ie===void 0&&(T.addEventListener("dispose",Le),Ie=new Map,F.programs=Ie);let Pe=Ie.get(Te);if(Pe!==void 0){if(F.currentProgram===Pe&&F.lightsStateVersion===ye)return lo(T,Se),Pe}else Se.uniforms=Ne.getUniforms(T),T.onBuild(X,Se,h),T.onBeforeCompile(Se,h),Pe=Ne.acquireProgram(Se,Te),Ie.set(Te,Pe),F.uniforms=Se.uniforms;const De=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=S.uniform),lo(T,Se),F.needsLights=wu(T),F.lightsStateVersion=ye,F.needsLights&&(De.ambientLightColor.value=$.state.ambient,De.lightProbe.value=$.state.probe,De.directionalLights.value=$.state.directional,De.directionalLightShadows.value=$.state.directionalShadow,De.spotLights.value=$.state.spot,De.spotLightShadows.value=$.state.spotShadow,De.rectAreaLights.value=$.state.rectArea,De.ltc_1.value=$.state.rectAreaLTC1,De.ltc_2.value=$.state.rectAreaLTC2,De.pointLights.value=$.state.point,De.pointLightShadows.value=$.state.pointShadow,De.hemisphereLights.value=$.state.hemi,De.directionalShadowMap.value=$.state.directionalShadowMap,De.directionalShadowMatrix.value=$.state.directionalShadowMatrix,De.spotShadowMap.value=$.state.spotShadowMap,De.spotLightMatrix.value=$.state.spotLightMatrix,De.spotLightMap.value=$.state.spotLightMap,De.pointShadowMap.value=$.state.pointShadowMap,De.pointShadowMatrix.value=$.state.pointShadowMatrix);const Ze=Pe.getUniforms(),Pt=ns.seqWithValue(Ze.seq,De);return F.currentProgram=Pe,F.uniformsList=Pt,Pe}function lo(T,z){const X=Me.get(T);X.outputEncoding=z.outputEncoding,X.instancing=z.instancing,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function bu(T,z,X,F,$){z.isScene!==!0&&(z=Q),xe.resetTextureUnits();const ge=z.fog,ye=F.isMeshStandardMaterial?z.environment:null,Se=v===null?h.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:fi,Te=(F.isMeshStandardMaterial?Qe:rt).get(F.envMap||ye),Ie=F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!F.normalMap&&!!X.attributes.tangent,De=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,Pt=!!X.morphAttributes.color,pn=F.toneMapped?h.toneMapping:wn,Vn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$e=Vn!==void 0?Vn.length:0,Re=Me.get(F),bs=d.state.lights;if(V===!0&&(J===!0||T!==M)){const Dt=T===M&&F.id===y;S.setState(F,T,Dt)}let at=!1;F.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==bs.state.version||Re.outputEncoding!==Se||$.isInstancedMesh&&Re.instancing===!1||!$.isInstancedMesh&&Re.instancing===!0||$.isSkinnedMesh&&Re.skinning===!1||!$.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Te||F.fog===!0&&Re.fog!==ge||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==S.numPlanes||Re.numIntersection!==S.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==Pe||Re.morphTargets!==De||Re.morphNormals!==Ze||Re.morphColors!==Pt||Re.toneMapping!==pn||_e.isWebGL2===!0&&Re.morphTargetsCount!==$e)&&(at=!0):(at=!0,Re.__version=F.version);let Wn=Re.currentProgram;at===!0&&(Wn=Vt(F,z,$));let co=!1,tr=!1,Ss=!1;const xt=Wn.getUniforms(),Hn=Re.uniforms;if(he.useProgram(Wn.program)&&(co=!0,tr=!0,Ss=!0),F.id!==y&&(y=F.id,tr=!0),co||M!==T){if(xt.setValue(Z,"projectionMatrix",T.projectionMatrix),_e.logarithmicDepthBuffer&&xt.setValue(Z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,tr=!0,Ss=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Dt=xt.map.cameraPosition;Dt!==void 0&&Dt.setValue(Z,re.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&xt.setValue(Z,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||$.isSkinnedMesh)&&xt.setValue(Z,"viewMatrix",T.matrixWorldInverse)}if($.isSkinnedMesh){xt.setOptional(Z,$,"bindMatrix"),xt.setOptional(Z,$,"bindMatrixInverse");const Dt=$.skeleton;Dt&&(_e.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),xt.setValue(Z,"boneTexture",Dt.boneTexture,xe),xt.setValue(Z,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ws=X.morphAttributes;if((ws.position!==void 0||ws.normal!==void 0||ws.color!==void 0&&_e.isWebGL2===!0)&&ne.update($,X,F,Wn),(tr||Re.receiveShadow!==$.receiveShadow)&&(Re.receiveShadow=$.receiveShadow,xt.setValue(Z,"receiveShadow",$.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Hn.envMap.value=Te,Hn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),tr&&(xt.setValue(Z,"toneMappingExposure",h.toneMappingExposure),Re.needsLights&&Su(Hn,Ss),ge&&F.fog===!0&&Gt.refreshFogUniforms(Hn,ge),Gt.refreshMaterialUniforms(Hn,F,k,P,K),ns.upload(Z,Re.uniformsList,Hn,xe)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ns.upload(Z,Re.uniformsList,Hn,xe),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&xt.setValue(Z,"center",$.center),xt.setValue(Z,"modelViewMatrix",$.modelViewMatrix),xt.setValue(Z,"normalMatrix",$.normalMatrix),xt.setValue(Z,"modelMatrix",$.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Dt=F.uniformsGroups;for(let Ts=0,Tu=Dt.length;Ts<Tu;Ts++)if(_e.isWebGL2){const uo=Dt[Ts];le.update(uo,Wn),le.bind(uo,Wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wn}function Su(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function wu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(T,z,X){Me.get(T.texture).__webglTexture=z,Me.get(T.depthTexture).__webglTexture=X;const F=Me.get(T);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=X===void 0,F.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,z){const X=Me.get(T);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,X=0){v=T,_=z,b=X;let F=!0,$=null,ge=!1,ye=!1;if(T){const Te=Me.get(T);Te.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),F=!1):Te.__webglFramebuffer===void 0?xe.setupRenderTarget(T):Te.__hasExternalTextures&&xe.rebindTextures(T,Me.get(T.texture).__webglTexture,Me.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Pe=Me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?($=Pe[z],ge=!0):_e.isWebGL2&&T.samples>0&&xe.useMultisampledRTT(T)===!1?$=Me.get(T).__webglMultisampledFramebuffer:$=Pe,A.copy(T.viewport),L.copy(T.scissor),x=T.scissorTest}else A.copy(R).multiplyScalar(k).floor(),L.copy(U).multiplyScalar(k).floor(),x=W;if(he.bindFramebuffer(36160,$)&&_e.drawBuffers&&F&&he.drawBuffers(T,$),he.viewport(A),he.scissor(L),he.setScissorTest(x),ge){const Te=Me.get(T.texture);Z.framebufferTexture2D(36160,36064,34069+z,Te.__webglTexture,X)}else if(ye){const Te=Me.get(T.texture),Ie=z||0;Z.framebufferTextureLayer(36160,36064,Te.__webglTexture,X||0,Ie)}y=-1},this.readRenderTargetPixels=function(T,z,X,F,$,ge,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Se=Se[ye]),Se){he.bindFramebuffer(36160,Se);try{const Te=T.texture,Ie=Te.format,Pe=Te.type;if(Ie!==rn&&C.convert(Ie)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===xr&&(fe.has("EXT_color_buffer_half_float")||_e.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Pe!==hi&&C.convert(Pe)!==Z.getParameter(35738)&&!(Pe===ti&&(_e.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-F&&X>=0&&X<=T.height-$&&Z.readPixels(z,X,F,$,C.convert(Ie),C.convert(Pe),ge)}finally{const Te=v!==null?Me.get(v).__webglFramebuffer:null;he.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(T,z,X=0){const F=Math.pow(2,-X),$=Math.floor(z.image.width*F),ge=Math.floor(z.image.height*F);xe.setTexture2D(z,0),Z.copyTexSubImage2D(3553,X,0,0,T.x,T.y,$,ge),he.unbindTexture()},this.copyTextureToTexture=function(T,z,X,F=0){const $=z.image.width,ge=z.image.height,ye=C.convert(X.format),Se=C.convert(X.type);xe.setTexture2D(X,0),Z.pixelStorei(37440,X.flipY),Z.pixelStorei(37441,X.premultiplyAlpha),Z.pixelStorei(3317,X.unpackAlignment),z.isDataTexture?Z.texSubImage2D(3553,F,T.x,T.y,$,ge,ye,Se,z.image.data):z.isCompressedTexture?Z.compressedTexSubImage2D(3553,F,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,ye,z.mipmaps[0].data):Z.texSubImage2D(3553,F,T.x,T.y,ye,Se,z.image),F===0&&X.generateMipmaps&&Z.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(T,z,X,F,$=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=T.max.x-T.min.x+1,ye=T.max.y-T.min.y+1,Se=T.max.z-T.min.z+1,Te=C.convert(F.format),Ie=C.convert(F.type);let Pe;if(F.isData3DTexture)xe.setTexture3D(F,0),Pe=32879;else if(F.isDataArrayTexture)xe.setTexture2DArray(F,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,F.flipY),Z.pixelStorei(37441,F.premultiplyAlpha),Z.pixelStorei(3317,F.unpackAlignment);const De=Z.getParameter(3314),Ze=Z.getParameter(32878),Pt=Z.getParameter(3316),pn=Z.getParameter(3315),Vn=Z.getParameter(32877),$e=X.isCompressedTexture?X.mipmaps[0]:X.image;Z.pixelStorei(3314,$e.width),Z.pixelStorei(32878,$e.height),Z.pixelStorei(3316,T.min.x),Z.pixelStorei(3315,T.min.y),Z.pixelStorei(32877,T.min.z),X.isDataTexture||X.isData3DTexture?Z.texSubImage3D(Pe,$,z.x,z.y,z.z,ge,ye,Se,Te,Ie,$e.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Pe,$,z.x,z.y,z.z,ge,ye,Se,Te,$e.data)):Z.texSubImage3D(Pe,$,z.x,z.y,z.z,ge,ye,Se,Te,Ie,$e),Z.pixelStorei(3314,De),Z.pixelStorei(32878,Ze),Z.pixelStorei(3316,Pt),Z.pixelStorei(3315,pn),Z.pixelStorei(32877,Vn),$===0&&F.generateMipmaps&&Z.generateMipmap(Pe),he.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){_=0,b=0,v=null,he.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Sg extends _c{}Sg.prototype.isWebGL1Renderer=!0;class wg extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const bl={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Tg{constructor(e,t,n){const i=this;let r=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Eg=new Tg;class xc{constructor(e){this.manager=e!==void 0?e:Eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Ag extends xc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bl.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s=yr("img");function l(){u(),bl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class Cg extends xc{constructor(e){super(e)}load(e,t,n,i){const r=new bt,a=new Ag(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Lg{constructor(e,t,n=0,i=1/0){this.ray=new rc(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Sa(e,this,n,t),n.sort(Sl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Sa(e[i],this,n,t);return n.sort(Sl),n}}function Sl(o,e){return o.distance-e.distance}function Sa(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let r=0,a=i.length;r<a;r++)Sa(i[r],e,t,!0)}}class wl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ga);var vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yc(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Mc={exports:{}},ra={exports:{}},Tl;function Pg(){return Tl||(Tl=1,function(o){(function(e,t){o.exports?o.exports=t():e.EvEmitter=t()})(typeof window<"u"?window:vc,function(){function e(){}var t=e.prototype;return t.on=function(n,i){if(!(!n||!i)){var r=this._events=this._events||{},a=r[n]=r[n]||[];return a.indexOf(i)==-1&&a.push(i),this}},t.once=function(n,i){if(!(!n||!i)){this.on(n,i);var r=this._onceEvents=this._onceEvents||{},a=r[n]=r[n]||{};return a[i]=!0,this}},t.off=function(n,i){var r=this._events&&this._events[n];if(!(!r||!r.length)){var a=r.indexOf(i);return a!=-1&&r.splice(a,1),this}},t.emitEvent=function(n,i){var r=this._events&&this._events[n];if(!(!r||!r.length)){r=r.slice(0),i=i||[];for(var a=this._onceEvents&&this._onceEvents[n],s=0;s<r.length;s++){var l=r[s],c=a&&a[l];c&&(this.off(n,l),delete a[l]),l.apply(this,i)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e})}(ra)),ra.exports}/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function(o){(function(e,t){o.exports?o.exports=t(e,Pg()):e.imagesLoaded=t(e,e.EvEmitter)})(typeof window<"u"?window:vc,function(t,n){var i=t.jQuery,r=t.console;function a(m,g){for(var h in g)m[h]=g[h];return m}var s=Array.prototype.slice;function l(m){if(Array.isArray(m))return m;var g=typeof m=="object"&&typeof m.length=="number";return g?s.call(m):[m]}function c(m,g,h){if(!(this instanceof c))return new c(m,g,h);var p=m;if(typeof m=="string"&&(p=document.querySelectorAll(m)),!p){r.error("Bad element for imagesLoaded "+(p||m));return}this.elements=l(p),this.options=a({},this.options),typeof g=="function"?h=g:a(this.options,g),h&&this.on("always",h),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))}c.prototype=Object.create(n.prototype),c.prototype.options={},c.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},c.prototype.addElementImages=function(m){m.nodeName=="IMG"&&this.addImage(m),this.options.background===!0&&this.addElementBackgroundImages(m);var g=m.nodeType;if(!(!g||!u[g])){for(var h=m.querySelectorAll("img"),p=0;p<h.length;p++){var _=h[p];this.addImage(_)}if(typeof this.options.background=="string"){var b=m.querySelectorAll(this.options.background);for(p=0;p<b.length;p++){var v=b[p];this.addElementBackgroundImages(v)}}}};var u={1:!0,9:!0,11:!0};c.prototype.addElementBackgroundImages=function(m){var g=getComputedStyle(m);if(g)for(var h=/url\((['"])?(.*?)\1\)/gi,p=h.exec(g.backgroundImage);p!==null;){var _=p&&p[2];_&&this.addBackground(_,m),p=h.exec(g.backgroundImage)}},c.prototype.addImage=function(m){var g=new f(m);this.images.push(g)},c.prototype.addBackground=function(m,g){var h=new d(m,g);this.images.push(h)},c.prototype.check=function(){var m=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}function g(h,p,_){setTimeout(function(){m.progress(h,p,_)})}this.images.forEach(function(h){h.once("progress",g),h.check()})},c.prototype.progress=function(m,g,h){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!m.isLoaded,this.emitEvent("progress",[this,m,g]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,m),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&r&&r.log("progress: "+h,m,g)},c.prototype.complete=function(){var m=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(m,[this]),this.emitEvent("always",[this]),this.jqDeferred){var g=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[g](this)}};function f(m){this.img=m}f.prototype=Object.create(n.prototype),f.prototype.check=function(){var m=this.getIsImageComplete();if(m){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src},f.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},f.prototype.confirm=function(m,g){this.isLoaded=m,this.emitEvent("progress",[this,this.img,g])},f.prototype.handleEvent=function(m){var g="on"+m.type;this[g]&&this[g](m)},f.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},f.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},f.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function d(m,g){this.url=m,this.element=g,this.img=new Image}return d.prototype=Object.create(f.prototype),d.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var m=this.getIsImageComplete();m&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},d.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},d.prototype.confirm=function(m,g){this.isLoaded=m,this.emitEvent("progress",[this,this.element,g])},c.makeJQueryPlugin=function(m){m=m||t.jQuery,m&&(i=m,i.fn.imagesLoaded=function(g,h){var p=new c(this,g,h);return p.jqDeferred.promise(i(this))})},c.makeJQueryPlugin(),c})})(Mc);var Dg=Mc.exports;const Rg=yc(Dg);function yn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function bc(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zi={duration:.5,overwrite:!1,delay:0},qa,mt,qe,jt=1e8,ke=1/jt,wa=Math.PI*2,Ig=wa/4,Og=0,Sc=Math.sqrt,Fg=Math.cos,Ng=Math.sin,lt=function(e){return typeof e=="string"},Xe=function(e){return typeof e=="function"},Tn=function(e){return typeof e=="number"},Xa=function(e){return typeof e>"u"},fn=function(e){return typeof e=="object"},Et=function(e){return e!==!1},Ya=function(){return typeof window<"u"},es=function(e){return Xe(e)||lt(e)},wc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gt=Array.isArray,Ta=/(?:-?\.?\d|\.)+/gi,Tc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ui=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,sa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ec=/[+-]=-?[.\d]+/,Ac=/[^,'"\[\]\s]+/gi,zg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ve,qt,Ea,ja,Bt={},as={},Cc,Lc=function(e){return(as=mi(e,Bt))&&Lt},Za=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},os=function(e,t){return!t&&console.warn(e)},Pc=function(e,t){return e&&(Bt[e]=t)&&as&&(as[e]=t)||Bt},Mr=function(){return 0},Ug={suppressEvents:!0,isStart:!0,kill:!1},is={suppressEvents:!0,kill:!1},kg={suppressEvents:!0},$a={},Fn=[],Aa={},Dc,Ft={},aa={},El=30,rs=[],Ka="",Ja=function(e){var t=e[0],n,i;if(fn(t)||Xe(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=rs.length;i--&&!rs[i].targetTest(t););n=rs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new tu(e[i],n)))||e.splice(i,1);return e},ai=function(e){return e._gsap||Ja(Zt(e))[0]._gsap},Rc=function(e,t,n){return(n=e[t])&&Xe(n)?e[t]():Xa(n)&&e.getAttribute&&e.getAttribute(t)||n},At=function(e,t){return(e=e.split(",")).forEach(t)||e},je=function(e){return Math.round(e*1e5)/1e5||0},ct=function(e){return Math.round(e*1e7)/1e7||0},Vi=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Bg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ls=function(){var e=Fn.length,t=Fn.slice(0),n,i;for(Aa={},Fn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ic=function(e,t,n,i){Fn.length&&!mt&&ls(),e.render(t,n,i||mt&&t<0&&(e._initted||e._startAt)),Fn.length&&!mt&&ls()},Oc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ac).length<2?t:lt(e)?e.trim():e},Fc=function(e){return e},Jt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Gg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},mi=function(e,t){for(var n in t)e[n]=t[n];return e},Al=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=fn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},cs=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},pr=function(e){var t=e.parent||Ve,n=e.keyframes?Gg(gt(e.keyframes)):Jt;if(Et(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Vg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Nc=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},vs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Un=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},oi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Wg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ca=function(e,t,n,i){return e._startAt&&(mt?e._startAt.revert(is):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Hg=function o(e){return!e||e._ts&&o(e.parent)},Cl=function(e){return e._repeat?$i(e._tTime,e=e.duration()+e._rDelay)*e:0},$i=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},us=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ys=function(e){return e._end=ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||ke)||0))},Ms=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ct(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ys(e),n._dirty||oi(n,e)),e},zc=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=us(e.rawTime(),t),(!t._dur||Rr(0,t.totalDuration(),n)-t._tTime>ke)&&t.render(n,!0)),oi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ke}},ln=function(e,t,n,i){return t.parent&&Un(t),t._start=ct((Tn(n)?n:n||e!==Ve?Ht(e,n,t):e._time)+t._delay),t._end=ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Nc(e,t,"_first","_last",e._sort?"_start":0),La(t)||(e._recent=t),i||zc(e,t),e._ts<0&&Ms(e,e._tTime),e},Uc=function(e,t){return(Bt.ScrollTrigger||Za("scrollTrigger",t))&&Bt.ScrollTrigger.create(t,e)},kc=function(e,t,n,i,r){if(eo(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!mt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Dc!==Nt.frame)return Fn.push(e),e._lazy=[r,i],1},qg=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},La=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Xg=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&qg(e)&&!(!e._initted&&La(e))||(e._ts<0||e._dp._ts<0)&&!La(e))?0:1,s=e._rDelay,l=0,c,u,f;if(s&&e._repeat&&(l=Rr(0,e._tDur,t),u=$i(l,s),e._yoyo&&u&1&&(a=1-a),u!==$i(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||mt||i||e._zTime===ke||!t&&e._zTime){if(!e._initted&&kc(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?ke:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ca(e,t,n,!0),e._onUpdate&&!n&&$t(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&$t(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Un(e,1),!n&&!mt&&($t(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Yg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ki=function(e,t,n,i){var r=e._repeat,a=ct(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:ct(a*(r+1)+e._rDelay*r):a,s>0&&!i&&Ms(e,e._tTime=e._tDur*s),e.parent&&ys(e),n||oi(e.parent,e),e},Ll=function(e){return e instanceof Tt?oi(e):Ki(e,e._dur)},jg={_start:0,endTime:Mr,totalDuration:Mr},Ht=function o(e,t,n){var i=e.labels,r=e._recent||jg,a=e.duration()>=jt?r.endTime(!1):e._dur,s,l,c;return lt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(gt(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+l:a+l)):t==null?a:+t},mr=function(e,t,n){var i=Tn(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Et(l.vars.inherit)&&l.parent;a.immediateRender=Et(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Je(t[0],a,t[r+1])},Bn=function(e,t){return e||e===0?t(e):t},Rr=function(e,t,n){return n<e?e:n>t?t:n},pt=function(e,t){return!lt(e)||!(t=zg.exec(e))?"":t[1]},Zg=function(e,t,n){return Bn(n,function(i){return Rr(e,t,i)})},Pa=[].slice,Bc=function(e,t){return e&&fn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&fn(e[0]))&&!e.nodeType&&e!==qt},$g=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return lt(i)&&!t||Bc(i,1)?(r=n).push.apply(r,Zt(i)):n.push(i)})||n},Zt=function(e,t,n){return qe&&!t&&qe.selector?qe.selector(e):lt(e)&&!n&&(Ea||!Ji())?Pa.call((t||ja).querySelectorAll(e),0):gt(e)?$g(e,n):Bc(e)?Pa.call(e,0):e?[e]:[]},Da=function(e){return e=Zt(e)[0]||os("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Zt(t,n.querySelectorAll?n:n===e?os("Invalid scope")||ja.createElement("div"):e)}},Gc=function(e){return e.sort(function(){return .5-Math.random()})},Vc=function(e){if(Xe(e))return e;var t=fn(e)?e:{each:e},n=li(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,f=i;return lt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],f=i[1]),function(d,m,g){var h=(g||t).length,p=a[h],_,b,v,y,M,A,L,x,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,jt])[1],!w){for(L=-jt;L<(L=g[w++].getBoundingClientRect().left)&&w<h;);w--}for(p=a[h]=[],_=l?Math.min(w,h)*u-.5:i%w,b=w===jt?0:l?h*f/w-.5:i/w|0,L=0,x=jt,A=0;A<h;A++)v=A%w-_,y=b-(A/w|0),p[A]=M=c?Math.abs(c==="y"?y:v):Sc(v*v+y*y),M>L&&(L=M),M<x&&(x=M);i==="random"&&Gc(p),p.max=L-x,p.min=x,p.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(w>h?h-1:c?c==="y"?h/w:w:Math.max(w,h/w))||0)*(i==="edges"?-1:1),p.b=h<0?r-h:r,p.u=pt(t.amount||t.each)||0,n=n&&h<0?Jc(n):n}return h=(p[d]-p.min)/p.max||0,ct(p.b+(n?n(h):h)*p.v)+p.u}},Ra=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ct(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Tn(n)?0:pt(n))}},Wc=function(e,t){var n=gt(e),i,r;return!n&&fn(e)&&(i=n=e.radius||jt,e.values?(e=Zt(e.values),(r=!Tn(e[0]))&&(i*=i)):e=Ra(e.increment)),Bn(t,n?Xe(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=jt,u=0,f=e.length,d,m;f--;)r?(d=e[f].x-s,m=e[f].y-l,d=d*d+m*m):d=Math.abs(e[f]-s),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:a,r||u===a||Tn(a)?u:u+pt(a)}:Ra(e))},Hc=function(e,t,n,i){return Bn(gt(e)?!t:n===!0?!!(n=0):!i,function(){return gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Kg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Jg=function(e,t){return function(n){return e(parseFloat(n))+(t||pt(n))}},Qg=function(e,t,n){return Xc(e,t,0,1,n)},qc=function(e,t,n){return Bn(n,function(i){return e[~~t(i)]})},e_=function o(e,t,n){var i=t-e;return gt(e)?qc(e,o(0,e.length),t):Bn(n,function(r){return(i+(r-e)%i)%i+e})},t_=function o(e,t,n){var i=t-e,r=i*2;return gt(e)?qc(e,o(0,e.length-1),t):Bn(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},br=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?Ac:Ta),n+=e.substr(t,i-t)+Hc(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Xc=function(e,t,n,i,r){var a=t-e,s=i-n;return Bn(r,function(l){return n+((l-e)/a*s||0)})},n_=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=lt(e),s={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(gt(e)&&!gt(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(o(e[c-1],e[c]));f--,r=function(g){g*=f;var h=Math.min(d,~~g);return u[h](g-h)},n=t}else i||(e=mi(gt(e)?[]:{},e));if(!u){for(l in t)Qa.call(s,e,l,"get",t[l]);r=function(g){return io(g,s)||(a?e.p:e)}}}return Bn(n,r)},Pl=function(e,t,n){var i=e.labels,r=jt,a,s,l;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},$t=function(e,t,n){var i=e.vars,r=i[t],a=qe,s=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Fn.length&&ls(),s&&(qe=s),u=l?r.apply(c,l):r.call(c),qe=a,u},fr=function(e){return Un(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mt),e.progress()<1&&$t(e,"onInterrupt"),e},ki,Yc=[],jc=function(e){if(Ya()&&e){e=!e.name&&e.default||e;var t=e.name,n=Xe(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Mr,render:io,add:Qa,kill:x_,modifier:__,rawVars:0},a={targetTest:0,get:0,getSetter:no,aliases:{},register:0};if(Ji(),e!==i){if(Ft[t])return;Jt(i,Jt(cs(e,r),a)),mi(i.prototype,mi(r,cs(e,a))),Ft[i.prop=t]=i,e.targetTest&&(rs.push(i),$a[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Pc(t,i),e.register&&e.register(Lt,i,Ct)}else e&&Yc.push(e)},Ue=255,dr={aqua:[0,Ue,Ue],lime:[0,Ue,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ue],navy:[0,0,128],white:[Ue,Ue,Ue],olive:[128,128,0],yellow:[Ue,Ue,0],orange:[Ue,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ue,0,0],pink:[Ue,192,203],cyan:[0,Ue,Ue],transparent:[Ue,Ue,Ue,0]},oa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ue+.5|0},Zc=function(e,t,n){var i=e?Tn(e)?[e>>16,e>>8&Ue,e&Ue]:0:dr.black,r,a,s,l,c,u,f,d,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),dr[e])i=dr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ue,i&Ue,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ue,e&Ue]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ta),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=oa(l+1/3,r,a),i[1]=oa(l,r,a),i[2]=oa(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Tc),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ta)||dr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Ue,a=i[1]/Ue,s=i[2]/Ue,f=Math.max(r,a,s),d=Math.min(r,a,s),u=(f+d)/2,f===d?l=c=0:(m=f-d,c=u>.5?m/(2-f-d):m/(f+d),l=f===r?(a-s)/m+(a<s?6:0):f===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},$c=function(e){var t=[],n=[],i=-1;return e.split(Nn).forEach(function(r){var a=r.match(Ui)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Dl=function(e,t,n){var i="",r=(e+i).match(Nn),a=t?"hsla(":"rgba(",s=0,l,c,u,f;if(!r)return e;if(r=r.map(function(d){return(d=Zc(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=$c(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Nn,"1").split(Ui),f=c.length-1;s<f;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Nn),f=c.length-1;s<f;s++)i+=c[s]+r[s];return i+c[f]},Nn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in dr)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),i_=/hsl[a]?\(/,Kc=function(e){var t=e.join(" "),n;if(Nn.lastIndex=0,Nn.test(t))return n=i_.test(t),e[1]=Dl(e[1],n),e[0]=Dl(e[0],n,$c(e[1])),!0},Sr,Nt=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,f,d,m,g=function h(p){var _=o()-i,b=p===!0,v,y,M,A;if(_>e&&(n+=_-t),i+=_,M=i-n,v=M-a,(v>0||b)&&(A=++f.frame,d=M-f.time*1e3,f.time=M=M/1e3,a+=v+(v>=r?4:r-v),y=1),b||(l=c(h)),y)for(m=0;m<s.length;m++)s[m](M,d,A,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Cc&&(!Ea&&Ya()&&(qt=Ea=window,ja=qt.document||{},Bt.gsap=Lt,(qt.gsapVersions||(qt.gsapVersions=[])).push(Lt.version),Lc(as||qt.GreenSockGlobals||!qt.gsap&&qt||{}),u=qt.requestAnimationFrame,Yc.forEach(jc)),l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Sr=1,g(2))},sleep:function(){(u?qt.cancelAnimationFrame:clearTimeout)(l),Sr=0,c=Mr},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),a=f.time*1e3+r},add:function(p,_,b){var v=_?function(y,M,A,L){p(y,M,A,L),f.remove(v)}:p;return f.remove(p),s[b?"unshift":"push"](v),Ji(),v},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},f}(),Ji=function(){return!Sr&&Nt.wake()},Ce={},r_=/^[\d.\-M][\d.\-,\s]/,s_=/["']/g,a_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(s_,"").trim():+c,i=l.substr(s+1).trim();return t},o_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},l_=function(e){var t=(e+"").split("("),n=Ce[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[a_(t[1])]:o_(e).split(",").map(Oc)):Ce._CE&&r_.test(e)?Ce._CE("",e):n},Jc=function(e){return function(t){return 1-e(1-t)}},Qc=function o(e,t){for(var n=e._first,i;n;)n instanceof Tt?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},li=function(e,t){return e&&(Xe(e)?e:Ce[e]||l_(e))||t},xi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return At(e,function(s){Ce[s]=Bt[s]=r,Ce[a=s.toLowerCase()]=n;for(var l in r)Ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ce[s+"."+l]=r[l]}),r},eu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},la=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/wa*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ng((u-a)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:eu(s);return r=wa/r,l.config=function(c,u){return o(e,c,u)},l},ca=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:eu(n);return i.config=function(r){return o(e,r)},i};At("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;xi(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;xi("Elastic",la("in"),la("out"),la());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};xi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);xi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});xi("Circ",function(o){return-(Sc(1-o*o)-1)});xi("Sine",function(o){return o===1?1:-Fg(o*Ig)+1});xi("Back",ca("in"),ca("out"),ca());Ce.SteppedEase=Ce.steps=Bt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ke;return function(s){return((i*Rr(0,a,s)|0)+r)*n}}};Zi.ease=Ce["quad.out"];At("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Ka+=o+","+o+"Params,"});var tu=function(e,t){this.id=Og++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Rc,this.set=t?t.getSetter:no},wr=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ki(this,+t.duration,1,1),this.data=t.data,qe&&(this._ctx=qe,qe.data.push(this)),Sr||Nt.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ki(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ji(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ms(this,n),!r._dp||r.parent||zc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ln(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ke||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ic(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Cl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Cl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?$i(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ke?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?us(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ke?0:this._rts,this.totalTime(Rr(-Math.abs(this._delay),this._tDur,i),!0),ys(this),Wg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ji(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ke&&(this._tTime-=ke)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ln(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Et(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?us(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=kg);var i=mt;return mt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ll(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ll(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ht(this,n),Et(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Et(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ke:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ke,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ke)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Xe(n)?n:Fc,s=function(){var c=i.then;i.then=null,Xe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){fr(this)},o}();Jt(wr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ke,_prom:0,_ps:!1,_rts:1});var Tt=function(o){bc(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Et(n.sortChildren),Ve&&ln(n.parent||Ve,yn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Uc(yn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return mr(0,arguments,this),this},t.from=function(i,r,a){return mr(1,arguments,this),this},t.fromTo=function(i,r,a,s){return mr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,pr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Je(i,r,Ht(this,a),1),this},t.call=function(i,r,a){return ln(this,Je.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Je(i,a,Ht(this,l)),this},t.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,pr(a).immediateRender=Et(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},t.staggerFromTo=function(i,r,a,s,l,c,u,f){return s.startAt=a,pr(s).immediateRender=Et(s.immediateRender),this.staggerTo(i,r,s,l,c,u,f)},t.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ct(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,m,g,h,p,_,b,v,y,M,A,L;if(this!==Ve&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),d=u,y=this._start,v=this._ts,_=!v,f&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(d=ct(u%p),u===l?(h=this._repeat,d=c):(h=~~(u/p),h&&h===u/p&&(d=c,h--),d>c&&(d=c)),M=$i(this._tTime,p),!s&&this._tTime&&M!==h&&this._tTime-M*p-this._dur<=0&&(M=h),A&&h&1&&(d=c-d,L=1),h!==M&&!this._lock){var x=A&&M&1,w=x===(A&&h&1);if(h<M&&(x=!x),s=x?0:u%c?c:u,this._lock=1,this.render(s||(L?0:ct(h*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&$t(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,s=x?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Qc(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Yg(this,ct(s),ct(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&d&&!r&&!h&&($t(this,"onStart"),this._tTime!==u))return this;if(d>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,a),d!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-ke);break}}m=g}else{m=this._last;for(var P=i<0?i:d;m;){if(g=m._prev,(m._act||P<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,r,a||mt&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=P?-ke:ke);break}}m=g}}if(b&&!r&&(this.pause(),b.render(d>=s?0:-ke)._zTime=d>=s?1:-1,this._ts))return this._start=y,ys(this),this.render(i,r,a);this._onUpdate&&!r&&$t(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Un(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&($t(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Tn(r)||(r=Ht(this,r,i)),!(i instanceof wr)){if(gt(i))return i.forEach(function(s){return a.add(s,r)}),this;if(lt(i))return this.addLabel(i,r);if(Xe(i))i=Je.delayedCall(0,i);else return this}return this!==i?ln(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-jt);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof Je?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return lt(i)?this.removeLabel(i):Xe(i)?this.killTweensOf(i):(vs(this,i),i===this._recent&&(this._recent=this._last),oi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ct(Nt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Ht(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=Je.delayedCall(0,r||Mr,a);return s.data="isPause",this._hasPause=1,ln(this,s,Ht(this,i))},t.removePause=function(i){var r=this._first;for(i=Ht(this,i);r;)r._start===i&&r.data==="isPause"&&Un(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)Dn!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=Zt(i),l=this._first,c=Tn(r),u;l;)l instanceof Je?Bg(l._targets,s)&&(c?(!Dn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=Ht(a,i),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,m,g=Je.to(a,Jt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||ke,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Ki(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,f||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Jt({startAt:{time:Ht(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Pl(this,Ht(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Pl(this,Ht(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ke)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return oi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),oi(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,l=jt,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,ln(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;Ki(a,a===Ve&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ve._ts&&(Ic(Ve,us(i,Ve)),Dc=Nt.frame),Nt.frame>=El){El+=kt.autoSleep||120;var r=Ve._first;if((!r||!r._ts)&&kt.autoSleep&&Nt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Nt.sleep()}}},e}(wr);Jt(Tt.prototype,{_lock:0,_hasPause:0,_forcing:0});var c_=function(e,t,n,i,r,a,s){var l=new Ct(this._pt,e,t,0,1,ou,null,r),c=0,u=0,f,d,m,g,h,p,_,b;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=br(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),d=n.match(sa)||[];f=sa.exec(i);)g=f[0],h=i.substring(c,f.index),m?m=(m+1)%5:h.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:h||u===1?h:",",s:p,c:g.charAt(1)==="="?Vi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=sa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Ec.test(i)||_)&&(l.e=0),this._pt=l,l},Qa=function(e,t,n,i,r,a,s,l,c,u){Xe(i)&&(i=i(r||0,e,a));var f=e[t],d=n!=="get"?n:Xe(f)?c?e[t.indexOf("set")||!Xe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=Xe(f)?c?p_:su:to,g;if(lt(i)&&(~i.indexOf("random(")&&(i=br(i)),i.charAt(1)==="="&&(g=Vi(d,i)+(pt(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Ia)return!isNaN(d*i)&&i!==""?(g=new Ct(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?g_:au,0,m),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!f&&!(t in e)&&Za(t,i),c_.call(this,e,t,d,i,m,l||kt.stringFilter,c))},u_=function(e,t,n,i,r){if(Xe(e)&&(e=gr(e,r,t,n,i)),!fn(e)||e.style&&e.nodeType||gt(e)||wc(e))return lt(e)?gr(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=gr(e[s],r,t,n,i);return a},nu=function(e,t,n,i,r,a){var s,l,c,u;if(Ft[e]&&(s=new Ft[e]).init(r,s.rawVars?t[e]:u_(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Ct(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==ki))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Dn,Ia,eo=function o(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,d=i.runBackwards,m=i.yoyoEase,g=i.keyframes,h=i.autoRevert,p=e._dur,_=e._startAt,b=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:b,M=e._overwrite==="auto"&&!qa,A=e.timeline,L,x,w,P,k,Y,I,R,U,W,j,V,J;if(A&&(!g||!r)&&(r="none"),e._ease=li(r,Zi.ease),e._yEase=m?Jc(li(m===!0?r:m,Zi.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(R=b[0]?ai(b[0]).harness:0,V=R&&i[R.prop],L=cs(i,$a),_&&(_._zTime<0&&_.progress(1),t<0&&d&&s&&!h?_.render(-1,!0):_.revert(d&&p?is:Ug),_._lazy=0),a){if(Un(e._startAt=Je.set(b,Jt({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!_&&Et(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mt||!s&&!h)&&e._startAt.revert(is),s&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&p&&!_){if(t&&(s=!1),w=Jt({overwrite:!1,data:"isFromStart",lazy:s&&!_&&Et(l),immediateRender:s,stagger:0,parent:v},L),V&&(w[R.prop]=V),Un(e._startAt=Je.set(b,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mt?e._startAt.revert(is):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,ke,ke);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Et(l)||l&&!p,x=0;x<b.length;x++){if(k=b[x],I=k._gsap||Ja(b)[x]._gsap,e._ptLookup[x]=W={},Aa[I.id]&&Fn.length&&ls(),j=y===b?x:y.indexOf(k),R&&(U=new R).init(k,V||L,e,j,y)!==!1&&(e._pt=P=new Ct(e._pt,k,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(K){W[K]=P}),U.priority&&(Y=1)),!R||V)for(w in L)Ft[w]&&(U=nu(w,L,e,j,k,y))?U.priority&&(Y=1):W[w]=P=Qa.call(e,k,w,"get",L[w],j,y,0,i.stringFilter);e._op&&e._op[x]&&e.kill(k,e._op[x]),M&&e._pt&&(Dn=e,Ve.killTweensOf(k,W,e.globalTime(t)),J=!e.parent,Dn=0),e._pt&&l&&(Aa[I.id]=1)}Y&&lu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,g&&t<=0&&A.render(jt,!0,!0)},h_=function(e,t,n,i,r,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(c=f[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ia=1,e.vars[t]="+=0",eo(e,s),Ia=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=je(n)+pt(u.e)),u.b&&(u.b=c.s+pt(u.b))},f_=function(e,t){var n=e[0]?ai(e[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return t;r=mi({},t);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},d_=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(gt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},gr=function(e,t,n,i,r){return Xe(e)?e.call(t,n,i,r):lt(e)&&~e.indexOf("random(")?br(e):e},iu=Ka+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ru={};At(iu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return ru[o]=1});var Je=function(o){bc(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:pr(i))||this;var l=s.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,m=l.overwrite,g=l.keyframes,h=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,b=i.parent||Ve,v=(gt(n)||wc(n)?Tn(n[0]):"length"in i)?[n]:Zt(n),y,M,A,L,x,w,P,k;if(s._targets=v.length?Ja(v):os("GSAP target "+n+" not found. https://greensock.com",!kt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||d||es(c)||es(u)){if(i=s.vars,y=s.timeline=new Tt({data:"nested",defaults:h||{},targets:b&&b.data==="nested"?b.vars.targets:v}),y.kill(),y.parent=y._dp=yn(s),y._start=0,d||es(c)||es(u)){if(L=v.length,P=d&&Vc(d),fn(d))for(x in d)~iu.indexOf(x)&&(k||(k={}),k[x]=d[x]);for(M=0;M<L;M++)A=cs(i,ru),A.stagger=0,_&&(A.yoyoEase=_),k&&mi(A,k),w=v[M],A.duration=+gr(c,yn(s),M,w,v),A.delay=(+gr(u,yn(s),M,w,v)||0)-s._delay,!d&&L===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),y.to(w,A,P?P(M,w,v):0),y._ease=Ce.none;y.duration()?c=u=0:s.timeline=0}else if(g){pr(Jt(y.vars.defaults,{ease:"none"})),y._ease=li(g.ease||i.ease||"none");var Y=0,I,R,U;if(gt(g))g.forEach(function(W){return y.to(v,W,">")}),y.duration();else{A={};for(x in g)x==="ease"||x==="easeEach"||d_(x,g[x],A,g.easeEach);for(x in A)for(I=A[x].sort(function(W,j){return W.t-j.t}),Y=0,M=0;M<I.length;M++)R=I[M],U={ease:R.e,duration:(R.t-(M?I[M-1].t:0))/100*c},U[x]=R.v,y.to(v,U,Y),Y+=U.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||s.duration(c=y.duration())}else s.timeline=0;return m===!0&&!qa&&(Dn=yn(s),Ve.killTweensOf(v),Dn=0),ln(b,yn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(f||!c&&!g&&s._start===ct(b._time)&&Et(f)&&Hg(yn(s))&&b.data!=="nested")&&(s._tTime=-ke,s.render(Math.max(0,-u)||0)),p&&Uc(yn(s),p),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-ke&&!u?l:i<ke?0:i,d,m,g,h,p,_,b,v,y;if(!c)Xg(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=f,v=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(h*100+i,r,a);if(d=ct(f%h),f===l?(g=this._repeat,d=c):(g=~~(f/h),g&&g===f/h&&(d=c,g--),d>c&&(d=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,d=c-d),p=$i(this._tTime,h),d===s&&!a&&this._initted)return this._tTime=f,this;g!==p&&(v&&this._yEase&&Qc(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(ct(h*g),!0).invalidate()._lock=0))}if(!this._initted){if(kc(this,u?i:d,a,r,f))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(d/c),this._from&&(this.ratio=b=1-b),d&&!s&&!r&&!g&&($t(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;v&&v.render(i<0?i:!d&&_?-ke:v._dur*v._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Ca(this,i,r,a),$t(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&$t(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ca(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Un(this,1),!r&&!(u&&!s)&&(f||s||_)&&($t(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,s){Sr||Nt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||eo(this,l),c=this._ease(l/this._dur),h_(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(Ms(this,0),this.parent||Nc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?fr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Dn&&Dn.vars.overwrite!==!0)._first||fr(this),this.parent&&a!==this.timeline.totalDuration()&&Ki(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?Zt(i):s,c=this._ptLookup,u=this._pt,f,d,m,g,h,p,_;if((!r||r==="all")&&Vg(s,l))return r==="all"&&(this._pt=0),fr(this);for(f=this._op=this._op||[],r!=="all"&&(lt(r)&&(h={},At(r,function(b){return h[b]=1}),r=h),r=f_(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){d=c[_],r==="all"?(f[_]=r,g=d,m={}):(m=f[_]=f[_]||{},g=r);for(h in g)p=d&&d[h],p&&((!("kill"in p.d)||p.d.kill(h)===!0)&&vs(this,p,"_pt"),delete d[h]),m!=="all"&&(m[h]=1)}return this._initted&&!this._pt&&u&&fr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return mr(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return mr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Ve.killTweensOf(i,r,a)},e}(wr);Jt(Je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});At("staggerTo,staggerFrom,staggerFromTo",function(o){Je[o]=function(){var e=new Tt,t=Pa.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var to=function(e,t,n){return e[t]=n},su=function(e,t,n){return e[t](n)},p_=function(e,t,n,i){return e[t](i.fp,n)},m_=function(e,t,n){return e.setAttribute(t,n)},no=function(e,t){return Xe(e[t])?su:Xa(e[t])&&e.setAttribute?m_:to},au=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},g_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ou=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},io=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},__=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},x_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?vs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},v_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},lu=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Ct=function(){function o(t,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||au,this.d=l||this,this.set=c||to,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=v_,this.m=n,this.mt=r,this.tween=i},o}();At(Ka+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return $a[o]=1});Bt.TweenMax=Bt.TweenLite=Je;Bt.TimelineLite=Bt.TimelineMax=Tt;Ve=new Tt({sortChildren:!1,defaults:Zi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kt.stringFilter=Kc;var ci=[],ss={},y_=[],Rl=0,M_=0,ua=function(e){return(ss[e]||y_).map(function(t){return t()})},Oa=function(){var e=Date.now(),t=[];e-Rl>2&&(ua("matchMediaInit"),ci.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=qt.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ua("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Rl=e,ua("matchMedia"))},cu=function(){function o(t,n){this.selector=n&&Da(n),this.data=[],this._r=[],this.isReverted=!1,this.id=M_++,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){Xe(n)&&(r=i,i=n,n=Xe);var a=this,s=function(){var c=qe,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=Da(r)),qe=a,f=i.apply(a,arguments),Xe(f)&&a._r.push(f),qe=c,a.selector=u,a.isReverted=!1,f};return a.last=s,n===Xe?s(a):n?a[n]=s:s},e.ignore=function(n){var i=qe;qe=null,n(this),qe=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Je&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Je)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var s=ci.length;s--;)ci[s].id===this.id&&ci.splice(s,1)},e.revert=function(n){this.kill(n||{})},o}(),b_=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){fn(n)||(n={matches:n});var a=new cu(0,r||this.scope),s=a.conditions={},l,c,u;qe&&!a.selector&&(a.selector=qe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=qt.matchMedia(n[c]),l&&(ci.indexOf(a)<0&&ci.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Oa):l.addEventListener("change",Oa)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),hs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return jc(i)})},timeline:function(e){return new Tt(e)},getTweensOf:function(e,t){return Ve.getTweensOf(e,t)},getProperty:function(e,t,n,i){lt(e)&&(e=Zt(e)[0]);var r=ai(e||{}).get,a=n?Fc:Oc;return n==="native"&&(n=""),e&&(t?a((Ft[t]&&Ft[t].get||r)(e,t,n,i)):function(s,l,c){return a((Ft[s]&&Ft[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=Zt(e),e.length>1){var i=e.map(function(u){return Lt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}e=e[0]||{};var a=Ft[t],s=ai(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;ki._pt=0,f.init(e,n?u+n:u,ki,0,[e]),f.render(1,f),ki._pt&&io(1,ki)}:s.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=Lt.to(e,mi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Ve.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=li(e.ease,Zi.ease)),Al(Zi,e||{})},config:function(e){return Al(kt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Ft[s]&&!Bt[s]&&os(t+" effect requires "+s+" plugin.")}),aa[t]=function(s,l,c){return n(Zt(s),Jt(l||{},r),c)},a&&(Tt.prototype[t]=function(s,l,c){return this.add(aa[t](s,fn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ce[e]=li(t)},parseEase:function(e,t){return arguments.length?li(e,t):Ce},getById:function(e){return Ve.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tt(e),i,r;for(n.smoothChildTiming=Et(e.smoothChildTiming),Ve.remove(n),n._dp=0,n._time=n._tTime=Ve._time,i=Ve._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Je&&i.vars.onComplete===i._targets[0]))&&ln(n,i,i._start-i._delay),i=r;return ln(Ve,n,0),n},context:function(e,t){return e?new cu(e,t):qe},matchMedia:function(e){return new b_(e)},matchMediaRefresh:function(){return ci.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Oa()},addEventListener:function(e,t){var n=ss[e]||(ss[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ss[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:e_,wrapYoyo:t_,distribute:Vc,random:Hc,snap:Wc,normalize:Qg,getUnit:pt,clamp:Zg,splitColor:Zc,toArray:Zt,selector:Da,mapRange:Xc,pipe:Kg,unitize:Jg,interpolate:n_,shuffle:Gc},install:Lc,effects:aa,ticker:Nt,updateRoot:Tt.updateRoot,plugins:Ft,globalTimeline:Ve,core:{PropTween:Ct,globals:Pc,Tween:Je,Timeline:Tt,Animation:wr,getCache:ai,_removeLinkedListItem:vs,reverting:function(){return mt},context:function(e){return e&&qe&&(qe.data.push(e),e._ctx=qe),qe},suppressOverwrites:function(e){return qa=e}}};At("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return hs[o]=Je[o]});Nt.add(Tt.updateRoot);ki=hs.to({},{duration:0});var S_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},w_=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=S_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},ha=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(lt(r)&&(l={},At(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}w_(s,r)}}}},Lt=hs.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)mt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ha("roundProps",Ra),ha("modifiers"),ha("snap",Wc))||hs;Je.version=Tt.version=Lt.version="3.12.2";Cc=1;Ya()&&Ji();Ce.Power0;Ce.Power1;Ce.Power2;Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;Ce.Expo;Ce.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Il,Rn,Wi,ro,ni,Ol,so,T_=function(){return typeof window<"u"},En={},Jn=180/Math.PI,Hi=Math.PI/180,Fi=Math.atan2,Fl=1e8,ao=/([A-Z])/g,E_=/(left|right|width|margin|padding|x)/i,A_=/[\s,\(]\S/,cn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fa=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},C_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},L_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},P_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},uu=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hu=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},D_=function(e,t,n){return e.style[t]=n},R_=function(e,t,n){return e.style.setProperty(t,n)},I_=function(e,t,n){return e._gsap[t]=n},O_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},F_=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},N_=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},He="transform",sn=He+"Origin",z_=function o(e,t){var n=this,i=this.target,r=i.style;if(e in En&&r){if(this.tfm=this.tfm||{},e!=="transform")e=cn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Mn(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Mn(i,e);else return cn.transform.split(",").forEach(function(a){return o.call(n,a,t)});if(this.props.indexOf(He)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(sn,t,"")),e=He}(r||t)&&this.props.push(e,t,r[e])},fu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},U_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(ao,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=so(),(!r||!r.isStart)&&!n[He]&&(fu(n),i.uncache=1)}},du=function(e,t){var n={target:e,props:[],revert:U_,save:z_};return e._gsap||Lt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},pu,Na=function(e,t){var n=Rn.createElementNS?Rn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Rn.createElement(e);return n.style?n:Rn.createElement(e)},hn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ao,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,Qi(t)||t,1)||""},Nl="O,Moz,ms,Ms,Webkit".split(","),Qi=function(e,t,n){var i=t||ni,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Nl[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Nl[a]:"")+e},za=function(){T_()&&window.document&&(Il=window,Rn=Il.document,Wi=Rn.documentElement,ni=Na("div")||{style:{}},Na("div"),He=Qi(He),sn=He+"Origin",ni.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",pu=!!Qi("perspective"),so=Lt.core.reverting,ro=1)},fa=function o(e){var t=Na("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Wi.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Wi.removeChild(t),this.style.cssText=r,a},zl=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},mu=function(e){var t;try{t=e.getBBox()}catch{t=fa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===fa||(t=fa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+zl(e,["x","cx","x1"])||0,y:+zl(e,["y","cy","y1"])||0,width:0,height:0}:t},gu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&mu(e))},Tr=function(e,t){if(t){var n=e.style;t in En&&t!==sn&&(t=He),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(ao,"-$1").toLowerCase())):n.removeAttribute(t)}},In=function(e,t,n,i,r,a){var s=new Ct(e._pt,t,n,0,1,a?hu:uu);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},Ul={deg:1,rad:1,turn:1},k_={grid:1,flex:1},kn=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=ni.style,l=E_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",m=i==="%",g,h,p,_;return i===a||!r||Ul[i]||Ul[a]?r:(a!=="px"&&!d&&(r=o(e,t,n,"px")),_=e.getCTM&&gu(e),(m||a==="%")&&(En[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],je(m?r/g*f:r/100*g)):(s[l?"width":"height"]=f+(d?a:i),h=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===Rn||!h.appendChild)&&(h=Rn.body),p=h._gsap,p&&m&&p.width&&l&&p.time===Nt.time&&!p.uncache?je(r/p.width*f):((m||a==="%")&&!k_[hn(h,"display")]&&(s.position=hn(e,"position")),h===e&&(s.position="static"),h.appendChild(ni),g=ni[u],h.removeChild(ni),s.position="absolute",l&&m&&(p=ai(h),p.time=Nt.time,p.width=h[u]),je(d?g*r/f:g&&r?f/g*r:0))))},Mn=function(e,t,n,i){var r;return ro||za(),t in cn&&t!=="transform"&&(t=cn[t],~t.indexOf(",")&&(t=t.split(",")[0])),En[t]&&t!=="transform"?(r=Ar(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ds(hn(e,sn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=fs[t]&&fs[t](e,t,n)||hn(e,t)||Rc(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?kn(e,t,r,n)+n:r},B_=function(e,t,n,i){if(!n||n==="none"){var r=Qi(t,e,1),a=r&&hn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=hn(e,"borderTopColor"))}var s=new Ct(this._pt,e.style,t,0,1,ou),l=0,c=0,u,f,d,m,g,h,p,_,b,v,y,M;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=hn(e,t)||i,e.style[t]=n),u=[n,i],Kc(u),n=u[0],i=u[1],d=n.match(Ui)||[],M=i.match(Ui)||[],M.length){for(;f=Ui.exec(i);)p=f[0],b=i.substring(l,f.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(h=d[c++]||"")&&(m=parseFloat(h)||0,y=h.substr((m+"").length),p.charAt(1)==="="&&(p=Vi(m,p)+y),_=parseFloat(p),v=p.substr((_+"").length),l=Ui.lastIndex-v.length,v||(v=v||kt.units[t]||y,l===i.length&&(i+=v,s.e+=v)),y!==v&&(m=kn(e,t,h,v)||0),s._pt={_next:s._pt,p:b||c===1?b:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?hu:uu;return Ec.test(i)&&(s.e=0),this._pt=s,s},kl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},G_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=kl[n]||n,t[1]=kl[i]||i,t.join(" ")},V_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],En[s]&&(l=1,s=s==="transformOrigin"?sn:He),Tr(n,s);l&&(Tr(n,He),a&&(a.svg&&n.removeAttribute("transform"),Ar(n,1),a.uncache=1,fu(i)))}},fs={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Ct(e._pt,t,n,0,0,V_);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Er=[1,0,0,1,0,0],_u={},xu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bl=function(e){var t=hn(e,He);return xu(t)?Er:t.substr(7).match(Tc).map(je)},oo=function(e,t){var n=e._gsap||ai(e),i=e.style,r=Bl(e),a,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Er:r):(r===Er&&!e.offsetParent&&e!==Wi&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,s=e.nextElementSibling,Wi.appendChild(e)),r=Bl(e),l?i.display=l:Tr(e,"display"),c&&(s?a.insertBefore(e,s):a?a.appendChild(e):Wi.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ua=function(e,t,n,i,r,a){var s=e._gsap,l=r||oo(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,f=s.xOffset||0,d=s.yOffset||0,m=l[0],g=l[1],h=l[2],p=l[3],_=l[4],b=l[5],v=t.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,A,L,x,w;n?l!==Er&&(L=m*p-g*h)&&(x=y*(p/L)+M*(-h/L)+(h*b-p*_)/L,w=y*(-g/L)+M*(m/L)-(m*b-g*_)/L,y=x,M=w):(A=mu(e),y=A.x+(~v[0].indexOf("%")?y/100*A.width:y),M=A.y+(~(v[1]||v[0]).indexOf("%")?M/100*A.height:M)),i||i!==!1&&s.smooth?(_=y-c,b=M-u,s.xOffset=f+(_*m+b*h)-_,s.yOffset=d+(_*g+b*p)-b):s.xOffset=s.yOffset=0,s.xOrigin=y,s.yOrigin=M,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[sn]="0px 0px",a&&(In(a,s,"xOrigin",c,y),In(a,s,"yOrigin",u,M),In(a,s,"xOffset",f,s.xOffset),In(a,s,"yOffset",d,s.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Ar=function(e,t){var n=e._gsap||new tu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),c=hn(e,sn)||"0",u,f,d,m,g,h,p,_,b,v,y,M,A,L,x,w,P,k,Y,I,R,U,W,j,V,J,K,G,N,re,Q,ie;return u=f=d=h=p=_=b=v=y=0,m=g=1,n.svg=!!(e.getCTM&&gu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[He]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[He]!=="none"?l[He]:"")),i.scale=i.rotate=i.translate="none"),L=oo(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Ua(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,L)),M=n.xOrigin||0,A=n.yOrigin||0,L!==Er&&(k=L[0],Y=L[1],I=L[2],R=L[3],u=U=L[4],f=W=L[5],L.length===6?(m=Math.sqrt(k*k+Y*Y),g=Math.sqrt(R*R+I*I),h=k||Y?Fi(Y,k)*Jn:0,b=I||R?Fi(I,R)*Jn+h:0,b&&(g*=Math.abs(Math.cos(b*Hi))),n.svg&&(u-=M-(M*k+A*I),f-=A-(M*Y+A*R))):(ie=L[6],re=L[7],K=L[8],G=L[9],N=L[10],Q=L[11],u=L[12],f=L[13],d=L[14],x=Fi(ie,N),p=x*Jn,x&&(w=Math.cos(-x),P=Math.sin(-x),j=U*w+K*P,V=W*w+G*P,J=ie*w+N*P,K=U*-P+K*w,G=W*-P+G*w,N=ie*-P+N*w,Q=re*-P+Q*w,U=j,W=V,ie=J),x=Fi(-I,N),_=x*Jn,x&&(w=Math.cos(-x),P=Math.sin(-x),j=k*w-K*P,V=Y*w-G*P,J=I*w-N*P,Q=R*P+Q*w,k=j,Y=V,I=J),x=Fi(Y,k),h=x*Jn,x&&(w=Math.cos(x),P=Math.sin(x),j=k*w+Y*P,V=U*w+W*P,Y=Y*w-k*P,W=W*w-U*P,k=j,U=V),p&&Math.abs(p)+Math.abs(h)>359.9&&(p=h=0,_=180-_),m=je(Math.sqrt(k*k+Y*Y+I*I)),g=je(Math.sqrt(W*W+ie*ie)),x=Fi(U,W),b=Math.abs(x)>2e-4?x*Jn:0,y=Q?1/(Q<0?-Q:Q):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!xu(hn(e,He)),j&&e.setAttribute("transform",j))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(m*=-1,b+=h<=0?180:-180,h+=h<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=je(m),n.scaleY=je(g),n.rotation=je(h)+s,n.rotationX=je(p)+s,n.rotationY=je(_)+s,n.skewX=b+s,n.skewY=v+s,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[sn]=ds(c)),n.xOffset=n.yOffset=0,n.force3D=kt.force3D,n.renderTransform=n.svg?H_:pu?vu:W_,n.uncache=0,n},ds=function(e){return(e=e.split(" "))[0]+" "+e[1]},da=function(e,t,n){var i=pt(t);return je(parseFloat(t)+parseFloat(kn(e,"x",n+"px",i)))+i},W_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,vu(e,t)},jn="0deg",cr="0px",Zn=") ",vu=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,h=n.scaleY,p=n.transformPerspective,_=n.force3D,b=n.target,v=n.zOrigin,y="",M=_==="auto"&&e&&e!==1||_===!0;if(v&&(f!==jn||u!==jn)){var A=parseFloat(u)*Hi,L=Math.sin(A),x=Math.cos(A),w;A=parseFloat(f)*Hi,w=Math.cos(A),a=da(b,a,L*w*-v),s=da(b,s,-Math.sin(A)*-v),l=da(b,l,x*w*-v+v)}p!==cr&&(y+="perspective("+p+Zn),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||a!==cr||s!==cr||l!==cr)&&(y+=l!==cr||M?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+Zn),c!==jn&&(y+="rotate("+c+Zn),u!==jn&&(y+="rotateY("+u+Zn),f!==jn&&(y+="rotateX("+f+Zn),(d!==jn||m!==jn)&&(y+="skew("+d+", "+m+Zn),(g!==1||h!==1)&&(y+="scale("+g+", "+h+Zn),b.style[He]=y||"translate(0, 0)"},H_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,h=n.yOrigin,p=n.xOffset,_=n.yOffset,b=n.forceCSS,v=parseFloat(a),y=parseFloat(s),M,A,L,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Hi,c*=Hi,M=Math.cos(l)*f,A=Math.sin(l)*f,L=Math.sin(l-c)*-d,x=Math.cos(l-c)*d,c&&(u*=Hi,w=Math.tan(c-u),w=Math.sqrt(1+w*w),L*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),M*=w,A*=w)),M=je(M),A=je(A),L=je(L),x=je(x)):(M=f,x=d,A=L=0),(v&&!~(a+"").indexOf("px")||y&&!~(s+"").indexOf("px"))&&(v=kn(m,"x",a,"px"),y=kn(m,"y",s,"px")),(g||h||p||_)&&(v=je(v+g-(g*M+h*L)+p),y=je(y+h-(g*A+h*x)+_)),(i||r)&&(w=m.getBBox(),v=je(v+i/100*w.width),y=je(y+r/100*w.height)),w="matrix("+M+","+A+","+L+","+x+","+v+","+y+")",m.setAttribute("transform",w),b&&(m.style[He]=w)},q_=function(e,t,n,i,r){var a=360,s=lt(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?Jn:1),c=l-i,u=i+c+"deg",f,d;return s&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Fl)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Fl)%a-~~(c/a)*a)),e._pt=d=new Ct(e._pt,t,n,i,c,C_),d.e=u,d.u="deg",e._props.push(n),d},Gl=function(e,t){for(var n in t)e[n]=t[n];return e},X_=function(e,t,n){var i=Gl({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,f,d,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[He]=t,s=Ar(n,1),Tr(n,He),n.setAttribute("transform",c)):(c=getComputedStyle(n)[He],a[He]=t,s=Ar(n,1),a[He]=c);for(l in En)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=pt(c),g=pt(u),f=m!==g?kn(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Ct(e._pt,s,l,f,d-f,Fa),e._pt.u=g||0,e._props.push(l));Gl(s,i)};At("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});fs[e>1?"border"+o:o]=function(s,l,c,u,f){var d,m;if(arguments.length<4)return d=a.map(function(g){return Mn(s,g,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(g,h){return m[g]=d[h]=d[h]||d[(h-1)/2|0]}),s.init(l,m,f)}});var yu={name:"css",register:za,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,l=n.vars.startAt,c,u,f,d,m,g,h,p,_,b,v,y,M,A,L,x;ro||za(),this.styles=this.styles||du(e),x=this.styles.props,this.tween=n;for(h in t)if(h!=="autoRound"&&(u=t[h],!(Ft[h]&&nu(h,t,n,i,e,r)))){if(m=typeof u,g=fs[h],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=br(u)),g)g(this,e,h,u,n)&&(L=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(h)+"").trim(),u+="",Nn.lastIndex=0,Nn.test(c)||(p=pt(c),_=pt(u)),_?p!==_&&(c=kn(e,h,c,_)+_):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,h),a.push(h),x.push(h,0,s[h]);else if(m!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(n,i,e,r):l[h],lt(c)&&~c.indexOf("random(")&&(c=br(c)),pt(c+"")||(c+=kt.units[h]||pt(Mn(e,h))||""),(c+"").charAt(1)==="="&&(c=Mn(e,h))):c=Mn(e,h),d=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),f=parseFloat(u),h in cn&&(h==="autoAlpha"&&(d===1&&Mn(e,"visibility")==="hidden"&&f&&(d=0),x.push("visibility",0,s.visibility),In(this,s,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),h!=="scale"&&h!=="transform"&&(h=cn[h],~h.indexOf(",")&&(h=h.split(",")[0]))),v=h in En,v){if(this.styles.save(h),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ar(e,t.parseTransform),A=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Ct(this._pt,s,He,0,1,M.renderTransform,M,0,-1),y.dep=1),h==="scale")this._pt=new Ct(this._pt,M,"scaleY",M.scaleY,(b?Vi(M.scaleY,b+f):f)-M.scaleY||0,Fa),this._pt.u=0,a.push("scaleY",h),h+="X";else if(h==="transformOrigin"){x.push(sn,0,s[sn]),u=G_(u),M.svg?Ua(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&In(this,M,"zOrigin",M.zOrigin,_),In(this,s,h,ds(c),ds(u)));continue}else if(h==="svgOrigin"){Ua(e,u,1,A,0,this);continue}else if(h in _u){q_(this,M,h,d,b?Vi(d,b+u):u);continue}else if(h==="smoothOrigin"){In(this,M,"smooth",M.smooth,u);continue}else if(h==="force3D"){M[h]=u;continue}else if(h==="transform"){X_(this,u,e);continue}}else h in s||(h=Qi(h)||h);if(v||(f||f===0)&&(d||d===0)&&!A_.test(u)&&h in s)p=(c+"").substr((d+"").length),f||(f=0),_=pt(u)||(h in kt.units?kt.units[h]:p),p!==_&&(d=kn(e,h,c,_)),this._pt=new Ct(this._pt,v?M:s,h,d,(b?Vi(d,b+f):f)-d,!v&&(_==="px"||h==="zIndex")&&t.autoRound!==!1?P_:Fa),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=L_);else if(h in s)B_.call(this,e,h,c,b?b+u:u);else if(h in e)this.add(e,h,c||e[h],b?b+u:u,i,r);else if(h!=="parseTransform"){Za(h,u);continue}v||(h in s?x.push(h,0,s[h]):x.push(h,1,c||e[h])),a.push(h)}}L&&lu(this)},render:function(e,t){if(t.tween._time||!so())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Mn,aliases:cn,getSetter:function(e,t,n){var i=cn[t];return i&&i.indexOf(",")<0&&(t=i),t in En&&t!==sn&&(e._gsap.x||Mn(e,"x"))?n&&Ol===n?t==="scale"?O_:I_:(Ol=n||{})&&(t==="scale"?F_:N_):e.style&&!Xa(e.style[t])?D_:~t.indexOf("-")?R_:no(e,t)},core:{_removeProperty:Tr,_getMatrix:oo}};Lt.utils.checkPrefix=Qi;Lt.core.getStyleSaver=du;(function(o,e,t,n){var i=At(o+","+e+","+t,function(r){En[r]=1});At(e,function(r){kt.units[r]="deg",_u[r]=1}),cn[i[13]]=o+","+e,At(n,function(r){var a=r.split(":");cn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");At("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){kt.units[o]="px"});Lt.registerPlugin(yu);var ka=Lt.registerPlugin(yu)||Lt;ka.core.Tween;var Mu={exports:{}};(function(o){(function(){function e(h,p){document.addEventListener?h.addEventListener("scroll",p,!1):h.attachEvent("scroll",p)}function t(h){document.body?h():document.addEventListener?document.addEventListener("DOMContentLoaded",function p(){document.removeEventListener("DOMContentLoaded",p),h()}):document.attachEvent("onreadystatechange",function p(){(document.readyState=="interactive"||document.readyState=="complete")&&(document.detachEvent("onreadystatechange",p),h())})}function n(h){this.g=document.createElement("div"),this.g.setAttribute("aria-hidden","true"),this.g.appendChild(document.createTextNode(h)),this.h=document.createElement("span"),this.i=document.createElement("span"),this.m=document.createElement("span"),this.j=document.createElement("span"),this.l=-1,this.h.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.i.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.j.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.m.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.h.appendChild(this.m),this.i.appendChild(this.j),this.g.appendChild(this.h),this.g.appendChild(this.i)}function i(h,p){h.g.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+p+";"}function r(h){var p=h.g.offsetWidth,_=p+100;return h.j.style.width=_+"px",h.i.scrollLeft=_,h.h.scrollLeft=h.h.scrollWidth+100,h.l!==p?(h.l=p,!0):!1}function a(h,p){function _(){var v=b;r(v)&&v.g.parentNode!==null&&p(v.l)}var b=h;e(h.h,_),e(h.i,_),r(h)}function s(h,p,_){p=p||{},_=_||window,this.family=h,this.style=p.style||"normal",this.weight=p.weight||"normal",this.stretch=p.stretch||"normal",this.context=_}var l=null,c=null,u=null,f=null;function d(h){return c===null&&(m(h)&&/Apple/.test(window.navigator.vendor)?(h=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!h&&603>parseInt(h[1],10)):c=!1),c}function m(h){return f===null&&(f=!!h.document.fonts),f}function g(h,p){var _=h.style,b=h.weight;if(u===null){var v=document.createElement("div");try{v.style.font="condensed 100px sans-serif"}catch{}u=v.style.font!==""}return[_,b,u?h.stretch:"","100px",p].join(" ")}s.prototype.load=function(h,p){var _=this,b=h||"BESbswy",v=0,y=p||3e3,M=new Date().getTime();return new Promise(function(A,L){if(m(_.context)&&!d(_.context)){var x=new Promise(function(P,k){function Y(){new Date().getTime()-M>=y?k(Error(""+y+"ms timeout exceeded")):_.context.document.fonts.load(g(_,'"'+_.family+'"'),b).then(function(I){1<=I.length?P():setTimeout(Y,25)},k)}Y()}),w=new Promise(function(P,k){v=setTimeout(function(){k(Error(""+y+"ms timeout exceeded"))},y)});Promise.race([w,x]).then(function(){clearTimeout(v),A(_)},L)}else t(function(){function P(){var N;(N=U!=-1&&W!=-1||U!=-1&&j!=-1||W!=-1&&j!=-1)&&((N=U!=W&&U!=j&&W!=j)||(l===null&&(N=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),l=!!N&&(536>parseInt(N[1],10)||parseInt(N[1],10)===536&&11>=parseInt(N[2],10))),N=l&&(U==V&&W==V&&j==V||U==J&&W==J&&j==J||U==K&&W==K&&j==K)),N=!N),N&&(G.parentNode!==null&&G.parentNode.removeChild(G),clearTimeout(v),A(_))}function k(){if(new Date().getTime()-M>=y)G.parentNode!==null&&G.parentNode.removeChild(G),L(Error(""+y+"ms timeout exceeded"));else{var N=_.context.document.hidden;(N===!0||N===void 0)&&(U=Y.g.offsetWidth,W=I.g.offsetWidth,j=R.g.offsetWidth,P()),v=setTimeout(k,50)}}var Y=new n(b),I=new n(b),R=new n(b),U=-1,W=-1,j=-1,V=-1,J=-1,K=-1,G=document.createElement("div");G.dir="ltr",i(Y,g(_,"sans-serif")),i(I,g(_,"serif")),i(R,g(_,"monospace")),G.appendChild(Y.g),G.appendChild(I.g),G.appendChild(R.g),_.context.document.body.appendChild(G),V=Y.g.offsetWidth,J=I.g.offsetWidth,K=R.g.offsetWidth,k(),a(Y,function(N){U=N,P()}),i(Y,g(_,'"'+_.family+'",sans-serif')),a(I,function(N){W=N,P()}),i(I,g(_,'"'+_.family+'",serif')),a(R,function(N){j=N,P()}),i(R,g(_,'"'+_.family+'",monospace'))})})},o.exports=s})()})(Mu);var Y_=Mu.exports;const j_=yc(Y_),Vl={type:"change"},pa={type:"start"},Wl={type:"end"};class Z_ extends gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",St),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Vl),n.update(),r=i.NONE},this.update=function(){const C=new B,O=new pi().setFromUnitVectors(e.up,new B(0,1,0)),le=O.clone().invert(),ue=new B,oe=new pi,pe=2*Math.PI;return function(){const Ae=n.object.position;C.copy(Ae).sub(n.target),C.applyQuaternion(O),s.setFromVector3(C),n.autoRotate&&r===i.NONE&&w(L()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Le=n.minAzimuthAngle,ze=n.maxAzimuthAngle;return isFinite(Le)&&isFinite(ze)&&(Le<-Math.PI?Le+=pe:Le>Math.PI&&(Le-=pe),ze<-Math.PI?ze+=pe:ze>Math.PI&&(ze-=pe),Le<=ze?s.theta=Math.max(Le,Math.min(ze,s.theta)):s.theta=s.theta>(Le+ze)/2?Math.max(Le,s.theta):Math.min(ze,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(s),C.applyQuaternion(le),Ae.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ue.distanceToSquared(n.object.position)>a||8*(1-oe.dot(n.object.quaternion))>a?(n.dispatchEvent(Vl),ue.copy(n.object.position),oe.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",rt),n.domElement.removeEventListener("pointercancel",_t),n.domElement.removeEventListener("wheel",Gt),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",et),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",St)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new wl,l=new wl;let c=1;const u=new B;let f=!1;const d=new we,m=new we,g=new we,h=new we,p=new we,_=new we,b=new we,v=new we,y=new we,M=[],A={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function w(C){l.theta-=C}function P(C){l.phi-=C}const k=function(){const C=new B;return function(le,ue){C.setFromMatrixColumn(ue,0),C.multiplyScalar(-le),u.add(C)}}(),Y=function(){const C=new B;return function(le,ue){n.screenSpacePanning===!0?C.setFromMatrixColumn(ue,1):(C.setFromMatrixColumn(ue,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(le),u.add(C)}}(),I=function(){const C=new B;return function(le,ue){const oe=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;C.copy(pe).sub(n.target);let de=C.length();de*=Math.tan(n.object.fov/2*Math.PI/180),k(2*le*de/oe.clientHeight,n.object.matrix),Y(2*ue*de/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(le*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),Y(ue*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(C){d.set(C.clientX,C.clientY)}function j(C){b.set(C.clientX,C.clientY)}function V(C){h.set(C.clientX,C.clientY)}function J(C){m.set(C.clientX,C.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const O=n.domElement;w(2*Math.PI*g.x/O.clientHeight),P(2*Math.PI*g.y/O.clientHeight),d.copy(m),n.update()}function K(C){v.set(C.clientX,C.clientY),y.subVectors(v,b),y.y>0?R(x()):y.y<0&&U(x()),b.copy(v),n.update()}function G(C){p.set(C.clientX,C.clientY),_.subVectors(p,h).multiplyScalar(n.panSpeed),I(_.x,_.y),h.copy(p),n.update()}function N(C){C.deltaY<0?U(x()):C.deltaY>0&&R(x()),n.update()}function re(C){let O=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),O=!0;break}O&&(C.preventDefault(),n.update())}function Q(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const C=.5*(M[0].pageX+M[1].pageX),O=.5*(M[0].pageY+M[1].pageY);d.set(C,O)}}function ie(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const C=.5*(M[0].pageX+M[1].pageX),O=.5*(M[0].pageY+M[1].pageY);h.set(C,O)}}function Z(){const C=M[0].pageX-M[1].pageX,O=M[0].pageY-M[1].pageY,le=Math.sqrt(C*C+O*O);b.set(0,le)}function Ee(){n.enableZoom&&Z(),n.enablePan&&ie()}function fe(){n.enableZoom&&Z(),n.enableRotate&&Q()}function _e(C){if(M.length==1)m.set(C.pageX,C.pageY);else{const le=ve(C),ue=.5*(C.pageX+le.x),oe=.5*(C.pageY+le.y);m.set(ue,oe)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const O=n.domElement;w(2*Math.PI*g.x/O.clientHeight),P(2*Math.PI*g.y/O.clientHeight),d.copy(m)}function he(C){if(M.length===1)p.set(C.pageX,C.pageY);else{const O=ve(C),le=.5*(C.pageX+O.x),ue=.5*(C.pageY+O.y);p.set(le,ue)}_.subVectors(p,h).multiplyScalar(n.panSpeed),I(_.x,_.y),h.copy(p)}function Oe(C){const O=ve(C),le=C.pageX-O.x,ue=C.pageY-O.y,oe=Math.sqrt(le*le+ue*ue);v.set(0,oe),y.set(0,Math.pow(v.y/b.y,n.zoomSpeed)),R(y.y),b.copy(v)}function Me(C){n.enableZoom&&Oe(C),n.enablePan&&he(C)}function xe(C){n.enableZoom&&Oe(C),n.enableRotate&&_e(C)}function rt(C){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",Qe),n.domElement.addEventListener("pointerup",et)),te(C),C.pointerType==="touch"?E(C):Ye(C))}function Qe(C){n.enabled!==!1&&(C.pointerType==="touch"?S(C):Ne(C))}function et(C){ne(C),M.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",Qe),n.domElement.removeEventListener("pointerup",et)),n.dispatchEvent(Wl),r=i.NONE}function _t(C){ne(C)}function Ye(C){let O;switch(C.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case vi.DOLLY:if(n.enableZoom===!1)return;j(C),r=i.DOLLY;break;case vi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;V(C),r=i.PAN}else{if(n.enableRotate===!1)return;W(C),r=i.ROTATE}break;case vi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;W(C),r=i.ROTATE}else{if(n.enablePan===!1)return;V(C),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(pa)}function Ne(C){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;J(C);break;case i.DOLLY:if(n.enableZoom===!1)return;K(C);break;case i.PAN:if(n.enablePan===!1)return;G(C);break}}function Gt(C){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(C.preventDefault(),n.dispatchEvent(pa),N(C),n.dispatchEvent(Wl))}function St(C){n.enabled===!1||n.enablePan===!1||re(C)}function E(C){switch(ae(C),M.length){case 1:switch(n.touches.ONE){case yi.ROTATE:if(n.enableRotate===!1)return;Q(),r=i.TOUCH_ROTATE;break;case yi.PAN:if(n.enablePan===!1)return;ie(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(),r=i.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(pa)}function S(C){switch(ae(C),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;_e(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(C),n.update();break;default:r=i.NONE}}function H(C){n.enabled!==!1&&C.preventDefault()}function te(C){M.push(C)}function ne(C){delete A[C.pointerId];for(let O=0;O<M.length;O++)if(M[O].pointerId==C.pointerId){M.splice(O,1);return}}function ae(C){let O=A[C.pointerId];O===void 0&&(O=new we,A[C.pointerId]=O),O.set(C.pageX,C.pageY)}function ve(C){const O=C.pointerId===M[0].pointerId?M[1]:M[0];return A[O.pointerId]}n.domElement.addEventListener("contextmenu",H),n.domElement.addEventListener("pointerdown",rt),n.domElement.addEventListener("pointercancel",_t),n.domElement.addEventListener("wheel",Gt,{passive:!1}),this.update()}}var $_=`varying float vNoise;
varying vec2 vUv;
uniform sampler2D uImage;
uniform float time;

void main()	{

    vec2 newUV = vUv;

    vec4 oceanView = texture2D(uImage,newUV);

    
    
    
    

    
    gl_FragColor = oceanView;

    
    gl_FragColor.rgb += 0.05*vec3(vNoise);
}`,K_=`uniform float time;
uniform vec2 hover;

uniform float hoverState;
varying float vNoise;
varying vec2 vUv;

uniform float shaderX;
uniform float shaderY;
uniform float widthImg;
uniform float heightImg;
varying vec2 vMousePos;

void main() {
    
    vec2 mousePosition = vec2(shaderX , shaderY);

    
    vec2 mousePos = mousePosition;

    
    vMousePos = mousePos;

    vec3 newposition = position;
    
    float dist = distance(uv,hover);
    

    float z = hoverState * -100. * pow(sin(dist * 1. - 1.0), 3.0); 
    
    newposition.z += z < 0.0 ? 0.0 : z;

    
    vNoise = -5. * pow(sin(dist * 1. - 1.0), 3.0);
    
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );
}`;const J_=""+new URL("ocean-4eaede74.jpg",import.meta.url).href;let Ba=0;const Q_=document.querySelector("#btob-seminaire");document.querySelector("#btob-team-building");document.querySelector("#btob-soiree-entreprise");const Hl=document.querySelector("#btn1"),ql=document.querySelector("#btn2"),Xl=document.querySelector("#btn3");var e0=new URLSearchParams(window.location.search);let t0=e0.get("link");class n0{constructor(e){if(this.time=0,this.container=e.dom,this.scene=new wg,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.camera=new Yt(70,this.width/this.height,100,1e3),this.camera.position.z=600,this.camera.fov=2*Math.atan(this.height/2/600)*(180/Math.PI),this.renderer=new _c({antialias:!0,alpha:!0}),this.container.appendChild(this.renderer.domElement),this.controls=new Z_(this.camera,this.renderer.domElement),Q_)switch(t0){case"seminaire":this.images=[...document.querySelectorAll("#btob-seminaire [paper-effect]")];break;case"team-building":this.images=[...document.querySelectorAll("#btob-team-building [paper-effect]")];break;case"soiree-entreprise":this.images=[...document.querySelectorAll("#btob-soiree-entreprise [paper-effect]")];break;default:this.images=[...document.querySelectorAll("#btob-seminaire [paper-effect]")]}else this.images=[...document.querySelectorAll("[paper-effect]")];Hl&&Hl.addEventListener("click",()=>{for(;this.scene.children.length>0;){var r=this.scene.children[0];this.scene.remove(r)}this.images=[...document.querySelectorAll("#btob-seminaire [paper-effect]")],this.addImages(),this.setPosition()}),ql&&ql.addEventListener("click",()=>{for(;this.scene.children.length>0;){var r=this.scene.children[0];this.scene.remove(r)}this.images=[...document.querySelectorAll("#btob-team-building [paper-effect]")],this.addImages(),this.setPosition()}),Xl&&Xl.addEventListener("click",()=>{for(;this.scene.children.length>0;){var r=this.scene.children[0];this.scene.remove(r)}this.images=[...document.querySelectorAll("#btob-soiree-entreprise [paper-effect]")],this.addImages(),this.setPosition()});const t=new Promise(r=>{new j_("Poppins").load().then(()=>{r()})}),n=new Promise((r,a)=>{Rg(document.querySelectorAll("img"),{background:!0},r)});let i=[t,n];this.currentScroll=0,this.raycaster=new Lg,this.mouse=new we,Promise.all(i).then(()=>{this.addImages(),this.setPosition(),this.imageStore.forEach(r=>{r.mesh.position.y=this.currentScroll-r.top+this.height/2-r.height/2,r.mesh.position.x=r.left-this.width/2+r.width/2}),this.mouseMovement(),this.resize(),this.setupResize(),this.render()})}mouseMovement(){window.addEventListener("mousemove",e=>{this.mouse.x=e.clientX/this.width*2-1,this.mouse.y=-(e.clientY/this.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.scene.children);if(t.length>0){let n=t[0].object;n.material.uniforms.hover.value=t[0].uv}else this.material.uniforms.hover.value=0},!1)}setupResize(){window.addEventListener("resize",this.resize.bind(this))}resize(){this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}addImages(){this.material=new zn({uniforms:{time:{value:0},uImage:{value:0},mouseX:{value:0},mouseY:{value:0},hover:{value:new we(.5,.5)},hoverState:{value:0},oceanTexture:{value:new Cg().load(J_)}},side:ps,fragmentShader:$_,vertexShader:K_}),this.materials=[],this.imageStore=this.images.map(e=>{let t=e.getBoundingClientRect(),n=new _s(t.width,t.height,60,60),i=new Image;i.src=e.src;let r=new bt(i);r.needsUpdate=!0;let a=this.material.clone();e.addEventListener("mouseenter",()=>{ka.to(a.uniforms.hoverState,{duration:1,value:1})}),e.addEventListener("mouseout",()=>{ka.to(a.uniforms.hoverState,{duration:1,value:0})}),this.materials.push(a),a.uniforms.uImage.value=r;let s=new Sn(n,a);return this.scene.add(s),{img:e,mesh:s,top:t.top+Ba,left:t.left,width:t.width,height:t.height}})}setPosition(){this.imageStore.forEach(e=>{e.mesh.position.y=this.currentScroll-e.top+this.height/2-e.height/2,e.mesh.position.x=e.left-this.width/2+e.width/2})}render(){this.time+=.05,this.currentScroll=Ba,this.setPosition(),this.materials.forEach(e=>{e.uniforms.time.value=this.time}),this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(this.render.bind(this))}}window.addEventListener("load",o=>{window.addEventListener("window-scroll",function(e){Ba=e.detail}),window.innerWidth>=991&&new n0({dom:document.getElementById("container")})});
//# sourceMappingURL=index-ec3ea76c.js.map
