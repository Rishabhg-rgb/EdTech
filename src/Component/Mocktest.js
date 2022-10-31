import React, { useEffect, useState } from 'react'

const Mocktest = () => {
    const [result, setResult] = useState(0)
    const [userAnswer, setUserAnswer] = useState([])
    const [realAnswer, setRealAnswer] = useState([])
    const [questions,setQuestions] = useState([])
    const fetchQuestions = async(req,res)=>{
        const data = await fetch("http://localhost:5000/api/ques/getquestions")
        const parsedData = await data.json()
        setQuestions(parsedData)
    }
    useEffect(() => {
      fetchQuestions()
      console.log(questions,"inside useeffect")
    },[])
    
    // const quesjson = [
    //     {
    //         "question": "who is president",
    //         "option1": "harry",
    //         "option2": "larry",
    //         "option3": "perry",
    //         "option4": "Draupadhi murmur",
    //         "answer": "Draupadhi murmur",
    //     },
    //     {
    //         "question": "who is prime minister",
    //         "option1": "harry",
    //         "option2": "larry",
    //         "option3": "perry",
    //         "option4": "Narendra modi ji",
    //         "answer": "Narendra modi ji",
    //     },
    //     {
    //         "question": "who is CM of UP",
    //         "option1": "harry",
    //         "option2": "larry",
    //         "option3": "perry",
    //         "option4": "Yogi Adityanath",
    //         "answer": "Yogi Adityanath",
    //     },
    //     {
    //         "question": "who is president of america",
    //         "option1": "harry",
    //         "option2": "larry",
    //         "option3": "perry",
    //         "option4": "Joe Biden",
    //         "answer": "Joe Biden",
    //     },
    // ]

    const submitans = async (e) => {
        e.preventDefault()
        questions.forEach((ques) => {
            console.log(ques.answer);
            setRealAnswer(realAnswer.push(ques.answer))
        })
        let answers = document.querySelectorAll('.answer')
        answers.forEach((answer) => {
            answer.classList.remove("hidden")
        })
        let options = document.querySelectorAll(".option")
        options.forEach((option) => {
            if (option.checked) {
                setUserAnswer(userAnswer.push(option.value))
            }
        })
        console.log(userAnswer,"user answer");
        console.log(realAnswer,"real answer");

        // Calculate marks
        let correctans = 0
        for (let i = 0; i < realAnswer.length; i++) {
            // console.log(userAnswer[i], realAnswer[i])
            if (userAnswer[i] == realAnswer[i]) {
                correctans = correctans + 1
                // console.log(result);   
                // setResult(result + 1)
            }
            console.log("inside loop");

        }
        console.log(realAnswer.length);
        
        setResult(result + correctans)

        let showResult = document.querySelector('.result')
        showResult.classList.replace('hidden','flex')


    }
    return (
        <div className="mocktest">
            <form method='get' onSubmit={submitans}>
                <div className="questions p-6">
                    {console.log(questions,"mo")}
                    {questions.map((element) => {
                        return <div className="ques m-2" key={element.id}>

                            <div className="question mt-4">Ques: {element.question}</div>
                            <div className="options flex flex-col items-start ">
                                <div className='flex'>
                                    <input required type="radio" name={element._id} id={element.option1} className='mr-2 option' value={element.option1} />{element.option1}
                                </div>
                                <div className='flex'>
                                    <input required type="radio" name={element._id} id={element.option2} className='mr-2 option' value={element.option2} />{element.option2}
                                </div>
                                <div className='flex'>
                                    <input required type="radio" name={element._id} id={element.option3} className='mr-2 option' value={element.option3} />{element.option3}
                                </div>
                                <div className='flex'>
                                    <input required type="radio" name={element._id} id={element.option1} className='mr-2 option' value={element.option4} />{element.option4}
                                </div>
                                <div className='hidden answer'>
                                    <h2 className='text-md font-bold text-green-500 '>Answer: {element.answer}</h2>
                                </div>
                            </div>
                        </div>
                    
                        
                    })}
                    <button className='p-2 bg-green-500'> Submit</button>
                </div>
            </form>


            <div className="result p-4 hidden justify-between " id='showresult'>
                <div className="correctanswer text-center border-r-4 px-2">
                    <h1 className='font-bold text-xl text-green-500 '>Correct Answer</h1>
                    <span className='font-medium text-xl'>{result}</span>
                </div>
                <div className="incorrectanswer text-center px-2">
                    <h1 className='font-bold text-xl text-red-500 '>Incorrect Answer</h1>
                    <span className='font-medium text-xl'>{result-realAnswer.length}</span>
                </div>
            </div>


        </div>
    )
}

export default Mocktest