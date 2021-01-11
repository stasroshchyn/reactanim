import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { motion, AnimateSharedLayout } from 'framer-motion';

import styled from 'styled-components';

const Nav = () => {
    const { pathname } = useLocation();

    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">Swoob-A-Doob Ya! Boom</Link>
            </h1>
            <AnimateSharedLayout>
                <ul>
                    <li>
                        <Link to="/">About Us</Link>
                        {
                            pathname === "/" ?
                                <Line
                                    layoutId="underlined"
                                /> :
                                null
                        }
                    </li>
                    <li>
                        <Link to="/work">Our Work</Link>
                        {
                            pathname.includes("/work") ?
                                <Line
                                    layoutId="underlined"
                                /> :
                                null
                        }
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                        {
                            pathname === "/contact" ?
                                <Line
                                    layoutId="underlined"
                                /> :
                                null
                        }
                    </li>
                </ul>
            </AnimateSharedLayout>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 10;
    min-height: 10vh;
    padding: 0 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #282828;

    a {
        color: white;
        text-decoration: none;
        transition: color 0.5s ease;

        &:hover {
            color: #23d997;
        }
    }

    ul {
        width: 25%;
        display: flex;
        justify-content: space-between;
        list-style: none;
    }

    li {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
        letter-spacing: 0.2rem;
    }

    @media (max-width: 1000px) {
        padding: 0 4rem;

        ul {
            width: 35%;
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.2rem;
    width: 110%;
    background-color: #23d997;
    position: absolute;
    bottom: -40%;
`;

export default Nav;