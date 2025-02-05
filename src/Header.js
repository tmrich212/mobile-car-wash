import React from 'react';
import "./App.css";

function Header() {
    return (
        <div>
            <header class="absolute inset-x-0 top-0 z-50 text-white">
                <nav class="flex items-center justify-between p-6 lg:px-8 color-white" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#">
                    <h3 className='nav-logo'>CMD</h3>
                    </a>
                   </div> 
                </nav>
            </header>
          </div>
    )
}

export default Header;