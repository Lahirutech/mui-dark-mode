import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import Box from '@mui/material/Box';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DiscountIcon from '@mui/icons-material/Discount';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const LeftBar = ({ toggleTheme }: { toggleTheme: () => void }) => {
  console.log('props');

  return (
    <Box
      flex={1}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      {' '}
      <Box position='fixed'>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText primary='Trending Offers' />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DiscountIcon />
            </ListItemIcon>
            <ListItemText primary='Offers' />
          </ListItemButton>{' '}
          <ListItemButton>
            <ListItemIcon>
              <BeachAccessIcon />
            </ListItemIcon>
            <ListItemText primary='Events' />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <BedtimeIcon />
            </ListItemIcon>
            <ListItemIcon>
              <Switch
                defaultChecked={false}
                onChange={(e) => toggleTheme()}
              />
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default LeftBar;
