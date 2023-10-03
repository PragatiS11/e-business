import "../Pages/Cart.style.css";
import { Link, useNavigate } from "react-router-dom";
import CartCards from "../Components/CartCards";
import useCartData from "../Cart";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const {
    total,
    handleIncreaseQty,
    handleDecreaseQty,
    handleRemoveFromCart,
    handleClearCart,
  } = useCartData();
  const { cartItems, totalPrice } = useSelector((store) => {
    return {
      cartItems: store.userReducer.user.cartItems,
      totalPrice: store.userReducer.user.totalPrice,
    };
  });
  // console.log("cart", cart);
  return (
    //Navbar
    <>
      <Navbar />
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <img
              src="https://cdnl.iconscout.com/lottie/premium/thumb/shopping-bag-6866084-5624247.gif"
              alt=""
            />
            <p>Your cart is currently empty !</p>
            <div className="start-shopping">
              <Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <Link to={"/collections"}>
                  <span>Start Shopping</span>
                </Link>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>

            <div className="cart-items">
              {cartItems &&
                cartItems?.map((cartItem) => {
                  return (
                    <CartCards
                      key={cartItem.id}
                      cartItem={cartItem}
                      handleDecreaseQty={handleDecreaseQty}
                      handleIncreaseQty={handleIncreaseQty}
                      handleRemoveFromCart={handleRemoveFromCart}
                    />
                  );
                })}
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">${total}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                {/* navigate to payment */}
                <Link to="/payment">
                  <button>Check out</button>
                </Link>

                <div className="continue-shopping">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    {/* navigate to home or collection */}
                    <span onClick={() => navigate("/")}>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
