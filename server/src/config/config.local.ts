export default {
  orm: {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'done',
    synchronize: false,
    logging: false,
    useUnifiedTopology: true,
  },
  security: {
    csrf: false,
  },
};
