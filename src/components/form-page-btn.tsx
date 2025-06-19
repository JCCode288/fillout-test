import { useContext } from "react";
import { IFormPageBtnProps } from "./interfaces/form.interfaces";
import { Button } from "./ui/button";
import { EllipsisVertical, File } from "lucide-react";
import { DragItemContext } from "./providers/drag-n-drop.provider";

export default function FormPageBtn({
   item,
   pos,
   dndFn,
}: IFormPageBtnProps) {
   const { sourceId, setter: setSourceId } = useContext(DragItemContext);

   const handleDragStart = (e: React.DragEvent) => {
      if (!setSourceId) return;

      setSourceId(pos);
      e.dataTransfer.effectAllowed = "move";
   };

   const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();

      e.dataTransfer.dropEffect = "move";
   };

   const handleDragEnd = (e: React.DragEvent) => {
      if (!setSourceId) return;

      setSourceId(-1);
   };

   const handleDrop = (e: React.DragEvent) => {
      dndFn(sourceId, pos);
   };

   const handleOpenContext = (e: React.MouseEvent) => {
      if (!e.currentTarget) return;

      const clientRect = e.currentTarget.getBoundingClientRect();
      const rightClickEvent = new MouseEvent("contextmenu", {
         bubbles: true,
         cancelable: true,
         button: 2,
         clientX: clientRect.x,
         clientY: clientRect.y,
      });

      e.currentTarget.dispatchEvent(rightClickEvent);
   };

   return (
      <Button
         variant="ghost"
         onDragStart={handleDragStart}
         onDragOver={handleDragOver}
         onDrop={handleDrop}
         onDragEnd={handleDragEnd}
         size="sm"
         draggable
         className={`flex items-center justify-center w-full py-2 px-3 h-auto cursor-pointer group ${
            item.disabled
               ? "bg-slate-900 text-slate-500 hover:bg-slate-950 hover:text-slate-550"
               : "hover:bg-slate-700 text-slate-100 hover:text-slate-100"
         } rounded-sm`}
      >
         {!item.disabled ? <File color="orange" /> : <File color="gray" />}
         <span>{item.label}</span>
         {!item.disabled && (
            <span
               className="cursor-pointer w-0 group-hover:w-fit h-fit p-0 m-0 hover:bg-slate-600"
               onClick={handleOpenContext}
            >
               <EllipsisVertical className="text-transparent group-hover:text-slate-50 duration-150" />
            </span>
         )}
      </Button>
   );
}
