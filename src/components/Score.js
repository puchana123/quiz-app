import { useContext } from "react"
import { DataContext } from "../App"
import QuizData from "../data/QuizData"

function Score(){
    const {score,setAppState,setScore} = useContext(DataContext)

    function retryQuiz(){
        setScore(0)
        setAppState('menu')
    }

    return(
        <div className="score">
            <h1>สรุปผลคะแนน</h1>
            <h2>{score} / {QuizData.length}</h2>
            <button onClick={retryQuiz}>ทำแบบทดสอบอีกครั้ง</button>
        </div>
    )
}

export default Score