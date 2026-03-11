class CreditAnalysisService:
    @staticmethod
    def calculate_ratios(data: dict):
        """
        Calculates financial ratios based on extracted data.
        """
        rev = data.get('revenue', 0)
        ebitda = data.get('ebitda', 0)
        np = data.get('net_profit', 0)
        debt = data.get('total_debt', 0)
        nw = data.get('net_worth', 0)
        ca = data.get('current_assets', 0)
        cl = data.get('current_liabilities', 0)
        interest = data.get('interest_expense', 1) # avoid div by zero
        
        # Liquidity
        current_ratio = ca / cl if cl > 0 else 0
        quick_ratio = (ca - data.get('inventory', 0)) / cl if cl > 0 else 0
        
        # Leverage
        debt_to_equity = debt / nw if nw > 0 else 0
        interest_coverage = ebitda / interest if interest > 0 else 0
        
        # Profitability
        ebitda_margin = (ebitda / rev) * 100 if rev > 0 else 0
        np_margin = (np / rev) * 100 if rev > 0 else 0
        
        # Cash Flow / Other
        wc_gap = ca - cl
        
        return {
            "liquidity": {
                "current_ratio": round(current_ratio, 2),
                "quick_ratio": round(quick_ratio, 2)
            },
            "leverage": {
                "debt_to_equity": round(debt_to_equity, 2),
                "interest_coverage": round(interest_coverage, 2)
            },
            "profitability": {
                "ebitda_margin": round(ebitda_margin, 2),
                "net_profit_margin": round(np_margin, 2)
            },
            "working_capital_gap": round(wc_gap, 2)
        }

    @staticmethod
    def get_risk_grade(score: int):
        if score >= 90: return "AAA"
        if score >= 80: return "AA"
        if score >= 70: return "A"
        if score >= 60: return "BBB"
        if score >= 50: return "BB"
        if score >= 40: return "B"
        return "C"

    @staticmethod
    def calculate_credit_score(ratios: dict, research_score: int):
        # Weighted scoring model
        # 50% Financials, 30% Market/Research, 20% Management/Operational
        
        fin_score = 0
        
        # Score current ratio (ideal > 1.3)
        cr = ratios["liquidity"]["current_ratio"]
        if cr > 1.5: fin_score += 20
        elif cr > 1.2: fin_score += 15
        else: fin_score += 5
        
        # Score debt/equity (ideal < 1.0)
        de = ratios["leverage"]["debt_to_equity"]
        if de < 0.8: fin_score += 20
        elif de < 1.5: fin_score += 15
        else: fin_score += 5
        
        # Score ebitda margin (ideal > 15%)
        em = ratios["profitability"]["ebitda_margin"]
        if em > 18: fin_score += 20
        elif em > 12: fin_score += 15
        else: fin_score += 5
        
        # Normalize fin_score to 100 then weight by 0.5
        normalized_fin = (fin_score / 60) * 100
        
        final_score = (normalized_fin * 0.5) + (research_score * 0.3) + (75 * 0.2) # Default 75 for mgmt
        
        return int(final_score)
