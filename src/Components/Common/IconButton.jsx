// React
import { motion } from "framer-motion";

const IconButton = () => {
  return (
    <div>
      <h1 className="primary-title">
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello world!
        </motion.div>
      </h1>
      <h2 className="secondary-title">This is a box</h2>
    </div>
  );
};
export default IconButton;
