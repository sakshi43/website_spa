import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import cycloneImage from './cyclone.jpeg';
import housePriceImage from './House.jpeg';
import sentimentImage from './Sentimental.jpeg';

const cardStyles = {
    card: {
        borderRadius: '8px',
        overflow: 'hidden',
        color: 'white',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        width: '100%',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    card1: {
        backgroundImage: `url(${cycloneImage})`,
    },
    card2: {
        backgroundImage: `url(${housePriceImage})`,
    },
    card3: {
        backgroundImage: `url(${sentimentImage})`,
    },
    cardTitle: {
        marginBottom: '1rem',
        fontSize: '1.25rem',
        textAlign: 'center',
        color: 'white', // Ensure the text color is white for better readability
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)', // Optional: Add text shadow for better readability
        backgroundColor: 'transparent', // Ensure background color is removed
    },
    cardBody: {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)', // Optional: Darken background for better text readability
    },
    cardLink: {
        textDecoration: 'none',
        color: 'inherit'
    }
};

function Project() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <div className="container mt-5">
                    <center>
                        <motion.h4
                            initial={{ opacity: 1 }}
                            animate={{
                                opacity: [0, 1, 0, 1], // Flash effect
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 1.5,
                            }}
                        >
                            <b>My Projects</b>
                        </motion.h4>
                    </center>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <a 
                                href="https://github.com/sakshi43/machine_learning/blob/main/cyclone_intensity_estimation.ipynb" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={cardStyles.cardLink}
                            >
                                <div 
                                    className="card" 
                                    style={{ ...cardStyles.card, ...cardStyles.card1 }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div className="card-body" style={cardStyles.cardBody}>
                                        <h6 className="card-title" style={cardStyles.cardTitle}>Cyclone Intensity Estimation</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-4">
                            <a 
                                href="https://github.com/sakshi43/noteb/blob/main/real%20estate%20house%20prediction.ipynb" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={cardStyles.cardLink}
                            >
                                <div 
                                    className="card" 
                                    style={{ ...cardStyles.card, ...cardStyles.card2 }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div className="card-body" style={cardStyles.cardBody}>
                                        <h6 className="card-title" style={cardStyles.cardTitle}>House Price Prediction</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 mb-4">
                            <a 
                                href="https://github.com/sakshi43/text_summerization/blob/main/test_summerize.ipynb" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={cardStyles.cardLink}
                            >
                                <div 
                                    className="card" 
                                    style={{ ...cardStyles.card, ...cardStyles.card3 }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div className="card-body" style={cardStyles.cardBody}>
                                        <h6 className="card-title" style={cardStyles.cardTitle}>Sentiment Analysis</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Project;
