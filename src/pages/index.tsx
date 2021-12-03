import Head from 'next/head';
import FilterInput from 'pages-elements/home/FilterInput/FilterInput';
import { Layout } from 'styles/layout-components';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Devjobs | Find your new developer job</title>
      </Head>
      <FilterInput />
    </Layout>
  );
}
