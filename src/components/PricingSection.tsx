import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, CreditCard, DollarSign } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter Analytics",
      price: 2500,
      period: "project",
      description: "Perfect for small businesses looking to get started with data analysis",
      popular: false,
      features: [
        "Basic data analysis and visualization",
        "Up to 3 data sources",
        "2 custom dashboards",
        "Email support",
        "1 month of support",
        "Basic reporting"
      ],
      includes: "Includes: Data cleaning, basic statistical analysis, and simple visualizations"
    },
    {
      name: "Professional AI",
      price: 5000,
      period: "project",
      description: "Advanced analytics and machine learning for growing businesses",
      popular: true,
      features: [
        "Advanced ML model development",
        "Up to 10 data sources",
        "5 interactive dashboards",
        "Priority email & phone support",
        "3 months of support",
        "Predictive analytics",
        "Custom algorithms",
        "Model deployment assistance"
      ],
      includes: "Includes: Everything in Starter + ML models, API integration, and training"
    },
    {
      name: "Enterprise Solution",
      price: 15000,
      period: "project",
      description: "Comprehensive AI solutions for large organizations",
      popular: false,
      features: [
        "Full-scale AI implementation",
        "Unlimited data sources",
        "Custom dashboard development",
        "24/7 dedicated support",
        "12 months of support",
        "Advanced forecasting",
        "Real-time analytics",
        "Team training included",
        "On-site consultation",
        "Custom integrations"
      ],
      includes: "Includes: Everything in Professional + dedicated team, on-site support, and enterprise features"
    }
  ];

  const paymentMethods = [
    {
      name: "Credit Card",
      icon: CreditCard,
      description: "Secure payment via Stripe",
      note: "Instant processing"
    },
    {
      name: "PayPal",
      icon: DollarSign,
      description: "Pay with your PayPal account",
      note: "Buyer protection included"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Transparent Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Flexible Pricing for
            <span className="block text-primary">Every Business Size</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect package for your data science and AI needs. All prices in USD. 
            No hidden fees, no long-term contracts required.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  {plan.description}
                </CardDescription>
                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-bold text-foreground">
                    ${plan.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    per {plan.period}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Includes */}
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {plan.includes}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button 
                    variant={plan.popular ? "hero" : "default"} 
                    className="w-full"
                    size="lg"
                  >
                    Get Started
                  </Button>
                  <Button variant="outline" className="w-full">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Secure Payment Options
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="flex items-center space-x-4 p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{method.name}</h4>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                    <p className="text-xs text-success">{method.note}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h4>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              For enterprise clients or projects requiring specialized solutions, 
              we offer custom pricing based on your specific requirements and scope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Request Custom Quote
              </Button>
              <Button variant="hero" size="lg">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;