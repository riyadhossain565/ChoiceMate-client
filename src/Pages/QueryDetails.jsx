import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const QueryDetails = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <div>
             {/* User Information */}
          <div className="card bg-base-100 shadow-md p-4 border rounded-md mb-6">
            <h2 className="text-xl font-semibold mb-2">User Information</h2>
            <div className="flex items-center gap-4 mb-2">
              <img
                src={user?.photoURL}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold">{user?.displayName}</p>
                <p className="text-sm text-gray-600">{user?.email}</p>
              </div>
            </div>
            {/* <p className="text-sm text-gray-600">
              Created At: {new Date(queryDetails.timestamp).toLocaleString()}
            </p> */}
          </div>
        </div>
    );
};

export default QueryDetails;