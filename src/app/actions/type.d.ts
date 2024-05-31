type UserLoginRes = {
  account: string;
  avatar: string;
  id: number;
  nickname: string;
  token: string;
};
const LOGIN_NO_USR = 1;
const LOGIN_E_PSW = 2;
const LOGIN_E_NET = 3;
const LOGIN_INIT = 4;

type LOGIN_WHEN_ERR = {
  ok: false;
  cause: number;
};
type LOGIN_WHEN_OK = {
  ok: true;
  payload: UserLoginRes;
};
type LOGIN_RES = LOGIN_WHEN_ERR | LOGIN_WHEN_OK;
type REGISTER_RES = { msg: 5; payload: UserLoginRes } | { msg: number };
