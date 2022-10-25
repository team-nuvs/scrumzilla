import React, { useState } from "react";

import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css";
import "./notes.css";

const RichText = (props) => {
  const toolbarOptions = [
    ["bold", "italic", "underline"], // toggled buttons
    ["code-block"],

    // [{ header: 4 }, { header: 5 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    // [{ script: "sub" }, { script: "super" }], // superscript/subscript
    // [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    // [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large"] }], // custom dropdown
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],

    // [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    // [{ font: [] }],
    // [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  const options = {
    modules: {
      toolbar: toolbarOptions,
    },
    placeholder:"Add your notes here...",
    theme: "snow",
  };
  const { quill, quillRef } = useQuill(options);
  const [quillUpdated, setQuillUpdated] = useState(false);

  React.useEffect(() => {
    if (quill) {
      quill.root.innerHTML = props?.defaultText?`${props?.defaultText}`:``; 
      quill.blur();
      quill.on("text-change", () => {
        console.log("Text change!");
        props?.onChange(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  return (
    <div style={{ height: 300, border: "none" }}>
      <div ref={quillRef} />
    </div>
  );
};

export default RichText;
