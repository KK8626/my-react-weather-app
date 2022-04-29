import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project is open-sourced on{" "}
          <a
            href="https://github.com/KK8626/my-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          , hosted on{" "}
          <a
            href="https://affectionate-bartik-908a4d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>{" "}
          and it was coded with{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          by 👩‍💻 Katharina Kischkel
        </footer>
      </div>
    </div>
  );
}

export default App;
