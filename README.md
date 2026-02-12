# 🍎 FitProject API

![NestJS](https://img.shields.io/badge/NestJS-Framework-red)
![TypeScript](https://img.shields.io/badge/TypeScript-Strongly%20Typed-blue)
![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748)
![MySQL](https://img.shields.io/badge/Database-MySQL-00758F)
![JWT](https://img.shields.io/badge/Auth-JWT-black)
![Tests](https://img.shields.io/badge/Tests-Jest%20%7C%20Supertest-green)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

API de gerenciamento nutricional desenvolvida com **NestJS
(TypeScript)**, focada no controle inteligente da ingestão de
carboidratos.

------------------------------------------------------------------------

## 🚀 Sobre o Projeto

O **FitProject** é uma API backend voltada para aplicações HealthTech,
permitindo que usuários:

-   Registrem refeições
-   Definam metas nutricionais diárias
-   Acompanhem consumo de carboidratos
-   Visualizem relatórios inteligentes (diário, semanal e mensal)

O projeto foi construído seguindo princípios de:

-   ✅ Clean Code\
-   ✅ Arquitetura modular\
-   ✅ Boas práticas de segurança\
-   ✅ Escalabilidade e manutenibilidade

------------------------------------------------------------------------

## 🧠 Stack Tecnológica

### Backend

-   **NestJS**
-   **TypeScript**
-   **Prisma ORM**
-   **MySQL**

### 🔐 Autenticação & Segurança

-   JWT (Passport.js)
-   bcrypt (hash de senhas)
-   helmet (proteção HTTP)
-   class-validator (validação de DTOs)

### 📊 Documentação

-   Swagger (OpenAPI)

### 🧪 Testes

-   Jest
-   Supertest

------------------------------------------------------------------------

## 📌 Funcionalidades

### 🔐 Gestão de Usuários

-   Registro com senha criptografada
-   Login com geração de JWT
-   Proteção de rotas com Guards
-   CRUD completo de perfil

### 🍱 Gestão Nutricional

-   Cadastro de alimentos com valores nutricionais
-   Registro de refeições compostas por múltiplos alimentos
-   Histórico cronológico de consumo

### 📈 Relatórios Inteligentes

-   Consumo diário
-   Consumo semanal
-   Consumo mensal

------------------------------------------------------------------------

## 🏗 Arquitetura

O projeto segue a arquitetura padrão do NestJS:

-   Controllers → Camada de entrada HTTP
-   Services → Regras de negócio
-   DTOs → Validação de dados
-   Guards → Proteção de rotas
-   Prisma → Camada de persistência

Estrutura preparada para crescimento e aplicação em ambiente de
produção.

------------------------------------------------------------------------

## ⚙️ Como Executar

``` bash
git clone https://github.com/gouvei4/fit-project.git
cd fit-project
npm install
```

Configure o arquivo `.env`:

``` env
DATABASE_URL="mysql://usuario:senha@localhost:3306/fit_project_db"
JWT_SECRET="sua_chave_secreta_aqui"
```

Execute as migrations:

``` bash
npx prisma migrate dev --name init
npx prisma generate
```

Rodar aplicação:

``` bash
npm run start:dev
```

Swagger disponível em:

    http://localhost:3000/api

------------------------------------------------------------------------

## 🧪 Testes

``` bash
npm run test
npm run test:e2e
npm run test:cov
```

------------------------------------------------------------------------

## 👨‍💻 Autor

**Afonso Gouveia**\
Engenheiro de Software focado em backend com Node.js, arquitetura
escalável e aplicações seguras.

GitHub: https://github.com/gouvei4
