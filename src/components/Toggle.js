import React, { useState } from 'react';

import { motion } from 'framer-motion';

const Toggle = ({children, question}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <motion.div
            layout
            className="question"
            onClick={() => setToggle(!toggle)}
        >
            <motion.h4 layout>{question}</motion.h4>
            {toggle ? children : ''}
            <div className="faq-line"></div>
        </motion.div>
    );
}

export default Toggle;