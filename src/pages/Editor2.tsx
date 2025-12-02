import { File, FileText, Image, Palette } from 'lucide-react';
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
      <div contenteditable="true" class="company-address">
        <p>123 Business Street</p>
        <p>City, State 12345</p>
        <p>Phone: (555) 123-4567</p>
      </div>
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
      <p>Client Name</p>
      <p>Client Address</p>
      <p>City, State 12345</p>
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
        <tr>
          <td contenteditable="true">Web Development Services</td>
          <td contenteditable="true">40</td>
          <td contenteditable="true">$100.00</td>
          <td contenteditable="true">$4,000.00</td>
        </tr>
        <tr>
          <td contenteditable="true">Consultation</td>
          <td contenteditable="true">5</td>
          <td contenteditable="true">$150.00</td>
          <td contenteditable="true">$750.00</td>
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

const INVITATION_TEMPLATE = `
<div class="document-container invitation-container">
  <div class="invitation-bg">
    <div class="invitation-content">
      <div class="invitation-header">
        <h3 contenteditable="true" class="invitation-subtitle">PLEASE JOIN US FOR A</h3>
        <h1 contenteditable="true" class="invitation-title">BABY SHOWER</h1>
      </div>
      
      <div class="invitation-body">
        <h4 contenteditable="true" class="honoring">HONORING</h4>
        <h2 contenteditable="true" class="honoree-name">SARA BELLUM</h2>
        
        <div class="event-details">
          <p contenteditable="true" class="event-date">20TH OF AUGUST 2025</p>
          <p contenteditable="true" class="event-time">SUNDAY 4 PM</p>
          <p contenteditable="true" class="event-location">445, MOUNT EDEN ROAD, ANYTOWN, USA</p>
        </div>
        
        <div class="rsvp-section">
          <p class="rsvp-text">RSVP TO</p>
          <p contenteditable="true" class="rsvp-contact">BARB DWYER AT +0 123 456 789</p>
        </div>
        
        <div class="invitation-footer">
          <p contenteditable="true" class="design-credit">Pink Baby Shower Invitation Design</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

// Floral background patterns
const FLORAL_BACKGROUNDS = [
  'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)',
  'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)',
  'linear-gradient(135deg, #a29bfe 0%, #fd79a8 100%)',
  'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
  'linear-gradient(135deg, #fd79a8 0%, #ffeaa7 100%)',
];

const DocumentEditor2: React.FC = () => {
  const [documentType, setDocumentType] = useState<'resume' | 'invoice' | 'invitation'>('resume');
  const [selectedBackground, setSelectedBackground] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const documentRef = useRef<HTMLDivElement>(null);

  const getTemplate = () => {
    switch (documentType) {
      case 'resume': return RESUME_TEMPLATE;
      case 'invoice': return INVOICE_TEMPLATE;
      case 'invitation': return INVITATION_TEMPLATE;
      default: return RESUME_TEMPLATE;
    }
  };

  const exportToPNG = async () => {
    if (!documentRef.current) return;
    
    setIsExporting(true);
    try {
      // Create a script element to load html2canvas
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      document.head.appendChild(script);
      
      script.onload = async () => {
        const html2canvas = (window as any).html2canvas;
        const canvas = await html2canvas(documentRef.current, {
          scale: 2,
          useCORS: true,
          backgroundColor: documentType === 'invitation' ? null : '#ffffff',
          allowTaint: true
        });
        
        const link = document.createElement('a');
        link.download = `${documentType}-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
        setIsExporting(false);
      };
      
      script.onerror = () => {
        alert('Failed to load export library');
        setIsExporting(false);
      };
    } catch (error) {
      console.error('PNG export failed:', error);
      alert('PNG export failed. Please try again.');
      setIsExporting(false);
    }
  };

  const exportToPDF = async () => {
    if (!documentRef.current) return;
    
    setIsExporting(true);
    try {
      // Load required libraries
      const jsPDFScript = document.createElement('script');
      jsPDFScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      document.head.appendChild(jsPDFScript);
      
      const html2canvasScript = document.createElement('script');
      html2canvasScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      document.head.appendChild(html2canvasScript);
      
      html2canvasScript.onload = async () => {
        const { jsPDF } = (window as any).jspdf;
        const html2canvas = (window as any).html2canvas;
        
        const canvas = await html2canvas(documentRef.current, {
          scale: 2,
          useCORS: true,
          backgroundColor: documentType === 'invitation' ? null : '#ffffff',
          allowTaint: true
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
        setIsExporting(false);
      };
    } catch (error) {
      console.error('PDF export failed:', error);
      alert('PDF export failed. Please try again.');
      setIsExporting(false);
    }
  };

  const exportToDocx = async () => {
    if (!documentRef.current) return;
    
    setIsExporting(true);
    try {
      const htmlContent = documentRef.current.innerHTML;
      
      // Create proper DOCX-compatible HTML with inline styles
      let docxContent = htmlContent
        .replace(/contenteditable="true"/g, '')
        .replace(/class="[^"]*"/g, '')
        .replace(/<div class="document-container[^"]*">/g, '<div>')
        .replace(/<div class="invitation-container[^"]*">/g, '<div>')
        .replace(/<div class="invitation-bg[^"]*">/g, '<div>')
        .replace(/<div class="invitation-content[^"]*">/g, '<div>');

      // Add comprehensive inline styles for better DOCX compatibility
      const styledDocx = `
        <!DOCTYPE html>
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
          <meta charset="utf-8">
          <meta name="ProgId" content="Word.Document">
          <meta name="Generator" content="Microsoft Word 15">
          <meta name="Originator" content="Microsoft Word 15">
          <!--[if gte mso 9]>
            <xml>
              <w:WordDocument>
                <w:View>Print</w:View>
                <w:Zoom>90</w:Zoom>
                <w:DoNotPromptForConvert/>
                <w:DoNotShowInsertionsAndDeletions/>
              </w:WordDocument>
            </xml>
          <![endif]-->
          <style>
            @page { margin: 1in; }
            body { 
              font-family: 'Calibri', 'Arial', sans-serif; 
              font-size: 11pt; 
              line-height: 1.15; 
              margin: 0; 
              padding: 0;
            }
            h1 { 
              font-size: 18pt; 
              font-weight: bold; 
              margin: 12pt 0 6pt 0; 
              color: #2F5496;
              text-align: center;
            }
            h2 { 
              font-size: 14pt; 
              font-weight: bold; 
              margin: 10pt 0 6pt 0; 
              color: #2F5496;
              border-bottom: 1pt solid #2F5496;
              padding-bottom: 2pt;
            }
            h3 { 
              font-size: 12pt; 
              font-weight: bold; 
              margin: 8pt 0 4pt 0; 
              color: #2F5496;
            }
            h4 { 
              font-size: 11pt; 
              font-weight: bold; 
              margin: 6pt 0 3pt 0; 
              color: #2F5496;
            }
            p { 
              margin: 6pt 0; 
              line-height: 1.15;
            }
            table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 12pt 0;
              font-size: 10pt;
            }
            th, td { 
              border: 1pt solid #A6A6A6; 
              padding: 6pt; 
              text-align: left;
              vertical-align: top;
            }
            th { 
              background-color: #F2F2F2; 
              font-weight: bold;
            }
            ul { 
              margin: 6pt 0; 
              padding-left: 18pt;
            }
            li { 
              margin: 3pt 0;
            }
            .header {
              text-align: center;
              margin-bottom: 24pt;
              padding-bottom: 12pt;
              border-bottom: 2pt solid #2F5496;
            }
            .section {
              margin-bottom: 18pt;
            }
            .invoice-header {
              margin-bottom: 24pt;
              padding-bottom: 12pt;
              border-bottom: 2pt solid #2F5496;
            }
            .company-info {
              float: left;
              width: 48%;
            }
            .invoice-details {
              float: right;
              width: 48%;
              text-align: right;
            }
            .client-info {
              background-color: #F8F9FA;
              padding: 12pt;
              margin: 12pt 0;
              border: 1pt solid #E9ECEF;
            }
            .total-row {
              margin: 6pt 0;
              text-align: right;
            }
            .final-total {
              border-top: 2pt solid #2F5496;
              padding-top: 12pt;
              margin-top: 12pt;
              font-weight: bold;
              font-size: 12pt;
            }
            .invitation-title {
              font-size: 28pt;
              font-weight: bold;
              color: #E91E63;
              text-align: center;
              margin: 12pt 0;
            }
            .invitation-subtitle {
              font-size: 12pt;
              color: #666;
              text-align: center;
              margin: 6pt 0;
            }
            .honoree-name {
              font-size: 20pt;
              font-weight: bold;
              color: #FF69B4;
              text-align: center;
              margin: 12pt 0;
            }
            .event-details {
              text-align: center;
              margin: 18pt 0;
            }
            .event-details p {
              font-size: 12pt;
              margin: 6pt 0;
              font-weight: bold;
            }
            .rsvp-section {
              text-align: center;
              margin: 18pt 0;
            }
            .invitation-footer {
              text-align: center;
              margin-top: 24pt;
              font-size: 9pt;
              color: #666;
            }
          </style>
        </head>
        <body>
          ${docxContent}
        </body>
        </html>
      `;

      // Create blob with proper MIME type for Word
      const blob = new Blob([styledDocx], { 
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      });
      
      const link = document.createElement('a');
      link.download = `${documentType}-${Date.now()}.docx`;
      link.href = URL.createObjectURL(blob);
      link.click();
      
      URL.revokeObjectURL(link.href);
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
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex gap-4">
                <select 
                  value={documentType} 
                  onChange={(e) => setDocumentType(e.target.value as 'resume' | 'invoice' | 'invitation')}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="resume">Resume Template</option>
                  <option value="invoice">Invoice Template</option>
                  <option value="invitation">Invitation Template</option>
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
            
            {/* Background selector for invitations */}
            {documentType === 'invitation' && (
              <div className="flex items-center gap-4">
                <Palette size={20} />
                <span className="text-sm font-medium">Background:</span>
                <div className="flex gap-2">
                  {FLORAL_BACKGROUNDS.map((bg, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedBackground(index)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedBackground === index ? 'border-gray-800' : 'border-gray-300'
                      }`}
                      style={{ background: bg }}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {isExporting && (
              <div className="text-center text-gray-600">
                <div className="inline-flex items-center gap-2">
                  <div className="animate-spin w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                  Exporting document...
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Document Editor */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div 
            ref={documentRef}
            className="document-editor"
            dangerouslySetInnerHTML={{ __html: getTemplate() }}
            style={{
              minHeight: '800px',
              padding: documentType === 'invitation' ? '40px' : '60px',
              fontFamily: 'Arial, sans-serif',
              lineHeight: '1.6',
              color: '#333',
              background: documentType === 'invitation' ? FLORAL_BACKGROUNDS[selectedBackground] : 'white'
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
        
        /* Resume & Invoice Styles */
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
        
        .company-address p {
          margin: 2px 0;
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
        
        .client-info p {
          margin: 2px 0;
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
        
        /* Invitation Specific Styles */
        .invitation-container {
          position: relative;
          min-height: 600px;
        }
        
        .invitation-bg {
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Cdefs%3E%3Cpattern id='floral' patternUnits='userSpaceOnUse' width='100' height='100'%3E%3Ccircle cx='20' cy='20' r='8' fill='%23FFB6C1' opacity='0.3'/%3E%3Ccircle cx='80' cy='60' r='6' fill='%23DDA0DD' opacity='0.3'/%3E%3Ccircle cx='50' cy='90' r='4' fill='%23F0E68C' opacity='0.3'/%3E%3Cpath d='M30,30 Q40,20 50,30 Q60,20 70,30 Q60,40 50,30 Q40,40 30,30' fill='%23FFE4E1' opacity='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23floral)'/%3E%3C/svg%3E"),
          radial-gradient(circle at 20% 80%, rgba(255, 182, 193, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(221, 160, 221, 0.4) 0%, transparent 50%);
          background-size: 200px 200px, 300px 300px, 300px 300px;
          background-position: 0 0, 0 0, 100px 100px;
          border-radius: 20px;
          padding: 40px;
          position: relative;
          overflow: hidden;
        }
        
        .invitation-bg::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(255, 105, 180, 0.3) 0%, transparent 70%);
          border-radius: 50%;
        }
        
        .invitation-bg::after {
          content: '';
          position: absolute;
          bottom: -30px;
          left: -30px;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(135, 206, 250, 0.3) 0%, transparent 70%);
          border-radius: 50%;
        }
        
        .invitation-content {
          background: rgba(255, 255, 255, 0.9);
          padding: 40px;
          border-radius: 15px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          position: relative;
          z-index: 1;
        }
        
        .invitation-header {
          margin-bottom: 30px;
        }
        
        .invitation-subtitle {
          font-size: 14px;
          color: #666;
          margin: 0 0 10px 0;
          letter-spacing: 1px;
        }
        
        .invitation-title {
          font-size: 36px;
          font-weight: bold;
          color: #e91e63;
          margin: 0 0 20px 0;
          text-shadow: 2px 2px 4px rgba(233, 30, 99, 0.1);
          background: linear-gradient(135deg, #e91e63, #ff69b4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .honoring {
          font-size: 12px;
          color: #888;
          margin: 20px 0 5px 0;
          letter-spacing: 2px;
        }
        
        .honoree-name {
          font-size: 24px;
          font-weight: bold;
          color: #ff69b4;
          margin: 0 0 30px 0;
          text-shadow: 1px 1px 2px rgba(255, 105, 180, 0.1);
        }
        
        .event-details {
          margin: 30px 0;
          padding: 20px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 10px;
        }
        
        .event-date,
        .event-time,
        .event-location {
          font-size: 16px;
          color: #333;
          margin: 8px 0;
          font-weight: 600;
        }
        
        .rsvp-section {
          margin: 30px 0;
          padding: 15px;
          background: rgba(233, 30, 99, 0.1);
          border-radius: 10px;
        }
        
        .rsvp-text {
          font-size: 14px;
          color: #666;
          margin: 0 0 5px 0;
        }
        
        .rsvp-contact {
          font-size: 16px;
          color: #e91e63;
          font-weight: bold;
          margin: 0;
        }
        
        .invitation-footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(233, 30, 99, 0.2);
        }
        
        .design-credit {
          font-size: 12px;
          color: #999;
          margin: 0;
          font-style: italic;
        }
        
        /* Editable content styling */
        [contenteditable="true"]:hover {
          background-color: rgba(52, 152, 219, 0.1);
          outline: 1px dashed #3498db;
          border-radius: 2px;
        }
        
        [contenteditable="true"]:focus {
          background-color: rgba(52, 152, 219, 0.1);
          outline: 2px solid #3498db;
          border-radius: 2px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .invoice-header {
            flex-direction: column;
            gap: 20px;
          }
          
          .company-info,
          .invoice-details {
            width: 100%;
          }
          
          .invoice-details {
            text-align: left;
          }
          
          .invitation-title {
            font-size: 28px;
          }
          
          .honoree-name {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default DocumentEditor2;