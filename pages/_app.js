import "../styles/reset.css";
import "../styles/globals.css";
import { AppContextProvider } from "../context/AppContextProvider";


export default function App({ Component, pageProps }) {
  return (
  	   <AppContextProvider>
          <Component {...pageProps} />
       </AppContextProvider>

       );
}
