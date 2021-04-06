import './assets/App.css';
import CardHeader from './assets/img/bg-pattern-card.svg';
import Profile from './assets/img/image-victor.jpg';

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={CardHeader} alt="Card header" />
        </div>
        <div className="card-profile-picture">
          <img src={Profile} alt="profilepic" />
        </div>
        <div className="card-profile-name">
          <h2>Victor Crest<span> 26</span></h2>
          <span>London</span>
        </div>
        <div className="card-bottom">
          <div className="card-bottom-followers">
            <h2>80k</h2>
            <span>Followers</span>
          </div>
          <div className="card-bottom-likes">
            <h2>80.3k</h2>
            <span>Likes</span>
          </div>
          <div className="card-bottom-photos">
            <h2>1.4k</h2>
            <span>Photos</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
