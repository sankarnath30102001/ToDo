# 📝 Todo Task List

This repository contains a **Todo Task List** web application built with **React (Create React App)** as part of an assignment.  
It supports add / edit / delete tasks, marking tasks complete, input validation, confirmation dialogs, responsive UI, and persistence using **localStorage**. Docker setup for development (hot reloading) and production is included.

---

## 🚀 Overview / Assignment Requirements

This project implements the following functionality required by the assignment:

- Create, read, update, delete (CRUD) tasks
- Mark tasks as completed (toggle + visual distinction)
- Persist tasks in browser Local Storage (`id`, `text`, `completed`, `updatedAt`)
- Input validation: only letters, numbers, spaces, `_` and `-` (regex)
- Confirmation dialogs on update & delete
- Responsive layout
- Docker development setup with hot reloading

---

## 📋 Prerequisites

Install the following before proceeding:

- Node.js (v16+ recommended) — [Download here](https://nodejs.org/)
- npm (comes with Node.js) or yarn
- Git (optional, for cloning)
- Docker Desktop (for Docker workflows) — [Download here](https://www.docker.com/products/docker-desktop)
  - On Windows: WSL2 integration is recommended for best experience

---

## 🧭 Project Structure
todo-app/
├─ public/
│ └─ index.html
├─ src/
│ ├─ components/
│ │ ├─ TodoForm.jsx
│ │ ├─ TodoItem.jsx
│ │ └─ TodoList.jsx
│ ├─ App.js
│ ├─ App.css
│ └─ index.js
├─ Dockerfile.dev
├─ Dockerfile.prod
├─ docker-compose.yml
├─ package.json
└─ README.md


---

## ⚙️ Run Locally (without Docker)

```bash
1. Clone the repo and change directory:
   git clone https://github.com/sankarnath30102001/ToDo.git
   cd ToDo

2. (Windows PowerShell users only) Allow running local scripts for this session:
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

3. Install dependencies:
   npm install

4. Start the development server:
   npm start

5. Open your browser at:
   http://localhost:3000
   
 ---

## ⚙️ NPM scripts

1. Start dev server:
   npm start

2. Build production bundle into /build:
   npm run build

3. Run tests (if configured):
   npm test

---

## 🔐 Environment Variables / Configuration

This app does not require any environment variables by default — it is a client-side app storing tasks in localStorage.

If you want to add environment variables for build-time configuration, use the REACT_APP_ prefix in a .env file:

1. Example .env content:
   REACT_APP_API_URL=https://api.example.com

2. Notes:
   - Create a .env file in project root for custom REACT_APP_ variables.
   - Restart dev server after changing .env.
   
---

## 🐳 Docker — Development (Hot Reload) — Recommended

Use docker-compose to run the app in a container with hot reloading.
1. Ensure Docker Desktop is running.

2. Create Dockerfile.dev in project root:

   FROM node:20
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   EXPOSE 3000
   CMD ["npm", "start"]

3. Create docker-compose.yml in project root:

   version: "3.9"
   services:
     todo-app:
       build:
         context: .
         dockerfile: Dockerfile.dev
       ports:
         - "3000:3000"
       volumes:
         - .:/app
         - /app/node_modules
       environment:
         - CHOKIDAR_USEPOLLING=true
       command: npm start

4. Start dev container (with build):
   docker-compose up --build

5. Open your browser at:
   http://localhost:3000

---

## 📜 License & Author
Author: Sankarnath M
📧 sankarnath30102001@gmail.com

---