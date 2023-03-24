import "./App.css";
import Card from "./Card";
import movies from './movies.json'

function App() {
  return (
    <div className="p-5 max-w-6xl mx-auto @container">
      <div className="@4xl:grid @4xl:grid-cols-[3fr_1fr]">
        <main className="@container">
          <Card {...movies[0]}/>
          <Card {...movies[1]}/>
          <Card {...movies[2]}/>
        </main>
        <article className="@container">
          <Card {...movies[3]}/>
          <Card {...movies[2]}/>
          <Card {...movies[1]}/>
        </article>
      </div>
    </div>
  );
}

export default App;
