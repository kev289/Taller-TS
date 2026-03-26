import { Desarrollador, Repositorio, PullRequest, Issue, Proyecto } from "./types";
// Crear desarrolladores 

const Dev1: Desarrollador = {
    nombre: "Juan",
    role: "backend",
    seniority: "senior",
    tecnologias: [["Nodejs", 10]],
    disponibilidad: true
};

const Dev2: Desarrollador = {
    nombre: "Danna",
    role: "frontend",
    seniority: "mid",
    tecnologias: [["Angular", 5]],
    disponibilidad: true
};

const Dev3: Desarrollador = {
    nombre: "Kevin",
    role: "fullstack",
    seniority: "junior",
    tecnologias: [["React", 5]],
    disponibilidad: true
};

const Dev4: Desarrollador = {
    nombre: "Maria",
    role: "frontend",
    seniority: "senior",
    tecnologias: [["Vue", 5]],
    disponibilidad: true
};

// Crear repositorio

const Repo1: Repositorio = {
    nombre: "Learning-swapTS",
    url: "https://github.com/Juan-Dev/Learning-swapTS",
    ramaPrincipal: "main",
    lenguajePrincipal: "TypeScript",
};



// Issues 

const Issue1: Issue = {
    id: 1,
    titulo: "Issue 1",
    tipo: "bug",
    prioridad: "alta",
    estado: "pendiente",
    asignadoA: Dev1,
};

const Issue2: Issue = {
    id: 2,
    titulo: "Issue 2",
    tipo: "feature",
    prioridad: "media",
    estado: "pendiente",
    asignadoA: Dev1,
};

const Issue3: Issue = {
    id: 3,
    titulo: "Issue 3",
    tipo: "mejora",
    prioridad: "baja",
    estado: "pendiente",
    asignadoA: Dev3,
}

const Issue4: Issue = {
    id: 4,
    titulo: "Issue 4",
    tipo: "documentacion",
    prioridad: "baja",
    estado: "pendiente",
    asignadoA: Dev4,
};

const Issue5: Issue = {
    id: 5,
    titulo: "Issue 5",
    tipo: "bug",
    prioridad: "critica",
    estado: "pendiente",
    asignadoA: null,
};

// PR 

const PR1: PullRequest = {
    id: 1,
    titulo: "PR 1",
    estado: "abierto",
    autor: Dev1,
    reviewers: [Dev2, Dev3],
    lineasCodigo: 100,
};


const PR2: PullRequest = {
    id: 2,
    titulo: "PR 2",
    estado: "abierto",
    autor: Dev2,
    reviewers: [Dev1, Dev3],
    lineasCodigo: 200,
};

const PR3: PullRequest = {
    id: 3,
    titulo: "PR 3",
    estado: "abierto",
    autor: Dev3,
    reviewers: [Dev1, Dev2],
    lineasCodigo: 300,
};

const PR4: PullRequest = {
    id: 4,
    titulo: "PR 4",
    estado: "abierto",
    autor: Dev4,
    reviewers: [Dev1, Dev2],
    lineasCodigo: 400,
};

// Crear Proyecto 
const Proyecto: Proyecto = {
    nombre: "Learning-swapTS",
    repositorio: Repo1,
    listaIssues: [Issue1, Issue2, Issue3, Issue4, Issue5],
    listasPR: [PR1, PR2, PR3, PR4],
    equipoDesarrolladores: [Dev1, Dev2, Dev3, Dev4]
};

// Procesamiento de datos 
// Buscar por desarrollador
const reporte1: Desarrollador[] = [Dev1, Dev2, Dev3, Dev4];
for (let des = 0; des < reporte1.length; des++) {
    let equipo = reporte1[des];
    console.log("Nombre:", equipo.nombre);
    console.log("Rol:", equipo.role);
    console.log("Seniority:", equipo.seniority);
    console.log("Tecnologías:", equipo.tecnologias);
    console.log("----------------------");
};

// Reporte de PRs
const reporte2: PullRequest[] = [PR1, PR2, PR3, PR4];
for (let pr = 0; pr < reporte2.length; pr++) {
    let pullRequest = reporte2[pr];
    console.log("Titulo: ", pullRequest.titulo);
    console.log("Estado: ", pullRequest.estado);
    console.log("Autor: ", pullRequest.autor.nombre);
    console.log("Reviewers: ", pullRequest.reviewers.map(reviewer => reviewer.nombre).join(", "));
    console.log("Lineas de codigo: ", pullRequest.lineasCodigo);
    console.log("----------------------");
};

