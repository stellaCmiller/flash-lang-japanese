DROP DATABASE IF EXISTS japanese_dict;
CREATE DATABASE japanese_dict;
USE japanese_dict;

CREATE TABLE readings (
	read_id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
	ent_seq INT(11) NOT NULL,
    reb VARCHAR(191),
    re_pri VARCHAR(30)
);

CREATE TABLE kanji (
	k_id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    ent_seq INT(11) NOT NULL,
    keb VARCHAR(100),
    ke_pri VARCHAR(30)
);

CREATE TABLE definitions (
	def_id INT(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    ent_seq INT(11) NOT NULL,
    gloss VARCHAR(600) NOT NULL
);

LOAD XML INFILE 'JMdict_e'
	INTO TABLE kanji
    ROWS IDENTIFIED BY '<k_ele>';