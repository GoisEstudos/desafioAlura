// Função para criptografar o texto
function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Função para descriptografar o texto
function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Adiciona um evento de clique ao botão de criptografar
document.querySelector('.btnCriptografar').addEventListener('click', () => {
    // Obtém o texto de entrada do usuário
    const inputText = document.querySelector('.textInputI').value.toLowerCase();
    // Área onde o texto de saída será exibido
    const outputArea = document.querySelector('.textInputII');
    
    // Verifica se há texto de entrada
    if (inputText) {
        // Criptografa o texto de entrada
        const encryptedText = encrypt(inputText);
        // Define o conteúdo da área de saída como o texto criptografado
        outputArea.value = encryptedText;
    } else {
        // Se não houver texto de entrada, limpa a área de saída
        outputArea.value = '';
    }
});

// Adiciona um evento de clique ao botão de descriptografar
document.querySelector('.btnDescriptografar').addEventListener('click', () => {
    // Obtém o texto de entrada do usuário
    const inputText = document.querySelector('.textInputI').value.toLowerCase();
    // Área onde o texto de saída será exibido
    const outputArea = document.querySelector('.textInputII');

    // Verifica se há texto de entrada
    if (inputText) {
        // Descriptografa o texto de entrada
        const decryptedText = decrypt(inputText);
        // Define o conteúdo da área de saída como o texto descriptografado
        outputArea.value = decryptedText;
    } else {
        // Se não houver texto de entrada, limpa a área de saída
        outputArea.value = '';
    }
});

// Adiciona um evento de clique ao botão de copiar
document.querySelector('.bntCopiar').addEventListener('click', () => {
    // Área onde o texto de saída será exibido
    const outputArea = document.querySelector('.textInputII');
    // Seleciona o texto da área de saída
    outputArea.select();
    // Copia o texto para a área de transferência
    document.execCommand('copy');
    // Alerta que o texto foi copiado
    alert('Texto copiado para a área de transferência.');
});