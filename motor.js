const elementoCaixa = document.getElementById('caixa');
const elementoBola = document.getElementById('bola');
let htmlElemento = document.getElementsByTagName('html')[0];

let carregamentoInicial = true; // Variável de controle

function atualizarTamanhos() {
  let larguraTela = window.innerWidth;
  let alturaTela = window.innerHeight;

  let tamanhoDaFonte = `${Math.floor((16 * alturaTela) / 776)}`;

  let larguraElementoCaixa, alturaElementoCaixa, larguraElementoBola, alturaElementoBola;

  if (larguraTela < alturaTela) {
    larguraElementoCaixa = `${Math.floor((larguraTela * 90) / 100)}`;
    alturaElementoCaixa = `${Math.floor((larguraTela * 50) / 100)}`;

    larguraElementoBola = `${Math.floor((larguraTela * 2.4) / 100)}`;
    alturaElementoBola = `${Math.floor((larguraTela * 2.4) / 100)}`;
  } else {
    larguraElementoCaixa = `${Math.floor((larguraTela * 40) / 100)}`;
    alturaElementoCaixa = `${Math.floor((larguraTela * 20) / 100)}`;

    larguraElementoBola = `${Math.floor((larguraTela * 1) / 100)}`;
    alturaElementoBola = `${Math.floor((larguraTela * 1) / 100)}`;
  }

  elementoCaixa.style.width = `${larguraElementoCaixa}px`;
  elementoCaixa.style.height = `${alturaElementoCaixa}px`;

  elementoBola.style.width = `${larguraElementoBola}px`;
  elementoBola.style.height = `${alturaElementoBola}px`;

  htmlElemento.style.fontSize = `${tamanhoDaFonte}px`;

  // depuração 
  if (!carregamentoInicial) {
    console.log(`Largura da tela: ${larguraTela} px \nAltura da tela: ${alturaTela} px`);
    console.log('Largura da caixa: ' + larguraElementoCaixa + ' px' + '\nAltura da caixa: ' + alturaElementoCaixa + ' px');
    console.log('Largura da bola: ' + larguraElementoBola + ' px' + '\nAltura da bola: ' + alturaElementoBola + ' px');
    console.log('Tamanho da fonte: ' + tamanhoDaFonte + 'px');
  }

  carregamentoInicial = false; // Atualiza o estado
}

atualizarTamanhos();
window.addEventListener('resize', atualizarTamanhos);