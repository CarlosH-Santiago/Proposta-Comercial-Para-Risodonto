import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  Check,
  ChevronDown,
  ArrowRight,
  Calendar,
  Clock,
  MessageCircle,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  Sparkles,
  Sun,
  Moon,
  // ── Odonto / Saúde / Estética ─────────────────────────
  Stethoscope,
  HeartPulse,
  ShieldPlus,
  ShieldCheck,
  Crosshair,
  Smile,
  Activity,
  Mail,
  Instagram,
  ExternalLink,
  Globe,
} from "lucide-react";

// ─── ASSETS BASE URL ─────────────────────────────────────────────────────────

const ASSETS =
  "https://raw.githubusercontent.com/CarlosH-Santiago/meu-portfolio-assets/main";

// ─── DATA ───────────────────────────────────────────────────────────────────

const CLIENT_NAME = "Clínica Risodonto";
const PROPOSAL_DATE = "06 de outubro de 2026";
const VALID_UNTIL = "21 de outubro de 2026";
const PROFILE_IMG = `${ASSETS}/profile-photo.jpg`;
const CONTACT_PHONE = "5575981954000";
const CONTACT_EMAIL = "carloshsssantiago@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/caos.dev";
const INSTAGRAM_HANDLE = "@caos.dev";
const PORTFOLIO_URL = "https://portfolio-carlos-henrique.vercel.app/";

const PORTFOLIO = [
  {
    id: 1,
    title: "Dra. Helena — Estética Dental",
    category: "Odontologia Estética · Alta Conversão",
    description:
      "Landing page de alta conversão para clínica odontológica especializada em estética do sorriso e harmonização orofacial. Desenvolvida com slider interativo de Antes e Depois, depoimentos reais e botão de agendamento via WhatsApp — exatamente a mesma expertise e foco em captação de pacientes aplicados à Risodonto.",
    img: `${ASSETS}/dra-helena-main.png`,
    gallery: [
      `${ASSETS}/dra-helena-main.png`,
      `${ASSETS}/dra-helena-1.png`,
      `${ASSETS}/dra-helena-2.png`,
      `${ASSETS}/dra-helena-3.png`,
      `${ASSETS}/dra-helena-4.png`,
    ],
  },
  {
    id: 2,
    title: "Atelier Premium",
    category: "Design Minimalista · E-commerce",
    description:
      "Projeto de e-commerce com identidade visual elegante e sofisticada. Prova que sei criar ambientes digitais que transmitem alto valor e geram confiança imediata — exatamente o que os pacientes da Risodonto precisam sentir ao acessar o site.",
    img: `${ASSETS}/atelier-main.png`,
    gallery: [
      `${ASSETS}/atelier-main.png`,
      `${ASSETS}/atelier-1.png`,
      `${ASSETS}/atelier-2.png`,
    ],
  },
  {
    id: 3,
    title: "EcoQuintal",
    category: "UI/UX · Navegação Intuitiva",
    description:
      "Plataforma sustentável com foco em experiência do usuário. Cada botão e cada seção foram pensados para guiar o visitante sem esforço — o mesmo princípio que aplicarei no site da Risodonto para que o paciente encontre o botão de agendamento em segundos.",
    img: `${ASSETS}/ecoquintal-main.png`,
    gallery: [
      `${ASSETS}/ecoquintal-main.png`,
      `${ASSETS}/ecoquintal-1.png`,
      `${ASSETS}/ecoquintal-2.png`,
    ],
  },
  {
    id: 4,
    title: "SI Conecta",
    category: "Plataforma · Conexão de Serviços",
    description:
      "Hub universitário que conecta estudantes a serviços de forma rápida e direta. Desenvolvido com foco em velocidade e clareza de informação — habilidades que garantem que o site da clínica carregue rápido e converta visitas em consultas.",
    img: `${ASSETS}/siconecta-main.png`,
    gallery: [
      `${ASSETS}/siconecta-main.png`,
      `${ASSETS}/siconecta-1.png`,
    ],
  },
];

