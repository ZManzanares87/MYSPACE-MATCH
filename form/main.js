let totalPoints = 0;
const cuestionario = document.getElementById('cuestionario')
const allButtons = cuestionario.querySelectorAll('button')

allButtons.forEach(function(element){
    element.addEventListener('click', handleClick)
})

function updateTotalPoints(answerValue){
    totalPoints += answerValue
}

function handleClick(event){
    const clickedButton = event.target
    const questionBox = clickedButton.parentElement
    const answerValue = parseInt(clickedButton.dataset.points)

    clickedButton.classList.add('selected')
    questionBox.classList.add('locked')
    updateTotalPoints(answerValue)
}

function calcularResultado() {
    // Asigna un mensaje de acuerdo a la suma total de puntos
    const resultado = document.getElementById("resultado")
    var mensaje = "";
    if (totalPoints >= 0 && totalPoints < 10) {
        mensaje = "Ni de broma, olvida que existo";
    } else if (totalPoints >= 10 && totalPoints < 40) {
        mensaje = "Vas por buen camino pero sigue deconstruyendote";
    } else if (totalPoints >= 40 && totalPoints <= 60) {
        mensaje = "Eres Zori?";
    }

    // Muestra el mensaje en la página
    resultado.innerHTML = mensaje;
    resultado.classList.add("listo")
}
document.addEventListener("mousemove", function(e) {
    var customCursor = document.getElementById("custom-cursor");
    customCursor.style.left = e.clientX + "px";
    customCursor.style.top = e.clientY + "px";
  });
