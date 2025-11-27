import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <Link to="/" className="text-xl font-bold text-foreground">
            SimplePayslipMaker.in
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Terms & Conditions</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: November 27, 2025</p>

          <section className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-foreground">
                By accessing and using SimplePayslipMaker.in ("Service"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">2. Use License</h2>
              <p className="text-foreground">
                Permission is granted to temporarily use the Service for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              <p className="text-foreground mt-2">
                Under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-2 text-foreground space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on SimplePayslipMaker.in</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">3. Service Description</h2>
              <p className="text-foreground">
                SimplePayslipMaker.in provides an online payslip generation service for businesses and HR professionals. We reserve the right to modify or discontinue the Service at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">4. User Responsibilities</h2>
              <p className="text-foreground">
                Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to provide accurate and complete information when using our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">5. Disclaimer</h2>
              <p className="text-foreground">
                The materials on SimplePayslipMaker.in are provided on an 'as is' basis. SimplePayslipMaker.in makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">6. Limitations</h2>
              <p className="text-foreground">
                In no event shall SimplePayslipMaker.in or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SimplePayslipMaker.in.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">7. Governing Law</h2>
              <p className="text-foreground">
                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">8. Contact Information</h2>
              <p className="text-foreground">
                If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:support@simplepayslipmaker.in" className="text-primary hover:underline">support@simplepayslipmaker.in</a>
              </p>
            </section>
          </section>
        </article>
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 SimplePayslipMaker.in. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/refund" className="hover:text-foreground">Refund</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Terms;