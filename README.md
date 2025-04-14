# <img src="https://cdn3.emoji.gg/emojis/6189-mariobros-mariohello.gif" alt="Mario" width="50" height="50" /> Mario Maker API 

![banner](Imagens/Readme/Mario_poster.png)

##   <img src="https://cdn3.emoji.gg/emojis/9842-mariobros-mariorun.gif" alt="Descrição" width="35" height="35" /> Introdução:
No Reino dos Cogumelos, os criadores de fases se tornaram os novos heróis. Com a evolução tecnológica, foi desenvolvida a Mario Maker API, uma plataforma para que jogadores possam criar, editar e compartilhar fases, elementos e ideias para o universo Mario.

Cada criador pode trabalhar de forma independente ou formar equipes criativas, onde compartilham itens, ideias e testam suas fases antes de publicá-las. A plataforma traz um sistema de autenticação, segurança e organização dos dados para garantir a melhor experiência aos fãs e desenvolvedores do Marioverse.

## <img src="https://cdn3.emoji.gg/emojis/7853-mariobros-bowsersorry.gif" alt="Descrição" width="35" height="35" /> Estrutura do Projeto:

![Estrutura_Projeto](Imagens/Readme/Mario_Maker_Arquitetura.gif)

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
![Estrutura_Projeto](Imagens/Readme/Diagrama.png)

### <img src="https://cdn3.emoji.gg/emojis/1888-mk-mushroom.png" alt="Coin" width="20" height="20" /> Entidades Principais:

| Modelo  | Descrição               | Campos Importantes                     |
|---------|-------------------------|----------------------------------------|
| `User`  | Criadores de fases      | id, username, email, password         |
| `Team`  | Equipes criativas       | id, name                               |
| `Item`  | Elementos das fases     | id, name, description, image_url       |
| `Player`| Personagens testadores  | id, name, team_id, image_url           |
| `Tag`   | Categorias de itens     | id, name                               |

### <img src="https://cdn3.emoji.gg/emojis/1888-mk-mushroom.png" alt="Coin" width="20" height="20" /> Tabelas de Relacionamento:

| Tabela       | Relação         | Campos Especiais                      |
|--------------|-----------------|---------------------------------------|
| `team_user`  | User ↔ Team     | relation_type (CREATOR/COLLABORATOR)  |
| `item_tag`   | Item ↔ Tag      | -                                     |
| `item_user`  | Item ↔ User     | relation_type (ex: RESPONSIBLE)       |

## <img src="https://cdn3.emoji.gg/emojis/8155-mariobros-yoshihungry.gif" alt="Coin" width="35" height="35" /> Etapas do Projeto:

### <img src="https://cdn3.emoji.gg/emojis/9266-mk-bullet.png" alt="Coin" width="20" height="20" /> Planejamento & Arquitetura:

* Definição das entidades e relacionamentos (diagrama ER).
* Escolha das tecnologias:
  * Backend: Node.js, Express, Sequelize (SQLite).
  * Autenticação: JWT + bcrypt.
  * Uploads: Multer.
  
### <img src="https://cdn3.emoji.gg/emojis/9266-mk-bullet.png" alt="Coin" width="20" height="20" /> Implementação:

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

### <img src="https://cdn3.emoji.gg/emojis/9266-mk-bullet.png" alt="Coin" width="20" height="20" /> **Validação & Testes**:

* Testes no Postman para todas as rotas.

## <img src="https://cdn3.emoji.gg/emojis/9271-mariobros-donkeykongfire.gif" alt="Coin" width="35" height="35" /> Como Instalar e Executar o Projeto:

### <img src="https://cdn3.emoji.gg/emojis/4673-m-fire-flower.png" alt="Coin" width="20" height="20" /> Pré-requisitos:
* Antes de iniciar, certifique-se de ter instalado:
* Node.js (versão 16 ou superior)
* npm ou yarn
* Git
* SQLite (para banco de dados local)

### <img src="https://cdn3.emoji.gg/emojis/4673-m-fire-flower.png" alt="Coin" width="20" height="20" /> Clonando o repositório:
* bash:
```
git clone https://github.com/micaellimaj/Desafio-Back-End
cd projeto
```

### <img src="https://cdn3.emoji.gg/emojis/4673-m-fire-flower.png" alt="Coin" width="20" height="20" /> Instalando as dependências:
* bash
```
npm install
# ou
yarn install
```

### <img src="https://cdn3.emoji.gg/emojis/4673-m-fire-flower.png" alt="Coin" width="20" height="20" /> Configuração do ambiente:
* Crie um arquivo .env na raiz do projeto com:
  * env:
```
DB_PATH=./database.sqlite
JWT_SECRET=sua_chave_secreta_aqui
PORT=3000
UPLOADS_DIR=./uploads
```

