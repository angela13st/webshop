import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: pink;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        Besplatna dostava za narudžbe preko 50€
    </Container>
  )
}

export default Announcement