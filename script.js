// Script para funcionalidades básicas do site
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar classe ativa ao item de menu correspondente à página atual
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('nav a');
    
    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('ativo');
        } else {
            link.classList.remove('ativo');
        }
    });
    
    // Simular adição de produtos ao carrinho
    const addToCartButtons = document.querySelectorAll('.btn-carrinho');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Produto adicionado ao carrinho!');
        });
    });
    
    // Validação simples do formulário de newsletter
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value && isValidEmail(emailInput.value)) {
                alert('Obrigado por assinar nossa newsletter!');
                emailInput.value = '';
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        });
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});