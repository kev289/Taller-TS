export type Role = "backend" | "frontend" | "fullstack";
export type Seniority = "junior" | "mid" | "senior";
export type EstadoPR = "abierto" | "aprobado" | "rechazado" | "mergeado";
export type Prioridad = "baja" | "media" | "alta" | "critica";
export type IssueTip = "bug" | "feature" | "mejora" | "documentacion";

// Tuple 
export type Tecnologia = [string, number];



export interface Desarrollador {
    nombre: string;
    role: Role;
    seniority: Seniority;
    tecnologias: Tecnologia[];
    disponibilidad: boolean;
}

export interface Repositorio {
    nombre: string;
    url: string;
    ramaPrincipal: string;
    lenguajePrincipal: string;
}

export interface PullRequest {
    id: number;
    titulo: string;
    estado: EstadoPR;
    autor: Desarrollador;
    reviewers: Desarrollador[];
    lineasCodigo: number;
}

export interface Issue {
    id: number;
    titulo: string;
    tipo: IssueTip;
    prioridad: Prioridad;
    estado: "completado" | "pendiente" | "en-progreso";
    asignadoA: Desarrollador | null;
}

export interface Proyecto {
    nombre: string;
    repositorio: Repositorio;
    listaIssues: Issue[];
    listasPR: PullRequest[];
    equipoDesarrolladores: Desarrollador[];
}