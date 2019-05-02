/*
var products = [
    {
        name: 'shoes',
        price: '$30',
        url: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1363&q=80',
        like: false
    },
    {
        name: 'shoes1',
        price: '$10',
        url: 'https://images.unsplash.com/photo-1494955464529-790512c65305?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        like: false
    },
    {
        name: 'tshirt',
        price: '$50',
        url: 'https://images.unsplash.com/photo-1522706604291-210a56c3b376?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: false
    },
    {
        name: 'tshirt1',
        price: '$30',
        url: 'https://images.unsplash.com/photo-1522098206893-cfda990aab1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: true
    },
    {
        name: 'tshirt2',
        price: '$10',
        url: 'https://images.unsplash.com/photo-1532296075534-cc428d395281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: false
    },
    {
        name: 'access',
        price: '$50',
        url: 'https://images.unsplash.com/photo-1475312775467-159e03aaa7cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: false
    },
    {
        name: 'access1',
        price: '$30',
        url: 'https://images.unsplash.com/photo-1545069153-6c75c6c51442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: true
    },
    {
        name: 'pantalon',
        price: '$10',
        url: 'https://images.unsplash.com/photo-1454720503269-3a35c21bebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: false
    },
    {
        name: 'veste',
        price: '$50',
        url: 'https://images.unsplash.com/photo-1542148426-a7d0430f6a06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: false
    },
    {
        name: 'veste1',
        price: '$30',
        url: 'https://images.unsplash.com/photo-1541105672995-5da70dfff7f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: true
    },
    {
        name: 'veste2',
        price: '$10',
        url: 'https://images.unsplash.com/photo-1542834759-b5dcaccbcde7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: false
    },
    {
        name: 'veste3',
        price: '$50',
        url: 'https://images.unsplash.com/photo-1542719018-ee28cbdc71ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: false
    },
    {
        name: 'lingerie',
        price: '$30',
        url: 'https://images.unsplash.com/photo-1542996966-2e31c00bae31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: true
    },
    {
        name: 'lingerie1',
        price: '$10',
        url: 'https://images.unsplash.com/photo-1518617840859-acd542e13a99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: false
    },
    {
        name: 'pyjama',
        price: '$50',
        url: 'https://tse3.mm.bing.net/th?id=OIP.ntQ2kXldZvaUjD2hd4gm-wDMEy&pid=15.1&P=0&w=300&h=300',
        like: false
    },
    {
        name: 'pyjama1',
        price: '$30',
        url: 'http://demandware.edgesuite.net/sits_pod30/dw/image/v2/AAWW_PRD/on/demandware.static/-/Sites-ELIN-master/default/dwed39215c/647818802_x.jpg?sw=1692&sh=2000',
        like: true
    },
    {
        name: 'pyjama2',
        price: '$10',
        url: 'http://www.freefisher.com/u_file/product/14_09_29/2014092909595685884.jpg',
        like: false
    },
    {
        name: 'costume',
        price: '$50',
        url: 'https://tse3.mm.bing.net/th?id=OIP.NmgMPadXKy6tK7qOp_vQZQHaLH&pid=15.1&P=0&w=300&h=300',
        like: false
    },
    {
        name: 'costume1',
        price: '$30',
        url: 'https://tse3.mm.bing.net/th?id=OIP.v7F3Y274LU-dqtkRy0ogtwHaLH&pid=15.1&P=0&w=300&h=300',
        like: true
    },
    {
        name: 'robe',
        price: '$10',
        url: 'https://images.unsplash.com/photo-1543310718-01540bebd143?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: false
    },
    {
        name: 'robe1',
        price: '$50',
        url: 'https://images.unsplash.com/photo-1551862512-aa5cf465bf32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: false
    },
    {
        name: 'robe2',
        price: '$30',
        url: 'https://images.unsplash.com/photo-1550966992-5a9ac7b8972b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60',
        like: true
    },
    {
        name: 'robe3',
        price: '$10',
        url: 'https://images.unsplash.com/photo-1517309561013-16f6e4020305?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        like: false
    },
]; 
products.forEach(function (product) {
    //JE CREE DES DIV QUI AURONT POUR ID MON PRODUCT NAME
    var elementProduct = document.createElement('div');
    elementProduct.setAttribute('id', product.name);
    container.appendChild(elementProduct);
    //JE CREE DES IMG AVEC URL DE MES PRODUITS
    var imageProduct = document.createElement('img');
    imageProduct.setAttribute('src', product.url);
    elementProduct.appendChild(imageProduct);
    //JE CREE DES ZONES DE TEXTE QUI VONT CHERCHER LE PRIX ET LE NOM
    var priceAndNameProduct = document.createElement('p');
    var priceAndName = document.createTextNode(product.name + " " + product.price);
    elementProduct.appendChild(priceAndName);
    //JE CREE UN BOUTON AVEC LA VALEUR PURCHASE
    var buy = document.createElement('input');
    var button = document.createTextNode('Purchase');
    buy.type = "button";
    buy.style = 'width: 90px; height: 20px;';
    buy.value = "PURCHASE";
    elementProduct.appendChild(buy);
    //JE LUI MET UN EVENT LISTENER 
    buy.addEventListener("click", function () {
        console.log('jai acheté');
    });
    //FAIRE FONCTIONNER MON LIKE
    var aLike = document.createElement('img');
    aLike.setAttribute('class', 'unlike');
    aLike.setAttribute('src', 'http://assets.stickpng.com/thumbs/585e4e6ccb11b227491c339e.png');
    elementProduct.appendChild(aLike);
    function displayLike(aLike, like) {
        if (like == true) {
            aLike.setAttribute('src', 'http://assets.stickpng.com/thumbs/585e4e6ccb11b227491c339e.png');
            console.log(aLike);
        } else {
            aLike.setAttribute('src', 'https://3.bp.blogspot.com/-Pok2zariw6w/WP39o3cKhmI/AAAAAAAACo4/Tn7Ju2RgcBsqqLlg3G8EZpT9x-c4y-CxgCLcB/s1600/pouce%2Bbleu.png')
        }
    }
    products.forEach(function (product) {
        var emptyLike = aLike;
            emptyLike.addEventListener('click', function () {
            product.like = !product.like;
            console.log(product.like);
            displayLike(emptyLike, product.like);
        });
    });
})*/

