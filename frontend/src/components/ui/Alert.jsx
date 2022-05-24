const Alert = ({ description }) => {
  return (
    <div className={`alert`}>
      <p className="alert__description">{description}</p>
    </div>
  );
};

export default Alert;
