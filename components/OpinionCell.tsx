type AppProps = {
  value: string;
};

const OpinionCell = ({value}: AppProps) => {
  return (
    <>
    {
      (value=="Unqualified opinion"||value=="Unmodified opinion")?
      <span className="badge bg-success">{value}</span>:
      <span className="badge bg-danger">{value}</span>
    }
    </>
  );
}

export default OpinionCell
