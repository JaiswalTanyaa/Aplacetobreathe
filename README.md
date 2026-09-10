# A Place to Breathe - Fullstack Mental Health Sanctuary

A modern, responsive digital sanctuary for mental wellness built with **React + Vite**, **Tailwind CSS**, and **Node.js / Express**, powered by **MongoDB Atlas**.

---

## Quick Start

### 1. Run the Entire Fullstack App (Frontend + Backend)
From the project root:
```bash
npm run dev
```
- **Frontend (React + Vite)** will run at: `http://localhost:5173`
- **Backend API (Node.js/Express)** will run at: `http://localhost:5000`

### Or Run Separately:
- **Backend only**:
  ```bash
  npm run dev:server
  # or: cd server && npm run dev
  ```
- **Frontend only**:
  ```bash
  npm run dev:client
  # or: cd client && npm run dev
  ```

---

## MongoDB Atlas Configuration

Your MongoDB Atlas credentials have been saved to `atlas-credentials.env` and `server/.env`.
- Database Name: `breathe_sanctuary`
- Network Access: Ensure your IP is added to the **Network Access** IP Access List in [MongoDB Atlas Dashboard](https://cloud.mongodb.com) (or allow `0.0.0.0/0` for universal access).
- Resilient Fallback: If Atlas connection is temporarily blocked by firewall or pending IP authorization, the server automatically runs in resilient memory mode so all endpoints and features remain operational without downtime.

---

## Security & `.gitignore`

The following files are strictly protected and will **NOT** be committed to version control:
- `.env`
- `atlas-credentials.env`
- `server/.env`
- `node_modules/`
- `client/node_modules/`
- `server/node_modules/`
- `dist/`

---

## Features

1. **Interactive 4-7-8 Breathing Circle**: Visual pacer with expanding/contracting auras and cycle counter.
2. **Ambient Soundscapes**: Calming nature frequencies (Forest Rain, Pacific Waves, Golden Meadow, Warm Hearth).
3. **Vetted Therapist Directory**: Search by specialty, review bios and hourly rates, and schedule sessions via the interactive booking flow.
4. **Encrypted Private Journal**: Daily emotional reflections, mood tags, guided prompts, and persistent database storage.
5. **Community Forum (Stories of Hope)**: Categorized vulnerability shares with real-time warmth (likes) and supportive pledge.
6. **Mindful Progress Dashboard**: Calm streak, mindful minutes tracker, and milestone achievements.
7. **Crisis Support Center**: 24/7 emergency hotlines (988, Crisis Text Line, international directories).
8. **Admin Operations Portal**: Live MongoDB Atlas status monitor, booking management, and specialist registry.
