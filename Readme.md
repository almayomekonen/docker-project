<div align="center">

# 🚀 Users Management API

### A production-ready RESTful API built with Node.js, Express, MongoDB & Docker

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

</div>

---

# 📖 Overview

This project is a backend REST API designed to manage users efficiently while demonstrating modern backend engineering practices.

The application was developed using **Node.js**, **Express.js**, and **MongoDB**, then fully containerized with **Docker** and automated using **GitHub Actions CI/CD** workflows.

The goal of this project wasn't only to build CRUD endpoints, but also to follow production-like development practices including containerization, automated builds, and clean project architecture.

---

# ✨ Features

- Create new users
- Retrieve all users
- Retrieve a user by ID
- Update user information
- Delete users
- RESTful API architecture
- MongoDB integration
- Dockerized application
- GitHub Actions CI workflow
- Environment variable configuration
- Modular folder structure
- Error handling
- JSON API responses

---

# 🛠 Tech Stack

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| Node.js        | JavaScript Runtime            |
| Express.js     | Backend Framework             |
| MongoDB        | NoSQL Database                |
| Docker         | Containerization              |
| Docker Compose | Multi-container orchestration |
| GitHub Actions | CI/CD Automation              |
| Git            | Version Control               |

---

# 📁 Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── docker.yml
│
├── config/
├── controllers/
├── model/
├── public/
├── routes/
│
├── Dockerfile
├── docker-compose.yml
├── app.js
├── package.json
├── .dockerignore
├── .gitignore
└── README.md
```

---

# 🏗 Architecture

```
Client
   │
   ▼
Express Routes
   │
   ▼
Controllers
   │
   ▼
MongoDB Models
   │
   ▼
MongoDB
```

---

# 🐳 Docker

The project is fully containerized.

### Build the image

```bash
docker build -t users-management .
```

### Run the container

```bash
docker run -p 3000:3000 users-management
```

Or simply use Docker Compose:

```bash
docker compose up
```

---

# ⚙️ Environment Variables

Create a `.env` file.

```env
PORT=3000
MONGO_URI=your_connection_string
```

---

# 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/yourusername/users-management.git
```

Enter the project

```bash
cd users-management
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm start
```

---

# 🔄 CI/CD

The project includes a GitHub Actions workflow that automatically:

- Checks out the repository
- Builds the Docker image
- Verifies the Docker build
- Ensures the project is ready for deployment

This demonstrates automated software delivery practices commonly used in professional development environments.

---

# 💡 What I Practiced

This project focuses on applying backend engineering concepts such as:

- REST API Design
- MVC Architecture
- Docker Containerization
- GitHub Actions Automation
- MongoDB Integration
- Environment Configuration
- Modular Code Organization
- Version Control using Git
- Backend Best Practices

---

# 👨‍💻 Author

**Almayo Mekonen**

• Devops engineer •

Passionate about building scalable backend applications and continuously improving software engineering skills.

---

<div align="center">

### ⭐ If you found this project interesting, consider giving it a star!

</div>
