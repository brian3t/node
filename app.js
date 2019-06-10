const mysql = require('mysql')
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rTrapok)1',
    socketPath: '/tmp/mysql8.sock',
    database: 'lno',
    multipleStatements: true
})

conn.connect((err) => {
    if (err) {
        console.error(`error ${err}`);
        throw err;
    }
    console.log(`Connected!`);
})
/*
conn.query('SELECT * FROM `band` LIMIT 3', (err, rows)=>{
    if (err) throw err;

    console.log(`Data received from band: `)
    console.log(rows);
})*/

const user = {
    username: 'username', email: 'email', first_name: 'firstname', 'last_name': 'ln',
    phone_number_type: 'Cell', phone_number: '01234567890123456789', birthdate: '2019-01-02 03:04:05'
}
/*conn.query('INSERT INTO user SET ?', user, (err, res) => {
    if (err) throw err

    console.log(`Last insert id: `, res.insertId);
})*/
/*conn.query('UPDATE user SET phone_number= ? WHERE username = ? ',
    ['11111', 'username'],
    (err, res) => {
        if (err) throw err
        console.log(`Changed: ${res.changedRows} rows`);
    })*/

/*conn.query('DELETE FROM lno.user WHERE username = ?', ['username'],
    (err, res)=>{
        if (err) throw err
        console.log(`Deleted: `, res.affectedRows);
    })*/

/*
conn.query('CALL lno.sp_get_employee_detail("ngxtri")',
    (err, rows)=>{
        if (err) throw err

        console.log(`received from stored proc: \n`);
        console.log(rows);
    })
*/

console.log(`${mysql.escape('4 OR 1=1')}`);
conn.end((err) => {

})