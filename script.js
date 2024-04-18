'use strict'

let open = false
let slideCounter = 1;
let isMobile = false;

document.querySelector('#btnMenu').addEventListener('click', e => {
    open = !open;
    toggleMenu();
})

document.querySelector('#botao1').addEventListener('click', e => {
    open = false;
    toggleMenu();
    trocarImagem();
})

document.querySelector('#botao2').addEventListener('click', e => {
    open = false;
    toggleMenu();
    trocarImagem();
})

document.querySelector('#botao3').addEventListener('click', e => {
    open = false;
    toggleMenu();
    trocarImagem();
})

document.querySelector('#botao4').addEventListener('click', e => {
    open = false;
    toggleMenu();
    trocarImagem();
})

function toggleMenu() {
    if (open) {
        /*Abre o menu*/
        document.querySelector('#menu').style.visibility = 'visible';
        document.querySelector('#menu').style.opacity = '1';
        document.querySelector('#menu').style.transition = "opacity .7s ease-in-out";
        document.querySelector('#idioma').style.visibility = 'visible';
        document.querySelector('#idioma').style.opacity = '1';
        document.querySelector('#idioma').style.transition = "opacity .7s ease-in-out";
        isMobile = true
        return;
    } 
    
    if (isMobile == true) {
        /*Fecha o menu*/
        document.querySelector('#menu').style.opacity = '0';
        document.querySelector('#menu').style.transition = "opacity .7s ease-in-out";
        document.querySelector('#idioma').style.opacity = '0';
        document.querySelector('#idioma').style.transition = "opacity .7s ease-in-out";
        setTimeout(function(){
            document.querySelector('#menu').style.visibility = 'hidden';
            document.querySelector('#idioma').style.visibility = 'hidden';
        }, 700);
    } 
    
}




window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40)
    {
        document.getElementById("topo").style.height = "80px";
              
        document.getElementById("logo").style.height = "100px";

        document.getElementById("topo").style.transition = ".5s";

        document.getElementById("logo").style.transition = ".5s";

        document.getElementById("menu").style.top = "80px";

        document.getElementById("menu").style.transition = ".5s";

        document.getElementById("idioma").style.top = "130px";

        document.getElementById("idioma").style.transition = ".5s";
    } 
    else {
        document.getElementById("topo").style.height = "150px";
                      
        document.getElementById("logo").style.height = "145px";

        document.getElementById("menu").style.top = "150px";

        document.getElementById("menu").style.transition = ".5s"

        document.getElementById("idioma").style.top = "200px";

        document.getElementById("idioma").style.transition = ".5s"
    }
}

const btnImage = document.getElementById("btnMenu");

function trocarImagem() {
    if (open == false) {
        btnImage.src = "./assets/menu-mobile/menu-hamburguer.png";
        document.getElementById("btnMenu").style.transition = ".7s"
        return;
    } else {
        
        btnImage.src = "./assets/menu-mobile/menu-fechar.png";
        document.getElementById("btnMenu").style.transition = ".7s"
        return;
    }
  }

document.getElementById("btnMenu").addEventListener("click", trocarImagem);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

// function nativeScroll(distanceFromTheTop) {
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth",
//   });
// }

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 700;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}