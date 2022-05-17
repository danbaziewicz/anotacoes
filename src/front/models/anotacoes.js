class Anotacoes {
    constructor (titulo, nota){
        this.titulo = this.verificaItem(titulo);
        this.nota = this.verificaItem(nota);
    }

    verificaItem(item) {
        try {
            if(typeof item !== 'string'){
                throw new Error('criação de notas/dados inválidos');
            } else {
                return item;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const anotacoes = new Anotacoes('nota 1', 3);

console.log(anotacoes);



//verificar se argumentos são do tipo texto