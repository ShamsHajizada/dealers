const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const Schema = mongoose.Schema;
const bodyParser = require('body-parser')
const cors = require('cors') (app.use(cors()))

const BASE_URL="mongodb+srv://Dealersproduct:dealers@cluster0.d4mrpz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//  parse application/json
app.use(bodyParser.json())

const ProductSchema = new Schema({
  image: { type: string, require: true},
  title: { type: string, require: true},
  description: { type: string, require: true},
  price: { type: string, require: true},
 
});
const ProductModel = mongoose.model('Product', ProductSchema);


app.get("/api/product", async (req, res) => {
  try {
    const product = await ProductModel.find({});
    if (product.length > 0) {
      res.status(200).send({ message: "success", data: product });
    } else {
      res.status(204).send({
        message: "data is empty",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get("/api/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);

    if (product) {
      res.status(200).send({
        message: "success",
        data: product,
      });
    } else {
      res.status(404).send({ message: "data not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/api/product/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    res.status(200).send({
      message: "deleted succesfully!",
      deletedProduct: deletedProduct,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/api/product", async (req, res) => {
  try {
    const newProduct = new ProductModel({ ...req.body });
    await newProduct.save();

    res.status(201).send({ message: "created succesfully!", data: newProduct });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect('mongodb+srv://Dealersproduct:dealers@cluster0.d4mrpz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));



export async function getAllData() {
  try {
    const response = await axios(`${BASE_URL}/product`);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getDataById(id) {
  try {
    const response = await axios(`${BASE_URL}/product/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}





















  
  
  
  
 