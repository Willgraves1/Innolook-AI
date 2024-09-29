# INNOLOOK-AI

This project is an AI platform built with Node.js, Express, React, MongoDB, Docker, and Tailwind CSS.

## Features
- Real-time chat with AI using GPT models (Hugging Face)
- MongoDB for storing user sessions and preferences
- Modern UI with Tailwind CSS
- Secure by default with HTTPS (via Cloudflare) and OAuth 2.0 (if needed)
- Dockerized for easy deployment

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/INNOLOOK-AI.git

2. cd INNOLOOK-AI

3. Setup enviroment veriables in .env for the backend

4. docker-compose up --build

5. Open the frontend at http://localhost:3000

Contributing
Feel free to submit issues or pull requests to improve the project.

yaml
Copy code

---

### Steps to Deploy to GitHub

1. **Initialize Git Repository:**

```bash
git init
git add .
git commit -m "Initial commit"
Create a GitHub Repo:

Go to GitHub and create a new repository.
Push to GitHub:

bash
Copy code
git remote add origin https://github.com/yourusername/my-chatbot-platform.git
git push -u origin master