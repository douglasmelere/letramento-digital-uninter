import { Module, ResourceLink } from '../types';

const moduleAssets = {
  1: { guide: 'resources/module-1-introducao.pdf' },
  2: { guide: 'resources/module-2-internet.pdf' },
  3: { guide: 'resources/module-3-comunicacao.pdf' },
  4: { guide: 'resources/module-4-servicos.pdf' },
  5: { guide: 'resources/module-5-seguranca.pdf' },
  6: { guide: 'resources/module-6-financas.pdf' },
} as const;

const moduleGuide = (moduleId: keyof typeof moduleAssets): ResourceLink => ({
  title: 'Guia rápido do módulo',
  url: moduleAssets[moduleId].guide,
  type: 'pdf',
  description: 'Checklist oficial gerado pela própria plataforma para consulta offline.',
});

export const modules: Module[] = [
  {
    id: 1,
    title: 'Introdução ao Computador',
    description:
      'Construa confiança com os componentes físicos do computador, postura correta e primeiros comandos.',
    icon: 'Monitor',
    color: 'bg-blue-500',
    level: 'Básico',
    duration: '2h30',
    focus: ['Hardware essencial', 'Uso do mouse', 'Teclado', 'Rotina segura'],
    lessons: [
      {
        id: 1,
        title: 'Conhecendo as partes do computador',
        content:
          'Aprenda a identificar monitor, CPU, teclado, mouse e cabos. Entenda a função de cada peça e como montá-las com segurança.',
        videoUrl: 'https://www.youtube.com/embed/ZSIrMa7JYc8',
        duration: '25 min',
        difficulty: 'Básica',
        tutorial: [
          {
            title: 'Tour guiado pelo equipamento',
            steps: [
              'Observe a tela e ajuste o ângulo de visão para evitar reflexos.',
              'Localize a CPU e verifique se os cabos estão firmes.',
              'Confira se mouse e teclado estão conectados às portas corretas.',
            ],
          },
        ],
        practice: {
          title: 'Checklist de preparação',
          checklist: [
            'Organizei os cabos para evitar tropeços.',
            'Identifiquei o botão de ligar/desligar.',
            'Sei diferenciar portas USB, HDMI e de energia.',
          ],
        },
        resources: [
          moduleGuide(1),
          {
            title: 'Guia ilustrado de hardware',
            url: 'https://www.saude.ba.gov.br/wp-content/uploads/2020/05/guia-computador.pdf',
            type: 'pdf',
          },
          {
            title: 'Vídeo: como posicionar o monitor',
            url: 'https://www.youtube.com/watch?v=JT2yaX6czXk',
            type: 'vídeo',
          },
        ],
        quiz: {
          question: 'Qual componente envia imagens para você visualizar?',
          options: ['CPU', 'Monitor', 'Teclado', 'Mouse'],
          correctAnswer: 1,
          explanation:
            'O monitor exibe as imagens geradas pela CPU, por isso é a tela onde você vê o que está acontecendo.',
        },
        completed: false,
      },
      {
        id: 2,
        title: 'Domine o mouse sem medo',
        content:
          'Use cliques simples, duplos e arraste com precisão. Aprenda a ajustar a velocidade e pratique movimentos finos.',
        videoUrl: 'https://www.youtube.com/embed/gzwmWsxBt74',
        duration: '20 min',
        difficulty: 'Básica',
        tutorial: [
          {
            title: 'Postura e movimento',
            steps: [
              'Apoie o punho e deslize o mouse com movimentos curtos.',
              'Clique com firmeza, mas sem força exagerada.',
              'Pratique clicar nos ícones do desktop com calma.',
            ],
          },
        ],
        practice: {
          title: 'Diário de cliques',
          checklist: [
            'Consigo clicar em um ícone sem abrir outro.',
            'Sei usar o botão direito para abrir menus.',
            'Arrastei um arquivo para a lixeira com sucesso.',
          ],
        },
        resources: [
          moduleGuide(1),
          {
            title: 'Jogo de coordenação com o mouse',
            url: 'https://www.abcya.com/games/time_travel_mouse',
            type: 'app',
          },
          {
            title: 'Artigo: ajuste de velocidade do cursor',
            url: 'https://support.microsoft.com/pt-br/windows/alterar-configura%C3%A7%C3%B5es-do-mouse',
            type: 'artigo',
          },
        ],
        quiz: {
          question: 'Para arrastar um item você deve:',
          options: [
            'Clicar duas vezes rapidamente.',
            'Segurar o botão esquerdo enquanto move o mouse.',
            'Usar o botão direito e selecionar arrastar.',
            'Apertar Enter e mover o mouse.',
          ],
          correctAnswer: 1,
          explanation:
            'O arraste acontece ao segurar o botão esquerdo pressionado enquanto movimenta o mouse até o destino.',
        },
        completed: false,
      },
      {
        id: 3,
        title: 'Teclado descomplicado',
        content:
          'Conheça teclas especiais, ative acentos e pratique digitação com ritmo e ergonomia.',
        videoUrl: 'https://www.youtube.com/embed/J_qW4UQbnFI',
        duration: '30 min',
        difficulty: 'Básica',
        tutorial: [
          {
            title: 'Mapa das teclas mais usadas',
            steps: [
              'Explore as fileiras com calma identificando letras e números.',
              'Teste Enter, Backspace, Shift e Caps Lock.',
              'Use a tecla Alt Gr para símbolos como @ e €.',
            ],
          },
        ],
        practice: {
          title: 'Rotina de digitação',
          checklist: [
            'Digitei meu nome completo com letras maiúsculas e minúsculas.',
            'Usei Backspace para corrigir erros.',
            'Inseri um símbolo como @ ou % em um texto.',
          ],
        },
        resources: [
          moduleGuide(1),
          {
            title: 'Site: exercícios de digitação',
            url: 'https://www.keybr.com/',
            type: 'app',
          },
          {
            title: 'PDF: atalhos básicos do Windows',
            url: 'https://download.microsoft.com/atalhos-teclado.pdf',
            type: 'pdf',
          },
        ],
        quiz: {
          question: 'Qual tecla apaga o caractere à esquerda do cursor?',
          options: ['Enter', 'Tab', 'Backspace', 'Shift'],
          correctAnswer: 2,
          explanation:
            'Backspace remove o último caractere digitado e é essencial para correções rápidas.',
        },
        completed: false,
      },
      {
        id: 4,
        title: 'Ligando e desligando com segurança',
        content:
          'Entenda a sequência correta para iniciar, reiniciar e desligar sem danificar o sistema.',
        videoUrl: 'https://www.youtube.com/embed/ZW0pfmCCqTI',
        duration: '15 min',
        difficulty: 'Básica',
        tutorial: [
          {
            title: 'Fluxo de desligamento',
            steps: [
              'Clique no botão Iniciar do Windows.',
              'Selecione o ícone de energia.',
              'Escolha Desligar e aguarde o término.',
            ],
          },
        ],
        practice: {
          title: 'Rotina diária',
          checklist: [
            'Salvei documentos antes de desligar.',
            'Fechei aplicativos abertos.',
            'Confirmei que o monitor apagou totalmente.',
          ],
        },
        resources: [
          moduleGuide(1),
          {
            title: 'Artigo: como reiniciar corretamente',
            url: 'https://support.microsoft.com/windows/reiniciar-pc',
            type: 'artigo',
          },
          {
            title: 'Vídeo: cuidado com quedas de energia',
            url: 'https://www.youtube.com/watch?v=8uGx8wZc6W8',
            type: 'vídeo',
          },
        ],
        quiz: {
          question: 'Por que não devemos desligar direto da tomada?',
          options: [
            'Gasta mais energia.',
            'Pode corromper arquivos e o sistema.',
            'Estraga o monitor apenas.',
            'Não acontece nada.',
          ],
          correctAnswer: 1,
          explanation:
            'Remover a energia abruptamente interrompe processos e pode danificar o sistema operacional.',
        },
        completed: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Navegação na Internet',
    description:
      'Domine navegadores, pesquisas eficientes, favoritos e navegação segura em qualquer dispositivo.',
    icon: 'Globe',
    color: 'bg-green-500',
    level: 'Básico',
    duration: '3h00',
    focus: ['Chrome e Edge', 'Pesquisa avançada', 'Favoritos', 'Segurança'],
    lessons: [
      {
        id: 1,
        title: 'Entendendo a internet',
        content:
          'Compreenda como dados circulam, diferença entre Wi-Fi e cabos, e por que precisamos de navegadores.',
        videoUrl: 'https://www.youtube.com/embed/VQCa3Gbe5vw',
        duration: '18 min',
        difficulty: 'Básica',
        tutorial: [
          {
            title: 'Primeira conexão',
            steps: [
              'Verifique se o ícone de Wi-Fi está ativo.',
              'Abra o navegador instalado (Chrome/Edge).',
              'Digite www.uninter.com e pressione Enter.',
            ],
          },
        ],
        practice: {
          title: 'Mapeando redes',
          checklist: [
            'Identifiquei o nome da minha rede doméstica.',
            'Sei onde inserir a senha do Wi-Fi.',
            'Consigo alternar para dados móveis quando preciso.',
          ],
        },
        resources: [
          moduleGuide(2),
          {
            title: 'Podcast: como funciona a internet',
            url: 'https://www.b9.com.br/podcasts/mamilos/como-funciona-a-internet/',
            type: 'podcast',
          },
          {
            title: 'Vídeo: Wi-Fi vs cabo',
            url: 'https://www.youtube.com/watch?v=6fQz7uX5G9g',
            type: 'vídeo',
          },
        ],
        quiz: {
          question: 'Para acessar um site precisamos:',
          options: [
            'Somente do monitor.',
            'De um navegador conectado à internet.',
            'Somente do teclado.',
            'De um aplicativo de mensagens.',
          ],
          correctAnswer: 1,
          explanation:
            'É o navegador que interpreta o endereço digitado quando estamos conectados à internet.',
        },
        completed: false,
      },
      {
        id: 2,
        title: 'Pesquisas poderosas no Google',
        content:
          'Use filtros, aspas e palavras-chave para encontrar exatamente o que precisa.',
        videoUrl: 'https://www.youtube.com/embed/3D3U0qgkGvI',
        duration: '22 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Estratégia de pesquisa',
            steps: [
              'Defina o assunto em 3 palavras claras.',
              'Use aspas para frases exatas, como "vacinação idoso".',
              'Adicione a cidade para resultados locais.',
            ],
          },
        ],
        practice: {
          title: 'Missão buscadora',
          checklist: [
            'Pesquisei uma receita saudável.',
            'Encontrei uma notícia confiável sobre saúde.',
            'Salvei um site favorito no navegador.',
          ],
        },
        resources: [
          moduleGuide(2),
          {
            title: 'Curso Google para iniciantes',
            url: 'https://learndigital.withgoogle.com/ateliedigital/course/digital-workshop',
            type: 'artigo',
          },
          {
            title: 'Vídeo: truques de pesquisa',
            url: 'https://www.youtube.com/watch?v=3WKRdgaL8N4',
            type: 'vídeo',
          },
        ],
        quiz: {
          question: 'Para encontrar algo específico, usamos aspas para:',
          options: [
            'Ignorar resultados.',
            'Buscar a frase exata digitada.',
            'Adicionar novas abas.',
            'Traduzir palavras automaticamente.',
          ],
          correctAnswer: 1,
          explanation:
            'As aspas informam ao Google que queremos somente páginas com aquela frase completa.',
        },
        completed: false,
      },
      {
        id: 3,
        title: 'Salvando favoritos e histórico',
        content:
          'Aprenda a registrar sites importantes, organizar pastas e rever páginas visitadas.',
        videoUrl: 'https://www.youtube.com/embed/T5t_oEX6GLE',
        duration: '17 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Criando favoritos inteligentes',
            steps: [
              'Clique na estrela da barra de endereços.',
              'Escolha uma pasta descritiva (ex: Saúde).',
              'Acesse o gerenciador para reorganizar itens.',
            ],
          },
        ],
        practice: {
          title: 'Biblioteca pessoal',
          checklist: [
            'Criei uma pasta chamada Serviços.',
            'Salvei o site do banco e gov.br.',
            'Limpei o histórico da última semana.',
          ],
        },
        resources: [
          moduleGuide(2),
          {
            title: 'Artigo: gerenciando favoritos no Chrome',
            url: 'https://support.google.com/chrome/answer/188842',
            type: 'artigo',
          },
          {
            title: 'PDF: atalhos úteis do navegador',
            url: 'https://static.googleusercontent.com/media/www.google.com/pt-BR//chrome/browser/shortcuts.pdf',
            type: 'pdf',
          },
        ],
        quiz: {
          question: 'Onde acessamos os favoritos salvos?',
          options: [
            'No menu de três pontos > Favoritos.',
            'No botão desligar.',
            'No painel de controle do Windows.',
            'Não é possível rever favoritos.',
          ],
          correctAnswer: 0,
          explanation:
            'Os navegadores concentram os favoritos no menu principal, geralmente identificado por três pontos ou linhas.',
        },
        completed: false,
      },
      {
        id: 4,
        title: 'Segurança básica ao navegar',
        content:
          'Identifique golpes, entenda certificados e ative verificações extras no navegador.',
        videoUrl: 'https://www.youtube.com/embed/QFdkggG34wo',
        duration: '25 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Checklist de segurança',
            steps: [
              'Procure pelo cadeado na barra de endereços.',
              'Desconfie de promoções urgentes pedindo dados.',
              'Use senhas fortes e diferentes por serviço.',
            ],
          },
        ],
        practice: {
          title: 'Caça-fraudes',
          checklist: [
            'Analisei um e-mail suspeito sem clicar nos links.',
            'Ativei a verificação em duas etapas do Google.',
            'Instalei um antivírus gratuito confiável.',
          ],
        },
        resources: [
          moduleGuide(2),
          {
            title: 'Podcast: golpes digitais em alta',
            url: 'https://www.nexojornal.com.br/podcast',
            type: 'podcast',
          },
          {
            title: 'Artigo: verificar segurança de sites',
            url: 'https://www.kaspersky.com.br/resource-center/definitions/what-is-https',
            type: 'artigo',
          },
        ],
        quiz: {
          question: 'O cadeado na barra indica que:',
          options: [
            'O site é divertido.',
            'Há conexão segura (HTTPS).',
            'O site não existe.',
            'É obrigatório pagar taxa.',
          ],
          correctAnswer: 1,
          explanation:
            'O cadeado mostra que há criptografia ativa entre o site e o navegador, protegendo dados enviados.',
        },
        completed: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Comunicação Digital',
    description:
      'Pratique e-mail, WhatsApp, videochamadas e etiqueta digital para se comunicar sem ruídos.',
    icon: 'MessageCircle',
    color: 'bg-orange-500',
    level: 'Intermediário',
    duration: '2h45',
    focus: ['E-mail eficiente', 'Mensagens claras', 'Videochamadas', 'Etiqueta'],
    lessons: [
      {
        id: 1,
        title: 'Criando e organizando seu e-mail',
        content:
          'Abra uma conta gratuita, personalize a caixa de entrada e crie filtros para mensagens importantes.',
        videoUrl: 'https://www.youtube.com/embed/R5PZMNexX6Q',
        duration: '25 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Cadastro no Gmail',
            steps: [
              'Acesse gmail.com e clique em Criar conta.',
              'Use um nome fácil de lembrar e anote a senha.',
              'Adicione telefone e e-mail de recuperação.',
            ],
          },
        ],
        practice: {
          title: 'Caixa organizada',
          checklist: [
            'Enviei um e-mail para mim mesmo.',
            'Criei um marcador chamado Família.',
            'Arquivei mensagens antigas.',
          ],
        },
        resources: [
          moduleGuide(3),
          {
            title: 'Guia oficial do Gmail',
            url: 'https://support.google.com/mail/answer/56256',
            type: 'artigo',
          },
          {
            title: 'Vídeo: limpando a caixa postal',
            url: 'https://www.youtube.com/watch?v=Q1x9mFUcAE0',
            type: 'vídeo',
          },
        ],
        quiz: {
          question: 'Por que adicionar telefone no cadastro?',
          options: [
            'Para receber spam.',
            'Para recuperar a conta com segurança.',
            'Para fazer ligações gratuitas.',
            'Não há motivo.',
          ],
          correctAnswer: 1,
          explanation:
            'O telefone oferece um segundo fator de recuperação caso você esqueça a senha ou sofra invasão.',
        },
        completed: false,
      },
      {
        id: 2,
        title: 'Mensagens assertivas no WhatsApp',
        content:
          'Aprenda a gravar áudios curtos, enviar fotos, localizar contatos e silenciar grupos barulhentos.',
        videoUrl: 'https://www.youtube.com/embed/g2f2ud26Py4',
        duration: '20 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Passo a passo de envio seguro',
            steps: [
              'Abra o contato desejado e toque no clipe para anexar.',
              'Escolha documentos, fotos ou localização.',
              'Use o ícone de microfone para áudios de até 1 minuto.',
            ],
          },
        ],
        practice: {
          title: 'Desafio das mídias',
          checklist: [
            'Enviei uma foto tirada na hora.',
            'Compartilhei minha localização atual.',
            'Fixei a conversa favorita no topo.',
          ],
        },
        resources: [
          moduleGuide(3),
          {
            title: 'Artigo: configurar privacidade no WhatsApp',
            url: 'https://faq.whatsapp.com/591452611751027',
            type: 'artigo',
          },
          {
            title: 'Vídeo: silenciando notificações',
            url: 'https://www.youtube.com/watch?v=9K4O9sBhL3Y',
            type: 'vídeo',
          },
        ],
        quiz: {
          question: 'Como evitar receber áudios de desconhecidos?',
          options: [
            'Bloqueando números suspeitos.',
            'Desinstalando o aplicativo.',
            'Desligando o celular.',
            'Não existe opção.',
          ],
          correctAnswer: 0,
          explanation:
            'Bloquear impede que essa pessoa envie mensagens novamente e garante tranquilidade.',
        },
        completed: false,
      },
      {
        id: 3,
        title: 'Videochamadas sem complicação',
        content:
          'Configure câmera e microfone, convide pessoas e teste a conexão antes da reunião.',
        videoUrl: 'https://www.youtube.com/embed/dR5PNZhaLzU',
        duration: '30 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Agendando no Google Meet',
            steps: [
              'Abra meet.google.com e clique em Nova reunião.',
              'Copie o link e envie aos participantes.',
              'Teste áudio e vídeo antes de entrar.',
            ],
          },
        ],
        practice: {
          title: 'Simulação guiada',
          checklist: [
            'Entrei em uma sala teste com um amigo.',
            'Ativei legendas automáticas.',
            'Compartilhei a tela por 10 segundos.',
          ],
        },
        resources: [
          moduleGuide(3),
          {
            title: 'PDF: etiqueta em videochamadas',
            url: 'https://static.googleusercontent.com/media/www.google.com/pt-BR//etiqueta-reunioes.pdf',
            type: 'pdf',
          },
          {
            title: 'Vídeo: melhores práticas de áudio',
            url: 'https://www.youtube.com/watch?v=yZ0j2vVC6zI',
            type: 'vídeo',
          },
        ],
        quiz: {
          question: 'Qual boa prática antes de uma videochamada?',
          options: [
            'Testar câmera e microfone com antecedência.',
            'Entrar atrasado.',
            'Deixar notificações sonoras ativas.',
            'Ficar de costas para janelas.',
          ],
          correctAnswer: 0,
          explanation:
            'Um rápido teste evita desencontros técnicos e garante que você será ouvido e visto.',
        },
        completed: false,
      },
      {
        id: 4,
        title: 'Etiqueta digital e prevenção de golpes',
        content:
          'Combine boas maneiras em conversas com sinais para identificar fake news e golpes afetivos.',
        videoUrl: 'https://www.youtube.com/embed/kF-20oyjqlU',
        duration: '18 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Filtro de mensagens',
            steps: [
              'Verifique a fonte antes de repassar.',
              'Desconfie de pedidos de dinheiro urgentes.',
              'Reporte conteúdos ofensivos nas plataformas.',
            ],
          },
        ],
        practice: {
          title: 'Radar anti-fake news',
          checklist: [
            'Chequei uma notícia no site do governo.',
            'Perguntei a um familiar antes de transferir dinheiro.',
            'Usei o recurso denunciar em um grupo.',
          ],
        },
        resources: [
          moduleGuide(3),
          {
            title: 'Podcast: golpes emocionais digitais',
            url: 'https://open.spotify.com/show/0goF8Mpkzgl',
            type: 'podcast',
          },
          {
            title: 'Artigo: identificar fake news',
            url: 'https://www.saude.gov.br/fakenews',
            type: 'artigo',
          },
        ],
        quiz: {
          question: 'Antes de compartilhar uma notícia devo:',
          options: [
            'Repassar rapidamente.',
            'Checar a fonte oficial.',
            'Ignorar o conteúdo.',
            'Apagar o aplicativo.',
          ],
          correctAnswer: 1,
          explanation:
            'Confirmar a fonte evita espalhar desinformação e protege sua credibilidade.',
        },
        completed: false,
      },
    ],
  },
  {
    id: 4,
    title: 'Serviços Públicos Online',
    description:
      'Ganhe autonomia para usar gov.br, INSS, agendamentos e autenticações digitais.',
    icon: 'FileText',
    color: 'bg-teal-500',
    level: 'Intermediário',
    duration: '3h10',
    focus: ['Gov.br', 'Saúde', 'Documentos', 'Assinatura digital'],
    lessons: [
      {
        id: 1,
        title: 'Criando conta gov.br prata',
        content:
          'Veja o passo a passo para validar identidade com reconhecimento facial e liberar todos os serviços.',
        videoUrl: 'https://www.youtube.com/embed/hm4j4o4FzD0',
        duration: '28 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Ativação segura',
            steps: [
              'Acesse gov.br e clique em Entrar.',
              'Informe CPF e escolha Validar por aplicativo.',
              'Realize o reconhecimento facial seguindo o guia.',
            ],
          },
        ],
        practice: {
          title: 'Validação concluída',
          checklist: [
            'Atualizei telefone e e-mail na plataforma.',
            'Configurei autenticação em duas etapas.',
            'Baixei o app gov.br no celular.',
          ],
        },
        resources: [
          moduleGuide(4),
          {
            title: 'Manual oficial gov.br',
            url: 'https://www.gov.br/governodigital/pt-br/conta-gov.br',
            type: 'artigo',
          },
          {
            title: 'Vídeo: reconhecimento facial',
            url: 'https://www.youtube.com/watch?v=kO1DcCOE_N8',
            type: 'vídeo',
          },
        ],
        quiz: {
          question: 'Conta gov.br prata significa que:',
          options: [
            'Você só pode acessar cultura.',
            'A identidade foi validada com biometria ou banco.',
            'É uma conta paga.',
            'Não precisa de senha.',
          ],
          correctAnswer: 1,
          explanation:
            'O nível prata confirma seus dados por biometria facial ou bancos parceiros, liberando mais serviços.',
        },
        completed: false,
      },
      {
        id: 2,
        title: 'Agendando consultas na saúde',
        content:
          'Use aplicativos municipais e o Conecte SUS para marcar exames e acompanhar resultados.',
        videoUrl: 'https://www.youtube.com/embed/agjg-6Lq3Uo',
        duration: '24 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Fluxo de agendamento',
            steps: [
              'Entre no site da prefeitura ou Conecte SUS.',
              'Selecione o serviço desejado (consulta, vacina).',
              'Confirme data e receba comprovante por e-mail.',
            ],
          },
        ],
        practice: {
          title: 'Agenda digital',
          checklist: [
            'Cadastrei meu posto de referência.',
            'Ativei notificações para lembretes.',
            'Baixei comprovante em PDF.',
          ],
        },
        resources: [
          moduleGuide(4),
          {
            title: 'Aplicativo Conecte SUS',
            url: 'https://www.gov.br/saude/pt-br/coronavirus/conecte-sus',
            type: 'app',
          },
          {
            title: 'Artigo: confirmar vacina pelo app',
            url: 'https://www.gov.br/saude/pt-br/assuntos/noticias/comprovante-de-vacinacao-digital',
            type: 'artigo',
          },
        ],
        quiz: {
          question: 'Ao terminar o agendamento você deve:',
          options: [
            'Desligar o computador.',
            'Salvar ou imprimir o comprovante.',
            'Excluir o cadastro.',
            'Telefone para o posto.',
          ],
          correctAnswer: 1,
          explanation:
            'Guardar o comprovante garante que você tenha o protocolo em caso de dúvida ou alteração.',
        },
        completed: false,
      },
      {
        id: 3,
        title: 'Emitindo documentos e certidões',
        content:
          'Gere certidões negativas, extratos do INSS e comprovantes sem filas.',
        videoUrl: 'https://www.youtube.com/embed/DSHqMSRHzT8',
        duration: '26 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Documentos mais pedidos',
            steps: [
              'Acesse meu.inss.gov.br com conta gov.br.',
              'Selecione Extratos/Certidões.',
              'Escolha o documento e baixe em PDF.',
            ],
          },
        ],
        practice: {
          title: 'Pasta digital',
          checklist: [
            'Baixei um extrato de pagamento.',
            'Salvei o arquivo em uma pasta chamada Documentos.',
            'Renomeei o arquivo com a data.',
          ],
        },
        resources: [
          moduleGuide(4),
          {
            title: 'Portal Meu INSS',
            url: 'https://meu.inss.gov.br/',
            type: 'app',
          },
          {
            title: 'PDF: passo a passo extrato',
            url: 'https://www.gov.br/inss/pt-br/saiba-mais/extrato',
            type: 'pdf',
          },
        ],
        quiz: {
          question: 'Para acessar o Meu INSS é necessário:',
          options: [
            'Senha do banco apenas.',
            'Conta gov.br com CPF.',
            'Aplicativo de transporte.',
            'Comparecer presencialmente.',
          ],
          correctAnswer: 1,
          explanation:
            'O Meu INSS usa a mesma credencial gov.br, garantindo segurança e padronização.',
        },
        completed: false,
      },
      {
        id: 4,
        title: 'Assinatura eletrônica e protocolos',
        content:
          'Use assinatura gov.br para validar documentos e protocole solicitações oficiais.',
        videoUrl: 'https://www.youtube.com/embed/dE_hy6sbe9Q',
        duration: '22 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Aplicando assinatura digital',
            steps: [
              'Abra assinador.iti.br e faça login.',
              'Envie o PDF que deseja assinar.',
              'Valide com QR code no app gov.br.',
            ],
          },
        ],
        practice: {
          title: 'Documentos validados',
          checklist: [
            'Assinei um documento fictício.',
            'Verifiquei o selo de tempo no PDF.',
            'Enviei o arquivo por e-mail para teste.',
          ],
        },
        resources: [
          moduleGuide(4),
          {
            title: 'Portal assinador gov.br',
            url: 'https://assinador.iti.br/',
            type: 'app',
          },
          {
            title: 'Artigo: validade jurídica',
            url: 'https://www.gov.br/iti/pt-br/assuntos/cartilha-assinatura-digital',
            type: 'artigo',
          },
        ],
        quiz: {
          question: 'A assinatura gov.br é aceita porque:',
          options: [
            'É gratuita.',
            'Tem validade jurídica reconhecida pelo Governo Federal.',
            'É feita no celular.',
            'Funciona apenas offline.',
          ],
          correctAnswer: 1,
          explanation:
            'O gov.br segue padrões da ICP-Brasil, garantindo autenticidade e validade legal.',
        },
        completed: false,
      },
    ],
  },
  {
    id: 5,
    title: 'Segurança Digital e Privacidade',
    description:
      'Aprenda a proteger senhas, detectar golpes, configurar antivírus e reagir a incidentes.',
    icon: 'ShieldCheck',
    color: 'bg-purple-500',
    level: 'Avançado',
    duration: '2h40',
    focus: ['Senhas fortes', 'Verificação dupla', 'Antivírus', 'Resposta a golpes'],
    lessons: [
      {
        id: 1,
        title: 'Criando senhas fortes e fáceis de lembrar',
        content:
          'Monte frases secretas, gerencie cofres de senha e ative biometria quando disponível.',
        videoUrl: 'https://www.youtube.com/embed/R5w78KO7-8A',
        duration: '20 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Estrutura da senha perfeita',
            steps: [
              'Use uma frase com ao menos 16 caracteres.',
              'Misture números, símbolos e letras maiúsculas.',
              'Evite dados pessoais óbvios.',
            ],
          },
        ],
        practice: {
          title: 'Cofre configurado',
          checklist: [
            'Instalei um gerenciador confiável.',
            'Cadastrei senhas únicas para e-mail e banco.',
            'Ativei biometria no celular.',
          ],
        },
        resources: [
          moduleGuide(5),
          {
            title: 'Artigo: escolha do gerenciador',
            url: 'https://www.kaspersky.com.br/resource-center/passwords/password-managers',
            type: 'artigo',
          },
          {
            title: 'Vídeo: criando senha frase',
            url: 'https://www.youtube.com/watch?v=wv7ftwnZsq4',
            type: 'vídeo',
          },
        ],
        quiz: {
          question: 'Qual opção representa uma senha mais segura?',
          options: ['123456', 'Senha123', 'Café!Tarde#2024', 'nome+data'],
          correctAnswer: 2,
          explanation:
            'Combinar palavras fora do óbvio com símbolos e números aumenta a complexidade.',
        },
        completed: false,
      },
      {
        id: 2,
        title: 'Verificação em duas etapas',
        content:
          'Configure códigos extras no e-mail, WhatsApp e redes para barrar invasões.',
        videoUrl: 'https://www.youtube.com/embed/iQGNvHxUkfI',
        duration: '18 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Ativando no WhatsApp',
            steps: [
              'Abra Configurações > Conta > Confirmação em duas etapas.',
              'Crie um PIN de 6 dígitos e e-mail de recuperação.',
              'Repita o processo em Google e Facebook.',
            ],
          },
        ],
        practice: {
          title: 'Escudo duplo',
          checklist: [
            'Ativei 2FA no WhatsApp.',
            'Cadastrei e-mail de recuperação seguro.',
            'Anotei os códigos de backup em local físico.',
          ],
        },
        resources: [
          moduleGuide(5),
          {
            title: 'Artigo: o que é 2FA',
            url: 'https://www.cisa.gov/mfa',
            type: 'artigo',
          },
          {
            title: 'Vídeo: configurar 2FA no Google',
            url: 'https://www.youtube.com/watch?v=Kfej5d1bJZk',
            type: 'vídeo',
          },
        ],
        quiz: {
          question: 'A verificação em duas etapas adiciona:',
          options: [
            'Mais um código além da senha.',
            'Apenas novas cores ao app.',
            'Menos segurança.',
            'Publicidade.',
          ],
          correctAnswer: 0,
          explanation:
            'Com 2FA, mesmo que descubram a senha, o invasor não entra sem o segundo fator.',
        },
        completed: false,
      },
      {
        id: 3,
        title: 'Antivírus e atualizações essenciais',
        content:
          'Entenda como manter sistemas atualizados, executar varreduras semanais e interpretar relatórios.',
        videoUrl: 'https://www.youtube.com/embed/rUhxBt0X9BU',
        duration: '20 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Rotina de atualização',
            steps: [
              'Ative atualizações automáticas do Windows.',
              'Agende varreduras noturnas no antivírus.',
              'Revise notificações e coloque ameaças em quarentena.',
            ],
          },
        ],
        practice: {
          title: 'Computador blindado',
          checklist: [
            'Atualizei o Windows hoje.',
            'Executei uma varredura completa.',
            'Configurei alertas semanais.',
          ],
        },
        resources: [
          moduleGuide(5),
          {
            title: 'Artigo: antivírus gratuitos confiáveis',
            url: 'https://www.av-test.org/en/antivirus/home-windows/',
            type: 'artigo',
          },
          {
            title: 'PDF: calendário de manutenção',
            url: 'https://www.cert.br/docs/cartilha-manutencao.pdf',
            type: 'pdf',
          },
        ],
        quiz: {
          question: 'Por que atualizar o sistema?',
          options: [
            'Para mudar o papel de parede.',
            'Para corrigir falhas de segurança.',
            'Para deixar mais lento.',
            'Não é necessário.',
          ],
          correctAnswer: 1,
          explanation:
            'Atualizações trazem correções contra novas ameaças descobertas pelos fabricantes.',
        },
        completed: false,
      },
      {
        id: 4,
        title: 'Como agir após um golpe',
        content:
          'Aprenda a reconhecer sinais de invasão, bloquear acessos, registrar boletins e recuperar contas.',
        videoUrl: 'https://www.youtube.com/embed/K7XpGXNYTYg',
        duration: '22 min',
        difficulty: 'Avançada',
        tutorial: [
          {
            title: 'Plano de resposta rápido',
            steps: [
              'Desconecte o dispositivo da internet.',
              'Troque as senhas principais a partir de outro aparelho.',
              'Registre boletim online na delegacia especializada.',
            ],
          },
        ],
        practice: {
          title: 'Simulação de incidente',
          checklist: [
            'Listei meus contatos de emergência digital.',
            'Separei comprovantes para contestar cobranças.',
            'Teste de recuperação de conta concluído.',
          ],
        },
        resources: [
          moduleGuide(5),
          {
            title: 'Portal SaferNet',
            url: 'https://www.safernet.org.br/site/prevencao/orientacao',
            type: 'artigo',
          },
          {
            title: 'Podcast: histórias reais de golpes',
            url: 'https://open.spotify.com/show/4k1uEXOYAV2uV6cFYgA0b0',
            type: 'podcast',
          },
        ],
        quiz: {
          question: 'Ao suspeitar de golpe financeiro primeiro:',
          options: [
            'Compartilhe nas redes.',
            'Troque senhas e avise o banco.',
            'Ignore.',
            'Formate o PC imediatamente.',
          ],
          correctAnswer: 1,
          explanation:
            'Avisar rapidamente ao banco e alterar senhas interrompe transações não autorizadas.',
        },
        completed: false,
      },
    ],
  },
  {
    id: 6,
    title: 'Finanças Digitais e Pagamentos',
    description:
      'Use aplicativos bancários, PIX, carteiras digitais e acompanhe gastos com clareza.',
    icon: 'CreditCard',
    color: 'bg-rose-500',
    level: 'Avançado',
    duration: '2h20',
    focus: ['PIX seguro', 'Apps bancários', 'Orçamento', 'Compras online'],
    lessons: [
      {
        id: 1,
        title: 'Primeiros passos no internet banking',
        content:
          'Faça login com segurança, entenda limites e navegue pelas principais funções.',
        videoUrl: 'https://www.youtube.com/embed/EehGRiuHJ9I',
        duration: '25 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Configurando o app do banco',
            steps: [
              'Baixe o aplicativo oficial na loja do celular.',
              'Cadastre-se com CPF e senha temporária fornecida pelo banco.',
              'Ative biometria e notificações de transações.',
            ],
          },
        ],
        practice: {
          title: 'Operações básicas',
          checklist: [
            'Consultei o saldo e extrato.',
            'Cadastrei um favorecido.',
            'Ativei alerta push para movimentações.',
          ],
        },
        resources: [
          moduleGuide(6),
          {
            title: 'Cartilha Banco Central',
            url: 'https://www.bcb.gov.br/cidadaniafinanceira/cartilhas',
            type: 'pdf',
          },
          {
            title: 'Vídeo: identificando apps falsos',
            url: 'https://www.youtube.com/watch?v=Byn8U-MFAdE',
            type: 'vídeo',
          },
        ],
        quiz: {
          question: 'Como garantir que o app é oficial?',
          options: [
            'Instalando pelo link recebido em SMS.',
            'Buscando pelo nome do banco na loja oficial e verificando o desenvolvedor.',
            'Baixando arquivos em sites aleatórios.',
            'Pedindo pelo WhatsApp.',
          ],
          correctAnswer: 1,
          explanation:
            'As lojas oficiais exibem o desenvolvedor verificado, evitando aplicativos falsos.',
        },
        completed: false,
      },
      {
        id: 2,
        title: 'PIX seguro e sem limites',
        content:
          'Configure limites, confirme destinatários e aprenda a cancelar transações incorretas rapidamente.',
        videoUrl: 'https://www.youtube.com/embed/OpEzrueax7M',
        duration: '18 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Fluxo do PIX',
            steps: [
              'Selecione PIX > Transferir.',
              'Escolha a chave (CPF, e-mail, telefone).',
              'Confirme nome e banco antes de enviar.',
            ],
          },
        ],
        practice: {
          title: 'PIX consciente',
          checklist: [
            'Cadastrei uma chave própria.',
            'Defini limite noturno reduzido.',
            'Simulei um PIX de R$ 1,00 para familiar.',
          ],
        },
        resources: [
          moduleGuide(6),
          {
            title: 'Artigo BC: segurança no PIX',
            url: 'https://www.bcb.gov.br/estabilidadefinanceira/pix',
            type: 'artigo',
          },
          {
            title: 'Podcast: mitos sobre PIX',
            url: 'https://www.bcb.gov.br/podcast/pix',
            type: 'podcast',
          },
        ],
        quiz: {
          question: 'Antes de confirmar o PIX você deve:',
          options: [
            'Verificar nome e CPF do destinatário.',
            'Enviar rapidamente.',
            'Pedir senha por telefone.',
            'Ignorar o valor.',
          ],
          correctAnswer: 0,
          explanation:
            'A tela de confirmação exibe os dados; confira sempre para evitar enganos e golpes.',
        },
        completed: false,
      },
      {
        id: 3,
        title: 'Compras online sem dor de cabeça',
        content:
          'Identifique lojas confiáveis, calcule frete e use cartões virtuais para proteger o orçamento.',
        videoUrl: 'https://www.youtube.com/embed/QqqJtr-7DUk',
        duration: '22 min',
        difficulty: 'Avançada',
        tutorial: [
          {
            title: 'Checklist de compra',
            steps: [
              'Pesquise o CNPJ no Reclame Aqui ou Consumidor.gov.',
              'Leia avaliações recentes.',
              'Use cartão virtual com limite definido.',
            ],
          },
        ],
        practice: {
          title: 'Simulação de pedido',
          checklist: [
            'Adicionei um item ao carrinho em loja confiável.',
            'Calculei frete para minha cidade.',
            'Gerei cartão virtual no app do banco.',
          ],
        },
        resources: [
          moduleGuide(6),
          {
            title: 'Artigo: direitos do consumidor online',
            url: 'https://www.gov.br/secom/pt-br/assuntos/cartilha-compras-online',
            type: 'pdf',
          },
          {
            title: 'Vídeo: cartão virtual explicado',
            url: 'https://www.youtube.com/watch?v=3K2nVJxO0cQ',
            type: 'vídeo',
          },
        ],
        quiz: {
          question: 'Cartão virtual serve para:',
          options: [
            'Sacar dinheiro.',
            'Gerar número temporário para compras online.',
            'Desbloquear celular.',
            'Baixar músicas.',
          ],
          correctAnswer: 1,
          explanation:
            'Com o cartão virtual você evita expor o número físico e pode limitar o valor.',
        },
        completed: false,
      },
      {
        id: 4,
        title: 'Controlando orçamento com aplicativos',
        content:
          'Use planilhas simples, alertas automáticos e metas para visualizar gastos mensais.',
        videoUrl: 'https://www.youtube.com/embed/IlXo7V_KFyw',
        duration: '15 min',
        difficulty: 'Intermediária',
        tutorial: [
          {
            title: 'Configurando o GuiaBolso/Organizze',
            steps: [
              'Baixe o app e conecte sua conta bancária com segurança.',
              'Crie categorias (Mercado, Saúde, Lazer).',
              'Defina metas mensais e receba alertas.',
            ],
          },
        ],
        practice: {
          title: 'Primeiro relatório',
          checklist: [
            'Cadastrei minhas despesas fixas.',
            'Relacionei receitas do mês.',
            'Gerei um gráfico de gastos.',
          ],
        },
        resources: [
          moduleGuide(6),
          {
            title: 'Planilha orçamento 50-30-20',
            url: 'https://www.serasa.com.br/arquivos/planilha-orcamento.xlsx',
            type: 'app',
          },
          {
            title: 'Podcast: finanças para 3ª idade',
            url: 'https://open.spotify.com/show/7Lm4l8E0mBvCFuVbZ4zNn3',
            type: 'podcast',
          },
        ],
        quiz: {
          question: 'Por que categorizar gastos no app?',
          options: [
            'Para colorir a tela.',
            'Para entender para onde o dinheiro vai e ajustar hábitos.',
            'Para pagar mais taxas.',
            'Não é útil.',
          ],
          correctAnswer: 1,
          explanation:
            'Visualizar por categorias facilita identificar excessos e planejar cortes conscientes.',
        },
        completed: false,
      },
    ],
  },
];
