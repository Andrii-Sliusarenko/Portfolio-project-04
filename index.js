import{A as u,S as l,a as c,N as p,K as w,i as d}from"./assets/vendor-L1swF1zh.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=document.querySelector(".about-accordion-container");new u(f,{openOnInit:[0],showMultiple:!1,duration:500,elementClass:"about-ac",panelClass:"about-ac-panel",triggerClass:"about-ac-btn"});new l(".about-skills",{navigation:{nextEl:".about-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{invert:!0},grabCursor:!0,touchEventsTarget:"wrapper",slideClass:"about-skills-item",slideActiveClass:"about-skills-item-accent",wrapperClass:"about-skills-list",slidesPerView:2,loopedSlides:2,spaceBetween:1,loop:!0,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:5,loopedSlides:5,spaceBetween:25}}});const n=document.querySelector(".js-reviews-box-list");c.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function g(){try{return(await c.get("/reviews")).data}catch{d.error({message:"Error fetching reviews. Please try again later.",position:"topRight"});return}}async function v(){try{const t=await g();if(!t||t.length===0){n.innerHTML='<li class="reviews-list-card">Not Found</li>';return}const i=t.map(s=>`
          <li class="swiper-slide reviews-list-card">
            <img src="${s.avatar_url}" 
                 loading="lazy" 
                 alt="${s.author}" 
                 class="reviews-card-img" 
                 width="48" height="48">
            <div class="reviews-card-desc">
              <h3 class="reviews-card-subtitle">${s.author}</h3>
              <div class="reviews-card-text">${s.review}</div>
            </div>
          </li>
        `).join("");n.innerHTML=i}catch{d.error({message:"Error rendering reviews. Please try again later.",position:"topRight"})}}async function b(){await v(),new l(".reviews-swiper",{modules:[p,w],direction:"horizontal",slidesPerView:1,spaceBetween:16,navigation:{nextEl:".js-reviews-btn-next",prevEl:".js-reviews-btn-previous"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}})}b();
//# sourceMappingURL=index.js.map
