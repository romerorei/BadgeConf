import React from 'react'
import { Link } from 'react-router-dom';

import '../components/styles/BadgesList.css'
import Gravatar from './Gravatar';

import { IoLocationSharp } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri';


class BadgesListItem extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">
          <Gravatar
            className="BadgesListItem__avatar"
            email={this.props.badge.email}
          />
  
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />{this.props.badge.jobTitle}
            <br />
            <IoLocationSharp />@{this.props.badge.twitter}
          </div>
                   <Link className="text-decoration-none BottonDelete"  to={`/badges/${this.props.badge.id}/edit`}>  <RiDeleteBinLine />   </Link>
        </div>
      );
    }
  }

  function useSearchBadges(badges) {
    const [ query, setQuery ] = React.useState('');
    const [ filteredBadges, setFilteredBadges] = React.useState(badges) 

      React.useMemo(() => {
        const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
      });
      setFilteredBadges(result)
    }, [ badges, query ]);

    return { query, setQuery, filteredBadges}

  }
  
  function BadgesList (props) {
    const badges = props.badges;

      const { query, setQuery, filteredBadges } = useSearchBadges(badges);

      if (filteredBadges.length === 0) {
        return (
          <div>
              <div className="form-group mb-2">
                <label>Filtrar Badges</label>
                <input placeholder="Filtrar Badges" type="text" className="form-control"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                  }}
                />
            </div>
            <h3>No badges were found</h3>
            <Link className="btn btn-primary" to="/badges/new">
              Create new badge
            </Link>
          </div>
        );
      }
  
      return (
        <div className="BadgesList">
          <div className="form-group mb-2">
              <label>Filtrar Badges</label>
              <input placeholder="Filtrar Badges" type="text" className="form-control"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  
                }}
              
              />
            
          </div>


          <ul className="list-unstyled">
            {filteredBadges.map(badge => {
              return (
                <li key={badge.id}>
                  <Link
                    className="text-reset text-decoration-none"
                    to={`/badges/${badge.id}`}
                  >
                    <BadgesListItem badge={badge} />

                  </Link>

                </li>
              );
            })}
          </ul>
        </div>
      );
  
  }
  
  export default BadgesList;