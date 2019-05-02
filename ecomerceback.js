// je vais chercher le driver sqlite3 dans node_modules
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


const dbFile = 'ecomerce.db';
const db = new sqlite3.Database(dbFile);


// sans db.serialize.
// les operations sont lancées en même temps.
// le INSERT risque d'etre executé.
// avant que la creation de la table soit finie.



db.serialize(() => {

  // if ( !fs.existsSync(dbFile) ) {}




  //CREATION TABLE PRODUCTS

  db.run('CREATE TABLE Products (product_id INTEGER PRIMARY KEY AUTOINCREMENT, comment TEXT ,products TEXT, name TEXT, price TEXT, url TEXT, foreign_id INTEGER, FOREIGN KEY(foreign_id) REFERENCES Categories(categorie_id))');
  db.run('CREATE TABLE comment( comment_id INTEGER PRIMARY KEY AUTOINCREMENT, comment_name TEXT)')

  // INSERT COLUMNS >>CHAUSSURES DANS TABLE >> PRODUCTS
  // 
  db.run('INSERT INTO Products ( name, price, url, foreign_id) VALUES (?,?,?,?)', 'chaussure1', '$30', 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1363&q=80', 1);
  db.run('INSERT INTO Products (name, price, url,foreign_id) VALUES (?,?,?,?)', 'chaussure2', '$45,98', 'https://images.unsplash.com/photo-1494955464529-790512c65305?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80', 1);

  // INSERT COLUMNS >>TSHIRTS DANS TABLE >> PRODUCTS 

  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'tshirt1', '$10', 'https://images.unsplash.com/photo-1522706604291-210a56c3b376?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 2);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'tshirt2','$12', 'https://images.unsplash.com/photo-1522098206893-cfda990aab1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 2);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'tshirt3','$13', 'https://images.unsplash.com/photo-1532296075534-cc428d395281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 2);

  // INSERT COLUMNS >>ACCESSOIRES DANS TABLE >>PRODUCTS 

  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'accessoire1', '$9,99', 'https://images.unsplash.com/photo-1475312775467-159e03aaa7cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 3);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'accessoire2','$150,50', 'https://images.unsplash.com/photo-1545069153-6c75c6c51442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 3);

  // INSERT COLUMNS >>PANTALONS DANS TABLE >>PRODUCTS
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'pantalon1', '$19,99', 'https://images.unsplash.com/photo-1454720503269-3a35c21bebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 4);


  // INSERT COLUMNS >>VESTES DANS TABLE >>PRODUCTS

  db.run('INSERT INTO Products ( name, price,url ,foreign_id) VALUES (?,?,?,?)', 'veste1','$20', 'https://images.unsplash.com/photo-1542148426-a7d0430f6a06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 5);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'veste2','$39,99', 'https://images.unsplash.com/photo-1541105672995-5da70dfff7f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 5);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'veste3', '$19', 'https://images.unsplash.com/photo-1542834759-b5dcaccbcde7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 5);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'veste4','$15', 'https://images.unsplash.com/photo-1542719018-ee28cbdc71ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 5);

  //INSERT COLUMNS >>PYJAMAS  DANS TABLE >>PRODUCTS

  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'pyjama1', '$560', 'https://tse3.mm.bing.net/th?id=OIP.ntQ2kXldZvaUjD2hd4gm-wDMEy&pid=15.1&P=0&w=300&h=300', 6);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'pyjama2','$21', 'http://demandware.edgesuite.net/sits_pod30/dw/image/v2/AAWW_PRD/on/demandware.static/-/Sites-ELIN-master/default/dwed39215c/647818802_x.jpg?sw=1692&sh=2000', 6);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'pyjama3', '$1550', 'http://www.freefisher.com/u_file/product/14_09_29/2014092909595685884.jpg', 6);

  //INSERT COLUMNS >>COSTUMES TABLE >>PRODUCTS

  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'costume1','$39,99', 'https://tse3.mm.bing.net/th?id=OIP.NmgMPadXKy6tK7qOp_vQZQHaLH&pid=15.1&P=0&w=300&h=300', 7);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'costume2','$39,99', 'https://tse3.mm.bing.net/th?id=OIP.v7F3Y274LU-dqtkRy0ogtwHaLH&pid=15.1&P=0&w=300&h=300', 7);

  //INSERT COLUMNS >>ROBES TABLE >>PRODUCTS 

  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'robe1', '$15', 'https://images.unsplash.com/photo-1543310718-01540bebd143?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 8);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'robe2', '$20', 'https://images.unsplash.com/photo-1551862512-aa5cf465bf32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 8);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'robe3', '$12', 'https://images.unsplash.com/photo-1550966992-5a9ac7b8972b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 8);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'robe4', '$23', 'https://images.unsplash.com/photo-1542201912-20c8204c1869?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 8);


  //INSERT COLUMNS >>LINGERIES TABLE >>PRODUCTS 

  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'lingerie1','$60', 'https://images.unsplash.com/photo-1542996966-2e31c00bae31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 9);
  db.run('INSERT INTO Products (name, price, url, foreign_id) VALUES (?,?,?,?)', 'lingerie2', '$10', 'https://images.unsplash.com/photo-1518617840859-acd542e13a99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60', 9);


  // CREATION TABLE CATEGORIES

  // db.run('CREATE TABLE Categories (categorie_id INTEGER PRIMARY KEY AUTOINCREMENT, categories TEXT, name TEXT, price TEXT, url TEXT)'); 

  // // INSERT CULUMNS TO TABLE >>>>CATEGORIES
  // //chaussures
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'chaussure1', 'name chaussure1','price chaussure1','https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1363&q=80');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'chaussure2', 'name chaussure2', 'price chaussure2', 'https://images.unsplash.com/photo-1494955464529-790512c65305?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80');
  // //robes
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'robes1', 'name robe1', 'price robe1', 'https://images.unsplash.com/photo-1543310718-01540bebd143?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'robe2', 'name robe2', 'price robe2','https://images.unsplash.com/photo-1551862512-aa5cf465bf32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'robes3', 'name robe3', 'price robe3','https://images.unsplash.com/photo-1550966992-5a9ac7b8972b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'robe4', 'name robe4', 'price robe4', 'https://images.unsplash.com/photo-1542201912-20c8204c1869?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');

  // //accessoires
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'accessoire1', 'name accessoire1','price accessoire1','https://images.unsplash.com/photo-1475312775467-159e03aaa7cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'accessoire2', 'name accessoire2', 'price accessoire2','https://images.unsplash.com/photo-1545069153-6c75c6c51442?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // //pantalons
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'pantalon1', 'name pantalon1','price pantalon1','https://images.unsplash.com/photo-1454720503269-3a35c21bebc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // //vestes
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'veste1', 'name veste1', 'price veste1','https://images.unsplash.com/photo-1542148426-a7d0430f6a06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'veste2', 'name veste2', 'price veste2','https://images.unsplash.com/photo-1541105672995-5da70dfff7f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'veste3', 'name veste3', 'price veste3','https://images.unsplash.com/photo-1542834759-b5dcaccbcde7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'veste4', 'name veste4', 'price veste4','https://images.unsplash.com/photo-1542719018-ee28cbdc71ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // //lingeries
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'lingerie1', 'name lingerie1', 'price lingerie1','https://images.unsplash.com/photo-1542996966-2e31c00bae31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'lingerie2', 'name lingerie2', 'price lingerie2','https://images.unsplash.com/photo-1518617840859-acd542e13a99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // //pyjamas
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'pyjama1', 'name pyjama1', 'price pyjama1','https://tse3.mm.bing.net/th?id=OIP.ntQ2kXldZvaUjD2hd4gm-wDMEy&pid=15.1&P=0&w=300&h=300');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'pyjama2', 'name pyjama2', 'price pyjama2','http://demandware.edgesuite.net/sits_pod30/dw/image/v2/AAWW_PRD/on/demandware.static/-/Sites-ELIN-master/default/dwed39215c/647818802_x.jpg?sw=1692&sh=2000');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'pyjama3', 'name pyjama3', 'price pyjama3','http://www.freefisher.com/u_file/product/14_09_29/2014092909595685884.jpg');
  // //costume
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'costume1', 'name costume1', 'price costume1','https://tse3.mm.bing.net/th?id=OIP.NmgMPadXKy6tK7qOp_vQZQHaLH&pid=15.1&P=0&w=300&h=300');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'costume2', 'name costume2', 'price costume2','https://tse3.mm.bing.net/th?id=OIP.v7F3Y274LU-dqtkRy0ogtwHaLH&pid=15.1&P=0&w=300&h=300');
  // //tshirts
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'tshirt1', 'name tshirt1', 'price tshirt1','https://images.unsplash.com/photo-1522706604291-210a56c3b376?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'tshirt2', 'name tshirt2', 'price tshirt2','https://images.unsplash.com/photo-1522098206893-cfda990aab1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');
  // db.run('INSERT INTO Categories (categories, name, price, url) VALUES (?,?,?,?)', 'tshirt3', 'name tshirt3', 'price tshirt3','https://images.unsplash.com/photo-1532296075534-cc428d395281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60');

  //SELECT TABLE DANS LE TERMINAL CMD
  db.all('SELECT * FROM Products', function (error, data) {
    if (!error) console.log(data);
    else console.log(error);
  });
})

