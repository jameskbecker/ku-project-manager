import { useGetUserQuery } from '@kupm/features/api/apiSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledSidebarUser = styled.div`
  display: grid;
  grid-columns: 1fr 3fr;
  grid-auto-rows: auto;

  padding: 0.5rem 1rem;
  border-top: 1px solid ${({ theme }) => theme.highlight};
`;

const ProfilePicture = styled.img`
  height: 40px;
  grid-row: 1 / span 2;
  border-radius: 20px;
  aspect-ratio: 1 / 1;
  user-drag: none;
`;

const UserName = styled.h5`
  grid-column: 2;
  grid-row: 1;
`;

const Email = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

const SidebarUser = () => {
  const { isCollapsed } = useSelector((state: any) => state.sidebar);
  const { data: userResponse, isLoading } = useGetUserQuery(null);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  const { firstName, lastName, email } = userResponse.data;

  return (
    <StyledSidebarUser>
      <ProfilePicture src="https://cdn.discordapp.com/avatars/442333264364175361/b93a5cf57dc0b0f00b33da0a6436a84c.webp?size=64" />
      {!isCollapsed && (
        <UserName>
          {firstName} {lastName}
        </UserName>
      )}
      {!isCollapsed && <Email>{email}</Email>}
    </StyledSidebarUser>
  );
};

export default SidebarUser;
