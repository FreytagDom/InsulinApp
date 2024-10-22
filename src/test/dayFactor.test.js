import handleUserDayFactor from '../handler/getDayFactor';

describe('handleUserDayFactor', () => {
  it('should return the correct user correction factor based on the current time', () => {
   
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(8);

    const session = {
      user: {
        email: 'user@example.com',
      },
    };

    const factors = [
      {
        id: 'user@example.com',
        name: 'User',
        morningcorrectionfactor: 10,
        lunchcorrectionfactor: 16,
        eveningcorrectionfactor: 21,
        latecorrectionfactor: 17,
      },
    ];

    const expectedResult = [
      <getDayFactor__SetDayFactorOption
        htmlFor="setcorrectionfactor"
        name="morningcorrectionfactor"
        id="User"
        value={10}
        key={10}
      >
        <getDayFactor__DayFactorOption>
          10
          </getDayFactor__DayFactorOption>
      </getDayFactor__SetDayFactorOption>
      ,
    ];

    const result = handleUserDayFactor(session, factors);

  });
  it('should return the correct user factor based on the current time', () => {
   
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(17);

    const session = {
      user: {
        email: 'user@example.com',
      },
    };

    const factors = [
      {
        id: 'user@example.com',
        name: 'User',
        morningcorrectionfactor: 22,
        lunchcorrectionfactor: 18,
        eveningcorrectionfactor: 17,
        latecorrectionfactor: 21,
      },
    ];

    const expectedResult = [
      <getDayFactor__SetDayFactorOption
        htmlFor="setcorrectionfactor"
        name="eveningcorrectionfactor"
        id="User"
        value={17}
        key={17}
      >
        <getDayFactor__DayFactorOption>
          17
          </getDayFactor__DayFactorOption>
      </getDayFactor__SetDayFactorOption>
      ,
    ];

    const result = handleUserDayFactor(session, factors);

  });
});