//CREATION ADRESSE TSHIRT (REPONSE AU FRONT LISTEN TSHIRT)
app.get('/tshirt', function (request, response) {
  db.all('SELECT * FROM Products WHERE foreign_id=2', function (error, data) {
    response.send(data);
  })
});


//CREATION ADRESSE LINGERIE (REPONSE AU FRONT LISTEN LINGERIE)
app.get('/lingerie', function (request, response) {
  db.all('SELECT * FROM Products WHERE foreign_id=9', function (error, data) {
    response.send(data);
  })
});

//CREATION ADRESSE ROBE (REPONSE AU FRONT LISTEN ROBE)
app.get('/robe', function (request, response) {
  db.all('SELECT * FROM Products WHERE foreign_id=8', function (error, data) {
    response.send(data);
  })
});


//CREATION ADRESSE COSTUME (REPONSE AU FRONT LISTEN COSTUME)
app.get('/costume', function (request, response) {
  db.all('SELECT * FROM Products WHERE foreign_id=7', function (error, data) {
    response.send(data);
  })
});

//CREATION ADRESSE PYJAMA (REPONSE AU FRONT LISTEN PYJAMA)
app.get('/pyjama', function (request, response) {
  db.all('SELECT * FROM Products WHERE foreign_id=6', function (error, data) {
    response.send(data);
  })
});

