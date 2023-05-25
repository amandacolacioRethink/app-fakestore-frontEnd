import './AboutUs.css'

const FrameAbout = (props) => {
  return (
    <div className="frame">
        <i>{props.icon}</i>
        <h3>{props.title}</h3>
        <h4>{props.text}</h4>
    </div>
  )
}

export default FrameAbout