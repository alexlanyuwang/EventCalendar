# EventCalendar

This project is organized into separate frontend and backend applications.

## Directories

- `frontend/` - Client-side application and user interface.
- `backend/` - Server-side application, APIs, and business logic.

## Run locally

Use two terminals: one for the backend API and one for the frontend app.

### Backend

Initial setup from the project root:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
```

Run the backend after setup:

```powershell
cd backend
.\.venv\Scripts\Activate.ps1
python -m uvicorn app.main:app --reload
```

The backend will run at `http://localhost:8000`.

- API docs: `http://localhost:8000/docs`
- Health check: `http://localhost:8000/health`

### Frontend

In a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

The frontend will run at `http://localhost:3000`.

## Project overview

- Frontend: Next.js application for the calendar UI and user experience.
- Backend: FastAPI application for authentication, event APIs, and business logic.
