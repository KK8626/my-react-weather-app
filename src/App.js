import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is{" "}
          <a
            href="https://github.com/KK8626/my-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          , hosted on{" "}
          <a
            href="https://affectionate-bartik-908a4d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>{" "}
          and it was coded by 👩‍💻 Katharina Kischkel
        </footer>
      </div>
    </div>
  );
}

export default App;
