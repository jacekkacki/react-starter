import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {pageFAQ} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={pageFAQ.title} image={pageFAQ.image} />
    <h2>{pageFAQ.title}</h2>
    <p>{pageFAQ.content}</p>
  </Container>
);

export default FAQ;