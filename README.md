# School Leaderboard – Frontend Challenge

This project is a frontend challenge submission for **Schoolvoice**.  
It implements a students leaderboard using data from a GraphQL API.

---

## Tech Stack

- React
- TypeScript
- Vite
- Sass (SCSS)
- GraphQL
- Apollo Client

---

## Setup

### Environment Variable

Create a `.env` file in the project root and add:

```env
VITE_API_ENDPOINT=http://localhost:4000/
```
### Install Dependencies
```bash
   pnpm install
   # or
   npm install
```
### Run The Development Server
```bash
   pnpm dev
   # or
   npm run dev
```
The app will run on:

http://localhost:5173

## Notes

- This repository contains only the client-side project, as requested.

- Language switching is implemented without using react-router-dom to preserve the original project structure.

- The UI matches the provided design and handles edge cases such as null student images.
