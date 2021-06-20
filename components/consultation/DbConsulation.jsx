import React, { Component } from "react";
import PropTypes from "prop-types";
import { Loading } from "react-simple-chatbot";

export default class DbConsulation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: {
        prenom: "",
        nom: "",
        sexe: "",
        age: "",
      },
      trigger: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  componentWillMount() {
    const { steps } = this.props;
    const id = steps.id.value;
    fetch(`http://localhost:3001/consultations/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ loading: false, result: data });
      })
      .catch((error) => {
        this.setState({ loading: false, result: { prenom: "Not found." } });
        console.error(error);
      });
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }

  render() {
    const {
      trigger,
      loading,
      result: { prenom, nom, sexe, age, motif },
    } = this.state;

    return (
      <div style={{ width: "100%" }}>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <h3>Consulation</h3>
            <table>
              <tbody>
                {prenom && 
                  <tr>
                    <td>Prenom </td>
                    <td>{prenom}</td>
                  </tr>
                }
                {
                  nom &&
                  <tr>
                    <td>nom</td>
                    <td>{nom}</td>
                  </tr>
                }
                {
                  sexe && 
                  <tr>
                    <td>sexe</td>
                    <td>{sexe}</td>
                  </tr>
                }
                {
                  age &&
                  <tr>
                    <td>Age</td>
                    <td>{age}</td>
                  </tr>
                }
                {
                  motif &&
                  <tr>
                    <td>Motif: </td>
                    <td><p>{motif}</p></td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        )}
        {!loading && (
          <div
            style={{
              textAlign: "center",
              marginTop: 20,
            }}
          >
            {!trigger && (
              <button onClick={() => this.triggetNext()}>
                Continuer la consultation
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
}

DbConsulation.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

DbConsulation.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};
