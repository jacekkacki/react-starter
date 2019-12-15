import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {pageInfo} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={pageInfo.title} image={pageInfo.image} />
    <h2>{pageInfo.title}</h2>
    <p>{pageInfo.content}</p>
  </Container>
);

export default Info;