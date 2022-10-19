import styled from '@emotion/styled';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { DefaultApi } from 'apiClients/characterSampleApi';
import { QUERY_KEYS } from 'lib/constant/queryKeys';
import { NextPage } from 'next';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const SuspenseComponent = dynamic(
  () => import('modules/character/views/CharacterBody'),
  {
    suspense: true,
  }
);

const Home: NextPage = () => {
  const a = 1;
  const { data } = useQuery([QUERY_KEYS.CHARACTER_LIST, a], async () => {
    const response = await new DefaultApi().searchCharacter(a);
    return response.data;
  });

  return (
    <StyledWrapper>
      <Suspense fallback={<div>loading...</div>}>
        <h1>Home</h1>
        <SuspenseComponent data={data!} />
      </Suspense>
    </StyledWrapper>
  );
};

export default Home;

// export async function getServerSideProps() {
//   const a = 1;

//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery([QUERY_KEYS.CHARACTER_LIST, a], async () => {
//     const response = await new DefaultApi().searchCharacter(a);
//     return response.data;
//   });

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

export async function getStaticProps() {
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
  background-color: yellow;
  justify-content: center;
  align-items: center;
`;
