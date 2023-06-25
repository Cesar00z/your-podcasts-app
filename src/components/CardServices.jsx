export default function CardServices({ img, title, info }) {
  const imgSource = `${img}`;
  return (
    
      <div className="card">
        <img src={imgSource} alt="" />
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
    
  )
}