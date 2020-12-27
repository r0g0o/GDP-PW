function mostrarocultar(x) {
    var formato = document.getElementById(x)
    var elemento = document.getElementById(x)
    if (formato.style.display == "block") {
        elemento.style.display = "none";
    }
    else {
        elemento.style.display = "block";
    }
}

function mostrartodouno() {
    document.getElementById('unouno').style.display = "block";
    document.getElementById('unodos').style.display = "block";
    document.getElementById('unotres').style.display = "block";
    document.getElementById('unocuatro').style.display = "block";
    document.getElementById('unocinco').style.display = "block";
    document.getElementById('unoseis').style.display = "block";
    document.getElementById('unosiete').style.display = "block";
}

function ocultartodouno() {
    document.getElementById('unouno').style.display = "none";
    document.getElementById('unodos').style.display = "none";
    document.getElementById('unotres').style.display = "none";
    document.getElementById('unocuatro').style.display = "none";
    document.getElementById('unocinco').style.display = "none";
    document.getElementById('unoseis').style.display = "none";
    document.getElementById('unosiete').style.display = "none";
}

function mostrartododos() {
    document.getElementById('dosuno').style.display = "block";
    document.getElementById('dosdos').style.display = "block";
    document.getElementById('dostres').style.display = "block";
    document.getElementById('doscuatro').style.display = "block";
    document.getElementById('doscinco').style.display = "block";
    document.getElementById('dosseis').style.display = "block";
    document.getElementById('dossiete').style.display = "block";
}

function ocultartododos() {
    document.getElementById('dosuno').style.display = "none";
    document.getElementById('dosdos').style.display = "none";
    document.getElementById('dostres').style.display = "none";
    document.getElementById('doscuatro').style.display = "none";
    document.getElementById('doscinco').style.display = "none";
    document.getElementById('dosseis').style.display = "none";
    document.getElementById('dossiete').style.display = "none";
}