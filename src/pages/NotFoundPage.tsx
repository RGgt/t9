import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      {' '}
      <h1>Content not found</h1>
      <Link to="/">GO HOME</Link>
    </>
  );
}
