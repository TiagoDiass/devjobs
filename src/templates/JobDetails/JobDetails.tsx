import Head from 'next/head';
import * as S from './JobDetails.styles';
import { Job } from 'types/Job';
import { Layout, Spacing } from 'styles/layout-components';
import { memo } from 'react';

export type JobDetailsProps = {
  job: Job;
};

export default function JobDetailsTemplate({ job }: JobDetailsProps) {
  const ApplyButton = memo(() => (
    <S.ApplyButton href={job.apply} target='_blank' rel='noopener noreferrer'>
      Apply Now
    </S.ApplyButton>
  ));

  return (
    <Layout as='main'>
      <Head>
        <title>
          Job Details | {job.position} at {job.company}
        </title>
      </Head>

      <S.Wrapper>
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

        <Spacing space='medium' />

        <S.JobDetailsContent>
          <S.JobDetailsContentHeader>
            <p className='secondary'>
              {job.postedAt} ⚬ {job.contract}
            </p>
            <h1 className='position'>{job.position}</h1>
            <p className='location'>{job.location}</p>
          </S.JobDetailsContentHeader>

          <Spacing space='large' />

          <ApplyButton />

          <Spacing space='medium' />

          <S.Paragraph>{job.description}</S.Paragraph>

          <Spacing space='large' />

          <S.Heading>Requirements</S.Heading>

          <Spacing space='small' />

          <S.Paragraph>{job.requirements.content}</S.Paragraph>

          <Spacing space='small' />

          <S.List>
            {job.requirements.items.map((item, index) => (
              <li key={index}>
                <S.Paragraph>{item}</S.Paragraph>
              </li>
            ))}
          </S.List>

          <Spacing space='large' />

          <S.Heading>What you will do</S.Heading>

          <Spacing space='small' />

          <S.Paragraph>{job.role.content}</S.Paragraph>

          <Spacing space='small' />

          <S.List as='ol'>
            {job.role.items.map((item, index) => (
              <li key={index}>
                <S.Paragraph>{item}</S.Paragraph>
              </li>
            ))}
          </S.List>
        </S.JobDetailsContent>

        <Spacing space='small' />

        <S.JobDetailsFooter>
          <S.JobDetailsFooterContent>
            <p className='position'>{job.position}</p>
            <p className='company'>{job.company}</p>
          </S.JobDetailsFooterContent>

          <ApplyButton />
        </S.JobDetailsFooter>

        <Spacing space='medium' />
      </S.Wrapper>
    </Layout>
  );
}
