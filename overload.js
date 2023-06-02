function getRandomHash() {
    let result = "0x";
    for (let i = 64; i > 0; --i) result += "0123456789abcdef"[~~(Math.random() * 16)];
    return result;
  }
  
  let hash = getRandomHash();
  
  let tokenData = {
    hash: getRandomHash(),
    
  };
  
  const e=void 0;var t=e=>{const t=Uint32Array.from([0,0,0,0].map(((t,o)=>parseInt(e.substr(8*o+2,8),16)))),o=()=>{let e,o=t[3];return t[3]=t[2],t[2]=t[1],t[1]=e=t[0],o^=o<<11,o^=o>>>8,t[0]=o^e^e>>>19,t[0]/4294967296},i=(e=.5)=>o()<e,n=void 0,r=(e,t)=>t?o()*(t-e)+e:o()*e,s=(e,t)=>Math.floor(r(e,t)),l=e=>e.length?e[s(0,e.length)]:void 0,a=e=>{let t=e.reduce(((e,t)=>e+t)),i=o()*t;for(let t=0;t<e.length;t++){if(i<e[t])return t;i-=e[t]}return 0},c=(e,t)=>{let o;return h(e).slice(0,t)},h=e=>{let t,i,n=e.length,r=e.slice();for(;n;)t=Math.floor(o()*n--),i=r[n],r[n]=r[t],r[t]=i;return r},p=function(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]},d=(e,t)=>{e=p(e,1),t=t||[];var i=2*o()*Math.PI;return t[0]=e*Math.cos(i),t[1]=e*Math.sin(i),t},f=(e,t)=>{e=p(e,1),d(1,t=t||[]);var i=e*Math.sqrt(o());return t[0]*=i,t[1]*=i,t};let u=!1,g=null;const m=(e,t)=>{if(u){u=!1;let o=g;return g=null,e+t*o}{let i=0,n=0,r=0;do{i=2*o()-1,n=2*o()-1,r=i*i+n*n}while(r>=1||0===r);let s=Math.sqrt(-2*Math.log(r)/r);return g=n*s,u=!0,e+t*(i*s)}};return{rnd:o,chance:i,bool:i,range:r,rangeFloor:s,pick:l,pickSome:c,weighted:a,shuffleArray:h,onCircle:d,insideCircle:f,gaussian:m}};const o=void 0;var i=[["#D24F8C","#1EACB7","#D7D6C9","#231E24"],["#111F19","#8AE84F","#F7F61B","#FC5192","#FF686C"],["#22342E","#30443F","#0281BB","#DD809C","#DB473A","#FACF0B"],["#4156A0","#E62630","#3B393D","#9F9FA5","#49678C"],["#F25D26","#1B2934","#A9B3C9","#247F51","#F2A8D4"],["#F23D2D","#F1F3F5","#000101"],["#C0080B","#5C4F40","#245941","#DC9C0B","#101F87","#0E7DCC"],["#CC4939","#724483","#3B3C80","#F0CB4D","#4CA183","#49659E"],["#ffbf00","#e83f6f","#2274a5","#32936f"],["#94afc0","#2289b6","#f7bd40","#e0160a","#871008"],["#1e2022","#52616b","#c9d6df"],["#F4BC01","#002E4B","#176A95","#819EB9","#CFD0DD","#CB090D"],["#075ea8","#d9322b","#f3a606"],["#169b62","#5ec8e5","#f984ca","#e34459"],["#ff6700","#c0c0c0","#3a6ea5","#004e98"],["#01608F","#EF91A9","#EB4626","#F4BA10","#34A096","#2C2F8C"],["#229B9A","#021F19","#F8EBC8","#B33B2B","#F9972B","#E7D540","#558848","#4F8CB6","#B5526D"],["#F8E7C9","#067DB9","#5885C9","#A7A69B","#ECDB3C","#9BB666","#AB3938","#DB4E3A"],["#00283B","#1F656C","#F0F2CF","#F72B01","#F14A39","#AA0067","#4C0082","#D6BC4B","#19A091","#1E67AF"]];const n=(e,t)=>{const o=[],i=Math.ceil(t/e.length),n=1/i;for(let t=0;t<e.length;t+=1)for(let r=0;r<i;r+=1){const i=color(e[t]),s=color(e[(t+1)%e.length]);o.push(lerpColor(i,s,(r+1)*n))}return o},r=void 0,s=e=>e.filter(((t,o)=>{const i=JSON.stringify(t);return o===e.findIndex((e=>JSON.stringify(e)===i))})),l=(e,t,o,i,n,r,s)=>{const l=e.drawingContext.createLinearGradient(t,o,i,n);return r.forEach(((e,t)=>l.addColorStop(e,s[t]))),e.drawingContext.fillStyle=l,l},a=(e,t,o,i,n,r,s)=>{const l=e.drawingContext.createLinearGradient(t,o,i,n);return r.forEach(((e,t)=>l.addColorStop(e,s[t]))),e.drawingContext.strokeStyle=l,l};var c=n,h=e=>new Array(e).fill(0).map(((e,t)=>t)),p=l,d={};d="precision highp float;\n#define GLSLIFY 1\nvarying vec2 vPos;\nattribute vec3 aPosition;\nvoid main() {\n    vPos = (gl_Position = vec4(aPosition,1.0)).xy;\n}\n";var f={};f="#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\nuniform vec2 u_resolution;uniform sampler2D p;uniform float rnd,amount1,amount2,amount3;uniform int type;void main(){vec2 st=gl_FragCoord.xy/u_resolution,uv=vec2(st.x,1.-st.y);vec4 col;if(type==1)col.x=texture2D(p,vec2(uv.x+amount1,uv.y)).x,col.y=texture2D(p,vec2(uv.x+amount2,uv.y)).y,col.z=texture2D(p,vec2(uv.x-amount3,uv.y)).z;else col.x=texture2D(p,vec2(uv.x,uv.y+amount1)).x,col.y=texture2D(p,vec2(uv.x,uv.y+amount2)).y,col.z=texture2D(p,vec2(uv.x,uv.y-amount3)).z;col.w=texture2D(p,uv.xy).w;gl_FragColor=col;}\n";var u={};u="#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\nuniform vec2 u_resolution;\nuniform sampler2D p;\nuniform float amount;\n\nvoid main(){\n    vec2 st=gl_FragCoord.xy/u_resolution;\n    float mult=1.+amount*2.;\n    st-=amount/mult;\n    st*=mult;\n    gl_FragColor=texture2D(p,vec2(st.x,1.-st.y));\n}\n";var g={};g="#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\nuniform vec2 u_resolution;\nuniform sampler2D p;\nuniform float amount;\n\nvoid main(){\n    vec2 st=gl_FragCoord.xy/u_resolution;\n    vec4 color;\n    color.xyz=texture2D(p,vec2(st.x,1.-st.y)).xyz;\n    color*=1.-amount+amount*sin(100.+st.x*4e3)+.1;\n    color*=1.-amount+amount*sin(100.+st.y*6e3)+.1;\n    color.w=1.;\n    gl_FragColor=color;\n}\n\n";var m={};m="#ifdef GL_ES\nprecision mediump float;\n#define GLSLIFY 1\n#endif\nuniform vec2 u_resolution;uniform sampler2D p;uniform float rnd,amount,contrast;vec3 i(vec3 c,float f){vec3 l=vec3(.299,.587,.114),g=vec3(dot(l,c));return mix(c,g,f);}mat4 o(float c){float t=(1.-c)/2.;return mat4(c,0,0,0,0,c,0,0,0,0,c,0,t,t,t,1);}void main(){vec2 st=gl_FragCoord.xy/u_resolution,uv=vec2(st.x,1.-st.y);vec4 col;col.xyz=texture2D(p,uv.xy).xyz;col.xyz=i(col.xyz,amount);col.w=texture2D(p,uv.xy).w;gl_FragColor=o(contrast)*col;}\n";const v=(e,t,o,i,n)=>{const{pick:r,range:s,rnd:l}=o,a={glitch2:f,shrink:u,grid:g,desaturate:m},c=void 0;createGraphics(3040,4560).pixelDensity(1);const h=e.createShader(d,a[i]);if("glitch2"===i){const e=s(.005,.005);let t=r([0,e]),o=r([0,e]),i=r([0,e]),l=r([0,1]);n={amount1:t,amount2:o,amount3:i,type:l}}e.push(),e.shader(h),h.setUniform("p",t),h.setUniform("u_resolution",[width,height]),h.setUniform("rnd",l()),n&&Object.keys(n).forEach((e=>{h.setUniform(e,n[e])})),e.quad(-1,-1,1,-1,1,1,-1,1),e.pop(),t.image(e,0,0)};var x=v;const w=void 0;var y=(e,t,o,i,r)=>{const s=width/1e3,{pick:l}=r,a=12,c=n(t,144);let h=0;for(let t=-16*s;t<=width+16*s;t+=width/a)for(let n=-16*s;n<height+16*s;n+=height/a){const r=noise(.002*t,.002*n),a=noise(.001*t,.001*n);c[h%c.length].setAlpha(100*a),e.push(),e.noStroke(),e.fill(o),e.fill(c[h%c.length]),e.textSize(map(r,0,1,2,20)*s),e.text(l(i),t,n),e.pop(),h+=1}};const C=void 0;var k=(e,t,o,i)=>{const n=[1,.95,.01,0].reverse(),r=[t,t,"rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)"];t.setAlpha(100),e.push(),e.noStroke(),l(e,width/2,0,width/2,i,n,r),e.beginShape(),e.vertex(0,0),e.vertex(width,0),e.vertex(width-o,i),e.vertex(o,i),e.endShape(CLOSE),e.beginShape(),l(e,width,height/2,width-o,height/2,n,r),e.vertex(width,0),e.vertex(width,height),e.vertex(width-o,height-i),e.vertex(width-o,i),e.endShape(CLOSE),l(e,width/2,height,width/2,height-i,n,r),e.beginShape(),e.vertex(width,height),e.vertex(0,height),e.vertex(o,height-i),e.vertex(width-o,height-i),e.endShape(CLOSE),l(e,0,height/2,o,height/2,n,r),e.beginShape(),e.vertex(0,height),e.vertex(0,0),e.vertex(o,i),e.vertex(o,height-i),e.endShape(CLOSE),e.pop(),t.setAlpha(255)};const F={renderBacks:S,applyEffects:E,processFunction:b};async function D(e,t,o,i,n){for(let r=0;r<e.length;r+=t){let s=e.slice(r,r+t);const l=F[o];p5.processed=await l(s,i,n),B(n),await new Promise((e=>setTimeout(e,10))),"final"===n&&(p5.phase=2,p5.finalImage.image(p5.mainBack,0,0,width,height),loop())}}function b(e,t){return new Promise((o=>{setTimeout((()=>{let i=e.map((e=>(t(),{item:e,type:"processFunction"})));o(i)}),10)}))}function S(e){return new Promise((t=>{setTimeout((()=>{let o=e.map((e=>(e.render(),{item:e,type:"renderBacks"})));t(o)}),10)}))}function E(e,t,o){return new Promise((i=>{setTimeout((()=>{let n=e.map((e=>(v(p5.shaderCanvas,e.back,p5.globalRandom,t,o),{item:e,type:"applyEffects"})));i(n)}),10)}))}const A="OVERLOADING";function B(e){for(let t=0;t<p5.processed.length;t++){const o=p5.processed[t].item;if(background(p5.backgroundColor),o&&(o.p?image(o.p,0,0):o.back?image(o.back,0,0):image(o,0,0)),"final"!==e){const e=p5.globalRandom.shuffleArray(p5.overloadColors);textSize(120*p5.M),noStroke(),textAlign(CENTER,CENTER),fill(e[0]),text("OVERLOADING",width/2,height/2),fill(e[1]),text("OVERLOADING",width/2*1.01,height/2*1.01),fill(e[2]),text("OVERLOADING",width/2*.99,height/2*.99)}}}const G=void 0;var z=(e,t,o,i,n,r,s,l,a,c,h,p,d)=>{const{pick:f,rnd:u,range:g,rangeFloor:m}=n,v=e.map((e=>{const{back:o}=e,n=f(i);e.count=n;const v=u()>.5,x=!v||u()>.5,{class:w,types:y,specialTypes:C}=f(r);return c=1===c||2!==c&&u()>.5,new w({p:o,count:n,coef:h||g(.1,4),colors:t,type:f(y),specialType:f(C),rotation:f(a),fill:v&&f(l),stroke:x&&f(l),gFillDirection:f(s),gStrokeDirection:f(s),differentFillGradients:u()>.5,differentStrokeGradients:u()>.5,render90deg:c,rnd:u,rangeFloor:m,pick:f,str:p,cutBacks:d})}));(0===o||1===o&&u()>.1||2===o&&u()>.7)&&v.forEach((e=>{D([e],1,"renderBacks")}))};const L=void 0;var O=(e,t,o,i,n,r)=>{const s=([e,t])=>[[e,t],[e+1,t],[e+1,t+1],[e,t+1]],l=[];let a=[e,t],c=0;const h=(e,t)=>(c+=1,c>4&&(a=r(l)[0],c=0),0===l.filter((([[o,i]])=>e===o&&t===i)).length);let p=0;for(;p<o;){const[e,t]=a,o=r(["left","up","right","down"]);"up"===o?t-1>=0&&h(e,t-1)&&(a=[e,t-1],l.push(s(a)),p+=1):"down"===o?t+1<1*n&&h(e,t+1)&&(a=[e,t+1],l.push(s(a)),p+=1):"left"===o?e-1>=0&&h(e-1,t)&&(a=[e-1,t],l.push(s(a)),p+=1):"right"===o&&e+1<1*i&&h(e+1,t)&&(a=[e+1,t],l.push(s(a)),p+=1)}return l};const P=void 0;var _=(e,t,o,i)=>{const n=e=>e.filter((([t,o])=>{const i=e.filter((([e,i])=>t===e&&o===i+1)).length>0,n=e.filter((([e,i])=>t===e+1&&o===i)).length>0,r=e.filter((([e,i])=>t===e&&o===i-1)).length>0,s=e.filter((([e,i])=>t===e-1&&o===i)).length>0,l=e.filter((([e,i])=>t===e-1&&o===i+1)).length>0,a=e.filter((([e,i])=>t===e+1&&o===i+1)).length>0,c=e.filter((([e,i])=>t===e+1&&o===i-1)).length>0,h=e.filter((([e,i])=>t===e-1&&o===i-1)).length>0;return!(i&&n&&r&&s&&l&&a&&c&&h)}));let r=s(e.flat());r=n(r);const l=void 0,a=(e=>{let t=(e=e.sort((([e,t],[o,i])=>e+t-(o+i))))[0];const o=[t];let i=[...e];i.shift();const n=(e,n,r)=>{for(let s=0;s<r.length;s+=1){const[l,a]=r[s];if(l===e&&a===n-1)return t=[l,a],o.push(t),i.splice(s,1),!0}},r=(e,n,r)=>{for(let s=0;s<r.length;s+=1){const[l,a]=r[s];if(l===e+1&&a===n)return t=[l,a],o.push(t),i.splice(s,1),!0}},s=(e,n,r)=>{for(let s=0;s<r.length;s+=1){const[l,a]=r[s];if(l===e&&a===n+1)return t=[l,a],o.push(t),i.splice(s,1),!0}},l=(e,n,r)=>{for(let s=0;s<r.length;s+=1){const[l,a]=r[s];if(l===e-1&&a===n)return t=[l,a],o.push(t),i.splice(s,1),!0}};let a=[{func:l,type:"left"},{func:n,type:"up"},{func:r,type:"right"}],c=null,h="null";for(;o.length<e.length;)"up"===h?a=[{func:l,type:"left"},{func:n,type:"up"},{func:r,type:"right"}]:"right"===h?a=[{func:n,type:"up"},{func:r,type:"right"},{func:s,type:"down"}]:"down"===h?a=[{func:r,type:"right"},{func:s,type:"down"},{func:l,type:"left"}]:"left"===h&&(a=[{func:s,type:"down"},{func:l,type:"left"},{func:n,type:"up"}]),c=a[0].func(...t,i),h=a[0].type,c||(c=a[1].func(...t,i),h=a[1].type),c||(c=a[2].func(...t,i),h=a[2].type),c=null;return o})(r);let c=[],h=[];if(i)for(let e=0;e<a.length;e+=1){let[i,n]=a[e];const r=i*t,s=n*o;h.push({type:"vertex",points:[r,s]})}else for(let e=0;e<a.length;e+=1){let[i,n]=a[e],[r,s]=a[(e+a.length-1)%a.length],[l,c]=a[(e+1)%a.length];const p=i*t,d=n*o;r===i&&s===n+1&&l===i+1&&c===n||r===i&&s===n-1&&l===i-1&&c===n||r===i-1&&s===n&&l===i&&c===n+1||r===i+1&&s===n&&l===i&&c===n-1||h.push({type:"vertex",points:[p,d]})}return{finalPoints:h,arcs:c}};const I=(e,t,o,i,n=0)=>{const{rnd:r,rangeFloor:s,pick:l,pickSome:a,shuffleArray:c}=i,h=e,p=e*(height/width);let d=(width-width*n*2)/h,f=d,u=[];for(let e=0;e<h;e+=1)for(let t=0;t<p;t+=1)u.push([e,t]);u=c(u),u=a(u,t);const g=[];let m;return u.forEach((e=>{const[t,i]=e;g.push(O(t,i,s(...o),h,p,l))})),c(g.map((e=>_(e,d,f,r()>.5))))},W=(e,t,o,i,n)=>{const r=width/1e3;e.drawingContext.shadowColor=t,e.drawingContext.shadowBlur=o*r,e.drawingContext.shadowOffsetX=i?i*r:0,e.drawingContext.shadowOffsetY=n?n*r:0},T=(e,t)=>{e.beginShape(),t.forEach((({points:t})=>{e.vertex(...t)})),e.endShape(CLOSE)},R=void 0,M=(e,t,o,i,n)=>{const{rnd:r,pick:s,range:l}=n;let a=t,c=o,h=s([0,a]),p=s([0,a]),d=s([0,a]);e.loadPixels();let f=e.pixelDensity(),u=e.width*f*4*(e.height*f);for(let t=0;t<u;t+=4)r()<i&&(h=s([0,a]),p=s([0,a]),d=s([0,a])),e.pixels[t]=e.pixels[t+h]+s([-1,1])*l(c),e.pixels[t+1]=e.pixels[t+1+p]+s([-1,1])*l(c),e.pixels[t+2]=e.pixels[t+2+d]+s([-1,1])*l(c);for(let t=u;t>0;t-=4)r()<i&&(h=s([0,a]),p=s([0,a]),d=s([0,a])),e.pixels[t]=e.pixels[t-h]+s([-1,1])*l(c),e.pixels[t+1]=e.pixels[t+1-p]+s([-1,1])*l(c),e.pixels[t+2]=e.pixels[t+2-d]+s([-1,1])*l(c);e.updatePixels()},U=void 0;var N=(e,t,o,i,n,r,s,l,a,c,h,p=0)=>{const{filled:d,glitch:f,backs2:u,scheme:g,doubleShadow:m,smallShadow:v}=h,{pick:x,pickSome:w,rnd:y,rangeFloor:C}=t,k=width/1e3;let F=width*p,D=height*p;const b=[x([-1,0,1]),x([-1,0,1])],S=b.map((e=>-1*e)),E=w(o,2),A=i,B=y()>.5?E[1]:i,G=I(r,s,c,t,p);let z;f&&(z=createGraphics(3040,4560),z.pixelDensity(1),z.image(e,0,0),M(z,x([16,32,64,128,256]),16,2e-6,t)),e.push(),e.translate(F,D),G.forEach((({finalPoints:t})=>{const r=!u&&y()>.5,s=void 0;if(!u&&y()>.8){const i=C(8),n=x(o);n.setAlpha(100),e.push(),e.noStroke(),e.fill(n),W(e,n,1,i*S[0],i*S[1]),T(e,t),e.pop(),y()>.05&&n.setAlpha(255)}if(r){e.push();const i=C(8),n=x(o);e.noStroke(),e.fill(n),W(e,n,i),T(e,t),e.pop()}e.push(),r?e.noFill():e.fill(x(o)),e.strokeWeight(0),a&&y()>.5&&(e.strokeWeight(k),e.stroke(B)),f||(z=x(n).back);let c=1;if(m&&(c=2),l){let o=C(8,16)*c,n=C(8)*c;if(d&&(o=C(4,16),n=C(4)),v&&(o=C(0,4),n=C(2)),W(e,i,o,n*b[0],n*b[1]),y()>.5){const r=[o,0],s=[n,0];y()>.5&&(r.reverse(),s.reverse());const l=map(t[0].points[1],0,height,r[0],r[1]),a=map(t[0].points[1],0,height,s[0],s[1]);W(e,i,l,a*b[0],a*b[1])}}if(d){const t=x(o);t.setAlpha(100),e.fill(t),t.setAlpha(255)}u&&e.noFill(),T(e,t),e.drawingContext.clip(),e.image(z,0,0,width,height),g&&(e.stroke(A),e.strokeWeight(k),e.push(),e.translate(F,D),e.noFill(),T(e,t),e.pop(),t.forEach((({points:t})=>{e.push(),e.translate(F,D),y()>.7&&e.fill(x(o)),e.circle(...t,5*k),e.pop()}))),e.pop()})),e.pop()};const q=void 0,Y=void 0;var X=(e,t,o,i)=>{const{rangeFloor:n,rnd:r}=i,s=e/2*3,l=i=>{const n=.5*r();return!(i[0]<0||i[0]>e||i[1]>height-height*t)&&(n<.25?[i[0]+1,i[1]+o]:n<.5?[i[0]-1,i[1]+o]:n<.75?[i[0]+1,i[1]]:[i[0]-1,i[1]])},a=e=>{const i=r();return!(e[1]<0||e[1]>s||e[0]>width-width*t)&&(i<.25?[e[0]+o,e[1]+1]:i<.5?[e[0]+o,e[1]-1]:i<.75?[e[0],e[1]+1]:[e[0],e[1]-1])},c=n(e+1),h=n(s+1);let p=[c,0],d=l(p);const f=[[p[0]*o,p[1]]];for(;d;)d=l(p),d&&(f.push([d[0]*o,d[1]]),p=d);let u=[0,h],g=a(u),m=[[u[0],u[1]*o]];for(;g;)g=a(u),g&&(m.push([g[0],g[1]*o]),u=g);return{xPoints:f,yPoints:m}},H=(e,t,o,i,n)=>{if(t&&o.length>4){const t=n(1,3),r=n(0,o.length-t-1);e.drawingContext.setLineDash([r*i,t*i])}else e.drawingContext.setLineDash([])},V=W,Q=(e,t,o=0,i=0)=>{e.beginShape(),t.forEach((t=>{e.vertex(t[0]+o,t[1]+i)})),e.endShape()};const j=void 0;var J=(e,t,o,i,n=0,r)=>{const s=createGraphics(3040,4560);s.pixelDensity(1),s.image(e,0,0);const l=width/1e3,{pick:a,range:c,rangeFloor:h,rnd:p,weighted:d}=t,f=[a([-1,0,1]),a([-1,0,1])],u=a([2,4,8,16]),g=a(o),m=void 0,v=(width-width*n*2)/u,x=sqrt(sq(v)+sq(v)),w=p()>.5,y=h(12,48),{xPoints:C,yPoints:k}=X(u,n,v,t);e.strokeCap(SQUARE),e.push(),e.translate(width*n,height*n);const F=void 0;if(p()>.5){const t=h(3,8),i=h(1,6);e.push(),e.noFill();const n=h(1,5)*l;if(e.strokeWeight(n),p()>.5)for(let r=1;r<t;r+=1){H(e,w,C,x,h);const t=r*n*f[0]*i,s=r*n*f[1]*i;e.stroke(o[r%o.length]),Q(e,C,t,s)}else if(p()>.5){H(e,w,k,x,h);for(let r=1;r<t;r+=1){const t=r*n*f[0]*i,s=r*n*f[1]*i;e.stroke(o[r%o.length]),Q(e,k,t,s)}}e.pop()}const D=a([1,2,3,4]);e.push(),e.noFill(),e.stroke(g),r&&e.stroke(i),e.strokeWeight(D*l/2),H(e,w,C,x,h),Q(e,C),H(e,w,k,x,h),Q(e,k),e.strokeWeight(D*l);const b=2*c(1,4);V(e,i,b,y*f[0],y*f[1]),H(e,w,C,x,h),Q(e,C),H(e,w,k,x,h),Q(e,k),D>2&&p()>.5&&(e.drawingContext.shadowBlur=0,e.strokeWeight(l),e.stroke(a(o)),H(e,w,C,x,h),Q(e,C),H(e,w,k,x,h),Q(e,k)),e.pop();const S=10*l,E=n?S-S*n:S,A=t=>{t.forEach(((t,r)=>{if(r!==C.length-2&&0!==r&&p()>.7&&(e.push(),e.noStroke(),e.fill(g),e.ellipse(...t,E),p()>.5&&(e.fill(i),e.ellipse(...t,E/2)),e.pop()),p()>.9){const i=E*[1.5,2,2.5,3,3.5,4][d([4,4,3,3,2,1])]*D,r=p()>.75,f=p()>.75,u=p()>.75,m=h(3,8),v=i/m,x=a([-5,0,5])*l,w=a([-5,0,5])*l;if(e.push(),e.stroke(g),f&&p()>.5&&(e.noStroke(),e.fill(g)),e.strokeWeight(D*l),e.ellipse(...t,i),e.translate(-width*n,-height*n),e.drawingContext.clip(),e.image(s,x,w,1.01*width,1.01*height),r){const r=p()>.5,s=p()>.7;e.translate(width*n,height*n),e.noFill();for(let n=0;n<m;n+=1){const a=i-n*v,h=c(0,TWO_PI),d=h+c(HALF_PI,TWO_PI);r&&e.stroke(o[n%o.length]),p()>.85?e.strokeWeight(D*l-n*v):e.strokeWeight(l-n*v),s?e.arc(...t,a,a,h,d,OPEN):e.ellipse(...t,a)}}if(f){const n=a(o);n.setAlpha(75),e.push(),e.fill(n),e.noStroke(),e.ellipse(...t,i),e.pop(),n.setAlpha(255)}u&&(e.push(),e.stroke(g),e.strokeWeight(D*l),p()>.5?(e.line(t[0]-i/2,t[1],t[0]+i/2,t[1]),e.line(t[0],t[1]-i/2,t[0],t[1]+i/2)):(e.line(t[0]-i/2,t[1]-i/2,t[0]+i/2,t[1]+i/2),e.line(t[0]+i/2,t[1]-i/2,t[0]-i/2,t[1]+i/2)),e.pop()),e.pop()}}))};A(C),A(k),e.pop()};class ${constructor({p:e,count:t,coef:o,colors:i,type:r,specialType:s,rotation:l,fill:a,stroke:c,gFillDirection:h,gStrokeDirection:p,differentFillGradients:d,differentStrokeGradients:f,render90deg:u,rnd:g,rangeFloor:m,str:v,pick:x,cutBacks:w}){const y={c:0,tl:0,tr:.5*PI,bl:1.5*PI,br:PI};this.p=e,this.count=t,this.colors=i,this.type=r,this.rotation=y[l],this.fill=a,this.stroke=c,this.gFillDirection=h,this.gStrokeDirection=p,this.specialType=s,this.lerpColors=n(i,t**2*o),this.size=e.width/t,this.counter=0,this.xCounter=0,this.xCount=e.round(e.width/this.size),this.yCount=e.round(e.height/this.size),this.render90deg=u,this.destinations=u?[this.yCount,this.xCount]:[this.xCount,this.yCount],this.odd=!1,this.lineOdd=!1,this.differentFillGradients=d,this.differentStrokeGradients=f,this.rnd=g,this.rangeFloor=m,this.str=v,this.pick=x,this.cutBacks=w}drawShape(){}render(){let{p:e,colors:t,destinations:o,size:i,counter:n,xCounter:r,rotation:s,lerpColors:l,fill:a,stroke:c,render90deg:h,differentFillGradients:p,differentStrokeGradients:d}=this;for(let f=0;f<o[0];f+=1){for(let u=0;u<o[1];u+=1){let o=f*i,g=u*i;h&&(o=u*i,g=f*i),this.lineOdd=r%2==0,this.lineOdd?this.odd=n%2==0:this.odd=n%2!=0;let m=l[n%l.length];if("noise"===a){const e=noise(.001*o,.001*g);m=l[Math.round(map(e,0,1,0,l.length-1))%l.length]}this.mainColor=t[0],this.secondaryColor=m,e.push(),e.translate(o,g),e.translate(i/2,i/2),e.rotate(s),e.translate(-i/2,-i/2),"solid"===a?e.fill(t[0]):"lerp"===a||"noise"===a?e.fill(m):"gradient"===a?p?this.makeGradient(!0,!1,m):this.makeGradient(!0):a||e.noFill(),"solid"===c?e.stroke(t[1]):"lerp"===c||"noise"===c?e.stroke(m):"gradient"===c?d?this.makeGradient(!1,!1,m):this.makeGradient(!1,!1):c||e.noStroke(),this.drawShape(),e.pop(),n+=1}r+=1}}makeGradient(e,t,o){let{p:i,gFillDirection:n,gStrokeDirection:r,gBackgroundDirection:s,size:c,colors:h}=this;const p=void 0,d=e?n:t?s:r,f=["tb","lr","tlbr","trbl"].includes(d)?[0,1]:[1,0],u=[0,0],g=[c,0],m=[0,c],v=[c,c],x=[c/2,0],w=[c/2,c],y=[0,c/2],C=[c,c/2],k=e||t?l:a,F=o?[h[0],o]:h;"tb"===d||"bt"===d?k(i,...x,...w,f,F):"lr"===d||"rl"===d?k(i,...y,...C,f,F):"tlbr"===d||"bltr"===d?k(i,...u,...v,f,F):"trbl"!==d&&"brtl"!==d||k(i,...g,...m,f,F)}}class K extends ${constructor(e){super(e)}drawShape(){let{p:e,type:t,size:o,odd:i,lineOdd:r,rnd:s,rangeFloor:l,colors:a,mainColor:c,secondaryColor:h}=this,p,d,f,u,g,m,v;if("something"!==t||r||(i=!i),"diagonal"===t&&i?(v=1,p=o,d=0,f=o,u=o,g=0,m=o):"mirror"!==t&&"something"!==t||!i?"chess"===t||"shear"===t||"zigzag"===t?r?i||"shear"===t?(v=2,p=0,d=0,f=o,u=o,g=0,m=o):(v=1,p=o,d=0,f=o,u=o,g=0,m=o):("zigzag"===t&&(i=!i),i||"shear"===t?(v=3,p=0,d=0,f=o,u=0,g=o,m=o):(v=4,p=0,d=0,f=o,u=0,g=0,m=o)):(v=4,p=0,d=0,f=o,u=0,g=0,m=o):(v=2,p=0,d=0,f=o,u=o,g=0,m=o),e.triangle(p,d,f,u,g,m),s()>.9){const t=l(2,21),i=o/t,r=n(a,t),x=s()>.5;for(let n=0;n<t;n+=1)1===v?(p=o,d=n*i,f=o,u=o,g=n*i,m=o):2===v?(p=0,d=n*i,f=o-n*i,u=o,g=0,m=o):3===v?(p=n*i,d=0,f=o,u=0,g=o,m=o-n*i):4===v&&(p=0,d=0,f=o-n*i,u=0,g=0,m=o-n*i),x?e.fill(n%2==0?c:h):e.fill(r[n]),e.triangle(p,d,f,u,g,m)}}}var Z=K;class ee extends ${constructor(e){super(e)}drawShape(){let{p:e,type:t,size:o,odd:i,lineOdd:r,specialType:s,rnd:l,rangeFloor:a,colors:c,mainColor:h,secondaryColor:p,str:d,pick:f,cutBacks:u}=this;"simple"===t&&r&&(i=!i);let g=o;if("half"===s?g=.5*o:"quarter"===s?g=.75*o:"third"===s?g=.66*o:"mid"===s?g=1.2*o:"max"===s&&(g=1.4*o),i){if(e.rectMode(e.CENTER),l()>.2)e.rect(o/2,o/2,g,g);else{const t=a(2,41),i=n(c,t),r=l()>.5,s=l()>.5;for(let n=0;n<t;n+=1){const a=g-g/t*n;r?e.fill(n%2==0?h:p):e.fill(i[n]),s&&l()>.75&&e.noFill(),e.rect(o/2,o/2,a,a)}}u&&l()>.75&&(e.drawingContext.clip(),e.image(f(u),0,0)),l()>.9&&(e.textSize(g),e.textAlign(e.CENTER,e.CENTER),e.text(f(d),o/2,o/2))}}}var te=ee,oe={};oe="precision highp float;\n#define GLSLIFY 1\nuniform sampler2D v;uniform vec2 f;uniform float s,t,x,y;float D(vec2 v){vec3 f=fract(v.xyx*.1031);f+=dot(f,f.yzx+33.33);return fract((f.x+f.y)*f.z);}float D(vec2 v,float s,float f){return s+D(v)*(f-s);}float n(float f,float v,float s){return step(v,f)-step(s,f);}float r=t;void main(){vec2 i=gl_FragCoord.xy/f,t;float z=1.+y*2.,u;i-=y/z;i*=z;t=vec2(i.x,1.-i.y);vec3 m=texture2D(v,t).xyz;u=r/2.;for(float e=0.;e<200.;e+=1.){float h=D(vec2(s,2345.+float(e))),w=D(vec2(s,4851.+float(e)))*.25,g=D(vec2(s,9625.+float(e)),-u,u);vec2 d=t;d.x+=g;if(n(t.y,h,fract(h+w))==1.){float o=r/6.,a=D(vec2(s,9545));vec2 l=vec2(D(vec2(a,2323),-o,o),D(vec2(a,7707),-o,o));if(a<.33)m.x=texture2D(v,d+l).x;else if(a<.66)m.y=texture2D(v,d+l).y;else m.z=texture2D(v,d+l).z;}}vec4 e=vec4(m,1);e*=1.-x+x*sin(100.+i.x*4e3)+.1;e*=1.-x+x*sin(100.+i.y*6e3)+.1;e.w=1.;gl_FragColor=e;}\n";var ie=D;const ne=new URLSearchParams(window.location.search),re=Object.fromEntries(ne.entries());let se;const le=.666666666667;let ae,ce,he,pe,de,fe,ue,ge,me,ve;const xe=[3040,4560];let we,ye,Ce,ke,Fe,De,be,Se,Ee=.002,Ae;const{pd:Be=1}=re;function setup(){noLoop(),p5.phase=0,ce=createCanvas(xe[0],xe[1]),we=Ce=width,ye=ke=height,Fe=be=we/2,De=Se=ye/2,p5.shaderCanvas=createGraphics(3040,4560,WEBGL),p5.shaderCanvas.pixelDensity(1),p5.finalImage=createGraphics(3040,4560),p5.finalImage.pixelDensity(1),ve=createGraphics(3040,4560),ve.pixelDensity(1),se=width/1e3,p5.M=se,pixelDensity(Number(Be)),he=createGraphics(xe[0],xe[1]),he.pixelDensity(1),p5.mainBack=he,strokeWeight(se),strokeCap(SQUARE);const e=t(tokenData.hash);p5.globalRandom=e;const{rnd:o,range:n,rangeFloor:r,pick:s,pickSome:l,weighted:a,shuffleArray:f}=e;for(let e=0;e<4;e+=1)o();const calculateFeatures=()=>{const e={};return e.paletteIndex=r(i.length-1),e.squares=o()>.7,e.sameFill=o()>.7,e.samePattern=o()>.7,e.sameSize=o()>.95,e.outlines=o()>.5,e.shapeOverload=["min","mid","max"][a([1,2,2])],e.volume=o()>.25,e.compression=[1,2,3,4,5][a([11,10,4,1,1])],e.symbols=s(["anime","numbers","binary","squares","arrows","dots","trigrams"]),e.split=o()>.98,e},{paletteIndex:u,sameFill:g,samePattern:m,sameSize:v,squares:x,outlines:w,shapeOverload:C,volume:F,compression:D,symbols:b,split:S}=calculateFeatures();let E;const A=f([...i[u],"#a6a6a6","#404040","#0d0d0d"]);p5.backgroundColor=s(A),p5.overloadColors=A,de=o,fe=n,ae=()=>{p5.processed=[],p5.phase=1;const t=void 0;let a,E;o()>.3?(a=s([6,7,8,9]),E=a):(a=s([5,6,7,8,9]),E=r(a,10)),noiseSeed(1e6*o());const B=c(A,A.length).map((e=>(e.setAlpha(30),e)));let G=c(A,A.length),L=c(f(i[u]),i[u].length);Ae=lerpColor(G[0],color(0),.9);let O=s(L);me=h(r(8,40)).map((()=>createGraphics(xe[0],xe[1]))),ue=c(A,90*me.length),ge=c(A,90*me.length),me.forEach((e=>{e.pixelDensity(1),e.strokeCap(SQUARE),e.strokeWeight(se)})),me=me.map((e=>({back:e,count:0,count2:0})));const P=Math.ceil(me.length/2);let _=me.splice(0,P),I=me.splice(-P);me=f([..._,...I]);let W=[4,8,16,32,64];const T=v&&[s([4,8,16,32])],R=void 0,M=void 0,U=void 0,q=void 0,Y=void 0,X=void 0,H=void 0,V=void 0,Q={numbers:"0123456789".split(""),binary:["0","1","・","●","○"],squares:["□","■","▣","◩","◪"],arrows:["◄","▲","▼","►","◁","△","▽","▷"],dots:["∴","∵","∶","∷","・"],trigrams:["☰","☲","☱","☴","☵","☶","☳","☷"],anime:" .:-=+*#%@゠ァアィイゥウェエォオカキクケコサシスセソタチッツテトナニヌネノ��ヒフヘホマミムメモャヤュユョヨラリルレロヮワヰヱヲンヵヶ・ーヽヿ".split("")}[b],j=[{class:Z,types:["chess","mirror","diagonal","corner","shear","zigzag","something"],specialTypes:[]},{class:te,types:["chess","simple"],specialTypes:["normal","half","third","quarter","max"]}],$=[j[1]];let K=["lr","tb","bt","rl","trbl","tlbr","brtl","bltr"],ee=["solid","lerp","gradient","noise"],ne=["tl","br","tr","bl"],re=!1,le=!1;m&&(j[0].types=[s(j[0].types)],j[1].types=[s(j[1].types)],ne=[s(ne)],re=s([1,2])),g&&(ee=[s(ee)],K=[s(K)],le=n(.1,4)),x&&j.shift();for(let t=0;t<3;t+=1)z(_,G,t,T||W,e,j,K,ee,ne,re,le,Q);const ae={1:.075,2:.075,3:.1,4:.2,5:.25},ce={1:.01,2:.025,3:.04,4:.05,5:.08};let de=ae[D];p5.offsetCoef=de,_.forEach((e=>{ie([e],1,"applyEffects","shrink",{amount:p5.offsetCoef}),o()>.5&&ie([e],1,"applyEffects","glitch2")}));const fe=void 0,ve={min:[10,20],mid:[10,50],max:[50,200]}[C];let we;he.background(O),ie([we],1,"processFunction",(()=>{we=createGraphics(xe[0],xe[1]),we.pixelDensity(1),y(we,G,Ae,Q,e),he.image(_[0].back,0,0,width,height),he.image(we,0,0,width,height)}));let ye=[8,16,32,64,128];const Ce=20,ke=.05,Fe=.025,De=o()>.9;for(let t=0;t<=Ce;t+=1){const i=s(ye);o()>.6&&ie([he],1,"processFunction",(()=>J(he,e,G,Ae))),o()>.8&&ie([he],1,"processFunction",(()=>J(he,e,G,Ae))),ie([he],1,"processFunction",(()=>J(he,e,G,Ae))),ie([he],1,"processFunction",(()=>N(he,e,G,Ae,_,i,r(...ve),F,w,[a,E],{filled:!1,iteration:t,doubleShadow:De}))),ie([{back:he}],1,"applyEffects","desaturate",{amount:1-ke*t,contrast:1.5-Fe*t})}let be,Se=de/(1+2*de),Ee,Be;ie([{back:he}],1,"applyEffects","shrink",{amount:p5.offsetCoef}),ie([he],1,"processFunction",(()=>J(he,e,G,Ae,Se))),ie([he],1,"processFunction",(()=>{Ee=createGraphics(xe[0],xe[1]),Ee.pixelDensity(1),Ee.image(he,0,0,width,height)})),ie([he],1,"processFunction",(()=>{he.push(),he.noStroke(),he.rectMode(CENTER),he.translate(width/2,height/2),he.rotate(n(0,TWO_PI)),p(he,width/2,0,width/2,height,[0,1],l(B,2)),he.blendMode(ADD),he.rect(0,0,1.4*height,1.4*height),he.pop()})),ie([he],1,"processFunction",(()=>J(he,e,G,Ae,0))),ie([he],1,"processFunction",(()=>N(he,e,G,Ae,_,8,r(8,16),!0,w,[a,E],{filled:!1,glitch:!0},0))),ie([he],1,"processFunction",(()=>J(he,e,G,Ae,Se))),ie([he],1,"processFunction",(()=>J(he,e,G,Ae,Se))),ie([he],1,"processFunction",(()=>z(I,G,0,T||[8,16,32,64],e,$,K,ee,ne,re,le,[],[Ee,we]))),ie([he],1,"processFunction",(()=>{Be=createGraphics(xe[0],xe[1]),Be.pixelDensity(1),Be.image(he,0,0,width,height),Be.image(we,0,0,width,height)})),ie([he],1,"processFunction",(()=>J(he,e,G,Ae,Se))),ie([he],1,"processFunction",(()=>N(he,e,G,Ae,[{back:Ee},{back:Be}],16,r(4,16),!0,w,[a,E],{filled:!0,scheme:!0},Se))),ie([{back:he}],1,"applyEffects","shrink",{amount:ce[D]}),ie([he],1,"processFunction",(()=>z(I,G,0,T||[16,32,64],e,$,K,ee,ne,re,le,Q,[Ee,we,Be]))),ie([he],1,"processFunction",(()=>N(he,e,G,Ae,I,16,r(4,16),!0,w,[a,E],{filled:!1,backs2:!0,smallShadow:!0},0)));const Ge=width*ae[D],ze=height*ae[D];ie([he],1,"processFunction",(()=>k(he,Ae,Ge,ze))),ie([{back:he}],1,"applyEffects","grid",{amount:.1});let Le=!1;if(S||(Le="final"),ie([he],1,"processFunction",(()=>J(he,e,G,Ae,0)),Le),S){let t;ie([he],1,"processFunction",(()=>{t=createGraphics(xe[0],xe[1]),t.pixelDensity(1),t.image(he,0,0,width,height)})),ie([{back:he}],1,"applyEffects","desaturate",{amount:1,contrast:1}),ie([he],1,"processFunction",(()=>N(he,e,G,Ae,[{back:t}],32,r(16,32),!0,!0,[a,E],{filled:!0,backs2:!0},Se))),ie([he],1,"processFunction",(()=>J(he,e,G,Ae,0))),ie([he],1,"processFunction",(()=>J(he,e,G,Ae,0))),ie([he],1,"processFunction",(()=>J(he,e,G,Ae,0)),"final")}Ae.setAlpha(255),pe=p5.shaderCanvas.createShader(d,oe)},ae(),windowResized()}let Ge=0,ze=20,Le=0,Oe=0,Pe=0;function draw(){if(2===p5.phase){if(frameRate(30),1===Be){const e=ue[frameCount%ue.length],t=ge[frameCount%ge.length];frameCount%20<10?t.setAlpha(map(frameCount%20,0,10,255,0)):t.setAlpha(map(frameCount%20,10,20,0,255)),ve.background(e),frameCount%20==0&&Ge++,ve.image(me[Ge%me.length].back,0,0,width,height),ve.push(),ve.noStroke(),ve.fill(t),ve.rect(0,0,width,height),ve.pop(),frameCount%5==0&&(Le=.2*de(),Oe=.2*de(),Pe=fe(-.5,1)),p5.shaderCanvas.push(),p5.shaderCanvas.shader(pe),pe.setUniform("v",ve),pe.setUniform("f",[width,height]),pe.setUniform("s",de()),pe.setUniform("t",map(sin(frameCount/10),-1,1,.01,Le)),pe.setUniform("x",Oe),pe.setUniform("y",Pe),p5.shaderCanvas.quad(-1,-1,1,-1,1,1,-1,1),p5.shaderCanvas.pop(),image(p5.shaderCanvas,0,0,width,height)}Fe=lerp(Fe,be,.2),De=lerp(De,Se,.2),we=lerp(we,Ce,.2),ye=lerp(ye,ke,.2),image(p5.finalImage,Fe-we/2,De-ye/2,we,ye),push(),drawingContext.shadowColor=Ae,drawingContext.shadowBlur=width/1e3*16,stroke(Ae),strokeWeight(8*se),noFill(),rect(0,0,width,height),pop()}}function mouseDragged(){be+=mouseX-pmouseX,Se+=mouseY-pmouseY}function mouseWheel(e){var t=-e.delta;if(t>0)for(let e=0;e<t;e+=1){if(Ce>10*width)return;be-=Ee*(mouseX-be),Se-=Ee*(mouseY-Se),Ce*=Ee+1,ke*=Ee+1}if(t<0)for(let e=0;e<-t;e+=1){if(Ce<.9*width)return;be+=Ee/(Ee+1)*(mouseX-be),Se+=Ee/(Ee+1)*(mouseY-Se),ke/=Ee+1,Ce/=Ee+1}}function doubleClicked(){we=Ce=width,ye=ke=height,Fe=be=we/2,De=Se=ye/2,Ee=.1}function windowResized(){const e=void 0,t=ce.canvas.style;let o,i;.666666666667*window.innerHeight>=window.innerWidth?(o=window.innerWidth,i=window.innerWidth/.666666666667):(i=window.innerHeight,o=.666666666667*window.innerHeight),t.position="absolute",t.display="block",t.top=t.left=t.right=t.structure="0",t.width=`${o}px`,t.height=`${i}px`}window.addEventListener("keydown",(e=>{"s"===e.key&&saveCanvas(tokenData.hash,"png")}));console.log('I never intended to and do not intend to kill myself, and if anything happens to me, there can only be one reason - those people behind the fabricated criminal case against me. Shvembldr.')
  