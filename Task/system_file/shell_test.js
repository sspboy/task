"nodejs";

const { createShell } = require("shell");

const shell = createShell();

shell.on("line", (line) => {
    console.log(line);
});

shell.exec("node Task/server_test.js");

const id = $autojs.keepRunning();

shell.exit().then(() => $autojs.cancelKeepRunning(id));
