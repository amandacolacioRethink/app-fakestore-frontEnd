import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
       <img src={props.imageURL} alt={props.imageAlt} />
       {props.title && <h4>{props.title}</h4>}
       {props.price && <p>R${props.price}</p>}
    </div>
  )
}

export default Card