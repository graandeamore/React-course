import React from "react";
import classes from "./AnswersList.module.scss";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => (
<ul className={classes.AnswersList}>
    { props.answers.map((answer, index) => { //выводим из массива props.answers вопросы
        return(
            <AnswerItem
                        key={index}
                        answer={answer}
            />
        )
    } )}
</ul>
)

export default AnswersList