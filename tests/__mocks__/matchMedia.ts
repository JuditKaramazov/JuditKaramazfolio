const matchMediaMock = Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest
      .fn()
      .mockImplementationOnce((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      }))
      .mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
    }))
})
  
export default matchMediaMock
