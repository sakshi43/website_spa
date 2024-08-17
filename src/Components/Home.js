import React from 'react';
import { motion } from 'framer-motion';

import image from './image.jpeg';
import resume from './Resume.pdf';



function Home() {
  return (
    <div>
     
     
     
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay: 0.1 }}
        className="container"
        style={{ marginTop: '60px' }}
      >
        <div className="row">
          <div className="col-md-6">
          <motion.h4
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0, }}
              transition={{ duration: 3, delay: 0.1 ,repeat:Infinity,repeatType:"loop"}}
              /*initial={{ x: -100 }}
              animate={{ x: 100 }}
              transition={{
                repeat: Infinity,
                repeatType:"loop",
                duration: 3,
                ease:"anticipate",
              }}*/
            >
              Welcome to Sakshi Desale's Portfolio
              <p>Recent graduate in Information Technology</p>
            </motion.h4>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              Resume
            </a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <motion.img
              src={image}
              initial={{ opacity: 0, scale: 0.9,rotateY: 0 }}
              animate={{ opacity: 1, scale: 1,rotateY: 180 }}
              transition={{ duration: 5,repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut", }}
              style={{ width: '100%', height: 'auto', maxWidth: '500px' ,display: 'inline-block'}}
            />
          </div>
        </div>
      </motion.div>
     
    </div>
  );
}

export default Home;
