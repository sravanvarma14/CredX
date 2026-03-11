import json

class ExtractionService:
    @staticmethod
    async def classify_document(filename: str):
        """
        Simulates AI document classification.
        """
        fn = filename.lower()
        if "report" in fn or "fy" in fn:
            return "Financial Statements"
        if "alm" in fn:
            return "ALM Statement"
        if "share" in fn:
            return "Shareholding Pattern"
        if "borrow" in fn:
            return "Borrowing Profile"
        return "General Document"

    @staticmethod
    async def extract_financials(content: str):
        """
        Mock LLM extraction. In production, this calls Gemini 1.5 Pro.
        """
        # Simulated LLM Output
        return {
            "revenue": 450.5,
            "ebitda": 82.8,
            "net_profit": 28.0,
            "total_debt": 125.0,
            "net_worth": 173.5,
            "current_assets": 210.0,
            "current_liabilities": 113.5,
            "interest_expense": 17.2,
            "inventory": 42.0
        }

    @staticmethod
    async def generate_rec_and_swot(data: dict, ratios: dict):
        """
        Mock AI generation of Recommendation and SWOT.
        """
        return {
            "recommendation": "APPROVE",
            "grading": "AA",
            "score": 82,
            "swot": {
                "strengths": ["Strong EBITDA margin", "Low leverage levels"],
                "weaknesses": ["Working capital cycle pressure", "Contingent liabilities"],
                "opportunities": ["Sector growth in manufacturing", "New export markets"],
                "threats": ["Raw material pricing", "Competitive imports"]
            },
            "suggested_terms": {
                "amount": 120,
                "tenure": 48,
                "spread": "REPO + 280 bps"
            }
        }
