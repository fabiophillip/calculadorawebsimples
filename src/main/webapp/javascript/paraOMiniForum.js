var tituloTopicosForum = new Array();
var descricaoTopicosForum = new Array();



function adicionarNovoTopicoForum(tituloTopico, descricaoTopico)
{
  tituloTopicosForum[tituloTopicosForum.length] = tituloTopico;
  descricaoTopicosForum[descricaoTopicosForum.length] = descricaoTopico;
}


function postarComment()
{
    var commentsDiv = document.getElementById('comments');
    var nomeQuemComentou = document.getElementById('nomeQuemComentou').value;
    var dataAtual = new Date();
    commentsDiv.innerHTML = commentsDiv.innerHTML +
    '<p class="cabecalhoRespostaForum"' + '<b>' + nomeQuemComentou + ' disse ('
    + 'em ' + dataAtual.getDay() + '/' + dataAtual.getMonth() + '/' + dataAtual.getFullYear()   
    +' às ' + dataAtual.getHours() + ':' + dataAtual.getMinutes()
    + '):' + '</b>' + '</p>' + 
    '<p class="respostaForum">' + document.getElementById("myTextarea").value + '</p>';
}

/*
    no nosso mini-fórum, cada tópico vai ter uma página html associada ao mesmo que deveria ter
    o mesmo nome do título do tópico, mas às vezes nomes de topicos vem om pontos de interrogação, pontos,
    interrogação etc. Essa função serve para eliminar esses sinais e retorna o verdadeiro nome da 
    página html
*/
function transformarTituloDeTopicoEmNomeDeArquivo(tituloDeTopico)
{
    //primeiro, vamos transformar todos os caracteres em minusculo
    var tituloMinusculo = tituloDeTopico.toLowerCase();
    //vamos remover os espaços em branco do titulo
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
    var nomePaginaHtmlDoTopico = tituloSemMaiorQue + '.html';
    
    return  nomePaginaHtmlDoTopico;
    
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


/*
  Nosso mini-forum começa mostrando todos os tópicos criados nele na forma de botões.
  Quando o usuário clica nele, vai ver os comentários relacionados ao tópico em outra página.
  Esse método cria o botão para um tópico, recebendo como parâmetro o título do tópico e a breve descrição do mesmo.
*/
function criarBotaoParaTopicoDeForum(tituloDoTopico, descricaoDoTopico)
{
  //alert(tituloDoTopico);
  //temos o título do topico, mas qual o nome da página html associada a esse tópico?
  var nomeHtmlDoTopico =  transformarTituloDeTopicoEmNomeDeArquivo(tituloDoTopico);
  //alert("terminou nome html do tópico:" + nomeHtmlDoTopico);
  //vamos converter o título do tópico para ficar com espaços em brancos no value do botão que vamos criar
  var nomeBotao = converterEspacosEmBrancoParaValorBotao(tituloDoTopico);
  nomeBotao = nomeBotao;
  // vamos agora criar o botao para ir para um tópico do forum
  //var botaoTopico = '<p><input type="button" class=botaoForum onClick="abrirNovaPagina(\'' + nomeHtmlDoTopico + '\')" value=' + nomeBotao + ' /></p>';
  var botaoTopico = '<p><button class="botaoForum" onClick="abrirNovaPagina(\'' + nomeHtmlDoTopico + '\')" ><h1 class="tituloTopicoForum">' + tituloDoTopico +'</h1><h3 class="descricaoTopicoForum">' + descricaoDoTopico + '</h3></button></p>';
  //alert("terminou botao topico");
  return botaoTopico;
  //alert("fim do script");
}

/*
  baseado no arranjo com títulos e descrições breves do forum, esse método vai criar botões para os tópicos do fórum
  inseridos nesse arranjo e vai inserir esses botões no Div "topicos de forum" que é onde deve conter a listagem dos topicos do forum 
*/
function atualizarListagemTopicosForum()
{
  var topicosDoForumDiv = document.getElementById('topicosDoForum');
  //primeiro, vamos zerar o que estava nesse div.
  topicosDoForumDiv.innerHTML = '';
  //agora, vamos criar os botões para topico de fórum e vamos começar a adicionar nesse Div
  for(var i = 0; i < tituloTopicosForum.length; i++)
  {
    var tituloTopico = tituloTopicosForum[i];
    var descricaoTopico = descricaoTopicosForum[i];
    var botaoTopico = criarBotaoParaTopicoDeForum(tituloTopico, descricaoTopico);
    topicosDoForumDiv.innerHTML = topicosDoForumDiv.innerHTML + botaoTopico;
  }
}

function listarTopicosForumParaEdicao()
{
  //alert("comecou metodo listar para edicao");
  var topicosDoForumDiv = document.getElementById('topicosDoForum');
  //primeiro, vamos zerar o que estava nesse div.
  topicosDoForumDiv.innerHTML = '';
  //agora, vamos criar os botões para topico de fórum e vamos começar a adicionar nesse Div
  for(var i = 0; i < tituloTopicosForum.length; i++)
  {
    var tituloTopico = tituloTopicosForum[i];
    var descricaoTopico = descricaoTopicosForum[i];
    var botaoTopico = criarBotaoParaTopicoDeForum(tituloTopico, descricaoTopico);
    topicosDoForumDiv.innerHTML = topicosDoForumDiv.innerHTML + botaoTopico;
    //vamos adicionar também os botões para editar e remover tópico de fórum
    topicosDoForumDiv.innerHTML = topicosDoForumDiv.innerHTML + 
    '<p align="center"><button onClick="removerTopicoDoForum(\'' + i + '\')" > remover tópico</button></p>';
  }
}

function removerTopicoDoForum(posicaoDoTopicoNosArranjos)
{
  var confirmouRemocao =window.confirm("Tem certeza que deseja remover esse tópico?");
  if(confirmouRemocao)
  {
    tituloTopicosForum.splice(posicaoDoTopicoNosArranjos, 1);
    descricaoTopicosForum.splice(posicaoDoTopicoNosArranjos, 1);
    //agora que eu removi o topico dos arranjos, resta atualizar a página HTML de edição
    listarTopicosForumParaEdicao();

  }
  
}

