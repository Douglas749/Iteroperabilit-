'use strict';

const Hapi = require('@hapi/hapi');
const returnsRoutes = require('./routes/returns');

const init = async () => {
    const server = Hapi.server({
        port: 4002,
        host: 'localhost'
    });

    server.route(returnsRoutes);

    await server.start();
    console.log('🚀 Book Returns Service running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
