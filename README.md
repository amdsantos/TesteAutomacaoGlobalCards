# **Teste de Automação GlobalCards**

Este projeto implementa testes automatizados para o site **Advantage Online Shopping**, abrangendo a interface web e a API. A abordagem utilizada é baseada no **BDD (Behavior-Driven Development)** com o suporte das ferramentas **Cucumber** e **Cypress**.


---


## 📋 **Índice**

1. [**Descrição do Projeto**](#descrição-do-projeto)  
2. [**Tecnologias Utilizadas**](#tecnologias-utilizadas)  
3. [**Pré-requisitos**](#pré-requisitos)  
4. [**Configuração do Ambiente**](#configuração-do-ambiente)  
5. [**Como Executar os Testes**](#como-executar-os-testes)  
6. [**Estrutura do Projeto**](#estrutura-do-projeto)  
7. [**Contribuições**](#contribuições)  
8. [**Contato**](#contato)  


---


## 📖 **Descrição do Projeto**

O objetivo deste projeto é garantir a qualidade e estabilidade do site **Advantage Online Shopping** por meio de testes automatizados. Cenários escritos em linguagem **Gherkin** tornam os testes mais compreensíveis para todos os envolvidos no processo.


---


## 💻 **Tecnologias Utilizadas**

As principais ferramentas e bibliotecas utilizadas neste projeto são:

- **[Cypress](https://www.cypress.io/):** Framework de testes end-to-end.  
- **[Cucumber](https://cucumber.io/):** Para cenários BDD.  
- **[cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor):** Integração de Cypress com Cucumber.  
- **cypress-file-upload:** Biblioteca para simular upload de arquivos.  


**Dependências do projeto:**

```
"dependencies": {
  "cypress": "^13.14.2",
  "cypress-cucumber-preprocessor": "^4.3.1",
  "cypress-file-upload": "^5.0.8"
}
```

---


## ⚙️ **Pré-requisitos**
Node.js instalado (recomendado: versão 16 ou superior).

👉 Download Node.js
Uma IDE de JavaScript (recomendado: Visual Studio Code).

👉 Download VS Code


---


## 🔧 **Configuração do Ambiente**
Clone este repositório:

```
git clone https://github.com/amdsantos/TesteDeAutomacaoGlobalCards.git
```

Instale as dependências:
```
npm install
```

Configure o Cypress para reconhecer arquivos .feature 
```
cypress-cucumber-preprocessor
```


---


## 🚀 **Como Executar os Testes**

🖥️ Executar no terminal:
```
npx cypress run
```
  
🌐 Executar em um navegador específico:
```
npx cypress run --browser chrome --no-exit
```

📜 Executar com script configurado no package.json:
```
npm run test:chrome
```


---


## 📂 **Estrutura do Projeto**
Abaixo está a organização das pastas e arquivos do projeto:


```plaintext
📦 cypress
 ┣ 📂 e2e
 ┃ ┣ 📂 step_definitions
 ┃ ┃ ┣ 📂 Api
 ┃ ┃ ┗ 📂 Web
 ┃ ┣ 📜 api_steps.feature           # Cenário de teste de API
 ┃ ┣ 📜 image_upload_step.feature   # Cenário para upload de imagem
 ┃ ┣ 📜 validação_negativa.feature  # Cenário para validação negativa
 ┃ ┗ 📜 validar_carrinho.feature    # Cenário para validação de carrinho
 ┣ 📂 fixture
 ┃ ┣ 📜 example.json                # Arquivo de dados fictícios para testes
 ┃ ┗ 📜 7454774191_1.webp           # Imagem de exemplo usada nos testes
 ┣ 📂 plugins
 ┃ ┗ 📜 index.js                    # Configurações de plugins do Cypress
 ┣ 📂 screenshots
 ┃ ┗ 📂 [Cenários com screenshots dos testes]
 ┣ 📂 support
 ┃ ┣ 📜 commands.js                 # Comandos personalizados do Cypress
 ┃ ┣ 📜 e2e.js                      # Configuração global para testes e2e
 ┃ ┗ 📜 index.js                    # Arquivo principal de suporte
 ┣ 📜 cypress.config.js             # Configurações do Cypress
 ┣ 📜 package.json                  # Dependências e scripts do projeto
 ┣ 📜 yarn.lock                     # Controle de dependências com Yarn
 ┗ 📜 README.md                     # Documentação do projeto
```


---


## 📞 **Contato**
- Email: amd.mantovani@gmail.com
- LinkedIn: [Amanda Mantovani](https://www.linkedin.com/in/amd-mantovani/)
