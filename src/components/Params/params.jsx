import styled from "styled-components";
import styles from './style.module.css'


const StyledParams = styled.div`
    max-height: 650px;
    padding: 20px;
    background-color: #FFF4EE;
    max-width: 280px;
    border-radius: 4px;
    margin-bottom: 30px;
`

function Params () {
    return(
        <StyledParams>
            <h4 className={styles.paramsHeader}>
                    Подбор по параметрам
                </h4>
                <p className={styles.price}>
                    Цена, руб
                </p>
                <form className={styles.priceWrapper}>
                    <input className={styles.minPrice} id="min-value" placeholder="1,850"></input>
                    <input className={styles.maxPrice} id="max-value" placeholder="25,678"></input>
                </form>
                <div className={styles.sliderContainer}>
                    <div className={styles.sliderTrack}></div>
                    <div className={styles.sliderRange}></div>
                    <div className={`${styles.sliderThumb} ${styles.leftThumb}`}></div>
                    <div className={`${styles.sliderThumb} ${styles.rightThumb}`}></div>
                </div>
                <div className={styles.sex}>
                    <p className={styles.sexTxt}>Пол</p>
                    <form action="" className={styles.sexForm}>
                        <label className={`${styles.man} ${styles.customCheckbox}`}>
                            <input type="checkbox" name="man" className={`${styles.input}  ${styles.customCheckbox} `}/>
                            <span className={styles.checkmark}></span>
                            Мужской
                        </label>
                        <label className={`${styles.woman} ${styles.customCheckbox}`}>
                            <input type="checkbox" name="woman" className={`${styles.input}  ${styles.customCheckbox} `}/>
                            <span className={styles.checkmark}></span>
                            Женский
                        </label>
                    </form>
                </div>
                <div className={styles.sizeWrapper}>
                    <p className={styles.size}>Размер</p>
                    <div className={styles.sizeList}>
                        <button>35</button>
                        <button>36</button>
                        <button>37</button>
                        <button>38</button>
                        <button>39</button>
                        <button>40</button>
                        <button>41</button>
                        <button>42</button>
                        <button>43</button>
                    </div>
                    <button className={styles.agreeSize}>Применить</button>
                    <button className={styles.resetSize}>сбросить</button>
                </div>
        </StyledParams>
    )
}

export default Params