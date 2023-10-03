import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { Admin } from "./Admin";
import { SingleProduct } from "./SingleProduct";
import Cart from "./Cart";
import Collections from "./Collections";
import { PrivateRoute } from "../Components/PrivateRoute";
import PaymentPage from "./PaymentPage";

export function AllRoutes() {
  return (
    <>
      <Routes>
        {/* Home Page Route*/}
        <Route path="/" element={<Home />} />

        {/* Store/Collections Page Route */}
        <Route path="/collections" element={<Collections />} />

        {/* Single Product Page */}
        <Route
          path="/view/:id"
          element={
            <PrivateRoute>
              <SingleProduct />
            </PrivateRoute>
          }
        />

        {/* Cart Page Route */}
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        {/* Payment Page Route */}
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <PaymentPage />
            </PrivateRoute>
          }
        />

        {/* Admin Page Route */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />

        {/* Any random url typed */}
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </>
  );
}
