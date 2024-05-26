"use server";

const INIT = 1;
const CODE_OK = 2;
const CODE_UNKNOWN = 3;
const REG_OK = 4;
const REG_UNKNOWN = 5;
export async function handleRegister(
  prevState: { msg: number },
  formData: FormData
) {
  // if (prevState.msg === CODE_OK) {
  //   //注册
  //   const rawFormData = {
  //     account: formData.get("account"),
  //     password: formData.get("psw"),
  //     emailcode: formData.get("vrfCode"),
  //   };
  //   return await fetch("http://121.196.237.175:61087/api/user/sendcode", {
  //     method: "POST",
  //     body: JSON.stringify(rawFormData),
  //   })
  //     .then((res) => {
  //       if (res.status === 201) {
  //         return { msg: REG_OK };
  //       }
  //       return { msg: REG_UNKNOWN };
  //     })
  //     .catch(() => {
  //       return { msg: REG_UNKNOWN };
  //     });
  // } else {
  //   //发送验证码
  //   const rawFormData = {
  //     account: formData.get("account"),
  //   };
  //   console.log(rawFormData);
  //   return await fetch("http://121.196.237.175:61087/api/user/sendcode", {
  //     method: "POST",
  //     body: JSON.stringify(rawFormData),
  //   })
  //     .then((res) => {
  //       console.log("send");
  //       if (res.status === 201) {
  //         return { msg: CODE_OK };
  //       } else {
  //         return { msg: CODE_UNKNOWN };
  //       }
  //     })
  //     .catch(() => {
  //       return { msg: CODE_UNKNOWN };
  //     });
  // }

  await new Promise((ok) => {
    setTimeout(() => {
      ok(1);
    }, 1000);
  });
  return {
    msg: Math.random() > 0.5 ? CODE_OK : CODE_UNKNOWN,
  };
}
