import { useState } from 'react';
import styles from './styles.module.css';
import { FaStar, FaRegStar } from 'react-icons/fa';

function StarRating({ rating = 0, onRatingChange, editable = true }) {
    
    const [hoverRating, setHoverRating] = useState(0);

    const handleClick = (newRating) => {
        if (editable && onRatingChange) {
            onRatingChange(newRating);
        }
    };

    const handleMouseEnter = (starIndex) => {
        if (editable) {
            setHoverRating(starIndex);
        }
    };

    const handleMouseLeave = () => {
        if (editable) {
            setHoverRating(0);
        }
    };

    return (
        <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map((star) => {
                const isFilled = star <= (hoverRating || rating);
                const StarComponent = isFilled ? FaStar : FaRegStar;
                return (
                    <StarComponent
                        key={star}
                        className={`${styles.starIcon} ${editable ? styles.clickable : ''}`}
                        color={isFilled ? "#ff4444" : "#ccc"}
                        size={20}
                        onClick={() => handleClick(star)}
                        onMouseEnter={() => handleMouseEnter(star)}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: editable ? 'pointer' : 'default' }}
                    ></StarComponent>
                );
            })}
        </div>
    );
}

export default StarRating;