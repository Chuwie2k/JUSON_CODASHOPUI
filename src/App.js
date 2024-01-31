import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="games/codashop.png" alt="Codashop Logo" />
      </div>
      <div className="header-content">
        <p>The fastest & easiest way to buy game credits</p>
        </div>
    </header>
  );
}

function Shop() {
  const shopData = [
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
      name: "Steam Wallet Code",
      photoName: "games/steam.webp",
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
      name: "Garena Shells",
      photoName: "games/garena.png",
    },
  ];

  return (
    <div className="billboard">
  <img className="billboard-image" src="games/billboard.jpg" alt="Billboard" />
      <div className="shop">
        <h1>Save With Codacash</h1>
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
      {/* Add any additional catalog information (price, etc.) here */}
    </div>
  );
}

function Footer() {
}

export default App;
