// notion pageId값 변환
export const convertToUUID = (input: string) => {
  if (input.length !== 32) {
    throw new Error('Input must be a 32-character string.');
  }

  return input.replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5');
};
