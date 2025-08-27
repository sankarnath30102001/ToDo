# 📝 Todo Task List

**React.js-based ToDo application**
It allows users to add, edit, delete, and mark tasks as complete. Tasks are persisted in Local Storage.  
Includes input validation, confirmation dialogs, responsive design, and a **Docker setup with hot reloading**.

---

## 🚀 Features

- ✅ Create, Read, Update, Delete (CRUD) tasks
- ✅ Mark tasks as completed (toggle + visual distinction)
- ✅ Persist tasks in browser Local Storage (`id, text, completed, updatedAt`)
- ✅ Input validation (regex allows only `A–Z, a–z, 0–9, space, _ , -`)
- ✅ Confirmation dialogs on delete & update
- ✅ Responsive UI (mobile + desktop)
- ✅ Dev-friendly **Docker setup** with hot reloading

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm (or yarn)
- [Docker](https://www.docker.com/) & Docker Compose (for containerized setup)

---

## 🧩 Project Structure

todo-app/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │   ├─ TodoForm.jsx
│  │   ├─ TodoItem.jsx
│  │   └─ TodoList.jsx
│  ├─ App.js
│  ├─ App.css
│  └─ index.js
├─ Dockerfile
├─ docker-compose.yml
├─ package.json
├─ package-lock.json
└─ README.md

## ⚙️ Run Locally (without Docker)

1. Clone the repo:

   ```bash
   git clone https://github.com/sankarnath30102001/ToDo.git
   cd ToDo
2. (Windows PowerShell users only) Allow running local scripts for this session:

    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass


3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

  Open your browser at: `http://localhost:3000`

---

🐳 Run with Docker 

1. Build the Docker image:

    docker build -t todo-app .

2. Run the container:

    docker run -p 3000:3000 todo-app

3. Open your browser at: http://localhost:3000

🛠️ Tech Stack
    React.js – Frontend library
    JavaScript (ES6+) – Logic and interactivity
    CSS – Styling
    Docker – Containerization


## 👨‍💻 Author
Sankarnath M
📧 sankarnath30102001@gmail.com
🌐 LinkedIn