const SCOPE = [
  {
    phase: "01 — Diagnóstico e Identidade Visual",
    icon: <Stethoscope className="w-5 h-5" />,
    items: [
      "Reunião inicial para entender os valores e o público da Risodonto",
      "Curadoria de paleta de cores, tipografia e imagens alinhadas à clínica",
      "Definição da estrutura de páginas e do fluxo ideal do paciente no site",
      "Entrega de um documento de escopo visual aprovado antes de qualquer código",
    ],
  },
  {
    phase: "02 — Desenvolvimento e Performance",
    icon: <Sparkles className="w-5 h-5" />,
    items: [
      "Construção do site com foco em carregamento rápido (meta: abaixo de 2 segundos)",
      "Layout Mobile-First: perfeito em qualquer celular, tablet ou computador",
      "Textos e estrutura otimizados para o Google encontrar a Risodonto nas buscas locais",
      "Checkpoint semanal com prévia para aprovação da clínica antes de avançar",
    ],
  },
  {
    phase: "03 — Integração e Entrega",
    icon: <Crosshair className="w-5 h-5" />,
    items: [
      "Configuração do botão WhatsApp com mensagem pré-preenchida para agendamento",
      "Publicação do site com domínio e hospedagem configurados",
      "Cadastro e otimização do Google Meu Negócio vinculado ao site",
      "Treinamento simples: como a recepção acompanha os novos contatos recebidos",
    ],
  },
  {
    phase: "04 — Suporte Pós-Entrega",
    icon: <ShieldPlus className="w-5 h-5" />,
    items: [
      "30 dias de suporte gratuito após a publicação",
      "Correção de qualquer ajuste solicitado sem custo adicional",
      "Relatório de primeiros acessos e origem dos visitantes",
    ],
  },
];

const PLANS = [
  // ── Via 1: WaaS — receita recorrente, zero barreira de entrada ──
  {
    planIcon: <Smile className="w-5 h-5" />,
    label: "Assinatura",
    price: "R$ 320",
    priceNote: "/ mês",
    period: "setup zero · tudo incluso na mensalidade",
    highlight: false,
    badge: null as string | null,
    ctaLabel: "Quero a Assinatura",
    ctaHref: `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent("Olá, Carlos! Gostaria de contratar o Modelo de Assinatura (R$ 320/mês, setup zero) para a Clínica Risodonto.")}`,
    delivery: "4 semanas",
    tagline: "O site perfeito, sempre atualizado, como um serviço mensal contínuo.",
    features: [
      "Landing Page de alta conversão",
      "Infraestrutura 100% gerenciada pela Caos Dev",
      "Hospedagem, segurança e domínio inclusos",
      "Suporte ativo e atualizações ilimitadas de conteúdo",
    ],
  },
  // ── Via 2: Buyout — âncora de destaque; habilita o upsell de Zeladoria ──
  {
    planIcon: <Stethoscope className="w-5 h-5" />,
    label: "Compra Definitiva",
    price: "R$ 2.400",
    priceNote: "setup único",
    period: "pague apenas a construção, é seu para sempre",
    highlight: true,
    badge: "Mais escolhido" as string | null,
    ctaLabel: "Quero ser dono do meu site",
    ctaHref: `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent("Olá, Carlos! Gostaria de contratar a Compra Definitiva (R$ 2.400, setup único) para a Clínica Risodonto.")}`,
    delivery: "6 semanas",
    tagline: "Você é o dono do código e do domínio. Pague apenas a construção.",
    features: [
      "Propriedade 100% da clínica (domínio e site)",
      "Landing Page + Páginas de Especialidades (SEO Aprofundado)",
      "Google Meu Negócio configurado e otimizado",
      "Formulário de captação integrado ao WhatsApp",
      "30 dias de garantia e suporte pós-entrega",
    ],
  },
  // ── Via 3: Expansão futura — o label "Sob Medida" é usado no render para o ícone do CTA ──
  {
    planIcon: <Activity className="w-5 h-5" />,
    label: "Sob Medida",
    price: "A combinar",
    priceNote: "",
    period: "estruturas complexas",
    highlight: false,
    badge: null as string | null,
    ctaLabel: "Agendar Reunião",
    ctaHref: `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent("Olá, Carlos! Gostaria de agendar uma reunião para um projeto Sob Medida para a Clínica Risodonto.")}`,
    delivery: "A definir",
    tagline: "Para clínicas com sistemas próprios ou necessidades de escalabilidade.",
    features: [
      "Integração com sistema de agendamento da clínica",
      "Múltiplas unidades ou estruturas complexas",
      "Escopo e prazo definidos juntos, sem surpresas",
      "Domínio 100% da clínica desde o primeiro dia",
      "Suporte estendido e SLA personalizado",
    ],
  },
];

