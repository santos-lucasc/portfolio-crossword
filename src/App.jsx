import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="crossword">
        {/* LUCAS (horizontal) */}
        <div className="cell" style={{ gridRow: 3, gridColumn: 1 }}>
          <span className="number">1</span>
          L
        </div>
        <div className="cell" style={{ gridRow: 3, gridColumn: 2 }}>U</div>
        <div className="cell" style={{ gridRow: 3, gridColumn: 3 }}>C</div>
        <div className="cell" style={{ gridRow: 3, gridColumn: 4 }}>A</div>
        <div className="cell" style={{ gridRow: 3, gridColumn: 5 }}>S</div>

        {/* CORREA (horizontal) */}
        <div className="cell" style={{ gridRow: 3, gridColumn: 6 }}>C</div>
        <div className="cell" style={{ gridRow: 3, gridColumn: 7 }}>O</div>
        <div className="cell" style={{ gridRow: 3, gridColumn: 8 }}>R</div>
        <div className="cell" style={{ gridRow: 3, gridColumn: 9 }}>R</div>
        <div className="cell" style={{ gridRow: 3, gridColumn: 10 }}>Ê</div>
        <div className="cell" style={{ gridRow: 3, gridColumn: 11 }}>A</div>

        {/* SOBRE (vertical) */}
        <div className="cell" style={{ gridRow: 3, gridColumn: 5 }}>
          <span className="number">2</span>
          S
        </div>
        <div className="cell" style={{ gridRow: 4, gridColumn: 5 }}>O</div>
        <div className="cell" style={{ gridRow: 5, gridColumn: 5 }}>B</div>
        <div className="cell" style={{ gridRow: 6, gridColumn: 5 }}>R</div>
        <div className="cell" style={{ gridRow: 7, gridColumn: 5 }}>E</div>

        {/* PROJETO (vertical) */}
        <div className="cell" style={{ gridRow: 1, gridColumn: 7 }}>
          <span className="number">3</span>
          P
        </div>
        <div className="cell" style={{ gridRow: 2, gridColumn: 7 }}>R</div>
        <div className="cell" style={{ gridRow: 3, gridColumn: 7 }}>O</div>
        <div className="cell" style={{ gridRow: 4, gridColumn: 7 }}>J</div>
        <div className="cell" style={{ gridRow: 5, gridColumn: 7 }}>E</div>
        <div className="cell" style={{ gridRow: 6, gridColumn: 7 }}>T</div>
        <div className="cell" style={{ gridRow: 7, gridColumn: 7 }}>O</div>
      </div>
    </div>
  )
}

export default App