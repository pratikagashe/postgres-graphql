import React from 'react'
import logo from './logo.svg'
import client from './ApolloClient'
import { ApolloProvider } from '@apollo/react-hooks'
import './App.css'
import Users from './Users'

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Users />
        </header>
      </div>
    </ApolloProvider>
  )
}

export default App
