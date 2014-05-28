var titulo = "O livro que nós criamos"; //titulo do livro
var sinopse = "uma sinopse qualquer";
var generos = new Array();
var tags = new Array();


//FUNCOES RELATIVAS AO TITULO DO LIVRO

function definirTitulo(umTitulo)
{
  tituloDoLivro = umTitulo;
}

function inserirTituloNoH1DaPaginaInicial()
{
  definirTitulo("super esquedrao dos macacos robos hiper forca jah!");
  var tituloH1 = document.getElementById('titulo');
  tituloH1.innerHTML = tituloH1.innerHTML + titulo;
}
//FIM DAS FUNCOES RELATIVAS AO TITULO DO LIVRO

//FUNCOES RELATIVAS AO GENERO DO LIVRO
function criarArranjoGeneros()
{
  adicionarGenero("drama");
  adicionarGenero("comedia");
}

function adicionarGenero(genero)
{
	generos[generos.length] = genero;
}


function criarTabelaComGeneros()
{
    var tabelaComGeneros = '<table cellpadding="10"><tr>';
    var quantasCelulasDaLinhaForamPreechidas = 0;
    
    for(var i = 0; i < generos.length; i++)
    {
      tabelaComGeneros = tabelaComGeneros + '<td>' + generos[i] + '</td>';
      quantasCelulasDaLinhaForamPreechidas = quantasCelulasDaLinhaForamPreechidas + 1;
      
      if(quantasCelulasDaLinhaForamPreechidas == 1)
      {
        //queremos uma tabela somente de 1 coluna, por isso vamos comecar outra linha
        tabelaComGeneros = tabelaComGeneros + '</tr><tr>';
        quantasCelulasDaLinhaForamPreechidas = 0;
      }
    }
    
    tabelaComGeneros = tabelaComGeneros + '</tr></table>';
    
    return tabelaComGeneros;       
}

function inserirGenerosNoDivPaginaInicial()
{
  criarArranjoGeneros();
	var generosDiv = document.getElementById('generos');
	var tabelaComGeneros = criarTabelaComGeneros(generos);
  
  //agora vamos adicionar a tabela de generos ao div com id = generos da paginainicial.html
  generosDiv.innerHTML = generosDiv.innerHTML + tabelaComGeneros;
}

//FIM DAS FUNCOES RELATIVAS AO GENERO DO LIVRO



//FUNCOES RELATIVAS AS TAGS DO LIVRO
function criarArranjoTags()
{
  adicionarTag("hilário");
  adicionarTag("cotidiano");
  adicionarTag("crianças");
  adicionarTag("fantasia");
  
}

function adicionarTag(tag)
{
	tags[tags.length] = tag;
}



function criarTabelaComTags()
{
    var tabelaComTags = '<table><tr>';
    var quantasCelulasDaLinhaForamPreechidas = 0;
    
    for(var i = 0; i < tags.length; i++)
    {
      tabelaComTags = tabelaComTags + '<td>' + tags[i] + '</td>';
      quantasCelulasDaLinhaForamPreechidas = quantasCelulasDaLinhaForamPreechidas + 1;
      
      if(quantasCelulasDaLinhaForamPreechidas == 2)
      {
        //queremos uma tabela somente de 2 colunas, por isso vamos comecar outra linha
        tabelaComTags = tabelaComTags + '</tr><tr>';
        quantasCelulasDaLinhaForamPreechidas = 0;
      }
    }
    
    tabelaComTags = tabelaComTags + '</tr></table>';
    
    return tabelaComTags;       
}

function inserirTagsNoDivPaginaInicial()
{
  criarArranjoTags();
  var tagsDiv = document.getElementById('tags');
  var tabelaComTags = criarTabelaComTags();
  
  //agora vamos adicionar a tabela de tags ao div com id = tags da paginainicial.html
  tagsDiv.innerHTML = tagsDiv.innerHTML + tabelaComTags;
}

//FIM DAS FUNCOES RELATIVAS AS TAGS DO LIVRO

//FUNCOES RELATIVAS A SINOPSE DO LIVRO
  function definirSinopse(umaSinopse)
  {
    sinopse = umaSinopse;
  }

  function inserirSinopseNoDivPaginaInicial()
  {
    

    var sinopseDiv = document.getElementById('sinopse');
    sinopseDiv.innerHTML = sinopseDiv.innerHTML + sinopse;
  }
//FIM DAS FUNCOES RELATIVAS A SINOPSE DO LIVRO
