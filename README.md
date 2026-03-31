# Aprendiendo funciones y esclareciendo conceptos de TS

## Consulta 

- *Clases* 

1. *La Analogía:* El Molde de Galletas
Imagina que tienes un molde para hacer galletas con forma de estrella:

*La Clase es el molde:* Define la forma (estrella), el tamaño y qué ingredientes puede llevar. El molde en sí no es una galleta, es la idea o el diseño de la galleta.

*El Objeto (Instancia) es la galleta:* Es lo que sale cuando usas el molde con masa real. Puedes hacer 10 galletas con el mismo molde; todas tendrán forma de estrella, pero una puede ser de chocolate, otra de vainilla y otra tener chispas.

Las Propiedades son los ingredientes: Sabor, color, decoración.

Los Métodos son las acciones: Hornear(), comer(), decorar().

2. *¿Qué es una Clase en TypeScript?*
En TypeScript, una clase es una estructura que permite crear objetos que comparten las mismas propiedades y métodos. La gran ventaja de TypeScript es que nos permite usar Tipado Fuerte y Modificadores de Acceso (como private o public) para que nuestro código sea más seguro y ordenado.


3. *Ejemplo Practico de una clase*
```typescript
class Tarea {
    // 1. Propiedades (Lo que la tarea TIENE)
    // Les asignamos un valor inicial directamente
    id: number = 0;
    titulo: string = "Sin título";
    categoria: string = "General";
    completada: boolean = false;

    // 2. Métodos (Lo que la tarea HACE)
    marcarComoHecha() {
        this.completada = true;
        console.log(`La tarea "${this.titulo}" ha sido finalizada.`);
    }

    obtenerResumen() {
        return `[${this.completada ? "X" : " "}] ${this.titulo} (${this.categoria})`;
    }
}

// --- USANDO LA CLASE ---

const miNuevaTarea = new Tarea(); // Creamos el objeto basado en el plano

// Podemos cambiar las propiedades manualmente después de crearla
miNuevaTarea.id = 1;
miNuevaTarea.titulo = "Configurar base de datos";
miNuevaTarea.categoria = "Backend";

console.log(miNuevaTarea.obtenerResumen()); // [ ] Configurar base de datos (Backend)
miNuevaTarea.marcarComoHecha();
console.log(miNuevaTarea.obtenerResumen()); // [X] Configurar base de datos (Backend)
```

- *Constructores*

1. *Analogia* 

Imagina que vas a una tienda de galletas. El molde de estrella es el mismo para todos (la Clase), pero tú le dices al panadero: "Quiero una estrella de Chocolate y que sea Grande".

El Constructor es el Panadero: Él recibe tus instrucciones justo cuando va a usar el molde.

Los Parámetros son tus instrucciones: "Chocolate", "Grande".

La Instancia es tu galleta personalizada: Ya no nace como una galleta "genérica" o "vacía", nace exactamente como tú la pediste.

2. *¿Qué es un Constructor en TypeScript?*

Es un método especial llamado *constructor* que se ejecuta automáticamente una sola vez: en el preciso instante en que escribes la palabra new.

Su función principal es inicializar las propiedades del objeto con valores reales que tú le pasas desde afuera. Esto evita tener que cambiar las propiedades línea por línea después de crear el objeto.

3. *Ejemplo Practico de un constructor*

```typescript
class Tarea {
    // 1. Propiedades (ahora sin valores por defecto obligatorios)
    id: number;
    titulo: string;
    categoria: string;
    completada: boolean;

    // 2. EL CONSTRUCTOR: Recibe los datos al nacer
    constructor(idRecibido: number, tituloRecibido: string, catRecibida: string) {
        // "this" significa: "A esta tarea que estoy creando, ponle estos datos"
        this.id = idRecibido;
        this.titulo = tituloRecibido;
        this.categoria = catRecibida;
        this.completada = false; // Podemos dejar valores fijos si queremos
    }

    // 3. Métodos (se mantienen igual)
    obtenerResumen() {
        return `[${this.completada ? "X" : " "}] ${this.titulo} (${this.categoria})`;
    }
}

// --- USANDO EL CONSTRUCTOR ---

// ¡Mira la diferencia! Ahora pasamos los datos dentro de los paréntesis
const tarea1 = new Tarea(1, "Configurar base de datos", "Backend");
const tarea2 = new Tarea(2, "Diseñar Login", "Frontend");

console.log(tarea1.obtenerResumen()); // [ ] Configurar base de datos (Backend)
console.log(tarea2.obtenerResumen()); // [ ] Diseñar Login (Frontend)
```

