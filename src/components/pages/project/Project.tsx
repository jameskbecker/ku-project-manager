import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Content from '../../global/Content';
import Panel from '../../global/Panel';
import Footer from '../../layout/Footer';
import Layout from '../../layout/Layout';
import NavBar, { UserModal } from '../../layout/NavBar';
import SideBar from '../../layout/SideBar';

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

const Project = () => {
  const { id } = useParams<any>();
  const [showUserModal, setShowUserModal] = useState(false);
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    loadProjectData();
  }, []);

  const loadProjectData = async () => {
    const resp = await window.fetch(
      `https://my.api.mockaroo.com/projects/${id}?key=954b8130`
    );
    const body = await resp.json();
    setProject(body);
  };

  const toggleUserModal = () => {
    setShowUserModal(!showUserModal);
  };

  return (
    <Layout>
      <SideBar />
      <NavBar
        back
        pageName={'Project ' + id}
        toggleUserModal={toggleUserModal}
      />
      <Content onClick={() => setShowUserModal(false)}>
        {project && (
          <Panel heading={project.name}>
            <div>{project.description}</div>
            <div>Status: {project.isComplete ? 'Complete!' : 'Incomplete'}</div>
            <div>Created: {new Date(project.timeCreated).toLocaleString()}</div>
          </Panel>
        )}
      </Content>
      <Footer />
      {showUserModal && <UserModal />}
    </Layout>
  );
};

export default Project;
