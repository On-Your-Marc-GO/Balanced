// Create of our goal model.

module.exports = function (sequelize, DataTypes) {
    const Goal = sequelize.define(
        'Goal',
        {
            goalType: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            totalTimeAccrued: {
                type: DataTypes.INTEGER, // This will be tracked in minutes. So INT datatype.
                allowNull: false,
                validate: {
                    isNumeric: true,
                    isInt: true,
                },
            },
            goalTime: {
                type: DataTypes.INTEGER,
                alloqNull: false,
                validate: {
                    isNumeric: true,
                    isInt: true,
                },
            },
        },
        {
            timestamps: false,
        }
    );

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
