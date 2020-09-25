// eslint-ignore
const encryptPass = require('../../helpers/encryptor');

jest.mock('bcryptjs', () => ({
  genSalt: (salt) => Promise.resolve(salt),
  hash: (pass, salt) => Promise.resolve(`${pass}-${salt}`),
}));

describe('User model tests', () => {
  it('Should return encrypted password', async () => {
    const plainTextPass = 'hola';
    const encryptedPass = `${plainTextPass}-11`;
    expect(await encryptPass(plainTextPass)).toBe(encryptedPass);
  });
});
