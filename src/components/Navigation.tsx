import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            Taheera Berita Mullyh
          </Link>
          
          <div className="flex gap-6">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                className="transition-all duration-300"
              >
                Home
              </Button>
            </Link>
            <Link to="/bio">
              <Button 
                variant={isActive("/bio") ? "default" : "ghost"}
                className="transition-all duration-300"
              >
                Bio
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                variant={isActive("/portfolio") ? "default" : "ghost"}
                className="transition-all duration-300"
              >
                Portfolio
              </Button>
            </Link>
            <Link to="/elevator-pitch">
              <Button 
                variant={isActive("/elevator-pitch") ? "default" : "ghost"}
                className="transition-all duration-300"
              >
                Elevator Pitch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;