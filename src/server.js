const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.Server({
    port: 8000,
    host: 'localhost',
  });

  await server.start();
  // eslint-disable-next-line no-console
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
