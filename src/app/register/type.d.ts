interface StepOneRef {
  getAccount(): string;
  getPsw(): string;
}

interface StepOneProps {
  setFormMsg: Dispatch<SetStateAction<string>>;
  display: boolean;
}
