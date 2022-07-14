import { Iusers } from "./iusers";


/* export interface Fattura {
  anno: number;
  cliente: Iusers;
  data: Date;
  id: any;
  importo: number;
  numero: number;
  stato: boolean;
} */

export interface Fattura {
  anno: number;
  cliente: string;
  data: string;
  id?: any;
  importo: number;
  numero: number;
  stato: string;
}
