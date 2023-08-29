import { useState, Animated, useEffect } from 'react'
import style from './layouts/Home.module.css'
function Home() {

const frases = [
    {
        id: 1,
        pergunta1: "Iasmin te",
        pergunta2: "de baba este domingo?",
        alternativas: ["he quedado", "has quedado", "ha quedado", "hemos quedado", "habeis quedado", "han quedado"],
        correto: 2
    },
    {
        id: 2,
        pergunta1: "En viernes yo",
        pergunta2: "mi abuela com mi madre y hermano",
        alternativas: ["he visitado","has visitado", "ha visitado", "hemos visitado", "habeis visitado", "han visitado"],
        correto: 1
    },
    {
        id: 3,
        pergunta1: "Eu",
        pergunta2: "estudar na ETEC",
        alternativas: ["amo", "adoro", "odeio"],
        correto: 1
    },
    {
        id: 4,
        pergunta1: "Eu",
        pergunta2: "dormir",
        alternativas: ["amo dms", "adoro mt", "odeio as vezes"],
        correto: 1
    }
]



const [frasecerta, setFrasecerta] = useState(0);
const [jaRespondeu, setJaRespondeu] = useState(0);
const [color, setColor] = useState("#FFF");
const [colortext, setColorText] = useState("#000");

function ConfirmarResposta() {
    if (jaRespondeu === 0) {
        setJaRespondeu(1);
        if (selectedOptionIndex + 1 === frases[frasecerta].correto) {
            setColor("green")
            setColorText("#FFF")
        }
        else {
            setColor("red")
            setColorText("#FFF")
        }
    }
    else {
        setJaRespondeu(0);
        setFrasecerta(frasecerta + 1);
        setColor("#fff");
        setColorText("#000")
    }
}



const targetColors = ['#0B0531', '#040113','#080427','#06031d','#020009'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) =>
        (prevIndex + 1) % targetColors.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);



    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    const handleSelectChange = (event) => {
      const selectedIndex = parseInt(event.target.value);
      setSelectedOptionIndex(selectedIndex);
    };

    

    return (
        <div className={style.containerHome} style={{backgroundColor: targetColors[currentColorIndex]}}>
            <header className={style.header}>
                <h1>VerboMania</h1>
            </header>

            <div style={{ width: '50%', backgroundColor: 'rgba(225, 3, 90, 0.22)', height: 12, borderRadius: 5, marginTop: 20}}>
                <div style={{ width: `${frases[frasecerta].id / 6 * 100}%`, backgroundColor: '#E1035A', height: 12, borderRadius: 5 }}></div>
            </div>

            <main className={style.main}>
                <h3>PERGUNTA {frases[frasecerta].id}</h3>
                <div className={style.frase}>
                    <p className={style.name}>{frases[frasecerta].pergunta1}
                    <select onChange={handleSelectChange} style={{fontSize: 40, padding: 5, backgroundColor: color, color: colortext}}>
                        {
                            frases[frasecerta].alternativas.map((option, index) => {
                                return (
                                    <option value={index} style={{fontSize: 20}}>{option}</option>
                                )
                            })
                        }
                    </select>
                    {frases[frasecerta].pergunta2}
                    </p>
                </div>
                <div className={style.button}>
                    <button className={style.buttonNext} onClick={ConfirmarResposta}>
                        <text>{jaRespondeu === 0 ? "Confirmar" : "Próximo"}</text>
                    </button>
                </div>
            </main>

            <footer>
            </footer>
        </div>
    )
}

export default Home
