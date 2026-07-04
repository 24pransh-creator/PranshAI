const loginUser = async () => {
  try {
    const res = await axios.post(
      "https://pranshai.onrender.com/api/auth/login",
      {
        email,
        password,
      }
    );

    console.log(res.data);

    alert(JSON.stringify(res.data, null, 2));

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    alert("Login Successful");
    window.location.reload();
  } catch (err) {
    alert(err.response?.data?.message || "Login Failed");
  }
};
