function sim(){
    alert("Contrato renovado bb! :)");
    document.getElementById('videoContainer').style.display = 'block';
}   

function desvia(no) {
    var btn = no;
    btn.style.position = 'absolute';
    btn.style.top = gerarPosicao(10, 90);
    btn.style.right = gerarPosicao(10, 90);
    console.log("opa, desviei...");
}

function gerarPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}

