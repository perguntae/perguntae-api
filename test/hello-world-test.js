import http from 'http';
import { expect } from 'chai';

import { APP } from '../lib/config';

import '../lib/index';

describe('Hello World Test', () => {
  const helloWorldRouteOptions = {
    host: APP.host,
    port: APP.port,
    path: '/hello-world',
    method: 'GET'
  };

  it('get / deve retornar 200', done => {
    http.get(helloWorldRouteOptions, res => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
