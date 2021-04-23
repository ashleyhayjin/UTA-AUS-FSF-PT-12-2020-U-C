const { Model, DataTypes } = require('sequelize');
const sequelize = require('./connection');

class Location extends Model {}

Location.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
    name: {
            type: DataTypes.STRING,
            allowNull: false,
        },


});

module.exports = Location;