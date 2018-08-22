import sh from 'shorthash';
import QRCode from 'yaqrcode';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from './config';

const map = { â: 'a', Â: 'A', à: 'a', À: 'A', á: 'a', Á: 'A', ã: 'a', Ã: 'A', ê: 'e', Ê: 'E', è: 'e', È: 'E', é: 'e', É: 'E', î: 'i', Î: 'I', ì: 'i', Ì: 'I', í: 'i', Í: 'I', õ: 'o', Õ: 'O', ô: 'o', Ô: 'O', ò: 'o', Ò: 'O', ó: 'o', Ó: 'O', ü: 'u', Ü: 'U', û: 'u', Û: 'U', ú: 'u', Ú: 'U', ù: 'u', Ù: 'U', ç: 'c', Ç: 'C' };

export const qrcode = ({ text, size }) => {
  return QRCode(text, { size });
}

export const normalizePort = (val) => {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

export const removeWordAccentuation = (s = '') => {
  return s.replace(/[\W[\] ]/g, a => map[a] || a);
};

export const getHash = (a) => {
  return sh.unique(Date.now() + a.join(''));
};

export const encrypt = (pass) => 
  crypto.createHmac('sha256', 'perguntae')
    .update(pass)
    .digest('hex');

export const verifyJWT = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, JWT_SECRET, (err, data) => {
    if (err) reject(err)
    resolve(data)
  });
});

export const createJWT = (data) => new Promise((resolve, reject) => {
  jwt.sign(data, JWT_SECRET, (err, token) => {
    if (err) reject(err)
    resolve(token);
  });
});

export default {
  normalizePort,
  removeWordAccentuation,
  encrypt,
  verifyJWT
};
