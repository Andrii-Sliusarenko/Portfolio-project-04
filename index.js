import{a as c,S as d,N as u,K as p,i as l}from"./assets/vendor-CBJa2cfl.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const n=document.querySelector(".js-reviews-box-list");c.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function f(){try{return(await c.get("/reviews")).data}catch{l.error({message:"Error fetching reviews. Please try again later.",position:"topRight"});return}}async function w(){try{const t=await f();if(!t||t.length===0){n.innerHTML='<li class="reviews-list-card">Not Found</li>';return}const s=t.map(i=>`
          <li class="swiper-slide reviews-list-card">
            <img src="${i.avatar_url}" 
                 loading="lazy" 
                 alt="${i.author}" 
                 class="reviews-card-img" 
                 width="48" height="48">
            <div class="reviews-card-desc">
              <h3 class="reviews-card-subtitle">${i.author}</h3>
              <div class="reviews-card-text">${i.review}</div>
            </div>
          </li>
        `).join("");n.innerHTML=s}catch{l.error({message:"Error rendering reviews. Please try again later.",position:"topRight"})}}async function g(){await w(),new d(".reviews-swiper",{modules:[u,p],direction:"horizontal",slidesPerView:1,spaceBetween:16,navigation:{nextEl:".js-reviews-btn-next",prevEl:".js-reviews-btn-previous"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}})}g();
//# sourceMappingURL=index.js.map
