import { createContext, PropsWithChildren, useState } from "react";
import { IDragContext } from "../interfaces/context.interfaces";

export const DragItemContext = createContext<IDragContext>({
   sourceId: -1,
});

export default function DndProvider({ children }: PropsWithChildren) {
   const [sourceId, setSourceId] = useState(() => -1);
   const value = {
      sourceId,
      setter: setSourceId,
   };

   return <DragItemContext value={value}>{children}</DragItemContext>;
}
