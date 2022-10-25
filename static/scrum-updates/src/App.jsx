import React, { useEffect, useState } from "react";
import Select from "@atlaskit/select";
import TextArea from "@atlaskit/textarea";
import Button from "@atlaskit/button";
// import { HelperMessage } from "@atlaskit/form";
import SuccessIcon from "@atlaskit/icon/glyph/check-circle";
import ErrorIcon from "@atlaskit/icon/glyph/error";
import { G300, R400 } from "@atlaskit/theme/colors";
import { token } from "@atlaskit/tokens";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
// import { invoke } from "@forge/bridge";
import "./App.css";
function App() {
  const [updateType, setUpdateType] = useState();
  const [textareaValue, setTextAreaValue] = useState();
  const [successMessage, setSucessMessage] = useState({
    color: "#6b778c",
    icon: null,
    message: "Select update type, add your updates, and click submit.",
  });

  const HelperMessage = styled.div`
    font-size: 0.8571428571428571em;
    font-style: inherit;
    line-height: 1.3333333333333333;
    color: var(--ds-text-subtlest, var(--ds-text-subtlest, #6b778c));
    font-weight: 600;
    margin-top: 16px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    margin-top: 4px;
    -webkit-box-pack: baseline;
    -ms-flex-pack: baseline;
    -webkit-justify-content: baseline;
    justify-content: baseline;
    font-weight: normal;
    color: #6b778c;
  `;
  //   useEffect(() => {
  //   invoke("getText", { example: "my-invoke-variable" }).then((data) => {
  //     console.log(data);
  //     setData(data);
  //   });
  // }, []);
  const submitUpdates = () => {
    if (updateType && textareaValue) {
      setSucessMessage({
        icon: (
          <SuccessIcon
            primaryColor={token("color.icon.success", G300)}
            label="Success"
            size="small"
          />
        ),
        color: G300,
        message: "Submitted your updates !",
      });
      setUpdateType(null);
      setTextAreaValue("");
    } else {
      setSucessMessage({
        icon: (
          <ErrorIcon
            label="Error"
            primaryColor={token("color.icon.danger", R400)}
            size="small"
          />
        ),
        color: R400,
        message: "Error in submission of updates, please try again later!",
      });
    }
  };
  return (
    <div className="App container text-start">
      <div
        className="text-center"
        style={{ fontWeight: "600", color: "#5E6C84" }}
      >
        My Updates
      </div>
      <div style={{ marginTop: "10px" }}>
        <Select
          inputId="compare-with-selector"
          onChange={(value) => setUpdateType(value)}
          value={updateType}
          className="updates-select"
          classNamePrefix="user-updates-select"
          placeholder="Select update type..."
          options={[
            { label: "What did I work on yesterday?", value: "0" },
            { label: "What am I working on today?", value: "1" },
            { label: "What issues are blocking me?", value: "2" },
          ]}
        />
      </div>

      <TextArea
        className="mt-2 background-grey"
        appearance="subtle"
        resize="vertical"
        maxHeight="20vh"
        name="area"
        placeholder="Brief about your updates for this issue here..."
        value={textareaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
      />
      <HelperMessage style={{ color: successMessage.color }}>
        {successMessage.icon}
        {successMessage.message}
      </HelperMessage>
      <div className="d-flex justify-content-center mt-2">
        <Button appearance="primary" onClick={submitUpdates}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
