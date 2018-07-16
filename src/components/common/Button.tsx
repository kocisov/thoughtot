import emotion from 'react-emotion'

type Props = {
  width?: number
}

export default emotion('button')`
  ${(props: Props) => props.width && `width: ${props.width}px`};
  background: #e7e7e7;
  border-radius: 3px;
  border: 0;
  cursor: pointer;
  font-weight: bold;
  margin-left: 5px;
  outline: 0;
  padding: 6px 15px;
`