### <img src="https://cdn3.emoji.gg/emojis/4673-m-fire-flower.png" alt="Coin" width="20" height="20" /> Executando o projeto:
* bash:
```
npm start
# ou para desenvolvimento com auto-reload:
npm run dev
```

### <img src="https://cdn3.emoji.gg/emojis/4673-m-fire-flower.png" alt="Coin" width="20" height="20" /> Acessando a API:
* O servidor estará disponível em:
```
http://localhost:3000
```
## <img src="https://cdn3.emoji.gg/emojis/4332-mariobros-toadmusic2.gif" alt="Coin" width="35" height="35" /> Visualização do Projeto Rodando:

## <img src="https://cdn3.emoji.gg/emojis/2037-mariobros-koopapls1.gif" alt="Coin" width="35" height="35" /> Testando as Rotas:

* Utilize o Postman ou Insomnia para testar os endpoints
* Dica: Para uma experiência completa do mundo Mario, sugerimos testar as seguintes rotas com base nas entidades do projeto:



| Entidade  | Método | Rota                     | Descrição                                  | Autenticação |
|-----------|--------|--------------------------|--------------------------------------------|--------------|
| **Auth**  | POST   | `/auth/register`         | Cadastra novo usuário                      | ❌           |
|           | POST   | `/auth/login`            | Faz login e retorna token JWT              | ❌           |
| **Users** | GET    | `/users`                 | Lista todos os usuários                    | ✅           |
|           | GET    | `/users/:id`             | Busca usuário por ID                       | ✅           |
|           | PUT    | `/users/:id`             | Atualiza usuário                           | ✅           |
|           | DELETE | `/users/:id`             | Remove usuário (soft delete)               | ✅           |
| **Teams** | POST   | `/teams`                 | Cria nova equipe                           | ✅           |
|           | GET    | `/teams`                 | Lista todas as equipes                     | ✅           |
|           | GET    | `/teams/:id`             | Busca equipe por ID                        | ✅           |
|           | PUT    | `/teams/:id`             | Atualiza equipe                            | ✅ (apenas criador) |
|           | DELETE | `/teams/:id`             | Remove equipe                              | ✅ (apenas criador) |
|           | POST   | `/teams/:id/members`     | Adiciona membro à equipe                   | ✅ (apenas criador) |
|           | DELETE | `/teams/:id/members/:user_id` | Remove membro da equipe             | ✅ (apenas criador) |
| **Items** | POST   | `/items`                 | Cria item com upload de imagem             | ✅           |
|           | GET    | `/items`                 | Lista todos os itens                       | ✅           |
|           | GET    | `/items/:id`             | Busca item por ID                          | ✅           |
|           | PUT    | `/items/:id`             | Atualiza item (imagem opcional)            | ✅           |
|           | DELETE | `/items/:id`             | Remove item                                | ✅           |
|           | POST   | `/items/:id/tags`        | Adiciona tag ao item                       | ✅           |
|           | DELETE | `/items/:id/tags/:tag_id`| Remove tag do item                         | ✅           |
| **Tags**  | POST   | `/tags`                  | Cria nova tag                              | ✅           |
|           | GET    | `/tags`                  | Lista todas as tags                        | ✅           |
|           | GET    | `/tags/:id`              | Busca tag por ID                           | ✅           |
|           | PUT    | `/tags/:id`              | Atualiza tag                               | ✅           |
|           | DELETE | `/tags/:id`              | Remove tag (soft delete)                   | ✅           |
| **Players** | POST  | `/players`               | Adiciona personagem à equipe               | ✅           |
|           | GET    | `/players`               | Lista todos os personagens                 | ✅           |
|           | GET    | `/players/:id`           | Busca personagem por ID                    | ✅           |
|           | PUT    | `/players/:id`           | Atualiza personagem                        | ✅           |
|           | DELETE | `/players/:id`           | Remove personagem                          |

* Legenda:
✅ = Requer token JWT no header Authorization: Bearer <token>
❌ = Rota pública

* Dica para uso no Postman:
  * Comece registrando um usuário em /auth/register
  * Faça login em /auth/login para obter o token
  * Use o token nas demais rotas adicionando no header:
```
Authorization: Bearer seu_token_aqui
```

## <img src="https://cdn3.emoji.gg/emojis/7673-mariobros-peachsmile.gif" alt="Coin" width="35" height="35" /> Organização dos Diretórios:


