import React from "react";
import Code from "../code";
const Java = () => {



  const code = `Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.get("
http://localhost/savers/api/get_access.php")
  .header("email", "wasswaviannie@gmail.com")
  .header("password", "qwert")
  .header("phone", "+256779697569")
  .header("", "")
  .header("Authorization", "eVFETURkSmo2M1dPa05OVW9ybm82dz09")
  .asString();
`;
  return (
      <div className="App">
      <Code bg="" className="mycode" code={code} language="javascript" />
    </div>
  );
};
export default Java;
