import { GitFork, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
   return (
      <div className="absolute bottom-[calc(env(safe-area-inset-bottom,0px)+68px)] sm:bottom-6 right-6 flex items-center space-x-3">
         <Button
            variant="outline"
            className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200 hover:text-slate-50 hidden sm:flex"
         >
            <GitFork className="mr-2 h-4 w-4" />
            Logic
         </Button>
         <Button
            variant="default"
            size="icon"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full h-10 w-10 flex-shrink-0"
            aria-label="Help"
         >
            <HelpCircle className="h-5 w-5" />
         </Button>
      </div>
   );
}
