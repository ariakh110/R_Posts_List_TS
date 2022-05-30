import React from 'react';
import { useQuery } from "react-query";
import _ from 'lodash';

//Components


//material-ui
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
/**
 * TODO:must convert to component
 */
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
//api
import * as api from './api/API';
//styles
import './App.css';
import PostItem from './components/Posts/PostItem';

const usePosts = (): { data: {} | undefined, isLoading: boolean, error: any } => {
  return useQuery<api.PostType[]>(["posts"], api.getPosts)
}
function App() {
  /**Fetch data by React query */
  const { data, isLoading, error } = usePosts()
  console.log(data);

  /**loading */
  if (isLoading) return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <CircularProgress />
      </Box>
    </>
  )
  /**end loading */
  /**error  */
  if (error) return <div>Oh no Error occured! please try again</div>
  /**end error */

  /** handle pagination prev and next btn*/
  // const handlePrevPage = (prevPage: number) => {
  //   setPage((prevPage) => prevPage - 1);
  // };

  // const handleNextPage = (nextPage: number) => {
  //   setPage((nextPage) => nextPage + 1);
  // };
  /************************************** */
  return (
    /**Posts Block */

    <Container maxWidth="sm">

      <Stack spacing={2}>
        <Pagination count={100} variant="outlined" color="secondary" />
      </Stack>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {_.map(data, (post: api.PostType) => (
            <Grid item key={post.id} xs={12} sm={4}>
              <PostItem item={post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" color="secondary" />
      </Stack>
    </Container>
  );
}

export default App;
