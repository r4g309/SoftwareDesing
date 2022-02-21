datos = [];
const getData = () => {
    const datos = document.forms.formulario;
    datos = [];
};
function showData() {

    var file = document.getElementById("archivos");
    for (let i = 0; i < file.files.length; i++) {
        const element = file.files[i];
        datos.push(element);
    }
    const XHR = new XMLHttpRequest(),
        FD = new FormData();

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
    removeDragData(ev);
}

function dragOverHandler(ev) {
    ev.preventDefault();
}

function removeDragData(ev) {
    if (ev.dataTransfer.items) ev.dataTransfer.items.clear();
    else ev.dataTransfer.clearData();
}
