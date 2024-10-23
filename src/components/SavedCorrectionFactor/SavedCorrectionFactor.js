import {
  Wrapper,
  SavedCorrectionFactorTitel,
  CardGrid,
  Saved,
  MorningCorrectionFactor,
  LunchCorrectionFactor,
  EveningCorrectionFactor,
  LateCorrectionFactor,
} from './SavedCorrectionFactorStyles';
import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';

import { useEffect, useState } from 'react';

export default function SavedCorrectionFactor() {
  const { user } = useAuth0()
  const [correctionFactors, setCorrectionfactors] = useState([]);
  const { t } = useTranslation();
  console.log(user)

  useEffect(() => {
    // Daten von der API abrufen
    async function fetchData() {
      try {
        const response = await fetch(`https://localhost:5001/api/correctionfactors/${user.email}`); // USER_ID durch die tatsächliche Benutzer-ID ersetzen
        const data = await response.json();
        setCorrectionfactors(data); // Daten im State speichern
      } catch (error) {
        console.error('Fehler beim Abrufen der Insulinfaktoren:', error);
      }
    }

    fetchData(); // Fetch-Daten beim Laden der Komponente
  }, []);
  // const {correctionFactors } = UseCorrectionFactorById()
  console.log(correctionFactors)

 
  return (
    <Wrapper>
      <SavedCorrectionFactorTitel>
        {t('saved')} <br /> {t('correctionfactor')}
      </SavedCorrectionFactorTitel>
      <CardGrid>
            <Saved >
              <MorningCorrectionFactor>
                {t('correctionfactormorning')}: <br />{' '}
                {correctionFactors.morningcorrectionfactor}
              </MorningCorrectionFactor>
              <br />
              <LunchCorrectionFactor>
                {t('correctionfactornoon')}: <br />{' '}
                {correctionFactors.lunchcorrectionfactor}
              </LunchCorrectionFactor>
              <br />
              <EveningCorrectionFactor>
                {t('correctionfactorevening')}: <br />{' '}
                {correctionFactors.eveningcorrectionfactor}
              </EveningCorrectionFactor>
              <br />
              <LateCorrectionFactor>
                {t('correctionfactorlate')}: <br /> {correctionFactors.latecorrectionfactor}
              </LateCorrectionFactor>
            </Saved>
      </CardGrid>
    </Wrapper>
  );
}

