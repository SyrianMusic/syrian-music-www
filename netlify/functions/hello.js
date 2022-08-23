exports.handler = async function (event = {}) {
  const { headers = {} } = event;

  const hasAuthHeader = 'Authorization' in headers;
  if (!hasAuthHeader) {
    return { statusCode: 401 };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};
