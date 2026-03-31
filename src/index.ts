import { 
    Dev1, Dev2, Dev3, Dev5, 
    Issue1, Issue3, Issue5, 
    PR1, 
    Project 
} from "./data.js";

import { 
    reporte1, reporte2, reporte3, reporte4, reporteGeneralProyecto,
    formatearFecha, presentacionDev, estadoBug, tamanoPR, 
    buscarDevDispo, filtrarBugPorEstado, getBugsPorIdDev, 
    getPrSinRevisores, getDevPorTecnologias, seniorityDev, 
    returnBug, returnTrue, returnDev, crearResumen, 
    contarBugsPro, getTecnologias 
} from "./services.js";

// --- ORCHESTRATION ---

console.log("--- REPORTE 1: DESARROLLADORES ---");
reporte1([Dev1, Dev2, Dev3, Project.equipoDesarrolladores[3]]); // [Dev1, Dev2, Dev3, Dev4]

console.log("\n--- REPORTE 2: PULL REQUESTS ---");
reporte2(Project.listasPR);

console.log("\n--- REPORTE 3: ESTADÍSTICAS DE ISSUES ---");
reporte3(Project);

console.log("\n--- REPORTE 4: ALERTAS ---");
reporte4(Project);

console.log("\n--- PRUEBAS DE FUNCIONES ---");
console.log("Fecha:", formatearFecha([30, 3, 2026]));
console.log("Presentación Dev1:", presentacionDev(Dev1));
console.log("Estado Issue1:", estadoBug(Issue1));
console.log("Tamaño PR1:", tamanoPR(PR1));

console.log("\n--- PRUEBAS DE ARROW FUNCTIONS ---");
console.log("Disponibilidad Dev2:", buscarDevDispo(Dev2));
console.log("Filtrar Bug Pendiente (Issue1):", filtrarBugPorEstado(Issue1));
console.log("Bugs por ID Dev (Issue3, Dev3):", getBugsPorIdDev(Issue3, Dev3));
console.log("PR sin Revisores (PR1):", getPrSinRevisores(PR1));
console.log("Tecnologías Dev3:", getDevPorTecnologias(Dev3));

console.log("\n--- PRUEBAS DE ARROW FUNCTIONS (UNA LÍNEA) ---");
console.log("¿Dev1 es Senior?:", seniorityDev(Dev1));
console.log("Nombre Bug Crítico (Issue5):", returnBug(Issue5));
console.log("¿PR1 aprobado y con revisores?:", returnTrue(PR1));
console.log("Nombre/ID Dev5:", returnDev(Dev5));

console.log("\n--- CONSTRUCCIÓN Y CÁLCULO ---");
console.log("Resumen Dev1:", crearResumen(Dev1, Issue1, PR1));
console.log("Conteo de Bugs por Estado:", contarBugsPro(Project.listaIssues));
console.log("Todas las Tecnologías:", getTecnologias(Project.equipoDesarrolladores));

console.log("\n--- REPORTE FINAL: GENERAL DEL PROYECTO ---");
reporteGeneralProyecto(Project);
