import * as React from 'react'
import emotion from 'react-emotion'
import { IoClose } from 'react-icons/lib/io'
import Div from './Div'

export type ThoughtType = {
  id: string
  date: string
  value: string
}

const Style = emotion('div')`
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #f7f7f7;
  display: flex;
  padding: 10px;
`

interface Props {
  item: ThoughtType
  onRemove(id: string): void
}

const Component: React.StatelessComponent<Props> = ({ item, onRemove }) => (
  <Style>
    <Div>{item.value}</Div>
    <Div color="#aaa" right>
      {new Date(item.date).toLocaleString()}
      <IoClose
        style={{ marginLeft: 5, cursor: 'pointer' }}
        width={16}
        height={16}
        onClick={() => onRemove(item.id)}
      />
    </Div>
  </Style>
)

export default Component
