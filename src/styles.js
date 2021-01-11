import styled from 'styled-components';
import {motion} from 'framer-motion';

export const About = styled(motion.div)`
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 10rem;
    color: white;

    @media (max-width: 720px) {
        padding: 0 4rem;
    }
`
export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }
`

export const Image = styled(motion.div)`
    height: 90%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        float: right;
    }

    @media (max-width: 1200px) {
        width: 40%;
    }
`

export const Hide = styled.div`
    overflow: hidden;
`