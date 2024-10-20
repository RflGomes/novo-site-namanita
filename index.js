  var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 18
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        1188: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});



// Validação do formulário
document.getElementById('contato-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: formData,
        });
        
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            e.target.reset();
        } else {
            alert('Erro ao enviar a mensagem.');
        }
    } catch (error) {
        console.error('Erro ao enviar a mensagem:', error);
    }
});

// Inicialização do AOS.js
AOS.init();
