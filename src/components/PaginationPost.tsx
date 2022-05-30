import React from 'react'
//material-ui
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props {
    postsPerPage: number;
    totalPosts: number;
    onChange: (event: EventTarget, value: number) => void;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const PaginationPost: React.FC<Props> = ({ postsPerPage, totalPosts, onChange, setCurrentPage }) => {
    return (
        <Stack spacing={2}>
            <Box component="div" sx={{ p: 2, border: '1px dashed grey', alignItems: 'center', justifyContent: 'center', margin: '2rem 0' }}>
                <Pagination
                    count={Math.ceil(totalPosts / postsPerPage)}
                    variant="outlined"
                    color="secondary"
                    showFirstButton={true}
                    showLastButton={true}
                    onChange={(event, value) => setCurrentPage(value)}
                />
            </Box>
        </Stack>
    )
}

export default PaginationPost