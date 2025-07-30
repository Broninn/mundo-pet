# Mundo Pet 🐾



![alt text](https://raw.githubusercontent.com/Broninn/mundo-pet/refs/heads/main/Overview.png)

---

## 📖 Sobre o Projeto

**Mundo Pet** é uma aplicação web moderna e intuitiva para agendamento de serviços em pet shops. Desenvolvida com JavaScript puro e ferramentas modernas, a aplicação permite que os funcionários gerenciem os horários de forma eficiente, visualizando a agenda do dia e realizando novos agendamentos de forma rápida e sem conflitos.

O projeto foi construído como parte de um estudo prático, focando em manipulação do DOM, requisições assíncronas (Fetch API), modularização de código e o uso de um ambiente de desenvolvimento com Webpack.

---

## ✨ Funcionalidades

-   **Agendamento de Serviços:** Formulário intuitivo para cadastrar novos agendamentos para clientes e seus pets.
-   **Visualização da Agenda Diária:** A agenda é organizada por períodos (manhã, tarde e noite), facilitando a visualização dos compromissos do dia.
-   **Seleção de Data e Hora Inteligente:** O seletor de horários mostra apenas as opções disponíveis, desabilitando automaticamente os que já passaram ou que já foram reservados.
-   **Cancelamento de Agendamentos:** Permite remover um agendamento com uma simples confirmação.
-   **Interface Responsiva:** Adaptada para uma boa experiência tanto em desktops quanto em dispositivos móveis.

---

## 🚀 Tecnologias Utilizadas

-   **Frontend:**
    -   HTML5
    -   CSS3
    -   JavaScript (ES6+)
-   **Ferramentas e Bibliotecas:**
    -   **Day.js:** Para manipulação e formatação de datas e horas.
    -   **Webpack:** Para empacotamento de módulos e automação do build.
    -   **Babel:** Para transpilar JavaScript moderno para versões compatíveis com navegadores mais antigos.
    -   **JSON Server:** Para simular uma API RESTful e persistir os dados dos agendamentos.

---

## 🏁 Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação em seu ambiente local.

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
-   [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/broninn/mundo-pet.git
    cd mundo-pet
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor da API:**
    Em um terminal, execute o comando abaixo para iniciar o `json-server`. Ele irá observar o arquivo `server.json` e fornecer os endpoints da API na porta 3333.
    ```bash
    npm run server
    ```

4.  **Inicie a aplicação:**
    Em outro terminal, execute o comando para iniciar o servidor de desenvolvimento do Webpack. A aplicação estará disponível em `http://localhost:3000`.
    ```bash
    npm run dev
    ```

---

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
mundo-pet/
├── dist/                # Arquivos de produção gerados pelo Webpack
├── src/                 # Código-fonte da aplicação
│   ├── assets/          # Imagens, ícones e outros recursos estáticos
│   ├── libs/            # Configurações de bibliotecas (ex: day.js)
│   ├── modules/         # Módulos de funcionalidades da aplicação
│   ├── services/        # Funções para comunicação com a API
│   └── ...
├── .gitignore           # Arquivos e pastas ignorados pelo Git
├── package.json         # Metadados e dependências do projeto
├── server.json          # "Banco de dados" para o json-server
└── webpack.config.js    # Configurações do Webpack
```

---

## 👨‍💻 Autor

Desenvolvido por **Bruno Henrique da Silva Mosko**.