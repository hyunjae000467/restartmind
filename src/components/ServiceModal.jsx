import React from 'react';

const ServiceModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            animation: 'fadeIn 0.2s ease-out'
        }} onClick={onClose}>
            <div style={{
                backgroundColor: '#FFFFFF', // Explicit White
                padding: '24px',
                borderRadius: '28px', // MD3 Dialog radius
                maxWidth: '320px',
                width: '90%',
                textAlign: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                position: 'relative'
            }} onClick={e => e.stopPropagation()}>

                <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontSize: '2rem' }}>🚧</span>
                </div>

                <h3 style={{
                    margin: '0 0 16px 0',
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-main)'
                }}>
                    서비스 준비중입니다
                </h3>

                <p style={{
                    margin: '0 0 24px 0',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5'
                }}>
                    죄송합니다. 현재 해당 콘텐츠를 준비하고 있습니다.<br />
                    사전예약을 신청하시면 오픈 시 알림을 드립니다.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <a
                        href="https://forms.gle/dZGnYq8GyAyUGXA68"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'block',
                            backgroundColor: 'var(--primary-color)',
                            color: 'var(--on-primary)',
                            padding: '12px 24px',
                            borderRadius: '100px', // Stadium shape
                            textDecoration: 'none',
                            fontWeight: '600',
                            transition: 'opacity 0.2s'
                        }}
                    >
                        사전예약 신청하기
                    </a>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--primary-color)',
                            fontWeight: '600',
                            padding: '12px',
                            cursor: 'pointer',
                            borderRadius: '100px'
                        }}
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
