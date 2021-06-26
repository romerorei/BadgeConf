import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg'

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api'

class BadgeNew extends React.Component {
    state = { 
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
    } };

    handleChange = e => {
    
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    }


    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null})
       // 
         
        try {
             await api.badges.create(this.state.form)
             this.setState({ loading: false})
             this.props.history.push('/Badges')
         } catch (error) {
             this.setState({ loading: false, error: error})
         }
    }


    render() {
            if (this.state.loading) {
                return <PageLoading />
               // .then(window.location.href='/Badges')

            } 

        return (
            <React.Fragment>
                
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'First Name' } 
                                lastName={this.state.form.lastName || 'Last Name'}
                                twitter={this.state.form.twitter || 'Twitter'}
                                jobTitle={this.state.form.jobTitle || 'Job title'}
                                email={this.state.form.email || 'Email'}
                                //avatarUrl="https://es.gravatar.com/userimage/207462796/6199427a07edc276a8b1b007060430ea.jpg?size=200"
                            >
                                
                            </Badge>
                        </div>

                        <div className="col-6">
                        <h1>New Attendant</h1>
                            <BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
              
            </React.Fragment>
        );
    }
}



export default BadgeNew;