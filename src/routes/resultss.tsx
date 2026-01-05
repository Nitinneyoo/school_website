import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/resultss')({
  component: Results,
});


function Results() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-card rounded-xl shadow-lg overflow-hidden border border-border animate-in fade-in zoom-in duration-500">
        <div className="relative h-64 bg-muted flex items-center justify-center overflow-hidden">
          <img 
            src="https://i.pinimg.com/originals/5c/5d/66/5c5d6684644136c4b1442f1db30af6bf.gif" 
            alt="Coming Soon Animation" 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="p-8 text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-primary">
            Something Amazing is Coming!
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We are working hard to bring you the results. Stay tuned for updates!
          </p>
          <div className="pt-4">
            <button 
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium shadow-sm hover:shadow-md cursor-default"
            >
              Check Back Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}