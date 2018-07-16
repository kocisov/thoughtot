import * as React from 'react'
import Header from './common/Header'
import Thought, { ThoughtType } from './common/Thought'
import Div from './common/Div'
import Add from './Add'

type Props = {}

type State = {
  thoughts: ThoughtType[]
}

export default class App extends React.PureComponent<Props, State> {
  state = {
    thoughts: [],
  }

  componentDidMount() {
    const CURRENT_STATE: string | null = window.localStorage.getItem(
      'thoughtot_state',
    )

    if ((typeof CURRENT_STATE === 'string') === false) {
      window.localStorage.setItem('thoughtot_state', '[]')
    }

    this.loadFromLocalStorage()
  }

  loadFromLocalStorage = () => {
    const CURRENT_STATE: string | null = window.localStorage.getItem(
      'thoughtot_state',
    )

    if (typeof CURRENT_STATE === 'string') {
      const CURRENT_STATE_ARRAY: ThoughtType[] = JSON.parse(CURRENT_STATE)

      this.setState({
        thoughts: CURRENT_STATE_ARRAY,
      })
    }
  }

  removeThought = (id: string) => {
    const CURRENT_STATE: string | null = window.localStorage.getItem(
      'thoughtot_state',
    )

    if (typeof CURRENT_STATE === 'string') {
      const CURRENT_STATE_ARRAY: ThoughtType[] = JSON.parse(CURRENT_STATE)
      const NEW_STATE: ThoughtType[] = CURRENT_STATE_ARRAY.filter(
        (item) => (item.id === id) === false,
      )
      const NEW_STATE_STRING: string = JSON.stringify(NEW_STATE, null, 2)
      window.localStorage.setItem('thoughtot_state', NEW_STATE_STRING)
      this.setState({
        thoughts: NEW_STATE,
      })
    }
  }

  render() {
    return (
      <Div full>
        <Header />
        <Add afterAdd={this.loadFromLocalStorage} />
        {this.state.thoughts && this.state.thoughts.length > 0 ? (
          this.state.thoughts
            .sort(
              (a: ThoughtType, b: ThoughtType) =>
                +new Date(b.date) - +new Date(a.date),
            )
            .map((item: ThoughtType) => (
              <Thought
                key={item.id}
                item={item}
                onRemove={this.removeThought}
              />
            ))
        ) : (
          <Div padding={10}>No thoughts at the moment!</Div>
        )}
      </Div>
    )
  }
}
