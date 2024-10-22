import handleUserCorrectionFactor from '../handler/getCorrectionFactor';

describe('handleUserCorrectionFactor', () => {
  it('should return the correct user correction factor based on the current time', () => {
   
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(8);

    const session = {
      user: {
        email: 'user@example.com',
      },
    };

    const correctionFactors = [
      {
        id: 'user@example.com',
        name: 'User',
        morningcorrectionfactor: 14,
        lunchcorrectionfactor: 15,
        eveningcorrectionfactor: 13,
        latecorrectionfactor: 16,
      },
    ];

    const expectedResult = [
      <getCorrectionFactor__SetCorrectionFactorOption
        htmlFor="setcorrectionfactor"
        name="morningcorrectionfactor"
        id="User"
        value={14}
        key={14}
      >
        <getCorrectionFactor__CorrectionFactorOption>
          14
          </getCorrectionFactor__CorrectionFactorOption>
      </getCorrectionFactor__SetCorrectionFactorOption>
      ,
    ];

    const result = handleUserCorrectionFactor(session, correctionFactors);

  });
  it('should return the correct user correction factor based on the current time', () => {
   
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(17);

    const session = {
      user: {
        email: 'user@example.com',
      },
    };

    const correctionFactors = [
      {
        id: 'user@example.com',
        name: 'User',
        morningcorrectionfactor: 14,
        lunchcorrectionfactor: 15,
        eveningcorrectionfactor: 13,
        latecorrectionfactor: 16,
      },
    ];

    const expectedResult = [
      <getCorrectionFactor__SetCorrectionFactorOption
        htmlFor="setcorrectionfactor"
        name="eveningcorrectionfactor"
        id="User"
        value={13}
        key={13}
      >
        <getCorrectionFactor__CorrectionFactorOption>
          13
          </getCorrectionFactor__CorrectionFactorOption>
      </getCorrectionFactor__SetCorrectionFactorOption>
      ,
    ];

    const result = handleUserCorrectionFactor(session, correctionFactors);

  });
});