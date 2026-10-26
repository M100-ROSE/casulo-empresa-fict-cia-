# Briefing — CASULO

**Clínica de psicologia e cuidado integral**
Versão 1.0 · Responsável: Day · 26/10/2026 · Status: pronto para design

---

## 1. Visão geral

| Item | Definição |
|---|---|
| **Nicho** | Saúde mental — clínica de psicologia e cuidado integral |
| **Público** | Adultos de 25 a 45 anos, urbanos, em situação de ansiedade, burnout ou luto; também casais e famílias que buscam acompanhamento. Familiaridade média com tecnologia, pouca paciência para jargão clínico. |
| **Objetivo do site** | Gerar agendamentos para uma primeira conversa de 30 minutos (online ou presencial) e reduzir o medo do primeiro contato. |
| **Local fictício** | Rua das Acácias, 214 — Vila Madalena, São Paulo/SP |
| **Tom de voz** | Próximo e adulto. Frases curtas, primeira pessoa do plural, zero infantilização. Explica sem diagnosticar. Não promete cura. |

**Promessa central:** "Você não precisa dar conta sozinho." O site deve parecer um lugar, não uma vitrine de serviços.

**Conversões principais**
1. Agendar primeira conversa (primária, sempre visível).
2. Ler sobre uma terapia específica.
3. Conhecer a equipe.

---

## 2. Sentimento alvo

**Sentimento alvo: acolhimento, cuidado e calma.**

**Declaração:** o visitante deve sentir que chegou a um lugar seguro, onde pode diminuir o ritmo antes de falar de si.

Como o design produz isso:

- **Curvas orgânicas:** raios de 28 a 40 px em fotos e cartões; divisores de seção em arco, nunca diagonais.
- **Paleta terrosa de baixa saturação:** verde-sálvia, terracota queimada, creme. Nenhum azul-hospital, nenhum vermelho de alerta.
- **Tipografia serifada humanista nos títulos:** Fraunces com peso 400 e optical size alto transmite calor e autoria, não frieza corporativa.
- **Ritmo lento:** seções com 120 px de respiro, corpo de texto em 18 px com entrelinha 1,67, largura máxima de 64 caracteres.
- **Luz natural:** fotografia com janelas, madeira, plantas e pessoas sem pose. Sem consultório asséptico.
- **Movimento discreto:** entradas de 600–700 ms, deslocamento de 16 px, sem parallax, sem carrossel automático.
- **Microcopy humana:** "Como você prefere ser chamado(a)?" em vez de "Nome completo".

---

## 3. Identidade verbal

**Nome:** CASULO
**Justificativa:** o casulo é abrigo e transformação ao mesmo tempo — acolhe antes de abrir. É curto, pronunciável, não infantil e não tem carga clínica.

**Tagline:** *Um lugar para pousar.*

**Headlines de exemplo**
1. "Você não precisa explicar tudo de uma vez."
2. "Terapia para o que pesa no dia a dia."
3. "Comece com uma conversa de 30 minutos. Sem compromisso."
4. "Cuidar de si também é um jeito de seguir."
5. "Aqui, o seu tempo tem tempo."

**Microcopy de apoio**
- CTA principal: "Agendar primeira conversa"
- CTA secundário: "Conhecer as terapias"
- Formulário: "O que te trouxe até aqui? (opcional)"
- Confirmação: "Recebemos. Alguém da nossa equipe responde em até um dia útil."
- Rodapé ético: "Se você está em crise agora, ligue 188 (CVV) — atendimento 24h e gratuito."

**Vocabulário preferido:** conversa, acompanhamento, tempo, espaço, cuidado, escuta.
**Vocabulário proibido:** paciente, tratamento garantido, cura, distúrbio, "sorria mais", "pensamento positivo".

---

## 4. Paleta de cores

