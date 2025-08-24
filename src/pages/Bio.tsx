import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { GraduationCap, Award, Plane, Trophy, Heart, Briefcase } from "lucide-react";

const Bio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Taheera
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A driven student with diverse aspirations, academic excellence, and a passion for innovation across multiple industries.
            </p>
          </div>

          {/* Main Bio Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <GraduationCap className="text-primary" />
                  Academic Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Zetech University</Badge>
                  <Badge variant="secondary">USIU-Africa</Badge>
                  <Badge className="bg-accent text-accent-foreground">Valedictorian</Badge>
                  <Badge className="bg-accent text-accent-foreground">First-Class Honours</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing studies at both Zetech University and USIU-Africa, 
                  set to graduate as valedictorian with first-class honours. This achievement 
                  reflects dedication to academic excellence and a commitment to lifelong learning.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Trophy className="text-accent" />
                  International Recognition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Chess Competitor</Badge>
                  <Badge variant="outline">Kenya Representative</Badge>
                  <Badge variant="outline">International Tournament</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Proudly represented Kenya in a chess competition in Namibia, showcasing 
                  strategic thinking, mental resilience, and the ability to perform under 
                  pressure on an international stage.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Career Aspirations */}
          <Card className="mb-12 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl text-center mb-6">Career Aspirations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <Briefcase className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">Entrepreneur</h3>
                  <p className="text-muted-foreground">
                    Aspiring to start and build successful businesses that create value and solve real-world problems.
                  </p>
                </div>
                
                <div className="text-center group">
                  <Heart className="w-16 h-16 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">Therapist</h3>
                  <p className="text-muted-foreground">
                    Passionate about mental health and helping others overcome challenges through professional therapy.
                  </p>
                </div>
                
                <div className="text-center group">
                  <Plane className="w-16 h-16 text-primary-glow mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">Air Traffic Controller</h3>
                  <p className="text-muted-foreground">
                    Drawn to the aviation industry with goals of ensuring safe and efficient air traffic management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Innovation Project */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="text-primary" />
                Innovation & Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground">Drone Technology</Badge>
                <Badge className="bg-primary text-primary-foreground">Environmental Innovation</Badge>
                <Badge className="bg-primary text-primary-foreground">Carbon Emissions</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Currently developing innovative drone technology specifically designed to combat harmful carbon emissions. 
                This project demonstrates a commitment to environmental sustainability and showcases technical expertise 
                in emerging technologies. The initiative reflects a forward-thinking approach to addressing global 
                environmental challenges through practical technological solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Bio;