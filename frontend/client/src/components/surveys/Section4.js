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
    const [categories, setCategories] = useState([
        {
            id: 'game',
            text: '게임',
            checked: false,
            icon: faGamepad
        },
        {
            id: 'music',
            text: '음악',
            checked: false,
            icon: faHeadphones
        },
        {
            id: 'communication',
            text: '소통',
            checked: false,
            icon: faComments
        },
        {
            id: 'news',
            text: '뉴스',
            checked: false,
            icon: faNewspaper
        },
        {
            id: 'shopping',
            text: '쇼핑',
            checked: false,
            icon: faShoppingCart
        },
        {
            id: 'airwave',
            text: '공중파',
            checked: false,
            icon: faTv
        },
        {
            id: 'sports',
            text: '스포츠/운동',
            checked: false,
            icon: faRunning
        },
        {
            id: 'cooking',
            text: '요리',
            checked: false,
            icon: faUtensils
        }
    ]);

    const onChange = useCallback((e) => {
        const { checked, name } = e.target;

        setCategories(categories.map(category => 
            category.id === name ? { ...category, checked: !category.checked } : category
        ));
        
        if (checked) {
            e.target.parentElement.style.boxShadow = 'inset -3px -3px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1)';
            e.target.parentElement.style.transfrom = 'scale(0.95)';
            e.target.nextElementSibling.style.color = '#fbb30f';
        } else {
            e.target.parentElement.style.boxShadow = '';
            e.target.parentElement.style.transfrom = '';
            e.target.nextElementSibling.style.color = '';
        }
    }, [categories]);

    const onSubmit = e => {
        e.preventDefault();
    }

    return (
        <section id="section-4" className="section-4">
            <h1><span>관심 카테고리</span> 선택</h1>
            <p>관심있는 카테고리를 선택해주세요!</p>

            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <label>
                            <input 
                                type="checkbox" 
                                name={category.id}
                                id={category.id}
                                checked={category.checked}
                                onChange={onChange}
                            />
                            <FontAwesomeIcon icon={category.icon} />
                            <span className="checkmark">{category.text}</span>
                        </label>
                    </li>
                ))}
            </ul>
            
            <button type="submit" className="submit-btn" onSubmit={onSubmit}>제출하기</button>
            
            <ArrowButton />
        </section>
    );
}

export default Section4;