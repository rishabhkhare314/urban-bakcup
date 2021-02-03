import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Spinner from "./core/spinner/Spinner";

const Login = lazy(() => import("./modules/auth/components/login/Login"));
const SignUp = lazy(() => import("./modules/auth/components/signup/SignUp"));
const ForgotPassword = lazy(() =>
  import("./modules/auth/components/forgotPassword/ForgotPassword")
);
const LandingPage = lazy(() =>
  import("./modules/landingPage/components/LandingPage")
);
const Services = lazy(() => import("./modules/service/components/Service"));
const ServiceCategories = lazy(() =>
  import("./modules/serviceCategory/components/ServiceCategories")
);
const SubCategory = lazy(() =>
  import("./modules/serviceSubCategory/SubCategory")
);
const Cart = lazy(() => import("./modules/cart/components/Cart"));
const Orders = lazy(() => import("./modules/orders/components/orders"));
const NotFound = lazy(() => import("./shared/components/404/NotFound"));
const UserProfile = lazy(() =>
  import("./modules/userProfile/components/UserProfile")
);
const App = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/:cityId/service/" exact component={Services} />
          <Route
            path="/:cityId/service/:serviceId/service-categories"
            exact
            component={ServiceCategories}
          />

          <Route path="/cart" exact component={Cart} />
          <Route path="/orders" exact component={Orders} />

          <Route
            path="/:cityId/service/:serviceId/service-categories/:categoryId/services"
            exact
            component={SubCategory}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
          <Route path="/user-profile" exact component={UserProfile} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default App;
