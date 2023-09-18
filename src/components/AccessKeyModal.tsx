import React, { useState } from "react";

interface User {
  name: string;
  email: string;
  isPotentialEmployer: boolean;
}

const AccessModal = () => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    isPotentialEmployer: false,
  });

  const composeEmail = () => {
    const userType = user.isPotentialEmployer
      ? "am a potential employer"
      : "just looking around";
    const subject = "Resume Application request";
    const body = `Hi,  \n I'm ${user.name} I'd like to request a to the application I'm ${userType}. My email ${user.email} is the email I'd like to use for access.\n ***You will be sent an email once apporved and have access for 24 hours. `;

    const mailto = `mailto:${user.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <>
      <div className="">
        <h1>Request Access</h1>
        <p>
          To experience the full application you'll need access. request access
          below
        </p>
        <p>Enter your name below:</p>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <p>Enter your email below:</p>
        <input
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <p>Are you a potential employer?</p>
        <input
          type="checkbox"
          checked={user.isPotentialEmployer}
          onChange={(e) =>
            setUser({ ...user, isPotentialEmployer: e.target.checked })
          }
        />

        <button onClick={composeEmail}>Request Access</button>
      </div>
    </>
  );
};

export default AccessModal;
