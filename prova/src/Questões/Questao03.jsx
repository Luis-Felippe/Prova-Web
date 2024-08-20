import React, { useEffect, useState } from 'react';

const Questao03 = () => {
  const [capitais, setCapitais] = useState({
    menorPopulacao: '', maiorPopulacao: ''
  });

  // A seguinte função assínctrona vai acessar o conteudo da API
  // e ainda vai encontrar em ordem as capitais com Maior e menor população através do loop
  const buscarDados = async () => {

    try {
      const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
      const dados = await response.json();

      // Encontrando as capitais com menor e maior população
      let menor = dados[0];
      let maior = dados[0];

      for (let i = 1; i < dados.length; i++) {
        if (dados[i].population < menor.population) {
          menor = dados[i];
        }

        if (dados[i].population > maior.population) {
          maior = dados[i];
        }
      }

      // setando a menor e maior população Do array das menos e mais populosas capitais
      setCapitais({
        menorPopulacao: menor.capital[0],
        maiorPopulacao: maior.capital[0]
      });

    } catch (error) {
      console.log('Deu ruim', error);
    }
  };

  // UseEffect para chamar a função de buscar os dados quando o componente for montado
  useEffect(() => {
    buscarDados();
  }, []);

  return (
    <div>
        <h2>Questão 3</h2>
      <p><strong>Capital menos populosa:</strong> {capitais.menorPopulacao}</p>
      <p><strong>Capital mais populosa:</strong> {capitais.maiorPopulacao}</p>
    </div>
  );
};

export default Questao03;
