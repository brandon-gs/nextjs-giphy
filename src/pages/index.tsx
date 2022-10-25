import Container from "@mui/material/Container";
import { HeaderSearch, GiphyTrendingList, GiphySearchList } from "@/containers";
import { Center } from "@/components";
import useListenSearchParam from "@/hooks/useListenSearchParam";

export default function Home() {
  const { search } = useListenSearchParam();

  return (
    <Container maxWidth="lg">
      <Center>
        <HeaderSearch />
        {search === "" ? (
          <GiphyTrendingList />
        ) : (
          <GiphySearchList search={search} />
        )}
      </Center>
    </Container>
  );
}
