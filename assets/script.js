function criarCalculadora() {

    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        clearDisplay() {
            this.display.value = ' '
        },
        apagarUm() {
            this.display.value = this.display.value.slice(0, -1)
        },
        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta)
                if (!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta)
            } catch (e){
                alert('Conta inválida');
                return;
            }
        },
        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },




        inicia(){
            this.clickBtn();
            this.pressionaEnter();
        },

        clickBtn() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagarUm();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    }
}

const calculadora = criarCalculadora();
calculadora.inicia()