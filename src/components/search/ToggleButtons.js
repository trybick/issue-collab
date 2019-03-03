import React from 'react';
import '../../style.scss';
import Button from '../core/Button.js';

class ToggleButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
  }

  onToggle = event => {
    const availableLabels = ['javascript', 'bug'];
    const toggledName = event.target.name;

    if (availableLabels.includes(toggledName)) {
      this.setState(
        {
          enabledLabels: [...this.state.enabledLabels, toggledName]
        },
        () => console.log('results', this.state)
      );
    }
  };

  render() {
    return (
      <div className='toggle-buttons'>
        <Button name='javascript' onClick={this.onToggle} text='JavaScript' />
        <Button name='bug' onClick={this.onToggle} toggled={false} text='Bug' />
      </div>
    );
  }
}

export default ToggleButtons;
