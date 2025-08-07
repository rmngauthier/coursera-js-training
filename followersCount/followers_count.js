let count = 0;

function increaseCount() {
count++
displayCount();
checkCountValue();
}

function displayCount() {
document.getElementById("countDisplay").innerHTML=count;
}

function checkCountValue() {
if (count === 10) {
alert("Votre publication Instagram a gagné 10 abonnés ! Félicitations !");
}
else if (count === 20) {
 alert("Votre publication Instagram a gagné 20 abonnés ! Continuez comme ça !");
    }
}