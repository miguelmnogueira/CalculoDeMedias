const button = document.querySelector("button");

const averageDisplay = document.querySelector("#media");
const situationDisplay = document.querySelector("#situation");
const textDisplay = document.querySelector("textarea");

const handleClick = () => {
    const nameDisplay = document.querySelector("#name");
    const serieDisplay = document.querySelector("#serie");
    if (!nameDisplay.value || !serieDisplay.value) {
        alert("Preencha os campos nome e série");
        return;
    }

    const notasContainer = document.querySelector("#notas");
    const qntNotas = notasContainer.childElementCount;

    let grades = 0;
    for (let i = 0; i < qntNotas; i++) {
        grades +=
            parseFloat(
                notasContainer.children[i].querySelector("input")
                    .value
            ) || 0;
    }

    if (isNaN(grades)) {
        alert("Números válidos por favor");
        return;
    }

    const average = (grades / qntNotas).toFixed(2);

    averageDisplay.value = average;
    if (average >= 7) {
        situationDisplay.value = "Aprovado";
    } else if (average >= 5) {
        situationDisplay.value = "Recuperação";
    } else {
        situationDisplay.value = "Reprovado";
    }

    textDisplay.value = `O Aluno ${nameDisplay.value} da série ${
        serie.value
    }° EM está ${situationDisplay.value.toLowerCase()} com média ${
        averageDisplay.value
    }.`;
};

button.addEventListener("click", handleClick);
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleClick();
    }
});
