exports.hello = (req, res) => {
  res.send("hello!");
};

exports.addWand = async (req, res) => {
  res.send(req.body);
};

exports.getWands = async (req, res) => {
  res.send(["wand1", "wand2", "wand3"]);
};

exports.getWand = async (req, res) => {
  const { id } = req.params;
  res.send(id);
};
