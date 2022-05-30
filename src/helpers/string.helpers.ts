export const removeSizeonName = (fullName: string, identificator: string): string => {
  const onlyName = fullName.split(identificator).shift() as string;

  return onlyName;
};
