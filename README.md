# 🤖 Interview Master (yt-genai)

**Interview Master** is a cutting-edge, GenAI-powered platform designed to help candidates ace their job interviews. By analyzing your resume, self-description, and the job description you're applying for, it generates a tailor-made preparation plan, critical interview questions, and even a profesional resume PDF.

---

## ✨ Key Features

-   **🎯 Intelligent Match Score**: See how well your profile matches the target job description.
-   **📝 AI-Generated Interview Reports**: Get a list of technical and behavioral questions tailored specifically to your background and the role.
-   **📈 Personalized Roadmap**: A day-wise preparation guide to help you focus on your skill gaps.
-   **📄 Tailored Resume Generation**: Generate an ATS-friendly, professional resume PDF with a single click.
-   **🔒 Secure Authentication**: Full user management with JWT-based authentication.

---

## 🛠️ Technology Stack

### **Frontend**
-   **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
-   **Styling**: SCSS (Sass)
-   **State & Routing**: React Context API, React Router 7

### **Backend**
-   **Runtime**: Node.js v20+
-   **Framework**: Express 5
-   **Database**: MongoDB (via Mongoose 9)
-   **AI Engine**: Google Generative AI (Gemini 3 Flash)
-   **PDF Generation**: Puppeteer (Headless Chromium)

### **DevOps & Deployment**
-   **Containerization**: Docker & Docker Compose
-   **CI/CD**: GitHub Actions (Lint → Build → Deploy)
-   **Reverse Proxy**: Nginx (serving the Frontend)
-   **Registry**: GitHub Container Registry (GHCR)

---

## 🚀 Quick Start

### **Prerequisites**
-   Docker and Docker Compose installed.
-   A MongoDB Atlas connection string.
-   A [Google Gemini API Key](https://aistudio.google.com/app/apikey).

### **Setup via Docker Compose**
1.  Clone the repository and enter the directory.
2.  Create a `.env` file in the `Backend` directory:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    GOOGLE_GENAI_API_KEY=your_gemini_api_key
    ```
3.  Run the application:
    ```bash
    docker-compose up --build
    ```
4.  Access the **Frontend** at `http://localhost:80` and the **Backend** at `http://localhost:3000`.

---

## 🚢 CI/CD Pipeline

The project includes a robust GitHub Actions workflow located in `.github/workflows/deploy.yml`:

1.  **Lint & Validate**: Automatically checks both Frontend and Backend for code quality.
2.  **Build & Push**: Builds Docker images and pushes them to GHCR.
3.  **Deploy**: Connects to your VPS via SSH, pulls the latest images, and restarts the containers.

### **Required GitHub Secrets**
-   `MONGO_URI`
-   `JWT_SECRET`
-   `GOOGLE_GENAI_API_KEY`
-   `VITE_API_URL` (Public URL of the backend)
-   `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY` (For deployment)

---

## 📁 Project Structure

```bash
yt-genai/
├── .github/workflows/   # CI/CD pipelines
├── Backend/             # Express API source code
│   ├── src/             # Logic, routes, and controllers
│   └── Dockerfile       # Backend container definition
├── Frontend/            # React SPA source code
│   ├── src/             # Features, components, and styling
│   ├── nginx.conf       # Production server config
│   └── Dockerfile       # Frontend container definition
└── docker-compose.yml   # Local orchestration
```

---

## 📜 License

This project is licensed under the **ISC License**. Created with ❤️ by [sudha159github](https://github.com/sudha159github).
