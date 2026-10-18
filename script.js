const projects = [
  {
    name: "TaskFlow",
    category: "fullstack",
    type: "Full stack",
    desc: "Aplicação full stack multiusuário com autenticação, recuperação de senha, tarefas por prioridade e prazo, filtros e persistência em PostgreSQL.",
    stack: ["Python", "Flask", "PostgreSQL", "Brevo API", "HTML", "CSS"],
    accent: "#60a5fa",
    image: "assets/images/taskflow.png",
    live: "https://taskflow-5g4z.onrender.com/",
    repo: "https://github.com/JefersonAlvesrs/TaskFlow",
  },
  {
    name: "NovaStore",
    category: "frontend",
    type: "Frontend",
    desc: "E-commerce demonstrativo com 23 páginas, catálogo de 48 produtos, busca inteligente, filtros, favoritos, comparação, carrinho, checkout simulado e histórico local de pedidos.",
    stack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    accent: "#a78bfa",
    image: "assets/images/novastore.svg",
    live: "https://jefersonalvesrs.github.io/NovaStore/",
    repo: "https://github.com/JefersonAlvesrs/NovaStore",
  },
  {
    name: "Padaria Aurora",
    category: "comercial",
    type: "Site comercial",
    desc: "Site institucional de padaria com apresentação de produtos e contato.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "#f59e0b",
    image: "assets/images/padaria-aurora.png",
    live: "https://jefersonalvesrs.github.io/padaria-aurora/",
    repo: "https://github.com/JefersonAlvesrs/padaria-aurora",
  },
  {
    name: "Lancheria BR",
    category: "comercial",
    type: "Site comercial",
    desc: "Vitrine digital para lancheria com cardápio e contato.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "#ef4444",
    image: "assets/images/lancheria-br.png",
    live: "https://jefersonalvesrs.github.io/lancheria-br/",
    repo: "https://github.com/JefersonAlvesrs/lancheria-br",
  },
  {
    name: "Barbearia Dom",
    category: "comercial",
    type: "Site comercial",
    desc: "Site de barbearia com serviços e apresentação do estabelecimento.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "#d4a574",
    image: "assets/images/barbearia-dom.png",
    live: "https://jefersonalvesrs.github.io/barbearia-dom/",
    repo: "https://github.com/JefersonAlvesrs/barbearia-dom",
  },
  {
    name: "Oficina Torque Prime",
    category: "comercial",
    type: "Site comercial",
    desc: "Site de oficina mecânica com serviços, estrutura e orçamento demonstrativo.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "#f04438",
    image: "assets/images/torque-prime.jpg",
    live: "https://jefersonalvesrs.github.io/torque-prime/",
    repo: "https://github.com/JefersonAlvesrs/torque-prime",
  },
  {
    name: "Metalúrgica Vértice",
    category: "comercial",
    type: "Site comercial",
    desc: "Site institucional para empresa metalmecânica.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "#94a3b8",
    image: "assets/images/metalurgica-vertice.jpg",
    live: "https://jefersonalvesrs.github.io/metalurgica-vertice/",
    repo: "https://github.com/JefersonAlvesrs/metalurgica-vertice",
  },
  {
    name: "Clínica Odontológica Lumina",
    category: "comercial",
    type: "Site comercial",
    desc: "Site de clínica odontológica com tratamentos e contato demonstrativo.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "#74b9d1",
    image: "assets/images/clinica-lumina.jpg",
    live: "https://jefersonalvesrs.github.io/clinica-lumina/",
    repo: "https://github.com/JefersonAlvesrs/clinica-lumina",
  },
  {
    name: "Clínica Veterinária Fulcher",
    category: "comercial",
    type: "Site comercial",
    desc: "Conceito de clínica veterinária com serviços, dúvidas e contato.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "#65a68e",
    image: "assets/images/clinica-veterinaria-fulcher.jpg",
    live: "https://jefersonalvesrs.github.io/clinica-veterinaria-fulcher/",
    repo: "https://github.com/JefersonAlvesrs/clinica-veterinaria-fulcher",
  },
  {
    name: "Órbita",
    category: "frontend",
    type: "Frontend",
    desc: "Projeto de interface frontend para exploração visual e navegação.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "#8b5cf6",
    image: "assets/images/orbita.png",
    live: "https://jefersonalvesrs.github.io/orbita/",
    repo: "https://github.com/JefersonAlvesrs/orbita",
  },
  {
    name: "CineVerse",
    category: "frontend",
    type: "Frontend",
    desc: "Experiência visual de cinema e descoberta de filmes.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "#e879f9",
    image: "assets/images/cineverse.png",
    live: "https://jefersonalvesrs.github.io/CineVerse/",
    repo: "https://github.com/JefersonAlvesrs/CineVerse",
  },
  {
    name: "Apex Motors",
    category: "frontend",
    type: "Frontend",
    desc: "Projeto automotivo com foco em apresentação visual e experiência de navegação.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "#38bdf8",
    image: "assets/images/apex-motors.png",
    live: "https://jefersonalvesrs.github.io/Apex-Motors/",
    repo: "https://github.com/JefersonAlvesrs/Apex-Motors",
  },
  {
    name: "Atlas Travel",
    category: "frontend",
    type: "Frontend",
    desc: "Interface temática de viagens e destinos.",
    stack: ["HTML", "CSS", "JavaScript"],
    accent: "#2dd4bf",
    image: "assets/images/atlas-travel.png",
    live: "https://jefersonalvesrs.github.io/Atlas-Travel/",
    repo: "https://github.com/JefersonAlvesrs/Atlas-Travel",
  },
];
const cards = document.getElementById("cards");
const safe = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
function render(category = "todos") {
  const selected = projects.filter(
    (p) => category === "todos" || p.category === category,
  );
  cards.innerHTML = selected
    .map((p) => {
      const index = projects.indexOf(p);

      return `<article class="project-card" style="--accent:${p.accent}">
   <a class="project-cover project-cover-link" href="${p.live}" target="_blank" rel="noopener noreferrer" aria-label="Abrir site ${safe(p.name)}">
    <img src="${p.image}" alt="Captura do projeto ${safe(p.name)}" loading="lazy"><span class="cover-type">${safe(p.type)}</span>
   </a>
   <div class="project-info"><div class="project-top"><span>${safe(p.type)}</span><span>↗</span></div>
    <h3><a class="project-title-link" href="${p.live}" target="_blank" rel="noopener noreferrer">${safe(p.name)}</a></h3>
    <p>${safe(p.desc)}</p><div class="tags">${p.stack.map((t) => `<span>${safe(t)}</span>`).join("")}</div>
    <div class="project-actions"><a href="${p.live}" target="_blank" rel="noopener noreferrer" class="project-link primary">Ver site ↗</a>
     <a class="details-toggle" href="projeto.html?id=${index}">Ver projeto completo ↗</a></div>
   </div></article>`;
    })
    .join("");
}
render();
document.querySelectorAll(".filter").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((x) => {
      x.classList.remove("active");
      x.setAttribute("aria-pressed", "false");
    });
    b.classList.add("active");
    b.setAttribute("aria-pressed", "true");
    render(b.dataset.filter);
  }),
);
const menu = document.getElementById("menu"),
  nav = document.getElementById("navlinks");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Abrir menu");
  }),
);
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("back-top").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
});
