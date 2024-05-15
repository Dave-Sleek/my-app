import React from "react";
import User from "./User";
import { USER_PER_PAGE } from "./USER_PER_PAGE";

const Users = ({ users, page, chooseRepo, scrollView, dynamicRoute }) => {
  const startIndex = (page - 1) * USER_PER_PAGE;
  console.log(users)
  const selectedUsers = users.slice(startIndex, startIndex + USER_PER_PAGE);
  
  return (
    <div
      id="data-card"
      style={{
        width: "90%",
        textAlign: "center",
      }}
    >
      {selectedUsers.map((user) => (
        <User
          id={user?.id}
          name={user?.name}
          html_url={user?.html_url}
          description={user?.description}
          chooseRepo={chooseRepo}
          
        />
      ))}
    </div>
  );
};

export default Users;