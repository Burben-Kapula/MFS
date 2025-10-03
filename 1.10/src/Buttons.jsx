import React, { useState } from "react";

const FeedbackButton = ({ onClick, text, style }) => (
    <button onClick={onClick} style={style}>{text}</button>
);
function Button({ name1, name2, name3 }){
    const style = {
        borderRadius:'16px',
        width:'100px',
        height:'30px'
    }
    const conteiner = {
        display: 'flex',
        gap: '10px'
    }


    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [allClicks, setAll] = useState([]);
    
    const goodFeedback = () => {
        setAll(allClicks.concat('G'))
        setGood(good + 1)
    }

    
    const neutralFeedback = () => {
        setAll(allClicks.concat('N'))
        setNeutral(neutral + 1)
    }
    
    const badFeedback = () => {
        setAll(allClicks.concat('B'))
        setBad(bad + 1)
    }

    const all = good + neutral + bad;
    const average = (good * 1 + neutral * 0 + bad * -1) / all;
    const positive = all === 0 ? 0 : (good / all) * 100;
    const nameAll = 'All'
    const nameAverage = 'Average'
    const namePositive = 'Positive'

    return(
        <div>
            <div style={conteiner}>

                <FeedbackButton onClick={goodFeedback} text={name1} style={style}/>
                <FeedbackButton onClick={neutralFeedback} text={name2} style={style}/>
                <FeedbackButton onClick={badFeedback} text={name3} style={style}/>

            </div>
            <p>Statistics</p>
            {all === 0 ? <p>No feedback given</p> : (
            <>
            <table>
                    <tr>{name1} {good}</tr>
                    <tr>{name2} {neutral}</tr>
                    <tr>{name3} {bad}</tr>

                    <tr>{nameAll} {all}</tr>
                    <tr>{nameAverage} {average}</tr>
                    <tr>{namePositive} {positive}</tr>
            </table>
            </>
            )}
            
        </div>

    )

}

export default Button