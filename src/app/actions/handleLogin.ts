"use server";
const LOGIN_NO_USR = 1;
const LOGIN_E_PSW = 2;
const LOGIN_E_NET = 3;
const LOGIN_INIT = 4;
export async function handleLogin(prevState: LOGIN_RES, formData: FormData) {
  const rawFormData = {
    account: formData.get("account"),
    password: formData.get("psw"),
  };
  const res: LOGIN_RES = await fetch(
    "http://121.196.237.175:61087/api/user/login",
    {
      method: "POST",
      body: JSON.stringify(rawFormData),
      headers: new Headers({ "Content-Type": "application/json" }),
    }
  )
    .then(async (res) => {
      if (res.status === 201) {
        return res.json();
      } else {
        throw await res.text();
      }
    })
    .then((body: UserLoginRes) => {
      return { ok: true, payload: body } as LOGIN_WHEN_OK;
    })
    .catch((e: string) => {
      console.log(e);
      if (e === "password error") return { ok: false, cause: LOGIN_E_PSW };
      else if (e === "no user") return { ok: false, cause: LOGIN_NO_USR };
      else return { ok: false, cause: LOGIN_E_NET };
    });
  return res;
}
