import VegitableStoryCard from "./CardComponent";
import { Box } from '@mui/material';

const cardsDetails = [
    {
        title: "Cucumba",
        content: "When you're setting up a new proposal or other document template in Microsoft Word, it's useful to be able to easily insert some dummy text to see what your page layout will look like. To insert random text, type =rand() and press Enter",
        user: "Akila Madurangana",
        photo: "https://res.cloudinary.com/dqmgkczgk/image/upload/v1741662145/economic_food_exchanger/bqzqkypoxh3mdybm6q9i.jpg",
    },
    {
        title: "carrot",
        content: "When you're setting up a new proposal or other document template in Microsoft Word, it's useful to be able to easily insert some dummy text to see what your page layout will look like. To insert random text, type =rand() and press Enter",
        user: "Akila Madurangana",
        photo: "https://res.cloudinary.com/dqmgkczgk/image/upload/v1741662147/economic_food_exchanger/d66yshxhnhw1kqau5hlv.jpg",
    },
    {
        title: "leeks",
        content: "When you're setting up a new proposal or other document template in Microsoft Word, it's useful to be able to easily insert some dummy text to see what your page layout will look like. To insert random text, type =rand() and press Enter",
        user: "Akila Madurangana",
        photo: "https://res.cloudinary.com/dqmgkczgk/image/upload/v1741662144/economic_food_exchanger/cxx2upopwa7vcynl38ef.jpg",
    },
    {
        title: "Beet",
        content: "When you're setting up a new proposal or other document template in Microsoft Word, it's useful to be able to easily insert some dummy text to see what your page layout will look like. To insert random text, type =rand() and press Enter",
        user: "Akila Madurangana",
        photo: "https://res.cloudinary.com/dqmgkczgk/image/upload/v1741662383/economic_food_exchanger/dkhd7hhadzojp3vvd70w.jpg",
    },
    {
        title: "Beet",
        content: "When you're setting up a new proposal or other document template in Microsoft Word, it's useful to be able to easily insert some dummy text to see what your page layout will look like. To insert random text, type =rand() and press Enter",
        user: "Akila Madurangana",
        photo: "https://res.cloudinary.com/dqmgkczgk/image/upload/v1741662383/economic_food_exchanger/dkhd7hhadzojp3vvd70w.jpg",
    },
    {
        title: "Beet",
        content: "When you're setting up a new proposal or other document template in Microsoft Word, it's useful to be able to easily insert some dummy text to see what your page layout will look like. To insert random text, type =rand() and press Enter",
        user: "Akila Madurangana",
        photo: "https://res.cloudinary.com/dqmgkczgk/image/upload/v1741662383/economic_food_exchanger/dkhd7hhadzojp3vvd70w.jpg",
    },
    {
        title: "Beet",
        content: "When you're setting up a new proposal or other document template in Microsoft Word, it's useful to be able to easily insert some dummy text to see what your page layout will look like. To insert random text, type =rand() and press Enter",
        user: "Akila Madurangana",
        photo: "https://res.cloudinary.com/dqmgkczgk/image/upload/v1741662383/economic_food_exchanger/dkhd7hhadzojp3vvd70w.jpg",
    },
    {
        title: "Beet",
        content: "When you're setting up a new proposal or other document template in Microsoft Word, it's useful to be able to easily insert some dummy text to see what your page layout will look like. To insert random text, type =rand() and press Enter",
        user: "Akila Madurangana",
        photo: "https://res.cloudinary.com/dqmgkczgk/image/upload/v1741662383/economic_food_exchanger/dkhd7hhadzojp3vvd70w.jpg",
    },
    {
        title: "Beet",
        content: "When you're setting up a new proposal or other document template in Microsoft Word, it's useful to be able to easily insert some dummy text to see what your page layout will look like. To insert random text, type =rand() and press Enter",
        user: "Akila Madurangana",
        photo: "https://res.cloudinary.com/dqmgkczgk/image/upload/v1741662383/economic_food_exchanger/dkhd7hhadzojp3vvd70w.jpg",
    },
    {
        title: "Beet",
        content: "When you're setting up a new proposal or other document template in Microsoft Word, it's useful to be able to easily insert some dummy text to see what your page layout will look like. To insert random text, type =rand() and press Enter",
        user: "Akila Madurangana",
        photo: "https://res.cloudinary.com/dqmgkczgk/image/upload/v1741662383/economic_food_exchanger/dkhd7hhadzojp3vvd70w.jpg",
    },
    {
        title: "Beet",
        content: "When you're setting up a new proposal or other document template in Microsoft Word, it's useful to be able to easily insert some dummy text to see what your page layout will look like. To insert random text, type =rand() and press Enter",
        user: "Akila Madurangana",
        photo: "https://res.cloudinary.com/dqmgkczgk/image/upload/v1741662383/economic_food_exchanger/dkhd7hhadzojp3vvd70w.jpg",
    },
    {
        title: "Beet",
        content: "When you're setting up a new proposal or other document template in Microsoft Word, it's useful to be able to easily insert some dummy text to see what your page layout will look like. To insert random text, type =rand() and press Enter",
        user: "Akila Madurangana",
        photo: "https://res.cloudinary.com/dqmgkczgk/image/upload/v1741662383/economic_food_exchanger/dkhd7hhadzojp3vvd70w.jpg",
    },
];

export default function Home() {
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    gap: "12px",
                    maxWidth: "1200px",
                    overflowX: "auto",
                    padding: "16px 0",
                    WebkitOverflowScrolling: "touch",
                    // Clean up scrollbar styling
                    scrollbarWidth: "thin",
                    msOverflowStyle: "none",
                    "&::-webkit-scrollbar": {
                        height: "8px", // Slightly taller for better visibility
                        width: "8px",
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "rgba(0, 0, 0, 0.05)", // Very slight background for contrast
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#ffffff",
                        boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)", // Add shadow instead of border
                        borderRadius: "4px",
                    },
                    "&::-webkit-scrollbar-corner": {
                        background: "transparent",
                    }
                }}
            >
                {cardsDetails.map((card, index) => (
                    <VegitableStoryCard
                        key={index}
                        title={card.title}
                        content={card.content}
                        user={card.user}
                        photo={card.photo}
                    />
                ))}
            </Box>
        </div>
    );
}