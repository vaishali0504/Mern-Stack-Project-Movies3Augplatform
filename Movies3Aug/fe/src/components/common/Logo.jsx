import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      i<span style={{ color: theme.palette.primary.main }}>Movies</span>
    </Typography>
  );
};

export default Logo;