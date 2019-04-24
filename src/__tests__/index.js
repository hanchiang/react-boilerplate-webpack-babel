import ActionCreator, { ActionTypes } from '../redux/actions';

describe('Redux tests', () => {
  it('Should return start fetch list action', () => {
    const expectedAction = {
      type: ActionTypes.START
    };
    expect(ActionCreator.start()).toEqual(expectedAction);
  });
});
