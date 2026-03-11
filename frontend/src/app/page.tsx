"use client";
import React, { useState } from 'react';
import { 
  Building2, 
  Wallet, 
  HandCoins, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    cin: '',
    pan: '',
    sector: '',
    sub_sector: '',
    hq_location: '',
    year_established: '',
    website: '',
    promoters: [{ name: '', designation: '' }],
    turnover: '',
    ebitda: '',
    net_profit: '',
    total_assets: '',
    net_worth: '',
    loan_type: 'Term Loan',
    requested_amount: '',
    tenure: '',
    interest_rate: '',
    purpose: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const renderStepIcon = (s: number) => {
    if (s < step) return <CheckCircle2 size={24} className="step-done" />;
    return <span className={`step-num ${s === step ? 'active' : ''}`}>{s}</span>;
  };

  const handleComplete = () => {
    window.location.href = "/documents";
  };

  return (
    <div className="onboarding-page">
      <header className="page-header">
        <h2 className="gradient-text">Entity Onboarding</h2>
        <p className="subtitle">Register a new corporate borrower for credit appraisal.</p>
      </header>

      <div className="stepper glass-panel">
        <div className="step">
          {renderStepIcon(1)}
          <span>Company Info</span>
        </div>
        <div className="step-line" />
        <div className="step">
          {renderStepIcon(2)}
          <span>Financials</span>
        </div>
        <div className="step-line" />
        <div className="step">
          {renderStepIcon(3)}
          <span>Loan Details</span>
        </div>
      </div>

      <div className="form-container premium-card">
        {step === 1 && (
          <div className="form-step animate-in">
            <h3><Building2 size={20} /> Basic Company Information</h3>
            <div className="form-grid">
              <div className="input-group">
                <label>Company Legal Name</label>
                <input type="text" placeholder="e.g. Acme Corp India Pvt Ltd" />
              </div>
              <div className="input-group">
                <label>Corporate Identification Number (CIN)</label>
                <input type="text" placeholder="U00000XX0000XXX000000" />
              </div>
              <div className="input-group">
                <label>PAN Number</label>
                <input type="text" placeholder="ABCDE1234F" />
              </div>
              <div className="input-group">
                <label>Sector</label>
                <select>
                  <option>Manufacturing</option>
                  <option>Services</option>
                  <option>Retail</option>
                  <option>Infrastructure</option>
                </select>
              </div>
              <div className="input-group">
                <label>Headquarters Location</label>
                <input type="text" placeholder="Mumbai, MH" />
              </div>
              <div className="input-group">
                <label>Year Established</label>
                <input type="number" placeholder="2010" />
              </div>
            </div>
            <div className="form-actions">
              <div />
              <button className="btn-primary" onClick={nextStep}>
                Continue <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step animate-in">
            <h3><Wallet size={20} /> Financial Summary (Latest FY)</h3>
            <div className="form-grid">
              <div className="input-group">
                <label>Total Turnover (Cr)</label>
                <input type="number" placeholder="0.00" />
              </div>
              <div className="input-group">
                <label>EBITDA (Cr)</label>
                <input type="number" placeholder="0.00" />
              </div>
              <div className="input-group">
                <label>Net Profit (Cr)</label>
                <input type="number" placeholder="0.00" />
              </div>
              <div className="input-group">
                <label>Total Assets (Cr)</label>
                <input type="number" placeholder="0.00" />
              </div>
              <div className="input-group">
                <label>Net Worth (Cr)</label>
                <input type="number" placeholder="0.00" />
              </div>
            </div>
            <div className="form-actions">
              <button className="btn-secondary" onClick={prevStep}>
                <ChevronLeft size={16} /> Back
              </button>
              <button className="btn-primary" onClick={nextStep}>
                Continue <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step animate-in">
            <h3><HandCoins size={20} /> Loan Facility Requirements</h3>
            <div className="form-grid">
              <div className="input-group">
                <label>Facility Type</label>
                <select>
                  <option>Term Loan</option>
                  <option>Working Capital</option>
                  <option>Project Finance</option>
                </select>
              </div>
              <div className="input-group">
                <label>Requested Amount (Cr)</label>
                <input type="number" placeholder="0.00" />
              </div>
              <div className="input-group">
                <label>Expected Tenure (Months)</label>
                <input type="number" placeholder="36" />
              </div>
              <div className="input-group">
                <label>Proposed Interest Rate (%)</label>
                <input type="number" placeholder="9.5" />
              </div>
              <div className="input-group full-width">
                <label>Purpose of Loan</label>
                <textarea placeholder="Explain the business requirement..." rows={4}></textarea>
              </div>
            </div>
            <div className="form-actions">
              <button className="btn-secondary" onClick={prevStep}>
                <ChevronLeft size={16} /> Back
              </button>
              <button className="btn-primary" onClick={handleComplete}>
                Complete Onboarding
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .onboarding-page {
          display: flex;
          flex-direction: column;
          gap: 32px;
          animation: fadeIn 0.5s ease-out;
        }

        .stepper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 40px;
          background: #fff;
          border: 1px solid var(--glass-border);
        }

        .step {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .step-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          background: var(--background);
        }

        .step-num.active {
          border-color: var(--primary);
          color: var(--primary);
          background: var(--primary-glow);
        }

        .step-done {
          color: var(--secondary);
        }

        .step-line {
          flex: 1;
          height: 2px;
          background: var(--glass-border);
          margin: 0 20px;
        }

        .form-container {
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
          background: #fff;
        }

        .form-step h3 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          color: var(--foreground);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group.full-width {
          grid-column: span 2;
        }

        label {
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 600;
        }

        input, select, textarea {
          background: var(--background);
          border: 1px solid var(--glass-border);
          padding: 12px 16px;
          border-radius: 8px;
          color: var(--foreground);
          font-family: inherit;
          transition: all 0.2s;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: #fff;
          box-shadow: 0 0 0 4px var(--primary-glow);
        }

        .form-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 32px;
        }

        .btn-secondary {
          background: var(--background);
          color: var(--foreground);
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--glass-border);
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

export default Onboarding;
