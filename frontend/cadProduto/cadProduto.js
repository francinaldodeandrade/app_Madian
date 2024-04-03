
class Produto { 
    
    constructor() {
        this.itens = []
        this.subtotal = 0.0
        this.status = ""
    }

    retornaCarrinho() {

        return this
    }

    adicionarProduto(sku, nome, Qtd, Vlr) {

        let produto = {
            sku,
            nome,
            Qtd,
            Vlr,
        }

        this.itens.push(produto)
    
   
    }

    removeProduto(sku){   
        let resultado = this.itens.find(produto => produto.sku === sku)
        let index = this.itens.indexOf(resultado)

        console.log(index)
        
        if (index >= 0) {
           this.itens.splice(index, 1); //remove um elemento apartir do index determinado
        }   
    }

   
   
}

let carrinho = new Produto()

let opcoes = document.querySelector("#opcoes1")

function cadastrar() {

    let rem = document.querySelector("#op2")
    let input0 = document.querySelector("#input0")

    let input1 = document.querySelector("#input1")
    let input2 = document.querySelector("#input2")
    let input3 = document.querySelector("#input3")
    let cad = document.querySelector("#op1")

    if (opcoes.value === cad.value && input1.value != "" && input2 != "") {

    carrinho.adicionarProduto(
        input0.value.trim(), 
        input1.value.trim(), 
        input2.value.trim(), 
        input3.value.trim()
    )

    input1.value = ""
    input2.value = ""
    input3.value = ""
        
    } if (opcoes.value === rem.value) {

        carrinho.removeProduto(input0.value)
        input0 = ""

    } else {
        
    }
        
}

console.log(carrinho);
