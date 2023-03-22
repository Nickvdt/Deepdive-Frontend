-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.27-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for deepdive_frontend
CREATE DATABASE IF NOT EXISTS `deepdive_frontend` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `deepdive_frontend`;

-- Dumping structure for table deepdive_frontend.listanswers
CREATE TABLE IF NOT EXISTS `listanswers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `approved` int(11) DEFAULT NULL,
  `one` int(11) DEFAULT NULL,
  `two` int(11) DEFAULT NULL,
  `three` int(11) DEFAULT NULL,
  `four` int(11) DEFAULT NULL,
  `five` int(11) DEFAULT NULL,
  `six` int(11) DEFAULT NULL,
  `seven` int(11) DEFAULT NULL,
  `eight` int(11) DEFAULT NULL,
  `nine` int(11) DEFAULT NULL,
  `ten` int(11) DEFAULT NULL,
  `eleven` int(11) DEFAULT NULL,
  `twelve` int(11) DEFAULT NULL,
  `thirteen` int(11) DEFAULT NULL,
  `fourteen` int(11) DEFAULT NULL,
  `fifteen` int(11) DEFAULT NULL,
  `sixteen` int(11) DEFAULT NULL,
  `seventeen` int(11) DEFAULT NULL,
  `eighteen` int(11) DEFAULT NULL,
  `nineteen` int(11) DEFAULT NULL,
  `twenty` int(11) DEFAULT NULL,
  `twenty_one` int(11) DEFAULT NULL,
  `twenty_two` int(11) DEFAULT NULL,
  `twenty_three` int(11) DEFAULT NULL,
  `twenty_four` int(11) DEFAULT NULL,
  `twenty_five` int(11) DEFAULT NULL,
  `twenty_six` int(11) DEFAULT NULL,
  `twenty_seven` int(11) DEFAULT NULL,
  `twenty_eight` int(11) DEFAULT NULL,
  `twenty_nine` int(11) DEFAULT NULL,
  `thirty` int(11) DEFAULT NULL,
  `thirty_one` int(11) DEFAULT NULL,
  `thirty_two` int(11) DEFAULT NULL,
  `thirty_three` int(11) DEFAULT NULL,
  `thirty_four` int(11) DEFAULT NULL,
  `thirty_five` int(11) DEFAULT NULL,
  `thirty_six` int(11) DEFAULT NULL,
  `thirty_seven` int(11) DEFAULT NULL,
  `thirty_eight` int(11) DEFAULT NULL,
  `thirty_nine` int(11) DEFAULT NULL,
  `forty` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
