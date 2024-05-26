"use server";
import { redirect } from "next/navigation";
export async function handleLogin(formData: FormData) {
  const rawFormData = {
    account: formData.get("account"),
    password: formData.get("psw"),
  };
  return await fetch("http://121.196.237.175:61087/api/user/login", {
    method: "POST",
    body: JSON.stringify(rawFormData),
  })
    .then((res) => {
      if (res.status === 201) {
        return redirect("/");
      }
      return { msg: "login failed" };
    })
    .catch((e) => {
      return { msg: "login failed" };
    });
}
