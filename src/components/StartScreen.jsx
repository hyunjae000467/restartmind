import React from 'react';

const StartScreen = ({ onStart }) => {
    return (
        <div className="material-card fade-in">
            <h1 className="title">슬럼프 유형 검사</h1>
            <p style={{ marginBottom: '2.5rem', lineHeight: '1.6', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                최근 공부가 손에 잡히지 않나요?<br />
                나의 슬럼프 유형을 분석하고<br />
                극복 방법을 찾아보세요.
            </p>
            <button className="btn" onClick={onStart}>
                검사 시작하기
            </button>
        </div>
    );
};

export default StartScreen;