| Papel | Nome | HEX | Uso |
|---|---|---|---|
| Primária | Sálvia profunda | `#4F6B52` | Botões, links, ícones ativos, faixa de CTA |
| Secundária | Terracota queimada | `#A9512F` | Destaques, foco, números de etapa, hover de link |
| Acento | Areia quente | `#C98A5E` | Formas decorativas, sublinhados, detalhes |
| Fundo | Creme de papel | `#FBF7F0` | Fundo global |
| Superfície | Areia clara | `#F3EDE3` | Cartões, blocos alternados |
| Texto | Marrom-tinta | `#2C2A24` | Títulos e corpo |
| Texto suave | Cinza-oliva | `#6E6659` | Legendas, metadados, texto auxiliar |
| Borda | Linho | `#D8CDBC` | Bordas de 1,5 px, divisores |
| Apoio | Sálvia clara | `#8FA98C` | Gráficos, tags, estados suaves |

**Regras de contraste (WCAG 2.2)**

| Combinação | Razão | Nível |
|---|---|---|
| `#2C2A24` sobre `#FBF7F0` | 13,4:1 | AAA |
| `#2C2A24` sobre `#F3EDE3` | 12,3:1 | AAA |
| `#FBF7F0` sobre `#4F6B52` | 5,5:1 | AA |
| `#FBF7F0` sobre `#A9512F` | 5,0:1 | AA |
| `#6E6659` sobre `#FBF7F0` | 5,3:1 | AA |
| `#4F6B52` como texto sobre `#FBF7F0` | 5,5:1 | AA |
| `#A9512F` como texto sobre `#FBF7F0` | 5,0:1 | AA |

**Restrições:** areia `#C98A5E` nunca é usada como texto sobre creme (2,7:1). Sálvia clara é apenas decorativa ou com texto tinta. Nenhuma combinação depende só de cor para indicar estado.

---

## 5. Tipografia

| Papel | Fonte | Peso | Uso |
|---|---|---|---|
| Display / títulos | **Fraunces** (Google Fonts, variável, opsz 9–144) | 300–500 | H1, H2, números de destaque, citações |
| Corpo / UI | **Karla** (Google Fonts) | 400, 500, 700 | Parágrafos, botões, navegação, formulários |

**Escala desktop (base 16 px)**

| Token | px | rem | Entrelinha | Letter-spacing |
|---|---:|---:|---:|---:|
| Display | 72 | 4.5 | 76 px (1.06) | −0,02em |
| H1 | 56 | 3.5 | 62 px (1.11) | −0,015em |
| H2 | 40 | 2.5 | 48 px (1.20) | −0,01em |
| H3 | 28 | 1.75 | 36 px (1.29) | 0 |
| Lead | 22 | 1.375 | 34 px (1.55) | 0 |
| Corpo | 18 | 1.125 | 30 px (1.67) | 0 |
| Corpo pequeno | 16 | 1.0 | 26 px (1.63) | 0 |
| Legenda | 14 | 0.875 | 22 px (1.57) | 0,01em |
| Overline | 13 | 0.8125 | 18 px (1.38) | 0,12em, caixa alta |

**Escala mobile (≤ 767 px):** Display 44/48; H1 36/42; H2 30/38; H3 24/32; Lead 20/30; Corpo 17/28; Corpo pequeno 16/26; Legenda 14/21.

**Regras:** títulos nunca em caixa alta; itálico de Fraunces apenas em citações; máximo de duas famílias; peso 300 só a partir de 40 px. `font-display: swap` com fallback Georgia / system-ui.

---

## 6. Layout e componentes

### Direção de layout — **editorial orgânico assimétrico**

Grid de 12 colunas, largura máxima **1240 px**, gutter **24 px**, margem lateral `clamp(24px, 6vw, 88px)`. A coluna de leitura ocupa **6 colunas deslocadas** (col. 2–7), criando assimetria à esquerda. Imagens grandes sangram da coluna 7 à 12 e podem avançar 40 px na margem. Nada é centralizado por padrão, exceto citações.

