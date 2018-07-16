import emotion from 'react-emotion'

type Props = {
  padding?: number
  margin?: number
  right?: boolean
  color?: string
  full?: boolean
}

export default emotion('div')`
  ${(props: Props) => props.color && `color: ${props.color}`};
  ${(props: Props) => props.margin && `margin: ${props.margin}px`};
  ${(props: Props) => props.padding && `padding: ${props.padding}px`};
  ${(props: Props) => props.right && `margin-left: auto`};

  ${(props: Props) => `
    ${props.full &&
      `
      width: 100%;
      height: 100vh;
    `}
  `}
`
