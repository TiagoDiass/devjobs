import * as S from './JobBlock.styles';
import { Job } from 'types/Job';

type JobBlockProps = {
  job: Job;
};

/**
 * @component JobBlock - Block used to display a job
 */
export default function JobBlock({ job }: JobBlockProps) {
  return (
    <S.JobBlockContainer>
      <S.CompanyLogo backgroundColor={job.logoBackground}>
        <img src={`./images/logos/${job.logo}`} alt={job.company} />
      </S.CompanyLogo>

      <S.JobContent>
        <p className='secondary'>
          {job.postedAt} ⚬ {job.contract}
        </p>
        <p className='position'>{job.position}</p>
        <p className='secondary'>{job.company}</p>
        <p className='location'>{job.location}</p>
      </S.JobContent>
    </S.JobBlockContainer>
  );
}
