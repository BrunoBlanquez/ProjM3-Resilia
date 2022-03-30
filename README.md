<h1 align="center">Projeto do Módulo 03 - Steam</h1>

<p align="center">
 <a href="#Sobre">Sobre</a> •
 <a href="#Tecnologias">Tecnologias</a> • 
 <a href="#Pré-requisitos e como rodar a aplicação">Pré-requisitos e como rodar a aplicação</a> • 
 <a href="#Perguntas">Perguntas</a> •
 <a href="#Gráficos">Perguntas</a> • 
 <a href="#autores">Autores</a>
</p>

# Sobre

Para construção do projeto foi utilizado um banco de dados da Steam fornecido pela Resilia Educação, as consultas das tabelas foram realizadas no MySQL e os gráficos foram gerados usando Power BI para fins educacionais.
O projeto foi realizado com o uso de metodologias ágeis usando o trello como ferramenta de suporte.

metodologias ágeis:
- Scrum
- Kanban

# Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Git](https://git-scm.com)
- [HTML 5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS 3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node js](https://nodejs.org/en/)
- [MySQL](https://dev.mysql.com/downloads/mysql/)
- [MySql Workbench](https://dev.mysql.com/downloads/workbench/ )
- [PowerBI](https://powerbi.microsoft.com/pt-br/getting-started-with-power-bi/)
- [Visual Studio Code](https://code.visualstudio.com/)

# Pré-requisitos e como rodar a aplicação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:[Git](https://git-scm.com) e é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

# Rodando o Frontend

```bash
# Clone este repositório
$ git clone git@github.com:BrunoBlanquez/ProjM3-Resilia.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd ProjM3-Resilia

# Abrir projeto no vscode
$ code .

# Acesse o arquivo dbConection.js que está em src/Infra/database/dbConnection.js e preencha com os seus dados o USUARIO:SENHADOBANCO
const connection = await mysql.createConnection('mysql://USUARIO:SENHADOBANCO@localhost:3306/NOMEDOBANCO');

# No terminal do VsCode coloque o comando
node src\Infra\routes\routes.js

# Execute o index.html
selecione o index.htm, vá em Executar, iniciar depuração ou use a tecla F5
  
```

# Perguntas

 - Total de jogos da steam?
 - Quais são os jogos da steam?
 - Quais são os top 15 jogos grátis da steam mais bem avalidaos?
 - Quais são as desenvolvedoras dos jogos com menor ranking? 
 - Quais são os 50 melhores jogos do gênero fps mais bem avaliados?
 - Quais os jogos de lançamento com raking positivo? ( Interassante saber se tem um jogo novo , pq as vezes o antigo enjoa e o sistema de ranking já vem zerado)
 - Quais os requistos pro jogo rodar? ( Evita fustração de deixar o jogo baixando por 3 dia e no fim ele acabar não rodando no seu pc)
 - Descrição e Detalhes sobre o jogo e nota do publico ( Ajuda a ter uma ideia se o jogo vai atender a seus gostos)
 - Quais são os jogos com o valor acima da média de preços?
 - Comparação de avaliações
 - Headers dos jogos
 - Descrição dos jogos abaixo de $ 5,00
 - Requisitos mínimos no geral
 - Requisitos vs Fabricante
 - Lançamento vs tempo de jogo
 - O valor total de todos os jogos da steam?
 - Preço dos jogos de RPG até 50 reais?
 - Quais são as versões do jogo Couter Strike que estão na Steam, datas de lançamento de cada uma delas quantidade de proprietários e downloads?

# Gráficos

Gráficos gerados pelo Power Bi

![img](https://raw.githubusercontent.com/BrunoBlanquez/ProjM3-Resilia/main/img/Desenv.%20com%20menor%20ranking.png)

![img](https://raw.githubusercontent.com/BrunoBlanquez/ProjM3-Resilia/main/img/Valor%20acima%20da%20media.png)

![img](https://raw.githubusercontent.com/BrunoBlanquez/ProjM3-Resilia/main/img/lancamento%20vs%20tempo%20de%20jogo.png)

![img](https://raw.githubusercontent.com/BrunoBlanquez/ProjM3-Resilia/main/img/lan%C3%A7amento%20com%20ranking%20positivo.png)

![img](https://raw.githubusercontent.com/BrunoBlanquez/ProjM3-Resilia/main/img/top%2015%20jogos.png)
 
# Autores

| [<img src="https://avatars.githubusercontent.com/u/96596496?v=4" width=115><br><sub>Emilly Costa</sub>](https://github.com/theemillycosta) |  [<img src="https://avatars.githubusercontent.com/u/92882615?v=4" width=115><br><sub>Bruno Blanquez</sub>](https://github.com/BrunoBlanquez) |  [<img src="https://avatars.githubusercontent.com/u/55266551?v=4" width=115><br><sub>Matric</sub>](https://github.com/MatricBts) |
| :---: | :---: | :---: |
| [<img src="https://avatars.githubusercontent.com/u/96270135?v=4" width=115><br><sub>Davi Fernandes</sub>](https://github.com/DaviFernandesSRN) |  [<img src="https://avatars.githubusercontent.com/u/96209345?v=4" width=115><br><sub>Damasio Ramos</sub>](https://github.com/DamasioRamos) |