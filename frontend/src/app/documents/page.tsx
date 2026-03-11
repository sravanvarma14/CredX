"use client";
import React, { useState } from 'react';
import { 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  FileUp,
  X,
  Loader2
} from 'lucide-react';

const DocumentTypeCard = ({ title, description, category, onUpload, uploadedFile }: any) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className={`doc-type-card premium-card ${uploadedFile ? 'has-file' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="card-top">
        <div className="doc-icon-box">
          <FileText size={24} />
        </div>
        <div className="doc-info">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        {uploadedFile && (
          <div className="success-badge">
            <CheckCircle2 size={16} /> Ready
          </div>
        )}
      </div>

      <div className="upload-action-zone">
        {uploadedFile ? (
          <div className="file-preview">
            <span className="file-name">{uploadedFile.name}</span>
            <button className="remove-btn"><X size={14} /></button>
          </div>
        ) : (
          <label className="upload-trigger">
            <input 
              type="file" 
              style={{ display: 'none' }} 
              onChange={(e) => onUpload(category, e.target.files?.[0])}
            />
            <div className="trigger-content">
              <FileUp size={18} />
              <span>{isHovering ? 'Select Document' : 'Drop file to upload'}</span>
            </div>
          </label>
        )}
      </div>

      <style jsx>{`
        .doc-type-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-height: 180px;
          border: 2px dashed var(--glass-border);
          background: #fff;
          transition: all 0.2s ease;
        }

        .doc-type-card:hover {
          border-color: var(--primary);
          border-style: solid;
        }

        .has-file {
          border-style: solid;
          border-color: var(--secondary);
          background: #fff;
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .doc-icon-box {
          width: 44px;
          height: 44px;
          background: var(--background);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          border: 1px solid var(--glass-border);
        }

        .doc-info h4 {
          font-size: 16px;
          color: var(--foreground);
          margin-bottom: 4px;
          font-weight: 700;
        }

        .doc-info p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .success-badge {
          margin-left: auto;
          font-size: 10px;
          color: var(--secondary);
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 700;
          text-transform: uppercase;
          background: rgba(16, 185, 129, 0.1);
          padding: 4px 8px;
          border-radius: 20px;
        }

        .upload-action-zone {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .upload-trigger {
          width: 100%;
          cursor: pointer;
        }

        .trigger-content {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          background: var(--background);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-muted);
          transition: all 0.2s;
          border: 1px solid var(--glass-border);
          font-weight: 600;
        }

        .doc-type-card:hover .trigger-content {
          color: var(--primary);
          background: var(--primary-glow);
          border-color: var(--primary);
        }

        .file-preview {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px;
          background: #ecfdf5;
          border-radius: 8px;
          border: 1px solid #10b98144;
        }

        .file-name {
          font-size: 13px;
          color: var(--secondary);
          font-weight: 600;
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .remove-btn {
          color: var(--text-muted);
        }

        .remove-btn:hover {
          color: #ef4444;
        }
      `}</style>
    </div>
  );
};

const Documents = () => {
  const [uploads, setUploads] = useState<any>({
    alm: null,
    shareholding: null,
    borrowing: null,
    annual_report: null,
    portfolio: null
  });
  const [analyzing, setAnalyzing] = useState(false);

  const handleUpload = (category: string, file: File) => {
    if (!file) return;
    setUploads((prev: any) => ({ ...prev, [category]: file }));
  };

  const isAllUploaded = Object.values(uploads).every(v => v !== null);

  const startAnalysis = () => {
    setAnalyzing(true);
    // Simulate extracting a score based on borrowing profile and repayment history in docs
    const extractedCibil = Math.floor(Math.random() * (820 - 720 + 1)) + 720;
    localStorage.setItem('credx_analysis_complete', 'true');
    localStorage.setItem('credx_extracted_cibil', extractedCibil.toString());
    
    setTimeout(() => {
      setAnalyzing(false);
      window.location.href = "/analysis";
    }, 2500);
  };

  return (
    <div className="documents-page">
      <header className="page-header">
        <div>
          <h2 className="gradient-text">Document Ingestion Hub</h2>
          <p className="subtitle">Upload the 5 mandatory document types to proceed with automated underwriting.</p>
        </div>
        {isAllUploaded && (
          <button className="btn-primary" onClick={startAnalysis} disabled={analyzing}>
            {analyzing ? <><Loader2 size={18} className="spin" /> Analyzing...</> : 'Launch AI Analysis'}
          </button>
        )}
      </header>

      <div className="doc-grid">
        <DocumentTypeCard 
          title="ALM Statement" 
          description="Asset Liability Management buckets and maturity profile (PDF/Excel)."
          category="alm"
          onUpload={handleUpload}
          uploadedFile={uploads.alm}
        />
        <DocumentTypeCard 
          title="Shareholding Pattern" 
          description="Promoter details, significant beneficial owners, and concentration risks."
          category="shareholding"
          onUpload={handleUpload}
          uploadedFile={uploads.shareholding}
        />
        <DocumentTypeCard 
          title="Borrowing Profile" 
          description="List of existing lenders, sanctioned limits, and outstanding balances."
          category="borrowing"
          onUpload={handleUpload}
          uploadedFile={uploads.borrowing}
        />
        <DocumentTypeCard 
          title="Financial Statements" 
          description="Audited P&L, Balance Sheet, and Cashflow reports (Latest FY)."
          category="annual_report"
          onUpload={handleUpload}
          uploadedFile={uploads.annual_report}
        />
        <DocumentTypeCard 
          title="Portfolio Performance" 
          description="Detailed portfolio performance metrics and historical collection data."
          category="portfolio"
          onUpload={handleUpload}
          uploadedFile={uploads.portfolio}
        />
      </div>

      {!isAllUploaded && (
        <div className="pending-state glass-panel">
          <AlertCircle size={20} color="#f59e0b" />
          <p>Please upload all 5 document categories to enable the <strong>Human-Centric Analysis Engine</strong>.</p>
        </div>
      )}

      <style jsx>{`
        .documents-page {
          display: flex;
          flex-direction: column;
          gap: 32px;
          animation: fadeIn 0.5s ease-out;
        }

        .doc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .pending-state {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px;
          border-radius: 12px;
          background: #fffbeb;
          border: 1px solid #fef3c7;
          color: #92400e;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }

        .pending-state strong {
          color: #78350f;
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

export default Documents;
