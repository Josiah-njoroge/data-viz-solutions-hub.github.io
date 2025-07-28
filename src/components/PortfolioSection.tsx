import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import aiConcept from "@/assets/ai-concept.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Revenue Optimization",
      category: "Machine Learning",
      description: "Developed a comprehensive ML system for a multinational e-commerce platform to optimize pricing strategies and predict customer lifetime value.",
      image: dashboardPreview,
      technologies: ["Python", "TensorFlow", "AWS", "PostgreSQL"],
      results: [
        { icon: TrendingUp, label: "Revenue Increase", value: "+42%" },
        { icon: Users, label: "Customer Retention", value: "+28%" },
        { icon: DollarSign, label: "Cost Reduction", value: "$2.3M" }
      ],
      industry: "E-commerce",
      duration: "6 months"
    },
    {
      title: "Healthcare Predictive Analytics Dashboard",
      category: "Data Visualization",
      description: "Created an interactive dashboard for a healthcare network to predict patient readmission risks and optimize resource allocation.",
      image: aiConcept,
      technologies: ["R", "Tableau", "SQL Server", "Azure"],
      results: [
        { icon: Users, label: "Patient Outcomes", value: "+35%" },
        { icon: TrendingUp, label: "Efficiency Gain", value: "+50%" },
        { icon: DollarSign, label: "Cost Savings", value: "$1.8M" }
      ],
      industry: "Healthcare",
      duration: "4 months"
    },
    {
      title: "Supply Chain Optimization AI",
      category: "AI Automation",
      description: "Implemented an AI-powered supply chain optimization system for a global manufacturing company to reduce costs and improve delivery times.",
      image: dashboardPreview,
      technologies: ["Python", "Scikit-learn", "Docker", "MongoDB"],
      results: [
        { icon: TrendingUp, label: "Delivery Speed", value: "+60%" },
        { icon: DollarSign, label: "Cost Reduction", value: "$5.2M" },
        { icon: Users, label: "Customer Satisfaction", value: "+45%" }
      ],
      industry: "Manufacturing",
      duration: "8 months"
    }
  ];

  const testimonials = [
    {
      quote: "DataScope's ML solution transformed our pricing strategy and increased our revenue by 42% in just 6 months. Their expertise is unmatched.",
      author: "Sarah Chen",
      position: "Chief Data Officer",
      company: "GlobalShop Inc."
    },
    {
      quote: "The predictive analytics dashboard has revolutionized how we approach patient care. We've seen significant improvements in outcomes.",
      author: "Dr. Michael Rodriguez",
      position: "Medical Director",
      company: "Regional Health Network"
    },
    {
      quote: "Their supply chain AI solution saved us millions and dramatically improved our delivery performance. Exceptional work!",
      author: "James Thompson",
      position: "VP of Operations",
      company: "Manufacturing Corp"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Case Studies &
            <span className="block text-success">Client Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses across industries leverage data science 
            and AI to achieve remarkable results and sustainable growth.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-border/50 hover:shadow-elegant transition-all duration-300">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {project.category}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {project.industry} • {project.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg mb-2">
                          <result.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-lg font-bold text-foreground">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="group">
                    View Full Case Study
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader>
                <div className="text-4xl text-accent mb-4">"</div>
                <p className="text-muted-foreground italic leading-relaxed">
                  {testimonial.quote}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;