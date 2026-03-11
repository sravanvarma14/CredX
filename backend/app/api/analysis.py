from fastapi import APIRouter, HTTPException
from app.services.analysis import CreditAnalysisService
from app.services.extraction import ExtractionService

router = APIRouter()

@router.get("/{entity_id}/metrics")
async def get_analysis(entity_id: str):
    # In real app, fetch from DB
    raw_data = await ExtractionService.extract_financials("dummy content")
    ratios = CreditAnalysisService.calculate_ratios(raw_data)
    score = CreditAnalysisService.calculate_credit_score(ratios, 80)
    grade = CreditAnalysisService.get_risk_grade(score)
    
    ai_rec = await ExtractionService.generate_rec_and_swot(raw_data, ratios)
    
    return {
        "entity_id": entity_id,
        "extracted_data": raw_data,
        "ratios": ratios,
        "credit_score": score,
        "risk_grade": grade,
        "ai_insights": ai_rec
    }
