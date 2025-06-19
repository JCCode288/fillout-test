import { IFormContextProps } from "./interfaces/context.interfaces";
import {
   ContextMenu,
   ContextMenuTrigger,
   ContextMenuContent,
   ContextMenuItem,
} from "./ui/context-menu";
import FormPageBtn from "./form-page-btn";
import { Separator } from "./ui/separator";
import FormAddBtn from "./form-add-btn";
import {
   ClipboardIcon,
   Copy,
   Flag,
   PencilLine,
   Trash2,
} from "lucide-react";

export default function FormContext({
   pos,
   item,
   total,
   setFormPages,
}: IFormContextProps) {
   const handleAddPage = (idx: number, title: string) => {
      // do either use localStorage or saving in backend in session for persistency
      if (!setFormPages) return;

      setFormPages((prevPages) => {
         const nextPages = prevPages.splice(idx + 1);

         return [...prevPages, { label: title }, ...nextPages];
      });
   };

   const handleDragDrop = (sourcePos: number, targetPos: number) => {
      if (!setFormPages || sourcePos < 0 || sourcePos === targetPos)
         return;

      setFormPages((prevPages) => {
         const [draggedItem] = prevPages.splice(sourcePos, 1);
         prevPages.splice(targetPos, 0, draggedItem);

         return [...prevPages];
      });
   };

   const firstPageFn = () => {
      alert("clicked set first page: " + pos);
   };
   const renameFn = () => {
      alert("clicked rename: " + pos);
   };
   const copyFn = () => {
      alert("clicked copy: " + pos);
   };
   const dupeFn = () => {
      alert("clicked dupe: " + pos);
   };
   const delFn = () => {
      alert("clicked delete: " + pos);
   };

   return (
      <div className="flex w-fit justify-between bg-slate-900 z-10">
         <ContextMenu>
            <ContextMenuTrigger disabled={item.disabled}>
               <FormPageBtn item={item} pos={pos} dndFn={handleDragDrop} />
            </ContextMenuTrigger>

            <ContextMenuContent className="w-60 p-3">
               <h4 className="py-1.5 font-semibold">Settings</h4>
               <Separator />
               <ContextMenuItem onClick={firstPageFn}>
                  <span>
                     <Flag color="blue" fill="blue" />
                  </span>
                  <p className="text-sm font-[500]">Set as first page</p>
               </ContextMenuItem>
               <ContextMenuItem onClick={renameFn}>
                  <span>
                     <PencilLine />
                  </span>
                  <p className="text-sm font-[500]">Rename</p>
               </ContextMenuItem>
               <ContextMenuItem onClick={copyFn}>
                  <span>
                     <ClipboardIcon />
                  </span>
                  <p className="text-sm font-[500]">Copy</p>
               </ContextMenuItem>
               <ContextMenuItem onClick={dupeFn}>
                  <span>
                     <Copy />
                  </span>
                  <p className="text-sm font-[500]">Duplicate</p>
               </ContextMenuItem>
               <Separator />
               <ContextMenuItem className="text-red-600" onClick={delFn}>
                  <span>
                     <Trash2 className="text-red-600" />
                  </span>
                  <p className="text-sm font-[500]">Delete</p>
               </ContextMenuItem>
            </ContextMenuContent>
         </ContextMenu>

         {pos !== total - 1 && (
            <FormAddBtn
               add={handleAddPage}
               idx={pos}
               disabled={item.disabled}
            />
         )}
      </div>
   );
}
