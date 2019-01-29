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
                    // 이벤트 이름은 camelCase로 작성 , 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
                    // DOM 요소에만 이벤트를 설정할 수 있다.
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