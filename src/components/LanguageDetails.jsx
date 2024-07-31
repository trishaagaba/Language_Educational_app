import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

function LanguageDetails() {
  const { id } = useParams();
  const [language, setLanguage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const response = await fetch(`https://freetestapi.com/api/v1/languages/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
          console.log(id)
        }
        const data = await response.json();
        setLanguage(data);
      } catch (error) {
        console.error('Error fetching language data:', error);
        setError('Failed to fetch language details');
        console.log(id)

      }
    };

    fetchLanguage();
  }, [id]);

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!language) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container >
       <Box sx={{
        backgroundColor: '#363636',
         color: '#fff',
        padding: 2,
        borderRadius: 1,
        margin: '20px auto',
        // maxWidth: 600,
        padding: '20px',
        boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.2)',
       }}>
      <Typography variant="h3" gutterBottom>
        {language.name}
      </Typography>
      </Box>
      <Divider />
      <Typography variant="h6" gutterBottom>
        Region: {language.region}
      </Typography>
      <Typography variant="body1" paragraph>
        {language.officialStatus}
      </Typography>
      <Typography variant="body1" paragraph>
        This language is spoken by over {language.speakers} people in the world. It belongs to the family of {language.family} and is the {language.notes}.
      </Typography>
      <Typography variant="body1" paragraph>
       {language.languageHistory} 
       </Typography>
       <Divider />
       <Typography variant="body1" paragraph>
       Related languages: {language.relatedLanguages} 
       </Typography>
       <Typography variant="body1" paragraph>
       Dialects: {language.dialects} 
       </Typography>
       <Typography variant="body1" paragraph>
       The Writng System used is {language.writingSystem}. 
       </Typography>
       <Typography variant="body1" paragraph>
       {language.languageStatus}. 
       </Typography>
    </Container>
  );
}

export default LanguageDetails;
