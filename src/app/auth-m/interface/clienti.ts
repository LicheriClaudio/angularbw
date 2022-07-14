import { IndirizzoSede } from "./indirizzo-sede";

export interface Clienti {

cognomeContatto: string;
dataInserimento: Date;
dataUltimoContatto: Date;
emailAziendale: string;
emailContatto: string;
fatturatoAnnuale: string;
id:any;
indirizzoSedeLegale: IndirizzoSede
indirizzoSedeOperativa: IndirizzoSede
nomeContatto: string;
partitaIva: string;
pec: string;
ragioneSociale: string;
telefono: string;
telefonoContatto: string;
tipoCliente: string;
}
