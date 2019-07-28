const runSequence = require('run-sequence');

runSequence.options.ignoreUndefinedTasks = true;

module.exports = () => runSequence('clean', 'transpile');
