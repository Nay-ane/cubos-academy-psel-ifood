function solucao(produtos) {
    total = 0
    totalTop = 0
    for(produto of produtos){
        total += produto.preco
        if(produto.preco > 10000){
            totalTop += produto.preco
        }
    }
    percentual = totalTop / total
    

    console.log({totalTop, percentual})
}

