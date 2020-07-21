// Creation of our category model.

module.exports = function (sequelize, DataTypes) {
    const Category = sequelize.define('Category', {
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        metrics: {
            // Unique field that will be used to story specific category information.
            // Ex. a run we will track distance covered, total time run, and average pace while
            // strength training we will want to track maybe the exercise name, reps, and weight
            // for each rep. Either way the front end and other parts of the application will be
            // responsible for parsing this out and presenting it accordingly.
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    Category.associate = function (models) {
        // Associating a category with a activity entry.
        // A activity entry can only have one type of category
        // but a category can be tied to many activity entries.
        Category.hasMany(models.ActivityEntry, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return Category;
};
