'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Role, 
        { through: models.User_Role, 
          foreignKey: 'userId' });
          

     }

    // Instance method to compare passwords 
    async comparePassword(candidatePassword) {
      return await bcrypt.compare(candidatePassword, this.password);
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }

    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 8

    }
  }, {
    sequelize,
    modelName: 'User',
  });


  const hashedPassword = async (user) => {
    // Only hash the password if it has been changed (or is new)
    if (user.changed('password')) {
      const saltRounds = process.env.BCRYPT_SALT_ROUNDS || 10
      user.password = await bcrypt.hash(user.password, parseInt(saltRounds));
    }


  }
  User.beforeCreate(hashedPassword);
  User.beforeUpdate(hashedPassword);
  return User;
}