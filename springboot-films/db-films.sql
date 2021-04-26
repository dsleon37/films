DROP SCHEMA IF EXISTS `db-films`;

CREATE SCHEMA `db-films`;
USE `db-films` ;


SET FOREIGN_KEY_CHECKS=0;


-- -----------------------------------------------------
-- Table `films`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-films`.`film` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `date` Date DEFAULT NULL,
  `actor_id` bigint DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  `director_id` bigint DEFAULT NULL,
  `filmlist_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_actor_id` FOREIGN KEY (`actor_id`) REFERENCES `actor` (`id`),
  CONSTRAINT `FK_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `FK_director_id` FOREIGN KEY (`director_id`) REFERENCES `director` (`id`),
  CONSTRAINT `FK_filmlist_id` FOREIGN KEY (`filmlist_id`) REFERENCES `filmList` (`id`)
  )
ENGINE=InnoDB
AUTO_INCREMENT = 1;


CREATE TABLE IF NOT EXISTS `db-films`.`actor` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `film_id` BIGINT(20),
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_film_id` FOREIGN KEY (`film_id`) REFERENCES `actor` (`id`)
  )
ENGINE=InnoDB
AUTO_INCREMENT = 1;



CREATE TABLE IF NOT EXISTS `db-films`.`category` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `film_id` BIGINT(20),
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_film_id` FOREIGN KEY (`film_id`) REFERENCES `actor` (`id`)
  )
ENGINE=InnoDB
AUTO_INCREMENT = 1;


CREATE TABLE IF NOT EXISTS `db-films`.`filmList` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  `film_id` BIGINT(20),
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_film_id` FOREIGN KEY (`film_id`) REFERENCES `actor` (`id`)
  )
ENGINE=InnoDB
AUTO_INCREMENT = 1;


CREATE TABLE IF NOT EXISTS `db-films`.`user` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `surname` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;


SET FOREIGN_KEY_CHECKS=1;












