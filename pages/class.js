import React, { Component } from "react";

class ClassComponent extends Component {
    constructor(props) { // 생성자 함수
        super(props);   // constructor 사용시 항상 같이 사용, this 초기화, props를 넣어 줘야 this.props 사용가능
        this.state = {  // initial state 선언
            key: 'value'
        };

        this.handleClick = this.handleClick.bind(this);
        console.log("constructor");
    }

    static defaultProps = {
        key: 'value'
    }

    handleClick() {
        console.log("1==> " + this.state.key);
        this.setState({ key: 'value2' })
    }
    /*
        componentWillMount() {
            console.log("componentWillMount");   // DOM이 생성되지 않은 단계, setState 실행 X
        }
    
        componentDidMount() {
            // 외부 데이터 가져오기 (ajax 등)
            // this.setState({})
            console.log("componentDidMount");   // DOM이 생성된 단계, setState를 통해 DOM의 제어가 가능
        }
    
        componentWillReceiveProps(nextProps) {
            console.log("componentWillReceiveProps")
        }
    
        shouldComponentUpdate(nextProps, nextState) {
            console.log("shouldComponentUpdate");
    
            // 최적화
            return true;
        }
    
        componentWillUpdate(nextProps, nextState) {
            console.log("componentWillUpdate");
        }
    
        componentDidUpdate(prevProps, prevState) {
            console.log("componentDidUpdate");
        }
    
        componentWillUnmount() {
            console.log("componentWillUnmount");
        }
    */

    render() {
        // render 함수를 통해 props를 조회
        // 비구조화 할당 방식으로 state완 props 사용가능
        const { key } = this.state;
        const { name, age, gender } = this.props;
        console.log("render");

        return (
            <div>
                <h1>클래스형 컴포넌트</h1>
                <p>{key}</p>
                <button onClick={this.handleClick}>클릭</button>
            </div>
        );
    }
}

export default ClassComponent;