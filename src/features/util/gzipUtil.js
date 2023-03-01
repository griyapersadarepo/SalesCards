import pako from 'pako';

const gzipMiddleware = ({ dispatch }) => (next) => (action) => {
  const compressed = pako.gzip(JSON.stringify(action));
  const base64 = btoa(String.fromCharCode.apply(null, compressed));
  const payload = {
    type: action.type,
    payload: base64,
  };
  return next(payload);
};

export default gzipMiddleware;