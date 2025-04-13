# <img src="https://cdn3.emoji.gg/emojis/6189-mariobros-mariohello.gif" alt="Mario" width="50" height="50" /> Mario Maker API 

![banner](Imagens/Readme/Mario_poster.png)

##   <img src="https://cdn3.emoji.gg/emojis/9842-mariobros-mariorun.gif" alt="Descrição" width="35" height="35" /> Introdução:
No Reino dos Cogumelos, os criadores de fases se tornaram os novos heróis. Com a evolução tecnológica, foi desenvolvida a Mario Maker API, uma plataforma para que jogadores possam criar, editar e compartilhar fases, elementos e ideias para o universo Mario.

Cada criador pode trabalhar de forma independente ou formar equipes criativas, onde compartilham itens, ideias e testam suas fases antes de publicá-las. A plataforma traz um sistema de autenticação, segurança e organização dos dados para garantir a melhor experiência aos fãs e desenvolvedores do Marioverse.

## <img src="https://cdn3.emoji.gg/emojis/7853-mariobros-bowsersorry.gif" alt="Descrição" width="35" height="35" /> Estrutura do Projeto:
![Estrutura_Projeto](Imagens/Readme/)

## <img src="https://cdn3.emoji.gg/emojis/6861-luigidance.gif" alt="Coin" width="45" height="45" />Objetivo: 

Criar uma REST API com autenticação JWT que possibilite o gerenciamento completo das entidades envolvidas na criação colaborativa de fases do Mario. A API deve permitir que os usuários:
* Se cadastrem e façam login.
* Criem e gerenciem itens (ex: blocos, inimigos, power-ups).
* Organizem os itens com tags (ex: “lava”, “voador”, “clássico”).
* Formem equipes criativas (teams) com outros criadores.
* Atribuam jogadores/personagens (players) aos projetos.
* Usem paginação e uploads locais de imagens.
* Criem relações do tipo "CRIADOR" ou "COLABORADOR" com suas equipes.

## <img src="https://cdn3.emoji.gg/emojis/9271-mariobros-donkeykongfire.gif" alt="Coin" width="35" height="35" /> Tecnologias:

<div align="center" style="display: inline_block">
  <img align="center" alt="github" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  <img align="center" alt="vscode" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" /> 
  <img align="center" alt="nodejs" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img align="center" alt="express" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img align="center" alt="sequelize" src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" />
  <img align="center" alt="jwt" src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
  <img align="center" alt="sqlite" src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" />
  <img align="center" alt="postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
</div>

## <img src="https://cdn3.emoji.gg/emojis/9475-mariobros-toadhug.gif" alt="Coin" width="35" height="35" /> Relações do Banco de dados:

## <img src="https://cdn3.emoji.gg/emojis/8155-mariobros-yoshihungry.gif" alt="Coin" width="35" height="35" /> Etapas do Projeto:

1️. Planejamento & Arquitetura:

* Definição das entidades e relacionamentos (diagrama ER).
* Escolha das tecnologias:
  * Backend: Node.js, Express, Sequelize (SQLite).
  * Autenticação: JWT + bcrypt.
  * Uploads: Multer.
  
2️. Implementação:

* Autenticação:
  * Rotas de /register e /login com validação Joi.
  * Middleware auth.js para proteger rotas.

* Users:
  * CRUD completo com soft delete.
  * Campos: username, email, password (hash).

* Items:
  * CRUD com upload de imagens (Multer).
  * Relação N:N com Tags.

* Tags:
  * CRUD simples + associação a Itens.

* Teams:
  * CRUD + sistema de membros (CREATOR/COLLABORATOR).

* Players
  * CRUD + vínculo com Teams.

3️. Validação & Testes:

* Testes no Postman para todas as rotas.

## <img src="https://cdn3.emoji.gg/emojis/7673-mariobros-peachsmile.gif" alt="Coin" width="35" height="35" /> Organização dos Diretórios:

## <img src="https://cdn3.emoji.gg/emojis/9271-mariobros-donkeykongfire.gif" alt="Coin" width="35" height="35" /> Como Instalar e Executar o Projeto:

1. Pré-requisitos:

* Antes de iniciar, certifique-se de ter instalado:
* Node.js (versão 16 ou superior)
* npm ou yarn
* Git
* SQLite (para banco de dados local)

2. Clonando o repositório:

* bash:
```
git clone https://github.com/micaellimaj/Desafio-Back-End
cd projeto
```
3. Instalando as dependências:

* bash
```
npm install
# ou
yarn install
```
4. Configuração do ambiente:
* Crie um arquivo .env na raiz do projeto com:
  * env:
```
DB_PATH=./database.sqlite
JWT_SECRET=sua_chave_secreta_aqui
PORT=3000
UPLOADS_DIR=./uploads
```

5. Executando o projeto:

* bash:
```
npm start
# ou para desenvolvimento com auto-reload:
npm run dev
```

6. Acessando a API:

* O servidor estará disponível em:
```
http://localhost:3000
```
7. Testando as rotas:
* Utilize o Postman ou Insomnia para testar os endpoints
* Dica: Para uma experiência completa do mundo Mario, sugerimos testar primeiro as rotas de:
```
POST /auth/register
POST /teams
POST /items (com upload de imagem)
```

## <img src="https://cdn3.emoji.gg/emojis/1094-mariobros-luigicry.gif" alt="Coin" width="35" height="35" />  Conclusão:

O desenvolvimento da Mario API REST foi uma oportunidade sólida para aplicar conceitos fundamentais de construção de APIs robustas, organizadas e escaláveis. Através da separação de entidades como usuários, jogadores, times, itens e tags, foi possível construir uma estrutura modular e compreensível, respeitando boas práticas RESTful e utilizando o Sequelize como ORM para facilitar a interação com o banco de dados.

Além disso, a integração do multer para upload de arquivos, o uso de middlewares e a configuração dinâmica do ambiente com suporte a SQLite mostram a atenção aos detalhes técnicos e à flexibilidade da aplicação, tornando-a apta para crescer em diferentes contextos de uso. 

## <img src="https://cdn3.emoji.gg/emojis/1193-christmasluigi.png" alt="Coin" width="35" height="35" />  Agradecimento:

Agradeço imensamente a atenção e o interesse em acompanhar o projeto Mario API REST. Este trabalho é fruto de dedicação contínua e aprendizado prático, e representa mais do que uma aplicação funcional — é também um passo concreto na jornada de evolução como desenvolvedor.

"Com grandes poderes de criação vêm grandes blocos de responsabilidade." – Mario, o Encanador Arquiteto de APIs

