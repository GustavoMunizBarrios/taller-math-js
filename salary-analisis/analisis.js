console.log(salarios);

// Mediana salarial de Juanita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);

    /* Código extendido
    
        // .find nos devuelve el primer objeto que hace coincidencia 
    const persona = salarios.find((persona) => { 
        return persona.name == personaEnBusqueda;
    }) // (persona) será el objeto que tiene la propiedad name
    return persona;
    
    */
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(elemento => elemento.salario);
    console.log(salarios);

    const medianaSalarios = MainMath.calcularMediana(salarios);

    console.log(medianaSalarios);
    return medianaSalarios;
}