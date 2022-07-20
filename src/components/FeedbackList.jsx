import Feedbackitem from "./Feedbackitem"
import PropTypes from 'prop-types'
import {useContext} from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from "./shared/spinner"


function FeedbackList(props) {
  const {feedback,isLoading} = useContext(FeedbackContext)

    if(!isLoading&&(!feedback || feedback.length === 0)){
        return <p>No Feedback List</p>
    }
  // return (
  //   <div className="feedback-list">
  //       {props.feedback.map((item)=>(
  //           <Feedbackitem key = {item.id} item = {item} handleDelete = {props.handleDelete}/>
  //       ))}
  //   </div>
  // )
    return isLoading ? <Spinner />:(
      <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item)=>(
          <motion.div key = {item.id} initial = {{opacity: 0}} animate = {{opacity:1}} exit = {{opacity:0}}>
            <Feedbackitem item = {item} />
            </motion.div>
        ))}
      </AnimatePresence>
    </div>
    )


  
}



export default FeedbackList