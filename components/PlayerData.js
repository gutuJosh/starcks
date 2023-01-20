
function PlayerAvatar({ player }) {

	const defaultImage = 'https://app.starcks.io/assets/images/coin.png';

	

	return(
		<section className="avatar">
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
		)

}

export default PlayerAvatar;