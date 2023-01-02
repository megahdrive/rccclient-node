class ScriptExecution {
    /**
     * Represents a new script
     * @constructor
     * @param {string} name - The name of the script.
     * @param {string} script - The script to execute.
     * @param {Array} args - The arguments to pass.
     */
    constructor(name, script, args) {
        this.name = name;
        this.script = script;
        this.arguments = args;
    }
}

module.exports = ScriptExecution;