const Traveller = require('./Traveller');
const Trips = require('./Trips');
const Location = require('./Location');



Trips.hasMany(Location,{
    foreignKey: 'location_db',
    onDelete: 'CASCADE',
});

