import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
const Products = () => {
  const [products] = useState([
    {
      id: 1,
      title: "Apple",
      image: "./assets/elma.jpg",
      description: "Fresh products from registered fields, without the use of additives or preservatives.",
      price: 2.99,
      category: "Fruit"
    },
    {
      id: 2,
      title: "Banana",
      image: "./assets/muz.jpg",
      description: "Fresh products from registered fields, without the use of additives or preservatives.",
      price: 1.99,
      category: "Fruit"
    },
    {
      id: 3,
      title: "Orange",
      image: "./assets/portakal.jpg",
      description: "Fresh products from registered fields, without the use of additives or preservatives.",
      price: 3.49,
      category: "Fruit"
    },
    {
      id: 4,
      title: "Tomato",
      image: "./assets/domates.jpg",
      description: "Fresh products from registered fields, without the use of additives or preservatives.",
      price: 1.49,
      category: "Vegetable"
    },
    {
      id: 5,
      title: "Cucumber",
      image: "./assets/salatalık.jpeg",
      description: "Fresh products from registered fields, without the use of additives or preservatives.",
      price: 0.99,
      category: "Vegetable"
    },
    {
      id: 6,
      title: "Eggplant",
      image: "./assets/patlıcan.jpg",
      description: "Fresh products from registered fields, without the use of additives or preservatives.",
      price: 2.29,
      category: "Vegetable"
    },
    {
      id: 7,
      title: "Chickpeas",
      image: "./assets/nohut.webp",
      description: "Fresh products from registered fields, without the use of additives or preservatives.",
      price: 2.99,
      category: "Legume"
    },
    {
      id: 8,
      title: "Lentil",
      image: "./assets/mercimek.jpg",
      description: "Fresh products from registered fields, without the use of additives or preservatives.",
      price: 2.49,
      category: "Legume"
    },
    {
      id: 9,
      title: "Bean",
      image: "./assets/fasulye.jpg",
      description: "Fresh products from registered fields, without the use of additives or preservatives.",
      price: 1.99,
      category: "Legume"
    }
  ]);
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product))
  };
  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">PRODUCTS</h2>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                className="card-img-top p-3"
                src={product.image}
                alt={product.title}
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ {product.price}</li>
              </ul>
              <div className="card-body">
                <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