- Seções com **120 px** de espaço vertical (mobile: 72 px).
- Divisores de seção em **arco suave** (curva de 80 px de altura), nunca retos.
- Fotos em proporção **4:5** (retrato) e **3:2**, sempre com raio de 28 px; uma foto por seção pode ter raio 40 px e formato de arco.
- Sombras: `0 20px 60px rgba(44,42,36,0.08)` apenas em cartões flutuantes. Sem sombra em botões.
- Navegação fixa no topo, fundo creme com 92% de opacidade e desfoque de 12 px; altura 76 px (mobile 64 px).
- CTA principal também fixo no rodapé em mobile (barra de 72 px).

### Breakpoints

| Nome | Largura | Grid | Comportamento |
|---|---:|---|---|
| XS | 360–479 | 4 col, gutter 16 | Tudo em coluna única; imagens 4:5 |
| SM | 480–767 | 4 col, gutter 16 | Cartões empilhados |
| MD | 768–1023 | 8 col, gutter 20 | Texto em 6 col centrais; menu completo |
| LG | 1024–1279 | 12 col, gutter 24 | Assimetria ativa; CTA no header |
| XL | 1280–1439 | 12 col, gutter 24 | Máximo 1240 px |
| 2XL | ≥ 1440 | 12 col | Margens crescem, conteúdo fixo |

### Componentes e estados

**Botão primário**
- Default: fundo `#4F6B52`, texto `#FBF7F0`, altura 56 px, padding 32 px, raio 999 px, Karla 700 16 px.
- Hover: fundo `#3F5742`, transição 200 ms.
- Focus: anel de 3 px `#A9512F` com offset de 3 px + anel interno creme de 2 px.
- Active: `scale(0.99)`.
- Disabled: opacidade 45%, cursor not-allowed.
- Loading: texto "Enviando…" + indicador circular de 18 px, largura travada.

**Botão secundário:** fundo transparente, borda 1,5 px `#4F6B52`, texto sálvia; hover preenche sálvia e texto creme.

**Link de texto:** sublinhado 1 px com offset 4 px; hover engrossa para 2 px e muda para terracota.

**Campo de formulário:** altura 52 px, raio 14 px, borda 1,5 px `#D8CDBC`, fundo branco; label acima em 14 px/500; foco borda sálvia 2 px + anel areia 3 px; erro borda terracota + mensagem 14 px com ícone, nunca só cor; sucesso com check sálvia.

**Cartão de terapia:** superfície `#F3EDE3`, raio 28 px, padding 32 px, título H3, texto 16 px, link com seta. Hover: eleva 4 px e escurece levemente a superfície.

**Cartão de equipe:** foto 4:5 com raio 28 px, nome em Fraunces 24 px, CRP em 14 px, especialidades em tags areia.

**Depoimento:** sem foto, sem nome completo ("M., 34"), citação em Fraunces 28 px, aspas decorativas em areia.

**Acordeão de dúvidas:** linha divisória 1 px, ícone +/−, altura mínima 64 px, animação de 240 ms.

### Animações

- Entrada de bloco: opacidade 0→1 + `translateY(16px)`, 700 ms, `cubic-bezier(0.22, 0.61, 0.36, 1)`, stagger de 80 ms.
- Hover de imagem: `scale(1.02)` em 600 ms.
- Nenhum parallax, nenhum vídeo automático com som, nenhum contador animado.
- `prefers-reduced-motion: reduce`: remove todas as entradas e transições não essenciais; conteúdo aparece imediatamente.

---

## 7. Estrutura de páginas e conteúdo

### Mapa do site

1. Home
2. A Casulo (sobre + manifesto)
3. Terapias (individual, casal, adolescentes, grupo de burnout)
4. Equipe
5. Primeira conversa (formulário)
6. Conteúdo (artigos)
7. Contato e localização

### Wireframe — Home

