-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 07, 2016 at 06:28 PM
-- Server version: 5.5.47-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `csp`
--

-- --------------------------------------------------------

--
-- Table structure for table `csp`
--

CREATE TABLE IF NOT EXISTS `csp` (
  `CSP_ID` int(11) NOT NULL AUTO_INCREMENT,
  `document_uri` text NOT NULL,
  `referrer` text NOT NULL,
  `violated-directive` text NOT NULL,
  `original-policy` text NOT NULL,
  `blocked-uri` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`CSP_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;
