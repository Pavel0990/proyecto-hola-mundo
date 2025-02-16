function sayHello() {
    return 'Hola Mundo';
}

console.log(sayHello());

module.exports = sayHello; // Esto es importante si deseas usar la función en las pruebas.
