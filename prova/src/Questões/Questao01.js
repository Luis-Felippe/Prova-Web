const Questao01A = () =>{
    const lista = [
        {a:10, b:3, c:7},
        {a:5, b:-3,c:9},
        {a:1, b:9, c:40}
    ]

    return(
            // aqui utilizamos ocomponente Questao01B que recebe o objeto via props
        <div>
            <h2>Questão 1</h2>
            <Questao01B lista={lista} />

        </div>
        
    )

}

function Questao01B({lista}){

    // a função encontrarMaiores cria um array vazio que vai guardar os maiores valores de cada objeto
    // ele vai percorrer cada objeto da lista, retirar seus valores e identificar o maior dentro de cada um
    // deles
    const encontrarMaiores = () => {
        const maiores = [];
        for (let i = 0; i < lista.length; i++) {
          const valores = Object.values(lista[i]);

          let maior = valores[0];

          for (let j = 1; j < valores.length; j++) {

            if (valores[j] > maior) {

              maior = valores[j];
              
            }
          }
          maiores.push(maior);
        }
        return maiores;
      };
    
      const maioresValores = encontrarMaiores();


      // essa função vai colocar na tela os maiores valores encontrados pela função anterior
      // ele percorre o vetor maioresValores e os coloca em uma variavel que será mostrado na tela 
      // como uma lista
      const renderizarMaioresValores = () => {
        const elementos = [];
        for (let i = 0; i < maioresValores.length; i++) {

          elementos.push(
            <p key={i}>maior numero do objeto {i + 1}:<strong> {maioresValores[i]}</strong></p>
          );

        }

        return elementos;
      };

   
      return (
        <div>
          <h3>Maiores valores de cada objeto:</h3>
          <ul>
            {renderizarMaioresValores()}
          </ul>
        </div>
      );
}

export default Questao01A