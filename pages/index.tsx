import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getDitto, getPokemon } from '@/services/fakeService';

const Title = styled.h1`
  color: red;
  font-size: 50px;
  background-color: black;
`;

export default function Home() {
  const [string, setString] = React.useState('pikachu');
  const { data: ditto, isSuccess: dittoSuccess } = useQuery('teste', getDitto);
  const { data: pikachu, isSuccess } = useQuery(['teste', string], () => getPokemon(string));

  React.useEffect(() => {
    if (dittoSuccess) console.log(ditto);
  }, [ditto]);

  React.useEffect(() => {
    if (isSuccess) console.log(pikachu);
  }, [pikachu]);

  return <Title onClick={() => setString('charizard')}>My page</Title>;
}
