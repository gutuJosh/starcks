import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AppLayout from "../components/layout/AppLayout";
import { AppContext } from "../context/AppContextProvider";
import { useContext } from "react";
import PlayerAvatar from "../components/PlayerAvatar";
import Assets from "../components/Assets";


export { getServerSideProps } from "../http/middleware/PlayerServerSideProps";

function Player({ playersData, playerDetails }) {

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState(playerDetails);
  const [assets, setAssets] = useState(false);
  const [state, dispatch] = useContext(AppContext);
  
  useEffect(() => {

    //after component was rendered:

    //set loading status to false and exit
    if(loading){
       setLoading(false);
       return;
    }
      
    // get player details each time the router query change 
    async function getDetails(){

      const { id }  = router.query;
      let url = `/api/get_player_data?id=${encodeURIComponent(id)}`;
      
      const query = id ? await axios.get(url) : false;
    
      if (query) {
       setPlayer(query.data);
      }
      
    }

    getDetails();

  }, [router.query]);



  useEffect(() => {
    //after component was rendered:

    //update the store so the <Header/> component will have access to playersData
    if(playersData){
      dispatch({
        type: "SET_PLAYERS",
        payload: playersData,
      });
    }

   //call for assets data only once
   if(!assets){
      axios.get(`/api/get_assets`)
      .then(response => setAssets(response.data))
      .catch((err) => {
          console.log(err);
      });
   }

  }, []);


  return (
      <AppLayout title="Player Page" description="Description">
       <PlayerAvatar player={player} />
       {assets && (
         <Assets data={assets} symbol={player.token.symbol}/>
       )}
      </AppLayout>
    )


}

export default Player;
