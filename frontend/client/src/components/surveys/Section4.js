import React, { useState, useCallback } from 'react';
import ArrowButton from './ArrowButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

const Section4 = () => {
    const [isChecked, setIsChecked] = useState(false);

    const onChange = useCallback((e) => {
        if (e.target.checked === true) {
            setIsChecked(e.target.checked);
            e.target.parentElement.style.boxShadow = 'inset -3px -3px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1)';
            e.target.parentElement.style.transfrom = 'scale(0.95)';
            e.target.nextElementSibling.style.color = '#fbb30f';
        } else {
            setIsChecked(!isChecked);
            e.target.parentElement.style.boxShadow = '';
            e.target.parentElement.style.transfrom = '';
            e.target.nextElementSibling.style.color = '';
        }
    }, [isChecked]);

    return (
        <section id="section-4" className="section-4">
            <h1><span>관심 카테고리</span> 선택</h1>
            <p>관심있는 카테고리를 선택해주세요!</p>

            <ul>
                <li>
                    <label>
                        <input 
                            type="checkbox" 
                            name="game" 
                            id="game"
                            checked={isChecked}
                            onChange={onChange}
                        />
                        <FontAwesomeIcon icon={faGamepad} />
                        <span className="checkmark">게임</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                            type="checkbox" 
                            name="music" 
                            id="music"
                            checked={isChecked}
                            onChange={onChange}
                        />
                        <FontAwesomeIcon icon={faHeadphones} />
                        <span className="checkmark">음악</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                            type="checkbox" 
                            name="communication" 
                            id="communication"
                            checked={isChecked}
                            onChange={onChange}
                        />
                        <FontAwesomeIcon icon={faComments} />
                        <span className="checkmark">소통</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                            type="checkbox" 
                            name="news"
                            id="news"
                            checked={isChecked}
                            onChange={onChange}
                        />
                        <FontAwesomeIcon icon={faNewspaper} />
                        <span className="checkmark">뉴스</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                            type="checkbox" 
                            name="shopping"
                            id="shopping"
                            checked={isChecked}
                            onChange={onChange}
                        />
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="checkmark">쇼핑</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                            type="checkbox" 
                            name="airwave" 
                            id="airwave"
                            checked={isChecked}
                            onChange={onChange}
                        />
                        <FontAwesomeIcon icon={faTv} />
                        <span className="checkmark">공중파</span>
                    </label>
                </li>
                <li>
                    <label>
                        <input 
                            type="checkbox" 
                            name="sports" 
                            id="sports"
                            checked={isChecked}
                            onChange={onChange}
                        />
                        <FontAwesomeIcon icon={faRunning} />
                        <span className="checkmark">스포츠/운동</span>
                    </label>
                </li>
                <li>
                    <label htmlFor="cooking">
                        <input 
                            type="checkbox" 
                            name="cooking" 
                            id="cooking"
                            checked={isChecked}
                            onChange={onChange}
                        />
                        <FontAwesomeIcon icon={faUtensils} />
                        <span>요리</span>
                    </label>
                </li>
            </ul>
            
            <button type="submit" className="submit-btn">제출하기</button>
            
            <ArrowButton />
        </section>
    );
}

export default Section4;