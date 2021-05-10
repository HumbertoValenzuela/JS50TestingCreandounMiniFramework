// 3. Más Funciones a nuestro Framework
// 50. TESTING - Creando un Mini Framework
// ¿Porque utilizar?. Algunas herramientas. Y tipos de Testing

// Ventajas de hacer Testing
// Mejorará la calidad de tu Software evitando Bugs
// Probar todo los diferentes escenearios puede ser complicado o
// tardado, pero hay herramientas que automizan las pruebas de nuestros
// proyectos (Jest, Cypres).
// Liberar nuevas versiones sin las preocupaciones qe que algo salga mal

// Consideraciones con el Testing
// ¿Cuantas veces has agregado nuevas funciones a un proyecto 
// existente pero desconoces si funciona bien con lo anterior?

// Tener pruebas hará que una persona que no ha mantenido un proyecto
// conozca que es lo que hace cada parte. Incluso tenerlo como parte
// de la documentación ayudará.

// No harás pruebas de todo, más bien de como se integran diferentes
// partes de la aplicación

// Diferentes tipos de Testing
// End to End: Más interactivo, simula algunos clicks, llenar 
// formularios y asegurarse de que se muestre en pantalla lo que se desea.(Se puede realizar con Cypress)
// Integración: Revisar que múltiples partes de nuestro proyecto
// funcionen bien (Se puede realizar con Jest).
// Unit (Pruebas unitarias): Revisar que cada parte por si sola funcione bien.(Jest)
// Static(Jest): Revisar por errores en el código mientras vas escribiendo.

// Herramientas para Testing
// Cada tecnología tiene sus herramientas para Testing, pero una muy
// popular es Jest, hay versiones para VueJS, Angular, TypeScript
// Node, React, etc. Es necesario tener instalado Node.js

// Otra opción es Cypress que es una herramienta para hacer testings
// End to End, es decir, simula los click, lo que muestra en pantalla.

// 2. Creando un Mini Framework para Testing

// Test básico. Probar dos valores
// Jest ya tiene estas funciones y resultados implementados
function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

// Crear Promise para utilizar un try catch. Sino se cumple entonces,
// va al catch
async function sumaAsync(a, b) {
    return Promise.resolve( suma(a,b) );    
}

let resultado = suma(1, 2);
let esperado = 3;//Espect

// Espera que sea
expected(esperado).toBe(resultado);

// Restar
resultado = restar(10, 5);
esperado = 5;

// Espera que sea
expected(esperado).toBe(resultado);

// Espera que sea igual
expected(esperado).toEqual(resultado);

// ¿Cómo implementar la async función de test
// los parametros serán el mensaje, la función será el callback
test('Suma 10 + 20 = 30', async () => {
    // Utilizar el Promise
    const resultado = await sumaAsync(10, 20);
    const esperado = 31;
    expected(esperado).toBe(resultado);
})

// 4. Probando Código Asincrono
async function test(mensaje, callback) {
    try {
        await callback();// esperando a que se ejecuta sumaAsync
        // Si sale todo bien
        console.log(`El test: ${mensaje} se ejecutó correctamente`);

    } catch (error) {
        console.error('Error: ');
        console.error(error);
    }
}



// Función típica de Jest
function expected(esperado) {
    return {
        toBe(resultado) {
            if( resultado !== esperado) {// es diferente
                console.error(`el ${resultado} es diferente a lo esperado; la prueba no pasó`);
            } else {
                // Todo esta bien
                console.log('La prueba paso correctamente');
            }
        },
        toEqual(resultado) {
            if( resultado === esperado) {// es diferente
                console.log(`el ${resultado} es igual a lo esperado${esperado}; la prueba pasó`);
            } else {
                // Todo esta bien
                console.error('La prueba no pasó ');
            }
        }
    }
}