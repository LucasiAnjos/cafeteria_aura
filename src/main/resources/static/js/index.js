document.addEventListener("DOMContentLoaded", () => {

    // ====================================================
    // 1. MENU MOBILE
    // ====================================================

    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    if (menuButton && menu) {

        menuButton.addEventListener("click", () => {
            menu.classList.toggle("active");
            menu.classList.toggle("open");
        });

        document.querySelectorAll(".menu a").forEach((link) => {

            link.addEventListener("click", () => {
                menu.classList.remove("active");
                menu.classList.remove("open");
            });

        });

    }


    // ====================================================
    // 2. CARROSSEL
    // ====================================================

    const carouselTrack =
        document.getElementById("carouselTrack");

    const slides =
        document.querySelectorAll(".slide");

    const dots =
        document.querySelectorAll(".dot");

    const previousButton =
        document.getElementById("previous");

    const nextButton =
        document.getElementById("next");


    if (carouselTrack && slides.length > 0) {

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

            dots.forEach((dot, idx) => {

                dot.classList.toggle(
                    "active",
                    idx === currentSlide
                );

            });

        }


        function nextSlide() {
            showSlide(currentSlide + 1);
        }


        function previousSlide() {
            showSlide(currentSlide - 1);
        }


        function startAutoSlide() {

            clearInterval(autoSlide);

            autoSlide = setInterval(
                nextSlide,
                5000
            );

        }


        function restartAutoSlide() {

            clearInterval(autoSlide);

            startAutoSlide();

        }


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                () => {

                    nextSlide();
                    restartAutoSlide();

                }
            );

        }


        if (previousButton) {

            previousButton.addEventListener(
                "click",
                () => {

                    previousSlide();
                    restartAutoSlide();

                }
            );

        }


        dots.forEach((dot) => {

            dot.addEventListener(
                "click",
                () => {

                    const slideIndex =
                        Number(dot.dataset.slide);

                    showSlide(slideIndex);
                    restartAutoSlide();

                }
            );

        });


        showSlide(0);
        startAutoSlide();

    }


    // ====================================================
    // 3. ADICIONAR PRODUTO AO PEDIDO
    // ====================================================

    document
        .querySelectorAll(".add-product")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const productName =
                    button.dataset.name;

                alert(
                    `${productName} foi adicionado ao pedido!`
                );


                const pedidosSection =
                    document.getElementById("pedidos");

                if (pedidosSection) {

                    pedidosSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }


                const productInput =
                    document.getElementById("product");

                if (productInput) {

                    productInput.value =
                        productName;

                }

            });

        });


    // ====================================================
    // 4. FORMULÁRIO DE PEDIDO
    // ====================================================

    const orderForm =
        document.getElementById("orderForm");


    if (orderForm) {

        orderForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const nome =
                    document
                        .getElementById("name")
                        ?.value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        ?.value
                        .trim();


                const telefone =
                    document
                        .getElementById("phone")
                        ?.value
                        .trim();


                const produto =
                    document
                        .getElementById("product")
                        ?.value
                        .trim();


                const quantidade =
                    document
                        .getElementById("quantity")
                        ?.value;


                const observacoes =
                    document
                        .getElementById("observations")
                        ?.value
                        .trim();


                if (
                    !nome ||
                    !email ||
                    !telefone ||
                    !produto ||
                    !quantidade
                ) {

                    alert(
                        "Preencha todos os campos obrigatórios."
                    );

                    return;

                }


                let pedidos =
                    JSON.parse(
                        localStorage.getItem(
                            "cafeAuraPedidos"
                        )
                    ) || [];


                const novoPedido = {

                    id: Date.now(),

                    nome: nome,

                    email: email,

                    telefone: telefone,

                    produto: produto,

                    quantidade: Number(quantidade),

                    observacoes:
                        observacoes || "Nenhuma",

                    status: "atendimento",

                    data:
                        new Date().toLocaleString(
                            "pt-BR"
                        )

                };


                pedidos.push(novoPedido);


                localStorage.setItem(
                    "cafeAuraPedidos",
                    JSON.stringify(pedidos)
                );


                alert(
                    `Pedido realizado com sucesso, ${nome}!\n\n` +
                    `Produto: ${produto}\n` +
                    `Quantidade: ${quantidade}\n\n` +
                    `Seu pedido foi enviado para atendimento.`
                );


                orderForm.reset();

            }
        );

