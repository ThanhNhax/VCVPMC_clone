import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/configStore";
import { getUser } from "../redux/userReducer/userReducer";
import { getStoreJSON, USER } from "../util/setting";

export default function UserAvatar() {
  const { user } = useSelector((state: RootState) => state.user.userLogin);
  console.log({ user });
  const dispatch: AppDispatch = useDispatch();
  let { uid } = getStoreJSON(USER);
  useEffect(() => {
    dispatch(getUser(uid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="user_avatar">
      <div className="user_img">
        {user?.avatar ? (
          <img src={user.avatar} alt="avatar.png" />
        ) : (
          <i className="far fa-user"></i>
        )}
      </div>
      <div className="title">
        <h5>
          {user?.ho.slice(0, 2)}.{user?.ten}
        </h5>
        <p>{user?.phanQuyen}</p>
      </div>
    </div>
  );
}