//LE TABLEAU JS EST PASSé DANS UNE FONCTION
function afficherPlusieursProduits(tableauDeProduits) {
    tableauDeProduits.forEach(function (product) {

        //JE CREE DES DIV QUI AURONT POUR ID MON PRODUCT NAME
        var elementProduct = document.createElement('div');
        elementProduct.setAttribute('id', product.name);
        container.appendChild(elementProduct);

        //JE CREE DES IMG AVEC URL DE MES PRODUITS
        var imageProduct = document.createElement('img');
        imageProduct.setAttribute('src', product.url);
        elementProduct.appendChild(imageProduct);

        //JE CREE DES ZONES DE TEXTE QUI VONT CHERCHER LE PRIX ET LE NOM
        var priceAndNameProduct = document.createElement('p');
        var priceAndName = document.createTextNode(product.name + " " + product.price);
        elementProduct.appendChild(priceAndName);

        //JE CREE UN BOUTON AVEC LA VALEUR PURCHASE
        var buy = document.createElement('input');
        var button = document.createTextNode('Purchase');
        buy.type = "button";
        buy.style = 'width: 70px; height: 50px;';
        buy.value = "buy";
        elementProduct.appendChild(buy);

        //JE LUI MET UN EVENT LISTENER 
        buy.addEventListener("click", function () {
            console.log('jai acheté');
        });

        //FAIRE FONCTIONNER MON LIKE
        var aLike = document.createElement('img');
        aLike.style= 'width: 70px; height: 50px;';
        aLike.setAttribute('class', 'unlike');
        aLike.setAttribute('src', 'http://assets.stickpng.com/thumbs/585e4e6ccb11b227491c339e.png');
        elementProduct.appendChild(aLike);

        //FUNCTION LIKE DISLIKE
        function displayLike(aLike, like) {

            if (like == true) {
                aLike.setAttribute('src', 'http://assets.stickpng.com/thumbs/585e4e6ccb11b227491c339e.png');
                console.log(aLike);
            } else {
                aLike.setAttribute('src', 'https://3.bp.blogspot.com/-Pok2zariw6w/WP39o3cKhmI/AAAAAAAACo4/Tn7Ju2RgcBsqqLlg3G8EZpT9x-c4y-CxgCLcB/s1600/pouce%2Bbleu.png')

            }

        }

        tableauDeProduits.forEach(function (product) {

            var emptyLike = aLike;

            emptyLike.addEventListener('click', function () {
                product.like = !product.like;
                console.log(product.like);
                displayLike(emptyLike, product.like);
            });
        });
    })
}
//FIN DE LA FONCTION QUI CONTIEN LE TABLEAU JS PRODUCTS



