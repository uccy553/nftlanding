import { Download, Features, SectionWrapper } from "./components";
import assets from './assets';
import styles from './styles/Global';

const App = () =>  {
  return (
    
     <>

      <SectionWrapper 
        title="Your own store of Nifty NFTs. Start selling and growing"
        description="Buy, store, collect NFTs, exchange and earn crypto. Join 25+ million people using Pronef Marketplace."

        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      
      <SectionWrapper 
        title="Smart user interface marketplace"
        description="Experience a buttery UI of proNef NFT Marketplace. Smooth constant colors of a fluent UI design."

        mockupImg={assets.homeCards}
        reverse
      />

      <Features />
      
      <SectionWrapper 
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into peoples hands"

        mockupImg={assets.feature }
        reverse
      />
      
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT"

        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />
      <div className="px-4 py-2 justify-center items-center text-center bg-primary banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className="bold">Uccy</span>
        </p>
      </div>
     </>
   
  );
}

export default App;
