import React from "react";
import Code from "../code";
const Python = () => {



  const code = `$import requests

url = "http://localhost/savers/api/get_access.php"

payload={}
headers = {
  'email': 'wasswaviannie@gmail.com',
  'password': 'hjg767599909@',
  'phone': '+256779697569',
  '': '',
  'Authorization': 'eVFETURkSmo2M1iiuihkkkh2dz09'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)


`;
  return (
      <div className="App">
      <Code className="mycode" code={code} language="javascript" />
    </div>
  );
};
export default Python;
