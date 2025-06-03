
import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';

import { Level, calculateImc } from './helpers/imc';

const App =() => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const HandleCalculateButton = () => {
    if (heightField && weightField) {

    } else {
      alert("Digite todos os campos.");
    }
  };


  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="Powered by" width={150}/>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1> Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cafa pessoa.</p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.75 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={ e => setHeightField(parseFloat(e.target.value)) }
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.5 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={ e => setWeightField(parseFloat(e.target.value)) }
          />
          
          <button onClick={HandleCalculateButton}> Calcular </button>
        </div>

        <div className={styles.rightSide}>
          
        </div>
      </div>
    </div>
  );
}


export default App;
