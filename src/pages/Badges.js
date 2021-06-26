import React from 'react'
import { Link } from 'react-router-dom';
import './styles/Badges.css';
import platziconf_logo from '../images/platziconf-logo.svg'
import '../components/styles/BadgesList.css'
import PageError from '../components/PageError';
import SkeletonBadge from "../components/SkeletonBadge";
import BadgesList from '../components/BadgesList';
import api from '../api';


class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
      };
    
      componentDidMount() {
        console.log('3. componentDidMount()');
        this.fetchData();

       /*  this.intervalId = setInterval(this.fetchData, 5000) */
      }
    

      componentWillUnmount() {
         /*  clearInterval(this.intervalId); */
      }

    fetchData = async () => {
        this.setState({ loading: true, error: null});
         
        try {
            
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });

        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {

           /*   if (this.state.loading === true && !this.state.data) {
                 return <SkeletonBadge/> ;
             } */


           

            if (this.state.error) {
                return <PageError error={this.state.error} />
              }

        console.log('2/4. render()')
        return (
            <React.Fragment>
               
                <div className="Bages">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={platziconf_logo} alt="Conf logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary ">New badge</Link>
                    </div>

                    {this.state.loading && <SkeletonBadge/> }
                   
                    {!this.state.loading && <BadgesList badges={this.state.data}  />}

                    {!this.state.data && <SkeletonBadge/> }
                    
                </div>

            </React.Fragment>
        )
    }
}

export default Badges;