import React from 'react';

import { About, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../animation';

import Wave from './Wave';

import home1 from '../img/home1.png';

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            your <span>dreams</span>
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>come true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore eligendi ab, asperiores non ratione distinctio eos similique. Adipisci voluptatum non ipsum maxime, sunt aliquid incidunt expedita officia laboriosam reprehenderit!
                </motion.p>
                <motion.button variants={fade}>
                    Contact Us
                </motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={home1} alt="About Img"/>
            </Image>
            <Wave />
        </About>
    )
}

export default AboutSection;