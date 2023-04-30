import "./card.scss";

export default function card(props) {
  return (
    <div className="col-4 mb-4">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="image-wrapper">
            <img
              className="card-image"
              src={props.imageSource}
              width="60"
              height="60"
            />
          </div>
          <h5 className="card-title">{props.pokemonName}</h5>
          {props.stats.map((stat, index) => (
            <p className="card-text" key={index}>
              {stat.stat.name}: {stat.base_stat} {stat.effort}
            </p>
          ))}
          <a href={props.pokemonLink} className="btn btn-primary">
            View Pokemon
          </a>
        </div>
      </div>
    </div>
  );
}
