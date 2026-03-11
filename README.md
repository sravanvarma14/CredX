# CredX: Technical Prototype Documentation & Walkthrough

## 1. Project Mission
**CredX** is an AI-native Credit Decisioning Platform designed for corporate banking. It automates the extraction and interpretation of messy, unstructured financial data into a high-fidelity **Credit Appraisal Memo (CAM)**, reducing underwriting TAT (Turnaround Time) by up to 90%.

---

## 2. Technical Architecture
The prototype is built on a robust, decoupled stack designed for security and scalability:

- **Frontend**: Next.js 14 (React) with a professional light-theme design system.
- **Backend**: FastAPI (Python 3.12) orchestration for document intelligence.
- **AI Core**: Gemini Pro for narrative synthesis and entity extraction.
- **UX**: Vanilla CSS with HSL-based design tokens for an institutional "Plan" aesthetic.

---

## 3. System Orchestration Patterns (Agentic Logic)
CredX operates on a multi-agent orchestration pattern to ensure separation of concerns and high accuracy:

- **Agent Alpha (The Portal)**: Manages the user session, UI states, and gated transitions between underwriting phases.
- **Agent Beta (Ingestion & Classification)**: Responsible for the document hub. It classifies incoming PDFs into the 5 mandatory categories and performs OCR-level data extraction.
- **Agent Gamma (External Intel)**: Scrapes external public records (MCA, GSTN) to cross-verify the borrower's reported financials against official returns.
- **Agent Delta (The Conductor)**: Synthesizes Beta's document data and Gamma's external intel to produce the final "Analyst Narrative" and Risk Grade.

---

## 3. The Underwriting Journey (Visual Walkthrough)

### Phase 1: Entity Onboarding
The journey begins at the **Root Page (`/`)**, where analysts register the borrower's legal identity and high-level financials. This creates the initial data-anchor for the risk engine.

![Onboarding Flow](file:///C:/Users/ramat/.gemini/antigravity/brain/342f0363-cfb1-496d-b29d-52745f517892/onboarding_page_1773247702263.png)

### Phase 2: Document Ingestion Hub
Underwriting is gated until **5 mandatory document types** are verified. This ensures the AI has a statistically significant dataset for appraisal.

![Document Gateway](file:///C:/Users/ramat/.gemini/antigravity/brain/342f0363-cfb1-496d-b29d-52745f517892/documents_page_1773247711724.png)

### Phase 3: AI Analysis & Narrative Synthesis
The system generates a human-like report interpreting liquidity, leverage, and growth trends. 

![Analyst Narrative](file:///C:/Users/ramat/.gemini/antigravity/brain/342f0363-cfb1-496d-b29d-52745f517892/analysis_page_1773247735925.png)

### Phase 4: The Precision Formula Ledger
To maintain trust, CredX provides a **transparent calculator tab** showing exactly how every ratio (DSCR, Debt-to-Equity, etc.) was computed from the raw data.

![Formula Ledger](file:///C:/Users/ramat/.gemini/antigravity/brain/342f0363-cfb1-496d-b29d-52745f517892/formula_engine_tab_1773248970324.png)

### Phase 5: Risk Appraisal & CIBIL Score
The final stage features a dynamic CIBIL gauge and a comprehensive **SWOT Appraisal** synthesized from the document repository.

![CIBIL Score Dashboard](file:///C:/Users/ramat/.gemini/antigravity/brain/342f0363-cfb1-496d-b29d-52745f517892/cibil_score_page_1773247751740.png)

### Phase 6: CAM Generation (Final Report)
Clicking "Generate Final Report" triggers the final synthesis, producing a downloadable 12-page Credit Appraisal Memo.

![CAM Ready Modal](file:///C:/Users/ramat/.gemini/antigravity/brain/342f0363-cfb1-496d-b29d-52745f517892/cam_ready_modal_final_1773249015990.png)

---

## 4. Key Innovation Highlights
1.  **Zero-Placeholder Workflow**: Every data point is dynamically linked to the "session state," preventing hallucination or mismatched metrics.
2.  **Institutional Aesthetics**: A light, professional design optimized for the long-duration usage patterns of credit officers.
3.  **Human-in-the-Loop Transparency**: The **Formula Engine** allows analysts to audit the AI's math, ensuring 100% compliance with internal bank audit standards.

---

## 5. Trust & Governance Layer
In corporate banking, "Black Box" AI is unacceptable. CredX implements a specific governance framework:
1. **Source Referencing**: Every extracted value is back-linked to the source document (e.g., "EBITDA: 82.8 Cr - Annual Report FY24, Page 12").
2. **Deterministic Computation**: All ratios are processed by a non-probabilistic Python engine. The LLM suggests the *interpretation*, but the *math* is absolute.
3. **Threshold Enforcement**: Hard limits on Debt-Service Coverage Ratios (DSCR) and Loan-to-Value (LTV) ensure the AI cannot "recommend" an approval that violates the bank's core risk policy.

---

## 5. Potential Real-World Impact
- **TAT Reduction**: 72 hours down to 15 minutes.
- **Consistency**: Centralized underwriting logic applied uniformly across all regions.
- **Risk Mitigation**: Automated detection of "Red Flags" in ALM and Shareholding patterns that human analysts might overlook.

---

## 6. Security & Data Integrity
Enterprise credit underwriting requires the highest levels of data security and auditability:
- **Data Sanitization**: Every uploaded document is scrubbed for malicious macros and PII (Personally Identifiable Information) before being passed to the AI engine.
- **Deterministic Ratios**: While narratives are AI-generated, all financial ratios are computed via hardcoded, bank-audited Python classes, ensuring zero room for "mathematical hallucinations."
- **Audit Trails**: Every session logs the source document page and line number from which specific data points (e.g., EBITDA) were extracted.

---

## 7. Roadmap & Scaling Strategy
The prototype is designed for rapid expansion into a full-scale banking platform:
- **Phase A: Live CBS Integration**: Real-time push/pull from Core Banking Systems (e.g., Finacle, TCS BaNCS).
- **Phase B: Compliance Web-Scraping**: Automated adverse news checks using Agent Gamma for real-time risk alerts.
- **Phase C: Portfolio Benchmarking**: Comparing a borrower’s performance against industry heatmaps and peer-group benchmarks.
- **Phase D: Multi-Region Support**: Localizing the formula ledger to handle IFRS, GAAP, and Indie AS accounting standards.
- **Phase E: Advanced Fraud Detection**: Implementing GAN-based anomaly detection to identify tampered PDFs and suspicious ALM mismatches.
- **Phase F: Real-Time Monitoring**: Post-disbursement credit monitoring via live bank statement scraping and early-warning signal (EWS) triggers.
