from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, Field, field_validator
from sqlalchemy.orm import Session

from ..database import get_db
from ..models.user import User
from ..security.password import hash_password

class RegistrationRequest(BaseModel):
    email: str = Field(max_length=254)
    password: str = Field(max_length=254)
    name: str = Field(max_length=254)

    @field_validator("password")
    @classmethod
    def password_meets_requirements(cls, password: str) -> str:
        if (len(password) > 128):
            raise ValueError("Password must be at most 128 characters.")
        elif (
            not 8 <= len(password) <= 128
            or not any(char.isupper() or char.isdigit() for char in password)
            or not any(not char.isalnum() and not char.isspace() for char in password)
        ):
            raise ValueError(
                "Password must be at least 8 characters and include an uppercase letter or number, and a special character."
            )
        return password

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/register", status_code=status.HTTP_201_CREATED)
def register_user(request: RegistrationRequest, db: Session = Depends(get_db)):
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

    return {"message": "Registration successful. You can now log in."}