import os
import firebase_admin
from firebase_admin import credentials, auth
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

FIRE_BASE_CREDS = os.environ["FIREBASE_CREDENTIALS"]

creds = credentials.Certificate(FIRE_BASE_CREDS)

firebase_admin.initialize_app(creds)

security = HTTPBearer()

def get_current_user(creds: HTTPAuthorizationCredentials = Depends(security)):
    token = creds.credentials
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token
    except Exception:
        raise HTTPException(status_code=401, detail="INVALID OR EXPIRED AUTHORIZATION TOKEN")