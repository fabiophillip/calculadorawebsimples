var titulosResenhasEscritas = new Array();
var pontuacaoResenhasEscritas = new Array();

function adicionarNovoTituloDeResenha(novaResenha)
{
  adicionarNovoTituloDeResenha(novaResenha, "excelente");
}

function adicionarNovoTituloDeResenha(novaResenha, pontuacaoResenha)
{
  titulosResenhasEscritas[titulosResenhasEscritas.length] = novaResenha;
  pontuacaoResenhasEscritas[pontuacaoResenhasEscritas.length] = pontuacaoResenha;
}

function desenharEstrelinhasNosTitulosDasResenhas()
{
	var elementosPessimos = document.getElementsByName("pessimo");
	for(var i = 0; i < elementosPessimos.length; i++)
	{
		elementosPessimos[i].src = "CSS/images/pessimo.png";
	}
	
	var elementosBons = document.getElementsByName("bom");
	for(var i = 0; i < elementosBons.length; i++)
	{
		elementosBons[i].src = "CSS/images/bom.png";
	}
	
	var elementosExcelentes = document.getElementsByName("excelente");
	for(var i = 0; i < elementosExcelentes.length; i++)
	{
		elementosExcelentes[i].src = "CSS/images/excelente.png";
	}
	
	var elementosMuitoBons = document.getElementsByName("muito bom");
	for(var i = 0; i < elementosMuitoBons.length; i++)
	{
		elementosMuitoBons[i].src = "CSS/images/muito bom.png";
	}
	
	var elementosRuins = document.getElementsByName("ruim");
	for(var i = 0; i < elementosRuins.length; i++)
	{
		elementosRuins[i].src = "CSS/images/ruim.png";
	}
	
	
	
}

