import {
  faBox,
  faPencilAlt,
  faSpinner,
  faSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../global/Flex';
import Panel from '../../global/Panel';
import Footer from '../../layout/Footer';
import Layout from '../../layout/Layout';
import NavBar, { UserModal } from '../../layout/NavBar';
import SideBar from '../../layout/SideBar';
import Content from './Content';
import ControlBar from './ControlBar';
import NewProjectModal from './NewProjectModal';
import ProjectTableRow from './ProjectTableRow';

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
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjectData();
  }, []);

  const loadProjectData = async () => {
    try {
      const resp = await window.fetch(
        '/local/api/projects'
        // 'https://kupm-api.herokuapp.com/api/projects'
      );
      const body = await resp.json();
      setProjects(body);
      setIsLoaded(true);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  const toggleNewProjectModal = (e: MouseEvent) => {
    setShowNewProjectModal(!showNewProjectModal);
  };

  const getProjects = projects.map((p, i) => (
    <ProjectTableRow key={i} project={p} loadProjectData={loadProjectData} />
  ));

  return (
    <Layout>
      <SideBar activePage="projects" />
      <NavBar pageName="Projects" toggleUserModal={toggleUserModal} />
      <ControlBar toggleModal={toggleNewProjectModal} />
      <Content
        onClick={() => setShowUserModal(false)}
        style={{ margin: '0 1rem' }}
      >
        <FlexColumn style={{ justifyContent: 'flex-start' }}>
          <FlexRow
            style={{
              flex: '0 1 auto',
              padding: '1rem',
              justifyContent: 'flex-start',
            }}
          >
            <div>
              <FontAwesomeIcon icon={faSquare} />
            </div>
            <div>Name</div>
            <div>Description</div>
            <div>Status</div>
            <div>Date Created</div>
            <div>Actions</div>
          </FlexRow>
          {isLoaded ? (
            <FlexColumn>{getProjects}</FlexColumn>
          ) : (
            <FontAwesomeIcon style={{ flex: '1 1' }} icon={faSpinner} spin />
          )}
        </FlexColumn>
      </Content>
      <Footer />
      {showUserModal && <UserModal />}
      {showNewProjectModal && (
        <NewProjectModal
          toggleModal={toggleNewProjectModal}
          loadProjectData={loadProjectData}
        />
      )}
    </Layout>
  );
};

export default ProjectOverview;
