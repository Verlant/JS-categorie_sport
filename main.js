let new_button = document.createElement("button");
document.body.prepend(new_button);
new_button.textContent = "Cliquez ici, ou pas";
new_button.setAttribute("id", "button");
new_button.setAttribute("onclick", "saisie()");
function saisie() {
  let age_enfant = parseInt(prompt("Quel âge a l'enfant ?"));
  switch (age_enfant) {
    case 6:
    case 7:
      alert("Catégorie : Poussin");
      break;
    case 8:
    case 9:
      alert("Catégorie : Pupille");
      break;
    case 10:
    case 11:
      alert("Catégorie : Minime");
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      alert("Catégorie : Cadet");
      break;
    default:
      alert(
        "Erreur, veuillez entrer un nombre entier entre 6 (inclus) et 17 (inclus)"
      );
      saisie();
  }
}
