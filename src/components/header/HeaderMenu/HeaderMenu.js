import React from 'react';
import Link from 'next/link';

const Headermenu = () => {
    return (
        <div classsName="header__menu">
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>
                            Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>
                            About
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>
                            Shop
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Headermenu;