// ─── SECTION LABEL ────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-accent mb-6 select-none">
      <span className="w-6 h-px bg-accent/60 shrink-0" />
      {children}
    </span>
  );
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// ─── SECTIONS ────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-32 overflow-hidden"
    >
      {/* Background pattern — cruz médica (+) muito sutil, textura clínica */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.028]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect x='28' y='16' width='8' height='32' rx='2' fill='%23c0392b'/%3E%3Crect x='16' y='28' width='32' height='8' rx='2' fill='%23c0392b'/%3E%3C/svg%3E")`,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Glow blobs — Risodonto vermelho suave + cinza quente */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[640px] h-[320px] sm:h-[420px] rounded-full blur-[130px]"
        style={{ background: "radial-gradient(ellipse, rgba(192,57,43,0.22) 0%, rgba(192,57,43,0.06) 60%, transparent 100%)" }}
        animate={{
          x: [0, 40, -30, 20, 0],
          y: [0, -30, 20, -40, 0],
          scale: [1, 1.08, 0.94, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 w-[320px] h-[320px] rounded-full blur-[110px]"
        style={{ background: "radial-gradient(ellipse, rgba(224,82,68,0.12) 0%, rgba(80,60,60,0.08) 60%, transparent 100%)" }}
        animate={{
          x: [0, -35, 25, -20, 0],
          y: [0, 30, -20, 35, 0],
          scale: [1, 0.92, 1.1, 0.97, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <FadeIn delay={0.1} direction="down">
          <div className="inline-flex items-center gap-2 border border-border bg-secondary/60 backdrop-blur rounded-full px-4 py-1.5 mb-10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Proposta Exclusiva · {PROPOSAL_DATE}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} direction="up">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Transformando buscas no Google em{" "}
            <em className="not-italic" style={{ color: "var(--accent)" }}>
              novos pacientes
            </em>{" "}
            na cadeira da Risodonto.
          </h1>
        </FadeIn>

        <FadeIn delay={0.45} direction="up">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            Uma identidade visual web profissional e de alta conversão,{" "}
            <strong className="text-foreground font-medium">
              preparada exclusivamente para {CLIENT_NAME}
            </strong>
            . Válida até {VALID_UNTIL}.
          </p>

          <p className="text-sm text-muted-foreground/60 mb-12 font-mono">
            Ref. #PRO-2026-RSO-001
          </p>

          <a
            href="#sobre"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
          >
            Ver proposta completa
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayValue, setDisplayValue] = useState("0+");

  const numericTarget = parseInt(value.replace(/\./g, "").replace(/\D/g, ""), 10) || 0;
  const hasPeriod = value.includes(".");
  const suffix = value.includes("+") ? "+" : "";

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, numericTarget, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(current) {
        const rounded = Math.floor(current);
        let formatted = rounded.toString();
        if (hasPeriod && rounded >= 1000) {
          formatted = rounded.toLocaleString("pt-BR");
        }
        setDisplayValue(formatted + suffix);
      },
    });

    return () => controls.stop();
  }, [isInView, numericTarget, hasPeriod, suffix]);

  return (
    <div>
      <p
        ref={ref}
        className="text-3xl font-bold text-foreground mb-1 tracking-tight"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {displayValue}
      </p>
      <p className="text-xs text-muted-foreground leading-snug">{label}</p>
    </div>
  );
}

