import { motion } from "motion/react";
import { useState } from "react";

/**
 * App component demonstrating a complex sequence of Framer Motion animations.
 * It features a logo reveal, movement, and a final fade-out transition.
 */
function App() {
  /**
   * Key state used to force React to unmount and remount the entire animation tree,
   * effectively restarting all 'initial' to 'animate' transitions.
   * **/
  const [key, setKey] = useState(0);

  // Increments the key to trigger a full re-render of the 'main' div.
  const handleReplay = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      {/* Replay button: Fades in after the main animation sequence completes (4s delay) */}
      <motion.button
        className="replay-btn"
        onClick={handleReplay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: 0, delay: 4, ease: "easeInOut" }}
      >
        Replay
      </motion.button>

      {/* The 'key' prop here is for the replay functionality */}
      <div className="main" key={key}>
        {/* 
          Main animated wrapper: 
          Contains the logo elements and handles the final fade-out of the entire scene.
        */}
        <motion.div
          className="animated-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, repeat: 0, delay: 4, ease: "easeInOut" }}
        >
          {/* 
            Logo container: 
            Moves the entire logo assembly upwards after the initial reveal (1.5s delay).
          */}
          <motion.div
            className="animated-logo-container"
            initial={{ y: 0 }}
            animate={{ y: -40 }}
            transition={{ duration: 1, repeat: 0, delay: 1.5 }}
          >
            {/* 
              Secondary logo box: 
              Starts off-screen/scaled down, then rotates and scales into position.
            */}
            <motion.div
              className="logo-box-secondary"
              initial={{ rotate: 0, scale: 0, x: "-20vmin", y: "-10vmin" }}
              animate={{ rotate: 180, scale: 1, x: 0, y: 0 }}
              transition={{
                duration: 2,
                repeat: 0,
              }}
            >
              {/* Decorative inner corners for the secondary box */}
              <div className="logo-box-secondary-inner-tl"></div>
              <div className="logo-box-secondary-inner-tr"></div>
              <div className="logo-box-secondary-inner-bl"></div>
              <div className="logo-box-secondary-inner-br"></div>
            </motion.div>

            {/* 
              Primary logo box: 
              Handles background gradient shifts and contains border-drawing sub-elements.
            */}
            <motion.div
              className="logo-box-primary"
              initial={{ backgroundPosition: "100% 0%" }}
              animate={{ backgroundPosition: "0% 100%" }}
              transition={{ duration: 2, repeat: 0, ease: "easeInOut" }}
            >
              {/* Animated border line reveal */}
              <motion.div
                className="logo-box-primary-custom-border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, repeat: 0, ease: "easeInOut" }}
              ></motion.div>

              {/* Rotating decorative layers (pseudo-elements logic) */}
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

              {/* Static structural layers of the primary logo */}
              <div className="logo-box-primary-layer-l"></div>
              <div className="logo-box-primary-layer-r"></div>
              <div className="logo-box-primary-layer-b"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 
          Title Section: 
          Fades out slightly after the main container (4.5s delay).
        */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, repeat: 0, delay: 4.5 }}
        >
          {/* 
            Main Title: 
            Slides up and fades in simultaneously with the logo's upward movement.
          */}
          <motion.h1
            className="title"
            initial={{ y: 80, opacity: 0, x: "2vw" }}
            animate={{ y: 0, opacity: 1, x: "2vw" }}
            transition={{ duration: 1, repeat: 0, delay: 1.5 }}
          >
            ELEVATE
          </motion.h1>
        </motion.div>
      </div>
    </>
  );
}

export default App;
