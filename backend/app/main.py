from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import Base, engine


@asynccontextmanager
async def lifespan(_: FastAPI):
    Base.metadata.create_all(bind=engine)
    yield


# Create the FastAPI application instance.
app = FastAPI(
    title="EventCalendar API",
    description="Backend API for personalized event discovery and calendar management.",
    version="0.1.0",
    lifespan=lifespan,
)

# Allow the Next.js frontend to call this API during local development.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Health"])
def read_root() -> dict[str, str]:
    """Return a basic message confirming that the API is running."""
    return {"message": "EventCalendar API is running"}


@app.get("/health", tags=["Health"])
def health_check() -> dict[str, str]:
    """Provide a simple health-check endpoint for monitoring and development."""
    return {"status": "ok"}
