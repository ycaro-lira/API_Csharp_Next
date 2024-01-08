# API Turismo 

Este repositório abriga o código-fonte do projeto "API Turismo", uma aplicação que gerencia informações sobre destinos de viagem e clientes. A arquitetura do projeto é composta por uma API desenvolvida em C# (ASP.NET Core) para o back-end, utilizando o Entity Framework Core para interagir com um banco de dados MySQL, e um front-end construído em React com Next.js.

## O que o Projeto Faz

### Funcionalidades Principais

1. **Gerenciamento de Destinos:**
   - Consulta de destinos de viagem.
   - Cada destino possui informações como nome, preço e URL da imagem associada.

2. **Gerenciamento de Clientes:**
   - Consulta de clientes.
   - Cada cliente é identificado por nome, e-mail e senha.

### Front-end Interativo

- O front-end desenvolvido em React com Next.js proporciona uma experiência interativa aos usuários.
- Listagem de destinos disponíveis e clientes cadastrados.
- Integração com a API para exibição dinâmica de dados.

### Documentação da API

- A API é documentada utilizando Swagger, facilitando a compreensão e interação com os endpoints.

## Estrutura do Projeto

O projeto está organizado em duas partes principais:

- **[Back-end/Apiturismo](./Back-end/Apiturismo):** Contém o código-fonte da API desenvolvida em C#.
- **[Front-end/Api-turismo](./Front-end/Api-turismo):** Contém o código-fonte do front-end construído em React com Next.js.

## Configurações do Servidor

### API (C# - ASP.NET Core)

- A API utiliza o Entity Framework Core para interagir com um banco de dados MySQL.
- A string de conexão do banco de dados está configurada no arquivo `appsettings.json` em `ConnectionStrings/DefaultConnection`.
- As configurações do servidor e da porta estão especificadas no arquivo `launchsettings.json`.
- A API utiliza o Swagger para documentação, acessível em `/swagger`.

## Configurações do Cliente

### Front-end (React com Next.js)

- O front-end utiliza o React com Next.js como biblioteca principal.
- As dependências do projeto estão listadas no arquivo `package.json`.
- O Axios é utilizado para realizar chamadas à API.

## Instruções de Execução

1. **API (C# - ASP.NET Core):**

   - Certifique-se de ter o SDK do .NET Core instalado.
   - Navegue até o diretório `Back-end/Apiturismo`.
   - Execute `dotnet restore` para instalar as dependências.
   - Execute `dotnet run` para iniciar a API.

2. **Front-end (React com Next.js):**

   - Certifique-se de ter o Node.js e o npm instalados.
   - Navegue até o diretório `Front-end/Api-turismo`.
   - Execute `npm install` para instalar as dependências.
   - Execute `npm run dev` para iniciar o servidor de desenvolvimento do Next.js.
