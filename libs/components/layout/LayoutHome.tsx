/* eslint-disable react/display-name */
import Head from "next/head";
import { Stack } from "@mui/material";

const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar home</title>
        </Head>

        <Stack id="pc-wrap">
          <Stack sx={{ background: "#81c784" }}>Header Home</Stack>

          <Stack id={"main"}>
            <Component {...props} />
          </Stack>

          <Stack sx={{ background: "#a1887f" }}>Footer</Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;