import { faEdit, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Editprofiledetails from "./Editprofiledetails";
import { useState } from "react";

export default function Userdetailscard({ userDetails,userid,updateProfileDetail }:any) {
    const [editprofile,setEditProfile] = useState(false);
    return (
        <>
        {editprofile &&
        <Editprofiledetails 
         userDetails = {userDetails ?? {}}
         userid={userid ?? ""}
         updateProfileDetail={updateProfileDetail ?? {}}
         onClose = {() => setEditProfile(false)}
        />
         }
         <div className="bg-white shadow rounded-md p-4 mb-4 mt-8">
        <h3 className="text-lg font-medium mb-2">User Details</h3>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faUser} className="mr-2 text-blue-500 " />
          <p className="text-sm">{userDetails?.firstname} {userDetails?.lastname}</p>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500" />
          <p className="text-sm">{userDetails?.email}</p>
        </div>
        <div className="flex items-center mb-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-500" />
          <p className="text-sm">{userDetails?.mobileno}</p>
        </div>
        <button
          onClick={() => setEditProfile(true)}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md flex items-center"
        >
          <FontAwesomeIcon icon={faEdit} className="mr-2" />
          Edit Profile
        </button>
      </div>
        </>
    )
}
  