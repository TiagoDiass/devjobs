import Head from 'next/head';
import * as S from './JobDetails.styles';
import { Job } from 'types/Job';
import { Layout } from 'styles/layout-components';

export type JobDetailsProps = {
  job: Job;
};

export default function JobDetailsTemplate({ job }: JobDetailsProps) {
  return (
    <Layout as='main'>
      <Head>
        <title>
          Job Details | {job.position} at {job.company}
        </title>
      </Head>

      <S.JobDetailsHeader>
        <S.CompanyLogo backgroundColor={job.logoBackground}>
          <img src={`/images/logos/${job.logo}`} alt={job.company} />
        </S.CompanyLogo>

        <S.JobDetailsHeaderContent>
          <p className='company'>{job.company}</p>
          <p className='website'>{job.website}</p>
          <a
            className='website-button'
            href={job.website}
            target='_blank'
            rel='noopener noreferrer'
          >
            Company Site
          </a>
        </S.JobDetailsHeaderContent>
      </S.JobDetailsHeader>
    </Layout>
  );
}
