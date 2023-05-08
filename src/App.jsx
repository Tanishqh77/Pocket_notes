import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const [groups, setGroups] = useState(
    localStorage.groups ? JSON.parse(localStorage.groups) : []
  );
  const [activeGroup, setActiveGroup] = useState(false);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  const onAddGroup = ({ groupName, groupColor }) => {
    const newGroup = {
      id: uuid(),
      groupName: groupName,
      groupColor: groupColor,
      notes: [],
    };

    setGroups([newGroup, ...groups]);
    setActiveGroup(newGroup.id);
  };

 

  const onUpdateGroup = (updatedGroup) => {
    const updatedGroupsArr = groups.map((group) => {
      if (group.id === updatedGroup.id) {
        return updatedGroup;
      }

      return group;
    });

    setGroups(updatedGroupsArr);
  };

  const getActiveGroup = () => {
    return groups.find(({ id }) => id === activeGroup);
  };

  return (
    <div className="App">
      <Sidebar
        groups={groups}
        onAddGroup={onAddGroup}
        
        activeGroup={activeGroup}
        setActiveGroup={setActiveGroup}
        getActiveGroup={getActiveGroup}
      />
      <Main activeGroup={getActiveGroup()} onUpdateGroup={onUpdateGroup} />
    </div>
  );
}

export default App;
