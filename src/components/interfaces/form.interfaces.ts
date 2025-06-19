export type AddPageFn = (idx: number, label: string) => void;
export type DnDFn = (sourcePos: number, targetPos: number) => void;

export interface IFormAddProps {
   add: AddPageFn;
   idx: number;
   disabled?: boolean;
}

export interface IFormPageItm {
   label: string;
   disabled?: boolean;
}

export interface IFormPageBtnProps {
   item: IFormPageItm;
   pos: number;
   dndFn: DnDFn;
}
