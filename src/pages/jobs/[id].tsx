import jobs from 'mocks/jobs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Job } from 'types/Job';

type JobDetailsProps = {
  job: Job;
};

export default function JobDetails({ job }: JobDetailsProps) {
  return <div>{job.position}</div>;
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = () => {
  return {
    paths: jobs.map((job) => ({ params: { id: job.id.toString() } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<JobDetailsProps, { id: string }> = (context) => {
  const { id } = context.params;

  const data = jobs.find((job) => job.id === parseInt(id));

  return {
    props: {
      job: data,
    },
  };
};
