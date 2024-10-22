import { useRouter } from 'next/router';
import styled from 'styled-components';
import FactorEntry from '../components/SetInsulinFactor/SetInsulinFactor';
import SavedFactor from '../components/SavedInsulinFactor/SavedInsulinFactor';
// import { getAllDayFactors } from '../services/savedDayFactorService';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function CreateFactor() {
  const router = useRouter();
  // const { data: session } = useSession();
  const { user } = useAuth0();
  const [factors, setData] = useState([]);

  // API-Aufruf, um Benutzerdaten zu laden
  useEffect(() => {
    if (user) {
      fetch(`/api/getInsulinFactor?_id=${user.email}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  }, [user]);

  // Rückgabe, wenn kein Benutzer eingeloggt ist
  if (!user) {
    return <div>Du bist nicht eingeloggt</div>;
  }
  async function handleSetSubmit(
    morningfactor,
    lunchfactor,
    eveningfactor,
    latefactor
  ) {
    const userId = user?.user?.email; // Beispiel-User-ID, muss dynamisch angepasst werden

    const response = await fetch(`/api/getInsulinFactor?_id=${userId}`, {
      method: 'PUT', // Versuch erst mit PUT zu aktualisieren
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        morningfactor,
        lunchfactor,
        eveningfactor,
        latefactor,
      }),
    });

    if (response.status === 404 || response.status === 409) {
      // Wenn die Daten noch nicht existieren, POST-Anfrage senden
      const postResponse = await fetch(`/api/getInsulinFactor?_id=${userId}`, {
        method: 'POST', // Daten neu erstellen, wenn nicht vorhanden
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          morningfactor,
          lunchfactor,
          eveningfactor,
          latefactor,
        }),
      });

      if (postResponse.ok) {
        router.replace(router.asPath); // Die Seite neu laden, um die neuesten Daten zu holen
      } else {
        console.error('Error creating correction factor');
      }
    } else if (response.ok) {
      // Erfolgreich aktualisiert
      router.replace(router.asPath); // Die Seite neu laden, um die neuesten Daten zu holen
    } else {
      console.error('Error updating correction factors');
    }
  }

  // async function handleSetSubmit(
  //   morningfactor,
  //   lunchfactor,
  //   eveningfactor,
  //   latefactor
  // ) {
  //   const response = await fetch('/api/insulinFactor', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       morningfactor,
  //       lunchfactor,
  //       eveningfactor,
  //       latefactor,
  //     }),
  //   }).then((res) => {
  //     if (res.ok) router.replace(SavedFactor);
  //   });
  // }

  return (
    <Wrapper>
      <Sign>
        <FactorEntry onHandleSetFactor={handleSetSubmit} />
        <SavedFactor factors={factors} />
      </Sign>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
  justify-content: center;
`;

const Sign = styled.span`
  color: white;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  z-index: 2;
`;
