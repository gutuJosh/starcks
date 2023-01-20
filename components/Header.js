import PlayersSelector from "./PlayersSelector";


export default function Header() {


  return (
       <header className="flex wrap flex-row pad20">
         <div>
          <img src="https://app.starcks.io/assets/images/starcks-white-logo.svg" alt="logo" />
         </div>
         <div className="flex-item flex flex-right auto">
          <PlayersSelector />
         </div>
       </header>
  )
}
