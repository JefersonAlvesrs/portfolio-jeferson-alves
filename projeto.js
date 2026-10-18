const items = window.portfolioProjects || [];
const idx = Number(new URLSearchParams(location.search).get("id"));
const p =
  Number.isInteger(idx) && idx >= 0 && idx < items.length ? items[idx] : null;
const main = document.getElementById("detail-main");
const esc = (x) =>
  String(x).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const section = (title, content) =>
  `<section class="detail-section"><h2>${esc(title)}</h2>${content}</section>`;
const list = (arr) =>
  `<ul>${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
const task = {
  problem:
    "Organizar atividades pessoais em um único ambiente, permitindo que cada pessoa acompanhe seus prazos, prioridades e tarefas concluídas.",
  features: [
    "Cadastro, login e logout de usuários",
    "Criação, edição, conclusão, reabertura e exclusão de tarefas",
    "Prioridades baixa, média e alta, com ordenação",
    "Definição de prazos e identificação de tarefas atrasadas",
    "Filtros de tarefas e contadores por status",
    "Recuperação de senha por e-mail com token temporário",
  ],
  architecture: [
    "Frontend: páginas HTML e CSS renderizadas pelo Flask",
    "Backend: aplicação Python com rotas Flask e sessões de usuário",
    "Persistência: PostgreSQL acessado por psycopg2 e consultas SQL parametrizadas",
    "Otimização: reutilização de conexões por pool",
    "Integração externa: API HTTPS da Brevo para e-mails de recuperação de senha",
    "Hospedagem: aplicação publicada na Render; banco PostgreSQL",
  ],
  security: [
    "Senhas armazenadas com hash, usando utilitários do Werkzeug",
    "Proteção CSRF nos formulários via Flask-WTF",
    "Autorização por usuário nas operações de tarefas",
    "Tokens de recuperação assinados e com validade limitada",
    "Configurações de cookies de sessão e limitação de tentativas presentes em versões recentes do código",
  ],
  challenges: [
    "Migração e conexão com PostgreSQL hospedado",
    "Melhorias de desempenho e gerenciamento de conexões",
    "Fluxo de recuperação de senha e integração de e-mail",
    "Implementação de autenticação e controle de acesso",
  ],
};
if (!p) {
  main.innerHTML =
    '<h1>Projeto não encontrado</h1><p><a href="index.html#projetos">Voltar aos projetos</a></p>';
} else {
  document.title = p.name + " | Portfólio Jeferson Alves";
  let content = `<div class="detail-breadcrumb">Portfólio / Projetos / ${esc(p.name)}</div><div class="detail-eyebrow">${esc(p.type)}</div><h1>${esc(p.name)}</h1><p class="detail-lead">${esc(p.desc)}</p><div class="detail-tags">${p.stack.map((t) => `<span>${esc(t)}</span>`).join("")}</div><div class="detail-buttons"><a href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">Acessar projeto ↗</a><a class="secondary" href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer">Ver código no GitHub ↗</a></div><img class="detail-hero-image" src="${esc(p.image)}" alt="Captura da interface de ${esc(p.name)}">`;
  if (p.name === "TaskFlow") {
    const gallery = [
      ["painel.png", "Painel de gerenciamento de tarefas"],
      ["login.png", "Tela de autenticação"],
      ["cadastro.png", "Cadastro de novos usuários"],
    ];
    const galleryHtml = `<div class="task-gallery">${gallery.map(([file, label]) => `<figure><a href="assets/images/taskflow/${file}" target="_blank" rel="noopener"><img loading="lazy" src="assets/images/taskflow/${file}" alt="${esc(label)}"></a><figcaption>${esc(label)} · clique para ampliar ↗</figcaption></figure>`).join("")}</div>`;
    const arch = `<div class="architecture-flow"><div><strong>Interface web</strong><small>HTML, CSS, formulários responsivos</small></div><span>↕</span><div><strong>Aplicação Flask</strong><small>Rotas, autenticação, validações, regras de negócio</small></div><span>↙ ↘</span><div class="arch-branches"><div><strong>PostgreSQL · Supabase</strong><small>Usuários, tarefas e consultas SQL</small></div><div><strong>API Brevo</strong><small>E-mails de recuperação de senha</small></div></div></div>`;
    content +=
      section(
        "Visão geral e problema resolvido",
        `<p>O TaskFlow foi criado para centralizar a organização de tarefas pessoais em um sistema acessível pelo navegador. Cada usuário possui sua própria conta e pode acompanhar o que precisa fazer, definir prioridades e identificar atividades atrasadas.</p><p>O projeto reúne desenvolvimento de interface, backend, banco de dados relacional, autenticação e integração com serviço externo de e-mail.</p>`,
      ) +
      section("Galeria de telas reais", galleryHtml) +
      section(
        "Funcionalidades implementadas",
        list([
          "Cadastro, login e logout com sessões individuais",
          "Criação, edição e exclusão de tarefas",
          "Conclusão e reabertura de tarefas",
          "Prioridades baixa, média e alta, com ordenação",
          "Prazos e identificação de atividades atrasadas",
          "Filtros de tarefas pendentes, concluídas e atrasadas",
          "Contadores por situação no painel principal",
          "Recuperação de senha por e-mail com link temporário",
          "Interface adaptada para desktop e celular",
        ]),
      ) +
      section(
        "Arquitetura da aplicação",
        `<p>A interface envia formulários HTTP para rotas Flask. O backend valida a sessão e os dados, executa as operações no PostgreSQL e renderiza as páginas HTML. A recuperação de senha utiliza uma chamada HTTPS para a API da Brevo.</p>${arch}`,
      ) +
      section(
        "Tecnologias e serviços",
        `<div class="tech-grid"><div><h3>Frontend</h3><p>HTML, CSS e JavaScript</p></div><div><h3>Backend</h3><p>Python, Flask e Werkzeug</p></div><div><h3>Banco de dados</h3><p>PostgreSQL, psycopg2 e Supabase</p></div><div><h3>Integrações</h3><p>API REST/HTTPS da Brevo para e-mail transacional</p></div><div><h3>Segurança</h3><p>Flask-WTF, Flask-Limiter e itsdangerous</p></div><div><h3>Infraestrutura</h3><p>Render, Git e GitHub</p></div></div>`,
      ) +
      section(
        "Estrutura dos dados",
        `<p>O banco relacional mantém registros de <strong>usuários</strong> e <strong>tarefas</strong>. Cada tarefa pertence a um usuário por meio do identificador <code>usuario_id</code>. Operações de alteração e exclusão usam esse identificador na consulta para restringir o acesso aos próprios registros.</p><div class="tech-grid"><div><h3>Usuários</h3><p>Identificador, nome, e-mail e hash da senha.</p></div><div><h3>Tarefas</h3><p>Identificador, título, conclusão, prioridade, prazo e usuário responsável.</p></div></div>`,
      ) +
      section(
        "Segurança e validações no código",
        list([
          "Hash de senhas com Werkzeug, sem armazenamento em texto puro",
          "Proteção CSRF em formulários com Flask-WTF",
          "Consultas SQL parametrizadas para dados fornecidos pelo usuário",
          "Autorização por sessão e filtro de tarefas pelo identificador do usuário",
          "Limite de 5 tentativas de login por minuto e 3 solicitações de recuperação por hora (Flask-Limiter)",
          "Cookies de sessão configurados como Secure, HttpOnly e SameSite=Lax",
          "Sessão permanente com validade de 30 minutos, renovada durante a atividade",
          "Tokens de recuperação assinados, com expiração em 30 minutos e invalidação após mudança da senha",
          "Validação de senha com no mínimo 8 caracteres e confirmação na redefinição",
          "Configuração de credenciais por variáveis de ambiente",
        ]) +
          `<p class="detail-note">As medidas acima foram identificadas no código enviado. Isso não equivale a auditoria, teste de invasão ou certificação de segurança. O limitador utiliza armazenamento em memória por processo, uma limitação importante em ambientes com múltiplas instâncias.</p>`,
      ) +
      section(
        "Desafios técnicos e decisões",
        list([
          "Migração do protótipo com SQLite para PostgreSQL hospedado",
          "Implementação de pool de conexões para reduzir abertura repetida de conexões",
          "Integração de recuperação de senha com a API Brevo",
          "Configuração de cookies, proteção CSRF e limitação de tentativas",
          "Deploy da aplicação Flask na Render com banco em Supabase",
        ]),
      ) +
      section(
        "Próximos aprimoramentos",
        `<p>Como evolução do projeto, podem ser adicionados testes automatizados, observabilidade, aprimoramentos de acessibilidade e um armazenamento compartilhado para o limitador de requisições em cenários com múltiplos processos.</p>`,
      );
  } else {
    const extra = (window.projectDetails || {})[p.name];
    if (extra) {
      const screenshots = extra.gallery
        .map(
          (path, i) =>
            `<figure><a href="${esc(path)}" target="_blank" rel="noopener noreferrer"><img loading="lazy" src="${esc(path)}" alt="${extra.illustrativeGallery ? "Arte ilustrativa" : "Captura " + (i + 1)} de ${esc(p.name)}"></a><figcaption>${extra.illustrativeGallery ? "Arte ilustrativa" : "Captura real " + (i + 1)} · clique para ampliar ↗</figcaption></figure>`,
        )
        .join("");
      content +=
        section(
          "Sobre o projeto",
          `<p>${esc(p.desc)} O projeto apresenta uma solução visual e interativa voltada ao seu segmento, desenvolvida com HTML, CSS e JavaScript.</p><p class="detail-note">${esc(extra.context)}</p>`,
        ) +
        section("Funcionalidades e recursos", list(extra.features)) +
        section(
          extra.illustrativeGallery ? "Apresentação visual" : "Galeria de telas reais",
          `<div class="task-gallery">${screenshots}</div>`,
        ) +
        section("Tecnologias utilizadas", list(p.stack)) +
        section(
          "Implementação",
          `<p>Projeto organizado em arquivos de interface, estilos e scripts, com atenção à navegação, apresentação visual e adaptação a diferentes tamanhos de tela. Consulte o repositório para conhecer o código.</p>`,
        );
    } else {
      content +=
        section("Sobre o projeto", `<p>${esc(p.desc)}</p>`) +
        section("Tecnologias utilizadas", list(p.stack));
    }
  }
  main.innerHTML = content;
}
