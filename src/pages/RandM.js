import React from 'react'
import { Link } from 'react-router-dom';

import './styles/RandM.css';
import platziconf_logo from '../images/platziconf-logo.svg'


import RandMList from '../components/RandMList';



class RandM extends React.Component {
    

    constructor(props) {
        super(props)
        console.log('1. contructor()')
        
        this.state = {
            nextPage: 1,
            loading: true,
            error: null,
            data: {
                results: [],
            },
        };
    }

    componentDidMount() {
        this.fetchCharacters()
        console.log('3. componentDidMount()');
 
    }

    fetchCharacters = async () => {
        this.setState({ loading: true, error: null})

        try{
            const response = await fetch(
                `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
                );
            const data = await response.json();
    
            this.setState({
                loading: false,
                data: {
                    info: data.info,
                    results: [].concat(this.state.data.results, data.results),
                },
                nextPage: this.state.nextPage + 1,
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error,
            });
        }

    }; // fetchCharacters

        componentDidUpdate(prevProps, prevState) {
            console.log('5. componentDidUpdate()');
            console.log({
                prevProps: prevProps, prevState: prevState
            });

            console.log({
                props: this.props,
                state: this.state,
            })
        }

        componentWillUnmount() {
            console.log('6 componentWillUnmounts')
            clearTimeout(this.timeoutId)
        }

    render() {
            if (this.state.loading === true) {
                return 'Loading...'
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
                        <Link to="/badges/new" className="btn btn-primary">New badge</Link>
                    </div>
                    <RandMList badges={this.state.data}  />
                    
                    {this.state.loading && (
                        <h1>Cargando...</h1>
                    )} 

                    {!this.state.loading && this.state.data.info.next && (
                        <button className="btn btn-primary Badges__buttons2"  onClick={() => this.fetchCharacters()}>Cargar mas...</button>
                    )}
                </div>

            </React.Fragment>
        )
    }
}

export default RandM;