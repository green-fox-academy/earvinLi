--
--  Table structure for table `todolist`
--

CREATE TABLE IF NOT EXISTS `todolist` (
  `id` int AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `done` int(1) DEFAULT 0,
  PRIMARY KEY (`id`)
);

--
--  Dumping data for table `todolist`
--

INSERT INTO `todolist` (`id`, `text`) VALUES
(1, 'Buy some beer.'),
(2, 'Drink them all!');
