import { AppContext } from "../context/AppContextProvider";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";


export default function PlayerSelector() {

  const router = useRouter();
  const [state] = useContext(AppContext);

  const handleSelect = (e) => {
    if(e.target.value !== ''){
       router.push(`${router.pathname}?id=${e.target.value}`, undefined, {shallow: true},);
     }
  }

  return (
       <>
       <label htmlFor="players" className="pad5">Select player:</label>
       <select 
        name="players"
        className="text-white pad5"
        onChange={(e) => handleSelect(e)}
        value={router.query.id !== undefined ? router.query.id : state.players[0]?.uuid}
        >
           {state.players?.map((item, idx) => (
                <option 
                 key={idx} 
                 value={item.uuid}
                 >
                 {`${item.givenName} ${item.familyName}`}
           </option>
         ))}
       </select>
       </>
  )
}
