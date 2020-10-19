module.exports = {
  success(data: any) {
    return {
      code: 200,
      message: 'success',
      data,
    };
  },
  failure(reason: string, code: number) {
    return {
      code,
      message: reason,
    };
  },
};
