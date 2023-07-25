import Recruitment from "./pages/Recruitment";
import NotFoundPage from "./pages/NotFound/NotFound";
import { lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Design = lazy(() => import("./pages/Design-menu/Design"));
const Shop = lazy(() => import("./pages/Shop-menu/Shop"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails/ProductDetails")
);
const Cart = lazy(() => import("./pages/Cart"));
// Submenu
const ApartmentDetails = lazy(() =>
  import("./pages/Design-submenu/ApartmentDetails")
);
const ShophouseDetails = lazy(() =>
  import("./pages/Design-submenu/ShophouseDetails")
);
const OtherDesignDetails = lazy(() =>
  import("./pages/Design-submenu/OtherDesignDetails")
);
const LivingRoomDetails = lazy(() =>
  import("./pages/Shop-submenu/LivingRoomDetails")
);
const BedRoomDetails = lazy(() =>
  import("./pages/Shop-submenu/BedRoomDetails")
);
const KitchenDetails = lazy(() =>
  import("./pages/Shop-submenu/KitchenDetails")
);
export const RouteComponent = [
  {
    path: "*",
    element: <NotFoundPage />,
    enable: true,
  },
  {
    path: "/",
    element: <Home />,
    enable: true,
  },
  {
    path: "/design",
    element: <Design />,
    enable: true,
    child: [
      {
        path: "/design/apartment",
        element: <ApartmentDetails />,
        enable: true,
      },
      {
        path: "/design/shophouse",
        element: <ShophouseDetails />,
        enable: true,
      },
      {
        path: "/design/otherdesigns",
        element: <OtherDesignDetails />,
        enable: true,
      },
    ],
  },
  {
    path: "/shop",
    element: <Shop />,
    enable: true,
    child: [
      {
        path: "/shop/:id",
        element: <ProductDetails />,
        enable: true,
      },
      {
        path: "/shop/livingroom",
        element: <LivingRoomDetails />,
        enable: true,
      },
      {
        path: "/shop/bedroom",
        element: <BedRoomDetails />,
        enable: true,
      },
      {
        path: "/shop/kitchen",
        element: <KitchenDetails />,
        enable: true,
      },
    ],
  },
  {
    path: "/recruitment",
    element: <Recruitment />,
    enable: true,
  },
  {
    path: "/cart",
    element: <Cart />,
    enable: true,
  },
];
