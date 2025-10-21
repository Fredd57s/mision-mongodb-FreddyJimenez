# ANÁLISIS_NOSQL

## 1) NoSQL vs SQL — ¿Por qué MongoDB es más adecuado para el Bestiario Digital?

MongoDB es mucho más adecuado para un Bestierio Digital debido a su estructura flexible, permitiendo las siguientes características importantes y necesarias para este caso:

- **Flexibilidad del esquema:** Cada criatura puede tener atributos diferentes (alas, múltiples cabezas, estadísticas anidadas), esto brinda la posibilidad de recolectar toda la infromación posible de una criatura, sin tener que preocuparse por si las otras tengan o no dicho atributo o característica. No es necesario diseñar tablas y columnas vacías ni usar muchas tablas opcionales.
- **Estructuras anidadas y arrays:** campos como `habilidades` (array) o `estadisticas` (objeto anidado) se modelan nativamente, evitando joins complejos, y falicitanto la personalizacion al momento de tener que cambiar las características de una creatura dodne se mantentan varios objetos anidados.
- **Evolución fácil de un modelo a modificar:** Se pueden seguir agregando todos los campos que sean necesarios ya que no afectará a los demás elementos almacenados.
- **Rendimiento en lecturas documentales:** al leer una ficha de criatura, todos sus datos pueden recuperarse en una sola consulta.


En un modelo relacional se tendrían que normalizar: tablas `criatura`, `habilidad`, `estadistica`, `habitat`, etc., y usar múltiples joins para reconstruir los datos de una criatura completa, lo cual solo dificulta las consultas cuando la estructura es muy variable.


## 2) Otro tipo NoSQL: Base de datos de Grafos


**Descripción:** Las bases de datos de grafos, como por ejemplo Neo4j, están optimizadas para almacenar entidades(nodos) y relaciones(bordes) con propiedades que se utilizan para representar y almacenar datos de una forma que no permiten las bases de datos relacionales.
Dado que las conexiones se almacenan explícitamente como bordes, las consultas atraviesan las relaciones siguiendo los bordes en lugar de calcular combinaciones costosas en el momento de la consulta.


**Escenario donde sería más útil que MongoDB:** Si se necesitan recorrer conexiones profundas y hacer consultas como "camino más corto" o "entidad en la distancia/sección 3", las bases de grafos son mucho más eficientes y expresivas debido a la manera en la que se distribuyen los nodos y la forma en que se relacionan sus conexiones, formando diferentes alternativas para un resultado, ofrecionedo el más óptimo.


## 3) Caso de estudio real


**Aplicación:** Plataformas de e-commerce como eBay o apps que combinan catálogos flexibles han usado MongoDB porque permiten modelar productos con atributos muy distintos por categoría (ropa vs electrónica) sin migraciones constantes. eBay creó una lista de sugerencias de búsqueda en MongoDB, que posteriormente se indexó por prefijo de palabra y, además, con metadatos como la categoría del producto. Los múltiples índices les brindaron la flexibilidad para buscar sugerencias y procesar consultas con rapidez. Anteriormente, eBay solo podía usar un conjunto de réplicas, lo que hacía innecesaria la fragmentación. Además, los datos se almacenaban en memoria, lo que, a su vez, aumentaba la velocidad de procesamiento de las consultas.


