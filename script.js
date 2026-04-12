// informações dinamicas dos botoes de quem somos
const tabData = {
    missao: {
        title: "Nossa missão",
        text: "Erradicar a invisibilidade civil através do suporte prático na obtenção de documentos básicos. Acreditamos que o registro é a porta de entrada para a dignidade e cidadania."
    },
    visao: {
        title: "Nossa visão",
        text: "Ser a principal rede de apoio na Bahia para a regularização civil. Queremos um estado onde nenhum cidadão seja invisível aos olhos da lei e todos tenham seus direitos garantidos."
    },
    valores: {
        title: "Nossos valores",
        text: "Dignidade, transparência e empatia acima de tudo. Atuamos com ética e compromisso social para transformar vidas através da justiça e do reconhecimento individual."
    },
    projeto: {
        title: "Para Além do Olhar",
        text: "Uma campanha que nasce para humanizar números. Vamos além da burocracia para acolher quem foi esquecido pelo sistema, transformando invisibilidade em pertencimento social."
    }
};

// logica da troca dos botoes
const buttons = document.querySelectorAll('.tab-btn');
const card = document.getElementById('tab-card');
const tabTitle = document.getElementById('tab-title');
const tabText = document.getElementById('tab-text');

buttons.forEach(btn => {
    btn.addEventListener('click', () => { //interações ao clicar (ativo x inativo)
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if(card) card.style.opacity = 0;
        
        setTimeout(() => { //altera ao clicar no botao de forma suave, com 0,2ms
            const data = tabData[btn.dataset.tab];
            if(tabTitle) tabTitle.innerText = data.title;
            if(tabText) tabText.innerText = data.text;
            if(card) card.style.opacity = 1;
        }, 200);
    });
});

// interação ao copiar chave pix
const copyBtn = document.getElementById('copy-pix');
const chavePix = "contato@paraalemdoolhar.org";

if(copyBtn) {
    copyBtn.addEventListener('click', () => { //com o clique muda a informação e fica verde
        navigator.clipboard.writeText(chavePix).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "CHAVE COPIADA!";
            copyBtn.style.backgroundColor = "#4CAF50";
            
            setTimeout(() => { //com o tempo volta ao amarelo padrao
                copyBtn.innerText = originalText;
                copyBtn.style.backgroundColor = "var(--amarelo)";
            }, 2000);
        });
    });
}

// menu hamburguer
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
    menuToggle.addEventListener('click', () => { //ativar/desativar menu
        navLinks.classList.toggle('active');
    });
}

// scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if(targetId !== "#" && targetElement) {
            if(navLinks) navLinks.classList.remove('active');

            const headerOffset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
//o scroll tem um mecanismo para direcionar a partir dos cliques nos links da pagina uma exepreiencia decente para o usuario
//ao definir a altura do header como 70, consigo fazer com que o usuario nao sofra com direcionamentos que bloqueiem sua visao do site, com o menu o atrapalhando, por exemplo
//alem desse direcionamento ser suave

// formulário
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formURL = "https://forms.gle/7XtFqgqWceSahvfU9"; //leva ao formulario externo do forms, ao preencher o faça parte da mudança na propria landpg
        window.open(formURL, '_blank');
        contactForm.reset();
    });
}
