import { GetStaticPaths, GetStaticProps } from 'next';
import JobDetailsTemplate, { JobDetailsProps } from 'templates/JobDetails/JobDetails';
import jobs from 'mocks/jobs';

export default function JobDetails({ job }: JobDetailsProps) {
  return <JobDetailsTemplate job={job} />;
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
