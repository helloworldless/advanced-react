import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    init: 0
  };
  asyncFunc = () => {
    return Promise.resolve(123);
  };
  async componentDidMount() {
    // this.asyncFunc().then((val) => this.setState({init: val}));
    this.setState({init: await this.asyncFunc()});
  }
  render() {
    return (
      <h1>Initial value is {this.state.init}</h1>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
