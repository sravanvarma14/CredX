from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional, List

router = APIRouter()

class PromoterDetail(BaseModel):
    name: str
    designation: str

class CompanyOnboarding(BaseModel):
    name: str
    cin: str
    pan: str
    sector: str
    sub_sector: str
    hq_location: str
    year_established: int
    promoter_details: List[PromoterDetail]
    website: str
    
    # Financial Summary
    turnover: float
    ebitda: float
    net_profit: float
    total_assets: float
    net_worth: float
    
    # Loan Details
    loan_type: str
    requested_amount: float
    tenure: int
    interest_rate: float
    purpose: str

# Mock database
entities = {}

@router.post("/onboard")
async def onboard_entity(data: CompanyOnboarding):
    entity_id = data.cin
    entities[entity_id] = data
    return {"status": "success", "entity_id": entity_id, "message": "Entity onboarded successfully"}

@router.get("/{entity_id}")
async def get_entity(entity_id: str):
    if entity_id not in entities:
        raise HTTPException(status_code=404, detail="Entity not found")
    return entities[entity_id]

@router.get("/")
async def list_entities():
    return list(entities.values())
