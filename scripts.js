// Declarações
const button = document.querySelector("#button");
const mediaDisplay = document.querySelector("#media");
const situationDisplay = document.querySelector("#situation");

const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const n3 = document.querySelector("#n3");
const n4 = document.querySelector("#n4");

// Funções
function handleClick() {
    const name = document.querySelector("#name").value;
    const serie = document.querySelector("#serie").value;

    const n1 = parseFloat(document.querySelector("#n1").value);
    const n2 = parseFloat(document.querySelector("#n2").value);
    const n3 = parseFloat(document.querySelector("#n3").value);
    const n4 = parseFloat(document.querySelector("#n4").value);

    if (!name || !serie) {
        alert("Preencha os campos nome e série corretamente.");
        return;
    }

    let media = (n1 + n2 + n3 + n4) / 4;

    if (isNaN(media)) {
        alert("Por favor, insira notas válidas.");
        return;
    }

    mediaDisplay.value = media.toFixed(2);

    if (media >= 7) situationDisplay.value = "Aprovado";
    else if (media >= 5) situationDisplay.value = "Em Recuperação";
    else if (media < 3) situationDisplay.value = "Reprovado";

    alert(
        `O aluno ${name}, do ${serie}° Ano, está ${situationDisplay.value} com média ${mediaDisplay.value}.`
    );
}

function handleMax(e) {
    let input = e.target;
    if (input.value >= 10) input.value = 10;
}

// Eventos
button.addEventListener("click", handleClick);

n1.addEventListener("keyup", (e) => {
    handleInput(e);
});
