import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <h1>Learn German with Flash Cards</h1>
      <br />
      <br />

      <ul className="list-inside list-disc">
        <li>
          <Link to="/cards/german-for-english/verbs-level-1/set-001">
            View set 1 <sub>weird experiments</sub>
          </Link>
        </li>
        <li>
          <Link to="/cards/spanish-for-english/verbs-level-1/set-001x">
            View set 0 <sub>will error</sub>
          </Link>
        </li>
        <li>
          <Link to="/cards/german-for-english/verbs-level-1/set-002">
            View set 2 <sub>hard</sub>
          </Link>
        </li>
        <li>
          <Link to="/cards/german-for-english/verbs-level-1/set-003">
            View set 3 <sub>easy</sub>
          </Link>
        </li>
      </ul>
      <br />

      <Link to="/tests">TESTS</Link>
      <br />
      <Link to="/experimental">ExperimentalPage</Link>
    </>
  );
}
