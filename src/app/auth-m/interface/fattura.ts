import { Iusers } from "./iusers";


export interface Fattura {
  anno: number;
  cliente: Iusers;
  data: Date;
  id: any;
  importo: number;
  numero: number;
  stato: boolean;
}
