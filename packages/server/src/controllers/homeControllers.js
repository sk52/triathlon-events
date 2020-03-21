const getHealth = async (req, res) => {
    res.status(200);
    res.send('OK');
}
exports.getHealth = getHealth;

const getRoot = async (req, res) => {
    res.status(200);
    res.send('/ route page');
}
exports.getRoot = getRoot;
