// Creation of our journalEntry model.
module.exports = function (sequelize, DataTypes) {
    const JournalEntry = sequelize.define('JournalEntry', {
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    JournalEntry.associate = function (models) {
        // Associating a Journal Entry with a user.
        // A Journal Entry cannot be created without a user due to foreign key constraint.
        JournalEntry.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
            },
        });

        // A Journal Entry may have many actvities associated with it.
        JournalEntry.hasMany(models.ActivityEntry, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false,
            },
        });

        // A Journal Entry may have many nutrtion entries associated with it.
        JournalEntry.hasMany(models.NutritionEntry, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return JournalEntry;
};
