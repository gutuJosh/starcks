
function Footer() {


	

	return(
		<footer className="mtop100 pad20">
     <div className="flex wrap felx-row mtop20 pad-y-20">
        <div>
          <img src="https://app.starcks.io/assets/images/starcks-white-logo.svg" alt="logo" />
         </div>
         <div className="flex-item flex flex-right auto social">
           <div className="flex flex-row wrap">
            <img src="https://app.starcks.io/assets/images/discord.svg" alt="icon"/>
            <img src="https://app.starcks.io/assets/images/twitter.svg" alt="icon" className="pad-x-10"/>
            <img src="https://app.starcks.io/assets/images/instagram.svg" alt="icon"/>
           </div>
         </div>
      </div> 
      <div className="mtop20">
       <p className="text-center text-grey small">&copy; Copyright 2022. Tutti i diritti sono riservati. Starcks S.r.l. P.IVA: 16566161002</p>
      </div>
           
		</footer>
		)

}

export default Footer;