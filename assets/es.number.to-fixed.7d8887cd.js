var O=Object.defineProperty;var f=(n,i)=>O(n,"name",{value:i,configurable:!0});import{v as R,x as S,y as m,n as E,z as F,A as N,B as T}from"./iframe.7f8eabd3.js";var j=m,C=R,q=S,z=RangeError,D=f(function(i){var r=C(q(this)),e="",t=j(i);if(t<0||t==1/0)throw z("Wrong number of repetitions");for(;t>0;(t>>>=1)&&(r+=r))t&1&&(e+=r);return e},"repeat"),V=E,d=F,k=m,A=T,B=D,w=N,M=RangeError,y=String,I=Math.floor,p=d(B),b=d("".slice),g=d(1 .toFixed),s=f(function(n,i,r){return i===0?r:i%2===1?s(n,i-1,r*n):s(n*n,i/2,r)},"pow"),U=f(function(n){for(var i=0,r=n;r>=4096;)i+=12,r/=4096;for(;r>=2;)i+=1,r/=2;return i},"log"),u=f(function(n,i,r){for(var e=-1,t=r;++e<6;)t+=i*n[e],n[e]=t%1e7,t=I(t/1e7)},"multiply"),$=f(function(n,i){for(var r=6,e=0;--r>=0;)e+=n[r],n[r]=I(e/i),e=e%i*1e7},"divide"),x=f(function(n){for(var i=6,r="";--i>=0;)if(r!==""||i===0||n[i]!==0){var e=y(n[i]);r=r===""?e:r+p("0",7-e.length)+e}return r},"dataToString"),W=w(function(){return g(8e-5,3)!=="0.000"||g(.9,0)!=="1"||g(1.255,2)!=="1.25"||g(0xde0b6b3a7640080,0)!=="1000000000000000128"})||!w(function(){g({})});V({target:"Number",proto:!0,forced:W},{toFixed:f(function(i){var r=A(this),e=k(i),t=[0,0,0,0,0,0],h="",a="0",o,c,v,l;if(e<0||e>20)throw M("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return y(r);if(r<0&&(h="-",r=-r),r>1e-21)if(o=U(r*s(2,69,1))-69,c=o<0?r*s(2,-o,1):r/s(2,o,1),c*=4503599627370496,o=52-o,o>0){for(u(t,0,c),v=e;v>=7;)u(t,1e7,0),v-=7;for(u(t,s(10,v,1),0),v=o-1;v>=23;)$(t,1<<23),v-=23;$(t,1<<v),u(t,1,1),$(t,2),a=x(t)}else u(t,0,c),u(t,1<<-o,0),a=x(t)+p("0",e);return e>0?(l=a.length,a=h+(l<=e?"0."+p("0",e-l)+a:b(a,0,l-e)+"."+b(a,l-e))):a=h+a,a},"toFixed")});export{D as s};
//# sourceMappingURL=es.number.to-fixed.7d8887cd.js.map
