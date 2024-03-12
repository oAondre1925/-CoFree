if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  };

const box = document.querySelectorAll('.scollUp');
window.addEventListener('scroll',checkScollUp);
checkScollUp();
function checkScollUp(){
    const triggerBottom = window.innerHeight/6 * 6.5;
    box.forEach(scollUp =>{
        const boxTop = scollUp.getBoundingClientRect().top; 
        if(boxTop<triggerBottom){
            scollUp.classList.add("show");
        }else {
            scollUp.classList.remove("show");
        }
    });
}


/*畫面至頂*/
let goTop = document.querySelector('.goTop');
goTop.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 若要平滑滾動，可以加入 behavior 選項
    });
})
let originalPosition = null;
let lastScrollTop = 0; //紀錄最後一次滾動位置

document.addEventListener('DOMContentLoaded', () => {
    const goTop = document.querySelector('.goTop');
    originalPosition = goTop.offsetTop; // 保存.goBack 元素原本的位置

    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY;
        if (currentScroll > lastScrollTop) {// 向下滾動
            if (currentScroll >= originalPosition) {
                goTop.style.transform = 'translateY(0)';
            }
        }else {
            goTop.style.transform = 'translateY(100vh)';//向上滾動
            lastScrollTop =0 ;//清空，這樣向下滾動的時候才能繼續執行if條件
        }
        lastScrollTop = currentScroll;//儲存當前位置數值
    });
});
/*畫面至頂*/




 /*側邊選單*/
function openMenu(){
    document.getElementById('menuBar').style.top='0';
    document.getElementById('menu').style.opacity='1';
    document.getElementById('closeMenu').style.display='block';
}
function closeMenu(){
    document.getElementById('menuBar').style.top='-120vh'
    document.getElementById('closeMenu').style.display='none';
}
 /*側邊選單*/


 let about = document.getElementById('about');
    about.addEventListener('click',function(){
    document.getElementById('menuBar').style.top='-1000%'
    document.getElementById('closeMenu').style.display='none';
    window.scrollTo({
        top: 650,
        behavior: 'smooth'  
    });
})
let brand = document.getElementById('brand');
    brand.addEventListener('click',function(){
    document.getElementById('menuBar').style.top='-1000%'
    document.getElementById('closeMenu').style.display='none';
    window.scrollTo({
        top: 1300,
        behavior: 'smooth' 
    });
})
let feature = document.getElementById('feature');
    feature.addEventListener('click',function(){
    document.getElementById('menuBar').style.top='-1000%'
    document.getElementById('closeMenu').style.display='none';
    window.scrollTo({
        top: 2500,
        behavior: 'smooth' 
    });
})
let menu = document.getElementById('sideMenu');
    menu.addEventListener('click',function(){
    document.getElementById('menuBar').style.top='-1000%'
    document.getElementById('closeMenu').style.display='none';
    window.scrollTo({
        top: 4300,
        behavior: 'smooth'
    });
})
let profile = document.getElementById('sideProfile');
    profile.addEventListener('click',function(){
    document.getElementById('menuBar').style.top='-1000%'
    document.getElementById('closeMenu').style.display='none';
    window.scrollTo({
        top: 6100,
        behavior: 'smooth' 
    });
})
let information = document.getElementById('information');
    information.addEventListener('click',function(){
    document.getElementById('menuBar').style.top='-1000%'
    document.getElementById('closeMenu').style.display='none';
    window.scrollTo({
        top: 6600,
        behavior: 'smooth'
    });
})

function preventScroll(event) {
    event.preventDefault();
  }
  window.addEventListener('wheel', preventScroll, { passive: false });
let time = 6;
let opening = document.querySelector('.opening');
let timer = setInterval(function() {
    time -= 1;

    if(time<=2){
        opening.classList.add('fade-out')
    }
    if(time <=1) {
        clearInterval(timer);
        opening.style.display ='none';
        window.removeEventListener('wheel', preventScroll, { passive: false });
    }
},1000);