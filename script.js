var panier = [];

console.log(panier)

function ajoute_fruit(fruit){
    panier.push(fruit)
    console.log(panier)
    return panier
}

function affiche_panier() {
    let fruits = {"banane": 0,"pomme": 0,"cerise": 0,"framboise": 0,"abricot": 0,"papaye": 0,"ananas": 0,"avocat": 0,"cassis": 0,"citron": 0,"fraise": 0,"kiwi": 0};
    let total_prix = 0;
    let prix = 0;
    for (let i = 0; i < panier.length; i++) {
        fruits[panier[i]] = fruits[panier[i]] + 1;
        let prix_texte = document.getElementById(`prix_${panier[i]}`).innerText;
        prix_texte = prix_texte.replace('€', '');
        prix = parseFloat(prix_texte);
        total_prix += prix;
//  total_prix = parseFloat(total_prix.toFixed(2)); Pour arrondir le résultat avec 2 chiffres après la virgule, mais fonctionne pas.
    }
    let listeFruits = "";
    for (let fruit in fruits) {
        if (fruits[fruit] > 0) {
            listeFruits += `Nombre de ${fruit}s: ${fruits[fruit]}<br>`;
        }
    }
    document.getElementById("liste").innerHTML = listeFruits;
    document.getElementById("total_prix").innerHTML = "TOTAL : " + total_prix + "€"
}

function sup_panier(){
    panier = [];
    document.getElementById("liste").innerHTML = "";
    document.getElementById("total_prix").innerHTML = ""; 
}





