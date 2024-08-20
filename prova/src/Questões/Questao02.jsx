import React, { useState } from 'react';

const Questao02 = () => {
  // O estado Front controla quando a frente ou costas do pikachu será mostrada
  const [front, setFront] = useState(true);

  const imageFront = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';
  const imageBack = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png';

  // Essa função cuida da alternancia entre as imagens. Quando é true mostra a frente e false mostra as costas
  const handleAltImage = () => {
    setFront(!front); // Inverte o valor do estado 'frente'
  };

  return (
    <div>
        <h2>Questão 2</h2>
      <h3>Pikachu</h3>
      <img
        src={front ? imageFront : imageBack}
        alt="Pikachu"
        style={{ width: '200px', height: '200px' }}
      />
      <br />
      <button onClick={handleAltImage} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Alternar Imagem
      </button>
    </div>
  );
};

export default Questao02;
