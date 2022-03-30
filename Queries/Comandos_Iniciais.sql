/*CRIAMOS O BANCO DE DADOS COM O NOME 'STEAMS' */
CREATE DATABASE `STEAMS`;

/*REALIZAMOS O USE PARA DEFINIR O BANCO DE DADOS QUE IRIAMOS ATUAR */
USE `STEAMS`;

/*DEMOS UM SELECT* FROM PARA VISUALIZAÇÃO DA TABELA  */
SELECT * FROM `STEAM`;

/*USAMOS O DESC PARA RETORNAR EM ORDEM*/
DESC `STEAM`;

/*CRIAMOS UMA VIEW_STEAM PARA  CONSULTAS ARMAZENADAS*/
CREATE VIEW view_steam as select*from `steam`;

/*Definição de chave primaria*/
alter table `steam` add primary key (appid);

/*Definição de chave estrangeira*/
ALTER TABLE steam_description_data add constraint steam_appid foreign key (steam_appid) references steam(appid);