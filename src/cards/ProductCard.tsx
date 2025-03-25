import {
  Box,
  Card,
  CardContent,
  CardMedia,
  /*   Link, */
  Typography,
} from "@mui/material";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default function ProductCard({ title, image, price }: ProductCardProps) {
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 180,
          width: "100%",
          marginBottom: "0.2rem",
          px: "1rem",
          paddingTop: "1rem",
        }}
      >
        {/*  <Link to={`/book/${}`} style={{ textDecoration: "none" }}> */}

        {/* Agregar enlace */}
        <Box sx={{ height: "180px", width: "100%" }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            /*  title={} */
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // Asegura que la imagen cubra sin deformarse
            }}
          />
        </Box>
        <CardContent>
          <Typography
            gutterBottom
            sx={{
              textTransform: "uppercase",
              margin: "0px",
              height: "48px",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Limita a 2 líneas
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          {/* <Typography sx={{ py: "0.5rem" }}></Typography> */}
          <Typography sx={{ fontWeight: "600" }}>{price}</Typography>
        </CardContent>
        {/*  </Link> */}
      </Card>
    </Box>
  );
}
