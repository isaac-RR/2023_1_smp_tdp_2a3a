class conta {
    constructor(){
        this.saldo = 0
    }

    get Saldo(){return this.saldo}
    set Saldo(pSaldo){this.saldo = pSaldo}

    imprimir(){
        return "saldo: " + this.saldo
    }
}

class corrente extends conta{
    constructor(pLimite){
        super()
        this.limite = pLimite
    }

    get Limite(){return this.limite}
    set Limite(pLimite){this.limite = pLimite}

    imprimir(){

        return super.imprimir() + "\nlimite: " + this.limite
    }
}

var obj_corrente =  new corrente(300)
console.log(obj_corrente.imprimir())