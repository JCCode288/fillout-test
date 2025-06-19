import { Dispatch, SetStateAction } from "react";

export type ContextFn = (pos: number) => void;

export type FormItem = { label: string; disabled?: boolean };

export interface IFormContextProps {
   pos: number;
   item: FormItem;
   total: number;
   setFormPages?: Dispatch<SetStateAction<FormItem[]>>;
}

export interface IDragContext {
   sourceId: number;
   setter?: Dispatch<SetStateAction<number>>;
}

export interface IFormNewProps {
   setFormPages?: Dispatch<SetStateAction<FormItem[]>>;
}
