import styled from "styled-components";
import { categories2 } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";


const Container = styled.div`
  display: flex;
  padding: 20px;
  color: black;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories2 = () => {
  return (
    <Container>
      {categories2.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories2;
