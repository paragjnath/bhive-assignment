import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SpaceCard from './SpaceCard';
import { FormattedMessage } from 'react-intl';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchWorkSpacesThunkAction } from '../../redux/workspace/thunk-actions';
import { workspaceSelectors } from '../../redux/workspace/selectors';
import { LoadingStatus } from '../../redux/workspace/type';
import PlaceHolderSpaceCard from './PlaceHolderSpaceCard';

const Spaces = () => {
  const dispatch = useAppDispatch();

  const spaces = useAppSelector(workspaceSelectors.selectListItems);
  const loading = useAppSelector(workspaceSelectors.selectLoadingStatus);

  useEffect(() => {
    dispatch(fetchWorkSpacesThunkAction());
  }, [dispatch]);

  return (
    <Box component="section" sx={{ pt: 12 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: '2.4rem', sm: '3.6rem' },
          fontWeight: 700,
          color: 'text.primary',
          lineHeight: 1.21,
        }}
      >
        <FormattedMessage id="spaces.title" />
      </Typography>
      {loading === LoadingStatus.LOADING && (
        <Grid container spacing={4} sx={{ pt: 4 }}>
          {[...Array(6)].map((space, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <PlaceHolderSpaceCard />
            </Grid>
          ))}
        </Grid>
      )}
      <Grid container spacing={4} sx={{ pt: 4 }}>
        {spaces.map((space, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <SpaceCard {...space} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Spaces;
