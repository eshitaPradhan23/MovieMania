# 🎬 MovieMania

A full-stack movie discovery app built with React and Node.js. Browse popular, top-rated, and upcoming movies fetched from the TMDB API, filter and sort them, and save your favorites to a MongoDB-backed personal list.

---

## ✨ Features

- **Browse Movies** — Separate sections for Popular, Top Rated, and Upcoming movies
- **Filter by Rating** — Quickly narrow down movies with 6+, 7+, or 8+ star ratings
- **Sort Movies** — Sort by release date or rating in ascending or descending order
- **Favorites** — Add movies to your personal favorites list, persisted via a REST API and MongoDB
- **Remove Favorites** — Remove movies from your favorites at any time
- **TMDB Links** — Click any movie card to open its full page on The Movie Database

---

## 🛠️ Tech Stack

**Frontend**
- [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- [React Router DOM v7](https://reactrouter.com/) for client-side routing
- [Axios](https://axios-http.com/) for API requests
- [Lodash](https://lodash.com/) for filtering and sorting logic

**Backend**
- [Node.js](https://nodejs.org/) (v22.13.0)
- [Express 5](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) for MongoDB interaction
- [CORS](https://www.npmjs.com/package/cors) and [dotenv](https://www.npmjs.com/package/dotenv)

**External API**
- [TMDB (The Movie Database) API](https://www.themoviedb.org/documentation/api)

---

## 📁 Project Structure

```
MovieMania/
├── backend/
│   ├── db.js            # MongoDB connection
│   ├── server.js        # Express server & API routes
│   └── package.json
├── src/
│   ├── api.js           # Axios instance (base URL config)
│   ├── App.jsx          # Root component with routing
│   ├── pages/
│   │   ├── home.jsx     # Home page with movie sections
│   │   └── Favorites.jsx# Favorites page
│   └── components/
│       ├── navbar/      # Navigation bar
│       └── MovieList/
│           ├── MovieList.jsx   # Movie section with filter/sort
│           ├── MovieCard.jsx   # Individual movie card
│           └── FilterGroup.jsx # Rating filter buttons
├── public/
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v22.13.0 or higher
- A MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- A [TMDB API key](https://www.themoviedb.org/settings/api)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/MovieMania.git
cd MovieMania
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

The API will be running at `http://localhost:5000`.

### 3. Set Up the Frontend

From the project root:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

> **Note:** The TMDB API key is currently hardcoded in `src/components/MovieList/MovieList.jsx`. For production use, move it to a `.env` file:
> ```env
> VITE_TMDB_API_KEY=your_tmdb_api_key
> ```

---

## 🔌 API Endpoints

The backend exposes the following REST endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check |
| `GET` | `/favorites` | Get all favorite movies |
| `POST` | `/favorites` | Add a movie to favorites |
| `DELETE` | `/favorites/:movieId` | Remove a movie from favorites |

### POST `/favorites` — Request Body

```json
{
  "movieId": 12345,
  "title": "Movie Title",
  "poster": "/poster_path.jpg",
  "rating": 8.2
}
```

---

## 📦 Available Scripts

### Frontend (root directory)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

### Backend (`backend/` directory)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the server with nodemon (auto-reload) |

---

## 🙏 Acknowledgements

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the movie data API
- [Vite](https://vitejs.dev/) for the blazing-fast frontend tooling
