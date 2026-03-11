"use client";
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  CheckCircle,
  FileText,
  Calculator,
  MessageSquareText,
  TrendingUp,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const FinancialAnalysis = () => {
  const [activeTab, setActiveTab] = useState('narrative');
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem('credx_analysis_complete');
    if (data === 'true') setHasData(true);
  }, []);

  if (!hasData) {
    return (
      <div className="no-data-state premium-card">
        <AlertTriangle size={48} color="#f59e0b" />
        <h2>Analysis Locked</h2>
        <p>Please upload and analyze all 5 document categories in the <strong>Document Hub</strong> to generate clinical financial insights.</p>
        <Link href="/documents" className="btn-primary">Go to Documents</Link>
        <style jsx>{`
          .no-data-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 24px;
            padding: 100px;
            text-align: center;
            max-width: 600px;
            margin: 100px auto;
          }
          h2 { color: #fff; }
          p { color: #94a3b8; }
        `}</style>
      </div>
    );
  }

  // Hardcoded for demo/human-like feel
  const narrativeReport = {
    overview: "The borrower, Acme Corp India Pvt Ltd, demonstrates a robust liquidity position for the financial year ending 2024. The revenue growth of 12% YoY is driven primarily by its expansion into the precision tools export market, although EBITDA margins have seen a slight compression due to rising raw material overheads.",
    liquidity: "With a Current Ratio of 1.85, the company maintains a comfortable safety margin against short-term obligations. Our formula (CA/CL) yields a surplus of ₹96.5 Cr in liquid assets. The Working Capital Gap is efficiently managed at 45 days, which is better than the industry average of 60 days.",
    leverage: "The Debt-to-Equity ratio of 0.72x indicates a conservative approach to capital structuring. Total debt is well-covered by operating cash flows, as reflected in the Interest Coverage Ratio of 4.8x. However, the analyst notes a high concentration of short-term debt (60% of total) which may require refinancing in the next 18 months.",
    recommendation: "Proposed credit limit of ₹120 Cr is justified given the strong DSCR and stable market position in the manufacturing sector."
  };

  const formulas = [
    { name: 'Current Ratio', formula: 'Current Assets / Current Liabilities', calc: '210.0 / 113.5', result: '1.85x' },
    { name: 'Debt to Equity', formula: 'Total Debt / Net Worth', calc: '125.0 / 173.5', result: '0.72x' },
    { name: 'Interest Coverage', formula: 'EBIT / Interest Expense', calc: '82.8 / 17.2', result: '4.81x' },
    { name: 'EBITDA Margin', formula: '(EBITDA / Revenue) * 100', calc: '(82.8 / 450.5) * 100', result: '18.4%' },
  ];

  return (
    <div className="analysis-page">
      <header className="page-header">
        <div>
          <h2 className="gradient-text">Human-Centric Credit Analysis</h2>
          <p className="subtitle">AI-generated narrative synthesis and granular ratio calculations.</p>
        </div>
        <div className="header-actions">
           <Link href="/scoring" className="btn-primary">
            Proceed to Risk Scoring <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      <div className="tab-control glass-panel">
        <button className={activeTab === 'narrative' ? 'active' : ''} onClick={() => setActiveTab('narrative')}>
          <MessageSquareText size={18} /> Analyst Narrative
        </button>
        <button className={activeTab === 'formulas' ? 'active' : ''} onClick={() => setActiveTab('formulas')}>
          <Calculator size={18} /> Formula Engine
        </button>
      </div>

      <div className="content-area">
        {activeTab === 'narrative' ? (
          <div className="narrative-container animate-in">
            <div className="narrative-section premium-card">
              <h3>Executive Overview</h3>
              <p>{narrativeReport.overview}</p>
            </div>
            
            <div className="narrative-grid">
              <div className="narrative-section premium-card">
                <h3><TrendingUp size={18} color="#10b981" /> Liquidity & Cash Flow</h3>
                <p>{narrativeReport.liquidity}</p>
              </div>
              <div className="narrative-section premium-card">
                <h3><AlertTriangle size={18} color="#f59e0b" /> Leverage & Solvency</h3>
                <p>{narrativeReport.leverage}</p>
              </div>
            </div>

            <div className="narrative-section premium-card summary-highlight">
              <h3>Final Analyst Recommendation</h3>
              <p>{narrativeReport.recommendation}</p>
            </div>
          </div>
        ) : (
          <div className="formulas-container animate-in">
            <div className="premium-card">
              <h3>Precision Calculation Ledger</h3>
              <div className="formula-table">
                <div className="table-header">
                  <span>Metric</span>
                  <span>Mandated Formula</span>
                  <span>Extracted Calculation</span>
                  <span>Computed Value</span>
                </div>
                {formulas.map((f, i) => (
                  <div key={i} className="formula-row">
                    <span className="metric-name">{f.name}</span>
                    <span className="formula-text">{f.formula}</span>
                    <span className="calc-steps">{f.calc}</span>
                    <span className="result-value">{f.result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .analysis-page {
          display: flex;
          flex-direction: column;
          gap: 32px;
          animation: fadeIn 0.5s ease-out;
        }

        .no-data-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 100px;
          text-align: center;
          max-width: 600px;
          margin: 100px auto;
          background: #fff;
        }

        .no-data-state h2 { color: var(--foreground); }
        .no-data-state p { color: var(--text-muted); }

        .tab-control {
          display: flex;
          gap: 8px;
          padding: 6px;
          align-self: flex-start;
          border-radius: 12px;
          background: #fff;
          border: 1px solid var(--glass-border);
        }

        .tab-control button {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: 8px;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s;
        }

        .tab-control button:hover {
          color: var(--foreground);
          background: var(--background);
        }

        .tab-control button.active {
          background: var(--primary-glow);
          color: var(--primary);
        }

        .narrative-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .narrative-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .narrative-section {
          background: #fff;
        }

        .narrative-section h3 {
          font-size: 16px;
          color: var(--foreground);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
        }

        .narrative-section p {
          font-size: 15px;
          line-height: 1.8;
          color: var(--accent);
        }

        .summary-highlight {
          border-left: 4px solid var(--primary);
          background: linear-gradient(90deg, var(--primary-glow) 0%, transparent 100%);
        }

        .formula-table {
          display: flex;
          flex-direction: column;
          margin-top: 24px;
        }

        .table-header {
          display: grid;
          grid-template-columns: 1.5fr 2fr 1.5fr 1fr;
          padding: 16px;
          border-bottom: 1px solid var(--glass-border);
          color: var(--text-muted);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          background: var(--background);
          border-radius: 8px 8px 0 0;
        }

        .formula-row {
          display: grid;
          grid-template-columns: 1.5fr 2fr 1.5fr 1fr;
          padding: 20px 16px;
          border-bottom: 1px solid var(--glass-border);
          align-items: center;
          background: #fff;
        }

        .metric-name {
          color: var(--foreground);
          font-weight: 700;
        }

        .formula-text {
          font-size: 13px;
          color: var(--primary);
          font-family: monospace;
          background: var(--primary-glow);
          padding: 2px 6px;
          border-radius: 4px;
          display: inline-block;
        }

        .calc-steps {
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .result-value {
          font-size: 15px;
          font-weight: 800;
          color: var(--foreground);
        }

        .animate-in {
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default FinancialAnalysis;
