const ActionAlert = ({ success, successText, onClick }: { success: boolean; successText: string; onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <div
      className={`alert alert-light-${success ? "success" : "danger"} alert-dismissible fade show mb-3`}
      role="alert"
    >
      {success ? successText : "Something went wrong! Please try again after some time."}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClick}></button>
    </div>
  );
};

export default ActionAlert;
