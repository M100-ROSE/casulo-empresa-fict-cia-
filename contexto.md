# Contexto do projeto — CASULO

## Preferências

- Idioma: português do Brasil em tudo (código, comentários, conteúdo, commits).
- Entrega sempre com validação real: `npx tsc --noEmit`, `npx tsc -p tsconfig.node.json --noEmit` e `npm run build` antes de commitar.
- Commits no padrão `tipo: descrição` (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `style:`, `test:`), um assunto por commit.
- Não commitar `node_modules/`, `dist/` nem artefatos de build (cobertos pelo `.gitignore`).
- Nunca reescrever histórico nem usar `--force` sem autorização explícita.
- `briefing.md` é a especificação de design e não deve ser alterado por acaso.

## Estado atual

**CASULO** é o site institucional de uma clínica de psicologia e cuidado integral
fictícia, na Vila Madalena (São Paulo). Uma página só, em português, tom acolhedor,
paleta natural (sage, terracota, areia, creme) e tipografia Fraunces + Karla.

Stack atual:

- **Vite 7 + React 19 + TypeScript 5.9** (modo `strict`, `noUnusedLocals`, `noUnusedParameters`).
- Sem roteador, sem biblioteca de estado, sem framework de CSS. A navegação é por âncoras (`#casulo`, `#terapias`…).
- CSS puro em um único arquivo (`src/index.css`), mobile-first, com design tokens.
- Ilustrações são SVGs em JSX (`src/components/art/`), sem imagens externas.
- Único recurso externo: Google Fonts (Fraunces + Karla) carregado no `index.html`.

### Estrutura de pastas

```
/
├─ index.html            # shell do Vite: fontes, meta tags, #root
├─ package.json
├─ vite.config.ts
├─ tsconfig.json         # app (src)
├─ tsconfig.node.json    # vite.config.ts
├─ .gitignore            # node_modules, dist, *.local
├─ briefing.md           # especificação de design (fonte da verdade visual)
└─ src/
   ├─ main.tsx           # bootstrap do React
   ├─ App.tsx            # estado do menu mobile + ordem das seções
   ├─ index.css          # todos os estilos (tokens, seções, breakpoints, a11y)
   ├─ data/site.ts       # conteúdo do site, tipado (nav, heróis, terapias, equipe, faq…)
   └─ components/
      ├─ Header.tsx      # nav desktop + botão do menu (aria-expanded/aria-controls)
      ├─ MobileMenu.tsx   # painel de menu (dialog, Esc, foco preso, scroll lock)
      ├─ Hero.tsx, Steps.tsx, Therapies.tsx, Cred.tsx, Band.tsx,
      │  Team.tsx, Manifesto.tsx, Faq.tsx, Local.tsx, CtaFinal.tsx
      ├─ Footer.tsx, MobileCta.tsx
      ├─ Brand.tsx, ArrowIcon.tsx        # primitivos reutilizados
      └─ art/                            # HeroArt, BandArt, MapArt, CtaArcs (SVG inline)
```

### Como rodar

```
npm install      # instala dependências
npm run dev      # servidor de desenvolvimento (Vite, padrão http://localhost:5173)
npm run build    # tsc --noEmit + vite build → dist/
npm run preview  # serve o build de dist/ localmente
```

### Convenções

- **Design tokens** ficam em `:root` no topo de `src/index.css` (`--sage`, `--terracotta`,
  `--cream`, `--ink`, `--muted`, `--line`, `--radius`, `--section-y`, `--header-h`,
  `--ease`, `--shadow-card`…). Não criar cores/espaçamentos soltos: usar token.
- **Conteúdo** vive em `src/data/site.ts`, tipado por interfaces exportadas. Componentes
  só consomem, não escrevem texto fixo (exceto títulos estruturais das seções).
- **Classes CSS preservadas do site original.** A migração foi 1:1: as classes
  (`hero`, `therapy-grid`, `faq-list`, `cvv-note`, `menu-panel`…) são as mesmas do HTML
  estático antigo. Ao mexer no CSS, mantenha os nomes para não quebrar a paridade visual.
- `src/index.css` segue ordem fixa: tokens → base → utilitários → botões → header →
  menu mobile → seções (na ordem da página) → rodapé → acessibilidade → breakpoints
  (640 / 900 / 1200).
- Componentes são funções nomeadas exportadas (`export function Hero()`), sem `default`
  exceto `App`.
- Acessibilidade: skip link, `:focus-visible` com anel terracota, `aria-labelledby` nas
  seções, `prefers-reduced-motion` respeitado.

### Menu mobile (única mudança de mecanismo na migração)

