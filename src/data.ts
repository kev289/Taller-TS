import { Desarrollador, Repositorio, PullRequest, Issue, Proyecto } from "./models.js";

// Crear desarrolladores 
export const Dev1: Desarrollador = {
    id: 1,
    nombre: "Juan",
    role: "backend",
    seniority: "senior",
    tecnologias: [["Nodejs", 10]],
    disponibilidad: false
};

export const Dev2: Desarrollador = {
    id: 2,
    nombre: "Danna",
    role: "frontend",
    seniority: "mid",
    tecnologias: [["Angular", 5]],
    disponibilidad: true
};

export const Dev3: Desarrollador = {
    id: 3,
    nombre: "Kevin",
    role: "fullstack",
    seniority: "junior",
    tecnologias: [["React", 5]],
    disponibilidad: true
};

export const Dev4: Desarrollador = {
    id: 4,
    nombre: "Maria",
    role: "frontend",
    seniority: "senior",
    tecnologias: [["Vue", 5]],
    disponibilidad: true
};

export const Dev5: Desarrollador = {
    id: 5,
    nombre: "Daniel",
    role: "backend",
    seniority: "junior",
    tecnologias: [["Selenium", 5]],
    disponibilidad: true
}

// Crear repositorio
export const Repo1: Repositorio = {
    nombre: "Learning-swapTS",
    url: "https://github.com/Juan-Dev/Learning-swapTS",
    ramaPrincipal: "main",
    lenguajePrincipal: "TypeScript",
};

// Issues 
export const Issue1: Issue = {
    id: 1,
    titulo: "Issue 1",
    tipo: "bug",
    prioridad: "alta",
    estado: "pendiente",
    asignadoA: Dev1,
};

export const Issue2: Issue = {
    id: 2,
    titulo: "Issue 2",
    tipo: "feature",
    prioridad: "media",
    estado: "pendiente",
    asignadoA: Dev1,
};

export const Issue3: Issue = {
    id: 3,
    titulo: "Issue 3",
    tipo: "mejora",
    prioridad: "baja",
    estado: "pendiente",
    asignadoA: Dev3,
}

export const Issue4: Issue = {
    id: 4,
    titulo: "Issue 4",
    tipo: "documentacion",
    prioridad: "baja",
    estado: "pendiente",
    asignadoA: Dev4,
};

export const Issue5: Issue = {
    id: 5,
    titulo: "Issue 5",
    tipo: "bug",
    prioridad: "critica",
    estado: "pendiente",
    asignadoA: null,
};

// PR 
export const PR1: PullRequest = {
    id: 1,
    titulo: "PR 1",
    estado: "abierto",
    autor: Dev1,
    reviewers: [Dev2, Dev3],
    lineasCodigo: 100,
};

export const PR2: PullRequest = {
    id: 2,
    titulo: "PR 2",
    estado: "abierto",
    autor: Dev2,
    reviewers: [],
    lineasCodigo: 200,
};

export const PR3: PullRequest = {
    id: 3,
    titulo: "PR 3",
    estado: "abierto",
    autor: Dev3,
    reviewers: [Dev1, Dev2],
    lineasCodigo: 300,
};

export const PR4: PullRequest = {
    id: 4,
    titulo: "PR 4",
    estado: "abierto",
    autor: Dev4,
    reviewers: [Dev1, Dev2],
    lineasCodigo: 400,
};

// Crear Proyecto 
export const Project: Proyecto = {
    nombre: "Learning-swapTS",
    repositorio: Repo1,
    listaIssues: [Issue1, Issue2, Issue3, Issue4, Issue5],
    listasPR: [PR1, PR2, PR3, PR4],
    equipoDesarrolladores: [Dev1, Dev2, Dev3, Dev4]
};
