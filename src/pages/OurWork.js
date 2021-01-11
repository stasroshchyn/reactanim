import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScrollTop from '../components/ScrollTop';
import {
    pageAnimation,
    fade, photoAnimation,
    lineAnimation,
    slider,
    sliderContainer
} from '../animation';

const OurWork = ({movies}) => {
    return (
        <Work
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{background: "white"}}
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            {movies.map(movie => {
                return (
                    <Movie key={movie.id}>
                        <motion.h2 variants={fade}>
                            {movie.title}
                        </motion.h2>
                        <motion.div
                            className="line"
                            variants={lineAnimation}
                        ></motion.div>
                        <Link
                            to={movie.url}
                        >
                            <Hide>
                                <motion.img
                                    src={movie.mainImg}
                                    alt={movie.title}
                                    variants={photoAnimation}
                                />
                            </Hide>
                        </Link>
                    </Movie>
                );
            })}
            <ScrollTop />
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    padding: 3rem 10rem;
    overflow: hidden;

    h2 {
        padding: 1rem 0rem;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 5rem;

    .line {
        height: 0.2rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
    transition: filter 0.5s ease;

    &:hover {
        filter: brightness(70%);
    }
`;

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWork;