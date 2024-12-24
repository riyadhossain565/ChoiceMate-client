import axios from 'axios';
import React, { useEffect, useState } from 'react';
import QueryCard from '../components/QueryCard';

const Queries = () => {
      const [queries, setQueries] = useState([]);

      useEffect(() => {
        fetchAllQuery();
      }, []);
    
      const fetchAllQuery = async () => {
        const { data } = await axios.get(
          `http://localhost:5000/queries`
        );
        setQueries(data);
        console.log(data);
      };
    
    return (
        <div className="w-11/12 mx-auto py-8">
             <h1 className="text-3xl font-bold text-center mb-6">All Queries</h1>

             <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {queries.map(query=><QueryCard key={query._id} query={query}></QueryCard>)}
             </div>
        </div>
    );
};

export default Queries;