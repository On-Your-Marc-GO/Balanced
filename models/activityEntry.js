// Creation of our activity model.
module.exports = function (sequelize, DataTypes) {
    const ActivityEntry = sequelize.define(
        'ActivityEntry',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            totalTime: {
                type: DataTypes.INTEGER, // This will be tracked in minutes. So INT datatype.
                allowNull: false,
                validate: {
                    isNumeric: true,
                    isInt: true,
                },
            },
            entryActivityText: {
                type: DataTypes.TEXT,
            },
        },
        {
            timestamps: false,
        }
    );

    ActivityEntry.associate = function (models) {
        // Associating an activity with a Journal Entry.
        ActivityEntry.belongsTo(models.JournalEntry, {
            foreignKey: {
                allowNull: false,
            },
        });

        ActivityEntry.belongsTo(models.Category, {
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return ActivityEntry;
};