//ONCLICK SUR MENU DANS LE HTML
var menu = document.getElementById('menu');
menu.addEventListener('click', function () {
    console.log('jai click');
});

//listener sur le voir dans le menu html
var voir = document.getElementById("voir");
voir.addEventListener("click", function () {

    //console.log("lalala");
   
    //DEMANDER LA DB PRODUCTS AU BACK TOUTE LA TABLE PRODUCTS (BACK>>APP GET SELECT PRODUCTS)
    container.innerHTML = "";
    container2.innerHTML = "";
    $.get("http://localhost:10000", function (response, error) {
        console.log(error);
        console.log(response);
        afficherPlusieursProduits(response);
    })
});

//listener sur tshirts dans le menu html
var tshirts = document.getElementById("tshirts");
tshirts.addEventListener("click", function () {
    //APPEL LADRESSE TSHIRT VERS LE BACK (BACK>>APP GET /TSHIRT)
    //CONTAINER VIDE POUR QUE AFFICHER UNIQUEMENT LES TSHIRTS
    container.innerHTML = "";
    container2.innerHTML = "";
    $.get("http://localhost:10000/tshirt", function (response, error) {
        afficherPlusieursProduits(response);
    })
});

//listener sur pantalons dans le menu html
var pantalons = document.getElementById("pantalons");
pantalons.addEventListener("click", function () {
    //APPEL LADRESSE PANTALON VERS LE BACK (BACK>>APP GET /PANTALON)
    //CONTAINER VIDE POUR QUE AFFICHER UNIQUEMENT LES PANTALONS
    container.innerHTML = "";
    container2.innerHTML = "";
    $.get("http://localhost:10000/pantalon", function (response, error) {
        afficherPlusieursProduits(response);
    })

});

//listener sur vestes dans le menu html
var vestes = document.getElementById("vestes");
vestes.addEventListener("click", function () {
    //APPEL LADRESSE VESTE VERS LE BACK (BACK>>APP GET /VESTE)
    //CONTAINER VIDE POUR QUE AFFICHER UNIQUEMENT LES VESTE
    container.innerHTML = "";
    container2.innerHTML = "";
    $.get("http://localhost:10000/veste", function (response, error) {
        afficherPlusieursProduits(response);
    })
});

//listener sur costumes dans le menu html
var costumes = document.getElementById("costumes");
costumes.addEventListener("click", function () {
    //APPEL LADRESSE COSTUME VERS LE BACK (BACK>>APP GET /COSTUME)
    //CONTAINER VIDE POUR QUE AFFICHER UNIQUEMENT LES COSTUME
    container.innerHTML = "";
    container2.innerHTML = "";
    $.get("http://localhost:10000/costume", function (response, error) {
        afficherPlusieursProduits(response);
    })
});

