from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.orm import Session

from ..database import get_db
from ..models.user import User
from ..security.password import hash_password
from ..schemas.schemas import RegistrationResponse, UserCreate

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/register", response_model=RegistrationResponse, status_code=status.HTTP_201_CREATED)
def register_user(request: UserCreate, db: Session = Depends(get_db)):
    existing_email = db.execute(
        select(User).where(
            func.lower(User.email) == request.email.lower()
        )
    ).first()
    if existing_email:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="User with this email already exists"
        )

    existing_username = db.execute(
        select(User).where(
            func.lower(User.username) == request.username.lower()
        )
    ).first()
    if existing_username:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="This username is already taken"
        )

    # Hash the password
    hashed_password = hash_password(request.password)

    # Create the new user
    new_user = User(
        username=request.username,
        email=request.email.lower(),
        password_hash=hashed_password,
        name=request.name
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return RegistrationResponse(
        message="Registration successful. You can now log in.",
        user=new_user
    )