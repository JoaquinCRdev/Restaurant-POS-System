import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { Home, Auth, Orders, Tables, Menu } from '#pages'
import {Header} from "#components"

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderRoutes = ['/auth'];

  return (
    <div>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      {children}
    </div>
  );
};

const App = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<div className="flex items-center justify-center h-[calc(100vh-5rem)] overflow-hidden bg-[#1f1f1f]"><p className="text-[#f5f5f5] text-7xl font-semibold">Página no encontrada</p></div>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App