import React, { useState } from "react";

export default function ProfileContent({ activeTab }) {
  return (
    <div className=" md:p-4 w-full">
      {activeTab === 1 && <ProfileInfo />}
      {activeTab === 2 && <Orders />}
    </div>
  );
}

const ProfileInfo = () => {
  const [update, setUpdate] = useState(false);

  return (
    <div className=" flex flex-col items-center justify-center w-full bg-white h-full ">
      <div className=" w-full flex items-center justify-center">
        <img
          src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
          className=" h-32 w-32 md:w-52 md:h-52 rounded-full border border-red-500"
          alt="sdf"
        />
      </div>
      <div className=" gap-3 w-full flex bg-white mt-5  flex-wrap justify-center flex-col  p-2 md:p-5">
        <div className=" flex gap-6">
          <p className=" font-semibold text-xl w-16  md:w-28">Name:</p>
          <p className=" font-semibold p-1 md:font-bold text-xl md:p-2 bg-gray-100 w-full">
            Zeshan
          </p>
        </div>
        <div className=" flex gap-6">
          <p className="  font-semibold text-xl w-16  md:w-28">Email:</p>
          <p className=" font-semibold p-1 md:font-bold text-xl md:p-2 bg-gray-100 w-full ">
            Zeshan@z.com
          </p>
        </div>
        <div className=" flex gap-6">
          <p className="  font-semibold text-xl w-16  md:w-28">Address:</p>
          <p className=" font-semibold p-1 md:font-bold text-xl md:p-2 bg-gray-100 w-full">
            Ali Town Lahore
          </p>
        </div>
        <div className=" flex gap-6">
          <p className="  font-semibold text-xl w-16  md:w-28">Adress 2:</p>
          <p className="font-semibold p-1 md:font-bold text-xl md:p-2 bg-gray-100 w-full ">
            Ali Town Lahore
          </p>
        </div>
        <div className=" flex gap-6">
          <p className="  font-semibold text-xl w-16  md:w-28">Post Code:</p>
          <p className="font-semibold p-1 md:font-bold text-xl md:p-2 bg-gray-100 w-full ">
            23453
          </p>
        </div>

        <button
          onClick={() => {
            setUpdate(true);
          }}
          className=" bg-gray-200 p-2 w-32  rounded-mg text-lg font-semibold  self-end"
        >
          Edit
        </button>
      </div>

      {update && <UpDatePopUp setUpdate={setUpdate} />}
    </div>
  );
};

const UpDatePopUp = ({ setUpdate }) => {
  return (
    <div className="left-0 top-0 absolute w-screen h-screen bg-[#0000003f] flex  justify-center ">
      <form className=" overflow-auto scrollbar-hide p-1 md:p-3 flex flex-col items-center justify-center w-[60%] shadow-lg top-[2%] md:top-[15%] bg-white  md:h-[60vh] fixed">
        <div className=" w-full flex items-center justify-center">
          <img
            src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
            className=" h-32 w-32 md:w-52 md:h-52 rounded-full border border-red-500"
            alt="sdf"
          />
        </div>
        <div className=" gap-3 w-full flex bg-white mt-5  flex-wrap justify-center  p-2 md:p-5">
          <Input label={"Name"} />
          <Input label={"Email"} />
          <Input label={"Password"} />
          <Input label={"Adress 1"} />
          <Input label={"Adress 2"} />
          <Input label={"Post Code"} />
        </div>
        <div className=" self-end">
          <button
            onClick={() => {
              setUpdate(false);
            }}
            className=" hover:bg-red-500 transition-all duration-300 bg-red-400 p-1 md:p-2 w-16 md:w-32  rounded-sm text-white mr-2 text-lg md:font-semibold  self-end"
          >
            Cencel
          </button>
          <button className=" hover:bg-green-600 transition-all duration-300 bg-green-500 p-1 md:p-2 w-16 md:w-32 text-white  rounded-sm mr-2 text-lg md:font-semibold  self-end">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

const Input = ({ label }) => {
  return (
    <div className="  w-full md:w-[40%] flex  flex-col gap-2">
      <label className=" font-semibold">{label}</label>
      <input
        type="text"
        className=" bg-gray-200 border-none outline-none p-2
      "
      />
    </div>
  );
};

const Orders = () => {
  return <div>ordre</div>;
};
