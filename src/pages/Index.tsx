
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleJaredClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://b438-2607-fb90-4557-866e-ac57-3359-5920-3efc.ngrok-free.app/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          body: { message: 'ur face silly!' },
          recipient: { handle: 'cojovi@icloud.com' }
        })
      });
      
      const data = await response.json();
      console.log(data);
      toast({
        title: "Success!",
        description: "Message sent successfully",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const buttons = [
    { id: 1, name: "Jared", color: "neon-purple", onClick: handleJaredClick },
    { id: 2, name: "Button-2", color: "neon-pink" },
    { id: 3, name: "Button-3", color: "neon-orange" },
    { id: 4, name: "Button-4", color: "neon-blue" },
    { id: 5, name: "Button-5", color: "neon-green" },
    { id: 6, name: "Button-6", color: "neon-yellow" },
    { id: 7, name: "Button-7", color: "neon-red" },
    { id: 8, name: "Button-8", color: "neon-cyan" },
    { id: 9, name: "Button-9", color: "neon-indigo" },
    { id: 10, name: "Button-10", color: "neon-lime" },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <img 
          src="/placeholder.svg"
          alt="Logo"
          className="w-32 h-32 mx-auto mb-12"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={button.onClick}
              disabled={button.id === 1 && isLoading}
              className={`
                relative
                px-6 
                py-3 
                rounded-lg 
                text-${button.color}
                border-2 
                border-${button.color}
                transition-all 
                duration-300
                backdrop-blur-sm
                bg-black/30
                hover:bg-${button.color}/10
                hover:animate-glow
                disabled:opacity-50
                disabled:cursor-not-allowed
                transform
                hover:scale-105
                active:scale-95
              `}
            >
              <span className="relative z-10">
                {button.id === 1 && isLoading ? "Sending..." : button.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
