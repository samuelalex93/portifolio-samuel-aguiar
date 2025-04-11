const translations = {
  en: {
    about: "About",
    projects: "Projects",
    featuredProjects: "Featured Projects",
    services: "Services",
    contact: "Contact",
    resume: "Resume",
    hi: "Hi! I'm",
    description:
      "With over 8 years of experience in the technology field, transforming needs into real, engaging and functional applications.<br>My passion for technology motivates me to develop systems that offer innovative and effective solutions to complex challenges.",
    myServices: "My services",
    helpCompany: "How can I help your company",
    websitesApps: "Websites and Apps",
    interfaceDev: "Interface development",
    servicesDescription: "Services and microservices development",
    devOpsDescription:
      "Implementation and management of production environment",
    contactTitle: "Contact",
    contactSubtitle: "Did you like my work? Let's get in touch",
    linkedin: "Linkedin",
    github: "GitHub",
    email: "E-mail",
  },
  pt: {
    about: "Sobre",
    projects: "Projetos",
    featuredProjects: "Projetos em destaque",
    services: "Serviços",
    contact: "Contato",
    resume: "Currículo",
    hi: "Olá! Eu sou",
    description:
      "Com mais de 8 anos de experiência na área de tecnologia, transformando necessidades em aplicações reais, envolventes e funcionais.<br>Minha paixão por tecnologia me motiva a desenvolver sistemas que oferecem soluções inovadoras e eficazes para desafios complexos.",
    myServices: "Meus serviços",
    helpCompany: "Como posso ajudar sua empresa",
    websitesApps: "Sites e Apps",
    interfaceDev: "Desenvolvimento de interfaces",
    servicesDescription: "Desenvolvimento de serviços e microsserviços",
    devOpsDescription: "Implementação e gerenciamento de ambiente de produção",
    contactTitle: "Contato",
    contactSubtitle: "Gostou do meu trabalho? Vamos entrar em contato",
    linkedin: "Linkedin",
    github: "GitHub",
    email: "E-mail",
  },
};

const setLanguage = (lang) => {
  let url =
    lang == "en" 
      ? "https://docs.google.com/document/d/e/2PACX-1vTIoGvayrFi08Mh3WS_UjOc2aTSBBfj0v6FX2JT5mti7dzm826iQbgwf8kd2gRDLQ/pub" 
      : "https://docs.google.com/document/d/e/2PACX-1vSjDCW0l3Csac8aE69HSMPtNA09Fp8Up3fS1wRObmWNq3-iWaTG3ydbGgj0jadRog/pub"
  const link = document.getElementById("myResumeLink");
  link.href = url;
  link.textContent = "Go to Resume";
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.innerHTML = translations[lang][key];
  });
};

const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navbar ul.menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('open');
});

const menuItems = menu.querySelectorAll('a, button');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
    }
  });
});