import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'
function Feedbackitem(props) {
  const { deleteFeedback,editFeedback } = useContext(FeedbackContext)



  return (
    <Card >
        <div className="num-display">{props.item.rating}</div>
        <button onClick = {()=>deleteFeedback(props.item.id)} className='close'>
          <FaTimes color='purple' />
        </button>
        <button className='edit' onClick = {()=>editFeedback(props.item)}>
          <FaEdit color='purple' />
        </button>
        <div className="text-display">
            {props.item.text}
        </div>
       
    </Card>
  )
}


Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired
}
export default Feedbackitem