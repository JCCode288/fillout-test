import { PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { IFormNewProps } from "./interfaces/context.interfaces";

export default function FormNewBtn({ setFormPages }: IFormNewProps) {
   const handleNewPage = () => {
      if (!setFormPages) return;

      setFormPages((prev) => {
         prev.push({ label: "new page" });

         return [...prev];
      });
   };

   return (
      <Button onClick={handleNewPage}>
         <PlusCircle />
         <span>Add New Page</span>
      </Button>
   );
}
