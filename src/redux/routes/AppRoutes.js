import { Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import HouseDetailPage from "../components/pages/HouseDetailPage";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/login">
        <div>Login</div>
      </Route>
      <Route path="/register">
        <div>Register</div>
      </Route>
      <Route path="/house/:id">
        <HouseDetailPage />
      </Route>
      {/* <Route path="/house/:id" component={HouseDetailPage} /> */}
      <Route path="*">
        <div>404 Not Found!</div>
      </Route>
    </Switch>
  );
};

export default AppRoutes;


