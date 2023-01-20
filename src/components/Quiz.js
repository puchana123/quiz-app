import { useContext, useEffect, useState } from "react"
import { DataContext } from "../App"
import QuizData from "../data/QuizData"

function Quiz(){

    const [current,setCurrent] = useState(0)
    const [selectedChoice,setSelectedChoice] = useState('')
    const {score,setScore,setAppState} = useContext(DataContext)

    useEffect(()=>{
        checkAswer()// eslint-disable-next-line
    },[selectedChoice])

    function checkAswer(){
        if(selectedChoice !== ''){
            if(selectedChoice === QuizData[current].answer){
                setScore(score+1)
                nextQuiz()
            }else{
                nextQuiz()
            }
        }
    }

    function nextQuiz(){
        setSelectedChoice('')
        if(current === QuizData.length-1){
            setAppState('score')
        }else{
            setCurrent(current+1)
        }
        
        
    }

    return(
        <div className="quiz">
            <h1>{QuizData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>setSelectedChoice('A')}>{QuizData[current].A}</button>
                <button onClick={()=>setSelectedChoice('B')}>{QuizData[current].B}</button>
                <button onClick={()=>setSelectedChoice('C')}>{QuizData[current].C}</button>
                <button onClick={()=>setSelectedChoice('D')}>{QuizData[current].D}</button>
            </div>
            <p>{`${current+1}/${QuizData.length}`}</p>
        </div>
    )
}

export default Quiz