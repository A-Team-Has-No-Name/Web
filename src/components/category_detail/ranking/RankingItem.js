import React from 'react';

export const RankingItem = props => {
    const arrowIcon = props.arrowIcon;
    const categoryIcon = props.categoryIcon;
    return(
        <li className="list-group-item">
            <span className="badge">
                {props.score} <i className={'fa fa-level-' + arrowIcon}></i>
            </span>
            <i className={'fa fa-' + categoryIcon + ' fa-lg'}></i> {props.username}
        </li>
    )
};
