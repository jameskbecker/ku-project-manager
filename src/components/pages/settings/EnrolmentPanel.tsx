import React from 'react';
import SelectInput from '@kupm/components/common/input/SelectInput';
import Panel from '@kupm/components/common/Panel';

const courseOptions = [{ label: 'Computer Science', value: 'light' }];
const moduleOptions = [
  { label: 'Final Year Project', value: 'fyp' },
  { label: 'Software Development Practice ', value: 'sdp' },
];

const EnrolmentPanel = () => {
  return (
    <Panel heading="Enrolment">
      <SelectInput label="Course" options={courseOptions} />
      <SelectInput label="Modules" isMulti={true} options={moduleOptions} />
    </Panel>
  );
};

export default EnrolmentPanel;
