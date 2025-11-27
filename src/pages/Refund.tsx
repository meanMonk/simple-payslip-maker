import { Link } from "react-router-dom";

const Refund = () => {
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
          <h1 className="text-4xl font-bold mb-4 text-foreground">Refund Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: November 27, 2025</p>

          <section className="prose prose-slate max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">1. Digital Products Policy</h2>
              <p className="text-foreground">
                SimplePayslipMaker.in provides digital payslip generation services. Due to the nature of digital products and services, <strong>we do not offer refunds for digital downloads or generated payslips</strong> once they have been created and delivered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">2. Service Errors</h2>
              <p className="text-foreground">
                In the rare event that there is a technical error or malfunction that prevents you from accessing or downloading your generated payslips, please contact us immediately at <a href="mailto:support@simplepayslipmaker.in" className="text-primary hover:underline">support@simplepayslipmaker.in</a>. We will work to resolve the issue promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">3. Incorrect Information</h2>
              <p className="text-foreground">
                If you have entered incorrect employee or salary information and need to regenerate payslips, please note that:
              </p>
              <ul className="list-disc pl-6 mt-2 text-foreground space-y-1">
                <li>You are responsible for verifying all information before generating payslips</li>
                <li>No refunds will be issued for user data entry errors</li>
                <li>You may need to purchase additional credits to regenerate corrected payslips</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">4. Subscription Services</h2>
              <p className="text-foreground">
                For subscription-based services (when available):
              </p>
              <ul className="list-disc pl-6 mt-2 text-foreground space-y-1">
                <li>You may cancel your subscription at any time</li>
                <li>Cancellations will be effective at the end of the current billing period</li>
                <li>No refunds will be provided for partial months or unused portions of the subscription</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">5. Exceptional Circumstances</h2>
              <p className="text-foreground">
                While we maintain a strict no-refund policy for digital products, we will consider refund requests on a case-by-case basis in exceptional circumstances such as:
              </p>
              <ul className="list-disc pl-6 mt-2 text-foreground space-y-1">
                <li>Duplicate charges due to payment processing errors</li>
                <li>Service outages that prevent access for extended periods</li>
                <li>Significant errors in our service that we cannot resolve</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">6. How to Request a Refund</h2>
              <p className="text-foreground">
                If you believe you qualify for a refund under our exceptional circumstances policy, please contact us at <a href="mailto:support@simplepayslipmaker.in" className="text-primary hover:underline">support@simplepayslipmaker.in</a> within 7 days of your purchase with:
              </p>
              <ul className="list-disc pl-6 mt-2 text-foreground space-y-1">
                <li>Your order number or transaction ID</li>
                <li>A detailed description of the issue</li>
                <li>Any supporting documentation or screenshots</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">7. Processing Time</h2>
              <p className="text-foreground">
                If a refund is approved, it will be processed within 7-10 business days and will be credited to the original payment method used for the purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">8. Contact Us</h2>
              <p className="text-foreground">
                For any questions regarding our refund policy, please contact us at <a href="mailto:support@simplepayslipmaker.in" className="text-primary hover:underline">support@simplepayslipmaker.in</a>
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

export default Refund;