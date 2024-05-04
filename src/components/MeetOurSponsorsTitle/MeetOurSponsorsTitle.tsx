import { motion } from "framer-motion";
import { HiMiniArrowLongDown } from "react-icons/hi2";

function MeetOurSponsorsTitle() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          margin: "-100px",
        }}
        transition={{ duration: 1 }}
      >
        <text
          style={{
            display: "flex",
            marginLeft: "35%",
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          Meet Our
        </text>
        <text
          style={{
            display: "flex",
            fontSize: "95px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          Sponsors
        </text>
        <br />
        <br />
        <br />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            margin: "-100px",
          }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HiMiniArrowLongDown size={"200px"} />
        </motion.div>
      </motion.div>
    </div>
  );
}
export default MeetOurSponsorsTitle;
