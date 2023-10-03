import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { patchUserData } from "./Redux/UserReducer/action";

const useCartData = () => {
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(0);

  const { user, cartItems } = useSelector((state) => {
    return {
      user: state.userReducer.user,
      cartItems: state.userReducer.user.cartItems,
    };
  });
  // console.log(cartItems);

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);
  const dispatch = useDispatch();

  const handleIncreaseQty = (productId) => {
    let newArr = cartItems.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });

    dispatch(patchUserData(user.id, { cartItems: newArr }));

    // setCart((prev) => {
    //   return prev.map((product) => {
    //     if (product.id === productId) {
    //       return {
    //         ...product,
    //         quantity: product.quantity + 1,
    //       };
    //     }
    //     return product;
    //   });
    // });
  };

  const handleDecreaseQty = (productId) => {
    let newArr = cartItems
      .map((product) => {
        if (product.id === productId) {
          if (product.quantity > 1) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          } else {
            // If quantity becomes less than 1, remove the product
            return null;
          }
        }
        return product;
      })
      .filter(Boolean);

    dispatch(patchUserData(user.id, { cartItems: newArr }));

    // setCart((prev) => {
    //   return prev
    //     .map((product) => {
    //       if (product.id === productId) {
    //         if (product.quantity > 1) {
    //           return {
    //             ...product,
    //             quantity: product.quantity - 1,
    //           };
    //         } else {
    //           // If quantity becomes less than 1, remove the product
    //           return null;
    //         }
    //       }
    //       return product;
    //     })
    //     .filter(Boolean); // Filter out null values (removed products)
    // });
  };

  const handleRemoveFromCart = (productId) => {
    let newArr = cartItems.filter((product) => {
      return product.id !== productId;
    });
    dispatch(patchUserData(user.id, { cartItems: newArr }));

    // setCart((prev) => {
    //   return prev.filter((product) => {
    //     return product.id !== productId;
    //   });
    // });
  };

  const handleClearCart = () => {
    dispatch(patchUserData(user.id, { cartItems: [] }));

    // setTimeout(() => {
    //   setCart(null);
    // }, 500);
  };

  useEffect(() => {
    const findTotal = () => {
      let total = 0;
      cart?.reduce((acc, curr) => {
        total += curr.price * curr.quantity;
        return acc;
      }, total);
      dispatch(patchUserData(user.id, { totalPrice: total }));
      setTotal(total);
    };
    findTotal();
  }, [cart]);

  return {
    cart,
    total,
    handleIncreaseQty,
    handleDecreaseQty,
    handleRemoveFromCart,
    handleClearCart,
  };
};

export default useCartData;
