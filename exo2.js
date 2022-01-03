// étant donnée la moyenne 'm'
// retourne l'appréciation correspondante
// (une chaîne de caractères) en utilisant return 
function appreciation(m) {

    switch (true) {
        case (m < 6):
            document.getElementById("appreciation").innerHTML = "Tres faible";
            break;
        case (m < 10):
            document.getElementById("appreciation").innerHTML = " faible";

            break;

        case (m >= 10 || m < 13):
            document.getElementById("appreciation").innerHTML = "Moyen";

            break;

        case (m >= 13 || m < 16):
            document.getElementById("appreciation").innerHTML = "Bien";
            break;

        case (m >= 16 || m < 19):
            document.getElementById("appreciation").innerHTML = "Tres Bien";

            break;
        case (m >= 19):
            document.getElementById("appreciation").innerHTML = "Excellent";

            break;

    }
}



// calcule la moyenne à partir des trois notes
// et affiche la mmoyenne et l'appréciation correspondante
function calculer() {

    let no1 = document.getElementById("note1").value;
    let no2 = document.getElementById("note2").value;
    let no3 = document.getElementById("note3").value;


    if (isNaN(no1) || isNaN(no2) || isNaN(no3)) {
        alert("erreur , entrez des chiffres pas des caracteres !! ");
        document.getElementById('note1').value = " ";
        document.getElementById("note2").value = " ";
        document.getElementById("note3").value = " ";
    } else {

        let m = (Number(no1) + Number(no2) + Number(no3)) / 3;

        document.getElementById('resultat').style.visibility = 'visible';
        document.getElementById("moyenne").innerHTML = m.toPrecision(2);
        appreciation(m);

    }

}

function reset() {
    document.getElementById('note1').value = " ";
    document.getElementById("note2").value = " ";
    document.getElementById("note3").value = " ";
}