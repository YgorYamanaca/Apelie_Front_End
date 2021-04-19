import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getDitto, getPokemon } from '@/services/fakeService';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';

const Title = styled.h1`
  color: red;
  font-size: 50px;
  background-color: black;
`;

const Login: React.FC = () => {
  const [string, setString] = useState('pikachu');
  const { data: ditto, isSuccess: dittoSuccess } = useQuery('teste', getDitto);
  const { data: pikachu, isSuccess } = useQuery(['teste', string], () => getPokemon(string));

  useEffect(() => {
    if (dittoSuccess) console.log(ditto);
  }, [ditto]);

  useEffect(() => {
    if (isSuccess) console.log(pikachu);
  }, [pikachu]);

  return (
    <>
      <Title onClick={() => setString('charizard')}>My page</Title>
    </>
  );
};

export default apeliePageHOC(Login, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Login',
    },
  },
});
