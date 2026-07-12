from fastapi import FastAPI

app = FastAPI(
    title="Eolian API",
    description="Backend for Eolian",
    version="0.1.0",
)


@app.get("/")
async def root() -> dict[str, str]:
    return {
        "message": "Welcome to Eolian API!",
    }


@app.get("/health")
async def health() -> dict[str, str]:
    return {
        "status": "healthy",
    }