export const movieIndex = (req, res) => {
  res.send("All the movies");
};

export const movieCreate = (req, res) => {
  console.log(req.body);

  return res.json(req.body);
};

export const movieUpdate = (req, res) => {
  res.send("updated the movies");
};

export const movieDelete = (req, res) => {
  res.send("Deleted the movies");
};
