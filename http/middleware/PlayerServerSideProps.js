import axios from "axios";
import { backend } from "../../config/app";
/**
 |--------------------------------------------------------------------------
 | Export Player Middleware |
 |-----------------------------------------------------------------------
 */

 /**
 *
 * @param context
 * @returns {Promise<Object>}
 */

export async function getServerSideProps(context) {

	const { id } = context.query;
	let playersData = false;
  let playerDetails = false;

	
   //call for all players data
   const getData = await axios.get(
      `${backend}/players`
   );

   if (getData) playersData = getData.data;

   //get the user id from the query or get the first user id in playersData
   const user_id = id ? id : playersData[0].uuid;

    if(user_id){
    //call for user details data
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