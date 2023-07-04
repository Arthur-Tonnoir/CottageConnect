let btnFrance = document.getElementById('France');
let btnUSA = document.getElementById('USA');
let btnEspagne = document.getElementById('Espagne');
let btnGermany = document.getElementById('Germany');
let nomLangue = document.getElementById('nomLangue');

btnFrance.style.display=`none`;

btnFrance.addEventListener('click',function(){
nomLangue.src = btnFrance.src;
btnFrance.style.display=`none`;
btnUSA.style.display=`block`;
btnEspagne.style.display=`block`;
btnGermany.style.display=`block`;
});

btnEspagne.addEventListener('click',function(){
nomLangue.src = btnEspagne.src;  
btnEspagne.style.display=`none`;
btnUSA.style.display=`block`;
btnFrance.style.display=`block`;
btnGermany.style.display=`block`;
});

btnUSA.addEventListener('click',function(){
 nomLangue.src = btnUSA.src;
 btnUSA.style.display=`none`;
btnFrance.style.display=`block`;
btnEspagne.style.display=`block`;
btnGermany.style.display=`block`;
});

 btnGermany.addEventListener('click',function(){
nomLangue.src = btnGermany.src;
btnGermany.style.display=`none`;
btnUSA.style.display=`block`;
btnEspagne.style.display=`block`;
btnFrance.style.display=`block`;
});

                                        // TEST RESET CSS

// Rétablir les propriétés CSS du <ul> avec la classe "sousderoulant2"
// function resetCSS() {
//     var element = document.querySelector(".sousderoulant2");
//     element.style.removeProperty("line-height");
//     element.style.removeProperty("width");
//   }
  
