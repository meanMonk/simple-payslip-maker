import LeadCaptureForm from "@/components/LeadCaptureForm";
import { setupScrollTracking } from "@/lib/ga4";
import { Clock, FileText, Shield } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    // Setup scroll tracking for GA4
    const cleanup = setupScrollTracking();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-foreground">
            SimplePayslipMaker.in
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            Generate Salary Slips Online — Simple, Fast & Accurate
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Create professional payslips instantly. Sign up for early access to our upcoming bulk salary slip generation feature.
          </p>
          <div className="max-w-md mx-auto">
            <LeadCaptureForm
              page="home"
              buttonText="Get Early Access"
              className="flex-col sm:flex-row"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card border-y border-border py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why HR Teams Love SimplePayslipMaker.in
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <article className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Clock className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Save Time</h3>
              <p className="text-muted-foreground">
                Generate payslips in seconds, not hours. Reduce manual data entry and errors.
              </p>
            </article>

            <article className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Shield className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Secure & Accurate</h3>
              <p className="text-muted-foreground">
                Your data is safe with us. We ensure all calculations are accurate and compliant.
              </p>
            </article>

            <article className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <FileText className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Professional Formats</h3>
              <p className="text-muted-foreground">
                Choose from multiple payslip templates that fit your company's branding.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            What is an Online Payslip Generator?
          </h2>
          <p className="text-foreground mb-4">
            An online payslip generator is a digital tool that helps businesses, HR departments, and payroll professionals create professional salary slips for employees quickly and efficiently. SimplePayslipMaker.in is designed to be the simplest and most accurate payslip maker in India, catering specifically to the needs of Indian businesses.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            Benefits of Using a Salary Slip Maker
          </h3>
          <p className="text-foreground mb-4">
            Creating employee salary slips manually is time-consuming and prone to errors. An automated payslip format generator offers numerous advantages:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
            <li><strong>Time Efficiency:</strong> Generate hundreds of payslips in minutes instead of hours</li>
            <li><strong>Accuracy:</strong> Eliminate calculation errors with automated salary computations</li>
            <li><strong>Compliance:</strong> Ensure your payslips meet Indian labor law requirements</li>
            <li><strong>Professional Appearance:</strong> Create consistent, branded salary slips for all employees</li>
            <li><strong>Cost Savings:</strong> Reduce the need for expensive payroll software or outsourcing</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            Who Should Use an Employee Salary Slip Generator?
          </h3>
          <p className="text-foreground mb-4">
            SimplePayslipMaker.in is perfect for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
            <li><strong>Small and Medium Businesses:</strong> Companies with 10-500 employees who need a simple solution</li>
            <li><strong>HR Departments:</strong> HR teams looking to streamline their payroll slip generation process</li>
            <li><strong>Startups:</strong> New businesses that need professional payslips without expensive software</li>
            <li><strong>Accountants and CA Firms:</strong> Professionals managing payroll for multiple clients</li>
            <li><strong>Freelance HR Consultants:</strong> Independent HR professionals serving multiple organizations</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            Key Features of Our Payslip Format Download Tool
          </h3>
          <p className="text-foreground mb-4">
            Our upcoming platform will include powerful features designed specifically for Indian businesses:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
            <li><strong>Bulk Generation:</strong> Upload a spreadsheet and generate payslips for your entire team at once</li>
            <li><strong>Customizable Templates:</strong> Choose from professional payslip formats or customize your own</li>
            <li><strong>Instant PDF Downloads:</strong> Download individual or bulk payslips as secured PDF files</li>
            <li><strong>Secure Data Handling:</strong> Your employee data is encrypted and never shared</li>
            <li><strong>Mobile-Friendly:</strong> Generate and download payslips from any device</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            How to Create a Salary Slip Online
          </h3>
          <p className="text-foreground mb-4">
            Creating professional payslips with SimplePayslipMaker.in will be incredibly easy once we launch:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-foreground mb-6">
            <li>Sign up for your account or use our guest mode</li>
            <li>Choose your preferred payslip template</li>
            <li>Enter employee details (name, designation, salary components)</li>
            <li>Our system automatically calculates deductions and net pay</li>
            <li>Preview the payslip to ensure accuracy</li>
            <li>Download individual payslips or generate in bulk</li>
          </ol>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            What Should Be Included in a Salary Slip?
          </h3>
          <p className="text-foreground mb-4">
            A comprehensive employee salary slip should contain:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
            <li><strong>Company Information:</strong> Company name, logo, and address</li>
            <li><strong>Employee Details:</strong> Name, employee ID, designation, department</li>
            <li><strong>Pay Period:</strong> Month and year of payment</li>
            <li><strong>Earnings:</strong> Basic salary, HRA, allowances, bonuses</li>
            <li><strong>Deductions:</strong> PF, ESI, professional tax, TDS, loans</li>
            <li><strong>Net Pay:</strong> Take-home salary after all deductions</li>
            <li><strong>Bank Details:</strong> Account number and payment mode</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            Why Choose SimplePayslipMaker.in Over Other HR Payroll Slip Tools?
          </h3>
          <p className="text-foreground mb-4">
            While there are many payslip generators available, SimplePayslipMaker.in stands out because:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
            <li><strong>No Complex Setup:</strong> Start generating payslips immediately without lengthy onboarding</li>
            <li><strong>Affordable Pricing:</strong> Pay-per-use model means you only pay for what you need</li>
            <li><strong>Indian Compliance:</strong> Built specifically for Indian payroll requirements and regulations</li>
            <li><strong>User-Friendly Interface:</strong> Intuitive design that anyone can use without training</li>
            <li><strong>Bulk Processing:</strong> Handle large employee databases efficiently</li>
            <li><strong>No Hidden Costs:</strong> Transparent pricing with no surprise fees</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            Common Payslip Format Download Questions
          </h3>
          <p className="text-foreground mb-4">
            <strong>Can I customize the payslip template?</strong><br />
            Yes! Our platform will offer multiple professional templates that you can customize with your company branding.
          </p>
          <p className="text-foreground mb-4">
            <strong>Is my employee data secure?</strong><br />
            Absolutely. We use bank-level encryption to protect all data. Your information is never shared or sold to third parties.
          </p>
          <p className="text-foreground mb-4">
            <strong>Can I generate payslips for multiple months?</strong><br />
            Yes, you'll be able to generate historical payslips for any time period you need.
          </p>
          <p className="text-foreground mb-4">
            <strong>What file format will the payslips be in?</strong><br />
            Payslips will be generated as professional PDF files that can be easily emailed or printed.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
            Get Started with the Best Online Payslip Generator
          </h3>
          <p className="text-foreground mb-4">
            Join thousands of HR professionals and business owners who trust SimplePayslipMaker.in for their salary slip generation needs. Sign up for early access today and be among the first to experience the easiest way to create professional employee salary slips online.
          </p>
          <p className="text-foreground mb-6">
            Whether you need to generate a single payslip or process hundreds of salary slips in bulk, our platform is designed to save you time and ensure accuracy. Don't waste hours on manual payslip creation – let SimplePayslipMaker.in handle it for you.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold mb-4 text-foreground">Ready to simplify your payroll process?</h4>
            <LeadCaptureForm
              page="home-seo-section"
              buttonText="Join the Waitlist"
              className="max-w-md mx-auto flex-col sm:flex-row"
            />
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3 text-foreground">SimplePayslipMaker.in</h3>
              <p className="text-sm text-muted-foreground">
                The simplest way to generate professional salary slips for your employees.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/refund" className="text-muted-foreground hover:text-foreground">Refund Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Email: support@simplepayslipmaker.in<br />
                Bangalore, Karnataka, India
              </p>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-6">
            <p>© 2025 SimplePayslipMaker.in. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;