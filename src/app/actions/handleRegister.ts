"use server";

const INIT = 1;
const CODE_OK = 2;
const CODE_UNKNOWN = 3;
const CODE_USR_E = 4;
const REG_OK = 5;
const REG_CODE_E = 6;
const REG_UNKNOWN = 7;

export async function handleRegister(
  prevState: { msg: number },
  formData: FormData
) {
  console.log(prevState.msg);
  if (prevState.msg === CODE_OK) {
    //注册
    const rawFormData = {
      account: formData.get("account"),
      password: formData.get("psw"),
      emailcode: formData.get("vrfCode"),
    };
    return await fetch("http://121.196.237.175:61087/api/user/register", {
      method: "POST",
      body: JSON.stringify(rawFormData),
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then(async (res) => {
        if (res.status === 201) return { msg: REG_OK };
        throw await res.text();
      })
      .catch((e: string | Error) => {
        if (e === "code error") return { msg: REG_CODE_E };
        return { msg: REG_UNKNOWN };
      });
  } else {
    //发送验证码

    const rawFormData = {
      account: formData.get("account"),
    };
    return await fetch("http://121.196.237.175:61087/api/user/sendcode", {
      method: "POST",
      body: JSON.stringify(rawFormData),
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then(async (res) => {
        if (res.status === 201) return { msg: CODE_OK };

        throw await res.text();
      })
      .catch((e: string | Error) => {
        if (e === "user exist") return { msg: CODE_USR_E };
        return { msg: CODE_UNKNOWN };
      });
  }
}
