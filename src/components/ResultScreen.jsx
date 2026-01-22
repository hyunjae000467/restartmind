import React, { useMemo, useState } from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { types, questions } from '../data/questions';
import { columns } from '../data/columns';
import ServiceModal from './ServiceModal';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const ResultScreen = ({ answers, onRestart, onViewAll }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const resultData = useMemo(() => {
        const scores = {};
        const booleanFlags = {
            "Mock Exam": false,
            "Optional Subject": false
        };

        // Initialize scores
        Object.keys(types).forEach(key => {
            if (key !== "Mock Exam" && key !== "Optional Subject") {
                scores[key] = 0;
            }
        });

        answers.forEach((ans) => {
            const question = questions.find(q => q.id === ans.questionId);
            if (!question) return;

            if (question.type === 'boolean') {
                if (ans.value === true) {
                    booleanFlags[question.targetType] = true;
                }
            } else if (question.type === 'scale') {
                question.targetType.forEach(tType => {
                    if (scores[tType] !== undefined) {
                        scores[tType] += ans.value;
                    }
                });
            }
        });

        // Sort for Top 3
        const sortedTypes = Object.entries(scores)
            .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
            .slice(0, 3)
            .map(([key]) => key);

        // Add Boolean Flags if true
        const finalTypes = [...sortedTypes];
        if (booleanFlags["Mock Exam"]) finalTypes.push("Mock Exam");
        if (booleanFlags["Optional Subject"]) finalTypes.push("Optional Subject");

        return { scores, finalTypes };
    }, [answers]);

    const [displayCount, setDisplayCount] = useState(3);

    const recommendedColumns = useMemo(() => {
        return columns.filter(col =>
            col.relatedTypes.some(type => resultData.finalTypes.includes(type))
        );
    }, [resultData.finalTypes]);

    const visibleColumns = useMemo(() => {
        return recommendedColumns.slice(0, displayCount);
    }, [recommendedColumns, displayCount]);

    const handleLoadMore = () => {
        setDisplayCount(prev => prev + 3);
    };

    // Update chart colors to Monochrome/Black
    const chartData = {
        labels: Object.keys(resultData.scores).map(key => types[key].label),
        datasets: [
            {
                label: '나의 슬럼프 유형 점수',
                data: Object.values(resultData.scores),
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Black transparent
                borderColor: '#000000', // Black
                borderWidth: 2,
                pointBackgroundColor: '#FFFFFF',
                pointBorderColor: '#000000',
                pointHoverBackgroundColor: '#000000',
                pointHoverBorderColor: '#FFFFFF',
            },
        ],
    };

    const chartOptions = {
        scales: {
            r: {
                angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
                grid: { color: 'rgba(0, 0, 0, 0.1)' },
                pointLabels: {
                    color: '#1b1b1f',
                    font: { size: 12, family: 'Inter', weight: '500' }
                },
                ticks: { display: false, backdropColor: 'transparent' },
                suggestedMin: 0,
                suggestedMax: 10
            }
        },
        plugins: {
            legend: { display: false }
        }
    };

    const handleColumnClick = () => {
        setIsModalOpen(true);
    };

    const getStyleLabel = (style) => {
        if (style === 'empathy') return '공감형';
        if (style === 'advice') return '조언형';
        return style;
    };

    return (
        <div className="material-card fade-in" style={{ textAlign: 'left', padding: '1.5rem 1rem' }}>
            <h2 className="title" style={{ textAlign: 'center' }}>결과 분석</h2>

            <div style={{ marginBottom: '30px', maxHeight: '300px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <Radar data={chartData} options={chartOptions} />
                </div>
            </div>

            <div style={{ marginBottom: '40px' }}>
                <h3 style={{ marginBottom: '15px', paddingBottom: '10px', fontSize: '1.3rem', color: 'var(--text-main)', borderBottom: '1px solid #e0e0e0' }}>
                    당신의 주요 슬럼프 유형
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {resultData.finalTypes.map(key => (
                        <div key={key} style={{
                            background: 'var(--surface)',
                            padding: '20px',
                            borderRadius: '12px',
                            borderLeft: '4px solid var(--primary-color)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: '600' }}>{types[key].label}</h4>
                            </div>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{types[key].description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommended Columns Section */}
            <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '30px' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--text-main)' }}>
                    이런 칼럼을 추천해요!
                </h3>

                {recommendedColumns.length === 0 ? (
                    <p style={{ color: 'var(--text-secondary)', textAlign: 'center', margin: '20px 0' }}>추천 칼럼이 없습니다.</p>
                ) : (
                    <>
                        <div className="column-grid">
                            {visibleColumns.map(col => (
                                <div key={col.id} onClick={handleColumnClick} style={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    background: 'var(--bg-color)',
                                    boxShadow: 'var(--shadow-1)',
                                    transition: 'box-shadow 0.2s, transform 0.2s',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.boxShadow = 'var(--shadow-2)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.boxShadow = 'var(--shadow-1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: '600', background: 'var(--primary-container)', padding: '4px 8px', borderRadius: '4px' }}>
                                            {col.authorCategory}
                                        </span>
                                        {col.columnStyle && (
                                            <span style={{ fontSize: '0.8rem', color: '#FFFFFF', fontWeight: '600', background: '#000000', padding: '4px 8px', borderRadius: '4px' }}>
                                                #{getStyleLabel(col.columnStyle)}
                                            </span>
                                        )}
                                        {col.relatedTypes.filter(t => resultData.finalTypes.includes(t)).map(type => (
                                            <span key={type} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', background: 'var(--surface-variant)', padding: '4px 8px', borderRadius: '4px' }}>
                                                #{types[type].label}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--text-main)', lineHeight: '1.3', fontWeight: '700' }}>
                                        {col.title}
                                    </h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6', background: 'var(--surface)', padding: '12px', borderRadius: '8px', flexGrow: 1 }}>
                                        {col.summary}
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                        <span>{col.author} | {col.university} {col.major}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {visibleColumns.length < recommendedColumns.length && (
                            <button
                                onClick={handleLoadMore}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    marginTop: '20px',
                                    background: 'var(--surface)',
                                    border: '1px solid var(--outline)',
                                    borderRadius: '100px',
                                    color: 'var(--text-main)',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s'
                                }}
                                onMouseOver={(e) => e.target.style.background = 'var(--surface-variant)'}
                                onMouseOut={(e) => e.target.style.background = 'var(--surface)'}
                            >
                                칼럼 더 보기 (+3)
                            </button>
                        )}
                    </>
                )}

                <button
                    onClick={onViewAll}
                    style={{
                        width: '100%',
                        padding: '16px',
                        marginTop: '20px',
                        background: 'var(--surface-variant)',
                        border: 'none',
                        borderRadius: '100px',
                        color: 'var(--text-main)',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#e0e0e0'}
                    onMouseOut={(e) => e.target.style.background = 'var(--surface-variant)'}
                >
                    전체 칼럼 보기
                </button>
            </div>

            <div style={{ textAlign: 'center' }}>
                <button className="btn" onClick={onRestart} style={{ marginTop: '40px' }}>
                    다시 검사하기
                </button>
            </div>

            <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default ResultScreen;
