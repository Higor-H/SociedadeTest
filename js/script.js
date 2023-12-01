// obter o elemento do link leia mais
const linkLeiaMais = document.getElementById('leia-mais');

const pop = document.getElementById('leia-mais-popup');

const closeBtn = document.querySelector('.close'); // ja que é classe pega com . na frente

function exibirPopup(){
    pop.style.display = 'block';
}

function fecharPopup(){
    pop.style.display = 'none';
}

linkLeiaMais.addEventListener('click', exibirPopup );

closeBtn.addEventListener('click', fecharPopup);


////////////////////////////////////////////////////////////

const lMF = document.getElementById('leia-maiss1');

const pops1 = document.getElementById('leia-mais-popups1');

const closeBtns1 = document.querySelector('.closes1'); // ja que é classe pega com . na frente

function exibirPopupf1(){
    pops1.style.display = 'block';
}

function fecharPopupf1(){
    pops1.style.display = 'none';
}

lMF.addEventListener('click', exibirPopupf1 );

closeBtns1.addEventListener('click', fecharPopupf1);

///////////////////////////////////////////////////////////////////

const leias2 = document.getElementById('leia-maiss2');

const pops2 = document.getElementById('leia-mais-popups2');

const closeBtns2 = document.querySelector('.closes2'); // ja que é classe pega com . na frente

function exibirPopups2(){
    pops2.style.display = 'block';
}

function fecharPopups2(){
    pops2.style.display = 'none';
}

leias2.addEventListener('click', exibirPopups2 );

closeBtns2.addEventListener('click', fecharPopups2);

///////////////////////////////////////////////////////////////////

const leias3 = document.getElementById('leia-maiss3');

const pops3 = document.getElementById('leia-mais-popups3');

const closeBtns3 = document.querySelector('.closes3'); // ja que é classe pega com . na frente

function exibirPopups3(){
    pops3.style.display = 'block';
}

function fecharPopups3(){
    pops3.style.display = 'none';
}

leias3.addEventListener('click', exibirPopups3 );

closeBtns3.addEventListener('click', fecharPopups3);

///////////////////////////////////////////////////////////////////

const leias4 = document.getElementById('leia-maiss4');

const pops4 = document.getElementById('leia-mais-popups4');

const closeBtns4 = document.querySelector('.closes4'); // ja que é classe pega com . na frente

function exibirPopups4(){
    pops4.style.display = 'block';
}

function fecharPopups4(){
    pops4.style.display = 'none';
}

leias4.addEventListener('click', exibirPopups4 );

closeBtns4.addEventListener('click', fecharPopups4);



/*Ativando o ID da navbar conforme a pagina em destaque*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < (offset + height)){
            navLinks.forEach(links => {
                links.classList.remove('ativa');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativa');

            });
        };

    });
};


// ====Scroll reveal JS (animação site ===)

ScrollReveal({
    distance: '100px',
    duration: 2000,
    delay: 10,
});

//clasees e tag são add dentro de aspas simples, separados com ,
ScrollReveal().reveal('.home-conteiner',{origin: 'top'});
ScrollReveal().reveal('.social-media',{origin: 'left'});
ScrollReveal().reveal('.home-conteiner h1',{origin: 'left'});
//Sobre
ScrollReveal().reveal('.sobre-img',{origin: 'left'});
ScrollReveal().reveal('.sobre-conteiner',{origin: 'right'});
//Serviços
//ScrollReveal().reveal('.servicos-conteiner',{origin: 'right'});
//Portifolio
ScrollReveal().reveal('.portifolio',{origin: 'bottom'});
//contatos
ScrollReveal().reveal('.contato form',{origin: 'bottom'});
ScrollReveal().reveal('.contato h2',{origin: 'bottom'});

// top, bottom, left, right


// =====Typed js (bib em JS) escreve multi texto na tela ===)

let config = new Typed('.texto-multiplo',{
    // A lista de frases que aparecerão
    // está string podem conter tags html
    strings: ["Desenvolvedor Front-End", "Designer", "Progamador", "Desenvolvedor Back-End"],
    // A velocidade que é digitado
    typeSpeed: 40,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

let configs = new Typed('.texto-multiplos',{
    // A lista de frases que aparecerão
    // está string podem conter tags html
    strings: ["Desenvolvedor Front-End", "Designer", "Progamador", "Desenvolvedor Back-End"],
    // A velocidade que é digitado
    typeSpeed: 40,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});



