import { Link } from "react-router-dom";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold mb-4 text-foreground">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: November 27, 2025</p>

          <section className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">1. Information We Collect</h2>
              <p className="text-foreground">
                At SimplePayslipMaker.in, we collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 mt-2 text-foreground space-y-1">
                <li>Sign up for early access notifications</li>
                <li>Contact us through our contact form</li>
                <li>Use our payslip generation service</li>
              </ul>
              <p className="text-foreground mt-2">
                This information may include your name, email address, company information, and employee salary data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">2. How We Use Your Information</h2>
              <p className="text-foreground">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-2 text-foreground space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you updates about our service launch and features</li>
                <li>Respond to your comments and questions</li>
                <li>Generate payslips as per your request</li>
                <li>Analyze usage patterns to improve user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">3. Data Security</h2>
              <p className="text-foreground">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. All employee salary data is encrypted during transmission and storage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">4. Data Retention</h2>
              <p className="text-foreground">
                We retain your personal information only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">5. Sharing of Information</h2>
              <p className="text-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 text-foreground space-y-1">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">6. Cookies and Tracking</h2>
              <p className="text-foreground">
                We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">7. Your Rights</h2>
              <p className="text-foreground">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 text-foreground space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request transfer of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">8. Changes to This Policy</h2>
              <p className="text-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">9. Contact Us</h2>
              <p className="text-foreground">
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@simplepayslipmaker.in" className="text-primary hover:underline">support@simplepayslipmaker.in</a>
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

export default Privacy;