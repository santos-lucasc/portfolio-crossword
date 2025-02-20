import React, { useState } from 'react'
import './App.css'

function App() {
  const [activeWord, setActiveWord] = useState(null);

  const handleWordClick = (word, e) => {
    e.stopPropagation();
    if (!activeWord || activeWord === word) {
      setActiveWord(activeWord === word ? null : word);
    }
  };

  const handleBackgroundClick = (e) => {
    // Only reset if we're clicking the background or a non-active word's cell
    const isClickingActiveWord = e.target.closest(`.${activeWord}`);
    if (!isClickingActiveWord) {
      setActiveWord(null);
    }
  };

  return (
    <div className="app" onClick={handleBackgroundClick}>
      <div 
        className={`crossword ${activeWord ? `${activeWord}-clicked` : ''}`}
      >
        {/* Logo positioned in its own container */}
        <div className="logo-wrapper" style={{ gridRow: 2, gridColumn: 1 }}>
          <img src="logo_lcs.svg" alt="LCS Logo" className="logo" />
        </div>

        {/* LUCAS CORREA (horizontal) */}
        <div className="cell lucascorrea" onClick={(e) => handleWordClick('lucas', e)} style={{ gridRow: 4, gridColumn: 1 }}>
          <span className="number">1</span>
          L
        </div>
        <div className="cell lucascorrea" onClick={(e) => handleWordClick('lucas', e)} style={{ gridRow: 4, gridColumn: 2 }}>U</div>
        <div className="cell lucascorrea" onClick={(e) => handleWordClick('lucas', e)} style={{ gridRow: 4, gridColumn: 3 }}>C</div>
        <div className="cell lucascorrea" onClick={(e) => handleWordClick('lucas', e)} style={{ gridRow: 4, gridColumn: 4 }}>A</div>
        <div className="cell lucascorrea" onClick={(e) => handleWordClick('lucas', e)} style={{ gridRow: 4, gridColumn: 5 }}>S</div>
        <div className="cell lucascorrea" onClick={(e) => handleWordClick('lucas', e)} style={{ gridRow: 4, gridColumn: 6 }}>C</div>
        <div className="cell lucascorrea" onClick={(e) => handleWordClick('lucas', e)} style={{ gridRow: 4, gridColumn: 7 }}>O</div>
        <div className="cell lucascorrea" onClick={(e) => handleWordClick('lucas', e)} style={{ gridRow: 4, gridColumn: 8 }}>R</div>
        <div className="cell lucascorrea" onClick={(e) => handleWordClick('lucas', e)} style={{ gridRow: 4, gridColumn: 9 }}>R</div>
        <div className="cell lucascorrea" onClick={(e) => handleWordClick('lucas', e)} style={{ gridRow: 4, gridColumn: 10 }}>Ê</div>
        <div className="cell lucascorrea" onClick={(e) => handleWordClick('lucas', e)} style={{ gridRow: 4, gridColumn: 11 }}>A</div>

        {/* SOBRE (vertical) - these cells won't trigger when another word is active */}
        <div className={`cell sobre ${activeWord && activeWord !== 'sobre' ? 'inactive' : ''}`} 
             onClick={(e) => handleWordClick('sobre', e)} 
             style={{ gridRow: 4, gridColumn: 5 }}>
          <span className="number">2</span>
          S
        </div>
        <div className={`cell sobre ${activeWord && activeWord !== 'sobre' ? 'inactive' : ''}`} 
             onClick={(e) => handleWordClick('sobre', e)} 
             style={{ gridRow: 5, gridColumn: 5 }}>O</div>
        <div className={`cell sobre ${activeWord && activeWord !== 'sobre' ? 'inactive' : ''}`} 
             onClick={(e) => handleWordClick('sobre', e)} 
             style={{ gridRow: 6, gridColumn: 5 }}>B</div>
        <div className={`cell sobre ${activeWord && activeWord !== 'sobre' ? 'inactive' : ''}`} 
             onClick={(e) => handleWordClick('sobre', e)} 
             style={{ gridRow: 7, gridColumn: 5 }}>R</div>
        <div className={`cell sobre ${activeWord && activeWord !== 'sobre' ? 'inactive' : ''}`} 
             onClick={(e) => handleWordClick('sobre', e)} 
             style={{ gridRow: 8, gridColumn: 5 }}>E</div>

        {/* PROJETO (vertical) - these cells won't trigger when another word is active */}
        <div className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`} 
             onClick={(e) => handleWordClick('projeto', e)} 
             style={{ gridRow: 2, gridColumn: 7 }}>
          <span className="number">3</span>
          P
        </div>
        <div className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`} 
             onClick={(e) => handleWordClick('projeto', e)} 
             style={{ gridRow: 3, gridColumn: 7 }}>R</div>
        <div className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`} 
             onClick={(e) => handleWordClick('projeto', e)} 
             style={{ gridRow: 4, gridColumn: 7 }}>O</div>
        <div className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`} 
             onClick={(e) => handleWordClick('projeto', e)} 
             style={{ gridRow: 5, gridColumn: 7 }}>J</div>
        <div className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`} 
             onClick={(e) => handleWordClick('projeto', e)} 
             style={{ gridRow: 6, gridColumn: 7 }}>E</div>
        <div className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`} 
             onClick={(e) => handleWordClick('projeto', e)} 
             style={{ gridRow: 7, gridColumn: 7 }}>T</div>
        <div className={`cell projeto ${activeWord && activeWord !== 'projeto' ? 'inactive' : ''}`} 
             onClick={(e) => handleWordClick('projeto', e)} 
             style={{ gridRow: 8, gridColumn: 7 }}>O</div>

        {/* Text containers */}
        <div className={`hover-text lucascorrea-text ${activeWord === 'lucas' ? 'visible' : ''}`}>
          Designer de 27 anos que mora<br />
          atualmente no Rio de Janeiro e fez<br />
          esse site.
        </div>
        <div className={`hover-text sobre-text ${activeWord === 'sobre' ? 'visible' : ''}`}>
          <div className="social-links">
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="https://openprocessing.org" target="_blank" rel="noopener noreferrer">OpenProcessing</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </div>
          <div className="about-content">
            <p>Designer multidisciplinar apaixonado por aprender e explorar. Formado pela ESPM-RJ, onde tive a oportunidade de ser bolsista do CNPQ. Possui interesse em design generativo e identidades visuais dinâmicas, além de pesquisa e interação. Muito antes de tudo isso desenvolvi uma paixão pela web e suas possibilidades que venho tentando nutrir com a minha carreira profissional.</p>
            <p className="experience">Experiência com o Pacote Adobe, Figma, Wordpress (ACF, Elementor); HTML/CSS/Javascript; p5.js e muitas outras ferramentas que me apaixonei em futucar e meter a cara.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App