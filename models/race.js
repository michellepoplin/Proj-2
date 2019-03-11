// MODELS FOR TABLE COLUMNS

module.exports = function (sequelize, DataTypes) {
  const Race = sequelize.define('Race', {
    // insert key value for each column
    firstName: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    raceName: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    category: {
      type: DataTypes.STRING
    },
    street: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    zip: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    raceLength: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    participantCap: {
      type: DataTypes.STRING
    }, 
    date: {
      type: DataTypes.STRING
    }
  })
  return Race
}