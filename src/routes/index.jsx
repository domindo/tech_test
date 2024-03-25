// import { Suspense, lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
// import { SpinnerLoading } from "~/components/Form/SpinnerLoading"
import { routePaths } from "~/constants"
import ProtectedRoute from "~/routes/ProtectedRoute"
import { Page403, Page404, Page500 } from "~/pages"
import { Home } from "~/features/home/components"
import { SteamDiscoveryLayout } from "~/features/steamDiscovery/components/SteamDiscoveryLayout"
import { TechDiscoveryLayout } from "~/features/techDiscovery"
import { GDevelopGameLayout } from "~/features/gDevelopGame"
import { RobloxGameDesignLayout } from "~/features/robloxGameDesign"
import { DesignAdventureLayout } from "~/features/designAdventure"
import { AlGameAdventureLayout } from "~/features/alGameAdventure"
import { AboutUs } from "~/features/aboutUs"

// const loadable = Component => props => {
//   return (
//     <Suspense fallback={<SpinnerLoading />}>
//       <Component {...props} />
//     </Suspense>
//   )
// }

// const Page403 = loadable(lazy(() => import("~/pages/Page403")))
// const Page404 = loadable(lazy(() => import("~/pages/Page404")))
// const Page500 = loadable(lazy(() => import("~/pages/Page500")))
// const Home = loadable(lazy(() => import("~/pages/Home")))

const AppRoutes = () => (
  <Routes>
    <Route path={routePaths.app.root} element={<ProtectedRoute />}>
      <Route index element={<Navigate to={routePaths.app.home} />} />
      <Route path={routePaths.app.home} element={<Home />} />
      <Route
        path={routePaths.app.steamDiscovery}
        element={<SteamDiscoveryLayout />}
      />
      <Route
        path={routePaths.app.techDiscovery}
        element={<TechDiscoveryLayout />}
      />
      <Route
        path={routePaths.app.gdevelopGameDesign}
        element={<GDevelopGameLayout />}
      />
      <Route
        path={routePaths.app.robloxGameDiscovery}
        element={<RobloxGameDesignLayout />}
      />
      <Route
        path={routePaths.app.designAdventure}
        element={<DesignAdventureLayout />}
      />
      <Route
        path={routePaths.app.aiGameAdventure}
        element={<AlGameAdventureLayout />}
      />
      <Route path={routePaths.app.aboutUs} element={<AboutUs />} />
    </Route>
    <Route path={routePaths["403"]} element={<Page403 />} />
    <Route path={routePaths["500"]} element={<Page500 />} />
    <Route path="*" element={<Page404 />} />
  </Routes>
)

export default AppRoutes
