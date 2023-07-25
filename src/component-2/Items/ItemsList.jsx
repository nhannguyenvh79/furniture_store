import React from 'react';
import Items from './Items';
import './items.css';

export default function ItemsList({itemData}) {
    return(
        <div className="item-list">
            {itemData.map((element,index) => {
                return (
                    <Items 
                        key={index}
                        coverUrl={element.coverUrl}
                        title={element.title}
                        intro={element.intro}
                    />
                )
            })}
        </div>
    )
};