function transformarTituloDeResenhaEmNomeDeArquivo(tituloDeResenha)
{
    //primeiro, vamos transformar todos os caracteres em minusculo
    var tituloMinusculo = tituloDeResenha.toLowerCase();
    //primeiro, vamos remover os espaços em branco do titulo
    var tituloSemEspacoEmBranco = tituloMinusculo.replace(/ /g, "");
    //vamos agora remover caracteres especiais que não podem ser usados para nomear um arquivo:
    //1) a barra "/"
    var re = new RegExp("/", "g");
    var tituloSemBarraDireita = tituloSemEspacoEmBranco.replace(re, "");
    //2) a barra "\"
    var tituloSemBarraEsquerda = tituloSemBarraDireita.replace(/\\/g, "");
    //3) o sinal de interrogação "?"
    var tituloSemSinalInterrogacao = tituloSemBarraEsquerda.replace(/\?/g, "");
    //4) os dois pontos ":"
    var tituloSemDoisPontos = tituloSemSinalInterrogacao.replace(/:/g, "");
    //5)o asterisco "*"
    //var ru = new RegExp("*", "g");
    var tituloSemAsterisco = tituloSemDoisPontos.replace(/[*]/g, "");
    //6)as aspas """
    var tituloSemAspas = tituloSemAsterisco.replace(/(['"])/g,'');
    //7) o menor que "<"
    var tituloSemMenorQue = tituloSemAspas.replace(/</g, "");
    //8) o maior que ">"
    var tituloSemMaiorQue = tituloSemMenorQue.replace(/>/g,"");
    //9)remover os acentos do título
    tituloSemMaiorQue = tituloSemMaiorQue.replace(new RegExp('[áàâã]','gi'), 'a'); 
    tituloSemMaiorQue = tituloSemMaiorQue.replace(new RegExp('[éèê]','gi'), 'e'); 
    tituloSemMaiorQue = tituloSemMaiorQue.replace(new RegExp('[íìî]','gi'), 'i'); 
    tituloSemMaiorQue = tituloSemMaiorQue.replace(new RegExp('[óòôõ]','gi'), 'o'); 
    tituloSemMaiorQue = tituloSemMaiorQue.replace(new RegExp('[úùû]','gi'), 'u'); 
    
    //vamos também adicionar a extensão html para o nome do arquivo...
    var nomePaginaHtmlDaResenha = tituloSemMaiorQue + '.html';
    
    return  nomePaginaHtmlDaResenha;
    
}

/*
  o método abaixo vai converter a pontuação que o criador da resenha deu para o livro
  ("excelente, muito bom, bom, ruim e péssimo") em uma referência para uma imagem de estrelas(de 0 até 5 estrelas) para ser anexada ao
  lado do nome da resenha com o intuito de dar um aspecto visual melhor à resenha*/
function transformarNotaDaResenhaEmImagensDeEstrelas(pontuacaoResenha)
{
  if(pontuacaoResenha == "excelente")
  {
    return "CSS/images/5stars.png";
  }
  else if(pontuacaoResenha == "muito bom")
  {
    return "CSS/images/4stars.png";

  }
  else if(pontuacaoResenha == "bom")
  {
    return "CSS/images/3stars.png";
  } 
  else if(pontuacaoResenha == "ruim")
  {
    return "CSS/images/2stars.png";
  }
  else
  {
    return "CSS/images/1stars.png";
  }
}

function abrirNovaPagina(nomePagina)
{
  //alert("começou metodo abrir nova página");
  window.open(nomePagina, '_self', false);
}

function converterEspacosEmBrancoParaValorBotao(nomeBotao)
{
    //alert("começou converter nome botao");
    var nomeBotaoConvertido = nomeBotao.replace(/ /g, "&nbsp;");
    //alert("nome do botao convertido:" + nomeBotaoConvertido);
    return nomeBotaoConvertido;
}

function criarNovaResenha(tituloDaResenha)
{
  titulosResenhasEscritas[titulosResenhasEscritas.length] = tituloDaResenha;
  criarBotaoParaListagemResenhas(tituloDaResenha);
}

function criarHtmlCampoEditarResenhas()
{
  var htmlListagemResenhas = "";
  for(var i = 0; i < titulosResenhasEscritas.length; i++)
  {
    var tituloResenhaParaBotao = titulosResenhasEscritas[i];
    var notaDaResenhaAssociada = pontuacaoResenhasEscritas[i];
    var nomeHtmlDaResenha = transformarTituloDeResenhaEmNomeDeArquivo(tituloResenhaParaBotao);
    var linkImagemEstrelas = transformarNotaDaResenhaEmImagensDeEstrelas(notaDaResenhaAssociada);
    htmlListagemResenhas = htmlListagemResenhas + 
    '<table><tr><td style="vertical-align:middle;"><h:form><h:commandButton id="botaoResenha' + i + '"> ' + tituloResenhaParaBotao + ' </h:commandButton></h:form></td>'
      + '<td style="vertical-align:middle;"><img src="' + linkImagemEstrelas + '" /></td>' 
      + '<td style="vertical-align:middle;"><button onClick="editarResenha(' + i + ')">editar resenha</button></td>' + 
      '<td style="vertical-align:middle;"><button onClick="apagarResenha(' + i + ')">apagar resenha</button></td></table><br />';
  }


  return htmlListagemResenhas;
}

function criarHtmlCampoListarResenhas()
{
  var htmlListagemResenhas = "";
  for(var i = 0; i < titulosResenhasEscritas.length; i++)
  {
    var tituloResenhaParaBotao = titulosResenhasEscritas[i];
    var notaDaResenhaAssociada = pontuacaoResenhasEscritas[i];
    var nomeHtmlDaResenha = transformarTituloDeResenhaEmNomeDeArquivo(tituloResenhaParaBotao);
    var linkImagemEstrelas = transformarNotaDaResenhaEmImagensDeEstrelas(notaDaResenhaAssociada);
    htmlListagemResenhas = htmlListagemResenhas + 
    '<table><tr><td style="vertical-align:middle;"><button id="botaoResenha' + i + '" class=botaoResenha onClick="abrirNovaPagina(\'' + 
      nomeHtmlDaResenha + '\')"> ' + tituloResenhaParaBotao + ' </button></td>'
      + '<td style="vertical-align:middle;"><img src="' + linkImagemEstrelas + '" /></td>';
  }


  return htmlListagemResenhas;
}

function editarResenha(numeroDaResenhaNoArranjo)
{
  alert('ainda não implementado. Usaria uma conexão com banco de dados para pegar os detalhes da resenha e' + 
          ' inserir dados antigos no editor...');
}

function apagarResenha(posicaoDaResenhaNoArranjo)
{
  var confirmouRemocao =window.confirm("Tem certeza que deseja remover essa resenha?");
  if(confirmouRemocao)
  {
    //alert("comecou apagar resenha");
    titulosResenhasEscritas.splice(posicaoDaResenhaNoArranjo, 1);

    //agora eu vou refazer a listagem inteira sem a resenha
    var novaListagemResenhasEscritas = criarHtmlCampoEditarResenhas();

    var divListagemResenhas= document.getElementById('listaResenhas');
    divListagemResenhas.innerHTML = novaListagemResenhasEscritas;
    //alert("terminou apagar resenha");
  }
}

function atualizarCampoEditarResenhas()
{
  var htmlListagemResenhas = criarHtmlCampoEditarResenhas();
  //alert("terminou criação de html para o campo listagem resenhas");
  var listagemResenhasDiv = document.getElementById('listaResenhas');
  listagemResenhasDiv.innerHTML = htmlListagemResenhas;
}

function atualizarCampoListarResenhas()
{
  var htmlListagemResenhas = criarHtmlCampoListarResenhas();
  //alert("terminou criação de html para o campo listagem resenhas");
  var listagemResenhasDiv = document.getElementById('listaResenhas');
  listagemResenhasDiv.innerHTML = htmlListagemResenhas;
}



function criarBotaoParaListagemResenhas(tituloDaResenha)
{
  //alert(tituloDaResenha);
  var listagemResenhasDiv = document.getElementById('listaResenhas');
  //temos o título da resenha, mas qual o nome da página html associada a essa resenha?
  var nomeHtmlDaResenha =  transformarTituloDeResenhaEmNomeDeArquivo(tituloDaResenha);
  //alert("terminou nome html da resenha:" + nomeHtmlDoTopico);
  //vamos converter o título da resenha para ficar com espaços em brancos no value do botão que vamos criar
  var nomeBotao = converterEspacosEmBrancoParaValorBotao(tituloDaResenha);
  nomeBotao = nomeBotao;
  // vamos agora criar o botao para ir para uma resenha
  var botaoResenha = '<p><input type="button" class=botaoResenha onClick="abrirNovaPagina(\'' + nomeHtmlDaResenha + '\')" value=' + nomeBotao + ' /></p>';
  //alert("terminou botao resenha");
  //vamos agora adicionar esse botão ao div(espaço) de resenhas do fórum
  listagemResenhasDiv.innerHTML = listagemResenhasDiv.innerHTML + botaoResenha;
  //alert("fim do script");
}


