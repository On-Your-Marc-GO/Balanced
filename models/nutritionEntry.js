// Creation of our Nutrition model.

module.exports = function (sequelize, DataTypes) {
    const NutritionEntry = sequelize.define(
        'NutritionEntry',
        {
            entryNutritionText: {
                type: DataTypes.TEXT,
            },
            typeOfMeal: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
        }
    );

    NutritionEntry.associate = function (models) {
        // Associating a nutrition entry with a given Journal Entry
        NutritionEntry.belongsTo(models.JournalEntry, {
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return NutritionEntry;
};
