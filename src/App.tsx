import React, { useState } from 'react';
import { useQuery } from "react-query";
import _ from 'lodash';

//Components


//material-ui
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
//api
import * as api from './api/API';
//styles
import './App.css';
import PostItem from './components/Posts/PostItem';
import PaginationPost from './components/PaginationPost';



const usePosts = (page: number): { data: api.PostType[] | undefined, isLoading: boolean, isPreviousData: boolean, error: any } =>
(
  //key is ['posts', pagenumber]
  useQuery(["posts", page],
    //function to fetch Posts
    api.getPosts,
    {
      //keep previous data 
      keepPreviousData: true,
    }
  ))
function App() {
  //confige default value for page and pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  /**Fetch data by React query */
  const { data, isLoading, error } = usePosts(currentPage);

  //get current posts 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data ? _.slice(data, indexOfFirstPost, indexOfLastPost) : [];


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
  const totalPosts = (data !== undefined ? data.length : 100)
  return (
    /**Posts Block */

    <Container component={Box} py={3}>
      <PaginationPost postsPerPage={postsPerPage} totalPosts={totalPosts} onChange={(event, value) => setCurrentPage(value)} setCurrentPage={setCurrentPage} />
      <Grid container justifyContent="left" spacing={3}>
        {_.map(currentPosts, (post: api.PostType) => (
          <Grid item key={post.id} xs={12} sm={4}>
            <PostItem item={post} />
          </Grid>
        ))}
      </Grid>
      <PaginationPost postsPerPage={postsPerPage} totalPosts={totalPosts} onChange={(event, value) => setCurrentPage(value)} setCurrentPage={setCurrentPage} />

    </Container >
  );
}

export default App;
