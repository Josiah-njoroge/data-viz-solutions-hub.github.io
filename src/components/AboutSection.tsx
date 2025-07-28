import { Award, Globe, TrendingUp, Users } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const AboutSection = () => {
  const stats = [
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: Users, label: "Projects Completed", value: "200+" },
    { icon: TrendingUp, label: "Average ROI Increase", value: "340%" },
    { icon: Award, label: "Industry Awards", value: "15+" }
  ];

  const values = [
    {
      title: "Data-Driven Excellence",
      description: "We leverage advanced analytics and machine learning to deliver insights that drive real business impact."
    },
    {
      title: "Global Expertise",
      description: "Our team of international data scientists brings diverse perspectives to solve complex business challenges."
    },
    {
      title: "Scalable Solutions",
      description: "From startups to enterprises, our solutions scale with your business growth and evolving needs."
    },
    {
      title: "Continuous Innovation",
      description: "We stay at the forefront of AI and data science technologies to keep our clients ahead of the competition."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About DataScope</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Empowering Businesses Through
            <span className="block text-primary">Intelligent Data Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by a team of passionate data scientists and AI specialists, DataScope transforms 
            complex data into actionable insights that drive strategic decision-making for businesses worldwide.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image */}
          <div className="relative">
            <img 
              src={teamCollaboration} 
              alt="DataScope team collaborating on data science projects"
              className="rounded-2xl shadow-elegant w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Your Trusted Partner in Digital Transformation
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At DataScope, we believe that every organization has the potential to become truly data-driven. 
              Our mission is to democratize access to advanced analytics and artificial intelligence, 
              making sophisticated data science capabilities accessible to businesses of all sizes.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With expertise spanning machine learning, predictive analytics, business intelligence, 
              and custom AI solutions, we've helped organizations across industries unlock the value 
              hidden in their data and achieve measurable business outcomes.
            </p>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-foreground">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;