// Reporte de Bugs, Issues, Mejoras
function reporte3() {

    // Contador para saber cuantos hay
    let completado = 0;
    let pendiente = 0;
    let enProgreso = 0;
    let bugs = 0;
    let mejoras = 0;
    let feature = 0;
    let documentacion = 0;

    // For recorre el los Issues y define si son completados.
    // Tambien detecta si hay bug, feature o mejora
    for (let i = 0; i < Proyecto.listaIssues.length; i++) {
        const issue = Proyecto.listaIssues[i];
        if (issue.estado === "completado") {
            completado++;
        } else if (issue.estado === "pendiente") {
            pendiente++;
        } else if (issue.estado === "en-progreso") {
            enProgreso++;
        }
        if (issue.tipo === "bug") {
            bugs++;
        } else if (issue.tipo === "mejora") {
            mejoras++;
        } else if (issue.tipo === "feature") {
            feature++;
        } else if (issue.tipo === "documentacion") {
            documentacion++;
        }
    }
    // Imprime toda la informacion obtenida
    console.log("Cantidad de issues por estado:");
    console.log("- Completado:", completado);
    console.log("- Pendiente:", pendiente);
    console.log("- En progreso:", enProgreso);
    console.log("Cantidad de bugs vs mejoras:");
    console.log("- Bugs:", bugs);
    console.log("- Mejoras:", mejoras);
    console.log("- Feature:", feature);
    console.log("- Documentacion:", documentacion);
    console.log("----------------------");
}

// Se llama la funcion
reporte3();

// REPORTE 4 Alertas - detectar y mostrar
function reporte4() {
    console.log("Reporte 4 — Alertas");

    // PR con muchas lineas
    // Basicamente For recorre los PR y detecta si hay PR con muchas lineas
    console.log("Pull Requests con demasiadas líneas (> 250):");
    let hayPRsLargos = false;
    for (let i = 0; i < Proyecto.listasPR.length; i++) {
        const pr = Proyecto.listasPR[i];
        if (pr.lineasCodigo > 250) {
            console.log(`- Alerta: El PR "${pr.titulo}" de ${pr.autor.nombre} tiene ${pr.lineasCodigo} líneas.`);
            hayPRsLargos = true;
        }
    }
    if (!hayPRsLargos) console.log("- No hay PRs excesivamente largos.");

    // Issues críticos sin asignar
    // Funcion parecida a la anterior pero detecta si hay Issues criticos sin asignar
    console.log("Issues críticos sin asignar:");
    let hayCriticosSinAsignar = false;
    for (let i = 0; i < Proyecto.listaIssues.length; i++) {
        const issue = Proyecto.listaIssues[i];
        if (issue.prioridad === "critica" && issue.asignadoA === null) {
            console.log(`- Alerta: El issue "${issue.titulo}" es crítico y no tiene nadie asignado.`);
            hayCriticosSinAsignar = true;
        }
    }
    if (!hayCriticosSinAsignar) console.log("No hay issues críticos sin asignar.");


    // Desarrolladores con mucha carga
    console.log("Desarrolladores con demasiadas asignaciones (> 2):");
    let haySaturacion = false;
    for (let d = 0; d < Proyecto.equipoDesarrolladores.length; d++) {
        const dev = Proyecto.equipoDesarrolladores[d];
        let conteoAsignaciones = 0;

        for (let i = 0; i < Proyecto.listaIssues.length; i++) {
            const issue = Proyecto.listaIssues[i];
            if (issue.asignadoA !== null && issue.asignadoA.nombre === dev.nombre) {
                conteoAsignaciones++;
            }
        }

        if (conteoAsignaciones > 2) {
            console.log(`Alerta: El desarrollador "${dev.nombre}" tiene ${conteoAsignaciones} issues asignados.`);
            haySaturacion = true;
        }
    }
    if (!haySaturacion) console.log("No hay desarrolladores saturados.");

    console.log("----------------------");
}

// Se llama la funcion
reporte4();
