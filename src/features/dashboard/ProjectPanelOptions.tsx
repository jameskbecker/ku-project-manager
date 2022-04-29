import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { SecondaryButton } from '@kupm/common/Button';
import { useGetProjectsQuery } from '@kupm/features/api/apiSlice';
import React from 'react';

const ProjectPanelOptions = () => {
  const { refetch } = useGetProjectsQuery(null);
  return (
    <SecondaryButton secondary round light icon={faSyncAlt} onClick={refetch} />
  );
};

export default ProjectPanelOptions;
