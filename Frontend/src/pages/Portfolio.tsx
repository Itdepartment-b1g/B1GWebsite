import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with AI-powered recommendations",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML"],
      category: "Web Development"
    },
    {
      title: "Smart City Dashboard",
      description: "Real-time analytics dashboard for urban management",
      technologies: ["Vue.js", "Python", "PostgreSQL", "IoT"],
      category: "Data Analytics"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive patient management and telemedicine platform",
      technologies: ["React Native", "Django", "AWS", "WebRTC"],
      category: "Healthcare"
    },
    {
      title: "Financial Trading Bot",
      description: "Automated trading system using machine learning algorithms",
      technologies: ["Python", "TensorFlow", "AWS Lambda", "REST API"],
      category: "FinTech"
    },
    {
      title: "Education Portal",
      description: "Interactive learning platform with virtual classrooms",
      technologies: ["Angular", "Firebase", "WebRTC", "TypeScript"],
      category: "Education"
    },
    {
      title: "Supply Chain Optimizer",
      description: "AI-driven supply chain optimization and tracking system",
      technologies: ["React", "FastAPI", "Docker", "Kubernetes"],
      category: "Logistics"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header alwaysShowBg={true} />
      <main className="pt-20">
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-center">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Explore our innovative projects that showcase our expertise across various industries.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-card border border-border hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;