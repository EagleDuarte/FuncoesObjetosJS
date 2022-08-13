/*4. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
nome), que recebe 4 parâmetros sendo três inteiros e um texto
(String). Esta função será chamada ao abrir a página e mostrará um
alerta com a média. Exemplo: “João, sua média é 70.” A função
também deve mostrar no console.log() as notas recebidas. Exemplo
“Nota 1: 60,Nota 2: 70,Nota 3: 80”.*/

const nome = 'João'
const notas = [10, 8, 6]

function calcularMedia(notas, nome) {
    const media = notas.reduce((valorAnterior, proximoValor) => valorAnterior + proximoValor) / notas.length
    alert(`${nome}, sua média é ${media}.`)

    notas.forEach((nota, index) => console.log(`Nota ${index + 1}: ${nota}`))
}

calcularMedia(notas, nome)