import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Review from "./Rewiew";

class ChatForm extends Component {
    componentDidMount() {
      this.handleEnd = this.handleEnd.bind(this);
    }

    handleEnd({ values }) {
      var dataConsultation = JSON.stringify({
        "prenom": values[0],
        "nom": values[1],
        "sexe": values[2],
        "age": values[3]
      });
      fetch('http://localhost:3001/consultations', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: dataConsultation
      })
      .then((response ) => {
         console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    }

    render() {
      return (
        <ChatBot
          handleEnd={this.handleEnd}
          steps={[
            {
              id: '1',
              message: 'Quel est votre prenom ?',
              trigger: 'prenom',
            },
            {
              id: 'prenom',
              user: true,
              trigger: '2',
            },
            {
              id: '2',
              message: 'Quel est votre nom ?',
              trigger: 'nom',
            },
            {
              id: 'nom',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Sexe de  {previousValue} ?',
              trigger: 'sexe',
            },
            {
              id: 'sexe',
              options: [
                { value: 'M', label: 'M', trigger: '5' },
                { value: 'F', label: 'F', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'Quel âge as-tu?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '6',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'la valeur doit être un nombre';
                } else if (value < 0) {
                  return 'la valeur doit être positive';
                } else if (value > 120) {
                  return `${value} n'est pas un 'âge normal`;
                }
  
                return true;
              },
            },
            {
              id: '6',
              message: 'Génial! Consultez votre résumé',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Souhaitez-vous mettre à jour un champ ?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'oui', label: 'Oui', trigger: 'update-yes' },
                { value: 'non', label: 'Non', trigger: 'end-message' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'prenom', label: 'Prenom', trigger: 'update-prenom' },
                { value: 'nom', label: 'Nom', trigger: 'update-nom' },
                { value: 'sexe', label: 'Sexe', trigger: 'update-sexe' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-prenom',
              update: 'prenom',
              trigger: '6',
            },
            {
              id: 'update-nom',
              update: 'nom',
              trigger: '6',
            },
            {
              id: 'update-sexe',
              update: 'sexe',
              trigger: '6',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '6',
            },
            {
              id: 'end-message',
              message: 'Merci! la consultation est envoyé avec succès pour analyse!',
              end: true,
            },
          ]}
          floatingStyle={{
            left: 'calc(50% - 28px)',
            right: 'initial',
            transformOrigin: 'bottom center',
            borderRadius: 0,
          }}
          style={{
            left: 'calc(50% - 175px)',
          }}
        />
      );
    }
  }
  
  export default ChatForm;