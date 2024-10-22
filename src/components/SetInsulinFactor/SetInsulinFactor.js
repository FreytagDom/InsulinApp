import {
  Wrapper,
  InsulinFactor,
  EntryForm,
  LabelFa,
  DataInputMorning,
  DataInput,
  DataInputLate,
  Button,
} from './SetInsulinFactorStyles';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FactorEntry({ DayTimeFactor, onHandleSetFactor }) {
  const [morningfactor, setMorningfactor] = useState(
    DayTimeFactor?.morningfactor ?? ''
  );
  const [lunchfactor, setLunchfactor] = useState(
    DayTimeFactor?.lunchfactor ?? ''
  );
  const [eveningfactor, setEveningfactor] = useState(
    DayTimeFactor?.eveningfactor ?? ''
  );
  const [latefactor, setLatefactor] = useState(DayTimeFactor?.latefactor ?? '');

  function handleSetFactor(event) {
    onHandleSetFactor(morningfactor, lunchfactor, eveningfactor, latefactor);
    event.preventDefault();
    setMorningfactor('');
    setLunchfactor('');
    setEveningfactor('');
    setLatefactor('');
    event.target.reset();
  }
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <InsulinFactor>{t('createinsulinfactor')}</InsulinFactor>
        <EntryForm
          onSubmit={handleSetFactor}
          id="insulinfactor"
          onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
        >
          <LabelFa htmlFor="factor" id="insulinfactor">
            {t('daytimefactor')} <br /> {t('enter')}
            <DataInputMorning
              type="decimal"
              name="setedmorningfactor"
              placeholder={t('factormorning')}
              id="setedmorningfactor"
              maxLength={'3'}
              min="0"
              inputMode="numeric"
              required
              onChange={(event) => {
                setMorningfactor(event.target.value);
              }}
            />
            <DataInput
              type="decimal"
              name="setedlunchfactor"
              placeholder={t('factornoon')}
              id="setedlunchfactor"
              maxLength={'3'}
              min="0"
              inputMode="numeric"
              required
              onChange={(event) => {
                setLunchfactor(event.target.value);
              }}
            />
            <DataInput
              type="decimal"
              name="seteveningfactor"
              placeholder={t('factorevening')}
              id="seteveningfactor"
              maxLength={'3'}
              min="0"
              inputMode="numeric"
              required
              onChange={(event) => {
                setEveningfactor(event.target.value);
              }}
            />
            <DataInputLate
              type="decimal"
              name="latefactor"
              placeholder={t('factorlate')}
              id="latefactor"
              maxLength={'3'}
              min="0"
              inputMode="numeric"
              required
              onChange={(event) => {
                setLatefactor(event.target.value);
              }}
            />
          </LabelFa>
          <Button type="submit">{t('save')}</Button>
        </EntryForm>
      </Wrapper>
    </>
  );
}
