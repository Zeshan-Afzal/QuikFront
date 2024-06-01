import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ActivationPage() {
  const { userToken } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const activateAccount = async () => {
      const navigate = useNavigate();
      if (userToken) {
        console.log(userToken);
        try {
          const res = await fetch("http://localhost:3000/api/user/activation", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({ userToken }),
          });

          const data = await res.json();
          if (!data.success) {
            setError(true);
            console.log(data);
            return;
          }
          console.log(data);
          navigate("/");
        } catch (error) {
          setError(true);
          console.log(error);
        }
      }
    };
    activateAccount();
  }, [userToken]);

  return <div>{error ? "token expired" : "account has been activated"}</div>;
}

export default ActivationPage;