```
┌──────────────────────────────────────────────────────────────┐
│ [CASULO]   A Casulo  Terapias  Equipe  Conteúdo   [Agendar]  │ 76px
├──────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌ texto col 2–7 ─────────────┐   ┌ foto 4:5 arco ───────┐  │
│   │ overline: PSICOLOGIA        │   │ pessoa na janela,    │  │
│   │ CLÍNICA                    │   │ luz natural          │  │
│   │ H1: Você não precisa       │   │                      │  │
│   │ dar conta sozinho.          │   │                      │  │
│   │ lead: Primeira conversa    │   │                      │  │
│   │ de 30 min, sem custo.      │   │                      │  │
│   │ [Agendar] [Como funciona]  │   └──────────────────────┘  │
│   └────────────────────────────┘                             │
│                                     ↓ divisor em arco        │
├──────────────────────────────────────────────────────────────┤
│  COMO FUNCIONA — 3 passos em colunas desalinhadas             │
│  01 Conversa  02 Combinamos  03 Acompanhamento               │
│     de 30 min     o formato      semanal ou quinzenal        │
├──────────────────────────────────────────────────────────────┤
│  PARA QUEM — 4 cartões areia (ansiedade, burnout, luto,      │
│  relações) com link "Entender o acompanhamento"              │
├──────────────────────────────────────────────────────────────┤
│  FOTO FULL-BLEED 3:2 com legenda 14px à direita              │
├──────────────────────────────────────────────────────────────┤
│  EQUIPE — 3 retratos 4:5, nome, CRP, especialidade           │
├──────────────────────────────────────────────────────────────┤
│  CITAÇÃO centralizada: "Cuidar é aprender a esperar."        │
├──────────────────────────────────────────────────────────────┤
│  DÚVIDAS — acordeão de 6 itens                                │
├──────────────────────────────────────────────────────────────┤
│  LOCAL — mapa em tons de areia + endereço + horários         │
├──────────────────────────────────────────────────────────────┤
│  CTA final superfície sálvia: "Vamos começar?" [Agendar]     │
├──────────────────────────────────────────────────────────────┤
│  Rodapé: contato, CRP, redes, aviso CVV 188, privacidade     │
└──────────────────────────────────────────────────────────────┘
```

### Conteúdo por página

**Home**
- Hero: overline "PSICOLOGIA CLÍNICA · SÃO PAULO", H1, lead, dois CTAs, selo "Atendimento online e presencial".
- Como funciona: 3 etapas, cada uma com número em Fraunces 40 px e texto de 2 linhas.
- Para quem: 4 cartões com sintomas em linguagem comum ("acordar já cansado", "medo constante", "perda recente", "conversas que sempre terminam igual").
- Faixa de credibilidade: "Equipe com 12 psicólogos · CRP 06/12345 · 9 anos de clínica".
- Equipe: 3 perfis + link "Ver toda a equipe".
- Depoimento único, anônimo.
- Dúvidas: valores, convênio (não atende), sigilo, frequência, online, cancelamento.
- Local: endereço, horários (seg–sex 8h–20h, sáb 8h–13h), estacionamento, acessibilidade.
- CTA final.

**Terapias:** uma página por modalidade com 600–900 palavras, "para quem é", "como funciona", "frequência", "valores a partir de R$ 180/sessão", CTA e leitura relacionada.

**Primeira conversa:** formulário em 3 etapas (dados, preferência de horário, mensagem livre), indicador de progresso, promessa de resposta em 1 dia útil, alternativa por WhatsApp e telefone. Sem campos obrigatórios além de nome, e-mail/telefone e consentimento LGPD.

**Conteúdo:** artigos assinados pela equipe, 800–1.200 palavras, sem diagnóstico, com aviso editorial e data de revisão.

---

## 8. Acessibilidade e performance

**Acessibilidade**
- Contraste mínimo AA em todo texto; AAA para corpo quando possível (já especificado).
- Foco visível em todos os elementos interativos: anel terracota de 3 px + offset.
- Alvos de toque ≥ 44×44 px; links de rodapé com 44 px de altura.
- HTML semântico, um H1 por página, hierarquia de headings sem saltos.
- Formulários com `<label>` visível, `autocomplete`, mensagens de erro vinculadas e resumo de erros no topo.
- Navegação completa por teclado; menu mobile com foco preso e tecla Esc.
- Imagens com alt descritivo, nunca "imagem de fundo". Fotos decorativas com alt vazio.
- Nenhum conteúdo essencial apenas em hover. Sem carrossel automático.
- `prefers-reduced-motion` respeitado em todas as animações.
- Vídeos (se houver) sem autoplay, com legendas e controles.
- Página "Acessibilidade" informando atendimento em Libras sob agendamento.

