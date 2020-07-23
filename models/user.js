// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require('bcryptjs');
// Creation of our User model.
module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define(
        'User',
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1],
                },
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1],
                },
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isNumeric: true,
                    isInt: true,
                },
            },
            height: {
                type: DataTypes.DECIMAL, // NOTE: Height will need to be stored in cm's and then converted on the UI side to represent the regular foot'inches" format we see.
                allowNull: false,
                validate: {
                    isNumeric: true,
                    isDecimal: true,
                },
            },
            weight: {
                type: DataTypes.DECIMAL, // NOTE: Height will need to be stored in cm's and then converted on the UI side to represent the regular foot'inches" format we see.
                allowNull: false,
                validate: {
                    isNumeric: true,
                    isDecimal: true,
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
<<<<<<< HEAD
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // created_at: {
        //     type: DataTypes.DATE,
        //     defaultValue: sequelize.literal('NOW()'),
        // },
        // updated_at: {
        //     type: DataTypes.DATE,
        //     defaultValue: sequelize.literal('NOW()'),
        // },
    });
=======
        {
            timestamps: false,
        }
    );
>>>>>>> aca3c24ccc544bd0239a21ae32f7bd49b47ba0f2

    User.associate = function (models) {
        // Associating a User with their Journal Entries.
        // When a User is deleted, it may also delete any associated JE's.

        User.hasMany(models.JournalEntry, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false,
            },
        });

        User.hasMany(models.Goal, {
            onDelete: 'cascade',
            foreignKey: {
                allowNull: false,
            },
        });
    };

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.addHook('beforeCreate', (user) => {
        user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
        );
    });

    return User;
};
