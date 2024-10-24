function calculateCalories() {
    const weight = parseFloat(document.getElementById("weight").value);
    const speed = parseFloat(document.getElementById("speed").value);
    const time = parseFloat(document.getElementById("time").value);

    if (isNaN(weight) || isNaN(speed) || isNaN(time)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    document.getElementById("loader").style.display = "block";

    setTimeout(function() {
        const caloriesPerMinute = speed * weight * 0.0175;
        const totalCalories = caloriesPerMinute * time;

        document.getElementById("loader").style.display = "none";

        document.getElementById("result").innerHTML = `Você queimou aproximadamente <strong>${totalCalories.toFixed(2)}</strong> calorias.`;
        document.getElementById("result-modal").style.display = "block";
    }, 2000);
}

function closeModal() {
    document.getElementById("result-modal").style.display = "none";
}
