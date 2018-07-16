import emotion from 'react-emotion'

type Props = {
  width?: number | string
}

export default emotion('input')`
${(props: Props) =>
  props.width &&
  `width: ${
    typeof props.width === 'string' ? props.width : `${props.width}px`
  }`};
  background: #fff;
  border-radius: 3px;
  padding: 15px;
  border: 1px solid #fff;
  outline: 0;
  font-size: 16px;

  &:focus {
    border: 1px solid #e7e7e7;
  }
`
