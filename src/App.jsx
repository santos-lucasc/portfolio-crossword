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
        <div className={`ascii-art ${activeWord === 'sobre' ? 'visible' : ''}`}>
{`                                 ..:..                                  
                            .      ...:;.                               
                            .      ..:..;;                              
                           . :::::::;++:;++                             
                           .:;;+;:..:;XX+;+:                            
                           :+;:;++::;x$$X+;:                            
                           ;;;;;xx:;;+xX$x;:                            
                           ;+;:x:+:;+xX$$xx;                            
                           ;;;;;;+;;+X$&$+x;                            
                           ;;;;;+x;;xX$$xX+                             
                           ;+;;;+xxXX$$X;$                             
                        ;;xXX;;;;+XXx+;;:X&&X                           
                    :xXxxXX$X;;;:;+;:::;X&$$$XXX;                       
                  +XXXXxXXx$$X:;;;;;;+xX$$X$xxxxX$X                     
                 X$XXXXXxxX$$X+:;;;XX$$X+X&XxxxxxX$&X                   
                ;$$XXXXXXXxX$$X:+XX$$XxXxxxxXxxXxX$$&X+                 
                $$XXXXXXXXXXXX$$$$XXxxxxxxXXXXXXx$XX$$$.                
               X$$XXXXXXXXXXX$X$XXXXXXxXXXXXxXXxX$Xx$$$&                
              x$$$$$XXXXXXXX$X$XXXXXXXxXXXXxXXXxXXXXX$X&X               
             x$X$XXXXXXXXXXX$$XXXXXXXXXXXXXXXXXX$XXx$XX&&X              
            :X$XXXXXXXXXXXX$$$XXXXXXXXXXXXXXXX$XXXx$$xX$&$              
            xXXXXXXXXXXXXX$$XXXXXXXXXXXXXX$$$$X$XXXXX$XX$&;             
            x$XXXXXXXXXXXX$$$XXXXXXXXXXXX$$$&&X$xxX$$XXX$&$             
              :+XXXX$XXXXX$XXXXXXXXXX$XXX$&&&$$xxxXXXXXXX&&.            
              :::+XXXXXXX$$XXXXXXXXX$XxXXX&&&XXxxxXXXXXXX$&X            
             .:::;$XXXXXX$XXXXXXXXXX&XXXX$$$X++xxxxxXXXXX$&&            
             :::::XXXXXX$XXXXXXXXXXX&$XXX$$X+$$xxxXXxxXXXX&&:           
             :::.:XXXXX$$XXXXXXXXXXX&&$XXX&XxX&XXXXXXXXXX$&&x           
             ::..;XXXXX$$XXXXXXXXXXX&&&$$XX&$x+::;++xxXX:.              
             ::..+XXXX$$$XXXXXXXXXXX$&&&$XXXXX+$;:::;;x.                
            .::..+XXXX$$$XXXXXXXXXX$$&&&$XXXxx;;::::;+X                 
            .:..xXXXXX$X$XXXXXXXXXX$$$$&$XXx+;::::::;xX                 
            ::.+XXXXX$$$XXXXXXXXXX$$$&&$$$XX+;:::::;+X+                 
            ;XXXXXXXX$$$$XXXXXXXX$$$&&&$$XXx+;:::::;xx                  
            xXX+XXXXX$$XXXXXXXXXX$$&&&$$$$Xx;;::::;+X+                  
            xxxxXXXXX$XXXXXXXXXX$$$&&$$$$X;;;.:::;;x+                   
            xxxXXXXXX$$$XXXXXXXX$$$$$$XxxXx;:.:::;xx                    
           ;xXXx$$XXX$$$XXXXXXXX$$$$$$$Xx++x..::;+x                     
           .xXxxX$XX$&$XXXXXXXXX$$XXXxxxxX$$x.::+x                      `}
</div>
        <div className={`hover-text lucascorrea-text ${activeWord === 'lucas' ? 'visible' : ''}`}>
          Designer de 27 anos que mora<br />
          atualmente no Rio de Janeiro e fez<br />
          esse site.
        </div>
        <div className={`hover-text sobre-text ${activeWord === 'sobre' ? 'visible' : ''}`}>
          <div className="social-links">
            <a href="https://www.behance.net/santos-lucasc" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="https://openprocessing.org/user/269230" target="_blank" rel="noopener noreferrer">OpenProcessing</a>
            <a href="https://instagram.com/lu________cas/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="about-content">
            <p>Me chamo Lucas, sou apaixonado por aprender e explorar. Formado pela ESPM-RJ, onde tive a oportunidade de ser bolsista do CNPQ. Possuo interesse em design generativo e identidades visuais dinâmicas, além de pesquisa e interação. Muito antes de tudo isso desenvolvi uma paixão pela web e suas possibilidades que venho tentando nutrir com a minha carreira profissional.</p>
            <p className="experience">Experiência com o Pacote Adobe, Figma, Wordpress (ACF, Elementor); HTML/CSS/Javascript; p5.js e muitas outras ferramentas que me apaixonei em futucar e meter a cara.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App