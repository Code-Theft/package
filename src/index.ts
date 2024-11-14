const parseEnum = (enumText: string): string => {
  if (enumText) {
    return enumText
      ?.split("_")
      ?.map(
        (word) => word?.charAt(0)?.toUpperCase() + word?.slice(1)?.toLowerCase()
      )
      ?.join(" ");
  }
  return "";
};

export default parseEnum;
