import BackButton from "Components/General/BackButton";
import Dropdown from "Components/Scouting/Dropdown";
import Numpad from "Components/Scouting/Numpad";
import Comment from "Components/Scouting/Comment";
import useTemplate from "Hooks/useTemplate";
import React, { useRef, useState } from "react";
import "./PitScout.css";
import WideButton from "Components/General/WideButton";
import FileUpload from "Components/Scouting/FileUpload";

function PitScout(props) {
  let [template, setTemplate] = useTemplate("pitTemplate");
  let [submitted, setSubmitted] = useState(false);
  const imageRef = useRef(null);

  let submitForm = async () => {
    setSubmitted(true);
    try {
      let response = await fetch(
        `${process.env.REACT_APP_SERVER_IP}/pit/submitForm`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: props.location.data[1],
            team: props.location.data[0],
            response: template,
          }),
        }
      );
      let data = await response.json();
      let id = data._id;

      const formData = new FormData();
      formData.append("image", imageRef.current.files[0]);

      await fetch(`${process.env.REACT_APP_SERVER_IP}/pit/${id}/image`, {
        method: "POST",
        body: formData,
      });
    } catch (e) {
      alert("Failed! Try again");
    }

    props.history.push("/");
  };

  return (
    <div className="PitScout">
      <BackButton />
      <h1>Pit Scout</h1>
      {submitted ? <h1>Loading...</h1> : <></>}
      {template.map((question, i) => {
        switch (question.type) {
          case "dropdown":
            return (
              <Dropdown
                title={question.title}
                options={question.options}
                key={i}
                i={i}
                onInput={setTemplate}
              />
            );
          case "numpad":
            return (
              <Numpad
                key={i}
                title={question.title}
                i={i}
                onInput={setTemplate}
              />
            );
          case "shortcomment":
            return (
              <Comment
                key={i}
                onInput={setTemplate}
                i={i}
                rows={1}
                title={question.title}
              />
            );
          case "comment":
            return (
              <Comment
                key={i}
                onInput={setTemplate}
                i={i}
                rows={3}
                title={question.title}
              />
            );
          case "yesno":
            return (
              <Dropdown
                title={question.title}
                i={i}
                options={["Yes", "No"]}
                key={i}
                onInput={setTemplate}
              />
            );
          case "fileupload":
            return (
              <FileUpload
                title={question.title}
                key={i}
                ref={imageRef}
              ></FileUpload>
            );
          default:
            return null;
        }
      })}

      <WideButton
        className="subButton"
        onClick={submitForm}
        disabled={submitted}
      >
        Submit!
      </WideButton>
    </div>
  );
}

export default PitScout;
