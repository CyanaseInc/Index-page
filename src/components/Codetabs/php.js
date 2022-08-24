import React from "react";
import Code from "../code";
const PHP = () => {



  const code = `$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => '
  https://localhost/savers/api/options.php',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Authorization: UFNZSUs1ZHFlZnh6Ukc2Skw5WVNPUT09'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

`;
  return (
      <div className="App">
      <Code className="mycode" code={code} language="javascript" />
    </div>
  );
};
export default PHP;