function About() {
  const stats = [
    { value: "10+", label: "Projetos em produção" },
    { value: "2.500+", label: "Horas de código" },
    { value: "15+", label: "Tecnologias dominadas" },
    { value: "500+", label: "Devs impactados" },
  ];

  /* SVG de dente — padrão sutil (3% opacidade) para textura odontológica */
  const TOOTH_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 10 C30 10 22 16 20 26 C18 34 19 44 22 52 C24 58 26 66 28 68 C29 70 31 70 32 68 C33 66 34 58 36 54 C37 51 38 50 40 50 C42 50 43 51 44 54 C46 58 47 66 48 68 C49 70 51 70 52 68 C54 66 56 58 58 52 C61 44 62 34 60 26 C58 16 50 10 40 10Z' stroke='%23C0392B' stroke-width='1.5' fill='none' opacity='0.4'/%3E%3C/svg%3E")`;

  return (
    <section id="sobre" className="relative py-28 px-6 border-t border-border overflow-hidden">
      {/* Tooth pattern — textura odontológica extremamente sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{ backgroundImage: TOOTH_SVG, backgroundSize: "80px 80px" }}
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <FadeIn direction="right">
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-secondary">
              <img
                src={PROFILE_IMG}
                alt="Carlos Henrique — Caos Dev, desenvolvedor responsável pela proposta"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-card/90 backdrop-blur-md border border-border shadow-2xl">
                <div className="flex items-center gap-1.5 mb-1">
                  <BadgeCheck className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-accent font-mono text-[11px] tracking-wider uppercase font-semibold">
                    Desenvolvedor & Paciente Risodonto
                  </span>
                </div>
                <p className="text-foreground text-base font-semibold">
                  Carlos Henrique Santiago
                </p>
                <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary text-xs font-mono transition-colors group/insta"
                  >
                    <Instagram className="w-3.5 h-3.5 text-accent group-hover/insta:scale-110 transition-transform" />
                    <span>{INSTAGRAM_HANDLE}</span>
                  </a>
                  <span className="text-border">·</span>
                  <a
                    href={PORTFOLIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary text-xs font-mono transition-colors group/port"
                  >
                    <Globe className="w-3.5 h-3.5 text-accent group-hover/port:scale-110 transition-transform" />
                    <span>Portfólio Geral</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-3 -left-3 w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-2xl border border-primary/30 pointer-events-none" />
          </div>
        </FadeIn>

        {/* Content */}
        <div>
          <FadeIn direction="up" delay={0}>
            <Label>Sobre mim</Label>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              O desenvolvedor que pensa{" "}
              <span style={{ color: "var(--primary)" }}>como paciente</span>.
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sou Carlos Henrique, desenvolvedor Full-Stack e estudante de Sistemas de Informação
              na UNEX (6º semestre). Como paciente da Risodonto, percebi que a clínica merece uma
              presença digital à altura do atendimento que oferece — e decidi propor exatamente isso.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.25}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Minha abordagem de desenvolvimento é guiada pela usabilidade e responsividade extrema. Com sólidos conhecimentos no ecossistema mobile, construo a estrutura do site pensando primeiro na experiência nos smartphones. Isso garante uma navegação rápida e sem travamentos na palma da mão — exatamente onde{" "}
              <strong className="text-foreground font-medium">
                mais de 70% dos potenciais pacientes
              </strong>{" "}
              vão pesquisar e encontrar a Risodonto.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.35}>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Fora da tecnologia, sou músico filarmônico — toco clarinete e saxofone. Da filarmônica
              aprendi que o caos de várias notas, quando bem conduzido, gera harmonia. É exatamente
              isso que o nome{" "}
              <strong className="text-foreground font-medium">Caos Dev</strong> representa: pego um
              problema desorganizado e o transformo em uma solução elegante, com ritmo e propósito.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.45}>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-5 border-t border-border pt-8">
              {stats.map((s) => (
                <StatCounter key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [galleryIdx, setGalleryIdx] = useState(0);

  const currentProject = PORTFOLIO[active];

  const openGalleryModal = (projectIndex: number, imgIndex = 0) => {
    setActive(projectIndex);
    setGalleryIdx(imgIndex);
    setModalOpen(true);
  };

  const nextPhoto = () => {
    setGalleryIdx((prev) => (prev + 1) % currentProject.gallery.length);
  };

  const prevPhoto = () => {
    setGalleryIdx((prev) =>
      prev === 0 ? currentProject.gallery.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="py-28 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="up">
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Label>Portfólio selecionado</Label>
              <h2
                className="text-4xl md:text-5xl font-bold text-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Projetos reais,
                <br />
                <span className="text-muted-foreground font-normal text-3xl">
                  resultados concretos para o seu contexto
                </span>
              </h2>
            </div>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card hover:bg-secondary hover:border-primary/50 text-foreground font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md group shrink-0 self-start md:self-end"
            >
              <Globe className="w-4 h-4 text-accent group-hover:rotate-12 transition-transform duration-300" />
              <span>Ver Portfólio Geral</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </FadeIn>

        {/* Main featured image container */}
        <FadeIn direction="up" delay={0.1}>
          {/* Desktop View (md+) */}
          <div className="hidden md:block relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-secondary mb-6 group border border-border shadow-2xl">
            <img
              src={PORTFOLIO[active].img}
              alt={PORTFOLIO[active].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient & Blur Overlay — Theme Adaptive */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent flex items-end p-8">
              <div className="w-full bg-card/90 backdrop-blur-md border border-border rounded-2xl p-6 shadow-2xl flex flex-row items-center justify-between gap-4">
                <div className="max-w-2xl">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase mb-1.5 block">
                    {PORTFOLIO[active].category}
                  </span>
                  <h3
                    className="text-3xl font-bold text-foreground mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {PORTFOLIO[active].title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {PORTFOLIO[active].description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={PORTFOLIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border bg-card/80 text-foreground font-medium text-sm hover:bg-secondary hover:border-primary/50 transition-all duration-200"
                    title="Acessar portfólio completo com todos os projetos"
                  >
                    <Globe className="w-4 h-4 text-accent" />
                    <span className="hidden xl:inline">Portfólio Geral</span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                  </a>
                  <button
                    onClick={() => openGalleryModal(active)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg hover:scale-105 active:scale-100"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Visualizar Fotos</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Card View (<md) — Image and text cleanly separated */}
          <div className="md:hidden w-full rounded-2xl overflow-hidden border border-border bg-card shadow-xl mb-6 flex flex-col">
            <div className="relative w-full aspect-video bg-secondary overflow-hidden">
              <img
                src={PORTFOLIO[active].img}
                alt={PORTFOLIO[active].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <span className="font-mono text-xs text-accent tracking-widest uppercase block">
                {PORTFOLIO[active].category}
              </span>
              <h3
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {PORTFOLIO[active].title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {PORTFOLIO[active].description}
              </p>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-3 rounded-xl border border-border bg-secondary text-foreground font-medium text-xs hover:bg-secondary/80 transition-colors text-center"
                >
                  <Globe className="w-3.5 h-3.5 text-accent" />
                  <span>Portfólio Geral</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
                <button
                  onClick={() => openGalleryModal(active)}
                  className="inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-xs hover:bg-primary/90 transition-colors shadow-md text-center"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ver Fotos</span>
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PORTFOLIO.map((p, i) => (
            <FadeIn key={p.id} direction="up" delay={i * 0.1}>
              <button
                onClick={() => setActive(i)}
                aria-label={`Ver projeto: ${p.title}`}
                className={`relative aspect-video w-full rounded-xl overflow-hidden bg-secondary border-2 transition-all duration-200 text-left ${active === i
                  ? "border-primary ring-2 ring-primary/40 opacity-100 shadow-md"
                  : "border-border/60 opacity-70 hover:opacity-100 hover:border-border"
                  }`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 backdrop-blur-md bg-card/85 p-1.5 rounded-lg border border-border">
                  <p className="text-foreground text-xs font-medium truncate">
                    {p.title}
                  </p>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>

        {/* Callout / Redirection to Full Portfolio */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-12 rounded-2xl border border-border bg-card/60 backdrop-blur p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-1">
                  Deseja explorar todos os projetos e código em produção?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Visite meu portfólio completo com arquitetura de software, métricas interativas, Bento Grid e cases completos.
                </p>
              </div>
            </div>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg hover:scale-105 active:scale-100 shrink-0 w-full md:w-auto"
            >
              <span>Acessar portfolio-carlos-henrique.vercel.app</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* FLOATING MODAL DIALOG */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 transition-all duration-300"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-border bg-secondary/50 backdrop-blur">
              <div>
                <span className="font-mono text-xs text-accent uppercase tracking-widest block">
                  {currentProject.category}
                </span>
                <h4
                  className="text-xl md:text-2xl font-bold text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {currentProject.title}
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-secondary text-foreground text-xs font-mono transition-colors"
                  title="Abrir portfólio completo em nova aba"
                >
                  <Globe className="w-3.5 h-3.5 text-accent" />
                  <span>Portfólio Geral</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </a>
                <span className="font-mono text-xs text-muted-foreground">
                  Foto {galleryIdx + 1} de {currentProject.gallery.length}
                </span>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-full border border-border bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                  aria-label="Fechar galeria"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Main Viewport */}
            <div className="relative flex-1 bg-secondary/30 min-h-[300px] md:min-h-[480px] flex items-center justify-center overflow-hidden p-2">
              <img
                src={currentProject.gallery[galleryIdx]}
                alt={`${currentProject.title} — foto ${galleryIdx + 1}`}
                className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
              />

              {/* Prev / Next controls */}
              {currentProject.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevPhoto}
                    aria-label="Foto anterior"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-card/90 backdrop-blur border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-lg z-10"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={nextPhoto}
                    aria-label="Próxima foto"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-card/90 backdrop-blur border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-lg z-10"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer / Thumbnails */}
            <div className="p-5 border-t border-border bg-secondary/50 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col gap-1.5 max-w-md">
                <p className="text-xs text-muted-foreground">
                  {currentProject.description}
                </p>
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline text-xs font-medium"
                >
                  <span>Ver todos os projetos no Portfólio Geral</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Gallery Thumbnails */}
              {currentProject.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto">
                  {currentProject.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setGalleryIdx(idx)}
                      className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${galleryIdx === idx
                        ? "border-primary ring-2 ring-primary/50 opacity-100 scale-105"
                        : "border-border/50 opacity-60 hover:opacity-100"
                        }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`Miniatura ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Scope() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="escopo" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <FadeIn direction="right" delay={0}>
            <div className="lg:col-span-2">
              <Label>A Proposta</Label>
              <h2
                className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                O que será
                <br />
                entregue,
                <br />
                <span style={{ color: "var(--accent)" }}>etapa a etapa.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Cada etapa é acompanhada de uma prévia para aprovação da clínica.
                Você acompanha o progresso em tempo real e decide antes de avançar.
              </p>

              <FadeIn direction="up" delay={0.2}>
                <div className="mt-10 p-5 rounded-xl border border-primary/30 bg-primary/5">
                  <div className="flex items-center gap-3 mb-3">
                    <HeartPulse className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Garantia de satisfação</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Se o resultado final não atender ao que foi aprovado no escopo, corrijo sem custo
                    adicional — sem discussão e sem burocracia.
                  </p>
                </div>
              </FadeIn>
            </div>
          </FadeIn>

          <div className="lg:col-span-3 space-y-3">
            {SCOPE.map((phase, i) => (
              <FadeIn key={i} direction="left" delay={i * 0.15}>
                <div
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${open === i
                    ? "border-primary/40 bg-secondary/60"
                    : "border-border bg-secondary/20"
                    }`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    aria-controls={`scope-panel-${i}`}
                    className="w-full flex items-center justify-between p-5 text-left gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`p-2 rounded-lg transition-colors ${open === i
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                          }`}
                      >
                        {phase.icon}
                      </span>
                      <span className="font-mono text-sm font-medium text-foreground">
                        {phase.phase}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {open === i && (
                    <div id={`scope-panel-${i}`} className="px-5 pb-5 pt-0">
                      <ul className="space-y-2.5">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-primary" />
                            </span>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Upsell exclusivo da Compra Definitiva — CTA direto, sem modal de seleção de plano.
const ZELADORIA_HREF = `https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent("Olá, Carlos! Gostaria de contratar a Compra Definitiva (R$ 2.400) INCLUINDO o pacote de Zeladoria pós-projeto (R$ 150/mês) para a Clínica Risodonto.")}`;

function Pricing() {

  return (
    <section id="investimento" className="py-28 px-6 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <FadeIn direction="up">
          <div className="text-center mb-6">
            <Label>Investimento</Label>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Investimento com retorno
              <br />
              <span style={{ color: "var(--accent)" }}>focado em captação</span>
            </h2>
          </div>
        </FadeIn>

        {/* ── Intro copy — derruba objeções ──────────────────────────────────── */}
        <FadeIn direction="up" delay={0.1}>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Sem surpresas ou contratos abusivos.</strong>{" "}
              Você escolhe como prefere investir: comece sem custo inicial no{" "}
              <strong className="text-foreground">modelo de assinatura</strong>, com tudo gerenciado por mim, ou pague apenas a construção na{" "}
              <strong className="text-foreground">compra definitiva</strong> e tenha o site e o domínio como propriedade exclusiva da clínica.
            </p>
          </div>
        </FadeIn>

        {/* ── Trust pills ────────────────────────────────────────────────────── */}
        <FadeIn direction="up" delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {[
              { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "Assine ou compre — você escolhe" },
              { icon: <HeartPulse className="w-3.5 h-3.5" />, text: "Setup zero na assinatura" },
              { icon: <Activity className="w-3.5 h-3.5" />, text: "Sem surpresas no final" },
              { icon: <Check className="w-3.5 h-3.5" />, text: "NF emitida · Parcelado disponível" },
            ].map((pill) => (
              <span
                key={pill.text}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground border border-border bg-secondary/50 px-3 py-1.5 rounded-full"
              >
                <span className="text-accent">{pill.icon}</span>
                {pill.text}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* ── Plan cards ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, index) => (
            <FadeIn key={plan.label} direction="up" delay={index * 0.15}>
              <div
                className={`relative rounded-2xl border flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${plan.highlight
                  ? "border-primary/60 bg-gradient-to-b from-primary/10 via-card to-secondary shadow-[0_0_40px_rgba(192,57,43,0.15)]"
                  : "border-border bg-card"
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 inset-x-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-xs font-mono tracking-widest uppercase px-5 py-1 rounded-b-xl shadow-lg">
                      ★ {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`p-8 flex flex-col flex-1 ${plan.badge ? "pt-11" : ""}`}>

                  {/* Plan icon + name */}
                  <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg mb-4 ${plan.highlight
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "bg-secondary text-accent border border-border"
                    }`}>
                    {plan.planIcon}
                  </div>

                  <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">
                    {plan.label}
                  </p>

                  {/* Tagline */}
                  <p className={`text-sm leading-snug mb-5 ${plan.highlight ? "text-foreground" : "text-muted-foreground"
                    }`}>
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-1">
                    <span
                      className="text-4xl font-bold text-foreground"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {plan.price}
                    </span>
                    {plan.priceNote && (
                      <span className="ml-2 text-xs font-mono text-muted-foreground align-middle">{plan.priceNote}</span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground/70 font-mono mb-6">{plan.period}</p>

                  {/* Delivery */}
                  <div className="flex items-center gap-2 mb-7 py-2.5 px-3.5 rounded-lg bg-secondary/60 border border-border">
                    <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span className="text-xs text-muted-foreground">
                      Prazo:{" "}
                      <strong className="text-foreground">{plan.delivery}</strong>
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${plan.highlight
                          ? "bg-primary/20 border-primary/40"
                          : "bg-secondary border-border"
                          }`}>
                          <Check className={`w-2.5 h-2.5 ${plan.highlight ? "text-primary" : "text-accent"
                            }`} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <a
                    href={plan.ctaHref}
                    target={plan.ctaHref.startsWith("http") ? "_blank" : undefined}
                    rel={plan.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`w-full py-3.5 rounded-xl text-sm font-semibold text-center transition-all duration-200 inline-flex items-center justify-center gap-2 ${plan.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-100 shadow-lg shadow-primary/30"
                      : "border border-border text-foreground hover:bg-secondary hover:border-primary/30"
                      }`}
                  >
                    {plan.label === "Sob Medida" ? (
                      <><Calendar className="w-4 h-4" /> {plan.ctaLabel}</>
                    ) : plan.highlight ? (
                      <><Sparkles className="w-4 h-4" /> {plan.ctaLabel}</>
                    ) : (
                      <>{plan.ctaLabel} <ArrowRight className="w-4 h-4" /></>
                    )}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ── Cuidados Contínuos banner (exclusivo Compra Definitiva) ───────────── */}
        <FadeIn direction="up" delay={0.5}>
          <div className="mt-8 rounded-2xl border border-border bg-card overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-7 md:p-8">

              {/* Icon column */}
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(192,57,43,0.12)", border: "1px solid rgba(192,57,43,0.25)" }}
              >
                <ShieldCheck className="w-6 h-6" style={{ color: "var(--primary)" }} />
              </div>

              {/* Text column */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-base font-semibold text-foreground">Cuidados Contínuos &amp; Infraestrutura</h3>
                  <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-0.5 rounded-full">Exclusivo Compra Definitiva · Sem fidelidade</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  Você escolheu ser dono do seu site no plano de{" "}
                  <strong className="text-foreground">Compra Definitiva</strong>? Excelente. Para que você não precise se
                  preocupar em contratar servidores, manter certificados de segurança ou atualizar códigos manualmente,
                  ofereço um pacote de{" "}
                  <strong className="text-foreground">zeladoria pós-projeto</strong>.
                </p>
                {/* Includes chips */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {["🚀 Hospedagem ultra-rápida", "🔒 SSL (https)", "💾 Backups automáticos", "📝 Atualizações de conteúdo"].map((item) => (
                    <span key={item} className="text-xs font-mono text-muted-foreground/80 border border-border/60 bg-secondary/40 px-2.5 py-1 rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price column */}
              <div className="shrink-0 text-left md:text-right">
                <p className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  R$&nbsp;150
                </p>
                <p className="text-xs text-muted-foreground font-mono">/ mês</p>
                <a
                  href={ZELADORIA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent border border-accent/30 hover:bg-accent/10 px-3.5 py-2 rounded-lg transition-colors duration-200"
                >
                  Adicionar Zeladoria ao Projeto <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Footer note ────────────────────────────────────────────────────── */}
        <FadeIn direction="up" delay={0.6}>
          <p className="text-center text-xs text-muted-foreground/50 font-mono mt-6">
            Valores em BRL · Pagamento parcelado disponível · Nota Fiscal emitida
          </p>
        </FadeIn>

      </div>
    </section>
  );
}

function Timeline() {
  const steps = [
    {
      day: "Semana 1",
      title: "Diagnóstico & Prototipagem",
      desc: "Coleta de ativos visuais (fotos da clínica, marca) e construção da identidade visual voltada para alta conversão.",
    },
    {
      day: "Semana 2",
      title: "Engenharia Front-End",
      desc: "Codificação do layout utilizando a abordagem Mobile-First para garantir navegação fluida em smartphones.",
    },
    {
      day: "Semana 3",
      title: "Refinamento & Performance",
      desc: "Implementação das animações, auditoria de acessibilidade e otimização de velocidade de carregamento (SEO Técnico).",
    },
    {
      day: "Semana 4",
      title: "Aprovação & Go-Live",
      desc: "Apresentação do projeto ao corpo clínico, ajustes finos, publicação no domínio oficial e integração do WhatsApp.",
    },
  ];

  return (
    <section id="cronograma" className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="up">
          <div className="flex items-center gap-4 mb-10">
            <Calendar className="w-5 h-5 text-accent" />
            <h3
              className="text-2xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Cronograma de execução
            </h3>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-[92px] top-4 bottom-4 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent hidden md:block" />
          <div className="space-y-4 md:space-y-6">
            {steps.map((s, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.15}>
                {/* Desktop timeline row */}
                <div className="hidden md:flex gap-8 items-start">
                  <div className="w-[84px] shrink-0 text-right">
                    <span className="font-mono text-xs text-muted-foreground">{s.day}</span>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full border-2 border-primary bg-background z-10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="flex-1 pb-6 border-b border-border last:border-0">
                    <p className="text-sm font-semibold text-foreground mb-1">{s.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>

                {/* Mobile card timeline view (ultra-responsive <768px) */}
                <div className="md:hidden p-5 rounded-xl border border-border bg-card/60 backdrop-blur">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-accent font-mono text-xs font-medium mb-2">
                    {s.day}
                  </span>
                  <p className="text-base font-semibold text-foreground mb-1">{s.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="cta"
      className="py-32 px-6 border-t border-border relative overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(192,57,43,0.12) 0%, rgba(80,30,30,0.06) 50%, transparent 80%)" }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeIn direction="up" delay={0}>
          <Label>Próximo passo</Label>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <h2
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pronto para a Risodonto{" "}
            <span style={{ color: "var(--accent)" }}>aparecer no Google?</span>
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
            Uma conversa rápida é suficiente para alinhar a identidade visual da clínica,
            tirar todas as dúvidas e dar o primeiro passo com confiança.
          </p>
        </FadeIn>

        {/* Action buttons */}
        <FadeIn direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href={`https://wa.me/${CONTACT_PHONE}?text=${encodeURIComponent("Olá, Carlos! Gostaria de aprovar a proposta comercial da Clínica Risodonto.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-100 shadow-xl shadow-primary/25"
            >
              <MessageCircle className="w-5 h-5" />
              Aprovar Proposta no WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Aprova%C3%A7%C3%A3o%20da%20Proposta%20-%20Cl%C3%ADnica%20Risodonto&body=Ol%C3%A1%2C%20Carlos!%0A%0AGostaria%20de%20conversar%20sobre%20a%20proposta%20comercial%20da%20Cl%C3%ADnica%20Risodonto.`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-border bg-card text-foreground rounded-xl font-semibold hover:bg-secondary hover:border-primary/40 transition-all duration-200 shadow-sm"
            >
              <Mail className="w-5 h-5 text-primary" />
              Enviar por E-mail
            </a>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <div className="inline-flex flex-wrap items-center justify-center gap-6 py-4 px-8 rounded-2xl border border-border bg-secondary/40 backdrop-blur">
            <div className="text-center">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Válida até</p>
              <p className="text-sm font-medium text-foreground">{VALID_UNTIL}</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Referência</p>
              <p className="text-sm font-medium text-foreground font-mono">#PRO-2026-RSO-001</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Cliente</p>
              <p className="text-sm font-medium text-foreground">{CLIENT_NAME}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-6">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-md">
            <Smile className="w-4.5 h-4.5 text-primary-foreground" />
          </div>
          <p className="text-sm font-semibold text-foreground">
            Caos Dev · Carlos Henrique
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-muted-foreground">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-accent" />
              <span>{CONTACT_EMAIL}</span>
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5 text-accent" />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-accent" />
              <span>Portfólio Geral</span>
              <ExternalLink className="w-3 h-3 text-muted-foreground" />
            </a>
          </div>
        </div>

        <p className="text-xs text-muted-foreground/70 font-mono text-center max-w-md pt-3 border-t border-border/40">
          Proposta confidencial · Uso exclusivo de {CLIENT_NAME}
        </p>
      </div>
    </footer>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────

interface NavProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

function Nav({ isDarkMode, toggleTheme }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#escopo", label: "Proposta" },
    { href: "#investimento", label: "Investimento" },
    { href: "#cta", label: "Aprovar" },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center shadow-sm">
            <Smile className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="text-sm font-medium text-foreground">Caos Dev</span>
        </div>

        {/* Desktop links + theme toggle */}
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-200 ${l.href === "#cta"
                ? "font-semibold text-primary-foreground bg-primary px-3 py-1 rounded-lg hover:bg-primary/90 shadow-sm"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {l.label}
            </a>
          ))}

          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-border bg-secondary/40 hover:bg-secondary transition-all"
            title="Abrir portfólio completo em nova aba"
          >
            <Globe className="w-3.5 h-3.5 text-accent" />
            <span>Portfólio</span>
            <ExternalLink className="w-3 h-3 text-muted-foreground" />
          </a>

          {/* Theme toggle — desktop */}
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
            className="ml-1 w-8 h-8 rounded-full flex items-center justify-center border border-border bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all duration-200 shadow-sm"
          >
            <motion.div
              key={isDarkMode ? "sun" : "moon"}
              initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Modo claro" : "Modo escuro"}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-border bg-secondary text-muted-foreground"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span className={`w-5 h-px bg-foreground transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-5 h-px bg-foreground transition-opacity duration-200  ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-px bg-foreground transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm py-3 px-4 rounded-lg transition-colors duration-200 flex items-center min-h-[44px] ${l.href === "#cta"
                ? "font-semibold text-primary-foreground bg-primary justify-center text-center hover:bg-primary/90"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
            >
              {l.label}
            </a>
          ))}

          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-sm py-3 px-4 rounded-lg border border-border bg-secondary/40 text-foreground transition-colors duration-200 flex items-center justify-between min-h-[44px]"
          >
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-accent" />
              Portfólio Geral
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── ROOT ────────────────────────────────────────────────────────────────────

export default function App() {
  // Light Mode como padrão — padrão da área da saúde e clínicas
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // Injeta / remove a classe 'dark' no <html> para acionar o tema CSS
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Nav isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Portfolio />
      <Scope />
      <Pricing />
      <Timeline />
      <CTA />
      <Footer />
    </div>
  );
}
