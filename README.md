# 📝 Todo App

**React Todo Application** built with **Bootstrap** & **React-Bootstrap** for styling.  
Supports **adding, editing, deleting, and persisting todos** using browser **localStorage**.

---

## 🚀 Features

- ➕ Add new todos via a modal form  
- ✏️ Edit existing todos in the same modal  
- ❌ Delete todos with a single click  
- 💾 Persist todos in **localStorage** (data stays after refresh)  
- 📱 Responsive UI with **Bootstrap** styling  

---

## 📂 Project Structure

todo-app/
├─ src/
│ ├─ components/
│ │ ├─ TodoFormModal.jsx # Modal for adding/editing todos
│ │ ├─ TodoItem.jsx # Single todo item
│ │ └─ TodoList.jsx # List of todos
│ ├─ App.js # Main app component
│ ├─ App.css # Custom styles
│ └─ index.js # Entry point
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
 
## 📜 NPM Scripts

1. npm start → Start dev server

2. npm run build → Build production bundle in /build

3. npm test → Run tests (if configured)



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

## 📦 Dependencies

⚛️ React (v18.2.0)
🎨 Bootstrap (v5)
🖼 React-Bootstrap (v2)

---

## 📜 License & Author

Author: Sankarnath M
📧 sankarnath30102001@gmail.com

---