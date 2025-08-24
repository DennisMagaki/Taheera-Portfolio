import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ExternalLink, Github, Plane, Trophy, GraduationCap, Lightbulb } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my achievements, projects, and contributions across academics, technology, and competitive sports.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Plane className="text-primary group-hover:scale-110 transition-transform" />
                  Drone Technology for Carbon Emission Reduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary text-primary-foreground">Environmental Tech</Badge>
                  <Badge className="bg-primary text-primary-foreground">Drone Innovation</Badge>
                  <Badge className="bg-primary text-primary-foreground">Sustainability</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Developing cutting-edge drone technology specifically designed to combat harmful carbon emissions. 
                  This innovative project combines environmental consciousness with advanced technical skills, 
                  demonstrating practical solutions to global climate challenges.
                </p>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" disabled>
                    <Github className="w-4 h-4 mr-2" />
                    Code (In Development)
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo (Coming Soon)
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Trophy className="text-accent group-hover:scale-110 transition-transform" />
                  International Chess Competition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">International Competition</Badge>
                  <Badge variant="secondary">Kenya Representative</Badge>
                  <Badge variant="secondary">Strategic Thinking</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Represented Kenya in a prestigious chess competition held in Namibia. This achievement showcases 
                  strategic thinking abilities, mental resilience, and the capacity to perform under pressure 
                  on an international stage.
                </p>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Competition Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Academic Achievements */}
          <Card className="mb-12 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <GraduationCap className="text-primary" />
                Academic Excellence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Badge className="bg-accent text-accent-foreground">Valedictorian Status</Badge>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Set to graduate as valedictorian with first-class honours from both Zetech University and USIU-Africa, 
                    demonstrating exceptional academic performance and dedication to excellence.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Competencies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Leadership</Badge>
                    <Badge variant="outline">Research</Badge>
                    <Badge variant="outline">Critical Thinking</Badge>
                    <Badge variant="outline">Innovation</Badge>
                    <Badge variant="outline">Problem Solving</Badge>
                    <Badge variant="outline">Strategic Planning</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Expertise */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Lightbulb className="text-accent" />
                Skills & Expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Technology & Innovation</h3>
                  <div className="space-y-2">
                    <Badge variant="outline" className="block w-fit">Drone Technology</Badge>
                    <Badge variant="outline" className="block w-fit">Environmental Solutions</Badge>
                    <Badge variant="outline" className="block w-fit">Research & Development</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Strategic & Analytical</h3>
                  <div className="space-y-2">
                    <Badge variant="outline" className="block w-fit">Chess Strategy</Badge>
                    <Badge variant="outline" className="block w-fit">Problem Analysis</Badge>
                    <Badge variant="outline" className="block w-fit">Decision Making</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Leadership & Communication</h3>
                  <div className="space-y-2">
                    <Badge variant="outline" className="block w-fit">International Representation</Badge>
                    <Badge variant="outline" className="block w-fit">Academic Leadership</Badge>
                    <Badge variant="outline" className="block w-fit">Cross-Cultural Communication</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;