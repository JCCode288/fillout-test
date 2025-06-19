import { Dispatch, SetStateAction } from "react";

export interface ProviderStrategy<T> {
   data: T;
   setter?: Dispatch<SetStateAction<T>>;
}
