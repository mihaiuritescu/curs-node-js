module.exports = {
  checkIfAdmin: checkIfAdmin
}

const isAdmin = true;

function checkIfAdmin(req, res, next) {
  if (isAdmin) {
    console.log("users route first mid");
    return next();
  }
  return res.send({text: "Access denied!"});
}