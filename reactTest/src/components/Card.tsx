interface Props {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
}
const Card = ({ title, description, image, buttonText, buttonLink }: Props) => {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={image} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={buttonLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{buttonText}</a>
        </div>
    </div>
  )
}

export default Card

