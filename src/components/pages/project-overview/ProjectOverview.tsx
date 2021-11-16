import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Content from '../../global/Content';
import Panel from '../../global/Panel';
import Footer from '../../layout/Footer';
import Layout from '../../layout/Layout';
import NavBar, { UserModal } from '../../layout/NavBar';
import SideBar from '../../layout/SideBar';
import ControlBar from './ControlBar';

type Project = {
  id: string;
  name: string;
  description: string;
  isComplete: boolean;
  priority: number;
  timeCreated: number;
  timeCompleted: number | null;
  memberGroupId: string;
};

const ProjectOverview = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const history = useHistory();

  useEffect(() => {
    loadProjectData();
  }, []);

  const loadProjectData = async () => {
    try {
      const resp = await window.fetch('/api/projects');
      const body = await resp.json();
      if (body.error) return;
      setProjects(body);
      setIsLoaded(true);
    } catch (e) {}
  };

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  const selectProjectHandler = (id: string) => {
    history.push(`/projects/${id}`);
  };

  const getProjects = projects.map((p) => (
    <Panel
      heading={p.name}
      key={p.id}
      onClick={() => selectProjectHandler(p.id)}
    >
      <div>{p.description}</div>
      <div>Status: {p.isComplete ? 'Complete!' : 'Incomplete'}</div>
      <div>Created: {new Date(p.timeCreated * 1000).toLocaleString()}</div>
    </Panel>
  ));

  const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-auto-rows: 25vh;
    height: auto;
    overflow: auto;
  `;

  return (
    <Layout>
      <SideBar activePage="projects" />
      <NavBar pageName="Projects" toggleUserModal={toggleUserModal} />
      <ControlBar />
      <Content
        onClick={() => setShowUserModal(false)}
        style={{ display: 'block', overflow: 'auto' }}
      >
        {isLoaded ? (
          <GridWrapper>{getProjects}</GridWrapper>
        ) : (
          <FontAwesomeIcon icon={faSpinner} spin />
        )}
      </Content>
      <Footer />
      {showUserModal && <UserModal />}
    </Layout>
  );
};

export default ProjectOverview;
