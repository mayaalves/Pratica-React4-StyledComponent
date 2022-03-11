import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  list-style: none;
}
body{
  background-color: #FAACA8;
background-image: linear-gradient(117deg, #FAACA8 0%, #DDD6F3 100%);

}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
}
.counter{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 40px;
}

h1{
  font-size: 11vh;
  margin-bottom: 40px;
  color: rgba(0, 0, 0, 0.795);
  text-shadow: 2px 1px grey;
}

button{
  padding: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.507);
}
`;

class App extends Component {
  state = {
    Contador: 0,
    mensagem: ""
  };

  add = () => {
    const { Contador } = this.state;
    if (Contador < 10) {
      this.setState({
        Contador: Contador + 1
      });
    }
  };

  remove = () => {
    const { Contador } = this.state;
    if (Contador > 0) {
      this.setState({
        Contador: Contador - 1
      });
    }
  };

  render() {
    const { Contador } = this.state;
    const { add, remove } = this;
    return (
      <div className="container">
        <div className="box">
          <GlobalStyle />
          <h1>Contador React</h1>
          <div className="counter">
            <button onClick={add}>Adicionar</button>
            <h2>{Contador}</h2>
            <button onClick={remove}>Subtrair</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
