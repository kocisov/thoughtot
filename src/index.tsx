import * as React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './static/normalize.css'
import './static/main.css'

const node: HTMLElement = document.getElementById('root')!
render(<App />, node)