### <img src="https://cdn3.emoji.gg/emojis/5420-mk-triple-green-shell.png" alt="Coin" width="20" height="20" /> Todas as pastas:
```
DESAFIO-BACK-END/
├── src/
│ ├── controllers/
│ │ ├── authController.js         # Lógica de autenticação (login/registro)
│ │ ├── itemController.js         # CRUD de itens + upload de imagens
│ │ ├── playerController.js       # Gerenciamento de personagens
│ │ ├── teamController.js         # Operações com equipes
│ │ └── userController.js         # Gestão de usuários
│ │
│ ├── models/
│ │ ├── User.js                   # Modelo de usuários (criadores)
│ │ ├── Team.js                   # Modelo de equipes
│ │ ├── Item.js                   # Modelo de itens das fases
│ │ ├── Player.js                 # Modelo de personagens
│ │ ├── Tag.js                    # Modelo de categorias
│ │ ├── ItemTag.js                # Tabela de relação Item-Tag (N:N)
│ │ ├── ItemUser.js               # Tabela de relação Item-User (N:N)
│ │ ├── TeamUser.js               # Tabela de relação Team-User (N:N)
│ │ └── index.js                  # Exportação centralizada dos modelos
│ │
│ ├── routes/
│ │ ├── authRoutes.js             # Rotas de autenticação
│ │ ├── itemRoutes.js             # Rotas de itens (com upload)
│ │ ├── playerRoutes.js           # Rotas de personagens
│ │ ├── teamRoutes.js             # Rotas de equipes
│ │ ├── userRoutes.js             # Rotas de usuários
│ │ └── tagRoutes.js              # Rotas da tag
│ │
│ ├── middlewares/
│ │ └── auth.js                   # Middleware de autenticação JWT
│ │
│ └── database/
│ └── index.js                    # Configuração do Sequelize e conexão com DB
│
├── uploads/                      # Armazena imagens enviadas (itens)
├── config/
│ ├── config.json                 # Configurações do Sequelize por ambiente
│ └── db.js                       # Configurações adicionais do banco
│
├── middlewares/
│ └── auth.js                     # Middleware de autenticação
│
├── app.js                        # Configuração principal do Express
├── server.js                     # Ponto de entrada da aplicação
├── package.json                  # Dependências e scripts do projeto
├── package-lock.json             # Versões exatas das dependências
├── time.db                       # Arquivo do banco SQLite
├── .env                          # Variáveis de ambiente (JWT_SECRET, etc)
├── .gitignore                    # Arquivos ignorados pelo Git
└── README.md                     # Documentação do projeto
```
### <img src="https://cdn3.emoji.gg/emojis/5420-mk-triple-green-shell.png" alt="Coin" width="20" height="20" /> Arquivos Críticos:

| Arquivo               | Função                                                                 |
|-----------------------|-----------------------------------------------------------------------|
| `server.js`           | Inicializa o servidor e conecta ao banco                              |
| `app.js`              | Configura middlewares globais (CORS, JSON, uploads)                   |
| `config/db.js`        | Configuração detalhada da conexão com o banco                         |
| `database/index.js`   | Centraliza modelos e associações do Sequelize                         |
| `middlewares/auth.js` | Valida tokens JWT para rotas protegidas                               |

### <img src="https://cdn3.emoji.gg/emojis/5420-mk-triple-green-shell.png" alt="Coin" width="20" height="20" /> Destaques:

* Estrutura MVC clara (Models-Views-Controllers)
* Uploads gerenciados pelo Multer (pasta `/uploads`)
* Relacionamentos complexos via tabelas intermediárias
* Configuração por ambiente (dev/test/prod)

## <img src="https://cdn3.emoji.gg/emojis/1094-mariobros-luigicry.gif" alt="Coin" width="35" height="35" />  Conclusão:

O desenvolvimento da Mario API REST foi uma oportunidade sólida para aplicar conceitos fundamentais de construção de APIs robustas, organizadas e escaláveis. Através da separação de entidades como usuários, jogadores, times, itens e tags, foi possível construir uma estrutura modular e compreensível, respeitando boas práticas RESTful e utilizando o Sequelize como ORM para facilitar a interação com o banco de dados.

Além disso, a integração do multer para upload de arquivos, o uso de middlewares e a configuração dinâmica do ambiente com suporte a SQLite mostram a atenção aos detalhes técnicos e à flexibilidade da aplicação, tornando-a apta para crescer em diferentes contextos de uso. 

## <img src="https://cdn3.emoji.gg/emojis/7626-mariobros-highfive.gif" alt="Coin" width="35" height="35" />  Agradecimento:

Agradeço imensamente a atenção e o interesse em acompanhar o projeto Mario API REST. Este trabalho é fruto de dedicação contínua e aprendizado prático, e representa mais do que uma aplicação funcional — é também um passo concreto na jornada de evolução como desenvolvedor.

"Com grandes poderes de criação vêm grandes blocos de responsabilidade." – Mario, o Encanador Arquiteto de APIs

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:6fa8dc,100:6fa8dc&height=80&section=footer&text=Com%20grandes%20poderes%20de%20cria%C3%A7%C3%A3o%20v%C3%AAm%20grandes%20blocos%20de%20responsabilidade.%20-%20Mario,%20o%20Encanador%20Arquiteto%20de%20APIs!&fontSize=16&textColor=ffffff&fontAlign=center&fontAlignY=middle"/>

