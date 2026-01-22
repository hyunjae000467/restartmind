import React from 'react';
import bgImage from '../assets/home_bg_geometric.png';

const HomeScreen = ({ onStartTest, onViewColumns }) => {
    return (
        <div className="fade-in" style={{
            textAlign: 'left',
            padding: '20px 0',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
        }}>
            {/* Background Image Layer */}
            <div style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: -1,
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right bottom',
                backgroundSize: 'contain', // Or 'cover' depending on preference, 'contain' fits the corner better usually
                opacity: 0.8
            }} />

            <h1 className="title" style={{ fontSize: '3rem', marginBottom: '10px' }}>RE:START</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '60px' }}>
                슬럼프를 극복하고 다시 시작하는 힘
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
                <button
                    className="btn"
                    onClick={onStartTest}
                    style={{
                        padding: '24px',
                        fontSize: '1.2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <span>슬럼프 유형 검사하기</span>
                    <span>→</span>
                </button>

                <button
                    className="btn btn-secondary"
                    onClick={onViewColumns}
                    style={{
                        padding: '24px',
                        fontSize: '1.2rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <span>칼럼 보러가기</span>
                    <span>→</span>
                </button>
            </div>
        </div>
    );
};

export default HomeScreen;
