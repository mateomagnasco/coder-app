import './item.css'
const Item = (props) => {
  if(!props.title){
    <h3>Loading...</h3>
  }
  return (
      <div className="card mb-3" id="imagen" >
        
        
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <img src={props.pictureUrl} alt="..." id="max"/>
          <p className="card-text">{props.description}</p>
          <p className="card-text">{props.price}</p>
        </div>
      </div>
  )
}

export default Item