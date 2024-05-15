import React, { Component } from 'react';

// first we will make a new context
const NoteContext = React.createContext();

// Then create a provider Component
class NoteProvider extends Component {
  state = {
    age: 100,
  };
  render() {
    return (
      <NoteContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1,
            }),
        }}
      >
        {this.props.children}
      </NoteContext.Provider>
    );
  }
}

// then make a consumer which will surface it
const NoteConsumer = NoteContext.Consumer;

export default NoteProvider;
export { NoteConsumer };