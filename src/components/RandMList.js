import React from 'react'
import Skeleton from 'react-loading-skeleton';
import '../components/styles/BadgesList.css'


import { IoLocationSharp } from 'react-icons/io5';

class RandMList extends React.Component {
    render() {
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.results.map((badge) => {
                        return(
                            
                            <li key={badge.id}>
                                <div className="BadgesListItem">
                                    <img
                                    className="BadgesListItem__avatar"
                                    src={badge.image ||  < Skeleton duration={10} />}
                                    alt={`${badge.name} ${badge.species}`}
                                    />

                                    <div>
                                        <strong>
                                            {badge.name ||  < Skeleton duration={10} />}: </strong> {badge.status ||  < Skeleton duration={10} />}
                                       
                                        <br />
                                        {badge.species ||  < Skeleton duration={10} />}
                                        <br /><IoLocationSharp />
                                        {badge.location.name ||  < Skeleton duration={10} />}
                                    </div>
                                </div>
                            </li>
                            
                        );
                    })}
                </ul>

               

               

            </div>
            
        )
    }
}

export default RandMList;