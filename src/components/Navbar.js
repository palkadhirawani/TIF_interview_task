import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div>Shortly</div>
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <div>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </nav>
    );
}

export default Navbar;