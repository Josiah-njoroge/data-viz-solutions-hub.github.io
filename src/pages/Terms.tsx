import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4 leading-relaxed">
                By accessing and using DataScope's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
              <p className="mb-4 leading-relaxed">
                DataScope provides data science and artificial intelligence solutions including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Advanced data analysis and statistical modeling</li>
                <li>Machine learning algorithm development and deployment</li>
                <li>Interactive dashboard creation and business intelligence</li>
                <li>AI chatbot development and automation solutions</li>
                <li>Forecasting and predictive analytics</li>
                <li>Custom AI solution development and consulting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
              <p className="mb-4 leading-relaxed">
                All services are priced in USD unless otherwise specified. Payment terms include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Project-based pricing as outlined in individual proposals</li>
                <li>50% payment due upon project initiation</li>
                <li>Remaining balance due upon project completion</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are subject to applicable taxes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="mb-4 leading-relaxed">
                Upon full payment for services:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Clients retain ownership of their proprietary data</li>
                <li>Custom-developed solutions and code become client property</li>
                <li>DataScope retains rights to general methodologies and frameworks</li>
                <li>Any pre-existing DataScope IP remains our property</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Confidentiality</h2>
              <p className="mb-4 leading-relaxed">
                We are committed to protecting your confidential information:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>All client data is treated as confidential</li>
                <li>Non-disclosure agreements available upon request</li>
                <li>Data is processed in secure, compliant environments</li>
                <li>Client data is not shared with third parties without consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Project Deliverables and Timeline</h2>
              <p className="mb-4 leading-relaxed">
                Project scope, deliverables, and timelines are defined in individual statements of work:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Timelines are estimates and may vary based on project complexity</li>
                <li>Client responsiveness affects project timeline</li>
                <li>Change requests may impact scope and timeline</li>
                <li>Regular progress updates will be provided</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="mb-4 leading-relaxed">
                DataScope's liability is limited to the amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="mb-4 leading-relaxed">
                Either party may terminate the agreement with written notice. In case of termination:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Payment is due for all work completed</li>
                <li>Deliverables completed to date will be provided</li>
                <li>Confidentiality obligations continue post-termination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
              <p className="mb-4 leading-relaxed">
                For questions regarding these terms, please contact us:
              </p>
              <div className="bg-secondary/20 p-6 rounded-lg">
                <p><strong>Email:</strong> legal@datascope.ai</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Operating Hours:</strong> Monday-Friday, 9 AM - 6 PM EAT</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;