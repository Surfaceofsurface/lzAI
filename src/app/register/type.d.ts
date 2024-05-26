interface StepOneRef {
  getAccount(): string;
  getPsw(): string;
}

interface StepOneProps {
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
