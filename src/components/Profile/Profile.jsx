import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ clothingItems, handleCardClick, handleAddClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection clothingItems={clothingItems} handleCardClick={handleCardClick} handleAddClick={handleAddClick} />
      </section>
    </div>
  );
}

export default Profile;
