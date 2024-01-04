// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {destinationDetails} = props
  const {suggestion} = destinationDetails

  return (
    <li className="destination-item">
      <p className="name">{suggestion}</p>
    </li>
  )
}

export default SuggestionItem
