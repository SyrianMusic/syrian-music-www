import { v4 as uuidv4 } from 'uuid';

export { default as SessionContext } from './SessionContext';

const SESSION_ID_KEY = 'sessionId';

export const getSessionId = () => {
  let id = window.localStorage.getItem(SESSION_ID_KEY);

  if (!id) {
    id = uuidv4();
    window.localStorage.setItem(SESSION_ID_KEY, id);
  }

  return id;
};
