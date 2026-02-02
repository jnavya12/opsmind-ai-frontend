const UploadStatus = ({ status }) => {
  if (!status) return null;

  return (
    <p
      style={{
        marginTop: "16px",
        color: "#16a34a",
        fontSize: "14px",
        fontWeight: "500",
      }}
    >
      {status}
    </p>
  );
};

export default UploadStatus;
