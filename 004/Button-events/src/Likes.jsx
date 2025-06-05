import React, {useState} from 'react';

function Likes(){
    const [likes, setLikes] = useState(0);    

    const [hasLiked, setHasLiked] = useState(false)

    const toggleLikeButton = () => {
        if(!hasLiked){

            setLikes(likes + 1);
            setHasLiked(true);
        }    
    };

    const [dislike, setDislike] = useState(0);
    const [hasDisliked, setHasDisliked] = useState(false);


    const toggleDislikeButton = () => {
        if(!hasDisliked){
            setDislike(dislike + 1);
            setHasDisliked(true);
        }

    }

    return(
        <div>
            <img src="./assets/profile.jpg" alt="profile photo" />
            <p>number of likes: {likes}</p>
            <button type="button" onClick={toggleLikeButton} disabled = {hasLiked === true}>Like 👍</button>

            <p>number of dislikes: {dislike}</p>
            <button type="button" onClick={toggleDislikeButton} disabled = {hasDisliked === true}>Dislike 👎</button>
        </div>
    );
}

export default Likes