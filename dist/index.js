"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var l=f(function(Z,m){
var k=require('@stdlib/assert-is-boolean/dist').isPrimitive,x=require('@stdlib/assert-is-string/dist').isPrimitive,P=require('@stdlib/assert-is-plain-object/dist'),p=require('@stdlib/assert-has-own-property/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function E(e,r){return P(r)?p(r,"create")&&(e.create=r.create,!k(e.create))?new TypeError(o('2pJ2o',"create",e.create)):p(r,"sep")&&(e.sep=r.sep,!x(e.sep))?new TypeError(o('2pJ2W',"sep",e.sep)):null:new TypeError(o('2pJ2V',r));}m.exports=E
});var c=f(function(_,d){
function T(){return{create:!1,sep:"."}}d.exports=T
});var q=f(function($,y){
var h=require('@stdlib/assert-is-object-like/dist'),j=require('@stdlib/assert-has-own-property/dist'),L=require('@stdlib/assert-is-function/dist');function V(e,r,u,n){var a,s,i,t,v;for(s=r.length,a=!1,i=e,v=0;v<s&&(t=r[v],h(i));v++){if(!j(i,t))if(u)i[t]={};else break;v===s-1?(L(n)?i[t]=n(i[t]):i[t]=n,a=!0):i=i[t]}return a}y.exports=V
});var b=f(function(rr,g){
var A=require('@stdlib/assert-is-object-like/dist'),K=require('@stdlib/assert-is-string/dist').isPrimitive,B=require('@stdlib/assert-is-array/dist'),F=require('@stdlib/error-tools-fmtprodmsg/dist'),R=l(),z=c(),C=q();function D(e,r,u,n){var a,s,i,t;if(!A(e))return!1;if(a=K(r),!a&&!B(r))throw new TypeError(F('2pJ3A',r));if(i=z(),arguments.length>3&&(t=R(i,n),t))throw t;return a?s=r.split(i.sep):s=r,C(e,s,i.create,u)}g.exports=D
});var O=f(function(er,w){
var G=require('@stdlib/assert-is-string/dist').isPrimitive,H=require('@stdlib/assert-is-array/dist'),I=require('@stdlib/assert-is-object-like/dist'),J=require('@stdlib/error-tools-fmtprodmsg/dist'),M=l(),N=c(),Q=q();function U(e,r){var u,n,a,s;if(u=G(e),!u&&!H(e))throw new TypeError(J('2pJ3A',e));if(a=N(),arguments.length>1&&(s=M(a,r),s))throw s;return u?n=e.split(a.sep):n=e,i;function i(t,v){return I(t)?Q(t,n,a.create,v):!1}}w.exports=U
});var W=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=b(),X=O();W(S,"factory",X);module.exports=S;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
