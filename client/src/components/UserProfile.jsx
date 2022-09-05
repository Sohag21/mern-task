import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';

const UserProfile = () => {
  const { currentColor, user, dispatch } = useStateContext();

  const handleLogout = ()=>{
    dispatch({ type: "LOGOUT" });
    window.location = '/';
  }

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-6 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-4 border-color border-b-1 pb-4">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-md dark:text-gray-200">Name:  {user.name}  </p>
          <p className="text-gray-500 text-sm dark:text-gray-400"> Gender: {user.gender}</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">Phone: {user.phone} </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">Device: {user.device} </p>
        </div>
      </div>
      
      <div className="mt-5" onClick={handleLogout}>
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>

  );
};

export default UserProfile;
