import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { nodes: [], time: 0 }
    this.total = 0
    this.n = 1000
    this.t1 = 0
    this.t2 = 0
  }
  componentWillUpdate() {
    this.t1 = performance.now()
  }
  componentDidUpdate() {
    this.t2 = performance.now()
    document.querySelector('#output').textContent = (this.t2 - this.t1) + 'ms'
  }
  run = () => {
    const newNodes = []
    for (let i = 0; i < this.n; i++) {
      newNodes.push(this.total + i)
    }
    this.total += this.n
    this.setState({
      nodes: [...this.state.nodes, ...newNodes]
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.run}>运行</button>
        <div id="output"></div>
        <div>{this.state.nodes.map(n => <div key={n}>{n}</div>)}</div>
      </div>
    );
  }
}


export default App;
