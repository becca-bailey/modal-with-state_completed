import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Modal from "../components/Modal";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`;

const Image = styled.img`
  display: block;
  margin: auto;
  padding-bottom: 1rem;
  width: 20rem;
`;

interface HomeProps {}

interface HomeState {
  modalIsVisible: boolean;
}

class Home extends React.Component<HomeProps, HomeState> {
  public state = {
    modalIsVisible: false
  };

  public render() {
    return (
      <Container>
        <Button onClick={() => this.showModal()}>Click me!</Button>
        <Modal visible={this.state.modalIsVisible} onClose={this.hideModal}>
          <h1>Surprise!</h1>
          <Image src="/assets/surprise.gif" />
          <Button onClick={() => this.hideModal()}>Close</Button>
        </Modal>
      </Container>
    );
  }

  private showModal() {
    this.setState({
      modalIsVisible: true
    });
  }

  private hideModal() {
    this.setState({
      modalIsVisible: false
    });
  }
}

export default Home;
