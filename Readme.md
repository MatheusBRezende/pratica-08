# 🛍️ Estudo de Caso — Rotas em Aplicações Web e Mobile

## 📖 Descrição do Projeto

Este projeto consiste em uma aplicação completa de **e-commerce** desenvolvida em duas plataformas:

* 💻 **Web**: Aplicação **React** com **Vite** para desktop
* 📱 **Mobile**: Aplicação **React Native** com **Expo** para dispositivos móveis

O sistema implementa funcionalidades de **listagem e detalhamento de produtos**, com **sistemas de navegação robustos** em ambas as plataformas.

---

## 🎯 Objetivos da Atividade

* Implementar **rotas de navegação** entre telas/páginas
* Desenvolver **estruturas modernas** de projetos
* Consolidar conhecimentos em **React Router** e **React Navigation**
* Praticar **organização de código** e **versionamento**

---

## 🛠️ Tecnologias Utilizadas

### 🌐 Aplicação Web

* **React 18** — Biblioteca principal
* **Vite** — Ferramenta de build e dev server
* **React Router DOM** — Roteamento para web
* **CSS3** — Estilização da interface

### 📱 Aplicação Mobile

* **React Native** — Framework para apps móveis
* **Expo** — Plataforma de desenvolvimento e empacotamento
* **React Navigation** — Navegação nativa
* **React Native Screens** — Otimização de performance

---

## 🚀 Como Executar o Projeto

### 🔧 Pré-requisitos

Certifique-se de ter instalado:

* **Node.js** (versão 16 ou superior)
* **npm** ou **yarn**
* **Git**
* Para o mobile: **Expo Go** no celular ou um **emulador** configurado

---

### 💻 Executando a Aplicação Web

1. **Navegue até a pasta do projeto web:**

   ```bash
   cd web
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute o projeto:**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**

   ```
   http://localhost:5173
   ```

---

### 📱 Executando a Aplicação Mobile

1. **Navegue até a pasta do projeto mobile:**

   ```bash
   cd mobile
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute o projeto:**

   ```bash
   npx expo start
   ```

4. **Conecte via:**

   * 📷 **QR Code**: escaneie com o app **Expo Go**
   * 🤖 **Emulador Android**: pressione `a`
   * 🍏 **Emulador iOS**: pressione `i`
   * 🌐 **Versão Web**: pressione `w`

---

## 🛣️ Rotas Implementadas

### 🌐 Web (React Router DOM)

| Rota           | Descrição                                 |
| -------------- | ----------------------------------------- |
| `/`            | Página inicial com grid de produtos       |
| `/product/:id` | Página de detalhes do produto selecionado |

### 📱 Mobile (React Navigation)

| Tela      | Descrição                               |
| --------- | --------------------------------------- |
| `Home`    | Tela inicial com lista de produtos      |
| `Details` | Tela de detalhes do produto selecionado |

---

## 📊 Funcionalidades Implementadas

### 💻 Web

✅ Listagem de produtos em layout **grid responsivo**
✅ Navegação para **detalhes do produto**
✅ **Design moderno** com efeitos de hover
✅ **Botão de voltar** para a lista
✅ **Layout adaptável** para diferentes resoluções

### 📱 Mobile

✅ Lista **scrollável** de produtos
✅ Navegação entre telas com **gestos nativos**
✅ Design **mobile-first** e touch-friendly
✅ Interface **otimizada** para dispositivos móveis
✅ Exibição de **detalhes completos** com especificações# pratica-08-rotas
