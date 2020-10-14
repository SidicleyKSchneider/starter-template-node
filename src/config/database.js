module.exports = {
  dialect: 'postgres',
  url: process.env.DB_URL,
  define: {
    timestamps: true, // created_at e updated_at "registros do banco de dados"
    underscored: true,
    underscoredAll: true,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
