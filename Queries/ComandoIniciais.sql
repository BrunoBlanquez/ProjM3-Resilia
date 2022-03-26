CREATE DATABASE STEAMS;

USE STEAMS

SELECT*FROM STEAM 
DESC STEAM;

CREATE VIEW view_steam as select*from steam;

/*Definição de chave primaria*/
alter table steam add primary key (appid);

/*Definição de chave estrangeira*/
ALTER TABLE steam_description_data add constraint steam_appid foreign key (steam_appid) references steam(appid);




