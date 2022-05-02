import { useState, useEffect } from "react";

export default function Fetcher(props) {
  const [character, setCharacter] = useState({ name: "loading" });
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    setLoading((old) => old = true);
    async function get() {
      const res = await fetch("https://swapi.dev/api/people/" + count);
      const data = await res.json();
      setCharacter(data);
      setLoading((old) => old = false);
    }
    get();
  }, [count]);

  function nextCharacter() {
    setCount((old) => old + 1);
    setCharacter({ name: "Loading" });
  }

  function subtractCharacter() {
    setCount((old) => old === 1 ? old : - 1 );
    setCharacter({ name: "Loading" });
  }

  return (
    <div>
      <button disabled={loading} onClick={nextCharacter}>Add 1</button>
      <button disabled={loading} onClick={subtractCharacter}>Go back</button>
      {count} - {character.name}
    </div>
  );
}
