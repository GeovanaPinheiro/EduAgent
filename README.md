🧠 EduAgent IA

O EduAgent IA é um dashboard educacional preditivo (SPA) desenhado para utilizar inteligência artificial na análise de notas, alertando sobre alunos em risco e gerando relatórios pedagógicos automáticos. O projeto simula um SaaS completo com planos Gratuito, Pro e Institucional.

Este projeto foi construído como um protótipo de Single Page Application (SPA) totalmente responsivo, demonstrando a viabilidade de uma plataforma educacional com diferentes níveis de acesso e monetização, sem a necessidade de um backend para testes visuais.

🚀 Funcionalidades

O sistema é dividido em duas visões principais que se alternam dinamicamente via JavaScript:

1. Landing Page (Visão Comercial)

Design Moderno: Interface de apresentação do produto com seções Hero, Sobre, Funcionalidades e Contato.

Monetização Explicativa: Grid de planos detalhando os tiers Gratuito, Pro e Institucional (B2B).

Tema Dinâmico: Suporte nativo à alternância entre Modo Claro (Light) e Modo Escuro (Dark) com variáveis CSS.

2. Dashboard Preditivo (O Produto)

Uma área de demonstração prática dividida em 3 abas independentes, simulando a experiência real de cada plano:

🌱 Painel Gratuito (Básico): Simulação de um ambiente com restrições (limite de 2 turmas), lançamento manual de notas, visualização de gráficos simples e calendário de provas. O módulo de IA encontra-se bloqueado para demonstrar o limite do plano.

⚡ Painel Pro (Assinatura): Visão premium individual para o professor. Permite filtrar turmas por turnos (Manhã, Tarde e Noite). Inclui o módulo de IA para leitura de dados da turma ativa e geração de insights textuais.

🏫 Painel Institucional (B2B): Visão macro para a gestão escolar e coordenação. Demonstra o cruzamento de dados de múltiplos professores, com um painel unificado ideal para reuniões de conselho de classe.

🛠️ Tecnologias Utilizadas

HTML5: Estruturação semântica e formato SPA em um único arquivo.

CSS3 (Vanilla): Estilização moderna, Flexbox/Grid, responsividade e controle de temas via variáveis de raiz (:root e data-theme).

JavaScript (ES6+): Lógica de navegação entre telas, manipulação do DOM e filtragem de dados dinâmicos.

Integração IA (Mock/Simulada): Preparado para receber a API do Google Gemini, atualmente operando em modo de simulação visual (setTimeout) para facilitar testes de UI/UX sem custo ou necessidade de chaves.

⚙️ Como executar o projeto localmente

Como o projeto foca puramente no front-end e não requer um ambiente de back-end complexo para testes visuais, a execução é extremamente simples:

Clone este repositório:

git clone https://github.com/seu-usuario/eduagent-ia.git


Navegue até a pasta do projeto:

cd eduagent-ia


Abra o arquivo EduAgent.html no seu navegador web de preferência (Chrome, Edge, Firefox, etc.).

Nota: Não é necessário configurar nenhuma chave de API no momento, pois a geração de insights está configurada para simular o tempo de resposta e entregar um relatório visual perfeito para testes de interface.

