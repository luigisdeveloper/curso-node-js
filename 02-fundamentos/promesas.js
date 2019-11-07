let empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Izel'
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find( (empleado) => {
            return empleado.id === id
        } );
    
        // console.log(empleadoDB);
        if (!empleadoDB) {
            reject(`No existe un empleado con ID ${id}`)
        }else{
            resolve(empleadoDB)
        }        
    });
}

let getSalario = (empleado) => {
    return new Promise( (resolve, reject) => {
        let salarioDB = salarios.find( (salario) => {
            return salario.id === empleado.id
        });
    
        if (!salarioDB) {
            reject('No se encontro salario para el usuario ' + empleado.nombre);
        }else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(2).then( (empleado) => {
    // console.log('El empleado de la BD es: ', empleado);

    getSalario(empleado).then( (resp) => {
        console.log('El salario de ', resp.nombre, ' es de ', resp.salario );
    }, (err) => {
        console.log(err);
    });

}, (err) => {
    console.log(err);
});
