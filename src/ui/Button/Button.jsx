import { Component } from 'react';

import './Button.scss';

class Button extends Component {
    state = {
        clicked: false
    }
    
    onToggleColor = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        const {clicked} = this.state
        const clazz = clicked ? {color: 'gold'} : null

        return (
            <button className='btn'
                    style={clazz}
                    onClick={this.onToggleColor}>
                {this.props.value}
            </button>
        )
    }

}

export default Button;