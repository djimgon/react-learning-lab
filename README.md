# React Learning Lab

React practice project for freeCodeCamp exercises, experiments, and small React applications.

## Local Development Setup

### 1. Install Node.js and npm

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

Check installed versions:

```bash
node -v
npm -v
```

### 2. Create React project with Vite

Go to the frontend directory:

```bash
cd frontend
```

Create a React application in the current directory:

```bash
npm create vite@latest . -- --template react
```

Install dependencies:

```bash
npm install
```

### 3. Run React locally

```bash
npm run dev
```

Stop the development server with:

```text
Ctrl + C
```

### 4. Docker Setup

Return to the project root:

```bash
cd ..
```

Initialize and build the project:

```bash
make init
```

Start containers:

```bash
make up
```

Stop containers:

```bash
make down
```

Restart containers:

```bash
make restart
```

## Project Structure

```text
react-learning-lab/
├── frontend/
│   ├── src/
│   ├── public/
│   └── docker/
├── gateway/
│   └── docker/
├── docker-compose.yml
├── Makefile
└── README.md
```

## Purpose

This repository is used for:

- freeCodeCamp React certification exercises
- React practice
- JavaScript and JSX experiments
- Small React projects
- Testing React concepts and patterns