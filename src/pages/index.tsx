import styled from '@emotion/styled';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { DefaultApi } from 'apiClients/characterSampleApi';
import { QUERY_KEYS } from 'lib/constant/queryKeys';

const Home = () => {
  const a = 1;
  const { data } = useQuery([QUERY_KEYS.CHARACTER_LIST, a], async () => {
    const response = await new DefaultApi().searchCharacter(a);
    return response.data;
  });

  return (
    <StyledWrapper>
      {data?.results?.map((character: any) => (
        <div key={character.id}>
          <div>
            <img src={character.image} alt="image" />
          </div>
          <div>{character.name}</div>
        </div>
      ))}
    </StyledWrapper>
  );
};

export default Home;

export async function getServerSideProps() {
  const a = 1;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([QUERY_KEYS.CHARACTER_LIST, a], async () => {
    const response = await new DefaultApi().searchCharacter(a);
    return response.data;
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
