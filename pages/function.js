import { useState, useEffect } from "react";

// state 기능 및 라이프 사이클 기능을 사용할 수 없음(stateless)
// 리엑트 버전 16.8부터 Hook이 등장
// 클래스형 컴포넌트보다 간단
// 클래스형 컴포넌트보다 메모리 자원을 적게 사용

// 비구조화 할당 방식으로 props 사용가능

const FunctionalComponent = () => {
    const [name, setName] = useState('홍길동');
    const [age, setAge] = useState(null);
    const [userInfo, setUserInfo] = useState({
        name: '홍길동',
        age: 20
    })

    useEffect(() => {
        console.log('component did mount');
    }, [])

    useEffect(() => {
        if (name != '홍길동') {
            console.log('component did update');
        }
        setAge(30)
    }, [name, age]);

    return (
        <div>
            <h1>함수형 컴포넌트</h1>
            <p>{name}</p>
            <button onClick={() => setName('김철수')}>변경</button>
        </div>
    )

}

export default FunctionalComponent;