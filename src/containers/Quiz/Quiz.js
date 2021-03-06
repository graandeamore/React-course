import React, {Component} from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component{
    state = {
        quiz: [
            {
                answers: [
                    {text: 'Вопрос 1'},
                    {text: 'Вопрос 2'},
                    {text: 'Вопрос 3'},
                    {text: 'Вопрос 4'},
                    {text: 'Вопрос 5'}

                ]
            }
        ]
    }
    render() {
        return(
            <div className={classes.Quiz}>
                    <div className={classes['QuizWrapper']}>
                        <h1>Quiz</h1>
                        <ActiveQuiz
                                    answers={this.state.quiz[0].answers}
                        />
                    </div>
            </div>
        )
    }
}

export default Quiz
