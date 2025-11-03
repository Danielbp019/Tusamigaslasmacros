export const cardsData = [
  {
    id: "tarjeta-1",
    cardIcon: "bi-book",
    title: "Conceptos básicos",
    items: [
      { href: "/macro-definicion/#1", icon: "bi-question-circle-fill", text: "¿Qué es una macro?" },
      { href: "/macro-definicion/#2", icon: "bi-toggles", text: "¿Qué se puede/no se puede hacer?" },
      { href: "/macro-definicion/#3", icon: "bi-folder-symlink-fill", text: "¿Dónde se guardan?" },
      { href: "/macro-definicion/#4", icon: "bi-magic", text: "¿Cómo hacer una macro?" },
    ],
  },
  {
    id: "tarjeta-2",
    cardIcon: "bi-diagram-3-fill",
    title: "Tipos y Estructura de macros",
    items: [
      { href: "/macro-tipoestructura/#tiposyestructura", icon: "bi-card-heading", text: "Definición" },
      { href: "/macro-tipoestructura/#tipotexto", icon: "bi-chat-left-text-fill", text: "Macros tipo texto" },
      { href: "/macro-tipoestructura/#habilidades", icon: "bi-lightning-charge-fill", text: "Macros de habilidades" },
      { href: "/macro-tipoestructura/#equipo", icon: "bi-shield-shaded", text: "Macros de equipo" },
    ],
  },
  {
    id: "tarjeta-3",
    cardIcon: "bi-chat-left-text-fill",
    title: "Macros tipo texto",
    items: [
      {
        title: "Acción",
        icon: "bi-cursor-fill",
        links: [
          { href: "/macro-tipotexto/#t", icon: "bi-person-badge", text: "Objetivo %t" },
          { href: "/macro-tipotexto/#f", icon: "bi-person-bounding-box", text: "Foco %f" },
        ],
      },
      {
        title: "Canales",
        icon: "bi-broadcast",
        links: [
          { href: "/macro-tipotexto/#utilizacion", text: "Utilización de canales" },
          { href: "/macro-tipotexto/#listacanales", text: "Ver lista de canales" },
        ],
      },
    ],
  },
  {
    id: "tarjeta-4",
    cardIcon: "bi-lightning-charge-fill",
    title: "Macros de habilidades",
    items: [
      { href: "/macro-habilidades/#definicion7", icon: "bi-card-heading", text: "Definición" },
      {
        title: "Acciones de combate",
        icon: "bi-hammer",
        links: [
          { href: "/macro-habilidades/#cast", text: "Comando /cast" },
          { href: "/macro-habilidades/#castsequence", text: "Comando /castsequence" },
        ],
      },
      {
        title: "Acciones sueltas",
        icon: "bi-box-arrow-in-down-left",
        links: [
          { href: "/macro-habilidades/#stopcasting", text: "Comando /stopcasting" },
          { href: "/macro-habilidades/#cleartarget", text: "Comando /cleartarget" },
          { href: "/macro-habilidades/#focus", text: "Comando /focus" },
          { href: "/macro-habilidades/#clearfocus", text: "Comando /clearfocus" },
          { href: "/macro-habilidades/#stopmacro", text: "Comando /stopmacro" },
          { href: "/macro-habilidades/#cancelaura", text: "Comando /cancelaura" },
          { href: "/macro-habilidades/#cancelform", text: "Comando /cancelform" },
          { href: "/macro-habilidades/#startattack", text: "Comando /startattack" },
          { href: "/macro-habilidades/#stopattack", text: "Comando /stopattack" },
        ],
      },
      {
        title: "Acciones de mascotas",
        icon: "bi-github",
        links: [
          { href: "/macro-habilidades/#petaggressive", text: "Comando /petaggressive" },
          { href: "/macro-habilidades/#petattack", text: "Comando /petattack" },
          { href: "/macro-habilidades/#petdefensive", text: "Comando /petdefensive" },
          { href: "/macro-habilidades/#petfollow", text: "Comando /petfollow" },
          { href: "/macro-habilidades/#petpassive", text: "Comando /petpassive" },
          { href: "/macro-habilidades/#petstay", text: "Comando /petstay" },
        ],
      },
      {
        title: "Acciones generales",
        icon: "bi-gear-wide-connected",
        links: [
          { href: "/macro-habilidades/#show", text: "Comando #show" },
          { href: "/macro-habilidades/#showcooldown", text: "Comando #showcooldown" },
          { href: "/macro-habilidades/#showtooltip", text: "Comando #showtooltip" },
          { href: "/macro-habilidades/#exclamacion", text: "La ! en los hechizos" },
        ],
      },
    ],
  },
  {
    id: "tarjeta-5",
    cardIcon: "bi-toggles2",
    title: "Condiciones",
    items: [
      { href: "/macro-condiciones/#definicion8", icon: "bi-card-heading", text: "Definición" },
      {
        title: "Condiciones de objetivo",
        icon: "bi-bullseye",
        links: [
          { href: "/macro-condiciones/#harm", text: "Condición [harm]" },
          { href: "/macro-condiciones/#help", text: "Condición [help]" },
        ],
      },
      {
        title: "Condiciones de botón",
        icon: "bi-hand-index-thumb-fill",
        links: [
          { href: "/macro-condiciones/#button", text: "Condición [button]" },
          { href: "/macro-condiciones/#modifier", text: "Condición [modifier]" },
        ],
      },
      {
        title: "Condiciones de estado",
        icon: "bi-heart-pulse-fill",
        links: [
          { href: "/macro-condiciones/#combat", text: "Condición [combat]" },
          { href: "/macro-condiciones/#dead", text: "Condición [dead]" },
          { href: "/macro-condiciones/#exists", text: "Condición [exists]" },
          { href: "/macro-condiciones/#stealth", text: "Condición [stealth]" },
          { href: "/macro-condiciones/#stanceoform", text: "Condición [stance] o [form]" },
        ],
      },
      {
        title: "Condiciones de destino específico",
        icon: "bi bi-crosshair2",
        links: [
          { href: "/macro-condiciones/#target", text: "Condición [@target]" },
          { href: "/macro-condiciones/#targettarget", text: "Condición [@targettarget]" },
          { href: "/macro-condiciones/#focus", text: "Condición [@focus]" },
          { href: "/macro-condiciones/#focustarget", text: "Condición [@focustarget]" },
          { href: "/macro-condiciones/#player", text: "Condición [@player]" },
          { href: "/macro-condiciones/#mouseover", text: "Condición [@mouseover]" },
          { href: "/macro-condiciones/#mouseovertarget", text: "Condición [@mouseovertarget]" },
          { href: "/macro-condiciones/#nombre", text: "Condición [@nombre]" },
        ],
      },
      {
        title: "Condiciones de terreno",
        icon: "bi-geo-alt-fill",
        links: [
          { href: "/macro-condiciones/#flyable", text: "Condición [flyable]" },
          { href: "/macro-condiciones/#flying", text: "Condición [flying]" },
          { href: "/macro-condiciones/#indoors", text: "Condición [indoors]" },
          { href: "/macro-condiciones/#outdoors", text: "Condición [outdoors]" },
          { href: "/macro-condiciones/#mounted", text: "Condición [mounted]" },
          { href: "/macro-condiciones/#swimming", text: "Condición [swimming]" },
        ],
      },
      { href: "/macro-condiciones/#channeling", icon: "bi-reception-4", text: "Condición [channeling]" },
    ],
  },
  {
    id: "tarjeta-6",
    cardIcon: "bi-shield-shaded",
    title: "Macros de equipo",
    items: [
      { href: "/macro-equipo/#definicion9", icon: "bi-card-heading", text: "Definición" },
      { href: "/macro-equipo/#use", icon: "bi-hand-index-thumb", text: "Comando /use" },
      { href: "/macro-equipo/#equip", icon: "bi-person-arms-up", text: "Comando /equip" },
      { href: "/macro-equipo/#equipslot", icon: "bi-person-vcard", text: "Comando /equipslot" },
      { href: "/macro-equipo/#equipset", icon: "bi-person-check-fill", text: "Comando /equipset" },
    ],
  },
  {
    id: "tarjeta-7",
    cardIcon: "bi-twitter",
    title: "Macros de mascotas mansas",
    items: [
      { href: "/macro-mascotas/#definicion10", icon: "bi-card-heading", text: "Definición" },
      { href: "/macro-mascotas/#summonpet", icon: "bi-plus-circle-dotted", text: "Comando /summonpet" },
      { href: "/macro-mascotas/#randomfavoritepet", icon: "bi-shuffle", text: "Comando /randomfavoritepet" },
    ],
  },
  {
    id: "tarjeta-8",
    cardIcon: "bi-code-slash",
    title: "Scripts",
    items: [
      { href: "/macro-script/#macroscript", icon: "bi-card-heading", text: "Definición" },
      { href: "/macro-script/#scripts-listos", icon: "bi-file-earmark-code-fill", text: "Scripts listos para usar" },
    ],
  },
];
