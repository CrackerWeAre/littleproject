import React from 'react';
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
    return (
        <section id="section-4" className="section-4">
            <h1>관심 카테고리 선택</h1>

            <div className="categories">
                <div className="category">
                    <input type="checkbox" id="game" name="game" />
                    <FontAwesomeIcon icon={faGamepad} />
                    <label htmlFor="game">게임</label>
                </div>
                <div className="category">
                    <input type="checkbox" id="music" name="music" />
                    <FontAwesomeIcon icon={faHeadphones} />
                    <label htmlFor="music">음악</label>
                </div>
                <div className="category active">
                    <input type="checkbox" id="communication" name="communication" />
                    <FontAwesomeIcon icon={faComments} />
                    <label htmlFor="communication">소통</label>
                </div>
                <div className="category">
                    <input type="checkbox" id="news" name="news" />
                    <FontAwesomeIcon icon={faNewspaper} />
                    <label htmlFor="news">뉴스/정보</label>
                </div>
                <div className="category">
                    <input type="checkbox" id="shopping" name="shopping" />
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <label htmlFor="shopping">쇼핑</label>
                </div>
                <div className="category">
                    <input type="checkbox" id="airwave" name="airwave" />
                    <FontAwesomeIcon icon={faTv} />
                    <label htmlFor="airwave">공중파</label>
                </div>
                <div className="category">
                    <input type="checkbox" id="sports" name="sports" />
                    <FontAwesomeIcon icon={faRunning} />
                    <label htmlFor="sports">스포츠/운동</label>
                </div>
                <div className="category">
                    <input type="checkbox" id="cooking" name="cooking" />
                    <FontAwesomeIcon icon={faUtensils} />
                    <label htmlFor="cooking">요리</label>
                </div>
            </div>
            
            <ArrowButton />
        </section>
    );
}

export default Section4;