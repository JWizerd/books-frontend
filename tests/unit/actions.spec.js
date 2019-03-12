import { actions } from '../../src/store';
import moxios from 'moxios';
import { jsxText } from '@babel/types';

describe('gets a user a commits it to the store', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  moxios.stubRequest('/user', {
    status: 200,
    response: {
      name: 'jeremiah',
      email: 'test@test.com'
    }
  })

  it('makes a request to get a User and commits the response', async () => {
    const store = { commit: jest.fn() }

    await actions.cacheUser(store)

    expect(store.commit).toHaveBeenCalledWith('setUser', { userId: 1 })
  })
})