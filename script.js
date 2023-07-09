function loco(){
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, 
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
https://zelt.app/assets/img/home/hero/sequence/1.webp
https://zelt.app/assets/img/home/hero/sequence/2.webp
https://zelt.app/assets/img/home/hero/sequence/3.webp
https://zelt.app/assets/img/home/hero/sequence/4.webp
https://zelt.app/assets/img/home/hero/sequence/5.webp
https://zelt.app/assets/img/home/hero/sequence/6.webp
https://zelt.app/assets/img/home/hero/sequence/7.webp
https://zelt.app/assets/img/home/hero/sequence/8.webp
https://zelt.app/assets/img/home/hero/sequence/9.webp
https://zelt.app/assets/img/home/hero/sequence/10.webp
https://zelt.app/assets/img/home/hero/sequence/11.webp
https://zelt.app/assets/img/home/hero/sequence/12.webp
https://zelt.app/assets/img/home/hero/sequence/13.webp
https://zelt.app/assets/img/home/hero/sequence/14.webp
https://zelt.app/assets/img/home/hero/sequence/15.webp
https://zelt.app/assets/img/home/hero/sequence/16.webp
https://zelt.app/assets/img/home/hero/sequence/17.webp
https://zelt.app/assets/img/home/hero/sequence/18.webp
https://zelt.app/assets/img/home/hero/sequence/19.webp
https://zelt.app/assets/img/home/hero/sequence/20.webp
https://zelt.app/assets/img/home/hero/sequence/21.webp
https://zelt.app/assets/img/home/hero/sequence/22.webp
https://zelt.app/assets/img/home/hero/sequence/23.webp
https://zelt.app/assets/img/home/hero/sequence/24.webp
https://zelt.app/assets/img/home/hero/sequence/25.webp
https://zelt.app/assets/img/home/hero/sequence/26.webp
https://zelt.app/assets/img/home/hero/sequence/27.webp
https://zelt.app/assets/img/home/hero/sequence/28.webp
https://zelt.app/assets/img/home/hero/sequence/29.webp
https://zelt.app/assets/img/home/hero/sequence/30.webp
https://zelt.app/assets/img/home/hero/sequence/31.webp
https://zelt.app/assets/img/home/hero/sequence/32.webp
https://zelt.app/assets/img/home/hero/sequence/33.webp
https://zelt.app/assets/img/home/hero/sequence/34.webp
https://zelt.app/assets/img/home/hero/sequence/35.webp
https://zelt.app/assets/img/home/hero/sequence/36.webp
https://zelt.app/assets/img/home/hero/sequence/37.webp
https://zelt.app/assets/img/home/hero/sequence/38.webp
https://zelt.app/assets/img/home/hero/sequence/39.webp
https://zelt.app/assets/img/home/hero/sequence/40.webp
https://zelt.app/assets/img/home/hero/sequence/41.webp
https://zelt.app/assets/img/home/hero/sequence/42.webp
https://zelt.app/assets/img/home/hero/sequence/43.webp
https://zelt.app/assets/img/home/hero/sequence/44.webp
https://zelt.app/assets/img/home/hero/sequence/45.webp
https://zelt.app/assets/img/home/hero/sequence/46.webp
https://zelt.app/assets/img/home/hero/sequence/47.webp
https://zelt.app/assets/img/home/hero/sequence/48.webp
https://zelt.app/assets/img/home/hero/sequence/49.webp
https://zelt.app/assets/img/home/hero/sequence/50.webp
https://zelt.app/assets/img/home/hero/sequence/51.webp
https://zelt.app/assets/img/home/hero/sequence/52.webp
https://zelt.app/assets/img/home/hero/sequence/53.webp
https://zelt.app/assets/img/home/hero/sequence/54.webp
https://zelt.app/assets/img/home/hero/sequence/55.webp
https://zelt.app/assets/img/home/hero/sequence/56.webp
https://zelt.app/assets/img/home/hero/sequence/57.webp
https://zelt.app/assets/img/home/hero/sequence/58.webp
https://zelt.app/assets/img/home/hero/sequence/59.webp
https://zelt.app/assets/img/home/hero/sequence/60.webp
https://zelt.app/assets/img/home/hero/sequence/61.webp
https://zelt.app/assets/img/home/hero/sequence/62.webp
https://zelt.app/assets/img/home/hero/sequence/63.webp
https://zelt.app/assets/img/home/hero/sequence/64.webp
https://zelt.app/assets/img/home/hero/sequence/65.webp
https://zelt.app/assets/img/home/hero/sequence/66.webp
https://zelt.app/assets/img/home/hero/sequence/67.webp
https://zelt.app/assets/img/home/hero/sequence/68.webp
https://zelt.app/assets/img/home/hero/sequence/69.webp
https://zelt.app/assets/img/home/hero/sequence/70.webp
https://zelt.app/assets/img/home/hero/sequence/71.webp
https://zelt.app/assets/img/home/hero/sequence/72.webp
https://zelt.app/assets/img/home/hero/sequence/73.webp
https://zelt.app/assets/img/home/hero/sequence/74.webp
https://zelt.app/assets/img/home/hero/sequence/75.webp
https://zelt.app/assets/img/home/hero/sequence/76.webp
https://zelt.app/assets/img/home/hero/sequence/77.webp
https://zelt.app/assets/img/home/hero/sequence/78.webp
https://zelt.app/assets/img/home/hero/sequence/79.webp
https://zelt.app/assets/img/home/hero/sequence/80.webp
https://zelt.app/assets/img/home/hero/sequence/81.webp
https://zelt.app/assets/img/home/hero/sequence/82.webp
https://zelt.app/assets/img/home/hero/sequence/83.webp
https://zelt.app/assets/img/home/hero/sequence/84.webp
https://zelt.app/assets/img/home/hero/sequence/85.webp
https://zelt.app/assets/img/home/hero/sequence/86.webp
https://zelt.app/assets/img/home/hero/sequence/87.webp
https://zelt.app/assets/img/home/hero/sequence/88.webp
https://zelt.app/assets/img/home/hero/sequence/89.webp
https://zelt.app/assets/img/home/hero/sequence/90.webp
https://zelt.app/assets/img/home/hero/sequence/91.webp
https://zelt.app/assets/img/home/hero/sequence/92.webp
https://zelt.app/assets/img/home/hero/sequence/93.webp
https://zelt.app/assets/img/home/hero/sequence/94.webp
https://zelt.app/assets/img/home/hero/sequence/95.webp
https://zelt.app/assets/img/home/hero/sequence/96.webp
https://zelt.app/assets/img/home/hero/sequence/97.webp
https://zelt.app/assets/img/home/hero/sequence/98.webp
https://zelt.app/assets/img/home/hero/sequence/99.webp
https://zelt.app/assets/img/home/hero/sequence/100.webp
https://zelt.app/assets/img/home/hero/sequence/101.webp
https://zelt.app/assets/img/home/hero/sequence/102.webp
https://zelt.app/assets/img/home/hero/sequence/103.webp
https://zelt.app/assets/img/home/hero/sequence/104.webp
https://zelt.app/assets/img/home/hero/sequence/105.webp
https://zelt.app/assets/img/home/hero/sequence/106.webp
https://zelt.app/assets/img/home/hero/sequence/107.webp
https://zelt.app/assets/img/home/hero/sequence/108.webp
https://zelt.app/assets/img/home/hero/sequence/109.webp
https://zelt.app/assets/img/home/hero/sequence/110.webp
https://zelt.app/assets/img/home/hero/sequence/111.webp
https://zelt.app/assets/img/home/hero/sequence/112.webp
https://zelt.app/assets/img/home/hero/sequence/113.webp
https://zelt.app/assets/img/home/hero/sequence/114.webp
https://zelt.app/assets/img/home/hero/sequence/115.webp
https://zelt.app/assets/img/home/hero/sequence/116.webp
https://zelt.app/assets/img/home/hero/sequence/117.webp
https://zelt.app/assets/img/home/hero/sequence/118.webp
`;
return data.split("\n")[index];
}

const frameCount = 118;


const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: 1,
  trigger: `#page`,
  start: `top top`,
  end: `400% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({
trigger: "#page",
pin: true,
// markers:true,
scroller: `#main`,
start: `top top`,
end: `400% top`,
});






