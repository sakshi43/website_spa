import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion'; // Import framer-motion

const styles = {
    container: {
        marginTop: '60px'
    },
    formRangeContainer: {
        marginBottom: '20px',
    },
    formRange: {
        WebkitAppearance: 'none',
        width: '100%',
        height: '10px',
        borderRadius: '5px',
        outline: 'none',
        opacity: '0.8',
        background: 'linear-gradient(to right, #306998 0%, #306998 var(--value), #ddd var(--value), #ddd 100%)',
        transition: 'background 0.5s ease, transform 0.3s ease-in-out', // Add transition for smooth animation
    },
    formRangeThumb: {
        WebkitAppearance: 'none',
        appearance: 'none',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: '#ffffff',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease', // Add transition for thumb animation
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    twoColumns: {
        display: 'flex',
        justifyContent: 'space-between',
    }
};

function About() {
    return (
        <div>
            <motion.div initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}>
        <div className="container mt-5">
            <h4><b> My Skills</b></h4>
            <div className="row" style={styles.twoColumns}>
                <div className="col-md-5" style={styles.column}>
                    <div className="container" style={styles.formRangeContainer}>
                        <label htmlFor="customRange1" className="form-label">Python</label>
                        <input 
                            type="range" 
                            className="form-range" 
                            id="customRange1" 
                            style={{...styles.formRange, background: 'linear-gradient(to right, #306998 0%, #306998 var(--value), #ddd var(--value), #ddd 100%)'}} 
                            onInput={(e) => e.target.style.setProperty('--value', `${e.target.value}%`)} 
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} // Slight scale on hover
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} // Return to normal
                        />
                    </div>

                    <div className="container" style={styles.formRangeContainer}>
                        <label htmlFor="customRange2" className="form-label">C++</label>
                        <input 
                            type="range" 
                            className="form-range" 
                            id="customRange2" 
                            style={{...styles.formRange, background: 'linear-gradient(to right, #f34b7d 0%, #f34b7d var(--value), #ddd var(--value), #ddd 100%)'}} 
                            onInput={(e) => e.target.style.setProperty('--value', `${e.target.value}%`)} 
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                    </div>

                    <div className="container" style={styles.formRangeContainer}>
                        <label htmlFor="customRange3" className="form-label">SQL</label>
                        <input 
                            type="range" 
                            className="form-range" 
                            id="customRange3" 
                            style={{...styles.formRange, background: 'linear-gradient(to right, #00758f 0%, #00758f var(--value), #ddd var(--value), #ddd 100%)'}} 
                            onInput={(e) => e.target.style.setProperty('--value', `${e.target.value}%`)} 
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                    </div>
                </div>

                <div className="col-md-5" style={styles.column}>
                    <div className="container" style={styles.formRangeContainer}>
                        <label htmlFor="customRange4" className="form-label">Machine Learning</label>
                        <input 
                            type="range" 
                            className="form-range" 
                            id="customRange4" 
                            style={{...styles.formRange, background: 'linear-gradient(to right, #ff6f61 0%, #ff6f61 var(--value), #ddd var(--value), #ddd 100%)'}} 
                            onInput={(e) => e.target.style.setProperty('--value', `${e.target.value}%`)} 
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                    </div>

                    <div className="container" style={styles.formRangeContainer}>
                        <label htmlFor="customRange5" className="form-label">Data Analytics</label>
                        <input 
                            type="range" 
                            className="form-range" 
                            id="customRange5" 
                            style={{...styles.formRange, background: 'linear-gradient(to right, #4caf50 0%, #4caf50 var(--value), #ddd var(--value), #ddd 100%)'}} 
                            onInput={(e) => e.target.style.setProperty('--value', `${e.target.value}%`)} 
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
        </div>
    );
}

export default About;
