# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.36)
# Database: sellaphone
# Generation Time: 2020-06-03 16:10:29 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table contracts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contracts`;

CREATE TABLE `contracts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `price` int(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `contracts` WRITE;
/*!40000 ALTER TABLE `contracts` DISABLE KEYS */;

INSERT INTO `contracts` (`id`, `name`, `price`)
VALUES
	(1,'24 mån Guld',100),
	(2,'18 mån Silver',150),
	(3,'12 mån Student',100),
	(4,'Ingen bindningstid',250),
	(5,'Global inclusive',850);

/*!40000 ALTER TABLE `contracts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table datas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `datas`;

CREATE TABLE `datas` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `price` int(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `datas` WRITE;
/*!40000 ALTER TABLE `datas` DISABLE KEYS */;

INSERT INTO `datas` (`id`, `name`, `price`)
VALUES
	(1,'10 GB',50),
	(2,'25 GB',100),
	(3,'50 GB',150),
	(4,'100 GB',200);

/*!40000 ALTER TABLE `datas` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table orders
# ------------------------------------------------------------

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` int(3) DEFAULT NULL,
  `contract` int(3) DEFAULT NULL,
  `data` int(3) DEFAULT NULL,
  `boomy_bass_box` tinyint(1) DEFAULT NULL,
  `cloudy_insurance` tinyint(1) DEFAULT NULL,
  `recognize_face` tinyint(1) DEFAULT NULL,
  `price` int(4) DEFAULT NULL,
  `phone_number` int(15) DEFAULT NULL,
  `email` varchar(11) DEFAULT NULL,
  `street` varchar(11) DEFAULT NULL,
  `zip` int(5) DEFAULT NULL,
  `city` varchar(11) DEFAULT NULL,
  `order-placed` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;

INSERT INTO `orders` (`id`, `first_name`, `last_name`, `phone`, `contract`, `data`, `boomy_bass_box`, `cloudy_insurance`, `recognize_face`, `price`, `phone_number`, `email`, `street`, `zip`, `city`, `order-placed`)
VALUES
	(2,'Benjamin','Berglund',100,150,200,50,75,20,520,768540989,'benjaminber','2',21125,'Malmö','2019-5-17 9:13'),
	(3,'Benjamin','Berglund',100,100,200,50,75,20,300,768540989,'benjaminber','1',21125,'Malmö','2019-10-17 22:7'),
	(4,'Xenjamin','Xerglund',100,150,200,50,75,20,520,768540989,'benjaminber','2',21125,'Malmö','2019-5-17 9:13'),
	(5,'Xenjamin','Xerglund',100,150,200,50,75,20,520,768540989,'benjaminber','2',21125,'Malmö','2019-5-17 9:13'),
	(6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),
	(7,'Zenjamin','Zerglund',100,150,200,50,75,20,520,768540989,'benjaminber','2',21125,'Malmö','2019-5-17 9:13'),
	(8,'Zenjamin','Zerglund',100,150,200,50,75,20,520,768540989,'benjaminber','2',21125,'Malmö','2019-5-17 9:13'),
	(9,'Zenjamin','Zerglund',100,150,200,50,75,20,520,768540989,'benjaminber','2',21125,'Malmö','2019-5-17 9:13');

/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table phones
# ------------------------------------------------------------

DROP TABLE IF EXISTS `phones`;

CREATE TABLE `phones` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `features` varchar(255) DEFAULT '',
  `price` int(6) NOT NULL DEFAULT '0',
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `phones` WRITE;
/*!40000 ALTER TABLE `phones` DISABLE KEYS */;

INSERT INTO `phones` (`id`, `name`, `features`, `price`, `image`)
VALUES
	(1,'iPhone Z','Semitransparent telefon, 5G ready, Handhållare',200,'https://d2wsh2n0xua73e.cloudfront.net/wp-content/uploads/2019/04/iPhone-11-Concept-9.jpg'),
	(2,'iPhone G','Armbandstelefon, Projicerad skärm, Virtual touch',250,'https://images.techhive.com/images/idge/imported/imageapi/2015/01/14/17/011011-iphoney5-2-100546391-gallery.idge.jpg'),
	(3,'iPhone Mini','Retrodesign, Face recognition, Speak-easy',110,'http://www.newsmobile.in/wp-content/uploads/2017/06/iPhone1.jpg'),
	(4,'Samsung Wear','Look cool, Feel hot, Arm-processor',200,'http://cdn.images.express.co.uk/img/dynamic/59/590x/secondary/update-samsung-gear-s3-android-wear-google-801981.jpg'),
	(5,'iDrink Nokia','Smakinterface, Tungkörd, Drink the Kool-aid',100,'http://thefoxisblack.com/blogimages//samsung-display-centric-world.jpg');

/*!40000 ALTER TABLE `phones` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
