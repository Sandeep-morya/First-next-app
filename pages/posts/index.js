import { Pagination, SimpleGrid, Stack, LoadingOverlay } from "@mantine/core";
import React from "react";
import { CardGradient } from "../../components/Card";
import useSwr from "swr";
import { ServerError } from "../../components/errorPage";

const PostPage = () => {
  const [page, setPage] = React.useState(1);

  // :: Client Side Rendring using SWR:provided by NextJS itself ::
  const { data ,error} = useSwr(
    `http://localhost:8080/posts?_page=${page}&_limit=6`,
    (...a) => fetch(...a).then((res) => res.json())
  );
 
  // :: Client Side Rendring using UseEffect:Provided by React ::

  // const [list,setList] = React.useState([]);
  //   React.useEffect(() => {
  //     (async function fetchPosts() {
  //       const { data } = await axios.get(`http://localhost:8080/posts`, {
  //         params: {
  //           _page: page,
  //           _limit: 6,
  //         },
  //       });
  //       setList(data);
  //     })();
  //   }, [page]);



  if (data?.length === 0) {
    return <ServerError />;
  }

  return (
    <Stack spacing={"xl"}>
      <SimpleGrid
        breakpoints={[
          { minWidth: 1050, cols: 3, spacing: "md" },
          { minWidth: 768, cols: 2, spacing: "sm" },
          { minWidth: 550, cols: 1, spacing: "sm" },
        ]}
        spacing="xl"
      >
        {data ? (
          data.map(({ id, title, body }) => (
            <CardGradient key={id} {...{ id, title, body }} />
          ))
        ) : (
          <LoadingOverlay visible={!data} overlayBlur={2} />
        )}
      </SimpleGrid>
      <Pagination
        hidden={!data}
        page={page}
        size={"md"}
        total={Math.ceil(100 / 6)}
        siblings={5}
        withControls
        withEdges
        position="center"
        onChange={setPage}
      />
    </Stack>
  );
};

export default PostPage;
