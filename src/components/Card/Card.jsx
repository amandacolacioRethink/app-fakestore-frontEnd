import './Card.css'
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
        {props.title && <h4>{props.title}</h4>}
        {props.price && <p>{props.price}</p>}
     
    </div>
  )
}

export default Card