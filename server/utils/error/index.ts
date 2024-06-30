export const handleError = (message: string, error?: unknown) => {
  if (error instanceof Error) throw new Error(error.message);
  throw new Error(message);
};
