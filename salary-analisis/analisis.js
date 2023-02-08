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

// Análisis empresarial

/*empresas {
    Industrias Mokepon: {
        2018: [salarios, salarios, salarios]
        2019: [salarios, salarios, salarios]
        2020:
        2021:
    },
    Industrias Mokepon: {},
    Industrias Mokepon: {},
    Industrias Mokepon: {},

} */
const empresas = {}; // Aqui guardamos toda la información de todas las empresas que tengamos
for (persona of salarios) { //
     for (trabajo of persona.trabajos) {
        //console.log(trabajo);
        if (!empresas[trabajo.empresa]) { // Si no existe trabajo.empresa en el objeto empresas.
            empresas[trabajo.empresa] = {} // Si en efecto no existe, crea un objeto con esa información dentro.
        }
        if (!empresas[trabajo.empresa][trabajo.year]) { // Si trabajo.empresa no tiene la propiedad trabajo.year
            empresas[trabajo.empresa][trabajo.year] = []; // Si en efecto no existe, crea un array 
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    } 
}
console.log({empresas});

function medianaEmpresasYear(nombre, year) {
    if (!empresas[nombre]) {
        console.warn('La empresa no existe');

    } else if (!empresas[nombre][year]) {
        console.log('La empresa no dio salarios ese año');
    } else {
        result = MainMath.calcularMediana(empresas[nombre][year]);
        return 'La mediana de salarios de la empresa ' + nombre + ' en el año ' + year + ' es de: ' + result;
    }
}
