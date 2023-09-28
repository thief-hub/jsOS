export default {
    name: 'rm',
    description: 'remove (remove a file)',
    arguments: 1,
    execute(os, args) {
        const path = args[0];
        try {
            os.fs.getNodeByPath(path).delete();
        } catch (e) {
            os.say(`rm: cannot remove '${path}'`);
        }
    }
};
