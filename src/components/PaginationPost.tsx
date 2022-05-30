import React from 'react'
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props {
    postsPerPage: number;
    currentPage: number;
    setCurrentPage: (value: number) => void;
}
const PaginationPost: React.FC<Props> = ({ postsPerPage, currentPage, setCurrentPage }) => {
    return (
        <Stack spacing={2}>
            <Box component="div" sx={{ p: 2, border: '1px dashed grey', alignItems: 'center', justifyContent: 'center', margin: '2rem 0' }}>
                <Pagination
                    count={100 / postsPerPage}
                    variant="outlined"
                    color="secondary"
                    defaultPage={currentPage}
                    showFirstButton={true}
                    showLastButton={true}
                    onChange={(event, value) => setCurrentPage(value)}
                />
            </Box>
        </Stack>
    )
}

export default PaginationPost