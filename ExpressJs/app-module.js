import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("this is home page");
});

app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "product 1",
    },
    {
      id: 2,
      label: "product 2",
    },
    {
      id: 3,
      label: "product 3",
    },
  ];
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  console.log("req.params: ", req.params);
  const products = [
    {
      id: 1,
      label: "Hey bro im product 1",
    },
    {
      id: 2,
      label: "Hey bro im product 2",
    },
    {
      id: 3,
      label: "Hey bro im product 3",
    },
  ];
  const getSingleProduct = products.find((product) => product.id === productId);

  if(getSingleProduct){
    res.json(getSingleProduct)
  } else {
    res.status(404).send("product is not found");
  }
});

app.listen(port, () => {
  console.log("app is listening on port ", port);
});
