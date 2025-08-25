import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Plane, Award, Users, Briefcase } from "lucide-react";
import heroImage from "@/assets/profile.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Add overlay */}
        <div className="absolute top-0 right-0 w-1/2 bg-black opacity-50 z-1 h-screen"></div>
        <div className="mr-[-550px] px-3 text-right relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent animate-fade-in">
              Taheera Berita Mullyh
            </h1>
            <p className="text-2xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Aspiring Entrepreneur • Future Therapist • <br />Air Traffic Control Specialist
            </p>
            <div className="flex flex-col sm:flex-col gap-6 justify-center mb-16">
              <Link to="/bio">
                <Button variant="hero" size="lg" className="min-w-48">
                  Discover My Journey
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="min-w-48">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                <p className="text-muted-foreground">Set to graduate as valedictorian with first-class honours</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Plane className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Aviation Innovation</h3>
                <p className="text-muted-foreground">Developing drone technology to combat carbon emissions</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-primary-glow mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">International Competitor</h3>
                <p className="text-muted-foreground">Represented Kenya in chess competition in Namibia</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <Briefcase className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">Multi-Career Vision</h3>
                <p className="text-muted-foreground">Entrepreneur, therapist, and air traffic controller aspirations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore my journey, discover my projects, and learn about my vision for the future.
          </p>
          <Link to="/elevator-pitch">
            <Button variant="hero" size="lg">
              Watch My Elevator Pitch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;