import { v4 as uuidv4 } from 'uuid';
import { createContext } from 'react';

const SessionContext = createContext({ id: uuidv4() });

export default SessionContext;
