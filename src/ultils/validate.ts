import { User } from "../types/user";

type Error = {
  [key: string]: string;
};

export const validate = (data: User) => {
  const errors: Error = {};

  if (!data.name) {
    errors["name"] = "o nome é obrigatório";
  }

  if (!data.email) {
    errors["email"] = "o email é obrigatório";
  }

  if (!data.name) {
    errors["agree"] = "Você precisa concordar";
  }
  return errors;
};
