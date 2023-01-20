import ScoreCard from "./ScoreCard";

function PlayerAvatar({ player }) {

	const defaultImage = 'https://app.starcks.io/assets/images/coin.png';

	

	return(
		<>

		<section className="avatar mbottom50">
		 <div className="container flex flex-row flex-horizontal-gap relative">
		  <article>
           <h1>{`${player.givenName} ${player.familyName}`}</h1>
           <h2>{player.token.symbol}</h2>
		  </article>
		  <aside>
		   <img src={player.files[0] ? player.files[0].url !== '' ? player.files[0].url :  player.files[1].url : defaultImage}  alt={`${player.givenName} ${player.familyName}`} className="absolute block"/>
		  </aside>
		 </div>
		</section>

		<section className="info mtop50">
		 <div className="container flex flex-row flex-horizontal-gap relative">
		  <article className="flex-item">
           <ul>
            <li>
            <p>
             Data di nascita: <strong>{player.dateOfBirth || ''}</strong>
            </p>
            </li>
            <li>
            <p>
             Luogo di nascita: <strong>{player.placeOfBirth || ''}</strong> 
            </p>
            </li>
             <li>
            <p>
             Posizione: <strong>{player.role}</strong> 
            </p>
            </li>
             <li>
            <p>
             Squadra attuale: <strong>{player.team}</strong> 
            </p>
            </li>
           </ul>

           <p className="mtop20">{player.description}</p>
		  </article>
		  <aside className="flex-item flex flex-right"> 
           <ScoreCard uuid={player.uuid} />
		  </aside>
		 </div>
		</section>
		</>
		)

}

export default PlayerAvatar;