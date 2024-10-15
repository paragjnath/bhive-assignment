import { Typography, Box, useTheme } from '@mui/material';
import NavigationButton from './NavigationButton';
import BookPassButton from './BookPassButton';
import SpacesTag from './SpacesTag';
import React from 'react';
import { WrokSpace } from '../../types/WorkSpace';
import { apiBaseUrl } from '../../environment';

const SpaceCard: React.FC<WrokSpace> = ({
  name,
  images,
  google_maps_url,
  day_pass_price,
  day_pass_discounts_percentage,
}) => {
  const theme = useTheme();
  const discount = day_pass_discounts_percentage[10]?.value;
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        border: `1px solid ${theme.palette.divider}`,
        p: '2rem 1.6rem',
        backgroundColor: theme.palette.common.white,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          height: '4rem',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.8rem',
            fontWeight: 600,
            lineHeight: '2.2rem',
          }}
        >
          {name}
        </Typography>
        <NavigationButton url={google_maps_url} />
      </Box>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {images?.length && (
          <Box
            component="img"
            src={apiBaseUrl + images[0]}
            height="20rem"
            width="100%"
            sx={{
              objectFit: 'cover',
              borderRadius: '8px',
              marginTop: '2rem',
              position: 'relative',
            }}
          />
        )}
        <SpacesTag></SpacesTag>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          pt: '2rem',
        }}
      >
        <BookPassButton noOfDays={1} price={day_pass_price} />
        <BookPassButton
          noOfDays={10}
          price={day_pass_price}
          discount={discount}
        />
      </Box>
    </Box>
  );
};

export default SpaceCard;
