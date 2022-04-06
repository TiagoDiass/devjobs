import { GetStaticProps } from 'next';
import { HomeTemplate } from 'templates';
import { HomeTemplateProps } from 'templates/Home/Home';
import jobsMock from 'mocks/jobs';

type HomeProps = {
  jobs: HomeTemplateProps['jobs'];
};

export default function Home({ jobs }: HomeProps) {
  return <HomeTemplate jobs={jobs} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  return {
    props: {
      jobs: [...jobsMock],
    },
  };
};
