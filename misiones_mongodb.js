// Conectarse a la base de datos
use bestiario;

// Documento 1 (insertOne)
db.criaturas.insertOne({
  nombre: "Dragón de Fuego",
  habitat: "Montañas Volcánicas",
  nivel_peligro: 10,
  dieta: ["rocas", "caballeros"],
  habilidades: ["vuelo", "aliento de fuego", "garras afiladas"],
  estadisticas: 
    { 
        ataque: 95, 
        defensa: 80 
    },
  descubierto_por: "Eldrin el Valiente",
  multitudes: 1
});

// Documentos 2-5 (insertMany)
db.criaturas.insertMany([
  {
    nombre: "Árbol Viviente",
    habitat: "Bosque Encantado",
    nivel_peligro: 5,
    dieta: ["insectos", "almas perdidas", "luz solar"],
    habilidades: ["Enredaderas", "Polinización Mágica"],
    tipo_ataques: ["físico", "mágico"],
    atributos: 
    {   
        tipo: "espiritual", 
        tamano: "gigante" 
    },
    descubierto_por: "Soldado de la Guardia Verde"
  },
  {
    nombre: "Basilisco de las Montañas",
    habitat: "Montañas Rocosas",
    nivel_peligro: 9,
    dieta: "mamiferos",
    habilidades: ["mordisco venenoso", "rugido aterrador"],
    estadisticas: 
    {   
        ataque: 88, 
        defensa: 60 
    },
    ataque_especial: "cola veneno",
    tipo_ataques: ["físico", "venenoso"],
    descubierto_por: "Cazador Kurg"
  },
  {
    nombre: "Leviatan",
    habitat: "Océano Profundo",
    nivel_peligro: 8,
    dieta: ["peces"],
    habilidades: ["canto hipnótico", "tormentas marinas", "camuflaje acuático"],
    caracteristicas: 
    {   
        patas: 0, 
        cola: true 
    },
    descubierto_por: "Navegante Selene"
  },
  {
    nombre: "Viejo Rey de Hierro",
    habitat: "Reino Hundido",
    nivel_peligro: 4,
    dieta: ["ninguna"],
    habilidades: ["fuerza bruta", "Puño de fuego"],
    estadisticas: 
    {   
        ataque: 80, 
        defensa: 120 
    },
    material: ["hierro", "lava"],
    descripcion: "Antiguo rey que gobierna sobre un reino sumergido de criaturas de fuego y metal.",
  }
]);