gsap.to("#page>h1",{
  scrollTrigger:{
    trigger:"#page>h1",
    scroller:"#main",
    start:"top 16%",
    // markers:true,
    scrub:2
  },
  y:"-60vh"
})

gsap.to("#page>h2",{
  scrollTrigger:{
    trigger:"#page>h1",
    scroller:"#main",
    start:"top 16%",
    // markers:true,
    scrub:2
  },
  y:"-60vh"
})



gsap.to("#page>h4",{
  scrollTrigger:{
    trigger:"#page>h4",
    scroller:"#main",
    start:"top 47%",
    // markers:true,
    scrub:2
  },
  y:"-70vh"
})
gsap.to("#page1>h1",{
  scrollTrigger:{
    trigger:"#page>h4",
    scroller:"#main",
    start:"top 0%",
    // markers:true,
    scrub:2
  },
  y:"-180vh",
  duration:"1s"
})
gsap.to("#page1>h4",{
  scrollTrigger:{
    trigger:"#page>h4",
    scroller:"#main",
    start:"top 70%",
    scrub:2
  },
  y:"-180vh"
})



var ic1 = document.querySelector("#nav>#ic1")
var pro = document.querySelector("#nav>#pro")
ic1.addEventListener("mouseenter",function(){
    pro.style.scale = "1"
})
ic1.addEventListener("mouseleave",function(){
  pro.style.scale = "0"
})

