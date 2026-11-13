from datetime import datetime
from pydantic import BaseModel, Field, EmailStr, ConfigDict, field_validator

class UserBase(BaseModel):
    email: str = Field(max_length=254)
    name: str = Field(max_length=254)

class UserCreate(UserBase):
    password: str = Field()
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

class UserResponse(UserBase):
    id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)

class RegistrationResponse(BaseModel):
    message: str   
    user: UserResponse

class UserUpdate(UserBase):
    password: str | None = Field(None, min_length=8, max_length=128)

# class UserInDBBase(UserBase):
#     id: int
#     created_at: datetime
#     updated_at: datetime

#     class Config:
#         orm_mode = True

# class User(UserInDBBase):
#     pass

# class UserInDB(UserInDBBase):
#     hashed_password: str