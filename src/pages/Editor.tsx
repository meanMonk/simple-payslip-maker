import { File, FileText, Image } from 'lucide-react';
import React, { useRef, useState } from 'react';

// Document templates
const RESUME_TEMPLATE = `
<div class="document-container">
  <header class="header">
    <h1 contenteditable="true" class="name">John Doe</h1>
    <p contenteditable="true" class="title">Senior Software Engineer</p>
    <div class="contact-info">
      <span contenteditable="true">john.doe@email.com</span> | 
      <span contenteditable="true">(555) 123-4567</span> | 
      <span contenteditable="true">LinkedIn: /in/johndoe</span>
    </div>
  </header>
  
  <section class="section">
    <h2 class="section-title">Professional Summary</h2>
    <p contenteditable="true" class="content">
      Experienced software engineer with 8+ years developing scalable web applications. 
      Expertise in React, TypeScript, and cloud architecture.
    </p>
  </section>
  
  <section class="section">
    <h2 class="section-title">Experience</h2>
    <div class="experience-item" contenteditable="true">
      <h3 class="job-title">Senior Software Engineer</h3>
      <p class="company">Tech Company Inc. | 2020 - Present</p>
      <ul class="achievements">
        <li>Led development of customer-facing dashboard serving 10k+ users</li>
        <li>Improved application performance by 40% through optimization</li>
        <li>Mentored 3 junior developers and established code review processes</li>
      </ul>
    </div>
  </section>
  
  <section class="section">
    <h2 class="section-title">Skills</h2>
    <div contenteditable="true" class="skills">
      JavaScript, TypeScript, React, Node.js, Python, AWS, Docker, PostgreSQL
    </div>
  </section>
</div>
`;

const INVOICE_TEMPLATE = `
<div class="document-container">
  <header class="invoice-header">
    <div class="company-info">
      <h1 contenteditable="true" class="company-name">Your Company</h1>
      <p contenteditable="true" class="company-address">
        123 Business Street<br>
        City, State 12345<br>
        Phone: (555) 123-4567
      </p>
    </div>
    <div class="invoice-details">
      <h2 class="invoice-title">INVOICE</h2>
      <p><strong>Invoice #:</strong> <span contenteditable="true">INV-001</span></p>
      <p><strong>Date:</strong> <span contenteditable="true">${new Date().toLocaleDateString()}</span></p>
      <p><strong>Due Date:</strong> <span contenteditable="true">${new Date(Date.now() + 30*24*60*60*1000).toLocaleDateString()}</span></p>
    </div>
  </header>
  
  <section class="section">
    <h3>Bill To:</h3>
    <div contenteditable="true" class="client-info">
      Client Name<br>
      Client Address<br>
      City, State 12345
    </div>
  </section>
  
  <section class="section">
    <table class="invoice-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr contenteditable="true">
          <td>Web Development Services</td>
          <td>40</td>
          <td>$100.00</td>
          <td>$4,000.00</td>
        </tr>
        <tr contenteditable="true">
          <td>Consultation</td>
          <td>5</td>
          <td>$150.00</td>
          <td>$750.00</td>
        </tr>
      </tbody>
    </table>
    
    <div class="invoice-total">
      <div class="total-row">
        <span>Subtotal:</span>
        <span contenteditable="true">$4,750.00</span>
      </div>
      <div class="total-row">
        <span>Tax (8%):</span>
        <span contenteditable="true">$380.00</span>
      </div>
      <div class="total-row final-total">
        <span><strong>Total:</strong></span>
        <span contenteditable="true"><strong>$5,130.00</strong></span>
      </div>
    </div>
  </section>
</div>
`;

