import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Review extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          prenom: '',
          nom: '',
          sexe: '',
          age: '',
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { prenom, nom, sexe, age } = steps;
    
        this.setState({ prenom, nom, sexe, age });
    }

    render() {
        const { prenom, nom, sexe, age } = this.state;
        return (
          <div style={{ width: '100%' }}>
            <h3>Résumé</h3>
            <table>
              <tbody>
              <tr>
                  <td>Prenom </td>
                  <td>{prenom.value}</td>
                </tr>
                <tr>
                  <td>nom</td>
                  <td>{nom.value}</td>
                </tr>
                <tr>
                  <td>sexe</td>
                  <td>{sexe.value}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{age.value}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      }
}

Review.propTypes = {
    steps: PropTypes.object,
};
  
Review.defaultProps = {
    steps: undefined,
};
