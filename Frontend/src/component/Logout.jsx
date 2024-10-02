import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication state or token
        setIsAuthenticated(false);
        // Redirect to login page
        navigate('/');
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f5f5dc', /* Light brown background color */
            padding: '20px',
        },
        heading: {
            fontSize: '2rem',
            color: '#333',
            marginBottom: '20px',
        },
        buttonContainer: {
            textAlign: 'center',
        },
        button: {
            padding: '10px 20px',
            fontSize: '1.25rem',
            backgroundColor: '#f44336', /* Red background color for logout button */
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#d32f2f', /* Darker red on hover */
        },
        buttonActive: {
            transform: 'scale(0.98)', /* Slightly shrink on click */
        },
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.heading}>Logout</h3>
            <div style={styles.buttonContainer}>
                <button
                    style={styles.button}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                    onMouseDown={(e) => e.currentTarget.style.transform = styles.buttonActive.transform}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Logout;
