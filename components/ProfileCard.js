import React from "react";
import "./ProfileCard.css";
import profileImage from "../assests/images.jpg"; // Use the uploaded image here

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQOCWorAYPkshRoZOgSPWE2A_eumo5VHIBg&s" // Example cover image
          alt="Cover"
          className="cover-image"
        />
        <img src={profileImage} alt="Profile" className="profile-picture" />
      </div>
      <div className="content">
        <br></br><h2>Kalaivani</h2>
        <p className="para">Social Media Influencer, Tik Tok</p>
        <button className="follow-button">Follow</button>
        <div className="stats">
          <div>
            <h3>1.25 M</h3>
            <p>Followers</p>
          </div>
          <div>
            <h3>24</h3>
            <p>Following</p>
          </div>
          <div>
            <h3>210</h3>
            <p>Videos</p>
          </div>
        </div>
        <button className="view-profile">VIEW PROFILE</button>
      </div>
    </div>
  );
};

export default ProfileCard;