<<<<<<< HEAD
=======
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
>>>>>>> bfb9820f16b444f00b93d9db7c236fa87c526f66
    }


    // ====================================================
    // 5. LOGIN DO CLIENTE
    // ====================================================

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const email =
                    document
                        .getElementById("loginEmail")
                        ?.value
                        .trim();


                const senha =
                    document
                        .getElementById("password")
                        ?.value;


                if (!email || !senha) {

                    alert(
                        "Informe e-mail e senha."
                    );

                    return;

                }


                alert(
                    `Login realizado com sucesso!\n\nBem-vindo, ${email}.`
                );


                loginForm.reset();

            }
        );

    }
<<<<<<< HEAD


    // ====================================================
    // 6. FILTRO DE PRODUTOS
    // ====================================================

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const productCards =
        document.querySelectorAll(".product-card");


    if (
        filterButtons.length > 0 &&
        productCards.length > 0
    ) {

        filterButtons.forEach((btn) => {

            btn.addEventListener("click", () => {

                const selectedFilter =
                    btn.dataset.filter;


                filterButtons.forEach((b) => {

                    b.classList.remove("active");

                });


                btn.classList.add("active");


                productCards.forEach((card) => {

                    const cardCategory =
                        card.dataset.category || "";


                    const categories =
                        cardCategory.split(" ");


                    if (
                        selectedFilter === "todos" ||
                        categories.includes(selectedFilter)
                    ) {

                        card.style.display = "";

                        card.classList.remove(
                            "hidden"
                        );

                    } else {

                        card.style.display = "none";

                        card.classList.add(
                            "hidden"
                        );

                    }

                });

            });

        });

    }


    // ====================================================
    // 7. LOGIN DO FUNCIONÁRIO
    // ====================================================

    const adminLoginForm =
        document.getElementById("adminLoginForm");

    const adminLoginArea =
        document.getElementById("adminLoginArea");

    const adminManagement =
        document.getElementById("adminManagement");

    const adminLogoutButton =
        document.getElementById("adminLogoutButton");

    const adminEmailInput =
        document.getElementById("adminEmail");

    const adminPasswordInput =
        document.getElementById("adminPassword");


    // ====================================================
    // CREDENCIAIS DO FUNCIONÁRIO
    // ====================================================

    const funcionarioEmail =
        "funcionario@cafeaura.com";

    const funcionarioSenha =
        "123456";


    // ====================================================
    // CHAVE DA SESSÃO
    // ====================================================

    const ADMIN_SESSION_KEY =
        "cafeAuraFuncionarioLogado";


    // ====================================================
    // VERIFICAR LOGIN
    // ====================================================

    function funcionarioEstaLogado() {

        return (
            sessionStorage.getItem(
                ADMIN_SESSION_KEY
            ) === "true"
        );

    }


    // ====================================================
    // MOSTRAR GESTÃO DE PEDIDOS
    // ====================================================

    function mostrarGestaoPedidos() {

        if (adminLoginArea) {

            adminLoginArea.style.display =
                "none";

        }


        if (adminManagement) {

            adminManagement.style.display =
                "block";

        }


        carregarPedidosAdmin();

    }


    // ====================================================
    // MOSTRAR LOGIN DO FUNCIONÁRIO
    // ====================================================

    function mostrarLoginFuncionario() {

        if (adminLoginArea) {

            adminLoginArea.style.display =
                "block";

        }


        if (adminManagement) {

            adminManagement.style.display =
                "none";

        }

    }


    // ====================================================
    // VERIFICAR ESTADO INICIAL
    // ====================================================

    if (
        adminLoginForm ||
        adminLoginArea ||
        adminManagement
    ) {

        if (funcionarioEstaLogado()) {

            mostrarGestaoPedidos();

        } else {

            mostrarLoginFuncionario();

        }

    }


    // ====================================================
    // LOGIN DO FUNCIONÁRIO
    // ====================================================

    if (adminLoginForm) {

        adminLoginForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const email =
                    adminEmailInput
                        ?.value
                        .trim();


                const senha =
                    adminPasswordInput
                        ?.value;


                if (!email || !senha) {

                    alert(
                        "Informe o e-mail e a senha do funcionário."
                    );

                    return;

                }


                // ------------------------------------------
                // VERIFICAR CREDENCIAIS
                // ------------------------------------------

                if (
                    email === funcionarioEmail &&
                    senha === funcionarioSenha
                ) {

                    // SALVAR LOGIN NA SESSÃO
                    sessionStorage.setItem(
                        ADMIN_SESSION_KEY,
                        "true"
                    );


                    // LIMPAR FORMULÁRIO
                    adminLoginForm.reset();


                    // MOSTRAR GESTÃO IMEDIATAMENTE
                    mostrarGestaoPedidos();


                    alert(
                        "Login realizado com sucesso!\n\n" +
                        "Bem-vindo à Gestão de Pedidos do Café Aura."
                    );

                } else {

                    alert(
                        "E-mail ou senha do funcionário incorretos."
                    );

                }

            }
        );

    }


    // ====================================================
    // 8. SAIR DA ADMINISTRAÇÃO
    // ====================================================

    if (adminLogoutButton) {

        adminLogoutButton.addEventListener(
            "click",
            () => {

                sessionStorage.removeItem(
                    ADMIN_SESSION_KEY
                );


                mostrarLoginFuncionario();


                alert(
                    "Você saiu da Gestão de Pedidos."
                );

            }
        );

    }


    // ====================================================
    // 9. BOTÕES DE STATUS DOS PEDIDOS
    // ====================================================

    const pendingButton =
        document.getElementById("pendingButton");

    const finishedButton =
        document.getElementById("finishedButton");

    const pendingOrders =
        document.getElementById("pendingOrders");

    const finishedOrders =
        document.getElementById("finishedOrders");


    function mostrarPedidosEmAtendimento() {

        if (pendingButton) {

            pendingButton.classList.add("active");

        }


        if (finishedButton) {

            finishedButton.classList.remove("active");

        }


        if (pendingOrders) {

            pendingOrders.classList.add("active");
            pendingOrders.style.display = "block";

        }


        if (finishedOrders) {

            finishedOrders.classList.remove("active");
            finishedOrders.style.display = "none";

        }

    }


    function mostrarPedidosFinalizados() {

        if (finishedButton) {

            finishedButton.classList.add("active");

        }


        if (pendingButton) {

            pendingButton.classList.remove("active");

        }


        if (finishedOrders) {

            finishedOrders.classList.add("active");
            finishedOrders.style.display = "block";

        }


        if (pendingOrders) {

            pendingOrders.classList.remove("active");
            pendingOrders.style.display = "none";

        }

    }


    if (pendingButton) {

        pendingButton.addEventListener(
            "click",
            () => {

                mostrarPedidosEmAtendimento();

            }
        );

    }


    if (finishedButton) {

        finishedButton.addEventListener(
            "click",
            () => {

                mostrarPedidosFinalizados();

            }
        );

    }


    // ====================================================
    // 10. CARREGAR PEDIDOS
    // ====================================================

    function carregarPedidosAdmin() {

        const pendingList =
            document.getElementById(
                "pendingOrdersList"
            );

        const finishedList =
            document.getElementById(
                "finishedOrdersList"
            );


        if (
            !pendingList ||
            !finishedList
        ) {

            return;

        }


        // ------------------------------------------
        // PEGAR PEDIDOS
        // ------------------------------------------

        let pedidos =
            JSON.parse(
                localStorage.getItem(
                    "cafeAuraPedidos"
                )
            ) || [];


        // ------------------------------------------
        // SEPARAR PEDIDOS
        // ------------------------------------------

        const pedidosAtendimento =
            pedidos.filter(
                (pedido) =>
                    pedido.status === "atendimento"
            );


        const pedidosFinalizados =
            pedidos.filter(
                (pedido) =>
                    pedido.status === "finalizado"
            );


        // ------------------------------------------
        // CONTADORES
        // ------------------------------------------

        const pendingCount =
            document.getElementById(
                "pendingCount"
            );

        const finishedCount =
            document.getElementById(
                "finishedCount"
            );


        if (pendingCount) {

            pendingCount.textContent =
                pedidosAtendimento.length;

        }


        if (finishedCount) {

            finishedCount.textContent =
                pedidosFinalizados.length;

        }


        // ------------------------------------------
        // LIMPAR LISTAS
        // ------------------------------------------

        pendingList.innerHTML = "";

        finishedList.innerHTML = "";


        // ====================================================
        // PEDIDOS EM ATENDIMENTO
        // ====================================================

        if (
            pedidosAtendimento.length === 0
        ) {

            pendingList.innerHTML = `

                <div class="empty-orders">

                    <i class="fa-solid fa-mug-saucer"></i>

                    <h3>
                        Nenhum pedido em atendimento
                    </h3>

                    <p>
                        Quando novos pedidos forem realizados,
                        eles aparecerão aqui.
                    </p>

                </div>

            `;

        } else {

            pedidosAtendimento.forEach(
                (pedido) => {

                    pendingList.appendChild(
                        criarCardPedido(pedido)
                    );

                }
            );

        }


        // ====================================================
        // PEDIDOS FINALIZADOS
        // ====================================================

        if (
            pedidosFinalizados.length === 0
        ) {

            finishedList.innerHTML = `

                <div class="empty-orders">

                    <i class="fa-solid fa-circle-check"></i>

                    <h3>
                        Nenhum pedido finalizado
                    </h3>

                    <p>
                        Os pedidos concluídos aparecerão aqui.
                    </p>

                </div>

            `;

        } else {

            pedidosFinalizados.forEach(
                (pedido) => {

                    finishedList.appendChild(
                        criarCardPedido(pedido)
                    );

                }
            );

        }


        // Sempre começar em "Em atendimento"
        mostrarPedidosEmAtendimento();

    }


    // ====================================================
    // 11. CRIAR CARD DO PEDIDO
    // ====================================================

    function criarCardPedido(pedido) {

        const card =
            document.createElement("div");


        card.className =
            "order-admin-card";


        if (
            pedido.status === "finalizado"
        ) {

            card.classList.add("finished");

        }


        const info =
            document.createElement("div");


        info.className =
            "order-admin-info";


        info.innerHTML = `

            <h3>
                Pedido #${pedido.id}
            </h3>

            <p>
                <strong>Cliente:</strong>
                ${escaparHTML(pedido.nome)}
            </p>

            <p>
                <strong>Produto:</strong>
                ${escaparHTML(pedido.produto)}
            </p>

            <p>
                <strong>Quantidade:</strong>
                ${pedido.quantidade}
            </p>

            <p>
                <strong>Email:</strong>
                ${escaparHTML(pedido.email)}
            </p>

            <p>
                <strong>Telefone:</strong>
                ${escaparHTML(pedido.telefone)}
            </p>

            <p>
                <strong>Observações:</strong>
                ${escaparHTML(pedido.observacoes)}
            </p>

            <p>
                <strong>Data:</strong>
                ${escaparHTML(pedido.data)}
            </p>

        `;


        const actions =
            document.createElement("div");


        actions.className =
            "order-admin-actions";


        if (
            pedido.status === "atendimento"
        ) {

            const finishButton =
                document.createElement("button");


            finishButton.type =
                "button";


            finishButton.className =
                "button";


            finishButton.innerHTML = `
                <i class="fa-solid fa-check"></i>
                Finalizar
            `;


            finishButton.addEventListener(
                "click",
                () => {

                    finalizarPedido(
                        pedido.id
                    );

                }
            );


            actions.appendChild(
                finishButton
            );

        } else {

            const finishedLabel =
                document.createElement("button");


            finishedLabel.type =
                "button";


            finishedLabel.className =
                "button";


            finishedLabel.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                Finalizado
            `;


            finishedLabel.disabled =
                true;


            actions.appendChild(
                finishedLabel
            );

        }


        card.appendChild(info);
        card.appendChild(actions);


        return card;

    }


    // ====================================================
    // 12. FINALIZAR PEDIDO
    // ====================================================

    function finalizarPedido(id) {

        if (!funcionarioEstaLogado()) {

            alert(
                "Você precisa estar logado como funcionário."
            );

            return;

        }


        let pedidos =
            JSON.parse(
                localStorage.getItem(
                    "cafeAuraPedidos"
                )
            ) || [];


        const pedido =
            pedidos.find(
                (item) =>
                    item.id === id
            );


        if (!pedido) {

            alert(
                "Pedido não encontrado."
            );

            return;

        }


        pedido.status =
            "finalizado";


        localStorage.setItem(
            "cafeAuraPedidos",
            JSON.stringify(pedidos)
        );


        alert(
            "Pedido finalizado com sucesso!"
        );


        carregarPedidosAdmin();

    }


    // ====================================================
    // 13. SEGURANÇA CONTRA HTML
    // ====================================================

    function escaparHTML(texto) {

        if (
            texto === undefined ||
            texto === null
        ) {

            return "";

        }


        return String(texto)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }

});
=======
    alert(`Login realizado com sucesso!\nBem-vindo, ${email}.`);
    loginForm.reset();
});
>>>>>>> bfb9820f16b444f00b93d9db7c236fa87c526f66
