import * as S from './Home.styles';
import { JobBlock } from 'components';
import { Layout, Spacing } from 'styles/layout-components';
import FilterInput from './Elements/FilterInput/FilterInput';
import Head from 'next/head';
import { Job } from 'types/Job';

export type HomeTemplateProps = {
  jobs: Job[];
};

export default function HomeTemplate({ jobs }: HomeTemplateProps) {
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
