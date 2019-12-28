import Sequelize from 'sequelize'

// Option 1: Passing parameters separately
const sequelize = new Sequelize('fac', 'root', 'rTrapok)1', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    define: {
        timestamps: false
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const User = sequelize.define('user', {
    // attributes
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    first_name: {
        type: Sequelize.STRING,
    },
    note: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true
    // options
});

// Find all users
User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
});

// Create a new user
User.create({username: "test1227", email: "johnDoe@gmail.com", first_name: 'John', last_name: 'Doe'}).then(jane => {
    console.log("Jane's auto-generated ID:", jane.id);
}, err => 'silent');

// Delete everyone named "Jane"
/*User.destroy({
    where: {
        username: "test1227"
    }
}).then(() => {
    console.log("delete Done");
});*/

// Change everyone without a last name to "Doe"
User.update({note: "2 testing note"}, {
    where: {
        note: 'testing note',
    }
}).then(() => {
    console.log("note Done");
});