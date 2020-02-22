import React, { Component } from 'react';
import styled from 'styled-components/native';

class Button extends Component {
  static defaultProps = {
    bg: '#ff00ff',
    underlayColor: '#fff',
  }

  render() {
    const { children, onPress, theme, bg, underlayColor } = this.props;

    return (
      <ButtonView underlayColor={underlayColor} onPress={onPress} bg={bg}>
        <Text>{children}</Text>
      </ButtonView>
    );
  }
}

const ButtonView = styled.TouchableHighlight`
  alignItems: center;
  background-color: ${props => props.bg};
  height: 50;
  justifyContent: center;
  padding: 0 20px;
  width: 50%;
`;

const Text = styled.Text`
  color: #fff;
  fontSize: 20;
  textShadow: 0 0 3px rgba(0,0,0,0.6);
`;

export default Button;
