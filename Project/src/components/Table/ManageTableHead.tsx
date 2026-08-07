const ManageTableHead = ({ heads }: { heads: string[] }) => {
  return (
    <>
      <thead>
        <tr>
          {heads.map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default ManageTableHead;
