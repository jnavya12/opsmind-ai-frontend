import AnswerBox from "../components/AnswerBox";
import ChatInput from "../components/ChatInput";

export default function Workspace() {
  return (
    <div style={styles.page}>
      <AnswerBox />
      <ChatInput />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "calc(100vh - 60px)",
    background: "#020617",
    padding: 24,
    color: "#e5e7eb",
  },
};
