import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "pages/Home";
import Product from "pages/Product";
import Cart from "pages/Cart";
import Category from "pages/Category";
import NotFound from "pages/NotFound";
import Header from "components/molecules/Header";

import 'styles/app.scss'

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <div className="body-wrapper">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories/:id" element={<Category />} />
              <Route path="/products/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </main>
    </div>
  );
}

export default App;
