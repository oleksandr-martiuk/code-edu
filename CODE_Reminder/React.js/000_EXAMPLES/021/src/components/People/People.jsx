import React from 'react';
import './people.scss';
import { get } from '../../services/api-requests';

export default class People extends React.Component {
   constructor(props) {
      super(props);
      this.state = { people: props.people };
      this.removePerson = this.removePerson.bind(this);
   }

   componentDidMount() {
      // here is possible to get requests to the remote resources
      console.log('PeopleLC ---> componentDidMount()');

      get('people')
         .then(result => {
            this.setState({ people: [...result, ...this.state.people] });
         })
         .catch(err => console.log(err));
   }

   removePerson(id){
      console.log(this);
      const people = this.state.people.filter(item => item.id !== id);
      this.setState({ people }, () => console.log('done'));
   }

   renderEmployees() {
      return (
         <ol>
            {this.state.people.map(person =>
               <Person
                  key={person.id}
                  pii={person}
                  removePerson={this.removePerson}
               />
            )}
         </ol>
      );
   }

   renderNotFound(){
      return (<>
         <h1 style={{ color: 'red' }}>People NOT Found!</h1>
      </>);
   }

   render() {
      return (<>
         <h2>Employees:</h2>
         <>{this.state.people.length ? this.renderEmployees() : this.renderNotFound()}</>
      </>);
   }
}

class Person extends React.Component {
   constructor(props) {
      super(props);
   }

   componentWillUnmount() {
      // called once before removing the component
      console.log('Person ---> componentWillUnmount()');
   }

   render() {
      const { id, fName, sName, age, occupation } = this.props.pii;
      return (<li type="numbers" style={{ margin: '5px 0' }}>
         <strong><span style={{color: '#00b062'}}>{fName} {sName}</span>({age})</strong> -
         {occupation} [#{id}]
         <DeleteBtn
            id={id}
            name={'X'}
            removePerson={this.props.removePerson}
            // removePerson={() => this.props.removePerson(id)}
         />
      </li>);
   }
}

class DeleteBtn extends React.Component {
   constructor(props) {
      super(props);
      this.state = { id: props.id };
      this.removeElement = this.removeElement.bind(this)
   }

   removeElement(){
      this.props.removePerson(this.props.id)
   }

   render() {
      return (<>
         <button
            className={'remove-btn'}
            onClick={this.removeElement}
         >{this.props.name}</button>
      </>)
   }
}
