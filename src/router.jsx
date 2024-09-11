import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import StockOverview from "./pages/stockOverview/StockOverview";
import LIstItems from "./pages/stockOverview/ListItems";
import CreateNewItem from "./pages/stockOverview/CreateNewItem";
import ShowItem from "./pages/stockOverview/ShowItem";
import UpdateItem from "./pages/stockOverview/UpdateItem";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "items",
        element: <StockOverview />,
        children: [
          {
            index: true,
            element: <LIstItems />,
          },
          { path:"new", element: <CreateNewItem/>},
          { path: ":id", element: <ShowItem /> },
          { path: ":id/update", element: <UpdateItem /> },
        ],
      },
    ],
  },
]);

export default router;
