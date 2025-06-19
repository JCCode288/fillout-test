"use client";

import { createContext, PropsWithChildren, useState } from "react";
import { ProviderStrategy } from "../interfaces/provider.interfaces";
import { FormItem } from "../interfaces/context.interfaces";

export const FormPagesContext = createContext<
   ProviderStrategy<FormItem[] | []>
>({
   data: [],
});

export default function FormContextProvider({
   children,
}: PropsWithChildren) {
   // persist later
   const [formPages, setFormPages] = useState(() => [
      { label: "Add page", disabled: true },
      { label: "Cover" },
      { label: "Basic info" },
      { label: "Contact info" },
      { label: "Guests" },
      { label: "Anything else?" },
      { label: "Ending" },
   ]);

   const value = {
      data: formPages,
      setter: setFormPages,
   };

   return <FormPagesContext value={value}>{children}</FormPagesContext>;
}
