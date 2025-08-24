import { IoSendSharp } from "react-icons/io5";
import styles from "../homePage.module.css";
interface PropsType {
  userSmsInput: string;
  setUserSmsInput: (val: string) => void;
  handleAddUserSms: () => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export default function UserInput({
  userSmsInput,
  setUserSmsInput,
  handleAddUserSms,
  handleKeyPress,
}: PropsType) {
  return (
    <div className={styles.UserInputContainer}>
      <div className={styles.UserInputSection}>
        <input
          type="text"
          placeholder="Type what are you thinking"
          value={userSmsInput}
          onChange={(e) => setUserSmsInput(e.target.value)}
          onKeyDown={handleKeyPress} // 👈 keydown event
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
