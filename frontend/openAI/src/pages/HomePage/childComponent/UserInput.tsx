import { IoSendSharp } from "react-icons/io5";
import styles from "../homePage.module.css";
interface PropsType {
  userSmsInput: string;
  setUserSmsInput: any;
  handleAddUserSms: () => void; // type the function properly
}
export default function UserInput({
  userSmsInput,
  setUserSmsInput,
  handleAddUserSms,
}: PropsType) {
  return (
    <div className={styles.UserInputContainer}>
      <div className={styles.UserInputSection}>
        <input
          type="text"
          placeholder="Type what are you thinking"
          value={userSmsInput}
          onChange={(e) => setUserSmsInput(e.target.value)}
        />
        <div
          className={styles.UserInputIconContainer}
          onClick={handleAddUserSms}
        >
          {" "}
          <IoSendSharp />
        </div>
      </div>
    </div>
  );
}
