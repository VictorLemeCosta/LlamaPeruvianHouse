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
        document.body.classList.add('menu-open');
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
        document.body.classList.remove('menu-open');
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
    scrollFunction();
};

function scrollFunction() {
  if (!open){  
  
    if (document.body.scrollTop > 40 ||
          document.documentElement.scrollTop > 40)
      {
          document.getElementById("topo").style.height = "80px";
                
          document.getElementById("logo").style.height = "100px";

          document.getElementById("topo").style.transition = ".5s";

          document.getElementById("logo").style.transition = ".5s";

          document.getElementById("menu").style.top = "80px";

          document.getElementById("menu").style.transition = ".5s";

          document.getElementById("menu-ul").style.transition = ".5s";

          document.getElementById("idioma").style.top = "110px";

          document.getElementById("idioma").style.transition = ".5s";
      }
      else {
          document.getElementById("topo").style.height = "150px";
                        
          document.getElementById("logo").style.height = "150px";

          document.getElementById("menu").style.top = "150px";

          document.getElementById("menu").style.transition = ".5s"

          document.getElementById("idioma").style.top = "165px";

          document.getElementById("idioma").style.transition = ".5s"
      }
  }
}

const btnImage = document.getElementById("btnMenu");

function trocarImagem() {
    if (open == false) {
        btnImage.src = "./assets/menu-mobile/menu-hamburguer.png";
        document.getElementById("btnMenu").style.transition = ".7s"
        document.getElementById("topo").style.height = "150px";
        document.getElementById("topo").style.transition = ".5s"
        document.getElementById("menu").style.top = "150px";
        document.getElementById("menu").style.transition = ".5s"
        document.getElementById("idioma").style.top = "165px";
        document.getElementById("idioma").style.transition = ".5s"
        document.getElementById("logo").style.height = "150px";
        document.getElementById("logo").style.transition = ".5s"
        return;
    } else {
        btnImage.src = "./assets/menu-mobile/menu-fechar.png";
        document.getElementById("btnMenu").style.transition = ".7s"
        document.getElementById("topo").style.height = "80px";
        document.getElementById("topo").style.transition = ".5s"
        document.getElementById("menu").style.top = "80px";
        document.getElementById("menu").style.transition = ".5s"
        document.getElementById("idioma").style.top = "110px";
        document.getElementById("idioma").style.transition = ".5s"
        document.getElementById("logo").style.height = "100px";
        document.getElementById("logo").style.transition = ".5s"
        document.getElementById("menu-ul").style.height = "calc(100vh - 80px)";
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

function exibirAlertaIfoodPT() {

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Nosso Ifood está desabilitado no momento.\n\n" + "Fique atento nas nossas redes sociais para saber quando estará disponível.",
    confirmButtonColor: "#ffcd00",
    iconColor: "#f51d1d"
  });

}

function exibirAlertaIfoodEN() {

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Our Ifood is currently disabled.\n\n" + "Stay tuned to our social media to know when it's available.",
    confirmButtonColor: "#ffcd00",
    iconColor: "#f51d1d"
  });
  
}

function exibirAlertaIfoodES() {

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Nuestro Ifood está desactivado en este momento\n\n" + "Mantente atento a nuestras redes sociales para saber cuándo estará disponible.",
    confirmButtonColor: "#ffcd00",
    iconColor: "#f51d1d"
  });
   
}

function redirectLinkPT () {
  Swal.fire({
    title: "Você será redirecionado para o WhatsApp",
    text: "Prossiga o atendimento com um atendente.",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#ffcd00",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#f51d1d",
    iconColor: "#ffcd00"
  }).then((result) => {
    // Se o usuário confirmar, redirecionar para o WhatsApp
    if (result.isConfirmed) {
      const whatsappLink = "https://wa.me/5511967224283/"; // Link do WhatsApp
      window.location.href = whatsappLink; // Redirecionar para o link do WhatsApp
    }
  }); 
}

function redirectLinkEN () {
  Swal.fire({
    title: "You will be redirected to WhatsApp.",
    text: "Continue with an attendant.",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Confirm",
    confirmButtonColor: "#ffcd00",
    cancelButtonText: "Cancel",
    cancelButtonColor: "#f51d1d",
    iconColor: "#ffcd00"
  }).then((result) => {
    // Se o usuário confirmar, redirecionar para o WhatsApp
    if (result.isConfirmed) {
      const whatsappLink = "https://wa.me/5511967224283/"; // Link do WhatsApp
      window.location.href = whatsappLink; // Redirecionar para o link do WhatsApp
    }
  }); 
}

function redirectLinkES () {
  Swal.fire({
    title: "Serás redirigido a WhatsApp.",
    text: "Continúa con un empleado.",
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#ffcd00",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#f51d1d",
    iconColor: "#ffcd00"
  }).then((result) => {
    // Se o usuário confirmar, redirecionar para o WhatsApp
    if (result.isConfirmed) {
      const whatsappLink = "https://wa.me/5511967224283/"; // Link do WhatsApp
      window.location.href = whatsappLink; // Redirecionar para o link do WhatsApp
    }
  }); 
}