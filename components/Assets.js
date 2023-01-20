import { useState, useEffect } from "react";

function Assets({ data, symbol}) {

 const [token, setToken] = useState(false);

  useEffect(() => {

   let getToken;

   for(let key in data){

   	 if(key.includes(symbol)){
         getToken = data[key];


   	 }
   }

   setToken(getToken);
   

  }, [symbol]);
	

	return(
		<>
		{token && 
		<section className="container token pad20">

        <h3 className="text-aqua">Token</h3>

        <div className="flex wrap flex-row flex-horizontal-gap">
        
        
         <div className="flex flex-column pad5">
           <div className="flex-item">
            <p className="text-white">Prezzo</p>
           </div>
           <div className="flex-item">
            <p className="text-white">{token.current?.price ? token.current?.price : token.price} ${symbol}</p>
           </div>
         </div>

         <div className="flex flex-column pad5">
           <div className="flex-item">
            <p className="text-white">24h%</p>
           </div>
           <div className="flex-item">
            <p className="text-aqua">{token.current?.percentage}</p>
           </div>
         </div>

        <div className="flex flex-column pad5">
           <div className="flex-item">
           <p className="text-white">Volume 24h</p>
           </div>
           <div className="flex-item">
            <p className="text-aqua">{token.volume24h ? token.volume24h : ''}</p>
           </div>
         </div>


        <div className="flex flex-column pad5">
           <div className="flex-item">
            <p className="text-white">Circolante</p>
           </div>
           <div className="flex-item">
             <p className="text-white">-</p>
           </div>
         </div>


        <div className="flex flex-column pad5">
           <div className="flex-item">
            <p className="text-white">Token totali</p>
           </div>
           <div className="flex-item">
            <p className="text-white">{token.current?.availability_formatted}</p>
           </div>
         </div>


        </div>
           
		</section>
		}
        </>
	)

}

export default Assets;