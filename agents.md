# Agents.md

Este documento define las reglas que deben seguir las IA al generar código para este proyecto.  
El objetivo es mantener consistencia en estilos, accesibilidad y uso de tecnologías.

## Tecnologías Usadas

- **Frontend**: HTML, CSS, JavaScript.
- **Frameworks**: Astro.js, DaisyUI.
- **Librerías**: bootstrap-icons.

## Reglas

- Toma tiempo para pensar.
- Usar el mcp context7 para buscar documentación.
- Los parrafos p deben contener la clase: class="antialiased".
- Todos las etiquetas h1 a h6 deben contener un aria-label o aria-labelledby segun corresponda.
- Agrega accesibilidad al código si se puede.
- Al usar componentes de DaisyUI, nunca se usan códigos legacy.

## Escala tipográfica:

- h1: text-5xl font-bold mb-6
- h2: text-4xl font-semibold mb-5
- h3: text-3xl font-semibold mb-4
- h4: text-2xl font-medium mb-3
- h5: text-xl font-medium mb-2
- h6: text-lg font-medium mb-2

## Arbol de archivos

```text
/
├── public/
│   ├── favicon.ico
│   └── fonts/
│       ├── AlexBrush/
│       ├── lifecraft/
│       └── Roboto/
├── src/
│   ├── assets/
│   │   ├── app.css
│   │   └── img/
│   ├── components/
│   │   ├── Buscador.astro
│   │   ├── Footer.astro
│   │   ├── Indice.astro
│   │   └── TextoAVoz.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── agradecimientos.astro
│       ├── macro-condiciones.astro
│       ├── macro-definicion.astro
│       ├── macro-habilidades.astro
│       ├── macro-mascotas.astro
│       ├── macro-tipotexto.astro
│       ├── macros-equipo.astro
│       ├── macros-tipoestructura.astro
│       └── temas.astro
├── .gitignore
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

### Comandos comunes

| Comando                   | Acción                                                               |
| :------------------------ | :------------------------------------------------------------------- |
| `npm install`             | Instala las dependencias del proyecto                                |
| `npm run dev`             | Inicia el servidor local de desarrollo en `localhost:4321`           |
| `npm run build`           | Genera la versión de producción en la carpeta `./dist/`              |
| `npm run preview`         | Permite previsualizar la versión de producción antes de desplegarla  |
| `npm run astro ...`       | Ejecuta comandos de la CLI de Astro, como `astro add`, `astro check` |
| `npm run astro -- --help` | Muestra la ayuda de la CLI de Astro                                  |
