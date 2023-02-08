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

function proyecciónPorPersona(nombrePersona) {
    //Haremos un incremento de salario a partir de la mediana del conjunto de salarios de la persona
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    console.log(trabajos);
    // incrementos de salario:
    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    const medianaPorcentajesCrecimiento = MainMath.calcularMediana(porcentajesCrecimiento);
    console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});

    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    return 'La proyección salarial de '+ nombrePersona +' '+ 'es de '+ nuevoSalario;
}