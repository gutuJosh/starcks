
function ScoreCard({ uuid}) {


	

	return(
		<div className="score-card pad20">

         <h2 className="text-center text-aqua">
         Score card
         <span className="block small text-white mtop10">ID: {uuid}</span>
         </h2>
         
         <ul className="mtop10 pad-x-5">
          <li className="flex">
           <p className="flex-item text-green text-left">Parameters 1</p>
           <p className="flex-item text-white text-right text-red">Valore</p>
          </li>
           <li className="flex">
           <p className="flex-item text-green text-left">Parameters 2</p>
           <p className="flex-item text-white text-right text-red">Valore</p>
          </li>
           <li className="flex">
           <p className="flex-item text-green text-left">Parameters 3</p>
           <p className="flex-item text-white text-right text-red">Valore</p>
          </li>
           <li className="flex">
           <p className="flex-item text-green text-left">Parameters 4</p>
           <p className="flex-item text-white text-right text-red">Valore</p>
          </li>
           <li className="flex">
           <p className="flex-item text-green text-left">Parameters 5</p>
           <p className="flex-item text-white text-right text-red">Valore</p>
          </li>
         </ul>

         <p className="text-white text-center mtop10">Overall Score:</p>
         <p className="h2 text-aqua text-center">90</p>
           
		</div>
		)

}

export default ScoreCard;