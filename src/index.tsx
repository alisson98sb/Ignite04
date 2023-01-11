import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

createServer({
  models: {
    foods: Model,
  },
  routes(){
    this.namespace = 'api';

    this.get('/foodsMirage', () => {
      return [
        {
          "id": 0,
          "name": "Veggie",
          "description": "Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.",
          "price": "21.90",
          "available": true,
          "image": "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food2.png"
        },
        {
          "id": 1,
          "name": "A la Camarón",
          "description": "Macarrão com vegetais de primeira linha e camarão dos 7 mares.",
          "price": "25.90",
          "available": true,
          "image": "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food3.png"
        },
        {
          "id": 2,
          "name": "A la Camarón Executivo",
          "description": "Macarrão com vegetais de primeira linha e camarão dos 7 mares.",
          "price": "25.90",
          "available": true,
          "image": "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food3.png"
        }
      ]
    });

    this.post("/foodsMirage", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("foods", data);
    });

    
    this.put("/foodsMirage/:id", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return data
    })

    this.delete("/foodsMirage/:id", (req, res) => {
      return res.params.id
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
