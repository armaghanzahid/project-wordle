import React from "react";

function GuessInput({ status, handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert("Guess must be 5 characters long.");
      return;
    }
    handleSubmitGuess(guess);
    setGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <input
        id="guess-input"
        disabled={status !== "playing"}
        required
        autoFocus
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        type="text"
      />
    </form>
  );
}

export default GuessInput;
