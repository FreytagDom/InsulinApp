// import { useSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

import { useState, useEffect } from 'react';

// Funktion, um alle Korrekturfaktoren zu laden
export function UseCorrectionFactors() {
  const [correctionFactors, setCorrectionFactor] = useState([]);
  const { user } = useAuth0()
  const id = user.email
 

  useEffect(() => {
    if (id) {
      Promise.all([
      
        fetch(`http://insulinapp-api.vercel.app/api/correctionfactors/${id}`).then((res) => res.json())
      ]).then(([ correctionFactorData]) => {
     
        setCorrectionFactor(correctionFactorData);
      });
      
     }
     }, [id]);
     

  return { correctionFactors };
}

export default function UserCorrectionFactor( correctionFactors) {

  let userCorrectionFactorToDisplay;
  console.log(userCorrectionFactorToDisplay)

  const userCorrectionFactor = correctionFactors;

  const currentTime = new Date().getHours();
  const correctionFactorLength = userCorrectionFactor.length;

  if (correctionFactorLength === 0) {
    userCorrectionFactorToDisplay = (
      <SetCorrectionFactorOption
        htmlFor="setcorrectionfactor"
        name="no data"
        value={0}
      >
        <CorrectionFactorOption>0</CorrectionFactorOption>
      </SetCorrectionFactorOption>
    );
  } else if (currentTime >= 6 && currentTime < 11) {
    userCorrectionFactorToDisplay = (
      <SetCorrectionFactorOption
        htmlFor="setcorrectionfactor"
        name="morningcorrectionfactor"
        id={userCorrectionFactor.name}
        value={userCorrectionFactor.morningcorrectionfactor}
        key={userCorrectionFactor.id}
      >
        <CorrectionFactorOption>
          {userCorrectionFactor.morningcorrectionfactor}
        </CorrectionFactorOption>
      </SetCorrectionFactorOption>
    );
  } else if (currentTime >= 11 && currentTime < 17) {
    userCorrectionFactorToDisplay = (
      <SetCorrectionFactorOption
        htmlFor="setcorrectionfactor"
        name="lunchcorrectionfactor"
        id={userCorrectionFactor.name}
        value={userCorrectionFactor.lunchcorrectionfactor}
        key={userCorrectionFactor.id}
      >
        <CorrectionFactorOption
          name="lunchcorrectionfactor"
          value={userCorrectionFactor.lunchcorrectionfactor}
        >
          {userCorrectionFactor.lunchcorrectionfactor}
        </CorrectionFactorOption>
      </SetCorrectionFactorOption>
    );
  } else if (currentTime >= 17 && currentTime < 22) {
    userCorrectionFactorToDisplay = (
      <SetCorrectionFactorOption
        htmlFor="setcorrectionfactor"
        name="eveningcorrectionfactor"
        id={userCorrectionFactor.name}
        value={userCorrectionFactor.eveningcorrectionfactor}
        key={userCorrectionFactor.id}
      >
        <CorrectionFactorOption
          name="eveningcorrectionfactor"
          value={userCorrectionFactor.eveningcorrectionfactor}
        >
          {userCorrectionFactor.eveningcorrectionfactor}
        </CorrectionFactorOption>
      </SetCorrectionFactorOption>
    );
  } else {
    userCorrectionFactorToDisplay = (
      <SetCorrectionFactorOption
        htmlFor="setcorrectionfactor"
        name="latecorrectionfactor"
        id={userCorrectionFactor.name}
        value={userCorrectionFactor.latecorrectionfactor}
        key={userCorrectionFactor.id}
      >
        <CorrectionFactorOption
          name="latecorrectionfactor"
          id={userCorrectionFactor.name}
          value={userCorrectionFactor.latecorrectionfactor}
        >
          {userCorrectionFactor.latecorrectionfactor}
        </CorrectionFactorOption>
      </SetCorrectionFactorOption>
    );
  }

  return userCorrectionFactorToDisplay;
}

const CorrectionFactorOption = styled.div`
  border-radius: 8px;
  text-align: center;
  color: #5c940d;
  background: transparent;
`;

const SetCorrectionFactorOption = styled.div`
  border-radius: 8px;
  text-align: center;
  color: #5c940d;
  background: transparent;
`;
