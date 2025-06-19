"use client";

import { MouseEvent } from "react";
import { Button } from "./ui/button";
import { CirclePlus } from "lucide-react";
import { IFormAddProps } from "./interfaces/form.interfaces";

export default function FormAddBtn({ add, idx, disabled }: IFormAddProps) {
   const handleAdd = (e: MouseEvent<HTMLButtonElement>) => {
      add(idx, "new page");
   };

   return (
      <div className="items-center self-center bg-[url(../components/assets/dotted-stripes.svg)] bg-center w-full h-[1px] flex justify-center">
         <Button
            className="bg-transparent text-transparent group flex rounded-full w-fit cursor-pointer hover:text-slate-50 duration-300 hover:bg-primary-background hover:w-24 ease-linear"
            onClick={handleAdd}
         >
            <CirclePlus className="h-2 w-1 group-hover:w-4" />
         </Button>
      </div>
   );
}
