function transformarTexto(texto) {
    const substituicoesCodificar = {
        'a': 'enter',
        'e': 'imes',
        'i': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    let textoTransformado = '';
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase(); // Converta a letra para minúscula para evitar problemas de capitalização
        if (substituicoesCodificar[letra]) {
            textoTransformado += substituicoesCodificar[letra];
        } else {
            textoTransformado += texto[i];
        }
    }
    
    return textoTransformado;
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function criptografarTexto() {
    let textoEntrada = document.getElementById('textoEntrada').value;
    let textoCriptografado = transformarTexto(textoEntrada); // Chama a função transformarTexto para criptografar o texto
    exibirTextoNaTela('#resultado', textoCriptografado);
}