Antes: menu abria por `:target` no CSS puro. Agora: estado React em `App.tsx`.

- Botão em `Header` com `aria-expanded` e `aria-controls="menu-mobile"`.
- Painel em `MobileMenu` recebe a classe `.menu-panel--open` quando aberto e fica
  montado no DOM com `hidden` quando fechado.
- Comportamentos: foco vai para o botão "Fechar" ao abrir, Esc fecha e devolve o foco
  ao botão do menu, Tab fica preso dentro do painel, `body` recebe scroll lock e o menu
  fecha sozinho ao passar de 900px (matchMedia), liberando o overflow.

## Histórico

### 2026-10-28 — Migração do site estático para React + TypeScript (Vite)

**Solicitação original:** migrar o site de uma página (HTML + CSS puros) para um projeto
React + TypeScript com Vite, mantendo o visual e o conteúdo idênticos, preservando
`briefing.md` e `.opencode/`.

**O que foi feito:**

1. Removido o site estático: `site/index.html` e `site/styles.css` (a pasta `site/`
   deixou de existir).
2. Criado o projeto Vite + React 19 + TS na raiz: `package.json`, `package-lock.json`,
   `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `index.html` (shell com as
   fontes e meta tags do original) e `.gitignore` (`node_modules`, `dist`, `*.local`).
3. Conteúdo extraído para `src/data/site.ts`, com interfaces para nav, passos, terapias,
   equipe, FAQ, fatos da credencial e do endereço e dados de contato.
4. Marcado dividido em componentes em `src/components/`: Header, MobileMenu, Hero, Steps,
   Therapies, Cred, Band, Team, Manifesto, Faq, Local, CtaFinal, Footer, MobileCta, mais
   os primitivos Brand e ArrowIcon. Os SVGs decorativos foram para `components/art/`
   (HeroArt, BandArt, MapArt, CtaArcs).
5. CSS portado para `src/index.css` praticamente sem alterações de regra; as únicas
   diferenças são o bloco do menu mobile (`:target` → `.menu-panel--open`) e o reset de
   `border`/`background`/`cursor`/`font` aplicado a `.menu-toggle` e `.menu-close`, que
   agora são `<button>` em vez de links.
6. Menu mobile reescrito como estado React com `aria-expanded`/`aria-controls`, Esc,
   foco preso, scroll lock e fechamento automático em ≥900px; painel montado com `hidden`
   quando fechado.
7. Limpeza de CSS morto herdado: removidos `.sr-only`, o token `--radius-lg` e os
   seletores `.menu-cvv a` e `.cvv-note a` (os blocos `.menu-cvv` e `.cvv-note`
   continuam, são usados).
8. Normalização de encoding: o `site/styles.css` antigo estava comitado em UTF-16LE;
   o CSS novo é UTF-8 sem BOM.
9. Validação: `npx tsc --noEmit` OK, `npx tsc -p tsconfig.node.json --noEmit` OK,
   `npm run build` OK, dev server respondendo HTTP 200.

**Arquivos alterados:**

- Removidos: `site/index.html`, `site/styles.css`
- Adicionados: `.gitignore`, `index.html`, `package.json`, `package-lock.json`,
  `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`, `src/main.tsx`, `src/App.tsx`,
  `src/index.css`, `src/data/site.ts`, `src/components/*` (incluindo `art/`)
- Preservados de propósito: `briefing.md`, `.opencode/`
- Atualizado: `contexto.md` (este arquivo)

**Pendências:**

- [ ] Trocar os links `href="#"` herdados do site antigo: "Conteúdo" (`src/data/site.ts`,
      pode ser removido do menu), "Ver toda a equipe" (`src/components/Team.tsx`) e
      "Privacidade" / "Acessibilidade" (`src/components/Footer.tsx`).
- [ ] `.faq`, `.team` e `.footer-col` são ganchos de classe sem regra CSS: decidir entre
      remover do JSX ou criar estilos (hoje só servem de âncora semântica).
- [ ] Não existe suíte de testes (nem unitários, nem e2e). O build type-checa, mas nada
      cobre o comportamento do menu mobile.
- [ ] Sem deploy configurado: `dist/` é gerado mas não há CI nem hosting definido.

## Modelo para novas entradas

```
### AAAA-MM-DD — Título curto da tarefa

**Solicitação original:** o que foi pedido, em uma ou duas frases.

**O que foi feito:**

1. passo
2. passo

**Arquivos alterados:**

- Adicionados: ...
- Modificados: ...
- Removidos: ...

**Pendências:**

- [ ] pendência
- [x] pendência concluída
```
