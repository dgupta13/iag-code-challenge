const NewPswrdController = require("../../controllers/newPasswordController");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockRequest = (sessionData) => {
  return {
    session: { data: sessionData },
  };
};

describe("NewPasswordController", () => {
  it("should have a newPassword function", () => {
    expect(typeof NewPswrdController.newPassword).toBe("function");
  });

  it("should have a getPassword function", () => {
    expect(typeof NewPswrdController.getPassword).toBe("function");
  });

  it("getPassword function should return string", () => {
    const res = mockResponse();
    const req = mockRequest();
    NewPswrdController.newPassword(req, res);
    expect(typeof NewPswrdController.getPassword()).toBe("string");
  });

  it("newPassword function must return object", () => {
    const res = mockResponse();
    const req = mockRequest();
    NewPswrdController.newPassword(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toBeCalledWith(
      expect.objectContaining({
        hint: expect.any(String),
      })
    );
  });
});
