import styled from "styled-components";
import styles from './style.module.css'
import { useState, useCallback, useRef, useEffect } from 'react';

const StyledParams = styled.div`
    max-height: 650px;
    padding: 20px;
    background-color: #FFF4EE;
    max-width: 280px;
    border-radius: 4px;
    margin-bottom: 30px;
`

const MIN_PRICE = 1850;
const MAX_PRICE = 25678;

function Params () {

    const [priceRange, setPriceRange] = useState({ min: MIN_PRICE, max: MAX_PRICE });
    const [selectedGenders, setSelectedGenders] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [activeThumb, setActiveThumb] = useState(null);
    const sliderRef = useRef(null);

    // Валидация цен
    const validatePrice = useCallback((value, type) => {
        let num = parseInt(value.toString().replace(/,/g, '')) || 0;
        
        if (type === 'min') {
            num = Math.max(MIN_PRICE, Math.min(num, priceRange.max - 1));
        } else {
            num = Math.min(MAX_PRICE, Math.max(num, priceRange.min + 1));
        }
        
        return num;
    }, [priceRange.min, priceRange.max]);

    // Обработчик изменения цены в инпутах
    const handlePriceChange = useCallback((type, value) => {
        const numValue = validatePrice(value, type);
        setPriceRange(prev => ({ ...prev, [type]: numValue }));
    }, [validatePrice]);

    // Форматирование числа
    const formatNumber = useCallback((num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }, []);

    // Обработчик начала перетаскивания
    const handleSliderMouseDown = useCallback((thumb, e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setIsDragging(true);
        setActiveThumb(thumb);
    }, []);

    // Обработчик движения мыши
    const handleSliderMove = useCallback((e) => {
        if (!isDragging || !sliderRef.current || !activeThumb) return;
        
        const slider = sliderRef.current;
        const rect = slider.getBoundingClientRect();
        let percentage = (e.clientX - rect.left) / rect.width;
        percentage = Math.min(Math.max(percentage, 0), 1);
        
        const newValue = Math.round(percentage * (MAX_PRICE - MIN_PRICE) + MIN_PRICE);
        
        setPriceRange(prev => {
            if (activeThumb === 'min') {
                const validMin = Math.min(newValue, prev.max - 1);
                return { ...prev, min: Math.max(MIN_PRICE, validMin) };
            } else {
                const validMax = Math.max(newValue, prev.min + 1);
                return { ...prev, max: Math.min(MAX_PRICE, validMax) };
            }
        });
    }, [isDragging, activeThumb]);

    // Обработчик окончания перетаскивания
    const handleSliderUp = useCallback(() => {
        setIsDragging(false);
        setActiveThumb(null);
    }, []);

    // Глобальные обработчики событий
    useEffect(() => {
        const handleMouseMove = (e) => {
            handleSliderMove(e);
        };

        const handleMouseUp = () => {
            handleSliderUp();
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            document.addEventListener('touchmove', handleMouseMove);
            document.addEventListener('touchend', handleMouseUp);
            document.body.style.userSelect = 'none';
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleMouseMove);
            document.removeEventListener('touchend', handleMouseUp);
            document.body.style.userSelect = '';
        };
    }, [isDragging, handleSliderMove, handleSliderUp]);

    // Обработчик клика по треку слайдера
    const handleTrackClick = useCallback((e) => {
        if (!sliderRef.current) return;
        
        const slider = sliderRef.current;
        const rect = slider.getBoundingClientRect();
        const percentage = (e.clientX - rect.left) / rect.width;
        const clickedValue = Math.round(percentage * (MAX_PRICE - MIN_PRICE) + MIN_PRICE);
        
        // Определяем ближайший ползунок
        const distanceToMin = Math.abs(clickedValue - priceRange.min);
        const distanceToMax = Math.abs(clickedValue - priceRange.max);
        
        if (distanceToMin < distanceToMax) {
            setPriceRange(prev => ({
                ...prev,
                min: Math.max(MIN_PRICE, Math.min(clickedValue, prev.max - 1))
            }));
        } else {
            setPriceRange(prev => ({
                ...prev,
                max: Math.min(MAX_PRICE, Math.max(clickedValue, prev.min + 1))
            }));
        }
    }, [priceRange.min, priceRange.max]);

    // Остальные обработчики
    const handleGenderChange = useCallback((gender) => {
        setSelectedGenders(prev =>
            prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]
        );
    }, []);

    const handleSizeSelect = useCallback((size) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    }, []);

    const resetFilters = useCallback(() => {
        setPriceRange({ min: MIN_PRICE, max: MAX_PRICE });
        setSelectedGenders([]);
        setSelectedSizes([]);
    }, []);

    const applyFilters = useCallback(() => {
        console.log('Applied filters:', { priceRange, selectedGenders, selectedSizes });
    }, [priceRange, selectedGenders, selectedSizes]);

    // Расчет позиций
    const minPosition = ((priceRange.min - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
    const maxPosition = ((priceRange.max - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

    

    return(
        <StyledParams>
            <h4 className={styles.paramsHeader}>
                    Подбор по параметрам
                </h4>
                <p className={styles.price}>
                    Цена, руб
                </p>
                <form className={styles.priceWrapper}>
                    <input className={styles.minPrice} value={formatNumber(priceRange.min)} onChange={(e) => handlePriceChange('min', e.target.value)} id="min-value" placeholder="1,850"></input>
                    <input className={styles.maxPrice} value={formatNumber(priceRange.max)} onChange={(e) => handlePriceChange('max', e.target.value)} id="max-value" placeholder="25,678"></input>
                </form>
                <div className={styles.sliderContainer} ref={sliderRef} onMouseDown={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const percentage = (e.clientX - rect.left) / rect.width;
                    const clickedValue = Math.round(percentage * (25678 - 1850) + 1850);
                    
                    if (Math.abs(clickedValue - priceRange.min) < Math.abs(clickedValue - priceRange.max)) {
                        handleSliderMouseDown('min');
                    } else {
                        handleSliderMouseDown('max');
                    }
                }}>
                    <div className={styles.sliderTrack}></div>
                    <div className={styles.sliderRange} style={{
                        left: `${minPosition}%`,
                        width: `${maxPosition - minPosition}%`
                    }}></div>
                    <div className={`${styles.sliderThumb} ${styles.leftThumb}`} style={{ left: `${minPosition}%` }} onMouseDown={(e) => {
                        e.stopPropagation();
                        handleSliderMouseDown('min');
                    }}></div>
                    <div className={`${styles.sliderThumb} ${styles.rightThumb}`} style={{ left: `${maxPosition}%` }} onMouseDown={(e) => {
                        e.stopPropagation();
                        handleSliderMouseDown('max');
                    }}></div>
                </div>
                <div className={styles.sex}>
                    <p className={styles.sexTxt}>Пол</p>
                    <form action="" className={styles.sexForm}>
                        <label className={`${styles.man} ${styles.customCheckbox}`}>
                            <input type="checkbox" name="man" className={`${styles.input}  ${styles.customCheckbox} `} checked={selectedGenders.includes('man')}
                            onChange={() => handleGenderChange('man')}/>
                            <span className={styles.checkmark}></span>
                            Мужской
                        </label>
                        <label className={`${styles.woman} ${styles.customCheckbox}`}>
                            <input type="checkbox" name="woman" className={`${styles.input}  ${styles.customCheckbox} `} checked={selectedGenders.includes('woman')}
                            onChange={() => handleGenderChange('woman')}/>
                            <span className={styles.checkmark}></span>
                            Женский
                        </label>
                    </form>
                </div>
                <div className={styles.sizeWrapper}>
                    <p className={styles.size}>Размер</p>
                    <div className={styles.sizeList}>
                    {[35, 36, 37, 38, 39, 40, 41, 42, 43].map(size => (
                        <button
                            key={size}
                            className={`${styles.sizeButton} ${
                                        selectedSizes.includes(size) ? styles.sizeActive : ''
                                                }`}
                            onClick={() => handleSizeSelect(size)}
                            type="button"
                        >
                            {size}
                        </button>
                    ))}
                </div>
                    <button className={styles.agreeSize} onClick={applyFilters}
                    type="button">Применить</button>
                    <button className={styles.resetSize} onClick={resetFilters}
                    type="button">сбросить</button>
                </div>
        </StyledParams>
    )
}

export default Params