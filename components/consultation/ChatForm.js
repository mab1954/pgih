import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import Review from "./Rewiew";
import DbConsulation from "./DbConsulation";

class ChatForm extends Component {
  constructor(props) {
    super(props);

    this.handleEnd = this.handleEnd.bind(this);
  }

  handleEnd({ steps }) {
    let url = "http://localhost:3001/consultations";
    let configData = {};
    const { id } = steps;
    if (id == undefined) {
      const {
        prenom: { value: valuePrenom },
        nom: { value: valueNom },
        sexe: { value: valueSexe },
        age: { value: valueAge },
        leftMotif: { value: motifValue },
      } = steps;
      configData = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          "prenom": valuePrenom,
          "nom": valueNom,
          "sexe": valueSexe,
          "age": valueAge,
          "motif": motifValue,
        },
      };
    } else {
      const {
        id: { value: valueId },
        rigthMotif: { value: motifValue },
      } = steps;
      url = `http://localhost:3001/consultations/${valueId}`;
      configData = {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: {
          "motif": motifValue,
        },
      };
    }

    fetch(url, configData)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <ChatBot
        headerTitle="Consulation du patient"
        handleEnd={this.handleEnd}
        steps={[
          {
            id: "1",
            message: "Avez vous un numéro ipp ?",
            trigger: "2",
          },
          {
            id: "2",
            options: [
              { value: 1, label: "Oui", trigger: "ask-id" },
              { value: 2, label: "Non", trigger: "ask-prenom" },
            ],
          },
          {
            id: "ask-id",
            message: "Saissir l'ipp",
            trigger: "id",
          },
          {
            id: "id",
            user: true,
            trigger: "historic",
          },
          {
            id: "historic",
            component: <DbConsulation />,
            waitAction: true,
            trigger: "ask-rigth-motif",
          },
          {
            id: "ask-prenom",
            message: "Quel est votre prenom ?",
            trigger: "prenom",
          },
          {
            id: "prenom",
            user: true,
            trigger: "ask-nom",
          },
          {
            id: "ask-nom",
            message: "Quel est votre nom ?",
            trigger: "nom",
          },
          {
            id: "nom",
            user: true,
            trigger: "ask-sexe",
          },
          {
            id: "ask-sexe",
            message: "Sexe de  {previousValue} ?",
            trigger: "sexe",
          },
          {
            id: "sexe",
            options: [
              { value: "M", label: "M", trigger: "ask-age" },
              { value: "F", label: "F", trigger: "ask-age" },
            ],
          },
          {
            id: "ask-age",
            message: "Quel âge as-tu?",
            trigger: "age",
          },
          {
            id: "age",
            user: true,
            trigger: "ask-motif",
            validator: (value) => {
              if (isNaN(value)) {
                return "la valeur doit être un nombre";
              } else if (value < 0) {
                return "la valeur doit être positive";
              } else if (value > 120) {
                return `${value} n'est pas un 'âge normal`;
              }
              return true;
            },
          },
          {
            id: "ask-motif",
            message: "Quel est le motif ?",
            trigger: "leftMotif",
          },
          {
            id: "leftMotif",
            user: true,
            trigger: "ask-review",
          },
          {
            id: "ask-review",
            message: "Génial! Consultez votre résumé",
            trigger: "review",
          },
          {
            id: "review",
            component: <Review />,
            asMessage: true,
            trigger: "update",
          },
          {
            id: "update",
            message: "Souhaitez-vous mettre à jour un champ ?",
            trigger: "update-question",
          },
          {
            id: "update-question",
            options: [
              { value: "oui", label: "Oui", trigger: "update-yes" },
              { value: "non", label: "Non", trigger: "end-message" },
            ],
          },
          {
            id: "update-yes",
            message: "Quel champ souhaitez-vous mettre à jour ?",
            trigger: "update-fields",
          },
          {
            id: "update-fields",
            options: [
              { value: "prenom", label: "Prenom", trigger: "update-prenom" },
              { value: "nom", label: "Nom", trigger: "update-nom" },
              { value: "sexe", label: "Sexe", trigger: "update-sexe" },
              { value: "age", label: "Age", trigger: "update-age" },
              { value: "motif", label: "Motif", trigger: "update-motif" },
            ],
          },
          {
            id: "update-prenom",
            update: "prenom",
            trigger: "ask-review",
          },
          {
            id: "update-nom",
            update: "nom",
            trigger: "ask-review",
          },
          {
            id: "update-sexe",
            update: "sexe",
            trigger: "ask-review",
          },
          {
            id: "update-age",
            update: "age",
            trigger: "ask-review",
          },
          {
            id: "update-motif",
            update: "leftMotif",
            trigger: "ask-review",
          },
          {
            id: "ask-rigth-motif",
            message: "Quel est le motif ?",
            trigger: "rigthMotif",
          },
          {
            id: "rigthMotif",
            user: true,
            trigger: "end-message",
          },
          {
            id: "end-message",
            message:
              "Merci! la consultation est envoyé avec succès pour analyse!",
            end: true,
          },
        ]}
        floatingStyle={{
          left: "calc(50% - 28px)",
          right: "initial",
          transformOrigin: "bottom center",
          borderRadius: 0,
        }}
        style={{
          left: "calc(50% - 175px)",
        }}
      />
    );
  }
}

export default ChatForm;
