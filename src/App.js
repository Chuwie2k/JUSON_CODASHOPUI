import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    setShowFooter(currentHour < 0 || currentHour >= 6);

    if (currentHour >= 22|| currentHour < 6) {
      setNightModeShop(true);
    } else {
      setNightModeShop(false);
    }
  }, []);

  const [nightModeShop, setNightModeShop] = useState(false);

  return (
    <div className="app">
      <Header />
      <Shop nightMode={nightModeShop} />
      {showFooter && <Footer />}
    </div>
  );
}

function Header({ nightMode }) {
  const headerClassName = nightMode ? 'header-night' : 'header-day';

  return (
    <header className={`header ${headerClassName}`}>
      <div className="logo">
        <img src="games/codashop.png" alt="Codashop Logo" />
      </div>
      <div className="header-content">
        <p>The fastest & easiest way to buy game credits</p>
      </div>
    </header>
  );
}

function Shop({ nightMode }) {
  const dayShopData = [
    {
      name: "Genshin Impact",
      photoName: "games/genshin.jpg",
    },
    {
      name: "Honkai: Star Rail",
      photoName: "games/honkai.jpg",
    },
    {
      name: "Mobile Legends",
      photoName: "games/Mlbb.jpg",
    },
    {
      name: "EA SPORTS FC Mobile",
      photoName: "games/eafc.png",
    },
    {
      name: "Call of Duty Mobile",
      photoName: "games/codm.jpg",
    },
    {
      name: "League of Legends: Wild Rift",
      photoName: "games/lolwr.jpg",
    },
    {
      name: "VALORANT",
      photoName: "games/valorant.png",
    },
    {
      name: "Farlight 64",
      photoName: "games/farlight.png",
    },
    {
      name: "Clash of Clans",
      photoName: "games/coc.jpg",
    },
    {
      name: "Clash Royale",
      photoName: "games/royale.jpg",
    },
    {
      name: "Metal Slug: Awakening",
      photoName: "games/metal.webp",
    },
    {
      name: "Minecraft",
      photoName: "games/minecraft.png",
    },
  ];

  const nightShopData = [
    {
      name: "Steam Wallet Code",
      photoName: "apps/steam.webp",
    },
    {
      name: "Garena Shells",
      photoName: "apps/garena.png",
    },
    {
      name: "PSN Voucher (SG)",
      photoName: "apps/psn.png",
    },
    {
      name: "Xbox Voucher (SG)",
      photoName: "apps/xbox.png",
    },
    {
      name: "Bigo Live Voucher",
      photoName: "apps/bigo.webp",
    },
    {
      name: "Disney+ Voucher",
      photoName: "apps/disney.jpg",
    },
    {
      name: "Crunchyroll",
      photoName: "apps/crunchyroll.png",
    },
    {
      name: "Viu",
      photoName: "apps/viu.jpg",
    },
    {
      name: "VivaMax",
      photoName: "apps/viva.jpg",
    },
    {
      name: "Bumble",
      photoName: "apps/bumble.jpg",
    },
    {
      name: "Tinder",
      photoName: "apps/tinder.jpg",
    },
    {
      name: "OkCupid",
      photoName: "apps/okcupid.jpg",
    },
  ];

  const shopData = nightMode ? nightShopData : dayShopData;

   const shopClassName = nightMode ? 'shop-night' : 'shop-day';

  return (
    <div className={`billboard ${shopClassName}`}>
      <img className="billboard-image" src="games/billboard.jpg" alt="Billboard" />
      <div className={`shop ${shopClassName}`}>
        <h1>Codashop Catalog</h1>
        <div className="catalogs">
          {shopData.map((catalog, index) => (
            <Catalog
              key={index}
              name={catalog.name}
              photoName={catalog.photoName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Catalog(props) {
  return (
    <div className="catalog">
      <img src={props.photoName} alt={props.name} />
      <h2>{props.name}</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Codashop Philippines</p>
    </footer>
  );
}

export default App;