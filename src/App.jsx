import React, { useState } from 'react';
import './App.css';
import ThreeViewer from './ThreeViewer';

function App() {
  const [activeWord, setActiveWord] = useState(null);

  const handleWordClick = (word, e) => {
    e.stopPropagation();
    if (!activeWord || activeWord === word) {
      const newWord = activeWord === word ? null : word;
      setActiveWord(newWord);
    }
  };

  const handleBackgroundClick = (e) => {
    const isClickingActiveWord = e.target.closest(`.${activeWord}`);
    if (!isClickingActiveWord) {
      setActiveWord(null);
    }
  };

  return (
    <div className="app" onClick={handleBackgroundClick}>
      {/* Render the ThreeViewer background only when activeWord is 'projeto' */}
      {activeWord === 'projeto' && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        >
          <ThreeViewer modelPaths={[
            '/portfolio-crossword/lcs_wire.glb',
            '/portfolio-crossword/lcs_green.glb',
            '/portfolio-crossword/lcs_chrome.glb'
          ]} />
        </div>
      )}

      {/* Crossword grid and overlays rendered above the 3D canvas */}
      <div
        className={`crossword ${activeWord ? `${activeWord}-clicked` : ''}`}
        style={{ position: 'relative', zIndex: 2 }}
      >
        {/* Logo container */}
        <div className="logo-wrapper" style={{ gridRow: 2, gridColumn: 1 }}>
          <img src="logo_lcs.svg" alt="LCS Logo" className="logo" />
        </div>

        {/* LUCAS CORREA (horizontal) */}
        <div
          className="cell lucascorrea"
          onClick={(e) => handleWordClick('lucas', e)}
          style={{ gridRow: 4, gridColumn: 1 }}
        >
          <span className="number">1</span>
          L
        </div>
        <div
          className="cell lucascorrea"
          onClick={(e) => handleWordClick('lucas', e)}
          style={{ gridRow: 4, gridColumn: 2 }}
        >
          U
        </div>
        <div
          className="cell lucascorrea"
          onClick={(e) => handleWordClick('lucas', e)}
          style={{ gridRow: 4, gridColumn: 3 }}
        >
          C
        </div>
        <div
          className="cell lucascorrea"
          onClick={(e) => handleWordClick('lucas', e)}
          style={{ gridRow: 4, gridColumn: 4 }}
        >
          A
        </div>
        <div
          className="cell lucascorrea"
          onClick={(e) => handleWordClick('lucas', e)}
          style={{ gridRow: 4, gridColumn: 5 }}
        >
          S
        </div>
        <div
          className="cell lucascorrea"
          onClick={(e) => handleWordClick('lucas', e)}
          style={{ gridRow: 4, gridColumn: 6 }}
        >
          C
        </div>
        <div
          className="cell lucascorrea"
          onClick={(e) => handleWordClick('lucas', e)}
          style={{ gridRow: 4, gridColumn: 7 }}
        >
          O
        </div>
        <div
          className="cell lucascorrea"
          onClick={(e) => handleWordClick('lucas', e)}
          style={{ gridRow: 4, gridColumn: 8 }}
        >
          R
        </div>
        <div
          className="cell lucascorrea"
          onClick={(e) => handleWordClick('lucas', e)}
          style={{ gridRow: 4, gridColumn: 9 }}
        >
          R
        </div>
        <div
          className="cell lucascorrea"
          onClick={(e) => handleWordClick('lucas', e)}
          style={{ gridRow: 4, gridColumn: 10 }}
        >
          Ê
        </div>
        <div
          className="cell lucascorrea"
          onClick={(e) => handleWordClick('lucas', e)}
          style={{ gridRow: 4, gridColumn: 11 }}
        >
          A
        </div>

        {/* SOBRE (vertical) */}
        <div
          className={`cell sobre ${activeWord && activeWord !== 'sobre' ? 'inactive' : ''}`}
          onClick={(e) => handleWordClick('sobre', e)}
          style={{ gridRow: 4, gridColumn: 5 }}
        >
          <span className="number">2</span>
          S
        </div>
        <div
          className={`cell sobre ${activeWord && activeWord !== 'sobre' ? 'inactive' : ''}`}
          onClick={(e) => handleWordClick('sobre', e)}
          style={{ gridRow: 5, gridColumn: 5 }}
        >
          O
        </div>
        <div
          className={`cell sobre ${activeWord && activeWord !== 'sobre' ? 'inactive' : ''}`}
          onClick={(e) => handleWordClick('sobre', e)}
          style={{ gridRow: 6, gridColumn: 5 }}
        >
          B
        </div>
        <div
          className={`cell sobre ${activeWord && activeWord !== 'sobre' ? 'inactive' : ''}`}
          onClick={(e) => handleWordClick('sobre', e)}
          style={{ gridRow: 7, gridColumn: 5 }}
        >
          R
        </div>
        <div
          className={`cell sobre ${activeWord && activeWord !== 'sobre' ? 'inactive' : ''}`}
          onClick={(e) => handleWordClick('sobre', e)}
          style={{ gridRow: 8, gridColumn: 5 }}
        >
          E
        </div>

        {/* PROJETO (vertical) */}
        <div
          className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`}
          onClick={(e) => handleWordClick('projeto', e)}
          style={{ gridRow: 2, gridColumn: 7 }}
        >
          <span className="number">3</span>
          P
        </div>
        <div
          className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`}
          onClick={(e) => handleWordClick('projeto', e)}
          style={{ gridRow: 3, gridColumn: 7 }}
        >
          R
        </div>
        <div
          className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`}
          onClick={(e) => handleWordClick('projeto', e)}
          style={{ gridRow: 4, gridColumn: 7 }}
        >
          O
        </div>
        <div
          className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`}
          onClick={(e) => handleWordClick('projeto', e)}
          style={{ gridRow: 5, gridColumn: 7 }}
        >
          J
        </div>
        <div
          className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`}
          onClick={(e) => handleWordClick('projeto', e)}
          style={{ gridRow: 6, gridColumn: 7 }}
        >
          E
        </div>
        <div
          className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`}
          onClick={(e) => handleWordClick('projeto', e)}
          style={{ gridRow: 7, gridColumn: 7 }}
        >
          T
        </div>
        <div
          className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`}
          onClick={(e) => handleWordClick('projeto', e)}
          style={{ gridRow: 8, gridColumn: 7 }}
        >
          O
        </div>

        {/* Text container for LUCAS CORREA extra info */}
        <div className={`hover-text lucascorrea-text ${activeWord === 'lucas' ? 'visible' : ''}`}>
          Designer de 27 anos que mora<br />
          atualmente no Rio de Janeiro e fez<br />
          esse site.
        </div>

        {/* Separate hover text container for SOBRE info */}
        <div className={`hover-text sobre-text ${activeWord === 'sobre' ? 'visible' : ''}`}>
          <div className="social-links">
            <a href="https://www.behance.net/santos-lucasc" target="_blank" rel="noopener noreferrer">
              Behance
            </a>
            <a href="https://openprocessing.org/user/269230" target="_blank" rel="noopener noreferrer">
              OpenProcessing
            </a>
            <a href="https://instagram.com/lu________cas/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
          <div className="about-content">
            <p>
              Me chamo Lucas, sou apaixonado por aprender e explorar. Formado pela ESPM, onde tive a
              oportunidade de ser bolsista do CNPQ. Possuo interesse em{' '}
              <a
                href="/portfolio-crossword/monografia.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="content-link"
              >
                design generativo e identidades visuais dinâmicas
              </a>
              , além de pesquisa e interação. Muito antes de tudo isso desenvolvi uma paixão pela web e
              suas possibilidades que venho tentando nutrir com a minha carreira profissional.
            </p>
            <p className="experience">
              Experiência com o Pacote Adobe, Figma, Wordpress (ACF, Elementor); HTML/CSS/Javascript;
              p5.js e muitas outras ferramentas que me apaixonei em futucar e meter a cara.
            </p>
          </div>
        </div>

        {/* The PROJETO hover text container for any additional overlay content */}
        <div className={`hover-text projeto-text ${activeWord === 'projeto' ? 'visible' : ''}`}>
          {/* Additional PROJETO overlay content (if any) can go here */}
        </div>
      </div>
    </div>
  );
}

export default App;
