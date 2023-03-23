class conta {
    constructor(){
        this.saldo = 0
    }
}

class corrente extends conta{
    constructor(pLimite){
        super()
        this.limite = pLimite
    }

    get limite(){return this.limite}
    set limite(pLimite){this.limite = pLimite}
}

var obj_corrente =  new corrente(300)
console.log(obj_corrente)
