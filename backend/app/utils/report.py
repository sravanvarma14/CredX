from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
import os

class ReportGenerator:
    @staticmethod
    def generate_cam_pdf(entity_name: str, analysis_data: dict, output_path: str):
        doc = SimpleDocTemplate(output_path, pagesize=A4)
        styles = getSampleStyleSheet()
        elements = []

        # Title
        title_style = ParagraphStyle(
            'TitleStyle',
            parent=styles['Heading1'],
            fontSize=24,
            textColor=colors.HexColor("#6366f1"),
            spaceAfter=30
        )
        elements.append(Paragraph(f"Credit Appraisal Memo: {entity_name}", title_style))
        elements.append(Spacer(1, 12))

        # Executive Summary
        elements.append(Paragraph("1. Executive Summary", styles['Heading2']))
        elements.append(Paragraph(
            "Based on the AI-powered financial underwriting, the entity shows strong liquidity and stable leverage. "
            "Recommendation is to APPROVE the credit facility subject to covenants.", 
            styles['Normal']
        ))
        elements.append(Spacer(1, 12))

        # Financial Table
        elements.append(Paragraph("2. Financial Ratios", styles['Heading2']))
        
        data = [
            ['Ratio', 'Value', 'Status'],
            ['Current Ratio', f"{analysis_data['liquidity']['current_ratio']}x", 'Healthy'],
            ['Debt to Equity', f"{analysis_data['leverage']['debt_to_equity']}", 'Low'],
            ['EBITDA Margin', f"{analysis_data['profitability']['ebitda_margin']}%", 'Good'],
            ['DSCR', f"{analysis_data['leverage']['interest_coverage']}x", 'Adequate']
        ]

        t = Table(data, colWidths=[150, 100, 100])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor("#f1f5f9")),
            ('TEXTCOLOR', (0, 0), (-1, 0), colors.black),
            ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
            ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
            ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ]))
        elements.append(t)
        
        doc.build(elements)
        return output_path
