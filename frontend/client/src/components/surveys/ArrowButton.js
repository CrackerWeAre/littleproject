import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ArrowButton = ({ lastSection }) => {
    return (
        <div className="arrow-btn">
            <button>
                <FontAwesomeIcon icon={lastSection ? faArrowUp : faArrowDown} />
            </button>
        </div>
    );
}

export default ArrowButton;