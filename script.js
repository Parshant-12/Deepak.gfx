async function main(){

console.log("Made by Parshant :)");

document.querySelector(".section-1").classList.add('show-animation');

let shorts = document.querySelector(".scroll-container");
document.querySelector(".right-arrow").addEventListener("click", () => {
    const videoWidth = shorts.offsetWidth;
    shorts.scrollBy(videoWidth, 0);
});
document.querySelector(".left-arrow").addEventListener("click", () => {
    const videoWidth = shorts.offsetWidth;
    shorts.scrollBy(-videoWidth, 0); 
});


let video = document.querySelector(".vertical-scroll-container");
document.querySelector(".down-arrow").addEventListener("click", () => {
    const videoHeight = video.offsetHeight;
    video.scrollBy(0, videoHeight); 
});
document.querySelector(".up-arrow").addEventListener("click", () => {
    const videoHeight = video.offsetHeight;
    video.scrollBy(0, -videoHeight);
});

document.querySelector(".menu-btn").addEventListener("click",()=>{
    document.querySelector(".side-bar").style.right="0";
})
document.querySelector(".cross-img").addEventListener("click",()=>{
    document.querySelector(".side-bar").style.right="-90%";
})
document.querySelectorAll(".side-bar ul li").forEach(element => {
    element.addEventListener("click",()=>{
    document.querySelector(".side-bar").style.right="-90%";
})})


let sections = document.querySelectorAll('section');
window.onscroll= ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset= sec.offsetTop-150;
        let height= sec.offsetHeight;

        if(top>= offset && top < offset+height){
            sec.classList.add('show-animation');
        }
        else{
            sec.classList.remove('show-animation');
        }
    })
}
}
main();