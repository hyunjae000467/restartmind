import React, { useState, useMemo } from 'react';
import { columns } from '../data/columns';
import { types } from '../data/questions';
import ServiceModal from './ServiceModal';

const BoardScreen = ({ onBack }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedAuthorCategory, setSelectedAuthorCategory] = useState('all');
    const [selectedStyle, setSelectedStyle] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Extract unique author categories
    const authorCategories = useMemo(() => {
        const cats = new Set(columns.map(col => col.authorCategory));
        return ['all', ...Array.from(cats)];
    }, []);

    // Filter columns
    const filteredColumns = useMemo(() => {
        return columns.filter(col => {
            const matchSearch = col.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                col.author.toLowerCase().includes(searchTerm.toLowerCase());
            const matchType = selectedType === 'all' || col.relatedTypes.includes(selectedType);
            const matchAuthor = selectedAuthorCategory === 'all' || col.authorCategory === selectedAuthorCategory;
            const matchStyle = selectedStyle === 'all' || col.columnStyle === selectedStyle;

            return matchSearch && matchType && matchAuthor && matchStyle;
        });
    }, [searchTerm, selectedType, selectedAuthorCategory, selectedStyle]);

    const handleColumnClick = () => {
        setIsModalOpen(true);
    };

    const getStyleLabel = (style) => {
        if (style === 'empathy') return '공감형';
        if (style === 'advice') return '조언형';
        return style;
    };

    return (
        <div className="material-card fade-in" style={{ padding: '0', background: 'transparent', boxShadow: 'none', border: 'none' }}>
            {/* Header */}
            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button
                    onClick={onBack}
                    style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--outline)',
                        borderRadius: '50%',
                        width: '48px',
                        height: '48px',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        color: 'var(--text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = 'var(--surface-variant)'}
                    onMouseOut={(e) => e.target.style.background = 'var(--surface)'}
                >
                    ←
                </button>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--text-main)', margin: 0 }}>전체 칼럼</h2>
            </div>

            {/* Filter Section */}
            <div style={{ background: 'var(--surface)', padding: '20px', borderRadius: '16px', marginBottom: '24px', border: '1px solid #e0e0e0' }}>
                <input
                    type="text"
                    placeholder="검색어 입력..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '12px 16px',
                        marginBottom: '12px',
                        borderRadius: '8px',
                        border: '1px solid var(--outline)',
                        fontSize: '1rem',
                        backgroundColor: 'var(--bg-color)',
                        color: 'var(--text-main)'
                    }}
                />
                <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
                    <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--outline)', backgroundColor: 'var(--bg-color)', color: 'var(--text-main)' }}
                    >
                        <option value="all">모든 슬럼프 유형</option>
                        {Object.keys(types).map(key => (
                            <option key={key} value={key}>{types[key].label}</option>
                        ))}
                    </select>

                    <select
                        value={selectedAuthorCategory}
                        onChange={(e) => setSelectedAuthorCategory(e.target.value)}
                        style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--outline)', backgroundColor: 'var(--bg-color)', color: 'var(--text-main)' }}
                    >
                        <option value="all">모든 작성자 유형</option>
                        {authorCategories.map(cat => (
                            <option key={cat} value={cat}>{cat === 'all' ? '모든 작성자 유형' : cat}</option>
                        ))}
                    </select>

                    <select
                        value={selectedStyle}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                        style={{ padding: '12px', borderRadius: '8px', border: '1px solid var(--outline)', backgroundColor: 'var(--bg-color)', color: 'var(--text-main)' }}
                    >
                        <option value="all">모든 칼럼 스타일</option>
                        <option value="empathy">공감형</option>
                        <option value="advice">조언형</option>
                    </select>
                </div>
            </div>

            {/* List Section */}
            <div className="column-grid">
                {filteredColumns.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)', gridColumn: '1/-1' }}>
                        검색 결과가 없습니다.
                    </div>
                ) : (
                    filteredColumns.map(col => (
                        <div key={col.id} onClick={handleColumnClick} style={{
                            background: 'var(--bg-color)',
                            padding: '24px',
                            borderRadius: '16px',
                            boxShadow: 'var(--shadow-1)',
                            cursor: 'pointer',
                            transition: 'box-shadow 0.2s, transform 0.2s',
                            textAlign: 'left',
                            border: '1px solid #f0f0f0'
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
                                {col.relatedTypes.map(type => (
                                    <span key={type} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', background: 'var(--surface-variant)', padding: '4px 8px', borderRadius: '4px' }}>
                                        #{types[type].label}
                                    </span>
                                ))}
                            </div>

                            <h4 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--text-main)', lineHeight: '1.3', fontWeight: '700' }}>
                                {col.title}
                            </h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.6', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical' }}>
                                {col.summary}
                            </p>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 'auto' }}>
                                {col.author} | {col.university} {col.major}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default BoardScreen;
