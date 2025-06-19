"use client";

import { useContext } from "react";
import FormContext from "./form-context";
import { FormPagesContext } from "./providers/form-pages.provider";
import DndProvider from "./providers/drag-n-drop.provider";
import FormNewBtn from "./form-new-btn";

export default function FormPageBar() {
   const { data: formPages, setter: setFormPages } =
      useContext(FormPagesContext);

   return (
      <DndProvider>
         <div className="absolute bottom-0 left-0 right-0 flex items-center border-t border-slate-700 px-2 py-2 space-x-1 md:space-x-2 text-xs md:text-sm overflow-x-auto">
            <div className="backdrop-blur-sm justify-around flex">
               {formPages.map((item, idx) => {
                  return (
                     <FormContext
                        pos={idx}
                        item={item}
                        key={`form-${idx}`}
                        total={formPages.length}
                        setFormPages={setFormPages}
                     />
                  );
               })}
            </div>
            <FormNewBtn setFormPages={setFormPages} />
         </div>
      </DndProvider>
   );
}
