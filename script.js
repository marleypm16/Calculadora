const contas = document.getElementById("contas");
const resultado = document.getElementById("resultado");
const operadores = document.querySelectorAll(".operadores")
const numeros = document.querySelectorAll('.numeros');
const clear = document.getElementById("clean");
let ultimoCaractere = ''

const result = () => {
    const resultadoCalculado = eval(contas.innerHTML);

    // Certifique-se de que o resultado é um número antes de exibi-lo
    if (!isNaN(resultadoCalculado)) {
        contas.innerHTML = resultadoCalculado;
    } else {
        // Se a expressão não for válida, você pode tratar isso de acordo
        contas.innerHTML = 'Erro';
    }
}

const cleanContas = () => {
    contas.innerHTML = '';
    ultimoCaractere = ''
};
const addInContas = (element) => {
    // Verifica se o último caractere foi um operador e o novo elemento é um operador
    if ((isNaN(ultimoCaractere) && isNaN(element))) {
        return;
    }

    contas.innerHTML += element;
    ultimoCaractere = element;
};


for (const numero of numeros) {
    numero.addEventListener("click", () => {
        addInContas(numero.innerHTML);
    });
}
for (const operador of operadores) {
    operador.addEventListener("click", () => {
        addInContas(operador.innerText);
    });
}



clear.addEventListener("click", cleanContas);

resultado.addEventListener("click", () => {
    result()
});
