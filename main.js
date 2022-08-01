let Tarea = (codigo, titulo, descripcion, fechaAlta, deathline, observaciones, estado) => {
    return{
        Codigo: codigo,
        Titulo: titulo,
        Descripcion: descripcion,
        FechaDeAlta: fechaAlta,
        Deathline: deathline,
        Observaciones: observaciones,
        Estado: estado
    }
}

let AlmacenamientoTareas =[
    Tarea(
		1,
		"Terminar JS Avanzado Clase 1",
		"Clase de Pescar",
		"01/08/2022",
		"15/08/2022",
        "Ninguna",
        "en-curso"
	),
    Tarea(
        2,
        "Dar de comer al pez",
        "Darle de comer al pez dorado",
        "15/08/2022",
        "16/08/2022",
        "El pez me contesto con burbujas"
    )
];
