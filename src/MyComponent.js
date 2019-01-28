import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '홍길동'
    }

    static PropsTypes = {
        name: PropsTypes.string,
        age: PropsTypes.number.isRequired   //필수로 존재 해야 할 경우 
    }

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    render() {
        return (
            <div>
                <p>안녕하세요 , 제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age}살 입니다.</p>
                <p>숫자: {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }
                }>더하기</button>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number - 1
                    })
                }
                }>빼기</button>
            </div>
        );
    }
}



export default MyComponent;