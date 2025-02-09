function couperTexte(chaine) {
    if (chaine.length > 15) { //Vérifie si la chaîne est plus longue que 15 caractères.
      return chaine.slice(0, 15) + '...'; 
      //Coupe la chaîne du caractère 0 au caractère 14 (15 caractères au total).
      // Ajoute les trois points de suspension à la fin.
    }
    return chaine;
  }
  
  // Exemple d'utilisation
  let texte = 'Lorem quisque class vestibulum';
  console.log(couperTexte(texte));  // Affiche : 'Lorem quisque c...'
  