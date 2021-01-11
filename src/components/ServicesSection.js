import React from 'react';

import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';

import { useScroll } from './useScroll';
import { fade } from '../animation';

import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {
    const [element, controls] = useScroll();

    const cards = [
        {
            img: clock,
            header: 'Efficient',
            id: 'asd'
        },
        {
            img: teamwork,
            header: 'Teamwork',
            id: 'qwe'
        },
        {
            img: diaphragm,
            header: 'Diaphragm',
            id: 'zxc'
        },
        {
            img: money,
            header: 'Affordable',
            id: 'iop'
        }
    ]

    return (
        <Services
            variants={fade}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <Description>
                <h2>
                    High <span>quality</span> services
                </h2>
                <Cards>
                    {cards.map(card => {
                    return (
                        <Card key={card.id}>
                            <div className="icon">
                                <img src={card.img} alt="Icon" />
                                <h3>{card.header}</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </Card>
                        )
                    })}
                </Cards>
            </Description>
            <Image>
                    <img src={home2} alt="Camera"/>
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }

    p {
        padding: 2rem 0 4rem 0;
        width: 70%;
    }

    @media (max-width: 720px) {
        padding: 0 4rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    /* flex-basis: 20rem; */
    
    .icon {
        display: flex;
        align-items: center;
    }

    h3 {
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
`;

export default ServicesSection;