//CREATION ADRESSE VESTE (REPONSE AU FRONT LISTEN VESTE)
app.get('/veste', function (request, response) {
  db.all('SELECT * FROM Products WHERE foreign_id=5', function (error, data) {
    response.send(data);
  })
});

//CREATION ADRESSE ACCESSOIRES (REPONSE AU FRONT LISTEN ACCESSOIRE)
app.get('/accessoire', function (request, response) {
  db.all('SELECT * FROM Products WHERE foreign_id=3', function (error, data) {
    response.send(data);
  })
});


//CREATION ADRESSE TSHIRT (REPONSE AU FRONT LISTEN CHAUSSURES)
app.get('/chaussure', function (request, response) {
  db.all('SELECT * FROM Products WHERE foreign_id=1', function (error, data) {
    response.send(data);
  })
});

//CREATION ADRESSE PANTALONS (REPONSE AU FRONT LISTEN PANTALONS)
app.get('/pantalon', function (request, response) {
  db.all('SELECT * FROM Products WHERE foreign_id=4', function (error, data) {
    response.send(data);
  })
});


//ADRESSE DE REPONSE VERS LE FRONT ($GET LOCALHOST)
app.get('/', function (request, response) {
  db.all('SELECT * FROM Products', function (error, data) {
    response.send(data);
  })
});






//commentaire

/*


app.get('/comment', function (request, response) {
  db.all('SELECT * FROM comment', function (error, data) {
    response.send(data);
  })
});



app.post('/comment', function (request, response) {

  // J'utilise request.body pour recupere la valeur envoye par le front et l'insere ds ma BDD
  db.run('INSERT INTO comment (comment_name) VALUES (?)', // Defini la requete SQL
    request.body.comment_name, // Je defini les valeurs envoyée a la BDD
    function (error, data) { // Defini une fonction qui renvoie ma reponse au front
      response.send(request.body.comment_name);
    });

});*/

//LISTEN SUR LE PORT 10000 EN HTTP LOCAL
app.listen(10000, function (error) {
  if (!error) {
    console.log('app listening port 10000');
  }
});
