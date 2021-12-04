import * as S from 'pages-styles/home.styles';
import { FilterInput } from 'pages-elements/home';
import { JobBlock } from 'components';
import { Layout, Spacing } from 'styles/layout-components';
import Head from 'next/head';
import jobs from 'mocks/jobs';
import { useTheme } from 'styled-components';

export default function Home() {
  // const theme = useTheme();
  // console.log(theme);

  return (
    <Layout>
      <Head>
        <title>Devjobs | Find your new developer job</title>
      </Head>
      <FilterInput />

      <Spacing space='x-large' />

      <S.JobsListContainer>
        {jobs.map((job) => (
          <JobBlock job={job} key={job.id} />
        ))}
      </S.JobsListContainer>
    </Layout>
  );
}
