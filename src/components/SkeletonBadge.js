import React from "react";
import Skeleton from "react-loading-skeleton";
import '../components/styles/BadgesList.css'

    const SkeletonBadge = () => {
        return (
            <div className="Badges__container">
                <section className="BadgesList" >
                    <ul className="list-unstyled">
                    {Array(9)
                        .fill()
                        .map(() => (
                                <li>
                                    <div className="BadgesListItem">
                                        <div className="BadgesListItem__avatar">
                                            <Skeleton circle={true} height={80} width={80} />
                                        </div>
                                        <div>
                                            <strong> <Skeleton duration={2} count={3} width={200} /> </strong> 
                                            
                                            {/* <br />
                                            <Skeleton  width={250} />
                                            <br />
                                            <Skeleton  width={250} /> */}
                                        </div>
                                    </div>
                                </li>
                        ))}
                    </ul>
                </section>
            </div>
        );
    };

export default SkeletonBadge;