import sedan from './assets/img/icon-sedans.svg';
import suv from './assets/img/icon-suvs.svg';
import luxury from './assets/img/icon-luxury.svg';
import './assets/App.css';

function App() {
  return (
    <div className="container">
      <div className="box box-1">
        <img src={sedan} className="" alt=""/>
        <h1 className="box-title">SEDANS</h1>
        <p className="box-p">Choose a sedan for its affotdability and excellent fuel
          economy. Ideal for cruising in the city or on your next
          road trip.
        </p>
        <h2 className="box-btn box-btn-sedan">Learn More</h2>
      </div>
      <div className="box box-2">
        <img src={suv} className="" alt=""/>
        <h1 className="box-title">SUVS</h1>
        <p className="box-p">The an SUV for its spacious interior, power, and versatility.
          Perfect for your next family vacation and off-road adventures.
        </p>
        <h2 className="box-btn box-btn-suv">Learn More</h2>
      </div>
      <div className="box box-3">
        <img src={luxury} className="" alt=""/>
        <h1 className="box-title">LUXURY</h1>
        <p className="box-p">Cruise in the best car brands without the bloadted prices.
          Enjoy the enhaced comfort of a luxury rental and arrive in style.
        </p>
        <h2 className="box-btn box-btn-luxury">Learn More</h2>
      </div>
    </div>
  );
}

export default App;
