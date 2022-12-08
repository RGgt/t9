import { HashRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';

export function WrappedApp() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}
