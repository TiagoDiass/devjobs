import Head from 'next/head';
import FilterInput from 'pages-elements/home/FilterInput/FilterInput';
import { Layout, Spacing } from 'styles/layout-components';
import jobs from 'mocks/jobs';
import { JobBlock } from 'components';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Devjobs | Find your new developer job</title>
      </Head>
      <FilterInput />

      <Spacing space='x-large' />

      {jobs.map((job) => (
        <div key={job.id}>
          <JobBlock job={job} />
          <Spacing space='x-large' />
        </div>
      ))}
    </Layout>
  );
}
