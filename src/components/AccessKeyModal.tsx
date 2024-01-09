import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    const modalOpen =
      document.querySelector<HTMLDialogElement>("[data-open-modal]");
    const modalClose = document.querySelector("[data-close-modal]");

    const timer = setTimeout(() => {
      modalOpen?.showModal();
      document.body.classList.add("overflow-y-hidden");
    }, 3000);

    const handleClose = () => {
      modalOpen?.close();
      document.body.classList.remove("overflow-y-hidden");
    };

    modalClose?.addEventListener("click", handleClose);

    return () => {
      clearTimeout(timer);
      modalClose?.removeEventListener("click", handleClose);
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  const composeEmail = () => {
    const userType = user.isPotentialEmployer
      ? "am a potential employer"
      : "just looking around";
    const subject = "Resume Application request";
    const body = `Hi,  \n I'm ${user.name} I'd like to request a to the application I'm ${userType}. My email ${user.email} is the email I'd like to use for access.\n ***You will be sent an email once apporved and have access for 24 hours. `;

    const mailto = `mailto:${user.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <>
      <dialog data-open-modal="open">
        <div className="text-center flex flex-col justify-between h-full">
          <div>
            <h1 className="text-8xl text-primary font-extrabold text-center mb-9">
              Request Access
            </h1>
            <p className="text-center text-xl my-9">
              To experience the full application you'll need access. request
              access below
            </p>
            <p className="my-4 text-xl">Enter your name below:</p>
            <input
              className="block mx-auto my-5 border border-secondary rounded-lg w-2/5"
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <p className="my-4 text-xl">Enter your email below:</p>
            <input
              className="block mx-auto my-5 border border-secondary rounded-lg w-2/5"
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <p className="my-5 text-lg">Are you a potential employer?</p>
            <input
              className="block mx-auto my-5"
              type="checkbox"
              checked={user.isPotentialEmployer}
              onChange={(e) =>
                setUser({ ...user, isPotentialEmployer: e.target.checked })
              }
            />
          </div>

          <div className="mb-7">
            <button
              className="border border-secondary bg-accent block mx-auto my-5 rounded-md px-6"
              onClick={composeEmail}
            >
              Request Access
            </button>

            <button
              data-close-modal
              className="border border-secondary bg-accent rounded-md px-6"
            >
              No thanks I just want to look around
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AccessModal;
