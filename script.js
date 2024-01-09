const contas = document.querySelector(".contas");
const resultado = document.querySelector(".resultado");
const operadores = document.querySelectorAll(".operadores")
const numeros = document.querySelectorAll('.numeros');
const clear = document.querySelector(".limpar");

const result = (conta) =>{
    const resultadoCalculado = eval(conta);

    // Certifique-se de que o resultado é um número antes de exibi-lo
    if (!isNaN(resultadoCalculado)) {
        conta = resultadoCalculado;
    } else {
        // Se a expressão não for válida, você pode tratar isso de acordo
        conta = 'Erro';
    }
}

const cleanContas = () => {
    contas.innerHTML = '';
};
const addInContas = (element) => {
    contas.innerHTML += element;
};


for (const numero of numeros) {
    numero.addEventListener("click", () => {
        addInContas(numero.innerHTML);
    });
}
for (const operador of operadores) {
    operador.addEventListener("click", () => {
        addInContas(operador.innerHTML);
    });
}



clear.addEventListener("click", cleanContas);

resultado.addEventListener("click", () => {
    result(contas.innerHTML)
});
