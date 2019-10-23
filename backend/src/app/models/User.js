import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.STRING,
        phone: Sequelize.STRING,
        birthday: Sequelize.DATE,
        provider: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    // singin > auth rolar por email: adm + professores

    return this;
  }
}

export default User;
