let inputNombre = document.querySelector("#input-nombre");
let inputApellido = document.querySelector("#input-apellido");
let inputCorreo = document.querySelector("#input-correo");
let selectDepartamento = document.querySelector("#select-departamento");
let btnGuardar = document.querySelector("#btn-guardar");
let listaUsuarios = document.querySelector("#lista-usuarios");
let listaUsuarios2 = document.querySelector("#lista-usuarios2");
let listaUsuarios3 = document.querySelector("#lista-usuarios3");
let listaUsuarios4 = document.querySelector("#lista-usuarios4");
let listaUsuarios5 = document.querySelector("#lista-usuarios5");

let contadorAdmin = 0;
let contadorVentas = 0;
let contadorMarketing = 0;
let contadorIT = 0;

btnGuardar.addEventListener("click", () => {
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const correo = inputCorreo.value;
    const departamento = selectDepartamento.value;

    if (nombre == "" || apellido == "" || correo == "" ) {
    alert("No se puede registrar el trabajador");
    } else {
    const nodoLI = document.createElement("li");
    nodoLI.textContent = `${nombre} ${apellido}`;
    nodoLI.classList.add("list-group-item", "mt-2", "animate__animated", "animate__bounce");
    listaUsuarios.append(nodoLI); 
    }

     if (nombre == "" || apellido == "" || correo == "" ) {
    alert("No se puede registrar el trabajador");
    } else {
        if (departamento === "IT") {
    const nodoLI = document.createElement("li");
    nodoLI.textContent = `Nombre: ${nombre} , Apellido: ${apellido} , E-mail: ${correo} , Departamento: ${departamento}`;
    nodoLI.classList.add("list-group-item", "mt-2", "animate__animated", "animate__bounce");
    listaUsuarios2.append(nodoLI); }
    }

     if (nombre == "" || apellido == "" || correo == "" ) {
    alert("No se puede registrar el trabajador");
    } else {
        if (departamento === "Marketing") {
    const nodoLI = document.createElement("li");
    nodoLI.textContent = `Nombre: ${nombre} , Apellido: ${apellido} , E-mail: ${correo} , Departamento: ${departamento}`;
    nodoLI.classList.add("list-group-item", "mt-2", "animate__animated", "animate__bounce");
    listaUsuarios3.append(nodoLI); }
    }

         if (nombre == "" || apellido == "" || correo == "" ) {
    alert("No se puede registrar el trabajador");
    } else {
        if (departamento === "Ventas") {
    const nodoLI = document.createElement("li");
    nodoLI.textContent = `Nombre: ${nombre} , Apellido: ${apellido} , E-mail: ${correo} , Departamento: ${departamento}`;
    nodoLI.classList.add("list-group-item", "mt-2", "animate__animated", "animate__bounce");
    listaUsuarios4.append(nodoLI); }
    }

         if (nombre == "" || apellido == "" || correo == "" ) {
    alert("No se puede registrar el trabajador");
    } else {
        if (departamento === "Administración") {
    const nodoLI = document.createElement("li");
    nodoLI.textContent = `Nombre: ${nombre} , Apellido: ${apellido} , E-mail: ${correo} , Departamento: ${departamento}`;
    nodoLI.classList.add("list-group-item", "mt-2", "animate__animated", "animate__bounce");
    listaUsuarios5.append(nodoLI); }
    }


});