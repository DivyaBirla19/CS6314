-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 02, 2020 at 01:48 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `SSA`
--

-- --------------------------------------------------------

--
-- Table structure for table `marker`
--

CREATE TABLE `marker` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `address` varchar(60) NOT NULL,
  `lat` float(10,6) NOT NULL,
  `lng` float(10,6) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `marker`
--

INSERT INTO `marker` (`id`, `name`, `address`, `lat`, `lng`, `type`) VALUES
(1, 'Canyon Creek', 'Canyon Creek Park, Richardson, TX 75080', 32.980000, -96.739998, 'park'),
(2, 'Stewart Creek Park', '3700 Sparks Rd The Colony, TX 75056', 33.080002, -96.910004, 'park'),
(3, 'East Fork Park', '1901 Skyview Dr Wylie, TX 75098', 33.029999, -96.519997, 'park'),
(4, 'Clear Lake Park', '8199 County Rd 436 Princeton, TX 75407', 33.060001, -96.489998, 'park'),
(5, 'Alvin Lafons RV Parks', '5144 Co Rd 437 Princeton, TX 75407', 33.099998, -96.519997, 'park'),
(6, 'Lake Park Campground', '1900 Kingfisher Dr Lewisville, TX 75057', 33.070000, -97.000000, 'campground'),
(7, 'Spring Creek Village', '4000 Central Expy Plano, TX 75074', 33.049999, -96.699997, 'campground'),
(8, 'Hidden Cove Park and Marina', '20400 Hackberry Creek Park Rd Frisco, TX 75034', 33.130001, -96.930000, 'campground');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
