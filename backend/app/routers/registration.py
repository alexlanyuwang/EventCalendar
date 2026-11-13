from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..database import get_db
from ..models.user import User
from ..security.password import hash_password
from ..schemas.users import UserCreate, RegistrationResponse, UserResponse

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/register", response_model=RegistrationResponse, status_code=status.HTTP_201_CREATED)
def register_user(request: UserCreate, db: Session = Depends(get_db)):
    # Check if the user already exists
    existing_user = db.query(User).filter(User.email == request.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="User with this email already exists"
        )

    # Hash the password
    hashed_password = hash_password(request.password)

    # Create the new user
    new_user = User(
        email=request.email,
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