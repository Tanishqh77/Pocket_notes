

import { useState } from "react";

import but from "./Vector.png";

const Main = ({ activeGroup, onUpdateGroup }) => {
  const [note, setNote] = useState("");

  const onEditField = () => {
    onUpdateGroup({
      ...activeGroup,
      notes: [...activeGroup.notes, { note, lastModified: Date.now() }],
    });
    setNote("");
  };

  if (!activeGroup) {
    return (
      <div
        className="no-active-note"
        style={{
          background: "#F7ECDC",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/images/img1.png" style={{}}></img>
        <p style={{ fontSize: "35px", fontWeight: 600 }}>Pocket Notes</p>
        <p
          style={{
            width: "45%",
            marginTop: "0%",
            fontWeight: 400,
            color: "#292929",
          }}
        >
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
        <div
          style={{
            background: "#F7ECDC",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "2%",
          }}
        >
          <img src="/images/lock.png"></img>
          <img src="/images/encrypted.png"></img>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundColor: "#F7ECDC",
            width: "100%",
            height: "60%",
            paddingInline: "5%",
            paddingBlock: "5%",
            overflow: "auto",
          }}
        >
          {activeGroup.notes.map((note, key) => {
            return (
              <div className="Main-area"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: "100%",
                  gap: "5%",
                }}
              >
                <div>
                  <p style={{ fontWeight: "600" }}>
                    {new Date(note.lastModified).toLocaleDateString("en-GB", {
                      minute: "2-digit",
                      hour: "2-digit",
                    })}
                  </p>
                </div>
                <div>
                  <p style={{ fontWeight: "400" }}>{note.note}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            backgroundColor: "#E8E8E8",
            width: "100%",
            height: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <textarea
            style={{
              height: "80%",
              width: "90%",
              border: "none",
              outline: "none",
            }}
            placeholder="Enter your text here..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? onEditField() : null)}
          ></textarea>
          <button
            onClick={onEditField}
            style={{
             
              position: "absolute",
              right: "5%",
              bottom: "10%",
            }}
          >
            <img src={but}></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
