import cp from 'child_process'

const run = (...args) => cp.spawn('yarn', args, { stdio: 'inherit' })

run('run', 'build', '--watch')
run('test:assert', '--watch')
run('test:helpers', '--watch')
