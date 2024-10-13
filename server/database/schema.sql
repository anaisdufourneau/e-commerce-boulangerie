-- create table item (
--   id int unsigned primary key auto_increment not null,
--   title varchar(255) not null,
--   user_id int unsigned not null,
--   foreign key(user_id) references user(id)
-- );
CREATE TABLE user (
   id INT AUTO_INCREMENT PRIMARY KEY,
   username VARCHAR(50) NOT NULL,
   password VARCHAR(255) NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE,
   role VARCHAR(20) NOT NULL DEFAULT 0,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO user(username, password, email, role)
VALUES ('Anais','$argon2id$v=19$m=19456,t=2,p=1$n1iuyYb7Nq1JDRffXC0n4A$SZIepqllRVUJYcqHiJ2M6jsyeur5nG+Tpojj8+e/ymc', 'anais.dufourneau87@gmail.com', 'admin'),('user', '$argon2id$v=19$m=19456,t=2,p=1$63KffLv3FneEo8gNVl9Sow$I16Fx9yu1qKmpMQZ2exTgyvY5+RMJy23eTsNutAqrek', 'anais@outlook.fr','user');

CREATE TABLE commande (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  quantite DECIMAL (10,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE
);

CREATE TABLE categorie (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL
);

CREATE TABLE produit (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(100) NOT NULL,
prix DECIMAL (10,2),
image_url VARCHAR(255) NOT NULL DEFAULT "croissant.jpg",
description TEXT NOT NULL
);
INSERT INTO produit (id, image_url, title, description, prix) VALUES (1,'macarons.jpg', 'Coffret de 18 Macarons','Un assortiment raffiné de macarons, alliant croquant et fondant, pour un moment de pure gourmandise', 28.00), (2,'cupcakes.jpg', 'Assortiments de 4 Cupcakes', 'Quatre cupcakes aux saveurs variées, alliant douceur et gourmandise. Un plaisir sucré à savourer ou à partager !', 15.00);

CREATE TABLE commande_produit (
  commande_id INT NOT NULL,
  produit_id INT NOT NULL,
  PRIMARY KEY (commande_id, produit_id),
  FOREIGN KEY (commande_id) REFERENCES Commande(id) ON DELETE CASCADE,
  FOREIGN KEY (produit_id) REFERENCES Produit(id) ON DELETE CASCADE
);

