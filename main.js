function devineLeNombre() {
  let joueur;
  const nombreAdeviner = Math.ceil(Math.random() * 10);
  prompt("Deviner le nombre entre 1 et 10");
  while (joueur != nombreAdeviner) {
    joueur = prompt("Ce n'est pas le bon chiffre essaye encore. ");
  }
  alert(`felicitations ! Le nombre etait ${nombreAdeviner} `);
}

devineLeNombre();
