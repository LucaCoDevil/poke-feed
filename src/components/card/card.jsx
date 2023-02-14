function card(props) {
  return (
    <div className="col-4">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          {console.log(props.imageSource)}
          <img src={props.imageSource} width="60" height="60" />
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

export default card;
