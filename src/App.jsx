import "./App.css";
import { motion } from "motion/react";
import { useState } from "react";

function App() {
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <div className="main" key={key}>
        <motion.button
          className="replay-btn"
          onClick={handleReplay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: 0, delay: 4, ease: "easeInOut" }}
        >
          Replay
        </motion.button>

        <motion.div
          className="animated-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, repeat: 0, delay: 4, ease: "easeInOut" }}
        >
          <motion.div
            className="animated-logo-container"
            initial={{ y: 0 }}
            animate={{ y: -40 }}
            transition={{ duration: 1, repeat: 0, delay: 2 }}
          >
            <motion.div
              className="logo-box-secondary"
              initial={{ rotate: 0, scale: 0, x: "-20vmin", y: "-10vmin" }}
              animate={{ rotate: 180, scale: 1, x: 0, y: 0 }}
              transition={{
                duration: 2,
                repeat: 0,
              }}
            >
              <div className="logo-box-secondary-inner-tl"></div>
              <div className="logo-box-secondary-inner-tr"></div>
              <div className="logo-box-secondary-inner-bl"></div>
              <div className="logo-box-secondary-inner-br"></div>
            </motion.div>

            <motion.div
              className="logo-box-primary"
              initial={{ backgroundPosition: "100% 0%" }}
              animate={{ backgroundPosition: "0% 100%" }}
              transition={{ duration: 2, repeat: 0, ease: "easeInOut" }}
            >
              <motion.div
                className="logo-box-primary-custom-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, repeat: 0, ease: "easeInOut" }}
              ></motion.div>

              <motion.div
                className="logo-box-primary-before"
                initial={{ rotate: 0 }}
                animate={{ rotate: -180 }}
                transition={{ duration: 1.5, repeat: 0, ease: "easeInOut" }}
              ></motion.div>

              <motion.div
                className="logo-box-primary-after"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 1.5, repeat: 0, ease: "easeInOut" }}
              ></motion.div>

              <div className="logo-box-primary-layer-l"></div>
              <div className="logo-box-primary-layer-r"></div>
              <div className="logo-box-primary-layer-b"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, repeat: 0, delay: 4.5 }}
        >
          <motion.h1
            className="title"
            initial={{ y: 80, opacity: 0, x: "2vw" }}
            animate={{ y: 0, opacity: 1, x: "2vw" }}
            transition={{ duration: 1, repeat: 0, delay: 2 }}
          >
            ELEVATE
          </motion.h1>
        </motion.div>
      </div>
    </>
  );
}

export default App;
