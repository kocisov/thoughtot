import * as React from 'react'
import emotion from 'react-emotion'

const Style = emotion('div')`
  background: #fff;
  padding: 10px;
  text-align: center;
`

const Component: React.StatelessComponent = () => (
  <Style>
    <h2>Welcome to the Thoughtot!</h2>
    <p>Whenever something comes to your mind, write it here 🤔</p>
  </Style>
)

export default Component
