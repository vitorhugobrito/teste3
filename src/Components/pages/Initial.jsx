import React from 'react'
import style from './layouts/Initial.module.css'

function Initial() {
    return (
        <div className={style.containerInitial}>
            <h1 className={style.title}>VerboMania</h1>
            <button className={style.buttonInitial}><p>Jogar</p></button>
        </div>
    )
}

export default Initial