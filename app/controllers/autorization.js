module.exports = {
  checkIfAdmin: checkIfAdmin
}

const isAdmin = true;

function checkIfAdmin(req, res, next) {
  if (isAdmin) {
    return next();
  }
  return res.send({text: "Access denied!"});
}