ic1.addEventListener("m",function(){
  pro.style.scale = "1"
})
var ic2 = document.querySelector("#nav>#ic2")
var res = document.querySelector("#nav>#res")
ic2.addEventListener("mouseenter",function(){
    res.style.scale = "1"
})
ic2.addEventListener("mouseleave",function(){
  res.style.scale = "0"
})


var but = document.querySelector("#but")
var txt = document.querySelector("#but #txt")
but.addEventListener("mouseenter",function(){
    txt.style.top = "-70%"
})
but.addEventListener("mouseleave",function(){
  txt.style.top = "0"
})

var cli = document.querySelector("#click")
var head = document.querySelector("#cl1")
cli.addEventListener("mouseenter",function(){
    head.style.top = "-70%"
})
cli.addEventListener("mouseleave",function(){
  head.style.top = "0"
})





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 35,
  freeMode: true,
});


var iscroll = document.querySelector("#scroll")
var overlay = document.querySelector(".swiper")

overlay.addEventListener("mouseenter",function(){
    iscroll.style.scale = "1"
})
overlay.addEventListener("mouseleave",function(){
    iscroll.style.scale = "0"
})

overlay.addEventListener("mousemove",function(dets){
    iscroll.style.left = (dets.x-40)+"px",
    iscroll.style.top = (dets.y-140)+"px"
})









var h1 = document.querySelector("#page h1")

var clutter = ""

h1.textContent.split("").forEach(function(ele) {
    clutter += `<span>${ele}</span>` 
})

h1.innerHTML = clutter


gsap.to("#page h1 span",{
    opacity:1,
    stagger:.2,
    y:0,
    duration:2,
    ease:Expo
})

var h2 = document.querySelector("#page h2")

var clutter = ""

h2.textContent.split("").forEach(function(elem) {
    clutter += `<span>${elem}</span>` 
})

h2.innerHTML = clutter


gsap.to("#page h2 span",{
    opacity:1,
    stagger:.2,
    y:0,
    duration:2,
    ease:Expo,
    delay:3
})

gsap.to("#page h4",{
  opacity:1,
  stagger:.2,
  y:0,
  duration:2,
  ease:Expo,
  delay:6
})

