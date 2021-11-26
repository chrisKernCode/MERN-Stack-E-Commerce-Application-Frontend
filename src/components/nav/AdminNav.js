import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/admin/dashboard" className="nav-link">
          Bestellungen
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/product" className="nav-link">
          Produkt 
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
          Produkte
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/category" className="nav-link">
          Kategorien
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link">
          Unter-Kategorien
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link">
          Gutscheine
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link">
          Passwort
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/tshirtdesign" className="nav-link">
          T-Shirt Designer
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
