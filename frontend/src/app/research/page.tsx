"use client";
import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  Scale, 
  Newspaper, 
  AlertTriangle,
  ExternalLink,
  RefreshCcw,
  Zap,
  TrendingUp
} from 'lucide-react';

const ResearchInsights = () => {
  const [loading, setLoading] = useState(false);

  const newsItems = [
    { title: "Acme Corp expands manufacturing in Tamil Nadu", source: "Mint", sentiment: "Positive", date: "2 days ago" },
    { title: "Industry demand for precision tools up by 15%", source: "ET", sentiment: "Neutral", date: "1 week ago" },
    { title: "Raw material cost fluctuations impact margin", source: "Business Standard", sentiment: "Critical", date: "3 days ago" }
  ];

  const legalHits = [
    { type: "Commercial Dispute", status: "Ongoing", court: "High Court, Delhi", year: "2023" },
    { type: "Labor Case", status: "Dismissed", court: "NCLT", year: "2022" }
  ];

  return (
    <div className="research-page">
      <header className="page-header">
        <div className="header-left">
          <h2 className="gradient-text">Secondary Research Agent</h2>
          <p className="subtitle">Real-time intelligence from web, MCA, and legal databases.</p>
        </div>
        <button className="btn-primary" onClick={() => setLoading(true)}>
          <RefreshCcw size={16} className={loading ? 'spin' : ''} /> 
          {loading ? 'Crawling...' : 'Refresh Intel'}
        </button>
      </header>

      <div className="research-grid">
        <div className="intel-card premium-card">
          <div className="card-header">
            <h3><Newspaper size={18} /> Market Sentiment & News</h3>
            <span className="source-badge">LIVE News Crawler</span>
          </div>
          <div className="news-list">
            {newsItems.map((item, i) => (
              <div key={i} className="news-item">
                <div className={`sentiment-dot ${item.sentiment.toLowerCase()}`} />
                <div className="news-content">
                  <p className="news-title">{item.title}</p>
                  <div className="news-meta">
                    <span>{item.source} • {item.date}</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="intel-card premium-card">
          <div className="card-header">
            <h3><Scale size={18} /> Litigation & Compliance</h3>
            <span className="source-badge">e-Courts API</span>
          </div>
          <div className="legal-list">
            {legalHits.map((hit, i) => (
              <div key={i} className="legal-item">
                <div className="legal-info">
                  <p className="case-type">{hit.type}</p>
                  <p className="case-meta">{hit.court} • FY {hit.year}</p>
                </div>
                <div className={`case-status ${hit.status.toLowerCase()}`}>{hit.status}</div>
              </div>
            ))}
          </div>
          <div className="compliance-summary">
            <AlertTriangle size={16} color="#f59e0b" />
            <p>1 pending NCLT filing identified. No major promoter risk signals found.</p>
          </div>
        </div>

        <div className="intel-card premium-card full-width">
          <div className="card-header">
            <h3><TrendingUp size={18} /> Sectoral Outlook: Precision Tools</h3>
            <span className="ai-badge"><Zap size={14} /> AI Insight</span>
          </div>
          <div className="sector-analysis">
            <div className="analysis-block">
              <h4>Industry Growth</h4>
              <p>The precision tools sector is poised for 12.5% CAGR over next 3 years driven by 'Make in India' initiatives and export demand to SE Asia.</p>
            </div>
            <div className="analysis-block">
              <h4>Regulatory Changes</h4>
              <p>New GST compliance norms for MSMEs might impact short-term liquidity, but digitalization will improve credit access in the long run.</p>
            </div>
            <div className="risk-level-display">
              <label>Sector Risk Score</label>
              <div className="risk-meter">
                <div className="meter-fill" style={{ width: '35%', background: '#10b981' }}>Low Risk</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .research-page {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .research-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .full-width {
          grid-column: span 2;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .source-badge {
          font-size: 10px;
          background: rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          padding: 4px 8px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .ai-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #6366f1;
          font-weight: 600;
        }

        .news-list, .legal-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .news-item {
          display: flex;
          gap: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .sentiment-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }

        .sentiment-dot.positive { background: #10b981; box-shadow: 0 0 10px #10b981; }
        .sentiment-dot.neutral { background: #94a3b8; }
        .sentiment-dot.critical { background: #f43f5e; box-shadow: 0 0 10px #f43f5e; }

        .news-title {
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          margin-bottom: 4px;
        }

        .news-meta {
          font-size: 12px;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legal-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }

        .case-type {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }

        .case-meta {
          font-size: 12px;
          color: #64748b;
        }

        .case-status {
          font-size: 10px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 6px;
          text-transform: uppercase;
        }

        .status.ongoing { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
        .status.dismissed { background: rgba(16, 185, 129, 0.1); color: #10b981; }

        .compliance-summary {
          margin-top: 24px;
          padding: 16px;
          background: rgba(245, 158, 11, 0.05);
          border: 1px solid rgba(245, 158, 11, 0.1);
          border-radius: 12px;
          display: flex;
          gap: 12px;
          font-size: 13px;
          color: #f59e0b;
        }

        .sector-analysis {
          display: grid;
          grid-template-columns: 1fr 1fr 200px;
          gap: 32px;
        }

        .analysis-block h4 {
          font-size: 14px;
          color: #94a3b8;
          margin-bottom: 8px;
        }

        .analysis-block p {
          font-size: 14px;
          line-height: 1.6;
          color: #cbd5e1;
        }

        .risk-level-display {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .risk-meter {
          height: 32px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          overflow: hidden;
        }

        .meter-fill {
          height: 100%;
          display: flex;
          align-items: center;
          padding-left: 12px;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ResearchInsights;
