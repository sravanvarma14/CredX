from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import entity, documents, analysis, research

app = FastAPI(title="CredX API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(entity.router, prefix="/api/entity", tags=["Entity"])
app.include_router(documents.router, prefix="/api/documents", tags=["Documents"])
app.include_router(analysis.router, prefix="/api/analysis", tags=["Analysis"])
app.include_router(research.router, prefix="/api/research", tags=["Research"])

@app.get("/")
async def root():
    return {"message": "Welcome to CredX AI API"}
