import{A as w,S as l,a as g,E as b,b as y,c as v,K as h,i as f}from"./assets/vendor-C1eDU2B9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const E=document.querySelector(".about-accordion-container");new w(E,{openOnInit:[0],showMultiple:!1,duration:500,elementClass:"about-ac",panelClass:"about-ac-panel",triggerClass:"about-ac-btn"});new l(".about-skills",{navigation:{nextEl:".about-swiper-btn"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{invert:!0},grabCursor:!0,touchEventsTarget:"wrapper",slideClass:"about-skills-item",slideActiveClass:"about-skills-item-accent",wrapperClass:"about-skills-list",slidesPerView:2,loopedSlides:2,spaceBetween:1,loop:!0,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6,loopedSlides:6}}});new l(".projects-swiper-container",{modules:[g,b],direction:"horizontal",loop:!1,slidesPerView:1,spaceBetween:10,mousewheel:!0,effect:"cards",grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev",disabledClass:"projects-swiper-btn-disabled"}});const L=document.querySelector(".accordion");new w(L,{openOnInit:[],showMultiple:!1,duration:500,elementClass:"accordion-item",panelClass:"accordion-content",triggerClass:"btn-svg-opn"});const m=document.querySelectorAll(".btn-svg-opn");m.forEach(e=>{e.addEventListener("click",()=>{m.forEach(o=>{o!==e&&o.classList.remove("rotate")}),e.classList.toggle("rotate")})});const S=document.querySelector("#covers"),a=document.querySelector(".covers-wrapper");function k(e){e.forEach(o=>{o.isIntersecting?a.classList.add("animated"):a.classList.remove("animated")})}const q=new IntersectionObserver(k,{root:null,threshold:0});q.observe(S);function C(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;const o=e.target.currentSrc,r=y.create(`<div class="covers-full-image-wrapper">
      <img
        src="${o}"
        alt="${e.target.alt}"
        class="covers-full-image"
      />
      <button class="covers-close-button"></button>
    </div>`,{onShow:t=>{window.addEventListener("keydown",n);const s=t.element().querySelector(".covers-close-button");s&&s.addEventListener("click",()=>{t.close()})},onClose:t=>{window.removeEventListener("keydown",n)}});r.show();function n(t){t.code==="Escape"&&r.close()}}a.addEventListener("click",C);const p=document.querySelector(".js-reviews-box-list");v.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function j(){try{return(await v.get("/reviews")).data}catch{f.error({message:"Error fetching reviews. Please try again later.",position:"topRight"});return}}async function I(){try{const e=await j();if(!e||e.length===0){p.innerHTML='<li class="reviews-list-card">Not Found</li>';return}const o=e.map(r=>`
          <li class="swiper-slide reviews-list-card">
            <img src="${r.avatar_url}" 
                 loading="lazy" 
                 alt="${r.author}" 
                 class="reviews-card-img" 
                 width="48" height="48">
            <div class="reviews-card-desc">
              <h3 class="reviews-card-subtitle">${r.author}</h3>
              <div class="reviews-card-text">${r.review}</div>
            </div>
          </li>
        `).join("");p.innerHTML=o}catch{f.error({message:"Error rendering reviews. Please try again later.",position:"topRight"})}}async function P(){await I(),new l(".reviews-swiper",{modules:[h],direction:"horizontal",slidesPerView:1,spaceBetween:16,navigation:{nextEl:".js-reviews-btn-next",prevEl:".js-reviews-btn-previous"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}})}P();const B=document.querySelector(".work-t-modal"),c=document.querySelector(".work-t-form"),O=document.querySelector(".scroll"),d=document.querySelector(".work-t-modal"),V=document.querySelector(".work-t-input-email"),M=e=>{e.preventDefault();const o="https://portfolio-js.b.goit.study/api/requests";(t=>{const s={method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}};return fetch(`${o}`,s).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})})({email:"client@gmail.com",comment:"comments"}).then(t=>{B.classList.add("js-is-open"),O.classList.add("no-scroll"),c.reset(),console.log(t)}).catch(t=>{V.classList.add("js-input-email"),alert("Invalid Email"),console.log(t)});const n={email:c.elements.user_email.value.trim(),comments:c.elements.user_comments.value.trim()};console.log(n)};c.addEventListener("submit",M);const x=e=>{d.classList.add("disabled")};d.addEventListener("click",x);document.addEventListener("keydown",e=>{e.key==="Escape"&&D()});const D=e=>{d.classList.add("disabled")},u=document.querySelector(".js-menu-container"),T=document.querySelector(".js-open-menu"),$=document.querySelector(".js-close-menu");T.addEventListener("click",()=>{u.classList.add("is-open")});$.addEventListener("click",()=>{u.classList.remove("is-open")});const A=document.querySelectorAll(".mobile-nav-link");function N(){u.classList.remove("is-open")}A.forEach(e=>{e.addEventListener("click",o=>{const r=o.target.getAttribute("href");document.querySelector(r).scrollIntoView({behavior:"smooth"}),N()})});document.querySelector(".header-menu-click").addEventListener("click",function(){document.querySelector(".menu-click").classList.toggle("open")});document.getElementById("ToTop").addEventListener("click",function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});document.getElementById("OnBottom").addEventListener("click",function(e){e.preventDefault(),document.getElementById("work-together").scrollIntoView({behavior:"smooth"})});
//# sourceMappingURL=index.js.map
