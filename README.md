# 🧠 Social Media API

A lightweight, modular REST API for a simple social media platform built using **Node.js**, **Express.js**, and **PostgreSQL**.

## 🚀 Features

- Create, like, and unlike posts
- Get total likes on a post
- Fetch top-liked posts
- Retrieve posts liked by a specific user
- Role-based logic ready for extension

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM/Driver**: `pg`
- **Environment Config**: dotenv

## 📦 Installation

```bash
git clone https://github.com/rohithvarma73/social-media-api.git
cd social-media-api
npm install

🔧 Environment Setup
Create a .env file in the root directory:

PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=social_media

🧪 API Endpoints

| Method | Endpoint                            | Description                    |
| ------ | ----------------------------------- | ------------------------------ |
| POST   | `/posts`                            | Create a new post              |
| POST   | `/posts/:post_id/like`              | Like a post                    |
| DELETE | `/posts/:post_id/like`              | Unlike a post                  |
| GET    | `/posts/:post_id/likes`             | Get like count for a post      |
| GET    | `/posts/top`                        | Get top-liked posts            |
| GET    | `/posts/users/:user_id/liked-posts` | Posts liked by a specific user |

📁 Project Structure

src/
├── config/          # DB connection config
│   └── db.js
├── controllers/     # Route logic
│   └── postController.js
├── routes/          # API route definitions
│   └── postRoutes.js
├── app.js           # Entry point

✅ Setup DB Tables (PostgreSQL)

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  user_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(post_id, user_id)
);

✨ Contributing
Feel free to fork and contribute via PRs. Suggestions and improvements are welcome!

📄 License
MIT License. Use freely for learning or commercial projects.

Built with ❤️ by Rohith Varma


---

### ✅ How to add this:

1. Save the content above into a file:
```bash
touch README.md

2. Paste the content inside, then commit:
git add README.md
git commit -m "Add README with API details"
git push


