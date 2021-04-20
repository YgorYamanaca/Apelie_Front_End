import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getDitto, getPokemon } from '@/services/fakeService';
import Title from './styles';

const SubscribeScreen: React.FC = () => {
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
      <Title onClick={() => setString('charizard')}>
        teste
      </Title>
    </>
  );
};

export default SubscribeScreen;
