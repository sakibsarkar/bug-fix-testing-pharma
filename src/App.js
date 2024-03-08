import React from "react";
import Spinner from "./component/spinner/Spinner";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Home = React.lazy(() => import('./page/Home'));

const App = () => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App