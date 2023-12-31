import React from "react";

interface MessageComponentProps {
  selectedLevel: string | null;
}

// TODO: message Needs to be updated to show some resources in order for user to better educate themselves

const MessageComponent: React.FC<MessageComponentProps> = ({ selectedLevel }) => {
  const renderMessage = () => {
    switch (selectedLevel) {
      case "highSchool":
        return "I strongly recomend you leave the completion of your high school diploma off your resume.";
      case "someCollege":
        return "I strongly recomend that you leave uncompleted college education off your resume."; 
      default:
        return null;
    }
    

  };

  return (
    <div>
      {renderMessage()}
    </div>
  );
};

export default MessageComponent;
