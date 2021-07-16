import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      prenom: "",
      nom: "",
      sexe: "",
      age: "",
      motif: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { id, prenom, nom, sexe, age, leftMotif: motif } = steps;
    this.setState({ id, prenom, nom, sexe, age, motif });
  }

  render() {
    const { prenom, nom, sexe, age, motif } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Résumé</h3>
        <table>
          <tbody>
            {prenom.value && (
              <tr>
                <td>Prenom </td>
                <td>{prenom.value}</td>
              </tr>
            )}
            {nom.value && (
              <tr>
                <td>nom</td>
                <td>{nom.value}</td>
              </tr>
            )}
            {sexe.value && (
              <tr>
                <td>sexe</td>
                <td>{sexe.value}</td>
              </tr>
            )}
            {age.value && (
              <tr>
                <td>Age</td>
                <td>{age.value}</td>
              </tr>
            )}
            {motif.value && (
              <tr>
                <td>Motif</td>
                <td>
                  <p>{motif.value}</p>
                </td>
              </tr>
            )}
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
