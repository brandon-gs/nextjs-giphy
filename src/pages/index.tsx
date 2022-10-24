import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { HeaderSearch } from "@/containers";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeaderSearch />
        <Typography variant="h4" component="h1" gutterBottom>
          Brandon GS Giphy
        </Typography>
      </Box>
    </Container>
  );
}
