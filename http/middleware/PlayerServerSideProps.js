import axios from "axios";
import { backend } from "../../config/app";
/**
 |--------------------------------------------------------------------------
 | Export Player Middleware |
 |-----------------------------------------------------------------------
 */

export async function getServerSideProps(context) {

	const { id } = context.query;
	let playersData = false;
  let playerDetails = false;

	

   const getData = await axios.get(
      `${backend}/players`
   );

   if (getData) playersData = getData.data;

   const user_id = id ? id : playersData[0].uuid;

    if(user_id){
		const result = await axios.get(
	      `${backend}/players/${user_id}`
	    );

	    if (result) playerDetails = result.data;
	}



    return {
        props: {
        	playersData,
        	playerDetails
        },
    };
}