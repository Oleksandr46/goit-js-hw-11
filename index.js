import{S as p,a as f,i as n}from"./assets/vendor-Bm2N4jGG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const l={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},d=new p(".gallery a",{captionsData:"alt"});function m(s){const t=s.map(({largeImageURL:a,webformatURL:i,tags:e,likes:r,views:o,comments:c,downloads:u})=>`<li class="gallery-item">
            <a href="${a}">
              <img class="gallery-img" src="${i}" alt="${e}" loading="lazy"/>
            </a>
            <div class="gallery-wrapper">
              <p class="wrapper-list"><b>likes</b>${r}</p>
              <p class="wrapper-list"><b>views</b>${o}</p>
              <p class="wrapper-list"><b>comments</b>${c}</p>
              <p class="wrapper-list"><b>downloads</b>${u}</p>
            </div>
          </li>`).join("");l.gallery.innerHTML=t,d.refresh()}function g(){l.gallery.innerHTML=""}function y(){l.loader.classList.add("visible")}function h(){l.loader.classList.remove("visible")}const b="https://pixabay.com/api/";function L(s){return f.get(b,{params:{key:"55068901-115bb3486aee025ccc29fb7ad",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const w={form:document.querySelector(".form")};w.form.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(t===""){n.error({message:"Please enter a search query"});return}g(),y(),L(t).then(a=>{if(a.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(a.hits)}).catch(a=>{n.error({message:"Something went wrong. Please try again later."})}).finally(()=>{h()}),s.target.reset()});
//# sourceMappingURL=index.js.map
