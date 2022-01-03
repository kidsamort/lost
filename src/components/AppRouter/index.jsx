import { Redirect, Route, Switch } from 'react-router-dom';
import { publicRoutes } from '../../router';

const AppRouter = () => {
  return (
    <div>
      <Switch>
        {publicRoutes.map((route) => (
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default AppRouter;
