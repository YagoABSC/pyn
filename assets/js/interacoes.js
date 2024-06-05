document.addEventListener("DOMContentLoaded", function () {

// Typed.js initialization
new Typed('.digitando', {
    strings: ["Boa noite",
        "Esse PIN é sobre:",
        "Comunicação e TI",
        "Impacto e importância",
        "Apresentado por:",
        "O cara em pé olhando pra você."
    ],
    typeSpeed: 40,
    backSpeed: 0,
    showCursor: false,
    onComplete: function(self) {
        setTimeout(function() {
            window.location.href = "estagio3.html";            
        }, 1000); // 1 segundo após a conclusão
    }
   
});

});

document.addEventListener("DOMContentLoaded", function () {
new Typed('.soueu', {
    strings: ["Id: <span>Yago Aparecido</span>", 
    "Class: <span> Desenvolvedor</span>"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
    showCursor: false,
});
});
