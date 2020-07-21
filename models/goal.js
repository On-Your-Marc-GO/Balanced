// Create of our goal model.

module.exports = function (sequelize, DataTypes) {
    const Goal = sequelize.define('Goal', {
        goalType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        totalTimeAccrued: {
            type: DataTypes.INT, // This will be tracked in minutes. So INT datatype.
            allowNull: false,
            validate: {
                isNumeric: true,
                isInt: true,
            },
        },
        goalTime: {
            type: DataTypes.INT,
            alloqNull: false,
            validate: {
                isNumeric: true,
                isInt: true,
            },
        },
    });

    Goal.associate = function (models) {
        // Associating a Goal with a user.
        // A goal cannot be cretaed without a user due to foreign key constraint.
        Goal.belongsTo(models.User, {
            foreignKey: {
                allowNulle: false,
            },
        });
    };

    return Goal;
};
