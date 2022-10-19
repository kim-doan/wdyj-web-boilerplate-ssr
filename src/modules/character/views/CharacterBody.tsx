import styeld from '@emotion/styled';
import { CharacterResult } from 'apiClients/characterSampleApi';

interface CharacterBodyProps {
  data: CharacterResult;
}

const CharacterBody = ({ data }: CharacterBodyProps) => (
  <Wrapper>
    <div>
      {data?.results?.map((character: any) => (
        <div key={character.id}>
          <div>
            <img src={character.image} alt="image" />
          </div>
          <div>{character.name}</div>
        </div>
      ))}
    </div>
  </Wrapper>
);

export default CharacterBody;

const Wrapper = styeld.div`
    border: 1px solid red;
`;