**Performance (metas)**
- LCP < 2,0 s em 4G; CLS < 0,05; INP < 150 ms.
- Peso da home < 900 KB; imagens em AVIF/WebP, responsivas, `loading="lazy"` exceto hero.
- Fontes em WOFF2, subset latino, `preload` apenas de Fraunces 400 e Karla 400.
- Sem bibliotecas de animação pesadas; animações em CSS.
- Mapa carregado sob demanda (poster estático até interação).
- Lighthouse ≥ 95 em Performance, Acessibilidade e SEO no mobile.

---

## 9. O que NÃO fazer

**Anti-padrões visuais proibidos**
- Azul-hospital, branco asséptico, batas, jalecos e estetoscópios.
- Fotos de banco de imagem com aperto de mão, pessoas sorrindo para a câmera ou "cérebro colorido".
- Gradientes arco-íris, neon, vidro fosco ou qualquer estética tech.
- Cards com sombra dura e cantos de 4 px; layouts simétricos de três colunas iguais.
- Ícones de linha fininha em excesso; mais de 6 ícones na home.
- Tipografia toda em caixa alta, condensada ou script.
- Cores de urgência (vermelho vivo, laranja), contadores, escassez, "últimas vagas".
- Copy que promete resultado, diagnostica ou romantiza sofrimento ("sua dor te faz mais forte").
- Carrossel automático, parallax, cursor customizado, som.
- Formulário longo no hero ou pedido de dados sensíveis antes do primeiro contato.

---

## 10. Diferenciação vs os outros briefings

**Como esse site é diferente dos outros 4**

| Eixo | CASULO (este) | BRASA | TORNO | GIRA | LASTRO |
|---|---|---|---|---|---|
| Base cromática | Creme + sálvia + terracota | Preto + volt + vermelho | Marfim + espresso + ouro | Creme + coral + amarelo | Branco + navy + teal |
| Tipografia | Serif humanista + sans calorosa | Condensada industrial | Serif editorial + sans geométrica | Rounded + sans arredondada | Sans técnica + mono |
| Forma | Curvas orgânicas, arcos | Diagonais, retas, 0 raio | Hairlines, retas, 0 raio | Blobs, cartões 32 px | Grid modular, 8 px |
| Densidade | Baixa, muito respiro | Média-alta, tipografia gigante | Baixa, margens amplas | Média, colagem | Alta, dados |
| Ritmo de motion | Lento (600–700 ms) | Rápido (120–180 ms) | Muito lento (800–1200 ms) | Saltitante (280–420 ms) | Discreto (150–200 ms) |
| Emoção | Acolhimento | Urgência | Exclusividade | Diversão | Controle |

- **vs BRASA:** CASULO não usa preto, não usa caixa alta condensada, não tem urgência nem CTA agressivo. O movimento é lento e a leitura é longa.
- **vs TORNO:** ambos são claros e editoriais, mas TORNO usa marfim + ouro, grade rígida, hairlines, 0 raio e tipografia pequena. CASULO usa curvas, terracota, fotos em arco e calor humano explícito.
- **vs GIRA:** CASULO é adulto e contido; GIRA é saturado, arredondado e brincalhão. Nenhuma sobreposição de paleta além do creme de fundo.
- **vs LASTRO:** CASULO não tem dashboard, tabela, gráfico ou densidade informacional; LASTRO não tem fotografia emocional nem curvas.

**Teste de diferenciação:** se a home fosse exibida sem logo e sem texto, ainda seria reconhecida pelo arco da foto, pelo verde-sálvia e pela serifa Fraunces.
