import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [status, setStatus] = React.useState("playing");

  function handleSubmitGuess(guess) {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);

    if (guess === answer) {
      setStatus("won");
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  }
  return (
    <div>
      <GuessResults guessList={guessList} answer={answer} />
      {""}
      <GuessInput status={status} handleSubmitGuess={handleSubmitGuess} />

      {status === "won" && (
        <WonBanner status="happy" numOfGuesses={guessList.length} />
      )}
      {status === "lost" && <LostBanner status="sad" answer={answer} />}
    </div>
  );
}

export default Game;
