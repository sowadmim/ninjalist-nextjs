import Head from "next/head"
import { Typography, Container } from "@material-ui/core"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fixed>
        <Typography align="center" className="main-text" variant="h1">
          Homepage
        </Typography>
      </Container>
    </>
  )
}
