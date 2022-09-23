import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  const navigate = useNavigate();
  const handleOpenProduct = () =>{
    navigate('/product');
  }
  return (
    <Container onClick={handleOpenProduct}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
