import { useState } from "react";
import QueryBox from "./QueryBox";
import AnswerBox from "./AnswerBox";

const RetrievalSection = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    if (!query) return;

    // Mock answer (backend comes in Week-2 backend)
    setAnswer(
      "This is a sample answer retrieved from indexed documents. Source and citation will be added later.",
    );
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h3 style={{ marginBottom: "12px" }}>Ask the Knowledge Base</h3>

      <QueryBox query={query} setQuery={setQuery} onAsk={handleAsk} />
      <AnswerBox answer={answer} />
    </div>
  );
};

export default RetrievalSection;
