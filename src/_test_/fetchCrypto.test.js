import { fetchCrypto } from '../redux/crypto/crypto';

describe('reducer should return list of rockets', () => {
  it('should return list of rockets in the state', () => {
    expect(fetchCrypto()).toBeDefined();
  });
});
