$(document).ready(function(){$(".list").click(function(){$(".list").removeClass("active"),$(this).addClass("active")});const t=document.querySelectorAll(".list");function e(){t.forEach(t=>t.classList.remove("active")),this.classList.add("active")}t.forEach(t=>t.addEventListener("click",e));const i=document.querySelector(".nav").querySelectorAll("li"),c=i.length,s=document.querySelectorAll(".section"),o=s.length;for(let t=0;t<c;t++)i[t].querySelector("a").addEventListener("click",function(){n();for(let t=0;t<c;t++)i[t].querySelector("a").classList.contains("active")&&r(t),i[t].classList.contains("active")&&r(t),i[t].querySelector("a").classList.remove("active"),i[t].classList.remove("active");this.classList.add("active"),a(this)});function n(){for(let t=0;t<o;t++)s[t].classList.remove("back-section")}function r(t){s[t].classList.add("back-section")}function a(t){for(let t=0;t<o;t++)s[t].classList.remove("active");const e=t.getAttribute("href").split("#")[1];document.querySelector("#"+e).classList.add("active")}function l(t){for(let e=0;e<c;e++){i[e].querySelector("a").classList.remove("active"),i[e].classList.remove("active");const c=t.getAttribute("href").split("#")[1];c===i[e].querySelector("a").getAttribute("href").split("#")[1]&&i[e].querySelector("a").classList.add("active"),c===i[e].querySelector("a").getAttribute("href").split("#")[1]&&i[e].classList.add("active")}}if(document.querySelector(".hire-me").addEventListener("click",function(){const t=this.getAttribute("data-section-index");a(this),l(this),n(),r(t)}),document.querySelector(".about-us").addEventListener("click",function(){const t=this.getAttribute("data-section-index");a(this),l(this),n(),r(t)}),jQuery(".mouse-cursor").length&&$("body")){const t=document.querySelector(".cursor-inner"),e=document.querySelector(".cursor-outer");let i,c=0,s=!1;window.onmousemove=function(o){s||(e.style.transform="translate("+o.clientX+"px, "+o.clientY+"px)"),t.style.transform="translate("+o.clientX+"px, "+o.clientY+"px)",i=o.clientY,c=o.clientX},$("body").on("mouseenter","a,.trigger, .cursor-pointer",function(){t.classList.add("cursor-hover"),e.classList.add("cursor-hover")}),$("body").on("mouseleave","a,.trigger, .cursor-pointer",function(){$(this).is("a")&&$(this).closest(".cursor-pointer").length||(t.classList.remove("cursor-hover"),e.classList.remove("cursor-hover"))}),t.style.visibility="visible",e.style.visibility="visible"}});var mixer=mixitup(".portfolio-list");$(".gallery a").attr("data-fancybox","mygallery"),$(".gallery a").each(function(){$(this).attr("data-caption",$(this).find("img").attr("alt")),$(this).attr("title",$(this).find("img").attr("alt"))}),$(".gallery a").fancybox(),$("[data-fancybox]").fancybox({selector:".mix:visible a",loop:!0,hash:!0,transitionEffect:"slide",clickContent:function(t,e){return"image"===t.type&&"next"}}),$(".funfacts-box").each(function(){var t=$(this).offset().top-window.innerHeight,e=$(this).find(".counter"),i=e.attr("data-to"),c=parseInt(e.attr("data-time"));t<$(window).scrollTop()&&$({countNum:e.text()}).animate({countNum:i},{duration:c,easing:"swing",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})});let btn=document.getElementById("b1");function mainDL(){const{Symbol:t,document:e,URL:i,File:c}=globalThis,{iterator:s}=t,o=t=>null!=t&&s in{object:t}&&"function"==typeof t[s],n=e.createElement.bind(e,"a"),{createObjectURL:r,revokeObjectURL:a}=i;!function({name:t="resume",mime:e="text/plain",charset:i="UTF-8",body:s="",url:l=r(new c(o(s)&&"string"!=typeof s?s:[s],t,{type:`${e};charset=${i}`,ending:"native"}))}={}){try{const c=n();c.download=t,c.href=l,c.type=`${e}; charset=${i}`,c.target="_self",c.click()}finally{a(l)}}()}btn.onclick=mainDL;