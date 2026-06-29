# 🧠 MERN ThinkBoard

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that enables users to create, organize, edit, and manage notes on a digital board. The application features a responsive user interface, secure authentication, and RESTful APIs for efficient note management.

---

## ✨ Features

- 🔐 Secure User Authentication (JWT)
- 👤 User Registration & Login
- 📝 Create, Read, Update, Delete (CRUD) Notes
- 📌 Organize notes efficiently
- 🔍 Search functionality
- 📱 Fully Responsive Design
- ⚡ REST API Architecture
- 🔒 Password Encryption using bcrypt
- 💾 MongoDB Database Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS / Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- CORS

---

## 📂 Project Structure

```
mern-thinkboard/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- MongoDB
- Git

---

## Clone the Repository

```bash
git clone https://github.com/yourusername/mern-thinkboard.git
cd mern-thinkboard
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

Start the backend server.

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Get user profile |

### Notes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a single note |
| POST | `/api/notes` | Create a note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

---

## 🗄️ Database Collections

### Users

- _id
- name
- email
- password
- createdAt
- updatedAt

### Notes

- _id
- title
- description
- color
- userId
- createdAt
- updatedAt

---

## 🔑 Environment Variables

### Backend (`server/.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### Frontend (`client/.env`)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📜 Available Scripts

### Backend

```bash
npm run dev
npm start
```

### Frontend

```bash
npm run dev
npm run build
npm run preview
```

---

## 🚀 Deployment

### Frontend
- Vercel
- Netlify

### Backend
- Render
- Railway

### Database
- MongoDB Atlas

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push the branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Uday Reddy**

GitHub: https://github.com/udayreddyvangala499-collab

---

⭐ If you found this project useful, consider giving it a star!
