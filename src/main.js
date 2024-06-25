const hamburger = document.getElementById('hamburger');
const navmenu = document.getElementById('nav-menu')
const closeicon = document.getElementById('nav-close')
const navlink = document.querySelectorAll(".nav__link")

navlink.forEach(link=>
    link.addEventListener("click",()=>{
navmenu.classList.add('hidden')
    })
)

closeicon.addEventListener("click",()=>{
    navmenu.classList.add("hidden")
})

hamburger.addEventListener("click",()=>{
    navmenu.classList.remove("hidden")
})


//   TABS

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap")
const foods = document.querySelectorAll(".food")
const snacks = document.querySelectorAll(".snack")
const beverage = document.querySelectorAll(".beverage")
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => {
            t.classList.remove("active");
        });
        tab.classList.add('active');

   const tabval = tab.getAttribute('data-tabs')

all.forEach(item =>{
    item.style.display= 'none'
})

   if(tabval == 'food'){
    foods.forEach(item =>{
        item.style.display= 'block'
    })
   }else if(tabval == 'snack'){
    snacks.forEach(item =>{
        item.style.display= 'block'
    })

   }else if(tabval == 'beverage'){
    beverage.forEach(item =>{
        item.style.display= 'block'
    })
}else{

    all.forEach(item =>{
        item.style.display= 'block'
    })

}
    });
});

//  dark Mood
const  html= document.querySelector('html');
const themebtn = document.getElementById('theme-toggle');

if(localStorage.getItem("mode") == "dark"){
   darkmode();
}else{
    lightMode();
}

themebtn.addEventListener('click',()=>{
  if(localStorage.getItem("mode") == "light"){
    darkmode();
  }else{
    lightMode();
  }
})
 
function darkmode(){
    html.classList.add("dark");
    themebtn.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
}

function lightMode(){
    html.classList.remove("dark");
    themebtn.classList.replace("ri-sun-line","ri-moon-line");
    localStorage.setItem("mode","light");
}




//  scroll up btn

const scrollup = ()=>{
    const  scrollupbtn = document.getElementById("scroll-up");

    if(window.scrollY >= 250){
scrollupbtn.classList.remove("-bottom-1/2");
scrollupbtn.classList.add("bottom-4");

    }else{
        scrollupbtn.classList.add("-bottom-1/2");
        scrollupbtn.classList.remove("bottom-4");
    }
}


// scroll border
window.addEventListener('scroll',scrollup)

const scrollheader = () => {
    const header = document.getElementById("header");

    if (window.scrollY >= 50) {
        header.classList.add("border-b","border-secondaryColor");
        
    } else {
        header.classList.remove("border-b","border-secondaryColor");
    }
}

window.addEventListener('scroll', scrollheader);

// scroll section Active Link

const activeLink = () =>{
    const sections = document.querySelectorAll("section")
    const navlinks = document.querySelectorAll(".nav__link")
    let current = "home";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute('id')
        }
    })
    navlinks.forEach(item =>{
        item.classList.remove("text-secondaryColor");
        if(item.href.includes(current)){
            item.classList.add("text-secondaryColor")
        }
    });
};


window.addEventListener('scroll', activeLink)



// scroll reveeal Animation

const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration: 2500,
    delay:400
})

sr.reveal(".home__image")
sr.reveal(".home__content",{origin: "bottom"});
sr.reveal(".category__card",{interval:300})

sr.reveal(".promo__card-1",{origin: "left"});
sr.reveal(".promo__card-2",{origin: "right"});
sr.reveal(".about__img",{origin: "bottom"});
sr.reveal(".about__content",{origin: "top"});
sr.reveal(".menu__items",{origin: "left"});
sr.reveal(".costomer__review",{origin: "right"});
sr.reveal(".footer");