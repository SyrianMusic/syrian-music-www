let id = 0;

export const getId = () => Buffer.from(`input-${(id += 1)}`).toString('base64');