const DocumentEditor: React.FC = () => {
  const [documentType, setDocumentType] = useState<'resume' | 'invoice'>('resume');
  const [isExporting, setIsExporting] = useState(false);
  const documentRef = useRef<HTMLDivElement>(null);

  const getTemplate = () => {
    return documentType === 'resume' ? RESUME_TEMPLATE : INVOICE_TEMPLATE;
  };

  const exportToPNG = async () => {
    if (!documentRef.current) return;
    
    setIsExporting(true);
    try {
      // Using html2canvas approach (would need to install html2canvas)
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(documentRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const link = document.createElement('a');
      link.download = `${documentType}-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('PNG export failed:', error);
      alert('PNG export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const exportToPDF = async () => {
    if (!documentRef.current) return;
    
    setIsExporting(true);
    try {
      // Using jsPDF with html2canvas
      const jsPDF = (await import('jspdf')).jsPDF;
      const html2canvas = (await import('html2canvas')).default;
      
      const canvas = await html2canvas(documentRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${documentType}-${Date.now()}.pdf`);
    } catch (error) {
      console.error('PDF export failed:', error);
      alert('PDF export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const exportToDocx = async () => {
    if (!documentRef.current) return;
    
    setIsExporting(true);
    try {
      // Convert HTML to DOCX-compatible format
      const htmlContent = documentRef.current.innerHTML;
      
      // Simple HTML to DOCX conversion using basic approach
      // For production, consider using libraries like html-docx-js or mammoth.js
      const convertedContent = htmlContent
        .replace(/<div class="document-container">/g, '<div>')
        .replace(/<h1[^>]*>/g, '<h1>')
        .replace(/<h2[^>]*>/g, '<h2>')
        .replace(/<h3[^>]*>/g, '<h3>')
        .replace(/<p[^>]*>/g, '<p>')
        .replace(/<span[^>]*>/g, '<span>')
        .replace(/class="[^"]*"/g, '')
        .replace(/contenteditable="true"/g, '');

      // Create a simple HTML document for DOCX
      const docxHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; }
            h1 { font-size: 24px; margin-bottom: 10px; }
            h2 { font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-bottom: 2px solid #333; }
            h3 { font-size: 16px; margin-bottom: 5px; }
            p { margin-bottom: 10px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f5f5f5; font-weight: bold; }
            ul { margin: 10px 0; padding-left: 20px; }
            .contact-info { margin: 10px 0; }
            .total-row { display: flex; justify-content: space-between; margin: 5px 0; }
            .final-total { font-weight: bold; border-top: 2px solid #333; padding-top: 10px; }
          </style>
        </head>
        <body>
          ${convertedContent}
        </body>
        </html>
      `;

      // Create blob and download
      const blob = new Blob([docxHtml], { type: 'application/msword' });
      const link = document.createElement('a');
      link.download = `${documentType}-${Date.now()}.doc`;
      link.href = URL.createObjectURL(blob);
      link.click();
    } catch (error) {
      console.error('DOCX export failed:', error);
      alert('DOCX export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Controls */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-4">
              <select 
                value={documentType} 
                onChange={(e) => setDocumentType(e.target.value as 'resume' | 'invoice')}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="resume">Resume Template</option>
                <option value="invoice">Invoice Template</option>
              </select>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={exportToPNG}
                disabled={isExporting}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                <Image size={16} />
                PNG
              </button>
              <button
                onClick={exportToPDF}
                disabled={isExporting}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
              >
                <FileText size={16} />
                PDF
              </button>
              <button
                onClick={exportToDocx}
                disabled={isExporting}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                <File size={16} />
                DOCX
              </button>
            </div>
          </div>
          
          {isExporting && (
            <div className="mt-4 text-center text-gray-600">
              <div className="inline-flex items-center gap-2">
                <div className="animate-spin w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                Exporting document...
              </div>
            </div>
          )}
        </div>

        {/* Document Editor */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div 
            ref={documentRef}
            className="document-editor"
            dangerouslySetInnerHTML={{ __html: getTemplate() }}
            style={{
              minHeight: '800px',
              padding: '60px',
              fontFamily: 'Arial, sans-serif',
              lineHeight: '1.6',
              color: '#333'
            }}
          />
        </div>
      </div>

      <style>{`
        .document-editor {
          background: white;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        .document-container {
          max-width: 100%;
          margin: 0 auto;
        }
        
        .header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #333;
        }
        
        .name {
          font-size: 28px;
          font-weight: bold;
          margin: 0 0 5px 0;
          color: #2c3e50;
        }
        
        .title {
          font-size: 18px;
          color: #7f8c8d;
          margin: 0 0 15px 0;
        }
        
        .contact-info {
          font-size: 14px;
          color: #666;
        }
        
        .section {
          margin-bottom: 25px;
        }
        
        .section-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 15px;
          color: #2c3e50;
          border-bottom: 1px solid #bdc3c7;
          padding-bottom: 5px;
        }
        
        .content {
          margin-bottom: 15px;
          line-height: 1.6;
        }
        
        .experience-item {
          margin-bottom: 20px;
        }
        
        .job-title {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 5px;
          color: #2c3e50;
        }
        
        .company {
          font-style: italic;
          color: #7f8c8d;
          margin-bottom: 10px;
        }
        
        .achievements {
          margin-left: 20px;
        }
        
        .achievements li {
          margin-bottom: 5px;
        }
        
        .skills {
          line-height: 1.8;
        }
        
        /* Invoice Specific Styles */
        .invoice-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #333;
        }
        
        .company-name {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #2c3e50;
        }
        
        .company-address {
          color: #666;
          line-height: 1.4;
        }
        
        .invoice-title {
          font-size: 32px;
          font-weight: bold;
          color: #e74c3c;
          margin-bottom: 20px;
        }
        
        .invoice-details p {
          margin-bottom: 5px;
        }
        
        .client-info {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
        }
        
        .invoice-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        
        .invoice-table th,
        .invoice-table td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: left;
        }
        
        .invoice-table th {
          background-color: #f5f5f5;
          font-weight: bold;
        }
        
        .invoice-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        
        .invoice-total {
          margin-top: 20px;
          padding: 20px 0;
          border-top: 1px solid #ddd;
        }
        
        .total-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          padding: 5px 0;
        }
        
        .final-total {
          border-top: 2px solid #333;
          padding-top: 15px;
          margin-top: 15px;
          font-size: 18px;
        }
        
        /* Editable content styling */
        [contenteditable="true"]:hover {
          background-color: #f0f8ff;
          outline: 1px dashed #3498db;
        }
        
        [contenteditable="true"]:focus {
          background-color: #f0f8ff;
          outline: 2px solid #3498db;
        }
      `}</style>
    </div>
  );
};

export default DocumentEditor;