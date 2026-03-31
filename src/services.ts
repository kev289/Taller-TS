import { Desarrollador, Issue, PullRequest, Proyecto } from "./models.js";

// --- REPORTES ---

export function reporte1(lista: Desarrollador[]) {
    for (let des = 0; des < lista.length; des++) {
        let equipo = lista[des];
        console.log("Nombre:", equipo.nombre);
        console.log("Rol:", equipo.role);
        console.log("Seniority:", equipo.seniority);
        console.log("Tecnologías:", equipo.tecnologias);
        console.log("----------------------");
    }
}

export function reporte2(lista: PullRequest[]) {
    for (let pr = 0; pr < lista.length; pr++) {
        let pullRequest = lista[pr];
        console.log("Titulo: ", pullRequest.titulo);
        console.log("Estado: ", pullRequest.estado);
        console.log("Autor: ", pullRequest.autor.nombre);
        console.log("Reviewers: ", pullRequest.reviewers.map(reviewer => reviewer.nombre).join(", "));
        console.log("Lineas de codigo: ", pullRequest.lineasCodigo);
        console.log("----------------------");
    }
}

export function reporte3(project: Proyecto) {
    let completado = 0;
    let pendiente = 0;
    let enProgreso = 0;
    let bugs = 0;
    let mejoras = 0;
    let feature = 0;
    let documentacion = 0;

    for (let i = 0; i < project.listaIssues.length; i++) {
        const issue = project.listaIssues[i];
        if (issue.estado === "completado") completado++;
        else if (issue.estado === "pendiente") pendiente++;
        else if (issue.estado === "en-progreso") enProgreso++;

        if (issue.tipo === "bug") bugs++;
        else if (issue.tipo === "mejora") mejoras++;
        else if (issue.tipo === "feature") feature++;
        else if (issue.tipo === "documentacion") documentacion++;
    }

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

export function reporte4(project: Proyecto) {
    console.log("Reporte 4 — Alertas");

    console.log("Pull Requests con demasiadas líneas (> 250):");
    let hayPRsLargos = false;
    for (let i = 0; i < project.listasPR.length; i++) {
        const pr = project.listasPR[i];
        if (pr.lineasCodigo > 250) {
            console.log(`- Alerta: El PR "${pr.titulo}" de ${pr.autor.nombre} tiene ${pr.lineasCodigo} líneas.`);
            hayPRsLargos = true;
        }
    }
    if (!hayPRsLargos) console.log("- No hay PRs excesivamente largos.");

    console.log("Issues críticos sin asignar:");
    let hayCriticosSinAsignar = false;
    for (let i = 0; i < project.listaIssues.length; i++) {
        const issue = project.listaIssues[i];
        if (issue.prioridad === "critica" && issue.asignadoA === null) {
            console.log(`- Alerta: El issue "${issue.titulo}" es crítico and no tiene nadie asignado.`);
            hayCriticosSinAsignar = true;
        }
    }
    if (!hayCriticosSinAsignar) console.log("No hay issues críticos sin asignar.");

    console.log("Desarrolladores con demasiadas asignaciones (> 2):");
    let haySaturacion = false;
    for (let d = 0; d < project.equipoDesarrolladores.length; d++) {
        const dev = project.equipoDesarrolladores[d];
        let conteoAsignaciones = 0;
        for (let i = 0; i < project.listaIssues.length; i++) {
            const issue = project.listaIssues[i];
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

// --- FUNCIONES DE FORMATEO Y AYUDA ---

export function formatearFecha(fecha: [number, number, number]) {
    const [dia, mes, año] = fecha;
    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    return `${dia} de ${meses[mes - 1]} de ${año}`;
}

export function presentacionDev(dev: Desarrollador) {
    return `Hola, soy ${dev.nombre}, ${dev.role}, ${dev.seniority}, ${dev.disponibilidad ? "Disponible" : "No disponible"}`;
}

export function estadoBug(issue: Issue) {
    return `${issue.prioridad === "alta" ? "Alta" : "Baja"}, ${issue.estado === "pendiente" ? "Pendiente" : "En progreso"}, ${issue.estado === 'completado' ? 'En produccion' : 'No esta en produccion'}`;
}

export function tamanoPR(pr: PullRequest) {
    if (pr.lineasCodigo > 250) {
        return 'Grande';
    } else if (pr.lineasCodigo > 100) {
        return 'Mediano';
    } else {
        return 'Pequeño';
    }
}

// --- BÚSQUEDA Y FILTRADO (ARROW FUNCTIONS) ---

export const buscarDevDispo = (dev: Desarrollador) => {
    return dev.disponibilidad ? "Disponible" : "No disponible";
}

export const filtrarBugPorEstado = (issue: Issue) => {
    if (issue.tipo === "bug" && issue.estado === "pendiente") {
        return `ID: ${issue.id}, Titulo: ${issue.titulo}, Estado: ${issue.estado}`;
    }
};

export const getBugsPorIdDev = (issue: Issue, dev: Desarrollador) => {
    if (issue.asignadoA && issue.asignadoA.id === dev.id) {
        return `${issue.titulo}, ${issue.asignadoA.nombre}`;
    }
};

export const getPrSinRevisores = (pr: PullRequest) => {
    return pr.reviewers.length === 0 ? pr.titulo : 'Pull Request con revisores';
};

export const getDevPorTecnologias = (dev: Desarrollador) => {
    return dev.tecnologias.length > 0 ? dev.tecnologias.map(t => t[0]) : 'Desarrollador sin tecnologias';
};

// --- ARROW FUNCTIONS DE UNA SOLA LÍNEA ---

export const seniorityDev = (dev: Desarrollador) => dev.seniority === 'senior';

export const returnBug = (issue: Issue) => issue.prioridad === 'critica' ? issue.titulo.toUpperCase() : issue.titulo;

export const returnTrue = (pr: PullRequest) => pr.estado === 'aprobado' && pr.reviewers.length > 0;

export const returnDev = (dev: Desarrollador) => (dev.id && dev.nombre) || 'Desarrollador sin id o nombre';

// --- CONSTRUCCIÓN Y CÁLCULO ---

export const crearResumen = (dev: Desarrollador, issue: Issue, pr: PullRequest) => {
    return {
        cantidadBugsAsignados: issue.asignadoA?.id === dev.id && issue.tipo === "bug",
        bugsResueltos: issue.estado === "completado" && issue.tipo === "bug",
        prsAbiertos: pr.estado === "abierto",
        disponibilidad: dev.disponibilidad,
    }
};

export const contarBugsPro = (lista: Issue[]) => {
    const conteo: Record<Issue["estado"], number> = { 
        "completado": 0, 
        "pendiente": 0, 
        "en-progreso": 0 
    };
    
    lista
        .filter(item => item.tipo === "bug")
        .forEach(bug => {
            conteo[bug.estado]++;
        });
        
    return conteo;
};

export const getTecnologias = (lista: Desarrollador[]) => {
    const tecnologias = new Set<string>();
    lista.forEach(dev => {
        dev.tecnologias.forEach(t => {
            tecnologias.add(t[0]);
        });
    });
    return Array.from(tecnologias);
};


// Imprimir un reporte del proyecto en consola con:
export function reporteGeneralProyecto(project: Proyecto) {
    console.log(`REPORTE GENERAL DEL PROYECTO: ${project.nombre.toUpperCase()}`);

    // Información general
    console.log(`--- INFORMACIÓN GENERAL ---`);
    console.log(`Nombre del Repo: ${project.repositorio.nombre}`);
    console.log(`URL: ${project.repositorio.url}`);
    console.log(`Rama Principal: ${project.repositorio.ramaPrincipal}`);
    console.log(`Lenguaje: ${project.repositorio.lenguajePrincipal}`);
    console.log(`Desarrolladores: ${project.equipoDesarrolladores.length}`);

    // Lista de bugs
    console.log(`--- LISTA DE BUGS ---`);
    const bugs = project.listaIssues.filter(issue => issue.tipo === "bug");
    if (bugs.length > 0) {
        bugs.forEach(bug => {
            console.log(`- [${bug.prioridad.toUpperCase()}] ${bug.titulo} (${bug.estado})`);
        });
    } else {
        console.log("No hay bugs registrados.");
    }

    // Lista de pull requests
    console.log(`--- LISTA DE PULL REQUESTS ---`);
    if (project.listasPR.length > 0) {
        project.listasPR.forEach(pr => {
            console.log(`- ${pr.titulo} (Autor: ${pr.autor.nombre}) - Estado: ${pr.estado}`);
        });
    } else {
        console.log("No hay pull requests registrados.");
    }
};