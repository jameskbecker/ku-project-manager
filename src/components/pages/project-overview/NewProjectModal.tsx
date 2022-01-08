import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import Button from '../../global/Button';
import Input from '../../global/Input';
import TextInput from '../../global/input/TextInput';
import Panel from '../../global/Panel';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000000c5;
  z-index: 10;
`;

const NewProjectModal = ({ toggleModal, loadProjectData }: any) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('0');

  const handleSave = async () => {
    try {
      const payload = { name, description, priority };
      console.log(payload);
      const resp = await window.fetch(
        '/local/api/projects',
        // 'https://kupm-api.herokuapp.com/api/projects',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
      const body = await resp.json();
      loadProjectData();
      toggleModal();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Wrapper>
      <Panel secondary style={{ zIndex: 11, opacity: 1, width: '300px' }}>
        <h2>New Project</h2>
        <TextInput
          label="Name"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
        <TextInput
          label="Description"
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        />
        <TextInput
          label="Priority"
          type="number"
          value={priority}
          onChange={(e: any) => setPriority(e.target.value)}
        />
        <Button light text="Cancel" onClick={toggleModal}></Button>
        <Button round text="Save" onClick={handleSave} />
      </Panel>
    </Wrapper>
  );
};

export default NewProjectModal;
