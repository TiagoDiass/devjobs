import * as S from './Home.styles';
import { JobBlock } from 'components';
import { Layout, Spacing } from 'styles/layout-components';
import FilterInput from './Elements/FilterInput/FilterInput';
import jobs from 'mocks/jobs';
import Head from 'next/head';

export default function HomeTemplate() {
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

      <Spacing space='large' />
    </Layout>
  );
}
