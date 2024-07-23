import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { TextField } from '@mui/material';


function Header(props) {
  const {title, onSearch, searchQuery, setSearchQuery } = props;
  // const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }
  
  const handleSearch = () => {
    onSearch(searchQuery);
  }
  

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <TextField 
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder='Search languages'
        variant='outlined'
        size='small'/>
        <IconButton onClick = {onSearch}>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
        <Button variant="outlined" size="small">
          Log in
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;