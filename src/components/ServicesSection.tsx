import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  Brain, 
  Bot, 
  TrendingUp, 
  Database, 
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Advanced Data Analysis",
      description: "Transform raw data into meaningful insights with statistical analysis, data mining, and exploratory data analysis.",
      features: [
        "Statistical modeling and hypothesis testing",
        "Data cleaning and preprocessing",
        "Exploratory data analysis (EDA)",
        "Custom reporting and visualization"
      ],
      price: "Starting at $2,500",
      timeline: "2-4 weeks"
    },
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Build predictive models and intelligent systems that learn from your data to automate decisions and predict outcomes.",
      features: [
        "Predictive modeling and classification",
        "Natural language processing (NLP)",
        "Computer vision and image recognition",
        "Recommendation systems"
      ],
      price: "Starting at $5,000",
      timeline: "4-8 weeks"
    },
    {
      icon: Database,
      title: "Interactive Dashboards",
      description: "Create stunning, interactive dashboards that provide real-time insights and enable data-driven decision making.",
      features: [
        "Real-time data visualization",
        "Custom KPI tracking",
        "Interactive filtering and drilling",
        "Mobile-responsive design"
      ],
      price: "Starting at $3,000",
      timeline: "2-6 weeks"
    },
    {
      icon: Bot,
      title: "AI Chatbots & Automation",
      description: "Develop intelligent chatbots and automation systems that enhance customer experience and streamline operations.",
      features: [
        "Conversational AI development",
        "Multi-platform integration",
        "Natural language understanding",
        "Workflow automation"
      ],
      price: "Starting at $4,000",
      timeline: "3-6 weeks"
    },
    {
      icon: TrendingUp,
      title: "Forecasting & Predictive Analytics",
      description: "Leverage time series analysis and predictive modeling to forecast trends and anticipate future business scenarios.",
      features: [
        "Time series forecasting",
        "Demand planning and optimization",
        "Risk assessment modeling",
        "Scenario analysis and planning"
      ],
      price: "Starting at $3,500",
      timeline: "3-5 weeks"
    },
    {
      icon: Zap,
      title: "Custom AI Solutions",
      description: "End-to-end custom AI solutions tailored to your specific business needs and industry requirements.",
      features: [
        "Custom algorithm development",
        "AI strategy and consulting",
        "Model deployment and scaling",
        "Ongoing support and optimization"
      ],
      price: "Custom pricing",
      timeline: "6-12 weeks"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Data Science &
            <span className="block text-accent">AI Solutions Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From basic analytics to advanced AI implementations, we offer a full spectrum of services 
            to transform your business through the power of data and artificial intelligence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing and Timeline */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">Starting Price</span>
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">Timeline</span>
                    <span className="font-semibold text-foreground">{service.timeline}</span>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business is unique. Let's discuss how we can create a tailored data science 
            and AI solution that perfectly fits your specific requirements and objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="hero" size="lg">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;