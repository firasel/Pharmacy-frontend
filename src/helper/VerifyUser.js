import API from "../api/AxiosInstance";

const VerifyUser = (setIsLoggedIn, router) => {
  API.get("/user/verify", {
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    },
    withCredentials: true,
  })
    .then((response) => {
      if (response?.data?.status) {
        setIsLoggedIn(true);
      } else {
        router.push("/signin");
      }
    })
    .catch((err) => {
      router.push("/signin");
    });
};

export default VerifyUser;
