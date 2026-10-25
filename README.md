# Letramento Digital para Idosos

Projeto acadêmico de inclusão digital desenvolvido por Douglas Melere no contexto da UNINTER. Organiza aulas sobre uso do computador, internet, comunicação, serviços digitais, segurança e finanças.

**[Abrir demonstração](https://douglasmelere.github.io/letramento-digital-uninter/)**

## Recursos

- Seis módulos com aulas, materiais complementares e quizzes.
- Navegação por módulos e marcação de conclusão de aulas.
- Interface em português, com textos ampliados e controles de teclado.
- Arquivos de apoio locais em `public/media/` e `public/resources/`.

**Stack:** React, TypeScript, Vite, Tailwind CSS e Lucide.

## Executar e verificar

Use Node.js 22 e npm:

```sh
npm ci
npm run dev
```

Abra o endereço informado pelo Vite. A interface atual usa dados locais e não depende de uma conexão com Supabase.

```sh
npm run typecheck
npm run lint
npm run build
```

## Publicação no GitHub Pages

O site é publicado a partir da pasta **`docs/` na branch `master`**. Essa pasta contém o resultado da compilação, não os arquivos-fonte React.

Após alterar o código:

```sh
npm ci
npm run build:pages
git add docs
git commit -m "build: update GitHub Pages site"
git push origin master
```

Revise e registre também as alterações de fonte antes de publicar. O build configura o caminho `/letramento-digital-uninter/`, e `docs/.nojekyll` evita processamento por Jekyll.

## Organização

- `src/components/`: telas e controles de aprendizagem.
- `src/data/modules.ts`: módulos, aulas, links e perguntas.
- `public/`: materiais e imagens.
- `docs/`: versão compilada para a demonstração pública.

## Limitações

O progresso fica apenas na memória da aba e é perdido ao recarregar a página. Vídeos incorporados e materiais de terceiros dependem dos serviços externos e ainda precisam de uma revisão completa de disponibilidade e acessibilidade. A existência de materiais locais não torna o site inteiro utilizável offline. O projeto não possui validação de conformidade WCAG nem vínculo de serviço oficial com a instituição.
