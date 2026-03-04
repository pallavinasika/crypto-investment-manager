import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Portfolio } from "./components/Portfolio";
import { Markets } from "./components/Markets";
import { Analytics } from "./components/Analytics";
import { Alerts } from "./components/Alerts";
import { Settings } from "./components/Settings";
import { AssetDetail } from "./components/AssetDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "portfolio", Component: Portfolio },
      { path: "markets", Component: Markets },
      { path: "analytics", Component: Analytics },
      { path: "alerts", Component: Alerts },
      { path: "settings", Component: Settings },
      { path: "asset/:id", Component: AssetDetail },
    ],
  },
]);
