import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Play, Clock, Users, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ElevatorPitch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Elevator Pitch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A concise overview of my journey, aspirations, and unique value proposition.
            </p>
          </div>

          {/* Video Placeholder */}
          <Card className="mb-12 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Video Pitch (Coming Soon)</CardTitle>
            </CardHeader>
            <CardContent className="text-center py-16">
              <div className="bg-muted rounded-lg p-16 mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                <Play className="w-24 h-24 text-primary mx-auto mb-6 relative z-10" />
                <h3 className="text-2xl font-semibold mb-4 relative z-10">Elevator Pitch Video</h3>
                <p className="text-muted-foreground text-lg relative z-10">
                  Professional video pitch coming soon - showcasing my journey, achievements, and career aspirations
                </p>
              </div>
              <Button variant="hero" disabled className="mb-4">
                <Play className="w-4 h-4 mr-2" />
                Watch Pitch (Coming Soon)
              </Button>
              <p className="text-sm text-muted-foreground">
                Video pitch will be available soon. In the meantime, explore my written pitch below.
              </p>
            </CardContent>
          </Card>

          {/* Written Pitch */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="text-accent" />
                  30-Second Hook
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border-l-4 border-primary">
                  <p className="text-lg leading-relaxed font-medium">
                    "I'm Taheera Berita Mullyh - a future valedictorian developing drone technology to combat carbon emissions, 
                    with aspirations spanning entrepreneurship, therapy, and aviation. I bring international experience, 
                    academic excellence, and innovative thinking to everything I do."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="text-primary" />
                  Key Differentiators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Dual-university valedictorian status</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>International chess competitor for Kenya</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Environmental drone technology developer</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Multi-industry career vision</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="text-primary-glow" />
                  Target Audience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium">Potential Employers</p>
                    <p className="text-sm text-muted-foreground">Aviation, tech, and healthcare sectors</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium">Investors & Partners</p>
                    <p className="text-sm text-muted-foreground">Environmental tech and innovation</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium">Academic Institutions</p>
                    <p className="text-sm text-muted-foreground">Graduate programs and research</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Full Pitch */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Complete Elevator Pitch</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="bg-gradient-to-br from-card to-muted/50 p-8 rounded-lg space-y-6">
                <p className="text-lg leading-relaxed">
                  <strong>Hello, I'm Taheera Berita Mullyh.</strong> I'm a distinguished student currently pursuing studies 
                  at both Zetech University and USIU-Africa, set to graduate as valedictorian with first-class honours.
                </p>
                
                <p className="text-lg leading-relaxed">
                  What sets me apart is my unique combination of academic excellence, international experience, and 
                  innovative thinking. I've proudly represented Kenya in a chess competition in Namibia, demonstrating 
                  my strategic mindset and ability to perform under pressure on a global stage.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Currently, I'm developing cutting-edge drone technology specifically designed to combat harmful carbon 
                  emissions - a project that showcases my commitment to environmental sustainability and technical innovation. 
                  This work reflects my ability to identify global challenges and develop practical, technology-driven solutions.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My career aspirations span three dynamic fields: entrepreneurship, where I aim to build businesses that 
                  create meaningful impact; therapy, driven by my passion for mental health and helping others; and aviation, 
                  specifically as an air traffic controller, where precision and quick decision-making are paramount.
                </p>
                
                <p className="text-lg leading-relaxed font-semibold">
                  I bring a unique blend of academic excellence, international perspective, innovative problem-solving, 
                  and multi-industry vision. I'm ready to contribute to organizations that value forward-thinking leaders 
                  who can bridge technology, human connection, and operational excellence.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground mb-6">
              Interested in learning more about my journey and how I can contribute to your organization?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bio">
                <Button variant="outline" size="lg">
                  Read Full Bio
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="hero" size="lg">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ElevatorPitch;