import React, { useEffect, useState } from 'react';
import './App.css';

const MemoryCard = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setImages(data) ,console.log(images));
                // const spriteUrls = [];
                // // Accessing different versions of Ditto images
                // const { sprites } = data;
                // if (sprites.front_default) spriteUrls.push({ url: sprites.front_default, title: 'front default' });
                // if (sprites.back_default) spriteUrls.push({ url: sprites.back_default, title: 'back default' });
                // if (sprites.front_shiny) spriteUrls.push({ url: sprites.front_shiny, title: 'front shiny' });
                // if (sprites.back_shiny) spriteUrls.push({ url: sprites.back_shiny, title: 'back shiny' });

            //     setPictures(spriteUrls);
            //     console.log(spriteUrls);
            // });
    }, []);

    return (
        <div>
            <h1>Welcome to the memory card game</h1>
            <div className="grid">
                {Array.isArray(images) && images.map((image, index) => (
                    <div key={index} >
                        <img src={image.image} alt={image.title} className="image-item" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemoryCard;
