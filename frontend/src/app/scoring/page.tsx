"use client";
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Target, 
  ThumbsUp, 
  FileDown,
  Percent,
  IndianRupee,
  Calendar,
  ChevronRight,
  Loader2,
  CheckCircle,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

const Scoring = () => {
  const [generatingReport, setGeneratingReport] = useState(false);
  const [reportReady, setReportReady] = useState(false);
  const [hasData, setHasData] = useState(false);
  const [dynamicScore, setDynamicScore] = useState(785);

  useEffect(() => {
    const data = localStorage.getItem('credx_analysis_complete');
    const score = localStorage.getItem('credx_extracted_cibil');
    
    if (data === 'true') {
      setHasData(true);
      if (score) setDynamicScore(parseInt(score));
    }
  }, []);

  if (!hasData) {
    // ... (rest of the locked state code)
    return (
      <div className="no-data-state premium-card">
        <AlertTriangle size={48} color="#f59e0b" />
        <h2>Risk Assessment Locked</h2>
        <p>Credit Risk Grading and the Final CAM Report require a completed financial analysis session.</p>
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
  
  const score = dynamicScore;
  const grade = score > 800 ? "AAA" : score > 750 ? "AA" : "A";
  
  const scoreData = [
    { value: score, color: '#6366f1' },
    { value: 900 - score, color: 'rgba(255,255,255,0.05)' }
  ];

  const handleGenerateReport = () => {
    setGeneratingReport(true);
    setTimeout(() => {
      setGeneratingReport(false);
      setReportReady(true);
    }, 3000);
  };

  return (
    <div className="scoring-page">
      <header className="page-header">
        <div>
          <h2 className="gradient-text">CIBIL Score & Risk Appraisal</h2>
          <p className="subtitle">Real-time risk scoring derived from recent credit history and uploaded financial data.</p>
        </div>
        {!reportReady ? (
          <button className="btn-primary" onClick={handleGenerateReport} disabled={generatingReport}>
            {generatingReport ? <><Loader2 size={16} className="spin" /> Finalizing CAM...</> : 'Generate Final Report'}
          </button>
        ) : (
          <button className="btn-success">
            <FileDown size={16} /> Download CAM PDF
          </button>
        )}
      </header>

      <div className="scoring-grid">
        <div className="score-main-card premium-card">
          <div className="score-viz-container">
            <div className="score-viz">
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={scoreData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={100}
                    startAngle={180}
                    endAngle={0}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    <Cell fill={scoreData[0].color} />
                    <Cell fill={scoreData[1].color} />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="score-display">
                <h3>{score}</h3>
                <p>CIBIL: <span>{grade}</span></p>
              </div>
            </div>
          </div>
          
          <div className="score-breakdown">
            <h4>Weighted Risk Factors</h4>
            <div className="factor-item">
              <div className="factor-label">
                <span>Financial Solvency (50%)</span>
                <span>45/50</span>
              </div>
              <div className="factor-bar"><div className="fill" style={{ width: '90%' }} /></div>
            </div>
            <div className="factor-item">
              <div className="factor-label">
                <span>Liquidity Health (30%)</span>
                <span>24/30</span>
              </div>
              <div className="factor-bar"><div className="fill" style={{ width: '80%' }} /></div>
            </div>
            <div className="factor-item">
              <div className="factor-label">
                <span>Operational Efficiency (20%)</span>
                <span>13/20</span>
              </div>
              <div className="factor-bar"><div className="fill" style={{ width: '65%' }} /></div>
            </div>
          </div>
        </div>

        <div className="recommendation-card premium-card">
          <div className="rec-header">
            <div className="title-box">
              <h3>Appraisal Recommendation</h3>
              <p>Decision based on recent data synthesis</p>
            </div>
            <span className="rec-badge approve">APPROVE</span>
          </div>
          
          <div className="suggested-facility">
            <h4>Approved Facility Terms</h4>
            <div className="terms-container">
              <div className="term-card">
                <div className="term-icon"><IndianRupee size={18} /></div>
                <div className="term-val">
                  <span className="label">Loan Amount</span>
                  <span className="value">₹120.0 Cr</span>
                </div>
              </div>
              <div className="term-card">
                <div className="term-icon"><Percent size={18} /></div>
                <div className="term-val">
                  <span className="label">Interest Spread</span>
                  <span className="value">REPO + 275 bps</span>
                </div>
              </div>
              <div className="term-card">
                <div className="term-icon"><Calendar size={18} /></div>
                <div className="term-val">
                  <span className="label">Tenure</span>
                  <span className="value">48 Months</span>
                </div>
              </div>
            </div>
          </div>

          <div className="compliance-checklist">
            <h4>Post-Sanction Covenants</h4>
            <ul>
              <li><CheckCircle size={14} color="#10b981" /> Quarterly Audit of Portfolio Performance</li>
              <li><CheckCircle size={14} color="#10b981" /> Maintaining DSCR &gt; 1.5 throughout tenure</li>
              <li><CheckCircle size={14} color="#10b981" /> Registration of Charge with ROC within 30 days</li>
            </ul>
          </div>
        </div>

        <div className="swot-analysis-section full-width premium-card">
          <div className="swot-header">
            <h3>Automated SWOT Appraisal</h3>
            <p>Synthesized from all 5 document categories</p>
          </div>
          
          <div className="swot-grid">
            <div className="swot-box strengths">
              <h5>Strengths</h5>
              <p>Borrower shows high interest coverage ratio (4.8x) significantly above peer average. Diverse promoter background with 20+ years in manufacturing.</p>
            </div>
            <div className="swot-box weaknesses">
              <h5>Weaknesses</h5>
              <p>Higher concentration of short-term debt (60%). Working capital cycle of 45 days shows slight volatility compared to previous FY.</p>
            </div>
            <div className="swot-box opportunities">
              <h5>Opportunities</h5>
              <p>Expanding precision tool exports to SE Asia. Favorable sectoral growth outlook for Made in India precision components.</p>
            </div>
            <div className="swot-box threats">
              <h5>Threats</h5>
              <p>Input cost inflation for raw aluminum. Potential regulatory changes in GST compliance for mid-sized manufacturers.</p>
            </div>
          </div>
        </div>
      </div>

      {reportReady && (
        <div className="report-ready-overlay animate-in">
          <div className="report-modal premium-card">
            <FileText size={48} color="#6366f1" />
            <h3>Credit Appraisal Memo Ready</h3>
            <p>The comprehensive 12-page CAM has been generated and validated against your calculations.</p>
            <button className="btn-primary" onClick={() => setReportReady(false)}>
              Download Now
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .scoring-page {
          display: flex;
          flex-direction: column;
          gap: 32px;
          position: relative;
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

        .scoring-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 24px;
        }

        .full-width {
          grid-column: span 2;
        }

        .score-viz-container {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }

        .score-viz {
          position: relative;
          width: 240px;
          height: 140px;
        }

        .score-display {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }

        .score-display h3 {
          font-size: 48px;
          font-weight: 800;
          color: var(--foreground);
          line-height: 1;
        }

        .score-display p {
          font-size: 14px;
          color: var(--text-muted);
          margin-top: 4px;
          font-weight: 600;
        }

        .score-display span {
          color: var(--primary);
          font-weight: 800;
        }

        .score-breakdown h4 {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .factor-item {
          margin-bottom: 20px;
        }

        .factor-label {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          margin-bottom: 8px;
          color: var(--foreground);
          font-weight: 600;
        }

        .factor-bar {
          height: 8px;
          background: var(--background);
          border-radius: 4px;
          border: 1px solid var(--glass-border);
        }

        .factor-bar .fill {
          height: 100%;
          background: var(--primary);
          border-radius: 4px;
        }

        .rec-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
        }

        .title-box h3 {
          font-size: 20px;
          color: var(--foreground);
          margin-bottom: 4px;
          font-weight: 700;
        }

        .title-box p {
          font-size: 13px;
          color: var(--text-muted);
        }

        .rec-badge {
          padding: 8px 20px;
          border-radius: 30px;
          font-weight: 700;
          letter-spacing: 1px;
          font-size: 14px;
        }

        .rec-badge.approve {
          background: #ecfdf5;
          color: #10b981;
          border: 1px solid #10b98144;
        }

        .suggested-facility h4, .compliance-checklist h4, .swot-header h3 {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 20px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .terms-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .term-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: var(--background);
          border-radius: 12px;
          border: 1px solid var(--glass-border);
        }

        .term-icon {
          color: var(--primary);
        }

        .term-val .label {
          display: block;
          font-size: 11px;
          color: var(--text-muted);
          margin-bottom: 4px;
          font-weight: 600;
        }

        .term-val .value {
          font-size: 18px;
          font-weight: 800;
          color: var(--foreground);
        }

        .compliance-checklist ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .compliance-checklist li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: var(--foreground);
          font-weight: 500;
        }

        .swot-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 24px;
        }

        .swot-box {
          padding: 20px;
          border-radius: 12px;
          min-height: 140px;
          background: #fff;
          border: 1px solid var(--glass-border);
        }

        .swot-box h5 {
          font-size: 11px;
          text-transform: uppercase;
          margin-bottom: 12px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .swot-box p {
          font-size: 13px;
          line-height: 1.6;
          color: var(--accent);
        }

        .strengths { background: #f0fdf4; border-color: #10b98144; }
        .strengths h5 { color: #10b981; }

        .weaknesses { background: #fef2f2; border-color: #ef444444; }
        .weaknesses h5 { color: #ef4444; }

        .opportunities { background: #eef2ff; border-color: #6366f144; }
        .opportunities h5 { color: #6366f1; }

        .threats { background: #fffbeb; border-color: #f59e0b44; }
        .threats h5 { color: #f59e0b; }

        .report-ready-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .report-modal {
          max-width: 400px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 40px;
          background: #fff;
        }

        .report-modal h3 {
          font-size: 24px;
          color: var(--foreground);
          font-weight: 800;
        }

        .report-modal p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .btn-success {
          background: #10b981;
          color: #fff;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-in {
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Scoring;
