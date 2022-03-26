
const botao = $('#btn')
// const jogoDaPesquisa = $('#inputPesquisa')

botao.on('click', async function() {  
    try {
        const response = await fetch('http://localhost:4567/');
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error('erro : ', error);
    }
})

