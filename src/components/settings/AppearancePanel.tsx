import SelectInput from '@kupm/components/common/input/SelectInput';
import Panel from '@kupm/components/common/Panel';
import { changeTheme } from '@kupm/store/settings';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

const AppearancePanel = () => {
  const { theme } = useSelector((state: any) => state.settings);
  const dispatch = useDispatch();

  const handleThemeSelect = ({ value: { value } }: any) => {
    dispatch(changeTheme({ theme: value }));

    // does not expire
    const expiryDate = 'Fri, 31 Dec 9999 23:59:59 GMT';
    document.cookie = `kupm_theme=${value}; expires=${expiryDate};`;
  };

  return (
    <Panel heading="Appearance">
      <SelectInput
        label="Theme"
        options={themeOptions}
        value={themeOptions.find((o) => o.value === theme)}
        onChange={handleThemeSelect}
      />
    </Panel>
  );
};

export default AppearancePanel;
