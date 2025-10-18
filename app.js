console.log('app.js carregado');

  const links = {
    github: 'https://github.com/jrsilva-dev',
    linkedin: 'https://www.linkedin.com/in/jr-silva-014701296/',
    whatsapp: `https://wa.me/5584999339597?text=${encodeURIComponent("Olá! Encontrei seu link no Instagram e gostaria de conversar.")}`,
    portfolio: 'https://jrsilva-dev.github.io/jrsilva.dev-portifolio/'
    };

  document.getElementById('btnGithub').addEventListener('click', () => {
    window.open(links.github, '_blank');
  });

  document.getElementById('btnLinkedin').addEventListener('click', () => {
    window.open(links.linkedin, '_blank');
  });

  document.getElementById('btnWhatsapp').addEventListener('click', () => {
    window.open(links.whatsapp, '_blank');
  });

  document.getElementById('btnPortfolio').addEventListener('click', () => {
    window.open(links.portfolio, '_blank');
  });