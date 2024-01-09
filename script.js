const contas = document.querySelector(".contas");
const resultado = document.querySelector(".resultado");
const operadores = document.querySelectorAll(".operadores");
const numeros = document.querySelectorAll(".numeros");
const clear = document.querySelector(".limpar");
const deletar = document.querySelector(".deletar");
var ultimoCaractere = ''

class Calculadora{

    addInContas(element){
        if(isNaN(element) && isNaN(ultimoCaractere)){
            return
        }

        contas.innerHTML += element
        ultimoCaractere = element
    }

    result(){
        const resultadoCalculado = eval(contas.innerHTML);

        // Certifique-se de que o resultado é um número antes de exibi-lo
        if (!isNaN(resultadoCalculado)) {
          contas.innerHTML = resultadoCalculado;
        } else {
          // Se a expressão não for válida, você pode tratar isso de acordo
          contas.innerHTML = "Erro";
        }
    }

    clean(){
        contas.innerHTML = "";
        ultimoCaractere = "";
    }

    deletaCaractere(){
        const excludelastElement = contas.innerHTML.slice(0, -1);
        contas.innerHTML = excludelastElement;
    }
}

const calculadora = new Calculadora()

for (const numero of numeros) {
    numero.addEventListener("click", () => {
      calculadora.addInContas(numero.innerHTML);
    });
  }
  for (const operador of operadores) {
    operador.addEventListener("click", () => {
      calculadora.addInContas(operador.innerHTML);
    });
  }

clear.addEventListener("click", calculadora.clean);

resultado.addEventListener("click", () => {
  calculadora.result();
});
deletar.addEventListener("click", () => {
  calculadora.deletaCaractere
});