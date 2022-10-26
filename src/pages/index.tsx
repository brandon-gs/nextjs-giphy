import Container from "@mui/material/Container";
import { HeaderSearch, GiphyTrendingList, GiphySearchList } from "@/containers";
import { Center } from "@/components";
import useListenSearchParam from "@/hooks/useListenSearchParam";
import Head from "next/head";

export default function Home() {
  const { search } = useListenSearchParam();

  return (
    <>
      <Head>
        <title>Giphy | Brandon GS</title>
        <meta
          name="description"
          content="Giphy application with nextjs, material ui and typescript"
        />
        <meta name="author" content="Brandon GS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Giphy, Giphy API, Nextjs, React, Material UI, Typescript"
        />
      </Head>
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
    </>
  );
}
