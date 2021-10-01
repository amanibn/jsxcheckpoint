import logo from './logo.svg';
import './App.css';
import './style.css';
import myWonderfulImage from "./imageInSrc.jpg"
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title red">Your name here</h1>
        <br/>
        <img width="320" src={myWonderfulImage} />
        <br/>
        <img width="320px" src="/imageInPublic.jpg" />
      </div>
      <video width="320" height="240" controls>
      <source src="myVideo.mp4" type="video/mp4" />
</video>
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}

export default App;
