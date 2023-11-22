import React from 'react';

interface HeaderProps {
  siteName: string;
}

interface HeaderState {
  isHeartVisible: boolean;
}

export default function Header(props: HeaderProps) {
  return null;
}

export class HeaderClient extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isHeartVisible: false,
    };
  }

  handleSiteNameClick = () => {
    this.setState({
      isHeartVisible: !this.state.isHeartVisible,
    });
  };

  render() {
    const { siteName } = this.props;
    const { isHeartVisible } = this.state;

    return (
      <div>
        <div>
          <span>{siteName}</span>
          <span onClick={this.handleSiteNameClick}>
            {isHeartVisible ? '❤️' : ''}
          </span>
        </div>
        <div>
          <a href="#">Home</a>
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
          <a href="#">Login</a>
        </div>
      </div>
    );
  }
}
