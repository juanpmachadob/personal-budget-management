# Database setup

Create and use **database**:
```bash
CREATE DATABASE `personal_budget`;
USE `personal_budget`;
```

Create **users** table:
```bash
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(128) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`)
);
```

Create **categories** table:
```bash
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
);
```

Create **movements** table:
```bash
CREATE TABLE `movements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `concept` varchar(32) NOT NULL,
  `amount` float NOT NULL,
  `date` date NOT NULL,
  `type` enum('incomes','expenses') NOT NULL,
  `userId` int DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_user_id_idx` (`userId`),
  KEY `fk_category_id_idx` (`categoryId`),
  CONSTRAINT `fkCategoryId` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fkUserId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
```