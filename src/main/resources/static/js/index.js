const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("open");
    });
});

const carouselTrack = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let currentSlide = 0;
let autoSlide;

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    carouselTrack.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle(
            "active",
            index === currentSlide
        );
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

nextButton.addEventListener("click", nextSlide);

previousButton.addEventListener("click", previousSlide);

dots.forEach((dot) => {

    dot.addEventListener("click", () => {

        const slideIndex = Number(
            dot.dataset.slide
        );

        showSlide(slideIndex);

        restartAutoSlide();
    });

});

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
}

function restartAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

showSlide(0);
startAutoSlide();

document.querySelectorAll(".add-product").forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button.dataset.name;
        alert(`${productName} foi adicionado ao pedido!`);

        document.getElementById("pedidos").scrollIntoView({ behavior: "smooth" });

        document.getElementById("product").value = productName;
    });
});

const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("name").value;
    const produto = document.getElementById("product").value;
    const quantidade = document.getElementById("quantity").value;

    if (!nome || !produto || !quantidade) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    alert(`Pedido realizado com sucesso, ${nome}!\nProduto: ${produto}\nQuantidade: ${quantidade}`);
    orderForm.reset();
});

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const senha = document.getElementById("password").value;

    if (!email || !senha) {
        alert("Informe e-mail e senha.");
        return;
    }
    alert(`Login realizado com sucesso!\nBem-vindo, ${email}.`);
    loginForm.reset();
});
