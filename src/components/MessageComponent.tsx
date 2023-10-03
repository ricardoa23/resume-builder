import React from "react";

interface MessageComponentProps {
  selectedLevel: string | null;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ selectedLevel }) => {
  const renderMessage = () => {
    switch (selectedLevel) {
      case "highSchool":
        return "I strongly recomend you leave the completion of your high school diploma off your resume.";
      case "someCollege":
        return "I strongly recomend that you leave uncompleted college education off your resume."; 
      default:
        return "Default message";
    }
  };

  return (
    <div>
      {renderMessage()}
    </div>
  );
};

export default MessageComponent;
