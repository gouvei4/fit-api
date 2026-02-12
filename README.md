# FitProject API 🍎💪

O **FitProject** é uma API robusta de gerenciamento nutricional desenvolvida com **NestJS**. O sistema foca no controle rigoroso da ingestão de carboidratos, permitindo que usuários gerenciem sua dieta, estabeleçam metas e acompanhem sua evolução através de relatórios inteligentes.

Esta API foi construída seguindo padrões de **Clean Code**, modularização e segurança, estando pronta para suportar aplicações de saúde e bem-estar (HealthTech).

---

## 🚀 Tecnologias e Ferramentas

O projeto utiliza um stack moderno focado em performance e tipagem forte:

- **Framework:** [NestJS](https://nestjs.com/) (TypeScript)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Banco de Dados:** MySQL (via `mysql2`)
- **Autenticação:** Passport.js com estratégia **JWT** (JSON Web Token)
- **Segurança:** - `bcrypt` para hashing de senhas.
  - `helmet` para proteção de headers HTTP.
  - `class-validator` para validação rigorosa de payloads.
- **Documentação:** Swagger (OpenAPI)
- **Logs:** Pino-pretty
- **Testes:** Jest e Supertest

---

## 📋 Funcionalidades da API

### 🔐 Segurança e Usuários
- **Registro e Autenticação:** Criação de conta com senhas criptografadas e login com emissão de token JWT.
- **Proteção de Rotas:** Uso de `JwtAuthGuard` para garantir que apenas usuários autenticados acessem dados sensíveis.
- **Gestão de Perfil:** CRUD completo de informações do usuário.

### 🍱 Gestão Nutricional
- **Foods:** Banco de dados de alimentos com valores nutricionais.
- **Meals:** Registro de refeições compostas por diferentes alimentos.
- **Carb History:** Histórico cronológico de consumo de carboidratos.

### 📈 Metas e Relatórios
- **Goals:** Definição de objetivos diários de ingestão.
- **Intelligent Reports:** Endpoints dedicados para extração de métricas de consumo:
  - Consumo Diário.
  - Consumo Semanal.
  - Consumo Mensal.

---

## ⚙️ Como Instalar e Rodar

1. **Clone o repositório:**
   bash
  `git clone [https://github.com/gouvei4/fit-project.git](https://github.com/gouvei4/fit-project.git)
   cd fit-project`

2. **Instale as dependências:**
  `npm install`

3. **Configure as variáveis de ambiente (.env):**
    Crie um arquivo .env na raiz do projeto e preencha conforme sua configuração local:
   `DATABASE_URL="mysql://usuario:senha@localhost:3306/fit_project_db"
    JWT_SECRET="sua_chave_secreta_aqui"`

4. **Prepare o Banco de Dados (Prisma)**
   Execute as migrations para criar as tabelas no MySQL e gerar o Prisma Client:
   `npx prisma migrate dev --name init
    npx prisma generate`
   
5. **Inicie a aplicação**
    # Modo de desenvolvimento
      `npm run start:dev`

    # Modo de produção
      `npm run build
      npm run start:prod`

📖 # Documentação (Swagger)
     A API conta com documentação interativa que pode ser acessada através da rota:

    👉` http://localhost:3000/api`

    Lá você encontrará todos os modelos de dados, exemplos de requisição e poderá testar os endpoints utilizando o Bearer Token gerado no login.

🧪 # Estrutura de Testes
      O projeto utiliza Jest para garantir a confiabilidade das regras de negócio:
      # Executar todos os testes
      `npm run test`

      # Executar testes end-to-end (E2E)
      npm run test:e2e

      # Cobertura de código (Coverage)
       npm run test:cov

  ✨ # Autor
      Afonso Gouveia Engenheiro de Software focado no desenvolvimento de aplicações escaláveis e seguras.
