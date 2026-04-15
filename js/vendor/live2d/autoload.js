/*!
 * Live2D Widget
 * https://github.com/stevenjoezhang/live2d-widget
 */const live2d_path="https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.0-rc.6/dist/",MOBILE_BREAKPOINT=820,MOBILE_STORAGE_KEY="live2d-mobile-open";function loadExternalResource(o,d){return new Promise((l,c)=>{let i;d==="css"?(i=document.createElement("link"),i.rel="stylesheet",i.href=o):d==="js"&&(i=document.createElement("script"),i.type="module",i.src=o),i&&(i.onload=()=>l(o),i.onerror=()=>c(o),document.head.appendChild(i))})}(async()=>{await Promise.all([loadExternalResource(live2d_path+"waifu.css","css"),loadExternalResource(live2d_path+"waifu-tips.js","js")]);const o=()=>window.matchMedia("(max-width: 820px)").matches,d=()=>localStorage.getItem(MOBILE_STORAGE_KEY)==="1",l=t=>localStorage.setItem(MOBILE_STORAGE_KEY,t?"1":"0");(()=>{const t=["Cannot read properties of null (reading 'hitTest')","Cannot read properties of undefined (reading 'hitTest')"],e=n=>n?t.some(a=>n.includes(a)):!1;window.addEventListener("error",n=>{typeof n.filename=="string"&&n.filename.includes("live2d")&&e(n.message)&&n.preventDefault()},!0),window.addEventListener("unhandledrejection",n=>{const a=n.reason,g=typeof a=="string"?a:a&&typeof a.message=="string"?a.message:"";e(g)&&n.preventDefault()})})();const i=document.createElement("style");i.textContent=`
    #waifu-toggle {
      position: fixed;
      right: 12px;
      bottom: 96px;
      width: 40px;
      height: 40px;
      border: 0;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.92);
      color: #6b5fb5;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      font-size: 18px;
      line-height: 1;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 12000;
    }

    @media (max-width: 820px) {
      #waifu {
        right: 6px !important;
        bottom: 0 !important;
        transform: scale(0.82);
        transform-origin: right bottom;
        z-index: 11999 !important;
      }

      #waifu #waifu-tips {
        max-width: min(64vw, 260px) !important;
      }

      #waifu-tool {
        right: 0 !important;
      }

      #waifu-toggle {
        right: 10px;
        bottom: 84px;
      }
    }
  `,document.head.appendChild(i),initWidget({waifuPath:live2d_path+"waifu-tips.json",cubism2Path:live2d_path+"live2d.min.js",cubism5Path:"https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js",tools:["hitokoto","asteroids","switch-model","switch-texture","photo","info","quit"],logLevel:"warn",drag:!1});let s;const u=()=>{const t=document.getElementById("waifu-toggle");if(t&&t.tagName==="BUTTON")return t;t&&t.remove();const e=document.createElement("button");return e.id="waifu-toggle",e.type="button",e.title="\u6253\u5F00\u770B\u677F\u5A18",e.setAttribute("aria-label","\u6253\u5F00\u770B\u677F\u5A18"),e.textContent="\u732B",document.body.appendChild(e),e},r=t=>{const e=document.getElementById("waifu");!e||!s||(t?(e.style.display="",s.style.display="none"):(e.style.display="none",s.style.display="flex"),o()&&l(t))},f=()=>document.getElementById("waifu")?(s||(s=u(),s.addEventListener("click",()=>r(!0))),o()?r(d()):r(!0),!0):!1,m=setInterval(()=>{if(!f())return;const e=document.getElementById("waifu");!e||!s||(e.style.display==="none"&&(s.style.display="flex"),clearInterval(m))},150);document.addEventListener("click",t=>{const e=t.target;e instanceof Element&&e.closest('#waifu-tool .fa-times, #waifu-tool [data-tool="quit"]')&&r(!1)}),window.addEventListener("resize",()=>{document.getElementById("waifu")&&(o()?r(d()):r(!0))})})(),console.log(`
%cLive2D%cWidget%c
`,"padding: 8px; background: #cd3e45; font-weight: bold; font-size: large; color: white;","padding: 8px; background: #ff5450; font-size: large; color: #eee;","");
