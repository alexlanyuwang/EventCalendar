# EventCalendar backend

FastAPI backend for the EventCalendar application.

## Local setup

Install Python 3.11 or newer, then run these commands from this directory:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`.

- Health check: `http://localhost:8000/health`
- Interactive API documentation: `http://localhost:8000/docs`
