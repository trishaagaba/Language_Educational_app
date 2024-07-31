import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import { colors } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom



function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component={Link} to={`language/${post.id}`}>
      {/* navigate(`language/${language.id}`) */}

        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.speakers}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
              </Typography>
            <Box
                sx = {{
                    mt: 'auto',
                    backgroundColor: ' grey.800',

                    color: 'white',
                    padding: 2,
                    textAlign: 'center',
                    borderRadius: 1
                }}
             >
             <Typography variant="subtitle1" color="primary">
              Read more..
            </Typography>
             </Box>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    speakers: PropTypes.string,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
};

export default FeaturedPost;