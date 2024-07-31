import * as React from 'react';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import MainFeaturedPost from './components/MainFeaturedPost';
import FeaturedPost from './components/FeaturedPost';
import Footer from './components/Footer';
import LanguageDetails from './components/LanguageDetails';


const mainFeaturedPost = {
  title: 'Discover new languages',
  description:
    "With the help of this language learning web app, you can learn about new languages and their history.",
    image: '.public/peopleDiscussing.jpeg',
  // image: 'https://www.bing.com/images/search?view=detailV2&ccid=m24yc6R6&id=F294877BF7A5D50FEB3ECFEFBC7226F0FA38B23D&thid=OIP.m24yc6R6ZthfQwTknOusZAHaEK&mediaurl=https%3a%2f%2fdm0qx8t0i9gc9.cloudfront.net%2fthumbnails%2fvideo%2fStw4Y28Bippgedql%2fvideoblocks-chatting-multiracial-group-of-college-students-doing-group-study-in-academic-library-positive-diverse-university-friends-studying-with-books-during-exam-preparation-in-high-school-library_r0zw2udrq4_thumbnail-1080_01.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.9b6e3273a47a66d85f4304e49cebac64%3frik%3dPbI4%252bvAmcrzvzw%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1920&q=different+races+studying+together&simid=607996309980134906&FORM=IRPRST&ck=C7969C149B542B492709A5803DE01BBE&selectedIndex=12&itb=0',
  imageText: 'People studying together',
  linkText: 'Search different languages…',
};

const defaultTheme = createTheme();


export default function App() {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [error,setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(()=> {
    const fetchLanguages = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/languages?limit=6');
        if (!response.ok) {
          throw new Error('Network response was not ok');
  }
  const data = await response.json();
  const languages = data.map((language, index) => ({
    title: language.name,
    speakers: `Mostly spoken: ${language.region}.`,
    description: ` ${language.officialStatus}.`,
    url: `https://freetestapi.com/api/v1/languages/${language.id}`
  }));
  setFeaturedPosts(languages);
} catch (error) {
  console.error('Error fetching data:', error);
  setError('Failed to fetch languages');
}
};

fetchLanguages();
}, []);

const handleSearch = async () => {
  try{
    const response = await fetch(`https://freetestapi.com/api/v1/languages?search=${searchQuery}`)
    if (!response.ok){
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (data.length === 1){
      const language = data[0];
      console.log('Navigating to language:', language.id); 
      navigate(`language/${language.id}`)
    }else {
      console.log('No results or multiple results found.');
  } }catch (error) {
    console.error('Error searching languages:', error);
    setError('Failed to search languages');
  }
};

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="BILINGUAL" 
        onSearch= {handleSearch} 
        searchQuery= {searchQuery}
        setSearchQuery= {setSearchQuery}/>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="By Trisha Agaba Esther"
      />
    </ThemeProvider>
  );
}