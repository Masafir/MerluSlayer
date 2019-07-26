/**
 * NPM import
 */
import React from 'react';
import { GiHearts } from 'react-icons/gi';
/**
 * Local import
 */
import './lifebar.scss';

/**
 * Code
 */

 const Lifebar = ({ lifepoint }) => (
    <div className="lifebar">
        {
            lifepoint.map((heart,id) => heart === true ? <span key={id} className="full"><GiHearts /></span> : <span key={id}  className="empty"><GiHearts /></span>)
        }
    </div>
 );

/**
 * Export
 */
export default Lifebar;