import '../styles/common.less';

import React, {PropTypes} from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>{this.props.children}</div>);
  }
}
