import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Refund = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Refund Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Refund Eligibility</h2>
              <p className="mb-4 leading-relaxed">
                DataScope offers refunds under specific circumstances to ensure client satisfaction while protecting our business interests. Refund eligibility depends on the nature and stage of the project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Full Refund Conditions</h2>
              <p className="mb-4 leading-relaxed">
                A full refund may be provided in the following situations:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Project cancellation within 48 hours of initial payment (before work begins)</li>
                <li>Inability to deliver agreed-upon services due to technical limitations on our end</li>
                <li>Fundamental misunderstanding of project requirements that cannot be resolved</li>
                <li>Breach of contract by DataScope</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Partial Refund Conditions</h2>
              <p className="mb-4 leading-relaxed">
                Partial refunds may be considered when:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Project is terminated after work has commenced but before completion</li>
                <li>Scope reduction is agreed upon by both parties</li>
                <li>Client decides to discontinue specific project components</li>
                <li>Mutual agreement to modify project deliverables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Non-Refundable Situations</h2>
              <p className="mb-4 leading-relaxed">
                Refunds will not be provided in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Project completion according to agreed specifications</li>
                <li>Client dissatisfaction with results that meet technical requirements</li>
                <li>Changes in client business priorities or strategy</li>
                <li>Failure to provide necessary data or resources by the client</li>
                <li>Request made more than 30 days after project completion</li>
                <li>Custom development work that has been delivered and accepted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Refund Process</h2>
              <p className="mb-4 leading-relaxed">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Contact our support team at refunds@datascope.ai</li>
                <li>Provide your project details and reason for refund request</li>
                <li>Allow 5-7 business days for review and response</li>
                <li>If approved, refunds will be processed within 10-14 business days</li>
                <li>Refunds will be issued to the original payment method</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Consultation and Small Projects</h2>
              <p className="mb-4 leading-relaxed">
                For consultation services and projects under $1,000:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Consultation fees are non-refundable once the session is completed</li>
                <li>Small project refunds are considered on a case-by-case basis</li>
                <li>Cancellation at least 24 hours before scheduled consultation allows full refund</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Payment Disputes</h2>
              <p className="mb-4 leading-relaxed">
                For credit card disputes or chargebacks:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Please contact us directly before initiating a chargeback</li>
                <li>We prefer to resolve disputes amicably and directly</li>
                <li>Chargebacks may result in suspension of services</li>
                <li>We will provide documentation to support our position if needed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Satisfaction Guarantee</h2>
              <p className="mb-4 leading-relaxed">
                While we cannot guarantee specific business outcomes, we are committed to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Delivering high-quality, professional services</li>
                <li>Meeting agreed-upon technical specifications</li>
                <li>Providing ongoing support during the project period</li>
                <li>Working collaboratively to address any concerns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact for Refund Requests</h2>
              <p className="mb-4 leading-relaxed">
                For refund requests or questions about this policy:
              </p>
              <div className="bg-secondary/20 p-6 rounded-lg">
                <p><strong>Email:</strong> refunds@datascope.ai</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Subject Line:</strong> "Refund Request - [Project Name/ID]"</p>
                <p><strong>Response Time:</strong> 5-7 business days</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;