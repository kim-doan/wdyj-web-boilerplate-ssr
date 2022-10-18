import styeld from '@emotion/styled';
import React from 'react';
import useCharacterData from '../queries/character/useCharacterData';

const CharacterBody = () => {
  const { data, isLoading } = useCharacterData({
    page: 1,
    options: {
      keepPreviousData: true,
    },
  });

  return (
    <Wrapper>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.results?.map((character) => (
            <div key={character.id}>{character.name}</div>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default CharacterBody;

const Wrapper = styeld.div`
    border: 1px solid red;
`;
