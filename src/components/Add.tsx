import * as React from 'react'
import { v4 } from 'uuid'
import Div from './common/Div'
import Input from './common/Input'
import { ThoughtType } from './common/Thought'

type Props = {
  afterAdd(): void
}

type State = {
  value: string
}

export default class Add extends React.PureComponent<Props, State> {
  state = {
    value: '',
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.currentTarget.value,
    })
  }

  onSubmit = () => {
    if (this.state.value.length > 0 === false) {
      return console.log('No empty thoughts! 👀')
    }

    const CURRENT_STATE: string | null = window.localStorage.getItem(
      'thoughtot_state',
    )

    if (typeof CURRENT_STATE === 'string') {
      const CURRENT_STATE_ARRAY: ThoughtType[] = JSON.parse(CURRENT_STATE)
      const NEW_STATE: ThoughtType[] = [
        ...CURRENT_STATE_ARRAY,
        {
          id: v4(),
          date: new Date().toString(),
          value: this.state.value,
        },
      ]
      const NEW_STATE_STRING: string = JSON.stringify(NEW_STATE, null, 2)

      window.localStorage.setItem('thoughtot_state', NEW_STATE_STRING)
      this.props.afterAdd()

      this.setState({
        value: '',
      })
    }
  }

  onKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.onSubmit()
    }
  }

  render() {
    return (
      <Div padding={10}>
        <Input
          name="thought"
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          placeholder="Your thought..."
          type="text"
          value={this.state.value}
          width="100%"
        />
      </Div>
    )
  }
}
