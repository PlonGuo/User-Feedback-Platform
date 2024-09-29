import FeedbackItem from './FeedbackItem'
import {useContext} from 'react'
// import { PropTypes } from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../index.css'; // 包含自定义的过渡效果
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            <TransitionGroup>
                {feedback.map((item) => (
                    <CSSTransition 
                        key={item.id}
                        timeout={500}
                        classNames='fade'
                    >
                        <FeedbackItem 
                            key={item.id} 
                            item={item} 
                            
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}



export default FeedbackList
