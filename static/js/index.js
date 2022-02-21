datos = [];
const getData = () => {
    const datos = document.forms.formulario;
    const files = console.log(datos.nombre.value);
    datos = [];
};
function showData() {

    const datos = document.forms.formulario;
    console.log(datos.archivos.value);
}


function dropHandler(ev) {
    ev.preventDefault();
    if (ev.dataTransfer.items) {
        for (var i = 0; i < ev.dataTransfer.items.length; i++)
            if (ev.dataTransfer.items[i].kind === "file") {
                var file = ev.dataTransfer.items[i].getAsFile();
                datos.push(file);
            }
    } else {
        for (var i = 0; i < ev.dataTransfer.files.length; i++)
            datos.push(ev.dataTransfer.files[i]);
    }
    console.log(datos);
    removeDragData(ev);
}

function dragOverHandler(ev) {
    ev.preventDefault();
}

function removeDragData(ev) {
    if (ev.dataTransfer.items) ev.dataTransfer.items.clear();
    else ev.dataTransfer.clearData();
}
