var panier = [];

function ajoute_fruit(fruit){
    panier.push(fruit)
    console.log(panier)
    return panier
}

function nbr_fruits() {
    let nbr_bananes = 0;
    let nbr_pommes = 0;
    let nbr_cerises = 0;
    let nbr_framboises = 0;
    let nbr_abricot = 0;
    let nbr_papaye = 0;
    let nbr_ananas = 0;
    let nbr_avocat = 0;
    let nbr_cassis = 0;
    let nbr_citron = 0;
    let nbr_fraise = 0;
    let nbr_kiwi = 0;
    
    for (let i = 0; i < panier.length; i++) {
        switch (panier[i]) {
            case "banane":
                nbr_bananes++;
                break;
            case "pomme":
                nbr_pommes++;
                break;
            case "cerise":
                nbr_cerises++;
                break;
            case "framboise":
                nbr_framboises++;
                break;
            case "abricot":
                nbr_abricot++;
                break;
            case "papaye":
                nbr_papaye++;
                break;
            case "ananas":
                nbr_ananas++;
                break;
            case "avocat":
                nbr_avocat++;
                break;
            case "cassis":
                nbr_cassis++;
                break;
            case "citron":
                nbr_citron++;
                break;
            case "fraise":
                nbr_fraise++;
                break;
            case "kiwi":
                nbr_kiwi++;
                break;
        }
    }
    
    console.log("Nombre de bananes:", nbr_bananes);
    console.log("Nombre de pommes:", nbr_pommes);
    console.log("Nombre de cerises:", nbr_cerises);
    console.log("Nombre de framboises:", nbr_framboises);
    console.log("Nombre d'abricots:", nbr_abricot);
    console.log("Nombre de papayes:", nbr_papaye);
    console.log("Nombre d'ananas:", nbr_ananas);
    console.log("Nombre d'avocats:", nbr_avocat);
    console.log("Nombre de cassis:", nbr_cassis);
    console.log("Nombre de citrons:", nbr_citron);
    console.log("Nombre de fraises:", nbr_fraise);
    console.log("Nombre de kiwis:", nbr_kiwi);
}

