interface AccountAndPswRef {
  getAccount(): string;
  getPsw(): string;
}

interface AccountAndPswProps {
  setFormMsg: Dispatch<SetStateAction<string>>;
  display: boolean;
  onPswInput?: (
    psw: FormEvent<HTMLInputElement>,
    setPswState: Dispatch<SetStateAction<FormState>>
  ) => any;
  onAccountInput?: (
    account: FormEvent<HTMLInputElement>,
    setAccoutState: Dispatch<SetStateAction<FormState>>
  ) => any;
}
