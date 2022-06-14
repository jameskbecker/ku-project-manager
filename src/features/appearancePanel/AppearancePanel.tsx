import SelectInput from '@kupm/common/input/SelectInput';
import Panel from '@kupm/common/Panel';
import { changeTheme } from '@kupm/features/appearancePanel/appearancePanelSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

const AppearancePanel = () => {
  const { theme } = useSelector((state: any) => state.appearancePanel);
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
