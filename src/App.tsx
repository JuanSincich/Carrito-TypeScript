import { Box, Container, Typography } from "@mui/material";
import ProductCard from "./cards/ProductCard";
import VantaBackground from "./VantaBg";
import { Product } from "./interfaces/ProductIterface";
import { useEffect, useState } from "react";

// 01- Obtener los productos desde https://fakestoreapi.com/products
const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

/* // 02-Renderizar la lista de productos en el DOM
const renderProductList = async () => {
  const products = await getProducts();
  const $productList = document.querySelector("productList") as HTMLDivElement;
  const $productTemplate = document.querySelector(
    "productTemplate"
  ) as HTMLTemplateElement;
  products.forEach(({ id, title, image, price }) => {});
}; */

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <VantaBackground />
      <Container disableGutters>
        <Typography
          variant="h4"
          textAlign={"center"}
          sx={{
            marginTop: "4rem",
            py: "1.5rem",
            backgroundColor: "#ffffff",
            borderRadius: "4px",
            boxShadow:
              "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
          }}
        >
          Productos
        </Typography>
        <Box component="main" id="productList">
          <Box
            component="template"
            id="PorductTemplate"
            sx={{
              py: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default App;
