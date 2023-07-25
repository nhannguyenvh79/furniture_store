import { useState, createContext, useEffect, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Mainmenu
import "./customHooks/animation.css";
import SetLanguage from "./components/SetLanguage";
import ScrollToTop from "./components/ScrollToTop";
import Advertisement from "./components/Advertisement";
import { RouteComponent } from "./Routes";

export const DataContainer = createContext();
export default function App() {
  const [CartItem, setCartItem] = useState(() => {
    const valueDefault = JSON.parse(localStorage.getItem("cartItem"));
    if (valueDefault) {
      return valueDefault;
    } else {
      return [];
    }
  });
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product, num = 1) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + num }
            : item
        )
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: num }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    }
    //else we just decrease the quantity
    else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  const deleteProduct = (product) => {
    setCartItem(CartItem.filter((item) => item.id !== product.id));
  };
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(CartItem));
  }, [CartItem]);

  const handleRoute = (routeArr) => {
    return routeArr.map((el) => {
      if ((!el.child || el.child.length === 0) && el.enable === true) {
        return <Route key={el.path} path={el.path} element={el.element} />;
      } else {
        return (
          <>
            <Route key={el.path} path={el.path} element={el.element} />
            {handleRoute(el.child)}
          </>
        );
      }
    });
  };

  return (
    <DataContainer.Provider
      value={{
        CartItem,
        setCartItem,
        addToCart,
        decreaseQty,
        deleteProduct,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      <Suspense fallback={<Loader />}>
        <Router>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <SetLanguage />
          <ScrollToTop />
          <Advertisement />
          <NavBar />
          <Routes>{handleRoute(RouteComponent)}</Routes>
          <Footer />
        </Router>
      </Suspense>
    </DataContainer.Provider>
  );
}
