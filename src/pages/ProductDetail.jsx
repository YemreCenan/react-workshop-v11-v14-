import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react'
import ProductService from "../services/productServices";
export default function ProductDetail() {
    
   const {id} = useParams()

   const [product, setProduct] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts(id)
      .then((result) => setProduct(result.data.products));
    console.log("product.products")
     
  }, []);
  return (
    <div>

      <Card >
      <Image src='https://www.abetterlemonadestand.com/wp-content/uploads/2019/04/How-to-Sell-Digital-Products-Online.jpg' wrapped ui={false} 
      />
      <Card.Content>
        <Card.Header></Card.Header>
        <Card.Meta>
          <span className='date'></span>
        </Card.Meta>
        <Card.Description>
        {id} Numaralı Ürün
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {id} :Friends
        </a>
      </Card.Content>
    </Card>

    
    </div>
  )
}
