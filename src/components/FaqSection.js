import React, { useState } from 'react';

import { AnimateSharedLayout } from 'framer-motion';

import Toggle from './Toggle';

import { useScroll } from './useScroll';
import { fade } from '../animation';

import styled from 'styled-components';
import { About } from '../styles';

const FaqSection = () => {
    const [element, controls] = useScroll();

    const questions = [
        {
            question: 'How Do I Start?',
            header: 'Lorem ipsum dolor sit amet.',
            answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, recusandae.',
            id: 'qwe'
        },
        {
            question: 'Daily Schedule',
            header: 'Lorem ipsum dolor sit amet.',
            answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, recusandae.',
            id: 'zxc'
        },
        {
            question: 'Different Payment Methods',
            header: 'Lorem ipsum dolor sit amet.',
            answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, recusandae.',
            id: 'asd'
        },
        {
            question: 'What Products Do You Offer?',
            header: 'Lorem ipsum dolor sit amet.',
            answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, recusandae.',
            id: 'cvb'
        }
    ];

    return (
        <Faq
            variants={fade}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <h2>
                Any Questions <span>FAQ</span>
            </h2>
            <div className="questions">
                <AnimateSharedLayout>
                    {questions.map(question => {
                        return (
                            
                                <Toggle question={question.question} key={question.id}>
                                    <div
                                        className="answer">
                                        <p>{question.header}</p>
                                        <p>{question.answer}</p>
                                    </div>
                                </Toggle>
                        );
                    })}
                </AnimateSharedLayout>
            </div>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;

        p {
            padding: 1rem 0rem;
        }
    }

    @media (max-width: 720px) {
        padding: 0 4rem;
    }
`;

export default FaqSection;