gsap.to("#center",{
  scrollTrigger:{
    scroller:"#main",
        trigger:"#center",
        start:"top 100%",
        end:"top 50%"
  },
  scale:1,
  duration:1,
  ease:Expo
})
gsap.to("#right6 video",{
  scrollTrigger:{
    scroller:"#main",
        trigger:"#right6 video",
        start:"top 80%",
        // markers:true,
        scrub:1,
        end:"top 50%"
  },
  opacity:1,
  stagger:.2,
  y:-20,
  duration:2,
  ease:Expo,
})
gsap.to("#left6 h1",{
  scrollTrigger:{
    scroller:"#main",
        trigger:"#left6 h1",
        start:"top 80%",
        // markers:true,
        scrub:1,
        end:"top 50%"
  },
  opacity:1,
  stagger:.2,
  duration:2,
  ease:Expo,
})
gsap.to("#left6 h5",{
  scrollTrigger:{
    scroller:"#main",
        trigger:"#left6 h5",
        start:"top 80%",
        // markers:true,
        scrub:1,
        end:"top 50%"
  },
  opacity:1,
  stagger:.2,
  duration:2,
  ease:Expo,
})
gsap.to("#left7 video",{
  scrollTrigger:{
    scroller:"#main",
        trigger:"#left7 video",
        start:"top 80%",
        // markers:true,
        scrub:1,
        end:"top 50%"
  },
  opacity:1,
  stagger:.2,
  y:-20,
  duration:2,
  ease:Expo,
})
gsap.to("#right7 h1",{
  scrollTrigger:{
    scroller:"#main",
        trigger:"#right7 h1",
        start:"top 80%",
        // markers:true,
        scrub:1,
        end:"top 50%"
  },
  opacity:1,
  stagger:.2,
  duration:2,
  ease:Expo,
})
gsap.to("#right7 h5",{
  scrollTrigger:{
    scroller:"#main",
        trigger:"#right7 h5",
        start:"top 80%",
        // markers:true,
        scrub:1,
        end:"top 50%"
  },
  opacity:1,
  stagger:.2,
  duration:2,
  ease:Expo,
})
gsap.to("#left8 h1",{
  scrollTrigger:{
    scroller:"#main",
        trigger:"#left8 h1",
        start:"top 80%",
        // markers:true,
        scrub:1,
        end:"top 50%"
  },
  opacity:1,
  stagger:.2,
  duration:2,
  ease:Expo,
})
gsap.to("#left8 h5",{
  scrollTrigger:{
    scroller:"#main",
        trigger:"#left8 h5",
        start:"top 80%",
        // markers:true,
        scrub:1,
        end:"top 50%"
  },
  opacity:1,
  stagger:.2,
  duration:2,
  ease:Expo,
})
gsap.to("#right8 svg",{
  scrollTrigger:{
    scroller:"#main",
        trigger:"#right8 svg",
        start:"top 80%",
        // markers:true,
        scrub:1,
        end:"top 50%"
  },
  opacity:1,
  stagger:.2,
  y:-20,
  duration:2,
  ease:Expo,
})
gsap.to("#page10 h1",{
  scrollTrigger:{
    scroller:"#main",
        trigger:"#page10 h1",
        start:"top 90%",
        scrub:1,
        end:"top 80%"
  },
  scale:1,
  stagger:.2,
  duration: .5,
  ease:Expo,
})
gsap.to("#logos img",{
  scrollTrigger:{
    scroller:"#main",
        trigger:"#logos img",
        start:"top 90%",
        end:"top 80%"
  },
  scale:1,
  duration: .5,
  ease:Expo,
})
gsap.to(".abouts",{
  scrollTrigger:{
    scroller:"#main",
        trigger:".abouts",
        start:"top 100%",
        // markers:true,
        end:"top 50%"
  },
  scale:1,
  stagger:.2,
  y:-20,
  duration:2,
  ease:Expo,
})