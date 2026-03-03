const STORAGE_USERS = "plataformaEnel.users";
const STORAGE_SESSION = "plataformaEnel.session";
const STORAGE_LIVE_COMMENTS = "plataformaEnel.liveComments";
const QUIZ_POINTS_PER_QUESTION = 2;
const TEST_MODE = true;
const PHASE_VIDEO_FALLBACK = "./assets/enel/videos/Assinatura_ENEL.mov";

const TEST_ACCOUNT = {
  username: "usuário",
  password: "123",
};

const USER_PROFILE = {
  displayName: "Taline Souza",
  category: "Revendedor",
  photo: "./fotos/taline.jpeg",
};

const BASE_PHASES = [
  {
    id: 1,
    title: "Fase 1 - Fundamentos do Mercado Livre",
    description:
      "Entenda o que é o Mercado Livre de Energia, quem pode aderir e quais ganhos de previsibilidade e competitividade ele oferece.",
    videoSrc: "./assets/enel/videos/Enel_Energia_Preco_eco_Garan_video_02_web.mp4",
    questions: [
      {
        prompt: "O que é Mercado Livre de Energia?",
        options: [
          "Ambiente em que o consumidor pode escolher fornecedor e negociar energia.",
          "Sistema em que o consumidor paga energia sem contrato.",
          "Modalidade exclusiva de geração para distribuidoras.",
          "Plano de tarifa fixa obrigatória para todos os clientes.",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Quem pode migrar para o Mercado Livre de Energia?",
        options: [
          "Consumidores que atendem aos critérios regulatórios de demanda/consumo.",
          "Apenas residências com qualquer consumo mensal.",
          "Somente empresas do setor elétrico.",
          "Qualquer cliente sem necessidade de medição.",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Qual a diferença do Mercado Livre para a energia convencional?",
        options: [
          "No Mercado Livre há negociação de contratos; no convencional a compra é regulada e padronizada.",
          "No Mercado Livre não existem contratos formais.",
          "No convencional o cliente escolhe livremente qualquer fornecedor.",
          "Não existe diferença de modelo comercial entre os ambientes.",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Qual deve ser o consumo médio para entrar no Mercado Livre de Energia?",
        options: [
          "Depende do enquadramento regulatório e da demanda contratada da unidade consumidora.",
          "Não existe qualquer requisito técnico para migração.",
          "Somente clientes com consumo residencial muito baixo podem entrar.",
          "Apenas clientes com consumo idêntico em todos os meses.",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Quais são os dois modelos de operação do Mercado Livre de Energia?",
        options: [
          "Consumidor varejista e consumidor atacadista (agente na CCEE).",
          "Consumidor residencial e consumidor industrial apenas.",
          "Modelo sem contrato e modelo de tarifa fixa única.",
          "Operação local e operação internacional.",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Fase 2 - Estratégia de Contratação",
    description:
      "Aprenda como montar estratégia de compra, definir janela de contratação e equilibrar risco e oportunidade.",
    videoSrc: "./assets/enel/videos/fase-2.mp4",
    questions: [
      {
        prompt: "Uma boa estratégia de contratação deve considerar:",
        options: [
          "Apenas o menor preço do dia.",
          "Perfil de consumo, sazonalidade e risco.",
          "Somente previsão de 7 dias.",
          "A opinião de um único fornecedor.",
        ],
        correctIndex: 1,
      },
      {
        prompt: "A diversificação de contratos ajuda a:",
        options: [
          "Aumentar exposição sem controle.",
          "Reduzir volatilidade e aumentar segurança.",
          "Eliminar necessidade de monitoramento.",
          "Substituir análise de demanda.",
        ],
        correctIndex: 1,
      },
      {
        prompt: "O melhor momento de compra costuma depender de:",
        options: [
          "Cenários de preço e estratégia definida previamente.",
          "Apenas intuição do comprador.",
          "Cotação de um único dia no ano.",
          "Interrupção do consumo da unidade.",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Gestão ativa de energia significa:",
        options: [
          "Acompanhar mercado e ajustar posição quando necessário.",
          "Assinar contrato e nunca mais revisar.",
          "Comprar sempre o mesmo volume fixo.",
          "Ignorar variação do negócio.",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Um risco de não planejar contratação é:",
        options: [
          "Maior eficiência financeira.",
          "Exposição indesejada à variação de preços.",
          "Melhor previsibilidade mensal.",
          "Menor necessidade de governança.",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: 3,
    title: "Fase 3 - Gestão e Performance",
    description:
      "Consolide indicadores de desempenho energético e acompanhe resultados para ciclos contínuos de melhoria.",
    videoSrc: "./assets/enel/videos/fase-3.mp4",
    questions: [
      {
        prompt: "Um KPI importante em gestão de energia é:",
        options: [
          "Custo médio por MWh.",
          "Número de e-mails enviados.",
          "Quantidade de reuniões semanais.",
          "Volume de impressão mensal.",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Acompanhamento mensal permite:",
        options: [
          "Identificar desvios e agir rapidamente.",
          "Eliminar necessidade de análise histórica.",
          "Substituir contrato de energia.",
          "Dispensar governança interna.",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Relatórios executivos devem destacar:",
        options: [
          "Apenas detalhes técnicos sem conclusões.",
          "Resultados, riscos e próximas ações.",
          "Somente dados brutos sem contexto.",
          "Somente indicadores positivos.",
        ],
        correctIndex: 1,
      },
      {
        prompt: "Melhoria contínua em energia envolve:",
        options: [
          "Planejar, executar, medir e corrigir.",
          "Executar uma única vez e encerrar.",
          "Delegar sem indicadores.",
          "Evitar revisões periódicas.",
        ],
        correctIndex: 0,
      },
      {
        prompt: "Quando um objetivo de economia não é atingido, o correto é:",
        options: [
          "Ajustar estratégia com base em dados.",
          "Cancelar toda a operação.",
          "Ignorar o desvio por um semestre.",
          "Trocar de fornecedor sem análise.",
        ],
        correctIndex: 0,
      },
    ],
  },
];

const CHAT_CLIENT_QUESTION_POOL = [
  "Qual é a diferença entre mercado regulado e Mercado Livre de Energia?",
  "Quanto uma empresa consegue economizar ao migrar?",
  "Existe risco de ficar sem energia após a migração?",
  "Quais documentos são necessários para começar?",
  "Como funciona o contrato de fornecimento no mercado livre?",
  "Quem faz a gestão mensal do consumo e das faturas?",
  "Minha empresa é de médio porte. Já posso migrar?",
  "O que muda na operação da empresa depois da migração?",
  "Como eu comparo propostas de comercializadoras diferentes?",
  "Quanto tempo leva para concluir a migração?",
];

const PHASES = TEST_MODE ? forceFirstOptionAsCorrect(BASE_PHASES) : BASE_PHASES;

function forceFirstOptionAsCorrect(phases) {
  return phases.map((phase) => ({
    ...phase,
    questions: phase.questions.map((question) => {
      const safeIndex = Number.isInteger(question.correctIndex) ? question.correctIndex : 0;

      if (safeIndex <= 0 || safeIndex >= question.options.length) {
        return {
          ...question,
          correctIndex: 0,
        };
      }

      return {
        ...question,
        options: [question.options[safeIndex], ...question.options.filter((_, index) => index !== safeIndex)],
        correctIndex: 0,
      };
    }),
  }));
}

const elements = {
  loginView: document.getElementById("loginView"),
  dashboardView: document.getElementById("dashboardView"),
  loginForm: document.getElementById("loginForm"),
  usernameInput: document.getElementById("username"),
  passwordInput: document.getElementById("password"),
  loginError: document.getElementById("loginError"),
  profilePhoto: document.getElementById("profilePhoto"),
  profileName: document.getElementById("profileName"),
  profileCategory: document.getElementById("profileCategory"),
  profileLevel: document.getElementById("profileLevel"),
  logoutButton: document.getElementById("logoutButton"),
  tabButtons: Array.from(document.querySelectorAll(".tab-button")),
  tabPanels: Array.from(document.querySelectorAll(".tab-panel")),
  phaseMap: document.getElementById("phaseMap"),
  missionTitle: document.getElementById("missionTitle"),
  missionSubtitle: document.getElementById("missionSubtitle"),
  phaseEmpty: document.getElementById("phaseEmpty"),
  phaseMission: document.getElementById("phaseMission"),
  phaseVideo: document.getElementById("phaseVideo"),
  videoStatus: document.getElementById("videoStatus"),
  startQuizButton: document.getElementById("startQuizButton"),
  quizFeedback: document.getElementById("quizFeedback"),
  historyBody: document.getElementById("historyBody"),
  completedValue: document.getElementById("completedValue"),
  averageValue: document.getElementById("averageValue"),
  currentPhaseValue: document.getElementById("currentPhaseValue"),
  quizModal: document.getElementById("quizModal"),
  closeQuizButton: document.getElementById("closeQuizButton"),
  quizModalAlert: document.getElementById("quizModalAlert"),
  quizForm: document.getElementById("quizForm"),
  submitQuizButton: document.getElementById("submitQuizButton"),
  resultModal: document.getElementById("resultModal"),
  closeResultButton: document.getElementById("closeResultButton"),
  resultScoreText: document.getElementById("resultScoreText"),
  roleClienteButton: document.getElementById("roleClienteButton"),
  roleVendedorButton: document.getElementById("roleVendedorButton"),
  chatRoleStatus: document.getElementById("chatRoleStatus"),
  chatMessages: document.getElementById("chatMessages"),
  chatForm: document.getElementById("chatForm"),
  chatInput: document.getElementById("chatInput"),
  chatSendButton: document.getElementById("chatSendButton"),
  liveDays: document.getElementById("liveDays"),
  liveHours: document.getElementById("liveHours"),
  liveMinutes: document.getElementById("liveMinutes"),
  liveSeconds: document.getElementById("liveSeconds"),
  liveNextDate: document.getElementById("liveNextDate"),
  liveCommentForm: document.getElementById("liveCommentForm"),
  liveCommentInput: document.getElementById("liveCommentInput"),
  liveCommentsList: document.getElementById("liveCommentsList"),
};

const state = {
  users: loadUsers(),
  currentUser: null,
  activePhaseId: null,
  watchedCurrentVideo: false,
  activeTab: "jornada",
  chatRole: null,
  chatTurns: 0,
  chatQuestionQueue: [],
  chatFinalSent: false,
  liveComments: loadLiveComments(),
};

bootstrap();

function bootstrap() {
  elements.loginForm.addEventListener("submit", handleLogin);
  elements.logoutButton.addEventListener("click", handleLogout);

  elements.startQuizButton.addEventListener("click", showQuiz);
  elements.submitQuizButton.addEventListener("click", submitQuiz);
  elements.closeQuizButton.addEventListener("click", () => closeModal(elements.quizModal));
  elements.closeResultButton.addEventListener("click", () => closeModal(elements.resultModal));

  elements.quizModal.addEventListener("click", (event) => {
    if (event.target === elements.quizModal) {
      closeModal(elements.quizModal);
    }
  });

  elements.resultModal.addEventListener("click", (event) => {
    if (event.target === elements.resultModal) {
      closeModal(elements.resultModal);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeModal(elements.quizModal);
    closeModal(elements.resultModal);
  });

  elements.phaseVideo.addEventListener("ended", () => {
    state.watchedCurrentVideo = true;
    setMessage(elements.videoStatus, "Vídeo concluído. O teste da fase foi liberado.", "message-success");
    elements.startQuizButton.disabled = false;
  });

  elements.phaseVideo.addEventListener("error", () => {
    const fallbackTried = elements.phaseVideo.dataset.fallbackTried === "true";
    if (!fallbackTried) {
      elements.phaseVideo.dataset.fallbackTried = "true";
      elements.phaseVideo.src = PHASE_VIDEO_FALLBACK;
      elements.phaseVideo.load();
      setMessage(
        elements.videoStatus,
        "Vídeo principal indisponível. Carregamos uma versão alternativa.",
        "message-warning"
      );
      return;
    }

    state.watchedCurrentVideo = true;
    elements.startQuizButton.disabled = false;
    setMessage(
      elements.videoStatus,
      "Vídeo ainda não encontrado. Coloque o arquivo na pasta indicada e recarregue. O quiz foi liberado para teste.",
      "message-warning"
    );
  });

  elements.tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tabTarget;
      if (!target) return;
      activateTab(target);
    });
  });

  elements.roleClienteButton.addEventListener("click", () => selectChatRole("cliente"));
  elements.roleVendedorButton.addEventListener("click", () => selectChatRole("vendedor"));
  elements.chatForm.addEventListener("submit", handleChatSubmit);

  elements.liveCommentForm.addEventListener("submit", handleLiveCommentSubmit);
  renderLiveComments();
  updateLiveCountdown();
  setInterval(updateLiveCountdown, 1000);

  restoreSession();
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function handleLogin(event) {
  event.preventDefault();

  const username = elements.usernameInput.value;
  const password = elements.passwordInput.value;
  const normalized = normalizeText(username);

  const isAllowedUser = normalized === normalizeText(TEST_ACCOUNT.username);
  const isAllowedPassword = password === TEST_ACCOUNT.password;

  if (!isAllowedUser || !isAllowedPassword) {
    setMessage(elements.loginError, "Login inválido. Use usuário e senha de teste informados.", "message-error");
    return;
  }

  state.currentUser = TEST_ACCOUNT.username;
  persistSession(state.currentUser);
  ensureUserProgress(state.currentUser);

  elements.loginForm.reset();
  setMessage(elements.loginError, "", "");
  openDashboard();
}

function handleLogout() {
  if (state.currentUser === TEST_ACCOUNT.username) {
    state.users[TEST_ACCOUNT.username] = {
      unlockedPhase: 1,
      completedPhases: [],
      history: [],
    };
    saveUsers();
  }

  state.currentUser = null;
  state.activePhaseId = null;
  state.watchedCurrentVideo = false;
  localStorage.removeItem(STORAGE_SESSION);

  closeModal(elements.quizModal);
  closeModal(elements.resultModal);
  resetChat();

  elements.dashboardView.classList.add("hidden");
  elements.loginView.classList.remove("hidden");
}

function restoreSession() {
  const stored = localStorage.getItem(STORAGE_SESSION);
  if (!stored) {
    elements.loginView.classList.remove("hidden");
    elements.dashboardView.classList.add("hidden");
    return;
  }

  state.currentUser = stored;
  ensureUserProgress(state.currentUser);
  openDashboard();
}

function openDashboard() {
  elements.loginView.classList.add("hidden");
  elements.dashboardView.classList.remove("hidden");

  elements.profilePhoto.src = USER_PROFILE.photo;
  elements.profileName.textContent = USER_PROFILE.displayName;
  elements.profileCategory.textContent = USER_PROFILE.category;

  activateTab("jornada");
  resetChat();

  renderStatusStrip();
  renderPhaseMap();
  renderHistory();
  renderLiveComments();

  const progress = getUserProgress();
  const defaultPhase = Math.min(progress.unlockedPhase, PHASES.length);
  openPhase(defaultPhase);
}

function activateTab(tabKey) {
  state.activeTab = tabKey;

  elements.tabButtons.forEach((button) => {
    const isActive = button.dataset.tabTarget === tabKey;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  elements.tabPanels.forEach((panel) => {
    const isActive = panel.dataset.tabPanel === tabKey;
    panel.classList.toggle("hidden", !isActive);
  });
}

function openPhase(phaseId) {
  const phase = PHASES.find((item) => item.id === phaseId);
  if (!phase) return;

  const progress = getUserProgress();
  const isUnlocked = phase.id <= progress.unlockedPhase;

  if (!isUnlocked) {
    return;
  }

  closeModal(elements.quizModal);

  state.activePhaseId = phase.id;
  state.watchedCurrentVideo = progress.completedPhases.includes(phase.id);

  elements.missionTitle.textContent = phase.title;
  elements.missionSubtitle.textContent = phase.description;
  elements.phaseEmpty.classList.add("hidden");
  elements.phaseMission.classList.remove("hidden");

  elements.phaseVideo.dataset.fallbackTried = "false";
  elements.phaseVideo.src = phase.videoSrc;
  elements.phaseVideo.load();

  if (TEST_MODE) {
    elements.startQuizButton.disabled = false;
    setMessage(
      elements.videoStatus,
      "Modo de teste ativo: você pode adiantar o vídeo e iniciar o teste a qualquer momento.",
      "message-info"
    );
  } else if (state.watchedCurrentVideo) {
    elements.startQuizButton.disabled = false;
    setMessage(
      elements.videoStatus,
      "Fase já concluída anteriormente. Você pode revisar o vídeo e refazer o teste.",
      "message-info"
    );
  } else {
    elements.startQuizButton.disabled = true;
    setMessage(elements.videoStatus, "Assista ao vídeo até o final para liberar o quiz.", "message-info");
  }

  elements.quizFeedback.classList.add("hidden");
  elements.quizFeedback.textContent = "";

  renderQuiz(phase);
  renderPhaseMap();
}

function renderPhaseMap() {
  const progress = getUserProgress();
  const completed = new Set(progress.completedPhases);

  elements.phaseMap.innerHTML = "";

  PHASES.forEach((phase) => {
    const isCompleted = completed.has(phase.id);
    const isUnlocked = phase.id <= progress.unlockedPhase;
    const isActive = state.activePhaseId === phase.id;

    const phaseButton = document.createElement("button");
    phaseButton.type = "button";
    phaseButton.className = "phase-card";
    if (isCompleted) phaseButton.classList.add("is-completed");
    if (!isUnlocked) phaseButton.classList.add("is-locked");
    if (isActive) phaseButton.classList.add("is-active");

    const statusLabel = isCompleted ? "Concluída" : isUnlocked ? "Disponível" : "Bloqueada";
    const statusClass = isCompleted ? "pill-completed" : isUnlocked ? "" : "pill-locked";

    phaseButton.innerHTML = `
      <div class="phase-topline">
        <span class="phase-index">Fase ${phase.id}</span>
        <span class="phase-pill ${statusClass}">${statusLabel}</span>
      </div>
      <h4>${phase.title}</h4>
      <p>${phase.description}</p>
    `;

    phaseButton.disabled = !isUnlocked;
    phaseButton.setAttribute("role", "listitem");
    phaseButton.addEventListener("click", () => openPhase(phase.id));

    elements.phaseMap.appendChild(phaseButton);
  });
}

function renderQuiz(phase) {
  elements.quizForm.innerHTML = "";

  phase.questions.forEach((question, index) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "question";

    const legend = document.createElement("legend");
    legend.textContent = `${index + 1}. ${question.prompt}`;
    fieldset.appendChild(legend);

    question.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index}`;
      input.value = String(optionIndex);

      const span = document.createElement("span");
      span.textContent = option;

      label.appendChild(input);
      label.appendChild(span);
      fieldset.appendChild(label);
    });

    elements.quizForm.appendChild(fieldset);
  });
}

function showQuiz() {
  const phase = PHASES.find((item) => item.id === state.activePhaseId);
  if (!phase) return;

  renderQuiz(phase);
  setMessage(elements.quizModalAlert, "", "");
  openModal(elements.quizModal);
}

function submitQuiz() {
  const phase = PHASES.find((item) => item.id === state.activePhaseId);
  if (!phase) return;

  const formData = new FormData(elements.quizForm);
  const answers = [];

  for (let index = 0; index < phase.questions.length; index += 1) {
    const value = formData.get(`q${index}`);
    if (value === null) {
      setMessage(elements.quizModalAlert, "Responda às 5 perguntas antes de finalizar o teste.", "message-warning");
      return;
    }
    answers.push(Number(value));
  }

  const correctAnswers = answers.reduce((acc, answerIndex, index) => {
    return acc + (answerIndex === phase.questions[index].correctIndex ? 1 : 0);
  }, 0);

  const score = correctAnswers * QUIZ_POINTS_PER_QUESTION;

  const progress = getUserProgress();
  progress.history.push({
    phaseId: phase.id,
    phaseTitle: phase.title,
    score,
    maxScore: phase.questions.length * QUIZ_POINTS_PER_QUESTION,
    answers,
    completedAt: new Date().toISOString(),
  });

  if (!progress.completedPhases.includes(phase.id)) {
    progress.completedPhases.push(phase.id);
  }

  const nextUnlocked = Math.min(PHASES.length, phase.id + 1);
  progress.unlockedPhase = Math.max(progress.unlockedPhase, nextUnlocked);

  saveUsers();
  renderStatusStrip();
  renderHistory();
  renderPhaseMap();

  const unlockedNext = phase.id < PHASES.length && progress.unlockedPhase > phase.id;
  const extraMessage = unlockedNext ? "Próxima fase liberada no mapa." : "Você pode revisar a fase quando quiser.";

  closeModal(elements.quizModal);
  setMessage(elements.quizModalAlert, "", "");
  setMessage(elements.quizFeedback, extraMessage, "message-success");

  elements.resultScoreText.textContent =
    `Parabéns, ${USER_PROFILE.displayName}! Sua nota foi ${score}. ` +
    `Você acertou ${correctAnswers} de ${phase.questions.length} perguntas.`;
  openModal(elements.resultModal);
}

function renderHistory() {
  const progress = getUserProgress();
  const entries = [...progress.history].reverse();

  elements.historyBody.innerHTML = "";

  if (entries.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = '<td colspan="4">Nenhuma tentativa registrada ainda. Conclua uma fase para gerar histórico.</td>';
    elements.historyBody.appendChild(row);
    return;
  }

  entries.forEach((entry) => {
    const row = document.createElement("tr");
    const date = formatDate(entry.completedAt);
    const hasPassed = entry.score >= 6;
    const tagClass = hasPassed ? "tag-success" : "tag-neutral";
    const statusText = hasPassed ? "Aprovado" : "Em evolução";

    row.innerHTML = `
      <td>${date}</td>
      <td>Fase ${entry.phaseId}</td>
      <td>${entry.score}</td>
      <td><span class="tag ${tagClass}">${statusText}</span></td>
    `;

    elements.historyBody.appendChild(row);
  });
}

function renderStatusStrip() {
  const progress = getUserProgress();
  const totalCompleted = progress.completedPhases.length;

  const totalScore = progress.history.reduce((sum, item) => sum + item.score, 0);
  const averageRaw = progress.history.length ? totalScore / progress.history.length : 0;
  const average = Number.isInteger(averageRaw) ? String(averageRaw) : averageRaw.toFixed(1);

  const currentLevel = Math.max(1, Math.min(progress.unlockedPhase, PHASES.length));

  elements.completedValue.textContent = `${totalCompleted}/${PHASES.length}`;
  elements.averageValue.textContent = `${average}`;
  elements.currentPhaseValue.textContent = `Nível ${currentLevel}`;
  elements.profileLevel.textContent = `Nível ${currentLevel}`;
}

function selectChatRole(role) {
  state.chatRole = role;
  state.chatTurns = 0;
  state.chatQuestionQueue = shuffleArray([...CHAT_CLIENT_QUESTION_POOL]);
  state.chatFinalSent = false;

  elements.roleClienteButton.classList.toggle("is-active", role === "cliente");
  elements.roleVendedorButton.classList.toggle("is-active", role === "vendedor");

  elements.chatInput.disabled = false;
  elements.chatSendButton.disabled = false;
  elements.chatInput.value = "";
  elements.chatMessages.innerHTML = "";

  if (role === "cliente") {
    setMessage(
      elements.chatRoleStatus,
      "Você está simulando um cliente. O chat atuará como vendedor e responderá suas dúvidas.",
      "message-info"
    );
    addChatMessage(
      "Vendedor IA",
      "Olá! Sou seu vendedor virtual. Posso explicar o Mercado Livre de Energia e orientar os próximos passos.",
      "bot"
    );
    return;
  }

  setMessage(
    elements.chatRoleStatus,
    "Você está simulando um vendedor. O chat atuará como cliente e fará perguntas aleatórias.",
    "message-info"
  );
  addChatMessage("Cliente IA", "Perfeito, vou simular um possível consumidor com dúvidas reais.", "bot");
  askNextClientQuestion();
}

function handleChatSubmit(event) {
  event.preventDefault();

  const text = elements.chatInput.value.trim();
  if (!text) return;

  if (!state.chatRole) {
    setMessage(elements.chatRoleStatus, "Selecione um papel antes de iniciar a conversa.", "message-warning");
    return;
  }

  addChatMessage("Você", text, "user");
  elements.chatInput.value = "";
  elements.chatInput.focus();

  if (state.chatRole === "cliente") {
    respondAsSeller(text);
    return;
  }

  respondAsClient();
}

function respondAsSeller(userText) {
  state.chatTurns += 1;

  const normalized = normalizeText(userText);
  let response =
    "Ótima pergunta. No Mercado Livre de Energia, você pode negociar condições de contrato com mais flexibilidade e previsibilidade.";

  if (/(o que|como funciona|mercado livre|diferenca|diferença)/.test(normalized)) {
    response =
      "O Mercado Livre de Energia é o ambiente em que empresas elegíveis escolhem seu fornecedor e negociam preço, prazo e volume de energia.";
  } else if (/(migrar|migracao|migração|adquirir|contratar|comecar|começar)/.test(normalized)) {
    response =
      "Para adquirir no mercado livre, o primeiro passo é analisar seu perfil de consumo. Depois disso, estruturamos estratégia de compra, contrato e cronograma de migração.";
  } else if (/(preco|preço|economia|tarifa|valor)/.test(normalized)) {
    response =
      "A economia depende do perfil de consumo e da estratégia contratual. Em geral, empresas que planejam bem conseguem reduzir custo e ganhar previsibilidade financeira.";
  } else if (/(quem pode|requisito|demanda|consumo medio|consumo médio)/.test(normalized)) {
    response =
      "A elegibilidade depende dos critérios regulatórios vigentes. Nós avaliamos seus dados de demanda e consumo para indicar o melhor caminho de migração.";
  } else if (/(risco|seguranca|segurança|garantia|confianca|confiança)/.test(normalized)) {
    response =
      "A operação é segura quando há boa gestão contratual e acompanhamento contínuo. O fornecimento físico segue pela distribuidora, enquanto a energia é negociada no ambiente livre.";
  }

  addChatMessage("Vendedor IA", response, "bot");

  if (state.chatTurns >= 3 && !state.chatFinalSent) {
    state.chatFinalSent = true;
    addChatMessage(
      "Vendedor IA",
      "Para avançar com uma proposta completa e personalizada, recomendo falar com um vendedor humano agora. Posso te direcionar para esse atendimento.",
      "bot"
    );
  }
}

function respondAsClient() {
  if (state.chatQuestionQueue.length > 0) {
    askNextClientQuestion();
    return;
  }

  if (!state.chatFinalSent) {
    state.chatFinalSent = true;
    addChatMessage(
      "Cliente IA",
      "Perfeito, suas explicações esclareceram minhas dúvidas. Vou falar com um vendedor humano para seguir com a contratação.",
      "bot"
    );
    return;
  }

  addChatMessage("Cliente IA", "Obrigado, isso já me ajuda bastante para tomar uma decisão.", "bot");
}

function askNextClientQuestion() {
  if (state.chatQuestionQueue.length === 0) return;

  const question = state.chatQuestionQueue.shift();
  const openers = [
    "Tenho outra dúvida:",
    "Me explique também:",
    "Quero entender o seguinte:",
    "Para avançar, preciso saber:",
  ];

  const opener = openers[Math.floor(Math.random() * openers.length)];
  addChatMessage("Cliente IA", `${opener} ${question}`, "bot");
}

function addChatMessage(author, text, type) {
  const bubble = document.createElement("article");
  bubble.className = `chat-bubble chat-bubble--${type}`;

  const meta = document.createElement("p");
  meta.className = "chat-bubble-meta";
  meta.textContent = author;

  const copy = document.createElement("p");
  copy.textContent = text;

  bubble.appendChild(meta);
  bubble.appendChild(copy);
  elements.chatMessages.appendChild(bubble);
  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

function resetChat() {
  state.chatRole = null;
  state.chatTurns = 0;
  state.chatQuestionQueue = [];
  state.chatFinalSent = false;

  elements.roleClienteButton.classList.remove("is-active");
  elements.roleVendedorButton.classList.remove("is-active");

  elements.chatInput.value = "";
  elements.chatInput.disabled = true;
  elements.chatSendButton.disabled = true;

  elements.chatMessages.innerHTML = "";
  setMessage(elements.chatRoleStatus, "Selecione um papel para iniciar a conversa.", "message-info");
}

function handleLiveCommentSubmit(event) {
  event.preventDefault();

  const text = elements.liveCommentInput.value.trim();
  if (!text) return;

  state.liveComments.unshift({
    author: USER_PROFILE.displayName,
    role: USER_PROFILE.category,
    text,
    createdAt: new Date().toISOString(),
  });

  state.liveComments = state.liveComments.slice(0, 120);
  saveLiveComments();
  renderLiveComments();

  elements.liveCommentInput.value = "";
  elements.liveCommentInput.focus();
}

function renderLiveComments() {
  elements.liveCommentsList.innerHTML = "";

  if (state.liveComments.length === 0) {
    const empty = document.createElement("p");
    empty.className = "live-comments-empty";
    empty.textContent = "Nenhum comentário ainda. Seja o primeiro a participar da live.";
    elements.liveCommentsList.appendChild(empty);
    return;
  }

  state.liveComments.forEach((comment) => {
    const item = document.createElement("article");
    item.className = "comment-item";

    const meta = document.createElement("p");
    meta.className = "comment-meta";
    meta.textContent = `${comment.author} • ${formatDate(comment.createdAt)}`;

    const text = document.createElement("p");
    text.className = "comment-text";
    text.textContent = comment.text;

    item.appendChild(meta);
    item.appendChild(text);
    elements.liveCommentsList.appendChild(item);
  });
}

function updateLiveCountdown() {
  const now = new Date();
  const target = getNextLiveDate(now);
  const diff = Math.max(0, target.getTime() - now.getTime());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  elements.liveDays.textContent = padTime(days);
  elements.liveHours.textContent = padTime(hours);
  elements.liveMinutes.textContent = padTime(minutes);
  elements.liveSeconds.textContent = padTime(seconds);

  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(target);

  elements.liveNextDate.textContent = `Próxima transmissão: ${formattedDate}`;
}

function getNextLiveDate(referenceDate) {
  const targetDay = 4;
  const liveHour = 20;

  const next = new Date(referenceDate);
  const currentDay = referenceDate.getDay();
  let dayDelta = (targetDay - currentDay + 7) % 7;

  const alreadyPassedToday =
    dayDelta === 0 &&
    (referenceDate.getHours() > liveHour ||
      (referenceDate.getHours() === liveHour && referenceDate.getMinutes() > 0) ||
      (referenceDate.getHours() === liveHour && referenceDate.getMinutes() === 0 && referenceDate.getSeconds() > 0));

  if (alreadyPassedToday) {
    dayDelta = 7;
  }

  next.setDate(referenceDate.getDate() + dayDelta);
  next.setHours(liveHour, 0, 0, 0);
  return next;
}

function padTime(value) {
  return String(value).padStart(2, "0");
}

function shuffleArray(array) {
  const copy = [...array];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function setMessage(target, text, className) {
  target.textContent = text;
  target.className = "message";

  if (className) {
    target.classList.add(className);
  }

  if (!text) {
    target.classList.add("hidden");
  } else {
    target.classList.remove("hidden");
  }
}

function openModal(modalElement) {
  modalElement.classList.remove("hidden");
  modalElement.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal(modalElement) {
  modalElement.classList.add("hidden");
  modalElement.setAttribute("aria-hidden", "true");

  const hasOpenModal = document.querySelector(".modal:not(.hidden)");
  if (!hasOpenModal) {
    document.body.classList.remove("modal-open");
  }
}

function getUserProgress() {
  return ensureUserProgress(state.currentUser);
}

function ensureUserProgress(username) {
  let migrated = false;

  if (!state.users[username]) {
    state.users[username] = {
      unlockedPhase: 1,
      completedPhases: [],
      history: [],
    };
    saveUsers();
  }

  const userProgress = state.users[username];

  if (!Array.isArray(userProgress.completedPhases)) {
    userProgress.completedPhases = [];
  }

  if (!Array.isArray(userProgress.history)) {
    userProgress.history = [];
  }

  userProgress.history = userProgress.history.map((entry) => {
    if (!entry || typeof entry !== "object") {
      migrated = true;
      return {
        phaseId: 1,
        phaseTitle: "Fase 1",
        score: 0,
        maxScore: 10,
        answers: [],
        completedAt: new Date().toISOString(),
      };
    }

    const normalizedEntry = { ...entry };

    if (normalizedEntry.maxScore === 50) {
      normalizedEntry.score = Math.round((Number(normalizedEntry.score || 0) / 50) * 10);
      normalizedEntry.maxScore = 10;
      migrated = true;
    }

    if (typeof normalizedEntry.maxScore !== "number") {
      normalizedEntry.maxScore = 10;
      migrated = true;
    }

    if (typeof normalizedEntry.score !== "number") {
      normalizedEntry.score = 0;
      migrated = true;
    }

    if (typeof normalizedEntry.phaseId !== "number") {
      normalizedEntry.phaseId = 1;
      migrated = true;
    }

    if (typeof normalizedEntry.phaseTitle !== "string") {
      normalizedEntry.phaseTitle = `Fase ${normalizedEntry.phaseId}`;
      migrated = true;
    }

    if (!Array.isArray(normalizedEntry.answers)) {
      normalizedEntry.answers = [];
      migrated = true;
    }

    if (typeof normalizedEntry.completedAt !== "string") {
      normalizedEntry.completedAt = new Date().toISOString();
      migrated = true;
    }

    return normalizedEntry;
  });

  if (typeof userProgress.unlockedPhase !== "number") {
    userProgress.unlockedPhase = 1;
  }

  if (migrated) {
    saveUsers();
  }

  return userProgress;
}

function loadUsers() {
  try {
    const raw = localStorage.getItem(STORAGE_USERS);
    if (!raw) return {};

    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return {};
    return parsed;
  } catch (error) {
    return {};
  }
}

function saveUsers() {
  localStorage.setItem(STORAGE_USERS, JSON.stringify(state.users));
}

function persistSession(username) {
  localStorage.setItem(STORAGE_SESSION, username);
}

function loadLiveComments() {
  try {
    const raw = localStorage.getItem(STORAGE_LIVE_COMMENTS);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter((item) => item && typeof item.text === "string");
  } catch (error) {
    return [];
  }
}

function saveLiveComments() {
  localStorage.setItem(STORAGE_LIVE_COMMENTS, JSON.stringify(state.liveComments));
}
