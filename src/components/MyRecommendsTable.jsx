import { format } from "date-fns";

const MyRecommendsTable = ({ recommendation, mordernDelete, index }) => {
  const { _id, recommendationTitle, productName, currentDate } =
    recommendation || {};
  return (
    <tr className="hover:bg-gray-50">
      <th>{index + 1}</th>
      <td>{recommendationTitle}</td>
      <td>{productName}</td>
      <td>{format(new Date(currentDate), "P")}</td>
      <td>
        <button onClick={() => mordernDelete(_id)} className="btn">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyRecommendsTable;
