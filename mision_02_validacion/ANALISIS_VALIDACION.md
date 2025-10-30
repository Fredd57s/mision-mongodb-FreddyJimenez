- **Validación:** **¿Por qué es preferible implementar la validación de datos a nivel de Base de Datos (con JSON Schema) en lugar de hacerlo únicamente en el código de la aplicación (backend)?**

  Implementar validaciones directamente en la base de datos mediante JSON permite mantener la integridad y consistencia de los datos que se estén procesando hacia la base de datos. A diferencia de las validaciones que se puede realizar en el backend, las estructuras y condiciones que se crean dentro del esquema en MongoDB funcionan como un sistema de control interno asegurando que no se inserten datos inválidos, incluso si se intenta hacer a través de consola, permitiendo tener un buen control y una estructura interna para cada conjunto de datos que se quiera insertar en la base de datos, y haciendo que modificar dicha estructura sea fácil al tener todo en un mismo lugar en caso de que sea necesario.

- **Relaciones 1-a-1:** **Explicaste la ficha\_veterinaria como una relación 1-a-1 embebida. ¿Por qué crees que este fue un buen enfoque? ¿Bajo qué circunstancias hubieras preferido modelarla como referenciada (en su propia colección)?**

  La propiedad ficha\_veterinaria se la creó como una relación 1-a-1 embebida dentro de la colección criaturas debido a que dichos datos pertenecen exclusivamente a una criatura, por lo que otras entidades no la deben ni pueden utilizarlas. Además, dichos datos se consultan siempre junto con la criatura, lo que hace más eficiente y rápido tenerlo dentro del mismo documento.

  La ficha\_veterinaria se la podría tomar como referenciada solo si se hubiera podido reutilizar entre otras entidades o si la cantidad de la información contenida en la misma fuera bastante y compleja.

- **Relaciones 1-a-N:** En tu modelo, usaste dos tipos de relaciones 1-a-N:
  - Guardián -> Inventario (Embebida)
  - Guardián -> Criaturas (Referenciada) 

Justifica por qué cada decisión de modelado (embebida vs. referenciada) fue la correcta para cada caso.

- Justificación: Guardián -> Inventario (Embebida)

  Se uso un modelado embebido debido a que los objetos del inventario son únicos para cada una de las entidades dentro de la colección de Guardianes, siendo dependientes del mismo y para mantener toda su información respectiva en un solo documento.

- Justificación: Guardián -> Criaturas (Referenciada)

  Se uso un modelado referenciado debido a que varios guardianes pueden estar relacionados con diferentes criaturas, por lo que su información es reutilizable, haciendo que no sea necesario añadir a cada criatura dentro de la información del guardián, ahorrando espacio y la eficiencia de las consultas.


Nota: Cada vez que se intentaba ingresar un dato invalido salía el siguiente mensaje dentro de Visual Studio Code.

![](Aspose.Words.b91e81d8-516d-4acb-8cc3-2db541741f09.001.png)
