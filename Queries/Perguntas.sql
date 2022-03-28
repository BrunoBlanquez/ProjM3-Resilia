/* 1)total de jogos da steam (Verificar a quantidades de jogos da STEAM) */
/*Selecionamos atributos name, apelidamos de total de jogos para uma melhor visualização e apontamos a tabela steam)*/
SELECT count(`name`) 
AS 'Total de Jogos da Steam' 
FROM `steam` ;

/*  2)quais são os jogos da steam  (Verificar os jogos da steam por ordem crescente) */  
SELECT `name` AS 'Jogos'
FROM `steam` 
ORDER BY `name` ASC;

/*3) quais são os top 15 jogos gratis da steam mais bem avalidaos*/ 
SELECT `name` AS 'Jogos', price As 'Preço', positive_ratings
FROM `steam`
WHERE `price` = 0 
ORDER BY `positive_ratings` desc LIMIT 15;


/*4) quais sao as desenvolvedoras dos jogos com menor raking */ 
SELECT  `developer`As'Desenvolvedoras', (`negative_ratings`) AS Rakings
FROM `steam` 
GROUP BY`developer` 
ORDER BY `negative_ratings`;
 
/*5) Quais são os 50 melhores jogos fps mais bem avaliados  */ 
SELECT steamspy_tag_data.appid, steam.name AS 'Jogos', steamspy_tag_data.fps
FROM `steamspy_tag_data`
JOIN `steam` ON steam.appid LIMIT 50;

/*6) Quais os jogos de lançamento com raking positivo? ( Interassante saber se tem um jogo novo , pq as vezes o antigo enjoa e o sistema de ranking já vem zerado)*/ 
SELECT `name` AS 'Jogos', `release_date` As 'Data de Lançamento', `positive_ratings` As 'Rakings'
FROM `steam`  where `release_date` BETWEEN '2017-01-01' AND '2023-01-01'
ORDER BY `positive_ratings` DESC;

/*7)Quais os requistos pro jogo rodar? ( Evita fustração de deixar o jogo baixando por 3 dia e no fim ele acabar não rodando no seu pc)*/ 
SELECT steam.name As'Jogos', steam_requirements_data.*
FROM `steam` 
INNER JOIN steam_requirements_data 
ON (steam_appid = appid); 


/*8)Descrição e Detalhes sobre o jogo e nota do publico ( Ajuda a ter uma ideia se o jogo vai atender a seus gostos)*/ 
SELECT steam.name, steam.steamspy_tags, steam_description_data.*, steam.positive_ratings, steam.negative_ratings 
FROM `steam`
INNER JOIN steam_description_data
ON (steam_appid = appid);

 
/*9) Quais são os jogos com o valor acima da média de preços; */
SELECT `name` , `price` FROM `steam`
WHERE Price > (SELECT FORMAT(AVG(price), 'N', 'de-de') 
AS MédiaPrecos 
FROM steam);

 
 /*10)Comparação de avaliações*/
select steam.positive_ratings as 'Avaliacao_Positiva', steam.negative_ratings as 'Avaliacao_Negativa', (positive_ratings - negative_ratings) as 'Resultado' from steam; 
 
 /*11)Headers dos jogos */
select s.appid, s.name as Nome, s.release_date as 'Data_de_Lancamento', ssi.website as Website, smd.header_image as 'Header do jogo'
from steam s
inner join steam_support_info ssi on appid = steam_appid
inner join steam_media_data smd using (steam_appid)
order by appid;

 /*12)Descrição dos jogos abaixo de $ 5,00*/
select s.appid, s.name, sdd.detailed_description, s.price
from steam s
inner join steam_description_data sdd on appid = steam_appid
where price <= 5
order by appid;
having  <= 5
 
 
 /*13) Requisitos mínimos geral*/
select s.appid, s.name, srd.minimum
from steam s
inner join steam_requirements_data srd on appid = steam_appid
order by appid;
 
  /*14 Requisitos vs Fabricante */  /* */
SELECT s.appid, s.name Nome, s.developer Fabricante, srd.minimum 'Requisitos Minimos'
FROM steam s
INNER JOIN steam_requirements_data srd ON appid = steam_appid
ORDER BY appid;
 
 /*15 Lançamento vs tempo de jogo*/
SELECT s.appid, s.name Nome, sdd.detailed_description Descricao, s.categories Categorias, s.average_playtime, s.median_playtime
FROM steam s
INNER JOIN steam_description_data sdd on appid = steam_appid
ORDER BY appid;

select * from steam;
select * from steam_description_data;
select * from steam_support_info;
select * from steam_media_data;
select * from steamspy_tag_data;
select * from steam_requirements_data;

desc steam;
desc steam_description_data;
desc steam_support_info;
desc steam_media_data;
desc steamspy_tag_data;
desc steam_requirements_data;

/*14 VALOR TOTAL DE TODOS OS JOGOS DA STEAM.  */
SELECT sum(price) FROM `steam`;

/*16) Preço  dos jogos de RPG até 50 reais*/
SELECT max(`price`) `genres_RPG`, `name` AS 'Nome'
from `steam` 
group by `price`
having max(`price`) <= 50 ;

/*17)Qual são as versões na Steam do jogo Couter Strike
datas de lançamento de cada uma delas, e quantidade de proprietários - downloads */
SELECT release_date AS 'Datadelanlançamento' , `NAME` AS 'Nome', `OWNERS` AS 'Propietários' 
FROM `steam` WHERE NAME like '%Counter-Strike%';



/*18) Nesta pergunta usamos o 'CASE' 'WHEN' 'ELSE' 'DISTINCT' , consultamos os produtos baratos,
em conta, e caros. 
Como ja sabemos que a média é 8, definimos que acima da média (8) = produtos caros
entre (5) e (8) = produtos em conta
menor que (5) = produtos baratos */

Select DISTINCT `name` AS 'Nome', `price` AS 'Preço', 
CASE 
WHEN `price` >= 8 THEN 'Produto caro'
WHEN `price` >= 5 AND `price` < 8 THEN 'Produto em conta'
ELSE 'produto barato'
END AS 'Status_Preço'
FROM `steam`;
