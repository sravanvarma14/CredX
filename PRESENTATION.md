# CredX: Enterprise Credit Underwriting Prototype

## 1. Executive Summary
**CredX** is an AI-powered end-to-end credit decisioning engine designed to automate the complex process of corporate loan appraisal. It transforms unstructured financial documents and external intelligence into a comprehensive, human-like **Credit Appraisal Memo (CAM)**, enabling banks and NBFCs to make faster, data-driven lending decisions.

---

## 2. Core Functionality & User Journey
The prototype implements a linear, high-trust underwriting workflow:

1.  **Entity Onboarding**: Capture basic corporate identity (CIN, PAN, Sector) and preliminary financial summaries.
2.  **Mandatory Document Hub**: A strict ingestion gateway requiring 5 critical datasets:
    - ALM Statements
    - Shareholding Patterns
    - Borrowing Profiles
    - Audited Financials
    - Portfolio Performance
3.  **Human-Centric Analysis**: AI synthesizes the data into "Analyst Narratives" ( Liquidity, Leverage, Growth) and a transparent "Calculation Ledger".
4.  **Risk Appraisal & CIBIL Scoring**: Real-time extraction of credit metrics to assign a risk grade (e.g., AA) and generate the final CAM.

---

## 3. Key Prototype Features
- **AI Narrative Synthesis**: Unlike generic dashboards, CredX generates interpretative text that reads like a human credit analyst's report.
- **Dynamic CIBIL Extraction**: Simulated extraction of risk scores directly from borrowing and repayment data found within uploads.
- **Precision Calculation Engine**: Shows the "math behind the machine," displaying mandated bank formulas and the specific values used for ratios like DSCR and Debt-to-Equity.
- **Automated SWOT Analysis**: Instantly categorizes borrower data into Strengths, Weaknesses, Opportunities, and Threats for holistic risk assessment.

---

## 4. Technical Architecture
The system is built on a modern, scalable **Agentic Architecture**:

- **Frontend**: Next.js (React) with TailwindCSS/Vanilla CSS for a bank-grade, professional light UI.
- **Backend**: Python FastAPI serving as the high-performance orchestration layer.
- **AI Engine (Gemini Pro)**: Leveraged for OCR (parsing unstructured documents), entity extraction, and narrative generation.
- **State Management**: LocalStorage used in the prototype for session persistence and analysis gating.

---

## 5. Visual Showcase (Mockups & Screenshots)

````carousel
![Entity Onboarding - Home Page](file:///C:/Users/ramat/.gemini/antigravity/brain/342f0363-cfb1-496d-b29d-52745f517892/onboarding_page_1773247702263.png)
<!-- slide -->
![Document Ingestion Hub - 5 Mandatory Categories](file:///C:/Users/ramat/.gemini/antigravity/brain/342f0363-cfb1-496d-b29d-52745f517892/documents_page_1773247711724.png)
<!-- slide -->
![AI Analysis Engine - Narrative & Formulas](file:///C:/Users/ramat/.gemini/antigravity/brain/342f0363-cfb1-496d-b29d-52745f517892/analysis_page_1773247735925.png)
<!-- slide -->
![Risk Appraisal & CIBIL Scoring Dashboard](file:///C:/Users/ramat/.gemini/antigravity/brain/342f0363-cfb1-496d-b29d-52745f517892/cibil_score_page_1773247751740.png)
````

---

## 6. Real-World Application & Scalability

### **Relevance**
- **Reduced Turnaround Time (TAT)**: Automates the 3-5 days of manual data entry common in corporate banking into minutes.
- **Standardization**: Eliminates human bias by using standardized formula engines and AI-driven narrative synthesis.

### **Scalability**
- **API Integration**: The decoupled FastAPI backend can integrate with existing Core Banking Systems (CBS) and external APIs (GSTN, MCA/ROC).
- **Multi-Tenant Deployment**: The containerized architecture allows for easy deployment across multiple bank branches or diverse NBFC portfolios.
- **External Intelligence Gateway**: Future iterations can include live web-scraping for adverse news monitoring and real-time market sentiment analysis.

---

## 7. Conclusion
CredX provides a sophisticated, transparent, and highly efficient solution to enterprise credit underwriting. By combining the interpretative power of LLMs with the rigid accuracy of financial formulas, it offers a "human-in-the-loop" experience that enhances rather than replaces the expertise of Credit Analysts.
