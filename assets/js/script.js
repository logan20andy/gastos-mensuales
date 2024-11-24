let listaNombresGastos = [];
let listaValoresGastos = [];
let editIndex = -1; // Índice del elemento que se está editando

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    if (nombreGasto === '' || valorGasto === '') {
        alert('Por favor, complete todos los campos');
        return;
    }

    if (editIndex === -1) {
        // Agregar nuevo gasto
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
    } else {
        // Editar gasto existente
        listaNombresGastos[editIndex] = nombreGasto;
        listaValoresGastos[editIndex] = valorGasto;
        editIndex = -1; // Reiniciar índice de edición
    }

    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('ListaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = listaValoresGastos[posicion];
        htmlLista += `<li>
            ${elemento} - S/. ${valorGasto}
            <button onclick="editarGasto(${posicion});">Editar</button>
            <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        </li>`;
        totalGastos += Number(valorGasto);
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function editarGasto(posicion) {
    // Cargar datos en los campos de entrada
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    editIndex = posicion; // Guardar índice del elemento a editar
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}
