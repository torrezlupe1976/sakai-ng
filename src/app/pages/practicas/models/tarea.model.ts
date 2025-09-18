export interface Tarea {
    id:number;
    nombre:string;
    estado:boolean;
    prioridad?: "alta" |"media" | "baja" | "undefined";
    fechaVencimiento: Date;
}
