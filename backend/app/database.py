from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker


# Store local development data in a SQLite database file.
DATABASE_URL = "sqlite:///./eventcalendar.db"

# SQLite needs this option when FastAPI uses a session across request threads.
engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False},
)

# Create one database session factory for the application's routes and services.
SessionLocal = sessionmaker(
    bind=engine,
    autocommit=False,
    autoflush=False,
)


# All SQLAlchemy database models should inherit from this base class.
class Base(DeclarativeBase):
    pass


# Provide one session per request and always close it afterward.
def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
