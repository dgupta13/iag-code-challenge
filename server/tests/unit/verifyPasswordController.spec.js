const VerifyPswrdController = require("../../controllers/verifyPasswordController");
const newPswrdController = require("../../controllers/newPasswordController");

newPswrdController.getPassword = jest.fn().mockReturnValueOnce("67485783");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockRequest = (sessionData) => {
  return {
    body: sessionData,
  };
};

describe("VerifyPasswordController", () => {
  it("should have a verifyPassword function", () => {
    expect(typeof VerifyPswrdController.verifyPassword).toBe("function");
  });

  it("verifyPassword function must return object", () => {
    const res = mockResponse();
    const req = mockRequest({
      hint: "12345",
      answer: "8574733",
    });
    VerifyPswrdController.verifyPassword(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toBeCalledWith(
      expect.objectContaining({
        hint: expect.any(String),
        answer: expect.any(String),
        correct: expect.any(Boolean),
      })
    );
  });
});
