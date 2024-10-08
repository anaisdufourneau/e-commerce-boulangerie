-- create table item (
--   id int unsigned primary key auto_increment not null,
--   title varchar(255) not null,
--   user_id int unsigned not null,
--   foreign key(user_id) references user(id)
-- );

CREATE TABLE client (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  paswword VARCHAR(100) NOT NULL
);

CREATE TABLE commande (
  id INT AUTO_INCREMENT PRIMARY KEY,
  client_id INT NOT NULL,
  quantite DECIMAL (10,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES Client(id) ON DELETE CASCADE
);

CREATE TABLE categorie (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL
);

CREATE TABLE produit (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
prix DECIMAL (10,2),
categorie_id INT NOT NULL,
FOREIGN KEY (categorie_id) REFERENCES Categorie(id) ON DELETE CASCADE
);
CREATE TABLE commande_produit (
  commande_id INT NOT NULL,
  produit_id INT NOT NULL,
  PRIMARY KEY (commande_id, produit_id),
  FOREIGN KEY (commande_id) REFERENCES Commande(id) ON DELETE CASCADE,
  FOREIGN KEY (produit_id) REFERENCES Produit(id) ON DELETE CASCADE
);

