import React, { useState } from 'react';
// import { useSession } from 'next-auth/react';
import { styled } from 'styled-components';
// import Image from 'next/image';
import PopupModal from '../PopupModal/PopupModal';
import userDeleteIcon from '../../public/userDeleteIcon.png';
import { useAuth0 } from '@auth0/auth0-react';
import { Img } from 'react-image';

export default function DeleteUserDataButton() {
  // const { data: session } = useSession();
  const { user } = useAuth0();
  const userMail = user.email;
  const _id = user.email;

  const [modalOpen, setModalOpen] = useState(false);
  function closeModal() {
    setModalOpen(false);
  }

  async function handleDelete() {
    try {
      const response = await fetch(
        `/api/savedInsulinDatas/[id]?userMail=${userMail}`,
        {
          method: 'DELETE',
        }
      );
      await fetch('/api/insulinFactor/' + _id, {
        method: 'DELETE',
      });
      await fetch('/api/correctionFactor/' + _id, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Daten wurden erfolgreich gelöscht.');
      } else {
        console.error('Fehler beim Löschen der Daten.');
      }
      closeModal();
    } catch (error) {
      console.error('Fehler beim Löschen der Daten:', error);
    }
    setModalOpen(false);
  }

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <PopupWrapper>
      <DeleteButton onClick={() => setModalOpen(true)}>
        <UserDeleteIcon src={userDeleteIcon} alt="UserDeleteIcon" />
      </DeleteButton>
      {modalOpen && (
        <PopupModal onClose={handleCancel} onConfirm={handleDelete} />
      )}
    </PopupWrapper>
  );
}

const PopupWrapper = styled.div`
  display: grid;
  justify-content: end;
  /* width: 2rem; */
  margin-left: -0.5rem;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  border-radius: 5px;
  width: 3rem;
  color: black;

  cursor: pointer;
`;

const UserDeleteIcon = styled(Img)`
  background: transparent;
`;
