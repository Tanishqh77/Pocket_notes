import { useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Sidebar = ({
  groups,
  onAddGroup,
  activeGroup,
  setActiveGroup,
  getActiveGroup,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("orange");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="app-sidebar">
      <div
        className="app-sidebar-header"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1> Pocket Notes</h1>
        <button
          onClick={openModal}
          style={{
            backgroundColor: "black",
            width: "fit-content",
            paddingBlock: "10px",
            paddingInline: "20px",
            borderRadius: "40px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: "5%",
          }}
        >
          + Create Notes Group
        </button>
      </div>
      <div
        className="app-sidebar-notes"
       
      >
        {groups.map(({ id, groupName, groupColor, notes }, key) => {
          return (
            <div className="each note"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "20px",
                width: "100%",
                paddingLeft: "10%",
                paddingBlock: "2%",
                alignSelf: "flex-start",
                marginBlock: "10px",
                borderRadius: "50px 0px 0px 50px",
                backgroundColor: getActiveGroup()
                  ? getActiveGroup().id === id
                    ? "#F7ECDC"
                    : "white"
                  : null,
              }}
              onClick={() => setActiveGroup(id)}
              onFocus={(e) => (e.target.style.backgroundColor = "#F7ECDC")}
            >
              <div
                style={{
                  backgroundColor: groupColor,
                  height: "60px",
                  width: "60px",
                  borderRadius: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  fontSize: "25px",
                }}
              >
                {groupName.split(" ")[0] ? (
                  <p>{groupName.split(" ")[0].toString()[0].toUpperCase()}</p>
                ) : null}
                {groupName.split(" ")[1] ? (
                  <p>{groupName.split(" ")[1].toString()[0].toUpperCase()}</p>
                ) : null}
              </div>
              <p style={{ fontSize: "18px", fontWeight: 700 }}>{groupName}</p>
            </div>
          );
        })}
        {}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2>Create New Notes group</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            gap: "5%",
          }}
        >
          <p style={{ fontWeight: 600 }}>Group Name</p>
          <input
            type="text"
            placeholder="Enter your group name..."
            onChange={(e) => setGroupName(e.target.value)}
            value={groupName}
            style={{
              width: "60%",
              borderRadius: "20px",
              height: "35px",
              paddingLeft: "10px",
            }}
          ></input>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            gap: "5%",
          }}
        >
          <p style={{ fontWeight: 600 }}>Group Name</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "violet",
                borderRadius: "100%",
                border: groupColor === "violet" ? "2px solid black" : "none",
              }}
              onClick={() => setGroupColor("violet")}
            ></button>
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "purple",
                borderRadius: "100%",
                border: groupColor === "purple" ? "2px solid black" : "none",
              }}
              onClick={() => setGroupColor("purple")}
            ></button>
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "aqua",
                borderRadius: "100%",
                border: groupColor === "aqua" ? "2px solid black" : "none",
              }}
              onClick={() => setGroupColor("aqua")}
            ></button>
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "orange",
                borderRadius: "100%",
                border: groupColor === "orange" ? "2px solid black" : "none",
              }}
              onClick={() => setGroupColor("orange")}
            ></button>
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "blue",
                borderRadius: "100%",
                border: groupColor === "blue" ? "2px solid black" : "none",
              }}
              onClick={() => setGroupColor("blue")}
            ></button>
            <button
              style={{
                width: "30px",
                height: "30px",
                backgroundColor: "red",
                borderRadius: "100%",
                border: groupColor === "red" ? "2px solid black" : "none",
              }}
              onClick={() => setGroupColor("red")}
            ></button>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <button
            style={{
              alignSelf: "flex-end",
              backgroundColor: "black",
              width: "fit-content",
              height: "30px",
              paddingBlock: "10px",
              paddingInline: "40px",
              borderRadius: "10px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
            }}
            onClick={() => {
              onAddGroup({ groupName, groupColor });
              setIsOpen(false);
              setGroupName("");
              setGroupColor("");
            }}
          >
            Create
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "500px",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
