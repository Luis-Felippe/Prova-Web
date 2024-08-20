import React, { useEffect, useState } from 'react';

const Questao04 = () => {
  const [capitais, setCapitais] = useState({
    menorPopulacao: '',
    maiorPopulacao: ''
  });

  // Criação da Promise com os dados locais
  const pegarDados = () => {
    return new Promise((resolve, reject) => {
      const dados = [
        { capital: ["Dublin"], population: 4994724 },
        { capital: ["Nicosia"], population: 1207361 },
        { capital: ["Madrid"], population: 47351567 }
      ];
      resolve(dados); 
      if(dados === null){
        reject('esse erro é impossível')
      }
    });
  };

  // é necessario criar uma função assíncrona para tratar a promessa e utilizar os dados do PegarDados()
  const buscarDados = async () => {
    try {
      const dados = await pegarDados();

      let menor = dados[0];
      let maior = dados[0];
      
      // são encontradas as capitais com menor e maior população a partir da comparação das populações de
      // cada capital
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

  // useEffect para chamar a função de buscar os dados quando o componente for montado
  useEffect(() => {
    buscarDados();
  }, []);

  return (
    <div>
      <h2>Questão 4</h2>
      <p><strong>Capital Menos Populosa:</strong> {capitais.menorPopulacao}</p>
      <p><strong>Capital Mais Populosa:</strong> {capitais.maiorPopulacao}</p>
    </div>
  );
};

export default Questao04;
