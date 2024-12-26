import { format } from 'date-fns';

const MyRecommendsTable = ({recommendation, handleDelete}) => {
    const {_id,recommendationTitle,productName,currentDate} = recommendation || {}
    return (
       
            <tr className="hover:bg-gray-50">
              <th>1</th>
              <td>{recommendationTitle}</td>
              <td>{productName}</td>
              <td>{format(new Date(currentDate), "P")}</td>
              <td><button onClick={()=> handleDelete(_id)} className='btn'>Delete</button></td>
            </tr>
       
    );
};

export default MyRecommendsTable;