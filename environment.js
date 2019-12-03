process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    let env='def', env_path = ''
    if (arg.length > 0) {
        if (arg[0] === 'env') {
            env = arg[1]
        }
    }
    env_path = './env/' + env + '.properties';
    module.exports = env_path;
});