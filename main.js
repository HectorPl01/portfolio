const body = document.body;
const toggleButton = document.getElementById("togglebutton");
const toggleimg = document.getElementById("toggleimg");

toggleButton.style.position = 'fixed';
toggleButton.style.top = '1rem';
toggleButton.style.right = '1rem';
toggleButton.style.padding = '0.5rem';
toggleButton.style.background = 'transparent';
toggleButton.style.border = 'none';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');

    if(toggleimg.src.includes("moon.png")){

        toggleimg.src = "sun.png";
    }else{
        toggleimg.src = "moon.png";
    }

    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }
});


const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlideIndex = 0;

function updateCarouselPosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(' + (-slideWidth * currentSlideIndex) + 'px)';
}

nextButton.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        updateCarouselPosition();
    }
});

prevButton.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateCarouselPosition();
    }
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('formMessage').textContent = "Por favor, insira um email válido.";
        return;
    }


    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('formMessage').textContent = "Por favor, insira um telefone válido.";
        return;
    }

    document.getElementById('formMessage').textContent = "Formulário enviado com sucesso!";
    
   
});


document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length <= 10) {
        e.target.value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
        e.target.value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
});

