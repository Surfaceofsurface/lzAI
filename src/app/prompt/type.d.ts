type PromptListFromApi = { id: number; url: string }[];

type PromptListDetailFromApi = {
  id: number;
  base: {
    id: number;
    name: string;
    type: string;
    version: string;
  };
  loras: {
    id: number;
    name: string;
    type: string;
    version: string;
  }[];
  negative_prompt: string;
  prompt: string;
  url: string;
  user: {
    id: number;
    nickname: string;
    avatar: string;
  };
};
