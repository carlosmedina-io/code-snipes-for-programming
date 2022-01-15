import styled from 'styled-components'

const Section = styled.div`
  padding: 10px;
`

const AppTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`

export default function Header() {
  return (
    <Section>
      <AppTitle>What's up, Carlos!</AppTitle>
    </Section>
  )
}