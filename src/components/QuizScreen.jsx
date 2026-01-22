import React from 'react';
import { questions } from '../data/questions';

const QuizScreen = ({ currentQuestionIndex, onAnswer, onBack }) => {
    const containerRef = React.useRef(null);
    const question = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    // Effect to trigger animation on question change
    React.useEffect(() => {
        if (containerRef.current) {
            containerRef.current.classList.remove('fade-in');
            void containerRef.current.offsetWidth; // trigger reflow
            containerRef.current.classList.add('fade-in');
        }
    }, [currentQuestionIndex]);

    return (
        <div className="material-card fade-in" ref={containerRef} style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ position: 'relative', marginBottom: '30px' }}>
                {currentQuestionIndex > 0 && (
                    <button
                        onClick={onBack}
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color: 'var(--text-secondary)',
                            fontSize: '1.5rem',
                            padding: '5px'
                        }}
                    >
                        ←
                    </button>
                )}
                <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
                    {currentQuestionIndex + 1} / {questions.length}
                </span>
            </div>

            <div style={{ width: '100%', background: '#e0e0e0', height: '6px', borderRadius: '3px', marginBottom: '30px' }}>
                <div style={{ width: `${progress}%`, background: 'var(--primary-color)', height: '100%', borderRadius: '3px', transition: 'width 0.3s ease' }}></div>
            </div>

            <h2 style={{ fontSize: '1.4rem', marginBottom: '2.5rem', minHeight: '4.2rem', color: 'var(--text-main)', fontWeight: '600', lineHeight: '1.4' }}>
                {question.text}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {question.type === 'boolean' ? (
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                        <button className="btn" onClick={() => onAnswer(true)} style={{ flex: 1 }}>그렇다</button>
                        <button className="btn btn-secondary" onClick={() => onAnswer(false)} style={{ flex: 1 }}>아니다</button>
                    </div>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <button
                                key={value}
                                onClick={() => onAnswer(value)}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    border: '1px solid #ddd',
                                    background: 'white',
                                    color: 'var(--text-main)',
                                    fontWeight: 'bold',
                                    fontSize: '1.2rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--primary-color)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'scale(1)'; }}
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                )}
                {question.type === 'scale' && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '10px' }}>
                        <span>매우 아니다</span>
                        <span>매우 그렇다</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizScreen;
