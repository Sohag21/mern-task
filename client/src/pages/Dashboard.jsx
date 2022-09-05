import React, { useEffect, useState } from 'react';
import { CustomizableTable, NewPie } from '../components';
import LineChart from '../components/Charts/LineChart';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';


const Dashboard = () => {
  const { currentColor } = useStateContext();
  const [usersGender, setUsersGender] = useState({});
  const [usersCountry, setUsersCountry] = useState({});


  // get Users Countries
  const getUsersCountry = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users/country");
      setUsersCountry(res?.data);
    } catch (err) {
      console.log("Error from getUsersCountry api", err);
    }
  };

  // get Users Gender data
  const getUsersGender = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users/gender");
      setUsersGender(res?.data);
    } catch (err) {
      console.log("Error from getUsersGender api", err);
    }
  };

  useEffect(() => {
    getUsersCountry();
    getUsersGender();
  }, [])

  return (
    <div className="mt-2">
      <div className="flex gap-1 flex-wrap justify-center">

        <div className='w-full mx-4 flex justify-between items-center gap-2 mb-2'>
          {/* Bar chart area for view countries  */}
          <div className="w-1/2 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded p-4 mt-8 gap-4"
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-2xl">Country wise users</p>
            </div>

            <div className="mt-4">
              <LineChart data={usersCountry} />
            </div>
          </div>

          {/* pie chart area for view genders  */}
          <div className="w-1/2 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded p-8 py-12 mt-8 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold">Genders</p>
              <p className="text-md font-semibold">Please hover on Pie</p>
            </div>
            <div className="w-64">
              <NewPie data={usersGender} />
            </div>
          </div>
        </div>

        {/* Top 15 users table */}
        <div className="w-full mx-4 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded">
          <div className='flex justify-between justify-center items-center mt-4'>
            <p className="font-semibold text-xl">Top 15 users by usage time(Drag and Drop Row to  reorder them)</p>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-sm p-1 py-1 inline-block hover:drop-shadow-xl rounded"
            >Add User</button>
          </div>
          <div className="mt-2">
            <CustomizableTable />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
