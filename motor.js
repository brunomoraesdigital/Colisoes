const elementoCaixa = document.getElementById('caixa');
const elementoBola = document.getElementById('bola');

let larguraDaTela = window.innerWidth;
let alturaDaTela = window.innerHeight;

let larguraDaCaixa;
let alturaDaCaixa;

let comprimentoDaBola;

let posicaoBolaX;
let posicaoBolaY;

let velocidadeBolaX;
let velocidadeBolaY;

function dimensionar() {

  larguraDaCaixa = Math.floor(`${(larguraDaTela * 90) / 100}`);
  alturaDaCaixa = Math.floor(`${(alturaDaTela * 50) / 100}`);

  comprimentoDaBola = Math.floor(`${(larguraDaTela * 2.4) / 100}`);

  if (larguraDaTela > alturaDaTela) {
    larguraDaCaixa = Math.floor(`${(larguraDaTela * 40) / 100}`);
    alturaDaCaixa = Math.floor(`${(alturaDaTela * 20) / 100}`);

    comprimentoDaBola = Math.floor(`${(larguraDaTela * 1) / 100}`);
  }
}

function estilizar() {
  elementoCaixa.style.width = `${larguraDaCaixa}px`;
  elementoCaixa.style.height = `${alturaDaCaixa}px`;

  elementoBola.style.width = `${comprimentoDaBola}px`;
  elementoBola.style.height = `${comprimentoDaBola}px`;
}

function posicionar() {
  posicaoBolaX = larguraDaCaixa / 2;
  posicaoBolaY = alturaDaCaixa / 2;

  elementoBola.style.top = `${posicaoBolaY}px`;
  elementoBola.style.left = `${posicaoBolaX}px`;
}

function movimentar() {
  velocidadeBolaX = 2;
  velocidadeBolaY = 2;

}
function atualizar() {
  posicaoBolaX += velocidadeBolaX;
  posicaoBolaY += velocidadeBolaY;
  
  colidir();

  elementoBola.style.top = `${posicaoBolaY}px`;
  elementoBola.style.left = `${posicaoBolaX}px`;
}
function colidir () {
  if (posicaoBolaX <= 0 || posicaoBolaX + comprimentoDaBola >= larguraDaCaixa) {
    velocidadeBolaX = -velocidadeBolaX; // Inverte a direção horizontal
  }

  if (posicaoBolaY <= 0 || posicaoBolaY + comprimentoDaBola >= alturaDaCaixa) {
    velocidadeBolaY = -velocidadeBolaY; // Inverte a direção vertical
  }
}

function depurar() {
  console.log(`Largura da Tela: ${larguraDaTela}px \nAltura da Tela: ${alturaDaTela}px`);
  console.log(`Largura da Caixa: ${larguraDaCaixa}px \nAltura da Caixa: ${alturaDaCaixa}px`);
  console.log(`Comprimento da Bola: ${comprimentoDaBola}px`);
}

function inicializar() {

  dimensionar();
  estilizar();
  posicionar();
  movimentar();
  depurar();

  setInterval(atualizar, 16);

}

inicializar();