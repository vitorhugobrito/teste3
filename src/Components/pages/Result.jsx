import React from 'react'
import style from './layouts/Result.module.css'

function Result() {
    return (
        <div className={style.corpo}>
            <header className={style.header}>
                <p>voltar</p>
                <h1>VERBOMANIA</h1>
            </header>
            <main className={style.main}>
                <h3>RESPUESTAS</h3>
                <div className={style.respostas}>
                    <div className={style.frase}>
                        <p>Yo</p>
                        <p className={style.verbo1}>he caminado</p>
                        <p>por toda la cidade</p>
                    </div>

                    <div className={style.frase}>
                        <p>Yo</p>
                        <p className={style.verbo2}>he caminado</p>
                        <p>por toda la cidade</p>
                    </div>

                    <div className={style.frase}>
                        <p>Yo</p>
                        <p className={style.verbo3}>he caminado</p>
                        <p>por toda la cidade</p>
                    </div>

                    <div className={style.frase}>
                        <p>Yo</p>
                        <p className={style.verbo4}>he caminado</p>
                        <p>por toda la cidade</p>
                    </div>

                    <div className={style.frase}>
                        <p>Yo</p>
                        <p className={style.verbo5}>he caminado</p>
                        <p>por toda la cidade</p>
                    </div>

                    <div className={style.frase}>
                        <p>Yo</p>
                        <p className={style.verbo6}>he caminado</p>
                        <p>por toda la cidade</p>
                    </div>
                </div>
            </main>

            <footer>
                
            </footer>
        </div>
    )
}

export default Result