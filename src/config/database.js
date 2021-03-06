require('dotenv/config');

module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  timezone: '-03:00',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

// ***********************  Ambiente de Desenvolvimento ************************

// module.exports = {
//   dialect: 'mysql',
//   host: '127.0.0.1',
//   username: 'root',
//   password: 'docker',
//   database: 'db_inventory',
//   timezone: '-03:00',
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };

// ***********************  Banco de dados Homologação ************************

// module.exports = {
//   dialect: 'mysql',
//   host: '192.168.0.23',
//   username: 'sistemas',
//   password: 'developers',
//   database: 'db_recpacheco',
//   dialectOptions: {
//     // for reading from database
//     dateStrings: true,
//     typeCast: true,
//   },
//   timezone: '+05:30',
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };

// ***********************  Banco de dados Produção ************************

// module.exports = {
//   dialect: 'mysql',
//   host: '192.168.0.22',
//   username: 'sistemas',
//   password: 'developers',
//   database: 'db_recpacheco',
//   dialectOptions: {
//     // for reading from database
//     dateStrings: true,
//     typeCast: true,
//   },
//   timezone: '+05:30',
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };
