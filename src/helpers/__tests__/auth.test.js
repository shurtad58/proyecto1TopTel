// eslint-ignore
const authHelper = require('../auth');

// constants
const authenticatedAnswer = 'ok';
const signinRouteString = '/users/signin'

// factories
const reqFactory = (isAuth) => ({
  isAuthenticated: () => isAuth,
  flash: (errorMsg, msg) => ({ errorMsg, msg })
});
const resFactory = () => ({
  redirect: (route) => route
})
const nextFactory = (ret) => () => ret;

describe('Auth tests', () => {
  it('Should return next on an authorized request', () => {
    const req = reqFactory(true);
    const next = nextFactory(authenticatedAnswer);
    expect(authHelper.isAuthenticated(req, null, next)).toBe(authenticatedAnswer);
  });

  it('Should return redirect route when request is not authorized', () => {
    const req = reqFactory(false);
    const res = resFactory();
    expect(authHelper.isAuthenticated(req, res)).toBe(signinRouteString);
  });
});
