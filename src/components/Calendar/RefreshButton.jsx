import {firebaseAuth} from "../../utils/firebaseConfig";
import {refreshCalender} from "../../api/apis";
import {Button} from "@mui/material";
import {useParams} from "react-router-dom";

const RefreshButton = () => {
  const firebaseUser = firebaseAuth.currentUser;
  if (!firebaseUser) throw new Error("No current user");

  //paramsのcalender_id取得
  const {calendar_id} = useParams();

  function handleRefresh() {
    refreshCalender(calendar_id, firebaseUser)
      .then(() => {
        console.log("カレンダーを更新しました");
      })
      .catch((reason) => {
        console.error(reason.apiErrorResponse ? reason.apiErrorResponse.message : reason);
      });
  }

  return <Button onClick={handleRefresh}>更新</Button>;
};

export default RefreshButton;
