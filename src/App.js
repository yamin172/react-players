import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';
import PlayerCard from './Component/PlayerCard/PlayerCard';
import Players from './PlayerData/data.json'

function App() {
    const [players, setPlayer] = useState([]);
      const [cart, setCart] = useState([]);

      useEffect(() =>{
        setPlayer(Players);
      },[])
      const handleAddPlayers = (player) =>{
        const newCart = [...cart, player];
        setCart(newCart);
      };

  return (
    <div>
      <Header></Header>
      <section className="container">
        <div className="team-show">
          <div className="total-players">
            <h3>Players available: {players.length}</h3>
            <h4>added players: {cart.length}</h4>
            <Cart cart={cart}></Cart>
          </div>
          <div className="add-team">
            <h3>welcome</h3>
          </div>
        </div>
      </section>
      <div className="container pt-3 card-ui">
        {players.map((player) => (
          <PlayerCard
            handleAddPlayers={handleAddPlayers}
            player={player}
          ></PlayerCard>
        ))}
      </div>
    </div>
  );
}

export default App;
