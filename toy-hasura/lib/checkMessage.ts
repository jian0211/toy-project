const checkMessage = (message: string) => (arr: any[]) => {
  let status;
  if (arr.length) {
    arr.map((error: any) => {
      if (error.message.inclueds(message)) {
        status = true;
      }
    });
  }
  return status;
};

export default checkMessage;
