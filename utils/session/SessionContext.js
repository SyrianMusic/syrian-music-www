import { createContext } from 'react';
import { getSessionId } from './utils';

const SessionContext = createContext({ id: getSessionId() });

export default SessionContext;
