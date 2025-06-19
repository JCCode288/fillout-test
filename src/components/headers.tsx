import { Pencil } from "lucide-react";
import { Button } from "./ui/button";

export default function Headers() {
   return (
      <div className="absolute top-6 left-6">
         {/* Theme Button */}
         <Button
            variant="outline"
            className="bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200 hover:text-slate-50"
         >
            <Pencil className="mr-2 h-4 w-4" />
            Theme
         </Button>
      </div>
   );
}
