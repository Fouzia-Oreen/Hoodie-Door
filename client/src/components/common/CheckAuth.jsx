
/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({isAuthenticated, user, children}) => {
    const location = useLocation()
    console.log(location.pathname, isAuthenticated);

    /* check if the user is not authenticated then redirect the user to auth-login page for authentication */
    if (location.pathname === "/") {
      if (!isAuthenticated) {
        return <Navigate to="/auth/login" />;
      } else {
        /* if the user is authenticated and also an admin route the user to admin-dashboard */
        if (user?.role === "admin") {
          return <Navigate to="/admin/dashboard" />;
        } else {
          /* else to shop-home page */
          return <Navigate to="/shop/home" />;
        }
      }
    }

    /* check if the user is authenticated */
    if (
        !isAuthenticated &&
        !(
          location.pathname.includes("/login") ||
          location.pathname.includes("/register")
        )
      ) {
        return <Navigate to="/auth/login" />;
    }

  /* if the user is authenticated then navigate to dashboard of admin or client */
    if (
        isAuthenticated &&
        (location.pathname.includes("/login") ||
          location.pathname.includes("/register"))
      ) {
      /* if the user is authenticated then navigate to dashboard based on the user role, if role === admin then admin dashboard or else home */
        if (user?.role === "admin") {
          /* when user === admin navigate to admin dashboard */
          return <Navigate to="/admin/dashboard" />;
        } else {
          /* when user !== admin navigate to shop-homepage */
          return <Navigate to="/shop/home" />;
        }
    }

    /* if the user is authenticated but not an admin and trys to route admin page then navigate the user to an-unauth page */
    if (
        isAuthenticated &&
        user?.role !== "admin" &&
        location.pathname.includes("admin")
      ) {
        return <Navigate to="/unauth-page" />;
      }
    
      /* if the user is authenticated and an admin but trys to route home or shop page then navigate the user to admin-dashboard */
      if (
        isAuthenticated &&
        user?.role === "admin" &&
        location.pathname.includes("shop")
      ) {
        return <Navigate to="/admin/dashboard" />;
    }

    return {children};

}

export default CheckAuth
