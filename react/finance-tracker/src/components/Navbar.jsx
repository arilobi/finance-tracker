import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
          <nav class="navbar bg-light">
            <div class="container-fluid">
                <Link to="/about">About</Link>
            </div>
          </nav>
        </div>
    )
}