//listener sur robes dans le menu html
var robes = document.getElementById("robes");
robes.addEventListener("click", function () {
    //APPEL LADRESSE ROBE VERS LE BACK (BACK>>APP GET /ROBE)
    //CONTAINER VIDE POUR QUE AFFICHER UNIQUEMENT LES ROBE
    container.innerHTML = "";
    container2.innerHTML = "";
    $.get("http://localhost:10000/robe", function (response, error) {
        afficherPlusieursProduits(response);
    })
});

//listener sur chaussure dans le menu html
var chaussures = document.getElementById("chaussures");
chaussures.addEventListener("click", function () {
    //APPEL LADRESSE CHAUSSURE VERS LE BACK (BACK>>APP GET /CHAUSSURE)
    //CONTAINER VIDE POUR QUE AFFICHER UNIQUEMENT LES CHAUSSURES
    container.innerHTML = "";
    container2.innerHTML = "";
    $.get("http://localhost:10000/chaussure", function (response, error) {
        afficherPlusieursProduits(response);
    })

});

//listener sur accessoires dans le menu html
var accessoires = document.getElementById("accessoires");
accessoires.addEventListener("click", function () {
    //APPEL LADRESSE ACCESSOIRE VERS LE BACK (BACK>>APP GET /ACCESSOIRE)
    //CONTAINER VIDE POUR QUE AFFICHER UNIQUEMENT LES ACCESSOIRES
    container.innerHTML = "";
    container2.innerHTML = "";
    $.get("http://localhost:10000/accessoire", function (response, error) {
        afficherPlusieursProduits(response);
    })
});

//listener sur pyjamas dans le menu html
var pyjamas = document.getElementById("pyjamas");
pyjamas.addEventListener("click", function () {
    //APPEL LADRESSE PYJAMA VERS LE BACK (BACK>>APP GET /PYJAMA)
    //CONTAINER VIDE POUR QUE AFFICHER UNIQUEMENT LES PYAJAMAS
    container.innerHTML = "";
    container2.innerHTML = "";
    $.get("http://localhost:10000/pyjama", function (response, error) {
        afficherPlusieursProduits(response);
    })
});

//listener sur lingeries dans le menu html
var lingeries = document.getElementById("lingeries");
lingeries.addEventListener("click", function () {
    //APPEL LADRESSE LINGERIE VERS LE BACK (BACK>>APP GET /LINGERIE)
    //CONTAINER VIDE POUR QUE AFFICHER UNIQUEMENT LES LINGERIE
    container.innerHTML = "";
    container2.innerHTML = "";
    $.get("http://localhost:10000/lingerie", function (response, error) {
        afficherPlusieursProduits(response);
    })
});

var commentaire = document.getElementById("com");
commentaire.addEventListener("click", function () {
    //APPEL LADRESSE LINGERIE VERS LE BACK (BACK>>APP GET /LINGERIE)
    //CONTAINER VIDE POUR QUE AFFICHER UNIQUEMENT LES LINGERIE
    container.innerHTML = "";
    container2.innerHTML = "";
    $.get("http://localhost:10000/comment", function (response, error) {
        response.forEach(function (com) {
            //     commentaire.insertAdjacentHTML("afterbegin", "<p>" + com.comment + "</p>");
            afficherPlusieursProduits(com.comment_name);
        })

        console.log(response);
    })
});



/*
function send() {
    // COTE FRONT

    const input = document.querySelector('#commentaire').value;
    $.post(
        'http://localhost:10000/comment', // defini l'URL d'envoie vers le serveur
        { comment_name: input }, // defini ce qu'il envoie au serveur
        function (response) { // defini la fonction execute quand le serveur repond
            console.log(response);
        });
}
*/