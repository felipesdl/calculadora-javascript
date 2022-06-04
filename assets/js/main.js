function Calculadora(){
  this.display = document.querySelector(".display");
  this.btnClear = document.querySelector(".btn-clear");
  
  this.apagaUm = () => this.display.value = this.display.value.slice(0,-1);
  this.pressionaEnter = () => this.display.addEventListener("keyup", (e) => {if(e.keyCode === 13) this.realizaConta()});
  this.selecionaBtn = (botao, target) => target.classList.contains(botao);
  
  this.cliqueBotoes = () => {
    document.addEventListener("click", e => {
      const el = e.target;
      if(this.selecionaBtn("btn-num", el)) this.btnParaDisplay(el);
      if(this.selecionaBtn("btn-clear",el)) this.clearDisplay();
      if(this.selecionaBtn("btn-del",el)) this.apagaUm();
      if(this.selecionaBtn("btn-eq",el)) this.realizaConta();
    });
  };
  
  this.inicia = function(){
    this.cliqueBotoes();
    this.pressionaEnter();
  };
  
  this.clearDisplay = () => this.display.value='';
  this.btnParaDisplay = (valor) => {
    this.display.value += valor.innerText;
    this.display.focus();
  }
  
  this.realizaConta = () => {
    let conta = eval(this.display.value);
    try{
      conta = eval(conta);
      if(!conta){
        alert("Conta Inválida");
        return;
      }
      this.display.value = conta;
    }catch(e){
      alert("Conta Inválida");
      this.clearDisplay();
      return;
    }
  };
  
}

const calc = new Calculadora();
calc.inicia();